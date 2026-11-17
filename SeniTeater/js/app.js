/**
 * Logika Utama Aplikasi Kuis Seni Teater SD - Petualangan Bintang Panggung
 * Mengatur alur kuis kelas 1-6, Text-to-Speech (TTS), feedback interaktif,
 * tirai panggung beludru, pojok mimik wajah teater, selebrasi piala bersinar & konfeti,
 * serta lembar tinjauan & koreksi lengkap seluruh jawaban.
 */

class TheaterQuizApp {
  constructor() {
    this.currentGrade = 1;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = []; // { question, selectedIndex, isCorrect }
    this.isAnswered = false;
    this.reviewFilter = 'all'; // 'all' | 'wrong' | 'correct'
    this.isCurtainClosed = false;

    // Fakta & Tips Akting Seru dari Si Aktor Cilik untuk Gimmick Dashboard (Syarat 9)
    this.actorTips = [
      "Tips Si Aktor Cilik: Tetap buka tubuhmu ke arah penonton (open position) agar ekspresimu terlihat jelas!",
      "Tahukah kamu? Seni pantomim adalah akting tanpa suara kata yang dipopulerkan oleh tokoh legendaris Charlie Chaplin!",
      "Tips Si Aktor Cilik: Tarik napas lewat perut (diafragma) agar suaramu terdengar lantang dan tidak mudah serak!",
      "Tahukah kamu? Topeng komedi dan tragedi telah menjadi lambang seni teater sedunia sejak zaman Yunani Kuno!",
      "Tips Si Aktor Cilik: Jika lupa naskah di panggung, jangan panik! Lakukan improvisasi kata-kata yang tetap nyambung!",
      "Tahukah kamu? Kesenian Lenong Betawi dan Ketoprak Jawa adalah warisan teater tradisional nusantara yang sangat membanggakan!",
      "Tips Si Aktor Cilik: Menonton teater yang baik adalah dengan menyimak tenang dan memberi tepuk tangan meriah saat adegan selesai!"
    ];
    this.currentTipIndex = 0;

    // Sistem Partikel Konfeti Kanvas
    this.confettiAnimationId = null;
    this.confettiParticles = [];

    // Inisialisasi Audio Controller
    this.audio = new AudioController();

    this.cacheDom();
    this.initIcons();
    this.bindEvents();
    this.renderGrades();
    this.initCurtainState();
  }

  cacheDom() {
    // Layar
    this.screens = {
      grades: document.getElementById('grades-screen'),
      quiz: document.getElementById('quiz-screen'),
      results: document.getElementById('results-screen')
    };

    // Header & Kontrol Suara
    this.btnToggleSound = document.getElementById('btn-toggle-sound');
    this.soundIconBox = document.getElementById('sound-icon-box');
    this.soundLabelText = document.getElementById('sound-label-text');

    // Dashboard Gimmicks
    this.btnToggleCurtain = document.getElementById('btn-toggle-curtain');
    this.curtainToggleText = document.getElementById('curtain-toggle-text');
    this.curtainBtnIcon = document.getElementById('curtain-btn-icon');
    this.stageCurtainsFrame = document.getElementById('stage-curtains-frame');
    this.stageClosedNotice = document.getElementById('stage-closed-notice');
    this.mascotInteractiveBox = document.getElementById('mascot-interactive-box');
    this.mascotSpeechText = document.getElementById('mascot-speech-text');
    this.gradesContainer = document.getElementById('grades-container');

    // Layar Kuis
    this.btnBackHome = document.getElementById('btn-back-home');
    this.quizGradeBadge = document.getElementById('quiz-grade-badge');
    this.progressText = document.getElementById('progress-text');
    this.progressPercent = document.getElementById('progress-percent');
    this.progressFill = document.getElementById('progress-fill');
    this.questionTopic = document.getElementById('question-topic');
    this.btnSpeakQuestion = document.getElementById('btn-speak-question');
    this.speechBtnLabel = document.getElementById('speech-btn-label');
    this.speakerIconBox = document.getElementById('speaker-icon-box');
    this.questionText = document.getElementById('question-text');
    this.optionsContainer = document.getElementById('options-container');
    this.feedbackBanner = document.getElementById('feedback-banner');
    this.feedbackIcon = document.getElementById('feedback-icon');
    this.feedbackHeading = document.getElementById('feedback-heading');
    this.feedbackSub = document.getElementById('feedback-sub');
    this.btnNextQuestion = document.getElementById('btn-next-question');
    this.btnNextText = document.querySelector('.btn-next-text');

    // Layar Hasil & Review
    this.confettiCanvas = document.getElementById('confetti-canvas');
    this.trophyIconBox = document.getElementById('trophy-icon-box');
    this.scoreStarsContainer = document.getElementById('score-stars-container');
    this.scoreTitle = document.getElementById('score-title');
    this.scoreMessage = document.getElementById('score-message');
    this.scoreFinalNumber = document.getElementById('score-final-number');
    this.statCorrect = document.getElementById('stat-correct');
    this.statWrong = document.getElementById('stat-wrong');
    this.btnRetryQuiz = document.getElementById('btn-retry-quiz');
    this.btnChangeGrade = document.getElementById('btn-change-grade');
    this.btnReconfetti = document.getElementById('btn-reconfetti');
    this.reviewList = document.getElementById('review-list');
    this.filterAllBtn = document.getElementById('filter-all-btn');
    this.filterWrongBtn = document.getElementById('filter-wrong-btn');
    this.filterCorrectBtn = document.getElementById('filter-correct-btn');
    this.filterWrongCount = document.getElementById('filter-wrong-count');
    this.filterCorrectCount = document.getElementById('filter-correct-count');
  }

  initIcons() {
    if (this.soundIconBox) this.soundIconBox.innerHTML = AppIcons.volumeOn;
    if (this.curtainBtnIcon) this.curtainBtnIcon.innerHTML = AppIcons.curtain;
    if (this.speakerIconBox) this.speakerIconBox.innerHTML = AppIcons.speakerSpeak;
    if (this.trophyIconBox) this.trophyIconBox.innerHTML = AppIcons.trophyGold;

    const btnBackIcon = document.getElementById('btn-back-icon');
    if (btnBackIcon) btnBackIcon.innerHTML = AppIcons.arrowLeft;

    const nextBtnIcon = document.getElementById('next-btn-icon');
    if (nextBtnIcon) nextBtnIcon.innerHTML = AppIcons.arrowRight;

    const retryBtnIcon = document.getElementById('retry-btn-icon');
    if (retryBtnIcon) retryBtnIcon.innerHTML = AppIcons.refreshCw;

    const homeBtnIcon = document.getElementById('home-btn-icon');
    if (homeBtnIcon) homeBtnIcon.innerHTML = AppIcons.home;

    const iconMaskHappy = document.getElementById('icon-mask-happy');
    if (iconMaskHappy) iconMaskHappy.innerHTML = AppIcons.theatreMaskHappy;

    const iconMaskSurprise = document.getElementById('icon-mask-surprise');
    if (iconMaskSurprise) iconMaskSurprise.innerHTML = AppIcons.theatreMaskSurprise;

    const iconMaskSad = document.getElementById('icon-mask-sad');
    if (iconMaskSad) iconMaskSad.innerHTML = AppIcons.theatreMaskSad;

    const iconApplause = document.getElementById('icon-applause');
    if (iconApplause) iconApplause.innerHTML = AppIcons.applause;
  }

  bindEvents() {
    // Pengatur Suara Global
    if (this.btnToggleSound) {
      this.btnToggleSound.addEventListener('click', () => {
        const isEnabled = this.audio.toggleSound();
        if (isEnabled) {
          this.soundIconBox.innerHTML = AppIcons.volumeOn;
          this.soundLabelText.textContent = "Suara: Nyala";
          this.btnToggleSound.setAttribute('aria-pressed', 'false');
          this.audio.playClick();
        } else {
          this.soundIconBox.innerHTML = AppIcons.volumeOff;
          this.soundLabelText.textContent = "Suara: Mati";
          this.btnToggleSound.setAttribute('aria-pressed', 'true');
        }
      });
    }

    // Gimmick Buka/Tutup Tirai Panggung Beludru (Syarat 9)
    if (this.btnToggleCurtain) {
      this.btnToggleCurtain.addEventListener('click', () => {
        this.toggleCurtain();
      });
    }

    if (this.stageClosedNotice) {
      this.stageClosedNotice.addEventListener('click', () => {
        this.toggleCurtain();
      });
      this.stageClosedNotice.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleCurtain();
        }
      });
    }

    // Interaksi Maskot Si Aktor Cilik
    if (this.mascotInteractiveBox) {
      this.mascotInteractiveBox.addEventListener('click', () => {
        this.handleMascotClick();
      });

      this.mascotInteractiveBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleMascotClick();
        }
      });
    }

    // Pojok Mimik & Tepuk Tangan Teater
    const emotionButtons = document.querySelectorAll('.btn-emotion');
    emotionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const emotion = btn.getAttribute('data-emotion');
        this.handleEmotionTrigger(emotion, btn);
      });
    });

    // Navigasi Kembali ke Dashboard
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener('click', () => {
        this.audio.playClick();
        this.audio.stopSpeech();
        if (confirm("Ingin kembali ke pilihan kelas? Kemajuan kuis saat ini akan diulang.")) {
          this.showScreen('grades');
        }
      });
    }

    // Fitur Suara: Membacakan Pertanyaan (Text-to-Speech)
    if (this.btnSpeakQuestion) {
      this.btnSpeakQuestion.addEventListener('click', () => {
        this.handleSpeakQuestion();
      });
    }

    // Tombol Lanjut Soal Berikutnya / Selesai
    if (this.btnNextQuestion) {
      this.btnNextQuestion.addEventListener('click', () => {
        this.audio.playClick();
        this.audio.stopSpeech();
        this.handleNextQuestion();
      });
    }

    // Tombol Ulangi Kuis Kelas Ini
    if (this.btnRetryQuiz) {
      this.btnRetryQuiz.addEventListener('click', () => {
        this.audio.playClick();
        this.startQuiz(this.currentGrade);
      });
    }

    // Tombol Ganti Kelas dari Layar Hasil
    if (this.btnChangeGrade) {
      this.btnChangeGrade.addEventListener('click', () => {
        this.audio.playClick();
        this.showScreen('grades');
      });
    }

    // Gimmick Selebrasi Konfeti & Tepuk Tangan
    if (this.btnReconfetti) {
      this.btnReconfetti.addEventListener('click', () => {
        this.audio.playApplause();
        this.triggerConfetti();
      });
    }

    // Filter Lembar Review Jawaban (Syarat 4)
    if (this.filterAllBtn) {
      this.filterAllBtn.addEventListener('click', () => this.setReviewFilter('all'));
    }
    if (this.filterWrongBtn) {
      this.filterWrongBtn.addEventListener('click', () => this.setReviewFilter('wrong'));
    }
    if (this.filterCorrectBtn) {
      this.filterCorrectBtn.addEventListener('click', () => this.setReviewFilter('correct'));
    }

    // Responsif resize canvas konfeti
    window.addEventListener('resize', () => {
      if (this.confettiCanvas) {
        this.confettiCanvas.width = window.innerWidth;
        this.confettiCanvas.height = window.innerHeight;
      }
    });
  }

  // =========================================================================
  // GIMMICK DASHBOARD: TIRAI PANGGUNG & MIMIK WAJAH (Syarat 9)
  // =========================================================================
  initCurtainState() {
    this.isCurtainClosed = false;
    if (this.curtainToggleText) {
      this.curtainToggleText.textContent = "Tutup Tirai";
    }
  }

  toggleCurtain() {
    this.isCurtainClosed = !this.isCurtainClosed;
    this.audio.playClick();

    if (this.stageCurtainsFrame) {
      if (this.isCurtainClosed) {
        this.stageCurtainsFrame.classList.add('curtains-closed');
        if (this.curtainToggleText) this.curtainToggleText.textContent = "Buka Tirai";
      } else {
        this.stageCurtainsFrame.classList.remove('curtains-closed');
        if (this.curtainToggleText) this.curtainToggleText.textContent = "Tutup Tirai";
        // Bunyikan bel panggung saat tirai dibuka
        this.audio.playStageChime();
      }
    }
  }

  handleMascotClick() {
    this.currentTipIndex = (this.currentTipIndex + 1) % this.actorTips.length;
    const tip = this.actorTips[this.currentTipIndex];
    if (this.mascotSpeechText) {
      this.mascotSpeechText.textContent = tip;
    }
    this.audio.playEmotion('gembira');
  }

  handleEmotionTrigger(emotion, buttonElement) {
    buttonElement.classList.add('emotion-active');
    setTimeout(() => buttonElement.classList.remove('emotion-active'), 250);

    if (emotion === 'applause') {
      this.audio.playApplause();
      if (this.mascotSpeechText) {
        this.mascotSpeechText.textContent = "Wah, penonton bertepuk tangan riuh! Semangat bintang panggung semakin berkobar! 👏✨";
      }
    } else {
      this.audio.playEmotion(emotion);
      if (emotion === 'gembira') {
        if (this.mascotSpeechText) this.mascotSpeechText.textContent = "Ekspresi Gembira: Bibir tersenyum riang, mata berbinar, dan energi terasa hangat!";
      } else if (emotion === 'terkejut') {
        if (this.mascotSpeechText) this.mascotSpeechText.textContent = "Ekspresi Terkejut: Alis terangkat tinggi, mata terbelalak, dan mulut membentuk huruf O!";
      } else if (emotion === 'sedih') {
        if (this.mascotSpeechText) this.mascotSpeechText.textContent = "Ekspresi Sedih: Sudut bibir menurun lesu, pandangan sayu, dan napas terasa berat!";
      }
    }
  }

  // Menampilkan Layar Tertentu (SPA Switcher)
  showScreen(screenName) {
    Object.keys(this.screens).forEach(key => {
      if (key === screenName) {
        this.screens[key].classList.remove('hidden');
      } else {
        this.screens[key].classList.add('hidden');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // DASHBOARD: RENDER KARTU KELAS 1 SAMPAI 6 (Syarat 1 & 7)
  // =========================================================================
  renderGrades() {
    if (!this.gradesContainer) return;

    this.gradesContainer.innerHTML = '';

    QuizDatabase.grades.forEach(grade => {
      const card = document.createElement('div');
      card.className = `grade-card grade-${grade.badgeColor}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${grade.title}: ${grade.subtitle}, ${grade.questionCount} Soal`);

      const iconSvg = AppIcons[grade.iconKey] || AppIcons.class1MimikWajah;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-avatar">
            ${iconSvg}
          </div>
          <span class="grade-badge-count">${grade.questionCount} Soal</span>
        </div>
        <h3 class="grade-card-title">${grade.title}</h3>
        <p class="grade-card-sub">${grade.subtitle}</p>
        <p class="grade-card-desc">${grade.description}</p>
        <div class="grade-card-btn">
          <span>Mulai Kuis Teater</span>
          ${AppIcons.arrowRight}
        </div>
      `;

      const startAction = () => {
        this.audio.playStageChime();
        this.startQuiz(grade.id);
      };

      card.addEventListener('click', startAction);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startAction();
        }
      });

      this.gradesContainer.appendChild(card);
    });
  }

  // =========================================================================
  // MULAI KUIS KELAS
  // =========================================================================
  startQuiz(gradeId) {
    this.currentGrade = gradeId;
    const gradeData = QuizDatabase.grades.find(g => g.id === gradeId);
    const questions = QuizDatabase.questions[gradeId] || [];

    if (questions.length === 0) {
      alert("Soal untuk kelas ini sedang dipersiapkan!");
      return;
    }

    this.currentQuestions = questions;
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;

    if (this.quizGradeBadge && gradeData) {
      this.quizGradeBadge.textContent = gradeData.title;
    }

    this.showScreen('quiz');
    this.renderCurrentQuestion();
  }

  // Render Butir Pertanyaan & Pilihan Ganda Saat Ini
  renderCurrentQuestion() {
    this.isAnswered = false;
    this.audio.stopSpeech();

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const currentNumber = this.currentIndex + 1;
    const percent = Math.round((currentNumber / total) * 100);

    // Perbarui Teks & Bilah Progres
    if (this.progressText) this.progressText.textContent = `Soal ${currentNumber} dari ${total}`;
    if (this.progressPercent) this.progressPercent.textContent = `${percent}%`;
    if (this.progressFill) this.progressFill.style.width = `${percent}%`;

    // Perbarui Topik & Teks Pertanyaan
    if (this.questionTopic) this.questionTopic.textContent = `Topik: ${q.topic}`;
    if (this.questionText) this.questionText.textContent = q.question;

    // Sembunyikan Feedback Banner
    if (this.feedbackBanner) {
      this.feedbackBanner.classList.add('hidden');
      this.feedbackBanner.classList.remove('is-correct', 'is-wrong');
    }

    // Reset Tombol Suara TTS
    this.updateSpeakerBtnState(false);

    // Render Pilihan Ganda A, B, C, D (Syarat 5 & 6)
    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optionText, index) => {
        const letter = letters[index] || '';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.setAttribute('aria-label', `Pilihan ${letter}: ${optionText}`);

        btn.innerHTML = `
          <span class="option-letter-badge">${letter}</span>
          <span class="option-text">${optionText}</span>
        `;

        btn.addEventListener('click', () => {
          this.handleOptionSelect(index);
        });

        this.optionsContainer.appendChild(btn);
      });
    }
  }

  // Fitur Suara: Membacakan Pertanyaan & Opsi (Syarat 3)
  handleSpeakQuestion() {
    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;

    if (this.audio.isSpeaking) {
      this.audio.stopSpeech();
      this.updateSpeakerBtnState(false);
      return;
    }

    const letters = ['A', 'B', 'C', 'D'];
    let textToRead = `Topik: ${q.topic}. Pertanyaan: ${q.question}. `;
    q.options.forEach((opt, idx) => {
      textToRead += `Pilihan ${letters[idx]}: ${opt}. `;
    });

    this.audio.speakText(
      textToRead,
      () => this.updateSpeakerBtnState(true),
      () => this.updateSpeakerBtnState(false)
    );
  }

  updateSpeakerBtnState(isSpeaking) {
    if (!this.btnSpeakQuestion) return;

    if (isSpeaking) {
      this.btnSpeakQuestion.classList.add('speaking-active');
      if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Berhenti Bicara";
    } else {
      this.btnSpeakQuestion.classList.remove('speaking-active');
      if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Dengarkan Soal";
    }
  }

  // Memilih Jawaban
  handleOptionSelect(selectedIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.audio.stopSpeech();
    this.updateSpeakerBtnState(false);

    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === q.answerIndex);

    // Simpan Jawaban Siswa
    this.userAnswers.push({
      question: q,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect
    });

    // Kunci Seluruh Pilihan Jawaban
    const optionButtons = this.optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
      btn.disabled = true;

      if (index === selectedIndex) {
        if (isCorrect) {
          btn.classList.add('selected-correct');
        } else {
          btn.classList.add('selected-wrong');
        }
      }

      // Tampilkan kunci jawaban yang benar jika siswa menjawab kurang tepat
      if (!isCorrect && index === q.answerIndex) {
        btn.classList.add('reveal-correct');
      }
    });

    // Putar Efek Suara & Tampilkan Feedback Banner
    if (isCorrect) {
      this.audio.playCorrect();
      this.showFeedback(true);
    } else {
      this.audio.playWrong();
      this.showFeedback(false);
    }
  }

  // Menampilkan Banner Feedback Instan Ramah Anak
  showFeedback(isCorrect) {
    if (!this.feedbackBanner) return;

    this.feedbackBanner.classList.remove('hidden', 'is-correct', 'is-wrong');

    if (isCorrect) {
      this.feedbackBanner.classList.add('is-correct');
      if (this.feedbackIcon) this.feedbackIcon.innerHTML = AppIcons.checkCircle;
      if (this.feedbackHeading) this.feedbackHeading.textContent = "Luar Biasa, Jawabanmu Benar!";
      if (this.feedbackSub) this.feedbackSub.textContent = "Pemahaman panggungmu sangat hebat! Yuk lanjut ke soal berikutnya.";
    } else {
      this.feedbackBanner.classList.add('is-wrong');
      if (this.feedbackIcon) this.feedbackIcon.innerHTML = AppIcons.xCircle;
      if (this.feedbackHeading) this.feedbackHeading.textContent = "Hampir Tepat, Tetap Semangat!";
      if (this.feedbackSub) this.feedbackSub.textContent = "Jangan berkecil hati, ada pembahasan lengkap yang bisa kamu pelajari di akhir kuis nanti.";
    }

    const isLast = (this.currentIndex === this.currentQuestions.length - 1);
    if (this.btnNextText) {
      this.btnNextText.textContent = isLast ? "Lihat Hasil Pentas" : "Soal Berikutnya";
    }
  }

  // Lanjut ke Soal Berikutnya atau Layar Hasil
  handleNextQuestion() {
    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    } else {
      this.showResults();
    }
  }

  // =========================================================================
  // LAYAR HASIL & PEMBAHASAN LENGKAP (Syarat 4, 9, 10)
  // =========================================================================
  showResults() {
    this.showScreen('results');
    this.audio.stopSpeech();

    const total = this.currentQuestions.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = total - correctCount;
    const finalScore = Math.round((correctCount / total) * 100);

    // Tampilkan Angka Nilai & Statistik
    if (this.scoreFinalNumber) this.scoreFinalNumber.textContent = finalScore;
    if (this.statCorrect) this.statCorrect.textContent = correctCount;
    if (this.statWrong) this.statWrong.textContent = wrongCount;

    // Hitung Jumlah Tab Filter
    if (this.filterWrongCount) this.filterWrongCount.textContent = wrongCount;
    if (this.filterCorrectCount) this.filterCorrectCount.textContent = correctCount;

    // Bintang & Pesan Hasil Panggung
    this.renderResultStars(finalScore);

    // Suara Fanfare & Tepuk Tangan Penonton
    this.audio.playFanfare();
    setTimeout(() => this.audio.playApplause(), 600);

    // Ledakkan Hujan Konfeti Kanvas (Syarat 9)
    this.triggerConfetti();

    // Render Lembar Koreksi & Pembahasan Seluruh Jawaban (Syarat 4)
    this.setReviewFilter('all');
  }

  renderResultStars(score) {
    if (!this.scoreStarsContainer) return;
    this.scoreStarsContainer.innerHTML = '';

    let starCount = 1;
    let headline = "Bagus, Tetap Semangat Berlatih!";
    let message = "Kamu sudah berusaha dengan baik membawakan peran di panggung. Pelajari koreksi di bawah agar semakin mahir ya!";

    if (score >= 90) {
      starCount = 3;
      headline = "Bintang Utama Panggung yang Luar Biasa!";
      message = "Penampilan akting dan pemahaman teatermu sempurna! Seluruh penonton panggung berdiri bertepuk tangan untukmu!";
    } else if (score >= 70) {
      starCount = 2;
      headline = "Hebat, Penampilan Panggung yang Memukau!";
      message = "Kamu memiliki bakat peran yang keren! Simak sedikit catatan koreksi di bawah untuk menyempurnakan kemampuanmu.";
    }

    if (this.scoreTitle) this.scoreTitle.textContent = headline;
    if (this.scoreMessage) this.scoreMessage.textContent = message;

    for (let i = 0; i < 3; i++) {
      const starWrapper = document.createElement('div');
      starWrapper.className = 'star-pop';
      starWrapper.style.animationDelay = `${i * 0.18}s`;

      if (i < starCount) {
        starWrapper.innerHTML = AppIcons.starGold;
      } else {
        starWrapper.innerHTML = AppIcons.starEmpty;
      }

      this.scoreStarsContainer.appendChild(starWrapper);
    }
  }

  // =========================================================================
  // GIMMICK ANIMASI: KANVAS HUJAN KONFETI PENUH LAYAR (Syarat 9)
  // =========================================================================
  triggerConfetti() {
    if (!this.confettiCanvas) return;

    const canvas = this.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (this.confettiAnimationId) {
      cancelAnimationFrame(this.confettiAnimationId);
    }

    const colors = ['#DC2626', '#FBBF24', '#F59E0B', '#38BDF8', '#10B981', '#EC4899', '#A855F7'];
    this.confettiParticles = [];

    // Ciptakan 130 partikel konfeti panggung warna-warni
    for (let i = 0; i < 130; i++) {
      this.confettiParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        w: 8 + Math.random() * 8,
        h: 12 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: 3 + Math.random() * 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8
      });
    }

    let durationCounter = 0;
    const maxDuration = 320; // Sekitar 5 detik

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        // Loop partikel jika belum selesai durasi
        if (p.y > canvas.height && durationCounter < maxDuration - 80) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });

      durationCounter++;
      if (durationCounter < maxDuration) {
        this.confettiAnimationId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    render();
  }

  // =========================================================================
  // LEMBAR KOREKSI & PEMBAHASAN JAWABAN LENGKAP (Syarat 4)
  // =========================================================================
  setReviewFilter(filterType) {
    this.reviewFilter = filterType;

    // Perbarui Tab Aktif
    [this.filterAllBtn, this.filterWrongBtn, this.filterCorrectBtn].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    if (filterType === 'all' && this.filterAllBtn) this.filterAllBtn.classList.add('active');
    if (filterType === 'wrong' && this.filterWrongBtn) this.filterWrongBtn.classList.add('active');
    if (filterType === 'correct' && this.filterCorrectBtn) this.filterCorrectBtn.classList.add('active');

    this.renderReviewList();
  }

  renderReviewList() {
    if (!this.reviewList) return;
    this.reviewList.innerHTML = '';

    const filteredAnswers = this.userAnswers.filter(item => {
      if (this.reviewFilter === 'wrong') return !item.isCorrect;
      if (this.reviewFilter === 'correct') return item.isCorrect;
      return true;
    });

    if (filteredAnswers.length === 0) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'review-item-card';
      emptyBox.style.textAlign = 'center';
      emptyBox.innerHTML = `
        <p style="font-family: var(--font-display); font-size: 1.1rem; color: #475569;">
          Tidak ada soal pada kategori ini.
        </p>
      `;
      this.reviewList.appendChild(emptyBox);
      return;
    }

    const letters = ['A', 'B', 'C', 'D'];

    filteredAnswers.forEach((ansData) => {
      const q = ansData.question;
      const isCorrect = ansData.isCorrect;
      const userChoiceIndex = ansData.selectedIndex;
      const userChoiceText = q.options[userChoiceIndex] || "Tidak dijawab";
      const correctChoiceText = q.options[q.answerIndex];
      const originalNumber = this.currentQuestions.findIndex(item => item.id === q.id) + 1;

      const card = document.createElement('div');
      card.className = `review-item-card ${!isCorrect ? 'is-wrong-card' : ''}`;

      card.innerHTML = `
        <div class="review-item-top">
          <span class="review-q-number">Soal Nomor ${originalNumber} &bull; ${q.topic}</span>
          <span class="review-status-pill ${isCorrect ? 'pill-correct' : 'pill-wrong'}">
            ${isCorrect ? AppIcons.checkCircle : AppIcons.xCircle}
            <span>${isCorrect ? 'Jawaban Benar' : 'Perlu Diingat'}</span>
          </span>
        </div>

        <h4 class="review-question-text">${q.question}</h4>

        <div class="review-answers-comparison">
          <!-- Jawaban yang Dipilih Siswa -->
          <div class="answer-row answer-user ${isCorrect ? 'was-correct' : 'was-wrong'}">
            <span class="answer-row-icon">${isCorrect ? AppIcons.checkCircle : AppIcons.xCircle}</span>
            <span><strong>Jawabanmu (${letters[userChoiceIndex]}):</strong> ${userChoiceText}</span>
          </div>

          <!-- Kunci Jawaban Benar (Ditampilkan jelas jika siswa salah) -->
          ${!isCorrect ? `
            <div class="answer-row answer-correct-key">
              <span class="answer-row-icon">${AppIcons.checkCircle}</span>
              <span><strong>Kunci Jawaban yang Tepat (${letters[q.answerIndex]}):</strong> ${correctChoiceText}</span>
            </div>
          ` : ''}
        </div>

        <!-- Penjelasan / Koreksi Edukatif (Syarat 4) -->
        <div class="review-explanation">
          <span class="explanation-icon">${AppIcons.bulbTip}</span>
          <div>
            <div class="explanation-title">Pembahasan & Catatan Bintang Panggung:</div>
            <p class="explanation-text">${q.explanation}</p>
          </div>
        </div>
      `;

      this.reviewList.appendChild(card);
    });
  }
}

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener('DOMContentLoaded', () => {
  window.theaterQuiz = new TheaterQuizApp();
});
