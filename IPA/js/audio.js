/**
 * Audio Controller untuk Kuis IPA SD Petualangan Sains
 * Menyediakan:
 * 1. Web Speech Synthesis API (Text-to-Speech) Bahasa Indonesia (id-ID) untuk membaca soal & penjelasan
 * 2. Web Audio API Synthesizer (Efek suara kartun/komik tanpa file audio eksternal, 100% offline & instan)
 */

class AudioController {
  constructor() {
    this.audioCtx = null;
    this.synth = window.speechSynthesis || null;
    this.soundEnabled = true;
    this.speechRate = 0.88; // Tempo pengucapan ramah untuk anak-anak SD
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
      console.warn("Web Audio API tidak didukung browser ini.");
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

  // Text-To-Speech: Membaca teks soal & pilihan dengan suara asli orang Indonesia
  speakText(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeech();
    this.ensureAudioContext();

    // Sesuaikan istilah IPA agar diucapkan secara alami
    const cleanText = text
      .replace(/\s+/g, " ")
      .replace(/A\./g, "Pilihan A:")
      .replace(/B\./g, "Pilihan B:")
      .replace(/C\./g, "Pilihan C:")
      .replace(/D\./g, "Pilihan D:")
      .replace(/\bIPA\b/g, "I P A")
      .replace(/\bIPAS\b/g, "I P A S")
      .replace(/\bO2\b/g, "oksigen")
      .replace(/\bCO2\b/g, "karbon dioksida")
      .replace(/\bH2O\b/g, "air")
      .replace(/°C/g, " derajat Celsius")
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
    utterance.pitch = 1.08;
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

  // Efek Suara Komik Sintetis via Web Audio API

  // Suara Klik Tombol Komik (Pop Gelembung Lembut)
  playClick() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    const now = this.audioCtx.currentTime;
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(560, now + 0.08);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Suara Jawaban Benar (Melodi Lonceng Ceria Tiga Nada C-E-G)
  playCorrect() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const notes = [523.25, 659.25, 783.99]; // Nada C5, E5, G5
    const now = this.audioCtx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      const startAt = now + (idx * 0.09);
      osc.frequency.setValueAtTime(freq, startAt);

      gain.gain.setValueAtTime(0.001, startAt);
      gain.gain.exponentialRampToValueAtTime(0.22, startAt + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startAt + 0.28);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startAt);
      osc.stop(startAt + 0.3);
    });
  }

  // Suara Jawaban Belum Tepat (Nada Kartun Hangat "Boing", Tidak Mengagetkan)
  playWrong() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    const now = this.audioCtx.currentTime;
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(170, now + 0.24);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.24);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Suara Kemenangan / Fanfare Piala Selesai Kuis
  playCelebration() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const chords = [
      { freq: 523.25, delay: 0.00 }, // C5
      { freq: 659.25, delay: 0.10 }, // E5
      { freq: 783.99, delay: 0.20 }, // G5
      { freq: 1046.50, delay: 0.32 }, // C6
      { freq: 1318.51, delay: 0.44 }  // E6
    ];

    const now = this.audioCtx.currentTime;

    chords.forEach(c => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      const startAt = now + c.delay;
      osc.frequency.setValueAtTime(c.freq, startAt);

      gain.gain.setValueAtTime(0.001, startAt);
      gain.gain.exponentialRampToValueAtTime(0.24, startAt + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, startAt + 0.42);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startAt);
      osc.stop(startAt + 0.45);
    });
  }

  // Suara Ocehan Lucu Maskot Sains saat Diklik
  playMascotChirp() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const blips = [440, 620, 880];
    const now = this.audioCtx.currentTime;

    blips.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      const startAt = now + (idx * 0.07);
      osc.frequency.setValueAtTime(freq, startAt);

      gain.gain.setValueAtTime(0.12, startAt);
      gain.gain.exponentialRampToValueAtTime(0.001, startAt + 0.06);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startAt);
      osc.stop(startAt + 0.07);
    });
  }
}

