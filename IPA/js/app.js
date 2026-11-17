/**
 * Aplikasi Utama Kuis IPA SD Petualangan Sains
 * Mengelola alur kuis interaktif, pembaca suara (TTS), efek suara Web Audio API,
 * selebrasi konfeti kanvas, dan lembar review koreksi jawaban.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Audio Controller
  const audio = new AudioController();

  // State Aplikasi
  let currentGrade = 1;
  let currentQuestions = [];
  let currentIndex = 0;
  let userAnswers = []; // Array of { questionId, selectedIndex, isCorrect }
  let isAnswered = false;
  let activeReviewFilter = "all"; // 'all', 'wrong', 'correct'

  // Elemen DOM Utama
  const gradesScreen = document.getElementById("grades-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultsScreen = document.getElementById("results-screen");

  // Kontrol Header
  const btnToggleSound = document.getElementById("btn-toggle-sound");
  const soundIconBox = document.getElementById("sound-icon-box");
  const soundLabelText = document.getElementById("sound-label-text");

  // Maskot Dashboard
  const mascotInteractiveBox = document.getElementById("mascot-interactive-box");
  const mascotSpeechText = document.getElementById("mascot-speech-text");
  const gradesContainer = document.getElementById("grades-container");

  // Komponen Kuis
  const btnBackHome = document.getElementById("btn-back-home");
  const quizGradeBadge = document.getElementById("quiz-grade-badge");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const progressFill = document.getElementById("progress-fill");
  const questionTopic = document.getElementById("question-topic");
  const btnSpeakQuestion = document.getElementById("btn-speak-question");
  const speakerIconBox = document.getElementById("speaker-icon-box");
  const speechBtnLabel = document.getElementById("speech-btn-label");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackBanner = document.getElementById("feedback-banner");
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackHeading = document.getElementById("feedback-heading");
  const feedbackSub = document.getElementById("feedback-sub");
  const btnNextQuestion = document.getElementById("btn-next-question");
  const nextBtnIcon = document.getElementById("next-btn-icon");

  // Komponen Hasil & Selebrasi
  const scoreStarsContainer = document.getElementById("score-stars-container");
  const scoreTitle = document.getElementById("score-title");
  const scoreMessage = document.getElementById("score-message");
  const scoreFinalNumber = document.getElementById("score-final-number");
  const statCorrect = document.getElementById("stat-correct");
  const statWrong = document.getElementById("stat-wrong");
  const btnRetryQuiz = document.getElementById("btn-retry-quiz");
  const btnChangeGrade = document.getElementById("btn-change-grade");
  const btnReconfetti = document.getElementById("btn-reconfetti");
  const retryBtnIcon = document.getElementById("retry-btn-icon");
  const changeGradeIcon = document.getElementById("change-grade-icon");
  const reviewBookIcon = document.getElementById("review-book-icon");
  const reviewList = document.getElementById("review-list");

  // Filter Tab Review
  const filterAllBtn = document.getElementById("filter-all-btn");
  const filterWrongBtn = document.getElementById("filter-wrong-btn");
  const filterCorrectBtn = document.getElementById("filter-correct-btn");

  // Canvas Konfeti
  const confettiCanvas = document.getElementById("confetti-canvas");
  let confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;
  let confettiParticles = [];
  let confettiAnimationId = null;

  // Daftar Fakta Sains Menarik untuk Maskot Profesor Kiko
  const funScienceFacts = [
    "Tahukah kamu? Air di bumi selalu berputar dalam siklus hidrologi lho!",
    "Tahukah kamu? Daun tumbuhan menyerap karbon dioksida dan menghasilkan oksigen segar!",
    "Tahukah kamu? Matahari adalah bintang paling dekat dengan planet bumi kita!",
    "Tahukah kamu? Alveolus di paru-paru bekerja mengantarkan oksigen ke darah kita!",
    "Tahukah kamu? Kaktus mengubah daunnya menjadi duri agar tidak cepat kehabisan air!",
    "Keren sekali! Sudah siap menjadi peneliti cilik berprestasi hari ini?"
  ];
  let factIndex = 0;

  // Render Icon Statis Awal
  function setupInitialIcons() {
    if (soundIconBox) soundIconBox.innerHTML = AppIcons.speakerOn;
    if (speakerIconBox) speakerIconBox.innerHTML = AppIcons.speakerWave;
    if (nextBtnIcon) nextBtnIcon.innerHTML = AppIcons.arrowRight;
    if (retryBtnIcon) retryBtnIcon.innerHTML = AppIcons.refresh;
    if (changeGradeIcon) changeGradeIcon.innerHTML = AppIcons.gridSquares;
    if (reviewBookIcon) reviewBookIcon.innerHTML = AppIcons.bookOpen;
    const btnBackIcon = document.getElementById("btn-back-icon");
    if (btnBackIcon) btnBackIcon.innerHTML = AppIcons.arrowLeft;
  }

  // Update Status Suara di UI
  function updateSoundUI(enabled) {
    if (enabled) {
      soundIconBox.innerHTML = AppIcons.speakerOn;
      soundLabelText.textContent = "Suara: Nyala";
      btnToggleSound.classList.remove("sound-off");
      btnToggleSound.setAttribute("aria-pressed", "false");
    } else {
      soundIconBox.innerHTML = AppIcons.speakerOff;
      soundLabelText.textContent = "Suara: Mati";
      btnToggleSound.classList.add("sound-off");
      btnToggleSound.setAttribute("aria-pressed", "true");
    }
  }

  // Render Pilihan Kelas pada Layar 1
  function renderGradesDashboard() {
    if (!gradesContainer) return;
    gradesContainer.innerHTML = "";

    GradeLevels.forEach(lvl => {
      const card = document.createElement("article");
      card.className = "grade-card";

      const iconSvg = AppIcons[lvl.iconKey] || AppIcons.scienceFlask;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-avatar" style="background: var(--science-${lvl.badgeColor}-light, #E0F2FE);">
            ${iconSvg}
          </div>
          <div class="grade-card-titles">
            <h4 class="grade-card-h4">${lvl.title}</h4>
            <div class="grade-card-sub">${lvl.sub}</div>
          </div>
        </div>
        <p class="grade-card-desc">${lvl.desc}</p>
        <div class="grade-card-footer">
          <span class="grade-question-count">10 Soal Pilihan Ganda</span>
          <button type="button" class="btn-start-grade" data-grade="${lvl.grade}" aria-label="Mulai Kuis ${lvl.title}">
            <span>Mulai Kuis</span>
            ${AppIcons.arrowRight}
          </button>
        </div>
      `;

      const startBtn = card.querySelector(".btn-start-grade");
      startBtn.addEventListener("click", () => {
        audio.playClick();
        startQuizForGrade(lvl.grade);
      });

      gradesContainer.appendChild(card);
    });
  }

  // Interaksi Maskot Profesor Kiko
  function setupMascotInteraction() {
    if (!mascotInteractiveBox) return;

    mascotInteractiveBox.addEventListener("click", () => {
      audio.playMascotChirp();
      factIndex = (factIndex + 1) % funScienceFacts.length;
      const fact = funScienceFacts[factIndex];
      mascotSpeechText.textContent = fact;

      // Bacakan fakta sains secara ramah jika suara aktif
      audio.speakText(fact);
    });
  }

  // =========================================================================
  // ALUR KUIS INTERAKTIF
  // =========================================================================

  function startQuizForGrade(gradeNumber) {
    currentGrade = gradeNumber;
    currentQuestions = QuizQuestions[gradeNumber] || [];
    currentIndex = 0;
    userAnswers = [];
    isAnswered = false;

    // Hentikan suara jika sebelumnya sedang berbicara
    audio.stopSpeech();

    // Perbarui label kelas
    if (quizGradeBadge) {
      quizGradeBadge.textContent = `Kelas ${gradeNumber} SD`;
    }

    // Alihkan tampilan layar
    gradesScreen.classList.add("d-none");
    resultsScreen.classList.add("d-none");
    quizScreen.classList.remove("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });

    loadQuestion(currentIndex);
  }

  function loadQuestion(index) {
    if (!currentQuestions[index]) return;

    isAnswered = false;
    audio.stopSpeech();
    resetSpeechBtnState();

    const q = currentQuestions[index];
    const total = currentQuestions.length;
    const progressVal = Math.round(((index + 1) / total) * 100);

    // Update Bar Progres
    if (progressText) progressText.textContent = `Soal ${index + 1} dari ${total}`;
    if (progressPercent) progressPercent.textContent = `${progressVal}%`;
    if (progressFill) progressFill.style.width = `${progressVal}%`;

    // Update Informasi Soal
    if (questionTopic) questionTopic.textContent = q.topic;
    if (questionText) questionText.textContent = q.question;

    // Sembunyikan Umpan Balik
    if (feedbackBanner) feedbackBanner.classList.add("d-none");

    // Nonaktifkan Tombol Selanjutnya sampai siswa memilih
    if (btnNextQuestion) {
      btnNextQuestion.disabled = true;
      btnNextQuestion.setAttribute("aria-disabled", "true");
      const btnText = btnNextQuestion.querySelector(".btn-next-text");
      if (btnText) {
        btnText.textContent = (index === total - 1) ? "Lihat Hasil Kuis" : "Soal Selanjutnya";
      }
    }

    // Render Opsi Pilihan Jawaban
    renderOptions(q);

    // Setup Aksi Tombol Suara Soal
    if (btnSpeakQuestion) {
      btnSpeakQuestion.onclick = () => {
        speakCurrentQuestion(q);
      };
    }
  }

  function renderOptions(q) {
    if (!optionsContainer) return;
    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", "false");

      btn.innerHTML = `
        <span class="option-letter-badge">${letters[optIdx]}</span>
        <span class="option-btn-text">${optText}</span>
      `;

      btn.addEventListener("click", () => {
        if (isAnswered) return;
        selectOption(optIdx, q);
      });

      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(selectedIndex, q) {
    if (isAnswered) return;
    isAnswered = true;

    audio.stopSpeech();
    resetSpeechBtnState();

    const isCorrect = (selectedIndex === q.correctIndex);

    // Simpan riwayat jawaban siswa
    userAnswers.push({
      questionId: q.id,
      questionText: q.question,
      topic: q.topic,
      options: q.options,
      selectedIndex: selectedIndex,
      correctIndex: q.correctIndex,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    const optionButtons = optionsContainer.querySelectorAll(".option-btn");

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");

      if (idx === selectedIndex) {
        btn.setAttribute("aria-checked", "true");
        if (isCorrect) {
          btn.classList.add("selected-correct");
        } else {
          btn.classList.add("selected-wrong");
        }
      }

      // Tampilkan jawaban yang benar dengan garis putus-putus ramah jika siswa salah
      if (!isCorrect && idx === q.correctIndex) {
        btn.classList.add("revealed-correct");
      }
    });

    // Umpan Balik Suara & Visual
    if (isCorrect) {
      audio.playCorrect();
      showFeedbackBanner(true, "Hebat Sekali! Jawabanmu Benar!", q.explanation);
    } else {
      audio.playWrong();
      showFeedbackBanner(false, "Yuk Semangat Belajar Lagi!", q.explanation);
    }

    // Aktifkan Tombol Selanjutnya
    if (btnNextQuestion) {
      btnNextQuestion.disabled = false;
      btnNextQuestion.setAttribute("aria-disabled", "false");
      btnNextQuestion.focus();
    }
  }

  function showFeedbackBanner(isCorrect, heading, explanation) {
    if (!feedbackBanner) return;

    feedbackBanner.className = `feedback-banner ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
    if (feedbackIcon) {
      feedbackIcon.innerHTML = isCorrect ? AppIcons.checkCircle : AppIcons.crossCircle;
    }
    if (feedbackHeading) feedbackHeading.textContent = heading;
    if (feedbackSub) feedbackSub.textContent = explanation;

    feedbackBanner.classList.remove("d-none");
  }

  // Membaca Teks Soal & Pilihan Secara Ramah (Text-to-Speech)
  function speakCurrentQuestion(q) {
    if (audio.isSpeaking) {
      audio.stopSpeech();
      resetSpeechBtnState();
      return;
    }

    const letters = ["A", "B", "C", "D"];
    let fullText = `Soal nomor ${currentIndex + 1}. Topik: ${q.topic}. ${q.question}. `;
    q.options.forEach((opt, idx) => {
      fullText += `${letters[idx]}. ${opt}. `;
    });

    btnSpeakQuestion.classList.add("speaking");
    speechBtnLabel.textContent = "Sedang Membaca...";

    audio.speakText(
      fullText,
      () => {
        btnSpeakQuestion.classList.add("speaking");
        speechBtnLabel.textContent = "Sedang Membaca...";
      },
      () => {
        resetSpeechBtnState();
      }
    );
  }

  function resetSpeechBtnState() {
    if (!btnSpeakQuestion) return;
    btnSpeakQuestion.classList.remove("speaking");
    if (speechBtnLabel) speechBtnLabel.textContent = "Dengarkan Soal";
  }

  // =========================================================================
  // SELEBRASI HASIL KUIS & LEMBAR REVIEW KOREKSI (REQUIREMENT 4 & 9)
  // =========================================================================

  function showQuizResults() {
    audio.stopSpeech();

    quizScreen.classList.add("d-none");
    gradesScreen.classList.add("d-none");
    resultsScreen.classList.remove("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Hitung Skor
    const total = currentQuestions.length;
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = total - correctCount;
    const scoreVal = Math.round((correctCount / total) * 100);

    // Tampilkan Metrik Skor
    if (scoreFinalNumber) scoreFinalNumber.textContent = scoreVal;
    if (statCorrect) statCorrect.textContent = `${correctCount} Benar`;
    if (statWrong) statWrong.textContent = `${wrongCount} Belajar Lagi`;

    // Render Bintang Prestasi
    renderScoreStars(scoreVal);

    // Pesan Apresiasi Edukatif
    if (scoreVal >= 80) {
      scoreTitle.textContent = "Luar Biasa! Kamu Peneliti Sains Cilik Hebat!";
      scoreMessage.textContent = "Pemahamanmu tentang sains IPA luar biasa membanggakan. Pertahankan prestasimu dan teruslah gemar menjelajah alam!";
    } else if (scoreVal >= 60) {
      scoreTitle.textContent = "Bagus Sekali! Usaha yang Sangat Membanggakan!";
      scoreMessage.textContent = "Kamu sudah memahami sebagian besar materi dengan sangat baik. Yuk pelajari beberapa soal yang belum tepat di lembar koreksi bawah!";
    } else {
      scoreTitle.textContent = "Tetap Semangat! Belajar Sains Itu Mengasyikkan!";
      scoreMessage.textContent = "Jangan berkecil hati ya. Ilmu pengetahuan itu sangat luas. Simak penjelasan lengkap setiap soal di bawah ini untuk belajar kembali!";
    }

    // Mainkan Efek Suara Selebrasi
    audio.playCelebration();

    // Nyalakan Letupan Konfeti Kanvas
    triggerConfetti();

    // Render Lembar Review Koreksi Lengkap
    renderReviewList();
  }

  function renderScoreStars(score) {
    if (!scoreStarsContainer) return;
    scoreStarsContainer.innerHTML = "";

    let starCount = 1;
    if (score >= 80) starCount = 3;
    else if (score >= 50) starCount = 2;

    for (let i = 1; i <= 3; i++) {
      const starSpan = document.createElement("span");
      starSpan.className = "star-award-item";
      starSpan.innerHTML = (i <= starCount) ? AppIcons.starFill : AppIcons.starOutline;
      scoreStarsContainer.appendChild(starSpan);
    }
  }

  // Render Lembar Rangkuman Review & Koreksi Lengkap
  function renderReviewList() {
    if (!reviewList) return;
    reviewList.innerHTML = "";

    // Saring sesuai filter tab aktif
    const filteredAnswers = userAnswers.filter(ans => {
      if (activeReviewFilter === "wrong") return !ans.isCorrect;
      if (activeReviewFilter === "correct") return ans.isCorrect;
      return true; // 'all'
    });

    if (filteredAnswers.length === 0) {
      reviewList.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-muted); font-weight: 700;">
          Tidak ada soal pada kategori ini.
        </div>
      `;
      return;
    }

    const letters = ["A", "B", "C", "D"];

    filteredAnswers.forEach((ans, idx) => {
      const card = document.createElement("article");
      card.className = `review-item-card ${ans.isCorrect ? 'is-correct' : 'is-wrong'}`;

      const userChoiceText = ans.options[ans.selectedIndex] || "-";
      const correctChoiceText = ans.options[ans.correctIndex];
      const userLetter = letters[ans.selectedIndex] || "-";
      const correctLetter = letters[ans.correctIndex];

      card.innerHTML = `
        <div class="review-item-top">
          <div class="review-num-tag">
            <span>Soal ${userAnswers.indexOf(ans) + 1}</span>
            <span class="review-topic-tag">${ans.topic}</span>
          </div>
          <div class="review-status-badge ${ans.isCorrect ? 'status-badge-correct' : 'status-badge-wrong'}">
            ${ans.isCorrect ? AppIcons.checkCircle : AppIcons.crossCircle}
            <span>${ans.isCorrect ? 'Jawaban Benar' : 'Perlu Belajar Lagi'}</span>
          </div>
        </div>

        <h4 class="review-question-text">${ans.questionText}</h4>

        <div class="review-answers-comparison">
          <div class="comparison-row row-user-answer ${ans.isCorrect ? '' : 'wrong-pick'}">
            <span class="comparison-label">Pilihan Kamu:</span>
            <span class="comparison-text"><strong>${userLetter}.</strong> ${userChoiceText}</span>
          </div>
          
          ${!ans.isCorrect ? `
            <div class="comparison-row row-correct-answer">
              <span class="comparison-label">Jawaban Benar:</span>
              <span class="comparison-text"><strong>${correctLetter}.</strong> ${correctChoiceText}</span>
            </div>
          ` : ''}
        </div>

        <div class="review-explanation-box">
          <div class="review-exp-icon">${AppIcons.lightbulb}</div>
          <div style="flex: 1;">
            <strong>Catatan Sains:</strong> ${ans.explanation}
          </div>
          <button type="button" class="btn-speak-review" aria-label="Dengarkan penjelasan soal">
            ${AppIcons.speakerWave}
            <span>Dengarkan</span>
          </button>
        </div>
      `;

      // Event dengarkan penjelasan audio
      const btnSpeakExp = card.querySelector(".btn-speak-review");
      if (btnSpeakExp) {
        btnSpeakExp.addEventListener("click", () => {
          audio.stopSpeech();
          audio.playClick();
          const readText = `Penjelasan soal nomor ${userAnswers.indexOf(ans) + 1}. Jawaban yang tepat adalah pilihan ${correctLetter}: ${correctChoiceText}. ${ans.explanation}`;
          audio.speakText(readText);
        });
      }

      reviewList.appendChild(card);
    });

    // Perbarui label jumlah pada filter tabs
    const wrongCount = userAnswers.filter(a => !a.isCorrect).length;
    const correctCount = userAnswers.filter(a => a.isCorrect).length;

    if (filterAllBtn) filterAllBtn.textContent = `Semua Soal (${userAnswers.length})`;
    if (filterWrongBtn) filterWrongBtn.textContent = `Perlu Belajar Lagi (${wrongCount})`;
    if (filterCorrectBtn) filterCorrectBtn.textContent = `Jawaban Benar (${correctCount})`;
  }

  // Setup Tab Filter Lembar Koreksi
  function setupReviewFilters() {
    const tabs = [
      { btn: filterAllBtn, key: "all" },
      { btn: filterWrongBtn, key: "wrong" },
      { btn: filterCorrectBtn, key: "correct" }
    ];

    tabs.forEach(t => {
      if (!t.btn) return;
      t.btn.addEventListener("click", () => {
        audio.playClick();
        tabs.forEach(item => item.btn.classList.remove("active-filter"));
        t.btn.classList.add("active-filter");
        activeReviewFilter = t.key;
        renderReviewList();
      });
    });
  }

  // =========================================================================
  // ANIMASI KONFETI KANVAS (SELEBRASI PESTA AKHIR)
  // =========================================================================

  function resizeCanvas() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  function triggerConfetti() {
    if (!confettiCanvas || !confettiCtx) return;

    resizeCanvas();
    confettiParticles = [];

    const colors = ["#10B981", "#0284C7", "#F59E0B", "#8B5CF6", "#F43F5E", "#FDE047", "#34D399"];
    const count = 90;

    for (let i = 0; i < count; i++) {
      confettiParticles.push({
        x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.35 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 6,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        opacity: 1
      });
    }

    if (confettiAnimationId) {
      cancelAnimationFrame(confettiAnimationId);
    }

    animateConfetti();
  }

  function animateConfetti() {
    if (!confettiCtx) return;

    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let activeParticles = 0;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rSpeed;

      if (p.y < confettiCanvas.height) {
        activeParticles++;
        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        confettiCtx.restore();
      }
    });

    if (activeParticles > 0) {
      confettiAnimationId = requestAnimationFrame(animateConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  window.addEventListener("resize", resizeCanvas);

  // =========================================================================
  // PENDAFTARAN EVENT LISTENER NAVIGASI
  // =========================================================================

  // Tombol Toggle Efek Suara
  if (btnToggleSound) {
    btnToggleSound.addEventListener("click", () => {
      const state = audio.toggleSound();
      updateSoundUI(state);
    });
  }

  // Tombol Kembali ke Dashboard Kelas dari Kuis
  if (btnBackHome) {
    btnBackHome.addEventListener("click", () => {
      audio.playClick();
      audio.stopSpeech();
      quizScreen.classList.add("d-none");
      resultsScreen.classList.add("d-none");
      gradesScreen.classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Tombol Soal Selanjutnya
  if (btnNextQuestion) {
    btnNextQuestion.addEventListener("click", () => {
      audio.playClick();
      audio.stopSpeech();

      if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
      } else {
        showQuizResults();
      }
    });
  }

  // Tombol Ulangi Kuis Kelas Ini
  if (btnRetryQuiz) {
    btnRetryQuiz.addEventListener("click", () => {
      audio.playClick();
      startQuizForGrade(currentGrade);
    });
  }

  // Tombol Ganti Kelas Lain
  if (btnChangeGrade) {
    btnChangeGrade.addEventListener("click", () => {
      audio.playClick();
      audio.stopSpeech();
      resultsScreen.classList.add("d-none");
      quizScreen.classList.add("d-none");
      gradesScreen.classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Tombol Letupkan Konfeti Lagi
  if (btnReconfetti) {
    btnReconfetti.addEventListener("click", () => {
      audio.playClick();
      triggerConfetti();
    });
  }

  // Inisialisasi Awal Aplikasi
  setupInitialIcons();
  renderGradesDashboard();
  setupMascotInteraction();
  setupReviewFilters();
});

