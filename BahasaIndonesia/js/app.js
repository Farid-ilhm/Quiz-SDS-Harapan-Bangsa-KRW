/**
 * Kuis Bahasa Indonesia SD - Kontroler Utama Aplikasi
 * Mengatur alur kuis, navigasi soal, pembacaan suara (TTS),
 * efek suara Web Audio API, animasi piala/konfeti, dan lembar koreksi edukatif.
 */

class QuizApp {
  constructor() {
    this.audio = new AudioController();
    this.currentGrade = 1;
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.confettiAnimationId = null;

    // Elemen DOM Layar
    this.screenGrades = document.getElementById("grades-screen");
    this.screenQuiz = document.getElementById("quiz-screen");
    this.screenResults = document.getElementById("results-screen");

    // Header Suara
    this.btnToggleSound = document.getElementById("btn-toggle-sound");
    this.soundLabelText = document.getElementById("sound-label-text");

    // Elemen Kuis
    this.badgeGrade = document.getElementById("badge-grade");
    this.badgeCounter = document.getElementById("badge-counter");
    this.progressBar = document.getElementById("progress-fill");
    this.btnBackHome = document.getElementById("btn-back-home");
    this.btnSpeech = document.getElementById("btn-speech-question");
    this.qTopicPill = document.getElementById("question-topic-pill");
    this.qTextElem = document.getElementById("question-text");
    this.optionsContainer = document.getElementById("options-container");
    this.jumpDotsContainer = document.getElementById("jump-dots-bar");
    this.btnPrev = document.getElementById("btn-prev-question");
    this.btnNext = document.getElementById("btn-next-question");

    // Elemen Hasil
    this.starsContainer = document.getElementById("stars-row");
    this.resultsTitle = document.getElementById("results-title");
    this.resultsMotivation = document.getElementById("results-motivation");
    this.scoreMainText = document.getElementById("score-main-text");
    this.scoreCorrectCount = document.getElementById("score-correct-count");
    this.scoreWrongCount = document.getElementById("score-wrong-count");
    this.reviewListContainer = document.getElementById("review-list-container");
    this.btnRetryQuiz = document.getElementById("btn-retry-quiz");
    this.btnChooseOtherGrade = document.getElementById("btn-choose-other-grade");

    this.bindEvents();
  }

  bindEvents() {
    // Tombol Toggle Suara di Header
    if (this.btnToggleSound) {
      this.btnToggleSound.addEventListener("click", () => {
        const enabled = this.audio.toggleSound();
        if (this.soundLabelText) {
          this.soundLabelText.textContent = enabled ? "Suara: Nyala" : "Suara: Senyap";
        }
        this.btnToggleSound.setAttribute("aria-pressed", (!enabled).toString());
        if (enabled) this.audio.playPop();
      });
    }

    // Tombol Kembali ke Beranda dari Layar Kuis
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener("click", () => {
        this.audio.playPop();
        this.audio.stopSpeech();
        if (confirm("Apakah kamu yakin ingin kembali ke menu pilihan kelas? Progres kuis saat ini akan diulang.")) {
          this.showDashboard();
        }
      });
    }

    // Tombol Bacakan Soal (TTS)
    if (this.btnSpeech) {
      this.btnSpeech.addEventListener("click", () => {
        this.toggleQuestionSpeech();
      });
    }

    // Tombol Navigasi Soal Sebelumnya & Berikutnya
    if (this.btnPrev) {
      this.btnPrev.addEventListener("click", () => {
        this.audio.playPop();
        this.audio.stopSpeech();
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderQuestion();
        }
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener("click", () => {
        this.audio.playPop();
        this.audio.stopSpeech();
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
          this.renderQuestion();
        } else {
          this.finishQuiz();
        }
      });
    }

    // Tombol Ulangi Kuis & Pilih Kelas Lain di Layar Hasil
    if (this.btnRetryQuiz) {
      this.btnRetryQuiz.addEventListener("click", () => {
        this.audio.playPop();
        this.startQuiz(this.currentGrade);
      });
    }

    if (this.btnChooseOtherGrade) {
      this.btnChooseOtherGrade.addEventListener("click", () => {
        this.audio.playPop();
        this.showDashboard();
      });
    }

    // Delegasi Klik Kartu Pilihan Kelas di Dashboard
    document.querySelectorAll(".btn-play-grade").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const grade = parseInt(e.currentTarget.getAttribute("data-grade"), 10);
        if (grade) {
          this.startQuiz(grade);
        }
      });
    });
  }

  // Tampilkan Layar Dashboard Pilihan Kelas
  showDashboard() {
    this.stopConfetti();
    this.audio.stopSpeech();
    this.screenGrades.classList.remove("d-none");
    this.screenQuiz.classList.add("d-none");
    this.screenResults.classList.add("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Mulai Kuis untuk Kelas Tertentu (10 Soal per kelas)
  startQuiz(grade) {
    this.currentGrade = grade;
    this.questions = IndonesianQuizQuestions.filter(q => q.grade === grade);

    if (this.questions.length === 0) {
      alert("Soal untuk kelas ini sedang disiapkan.");
      return;
    }

    this.currentIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);

    this.audio.playPop();
    this.stopConfetti();

    this.screenGrades.classList.add("d-none");
    this.screenResults.classList.add("d-none");
    this.screenQuiz.classList.remove("d-none");

    this.renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Tampilkan Soal Aktif
  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Update Badge & Progress
    this.badgeGrade.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Kelas ${q.grade} SD`;
    this.badgeCounter.innerHTML = `<i class="fa-solid fa-list-ol"></i> Soal ${this.currentIndex + 1} dari ${this.questions.length}`;

    const percent = ((this.currentIndex + 1) / this.questions.length) * 100;
    this.progressBar.style.width = `${percent}%`;

    // Update Topik Soal & Teks Soal
    this.qTopicPill.innerHTML = `${IconService.fa(q.icon)} <span>${q.topic}</span>`;
    this.qTextElem.textContent = q.question;

    // Reset Status Tombol Suara
    this.resetSpeechButton();

    // Render Opsi Jawaban (A, B, C, D)
    this.renderOptions(q);

    // Render Tombol Lompat Nomor Soal (Jump Dots)
    this.renderJumpDots();

    // Update Tombol Navigasi Bawah
    this.btnPrev.disabled = (this.currentIndex === 0);

    if (this.currentIndex === this.questions.length - 1) {
      this.btnNext.innerHTML = `<span>Selesai & Cek Nilai</span> <i class="fa-solid fa-flag-checkered"></i>`;
      this.btnNext.className = "btn-nav-comic btn-nav-finish";
    } else {
      this.btnNext.innerHTML = `<span>Soal Berikutnya</span> <i class="fa-solid fa-arrow-right"></i>`;
      this.btnNext.className = "btn-nav-comic btn-nav-next";
    }
  }

  // Render 4 Opsi Jawaban
  renderOptions(q) {
    this.optionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      
      const isSelected = (this.userAnswers[this.currentIndex] === idx);
      if (isSelected) {
        btn.classList.add("selected");
      }

      btn.innerHTML = `
        <span class="option-badge">${letters[idx]}</span>
        <span class="option-label">${optText}</span>
      `;

      btn.addEventListener("click", () => {
        this.selectAnswer(idx);
      });

      this.optionsContainer.appendChild(btn);
    });
  }

  // Pilih Jawaban
  selectAnswer(optionIndex) {
    this.userAnswers[this.currentIndex] = optionIndex;
    this.audio.playPop();

    // Update tampilan pilihan terpilih
    const buttons = this.optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach((b, idx) => {
      if (idx === optionIndex) {
        b.classList.add("selected");
      } else {
        b.classList.remove("selected");
      }
    });

    // Update warna titik nomor
    this.renderJumpDots();
  }

  // Render Indikator Titik Lompat Nomor Soal
  renderJumpDots() {
    this.jumpDotsContainer.innerHTML = "";
    this.questions.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot-step";
      dot.textContent = idx + 1;

      if (idx === this.currentIndex) {
        dot.classList.add("current");
      } else if (this.userAnswers[idx] !== null) {
        dot.classList.add("answered");
      }

      dot.addEventListener("click", () => {
        this.audio.playPop();
        this.audio.stopSpeech();
        this.currentIndex = idx;
        this.renderQuestion();
      });

      this.jumpDotsContainer.appendChild(dot);
    });
  }

  // Fitur Text-To-Speech Pembaca Soal
  toggleQuestionSpeech() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    if (this.audio.isSpeaking) {
      this.audio.stopSpeech();
      this.resetSpeechButton();
    } else {
      const textToSpeak = q.audioText || q.question;
      this.audio.speakIndonesian(
        textToSpeak,
        () => {
          // On start: Nyalakan animasi gelombang suara
          this.btnSpeech.classList.add("speaking");
          this.btnSpeech.innerHTML = `
            <div class="soundwave-anim">
              <span class="soundwave-bar"></span>
              <span class="soundwave-bar"></span>
              <span class="soundwave-bar"></span>
              <span class="soundwave-bar"></span>
            </div>
            <span>Sedang Membacakan...</span>
          `;
        },
        () => {
          // On end
          this.resetSpeechButton();
        }
      );
    }
  }

  resetSpeechButton() {
    if (this.btnSpeech) {
      this.btnSpeech.classList.remove("speaking");
      this.btnSpeech.innerHTML = `
        <i class="fa-solid fa-volume-high" aria-hidden="true"></i>
        <span>Dengarkan Soal (Suara)</span>
      `;
    }
  }

  // Selesaikan Kuis & Tampilkan Layar Hasil dan Koreksi Lengkap
  finishQuiz() {
    this.audio.stopSpeech();

    // Hitung Jumlah Jawaban Benar
    let correctCount = 0;
    this.questions.forEach((q, idx) => {
      if (this.userAnswers[idx] === q.answerIndex) {
        correctCount++;
      }
    });

    const totalCount = this.questions.length;
    const wrongCount = totalCount - correctCount;
    const finalScore = Math.round((correctCount / totalCount) * 100);

    // Ganti Tampilan ke Layar Hasil
    this.screenQuiz.classList.add("d-none");
    this.screenResults.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update Nilai & Rincian
    this.scoreMainText.textContent = `${finalScore}/100`;
    this.scoreCorrectCount.textContent = `${correctCount} Benar`;
    this.scoreWrongCount.textContent = `${wrongCount} Perlu Diingat`;

    // Tentukan Jumlah Bintang Komik & Pesan Motivasi Edukatif
    let starCount = 1;
    let titleText = "Hebat! Kamu Sudah Berusaha!";
    let motivationText = "Jangan menyerah ya! Yuk pelajari koreksi jawaban di bawah agar semakin pintar dan mahir Bahasa Indonesia.";

    if (finalScore === 100) {
      starCount = 3;
      titleText = "Luar Biasa! Jawabanmu Sempurna!";
      motivationText = "Hebat sekali! Kamu berhasil menjawab semua soal dengan tepat seperti Si Kancil yang cerdik!";
    } else if (finalScore >= 70) {
      starCount = 2;
      titleText = "Bagus Sekali! Nilai Kamu Tinggi!";
      motivationText = "Pemahamanmu sudah sangat baik. Perhatikan sedikit koreksi di bawah agar nilaimu bisa mencapai 100!";
    }

    this.resultsTitle.textContent = titleText;
    this.resultsMotivation.textContent = motivationText;

    // Render Bintang Komik Bersinar
    this.renderStars(starCount);

    // Bunyikan Melodi Fanfare & Animasi Konfeti Perayaan
    this.audio.playFanfare();
    this.startConfetti();

    // Render Lembar Koreksi Seluruh Jawaban
    this.renderReviewList();
  }

  // Render 3 Bintang Komik Bersinar
  renderStars(count) {
    this.starsContainer.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const isFilled = (i <= count);
      const starWrapper = document.createElement("div");
      starWrapper.innerHTML = IconService.star(isFilled, 48);
      
      // Delay efek suara ting bintang
      if (isFilled) {
        setTimeout(() => {
          this.audio.playStarDing(i - 1);
        }, i * 280);
      }

      this.starsContainer.appendChild(starWrapper.firstElementChild);
    }
  }

  // Render Lembar Koreksi Seluruh Jawaban (Requirement #4)
  renderReviewList() {
    this.reviewListContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    this.questions.forEach((q, idx) => {
      const userSelected = this.userAnswers[idx];
      const isCorrect = (userSelected === q.answerIndex);
      const userAnswerText = (userSelected !== null) 
        ? `${letters[userSelected]}. ${q.options[userSelected]}` 
        : "Belum sempat dijawab";
      const correctAnswerText = `${letters[q.answerIndex]}. ${q.options[q.answerIndex]}`;

      const card = document.createElement("div");
      card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

      card.innerHTML = `
        <div class="review-item-header">
          <span class="review-q-num">
            <i class="fa-solid fa-file-pen"></i> Soal Nomor ${idx + 1}
          </span>
          ${IconService.statusBadge(isCorrect)}
        </div>

        <div class="review-question-text">
          ${q.question}
        </div>

        <div class="review-answers-box">
          <div class="answer-row">
            <span class="answer-label">Jawaban Kamu:</span>
            <span class="answer-val-user ${isCorrect ? 'text-correct' : 'text-wrong'}">
              ${userAnswerText}
            </span>
          </div>
          ${!isCorrect ? `
            <div class="answer-row">
              <span class="answer-label">Kunci Jawaban yang Benar:</span>
              <span class="answer-val-correct">
                <i class="fa-solid fa-circle-check"></i> ${correctAnswerText}
              </span>
            </div>
          ` : ''}
        </div>

        <div class="review-explanation-box">
          <div class="explanation-icon">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <div class="explanation-content">
            <h5>Koreksi & Pembahasan Edukatif:</h5>
            <p>${q.explanation}</p>
          </div>
        </div>
      `;

      this.reviewListContainer.appendChild(card);
    });
  }

  // Animasi Konfeti Kanvas Ceria untuk Layar Akhir
  startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const particles = [];
    const colors = ["#FACC15", "#38BDF8", "#34D399", "#FB923C", "#F87171", "#A78BFA"];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10 - Math.random() * 80,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        angle: Math.random() * 360,
        spin: Math.random() * 8 - 4
      });
    }

    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.strokeStyle = "#1E293B";
        ctx.lineWidth = 1.5;

        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });

      frameCount++;
      if (frameCount < 360) {
        this.confettiAnimationId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    if (this.confettiAnimationId) cancelAnimationFrame(this.confettiAnimationId);
    this.confettiAnimationId = requestAnimationFrame(animate);
  }

  stopConfetti() {
    if (this.confettiAnimationId) {
      cancelAnimationFrame(this.confettiAnimationId);
      this.confettiAnimationId = null;
    }
    const canvas = document.getElementById("confetti-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener("DOMContentLoaded", () => {
  window.app = new QuizApp();
});

