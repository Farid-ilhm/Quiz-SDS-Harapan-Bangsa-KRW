/**
 * Audio Controller untuk Kuis TIK SD Petualangan Robot Chippy
 * Fitur:
 * 1. Web Speech Synthesis API (Text-to-Speech) Bahasa Indonesia (id-ID) untuk membacakan pertanyaan & opsi secara ramah.
 * 2. Web Audio API Synthesizer (Efek suara komik/kartun murni sintesis audio, 100% offline tanpa unduhan aset eksternal).
 */

class AudioController {
  constructor() {
    this.audioCtx = null;
    this.synth = window.speechSynthesis || null;
    this.soundEnabled = true;
    this.speechRate = 0.88; // Kecepatan bicara bersahabat untuk anak SD
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

  // Text-To-Speech: Membaca dengan suara asli orang Indonesia (Mbak Google & Suara Alami)
  speakText(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeech();
    this.ensureAudioContext();

    // Normalisasi pelafalan istilah TIK untuk anak-anak
    let cleanText = text
      .replace(/CPU/g, "Ce Pe U")
      .replace(/TIK/g, "Te I Ka")
      .replace(/USB/g, "U Es Be")
      .replace(/RAM/g, "Rem")
      .replace(/ROM/g, "Rom")
      .replace(/CD/g, "Se De")
      .replace(/DVD/g, "De Ve De")
      .replace(/WiFi|Wi-Fi/gi, "Way Fay")
      .replace(/Mouse/gi, "Maus")
      .replace(/Keyboard/gi, "Kibor")
      .replace(/Download/gi, "Daunlod")
      .replace(/Upload/gi, "Aplot")
      .replace(/Online/gi, "Onlen")
      .replace(/Offline/gi, "Oflen")
      .replace(/Email|E-mail/gi, "Imel")
      .replace(/Save/gi, "Sef")
      .replace(/Print/gi, "Pring")
      .replace(/Bold/gi, "Bol")
      .replace(/Italic/gi, "Italik")
      .replace(/Underline/gi, "Underlen")
      .replace(/PowerPoint/gi, "Pauer Poin")
      .replace(/Word/gi, "Werd")
      .replace(/Paint/gi, "Pen")
      .replace(/Scratch/gi, "Skret")
      .replace(/Hardware/gi, "Hardwer")
      .replace(/Software/gi, "Softwer")
      .replace(/Password/gi, "Paswer")
      .replace(/Browser/gi, "Brouser")
      .replace(/Google/gi, "Gugol");

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
  // Web Audio Synthesizer (Efek Suara Kartun & Komik Murni)
  // =========================================================================

  playClick() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(780, this.audioCtx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.07);
  }

  playCorrect() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // Nada C5, E5, G5, C6 (Kemenangan Ceria)

    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + (idx * 0.08));

      gain.gain.setValueAtTime(0.15, now + (idx * 0.08));
      gain.gain.exponentialRampToValueAtTime(0.001, now + (idx * 0.08) + 0.22);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + (idx * 0.08));
      osc.stop(now + (idx * 0.08) + 0.25);
    });
  }

  playWrong() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // Boing kartun menurun lembut ramah anak
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.32);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // Suara Robot Chippy yang lucu dan unik
  playRobotBleep() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;
    const freqs = [587.33, 880, 440, 1174.66]; // Nada D5, A5, A4, D6
    
    freqs.forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(freq, now + (i * 0.06));

      gain.gain.setValueAtTime(0.07, now + (i * 0.06));
      gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.06) + 0.07);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + (i * 0.06));
      osc.stop(now + (i * 0.06) + 0.08);
    });
  }

  // Fanfare Juara saat Kuis Selesai
  playVictory() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;
    // C4, E4, G4, C5, E5, G5 tahan
    const fanfare = [
      { f: 261.63, d: 0.12, t: 0 },
      { f: 329.63, d: 0.12, t: 0.13 },
      { f: 392.00, d: 0.12, t: 0.26 },
      { f: 523.25, d: 0.24, t: 0.39 },
      { f: 659.25, d: 0.20, t: 0.65 },
      { f: 783.99, d: 0.65, t: 0.86 }
    ];

    fanfare.forEach(item => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(item.f, now + item.t);

      gain.gain.setValueAtTime(0.18, now + item.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + item.t + item.d);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + item.t);
      osc.stop(now + item.t + item.d + 0.05);
    });
  }
}

// Instance global
window.quizAudio = new AudioController();
