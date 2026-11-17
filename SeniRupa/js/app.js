/**
 * Logika Utama Aplikasi Kuis Seni Rupa SD
 * Maskot: Ciko si Kuas Ajaib & Palet Pelangi
 * Fitur:
 * - Navigasi Kelas 1 sampai 6 (Masing-masing 10 Soal Kurikulum Merdeka Seni Rupa SD)
 * - Text-To-Speech Bahasa Indonesia ramah anak
 * - Umpan balik visual interaktif komik & sintesis efek suara
 * - Selebrasi piala berputar sinar 360 derajat, animasi kilau bintang, & letupan konfeti kanvas
 * - Lembar review dan koreksi pembahasan lengkap untuk semua jawaban siswa
 */

class QuizApp {
  constructor() {
    this.currentGrade = 1;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = []; // Riwayat jawaban: { question, selectedIndex, isCorrect }
    this.isAnswered = false;
    this.reviewFilter = 'all'; // 'all' | 'wrong' | 'correct'

    // Tips Inspiratif Seni Rupa dari Kuas Ciko untuk Dashboard (Syarat 9)
    this.cikoFacts = [
      "Kuas Ciko berkata: Mencampurkan warna merah dan kuning akan menciptakan warna oranye yang segar seperti buah jeruk!",
      "Tips Melukis: Jangan takut salah saat menggambar! Setiap goresan pensilmu adalah kreasi seni yang unik dan berharga.",
      "Tahukah kamu? Warna biru dan kuning jika dipadukan di atas palet akan menghasilkan warna hijau dedaunan!",
      "Kuas Ciko berkata: Motif batik Megamendung dari Cirebon melambangkan ketenangan awan pembawa kesejukan hati.",
      "Tips Ciko: Memberikan bayangan gelap dan terang membuat gambarmu terlihat hidup dan bervolume seperti benda nyata!",
      "Tahukah kamu? Maestro lukis Indonesia Pak Affandi melukis langsung memencet cat ke kanvas memakai jari tangannya!",
      "Kuas Ciko berkata: Seni origami melatih kesabaran dan kecermatan jemari tanganmu melipat kertas warna-warni!"
    ];
    this.currentFactIndex = 0;

    // Inisialisasi Audio Controller
    this.audio = new AudioController();

    this.cacheDom();
    this.initIcons();
    this.bindEvents();
    this.renderGrades();
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

    // Dashboard
    this.gradesContainer = document.getElementById('grades-container');
    this.mascotInteractiveBox = document.getElementById('mascot-interactive-box');
    this.mascotSpeechText = document.getElementById('mascot-speech-text');

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
  }

  initIcons() {
    if (this.soundIconBox) this.soundIconBox.innerHTML = AppIcons.volumeOn;
    if (this.speakerIconBox) this.speakerIconBox.innerHTML = AppIcons.speakerSpeak;

    const btnBackIcon = document.getElementById('btn-back-icon');
    if (btnBackIcon) btnBackIcon.innerHTML = AppIcons.arrowLeft;

    const nextBtnIcon = document.getElementById('next-btn-icon');
    if (nextBtnIcon) nextBtnIcon.innerHTML = AppIcons.arrowRight;

    const retryBtnIcon = document.getElementById('retry-btn-icon');
    if (retryBtnIcon) retryBtnIcon.innerHTML = AppIcons.refreshCw;

    const changeGradeIcon = document.getElementById('change-grade-icon');
    if (changeGradeIcon) changeGradeIcon.innerHTML = AppIcons.gridMenu;

    const reviewBookIcon = document.getElementById('review-book-icon');
    if (reviewBookIcon) reviewBookIcon.innerHTML = AppIcons.bookReview;

    const celebrationTrophyBox = document.getElementById('celebration-trophy-box');
    if (celebrationTrophyBox) celebrationTrophyBox.innerHTML = AppIcons.goldenTrophy;
  }

  bindEvents() {
    // Tombol Suara Header
    if (this.btnToggleSound) {
      this.btnToggleSound.addEventListener('click', () => this.toggleSound());
    }

    // Maskot Ciko Interaktif
    if (this.mascotInteractiveBox) {
      this.mascotInteractiveBox.addEventListener('click', () => this.interactMascot());
    }

    // Navigasi Kembali ke Beranda
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener('click', () => this.confirmGoHome());
    }

    // Tombol Fitur Suara (Membaca Soal)
    if (this.btnSpeakQuestion) {
      this.btnSpeakQuestion.addEventListener('click', () => this.speakCurrentQuestion());
    }

    // Tombol Soal Selanjutnya
    if (this.btnNextQuestion) {
      this.btnNextQuestion.addEventListener('click', () => this.handleNextQuestion());
    }

    // Tombol Aksi di Layar Hasil
    if (this.btnRetryQuiz) {
      this.btnRetryQuiz.addEventListener('click', () => {
        this.audio.playClick();
        this.startQuiz(this.currentGrade);
      });
    }

    if (this.btnChangeGrade) {
      this.btnChangeGrade.addEventListener('click', () => {
        this.audio.playClick();
        this.showScreen('grades');
      });
    }

    if (this.btnReconfetti) {
      this.btnReconfetti.addEventListener('click', () => {
        this.audio.playConfettiPop();
        this.launchConfetti();
      });
    }

    // Tab Filter Review
    if (this.filterAllBtn) {
      this.filterAllBtn.addEventListener('click', () => this.setReviewFilter('all'));
    }
    if (this.filterWrongBtn) {
      this.filterWrongBtn.addEventListener('click', () => this.setReviewFilter('wrong'));
    }
    if (this.filterCorrectBtn) {
      this.filterCorrectBtn.addEventListener('click', () => this.setReviewFilter('correct'));
    }

    // Dukungan Tombol Keyboard (1-4 untuk memilih opsi, Enter untuk soal selanjutnya)
    window.addEventListener('keydown', (e) => {
      // Hanya aktif saat berada di layar kuis
      if (this.screens.quiz.classList.contains('d-none')) return;

      if (!this.isAnswered) {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') this.selectOptionByIndex(0);
        else if (e.key === '2' || e.key === 'b' || e.key === 'B') this.selectOptionByIndex(1);
        else if (e.key === '3' || e.key === 'c' || e.key === 'C') this.selectOptionByIndex(2);
        else if (e.key === '4' || e.key === 'd' || e.key === 'D') this.selectOptionByIndex(3);
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleNextQuestion();
        }
      }
    });
  }

  // =========================================================================
  // LOGIKA NAVIGASI LAYAR
  // =========================================================================
  showScreen(screenName) {
    this.audio.stopSpeech();
    Object.keys(this.screens).forEach(key => {
      if (key === screenName) {
        this.screens[key].classList.remove('d-none');
      } else {
        this.screens[key].classList.add('d-none');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleSound() {
    const isEnabled = this.audio.toggleSound();
    if (this.soundIconBox) {
      this.soundIconBox.innerHTML = isEnabled ? AppIcons.volumeOn : AppIcons.volumeMute;
    }
    if (this.soundLabelText) {
      this.soundLabelText.textContent = isEnabled ? "Suara: Nyala" : "Suara: Senyap";
    }
    this.btnToggleSound.setAttribute('aria-pressed', (!isEnabled).toString());
    if (isEnabled) this.audio.playClick();
  }

  interactMascot() {
    this.audio.playClick();
    this.currentFactIndex = (this.currentFactIndex + 1) % this.cikoFacts.length;
    const fact = this.cikoFacts[this.currentFactIndex];
    if (this.mascotSpeechText) {
      this.mascotSpeechText.textContent = fact;
    }
    // Baca fakta jika suara aktif
    this.audio.speakText(fact);
  }

  // =========================================================================
  // LAYAR 1: RENDER PILIHAN KELAS 1-6 (SYARAT 1 & 7)
  // =========================================================================
  renderGrades() {
    if (!this.gradesContainer) return;
    this.gradesContainer.innerHTML = '';

    QuizDatabase.grades.forEach(grade => {
      const card = document.createElement('article');
      card.className = 'grade-card';

      const iconSvg = AppIcons[grade.iconKey] || AppIcons.artPaletteBrand;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-wrapper icon-${grade.badgeColor}" aria-hidden="true">
            ${iconSvg}
          </div>
          <span class="grade-count-badge">${grade.questionCount} Soal Siap</span>
        </div>
        <h4 class="grade-title">${grade.title}</h4>
        <div class="grade-subtitle">${grade.subtitle}</div>
        <p class="grade-desc">${grade.description}</p>
        <button type="button" class="btn-start-quiz" data-grade-id="${grade.id}" aria-label="Mulai Kuis ${grade.title}">
          <span>Mulai Kuis ${grade.title}</span>
          <span class="btn-inline-icon">${AppIcons.arrowRight}</span>
        </button>
      `;

      const startBtn = card.querySelector('.btn-start-quiz');
      startBtn.addEventListener('click', () => {
        this.audio.playClick();
        this.startQuiz(grade.id);
      });

      this.gradesContainer.appendChild(card);
    });
  }

  confirmGoHome() {
    if (this.userAnswers.length > 0 && this.userAnswers.length < this.currentQuestions.length) {
      const confirmLeave = window.confirm("Kuis sedang berlangsung. Apakah kamu yakin ingin kembali ke menu pilihan kelas?");
      if (!confirmLeave) return;
    }
    this.audio.playClick();
    this.showScreen('grades');
  }

  // =========================================================================
  // LAYAR 2: PERJALANAN KUIS INTERAKTIF
  // =========================================================================
  startQuiz(gradeId) {
    this.currentGrade = gradeId;
    const gradeData = QuizDatabase.grades.find(g => g.id === gradeId);
    const questions = QuizDatabase.questions[gradeId] || [];

    if (!questions || questions.length === 0) {
      alert("Soal untuk kelas ini sedang dipersiapkan!");
      return;
    }

    this.currentQuestions = questions;
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;

    // Perbarui Tampilan Header Kuis
    if (this.quizGradeBadge && gradeData) {
      this.quizGradeBadge.textContent = `${gradeData.title} • Seni Rupa`;
    }

    this.showScreen('quiz');
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    this.isAnswered = false;
    this.audio.stopSpeech();

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const currentNumber = this.currentIndex + 1;
    const percent = Math.round((currentNumber / total) * 100);

    // Update Bar Progres
    if (this.progressText) this.progressText.textContent = `Soal ${currentNumber} dari ${total}`;
    if (this.progressPercent) this.progressPercent.textContent = `${percent}%`;
    if (this.progressFill) this.progressFill.style.width = `${percent}%`;

    // Update Topik & Pertanyaan
    if (this.questionTopic) this.questionTopic.textContent = q.topic;
    if (this.questionText) this.questionText.textContent = q.question;

    // Reset Tombol Suara
    this.resetSpeakerButton();

    // Sembunyikan Banner Umpan Balik
    if (this.feedbackBanner) {
      this.feedbackBanner.classList.add('d-none');
      this.feedbackBanner.className = 'feedback-banner d-none';
    }

    // Nonaktifkan Tombol Selanjutnya sampai memilih
    if (this.btnNextQuestion) {
      this.btnNextQuestion.disabled = true;
      this.btnNextQuestion.setAttribute('aria-disabled', 'true');
    }
    if (this.btnNextText) {
      this.btnNextText.textContent = (currentNumber === total) ? "Lihat Hasil & Nilai" : "Soal Selanjutnya";
    }

    // Render 4 Opsi Jawaban (A, B, C, D)
    if (!this.optionsContainer) return;
    this.optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');
      btn.dataset.index = idx;

      btn.innerHTML = `
        <span class="option-letter">${opt.label}</span>
        <span class="option-text">${opt.text}</span>
      `;

      btn.addEventListener('click', () => {
        if (!this.isAnswered) {
          this.selectOption(idx);
        }
      });

      this.optionsContainer.appendChild(btn);
    });
  }

  selectOptionByIndex(index) {
    const buttons = this.optionsContainer.querySelectorAll('.option-btn');
    if (buttons[index]) {
      this.selectOption(index);
    }
  }

  selectOption(selectedIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.audio.stopSpeech();

    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === q.correctIndex);

    // Simpan riwayat jawaban
    this.userAnswers.push({
      question: q,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect
    });

    const buttons = this.optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === selectedIndex) {
        btn.setAttribute('aria-checked', 'true');
        if (isCorrect) {
          btn.classList.add('selected-correct');
        } else {
          btn.classList.add('selected-wrong');
        }
      }
      // Tunjukkan jawaban benar jika salah memilih
      if (!isCorrect && idx === q.correctIndex) {
        btn.classList.add('reveal-correct');
      }
    });

    // Mainkan Efek Suara
    if (isCorrect) {
      this.audio.playCorrect();
    } else {
      this.audio.playWrong();
    }

    // Tampilkan Umpan Balik Instan yang Menyenangkan
    if (this.feedbackBanner) {
      this.feedbackBanner.classList.remove('d-none');
      if (isCorrect) {
        this.feedbackBanner.className = 'feedback-banner feedback-correct';
        if (this.feedbackIcon) this.feedbackIcon.innerHTML = AppIcons.checkCircle;
        if (this.feedbackHeading) this.feedbackHeading.textContent = "Hebat Sekali! Jawabanmu Benar!";
      } else {
        this.feedbackBanner.className = 'feedback-banner feedback-wrong';
        if (this.feedbackIcon) this.feedbackIcon.innerHTML = AppIcons.xCircle;
        if (this.feedbackHeading) this.feedbackHeading.textContent = "Hampir Benar, Tetap Semangat!";
      }
      if (this.feedbackSub) this.feedbackSub.textContent = q.explanation;
    }

    // Aktifkan Tombol Soal Selanjutnya
    if (this.btnNextQuestion) {
      this.btnNextQuestion.disabled = false;
      this.btnNextQuestion.removeAttribute('aria-disabled');
      this.btnNextQuestion.focus();
    }
  }

  handleNextQuestion() {
    if (!this.isAnswered) return;
    this.audio.playClick();

    if (this.currentIndex + 1 < this.currentQuestions.length) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    } else {
      this.showResults();
    }
  }

  // =========================================================================
  // FITUR SUARA: TEXT-TO-SPEECH MEMBACAKAN SOAL (SYARAT 3)
  // =========================================================================
  speakCurrentQuestion() {
    if (this.audio.isSpeaking) {
      this.audio.stopSpeech();
      this.resetSpeakerButton();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;

    // Rangkai teks bacaan ramah anak: Topik, Pertanyaan, lalu Pilihan A, B, C, D
    let fullSpokenText = `Materi: ${q.topic}. Pertanyaan: ${q.question}. `;
    q.options.forEach(opt => {
      fullSpokenText += `Pilihan ${opt.label}: ${opt.text}. `;
    });

    this.btnSpeakQuestion.classList.add('speaking');
    if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Sedang Membaca...";
    if (this.speakerIconBox) this.speakerIconBox.innerHTML = AppIcons.speakerActive;

    this.audio.speakText(
      fullSpokenText,
      () => {},
      () => {
        this.resetSpeakerButton();
      }
    );
  }

  resetSpeakerButton() {
    if (this.btnSpeakQuestion) {
      this.btnSpeakQuestion.classList.remove('speaking');
    }
    if (this.speechBtnLabel) {
      this.speechBtnLabel.textContent = "Dengarkan Soal";
    }
    if (this.speakerIconBox) {
      this.speakerIconBox.innerHTML = AppIcons.speakerSpeak;
    }
  }

  // =========================================================================
  // LAYAR 3: SELEBRASI HASIL KUIS & REVIEW JAWABAN (SYARAT 4 & 9)
  // =========================================================================
  showResults() {
    this.showScreen('results');

    const totalQuestions = this.userAnswers.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = totalQuestions - correctCount;
    const finalScore = Math.round((correctCount / totalQuestions) * 100);

    // Tampilkan Angka Skor & Statistik
    if (this.scoreFinalNumber) this.scoreFinalNumber.textContent = finalScore;
    if (this.statCorrect) this.statCorrect.textContent = `${correctCount} Benar`;
    if (this.statWrong) this.statWrong.textContent = `${wrongCount} Perlu Koreksi`;

    // Render Bintang Bersinar Animatif (Syarat 9)
    this.renderScoreStars(finalScore);

    // Pesan Motivasi Edukatif
    if (finalScore === 100) {
      if (this.scoreTitle) this.scoreTitle.textContent = "Sempurna! Kamu Seniman Cilik Hebat!";
      if (this.scoreMessage) this.scoreMessage.textContent = "Luar biasa! Seluruh soal seni rupa berhasil kamu jawab dengan tepat tanpa ada kesalahan sedikit pun.";
    } else if (finalScore >= 80) {
      if (this.scoreTitle) this.scoreTitle.textContent = "Hebat Banget! Nilaimu Sangat Bagus!";
      if (this.scoreMessage) this.scoreMessage.textContent = "Pemahamanmu tentang warna, bentuk, dan karya seni rupa sudah sangat mantap. Yuk terus berkarya!";
    } else if (finalScore >= 60) {
      if (this.scoreTitle) this.scoreTitle.textContent = "Bagus Sekali! Terus Berlatih!";
      if (this.scoreMessage) this.scoreMessage.textContent = "Kamu sudah belajar dengan giat. Perhatikan lembar koreksi di bawah ini untuk belajar lebih mendalam ya!";
    } else {
      if (this.scoreTitle) this.scoreTitle.textContent = "Semangat Belajar! Kamu Pasti Bisa!";
      if (this.scoreMessage) this.scoreMessage.textContent = "Jangan berkecil hati ya. Seni rupa adalah petualangan belajar yang mengasyikkan. Ayo baca pembahasannya dan coba lagi!";
    }

    // Mainkan Nada Kemenangan & Letupan Konfeti
    this.audio.playTrophyFanfare();
    setTimeout(() => {
      this.launchConfetti();
    }, 300);

    // Render Lembar Review Koreksi Lengkap (Syarat 4)
    this.setReviewFilter('all');
  }

  renderScoreStars(score) {
    if (!this.scoreStarsContainer) return;
    this.scoreStarsContainer.innerHTML = '';

    // Hitung jumlah bintang (1 sampai 5)
    let starCount = 1;
    if (score >= 90) starCount = 5;
    else if (score >= 70) starCount = 4;
    else if (score >= 50) starCount = 3;
    else if (score >= 30) starCount = 2;

    for (let i = 0; i < 5; i++) {
      const starSpan = document.createElement('span');
      starSpan.className = 'score-star-item';
      starSpan.style.animationDelay = `${i * 0.15}s`;

      if (i < starCount) {
        starSpan.innerHTML = AppIcons.goldenStar;
      } else {
        starSpan.innerHTML = AppIcons.goldenStar;
        starSpan.classList.add('score-star-empty');
      }

      this.scoreStarsContainer.appendChild(starSpan);

      // Suara ding bintang berurutan jika suara aktif
      if (i < starCount) {
        setTimeout(() => {
          this.audio.playStarDing(i);
        }, 150 + (i * 150));
      }
    }
  }

  // =========================================================================
  // LEMBAR REVIEW & KOREKSI JAWABAN (SYARAT 4)
  // =========================================================================
  setReviewFilter(filterType) {
    this.reviewFilter = filterType;

    // Perbarui status aktif tombol tab
    const tabs = [
      { el: this.filterAllBtn, key: 'all' },
      { el: this.filterWrongBtn, key: 'wrong' },
      { el: this.filterCorrectBtn, key: 'correct' }
    ];

    tabs.forEach(tab => {
      if (!tab.el) return;
      if (tab.key === filterType) {
        tab.el.classList.add('active-filter');
        tab.el.setAttribute('aria-selected', 'true');
      } else {
        tab.el.classList.remove('active-filter');
        tab.el.setAttribute('aria-selected', 'false');
      }
    });

    this.renderReviewList();
  }

  renderReviewList() {
    if (!this.reviewList) return;
    this.reviewList.innerHTML = '';

    let itemsToDisplay = this.userAnswers;
    if (this.reviewFilter === 'wrong') {
      itemsToDisplay = this.userAnswers.filter(a => !a.isCorrect);
    } else if (this.reviewFilter === 'correct') {
      itemsToDisplay = this.userAnswers.filter(a => a.isCorrect);
    }

    if (itemsToDisplay.length === 0) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'review-card';
      emptyBox.style.textAlign = 'center';
      emptyBox.style.padding = '32px 16px';
      emptyBox.innerHTML = `
        <h4 style="font-family: var(--font-comic); font-size: 1.2rem; color: #64748B;">
          Tidak ada soal pada kategori filter ini.
        </h4>
      `;
      this.reviewList.appendChild(emptyBox);
      return;
    }

    itemsToDisplay.forEach((item) => {
      const q = item.question;
      // Temukan indeks asli pada urutan kuis
      const originalIndex = this.userAnswers.indexOf(item) + 1;
      const userChoice = q.options[item.selectedIndex];
      const correctChoice = q.options[q.correctIndex];

      const card = document.createElement('article');
      card.className = `review-card ${item.isCorrect ? 'is-correct' : 'is-wrong'}`;

      let answersComparisonHtml = '';
      if (item.isCorrect) {
        answersComparisonHtml = `
          <div class="ans-row ans-user-correct">
            <span class="ans-label">Jawaban Kamu: ${userChoice.label}</span>
            <span>${userChoice.text}</span>
          </div>
        `;
      } else {
        answersComparisonHtml = `
          <div class="ans-row ans-user-wrong">
            <span class="ans-label">Jawaban Kamu: ${userChoice.label}</span>
            <span>${userChoice.text}</span>
          </div>
          <div class="ans-row ans-correct-key">
            <span class="ans-label">Jawaban Benar: ${correctChoice.label}</span>
            <span>${correctChoice.text}</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <div class="review-badge-group">
            <span class="review-qnum">Soal #${originalIndex}</span>
            <span class="review-topic-tag">${q.topic}</span>
          </div>
          <span class="review-status-tag ${item.isCorrect ? 'status-tag-correct' : 'status-tag-wrong'}">
            ${item.isCorrect ? AppIcons.checkCircle : AppIcons.xCircle}
            <span>${item.isCorrect ? 'Benar (+10)' : 'Perlu Koreksi (0)'}</span>
          </span>
        </div>

        <h4 class="review-question-text">${q.question}</h4>

        <div class="review-answers-box">
          ${answersComparisonHtml}
        </div>

        <!-- Kotak Koreksi & Penjelasan Edukatif (Syarat 4) -->
        <div class="review-explanation-box">
          <div class="explanation-header">
            ${AppIcons.sparkleGlow}
            <span>Koreksi & Pembahasan Edukatif Ciko:</span>
          </div>
          <p class="explanation-text">${q.explanation}</p>
        </div>
      `;

      this.reviewList.appendChild(card);
    });
  }

  // =========================================================================
  // GIMMICK ANIMASI: KANVAS LETUPAN KONFETI PESTA (SYARAT 9)
  // =========================================================================
  launchConfetti() {
    if (!this.confettiCanvas) return;
    const canvas = this.confettiCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ['#F43F5E', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#FEF08A'];
    const particleCount = 100;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 200,
        y: height / 2 + (Math.random() - 0.5) * 100,
        w: Math.random() * 10 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: Math.random() * -14 - 4,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        gravity: 0.32,
        friction: 0.98,
        opacity: 1
      });
    }

    let animationFrameId;
    let startTime = Date.now();

    const render = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, width, height);

      let activeParticles = 0;

      particles.forEach(p => {
        p.vx *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;

        if (elapsed > 2000) {
          p.opacity -= 0.015;
        }

        if (p.opacity > 0 && p.y < height + 40) {
          activeParticles++;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.strokeStyle = '#1E293B';
          ctx.lineWidth = 1.2;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
      });

      if (activeParticles > 0 && elapsed < 4500) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        cancelAnimationFrame(animationFrameId);
      }
    };

    render();
  }
}

// Inisialisasi saat seluruh dokumen telah siap
document.addEventListener('DOMContentLoaded', () => {
  window.quizApp = new QuizApp();
});
