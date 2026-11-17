/**
 * Audio Controller untuk Arena Kuis PJOK SD
 * Fitur:
 * 1. Web Speech Synthesis API (Text-to-Speech) Bahasa Indonesia (id-ID) untuk membacakan soal kuis ramah anak.
 * 2. Web Audio API Synthesizer (Efek suara kartun komik olahraga murni offline tanpa aset eksternal).
 */

class AudioController {
  constructor() {
    this.audioCtx = null;
    this.synth = window.speechSynthesis || null;
    this.soundEnabled = true;
    this.speechRate = 0.88; // Kecepatan nyaman dan jelas untuk anak SD
    this.speechPitch = 1.05; // Nada ceria ramah anak
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
      console.warn("Web Audio API belum didukung di peramban ini.");
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

  // Text-To-Speech: Membaca teks soal PJOK dengan suara asli orang Indonesia
  speakText(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeech();
    this.ensureAudioContext();

    // Normalisasi pelafalan istilah PJOK agar terdengar alami bagi anak-anak
    const cleanText = text
      .replace(/\s+/g, " ")
      .replace(/A\./g, "Pilihan A:")
      .replace(/B\./g, "Pilihan B:")
      .replace(/C\./g, "Pilihan C:")
      .replace(/D\./g, "Pilihan D:")
      .replace(/\bPJOK\b/g, "P J O K")
      .replace(/\bSD\b/g, "Sekolah Dasar")
      .replace(/\bP3K\b/g, "P 3 K")
      .replace(/\bPHBS\b/g, "P H B S")
      .replace(/\b3M\b/g, "Tiga M")
      .replace(/\bcm\b/g, "sentimeter")
      .replace(/\bkg\b/g, "kilogram");

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
    utterance.pitch = this.speechPitch;
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
  // WEB AUDIO API SYNTHESIZER (100% OFFLINE EFK SUARA KARTUN OLAHRAGA)
  // =========================================================================

  // Suara Klik Ringan Komik
  playClick() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }

  // Suara Sentuh Pilihan Jawaban
  playSelect() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, this.audioCtx.currentTime + 0.07);

    gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.07);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.07);
  }

  // Suara Jawaban Benar (Melodi Ceria Nada C5-E5-G5-C6)
  playCorrect() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      const startTime = this.audioCtx.currentTime + (idx * 0.08);
      const duration = 0.16;

      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  }

  // Suara Jawaban Salah (Komik Boing Ramah, tidak menakutkan anak)
  playWrong() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(280, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, this.audioCtx.currentTime + 0.28);

    gain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.28);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.28);
  }

  // Suara Peluit Wasit Sporty (Gimmick Khas Olahraga PJOK)
  playWhistle() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc1.type = "sine";
    osc2.type = "sine";

    osc1.frequency.setValueAtTime(2400, this.audioCtx.currentTime);
    osc2.frequency.setValueAtTime(2520, this.audioCtx.currentTime);

    // Modulasi getaran peluit
    const now = this.audioCtx.currentTime;
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.setValueAtTime(0.12, now + 0.08);
    gain.gain.setValueAtTime(0.25, now + 0.14);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  }

  // Suara Kilau Bintang (Twinkle Star Chime)
  playStar() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1318.51, this.audioCtx.currentTime); // E6
    osc.frequency.exponentialRampToValueAtTime(1760.00, this.audioCtx.currentTime + 0.15); // A6

    gain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.22);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.22);
  }

  // Suara Terompet Selebrasi Kemenangan (Fanfare Juara PJOK)
  playVictory() {
    if (!this.soundEnabled) return;
    this.ensureAudioContext();
    if (!this.audioCtx) return;

    const chords = [
      { f: 523.25, t: 0.00, d: 0.12 }, // C5
      { f: 523.25, t: 0.13, d: 0.12 }, // C5
      { f: 523.25, t: 0.26, d: 0.12 }, // C5
      { f: 659.25, t: 0.40, d: 0.25 }, // E5
      { f: 783.99, t: 0.68, d: 0.25 }, // G5
      { f: 1046.50, t: 0.96, d: 0.55 }  // C6 Panjang
    ];

    chords.forEach(c => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.value = c.f;

      const startTime = this.audioCtx.currentTime + c.t;
      gain.gain.setValueAtTime(0.24, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + c.d);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + c.d);
    });
  }
}
