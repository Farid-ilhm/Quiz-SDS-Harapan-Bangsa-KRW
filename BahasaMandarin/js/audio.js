/**
 * Audio Controller untuk Kuis Bahasa Mandarin Anak SD
 * Menggunakan Web Speech API (Text-to-Speech) untuk pengucapan Hanzi & Soal,
 * dan Web Audio API (Synthesizer) untuk efek suara interaktif tanpa perlu file eksternal.
 */

class AudioController {
  constructor() {
    this.audioCtx = null;
    this.synth = window.speechSynthesis || null;
    this.soundEnabled = true;
    this.speechRate = 0.85; // Sedikit lebih lambat agar jelas untuk anak-anak
    this.chineseVoice = null;
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
      console.warn("Web Audio API tidak didukung di browser ini.");
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
      const voices = this.synth.getVoices();
      // Cari suara Mandarin (zh-CN, zh-TW, zh-HK)
      this.chineseVoice = voices.find(v => v.lang && v.lang.startsWith("zh")) || null;
      // Cari suara Bahasa Indonesia
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

  // Text-To-Speech: Membaca teks Mandarin (Hanzi / Pinyin)
  speakMandarin(text, onStart, onEnd) {
    if (!this.soundEnabled) return;
    this.stopSpeech();

    this.isSpeaking = true;
    if (onStart) onStart();

    // Coba gunakan Google TTS Mandarin asli jika tersedia
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);
    this.activeAudio = audio;

    audio.onended = () => {
      this.isSpeaking = false;
      this.activeAudio = null;
      if (onEnd) onEnd();
    };

    audio.onerror = () => {
      this.fallbackWebSpeechMandarin(text, onEnd);
    };

    audio.play().catch(() => {
      this.fallbackWebSpeechMandarin(text, onEnd);
    });
  }

  fallbackWebSpeechMandarin(text, onEnd) {
    if (!this.synth) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = this.speechRate;
    utterance.pitch = 1.05;

    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
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
      this.synth.speak(utterance);
    } catch (e) {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    }
  }

  // Text-To-Speech: Membaca teks instruksi / soal dalam Bahasa Indonesia asli (bukan bule)
  speakIndonesian(text, onStart, onEnd) {
    if (!this.soundEnabled) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeech();
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
  }

  speakText(text, onStart, onEnd) {
    this.speakIndonesian(text, onStart, onEnd);
  }

  fallbackWebSpeechIndonesian(text, onEnd) {
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

  // Membaca soal secara lengkap (soal Bahasa Indonesia + kata Mandarin)
  speakFullQuestion(questionObj, onStart, onEnd) {
    if (!this.soundEnabled) return;
    this.stopSpeech();

    const textToSpeak = questionObj.voiceText || questionObj.questionText;

    // Bagian 1: Soal dibacakan dengan suara asli Bahasa Indonesia
    this.speakIndonesian(textToSpeak, onStart, () => {
      // Bagian 2: Kata Mandarin dilafalkan dengan suara Mandarin asli
      if (questionObj.mandarinVoice) {
        this.speakMandarin(questionObj.mandarinVoice, null, onEnd);
      } else {
        if (onEnd) onEnd();
      }
    });
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

  // ================= EFEK SUARA (Web Audio API) =================

  // Suara klik tombol kartun yang renyah (pop)
  playPop() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(750, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Suara lonceng riang saat memilih jawaban benar
  playCorrect() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (chord C mayor ceria)
    notes.forEach((freq, idx) => {
      const now = this.audioCtx.currentTime + (idx * 0.09);
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    });
  }

  // Suara lembut penyemangat saat jawaban belum tepat (tidak menakutkan bagi anak)
  playIncorrect() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // Nada ayun lembut (bukan buzz kasar)
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(260, now + 0.22);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Suara fanfare perayaan saat kuis selesai
  playFanfare() {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const melody = [
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.12 }, // E5
      { f: 783.99, d: 0.12 }, // G5
      { f: 1046.50, d: 0.35 } // C6
    ];

    let t = this.audioCtx.currentTime;
    melody.forEach((note) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(note.f, t);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + note.d);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + note.d);

      t += note.d + 0.04;
    });
  }
}

// Instance global
if (typeof window !== "undefined") {
  window.quizAudio = new AudioController();
}

