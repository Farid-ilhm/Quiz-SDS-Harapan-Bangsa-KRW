/**
 * Aplikasi Kuis IPS SD Petualangan Nusantara
 * Mengatur alur kuis interaktif, pembaca suara (TTS), efek suara Web Audio API,
 * selebrasi konfeti kanvas, serta lembar review dan koreksi jawaban lengkap.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Kontroler Audio
  const audio = new AudioController();

  // Status Aplikasi
  let currentGrade = 1;
  let currentQuestions = [];
  let currentIndex = 0;
  let userAnswers = []; // Riwayat: { questionId, questionText, topic, options, selectedIndex, correctIndex, isCorrect, explanation }
  let isAnswered = false;
  let activeReviewFilter = "all"; // 'all', 'wrong', 'correct'

  // Elemen Layar Utama
  const gradesScreen = document.getElementById("grades-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultsScreen = document.getElementById("results-screen");

  // Kontrol Header
  const btnToggleSound = document.getElementById("btn-toggle-sound");
  const soundIconBox = document.getElementById("sound-icon-box");
  const soundLabelText = document.getElementById("sound-label-text");

  // Dashboard & Maskot
  const mascotInteractiveBox = document.getElementById("mascot-interactive-box");
  const mascotSpeechText = document.getElementById("mascot-speech-text");
  const gradesContainer = document.getElementById("grades-container");

  // Elemen Kuis
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

  // Elemen Hasil & Selebrasi
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

  // Tab Filter Review
  const filterAllBtn = document.getElementById("filter-all-btn");
  const filterWrongBtn = document.getElementById("filter-wrong-btn");
  const filterCorrectBtn = document.getElementById("filter-correct-btn");

  // Kanvas Konfeti
  const confettiCanvas = document.getElementById("confetti-canvas");
  let confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;
  let confettiParticles = [];
  let confettiAnimationId = null;

  // Fakta Menarik Nusantara untuk Maskot Kapten Nusa
  const funNusantaraFacts = [
    "Tahukah kamu? Indonesia adalah negara kepulauan terbesar di dunia dengan lebih dari 17.000 pulau!",
    "Tahukah kamu? Candi Borobudur dibangun pada abad ke-8 dan tersusun dari jutaan balok batu vulkanik!",
    "Tahukah kamu? Garis khatulistiwa melintasi kota Pontianak di Kalimantan Barat!",
    "Tahukah kamu? Semboyan Bhinneka Tunggal Ika diambil dari karya sastra kuno Kitab Sutasoma!",
    "Tahukah kamu? Indonesia memiliki tiga zona waktu, yaitu W I B, Wita, dan W I T!",
    "Siap menjelajah nusantara? Ayo pilih kelasmu dan uji wawasan sosialmu bersama Kapten Nusa!"
  ];
  let factIndex = 0;

  // Pasang Ikon Statis Awal
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

  // Pengaturan Tombol Suara
  function setupSoundToggle() {
    if (!btnToggleSound) return;
    btnToggleSound.addEventListener("click", () => {
      const isEnabled = audio.toggleSound();
      updateSoundUI(isEnabled);
    });
  }

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

  // Tampilkan Kartu Pilihan Kelas 1 sampai 6
  function renderGradesDashboard() {
    if (!gradesContainer) return;
    gradesContainer.innerHTML = "";

    GradeLevels.forEach(lvl => {
      const card = document.createElement("article");
      card.className = "grade-card";

      const iconSvg = AppIcons[lvl.iconKey] || AppIcons.globeEarth;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-avatar grade-avatar-${lvl.badgeColor}">
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

  // Interaksi Maskot Kapten Nusa
  function setupMascotInteraction() {
    if (!mascotInteractiveBox) return;

    mascotInteractiveBox.addEventListener("click", () => {
      audio.playMascotChirp();
      factIndex = (factIndex + 1) % funNusantaraFacts.length;
      const fact = funNusantaraFacts[factIndex];
      mascotSpeechText.textContent = fact;

      // Bacakan fakta nusantara dengan ramah
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

    audio.stopSpeech();

    if (quizGradeBadge) {
      quizGradeBadge.textContent = `Kelas ${gradeNumber} SD`;
    }

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

    // Perbarui Progres
    if (progressText) progressText.textContent = `Soal ${index + 1} dari ${total}`;
    if (progressPercent) progressPercent.textContent = `${progressVal}%`;
    if (progressFill) progressFill.style.width = `${progressVal}%`;

    // Perbarui Teks Soal
    if (questionTopic) questionTopic.textContent = q.topic;
    if (questionText) questionText.textContent = q.question;

    // Sembunyikan Umpan Balik Sebelum Menjawab
    if (feedbackBanner) feedbackBanner.classList.add("d-none");

    // Tombol Selanjutnya Dinonaktifkan Sementara
    if (btnNextQuestion) {
      btnNextQuestion.disabled = true;
      btnNextQuestion.setAttribute("aria-disabled", "true");
      const btnText = btnNextQuestion.querySelector(".btn-next-text");
      if (btnText) {
        btnText.textContent = (index === total - 1) ? "Lihat Hasil Kuis" : "Soal Selanjutnya";
      }
    }

    // Render Opsi Jawaban
    renderOptions(q);

    // Sambungkan Tombol Suara Soal
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

    // Rekam jawaban siswa
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

      // Tampilkan pilihan yang benar secara halus jika siswa salah
      if (!isCorrect && idx === q.correctIndex) {
        btn.classList.add("revealed-correct");
      }
    });

    // Umpan Balik Suara & Visual
    if (isCorrect) {
      audio.playCorrect();
      showFeedbackBanner(true, "Luar Biasa! Jawabanmu Tepat Sekali!", q.explanation);
    } else {
      audio.playWrong();
      showFeedbackBanner(false, "Yuk Semangat, Cermati Penjelasannya!", q.explanation);
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

  // Pembacaan Soal dan Opsi (Text-to-Speech)
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
  // SELEBRASI HASIL KUIS & LEMBAR REVIEW KOREKSI (SYARAT 4 & 9)
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

    // Tampilkan Metrik
    if (scoreFinalNumber) scoreFinalNumber.textContent = scoreVal;
    if (statCorrect) statCorrect.textContent = `${correctCount} Benar`;
    if (statWrong) statWrong.textContent = `${wrongCount} Perlu Belajar`;

    // Pesan Motivasi Edukatif
    if (scoreVal === 100) {
      if (scoreTitle) scoreTitle.textContent = "Sempurna! Kamu Penjelajah Nusantara Sejati!";
      if (scoreMessage) scoreMessage.textContent = "Hebat sekali! Semua 10 pertanyaan berhasil kamu jawab dengan benar tanpa ada yang keliru!";
    } else if (scoreVal >= 70) {
      if (scoreTitle) scoreTitle.textContent = "Bagus Sekali! Nilaimu Sangat Memuaskan!";
      if (scoreMessage) scoreMessage.textContent = "Kamu memiliki wawasan yang luar biasa. Cek lembar koreksi di bawah untuk mempelajari soal yang belum tepat ya!";
    } else {
      if (scoreTitle) scoreTitle.textContent = "Tetap Semangat! Belajar Itu Petualangan Seru!";
      if (scoreMessage) scoreMessage.textContent = "Jangan berkecil hati ya! Pelajari pembahasan dan koreksi jawaban di bawah, lalu coba kuis ini sekali lagi!";
    }

    // Render Bintang Skor dengan Animasi Bertahap
    renderScoreStars(scoreVal);

    // Bunyikan Fanfare Kemenangan
    audio.playFanfare();

    // Jalankan Letupan Konfeti
    launchConfetti();

    // Render Lembar Review Koreksi
    activeReviewFilter = "all";
    updateFilterTabsUI();
    renderReviewList();
  }

  function renderScoreStars(scoreVal) {
    if (!scoreStarsContainer) return;
    scoreStarsContainer.innerHTML = "";

    let starCount = 1;
    if (scoreVal >= 90) starCount = 3;
    else if (scoreVal >= 60) starCount = 2;

    for (let i = 0; i < 3; i++) {
      const starWrapper = document.createElement("div");
      starWrapper.className = "star-item";

      const isEarned = (i < starCount);
      starWrapper.innerHTML = isEarned ? AppIcons.starFilled : AppIcons.starEmpty;

      if (isEarned) {
        starWrapper.classList.add("earned-star");
        // Muncul berurutan dengan suara ting
        setTimeout(() => {
          starWrapper.classList.add("pop-in");
          audio.playStarPop(i);
        }, 350 + (i * 300));
      } else {
        starWrapper.classList.add("unearned-star");
      }

      scoreStarsContainer.appendChild(starWrapper);
    }
  }

  // =========================================================================
  // LEMBAR REVIEW & KOREKSI JAWABAN (SYARAT 4)
  // =========================================================================

  function renderReviewList() {
    if (!reviewList) return;
    reviewList.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    // Filter jawaban sesuai tab aktif
    const filteredAnswers = userAnswers.filter(item => {
      if (activeReviewFilter === "wrong") return !item.isCorrect;
      if (activeReviewFilter === "correct") return item.isCorrect;
      return true; // 'all'
    });

    if (filteredAnswers.length === 0) {
      const emptyNote = document.createElement("div");
      emptyNote.className = "review-empty-box";
      emptyNote.innerHTML = `
        <p class="review-empty-text">
          ${activeReviewFilter === "wrong" 
            ? "Hebat! Tidak ada jawaban yang salah pada kuis kali ini!" 
            : "Belum ada soal pada kategori ini."}
        </p>
      `;
      reviewList.appendChild(emptyNote);
      return;
    }

    filteredAnswers.forEach((ans, displayIndex) => {
      // Temukan nomor soal asli (1 sampai 10)
      const originalIndex = userAnswers.findIndex(a => a.questionId === ans.questionId);
      const questionNum = originalIndex >= 0 ? originalIndex + 1 : displayIndex + 1;

      const reviewCard = document.createElement("article");
      reviewCard.className = `review-item-card ${ans.isCorrect ? 'item-correct' : 'item-wrong'}`;

      const userSelectedLetter = ans.selectedIndex !== null && ans.selectedIndex !== undefined 
        ? letters[ans.selectedIndex] 
        : "-";
      const userSelectedText = ans.selectedIndex !== null && ans.selectedIndex !== undefined 
        ? ans.options[ans.selectedIndex] 
        : "Tidak dijawab";

      const correctLetter = letters[ans.correctIndex];
      const correctText = ans.options[ans.correctIndex];

      reviewCard.innerHTML = `
        <div class="review-card-header">
          <div class="review-meta-left">
            <span class="review-q-number">Soal ${questionNum}</span>
            <span class="review-topic-tag">${ans.topic}</span>
          </div>
          <div class="review-status-badge ${ans.isCorrect ? 'badge-success' : 'badge-danger'}">
            ${ans.isCorrect ? AppIcons.checkCircle : AppIcons.crossCircle}
            <span>${ans.isCorrect ? "Benar" : "Perlu Belajar Lagi"}</span>
          </div>
        </div>

        <p class="review-question-text">${ans.questionText}</p>

        <div class="review-answer-comparison">
          <!-- Jawaban Siswa -->
          <div class="user-answer-box ${ans.isCorrect ? 'box-correct' : 'box-wrong'}">
            <div class="answer-box-label">Jawaban Kamu:</div>
            <div class="answer-box-value">
              <span class="choice-tag">${userSelectedLetter}</span>
              <span>${userSelectedText}</span>
            </div>
          </div>

          <!-- KOREKSI: Tampilkan Jawaban Benar & Pembahasan Terutama Jika Salah (Syarat 4) -->
          ${!ans.isCorrect ? `
            <div class="correct-answer-box">
              <div class="answer-box-label label-correct-green">Jawaban yang Benar:</div>
              <div class="answer-box-value value-correct-green">
                <span class="choice-tag tag-green">${correctLetter}</span>
                <span>${correctText}</span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Kotak Pembahasan Materi Edukatif -->
        <div class="review-explanation-card ${ans.isCorrect ? 'exp-correct' : 'exp-correction'}">
          <div class="exp-header">
            <span class="exp-title-text">${ans.isCorrect ? "Catatan Materi:" : "Koreksi & Pembahasan:"}</span>
          </div>
          <p class="exp-desc">${ans.explanation}</p>
        </div>
      `;

      reviewList.appendChild(reviewCard);
    });
  }

  function setupReviewFilters() {
    if (filterAllBtn) {
      filterAllBtn.addEventListener("click", () => {
        audio.playClick();
        activeReviewFilter = "all";
        updateFilterTabsUI();
        renderReviewList();
      });
    }

    if (filterWrongBtn) {
      filterWrongBtn.addEventListener("click", () => {
        audio.playClick();
        activeReviewFilter = "wrong";
        updateFilterTabsUI();
        renderReviewList();
      });
    }

    if (filterCorrectBtn) {
      filterCorrectBtn.addEventListener("click", () => {
        audio.playClick();
        activeReviewFilter = "correct";
        updateFilterTabsUI();
        renderReviewList();
      });
    }
  }

  function updateFilterTabsUI() {
    const wrongCount = userAnswers.filter(a => !a.isCorrect).length;
    const correctCount = userAnswers.filter(a => a.isCorrect).length;

    if (filterAllBtn) {
      filterAllBtn.textContent = `Semua Soal (${userAnswers.length})`;
      filterAllBtn.classList.toggle("active-filter", activeReviewFilter === "all");
      filterAllBtn.setAttribute("aria-selected", activeReviewFilter === "all");
    }

    if (filterWrongBtn) {
      filterWrongBtn.textContent = `Perlu Belajar Lagi (${wrongCount})`;
      filterWrongBtn.classList.toggle("active-filter", activeReviewFilter === "wrong");
      filterWrongBtn.setAttribute("aria-selected", activeReviewFilter === "wrong");
    }

    if (filterCorrectBtn) {
      filterCorrectBtn.textContent = `Jawaban Benar (${correctCount})`;
      filterCorrectBtn.classList.toggle("active-filter", activeReviewFilter === "correct");
      filterCorrectBtn.setAttribute("aria-selected", activeReviewFilter === "correct");
    }
  }

  // =========================================================================
  // ANIMASI KANVAS KONFETI SELEBRASI (SYARAT 9)
  // =========================================================================

  function launchConfetti() {
    if (!confettiCanvas || !confettiCtx) return;

    // Sesuaikan ukuran kanvas dengan jendela layar
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    confettiParticles = [];
    const colors = ["#F59E0B", "#10B981", "#0284C7", "#EC4899", "#8B5CF6", "#FACC15"];

    // Buat 100 partikel konfeti dengan bentuk bulat dan persegi kartun
    for (let i = 0; i < 90; i++) {
      confettiParticles.push({
        x: confettiCanvas.width / 2 + (Math.random() * 200 - 100),
        y: confettiCanvas.height / 2 + (Math.random() * 80 - 40),
        w: Math.random() * 10 + 6,
        h: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 14,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        gravity: 0.28,
        drag: 0.98,
        alpha: 1,
        isCircle: Math.random() > 0.5
      });
    }

    if (confettiAnimationId) {
      cancelAnimationFrame(confettiAnimationId);
    }

    renderConfettiFrame();
  }

  function renderConfettiFrame() {
    if (!confettiCtx || !confettiCanvas) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    let activeParticles = 0;

    confettiParticles.forEach(p => {
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;

      if (p.y > confettiCanvas.height * 0.4) {
        p.alpha -= 0.008;
      }

      if (p.alpha > 0.02 && p.y < confettiCanvas.height + 50) {
        activeParticles++;
        confettiCtx.save();
        confettiCtx.globalAlpha = Math.max(0, p.alpha);
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rot * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.strokeStyle = "#1E293B";
        confettiCtx.lineWidth = 1.5;

        if (p.isCircle) {
          confettiCtx.beginPath();
          confettiCtx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          confettiCtx.fill();
          confettiCtx.stroke();
        } else {
          confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          confettiCtx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        confettiCtx.restore();
      }
    });

    if (activeParticles > 0) {
      confettiAnimationId = requestAnimationFrame(renderConfettiFrame);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // =========================================================================
  // SETUP NAVIGASI & TOMBOL AKSI
  // =========================================================================

  function setupEventHandlers() {
    // Tombol Soal Selanjutnya / Lihat Hasil
    if (btnNextQuestion) {
      btnNextQuestion.addEventListener("click", () => {
        audio.playClick();
        if (currentIndex < currentQuestions.length - 1) {
          currentIndex++;
          loadQuestion(currentIndex);
          window.scrollTo({ top: 120, behavior: "smooth" });
        } else {
          showQuizResults();
        }
      });
    }

    // Tombol Kembali ke Dashboard dari Layar Kuis
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

    // Tombol Ulangi Kuis
    if (btnRetryQuiz) {
      btnRetryQuiz.addEventListener("click", () => {
        audio.playClick();
        startQuizForGrade(currentGrade);
      });
    }

    // Tombol Ganti Kelas
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

    // Tombol Letupkan Ulang Konfeti
    if (btnReconfetti) {
      btnReconfetti.addEventListener("click", () => {
        audio.playClick();
        launchConfetti();
      });
    }

    // Penyesuaian Kanvas saat Jendela Browser Diubah Ukurannya
    window.addEventListener("resize", () => {
      if (confettiCanvas) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
      }
    });
  }

  // Inisialisasi Seluruh Komponen
  setupInitialIcons();
  setupSoundToggle();
  setupMascotInteraction();
  setupReviewFilters();
  setupEventHandlers();
  renderGradesDashboard();
});
