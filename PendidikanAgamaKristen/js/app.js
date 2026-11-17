/**
 * Kuis Pendidikan Agama Kristen (PAK) SD - Kontroler Utama Aplikasi
 * Mengatur alur kuis kelas 1-6 SD, navigasi soal, pembacaan suara (TTS),
 * efek suara Web Audio API synthesizer, animasi piala/konfeti, maskot interaktif,
 * dan lembar koreksi edukatif lengkap.
 */

class ChristianQuizApp {
  constructor() {
    this.audio = new AudioController();
    this.currentGrade = 1;
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.confettiAnimationId = null;

    // Gimmick Ucapan Maskot Domba Cilik
    this.mascotQuotes = [
      "Halo Sahabat Cilik! Pilih kelasmu dan ayo mulai kuis seru!",
      "Yesus sangat mengasihimu! Belajar Firman-Nya itu penuh sukacita!",
      "Tahukah kamu? Firman Tuhan adalah pelita bagi langkah kita!",
      "Ayo uji pemahamanmu tentang kasih, kejujuran, dan kisah Alkitab!",
      "Kamu adalah anak yang istimewa dan luar biasa di mata Tuhan!"
    ];
    this.quoteIndex = 0;

    // Elemen DOM Layar
    this.screenGrades = document.getElementById("grades-screen");
    this.screenQuiz = document.getElementById("quiz-screen");
    this.screenResults = document.getElementById("results-screen");

    // Header Suara & Navigasi
    this.btnToggleSound = document.getElementById("btn-toggle-sound");
    this.soundLabelText = document.getElementById("sound-label-text");

    // Maskot & Gimmick Dashboard
    this.mascotElement = document.querySelector(".hero-mascot-container");
    this.speechBubble = document.getElementById("mascot-speech-bubble");

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

    // Gimmick Animasi Klik Maskot Domba di Dashboard
    if (this.mascotElement) {
      this.mascotElement.addEventListener("click", () => {
        this.audio.playPop();
        const svg = this.mascotElement.querySelector("svg");
        if (svg) {
          svg.classList.remove("anim-mascot-jump");
          void svg.offsetWidth; // Force reflow
          svg.classList.add("anim-mascot-jump");
        }

        this.quoteIndex = (this.quoteIndex + 1) % this.mascotQuotes.length;
        if (this.speechBubble) {
          this.speechBubble.textContent = this.mascotQuotes[this.quoteIndex];
          this.speechBubble.classList.remove("pop-bubble");
          void this.speechBubble.offsetWidth;
          this.speechBubble.classList.add("pop-bubble");
        }
      });
    }

    // Tombol Kembali ke Menu Pilihan Kelas dari Kuis
    if (this.btnBackHome) {
      this.btnBackHome.addEventListener("click", () => {
        this.audio.playPop();
        this.audio.stopSpeech();
        if (confirm("Apakah kamu ingin kembali ke menu pilihan kelas? Progres kuis saat ini akan diulang.")) {
          this.showDashboard();
        }
      });
    }

    // Tombol Fitur Suara (TTS) Pembaca Soal
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

    // Tombol Mulai Kuis pada Setiap Kartu Kelas
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

  // Memulai Kuis Sesuai Kelas (10 Soal per kelas)
  startQuiz(grade) {
    this.currentGrade = grade;
    this.questions = ChristianQuizQuestions.filter(q => q.grade === grade);

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

  // Menampilkan Pertanyaan Aktif
  renderQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Update Header Kuis & Progress Bar
    this.badgeGrade.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Kelas ${q.grade} SD`;
    this.badgeCounter.innerHTML = `<i class="fa-solid fa-list-ol"></i> Soal ${this.currentIndex + 1} dari ${this.questions.length}`;

    const percent = ((this.currentIndex + 1) / this.questions.length) * 100;
    this.progressBar.style.width = `${percent}%`;

    // Update Topik Soal & Pertanyaan
    this.qTopicPill.innerHTML = `${IconService.fa(q.icon)} <span>${q.topic}</span>`;
    this.qTextElem.textContent = q.question;

    // Reset Indikator Tombol Suara
    this.resetSpeechButton();

    // Render Opsi Jawaban Pilihan Ganda (A, B, C, D)
    this.renderOptions(q);

    // Render Titik Navigasi Lompat Nomor Soal
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

    // Beri efek highlight pada tombol yang dipilih
    const buttons = this.optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach((b, idx) => {
      if (idx === optionIndex) {
        b.classList.add("selected");
      } else {
        b.classList.remove("selected");
      }
    });

    // Update status indikator nomor soal
    this.renderJumpDots();
  }

  // Render Indikator Titik Lompat Nomor Soal 1-10
  renderJumpDots() {
    this.jumpDotsContainer.innerHTML = "";
    this.questions.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot-step";
      dot.textContent = idx + 1;
      dot.setAttribute("aria-label", `Lompat ke soal nomor ${idx + 1}`);

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

  // Fitur Text-To-Speech Pembaca Soal Suara
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
          // Animasi gelombang suara aktif
          this.btnSpeech.classList.add("speaking");
          this.btnSpeech.innerHTML = `
            <div class="soundwave-anim">
              <span class="soundwave-bar"></span>
              <span class="soundwave-bar"></span>
              <span class="soundwave-bar"></span>
              <span class="soundwave-bar"></span>
            </div>
            <span>Sedang Membacakan Soal...</span>
          `;
        },
        () => {
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

  // Selesaikan Kuis & Buka Layar Hasil dan Rangkuman Koreksi Lengkap
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

    // Beralih ke Layar Hasil
    this.screenQuiz.classList.add("d-none");
    this.screenResults.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update Nilai & Rincian
    this.scoreMainText.textContent = `${finalScore}/100`;
    this.scoreCorrectCount.textContent = `${correctCount} Benar`;
    this.scoreWrongCount.textContent = `${wrongCount} Perlu Diingat`;

    // Tentukan Jumlah Bintang Komik & Kalimat Motivasi Kristiani
    let starCount = 1;
    let titleText = "Hebat! Kamu Sudah Berusaha!";
    let motivationText = "Puji Tuhan atas semangat belajarmu! Yuk pelajari lembar koreksi di bawah agar semakin memahami Firman Tuhan dan teladan kasih-Nya.";

    if (finalScore === 100) {
      starCount = 3;
      titleText = "Puji Tuhan! Jawabanmu Sempurna!";
      motivationText = "Luar biasa sekali! Kamu berhasil menjawab seluruh soal dengan tepat dan bijaksana. Teruslah menjadi terang dan teladan bagi teman-teman!";
    } else if (finalScore >= 70) {
      starCount = 2;
      titleText = "Bagus Sekali! Nilai Kamu Tinggi!";
      motivationText = "Pemahamanmu tentang Firman Tuhan sudah sangat baik. Pelajari sedikit koreksi di bawah ini agar nilaimu semakin sempurna!";
    }

    this.resultsTitle.textContent = titleText;
    this.resultsMotivation.textContent = motivationText;

    // Tampilkan Animasi Bintang Komik Bersinar
    this.renderStars(starCount);

    // Suara Fanfare & Animasi Konfeti Perayaan
    this.audio.playFanfare();
    this.startConfetti();

    // Tampilkan Lembar Koreksi Seluruh Jawaban (Requirement #4)
    this.renderReviewList();
  }

  // Render 3 Bintang Komik Bersinar dengan Efek Suara Ding Bertahap
  renderStars(count) {
    this.starsContainer.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const isFilled = (i <= count);
      const starWrapper = document.createElement("div");
      starWrapper.className = "star-item-wrap";
      starWrapper.innerHTML = IconService.star(isFilled, 48);

      if (isFilled) {
        setTimeout(() => {
          this.audio.playStarDing(i - 1);
        }, i * 280);
      }

      this.starsContainer.appendChild(starWrapper);
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
            <i class="fa-solid fa-file-lines"></i> Soal Nomor ${idx + 1} &bull; ${q.topic}
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
              <span class="answer-label">Kunci Jawaban yang Tepat:</span>
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

    for (let i = 0; i < 75; i++) {
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
  window.app = new ChristianQuizApp();
});

