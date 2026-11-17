/**
 * Kuis Bahasa Inggris SD - Aplikasi Logika Utama (app.js)
 * Mengelola alur layar: Dashboard -> Kuis -> Hasil & Lembar Koreksi
 * Mengendalikan animasi, Text-to-Speech, sound effects, dan interaksi ramah anak.
 */

const AppState = {
  currentScreen: 'grades-screen', // 'grades-screen' | 'quiz-screen' | 'results-screen'
  currentGrade: 1,
  currentQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: [], // Menyimpan riwayat jawaban: { questionId, selectedIndex, isCorrect }
  score: 0,
  isAnswerSubmitted: false,
  isSpeaking: false
};

// Kumpulan Pesan Interaktif Maskot Rubah Petualang (Foxie)
const MascotQuotes = [
  "Hello explorer! Are you ready to speak English today?",
  "Learning English is like opening a treasure chest of fun!",
  "Click any grade below and let's start our wonderful adventure!",
  "Listen carefully! You can click the speaker button anytime!",
  "Great students never give up! Keep practicing every single day!"
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Audio
  SoundService.init();

  // 2. Tautkan Elemen Antarmuka (DOM)
  const elements = {
    // Tombol Suara Header
    btnToggleSound: document.getElementById('btn-toggle-sound'),
    soundLabelText: document.getElementById('sound-label-text'),
    soundIcon: document.getElementById('sound-icon'),

    // Layar
    gradesScreen: document.getElementById('grades-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),

    // Dashboard
    gradesContainer: document.getElementById('grades-container'),
    heroMascotBox: document.getElementById('hero-mascot-box'),
    speechText: document.getElementById('speech-text'),

    // Kuis
    btnBackHome: document.getElementById('btn-back-home'),
    progressText: document.getElementById('progress-text'),
    progressPercent: document.getElementById('progress-percent'),
    progressFill: document.getElementById('progress-fill'),
    questionTopic: document.getElementById('question-topic'),
    questionGradeTag: document.getElementById('question-grade-tag'),
    questionText: document.getElementById('question-text'),
    audioEnglishPhrase: document.getElementById('audio-english-phrase'),
    btnSpeakQuestion: document.getElementById('btn-speak-question'),
    optionsContainer: document.getElementById('options-container'),
    feedbackBanner: document.getElementById('feedback-banner'),
    feedbackIconBox: document.getElementById('feedback-icon-box'),
    feedbackHeading: document.getElementById('feedback-heading'),
    feedbackSub: document.getElementById('feedback-sub'),
    btnNextQuestion: document.getElementById('btn-next-question'),

    // Hasil & Koreksi
    scoreStars: document.getElementById('score-stars'),
    scoreTitle: document.getElementById('score-title'),
    scoreMessage: document.getElementById('score-message'),
    scoreMetric: document.getElementById('score-metric'),
    btnRetryQuiz: document.getElementById('btn-retry-quiz'),
    btnChangeGrade: document.getElementById('btn-change-grade'),
    reviewList: document.getElementById('review-list'),

    // Modal Konfirmasi Keluar Kuis
    confirmModal: document.getElementById('confirm-modal'),
    btnCancelExit: document.getElementById('btn-cancel-exit'),
    btnConfirmExit: document.getElementById('btn-confirm-exit')
  };

  // 3. Render Kartu Kelas 1-6 pada Dashboard
  renderGradeCards(elements);

  // 4. Pasang Event Listener Interaktif
  setupEventListeners(elements);

  // 5. Perbarui Tampilan Tombol Suara
  updateSoundButtonUI(elements);
});

/**
 * Render Kartu Pilihan Kelas 1 sampai 6 di Dashboard
 */
function renderGradeCards(el) {
  el.gradesContainer.innerHTML = '';

  GradeMetadata.forEach(gradeInfo => {
    const card = document.createElement('article');
    card.className = 'grade-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Pilih ${gradeInfo.title}, tema ${gradeInfo.themeName}`);

    card.innerHTML = `
      <div>
        <div class="grade-card-top">
          <div class="grade-badge-circle" style="background-color: ${gradeInfo.color}20; color: ${gradeInfo.color};">
            <i class="fa-solid ${gradeInfo.icon}" aria-hidden="true"></i>
          </div>
          <span class="grade-level-pill">${gradeInfo.badgeLabel}</span>
        </div>
        <div class="grade-card-content" style="margin-top: 14px;">
          <h2>${gradeInfo.title}</h2>
          <p class="grade-theme-subtitle">${gradeInfo.themeName}</p>
          <p class="grade-desc-text">${gradeInfo.description}</p>
        </div>
      </div>
      <div class="grade-card-footer">
        <span class="question-count-badge">
          <i class="fa-solid fa-list-check" style="color: #0284C7;" aria-hidden="true"></i>
          <span>10 Soal Interaktif</span>
        </span>
        <span class="btn-card-start">
          <span>Mulai Kuis</span>
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </span>
      </div>
    `;

    const triggerStart = () => {
      SoundService.playClick();
      startQuizForGrade(gradeInfo.grade, el);
    };

    card.addEventListener('click', triggerStart);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerStart();
      }
    });

    el.gradesContainer.appendChild(card);
  });
}

/**
 * Pasang Semua Event Listener Aplikasi
 */
function setupEventListeners(el) {
  // Gimmick Maskot Interaktif di Dashboard: Klik untuk berbicara dan bergoyang
  let mascotQuoteIndex = 0;
  el.heroMascotBox.addEventListener('click', () => {
    SoundService.playClick();
    mascotQuoteIndex = (mascotQuoteIndex + 1) % MascotQuotes.length;
    el.speechText.textContent = MascotQuotes[mascotQuoteIndex];

    // Animasi efek buncing pada maskot
    el.heroMascotBox.style.transform = 'scale(1.15) rotate(-6deg)';
    setTimeout(() => {
      el.heroMascotBox.style.transform = '';
    }, 250);

    // Bacakan sapaan dalam bahasa Inggris
    SoundService.speakEnglish(MascotQuotes[mascotQuoteIndex]);
  });

  // Tombol Toggle Suara
  el.btnToggleSound.addEventListener('click', () => {
    const isEnabled = SoundService.toggleSound();
    updateSoundButtonUI(el);
  });

  // Tombol Kembali ke Dashboard dari Layar Kuis
  el.btnBackHome.addEventListener('click', () => {
    SoundService.playClick();
    if (AppState.currentQuestionIndex > 0 && !AppState.isAnswerSubmitted) {
      showExitModal(el);
    } else {
      showScreen('grades-screen', el);
    }
  });

  // Tombol Batal & Konfirmasi Keluar Kuis
  el.btnCancelExit.addEventListener('click', () => {
    SoundService.playClick();
    hideExitModal(el);
  });

  el.btnConfirmExit.addEventListener('click', () => {
    SoundService.playClick();
    hideExitModal(el);
    showScreen('grades-screen', el);
  });

  // Tombol Text-to-Speech untuk Mendengarkan Suara Soal
  el.btnSpeakQuestion.addEventListener('click', () => {
    const q = AppState.currentQuestions[AppState.currentQuestionIndex];
    if (!q) return;

    SoundService.playClick();
    const textToSpeak = q.audioText || q.question;

    el.btnSpeakQuestion.classList.add('is-speaking');
    el.btnSpeakQuestion.setAttribute('aria-pressed', 'true');

    SoundService.speakEnglish(
      textToSpeak,
      () => {
        el.btnSpeakQuestion.classList.add('is-speaking');
      },
      () => {
        el.btnSpeakQuestion.classList.remove('is-speaking');
        el.btnSpeakQuestion.setAttribute('aria-pressed', 'false');
      }
    );
  });

  // Tombol Lanjut ke Soal Berikutnya
  el.btnNextQuestion.addEventListener('click', () => {
    SoundService.playClick();
    advanceToNextQuestion(el);
  });

  // Tombol di Layar Hasil: Coba Lagi Kuis Ini
  el.btnRetryQuiz.addEventListener('click', () => {
    SoundService.playClick();
    startQuizForGrade(AppState.currentGrade, el);
  });

  // Tombol di Layar Hasil: Pilih Kelas Lain
  el.btnChangeGrade.addEventListener('click', () => {
    SoundService.playClick();
    showScreen('grades-screen', el);
  });

  // Aksesibilitas Keyboard: Pintasan 1-4 atau A-D dan Enter
  window.addEventListener('keydown', (e) => {
    // Tutup modal dengan Escape
    if (e.key === 'Escape' && !el.confirmModal.classList.contains('d-none')) {
      hideExitModal(el);
      return;
    }

    // Tombol di layar kuis
    if (AppState.currentScreen === 'quiz-screen') {
      if (AppState.isAnswerSubmitted) {
        if (e.key === 'Enter') {
          e.preventDefault();
          advanceToNextQuestion(el);
        }
      } else {
        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
        if (keyMap.hasOwnProperty(e.key)) {
          const optIndex = keyMap[e.key];
          const buttons = el.optionsContainer.querySelectorAll('.option-btn');
          if (buttons[optIndex] && !buttons[optIndex].disabled) {
            handleAnswerSelection(optIndex, el);
          }
        }
      }
    }
  });
}

/**
 * Memperbarui Tampilan Tombol Suara
 */
function updateSoundButtonUI(el) {
  const isEnabled = SoundService.soundEnabled;
  if (isEnabled) {
    el.btnToggleSound.classList.remove('sound-muted');
    el.soundIcon.className = 'fa-solid fa-volume-high';
    el.soundLabelText.textContent = 'Suara: Nyala';
    el.btnToggleSound.setAttribute('aria-pressed', 'true');
  } else {
    el.btnToggleSound.classList.add('sound-muted');
    el.soundIcon.className = 'fa-solid fa-volume-xmark';
    el.soundLabelText.textContent = 'Suara: Mati';
    el.btnToggleSound.setAttribute('aria-pressed', 'false');
  }
}

/**
 * Mulai Kuis untuk Jenjang Kelas yang Dipilih
 */
function startQuizForGrade(gradeNumber, el) {
  AppState.currentGrade = gradeNumber;
  // Saring 10 soal untuk jenjang kelas tersebut
  AppState.currentQuestions = EnglishQuizQuestions.filter(q => q.grade === gradeNumber);
  AppState.currentQuestionIndex = 0;
  AppState.userAnswers = [];
  AppState.score = 0;
  AppState.isAnswerSubmitted = false;

  showScreen('quiz-screen', el);
  renderCurrentQuestion(el);
}

/**
 * Render Soal Kuis Saat Ini
 */
function renderCurrentQuestion(el) {
  const qIndex = AppState.currentQuestionIndex;
  const total = AppState.currentQuestions.length;
  const q = AppState.currentQuestions[qIndex];

  if (!q) return;

  AppState.isAnswerSubmitted = false;
  SoundService.stopSpeaking();

  // 1. Perbarui Progress Bar
  const percent = Math.round(((qIndex + 1) / total) * 100);
  el.progressText.textContent = `Soal ${qIndex + 1} dari ${total}`;
  el.progressPercent.textContent = `${percent}%`;
  el.progressFill.style.width = `${percent}%`;

  // 2. Info Topik & Jenjang Kelas
  el.questionTopic.innerHTML = `
    <i class="fa-solid ${q.icon}" aria-hidden="true"></i>
    <span>Topik: ${q.topic}</span>
  `;
  el.questionGradeTag.textContent = `Kelas ${q.grade} SD`;

  // 3. Teks Pertanyaan
  el.questionText.textContent = q.question;

  // 4. Frasa Audio yang Disorot
  el.audioEnglishPhrase.textContent = q.audioText || q.question;

  // 5. Reset Banner Balasan
  el.feedbackBanner.classList.add('d-none');
  el.feedbackBanner.classList.remove('feedback-correct', 'feedback-incorrect');

  // 6. Render Pilihan Jawaban A, B, C, D
  el.optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.setAttribute('data-index', idx);
    btn.setAttribute('aria-label', `Pilihan ${letters[idx]}: ${optText}`);

    btn.innerHTML = `
      <span class="option-letter-badge">${letters[idx]}</span>
      <span class="option-text">${optText}</span>
    `;

    btn.addEventListener('click', () => {
      if (!AppState.isAnswerSubmitted) {
        handleAnswerSelection(idx, el);
      }
    });

    el.optionsContainer.appendChild(btn);
  });

  // Otomatis bacakan pengucapan bahasa Inggris soal saat pertama kali muncul
  setTimeout(() => {
    if (SoundService.soundEnabled && AppState.currentScreen === 'quiz-screen') {
      SoundService.speakEnglish(q.audioText || q.question);
    }
  }, 400);
}

/**
 * Tangani Pemilihan Jawaban oleh Pengguna
 */
function handleAnswerSelection(selectedIndex, el) {
  AppState.isAnswerSubmitted = true;
  const q = AppState.currentQuestions[AppState.currentQuestionIndex];
  const isCorrect = selectedIndex === q.answerIndex;

  // Simpan riwayat jawaban untuk lembar koreksi
  AppState.userAnswers.push({
    question: q,
    selectedIndex: selectedIndex,
    isCorrect: isCorrect
  });

  if (isCorrect) {
    AppState.score++;
    SoundService.playCorrect();
  } else {
    SoundService.playWrong();
  }

  // Perbarui status visual tombol pilihan
  const optionButtons = el.optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answerIndex) {
      btn.classList.add('option-correct');
    }
    if (idx === selectedIndex && !isCorrect) {
      btn.classList.add('option-incorrect');
    }
  });

  // Tampilkan Banner Balasan Ceria
  el.feedbackBanner.classList.remove('d-none');
  if (isCorrect) {
    el.feedbackBanner.classList.add('feedback-correct');
    el.feedbackIconBox.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i>';
    el.feedbackHeading.textContent = 'Jawabanmu Tepat! Luar Biasa!';
    el.feedbackSub.textContent = 'Kamu memahami kosakata ini dengan sangat baik. Teruskan!';
  } else {
    el.feedbackBanner.classList.add('feedback-incorrect');
    el.feedbackIconBox.innerHTML = '<i class="fa-solid fa-lightbulb" aria-hidden="true"></i>';
    el.feedbackHeading.textContent = 'Tetap Semangat! Jawaban yang Benar: ' + q.options[q.answerIndex];
    el.feedbackSub.textContent = q.explanation;
  }

  // Ubah teks tombol jika soal terakhir
  const isLastQuestion = AppState.currentQuestionIndex >= AppState.currentQuestions.length - 1;
  const btnNextSpan = el.btnNextQuestion.querySelector('span');
  if (btnNextSpan) {
    btnNextSpan.textContent = isLastQuestion ? 'Lihat Hasil & Koreksi' : 'Lanjut Soal Berikutnya';
  }

  // Fokuskan pada tombol berikutnya untuk navigasi keyboard yang mulus
  el.btnNextQuestion.focus();
}

/**
 * Pindah ke Soal Berikutnya atau Selesai
 */
function advanceToNextQuestion(el) {
  if (AppState.currentQuestionIndex < AppState.currentQuestions.length - 1) {
    AppState.currentQuestionIndex++;
    renderCurrentQuestion(el);
  } else {
    // Selesai semua soal -> Tampilkan Layar Hasil dan Lembar Koreksi
    showResultsScreen(el);
  }
}

/**
 * Tampilkan Layar Hasil Kuis & Lembar Koreksi Lengkap
 */
function showResultsScreen(el) {
  showScreen('results-screen', el);

  const total = AppState.currentQuestions.length;
  const score = AppState.score;
  const percentage = Math.round((score / total) * 100);

  // 1. Jalankan Suara Fanfare & Animasi Confetti Pesta
  SoundService.playFanfare();
  triggerCelebrationConfetti();

  // 2. Tentukan Jumlah Bintang (1 - 3 Bintang)
  let starCount = 1;
  if (score >= 9) starCount = 3;
  else if (score >= 6) starCount = 2;

  el.scoreStars.innerHTML = '';
  for (let i = 1; i <= 3; i++) {
    el.scoreStars.innerHTML += IconService.star(i <= starCount, 44);
  }

  // 3. Pesan & Metrik
  el.scoreMetric.textContent = `Nilai Kamu: ${score} dari ${total} (${percentage}%)`;

  if (score === 10) {
    el.scoreTitle.textContent = 'Nilai Sempurna! Juara Sejati!';
    el.scoreMessage.textContent = 'Luar biasa! Semua pertanyaan berhasil kamu jawab dengan benar tanpa ada kesalahan!';
  } else if (score >= 7) {
    el.scoreTitle.textContent = 'Hebat Sekali! Pintar!';
    el.scoreMessage.textContent = 'Kamu menguasai materi bahasa Inggris jenjang ini dengan sangat baik!';
  } else {
    el.scoreTitle.textContent = 'Kerja Bagus! Terus Berlatih!';
    el.scoreMessage.textContent = 'Jangan berkecil hati. Pelajari koreksi di bawah ini dan coba lagi agar semakin mahir!';
  }

  // 4. Render Lembar Koreksi dan Pembahasan Lengkap Seluruh 10 Soal
  renderReviewSheet(el);
}

/**
 * Render Rincian Review & Koreksi Lengkap (Persyaratan 4)
 */
function renderReviewSheet(el) {
  el.reviewList.innerHTML = '';

  AppState.userAnswers.forEach((record, index) => {
    const q = record.question;
    const isCorrect = record.isCorrect;
    const userSelectedText = q.options[record.selectedIndex] || 'Belum Dijawab';
    const correctText = q.options[q.answerIndex];

    const card = document.createElement('article');
    card.className = `review-card ${isCorrect ? 'review-card-correct' : 'review-card-incorrect'}`;

    card.innerHTML = `
      <div class="review-card-header">
        <span class="review-q-num">
          <i class="fa-solid ${q.icon}" style="color: #0284C7;" aria-hidden="true"></i>
          <span>Nomor ${index + 1} &bull; Topik: ${q.topic}</span>
        </span>
        ${IconService.statusBadge(isCorrect)}
      </div>

      <h3 class="review-q-text">${q.question}</h3>

      <div class="review-answers-box">
        <div class="review-answer-row">
          <span class="answer-label">Jawaban Kamu:</span>
          <span class="answer-val-user ${isCorrect ? 'text-correct' : 'text-incorrect'}">
            ${isCorrect ? '<i class="fa-solid fa-check" aria-hidden="true"></i> ' : '<i class="fa-solid fa-xmark" aria-hidden="true"></i> '}
            ${userSelectedText}
          </span>
        </div>
        ${!isCorrect ? `
          <div class="review-answer-row">
            <span class="answer-label">Kunci Jawaban:</span>
            <span class="answer-val-correct">
              <i class="fa-solid fa-circle-check" aria-hidden="true"></i> ${correctText}
            </span>
          </div>
        ` : ''}
      </div>

      <!-- Kotak Koreksi Ramah Anak Jika Salah -->
      ${!isCorrect ? `
        <div class="correction-box">
          <div class="correction-title">
            <i class="fa-solid fa-book-open-reader" aria-hidden="true"></i>
            <span>Koreksi & Tips Belajar Bahasa Inggris:</span>
          </div>
          <p class="correction-explanation">${q.explanation}</p>
          <button type="button" class="btn-review-audio" aria-label="Dengarkan pengucapan yang benar">
            <i class="fa-solid fa-volume-high" aria-hidden="true"></i>
            <span>Dengarkan Ucapan: "${q.audioText || correctText}"</span>
          </button>
        </div>
      ` : `
        <div style="font-size: 0.88rem; font-weight: 700; color: #059669; display: flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-thumbs-up" aria-hidden="true"></i>
          <span>Pemahamanmu sudah sangat tepat pada soal ini!</span>
        </div>
      `}
    `;

    // Pasang listener tombol dengarkan ucapan di lembar koreksi
    const audioBtn = card.querySelector('.btn-review-audio');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        SoundService.playClick();
        SoundService.speakEnglish(q.audioText || correctText);
      });
    }

    el.reviewList.appendChild(card);
  });
}

/**
 * Ganti Tampilan Layar Utama
 */
function showScreen(screenId, el) {
  AppState.currentScreen = screenId;
  el.gradesScreen.classList.add('d-none');
  el.quizScreen.classList.add('d-none');
  el.resultsScreen.classList.add('d-none');

  if (screenId === 'grades-screen') {
    el.gradesScreen.classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (screenId === 'quiz-screen') {
    el.quizScreen.classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (screenId === 'results-screen') {
    el.resultsScreen.classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Modal Konfirmasi Keluar Kuis
 */
function showExitModal(el) {
  el.confirmModal.classList.remove('d-none');
}

function hideExitModal(el) {
  el.confirmModal.classList.add('d-none');
}

/**
 * Animasi Confetti Pesta Komik (Kanvas Mandiri Tanpa Eksternal CDN)
 */
function triggerCelebrationConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#F59E0B', '#0284C7', '#10B981', '#EF4444', '#8B5CF6', '#FACC15'];
  const confettiPieces = [];
  const pieceCount = 75;

  for (let i = 0; i < pieceCount; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.5,
      size: Math.random() * 10 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 3,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 8
    });
  }

  let animationFrameId;
  let startTime = Date.now();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 1.5;

      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);

      ctx.restore();
    });

    // Jalankan selama 4 detik kemudian bersihkan
    if (Date.now() - startTime < 4000) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  animate();
}

