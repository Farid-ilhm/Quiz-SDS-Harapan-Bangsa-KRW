/**
 * Aplikasi Kuis Matematika SD - Logika Interaktif
 * Mengatur alur pemilihan kelas, kuis interaktif, text-to-speech,
 * animasi reward piala & bintang, serta lembar review koreksi lengkap.
 */

document.addEventListener("DOMContentLoaded", () => {
  const audio = new AudioController();

  // State Aplikasi
  let currentGradeId = 1;
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = []; // Menyimpan index pilihan anak untuk setiap soal

  // Elemen DOM Layar
  const screens = {
    grades: document.getElementById("grades-screen"),
    quiz: document.getElementById("quiz-screen"),
    results: document.getElementById("results-screen")
  };

  // Elemen Header & Kontrol
  const btnToggleSound = document.getElementById("btn-toggle-sound");
  const soundIconBox = document.getElementById("sound-icon-box");
  const soundLabelText = document.getElementById("sound-label-text");

  // Elemen Layar Kuis
  const gradesContainer = document.getElementById("grades-container");
  const btnBackHome = document.getElementById("btn-back-home");
  const btnBackIcon = document.getElementById("btn-back-icon");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const progressFill = document.getElementById("progress-fill");
  const progressTrack = document.querySelector(".progress-track");
  const questionTopic = document.getElementById("question-topic");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const btnSpeakQuestion = document.getElementById("btn-speak-question");
  const speakerIconBox = document.getElementById("speaker-icon-box");
  const speechBtnLabel = document.getElementById("speech-btn-label");
  const feedbackBanner = document.getElementById("feedback-banner");
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackHeading = document.getElementById("feedback-heading");
  const feedbackSub = document.getElementById("feedback-sub");
  const btnNextQuestion = document.getElementById("btn-next-question");
  const nextBtnIcon = document.getElementById("next-btn-icon");

  // Elemen Layar Hasil
  const confettiCanvas = document.getElementById("confetti-canvas");
  const scoreStars = document.getElementById("score-stars");
  const scoreTitle = document.getElementById("score-title");
  const scoreMessage = document.getElementById("score-message");
  const scoreMetric = document.getElementById("score-metric");
  const btnRetryQuiz = document.getElementById("btn-retry-quiz");
  const retryBtnIcon = document.getElementById("retry-btn-icon");
  const btnChangeGrade = document.getElementById("btn-change-grade");
  const changeGradeIcon = document.getElementById("change-grade-icon");
  const reviewBookIcon = document.getElementById("review-book-icon");
  const reviewList = document.getElementById("review-list");

  // Sistem Animasi Confetti Partikel
  let confettiAnimationId = null;

  // Inisialisasi Icon Statis dari AppIcons
  function initStaticIcons() {
    soundIconBox.innerHTML = AppIcons.volumeHigh;
    btnBackIcon.innerHTML = AppIcons.arrowLeft;
    speakerIconBox.innerHTML = AppIcons.readAloud;
    nextBtnIcon.innerHTML = AppIcons.arrowRight;
    retryBtnIcon.innerHTML = AppIcons.refresh;
    changeGradeIcon.innerHTML = AppIcons.graduationCap;
    reviewBookIcon.innerHTML = AppIcons.bookOpen;
  }

  // Render Grid Pilihan Kelas 1 sampai 6 di Dashboard
  function renderGradesGrid() {
    gradesContainer.innerHTML = "";

    for (let grade = 1; grade <= 6; grade++) {
      const data = MathQuestionsData[grade];
      if (!data) continue;

      const card = document.createElement("article");
      card.className = "grade-card";
      card.style.borderColor = "#1E293B";

      const iconSvg = AppIcons[data.gradeIcon] || AppIcons.seedling;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-badge" style="background: ${data.themeColor};">
            ${iconSvg}
          </div>
          <span class="grade-level-pill">${data.gradeBadge}</span>
        </div>
        <h3 class="grade-card-title">${data.gradeName}</h3>
        <p class="grade-card-desc">${data.description}</p>
        <button type="button" class="btn-start-grade" data-grade="${grade}" aria-label="Mulai Kuis ${data.gradeName}">
          <span>Mulai Kuis</span>
          ${AppIcons.arrowRight}
        </button>
      `;

      const btnStart = card.querySelector(".btn-start-grade");
      btnStart.addEventListener("click", () => {
        audio.playClick();
        startQuiz(grade);
      });

      gradesContainer.appendChild(card);
    }
  }

  // Tampilkan Layar Tertentu
  function showScreen(screenName) {
    Object.keys(screens).forEach(key => {
      if (key === screenName) {
        screens[key].classList.remove("d-none");
      } else {
        screens[key].classList.add("d-none");
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Mulai Kuis untuk Kelas Tertentu
  function startQuiz(gradeId) {
    currentGradeId = gradeId;
    const gradeData = MathQuestionsData[gradeId];
    if (!gradeData) return;

    currentQuestions = gradeData.questions;
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);

    stopConfetti();
    audio.stopSpeech();
    showScreen("quiz");
    renderCurrentQuestion();
  }

  // Render Soal yang Sedang Aktif
  function renderCurrentQuestion() {
    audio.stopSpeech();
    resetSpeechButton();

    const q = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;
    const currentNum = currentQuestionIndex + 1;
    const percent = Math.round((currentNum / total) * 100);

    // Update Progress
    progressText.textContent = `Soal ${currentNum} dari ${total}`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    progressTrack.setAttribute("aria-valuenow", currentNum);

    // Update Pertanyaan
    questionTopic.textContent = `Topik: ${q.topic}`;
    questionText.textContent = q.question;

    // Sembunyikan Feedback Banner
    feedbackBanner.classList.add("d-none");
    feedbackBanner.classList.remove("correct", "wrong");

    // Render Pilihan Jawaban
    optionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("data-index", idx);
      btn.setAttribute("aria-label", `Pilihan ${letters[idx]}: ${optText}`);

      btn.innerHTML = `
        <span class="option-badge">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      `;

      btn.addEventListener("click", () => {
        handleSelectOption(idx);
      });

      optionsContainer.appendChild(btn);
    });

    // Sesuaikan teks tombol lanjut jika soal terakhir
    if (currentQuestionIndex === total - 1) {
      btnNextQuestion.querySelector("span").textContent = "Lihat Hasil Kuis";
    } else {
      btnNextQuestion.querySelector("span").textContent = "Lanjut Soal Berikutnya";
    }
  }

  // Menangani Pilihan Siswa
  function handleSelectOption(selectedIndex) {
    const q = currentQuestions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;

    const allButtons = optionsContainer.querySelectorAll(".option-btn");
    allButtons.forEach(btn => {
      btn.disabled = true;
    });

    const isCorrect = selectedIndex === q.correctIndex;
    const selectedBtn = optionsContainer.querySelector(`[data-index="${selectedIndex}"]`);

    if (isCorrect) {
      audio.playCorrect();
      if (selectedBtn) selectedBtn.classList.add("selected-correct");

      feedbackBanner.className = "answer-feedback-banner correct";
      feedbackIcon.innerHTML = AppIcons.check;
      feedbackHeading.textContent = "Jawabanmu Hebat!";
      feedbackSub.textContent = "Pintar sekali, jawabanmu tepat 100%!";
    } else {
      audio.playWrong();
      if (selectedBtn) selectedBtn.classList.add("selected-wrong");

      // Tampilkan juga jawaban yang benar agar siswa belajar langsung
      const correctBtn = optionsContainer.querySelector(`[data-index="${q.correctIndex}"]`);
      if (correctBtn) correctBtn.classList.add("reveal-correct");

      feedbackBanner.className = "answer-feedback-banner wrong";
      feedbackIcon.innerHTML = AppIcons.cross;
      feedbackHeading.textContent = "Ayo Semangat!";
      feedbackSub.textContent = "Jawabanmu belum tepat, tapi tidak apa-apa! Di akhir ada pembahasan lengkapnya.";
    }

    feedbackBanner.classList.remove("d-none");
    btnNextQuestion.focus();
  }

  // Lanjut ke Soal Berikutnya atau Selesai
  function handleNextQuestion() {
    audio.playClick();
    audio.stopSpeech();

    if (currentQuestionIndex < currentQuestions.length - 1) {
      currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      showResults();
    }
  }

  // Tampilkan Halaman Hasil & Lembar Review
  function showResults() {
    audio.stopSpeech();
    showScreen("results");

    const total = currentQuestions.length;
    let correctCount = 0;

    userAnswers.forEach((ans, idx) => {
      if (ans === currentQuestions[idx].correctIndex) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / total) * 100);

    // Update Nilai & Teks Penghargaan
    scoreMetric.textContent = `Nilai Kamu: ${correctCount} dari ${total} (${percentage}%)`;

    let starsCount = 1;
    if (percentage === 100) {
      starsCount = 5;
      scoreTitle.textContent = "Luar Biasa Sempurna! Kamu Juara!";
      scoreMessage.textContent = "Hebat sekali! Semua 10 soal berhasil kamu jawab dengan benar tanpa ada kesalahan!";
      audio.playVictory();
      startConfetti();
    } else if (percentage >= 80) {
      starsCount = 4;
      scoreTitle.textContent = "Hebat Banget! Kamu Pintar Sekali!";
      scoreMessage.textContent = "Nilaimu sangat membanggakan! Terus pertahankan semangat belajarmu yang luar biasa ini ya!";
      audio.playVictory();
      startConfetti();
    } else if (percentage >= 60) {
      starsCount = 3;
      scoreTitle.textContent = "Bagus Sekali! Kamu Sudah Berusaha!";
      scoreMessage.textContent = "Kerja yang bagus! Pelajari koreksi di bawah ini agar saat mencoba lagi nilaimu bisa mencapai 100!";
      audio.playCorrect();
    } else if (percentage >= 40) {
      starsCount = 2;
      scoreTitle.textContent = "Tetap Semangat! Jangan Menyerah!";
      scoreMessage.textContent = "Jangan berkecil hati ya! Yuk baca cara hitung di lembar koreksi bawah, lalu coba sekali lagi!";
      audio.playCorrect();
    } else {
      starsCount = 1;
      scoreTitle.textContent = "Ayo Belajar Bersama Lagi!";
      scoreMessage.textContent = "Setiap juara pernah belajar dari kesalahan. Periksa pembahasan di bawah untuk memahami caranya ya!";
      audio.playCorrect();
    }

    // Render Bintang Beranimasi Bertahap (Staggered Pop-In)
    scoreStars.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const starSpan = document.createElement("span");
      starSpan.className = "star-pop-item";
      starSpan.style.opacity = "0";
      starSpan.innerHTML = (i <= starsCount) ? AppIcons.starSolid : AppIcons.starOutline;
      scoreStars.appendChild(starSpan);

      setTimeout(() => {
        starSpan.style.opacity = "1";
        if (i <= starsCount) {
          audio.playStarPop();
        }
      }, i * 220);
    }

    // Render Lembar Review Koreksi Lengkap
    renderReviewSection();
  }

  // Render Daftar Lengkap Soal & Koreksi
  function renderReviewSection() {
    reviewList.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    currentQuestions.forEach((q, idx) => {
      const userChoiceIdx = userAnswers[idx];
      const isCorrect = userChoiceIdx === q.correctIndex;

      const userChoiceText = userChoiceIdx !== null ? q.options[userChoiceIdx] : "Tidak dijawab";
      const userChoiceLetter = userChoiceIdx !== null ? letters[userChoiceIdx] : "-";
      const correctChoiceText = q.options[q.correctIndex];
      const correctChoiceLetter = letters[q.correctIndex];

      const itemCard = document.createElement("article");
      itemCard.className = `review-item-card ${isCorrect ? "is-correct" : "is-wrong"}`;

      itemCard.innerHTML = `
        <div class="review-item-top">
          <span class="review-q-num">Nomor ${idx + 1} &bull; ${q.topic}</span>
          <span class="review-status-badge ${isCorrect ? "badge-correct" : "badge-wrong"}">
            ${isCorrect ? AppIcons.check : AppIcons.cross}
            <span>${isCorrect ? "Jawaban Benar" : "Perlu Koreksi"}</span>
          </span>
        </div>

        <h3 class="review-question-text">${q.question}</h3>

        <div class="review-answer-comparison">
          <div class="user-answer-box ${isCorrect ? "user-correct" : "user-wrong"}">
            <span class="answer-label">Jawaban Kamu:</span>
            <strong>Pilihan ${userChoiceLetter}:</strong> ${userChoiceText}
          </div>
          <div class="correct-answer-box">
            <span class="answer-label">Kunci Jawaban yang Benar:</span>
            <strong>Pilihan ${correctChoiceLetter}:</strong> ${correctChoiceText}
          </div>
        </div>

        ${!isCorrect ? `
          <div class="correction-box">
            <div class="correction-header">
              ${AppIcons.bulb}
              <span>Penjelasan & Cara Hitung Ramah Anak:</span>
            </div>
            <p class="correction-text">${q.explanation}</p>
          </div>
        ` : `
          <div class="correction-box" style="background: #F0FDF4; border-color: #86EFAC;">
            <div class="correction-header" style="color: #166534;">
              ${AppIcons.check}
              <span>Penjelasan Singkat:</span>
            </div>
            <p class="correction-text" style="color: #14532D;">${q.explanation}</p>
          </div>
        `}
      `;

      reviewList.appendChild(itemCard);
    });
  }

  // Text-To-Speech: Membaca Soal
  function toggleSpeech() {
    if (audio.isSpeaking) {
      audio.stopSpeech();
      resetSpeechButton();
      return;
    }

    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;

    const letters = ["A", "B", "C", "D"];
    let speechScript = `Soal nomor ${currentQuestionIndex + 1}. Topik: ${q.topic}. ${q.question}. `;
    q.options.forEach((opt, idx) => {
      speechScript += `Pilihan ${letters[idx]}: ${opt}. `;
    });

    btnSpeakQuestion.classList.add("speaking");
    speechBtnLabel.textContent = "Sedang Membaca...";

    audio.speakText(
      speechScript,
      () => {
        btnSpeakQuestion.classList.add("speaking");
        speechBtnLabel.textContent = "Sedang Membaca...";
      },
      () => {
        resetSpeechButton();
      }
    );
  }

  function resetSpeechButton() {
    btnSpeakQuestion.classList.remove("speaking");
    speechBtnLabel.textContent = "Dengarkan Soal";
  }

  // Toggle On/Off Suara Keseluruhan
  function handleToggleSound() {
    const isEnabled = audio.toggleSound();
    btnToggleSound.setAttribute("aria-pressed", (!isEnabled).toString());

    if (isEnabled) {
      soundIconBox.innerHTML = AppIcons.volumeHigh;
      soundLabelText.textContent = "Suara: Nyala";
      audio.playClick();
    } else {
      soundIconBox.innerHTML = AppIcons.volumeMute;
      soundLabelText.textContent = "Suara: Senyap";
    }
  }

  // =========================================================================
  // SISTEM ANIMASI KEMENANGAN (CANVAS CONFETTI PARTICLES)
  // =========================================================================
  function startConfetti() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext("2d");
    const width = (confettiCanvas.width = window.innerWidth);
    const height = (confettiCanvas.height = window.innerHeight);

    const colors = ["#FACC15", "#38BDF8", "#4ADE80", "#FB923C", "#F472B6", "#A78BFA"];
    const particles = [];
    const particleCount = 110;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        velX: Math.random() * 4 - 2,
        velY: Math.random() * 3 + 3,
        rotation: Math.random() * 360,
        rotSpeed: Math.random() * 8 - 4
      });
    }

    let startTime = Date.now();
    const duration = 4000; // 4 detik pesta confetti

    function update() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.velX;
        p.y += p.velY;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
      });

      if (Date.now() - startTime < duration) {
        confettiAnimationId = requestAnimationFrame(update);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    update();
  }

  function stopConfetti() {
    if (confettiAnimationId) {
      cancelAnimationFrame(confettiAnimationId);
      confettiAnimationId = null;
    }
    if (confettiCanvas) {
      const ctx = confettiCanvas.getContext("2d");
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // Event Listeners
  btnToggleSound.addEventListener("click", handleToggleSound);

  btnBackHome.addEventListener("click", () => {
    audio.playClick();
    audio.stopSpeech();
    showScreen("grades");
  });

  btnSpeakQuestion.addEventListener("click", () => {
    audio.playClick();
    toggleSpeech();
  });

  btnNextQuestion.addEventListener("click", handleNextQuestion);

  btnRetryQuiz.addEventListener("click", () => {
    audio.playClick();
    startQuiz(currentGradeId);
  });

  btnChangeGrade.addEventListener("click", () => {
    audio.playClick();
    stopConfetti();
    audio.stopSpeech();
    showScreen("grades");
  });

  // Handle Resize untuk Canvas Confetti
  window.addEventListener("resize", () => {
    if (confettiCanvas) {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
  });

  // Jalankan Inisialisasi
  initStaticIcons();
  renderGradesGrid();
  showScreen("grades");
});

