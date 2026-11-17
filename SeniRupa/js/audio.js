/**
 * Audio Controller untuk Kuis Seni Rupa SD
 * Maskot: Ciko si Kuas Ajaib
 * Fitur:
 * 1. Web Speech Synthesis API (Text-to-Speech) Bahasa Indonesia (id-ID) untuk membaca soal & pilihan ramah anak SD.
 * 2. Web Audio API Synthesizer (Efek suara komik/kartun murni sintesis audio, 100% offline).
 */

class AudioController {
  constructor() {
    this.audioCtx = null;
    this.synth = window.speechSynthesis || null;
    this.soundEnabled = true;
    this.speechRate = 0.88; // Kecepatan bersahabat untuk anak SD
    this.indonesianVoice = null;
    this.isSpeaking = false;
    this.activeAudio = null;

    this.initAudioContext();
    this.initVoices();
  }

  initAudioContext() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    } catch (e) {
      console.warn("Web Audio API tidak didukung pada peramban ini.");
    }
  }

  ensureAudioContext() {
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  initVoices() {
    if (!this.synth) return;

    const loadVoices = () => {
      this.indonesianVoice = this.getIndonesianVoice();
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  getIndonesianVoice() {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || !voices.length) return null;

    const naturalVoice = voices.find(v => 
      v.lang && (v.lang.toLowerCase() === 'id-id' || v.lang.toLowerCase() === 'id') &&
      (v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('online') || v.name.toLowerCase().includes('google'))
    );
    if (naturalVoice) return naturalVoice;

    const idVoice = voices.find(v => 
      v.lang && (v.lang.toLowerCase() === 'id-id' || v.lang.toLowerCase() === 'id' || v.lang.toLowerCase().startsWith('id'))
    );
    if (idVoice) return idVoice;

    const nameVoice = voices.find(v => 
      v.name && (
        v.name.toLowerCase().includes('indonesia') || 
        v.name.toLowerCase().includes('gadis') || 
        v.name.toLowerCase().includes('ardi') || 
        v.name.toLowerCase().includes('andika')
      )
    );
    return nameVoice || null;
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (!this.soundEnabled) {
      this.stopSpeech();
    }
    return this.soundEnabled;
  }

  chunkText(text, maxLength = 150) {
    if (!text) return [];
    const parts = text.match(/[^.?!:;]+[.?!:;]+|[^.?!:;]+$/g) || [text];
    const chunks = [];
    let current = "";

    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      if ((current ? current + " " + trimmed : trimmed).length <= maxLength) {
        current = current ? current + " " + trimmed : trimmed;
      } else {
        if (current) {
          chunks.push(current);
          current = "";
        }
        if (trimmed.length <= maxLength) {
          current = trimmed;
        } else {
          const words = trimmed.split(/\s+/);
          for (const word of words) {
            if ((current ? current + " " + word : word).length <= maxLength) {
              current = current ? current + " " + word : word;
            } else {
              if (current) chunks.push(current);
              current = word;
            }
          }
        }
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  // Text-To-Speech: Membaca teks soal Seni Rupa dengan suara asli orang Indonesia
  speakText(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeech();
    this.ensureAudioContext();

    // Normalisasi pelafalan istilah Seni Rupa untuk anak-anak
    let cleanText = text
      .replace(/\s+/g, " ")
      .replace(/A\./g, "Pilihan A:")
      .replace(/B\./g, "Pilihan B:")
      .replace(/C\./g, "Pilihan C:")
      .replace(/D\./g, "Pilihan D:")
      .replace(/2D/g, "Dua Dimensi")
      .replace(/3D/g, "Tiga Dimensi")
      .replace(/SD/g, "Es De")
      .replace(/origami/gi, "o-ri-ga-mi")
      .replace(/kolase/gi, "ko-la-se")
      .replace(/mozaik|mosaik/gi, "mo-sa-ik")
      .replace(/montase/gi, "mon-ta-se")
      .replace(/relief/gi, "re-li-ef")
      .replace(/pointilis/gi, "poin-ti-lis")
      .replace(/dussel/gi, "du-sel")
      .replace(/aquarel/gi, "ak-wa-rel")
      .replace(/focal point/gi, "fo-kal poin")
      .replace(/center of interest/gi, "sen-ter of in-te-rest")
      .replace(/cross-hatching/gi, "kros he-cing")
      .replace(/upcycling/gi, "ap-say-kling")
      .replace(/packaging/gi, "pe-ke-jing")
      .replace(/woodcut/gi, "wud-kat")
      .replace(/fauna/gi, "faw-na")
      .replace(/flora/gi, "flo-ra")
      .replace(/simetris/gi, "si-me-tris")
      .replace(/asimetris/gi, "a-si-me-tris")
      .replace(/geometris/gi, "ge-o-me-tris");

    this.isSpeaking = true;
    if (onStart) onStart();

    const chunks = this.chunkText(cleanText, 150);
    if (!chunks.length) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    let chunkIndex = 0;
    const playNextChunk = () => {
      if (!this.isSpeaking || chunkIndex >= chunks.length) {
        this.isSpeaking = false;
        this.activeAudio = null;
        if (onEnd) onEnd();
        return;
      }

      const chunk = chunks[chunkIndex++];
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=id&client=tw-ob&q=${encodeURIComponent(chunk)}`;
      const audio = new Audio(url);
      this.activeAudio = audio;

      audio.onended = () => {
        if (this.isSpeaking) {
          playNextChunk();
        }
      };

      audio.onerror = () => {
        this.fallbackWebSpeech(chunks.slice(chunkIndex - 1).join(" "), onEnd);
      };

      audio.play().catch(() => {
        this.fallbackWebSpeech(chunks.slice(chunkIndex - 1).join(" "), onEnd);
      });
    };

    playNextChunk();
  }

  speakIndonesian(text, onStart, onEnd) {
    this.speakText(text, onStart, onEnd);
  }

  fallbackWebSpeech(text, onEnd) {
    if (!this.synth) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const idVoice = this.getIndonesianVoice();
    if (!idVoice) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = this.speechRate;
    utterance.pitch = 1.05;
    utterance.voice = idVoice;

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    }
  }

  stopSpeech() {
    this.isSpeaking = false;
    if (this.activeAudio) {
      try {
        this.activeAudio.pause();
        this.activeAudio.currentTime = 0;
        this.activeAudio.src = "";
      } catch (e) {}
      this.activeAudio = null;
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
  }

  // =========================================================================
  // SINTESIS EFEK SUARA KARTUN / KOMIK (WEB AUDIO API MURNI)
  // =========================================================================

  playClick() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const now = this.audioCtx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.06);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {}
  }

  playOptionSelect() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const now = this.audioCtx.currentTime;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  playCorrect() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Akor Mayor Ceria)
      const now = this.audioCtx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const noteStart = now + (idx * 0.07);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.18, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.16);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + 0.16);
      });
    } catch (e) {}
  }

  playWrong() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const now = this.audioCtx.currentTime;

      osc.type = "sawtooth";
      // Efek kartun boing melorot ke bawah yang ramah anak
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.28);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {}
  }

  playStarDing(index = 0) {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      const baseFreqs = [587.33, 659.25, 783.99, 880.00, 1046.50]; // D5, E5, G5, A5, C6
      const freq = baseFreqs[Math.min(index, baseFreqs.length - 1)];
      const now = this.audioCtx.currentTime;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  playTrophyFanfare() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      // Fanfare Kemenangan Nada Riang Ceria
      const melody = [
        { f: 523.25, d: 0.12, t: 0.00 }, // C5
        { f: 659.25, d: 0.12, t: 0.12 }, // E5
        { f: 783.99, d: 0.14, t: 0.24 }, // G5
        { f: 1046.50, d: 0.38, t: 0.40 } // C6
      ];
      const now = this.audioCtx.currentTime;

      melody.forEach(item => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const startTime = now + item.t;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(item.f, startTime);

        gain.gain.setValueAtTime(0.22, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + item.d);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + item.d);
      });
    } catch (e) {}
  }

  playConfettiPop() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    try {
      const now = this.audioCtx.currentTime;
      // Letupan konfeti ceria
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(650, now + 0.1);

      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }
}
