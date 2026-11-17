/**
 * Logika Utama Aplikasi Kuis Pendidikan Pancasila SD
 * Mengatur alur:
 * - Pilihan Kelas 1 - 6 (Dashboard Ceria)
 * - Layar Kuis dengan Text-to-Speech (Web Speech API) & Audio Efek Komik (Web Audio API)
 * - Review Lengkap & Koreksi Ramah Anak
 * - Gimmick Animasi Maskot Interaktif & Perayaan Piala Bintang
 */

document.addEventListener("DOMContentLoaded", () => {
  const audio = new AudioController();

  // State Aplikasi
  let currentGradeId = 1;
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = []; // Menyimpan pilihan anak untuk setiap nomor
  let hasSelectedCurrent = false;

  // Kutipan Ceria Maskot Gaga
  const mascotQuotes = [
    "Halo Sahabat Cilik! Ayo belajar Pendidikan Pancasila bersama Gaga!",
    "Bhinneka Tunggal Ika: Walau kita berbeda suku dan hobi, kita tetap satu keluarga Indonesia!",
    "Garuda Pancasila adalah lambang negara kita yang gagah dan penuh nilai luhur!",
    "Siap jadi anak hebat yang jujur, santun, dan suka tolong-menolong?",
    "Pilih kelasmu di bawah, lalu klik 'Mulai Kuis' ya sahabat juara!"
  ];
  let quoteIndex = 0;

  // Elemen DOM Layar
  const screens = {
    grades: document.getElementById("grades-screen"),
    quiz: document.getElementById("quiz-screen"),
    results: document.getElementById("results-screen")
  };

  // Elemen Header & Kontrol Global
  const btnToggleSound = document.getElementById("btn-toggle-sound");
  const soundIconBox = document.getElementById("sound-icon-box");
  const soundLabelText = document.getElementById("sound-label-text");

  // Elemen Layar Dashboard
  const gradesContainer = document.getElementById("grades-container");
  const mascotInteractiveBox = document.getElementById("mascot-interactive-box");
  const mascotSpeechText = document.getElementById("mascot-speech-text");
  const mascotSpeechBubble = document.getElementById("mascot-speech-bubble");

  // Elemen Layar Kuis
  const btnBackHome = document.getElementById("btn-back-home");
  const btnBackIcon = document.getElementById("btn-back-icon");
  const quizGradeBadge = document.getElementById("quiz-grade-badge");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const progressFill = document.getElementById("progress-fill");
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

  // Elemen Layar Hasil & Review
  const confettiCanvas = document.getElementById("confetti-canvas");
  const celebrationTrophyBox = document.getElementById("celebration-trophy-box");
  const scoreStarsContainer = document.getElementById("score-stars-container");
  const scoreTitle = document.getElementById("score-title");
  const scoreMessage = document.getElementById("score-message");
  const scoreFinalNumber = document.getElementById("score-final-number");
  const statCorrect = document.getElementById("stat-correct");
  const statWrong = document.getElementById("stat-wrong");
  const btnRetryQuiz = document.getElementById("btn-retry-quiz");
  const retryBtnIcon = document.getElementById("retry-btn-icon");
  const btnChangeGrade = document.getElementById("btn-change-grade");
  const changeGradeIcon = document.getElementById("change-grade-icon");
  const btnReconfetti = document.getElementById("btn-reconfetti");
  const reviewBookIcon = document.getElementById("review-book-icon");
  const reviewList = document.getElementById("review-list");
  const filterAllBtn = document.getElementById("filter-all-btn");
  const filterWrongBtn = document.getElementById("filter-wrong-btn");
  const filterCorrectBtn = document.getElementById("filter-correct-btn");

  // State Sistem Konfeti
  let confettiAnimationId = null;
  let confettiParticles = [];

  // Inisialisasi Icon Statis
  function initStaticIcons() {
    if (soundIconBox) soundIconBox.innerHTML = AppIcons.volumeHigh;
    if (btnBackIcon) btnBackIcon.innerHTML = AppIcons.arrowLeft;
    if (speakerIconBox) speakerIconBox.innerHTML = AppIcons.readAloud;
    if (nextBtnIcon) nextBtnIcon.innerHTML = AppIcons.arrowRight;
    if (retryBtnIcon) retryBtnIcon.innerHTML = AppIcons.refresh;
    if (changeGradeIcon) changeGradeIcon.innerHTML = AppIcons.graduationCap;
    if (reviewBookIcon) reviewBookIcon.innerHTML = AppIcons.bookOpen;
  }

  // Render Kartu Pilihan Kelas 1 sampai 6 di Dashboard
  function renderGradesGrid() {
    gradesContainer.innerHTML = "";

    for (let grade = 1; grade <= 6; grade++) {
      const data = PancasilaQuestionsData[grade];
      if (!data) continue;

      const card = document.createElement("article");
      card.className = "grade-card";
      card.style.setProperty("--grade-accent", data.accentColor);

      const iconSvg = AppIcons[data.gradeIcon] || AppIcons.shieldPancasila;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-badge" style="background: ${data.themeColor}; color: ${data.accentColor};">
            ${iconSvg}
          </div>
          <span class="grade-level-pill">${data.gradeBadge}</span>
        </div>
        <h3 class="grade-card-title">${data.gradeName}</h3>
        <p class="grade-card-desc">${data.description}</p>
        <div class="grade-card-footer">
          <span class="grade-soal-count">
            <span class="count-bullet" aria-hidden="true"></span>
            10 Soal Interaktif
          </span>
          <button type="button" class="btn-start-grade" data-grade="${grade}" aria-label="Mulai Kuis ${data.gradeName}">
            <span>Mulai Kuis</span>
            <span class="btn-arrow-icon" aria-hidden="true">${AppIcons.arrowRight}</span>
          </button>
        </div>
      `;

      const startBtn = card.querySelector(".btn-start-grade");
      startBtn.addEventListener("click", () => {
        audio.playClick();
        startQuizForGrade(grade);
      });

      gradesContainer.appendChild(card);
    }
  }

  // Gimmick Maskot Interaktif di Dashboard
  if (mascotInteractiveBox) {
    mascotInteractiveBox.addEventListener("click", () => {
      audio.playHop();
      
      // Animasi Hop Kartun
      mascotInteractiveBox.classList.remove("hop-animation");
      void mascotInteractiveBox.offsetWidth; // Force reflow
      mascotInteractiveBox.classList.add("hop-animation");

      // Ganti kata-kata ceria
      quoteIndex = (quoteIndex + 1) % mascotQuotes.length;
      if (mascotSpeechText) {
        mascotSpeechText.textContent = mascotSpeechText.textContent === mascotQuotes[quoteIndex] 
          ? mascotQuotes[(quoteIndex + 1) % mascotQuotes.length]
          : mascotQuotes[quoteIndex];
      }

      // Animasi Speech Bubble Pop
      if (mascotSpeechBubble) {
        mascotSpeechBubble.classList.remove("bubble-pop");
        void mascotSpeechBubble.offsetWidth;
        mascotSpeechBubble.classList.add("bubble-pop");
      }
    });
  }

  // Mulai Kuis untuk Kelas Tertentu
  function startQuizForGrade(gradeId) {
    currentGradeId = gradeId;
    const gradeData = PancasilaQuestionsData[gradeId];
    if (!gradeData) return;

    // Muat 10 soal untuk kelas ini
    currentQuestions = gradeData.questions;
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);

    // Update label kelas di layar kuis
    quizGradeBadge.textContent = `${gradeData.gradeName} • ${gradeData.gradeBadge}`;

    showScreen("quiz");
    renderCurrentQuestion();
  }

  // Render Soal yang Sedang Aktif
  function renderCurrentQuestion() {
    audio.stopSpeech();
    hasSelectedCurrent = false;

    // Reset tombol bicara
    setSpeakerActive(false);

    // Sembunyikan banner umpan balik
    feedbackBanner.classList.add("d-none");
    feedbackBanner.className = "feedback-banner d-none";

    // Nonaktifkan tombol lanjut sampai anak memilih
    btnNextQuestion.disabled = true;
    btnNextQuestion.setAttribute("aria-disabled", "true");

    const total = currentQuestions.length;
    const currentQ = currentQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    // Update Bar Kemajuan (Progress)
    const percent = Math.round(((questionNumber - 1) / total) * 100);
    progressText.textContent = `Soal ${questionNumber} dari ${total}`;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;

    // Topik & Teks Soal
    questionTopic.textContent = currentQ.topic;
    questionText.textContent = currentQ.question;

    // Render Pilihan Jawaban (A, B, C atau A, B, C, D)
    optionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    currentQ.options.forEach((optText, idx) => {
      const optButton = document.createElement("button");
      optButton.type = "button";
      optButton.className = "comic-option-btn";
      optButton.setAttribute("role", "radio");
      optButton.setAttribute("aria-checked", "false");
      optButton.setAttribute("data-index", idx);

      optButton.innerHTML = `
        <span class="option-badge">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
        <span class="option-check-icon" aria-hidden="true"></span>
      `;

      optButton.addEventListener("click", () => {
        handleOptionSelected(idx);
      });

      optionsContainer.appendChild(optButton);
    });

    // Update Teks Tombol Lanjut (Next vs Selesai)
    const isLastQuestion = currentQuestionIndex === total - 1;
    const nextTextSpan = btnNextQuestion.querySelector(".btn-next-text");
    if (nextTextSpan) {
      nextTextSpan.textContent = isLastQuestion ? "Selesai & Lihat Nilai" : "Soal Selanjutnya";
    }
  }

  // Handler Ketika Anak Memilih Salah Satu Opsi
  function handleOptionSelected(selectedIndex) {
    if (hasSelectedCurrent) return; // Mencegah double klik
    hasSelectedCurrent = true;

    audio.stopSpeech();
    userAnswers[currentQuestionIndex] = selectedIndex;

    const currentQ = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.correctAnswer;

    // Beri suara umpan balik
    if (isCorrect) {
      audio.playCorrect();
    } else {
      audio.playWrong();
    }

    // Update gaya semua tombol opsi
    const allOptions = optionsContainer.querySelectorAll(".comic-option-btn");
    allOptions.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove("selected", "correct", "wrong");

      const checkIcon = btn.querySelector(".option-check-icon");

      if (idx === currentQ.correctAnswer) {
        btn.classList.add("correct");
        checkIcon.innerHTML = AppIcons.checkCircle;
      }

      if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
        checkIcon.innerHTML = AppIcons.timesCircle;
      }

      if (idx === selectedIndex) {
        btn.setAttribute("aria-checked", "true");
      }
    });

    // Tampilkan Banner Umpan Balik Ceria
    showFeedbackBanner(isCorrect, currentQ.explanation);

    // Aktifkan Tombol Lanjut
    btnNextQuestion.disabled = false;
    btnNextQuestion.setAttribute("aria-disabled", "false");
    btnNextQuestion.focus();
  }

  // Tampilkan Banner Umpan Balik di Bawah Opsi
  function showFeedbackBanner(isCorrect, explanation) {
    feedbackBanner.classList.remove("d-none");
    if (isCorrect) {
      feedbackBanner.className = "feedback-banner banner-correct";
      feedbackIcon.innerHTML = AppIcons.sparkle;
      feedbackHeading.textContent = "Hebat Sekali! Jawabanmu Benar!";
      feedbackSub.textContent = explanation;
    } else {
      feedbackBanner.className = "feedback-banner banner-wrong";
      feedbackIcon.innerHTML = AppIcons.heartPancasila;
      feedbackHeading.textContent = "Oops, Belum Tepat! Jangan Putus Asa ya!";
      feedbackSub.textContent = explanation;
    }
  }

  // Tombol Dengarkan Soal (Text-to-Speech)
  btnSpeakQuestion.addEventListener("click", () => {
    if (audio.isSpeaking) {
      audio.stopSpeech();
      setSpeakerActive(false);
      return;
    }

    const currentQ = currentQuestions[currentQuestionIndex];
    if (!currentQ) return;

    const letters = ["A", "B", "C", "D"];
    let speechContent = `Topik: ${currentQ.topic}. Pertanyaan: ${currentQ.question}. Pilihan jawaban: `;
    currentQ.options.forEach((opt, i) => {
      speechContent += ` ${letters[i]}, ${opt}.`;
    });

    audio.speakText(
      speechContent,
      () => setSpeakerActive(true),
      () => setSpeakerActive(false)
    );
  });

  function setSpeakerActive(isActive) {
    if (isActive) {
      btnSpeakQuestion.classList.add("speaking");
      speakerIconBox.innerHTML = AppIcons.speakingWave;
      speechBtnLabel.textContent = "Berhenti Mendengarkan";
    } else {
      btnSpeakQuestion.classList.remove("speaking");
      speakerIconBox.innerHTML = AppIcons.readAloud;
      speechBtnLabel.textContent = "Dengarkan Soal";
    }
  }

  // Tombol Soal Selanjutnya / Selesai
  btnNextQuestion.addEventListener("click", () => {
    audio.playClick();
    audio.stopSpeech();

    if (currentQuestionIndex < currentQuestions.length - 1) {
      currentQuestionIndex++;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Selesai semua 10 soal -> Tampilkan Layar Hasil & Review Lengkap
      finishQuiz();
    }
  });

  // Tombol Kembali ke Beranda dari Layar Kuis
  btnBackHome.addEventListener("click", () => {
    audio.playClick();
    audio.stopSpeech();
    showScreen("grades");
  });

  // Selesai Kuis: Hitung Nilai & Tampilkan Hasil Perayaan
  function finishQuiz() {
    audio.stopSpeech();
    audio.playFanfare();

    // Hitung Jumlah Benar & Nilai
    let correctCount = 0;
    currentQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const totalQuestions = currentQuestions.length;
    const wrongCount = totalQuestions - correctCount;
    const finalScore = Math.round((correctCount / totalQuestions) * 100);

    // Tampilkan Skor & Statistik
    scoreFinalNumber.textContent = finalScore;
    statCorrect.textContent = `${correctCount} Benar`;
    statWrong.textContent = `${wrongCount} Belajar Lagi`;

    // Render Bintang Prestasi (3 Bintang Skala Nilai)
    renderScoreStars(finalScore);

    // Teks & Gelar Penghargaan
    if (finalScore >= 90) {
      scoreTitle.textContent = "Luar Biasa! Pahlawan Pancasila Cilik!";
      scoreMessage.textContent = "Keren sekali! Kamu memahami nilai-nilai luhur Pancasila dengan sangat cemerlang. Pertahankan prestasimu ya!";
    } else if (finalScore >= 70) {
      scoreTitle.textContent = "Bagus Sekali! Bintang Teladan Kelas!";
      scoreMessage.textContent = "Hasil yang membanggakan! Kamu sudah memahami sebagian besar materi dengan sangat baik. Ayo pelajari sedikit lagi agar dapat 100!";
    } else {
      scoreTitle.textContent = "Tetap Semangat! Jangan Berputus Asa!";
      scoreMessage.textContent = "Hebat sudah berusaha dengan jujur! Baca kembali lembar review koreksi di bawah untuk memahami jawaban yang benar ya juara!";
    }

    // Render Lembar Review Koreksi Lengkap
    renderReviewSection("all");

    // Tampilkan Layar Hasil
    showScreen("results");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Mulai Animasi Konfeti
    launchConfetti();
  }

  // Render Bintang Prestasi di Kartu Skor
  function renderScoreStars(score) {
    scoreStarsContainer.innerHTML = "";
    let starCount = 1;
    if (score >= 90) starCount = 3;
    else if (score >= 70) starCount = 2;

    for (let i = 1; i <= 3; i++) {
      const starSpan = document.createElement("span");
      starSpan.className = `score-star ${i <= starCount ? "star-earned" : "star-empty"}`;
      starSpan.innerHTML = AppIcons.sparkle;
      starSpan.setAttribute("aria-hidden", "true");
      scoreStarsContainer.appendChild(starSpan);
    }
  }

  // Render Lembar Review Jawaban & Koreksi (Requirement 4)
  function renderReviewSection(filterType = "all") {
    reviewList.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    // Update status aktif tombol filter
    filterAllBtn.classList.toggle("active-filter", filterType === "all");
    filterWrongBtn.classList.toggle("active-filter", filterType === "wrong");
    filterCorrectBtn.classList.toggle("active-filter", filterType === "correct");

    currentQuestions.forEach((q, idx) => {
      const userChoice = userAnswers[idx];
      const isCorrect = userChoice === q.correctAnswer;

      if (filterType === "wrong" && isCorrect) return;
      if (filterType === "correct" && !isCorrect) return;

      const reviewCard = document.createElement("article");
      reviewCard.className = `review-item-card ${isCorrect ? "review-correct" : "review-wrong"}`;

      const userChoiceText = userChoice !== null && userChoice !== undefined
        ? `${letters[userChoice]}. ${q.options[userChoice]}`
        : "Tidak dijawab";

      const correctChoiceText = `${letters[q.correctAnswer]}. ${q.options[q.correctAnswer]}`;

      reviewCard.innerHTML = `
        <div class="review-item-header">
          <div class="review-item-title-box">
            <span class="review-number-badge">Nomor ${idx + 1}</span>
            <span class="review-topic-tag">${q.topic}</span>
          </div>
          <div class="review-status-pill ${isCorrect ? "pill-correct" : "pill-wrong"}">
            <span class="status-icon" aria-hidden="true">
              ${isCorrect ? AppIcons.checkCircle : AppIcons.timesCircle}
            </span>
            <span>${isCorrect ? "Jawaban Benar" : "Perlu Belajar Lagi"}</span>
          </div>
        </div>

        <p class="review-question-text">${q.question}</p>

        <div class="review-answers-box">
          <div class="user-answer-row ${isCorrect ? "user-correct" : "user-wrong"}">
            <span class="answer-label">Jawaban Kamu:</span>
            <span class="answer-val">${userChoiceText}</span>
          </div>
          ${!isCorrect ? `
            <div class="correct-answer-row">
              <span class="answer-label">Kunci Jawaban Benar:</span>
              <span class="answer-val">${correctChoiceText}</span>
            </div>
          ` : ""}
        </div>

        <!-- Kotak Koreksi & Pembahasan Ceria -->
        <div class="correction-box">
          <div class="correction-header">
            <span class="correction-icon" aria-hidden="true">${AppIcons.shieldPancasila}</span>
            <span class="correction-title">Koreksi & Catatan Belajar Ceria:</span>
            <button type="button" class="btn-read-explanation" aria-label="Dengarkan penjelasan untuk nomor ${idx + 1}">
              ${AppIcons.volumeHigh}
              <span>Dengarkan</span>
            </button>
          </div>
          <p class="correction-explanation">${q.explanation}</p>
        </div>
      `;

      // Event listener tombol dengarkan penjelasan pada review
      const btnReadExpl = reviewCard.querySelector(".btn-read-explanation");
      if (btnReadExpl) {
        btnReadExpl.addEventListener("click", () => {
          audio.stopSpeech();
          audio.speakText(`Nomor ${idx + 1}. Penjelasan: ${q.explanation}`);
        });
      }

      reviewList.appendChild(reviewCard);
    });

    if (reviewList.children.length === 0) {
      reviewList.innerHTML = `
        <div class="review-empty-state">
          <p>Tidak ada soal pada kategori ini.</p>
        </div>
      `;
    }
  }

  // Filter Event Listeners
  filterAllBtn.addEventListener("click", () => {
    audio.playClick();
    renderReviewSection("all");
  });

  filterWrongBtn.addEventListener("click", () => {
    audio.playClick();
    renderReviewSection("wrong");
  });

  filterCorrectBtn.addEventListener("click", () => {
    audio.playClick();
    renderReviewSection("correct");
  });

  // Tombol Ulangi Kuis di Halaman Hasil
  btnRetryQuiz.addEventListener("click", () => {
    audio.playClick();
    stopConfetti();
    startQuizForGrade(currentGradeId);
  });

  // Tombol Ganti Kelas di Halaman Hasil
  btnChangeGrade.addEventListener("click", () => {
    audio.playClick();
    stopConfetti();
    showScreen("grades");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Tombol Letupkan Konfeti Lagi
  if (btnReconfetti) {
    btnReconfetti.addEventListener("click", () => {
      audio.playFanfare();
      launchConfetti();
    });
  }

  // Toggle Suara Global di Header
  btnToggleSound.addEventListener("click", () => {
    const isNowOn = audio.toggleSound();
    btnToggleSound.setAttribute("aria-pressed", (!isNowOn).toString());
    soundIconBox.innerHTML = isNowOn ? AppIcons.volumeHigh : AppIcons.volumeMute;
    soundLabelText.textContent = isNowOn ? "Suara: Nyala" : "Suara: Mati";
  });

  // Fungsi Pindah Layar
  function showScreen(screenName) {
    Object.keys(screens).forEach(key => {
      if (key === screenName) {
        screens[key].classList.remove("d-none");
      } else {
        screens[key].classList.add("d-none");
      }
    });
  }

  // =========================================================================
  // SISTEM ANIMASI KONFETI KARTUN (HTML5 Canvas)
  // =========================================================================
  function launchConfetti() {
    if (!confettiCanvas) return;
    stopConfetti();

    const ctx = confettiCanvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    confettiCanvas.width = window.innerWidth * dpr;
    confettiCanvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899", "#FDE047"];
    confettiParticles = [];

    const numParticles = 120;
    for (let i = 0; i < numParticles; i++) {
      confettiParticles.push({
        x: window.innerWidth * Math.random(),
        y: -20 - Math.random() * 100,
        r: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: 3 + Math.random() * 5,
        tilt: Math.random() * 10 - 5,
        tiltAngle: Math.random() * Math.PI,
        tiltAngleInc: 0.05 + Math.random() * 0.05
      });
    }

    let startTime = Date.now();
    const duration = 5000; // Berlangsung 5 detik agar memuaskan namun tidak memberatkan browser

    function animate() {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      confettiParticles.forEach(p => {
        p.tiltAngle += p.tiltAngleInc;
        p.y += p.vy;
        p.x += p.vx;
        p.tilt = Math.sin(p.tiltAngle) * 12;

        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        ctx.stroke();
      });

      if (elapsed < duration) {
        confettiAnimationId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    }

    animate();
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

  // Inisialisasi awal saat halaman dibuka
  initStaticIcons();
  renderGradesGrid();
});

