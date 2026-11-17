/**
 * Kuis Bahasa Inggris SD - Modul Audio & Suara
 * 1. Web Audio API Synth: Suara interaktif (klik, benar, salah, dan fanfare piala)
 * 2. Web Speech API (TTS): Membacakan kosakata & soal Bahasa Inggris dengan lafal jelas untuk anak SD
 */

const SoundService = {
  soundEnabled: true,
  audioCtx: null,
  englishVoice: null,

  activeAudio: null,
  isSpeaking: false,
  indonesianVoice: null,

  init() {
    // Muat preferensi suara dari localStorage jika tersedia
    const saved = localStorage.getItem('english_quiz_sound');
    if (saved !== null) {
      this.soundEnabled = saved === 'true';
    }

    // Inisialisasi AudioContext saat ada interaksi pengguna
    const unlockAudio = () => {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    };

    window.addEventListener('click', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });

    // Inisialisasi Voice untuk Text-to-Speech
    this.initVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoices();
      };
    }
  },

  initVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritaskan suara en-US atau en-GB yang natural
    this.englishVoice = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB') ||
                        voices.find(v => v.lang.startsWith('en')) || null;
    this.indonesianVoice = voices.find(v => v.lang && (v.lang.toLowerCase().startsWith('id') || v.lang.toLowerCase().includes('indonesia'))) || null;
  },

  initEnglishVoice() {
    this.initVoices();
  },

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('english_quiz_sound', String(this.soundEnabled));
    if (this.soundEnabled) {
      this.playClick();
    }
    return this.soundEnabled;
  },

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  // Efek Suara: Klik Tombol Komik (Pop Cerah)
  playClick() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {
      // Abaikan jika audio di-block oleh browser
    }
  },

  // Efek Suara: Jawaban Benar (Melodi Lonceng Gembira)
  playCorrect() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.09);
        osc.stop(ctx.currentTime + idx * 0.09 + 0.3);
      });
    } catch (e) {}
  },

  // Efek Suara: Jawaban Salah (Nada Lembut dan Mendidik, tidak menakuti anak)
  playWrong() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(210, ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.24);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  },

  // Efek Suara: Fanfare Kemenangan (Piala Emas & Confetti)
  playFanfare() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const chords = [
        { f: 523.25, t: 0.00, d: 0.16 }, // C5
        { f: 523.25, t: 0.16, d: 0.16 }, // C5
        { f: 523.25, t: 0.32, d: 0.16 }, // C5
        { f: 659.25, t: 0.48, d: 0.36 }, // E5
        { f: 587.33, t: 0.84, d: 0.18 }, // D5
        { f: 783.99, t: 1.02, d: 0.70 }  // G5
      ];

      chords.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, ctx.currentTime + n.t);

        gain.gain.setValueAtTime(0, ctx.currentTime + n.t);
        gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + n.t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.t + n.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + n.t);
        osc.stop(ctx.currentTime + n.t + n.d + 0.02);
      });
    } catch (e) {}
  },

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
  },

  // Fitur Membacakan Soal / Kosakata Bahasa Inggris (Text-to-Speech)
  speakEnglish(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeaking();
    this.isSpeaking = true;
    if (onStart) onStart();

    // Coba gunakan Google TTS English untuk pelafalan native
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);
    this.activeAudio = audio;

    audio.onended = () => {
      this.isSpeaking = false;
      this.activeAudio = null;
      if (onEnd) onEnd();
    };

    audio.onerror = () => {
      this.fallbackWebSpeechEnglish(text, onEnd);
    };

    audio.play().catch(() => {
      this.fallbackWebSpeechEnglish(text, onEnd);
    });
  },

  fallbackWebSpeechEnglish(text, onEnd) {
    if (!('speechSynthesis' in window)) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    if (this.englishVoice) {
      utterance.voice = this.englishVoice;
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    }
  },

  // Fitur Membacakan teks dalam Bahasa Indonesia asli jika dibutuhkan
  speakIndonesian(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeaking();
    this.isSpeaking = true;
    if (onStart) onStart();

    const chunks = this.chunkText(text, 150);
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
        this.fallbackWebSpeechIndonesian(chunks.slice(chunkIndex - 1).join(" "), onEnd);
      };

      audio.play().catch(() => {
        this.fallbackWebSpeechIndonesian(chunks.slice(chunkIndex - 1).join(" "), onEnd);
      });
    };

    playNextChunk();
  },

  speakText(text, onStart, onEnd) {
    this.speakEnglish(text, onStart, onEnd);
  },

  fallbackWebSpeechIndonesian(text, onEnd) {
    if (!('speechSynthesis' in window)) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    if (!this.indonesianVoice) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    utterance.voice = this.indonesianVoice;

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    }
  },

  // Hentikan Pembacaan Suara
  stopSpeaking() {
    this.isSpeaking = false;
    if (this.activeAudio) {
      try {
        this.activeAudio.pause();
        this.activeAudio.currentTime = 0;
        this.activeAudio.src = "";
      } catch (e) {}
      this.activeAudio = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  },

  stopSpeech() {
    this.stopSpeaking();
  }
};

