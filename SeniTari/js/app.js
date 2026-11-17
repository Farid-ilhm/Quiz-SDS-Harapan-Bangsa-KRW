/**
 * Logika Utama Aplikasi Kuis Seni Tari SD - Petualangan Tari Nusantara
 * Mengatur:
 * 1. Pilihan kelas 1 sampai 6 (Syarat 1 & 7)
 * 2. Antarmuka komik interaktif & ramah anak (Syarat 2 & 5)
 * 3. Text-to-Speech (TTS) pembaca soal (Syarat 3)
 * 4. Tinjauan & koreksi lengkap seluruh jawaban (Syarat 4)
 * 5. Gimmick maskot penari cilik, pojok alat musik & animasi piala bersinar + konfeti (Syarat 9)
 */

class DanceQuizApp {
  constructor() {
    this.currentGrade = 1;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = []; // { question, selectedIndex, isCorrect }
    this.isAnswered = false;
    this.reviewFilter = 'all'; // 'all' | 'wrong' | 'correct'

    // Gimmick Maskot Penari Cilik (Syarat 9)
    this.currentPoseIndex = 0;
    this.poses = [
      {
        name: "Sembahan",
        label: "Pose 1: Sembahan Penghormatan",
        quote: "Halo teman-teman! Sebelum menari, kita lakukan 'Gerak Sembahan' sebagai tanda santun dan hormat kepada guru dan penonton!",
        svgClass: "pose-sembahan"
      },
      {
        name: "Ukel",
        label: "Pose 2: Ukel Tangan Anggun",
        quote: "Lihat tanganku! 'Gerak Ukel' adalah memutar pergelangan tangan secara melingkar dan lentik agar tarian terlihat luwes!",
        svgClass: "pose-ukel"
      },
      {
        name: "Kewer",
        label: "Pose 3: Kibas Selendang Merah",
        quote: "Wusss! Dengan mengibaskan selendang (sampur) merah, gerakan tarian menjadi semakin memukau dan bercahaya!",
        svgClass: "pose-kewer"
      },
      {
        name: "Mendak",
        label: "Pose 4: Mendak Lincah",
        quote: "Kedua lutut ditekuk merendah, itulah posisi 'Mendak'! Tubuh kita menjadi kokoh, lincah, dan siap bergoyang seirama kendang!",
        svgClass: "pose-mendak"
      }
    ];

    // Tips & Fakta Edukasi Menari dari Si Penari Cilik
    this.danceTips = [
      "Tahukah kamu? Tari Saman dari Aceh sangat terkenal di dunia karena kekompakan tepukan tangan dan dada yang luar biasa!",
      "Tips Si Penari Cilik: Sebelum mulai menari, lakukan pemanasan kepala, tangan, dan kaki agar tubuhmu lentur dan tidak kram!",
      "Tahukah kamu? Tiga elemen utama tari adalah Ruang, Waktu, dan Tenaga!",
      "Tips Si Penari Cilik: Tersenyumlah dengan ramah saat membawakan tarian gembira agar penonton ikut bahagia!",
      "Tahukah kamu? Tari Piring dari Minangkabau ditarikan dengan piring di telapak tangan tanpa terjatuh!",
      "Tips Si Penari Cilik: Jangan terburu-buru saat menari, dengarkan ketukan irama kendang dan gamelan dengan tenang!",
      "Tahukah kamu? Busana tari daerah Indonesia memiliki keunikan sayap merak, mahkota emas, hingga selendang warna-warni!"
    ];
    this.currentTipIndex = 0;

    // Sistem Partikel Konfeti Kanvas
    this.confettiAnimationId = null;
    this.confettiParticles = [];

    // Controller Audio
    this.audio = new AudioController();

    this.cacheDom();
    this.initIcons();
    this.bindEvents();
    this.renderGrades();
    this.renderMascot();
  }

  cacheDom() {
    // Layar
    this.screens = {
      grades: document.getElementById('grades-screen'),
      quiz: document.getElementById('quiz-screen'),
      results: document.getElementById('results-screen')
    };

    // Header & Tombol Audio
    this.btnToggleSound = document.getElementById('btn-toggle-sound');
    this.soundIconBox = document.getElementById('sound-icon-box');
    this.soundLabelText = document.getElementById('sound-label-text');

    // Dashboard Gimmicks
    this.mascotAvatarContainer = document.getElementById('mascot-avatar-container');
    this.mascotSvgBox = document.getElementById('mascot-svg-box');
    this.mascotPoseBadge = document.getElementById('mascot-pose-badge');
    this.mascotQuoteText = document.getElementById('mascot-quote-text');
    this.btnNextPose = document.getElementById('btn-next-pose');
    this.btnNextTip = document.getElementById('btn-next-tip');

    // Pojok Alat Musik Tari
    this.btnPlayKendang = document.getElementById('btn-play-kendang');
    this.btnPlayGong = document.getElementById('btn-play-gong');
    this.btnPlayKelintingan = document.getElementById('btn-play-kelintingan');

    // Kontainer Kelas
    this.gradesContainer = document.getElementById('grades-container');

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
  }

  initIcons() {
    // Sisipkan ikon SVG murni ke elemen DOM awal
    document.querySelectorAll('[data-dance-icon]').forEach(el => {
      const key = el.getAttribute('data-dance-icon');
      if (DanceIcons[key]) {
        el.innerHTML = DanceIcons[key];
      }
    });
  }

  bindEvents() {
    // Tombol Toggle Suara
    this.btnToggleSound.addEventListener('click', () => {
      const isEnabled = this.audio.toggleSound();
      this.soundIconBox.innerHTML = isEnabled ? DanceIcons.volumeOn : DanceIcons.volumeOff;
      this.soundLabelText.textContent = isEnabled ? "Suara: Aktif" : "Suara: Senyap";
      if (isEnabled) this.audio.playClick();
    });

    // Gimmick Maskot Tari: Ganti Pose saat diklik
    this.mascotAvatarContainer.addEventListener('click', () => {
      this.cyclePose();
    });

    this.btnNextPose.addEventListener('click', () => {
      this.cyclePose();
    });

    this.btnNextTip.addEventListener('click', () => {
      this.cycleTip();
    });

    // Pojok Alat Musik Tari (Web Audio API Synthesizer)
    this.btnPlayKendang.addEventListener('click', () => {
      this.audio.playKendangDung();
      setTimeout(() => this.audio.playKendangTuk(), 180);
    });

    this.btnPlayGong.addEventListener('click', () => {
      this.audio.playGongKecil();
    });

    this.btnPlayKelintingan.addEventListener('click', () => {
      this.audio.playGemerincing();
    });

    // Layar Kuis
    this.btnBackHome.addEventListener('click', () => {
      this.audio.playClick();
      this.audio.stopSpeech();
      this.showScreen('grades');
    });

    // Tombol Bacakan Soal (Text-To-Speech)
    this.btnSpeakQuestion.addEventListener('click', () => {
      this.speakCurrentQuestion();
    });

    // Tombol Lanjut Soal
    this.btnNextQuestion.addEventListener('click', () => {
      this.audio.playClick();
      this.audio.stopSpeech();
      this.goToNextQuestion();
    });

    // Layar Hasil Akhir
    this.btnRetryQuiz.addEventListener('click', () => {
      this.audio.playClick();
      this.startQuiz(this.currentGrade);
    });

    this.btnChangeGrade.addEventListener('click', () => {
      this.audio.playClick();
      this.stopConfetti();
      this.showScreen('grades');
    });

    this.btnReconfetti.addEventListener('click', () => {
      this.audio.playClick();
      this.audio.playGemerincing();
      this.startConfetti();
    });

    // Filter Review Jawaban
    this.filterAllBtn.addEventListener('click', () => this.setReviewFilter('all'));
    this.filterWrongBtn.addEventListener('click', () => this.setReviewFilter('wrong'));
    this.filterCorrectBtn.addEventListener('click', () => this.setReviewFilter('correct'));
  }

  showScreen(screenName) {
    Object.keys(this.screens).forEach(key => {
      this.screens[key].style.display = (key === screenName) ? 'block' : 'none';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  // GIMMICK MASKOT PENARI CILIK & TIPS EDUKASI (Syarat 9)
  
  renderMascot() {
    const cur = this.poses[this.currentPoseIndex];
    this.mascotPoseBadge.textContent = cur.label;
    this.mascotQuoteText.textContent = `"${cur.quote}"`;

    // Render SVG Maskot Kartun Penari Cilik dengan ragam pose
    this.mascotSvgBox.innerHTML = this.getMascotSvg(this.currentPoseIndex);
  }

  cyclePose() {
    this.currentPoseIndex = (this.currentPoseIndex + 1) % this.poses.length;
    this.audio.playGemerincing();
    this.renderMascot();
  }

  cycleTip() {
    this.currentTipIndex = (this.currentTipIndex + 1) % this.danceTips.length;
    this.audio.playClick();
    this.mascotPoseBadge.textContent = "Tahukah Kamu?";
    this.mascotQuoteText.textContent = `"${this.danceTips[this.currentTipIndex]}"`;
  }

  getMascotSvg(poseIdx) {
    // 4 Pose Karakter Kartun Anak Penari Nusantara Berbusana Emas & Merah
    let armLeft = '<line x1="38" y1="58" x2="22" y2="48" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
    let armRight = '<line x1="62" y1="58" x2="78" y2="48" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
    let selendangCurve = '<path d="M22 56 Q50 78 78 56" fill="none" stroke="#DC2626" stroke-width="4.5" stroke-linecap="round"/>';

    if (poseIdx === 0) {
      // Pose Sembahan: Kedua tangan merapat di depan dada
      armLeft = '<path d="M38 58 Q46 62 48 54" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      armRight = '<path d="M62 58 Q54 62 52 54" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      selendangCurve = '<path d="M26 62 Q50 82 74 62" fill="none" stroke="#DC2626" stroke-width="4.5" stroke-linecap="round"/>';
    } else if (poseIdx === 1) {
      // Pose Ukel: Tangan kiri melingkar ke atas, tangan kanan lentik ke samping
      armLeft = '<path d="M38 58 Q26 40 28 32" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      armRight = '<path d="M62 58 Q78 64 82 54" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      selendangCurve = '<path d="M28 36 Q38 72 78 64" fill="none" stroke="#DC2626" stroke-width="4.5" stroke-linecap="round"/>';
    } else if (poseIdx === 2) {
      // Pose Kewer: Selendang merah berkibar tinggi ke udara
      armLeft = '<path d="M38 58 Q20 48 18 36" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      armRight = '<path d="M62 58 Q80 48 84 36" fill="none" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      selendangCurve = '<path d="M16 34 Q50 14 84 34" fill="none" stroke="#DC2626" stroke-width="5" stroke-linecap="round"/>';
    } else if (poseIdx === 3) {
      // Pose Mendak: Badan merendah, kedua tangan dibuka lebar ke samping
      armLeft = '<line x1="38" y1="58" x2="16" y2="60" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      armRight = '<line x1="62" y1="58" x2="84" y2="60" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>';
      selendangCurve = '<path d="M16 62 Q50 78 84 62" fill="none" stroke="#DC2626" stroke-width="4.5" stroke-linecap="round"/>';
    }

    return `
      <svg class="mascot-svg-dancer" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Mahkota Tari Emas Megah & Bulu Ceria -->
        <path d="M34 26 L42 16 L50 10 L58 16 L66 26 Z" fill="#FDE047" stroke="#1E293B" stroke-width="3"/>
        <circle cx="50" cy="9" r="3.5" fill="#EF4444" stroke="#1E293B" stroke-width="1.8"/>
        <circle cx="42" cy="15" r="2" fill="#3B82F6"/>
        <circle cx="58" cy="15" r="2" fill="#10B981"/>
        
        <!-- Rambut Konde Tradisional -->
        <ellipse cx="50" cy="28" rx="20" ry="11" fill="#1E293B"/>
        <circle cx="50" cy="18" r="7" fill="#1E293B"/>

        <!-- Wajah Kartun Anak Ceria -->
        <circle cx="50" cy="40" r="18" fill="#FED7AA" stroke="#1E293B" stroke-width="3"/>
        <!-- Pipi Merona Merah Muda -->
        <circle cx="38" cy="44" r="3.5" fill="#F87171" fill-opacity="0.8"/>
        <circle cx="62" cy="44" r="3.5" fill="#F87171" fill-opacity="0.8"/>
        <!-- Mata Berbinar -->
        <circle cx="43" cy="38" r="2.8" fill="#1E293B"/>
        <circle cx="44.2" cy="37" r="1" fill="#FFFFFF"/>
        <circle cx="57" cy="38" r="2.8" fill="#1E293B"/>
        <circle cx="58.2" cy="37" r="1" fill="#FFFFFF"/>
        <!-- Senyum Ceria -->
        <path d="M46 45 Q50 49 54 45" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Tubuh & Kostum Tari Emas Beludru Merah -->
        <path d="M38 56 L34 82 L66 82 L62 56 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="3"/>
        <!-- Kemben Merah Tengah -->
        <rect x="44" y="56" width="12" height="26" fill="#DC2626" stroke="#1E293B" stroke-width="2"/>

        <!-- Selendang Merah Bergoyang -->
        ${selendangCurve}

        <!-- Lengan & Tangan Penari -->
        ${armLeft}
        ${armRight}
        
        <!-- Gelang Kaki Emas & Kaki Menari -->
        <line x1="42" y1="82" x2="40" y2="94" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>
        <line x1="58" y1="82" x2="60" y2="94" stroke="#1E293B" stroke-width="4" stroke-linecap="round"/>
        <circle cx="40" cy="91" r="2" fill="#FBBF24"/>
        <circle cx="60" cy="91" r="2" fill="#FBBF24"/>
      </svg>
    `;
  }

  
  // RENDER PILIHAN KELAS 1 SAMPAI 6 (Syarat 1 & 7)
  
  renderGrades() {
    this.gradesContainer.innerHTML = '';

    QuizDatabase.grades.forEach(grade => {
      const card = document.createElement('div');
      card.className = 'grade-card';
      card.setAttribute('data-grade', grade.id);

      const iconSvg = DanceIcons[grade.iconKey] || DanceIcons.danceBrand;

      card.innerHTML = `
        <div class="grade-card-top">
          <div class="grade-icon-box">
            ${iconSvg}
          </div>
          <div class="grade-title-group">
            <h3>${grade.title}</h3>
            <p class="grade-subtitle">${grade.subtitle}</p>
          </div>
        </div>
        <p class="grade-desc">${grade.description}</p>
        <div class="grade-card-footer">
          <span class="grade-pill-count">
            ${DanceIcons.sparkles} ${grade.questionCount} Soal Pilihan
          </span>
          <button class="btn-start-grade" type="button" aria-label="Mulai Kuis ${grade.title}">
            Mulai Kuis ${DanceIcons.arrowRight}
          </button>
        </div>
      `;

      card.addEventListener('click', () => {
        this.audio.playKendangDung();
        this.startQuiz(grade.id);
      });

      this.gradesContainer.appendChild(card);
    });
  }

  
  // MULAI KUIS KELAS
  
  startQuiz(gradeId) {
    this.currentGrade = gradeId;
    this.currentQuestions = QuizDatabase.questions[gradeId] || [];
    this.currentIndex = 0;
    this.userAnswers = [];
    this.isAnswered = false;

    const gradeInfo = QuizDatabase.grades.find(g => g.id === gradeId);
    this.quizGradeBadge.textContent = gradeInfo ? `${gradeInfo.title} - Seni Tari` : `Kelas ${gradeId}`;

    this.showScreen('quiz');
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    this.isAnswered = false;
    this.audio.stopSpeech();
    this.resetSpeechButton();

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const qNum = this.currentIndex + 1;

    // Update Progress
    this.progressText.textContent = `Soal ${qNum} dari ${total}`;
    const pct = Math.round((qNum / total) * 100);
    this.progressPercent.textContent = `${pct}%`;
    this.progressFill.style.width = `${pct}%`;

    // Topik & Teks Soal
    this.questionTopic.innerHTML = `${DanceIcons.sparkles} Topik: ${q.topic}`;
    this.questionText.textContent = q.question;

    // Reset Feedback & Tombol Lanjut
    this.feedbackBanner.style.display = 'none';
    this.btnNextQuestion.style.display = 'none';

    // Tombol Next Label (Soal Terakhir: Lihat Hasil Kuis)
    if (qNum === total) {
      this.btnNextText.textContent = "Selesai & Lihat Hasil";
    } else {
      this.btnNextText.textContent = "Soal Berikutnya";
    }

    // Render Opsi Pilihan Ganda (A, B, C, D)
    this.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn-comic';
      btn.innerHTML = `
        <span class="option-letter-badge">${letters[optIdx]}</span>
        <span class="option-text-span">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        if (!this.isAnswered) {
          this.handleAnswerSelection(optIdx);
        }
      });

      this.optionsContainer.appendChild(btn);
    });

    // Otomatis bacakan soal jika suara aktif untuk kenyamanan anak SD
    if (this.audio.soundEnabled) {
      setTimeout(() => {
        this.speakCurrentQuestion();
      }, 300);
    }
  }

  
  // LOGIKA PEMILIHAN JAWABAN (Syarat 2, 4, 5, 6)
  
  handleAnswerSelection(selectedIdx) {
    this.isAnswered = true;
    this.audio.stopSpeech();
    this.resetSpeechButton();

    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIdx === q.answerIndex);

    // Simpan Rekaman Jawaban Siswa
    this.userAnswers.push({
      question: q,
      selectedIndex: selectedIdx,
      isCorrect: isCorrect
    });

    const optionButtons = this.optionsContainer.querySelectorAll('.option-btn-comic');

    // Beri Efek Visual Komik pada Tombol yang Dipilih
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === selectedIdx) {
        if (isCorrect) {
          btn.classList.add('selected-correct');
        } else {
          btn.classList.add('selected-wrong');
        }
      }
    });

    // Mainkan Efek Suara Feedback Ceria
    if (isCorrect) {
      this.audio.playCorrect();
      this.feedbackBanner.className = 'feedback-banner-comic correct';
      this.feedbackIcon.innerHTML = DanceIcons.checkCircle;
      this.feedbackHeading.textContent = "Hebat Sekali! Jawabanmu Benar!";
      this.feedbackSub.textContent = q.explanation;
    } else {
      this.audio.playWrong();
      this.feedbackBanner.className = 'feedback-banner-comic wrong';
      this.feedbackIcon.innerHTML = DanceIcons.infoCircle;
      this.feedbackHeading.textContent = "Bagus Sudah Mencoba!";
      this.feedbackSub.textContent = `Jawaban yang lebih tepat adalah: "${q.options[q.answerIndex]}". Tenang, kamu bisa pelajari koreksinya di lembar akhir nanti!`;
    }

    this.feedbackBanner.style.display = 'flex';
    this.btnNextQuestion.style.display = 'inline-flex';
  }

  goToNextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.currentQuestions.length) {
      this.renderCurrentQuestion();
    } else {
      this.finishQuiz();
    }
  }

  
  // FITUR SUARA PEMBACA SOAL TEXT-TO-SPEECH (Syarat 3)
  
  speakCurrentQuestion() {
    if (!this.audio.soundEnabled) return;

    if (this.audio.isSpeaking) {
      this.audio.stopSpeech();
      this.resetSpeechButton();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;

    const letters = ['A', 'B', 'C', 'D'];
    let textToRead = `Soal nomor ${this.currentIndex + 1}. ${q.question}. `;
    q.options.forEach((opt, i) => {
      textToRead += `Pilihan ${letters[i]}: ${opt}. `;
    });

    this.btnSpeakQuestion.classList.add('speaking');
    this.speechBtnLabel.textContent = "Berhenti Bicara";
    this.speakerIconBox.innerHTML = DanceIcons.speakerSpeak;

    this.audio.speakText(
      textToRead,
      () => {
        this.btnSpeakQuestion.classList.add('speaking');
        this.speechBtnLabel.textContent = "Mendengarkan...";
      },
      () => {
        this.resetSpeechButton();
      }
    );
  }

  resetSpeechButton() {
    this.btnSpeakQuestion.classList.remove('speaking');
    this.speechBtnLabel.textContent = "Bacakan Soal";
    this.speakerIconBox.innerHTML = DanceIcons.speakerSpeak;
  }

  
  // LAYAR HASIL AKHIR & SELEBRASI PIALA BERSINAR (Syarat 4 & 9)
  
  finishQuiz() {
    this.audio.stopSpeech();
    this.showScreen('results');

    // Hitung Nilai Akhir
    const total = this.userAnswers.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = total - correctCount;
    const score = Math.round((correctCount / total) * 100);

    this.scoreFinalNumber.textContent = score;
    this.statCorrect.textContent = `${correctCount} Benar`;
    this.statWrong.textContent = `${wrongCount} Salah`;

    // Render Piala Emas & Bintang Gemerlap (Syarat 9)
    this.trophyIconBox.innerHTML = DanceIcons.goldenTrophy;

    let starCount = 1;
    let titleText = "Terus Semangat Berlatih Menari!";
    let messageText = "Kamu sudah berani mencoba kuis Seni Tari dengan baik. Ayo baca kembali koreksi di bawah ini agar semakin mahir!";

    if (score >= 90) {
      starCount = 3;
      titleText = "Luar Biasa! Kamu Bintang Penari Hebat!";
      messageText = "Pengetahuan Seni Tarimu sangat mengagumkan! Gerakanmu seindah tarian nusantara!";
    } else if (score >= 70) {
      starCount = 2;
      titleText = "Bagus Sekali! Penari Berbakat!";
      messageText = "Hasil yang membanggakan! Sedikit lagi latihan, kamu akan meraih nilai sempurna!";
    }

    this.scoreTitle.textContent = titleText;
    this.scoreMessage.textContent = messageText;

    // Render Bintang Berkilau
    this.scoreStarsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const starSpan = document.createElement('span');
      starSpan.innerHTML = (i < starCount) ? DanceIcons.starFull : DanceIcons.starEmpty;
      this.scoreStarsContainer.appendChild(starSpan);
    }

    // Mainkan Fanfare Kemenangan & Taburan Konfeti (Syarat 9)
    this.audio.playFanfare();
    this.startConfetti();

    // Render Tinjauan Jawaban & Koreksi Lengkap (Syarat 4)
    this.reviewFilter = 'all';
    this.updateFilterButtons();
    this.renderReviewList();
  }

  
  // TINJAUAN JAWABAN & KOREKSI LENGKAP SETELAH SELESAI (Syarat 4)
  
  setReviewFilter(filter) {
    this.reviewFilter = filter;
    this.audio.playClick();
    this.updateFilterButtons();
    this.renderReviewList();
  }

  updateFilterButtons() {
    this.filterAllBtn.classList.toggle('active', this.reviewFilter === 'all');
    this.filterWrongBtn.classList.toggle('active', this.reviewFilter === 'wrong');
    this.filterCorrectBtn.classList.toggle('active', this.reviewFilter === 'correct');
  }

  renderReviewList() {
    this.reviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    // Filter Jawaban
    let displayedAnswers = this.userAnswers.map((ans, idx) => ({ ...ans, originalNumber: idx + 1 }));

    if (this.reviewFilter === 'wrong') {
      displayedAnswers = displayedAnswers.filter(a => !a.isCorrect);
    } else if (this.reviewFilter === 'correct') {
      displayedAnswers = displayedAnswers.filter(a => a.isCorrect);
    }

    if (displayedAnswers.length === 0) {
      const emptyCard = document.createElement('div');
      emptyCard.className = 'review-item-card';
      emptyCard.style.textAlign = 'center';
      emptyCard.innerHTML = `
        <h4 style="font-family: var(--font-heading); color: var(--text-muted); padding: 18px 0;">
          Tidak ada soal dalam kategori ini.
        </h4>
      `;
      this.reviewList.appendChild(emptyCard);
      return;
    }

    displayedAnswers.forEach(item => {
      const q = item.question;
      const card = document.createElement('div');
      card.className = `review-item-card ${item.isCorrect ? 'is-correct' : 'is-wrong'}`;

      const userChoiceText = q.options[item.selectedIndex];
      const correctChoiceText = q.options[q.answerIndex];
      const userLetter = letters[item.selectedIndex];
      const correctLetter = letters[q.answerIndex];

      card.innerHTML = `
        <div class="review-card-head">
          <span class="review-q-num">Nomor ${item.originalNumber} • ${q.topic}</span>
          <span class="review-status-badge ${item.isCorrect ? 'correct' : 'wrong'}">
            ${item.isCorrect ? DanceIcons.checkCircle : DanceIcons.xCircle}
            ${item.isCorrect ? 'Jawabanmu Tepat!' : 'Kurang Tepat'}
          </span>
        </div>

        <p class="review-q-text">${q.question}</p>

        <div class="review-answers-box">
          <div class="answer-row ${item.isCorrect ? 'correct-ans' : 'user-ans-wrong'}">
            <span class="ans-label">Jawaban Kamu:</span>
            <span class="ans-value">${userLetter}. ${userChoiceText}</span>
          </div>
          ${!item.isCorrect ? `
            <div class="answer-row correct-ans">
              <span class="ans-label">Koreksi Jawaban Benar:</span>
              <span class="ans-value">${correctLetter}. ${correctChoiceText}</span>
            </div>
          ` : ''}
        </div>

        <!-- Kotak Koreksi & Pembahasan Edukatif Anak (Syarat 4) -->
        <div class="review-explanation-box">
          <div class="explanation-icon">
            ${DanceIcons.infoCircle}
          </div>
          <div class="explanation-text">
            <h5>Pembahasan & Fakta Seni Tari:</h5>
            <p>${q.explanation}</p>
          </div>
        </div>
      `;

      this.reviewList.appendChild(card);
    });
  }

  
  // ANIMASI KONFETI SELEBRASI KANVAS (Syarat 9)
  
  startConfetti() {
    this.stopConfetti();

    const canvas = this.confettiCanvas;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#E11D48', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#FDE047'];
    this.confettiParticles = [];

    // Ciptakan 110 partikel bintang, pita, dan lingkaran berwarna
    for (let i = 0; i < 110; i++) {
      this.confettiParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2.5,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 6,
        isStar: Math.random() > 0.6
      });
    }

    let frames = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.confettiParticles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#1E293B';
        ctx.lineWidth = 1.2;

        if (p.isStar) {
          // Bintang Segi Empat Komik
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          // Pita Segiempat Komik
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.7);
          ctx.strokeRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.7);
        }

        ctx.restore();

        // Loop partikel ke atas jika masih dalam 280 frame
        if (p.y > canvas.height && frames < 240) {
          p.y = -15;
          p.x = Math.random() * canvas.width;
        }
      });

      frames++;
      if (frames < 360) {
        this.confettiAnimationId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    this.confettiAnimationId = requestAnimationFrame(animate);
  }

  stopConfetti() {
    if (this.confettiAnimationId) {
      cancelAnimationFrame(this.confettiAnimationId);
      this.confettiAnimationId = null;
    }
    if (this.confettiCanvas) {
      const ctx = this.confettiCanvas.getContext('2d');
      ctx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
    }
  }
}

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
document.addEventListener('DOMContentLoaded', () => {
  window.danceQuizApp = new DanceQuizApp();
});
