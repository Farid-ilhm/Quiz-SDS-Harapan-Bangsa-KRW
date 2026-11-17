/**
 * Logika Utama Aplikasi Kuis TIK SD Petualangan Robot Chippy
 * Mengatur alur kuis kelas 1-6, fitur text-to-speech, feedback interaktif,
 * selebrasi hasil kuis, dan lembar koreksi jawaban komprehensif.
 */

class QuizApp {
  constructor() {
    this.currentGrade = 1;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = []; // Menyimpan riwayat pilihan { question, selectedIndex, isCorrect }
    this.isAnswered = false;
    this.reviewFilter = 'all'; // 'all' | 'wrong' | 'correct'

    // Tips Seru Teknologi dari Robot Chippy untuk Dashboard
    this.chippyFacts = [
      "Tahukah kamu? Menjaga jarak mata minimal 40 cm dari layar membuat matamu tetap segar dan sehat!",
      "Tips Chippy: Jangan lupa mencuci tangan sebelum memegang keyboard dan mouse ya!",
      "Tahukah kamu? Tombol Caps Lock berguna untuk membuat semua huruf menjadi huruf besar atau kapital!",
      "Tips Chippy: Selalu minta pendampingan orang tua atau guru saat berselancar di internet!",
      "Tahukah kamu? Mouse komputer pertama kali dibuat dari balok kayu oleh Douglas Engelbart!",
      "Tips Chippy: Tekan tombol Ctrl + S secara berkala agar tugas ketikanmu selalu tersimpan rapi!",
      "Tahukah kamu? Robot adalah mesin cerdas yang bekerja mengikuti urutan perintah bernama algoritma!"
    ];
    this.currentFactIndex = 0;

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

    // Header & Kontrol Audio
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
  }

  bindEvents() {
    // Tombol Suara Header
    if (this.btnToggleSound) {
      this.btnToggleSound.addEventListener('click', () => this.toggleSound());
    }

    // Maskot Robot Chippy Interaktif
    if (this.mascotInteractiveBox) {
      this.mascotInteractiveBox.addEventListener('click', () => this.interactMascot());
    }

    // Navigasi Kembali ke Beranda
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener('click', () => {
        window.quizAudio.playClick();
        window.quizAudio.stopSpeech();
        this.showScreen('grades');
      });
    }

    // Tombol Membaca Soal (Text-to-Speech)
    if (this.btnSpeakQuestion) {
      this.btnSpeakQuestion.addEventListener('click', () => this.speakCurrentQuestion());
    }

    // Tombol Soal Selanjutnya
    if (this.btnNextQuestion) {
      this.btnNextQuestion.addEventListener('click', () => this.handleNextQuestion());
    }

    // Tombol Layar Hasil
    if (this.btnRetryQuiz) {
      this.btnRetryQuiz.addEventListener('click', () => {
        window.quizAudio.playClick();
        this.startQuiz(this.currentGrade);
      });
    }

    if (this.btnChangeGrade) {
      this.btnChangeGrade.addEventListener('click', () => {
        window.quizAudio.playClick();
        this.showScreen('grades');
      });
    }

    if (this.btnReconfetti) {
      this.btnReconfetti.addEventListener('click', () => {
        window.quizAudio.playClick();
        this.launchConfetti();
      });
    }

    // Tab Filter Review Jawaban
    if (this.filterAllBtn) {
      this.filterAllBtn.addEventListener('click', () => this.setReviewFilter('all'));
    }
    if (this.filterWrongBtn) {
      this.filterWrongBtn.addEventListener('click', () => this.setReviewFilter('wrong'));
    }
    if (this.filterCorrectBtn) {
      this.filterCorrectBtn.addEventListener('click', () => this.setReviewFilter('correct'));
    }
  }

  showScreen(name) {
    Object.keys(this.screens).forEach(key => {
      if (this.screens[key]) {
        if (key === name) {
          this.screens[key].classList.remove('d-none');
        } else {
          this.screens[key].classList.add('d-none');
        }
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleSound() {
    const isEnabled = window.quizAudio.toggleSound();
    if (isEnabled) {
      this.soundIconBox.innerHTML = AppIcons.volumeOn;
      this.soundLabelText.textContent = "Suara: Nyala";
      this.btnToggleSound.setAttribute('aria-pressed', 'false');
    } else {
      this.soundIconBox.innerHTML = AppIcons.volumeOff;
      this.soundLabelText.textContent = "Suara: Mati";
      this.btnToggleSound.setAttribute('aria-pressed', 'true');
    }
  }

  // Interaksi Seru dengan Maskot Chippy (Syarat 9)
  interactMascot() {
    window.quizAudio.playRobotBleep();
    this.currentFactIndex = (this.currentFactIndex + 1) % this.chippyFacts.length;
    
    // Animasi geleng ceria
    const mascotSvg = this.mascotInteractiveBox.querySelector('.hero-mascot-svg');
    if (mascotSvg) {
      mascotSvg.style.transform = 'scale(1.1) rotate(6deg)';
      setTimeout(() => {
        mascotSvg.style.transform = '';
      }, 300);
    }

    if (this.mascotSpeechText) {
      this.mascotSpeechText.textContent = this.chippyFacts[this.currentFactIndex];
    }
  }

  // Render Kartu Pilihan Kelas 1 sampai 6
  renderGrades() {
    if (!this.gradesContainer) return;
    this.gradesContainer.innerHTML = '';

    QuizDatabase.grades.forEach(grade => {
      const card = document.createElement('div');
      card.className = `grade-card card-theme-${grade.badgeColor}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Mulai Kuis ${grade.title}: ${grade.subtitle}`);

      const iconSvg = AppIcons[grade.iconKey] || AppIcons.computerScreen;

      card.innerHTML = `
        <div class="grade-card-top">
          <span class="grade-badge-tag">${grade.title}</span>
          <div class="grade-card-icon-box" aria-hidden="true">
            ${iconSvg}
          </div>
        </div>
        <div>
          <h4 class="grade-card-title">${grade.subtitle}</h4>
          <p class="grade-card-desc">${grade.description}</p>
        </div>
        <div class="grade-card-footer">
          <span class="grade-card-count">${grade.questionCount} Soal Edukatif</span>
          <span class="grade-card-action-btn">
            <span>Mulai Kuis</span>
            ${AppIcons.arrowRight}
          </span>
        </div>
      `;

      const startAction = () => {
        window.quizAudio.playClick();
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

  // Memulai Kuis Kelas Terpilih
  startQuiz(gradeId) {
    this.currentGrade = gradeId;
    this.currentQuestions = QuizDatabase.questions[gradeId] || [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;

    const gradeInfo = QuizDatabase.grades.find(g => g.id === gradeId);
    if (this.quizGradeBadge && gradeInfo) {
      this.quizGradeBadge.textContent = `${gradeInfo.title} • ${gradeInfo.subtitle}`;
    }

    this.showScreen('quiz');
    this.renderCurrentQuestion();
  }

  // Render Butir Soal Berjalan
  renderCurrentQuestion() {
    window.quizAudio.stopSpeech();
    this.isAnswered = false;
    this.updateSpeakerBtnState(false);

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const progressPercent = Math.round(((this.currentIndex + 1) / total) * 100);

    // Update Progres
    if (this.progressText) this.progressText.textContent = `Soal ${this.currentIndex + 1} dari ${total}`;
    if (this.progressPercent) this.progressPercent.textContent = `${progressPercent}%`;
    if (this.progressFill) this.progressFill.style.width = `${progressPercent}%`;

    // Topik & Pertanyaan
    if (this.questionTopic) this.questionTopic.textContent = q.topic;
    if (this.questionText) this.questionText.textContent = q.question;

    // Reset Feedback & Tombol Lanjut
    if (this.feedbackBanner) this.feedbackBanner.classList.add('d-none');
    if (this.btnNextQuestion) {
      this.btnNextQuestion.disabled = true;
      this.btnNextQuestion.setAttribute('aria-disabled', 'true');
    }
    if (this.btnNextText) {
      this.btnNextText.textContent = (this.currentIndex === total - 1) ? 'Lihat Hasil Kuis' : 'Soal Selanjutnya';
    }

    // Render 4 Opsi Pilihan Jawaban
    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', 'false');

        btn.innerHTML = `
          <span class="option-letter">${opt.label}</span>
          <span class="option-text">${opt.text}</span>
        `;

        btn.addEventListener('click', () => this.handleSelectOption(idx));
        this.optionsContainer.appendChild(btn);
      });
    }

    window.scrollTo({ top: 120, behavior: 'smooth' });
  }

  // Fitur Membaca Soal (Text-to-Speech Bahasa Indonesia) (Syarat 3)
  speakCurrentQuestion() {
    if (window.quizAudio.isSpeaking) {
      window.quizAudio.stopSpeech();
      this.updateSpeakerBtnState(false);
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;

    let fullSpeech = `Soal nomor ${this.currentIndex + 1}. Topik: ${q.topic}. Pertanyaan: ${q.question}. Pilihan jawaban: `;
    q.options.forEach(opt => {
      fullSpeech += `Pilihan ${opt.label}: ${opt.text}. `;
    });

    window.quizAudio.speakText(
      fullSpeech,
      () => this.updateSpeakerBtnState(true),
      () => this.updateSpeakerBtnState(false)
    );
  }

  updateSpeakerBtnState(isSpeaking) {
    if (!this.btnSpeakQuestion) return;
    if (isSpeaking) {
      this.btnSpeakQuestion.classList.add('speaking-pulse');
      if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Berhenti Mendengar";
      if (this.speakerIconBox) this.speakerIconBox.innerHTML = AppIcons.speakerActive;
    } else {
      this.btnSpeakQuestion.classList.remove('speaking-pulse');
      if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Dengarkan Soal";
      if (this.speakerIconBox) this.speakerIconBox.innerHTML = AppIcons.speakerSpeak;
    }
  }

  // Siswa Memilih Jawaban
  handleSelectOption(selectedIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    window.quizAudio.stopSpeech();
    this.updateSpeakerBtnState(false);

    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === q.correctIndex);

    // Simpan riwayat jawaban
    this.userAnswers.push({
      question: q,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect,
      correctIndex: q.correctIndex
    });

    // Update Tampilan Tombol Jawaban
    const optionBtns = this.optionsContainer.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      btn.setAttribute('aria-checked', (idx === selectedIndex).toString());

      if (idx === selectedIndex) {
        if (isCorrect) {
          btn.classList.add('selected-correct');
        } else {
          btn.classList.add('selected-wrong');
        }
      }
      // Tunjukkan jawaban benar secara lembut jika siswa memilih jawaban yang salah
      if (!isCorrect && idx === q.correctIndex) {
        btn.classList.add('selected-correct');
      }
    });

    // Suara Efek & Tampilan Banner Feedback
    if (isCorrect) {
      window.quizAudio.playCorrect();
      this.showFeedback(true, "Hebat Sekali! Jawabanmu Benar!", q.explanation);
    } else {
      window.quizAudio.playWrong();
      const correctOpt = q.options[q.correctIndex];
      this.showFeedback(
        false,
        "Yuk Belajar Lagi!",
        `Jawaban yang tepat adalah Pilihan ${correctOpt.label} (${correctOpt.text}). ${q.explanation}`
      );
    }

    // Aktifkan Tombol Soal Selanjutnya
    if (this.btnNextQuestion) {
      this.btnNextQuestion.disabled = false;
      this.btnNextQuestion.removeAttribute('aria-disabled');
      this.btnNextQuestion.focus();
    }
  }

  showFeedback(isCorrect, heading, text) {
    if (!this.feedbackBanner) return;

    this.feedbackBanner.classList.remove('d-none', 'feedback-correct', 'feedback-wrong');
    this.feedbackBanner.classList.add(isCorrect ? 'feedback-correct' : 'feedback-wrong');

    if (this.feedbackIcon) {
      this.feedbackIcon.innerHTML = isCorrect ? AppIcons.checkCircle : AppIcons.xCircle;
    }
    if (this.feedbackHeading) this.feedbackHeading.textContent = heading;
    if (this.feedbackSub) this.feedbackSub.textContent = text;
  }

  // Berpindah ke Soal Berikutnya atau Selesai
  handleNextQuestion() {
    window.quizAudio.playClick();
    window.quizAudio.stopSpeech();

    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    } else {
      this.finishQuiz();
    }
  }

  // Selesai Kuis: Hitung Skor, Animasi Piala & Bintang, dan Lembar Review (Syarat 4 & 9)
  finishQuiz() {
    const total = this.userAnswers.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = total - correctCount;
    const score = Math.round((correctCount / total) * 100);

    // Tampilkan Layar Hasil
    this.showScreen('results');

    // Metrik Angka
    if (this.scoreFinalNumber) this.scoreFinalNumber.textContent = score;
    if (this.statCorrect) this.statCorrect.textContent = `${correctCount} Benar`;
    if (this.statWrong) this.statWrong.textContent = `${wrongCount} Perlu Belajar`;

    // Pesan Apresiasi & Bintang
    let title = "";
    let message = "";
    let starCount = 1;

    if (score === 100) {
      title = "Sempurna! Kamu Sangat Jenius!";
      message = "Luar biasa! Kamu berhasil menjawab semua soal TIK dengan tepat. Terus pertahankan semangat belajarmu ya!";
      starCount = 3;
    } else if (score >= 80) {
      title = "Hebat Sekali! Kamu Juara!";
      message = "Hasil yang sangat membanggakan! Kamu sudah memahami materi komputer dengan sangat baik.";
      starCount = 3;
    } else if (score >= 60) {
      title = "Bagus Sekali! Terus Semangat!";
      message = "Kamu sudah belajar dengan giat. Yuk pelajari koreksi jawaban di bawah agar nilaimu semakin sempurna!";
      starCount = 2;
    } else {
      title = "Ayo Semangat Belajar Lagi!";
      message = "Jangan berkecil hati, belajar komputer itu sangat seru! Perhatikan lembar koreksi di bawah ini lalu coba lagi ya!";
      starCount = 1;
    }

    if (this.scoreTitle) this.scoreTitle.textContent = title;
    if (this.scoreMessage) this.scoreMessage.textContent = message;

    // Render Bintang Bersinar Animatif (Syarat 9)
    if (this.scoreStarsContainer) {
      this.scoreStarsContainer.innerHTML = '';
      for (let i = 1; i <= 3; i++) {
        const starDiv = document.createElement('div');
        starDiv.className = `star-animated-item star-${i}`;
        starDiv.innerHTML = (i <= starCount) ? AppIcons.starFull : AppIcons.starEmpty;
        this.scoreStarsContainer.appendChild(starDiv);
      }
    }

    // Mainkan Efek Kemenangan & Pesta Konfeti
    window.quizAudio.playVictory();
    this.launchConfetti();

    // Render Lembar Review Koreksi Jawaban Lengkap (Syarat 4)
    this.renderReviewSheet();
  }

  // Filter Lembar Review
  setReviewFilter(filterType) {
    this.reviewFilter = filterType;

    const tabs = [
      { btn: this.filterAllBtn, key: 'all' },
      { btn: this.filterWrongBtn, key: 'wrong' },
      { btn: this.filterCorrectBtn, key: 'correct' }
    ];

    tabs.forEach(t => {
      if (t.btn) {
        if (t.key === filterType) {
          t.btn.classList.add('active-filter');
          t.btn.setAttribute('aria-selected', 'true');
        } else {
          t.btn.classList.remove('active-filter');
          t.btn.setAttribute('aria-selected', 'false');
        }
      }
    });

    this.renderReviewSheet();
  }

  // Render Lembar Review & Koreksi Lengkap (Syarat 4)
  renderReviewSheet() {
    if (!this.reviewList) return;
    this.reviewList.innerHTML = '';

    let displayedAnswers = this.userAnswers;
    if (this.reviewFilter === 'wrong') {
      displayedAnswers = this.userAnswers.filter(a => !a.isCorrect);
    } else if (this.reviewFilter === 'correct') {
      displayedAnswers = this.userAnswers.filter(a => a.isCorrect);
    }

    if (displayedAnswers.length === 0) {
      this.reviewList.innerHTML = `
        <div style="text-align: center; padding: 24px; color: #64748B; font-weight: 700;">
          Tidak ada soal pada kategori ini.
        </div>
      `;
      return;
    }

    displayedAnswers.forEach(item => {
      const q = item.question;
      const questionIndex = this.userAnswers.findIndex(a => a.question.id === q.id);
      const userOpt = q.options[item.selectedIndex];
      const correctOpt = q.options[item.correctIndex];

      const card = document.createElement('article');
      card.className = 'review-card';

      const statusBadge = item.isCorrect ? `
        <span class="review-status-pill status-correct">
          ${AppIcons.checkCircle}
          <span>Jawaban Benar</span>
        </span>
      ` : `
        <span class="review-status-pill status-wrong">
          ${AppIcons.xCircle}
          <span>Perlu Koreksi</span>
        </span>
      `;

      // KOTAK KOREKSI JAWABAN (SYARAT 4)
      let correctionSection = '';
      if (!item.isCorrect) {
        correctionSection = `
          <div class="review-correction-box correction-wrong-box">
            <div class="correction-header">
              ${AppIcons.lightbulbCorrection}
              <h5 class="correction-title">Koreksi Jawaban yang Benar:</h5>
            </div>
            <div class="correction-correct-answer">
              Pilihan ${correctOpt.label}: ${correctOpt.text}
            </div>
            <p class="correction-explanation">
              <strong>Penjelasan Edukatif:</strong> ${q.explanation}
            </p>
          </div>
        `;
      } else {
        correctionSection = `
          <div class="review-correction-box correction-correct-box">
            <div class="correction-header">
              ${AppIcons.lightbulbCorrection}
              <h5 class="correction-title">Ulasan Pemahaman Materi:</h5>
            </div>
            <p class="correction-explanation">
              <strong>Penjelasan:</strong> ${q.explanation}
            </p>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <div class="review-number-topic">
            <span class="review-number-badge">Soal #${questionIndex + 1}</span>
            <span class="review-topic-tag">${q.topic}</span>
          </div>
          ${statusBadge}
        </div>
        <h4 class="review-question-text">${q.question}</h4>
        <div class="review-answer-box">
          <span class="answer-label">Jawaban yang kamu pilih:</span>
          <span class="answer-text-user"><strong>(${userOpt.label}) ${userOpt.text}</strong></span>
        </div>
        ${correctionSection}
      `;

      this.reviewList.appendChild(card);
    });
  }

  // Animasi Letupan Konfeti Pesta (Syarat 9)
  launchConfetti() {
    if (!this.confettiCanvas) return;
    const canvas = this.confettiCanvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#F59E0B', '#0284C7', '#10B981', '#EF4444', '#8B5CF6', '#F43F5E', '#FDE047'];
    const confettiCount = 110;
    const particles = [];

    for (let i = 0; i < confettiCount; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.45 + (Math.random() - 0.5) * 80,
        r: Math.random() * 6 + 4,
        d: Math.random() * confettiCount,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: (Math.random() * 0.07) + 0.05,
        tiltAngle: 0,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 4,
        gravity: 0.35,
        opacity: 1
      });
    }

    let animationFrame;
    let framesCount = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      framesCount++;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.tiltAngle += p.tiltAngleIncremental;
        p.tilt = Math.sin(p.tiltAngle) * 15;

        if (framesCount > 80) {
          p.opacity -= 0.012;
        }

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      if (framesCount < 180 && particles.some(p => p.opacity > 0)) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    };

    render();
  }
}

// Inisialisasi Saat Dokumen Siap
document.addEventListener('DOMContentLoaded', () => {
  window.quizApp = new QuizApp();
});
