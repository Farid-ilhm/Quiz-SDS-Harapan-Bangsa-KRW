/**
 * Main Application Logic - Kuis Bahasa Mandarin SD
 * Menghubungkan UI, data soal, audio TTS, ikon vektor web gratis, dan review koreksi jawaban.
 */

document.addEventListener("DOMContentLoaded", () => {
  const App = {
    // State Aplikasi
    currentGrade: null,
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: [],
    score: 0,
    hasAnsweredCurrent: false,

    // Elemen DOM
    elements: {
      gradesScreen: document.getElementById("grades-screen"),
      quizScreen: document.getElementById("quiz-screen"),
      resultsScreen: document.getElementById("results-screen"),
      gradesContainer: document.getElementById("grades-container"),
      
      // Top bar kuis
      btnBackHome: document.getElementById("btn-back-home"),
      progressText: document.getElementById("progress-text"),
      progressPercent: document.getElementById("progress-percent"),
      progressFill: document.getElementById("progress-fill"),

      // Panel soal
      questionTopic: document.getElementById("question-topic"),
      questionText: document.getElementById("question-text"),
      mandarinChar: document.getElementById("mandarin-char"),
      mandarinPinyin: document.getElementById("mandarin-pinyin"),
      btnSpeakQuestion: document.getElementById("btn-speak-question"),
      optionsContainer: document.getElementById("options-container"),
      feedbackBanner: document.getElementById("feedback-banner"),
      feedbackEmoji: document.getElementById("feedback-emoji"),
      feedbackHeading: document.getElementById("feedback-heading"),
      feedbackSub: document.getElementById("feedback-sub"),
      btnNextQuestion: document.getElementById("btn-next-question"),

      // Layar Hasil & Review
      scoreStars: document.getElementById("score-stars"),
      scoreTitle: document.getElementById("score-title"),
      scoreMessage: document.getElementById("score-message"),
      scoreMetric: document.getElementById("score-metric"),
      reviewList: document.getElementById("review-list"),
      btnRetryQuiz: document.getElementById("btn-retry-quiz"),
      btnChangeGrade: document.getElementById("btn-change-grade"),

      // Sound toggle
      btnToggleSound: document.getElementById("btn-toggle-sound")
    },

    init() {
      this.renderGrades();
      this.bindEvents();
    },

    bindEvents() {
      // Tombol kembali ke daftar kelas
      this.elements.btnBackHome.addEventListener("click", () => {
        window.quizAudio.playPop();
        window.quizAudio.stopSpeech();
        this.showScreen("grades");
      });

      // Tombol lanjut ke soal berikutnya
      this.elements.btnNextQuestion.addEventListener("click", () => {
        window.quizAudio.playPop();
        this.nextQuestion();
      });

      // Tombol ulangi kuis di layar hasil
      this.elements.btnRetryQuiz.addEventListener("click", () => {
        window.quizAudio.playPop();
        if (this.currentGrade) {
          this.startQuiz(this.currentGrade.id);
        }
      });

      // Tombol ganti kelas di layar hasil
      this.elements.btnChangeGrade.addEventListener("click", () => {
        window.quizAudio.playPop();
        this.showScreen("grades");
      });

      // Tombol Suara (TTS) membacakan soal
      this.elements.btnSpeakQuestion.addEventListener("click", () => {
        this.speakCurrentQuestion();
      });

      // Tombol Mute / Unmute Suara menggunakan Ikon Vektor Web
      this.elements.btnToggleSound.addEventListener("click", () => {
        const isSoundOn = window.quizAudio.toggleSound();
        window.quizAudio.playPop();
        this.elements.btnToggleSound.setAttribute("aria-pressed", (!isSoundOn).toString());
        
        const iconSvg = isSoundOn ? window.AppIcons.volumeHigh : window.AppIcons.volumeMute;
        const text = isSoundOn ? "Suara: Nyala" : "Suara: Mati";
        
        this.elements.btnToggleSound.innerHTML = `
          <span class="btn-inline-icon">${iconSvg}</span>
          <span id="sound-label-text">${text}</span>
        `;
      });

      // Navigasi Keyboard (R-32): Tombol 1-4 untuk memilih opsi A-D
      window.addEventListener("keydown", (e) => {
        // Hanya aktif jika sedang di layar kuis dan belum menjawab
        const isQuizVisible = !this.elements.quizScreen.classList.contains("d-none");
        if (!isQuizVisible) return;

        if (!this.hasAnsweredCurrent) {
          if (e.key === "1" || e.key === "a" || e.key === "A") this.handleOptionClick(0);
          if (e.key === "2" || e.key === "b" || e.key === "B") this.handleOptionClick(1);
          if (e.key === "3" || e.key === "c" || e.key === "C") this.handleOptionClick(2);
          if (e.key === "4" || e.key === "d" || e.key === "D") this.handleOptionClick(3);
        } else {
          // Jika sudah menjawab, tekan Enter atau Spasi untuk lanjut
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.nextQuestion();
          }
        }
      });
    },

    // Menampilkan layar tertentu (grades, quiz, results)
    showScreen(screenName) {
      this.elements.gradesScreen.classList.add("d-none");
      this.elements.quizScreen.classList.add("d-none");
      this.elements.resultsScreen.classList.add("d-none");

      if (screenName === "grades") {
        this.elements.gradesScreen.classList.remove("d-none");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (screenName === "quiz") {
        this.elements.quizScreen.classList.remove("d-none");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (screenName === "results") {
        this.elements.resultsScreen.classList.remove("d-none");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },

    // Merender kartu pilihan kelas 1 - 6 menggunakan Icon Vektor Web
    renderGrades() {
      const container = this.elements.gradesContainer;
      container.innerHTML = "";

      window.QUIZ_DATA.grades.forEach((grade) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "grade-card";
        card.setAttribute("aria-label", `Pilih ${grade.title} ${grade.subtitle}`);

        const iconSvg = (window.AppIcons && window.AppIcons[grade.iconKey]) ? window.AppIcons[grade.iconKey] : "";

        card.innerHTML = `
          <div class="grade-card-top">
            <div class="grade-number-badge" style="background-color: ${grade.color}">
              ${grade.title}
            </div>
            <div class="grade-icon-badge" style="color: ${grade.accent};" aria-hidden="true">
              ${iconSvg}
            </div>
          </div>
          <div class="grade-title">${grade.subtitle}</div>
          <p class="grade-desc">${grade.description}</p>
          <div class="grade-card-footer">
            <span class="grade-badge-level">${grade.badge}</span>
            <span class="grade-btn-start">
              <span>Mulai Belajar</span>
              ${window.AppIcons.arrowRight}
            </span>
          </div>
        `;

        card.addEventListener("click", () => {
          window.quizAudio.playPop();
          this.startQuiz(grade.id);
        });

        container.appendChild(card);
      });
    },

    // Memulai kuis untuk kelas yang dipilih
    startQuiz(gradeId) {
      const selectedGrade = window.QUIZ_DATA.grades.find(g => g.id === gradeId);
      if (!selectedGrade) return;

      this.currentGrade = selectedGrade;
      this.questions = [...selectedGrade.questions];
      this.currentQuestionIndex = 0;
      this.userAnswers = [];
      this.score = 0;
      this.hasAnsweredCurrent = false;

      this.showScreen("quiz");
      this.renderCurrentQuestion();
    },

    // Merender pertanyaan aktif
    renderCurrentQuestion() {
      const q = this.questions[this.currentQuestionIndex];
      this.hasAnsweredCurrent = false;

      // Update Progres
      const currentNum = this.currentQuestionIndex + 1;
      const totalNum = this.questions.length;
      const percent = Math.round((currentNum / totalNum) * 100);

      this.elements.progressText.textContent = `Soal ${currentNum} dari ${totalNum} (${this.currentGrade.title})`;
      this.elements.progressPercent.textContent = `${percent}%`;
      this.elements.progressFill.style.width = `${percent}%`;

      // Topik & Teks Soal
      this.elements.questionTopic.textContent = `Topik: ${q.topic}`;
      this.elements.questionText.textContent = q.questionText;

      // Kartu Fokus Mandarin (Hanya tampilkan jika prompt ada)
      this.elements.mandarinChar.textContent = q.mandarinPrompt || "";
      this.elements.mandarinPinyin.textContent = q.pinyinPrompt ? `[ ${q.pinyinPrompt} ]` : "";

      // Sembunyikan banner feedback
      this.elements.feedbackBanner.classList.add("d-none");
      this.elements.feedbackBanner.classList.remove("is-wrong");

      // Reset tombol suara
      this.elements.btnSpeakQuestion.classList.remove("is-speaking");

      // Render 4 Opsi Jawaban (Tanpa arti terjemahan agar menantang dan mendidik)
      const optContainer = this.elements.optionsContainer;
      optContainer.innerHTML = "";

      const letterLabels = ["A", "B", "C", "D"];

      q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        btn.setAttribute("aria-label", `Pilihan ${letterLabels[idx]}: ${opt.text}${opt.pinyin ? ' ' + opt.pinyin : ''}`);

        // Opsi saat kuis: HANYA menampilkan karakter Hanzi dan Pinyin (tanpa arti terjemahan bahasa Indonesia)
        let subTextHtml = "";
        if (opt.pinyin && opt.pinyin.trim() !== "" && opt.pinyin !== opt.text) {
          subTextHtml = `<span class="option-sub-text">${opt.pinyin}</span>`;
        }

        btn.innerHTML = `
          <div class="option-letter-badge">${letterLabels[idx]}</div>
          <div class="option-content">
            <span class="option-mandarin-text hanzi">${opt.text}</span>
            ${subTextHtml}
          </div>
        `;

        btn.addEventListener("click", () => {
          this.handleOptionClick(idx);
        });

        optContainer.appendChild(btn);
      });
    },

    // Membacakan soal menggunakan TTS
    speakCurrentQuestion() {
      const q = this.questions[this.currentQuestionIndex];
      const btn = this.elements.btnSpeakQuestion;

      btn.classList.add("is-speaking");
      window.quizAudio.speakFullQuestion(
        q,
        () => btn.classList.add("is-speaking"),
        () => btn.classList.remove("is-speaking")
      );
    },

    // Menangani saat anak memilih salah satu jawaban
    handleOptionClick(selectedIndex) {
      if (this.hasAnsweredCurrent) return;
      this.hasAnsweredCurrent = true;

      const q = this.questions[this.currentQuestionIndex];
      const isCorrect = selectedIndex === q.correctIndex;

      // Simpan jawaban anak
      this.userAnswers.push({
        questionId: q.id,
        selectedIndex: selectedIndex,
        isCorrect: isCorrect,
        questionObj: q
      });

      if (isCorrect) {
        this.score += 1;
        window.quizAudio.playCorrect();
      } else {
        window.quizAudio.playIncorrect();
      }

      // Beri warna visual pada opsi
      const optionButtons = this.elements.optionsContainer.querySelectorAll(".option-btn");
      optionButtons.forEach((btn, idx) => {
        btn.disabled = true; // Nonaktifkan agar tidak bisa klik ganda
        if (idx === q.correctIndex) {
          btn.classList.add("selected-correct");
        } else if (idx === selectedIndex && !isCorrect) {
          btn.classList.add("selected-wrong");
        }
      });

      // Tampilkan banner pesan penyemangat dengan ikon bersinar/bergerak
      const banner = this.elements.feedbackBanner;
      banner.classList.remove("d-none");

      if (isCorrect) {
        banner.classList.remove("is-wrong");
        this.elements.feedbackEmoji.className = "feedback-emoji feedback-star-shine";
        this.elements.feedbackEmoji.innerHTML = window.AppIcons.starFilled;
        this.elements.feedbackHeading.textContent = "Jawabanmu Hebat & Tepat!";
        this.elements.feedbackSub.textContent = "Pintar sekali, pertahankan semangat belajarmu ya!";
      } else {
        banner.classList.add("is-wrong");
        this.elements.feedbackEmoji.className = "feedback-emoji feedback-bulb-pulse";
        this.elements.feedbackEmoji.innerHTML = window.AppIcons.lightbulb;
        this.elements.feedbackHeading.textContent = "Hampir Benar, Tetap Semangat!";
        this.elements.feedbackSub.textContent = "Jangan berkecil hati, nanti ada pembahasannya di akhir kuis!";
      }

      // Fokuskan tombol lanjut untuk aksesibilitas keyboard
      this.elements.btnNextQuestion.focus();
    },

    // Pindah ke soal berikutnya atau tampilkan hasil kuis
    nextQuestion() {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.renderCurrentQuestion();
      } else {
        this.showResults();
      }
    },

    // Menampilkan layar hasil skor dan lembar review jawaban
    showResults() {
      this.showScreen("results");
      window.quizAudio.playFanfare();

      const total = this.questions.length;
      const score = this.score;
      const percentage = Math.round((score / total) * 100);

      // Hitung jumlah bintang (1 sampai 5)
      let starCount = 3;
      let title = "Bagus Sekali!";
      let message = "Kamu sudah berusaha dengan baik menyelesaikan kuis Bahasa Mandarin ini!";

      if (score === total) {
        starCount = 5;
        title = "Sempurna! Kamu Juara Kelas!";
        message = "Luar biasa! Semua jawabanmu benar dan tepat. Teruslah berlatih!";
      } else if (score >= total * 0.8) {
        starCount = 4;
        title = "Hebat Sekali! Bintang Empat!";
        message = "Hampir semua jawabanmu benar! Sedikit lagi menuju nilai sempurna!";
      } else if (score >= total * 0.5) {
        starCount = 3;
        title = "Kerja Bagus, Terus Berlatih!";
        message = "Kamu sudah memahami sebagian materi. Yuk pelajari koreksi di bawah ini!";
      } else {
        starCount = 2;
        title = "Semangat Belajar Pantang Menyerah!";
        message = "Jangan menyerah ya! Mari kita baca pembahasannya dan coba lagi nanti.";
      }

      // Render Bintang Animasi Muncul Berurutan & Bersinar (Staggered Pop-In)
      let starsHtml = "";
      for (let i = 0; i < 5; i++) {
        const isFilled = i < starCount;
        const starSvg = isFilled ? window.AppIcons.starFilled : window.AppIcons.starEmpty;
        starsHtml += `<span class="star-item ${isFilled ? 'is-filled' : 'is-empty'}">${starSvg}</span>`;
      }
      this.elements.scoreStars.innerHTML = starsHtml;
      this.elements.scoreTitle.textContent = title;
      this.elements.scoreMessage.textContent = message;
      this.elements.scoreMetric.textContent = `Nilai Kamu: ${score} dari ${total} (${percentage}%)`;

      // Luncurkan Pesta Kertas Confetti jika nilai berhasil mencapai target
      if (score >= total * 0.5) {
        this.launchConfetti();
      }

      // Render Lembar Review Lengkap dengan Koreksi Jawaban
      this.renderReviewList();
    },

    // Efek Animasi Confetti Pesta Kertas Komik
    launchConfetti() {
      const canvas = document.getElementById("confetti-canvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ["#FACC15", "#38BDF8", "#FB923C", "#34D399", "#F472B6", "#A78BFA"];
      const particles = [];
      const particleCount = 48;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height * 0.5,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 3 + 2.5,
          angle: Math.random() * 360,
          vAngle: (Math.random() - 0.5) * 6,
          shape: Math.random() > 0.5 ? "rect" : "circle"
        });
      }

      let animationFrameId = null;
      const startTime = Date.now();
      const duration = 3500; // 3.5 detik pesta animasi

      const render = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed > duration) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          cancelAnimationFrame(animationFrameId);
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.vAngle;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.angle * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.strokeStyle = "#1E293B";
          ctx.lineWidth = 1.5;

          if (p.shape === "rect") {
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            ctx.strokeRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }

          ctx.restore();
        });

        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);
    },

    // Merender daftar semua soal yang telah dijawab beserta koreksi jika ada yang salah
    renderReviewList() {
      const container = this.elements.reviewList;
      container.innerHTML = "";

      const letterLabels = ["A", "B", "C", "D"];

      this.userAnswers.forEach((ans, idx) => {
        const q = ans.questionObj;
        const isCorrect = ans.isCorrect;
        const userChoice = q.options[ans.selectedIndex];
        const correctChoice = q.options[q.correctIndex];

        const card = document.createElement("article");
        card.className = `review-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

        const statusBadgeContent = isCorrect 
          ? `${window.AppIcons.check} <span>Benar</span>` 
          : `${window.AppIcons.xmark} <span>Kurang Tepat</span>`;

        let cardHtml = `
          <div class="review-card-header">
            <span class="review-q-num">Nomor ${idx + 1}</span>
            <span class="review-status-badge ${isCorrect ? 'correct' : 'wrong'}">
              ${statusBadgeContent}
            </span>
          </div>

          <h3 class="review-question-text">${q.questionText}</h3>

          <div class="review-answers-box">
            <div class="review-user-answer">
              <span>Jawaban yang kamu pilih:</span>
              <strong style="color: ${isCorrect ? '#065F46' : '#991B1B'}">
                (${letterLabels[ans.selectedIndex]}) ${userChoice.text}${userChoice.pinyin ? ' [' + userChoice.pinyin + ']' : ''} - ${userChoice.meaning}
              </strong>
            </div>
          </div>
        `;

        // JIKA JAWABAN SALAH: Tampilkan kotak koreksi dan pembahasan langsung di bawahnya!
        if (!isCorrect) {
          cardHtml += `
            <div class="review-correction-box">
              <div class="correction-title">
                ${window.AppIcons.lightbulb}
                <strong>Koreksi & Pembahasan Guru:</strong>
              </div>
              <div>Jawaban yang benar adalah:</div>
              <div class="correction-correct-answer">
                <span style="display: inline-flex; align-items: center; gap: 6px;">
                  ${window.AppIcons.check}
                  <span>(${letterLabels[q.correctIndex]}) ${correctChoice.text}${correctChoice.pinyin ? ' [' + correctChoice.pinyin + ']' : ''} - ${correctChoice.meaning}</span>
                </span>
              </div>
              <p class="correction-explanation-text">
                <strong>Penjelasan:</strong> ${q.explanation}
              </p>
              <button type="button" class="btn-review-audio" data-hanzi="${correctChoice.text}" aria-label="Dengarkan pengucapan yang benar">
                ${window.AppIcons.volumeHigh}
                <span>Dengarkan Pengucapan: <strong>${correctChoice.text}${correctChoice.pinyin ? ' (' + correctChoice.pinyin + ')' : ''}</strong></span>
              </button>
            </div>
          `;
        } else {
          // JIKA JAWABAN BENAR: Tetap berikan info edukatif & tombol audio untuk memperkuat hafalan
          cardHtml += `
            <div style="margin-top: 8px;">
              <p style="font-size: 0.9rem; color: #475569; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                ${window.AppIcons.lightbulb}
                <span><strong>Catatan:</strong> ${q.explanation}</span>
              </p>
              <button type="button" class="btn-review-audio" data-hanzi="${correctChoice.text}" aria-label="Dengarkan pengucapan kata">
                ${window.AppIcons.volumeHigh}
                <span>Dengarkan Kata: <strong>${correctChoice.text}${correctChoice.pinyin ? ' (' + correctChoice.pinyin + ')' : ''}</strong></span>
              </button>
            </div>
          `;
        }

        card.innerHTML = cardHtml;

        // Pasang event listener ke tombol audio di dalam kartu review
        const audioBtn = card.querySelector(".btn-review-audio");
        if (audioBtn) {
          audioBtn.addEventListener("click", () => {
            const hanziText = audioBtn.getAttribute("data-hanzi");
            window.quizAudio.playPop();
            window.quizAudio.speakMandarin(hanziText);
          });
        }

        container.appendChild(card);
      });
    }
  };

  // Jalankan Aplikasi
  App.init();
});
