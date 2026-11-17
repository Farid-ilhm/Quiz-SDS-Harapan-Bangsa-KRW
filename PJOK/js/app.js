/**
 * Aplikasi Arena Kuis PJOK SD - Logika Interaktif & Alur Kuis
 * Fitur:
 * - Pemilihan kelas 1 sampai 6 dengan materi PJOK resmi
 * - Gimmick maskot Kapten Bugar interaktif dengan tips kebugaran
 * - Lintasan lari atletik animasi progress bar
 * - Pembaca soal bersuara (Text-to-Speech)
 * - Efek suara kartun komik olahraga (Web Audio API)
 * - Selebrasi piala bersinar & hujan konfeti kanvas
 * - Lembar review seluruh 10 soal dengan kotak koreksi edukatif
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Kontroler Audio
  const audio = new AudioController();

  // Status Aplikasi
  let currentGrade = 1;
  let currentQuestions = [];
  let currentIndex = 0;
  let userAnswers = [];
  let isAnswered = false;
  let activeReviewFilter = "all";

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

  // Elemen Layar Kuis
  const btnBackHome = document.getElementById("btn-back-home");
  const quizGradeBadge = document.getElementById("quiz-grade-badge");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const trackFill = document.getElementById("track-fill");
  const runnerSprite = document.getElementById("runner-sprite");
  const questionTopic = document.getElementById("question-topic");
  const btnSpeakQuestion = document.getElementById("btn-speak-question");
  const speechBtnIcon = document.getElementById("speech-btn-icon");
  const speechBtnLabel = document.getElementById("speech-btn-label");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackBanner = document.getElementById("feedback-banner");
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackHeading = document.getElementById("feedback-heading");
  const feedbackSub = document.getElementById("feedback-sub");
  const btnNextQuestion = document.getElementById("btn-next-question");
  const nextBtnIcon = document.getElementById("next-btn-icon");

  // Elemen Layar Hasil & Selebrasi
  const giantTrophyBox = document.getElementById("giant-trophy-box");
  const starsCluster = document.getElementById("stars-cluster");
  const resultTitle = document.getElementById("result-title");
  const resultSub = document.getElementById("result-sub");
  const scoreNumberDisplay = document.getElementById("score-number-display");
  const statCorrect = document.getElementById("stat-correct");
  const statWrong = document.getElementById("stat-wrong");
  const btnRetry = document.getElementById("btn-retry");
  const btnChangeGrade = document.getElementById("btn-change-grade");
  const btnReconfetti = document.getElementById("btn-reconfetti");
  const reviewList = document.getElementById("review-list");

  // Filter Tab Review
  const filterAllBtn = document.getElementById("filter-all-btn");
  const filterWrongBtn = document.getElementById("filter-wrong-btn");
  const filterCorrectBtn = document.getElementById("filter-correct-btn");

  // Kanvas Konfeti
  const confettiCanvas = document.getElementById("confetti-canvas");
  let confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;
  let confettiParticles = [];
  let confettiAnimationId = null;

  // Tips Olahraga & Kebugaran Seru dari Kapten Bugar
  const fitnessTips = [
    "Minum air putih minimal 8 gelas setiap hari agar tubuh tidak dehidrasi dan tetap bugar!",
    "Selalu lakukan pemanasan sebelum berolahraga agar otot dan persendian terhindar dari cedera!",
    "Tidur malam yang cukup selama 8 jam membantu pertumbuhan dan memulihkan kembali tenagamu!",
    "Makan sayur dan buah segar setiap hari membuat sistem kekebalan tubuhmu sekuat pahlawan!",
    "Bermain olahraga bersama teman melatih sportivitas, kerjasama, dan membuat hati gembira!",
    "Setelah berolahraga, lakukan pendinginan santai agar detak jantungmu kembali normal!"
  ];
  let tipIndex = 0;

  // =========================================================================
  // SETUP IKON STATIS & KARTU KELAS
  // =========================================================================
  function initIcons() {
    if (soundIconBox) soundIconBox.innerHTML = AppIcons.speakerOn;
    if (speechBtnIcon) speechBtnIcon.innerHTML = AppIcons.speakerWave;
    if (nextBtnIcon) nextBtnIcon.innerHTML = AppIcons.arrowRight;

    const brandIconBox = document.getElementById("brand-icon-box");
    if (brandIconBox) brandIconBox.innerHTML = AppIcons.whistle;

    const backIconBox = document.getElementById("back-icon-box");
    if (backIconBox) backIconBox.innerHTML = AppIcons.arrowLeft;

    const retryIconBox = document.getElementById("retry-icon-box");
    if (retryIconBox) retryIconBox.innerHTML = AppIcons.refresh;

    const changeGradeIconBox = document.getElementById("change-grade-icon-box");
    if (changeGradeIconBox) changeGradeIconBox.innerHTML = AppIcons.gridSquares;

    const reviewHeaderIcon = document.getElementById("review-header-icon");
    if (reviewHeaderIcon) reviewHeaderIcon.innerHTML = AppIcons.bookOpen;

    if (giantTrophyBox) giantTrophyBox.innerHTML = AppIcons.trophy;
  }

  // Render Kartu Pilihan Kelas 1 - 6
  function renderGradeCards() {
    if (!gradesContainer) return;
    gradesContainer.innerHTML = "";

    GradeLevels.forEach(g => {
      const card = document.createElement("article");
      card.className = "grade-card";

      const iconSvg = AppIcons[g.iconKey] || AppIcons.runner;

      card.innerHTML = `
        <div>
          <div class="grade-card-top">
            <span class="grade-number-badge badge-${g.badgeColor}">Kelas ${g.grade}</span>
            <div class="grade-icon-box" aria-hidden="true">${iconSvg}</div>
          </div>
          <h3 class="grade-title">${g.title}</h3>
          <p class="grade-subtitle">${g.sub}</p>
          <p class="grade-desc">${g.desc}</p>
        </div>
        <button type="button" class="btn-start-grade" data-grade="${g.grade}" aria-label="Mulai Kuis PJOK ${g.title}">
          <span>Mulai Kuis</span>
          <span aria-hidden="true">${AppIcons.arrowRight}</span>
        </button>
      `;

      const startBtn = card.querySelector(".btn-start-grade");
      startBtn.addEventListener("click", () => {
        audio.playClick();
        audio.playWhistle();
        startQuiz(g.grade);
      });

      gradesContainer.appendChild(card);
    });
  }

  // =========================================================================
  // GIMMICK MASKOT INTERAKTIF "KAPTEN BUGAR"
  // =========================================================================
  if (mascotInteractiveBox) {
    mascotInteractiveBox.addEventListener("click", () => {
      audio.playWhistle();
      tipIndex = (tipIndex + 1) % fitnessTips.length;
      if (mascotSpeechText) {
        mascotSpeechText.style.opacity = "0";
        setTimeout(() => {
          mascotSpeechText.textContent = fitnessTips[tipIndex];
          mascotSpeechText.style.opacity = "1";
        }, 150);
      }

      // Animasi lompat ceria maskot
      const avatarWrap = mascotInteractiveBox.querySelector(".mascot-avatar-wrap");
      if (avatarWrap) {
        avatarWrap.style.transform = "scale(1.12) translateY(-10px) rotate(6deg)";
        setTimeout(() => {
          avatarWrap.style.transform = "";
        }, 300);
      }
    });
  }

  // =========================================================================
  // ALUR KUIS
  // =========================================================================
  function startQuiz(grade) {
    currentGrade = grade;
    currentQuestions = QuizQuestions[grade] || [];
    currentIndex = 0;
    userAnswers = [];
    isAnswered = false;

    gradesScreen.classList.add("d-none");
    resultsScreen.classList.add("d-none");
    quizScreen.classList.remove("d-none");

    if (quizGradeBadge) {
      quizGradeBadge.textContent = `Kelas ${grade} SD`;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    renderQuestion();
  }

  function renderQuestion() {
    audio.stopSpeech();
    isAnswered = false;

    const q = currentQuestions[currentIndex];
    const totalQ = currentQuestions.length;
    const qNum = currentIndex + 1;

    // Perbarui Teks Progres & Lintasan Lari Atletik
    if (progressText) progressText.textContent = `Soal ${qNum} dari ${totalQ}`;
    const percent = Math.round((qNum / totalQ) * 100);
    if (progressPercent) progressPercent.textContent = `${percent}%`;
    if (trackFill) trackFill.style.width = `${percent}%`;

    // Topik & Kalimat Soal
    if (questionTopic) questionTopic.textContent = q.topic;
    if (questionText) questionText.textContent = q.question;

    // Reset Tombol TTS
    resetSpeechButtonUI();

    // Kosongkan dan buat opsi jawaban
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      const letters = ["A", "B", "C", "D"];

      q.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.dataset.index = idx;
        btn.innerHTML = `
          <span class="option-letter" aria-hidden="true">${letters[idx]}</span>
          <span class="option-text">${optText}</span>
        `;

        btn.addEventListener("click", () => handleSelectOption(idx));
        optionsContainer.appendChild(btn);
      });
    }

    // Sembunyikan banner feedback
    if (feedbackBanner) feedbackBanner.classList.add("d-none");
  }

  function handleSelectOption(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;

    const q = currentQuestions[currentIndex];
    const isCorrect = selectedIndex === q.correctIndex;

    // Rekam riwayat jawaban anak
    userAnswers.push({
      questionId: q.id,
      questionText: q.question,
      topic: q.topic,
      options: [...q.options],
      selectedIndex: selectedIndex,
      correctIndex: q.correctIndex,
      isCorrect: isCorrect,
      explanation: q.explanation
    });

    // Tandai tombol opsi di layar
    const optionButtons = optionsContainer.querySelectorAll(".option-btn");
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === selectedIndex) {
        btn.classList.add(isCorrect ? "selected-correct" : "selected-wrong");
      }
      if (!isCorrect && idx === q.correctIndex) {
        btn.classList.add("reveal-correct");
      }
    });

    // Mainkan efek suara
    if (isCorrect) {
      audio.playCorrect();
    } else {
      audio.playWrong();
    }

    // Tampilkan Banner Feedback Komik
    showFeedbackBanner(isCorrect);
  }

  function showFeedbackBanner(isCorrect) {
    if (!feedbackBanner) return;

    feedbackBanner.className = `quiz-feedback-banner ${isCorrect ? "feedback-correct" : "feedback-wrong"}`;
    feedbackBanner.classList.remove("d-none");

    if (feedbackIcon) {
      feedbackIcon.innerHTML = isCorrect ? AppIcons.check : AppIcons.cross;
    }

    if (feedbackHeading) {
      feedbackHeading.textContent = isCorrect ? "HEBAT SEKALI! JAWABAN BENAR!" : "TETAP SEMANGAT! BELUM TEPAT!";
    }

    if (feedbackSub) {
      feedbackSub.textContent = isCorrect
        ? "Gerakan dan pemahaman olahragamu sangat bagus!"
        : "Jangan cemas, ayo lanjut dan pelajari koreksinya di akhir kuis!";
    }

    const isLast = currentIndex === currentQuestions.length - 1;
    const nextBtnText = btnNextQuestion.querySelector(".next-btn-text");
    if (nextBtnText) {
      nextBtnText.textContent = isLast ? "Lihat Hasil & Koreksi" : "Soal Berikutnya";
    }

    btnNextQuestion.focus();
  }

  // Tombol Maju ke Soal Berikutnya
  if (btnNextQuestion) {
    btnNextQuestion.addEventListener("click", () => {
      audio.playClick();
      audio.stopSpeech();

      if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
      } else {
        finishQuiz();
      }
    });
  }

  // Tombol Kembali ke Dashboard
  if (btnBackHome) {
    btnBackHome.addEventListener("click", () => {
      audio.playClick();
      audio.stopSpeech();
      if (confirm("Ingin kembali ke menu pilihan kelas? Progres kuis saat ini akan diulang.")) {
        backToDashboard();
      }
    });
  }

  function backToDashboard() {
    audio.stopSpeech();
    quizScreen.classList.add("d-none");
    resultsScreen.classList.add("d-none");
    gradesScreen.classList.remove("d-none");
    stopConfetti();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // =========================================================================
  // FITUR SUARA BACAKAN SOAL (TTS)
  // =========================================================================
  if (btnSpeakQuestion) {
    btnSpeakQuestion.addEventListener("click", () => {
      if (audio.isSpeaking) {
        audio.stopSpeech();
        resetSpeechButtonUI();
        return;
      }

      const q = currentQuestions[currentIndex];
      if (!q) return;

      const letters = ["A", "B", "C", "D"];
      let fullSpeech = `${q.question}. `;
      q.options.forEach((opt, idx) => {
        fullSpeech += `Pilihan ${letters[idx]}: ${opt}. `;
      });

      audio.speakText(
        fullSpeech,
        () => {
          btnSpeakQuestion.classList.add("is-speaking");
          if (speechBtnIcon) speechBtnIcon.innerHTML = AppIcons.soundWaveAnimated;
          if (speechBtnLabel) speechBtnLabel.textContent = "Sedang Bicara...";
        },
        () => {
          resetSpeechButtonUI();
        }
      );
    });
  }

  function resetSpeechButtonUI() {
    if (!btnSpeakQuestion) return;
    btnSpeakQuestion.classList.remove("is-speaking");
    if (speechBtnIcon) speechBtnIcon.innerHTML = AppIcons.speakerWave;
    if (speechBtnLabel) speechBtnLabel.textContent = "Dengarkan Soal";
  }

  // Toggle Suara Header
  if (btnToggleSound) {
    btnToggleSound.addEventListener("click", () => {
      const enabled = audio.toggleSound();
      if (soundIconBox) {
        soundIconBox.innerHTML = enabled ? AppIcons.speakerOn : AppIcons.speakerOff;
      }
      if (soundLabelText) {
        soundLabelText.textContent = enabled ? "Suara Aktif" : "Suara Bisu";
      }
      audio.playClick();
    });
  }

  // =========================================================================
  // GIMMICK HASIL AKHIR: PIALA BERSINAR, BINTANG & HUJAN KONFETI (SYARAT 9)
  // =========================================================================
  function finishQuiz() {
    quizScreen.classList.add("d-none");
    resultsScreen.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const total = userAnswers.length;
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = total - correctCount;
    const finalScore = Math.round((correctCount / total) * 100);

    // Animasi Penghitung Angka Skor
    animateScoreCounter(finalScore);

    // Statistik
    if (statCorrect) statCorrect.textContent = `${correctCount} Soal`;
    if (statWrong) statWrong.textContent = `${wrongCount} Soal`;

    // Judul & Pesan Hasil
    if (resultTitle && resultSub) {
      if (finalScore === 100) {
        resultTitle.textContent = "JUARA SEJATI PJOK! SEMPURNA!";
        resultSub.textContent = "Luar biasa! Kamu menguasai seluruh materi olahraga dan kesehatan dengan sempurna!";
      } else if (finalScore >= 80) {
        resultTitle.textContent = "HEBAT! FISIK KUAT & CERDAS!";
        resultSub.textContent = "Prestasi yang sangat bagus! Pemahaman olahragamu sudah sangat mantap!";
      } else if (finalScore >= 60) {
        resultTitle.textContent = "BAGUS! TERUS BERLATIH!";
        resultSub.textContent = "Tubuhmu sudah bersemangat! Yuk pelajari koreksi soal di bawah agar semakin juara!";
      } else {
        resultTitle.textContent = "SEMANGAT TERUS BEROLAHRAGA!";
        resultSub.textContent = "Jangan berkecil hati! Pelajari semua pembahasannya di bawah lalu coba lagi ya!";
      }
    }

    // Render Bintang-Bintang Kejora Bersinar
    renderScoreStars(finalScore);

    // Efek Suara Selebrasi Terompet Juara
    audio.playVictory();

    // Jalankan Hujan Konfeti Kanvas
    startConfetti();

    // Render Lembar Review Seluruh 10 Soal
    activeReviewFilter = "all";
    renderReviewList("all");
    updateFilterTabs(correctCount, wrongCount, total);
  }

  function animateScoreCounter(targetScore) {
    if (!scoreNumberDisplay) return;
    let current = 0;
    const duration = 1200;
    const stepTime = 25;
    const stepValue = Math.max(1, Math.round(targetScore / (duration / stepTime)));

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= targetScore) {
        current = targetScore;
        clearInterval(timer);
      }
      scoreNumberDisplay.textContent = current;
    }, stepTime);
  }

  function renderScoreStars(score) {
    if (!starsCluster) return;
    starsCluster.innerHTML = "";

    const starCount = score === 100 ? 5 : score >= 80 ? 4 : score >= 60 ? 3 : 2;
    for (let i = 0; i < starCount; i++) {
      const starSpan = document.createElement("span");
      starSpan.className = "star-pop";
      starSpan.innerHTML = AppIcons.starFilled;
      starsCluster.appendChild(starSpan);
    }
  }

  // =========================================================================
  // REVIEW LENGKAP & KOREKSI JAWABAN (SYARAT 4)
  // =========================================================================
  function renderReviewList(filter) {
    if (!reviewList) return;
    reviewList.innerHTML = "";

    const filtered = userAnswers.filter(a => {
      if (filter === "wrong") return !a.isCorrect;
      if (filter === "correct") return a.isCorrect;
      return true;
    });

    if (filtered.length === 0) {
      reviewList.innerHTML = `
        <div style="text-align: center; padding: 24px; font-weight: 700; color: #64748B;">
          Tidak ada soal dalam kategori ini.
        </div>
      `;
      return;
    }

    filtered.forEach((ans, displayIdx) => {
      // Cari nomor asli di userAnswers
      const originalIdx = userAnswers.indexOf(ans) + 1;
      const letters = ["A", "B", "C", "D"];

      const card = document.createElement("article");
      card.className = `review-item-card ${ans.isCorrect ? "is-correct-card" : "is-wrong-card"}`;

      const userLetter = letters[ans.selectedIndex] || "-";
      const userText = ans.options[ans.selectedIndex] || "Tidak Dijawab";
      const keyLetter = letters[ans.correctIndex];
      const keyText = ans.options[ans.correctIndex];

      let correctionHtml = "";
      if (!ans.isCorrect) {
        // KOTAK KOREKSI JAWABAN (SYARAT 4)
        correctionHtml = `
          <div class="correction-explanation-box">
            <div class="correction-title">
              <span aria-hidden="true">${AppIcons.helpCircle}</span>
              <span>Koreksi & Pembahasan Benar:</span>
            </div>
            <p class="correction-text">
              Jawaban yang tepat adalah <strong>Pilihan ${keyLetter}: ${keyText}</strong>.<br>
              ${ans.explanation}
            </p>
          </div>
        `;
      } else {
        // Keterangan Penguatan Jawaban Benar
        correctionHtml = `
          <div class="correction-explanation-box" style="background: #F0FDF4; border-color: #86EFAC;">
            <div class="correction-title" style="color: #065F46;">
              <span aria-hidden="true">${AppIcons.check}</span>
              <span>Pengetahuan Tambahan:</span>
            </div>
            <p class="correction-text">
              ${ans.explanation}
            </p>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="review-card-head">
          <span class="review-q-num">Nomor ${originalIdx} (Topik: ${ans.topic})</span>
          <span class="review-status-badge ${ans.isCorrect ? "status-badge-correct" : "status-badge-wrong"}">
            <span aria-hidden="true">${ans.isCorrect ? AppIcons.check : AppIcons.cross}</span>
            <span>${ans.isCorrect ? "Jawaban Benar" : "Perlu Koreksi"}</span>
          </span>
        </div>
        <p class="review-q-text">${ans.questionText}</p>
        <div class="review-answer-row">
          <div class="answer-line">
            <span class="answer-line-label">Jawaban Kamu:</span>
            <span class="answer-line-val ${ans.isCorrect ? "val-user-correct" : "val-user-wrong"}">
              Pilihan ${userLetter}: ${userText}
            </span>
          </div>
          ${!ans.isCorrect ? `
            <div class="answer-line">
              <span class="answer-line-label">Kunci Jawaban:</span>
              <span class="answer-line-val val-key-correct">
                Pilihan ${keyLetter}: ${keyText}
              </span>
            </div>
          ` : ""}
        </div>
        ${correctionHtml}
      `;

      reviewList.appendChild(card);
    });
  }

  function updateFilterTabs(correctCount, wrongCount, total) {
    if (filterAllBtn) filterAllBtn.textContent = `Semua (${total})`;
    if (filterWrongBtn) filterWrongBtn.textContent = `Perlu Koreksi (${wrongCount})`;
    if (filterCorrectBtn) filterCorrectBtn.textContent = `Benar (${correctCount})`;

    [filterAllBtn, filterWrongBtn, filterCorrectBtn].forEach(b => {
      if (b) b.classList.remove("active");
    });
    if (filterAllBtn) filterAllBtn.classList.add("active");
  }

  // Filter Tabs Event Listeners
  if (filterAllBtn) {
    filterAllBtn.addEventListener("click", () => {
      audio.playClick();
      setFilter("all", filterAllBtn);
    });
  }
  if (filterWrongBtn) {
    filterWrongBtn.addEventListener("click", () => {
      audio.playClick();
      setFilter("wrong", filterWrongBtn);
    });
  }
  if (filterCorrectBtn) {
    filterCorrectBtn.addEventListener("click", () => {
      audio.playClick();
      setFilter("correct", filterCorrectBtn);
    });
  }

  function setFilter(filter, activeBtn) {
    activeReviewFilter = filter;
    [filterAllBtn, filterWrongBtn, filterCorrectBtn].forEach(b => {
      if (b) b.classList.remove("active");
    });
    if (activeBtn) activeBtn.classList.add("active");
    renderReviewList(filter);
  }

  // Tombol Ulangi Kuis
  if (btnRetry) {
    btnRetry.addEventListener("click", () => {
      audio.playClick();
      startQuiz(currentGrade);
    });
  }

  // Tombol Ganti Kelas
  if (btnChangeGrade) {
    btnChangeGrade.addEventListener("click", () => {
      audio.playClick();
      backToDashboard();
    });
  }

  // Tombol Rayakan Lagi Konfeti
  if (btnReconfetti) {
    btnReconfetti.addEventListener("click", () => {
      audio.playStar();
      startConfetti();
    });
  }

  // =========================================================================
  // SISTEM KONFETI KANVAS (GAYA KOMIK CERIA)
  // =========================================================================
  function resizeCanvas() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function startConfetti() {
    if (!confettiCanvas || !confettiCtx) return;
    resizeCanvas();
    stopConfetti();

    const colors = ["#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#8B5CF6", "#F43F5E", "#FDE047"];
    confettiParticles = [];

    // Buat 100 partikel konfeti
    for (let i = 0; i < 110; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: -20 - Math.random() * 200,
        w: 8 + Math.random() * 10,
        h: 12 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        vy: 2.5 + Math.random() * 3.5,
        vx: (Math.random() - 0.5) * 2.5,
        shape: Math.random() > 0.4 ? "rect" : "circle"
      });
    }

    let frames = 0;
    function renderConfetti() {
      if (!confettiCtx) return;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      let alive = false;
      confettiParticles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(frames * 0.05) * 0.8;
        p.rotation += p.rotSpeed;

        if (p.y < confettiCanvas.height + 40) {
          alive = true;
          confettiCtx.save();
          confettiCtx.translate(p.x, p.y);
          confettiCtx.rotate((p.rotation * Math.PI) / 180);
          confettiCtx.fillStyle = p.color;
          confettiCtx.strokeStyle = "#1E293B";
          confettiCtx.lineWidth = 1.5;

          if (p.shape === "rect") {
            confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            confettiCtx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
          } else {
            confettiCtx.beginPath();
            confettiCtx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
            confettiCtx.fill();
            confettiCtx.stroke();
          }
          confettiCtx.restore();
        }
      });

      frames++;
      if (alive && frames < 360) {
        confettiAnimationId = requestAnimationFrame(renderConfetti);
      } else {
        stopConfetti();
      }
    }

    confettiAnimationId = requestAnimationFrame(renderConfetti);
  }

  function stopConfetti() {
    if (confettiAnimationId) {
      cancelAnimationFrame(confettiAnimationId);
      confettiAnimationId = null;
    }
    if (confettiCanvas && confettiCtx) {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // =========================================================================
  // INISIALISASI AWAL
  // =========================================================================
  initIcons();
  renderGradeCards();
});
