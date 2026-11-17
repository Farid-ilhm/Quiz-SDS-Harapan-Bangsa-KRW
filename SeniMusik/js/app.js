/**
 * Logika Utama Aplikasi Kuis Seni Musik SD Petualangan Si Melodi
 * Mengatur alur kuis kelas 1-6, Text-to-Speech, feedback interaktif,
 * mini piano sintetis, selebrasi piala & konfeti, serta lembar koreksi jawaban.
 */

class QuizApp {
  constructor() {
    this.currentGrade = 1;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = []; // { question, selectedIndex, isCorrect }
    this.isAnswered = false;
    this.reviewFilter = 'all'; // 'all' | 'wrong' | 'correct'

    // Tips & Fakta Menarik dari Si Melodi untuk Hero Dashboard (Syarat 9)
    this.melodiFacts = [
      "Tahukah kamu? Suara detak jantung kita juga memiliki pola ketukan irama teratur layaknya musik!",
      "Tips Si Melodi: Bernyanyi sambil tersenyum membuat rongga mulut terbuka dan nada terdengar lebih jernih!",
      "Tahukah kamu? Alat musik tradisional Angklung dari Indonesia telah diakui oleh dunia (UNESCO)!",
      "Tips Si Melodi: Saat bernyanyi bersama teman, jangan berteriak ya, dengarkan juga suara teman di sampingmu!",
      "Tahukah kamu? Tuts hitam pada piano dan keyboard diciptakan untuk memainkan nada-nada tengah (kres dan mol)!",
      "Tips Si Melodi: Tarik napas lewat diafragma (perut) agar napasmu panjang saat menyanyikan bait lagu yang panjang!",
      "Tahukah kamu? Nada C pada piano biasanya dijadikan patokan nada dasar utama yang disebut Middle C!"
    ];
    this.currentFactIndex = 0;

    // Sistem Konfeti Animasi Kanvas
    this.confettiAnimationId = null;
    this.confettiParticles = [];

    // Inisialisasi Audio Controller
    this.audio = new AudioController();

    this.cacheDom();
    this.initIcons();
    this.bindEvents();
    this.renderGrades();
    this.initMiniPiano();
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
  }

  bindEvents() {
    // Toggle Suara Global (Mute / Unmute)
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

    // Interaksi Maskot Si Melodi (Gimmick Animasi & Suara)
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

    // Navigasi Kembali ke Dashboard
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener('click', () => {
        this.audio.playClick();
        this.audio.stopSpeech();
        if (confirm("Ingin kembali ke pilihan kelas? Kemajuan kuis saat ini akan diulang dari awal.")) {
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

    // Gimmick Konfeti Tambahan
    if (this.btnReconfetti) {
      this.btnReconfetti.addEventListener('click', () => {
        this.audio.playClick();
        this.triggerConfetti();
      });
    }

    // Filter Lembar Review Jawaban
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
  // GIMMICK INTERAKTIF: MINI PIANO DI DASHBOARD (Syarat 9)
  // =========================================================================
  initMiniPiano() {
    const pianoKeys = document.querySelectorAll('.piano-key');
    pianoKeys.forEach(key => {
      const note = key.getAttribute('data-note');

      const triggerKey = () => {
        this.audio.playPianoNote(note);
        key.classList.add('key-pressed');
        setTimeout(() => {
          key.classList.remove('key-pressed');
        }, 180);
      };

      key.addEventListener('click', triggerKey);
      key.addEventListener('touchstart', (e) => {
        e.preventDefault();
        triggerKey();
      }, { passive: false });
    });
  }

  // Interaksi Klik Si Melodi
  handleMascotClick() {
    this.currentFactIndex = (this.currentFactIndex + 1) % this.melodiFacts.length;
    const fact = this.melodiFacts[this.currentFactIndex];
    if (this.mascotSpeechText) {
      this.mascotSpeechText.textContent = fact;
    }
    // Mainkan nada arpeggio ceria
    this.audio.playPianoNote('sol');
    setTimeout(() => this.audio.playPianoNote('do-tinggi'), 100);
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

      const iconSvg = AppIcons[grade.iconKey] || AppIcons.class1VoiceNotes;

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
          <span>Mulai Kuis Seru</span>
          ${AppIcons.arrowRight}
        </div>
      `;

      const startAction = () => {
        this.audio.playClick();
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
      alert("Maaf, soal untuk kelas ini sedang dipersiapkan!");
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
    const currentNum = this.currentIndex + 1;
    const percent = Math.round((currentNum / total) * 100);

    // Update Progres Bar Komik
    if (this.progressText) this.progressText.textContent = `Soal ${currentNum} dari ${total}`;
    if (this.progressPercent) this.progressPercent.textContent = `${percent}%`;
    if (this.progressFill) this.progressFill.style.width = `${percent}%`;

    // Update Topik & Pertanyaan
    if (this.questionTopic) this.questionTopic.textContent = `Topik: ${q.topic}`;
    if (this.questionText) this.questionText.textContent = q.question;

    // Reset Status Tombol Suara
    if (this.btnSpeakQuestion) {
      this.btnSpeakQuestion.classList.remove('speaking-active');
      if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Dengarkan Soal";
    }

    // Sembunyikan Feedback Banner
    if (this.feedbackBanner) {
      this.feedbackBanner.classList.add('hidden');
      this.feedbackBanner.classList.remove('is-wrong');
    }

    // Render Pilihan Jawaban A, B, C, D
    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optionText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.setAttribute('data-index', idx);
        btn.setAttribute('aria-label', `Pilihan ${letters[idx]}: ${optionText}`);

        btn.innerHTML = `
          <span class="option-letter">${letters[idx]}</span>
          <span class="option-text">${optionText}</span>
        `;

        btn.addEventListener('click', () => {
          this.handleSelectAnswer(idx);
        });

        this.optionsContainer.appendChild(btn);
      });
    }
  }

  // =========================================================================
  // FITUR SUARA: TEXT-TO-SPEECH BAHASA INDONESIA (Syarat 3)
  // =========================================================================
  handleSpeakQuestion() {
    if (this.audio.isSpeaking) {
      this.audio.stopSpeech();
      this.btnSpeakQuestion.classList.remove('speaking-active');
      this.speechBtnLabel.textContent = "Dengarkan Soal";
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    const letters = ['A', 'B', 'C', 'D'];
    
    // Susun teks narasi ramah untuk anak-anak
    let narrative = `Pertanyaan. ${q.question}. `;
    q.options.forEach((opt, idx) => {
      narrative += `Pilihan ${letters[idx]}, ${opt}. `;
    });

    this.audio.speakText(
      narrative,
      // onStart
      () => {
        if (this.btnSpeakQuestion) {
          this.btnSpeakQuestion.classList.add('speaking-active');
          if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Mendengarkan...";
        }
      },
      // onEnd
      () => {
        if (this.btnSpeakQuestion) {
          this.btnSpeakQuestion.classList.remove('speaking-active');
          if (this.speechBtnLabel) this.speechBtnLabel.textContent = "Dengarkan Soal";
        }
      }
    );
  }

  // =========================================================================
  // PEMILIHAN JAWABAN OLEH SISWA (UX Ramah & Mendidik)
  // =========================================================================
  handleSelectAnswer(selectedIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.audio.stopSpeech();

    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === q.correctIndex);

    // Simpan Rekam Jejak Jawaban untuk Lembar Koreksi (Syarat 4)
    this.userAnswers.push({
      question: q,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect
    });

    // Tandai Visual Pada Tombol Opsi
    const optionButtons = this.optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add('option-correct');
      }
      if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('option-wrong');
      }
    });

    // Tampilkan Feedback Banner Instan & Mainkan Suara Efek
    if (isCorrect) {
      this.audio.playCorrect();
      this.feedbackIcon.innerHTML = AppIcons.checkCircle;
      this.feedbackHeading.textContent = "Hebat Sekali! Jawabanmu Benar! 🎶";
      this.feedbackSub.textContent = "Melodi lagumu tepat! Yuk lanjut ke soal berikutnya.";
      this.feedbackBanner.classList.remove('is-wrong');
    } else {
      this.audio.playWrong();
      this.feedbackIcon.innerHTML = AppIcons.xCircle;
      this.feedbackHeading.textContent = "Hampir Tepat! Tetap Semangat! 💡";
      this.feedbackSub.textContent = `Jawaban yang benar adalah: ${q.options[q.correctIndex]}`;
      this.feedbackBanner.classList.add('is-wrong');
    }

    // Atur Label Tombol Lanjut (Jika soal terakhir -> Lihat Hasil)
    const isLast = (this.currentIndex === this.currentQuestions.length - 1);
    if (this.btnNextText) {
      this.btnNextText.textContent = isLast ? "Lihat Hasil Akhir Kuis" : "Soal Berikutnya";
    }

    this.feedbackBanner.classList.remove('hidden');
  }

  // Berpindah ke Soal Berikutnya atau ke Layar Hasil
  handleNextQuestion() {
    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.renderCurrentQuestion();
    } else {
      this.showResults();
    }
  }

  // =========================================================================
  // LAYAR SELEBRASI HASIL KUIS & KOREKSI JAWABAN (Syarat 4 & 9)
  // =========================================================================
  showResults() {
    this.showScreen('results');

    const totalQuestions = this.userAnswers.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = totalQuestions - correctCount;
    const finalScore = Math.round((correctCount / totalQuestions) * 100);

    // Tampilkan Skor & Statistik
    if (this.scoreFinalNumber) this.scoreFinalNumber.textContent = finalScore;
    if (this.statCorrect) this.statCorrect.textContent = correctCount;
    if (this.statWrong) this.statWrong.textContent = wrongCount;

    // Hitung Jumlah Bintang (1 - 3 Bintang)
    let starCount = 1;
    let headline = "Terus Berlatih, Sahabat Musik!";
    let message = "Kamu sudah berusaha dengan baik! Pelajari catatan koreksi di bawah ya agar semakin mahir!";

    if (finalScore === 100) {
      starCount = 3;
      headline = "Sempurna! Kamu Maestro Musik Sejati! 🏆";
      message = "Luar biasa! Kamu berhasil menjawab seluruh soal Seni Musik dengan benar tanpa cela!";
    } else if (finalScore >= 80) {
      starCount = 3;
      headline = "Keren Banget! Musisi Berbakat! 🌟";
      message = "Pemahaman musikmu sangat hebat! Tinggal sedikit lagi untuk meraih nilai sempurna!";
    } else if (finalScore >= 60) {
      starCount = 2;
      headline = "Bagus Sekali! Melodimu Mengalun Indah! 🎶";
      message = "Kamu sudah memahami sebagian besar materi Seni Musik dengan baik. Pertahankan ya!";
    }

    if (this.scoreTitle) this.scoreTitle.textContent = headline;
    if (this.scoreMessage) this.scoreMessage.textContent = message;

    // Render Bintang Berputar
    if (this.scoreStarsContainer) {
      this.scoreStarsContainer.innerHTML = '';
      for (let i = 1; i <= 3; i++) {
        const starDiv = document.createElement('div');
        starDiv.className = 'score-star-item';
        starDiv.style.animationDelay = `${i * 0.18}s`;
        starDiv.innerHTML = (i <= starCount) ? AppIcons.starGold : AppIcons.starEmpty;
        this.scoreStarsContainer.appendChild(starDiv);
      }
    }

    // Mainkan Fanfare Kemenangan
    this.audio.playFanfare();

    // Picu Hujan Konfeti Penuh Layar (Syarat 9)
    this.triggerConfetti();

    // Render Lembar Koreksi & Pembahasan Lengkap (Syarat 4)
    this.renderReviewList();
  }

  // =========================================================================
  // GIMMICK ANIMASI: HUJAN KONFETI KARTUN WARNA-WARNI (Syarat 9)
  // =========================================================================
  triggerConfetti() {
    if (!this.confettiCanvas) return;

    const canvas = this.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Bersihkan animasi sebelumnya jika sedang berjalan
    if (this.confettiAnimationId) {
      cancelAnimationFrame(this.confettiAnimationId);
    }

    this.confettiParticles = [];
    const colors = ['#FEF08A', '#38BDF8', '#F43F5E', '#10B981', '#F59E0B', '#A855F7', '#FB923C'];

    // Buat 100 partikel konfeti komik pop-art
    for (let i = 0; i < 110; i++) {
      this.confettiParticles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.35,
        w: Math.random() * 12 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: Math.random() * -12 - 4,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        gravity: 0.32,
        opacity: 1
      });
    }

    const animateConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeParticles = 0;
      this.confettiParticles.forEach(p => {
        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.rot += p.vRot;
        p.vx *= 0.98;

        if (p.y > canvas.height * 0.75) {
          p.opacity -= 0.015;
        }

        if (p.opacity > 0 && p.y < canvas.height + 50) {
          activeParticles++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.strokeStyle = '#1E293B';
          ctx.lineWidth = 1.8;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
      });

      if (activeParticles > 0) {
        this.confettiAnimationId = requestAnimationFrame(animateConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animateConfetti();
  }

  // =========================================================================
  // LEMBAR KOREKSI JAWABAN & FILTER (Syarat 4)
  // =========================================================================
  setReviewFilter(filterType) {
    this.reviewFilter = filterType;
    this.audio.playClick();

    if (this.filterAllBtn) this.filterAllBtn.classList.toggle('active', filterType === 'all');
    if (this.filterWrongBtn) this.filterWrongBtn.classList.toggle('active', filterType === 'wrong');
    if (this.filterCorrectBtn) this.filterCorrectBtn.classList.toggle('active', filterType === 'correct');

    this.renderReviewList();
  }

  renderReviewList() {
    if (!this.reviewList) return;

    this.reviewList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    const wrongCount = this.userAnswers.filter(a => !a.isCorrect).length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;

    if (this.filterWrongCount) this.filterWrongCount.textContent = wrongCount;
    if (this.filterCorrectCount) this.filterCorrectCount.textContent = correctCount;

    // Filter daftar
    let displayedAnswers = this.userAnswers;
    if (this.reviewFilter === 'wrong') {
      displayedAnswers = this.userAnswers.filter(a => !a.isCorrect);
    } else if (this.reviewFilter === 'correct') {
      displayedAnswers = this.userAnswers.filter(a => a.isCorrect);
    }

    if (displayedAnswers.length === 0) {
      this.reviewList.innerHTML = `
        <div style="text-align: center; padding: 24px; font-weight: 800; color: #64748B;">
          Tidak ada soal dalam kategori ini.
        </div>
      `;
      return;
    }

    displayedAnswers.forEach((item, index) => {
      const q = item.question;
      const card = document.createElement('div');
      card.className = `review-card-item ${item.isCorrect ? 'is-correct' : 'is-wrong'}`;

      const statusBadge = item.isCorrect
        ? `<span class="review-item-status-badge status-badge-correct">${AppIcons.checkCircle} Benar</span>`
        : `<span class="review-item-status-badge status-badge-wrong">${AppIcons.xCircle} Perlu Diingat</span>`;

      const userChoiceText = q.options[item.selectedIndex];
      const correctChoiceText = q.options[q.correctIndex];

      // Format Tampilan Jawaban Murid vs Kunci Jawaban
      let answersHtml = '';
      if (item.isCorrect) {
        answersHtml = `
          <div class="review-answers-box">
            <div class="answer-row answer-user ans-correct">
              <span class="ans-tag">Jawaban Kamu (Tepat!):</span>
              <span><strong>${letters[item.selectedIndex]}.</strong> ${userChoiceText}</span>
            </div>
          </div>
        `;
      } else {
        answersHtml = `
          <div class="review-answers-box">
            <div class="answer-row answer-user ans-wrong">
              <span class="ans-tag">Jawaban Kamu:</span>
              <span><strong>${letters[item.selectedIndex]}.</strong> ${userChoiceText}</span>
            </div>
            <div class="answer-row answer-correct-key">
              <span class="ans-tag">Jawaban yang Benar:</span>
              <span><strong>${letters[q.correctIndex]}.</strong> ${correctChoiceText}</span>
            </div>
          </div>
        `;
      }

      // Kotak Koreksi Edukatif Ramah Anak (Syarat 4)
      const explanationHtml = `
        <div class="correction-explanation-box">
          <div class="explanation-icon">${AppIcons.bulbTip}</div>
          <div>
            <div class="explanation-title">Koreksi & Pembahasan Cerdas:</div>
            <p class="explanation-text">${q.explanation}</p>
          </div>
        </div>
      `;

      card.innerHTML = `
        <div class="review-item-header">
          <span class="review-item-num">Soal No. ${this.userAnswers.indexOf(item) + 1} (${q.topic})</span>
          ${statusBadge}
        </div>
        <h4 class="review-item-question">${q.question}</h4>
        ${answersHtml}
        ${explanationHtml}
      `;

      this.reviewList.appendChild(card);
    });
  }
}

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener('DOMContentLoaded', () => {
  window.quizApp = new QuizApp();
});
