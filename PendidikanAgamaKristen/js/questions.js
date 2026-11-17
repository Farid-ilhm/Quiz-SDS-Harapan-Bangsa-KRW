/**
 * Kuis Pendidikan Agama Kristen (PAK) SD - Bank Soal Lengkap Kelas 1 sampai 6 SD
 * Total: 60 Soal (10 Soal per jenjang kelas sesuai standar kurikulum Pendidikan Agama Kristen SD)
 * Tanpa bocoran jawaban di dalam soal dan opsi jawaban yang terlalu kentara.
 * Dilengkapi pembacaan suara (Text-to-Speech) dan pembahasan edukatif ramah anak.
 */

const ChristianQuizQuestions = [
  // =========================================================================
  // KELAS 1 SD - FASE A (Aku Ciptaan Tuhan, Bersyukur, Keluarga & Kasih Cilik)
  // =========================================================================
  {
    id: 101,
    grade: 1,
    topic: "Ciptaan Allah yang Indah",
    icon: "fa-sun",
    question: "Tuhan menciptakan seluruh alam semesta dengan penuh kasih. Siapakah yang menciptakan manusia, hewan, dan tumbuhan di bumi?",
    audioText: "Tuhan menciptakan seluruh alam semesta dengan penuh kasih. Siapakah yang menciptakan manusia, hewan, dan tumbuhan di bumi?",
    options: ["Para malaikat", "Tuhan Allah", "Manusia purba", "Nenek moyang"],
    answerIndex: 1,
    explanation: "Dalam Kitab Kejadian, tertulis bahwa Tuhan Allah adalah Pencipta langit, bumi, manusia, serta segala makhluk hidup dengan sungguh amat baik."
  },
  {
    id: 102,
    grade: 1,
    topic: "Merawat Anggota Tubuh",
    icon: "fa-hands-holding-child",
    question: "Tuhan menganugerahkan sepasang tangan kepada kita. Sikap terpuji dalam menggunakan tangan ciptaan Tuhan adalah...",
    audioText: "Tuhan menganugerahkan sepasang tangan kepada kita. Sikap terpuji dalam menggunakan tangan ciptaan Tuhan adalah apa?",
    options: ["Mencoret-coret meja kelas", "Membantu ibu merapikan mainan", "Menarik rambut teman", "Mengambil barang tanpa izin"],
    answerIndex: 1,
    explanation: "Tangan yang diberikan Tuhan patut kita pakai untuk berbuat kebaikan, seperti menolong sesama, merapikan barang, dan memuliakan nama-Nya."
  },
  {
    id: 103,
    grade: 1,
    topic: "Doa Anak Kristen",
    icon: "fa-hands-praying",
    question: "Sebelum menikmati makanan dan minuman yang disediakan di rumah, hal baik yang harus kita lakukan terlebih dahulu adalah...",
    audioText: "Sebelum menikmati makanan dan minuman yang disediakan di rumah, hal baik yang harus kita lakukan terlebih dahulu adalah apa?",
    options: ["Langsung makan terburu-buru", "Berdoa mengucap syukur kepada Tuhan", "Bermain gawai sampai dipanggil", "Menyisakan makanan di piring"],
    answerIndex: 1,
    explanation: "Berdoa sebelum makan adalah ungkapan terima kasih kita atas berkat rezeki dan pemeliharaan Tuhan dalam keluarga kita."
  },
  {
    id: 104,
    grade: 1,
    topic: "Kasih dalam Keluarga",
    icon: "fa-house-chimney-window",
    question: "Tuhan memberikan ayah dan ibu untuk merawat kita sejak bayi. Cara menunjukkan rasa hormat kepada orang tua di rumah adalah...",
    audioText: "Tuhan memberikan ayah dan ibu untuk merawat kita sejak bayi. Cara menunjukkan rasa hormat kepada orang tua di rumah adalah apa?",
    options: ["Mendengarkan nasihat dengan patuh", "Membantah saat diminta belajar", "Pura-pura tidur saat dipanggil", "Menuntut dibelikan banyak mainan"],
    answerIndex: 0,
    explanation: "Menghormati orang tua dengan mendengarkan nasihat dan bertutur kata sopan adalah perintah Tuhan yang membawa berkat dan sukacita."
  },
  {
    id: 105,
    grade: 1,
    topic: "Berbagi dengan Sesama",
    icon: "fa-heart",
    question: "Saat jam istirahat, kamu melihat teman sebangkumu tidak membawa bekal dan merasa lapar. Sikap anak yang meneladani kasih Tuhan adalah...",
    audioText: "Saat jam istirahat, kamu melihat teman sebangkumu tidak membawa bekal dan merasa lapar. Sikap anak yang meneladani kasih Tuhan adalah apa?",
    options: ["Memamerkan makanan sendiri", "Membagi bekal makanan dengan ikhlas", "Menertawakan teman tersebut", "Menyembunyikan makanan di dalam tas"],
    answerIndex: 1,
    explanation: "Tuhan Yesus mengajarkan kita untuk saling mengasihi dan rela berbagi dengan teman yang sedang membutuhkan pertolongan."
  },
  {
    id: 106,
    grade: 1,
    topic: "Menyayangi Makhluk Hidup",
    icon: "fa-paw",
    question: "Tumbuhan dan hewan di sekitar kita juga merupakan ciptaan Tuhan. Tindakan nyata untuk merawat tanaman di pekarangan rumah adalah...",
    audioText: "Tumbuhan dan hewan di sekitar kita juga merupakan ciptaan Tuhan. Tindakan nyata untuk merawat tanaman di pekarangan rumah adalah apa?",
    options: ["Menyiramnya secara teratur", "Memetik daunnya sampai gundul", "Menginjak rumput dan bunganya", "Membiarkannya layu kepanasan"],
    answerIndex: 0,
    explanation: "Merawat tanaman dengan rajin menyiram dan memberinya pupuk adalah bagian dari tugas kita menjaga kelestarian alam ciptaan Tuhan."
  },
  {
    id: 107,
    grade: 1,
    topic: "Kisah Penciptaan",
    icon: "fa-book-bible",
    question: "Menurut Alkitab dalam Kitab Kejadian, pada hari pertama penciptaan Tuhan berfirman untuk mengadakan...",
    audioText: "Menurut Alkitab dalam Kitab Kejadian, pada hari pertama penciptaan Tuhan berfirman untuk mengadakan apa?",
    options: ["Matahari dan bulan", "Terang yang memisahkan gelap", "Ikan-ikan besar di laut", "Burung-burung di udara"],
    answerIndex: 1,
    explanation: "Pada hari pertama, Allah berfirman: 'Jadilah terang!' Lalu terang itu jadi, dan Allah memisahkan terang itu dari gelap."
  },
  {
    id: 108,
    grade: 1,
    topic: "Kesantunan Berbicara",
    icon: "fa-comment-dots",
    question: "Ketika kita tidak sengaja menyenggol tempat minum teman hingga tumpah, kata yang harus kita ucapkan dengan tulus adalah...",
    audioText: "Ketika kita tidak sengaja menyenggol tempat minum teman hingga tumpah, kata yang harus kita ucapkan dengan tulus adalah apa?",
    options: ["Meminta maaf", "Menyalahkan lantai licin", "Diam saja lalu pergi", "Meminta ganti rugi"],
    answerIndex: 0,
    explanation: "Meminta maaf saat berbuat salah dan membantu membersihkannya adalah bukti hati yang jujur, rendah hati, dan berani bertanggung jawab."
  },
  {
    id: 109,
    grade: 1,
    topic: "Ibadah Sekolah Minggu",
    icon: "fa-church",
    question: "Pada hari Minggu, anak-anak Kristen beribadah di gereja atau Sekolah Minggu dengan tujuan utama untuk...",
    audioText: "Pada hari Minggu, anak-anak Kristen beribadah di gereja atau Sekolah Minggu dengan tujuan utama untuk apa?",
    options: ["Bermain kejar-kejaran di lorong", "Memuji Tuhan dan belajar Firman-Nya", "Pamer pakaian baru kepada teman", "Menghabiskan waktu libur saja"],
    answerIndex: 1,
    explanation: "Ibadah Sekolah Minggu adalah kesempatan istimewa untuk bersekutu, bernyanyi memuji kebesaran Tuhan, serta mendengarkan firman Alkitab."
  },
  {
    id: 110,
    grade: 1,
    topic: "Rasa Syukur Tiap Hari",
    icon: "fa-shield-heart",
    question: "Ketika bangun di pagi hari dengan tubuh yang segar dan sehat, sikap hati yang berkenan bagi Tuhan adalah...",
    audioText: "Ketika bangun di pagi hari dengan tubuh yang segar dan sehat, sikap hati yang berkenan bagi Tuhan adalah apa?",
    options: ["Mengeluh karena harus sekolah", "Mengucap syukur atas hari yang baru", "Langsung mencari tayangan televisi", "Merajuk kepada orang tua"],
    answerIndex: 1,
    explanation: "Nafas kehidupan dan kesehatan di pagi hari adalah anugerah Tuhan. Kita mengawali hari dengan bersyukur dan berdoa memohon bimbingan-Nya."
  },

  // =========================================================================
  // KELAS 2 SD - FASE A (Kerukunan, Belas Kasih, Memaafkan, Tokoh Alkitab Cilik)
  // =========================================================================
  {
    id: 201,
    grade: 2,
    topic: "Hidup Rukun di Sekolah",
    icon: "fa-users",
    question: "Di dalam kelas terdapat teman-teman dari berbagai suku, daerah, dan latar belakang. Cara menjaga kerukunan di kelas adalah...",
    audioText: "Di dalam kelas terdapat teman-teman dari berbagai suku, daerah, dan latar belakang. Cara menjaga kerukunan di kelas adalah apa?",
    options: ["Hanya mau berteman dengan suku sendiri", "Menghargai dan bermain bersama semua teman", "Membuat kelompok yang suka mengejek", "Menjauhi teman yang bicaranya berbeda"],
    answerIndex: 1,
    explanation: "Tuhan menciptakan manusia beraneka ragam. Kita dipanggil untuk saling mengasihi, menghargai keberagaman, dan hidup rukun bersama sesama."
  },
  {
    id: 202,
    grade: 2,
    topic: "Orang Samaria yang Murah Hati",
    icon: "fa-hand-holding-heart",
    question: "Dalam perumpamaan Tuhan Yesus, siapakah yang rela berhenti dan merawat seorang korban rampok yang terluka parah di jalan?",
    audioText: "Dalam perumpamaan Tuhan Yesus, siapakah yang rela berhenti dan merawat seorang korban rampok yang terluka parah di jalan?",
    options: ["Imam yang lewat terlebih dahulu", "Orang Lewi yang terburu-buru", "Orang Samaria yang baik hati", "Prajurit yang sedang berpatroli"],
    answerIndex: 2,
    explanation: "Orang Samaria yang baik hati tergerak oleh belas kasihan. Ia membalut luka korban dan membawanya ke penginapan tanpa memandang asal-usulnya."
  },
  {
    id: 203,
    grade: 2,
    topic: "Sikap Memaafkan",
    icon: "fa-dove",
    question: "Ketika seorang teman meminta maaf dengan tulus karena merusakkan mainanmu secara tidak sengaja, ajaran Tuhan Yesus meminta kita untuk...",
    audioText: "Ketika seorang teman meminta maaf dengan tulus karena merusakkan mainanmu secara tidak sengaja, ajaran Tuhan Yesus meminta kita untuk apa?",
    options: ["Menyimpan rasa dendam berhari-hari", "Memaafkan dengan tulus hati", "Membalas merusak mainan miliknya", "Memusuhi teman itu di depan kelas"],
    answerIndex: 1,
    explanation: "Sebagaimana Tuhan Allah telah mengampuni kesalahan kita, kita juga diajar untuk berlapang dada dan memaafkan teman yang bersalah."
  },
  {
    id: 204,
    grade: 2,
    topic: "Kisah Ketaatan Nabi Nuh",
    icon: "fa-ship",
    question: "Tuhan menyuruh Nabi Nuh membuat sebuah bahtera kayu yang sangat besar. Mengapa Nuh patuh membuat bahtera itu meski belum turun hujan?",
    audioText: "Tuhan menyuruh Nabi Nuh membuat sebuah bahtera kayu yang sangat besar. Mengapa Nuh patuh membuat bahtera itu meski belum turun hujan?",
    options: ["Karena Nuh setia dan percaya firman Tuhan", "Karena Nuh ingin dipuji penduduk kota", "Karena Nuh ingin mengumpulkan harta karun", "Karena disuruh oleh kepala desa"],
    answerIndex: 0,
    explanation: "Nabi Nuh adalah orang benar yang hidup bergaul akrab dengan Allah. Ketaatan Nuh menyelamatkan keluarganya dan sepasang tiap jenis hewan."
  },
  {
    id: 205,
    grade: 2,
    topic: "Hormat kepada Orang Tua",
    icon: "fa-award",
    question: "Dalam Sepuluh Hukum Allah, janji berkat umur panjang dan kebahagiaan diberikan kepada anak-anak yang...",
    audioText: "Dalam Sepuluh Hukum Allah, janji berkat umur panjang dan kebahagiaan diberikan kepada anak-anak yang bagaimana?",
    options: ["Memiliki nilai pelajaran selalu tertinggi", "Menghormati ayah dan ibunya", "Sering memenangkan perlombaan", "Memiliki koleksi buku terbanyak"],
    answerIndex: 1,
    explanation: "Hukum kelima berbunyi: 'Hormatilah ayahmu dan ibumu, supaya lanjut umurmu di tanah yang diberikan TUHAN, Allahmu, kepadamu'."
  },
  {
    id: 206,
    grade: 2,
    topic: "Kejujuran di Sekolah",
    icon: "fa-scale-balanced",
    question: "Saat guru membagikan hasil kuis, kamu melihat ada satu nomor yang sebenarnya salah namun terhitung benar. Sikap jujur yang harus diambil adalah...",
    audioText: "Saat guru membagikan hasil kuis, kamu melihat ada satu nomor yang sebenarnya salah namun terhitung benar. Sikap jujur yang harus diambil adalah apa?",
    options: ["Menyembunyikan lembar kuis ke tas", "Memberitahukan kepada guru dengan jujur", "Menertawakan ketidaktelitian guru", "Mengubah tulisan jawaban secara diam-diam"],
    answerIndex: 1,
    explanation: "Kejujuran adalah nilai Kristiani yang sangat berharga. Tuhan menyukai hati yang lurus dan jujur di atas sekadar perolehan nilai tinggi."
  },
  {
    id: 207,
    grade: 2,
    topic: "Menghibur Teman Berduka",
    icon: "fa-face-smile",
    question: "Salah seorang teman sekelasmu tampak murung dan menangis karena hewan kesayangannya mati. Sikap kepedulian yang patut kamu tunjukkan adalah...",
    audioText: "Salah seorang teman sekelasmu tampak murung dan menangis karena hewan kesayangannya mati. Sikap kepedulian yang patut kamu tunjukkan adalah apa?",
    options: ["Menghampiri dan menghiburnya dengan ramah", "Menyuruhnya berhenti menangis dengan membentak", "Mengajak teman lain menertawakannya", "Pura-pura tidak melihat keadaannya"],
    answerIndex: 0,
    explanation: "Sebagai sahabat Kristiani, kita dipanggil untuk berempati: bersukacita dengan orang yang bersukacita, dan menangis bersama orang yang menangis."
  },
  {
    id: 208,
    grade: 2,
    topic: "Tanda Kasih Allah: Pelangi",
    icon: "fa-rainbow",
    question: "Setelah air bah surut pada zaman Nabi Nuh, tanda apakah yang diletakkan Tuhan di awan sebagai janji tidak akan memusnahkan bumi lagi dengan air bah?",
    audioText: "Setelah air bah surut pada zaman Nabi Nuh, tanda apakah yang diletakkan Tuhan di awan sebagai janji tidak akan memusnahkan bumi lagi dengan air bah?",
    options: ["Bintang jatuh", "Busur pelangi yang indah", "Kilat yang menyambar", "Gumpalan asap tebal"],
    answerIndex: 1,
    explanation: "Pelangi di awan dijadikan Allah sebagai tanda perjanjian abadi antara Allah dan segala makhluk hidup di bumi bahwa bumi tidak akan dibinasakan air bah lagi."
  },
  {
    id: 209,
    grade: 2,
    topic: "Kerja Sama Membersihkan Kelas",
    icon: "fa-broom",
    question: "Saat jadwal piket kebersihan kelas tiba, semua anggota kelompok sebaiknya saling bekerja sama karena...",
    audioText: "Saat jadwal piket kebersihan kelas tiba, semua anggota kelompok sebaiknya saling bekerja sama karena apa?",
    options: ["Tuhan menyukai tolong-menolong dan kerapian", "Supaya bisa cepat pulang untuk bermain game", "Agar bisa membebankan tugas ke satu orang", "Supaya mendapat uang saku tambahan dari guru"],
    answerIndex: 0,
    explanation: "Bekerja sama dalam piket mencerminkan kerukunan, tanggung jawab, dan kepedulian terhadap lingkungan belajar yang bersih dan asri."
  },
  {
    id: 210,
    grade: 2,
    topic: "Pujian dan Sukacita",
    icon: "fa-music",
    question: "Bernyanyi lagu rohani anak di gereja dan di sekolah dengan hati gembira merupakan salah satu cara kita untuk...",
    audioText: "Bernyanyi lagu rohani anak di gereja dan di sekolah dengan hati gembira merupakan salah satu cara kita untuk apa?",
    options: ["Menunjukkan suara kita paling merdu", "Memuji dan memuliakan kebesaran Tuhan", "Mengalahkan kelompok kelas sebelah", "Menghabiskan energi sebelum istirahat"],
    answerIndex: 1,
    explanation: "Lagu pujian rohani lahir dari rasa syukur atas kebaikan dan penyertaan Tuhan Yesus dalam setiap langkah kehidupan kita."
  },

  // =========================================================================
  // KELAS 3 SD - FASE B (Kemahakuasaan Allah, Alam Semesta, Daud, Doa Bapa Kami)
  // =========================================================================
  {
    id: 301,
    grade: 3,
    topic: "Kemahakuasaan Allah di Alam Semesta",
    icon: "fa-earth-americas",
    question: "Pergantian teratur antara siang dan malam, serta musim kemarau dan hujan, menunjukkan bahwa Tuhan Allah berkuasa atas...",
    audioText: "Pergantian teratur antara siang dan malam, serta musim kemarau dan hujan, menunjukkan bahwa Tuhan Allah berkuasa atas apa?",
    options: ["Hanya wilayah Timur Tengah", "Seluruh tatanan alam semesta", "Para pembuat ramalan cuaca", "Bangunan-bangunan tinggi"],
    answerIndex: 1,
    explanation: "Allah berkuasa dan memelihara seluruh ciptaan-Nya. Keteraturan alam semesta membuktikan kuasa dan hikmat Tuhan yang tidak terbatas."
  },
  {
    id: 302,
    grade: 3,
    topic: "Keberanian Daud Cilik Melawan Goliat",
    icon: "fa-shield-halved",
    question: "Meskipun bertubuh kecil dan hanya membawa umban batu, Daud berhasil mengalahkan pendekar Goliat yang perkasa karena Daud mengandalkan...",
    audioText: "Meskipun bertubuh kecil dan hanya membawa umban batu, Daud berhasil mengalahkan pendekar Goliat yang perkasa karena Daud mengandalkan apa?",
    options: ["Baju zirah tembaga yang tebal", "Nama Tuhan Semesta Alam", "Bantuan pasukan berkuda asing", "Pedang pusaka para raja"],
    answerIndex: 1,
    explanation: "Daud berkata kepada Goliat: 'Engkau mendatangi aku dengan pedang dan tombak, tetapi aku mendatangi engkau dengan nama TUHAN semesta alam'."
  },
  {
    id: 303,
    grade: 3,
    topic: "Doa Bapa Kami",
    icon: "fa-hands-praying",
    question: "Doa teladan yang diajarkan langsung oleh Tuhan Yesus Kristus kepada para murid-Nya terdapat dalam Injil Matius, yaitu Doa...",
    audioText: "Doa teladan yang diajarkan langsung oleh Tuhan Yesus Kristus kepada para murid-Nya terdapat dalam Injil Matius, yaitu Doa apa?",
    options: ["Doa Pengakuan Dosa", "Doa Bapa Kami", "Doa Berkat Imamat", "Doa Tabur Tuai"],
    answerIndex: 1,
    explanation: "Tuhan Yesus mengajarkan Doa Bapa Kami (Matius 6:9-13) sebagai pedoman berdoa yang berisi puji-pujian, penyerahan diri, dan permohonan berkat harian."
  },
  {
    id: 304,
    grade: 3,
    topic: "Kisah Yusuf dan Saudara-Saudaranya",
    icon: "fa-people-arrows",
    question: "Ketika Yusuf menjadi penguasa di Mesir dan saudara-saudaranya yang dulu menjahati dia datang mencari makan, sikap Yusuf kepada mereka adalah...",
    audioText: "Ketika Yusuf menjadi penguasa di Mesir dan saudara-saudaranya yang dulu menjahati dia datang mencari makan, sikap Yusuf kepada mereka adalah apa?",
    options: ["Memasukkan mereka ke penjara bawah tanah", "Mengampuni dan memelihara hidup mereka", "Mengusir mereka kembali ke Kanaan", "Mengambil semua ternak milik mereka"],
    answerIndex: 1,
    explanation: "Yusuf tidak menaruh dendam. Ia melihat rencana kebaikan Allah yang memelihara kehidupan banyak bangsa melalui peristiwa tersebut."
  },
  {
    id: 305,
    grade: 3,
    topic: "Tanggung Jawab Lingkungan",
    icon: "fa-tree",
    question: "Sebagai mandataris Allah di bumi, tindakan nyata anak sekolah dalam memelihara kelestarian lingkungan sekolah adalah...",
    audioText: "Sebagai mandataris Allah di bumi, tindakan nyata anak sekolah dalam memelihara kelestarian lingkungan sekolah adalah apa?",
    options: ["Membuang bungkus plastik ke selokan", "Memilah dan membuang sampah pada tempatnya", "Mematahkan ranting pohon yang rindang", "Mencuci tangan dengan air mengalir terus menerus"],
    answerIndex: 1,
    explanation: "Membuang sampah pada tempatnya dan merawat kebersihan adalah wujud tanggung jawab iman kita menjaga bumi rumah bersama ciptaan Allah."
  },
  {
    id: 306,
    grade: 3,
    topic: "Menjadi Pembawa Damai",
    icon: "fa-handshake",
    question: "Dalam Khotbah di Bukit, Yesus bersabda: 'Berbahagialah orang yang membawa damai, karena mereka akan disebut...'",
    audioText: "Dalam Khotbah di Bukit, Yesus bersabda: Berbahagialah orang yang membawa damai, karena mereka akan disebut apa?",
    options: ["Orang yang paling hebat", "Anak-anak Allah", "Penguasa tanah", "Pahlawan perang"],
    answerIndex: 1,
    explanation: "Matius 5:9 menyatakan: 'Berbahagialah orang yang membawa damai, karena mereka akan disebut anak-anak Allah.' Pembawa damai tidak suka menyulut pertengkaran."
  },
  {
    id: 307,
    grade: 3,
    topic: "Memberi Persembahan Sukacita",
    icon: "fa-hand-holding-dollar",
    question: "Ketika memberikan kantong persembahan dalam kebaktian gereja atau Sekolah Minggu, sikap hati yang berkenan bagi Tuhan adalah...",
    audioText: "Ketika memberikan kantong persembahan dalam kebaktian gereja atau Sekolah Minggu, sikap hati yang berkenan bagi Tuhan adalah apa?",
    options: ["Memberi dengan rela hati dan penuh sukacita", "Memberi dengan rasa terpaksa karena dilihat teman", "Menghitung-hitung keuntungan balasan", "Menyesal telah memasukkan uang ke pundi"],
    answerIndex: 0,
    explanation: "Alkitab mengajarkan bahwa Allah mengasihi orang yang memberi dengan sukacita (2 Korintus 9:7), bukan karena terpaksa atau pamrih."
  },
  {
    id: 308,
    grade: 3,
    topic: "Menghargai Waktu Belajar",
    icon: "fa-clock",
    question: "Waktu adalah anugerah Tuhan yang berharga. Sikap disiplin yang mencerminkan tanggung jawab seorang pelajar Kristen adalah...",
    audioText: "Waktu adalah anugerah Tuhan yang berharga. Sikap disiplin yang mencerminkan tanggung jawab seorang pelajar Kristen adalah apa?",
    options: ["Menunda pekerjaan rumah sampai malam larut", "Mengatur waktu belajar dan bermain secara seimbang", "Menghabiskan seluruh hari untuk bermain video game", "Tidur di kelas saat guru mengajar"],
    answerIndex: 1,
    explanation: "Mempergunakan waktu dengan bijaksana mencerminkan kedewasaan karakter anak yang bertanggung jawab atas kesempatan bersekolah dari Tuhan."
  },
  {
    id: 309,
    grade: 3,
    topic: "Kelahiran Sang Juruselamat",
    icon: "fa-star-of-david",
    question: "Kabar gembira tentang kelahiran Tuhan Yesus di kota Betlehem pertama kali disampaikan oleh para malaikat surga kepada...",
    audioText: "Kabar gembira tentang kelahiran Tuhan Yesus di kota Betlehem pertama kali disampaikan oleh para malaikat surga kepada siapa?",
    options: ["Para saudagar kaya di pasar", "Para gembala yang sedang menjaga domba", "Prajurit istana Raja Herodes", "Para ahli taurat di bait suci"],
    answerIndex: 1,
    explanation: "Malaikat menampakkan diri kepada para gembala sederhana di padang efrata, membuktikan bahwa kasih dan keselamatan Allah menyapa siapa saja dengan tulus."
  },
  {
    id: 310,
    grade: 3,
    topic: "Ketaatan Samuel Cilik",
    icon: "fa-scroll",
    question: "Ketika Samuel yang masih belia mendengar suara Tuhan memanggil namanya di dalam kemah suci pada malam hari, jawaban setia Samuel adalah...",
    audioText: "Ketika Samuel yang masih belia mendengar suara Tuhan memanggil namanya di dalam kemah suci pada malam hari, jawaban setia Samuel adalah apa?",
    options: ["'Tunggu sebentar, aku masih mengantuk'", "'Berbicaralah, sebab hamba-Mu ini mendengar'", "'Siapakah itu yang mengganggu tidurku?'", "'Aku tidak mengenal suara itu'"],
    answerIndex: 1,
    explanation: "Atas nasihat Imam Eli, Samuel menjawab dengan penuh ketaatan: 'Berbicaralah, sebab hamba-Mu ini mendengar' (1 Samuel 3:10)."
  },

  // =========================================================================
  // KELAS 4 SD - FASE B (Mengembangkan Talenta, Mengampuni, Keteladanan, Anti-Bullying)
  // =========================================================================
  {
    id: 401,
    grade: 4,
    topic: "Perumpamaan tentang Talenta",
    icon: "fa-coins",
    question: "Dalam perumpamaan Tuhan Yesus, apa yang seharusnya kita lakukan terhadap talenta, bakat, dan kemampuan yang dipercayakan Tuhan kepada kita?",
    audioText: "Dalam perumpamaan Tuhan Yesus, apa yang seharusnya kita lakukan terhadap talenta, bakat, dan kemampuan yang dipercayakan Tuhan kepada kita?",
    options: ["Mengubur dan menyembunyikannya karena takut gagal", "Mengembangkan dan menggunakannya untuk kebaikan", "Membandingkan kemampuan kita dengan teman agar sombong", "Menjualnya demi kepentingan pribadi"],
    answerIndex: 1,
    explanation: "Hamba yang bijak melipatgandakan talentanya melalui kerja keras. Tuhan ingin kita mengembangkan bakat untuk menolong sesama dan memuliakan-Nya."
  },
  {
    id: 402,
    grade: 4,
    topic: "Mengampuni Tanpa Batas",
    icon: "fa-heart-circle-check",
    question: "Ketika Simon Petrus bertanya berapa kali ia harus mengampuni saudaranya yang berbuat salah, Tuhan Yesus menjawab...",
    audioText: "Ketika Simon Petrus bertanya berapa kali ia harus mengampuni saudaranya yang berbuat salah, Tuhan Yesus menjawab apa?",
    options: ["Cukup 3 kali saja", "Hanya 7 kali", "Sampai tujuh puluh kali tujuh kali", "Tergantung besar kecilnya kesalahan"],
    answerIndex: 2,
    explanation: "Ungkapan 'tujuh puluh kali tujuh kali' (Matius 18:22) memiliki arti mengampuni tanpa batas dan tidak menyimpan dendam di dalam hati."
  },
  {
    id: 403,
    grade: 4,
    topic: "Kesetiaan Ayub",
    icon: "fa-mountain-sun",
    question: "Meskipun ditimpa musibah berat dan kehilangan harta serta kesehatannya, keteladanan utama yang ditunjukkan oleh tokoh Ayub adalah...",
    audioText: "Meskipun ditimpa musibah berat dan kehilangan harta serta kesehatannya, keteladanan utama yang ditunjukkan oleh tokoh Ayub adalah apa?",
    options: ["Menyalahkan dan mengutuki nama Tuhan", "Tetap setia, sabar, dan memuji kemuliaan Tuhan", "Mencari kambing hitam atas kemalangannya", "Berputus asa dan berhenti berbuat baik"],
    answerIndex: 1,
    explanation: "Ayub tetap teguh dalam imannya dan berkata: 'TUHAN yang memberi, TUHAN yang mengambil, terpujilah nama TUHAN!' (Ayub 1:21)."
  },
  {
    id: 404,
    grade: 4,
    topic: "Menolak Perilaku Perundungan (Bullying)",
    icon: "fa-user-shield",
    question: "Kamu melihat seorang teman diejek dan dikucilkan oleh sekelompok anak lain saat istirahat. Sikap Kristiani yang berani dan bertanggung jawab adalah...",
    audioText: "Kamu melihat seorang teman diejek dan dikucilkan oleh sekelompok anak lain saat istirahat. Sikap Kristiani yang berani dan bertanggung jawab adalah apa?",
    options: ["Ikut menertawakan agar tidak ikut diintimidasi", "Membela teman tersebut dan melaporkannya kepada guru", "Merekam kejadian untuk diunggah ke internet", "Meninggalkan lokasi tanpa peduli"],
    answerIndex: 1,
    explanation: "Anak Tuhan dipanggil menjadi pelindung yang lemah. Menolak bullying dan membela teman adalah perwujudan kasih dan keadilan Kristiani."
  },
  {
    id: 405,
    grade: 4,
    topic: "Perubahan Hidup Zakheus",
    icon: "fa-money-bill-transfer",
    question: "Setelah Tuhan Yesus menumpang di rumah Zakheus kepala pemungut cukai di Yerikho, buah pertobatan nyata yang dinyatakan Zakheus adalah...",
    audioText: "Setelah Tuhan Yesus menumpang di rumah Zakheus kepala pemungut cukai di Yerikho, buah pertobatan nyata yang dinyatakan Zakheus adalah apa?",
    options: ["Membagikan setengah miliknya dan mengembalikan 4 kali lipat", "Membangun rumah peristirahatan yang lebih megah", "Berhenti bekerja dan berdiam diri di rumah", "Meminta hadiah kehormatan dari para tetangga"],
    answerIndex: 0,
    explanation: "Kasih penerimaan Yesus mengubah hati Zakheus. Ia bertobat dan berjanji membagikan hartanya kepada orang miskin serta mengganti kerugian sesama."
  },
  {
    id: 406,
    grade: 4,
    topic: "Menghormati Guru di Sekolah",
    icon: "fa-chalkboard-user",
    question: "Guru adalah pendidik yang diutus Tuhan untuk mendampingi kita di sekolah. Contoh nyata menghormati bapak dan ibu guru adalah...",
    audioText: "Guru adalah pendidik yang diutus Tuhan untuk mendampingi kita di sekolah. Contoh nyata menghormati bapak dan ibu guru adalah apa?",
    options: ["Memperhatikan saat pelajaran dan mengerjakan tugas tepat waktu", "Bermain lempar kertas ketika guru sedang menulis di papan", "Berbicara keras memotong penjelasan guru", "Meninggalkan ruang kelas tanpa izin"],
    answerIndex: 0,
    explanation: "Memperhatikan instruksi pelajaran, bertutur kata sopan, dan disiplin mengerjakan tugas adalah bentuk penghormatan murid kepada para guru."
  },
  {
    id: 407,
    grade: 4,
    topic: "Pengendalian Diri dan Amarah",
    icon: "fa-brain",
    question: "Kitab Amsal 16:32 menasihatkan bahwa orang yang sabar melebihi seorang pahlawan. Arti nasihat tersebut bagi kehidupan sehari-hari adalah...",
    audioText: "Kitab Amsal 16 ayat 32 menasihatkan bahwa orang yang sabar melebihi seorang pahlawan. Arti nasihat tersebut bagi kehidupan sehari-hari adalah apa?",
    options: ["Menguasai diri dan menahan amarah adalah kekuatan sejati", "Orang sabar boleh membalas kejahatan di kemudian hari", "Kita tidak boleh membela kebenaran sama sekali", "Pahlawan perang selalu memenangkan pertandingan"],
    answerIndex: 0,
    explanation: "Mengendalikan emosi dan tidak lekas marah menunjukkan kedewasaan iman dan penguasaan diri yang dipimpin oleh Roh Kudus."
  },
  {
    id: 408,
    grade: 4,
    topic: "Menolong Teman Berkebutuhan Khusus",
    icon: "fa-wheelchair",
    question: "Jika di kelas ada teman yang menggunakan kursi roda atau memiliki keterbatasan fisik, sikap inklusif yang diajarkan iman Kristen adalah...",
    audioText: "Jika di kelas ada teman yang menggunakan kursi roda atau memiliki keterbatasan fisik, sikap inklusif yang diajarkan iman Kristen adalah apa?",
    options: ["Membantunya beraktivitas dan mengajaknya bermain bersama", "Menatapnya dengan rasa aneh dan menjauhinya", "Menganggapnya sebagai beban kegiatan kelompok", "Melarangnya ikut dalam kegiatan rekreasi kelas"],
    answerIndex: 0,
    explanation: "Setiap insan berharga dan mulia di hadapan Tuhan. Menghargai dan merangkul teman difabel menunjukkan kasih Kristus tanpa sekat pembeda."
  },
  {
    id: 409,
    grade: 4,
    topic: "Firman Tuhan sebagai Pelita",
    icon: "fa-lightbulb",
    question: "Dalam Mazmur 119:105 tertulis: 'Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku.' Maksud dari ayat indah ini adalah...",
    audioText: "Dalam Mazmur 119 ayat 105 tertulis firman-Mu itu pelita bagi kakiku dan terang bagi jalanku. Maksud dari ayat indah ini adalah apa?",
    options: ["Alkitab memberi petunjuk kebenaran dalam mengambil keputusan hidup", "Alkitab harus diletakkan di dekat lampu penerangan kamar", "Kita hanya membaca firman Tuhan saat malam hari tiba", "Alkitab berfungsi sebagai hiasan dinding rumah"],
    answerIndex: 0,
    explanation: "Firman Allah memberikan hikmat, menuntun kita memilih jalan yang benar, dan menjauhkan kita dari godaan perilaku yang merugikan sesama."
  },
  {
    id: 410,
    grade: 4,
    topic: "Hemat Air dan Energi",
    icon: "fa-faucet-drip",
    question: "Mematikan kran air yang tidak digunakan dan mematikan lampu ruangan saat siang hari di sekolah merupakan wujud iman dalam...",
    audioText: "Mematikan kran air yang tidak digunakan dan mematikan lampu ruangan saat siang hari di sekolah merupakan wujud iman dalam hal apa?",
    options: ["Menjaga kelestarian sumber daya ciptaan Allah dari pemborosan", "Menghemat anggaran sekolah demi keuntungan pengurus", "Menghindari hukuman dari penjaga sekolah semata", "Menunjukkan kepelitan kepada sesama pengguna ruangan"],
    answerIndex: 0,
    explanation: "Menghindari pemborosan air dan listrik adalah bagian dari etika lingkungan hidup Kristen dalam mengelola bumi ciptaan Tuhan secara bijak."
  },

  // =========================================================================
  // KELAS 5 SD - FASE C (Buah-Buah Roh, Sikap Pelayanan Yesus, Kebinekaan, Ester)
  // =========================================================================
  {
    id: 501,
    grade: 5,
    topic: "Buah-Buah Roh Kudus",
    icon: "fa-apple-whole",
    question: "Dalam Surat Galatia 5:22-23 disebutkan buah Roh yang mencerminkan karakter Kristiani. Di bawah ini yang BUKAN merupakan buah Roh adalah...",
    audioText: "Dalam Surat Galatia 5 ayat 22 sampai 23 disebutkan buah Roh yang mencerminkan karakter Kristiani. Di bawah ini yang bukan merupakan buah Roh adalah apa?",
    options: ["Kasih dan sukacita", "Kesabaran dan kemurahan", "Kesombongan dan dendam hati", "Kelemahlembutan dan penguasaan diri"],
    answerIndex: 2,
    explanation: "Buah Roh adalah: kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, dan penguasaan diri. Kesombongan bertentangan dengan Roh Kudus."
  },
  {
    id: 502,
    grade: 5,
    topic: "Yesus Membasuh Kaki Murid-Nya",
    icon: "fa-hands-bubbles",
    question: "Dalam Perjamuan Malam Terakhir, Tuhan Yesus mengambil kain lenan dan membasuh kaki para murid-Nya. Makna utama dari teladan ini adalah...",
    audioText: "Dalam Perjamuan Malam Terakhir, Tuhan Yesus mengambil kain lenan dan membasuh kaki para murid-Nya. Makna utama dari teladan ini adalah apa?",
    options: ["Pemimpin sejati harus memiliki hati yang melayani sesama", "Murid-murid-Nya tidak tahu cara membersihkan kaki", "Yesus ingin menunjukkan kekuasaan fisik atas para rasul", "Tradisi wajib sebelum makan bersama keluarga raja"],
    answerIndex: 0,
    explanation: "Yesus menegaskan bahwa yang terbesar di antara kamu hendaklah menjadi pelayan. Kerendahan hati dalam melayani sesama adalah inti kepemimpinan Kristiani."
  },
  {
    id: 503,
    grade: 5,
    topic: "Kerukunan Antarumat Beragama",
    icon: "fa-people-group",
    question: "Bangsa Indonesia memiliki semboyan 'Bhinneka Tunggal Ika' dengan berbagai agama resmi. Sikap murid Kristen dalam berinteraksi dengan teman berbeda iman adalah...",
    audioText: "Bangsa Indonesia memiliki semboyan Bhinneka Tunggal Ika dengan berbagai agama resmi. Sikap murid Kristen dalam berinteraksi dengan teman berbeda iman adalah apa?",
    options: ["Saling menghormati hari raya keagamaan dan hidup rukun berdampingan", "Memaksa teman mengikuti tata cara ibadah kita", "Menolak berteman bila agamanya tidak sama", "Menjelek-jelekkan keyakinan agama orang lain"],
    answerIndex: 0,
    explanation: "Sebagai warga negara dan pengikut Kristus, kita dipanggil untuk hidup berdampingan secara damai, toleran, dan mengasihi semua orang tanpa diskriminasi."
  },
  {
    id: 504,
    grade: 5,
    topic: "Integritas Menolak Menyontek",
    icon: "fa-certificate",
    question: "Saat ujian sekolah berlangsung, seorang teman mengajakmu bertukar jawaban. Mengapa seorang murid berintegritas menolak perbuatan menyontek?",
    audioText: "Saat ujian sekolah berlangsung, seorang teman mengajakmu bertukar jawaban. Mengapa seorang murid berintegritas menolak perbuatan menyontek?",
    options: ["Karena takut kuncinya keliru", "Karena meyakini Tuhan melihat kejujuran di atas sekadar angka nilai", "Karena ingin melihat teman mendapat nilai buruk", "Karena waktu ujian sudah hampir habis"],
    answerIndex: 1,
    explanation: "Integritas berarti berbuat benar meskipun tidak ada orang lain yang melihat. Tuhan menguji hati dan menghargai kejujuran kita dalam segala hal."
  },
  {
    id: 505,
    grade: 5,
    topic: "Perumpamaan Anak yang Hilang",
    icon: "fa-person-walking-arrow-loop-left",
    question: "Dalam perumpamaan Anak yang Hilang (Lukas 15), bagaimana sikap sang bapa ketika melihat anak bungsunya yang telah memboroskan harta kembali pulang?",
    audioText: "Dalam perumpamaan Anak yang Hilang, bagaimana sikap sang bapa ketika melihat anak bungsunya yang telah memboroskan harta kembali pulang?",
    options: ["Mengusirnya karena dianggap telah mempermalukan keluarga", "Menyuruhnya menjadi budak seumur hidup di kandang babi", "Berlari menyongsong, memeluk, dan menyambutnya dengan sukacita", "Menuntut ganti rugi seluruh warisan yang habis"],
    answerIndex: 2,
    explanation: "Sang bapa menggambarkan kasih Allah Bapa di surga yang berbelas kasihan dan selalu siap mengampuni serta memulihkan setiap orang berdosa yang bertobat."
  },
  {
    id: 506,
    grade: 5,
    topic: "Kesetaraan Gender di Mata Allah",
    icon: "fa-venus-mars",
    question: "Kitab Kejadian 1:27 menegaskan bahwa Allah menciptakan laki-laki dan perempuan seturut gambar dan rupa-Nya. Hal ini menunjukkan bahwa...",
    audioText: "Kitab Kejadian 1 ayat 27 menegaskan bahwa Allah menciptakan laki-laki dan perempuan seturut gambar dan rupa-Nya. Hal ini menunjukkan bahwa apa?",
    options: ["Laki-laki dan perempuan memiliki harkat martabat yang sama berharganya di hadapan Allah", "Laki-laki berkedudukan lebih mulia daripada perempuan", "Perempuan tidak berhak mendapatkan kesempatan belajar", "Hanya laki-laki yang boleh memimpin doa bersama"],
    answerIndex: 0,
    explanation: "Laki-laki dan perempuan diciptakan setara sebagai rekan sekerja Allah. Keduanya saling melengkapi dan memiliki hak asasi yang sama di mata Tuhan."
  },
  {
    id: 507,
    grade: 5,
    topic: "Bijak Menggunakan Media Sosial",
    icon: "fa-mobile-screen",
    question: "Perkembangan gawai dan internet semakin pesat. Contoh penerapan nilai Kristiani saat menggunakan media sosial atau grup chat adalah...",
    audioText: "Perkembangan gawai dan internet semakin pesat. Contoh penerapan nilai Kristiani saat menggunakan media sosial atau grup chat adalah apa?",
    options: ["Menyebarkan kabar bohong yang belum tentu benar (hoaks)", "Mengunggah kata-kata yang membangun, santun, dan menyejukkan", "Menuliskan komentar kasar memakai akun anonim", "Membocorkan rahasia pribadi teman sekelas"],
    answerIndex: 1,
    explanation: "Teknologi informasi harus dipakai sebagai sarana menebarkan kebaikan, mendorong semangat, dan membagikan firman kebenaran yang memberkati sesama."
  },
  {
    id: 508,
    grade: 5,
    topic: "Keberanian Ratu Ester",
    icon: "fa-crown",
    question: "Ratu Ester mempertaruhkan nyawanya menghadap Raja Ahasyweros tanpa dipanggil demi menyelamatkan bangsanya. Prinsip iman Ester tertulis dalam tekadnya:",
    audioText: "Ratu Ester mempertaruhkan nyawanya menghadap Raja Ahasyweros tanpa dipanggil demi menyelamatkan bangsanya. Prinsip iman Ester tertulis dalam tekadnya apa?",
    options: ["'Harta kekayaan adalah segalanya'", "'Kalau terpaksa aku mati, biarlah aku mati'", "'Biarkan orang lain yang menanggung risikonya'", "'Lebih baik lari menyelamatkan diri sendiri'"],
    answerIndex: 1,
    explanation: "Ratu Ester berpuasa dan berdoa bersama bangsanya. Keberaniannya membela keadilan dan kaum tertindas diabadikan dalam Kitab Ester 4:16."
  },
  {
    id: 509,
    grade: 5,
    topic: "Kepedulian Bencana Alam",
    icon: "fa-box-open",
    question: "Ketika saudara-saudara kita di suatu wilayah tertimpa bencana alam gempa bumi atau banjir, wujud kasih karitatif yang tepat adalah...",
    audioText: "Ketika saudara-saudara kita di suatu wilayah tertimpa bencana alam gempa bumi atau banjir, wujud kasih karitatif yang tepat adalah apa?",
    options: ["Mengirimkan bantuan doa, pakaian layak pakai, dan bahan pangan", "Menyalahkan masyarakat setempat atas musibah tersebut", "Berwisata ke lokasi bencana hanya untuk berfoto ria", "Menjual bantuan logistik demi mencari keuntungan"],
    answerIndex: 0,
    explanation: "Iman tanpa perbuatan adalah mati (Yakobus 2:17). Menghimpun bantuan untuk meringankan beban korban bencana adalah bentuk nyata kasih Kristus yang hidup."
  },
  {
    id: 510,
    grade: 5,
    topic: "Hukum Kasih yang Terutama",
    icon: "fa-book-open",
    question: "Dua hukum utama yang diajarkan Tuhan Yesus merangkum seluruh hukum Taurat dan kitab para nabi adalah mengasihi Tuhan Allah dan mengasihi...",
    audioText: "Dua hukum utama yang diajarkan Tuhan Yesus merangkum seluruh hukum Taurat dan kitab para nabi adalah mengasihi Tuhan Allah dan mengasihi siapa?",
    options: ["Harta benda kita sendiri", "Sesama manusia seperti diri sendiri", "Mereka yang membalas kebaikan kita saja", "Pemimpin yang memiliki kedudukan tinggi"],
    answerIndex: 1,
    explanation: "Matius 22:37-39: 'Kasihilah Tuhan, Allahmu, dengan segenap hatimu... dan kasihilah sesamamu manusia seperti dirimu sendiri.' Inilah dasar hidup orang beriman."
  },

  // =========================================================================
  // KELAS 6 SD - FASE C (Garam & Terang Dunia, Daniel di Gua Singa, Integritas, Ibadah Sejati)
  // =========================================================================
  {
    id: 601,
    grade: 6,
    topic: "Garam dan Terang Dunia",
    icon: "fa-sun-plant-wilt",
    question: "Dalam Matius 5:13-16, Yesus mengumpamakan murid-murid-Nya sebagai garam dan terang dunia. Fungsi utama seorang murid menjadi terang dunia adalah...",
    audioText: "Dalam Matius 5 ayat 13 sampai 16, Yesus mengumpamakan murid-murid-Nya sebagai garam dan terang dunia. Fungsi utama seorang murid menjadi terang dunia adalah apa?",
    options: ["Memperlihatkan perbuatan baik agar Bapa di surga dimuliakan", "Mencari puji-pujian dan ketenaran dari guru dan masyarakat", "Menghakimi kesalahan orang lain di muka umum", "Menonjolkan kepandaian diri agar disegani lawan"],
    answerIndex: 0,
    explanation: "Terang membawa kejelasan dan menghalau kegelapan. Melalui keteladanan tutur kata dan perilaku yang baik, orang lain dapat melihat kemuliaan Allah di surga."
  },
  {
    id: 602,
    grade: 6,
    topic: "Tiga Pemuda di Perapian Menyala",
    icon: "fa-fire",
    question: "Sadrakh, Mesakh, dan Abednego menolak menyembah patung emas Raja Nebukadnezar karena kesetiaan mereka kepada Allah. Sikap iman teguh mereka adalah...",
    audioText: "Sadrakh, Mesakh, dan Abednego menolak menyembah patung emas Raja Nebukadnezar karena kesetiaan mereka kepada Allah. Sikap iman teguh mereka adalah apa?",
    options: ["Berkompromi demi mempertahankan jabatan di Babel", "Tetap setia menyembah Allah yang benar meski diancam dicampakkan ke perapian", "Melarikan diri ke negeri lain tanpa pamit", "Menyembah patung itu hanya dalam kepura-puraan luar saja"],
    answerIndex: 1,
    explanation: "Ketiga pemuda itu percaya bahwa Allah sanggup melepaskan mereka, namun sekalipun tidak, mereka tetap bertekad tidak akan menyembah berhala (Daniel 3:17-18)."
  },
  {
    id: 603,
    grade: 6,
    topic: "Daniel di Gua Singa",
    icon: "fa-shield",
    question: "Ketika para pejabat iri hati membuat undang-undang larangan berdoa kepada siapapun selain kepada raja, apa yang tetap dilakukan Nabi Daniel?",
    audioText: "Ketika para pejabat iri hati membuat undang-undang larangan berdoa kepada siapapun selain kepada raja, apa yang tetap dilakukan Nabi Daniel?",
    options: ["Menutup rapat jendela kamarnya dan berhenti berdoa", "Tetap berdoa tiga kali sehari berlutut dan memuji Allahnya", "Mengajukan protes militer untuk menggulingkan raja", "Berdoa diam-diam di tempat terpencil"],
    answerIndex: 1,
    explanation: "Daniel memegang komitmen doa tanpa rasa gentar. Tuhan mengutus malaikat-Nya mengatupkan mulut singa-singa buas di dalam gua sehingga Daniel selamat."
  },
  {
    id: 604,
    grade: 6,
    topic: "Tekanan Teman Sebaya (Peer Pressure)",
    icon: "fa-hand",
    question: "Teman-teman sebayamu mengajakmu membolos sekolah dan merokok bersama di tempat sepi. Sikap tegas seorang remaja Kristen yang berprinsip adalah...",
    audioText: "Teman-teman sebayamu mengajakmu membolos sekolah dan merokok bersama di tempat sepi. Sikap tegas seorang remaja Kristen yang berprinsip adalah apa?",
    options: ["Menolak ajakan tersebut dengan sopan namun tegas serta tetap berdiri pada kebenaran", "Ikut serta agar tidak dianggap cupu dan dijauhi teman", "Mencobanya sedikit saja agar tahu rasanya", "Mengancam akan memukul teman yang mengajak"],
    answerIndex: 0,
    explanation: "Menjaga kekudusan tubuh sebagai bait Roh Kudus menuntut keberanian menolak pengaruh buruk. Sahabat sejati akan mengajak kepada hal yang baik dan membangun."
  },
  {
    id: 605,
    grade: 6,
    topic: "Makna Ibadah Sejati",
    icon: "fa-gem",
    question: "Rasul Paulus dalam Roma 12:1 menasihatkan tentang ibadah yang sejati. Apakah arti ibadah yang sejati dalam kehidupan praktis sehari-hari?",
    audioText: "Rasul Paulus dalam Roma 12 ayat 1 menasihatkan tentang ibadah yang sejati. Apakah arti ibadah yang sejati dalam kehidupan praktis sehari-hari?",
    options: ["Hanya sekadar hadir duduk di gereja setiap Minggu pagi", "Mempersembahkan seluruh hidup dan perbuatan kita sebagai persembahan yang kudus bagi Allah", "Menyumbang dana dalam jumlah sangat besar agar dikenal pengurus gereja", "Menghafal seluruh isi Alkitab tanpa mempraktikkannya"],
    answerIndex: 1,
    explanation: "Ibadah sejati bukan ritual formalitas, melainkan kesediaan hidup kita setiap hari memuliakan Tuhan melalui kata-kata, kejujuran, dan perbuatan kasih nyata."
  },
  {
    id: 606,
    grade: 6,
    topic: "Rancangan Damai Sejahtera Tuhan",
    icon: "fa-compass",
    question: "Menjelang kelulusan sekolah dasar dan melangkah ke SMP, janji Tuhan dalam Yeremia 29:11 memberikan pengharapan bahwa rancangan Tuhan adalah...",
    audioText: "Menjelang kelulusan sekolah dasar dan melangkah ke SMP, janji Tuhan dalam Yeremia 29 ayat 11 memberikan pengharapan bahwa rancangan Tuhan adalah apa?",
    options: ["Rancangan kecelakaan yang menakutkan", "Rancangan damai sejahtera dan bukan rancangan kecelakaan untuk memberikan hari depan penuh harapan", "Rancangan yang membiarkan manusia berjalan sendirian", "Rancangan kekayaan instan tanpa perlu belajar keras"],
    answerIndex: 1,
    explanation: "Yeremia 29:11 menegaskan kepastian janji pemeliharaan Allah. Dengan bersandar dan taat kepada Tuhan, kita menatap masa depan dengan iman dan sukacita."
  },
  {
    id: 607,
    grade: 6,
    topic: "Yesus Menyembuhkan Orang Kusta",
    icon: "fa-hand-dots",
    question: "Pada zaman Alkitab, penderita kusta dikucilkan dan dijauhi masyarakat. Tindakan radikal penuh belas kasihan yang dilakukan Yesus kepada mereka adalah...",
    audioText: "Pada zaman Alkitab, penderita kusta dikucilkan dan dijauhi masyarakat. Tindakan radikal penuh belas kasihan yang dilakukan Yesus kepada mereka adalah apa?",
    options: ["Melempari batu dari kejauhan agar mereka tidak mendekat", "Mengulurkan tangan, menjamah mereka, dan menyembuhkan penyakitnya", "Menyuruh mereka pergi mengasingkan diri ke padang gurun", "Meminta bayaran mahal sebelum melayani"],
    answerIndex: 1,
    explanation: "Yesus tidak jijik atau menjauh. Sentuhan kasih Yesus memulihkan martabat manusia yang terpinggirkan dan memberikan kesembuhan seutuhnya."
  },
  {
    id: 608,
    grade: 6,
    topic: "Bahaya Kesombongan Rohani",
    icon: "fa-scale-unbalanced-flip",
    question: "Dalam perumpamaan tentang Orang Farisi dan Pemungut Cukai (Lukas 18), siapakah yang doanya dibenarkan oleh Allah saat pulang ke rumahnya?",
    audioText: "Dalam perumpamaan tentang Orang Farisi dan Pemungut Cukai, siapakah yang doanya dibenarkan oleh Allah saat pulang ke rumahnya?",
    options: ["Orang Farisi yang menyombongkan amal ibadahnya di depan umum", "Pemungut cukai yang memukul diri dan memohon belas kasihan Allah dengan rendah hati", "Keduanya sama-sama tidak dibenarkan Tuhan", "Hanya para imam bait suci yang bertugas"],
    answerIndex: 1,
    explanation: "Yesus bersabda: 'Sebab barangsiapa meninggikan diri akan direndahkan dan barangsiapa merendahkan diri akan ditinggikan.' Kerendahan hati berkenan di hadapan Allah."
  },
  {
    id: 609,
    grade: 6,
    topic: "Menjaga Persatuan Bangsa",
    icon: "fa-flag",
    question: "Sebagai generasi penerus bangsa Indonesia yang berlandaskan Pancasila, teladan Kristiani dalam merawat persatuan nasional diwujudkan dengan...",
    audioText: "Sebagai generasi penerus bangsa Indonesia yang berlandaskan Pancasila, teladan Kristiani dalam merawat persatuan nasional diwujudkan dengan apa?",
    options: ["Menghargai keberagaman budaya, adat istiadat, dan mempererat tali persaudaraan sebangsa", "Menganggap suku bangsanya sendiri yang paling unggul dari yang lain", "Memicu perdebatan provokatif di ruang publik", "Tidak mau peduli terhadap kemajuan lingkungan sekitar"],
    answerIndex: 0,
    explanation: "Alkitab mengajarkan 'Usahakanlah kesejahteraan kota ke mana kamu Aku buang, dan berdoalah untuk kota itu kepada TUHAN' (Yeremia 29:7). Cinta tanah air adalah bagian dari panggilan iman."
  },
  {
    id: 610,
    grade: 6,
    topic: "Menjadi Saksi Kristus yang Berbuah",
    icon: "fa-seedling",
    question: "Menyelesaikan masa pendidikan di Sekolah Dasar dengan baik dan menjadi teladan bagi adik-adik kelas merupakan wujud panggilan menjadi...",
    audioText: "Menyelesaikan masa pendidikan di Sekolah Dasar dengan baik dan menjadi teladan bagi adik-adik kelas merupakan wujud panggilan menjadi apa?",
    options: ["Saksi Kristus yang menghasilkan buah kebaikan dan integritas", "Siswa paling ditakuti di lingkungan sekolah", "Penguasa pergaulan di sekolah", "Penonton pasif dalam setiap kegiatan positif"],
    answerIndex: 0,
    explanation: "Setiap langkah pendidikan kita adalah anugerah Tuhan. Menunjukkan sikap jujur, rajin, sopan, dan berprestasi menjadikan kita saksi Kristus yang membawa berkat bagi sesama."
  }
];

