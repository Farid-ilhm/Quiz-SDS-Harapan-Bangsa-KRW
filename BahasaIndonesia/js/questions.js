/**
 * Kuis Bahasa Indonesia SD - Bank Soal Lengkap Kelas 1 sampai 6 SD
 * Total: 60 Soal (10 Soal per jenjang kelas sesuai standar kurikulum SD)
 * Bebas dari bocoran jawaban di dalam soal dan opsi jawaban yang terlalu kentara.
 * Dilengkapi pembacaan suara (Text-to-Speech) dan pembahasan edukatif ramah anak.
 */

const IndonesianQuizQuestions = [
  // =========================================================================
  // KELAS 1 SD - FASE A (Huruf, Suku Kata, Benda Sekitar, Sapaan & Kesantunan)
  // =========================================================================
  {
    id: 101,
    grade: 1,
    topic: "Huruf Vokal & Konsonan",
    icon: "fa-font",
    question: "Di antara pilihan huruf di bawah ini, kelompok manakah yang semuanya merupakan huruf vokal?",
    audioText: "Di antara pilihan huruf di bawah ini, kelompok manakah yang semuanya merupakan huruf vokal?",
    options: ["B, C, D", "A, I, U", "K, L, M", "P, Q, R"],
    answerIndex: 1,
    explanation: "Huruf vokal dalam Bahasa Indonesia ada 5, yaitu: A, I, U, E, dan O. Huruf lainnya seperti B, C, D, K, L disebut sebagai huruf konsonan."
  },
  {
    id: 102,
    grade: 1,
    topic: "Suku Kata",
    icon: "fa-layer-group",
    question: "Kata 'sekolah' jika dipenggal menurut suku katanya terdiri dari berapa suku kata?",
    audioText: "Kata sekolah jika dipenggal menurut suku katanya terdiri dari berapa suku kata?",
    options: ["2 suku kata", "3 suku kata", "4 suku kata", "5 suku kata"],
    answerIndex: 1,
    explanation: "Kata 'sekolah' dipenggal menjadi se - ko - lah, sehingga memiliki 3 suku kata."
  },
  {
    id: 103,
    grade: 1,
    topic: "Anggota Tubuh",
    icon: "fa-ear-listen",
    question: "Bagian tubuh yang kita gunakan untuk mendengarkan nasihat guru dan suara lonceng sekolah adalah...",
    audioText: "Bagian tubuh yang kita gunakan untuk mendengarkan nasihat guru dan suara lonceng sekolah adalah apa?",
    options: ["Mata", "Telinga", "Hidung", "Lidah"],
    answerIndex: 1,
    explanation: "Kita mendengar suara menggunakan telinga. Mata digunakan untuk melihat, hidung untuk mencium bau, dan lidah untuk mengecap rasa."
  },
  {
    id: 104,
    grade: 1,
    topic: "Kata Ajaib (Sopan Santun)",
    icon: "fa-heart",
    question: "Ketika teman sekelas meminjamkan pensil karena pensilmu patah, ucapan santun yang kita berikan adalah...",
    audioText: "Ketika teman sekelas meminjamkan pensil karena pensilmu patah, ucapan santun yang kita berikan adalah apa?",
    options: ["Minta maaf", "Terima kasih", "Permisi", "Sampai jumpa"],
    answerIndex: 1,
    explanation: "Mengucapkan 'terima kasih' adalah bentuk rasa syukur dan menghargai kebaikan teman yang sudah menolong kita."
  },
  {
    id: 105,
    grade: 1,
    topic: "Kata Tanya Sederhana",
    icon: "fa-circle-question",
    question: "Kata tanya yang tepat untuk menanyakan tempat tinggal teman baru kita adalah...",
    audioText: "Kata tanya yang tepat untuk menanyakan tempat tinggal teman baru kita adalah apa?",
    options: ["Kapan", "Di mana", "Siapa", "Berapa"],
    answerIndex: 1,
    explanation: "Kata tanya 'di mana' digunakan untuk menanyakan lokasi atau tempat. 'Siapa' untuk menanyakan orang, dan 'kapan' untuk menanyakan waktu."
  },
  {
    id: 106,
    grade: 1,
    topic: "Menyusun Kalimat",
    icon: "fa-arrow-down-a-z",
    question: "Susunan kalimat yang tepat dan runtut dari kata acak: 'buku - membaca - Budi' adalah...",
    audioText: "Susunan kalimat yang tepat dan runtut dari kata acak buku membaca Budi adalah apa?",
    options: ["Budi membaca buku", "Membaca Budi buku", "Buku Budi membaca", "Membaca buku Budi"],
    answerIndex: 0,
    explanation: "Susunan kalimat yang benar diawali pelaku (Budi), diikuti kegiatan/predikat (membaca), dan benda/objek (buku)."
  },
  {
    id: 107,
    grade: 1,
    topic: "Ungkapan Minta Maaf",
    icon: "fa-handshake-angle",
    question: "Secara tidak sengaja kamu menyenggol botol minum teman hingga terjatuh. Sikap terpuji yang harus kamu lakukan adalah...",
    audioText: "Secara tidak sengaja kamu menyenggol botol minum teman hingga terjatuh. Sikap terpuji yang harus kamu lakukan adalah apa?",
    options: ["Menertawakan teman", "Meminta maaf dengan tulus", "Langsung berlari pulang", "Menyalahkan orang lain"],
    answerIndex: 1,
    explanation: "Jika berbuat salah meskipun tidak disengaja, anak hebat selalu berani meminta maaf secara tulus dan membantu merapikannya kembali."
  },
  {
    id: 108,
    grade: 1,
    topic: "Huruf Kapital Awal",
    icon: "fa-signature",
    question: "Di dalam penulisan kalimat, huruf kapital (huruf besar) selalu digunakan pada...",
    audioText: "Di dalam penulisan kalimat, huruf kapital selalu digunakan pada bagian apa?",
    options: ["Akhir kalimat saja", "Awal kalimat dan nama orang", "Setiap huruf konsonan", "Tengah kata yang panjang"],
    answerIndex: 1,
    explanation: "Huruf besar atau kapital wajib diletakkan di awal kalimat (misal: 'Hari ini cerah') dan di awal nama orang (misal: 'Budi, Siti')."
  },
  {
    id: 109,
    grade: 1,
    topic: "Benda di Ruang Kelas",
    icon: "fa-chalkboard-user",
    question: "Benda di depan kelas yang digunakan oleh guru untuk menuliskan materi pelajaran menggunakan spidol adalah...",
    audioText: "Benda di depan kelas yang digunakan oleh guru untuk menuliskan materi pelajaran menggunakan spidol adalah apa?",
    options: ["Meja guru", "Papan tulis", "Lemari buku", "Tempat sampah"],
    answerIndex: 1,
    explanation: "Papan tulis putih (whiteboard) digunakan bapak dan ibu guru untuk mencatat materi pelajaran dengan spidol agar semua murid dapat membaca."
  },
  {
    id: 110,
    grade: 1,
    topic: "Sapaan Waktu",
    icon: "fa-sun",
    question: "Ucapan sapaan yang santun ketika bertemu dengan bapak atau ibu guru pada pukul tujuh pagi adalah...",
    audioText: "Ucapan sapaan yang santun ketika bertemu bapak atau ibu guru pada pukul tujuh pagi adalah apa?",
    options: ["Selamat siang", "Selamat malam", "Selamat pagi", "Selamat tidur"],
    answerIndex: 2,
    explanation: "Pukul tujuh pagi berada di waktu pagi hari, sehingga sapaan santun yang tepat adalah 'Selamat pagi'."
  },

  // =========================================================================
  // KELAS 2 SD - FASE A (Tanda Baca, Lawan & Persamaan Kata, Kalimat Santun)
  // =========================================================================
  {
    id: 201,
    grade: 2,
    topic: "Tanda Baca Kalimat Tanya",
    icon: "fa-question",
    question: "Tanda baca yang wajib diletakkan pada akhir kalimat 'Kapan kita akan berkunjung ke perpustakaan' adalah...",
    audioText: "Tanda baca yang wajib diletakkan pada akhir kalimat kapan kita akan berkunjung ke perpustakaan adalah apa?",
    options: ["Tanda titik ( . )", "Tanda seru ( ! )", "Tanda tanya ( ? )", "Tanda koma ( , )"],
    answerIndex: 2,
    explanation: "Kalimat tersebut menanyakan waktu kegiatan, sehingga merupakan kalimat tanya dan diakhiri tanda tanya ( ? )."
  },
  {
    id: 202,
    grade: 2,
    topic: "Lawan Kata (Antonim)",
    icon: "fa-arrows-left-right",
    question: "Lampu di ruang tamu dinyalakan sehingga ruangan menjadi terang. Lawan kata dari 'terang' adalah...",
    audioText: "Lampu di ruang tamu dinyalakan sehingga ruangan menjadi terang. Lawan kata dari terang adalah apa?",
    options: ["Gelap", "Luas", "Panjang", "Tinggi"],
    answerIndex: 0,
    explanation: "Lawan kata (antonim) dari terang adalah gelap. Jika tidak ada cahaya lampu, ruangan akan menjadi gelap."
  },
  {
    id: 203,
    grade: 2,
    topic: "Persamaan Kata (Sinonim)",
    icon: "fa-equals",
    question: "Wajah adik tampak sangat gembira setelah berhasil menyelesaikan gambar pemandangan. Persamaan kata dari 'gembira' adalah...",
    audioText: "Wajah adik tampak sangat gembira setelah berhasil menyelesaikan gambar pemandangan. Persamaan kata dari gembira adalah apa?",
    options: ["Sedih", "Senang", "Kecewa", "Takut"],
    answerIndex: 1,
    explanation: "Gembira memiliki arti atau makna yang sama dengan senang atau bahagia."
  },
  {
    id: 204,
    grade: 2,
    topic: "Huruf Kapital Nama Hari",
    icon: "fa-calendar-days",
    question: "Penulisan nama hari yang benar sesuai kaidah ejaan bahasa Indonesia adalah...",
    audioText: "Penulisan nama hari yang benar sesuai kaidah ejaan bahasa Indonesia adalah yang mana?",
    options: ["hari selasa", "Hari selasa", "hari Selasa", "HARI SELASA"],
    answerIndex: 2,
    explanation: "Nama-nama hari seperti Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, dan Minggu harus diawali dengan huruf kapital (huruf besar)."
  },
  {
    id: 205,
    grade: 2,
    topic: "Kalimat Ajakan",
    icon: "fa-bullhorn",
    question: "Kalimat berikut ini yang merupakan contoh kalimat ajakan adalah...",
    audioText: "Kalimat berikut ini yang merupakan contoh kalimat ajakan adalah yang mana?",
    options: [
      "Tolong tutup pintu itu dengan rapat.",
      "Ayo kita rapikan buku-buku di meja belajar!",
      "Jangan membuang sampah sembarangan.",
      "Apakah tugas rumahmu sudah selesai?"
    ],
    answerIndex: 1,
    explanation: "Kalimat ajakan ditandai dengan kata 'ayo' atau 'mari', yang tujuannya mengajak orang lain melakukan hal baik bersama."
  },
  {
    id: 206,
    grade: 2,
    topic: "Penolakan Santun",
    icon: "fa-comment-dots",
    question: "Temanmu mengajak bermain bola di lapangan, namun kamu sedang sakit demam. Kalimat penolakan yang sopan adalah...",
    audioText: "Temanmu mengajak bermain bola di lapangan, namun kamu sedang sakit demam. Kalimat penolakan yang sopan adalah apa?",
    options: [
      "Aku tidak mau main denganmu!",
      "Maaf ya, hari ini badanku sedang demam jadi harus istirahat.",
      "Sana main sendiri saja jangan mengajakku!",
      "Sepak bola itu permainan yang melelahkan."
    ],
    answerIndex: 1,
    explanation: "Penolakan yang santun diawali kata 'maaf' dan disertai alasan yang jelas tanpa menyinggung perasaan teman."
  },
  {
    id: 207,
    grade: 2,
    topic: "Fungsi Tanda Titik",
    icon: "fa-circle-dot",
    question: "Tanda titik ( . ) dalam sebuah teks bacaan berfungsi utama untuk...",
    audioText: "Tanda titik dalam sebuah teks bacaan berfungsi utama untuk apa?",
    options: [
      "Mengakhiri kalimat pernyataan atau berita",
      "Menanyakan sesuatu hal yang belum pasti",
      "Mengungkapkan rasa kaget dan perintah",
      "Memisahkan suku kata dalam sebuah kata"
    ],
    answerIndex: 0,
    explanation: "Tanda titik ( . ) digunakan pada akhir kalimat berita atau pernyataan untuk menandai bahwa gagasan kalimat tersebut sudah selesai."
  },
  {
    id: 208,
    grade: 2,
    topic: "Kalimat Minta Tolong",
    icon: "fa-hands-holding",
    question: "Kata santun yang diletakkan di depan kalimat ketika kita membutuhkan bantuan orang lain adalah...",
    audioText: "Kata santun yang diletakkan di depan kalimat ketika kita membutuhkan bantuan orang lain adalah kata apa?",
    options: ["Harus", "Tolong", "Cepat", "Biar"],
    answerIndex: 1,
    explanation: "Menggunakan kata 'tolong' saat meminta bantuan menunjukkan sikap menghargai orang lain dan budi pekerti yang baik."
  },
  {
    id: 209,
    grade: 2,
    topic: "Memahami Makna Puisi",
    icon: "fa-feather",
    question: "Perhatikan baris puisi ini: 'Engkau terangi bumi dengan hangatmu, bunga mekar menyambut cahayamu'. Puisi tersebut menceritakan tentang...",
    audioText: "Engkau terangi bumi dengan hangatmu, bunga mekar menyambut cahayamu. Puisi tersebut menceritakan tentang apa?",
    options: ["Hujan badai", "Matahari", "Bulan sabit", "Angin kencang"],
    answerIndex: 1,
    explanation: "Benda alam yang menerangi bumi dengan cahaya hangat dan membantu mekarnya bunga di pagi hari adalah matahari."
  },
  {
    id: 210,
    grade: 2,
    topic: "Melengkapi Kalimat Rumpang",
    icon: "fa-pen-clip",
    question: "Deni selalu ... giginya sebelum tidur malam agar giginya tidak berlubang.",
    audioText: "Deni selalu apa giginya sebelum tidur malam agar giginya tidak berlubang?",
    options: ["mencuci", "menggosok", "memotong", "mengelap"],
    answerIndex: 1,
    explanation: "Kata kerja yang lazim dan tepat untuk membersihkan gigi menggunakan sikat gigi dan pasta gigi adalah 'menggosok'."
  },

  // =========================================================================
  // KELAS 3 SD - FASE B (Cerita Fabel, Awalan ber- dan me-, Denah & Kalimat Efektif)
  // =========================================================================
  {
    id: 301,
    grade: 3,
    topic: "Mengenal Dongeng Fabel",
    icon: "fa-paw",
    question: "Dongeng fabel memiliki keunikan khusus dibanding cerita lainnya, yaitu tokoh-tokohnya diperankan oleh...",
    audioText: "Dongeng fabel memiliki keunikan khusus dibanding cerita lainnya, yaitu tokoh-tokohnya diperankan oleh siapa?",
    options: [
      "Benda-benda angkasa",
      "Hewan yang bertingkah laku seperti manusia",
      "Para raksasa bertubuh besar",
      "Robot dari masa depan"
    ],
    answerIndex: 1,
    explanation: "Fabel adalah dongeng yang tokoh utamanya adalah binatang yang bisa berbicara, berpikir, dan bersikap layaknya manusia."
  },
  {
    id: 302,
    grade: 3,
    topic: "Awalan ber-",
    icon: "fa-puzzle-piece",
    question: "Kata dasar 'sepeda' jika diberi imbuhan awalan 'ber-' akan membentuk kata kerja...",
    audioText: "Kata dasar sepeda jika diberi imbuhan awalan ber- akan membentuk kata kerja apa?",
    options: ["Bersepeda", "Bessepeda", "Besepeda", "Menyepeda"],
    answerIndex: 0,
    explanation: "Awalan ber- yang dirangkai dengan kata dasar sepeda menjadi 'bersepeda', yang bermakna mengendarai atau menggunakan sepeda."
  },
  {
    id: 303,
    grade: 3,
    topic: "Kalimat Saran",
    icon: "fa-lightbulb",
    question: "Adit sering terlambat bangun sehingga terburu-buru ke sekolah. Kalimat saran yang paling tepat untuk Adit adalah...",
    audioText: "Adit sering terlambat bangun sehingga terburu-buru ke sekolah. Kalimat saran yang paling tepat untuk Adit adalah apa?",
    options: [
      "Sebaiknya Adit tidur lebih awal pada malam hari agar tidak kesiangan.",
      "Mengapa Adit selalu bermalas-malasan setiap pagi?",
      "Jangan pernah masuk sekolah lagi Adit!",
      "Biarkan saja Adit bangun sesuka hatinya."
    ],
    answerIndex: 0,
    explanation: "Kalimat saran yang baik disampaikan dengan sopan, sering menggunakan kata 'sebaiknya' atau 'seharusnya', serta memberikan jalan keluar yang bermanfaat."
  },
  {
    id: 304,
    grade: 3,
    topic: "Perubahan Bentuk Awalan me-",
    icon: "fa-spell-check",
    question: "Kata dasar 'sapu' jika diberi awalan 'me-' akan berubah menjadi kata yang berbunyi...",
    audioText: "Kata dasar sapu jika diberi awalan me- akan berubah menjadi kata yang berbunyi apa?",
    options: ["Mesapu", "Mensapu", "Menyapu", "Mengsapu"],
    answerIndex: 2,
    explanation: "Kata yang berawalan huruf 'S' akan melebur menjadi 'meny-' saat mendapat awalan me-, sehingga kata 'sapu' menjadi 'menyapu'."
  },
  {
    id: 305,
    grade: 3,
    topic: "Arah Mata Angin pada Denah",
    icon: "fa-compass",
    question: "Pada gambar denah atau peta lokasi, arah panah yang menunjuk ke bagian atas biasanya menunjukkan arah...",
    audioText: "Pada gambar denah atau peta lokasi, arah panah yang menunjuk ke bagian atas biasanya menunjukkan arah mana?",
    options: ["Selatan", "Timur", "Utara", "Barat"],
    answerIndex: 2,
    explanation: "Standar mata angin pada denah dan peta selalu menempatkan arah Utara di posisi atas, Selatan di bawah, Timur di kanan, dan Barat di kiri."
  },
  {
    id: 306,
    grade: 3,
    topic: "Karakter Tokoh Cerita",
    icon: "fa-masks-theater",
    question: "Dalam sebuah cerita dongeng, tokoh yang memiliki watak baik hati, jujur, dan suka menolong dinamakan tokoh...",
    audioText: "Dalam sebuah cerita dongeng, tokoh yang memiliki watak baik hati, jujur, dan suka menolong dinamakan tokoh apa?",
    options: ["Antagonis", "Protagonis", "Figuran", "Pemberontak"],
    answerIndex: 1,
    explanation: "Tokoh protagonis adalah tokoh utama yang memiliki sifat dan watak terpuji. Sedangkan tokoh antagonis adalah tokoh yang berwatak jahat atau menentang kebaikan."
  },
  {
    id: 307,
    grade: 3,
    topic: "Kalimat Hemat dan Efektif",
    icon: "fa-check-double",
    question: "Pilihlah kalimat di bawah ini yang paling hemat kata dan tidak boros pemakaian kata...",
    audioText: "Pilihlah kalimat di bawah ini yang paling hemat kata dan tidak boros pemakaian kata!",
    options: [
      "Para murid-murid semua sedang berkumpul di halaman.",
      "Semua para siswa saling tolong-menolong bersama.",
      "Para siswa sedang berkumpul di halaman sekolah.",
      "Banyak anak-anak sekalian bergotong-royong bersama."
    ],
    answerIndex: 2,
    explanation: "Kata 'para' sudah bermakna banyak/jamak, sehingga tidak perlu digabung dengan kata ulang 'murid-murid' atau ditambah kata 'semua'. Kalimat yang tepat: 'Para siswa sedang berkumpul di halaman sekolah'."
  },
  {
    id: 308,
    grade: 3,
    topic: "Semboyan dan Lambang",
    icon: "fa-landmark",
    question: "Semboyan persatuan bangsa Indonesia yang dicengkeram oleh kaki Burung Garuda Pancasila adalah...",
    audioText: "Semboyan persatuan bangsa Indonesia yang dicengkeram oleh kaki Burung Garuda Pancasila adalah apa?",
    options: [
      "Tut Wuri Handayani",
      "Bersatu Kita Teguh",
      "Bhinneka Tunggal Ika",
      "Ing Ngarso Sung Tulodo"
    ],
    answerIndex: 2,
    explanation: "'Bhinneka Tunggal Ika' adalah semboyan resmi bangsa Indonesia yang artinya 'Berbeda-beda tetapi tetap satu jua'."
  },
  {
    id: 309,
    grade: 3,
    topic: "Pesan Cerita (Amanat)",
    icon: "fa-book-bookmark",
    question: "Pesan kebaikan atau nasihat hidup yang ingin disampaikan penulis kepada pembaca melalui sebuah cerita disebut...",
    audioText: "Pesan kebaikan atau nasihat hidup yang ingin disampaikan penulis kepada pembaca melalui sebuah cerita disebut apa?",
    options: ["Alur cerita", "Latar tempat", "Amanat", "Daftar pustaka"],
    answerIndex: 2,
    explanation: "Amanat adalah pesan moral atau nilai-nilai kebajikan yang dapat dipetik pembaca setelah menyimak cerita."
  },
  {
    id: 310,
    grade: 3,
    topic: "Penulisan Kata Depan 'di'",
    icon: "fa-pen-to-square",
    question: "Penulisan kata depan 'di' yang menunjukkan tempat yang tepat sesuai aturan ejaan adalah...",
    audioText: "Penulisan kata depan di yang menunjukkan tempat yang tepat sesuai aturan ejaan adalah yang mana?",
    options: ["di perpustakaan", "diperpustakaan", "di-perpustakaan", "DIPERPUSTAKAAN"],
    answerIndex: 0,
    explanation: "Kata depan 'di' yang menunjukkan nama tempat (seperti rumah, sekolah, perpustakaan) ditulis terpisah dengan spasi dari kata tempatnya: 'di perpustakaan'."
  },

  // =========================================================================
  // KELAS 4 SD - FASE B (Ide Pokok, Paragraf Deduktif/Induktif, Wawancara & Kata Baku)
  // =========================================================================
  {
    id: 401,
    grade: 4,
    topic: "Gagasan Utama Paragraf",
    icon: "fa-bullseye",
    question: "Inti permasalahan atau pokok pikiran yang mendasari terbentuknya sebuah paragraf dinamakan...",
    audioText: "Inti permasalahan atau pokok pikiran yang mendasari terbentuknya sebuah paragraf dinamakan apa?",
    options: ["Kalimat penjelas", "Ide pokok atau gagasan pokok", "Kata pengantar", "Daftar isi"],
    answerIndex: 1,
    explanation: "Ide pokok (gagasan utama) adalah pokok bahasan yang menjadi acuan pengembang seluruh kalimat penjelas dalam paragraf."
  },
  {
    id: 402,
    grade: 4,
    topic: "Paragraf Deduktif",
    icon: "fa-arrow-up-wide-short",
    question: "Sebuah paragraf yang gagasan atau kalimat utamanya terletak pada bagian awal paragraf disebut paragraf...",
    audioText: "Sebuah paragraf yang gagasan atau kalimat utamanya terletak pada bagian awal paragraf disebut paragraf apa?",
    options: ["Induktif", "Campuran", "Deduktif", "Naratif"],
    answerIndex: 2,
    explanation: "Paragraf Deduktif memiliki kalimat utama di awal paragraf. Sedangkan paragraf Induktif memiliki kalimat utama di akhir paragraf."
  },
  {
    id: 403,
    grade: 4,
    topic: "Istilah Wawancara",
    icon: "fa-microphone-lines",
    question: "Orang yang dimintai keterangan, informasi, atau pendapat dalam suatu kegiatan wawancara disebut...",
    audioText: "Orang yang dimintai keterangan, informasi, atau pendapat dalam suatu kegiatan wawancara disebut apa?",
    options: ["Pewawancara", "Narasumber", "Notulen", "Penonton"],
    answerIndex: 1,
    explanation: "Narasumber adalah orang yang memberikan jawaban dan informasi terpercaya. Sementara orang yang mengajukan pertanyaan disebut pewawancara."
  },
  {
    id: 404,
    grade: 4,
    topic: "Kata Hubung Sebab Akibat",
    icon: "fa-link",
    question: "Hujan turun sangat deras tanpa henti, ... selokan di depan rumah meluap ke jalan. Kata hubung akibat yang tepat adalah...",
    audioText: "Hujan turun sangat deras tanpa henti, titik-titik selokan di depan rumah meluap ke jalan. Kata hubung akibat yang tepat adalah apa?",
    options: ["meskipun", "sehingga", "tetapi", "padahal"],
    answerIndex: 1,
    explanation: "'Sehingga' merupakan konjungsi (kata hubung) yang menyatakan akibat dari suatu peristiwa hujan deras yang terjadi."
  },
  {
    id: 405,
    grade: 4,
    topic: "Teks Petunjuk (Prosedur)",
    icon: "fa-list-check",
    question: "Teks yang menyajikan tahapan, instruksi, atau langkah-langkah kerja untuk membuat atau menggunakan sesuatu disebut teks...",
    audioText: "Teks yang menyajikan tahapan, instruksi, atau langkah-langkah kerja untuk membuat atau menggunakan sesuatu disebut teks apa?",
    options: ["Deskripsi", "Prosedur atau petunjuk", "Puisi", "Fabel"],
    answerIndex: 1,
    explanation: "Teks petunjuk atau prosedur berisi panduan langkah demi langkah yang berurutan agar pembaca dapat melakukan sesuatu dengan benar."
  },
  {
    id: 406,
    grade: 4,
    topic: "Kosa Kata Baku",
    icon: "fa-book-open",
    question: "Manakah penulisan kata di bawah ini yang merupakan kata baku sesuai Kamus Besar Bahasa Indonesia (KBBI)?",
    audioText: "Manakah penulisan kata di bawah ini yang merupakan kata baku sesuai Kamus Besar Bahasa Indonesia?",
    options: ["Praktik", "Praktek", "Prakteg", "Praktikkan"],
    answerIndex: 0,
    explanation: "Bentuk baku dalam KBBI adalah 'praktik' (dengan huruf i), bukan praktek. Contoh lain: 'apotek' (bukan apotik)."
  },
  {
    id: 407,
    grade: 4,
    topic: "Unsur Puisi (Rima)",
    icon: "fa-music",
    question: "Pengulangan atau keselarasan bunyi akhir yang terdapat pada baris-baris dalam sebuah bait puisi disebut...",
    audioText: "Pengulangan atau keselarasan bunyi akhir yang terdapat pada baris-baris dalam sebuah bait puisi disebut apa?",
    options: ["Bait", "Rima", "Diksi", "Tema"],
    answerIndex: 1,
    explanation: "Rima adalah keindahan bunyi akhir pada baris puisi yang menciptakan irama merdu saat dibacakan."
  },
  {
    id: 408,
    grade: 4,
    topic: "Tanda Kalimat Langsung",
    icon: "fa-quote-left",
    question: "Dalam menuliskan kutipan ucapan langsung tokoh dalam cerita, tanda baca yang wajib mengapit ucapan tersebut adalah...",
    audioText: "Dalam menuliskan kutipan ucapan langsung tokoh dalam cerita, tanda baca yang wajib mengapit ucapan tersebut adalah apa?",
    options: [
      "Tanda kurung ( ( ) )",
      "Tanda petik dua ( \"...\" )",
      "Tanda titik dua ( : )",
      "Tanda garis miring ( / )"
    ],
    answerIndex: 1,
    explanation: "Kalimat langsung yang diucapkan tokoh harus diapit tanda petik dua (\"), contoh: Ibu berkata, \"Jangan lupa membawa payung, Nak.\""
  },
  {
    id: 409,
    grade: 4,
    topic: "Imbuhan me-kan",
    icon: "fa-code-branch",
    question: "Paman ... oleh-oleh buah mangga harum manis untuk kami dari kampung halaman.",
    audioText: "Paman titik-titik oleh-oleh buah mangga harum manis untuk kami dari kampung halaman.",
    options: ["membawakan", "dibawakan", "terbawakan", "berbawakan"],
    answerIndex: 0,
    explanation: "Kata kerja aktif yang sesuai untuk subjek 'Paman' melakukan tindakan memberi adalah 'membawakan'."
  },
  {
    id: 410,
    grade: 4,
    topic: "Antonim Kontekstual",
    icon: "fa-arrows-split-up-and-left",
    question: "Meskipun sudah berusia senja, daya ingat Kakek masih sangat tajam. Lawan kata 'tajam' pada kalimat tersebut adalah...",
    audioText: "Meskipun sudah berusia senja, daya ingat Kakek masih sangat tajam. Lawan kata tajam pada kalimat tersebut adalah apa?",
    options: ["Runcing", "Tumpul", "Jelas", "Kuat"],
    answerIndex: 1,
    explanation: "Lawan kata 'tajam' adalah 'tumpul'. Dalam konteks ingatan, ingatan tajam berarti ingatan yang sangat kuat, lawannya adalah ingatan tumpul/lemah."
  },

  // =========================================================================
  // KELAS 5 SD - FASE C (Pantun, Surat Resmi/Pribadi, Teks Eksplanasi & Peribahasa)
  // =========================================================================
  {
    id: 501,
    grade: 5,
    topic: "Struktur Pantun",
    icon: "fa-scroll",
    question: "Pada pantun empat baris, baris pertama dan baris kedua berfungsi sebagai...",
    audioText: "Pada pantun empat baris, baris pertama dan baris kedua berfungsi sebagai apa?",
    options: ["Isi pantun", "Sampiran", "Kesimpulan", "Penutup pantun"],
    answerIndex: 1,
    explanation: "Struktur pantun terdiri dari 4 baris: baris 1 dan 2 disebut sampiran (pembuka berima), sedangkan baris 3 dan 4 merupakan isi (pesan utama)."
  },
  {
    id: 502,
    grade: 5,
    topic: "Pola Rima Pantun",
    icon: "fa-lines-leaning",
    question: "Pola sajak atau rima akhir yang menjadi ciri khas pantun tradisional Indonesia adalah...",
    audioText: "Pola sajak atau rima akhir yang menjadi ciri khas pantun tradisional Indonesia adalah apa?",
    options: ["a - a - a - a", "a - b - a - b", "a - a - b - b", "b - b - b - b"],
    answerIndex: 1,
    explanation: "Pantun klasik bersajak silang a-b-a-b, di mana bunyi akhir baris pertama selaras dengan baris ketiga, dan baris kedua selaras dengan baris keempat."
  },
  {
    id: 503,
    grade: 5,
    topic: "Makna Imbuhan ter-",
    icon: "fa-wand-magic-sparkles",
    question: "Buku gambar Budi tertinggal di atas meja belajar. Imbuhan 'ter-' pada kata 'tertinggal' menyatakan makna...",
    audioText: "Buku gambar Budi tertinggal di atas meja belajar. Imbuhan ter- pada kata tertinggal menyatakan makna apa?",
    options: ["Tindakan disengaja", "Keadaan tidak disengaja", "Menunjukkan paling unggul", "Sedang berlangsung"],
    answerIndex: 1,
    explanation: "Imbuhan 'ter-' pada kata 'tertinggal' bermakna tindakan yang terjadi secara tidak sengaja atau tanpa disadari."
  },
  {
    id: 504,
    grade: 5,
    topic: "Ciri Surat Resmi",
    icon: "fa-envelope-open-text",
    question: "Bagian penting yang wajib ada pada surat resmi dinas tetapi TIDAK terdapat pada surat pribadi untuk teman adalah...",
    audioText: "Bagian penting yang wajib ada pada surat resmi dinas tetapi tidak terdapat pada surat pribadi untuk teman adalah apa?",
    options: ["Tanggal surat", "Kop surat (Kepala surat)", "Nama penerima", "Salam penutup"],
    answerIndex: 1,
    explanation: "Kop surat (kepala surat) memuat identitas lembaga/sekolah resmi dan nomor kontak, yang hanya digunakan pada surat resmi kedinasan."
  },
  {
    id: 505,
    grade: 5,
    topic: "Makna Peribahasa",
    icon: "fa-brain",
    question: "Peribahasa 'Tong kosong nyaring bunyinya' memiliki makna kiasan yaitu...",
    audioText: "Peribahasa tong kosong nyaring bunyinya memiliki makna kiasan apa?",
    options: [
      "Orang yang banyak bicara biasanya sedikit ilmunya",
      "Orang kaya selalu membagikan hartanya",
      "Wadah seng akan berbunyi keras saat tertiup angin",
      "Orang pendiam pasti tidak memiliki teman"
    ],
    answerIndex: 0,
    explanation: "'Tong kosong nyaring bunyinya' adalah ungkapan kiasan untuk orang yang banyak membual atau membanggakan diri padahal pengetahuannya sedikit."
  },
  {
    id: 506,
    grade: 5,
    topic: "Teks Eksplanasi",
    icon: "fa-cloud-sun-rain",
    question: "Teks nonfiksi yang menguraikan sebab-akibat terjadinya suatu fenomena alam, seperti terjadinya pelangi atau gempa bumi, disebut teks...",
    audioText: "Teks nonfiksi yang menguraikan sebab-akibat terjadinya suatu fenomena alam seperti terjadinya pelangi disebut teks apa?",
    options: ["Eksplanasi", "Fabel", "Biografi", "Cerpen"],
    answerIndex: 0,
    explanation: "Teks eksplanasi adalah teks yang menjelaskan proses pembentukan atau terjadinya fenomena alam, sosial, atau budaya secara ilmiah."
  },
  {
    id: 507,
    grade: 5,
    topic: "Kata Majemuk",
    icon: "fa-cubes",
    question: "Gabungan dua kata dasar yang menghasilkan satu arti baru disebut kata majemuk. Manakah contoh kata majemuk di bawah ini?",
    audioText: "Gabungan dua kata dasar yang menghasilkan satu arti baru disebut kata majemuk. Manakah contoh kata majemuk di bawah ini?",
    options: ["Rumah sakit", "Baju merah", "Meja bundar", "Buku tebal"],
    answerIndex: 0,
    explanation: "'Rumah sakit' adalah kata majemuk karena membentuk makna baru (tempat berobat), bukan sekadar rumah yang sedang sakit."
  },
  {
    id: 508,
    grade: 5,
    topic: "Sinonim Kata Formal",
    icon: "fa-book-atlas",
    question: "Sekolah sedang menggalakkan kegiatan gerakan literasi membaca buku. Sinonim kata 'menggalakkan' yang paling tepat adalah...",
    audioText: "Sekolah sedang menggalakkan kegiatan gerakan literasi membaca buku. Sinonim kata menggalakkan yang paling tepat adalah apa?",
    options: ["Menghentikan", "Menggiatkan", "Menunda", "Melarang"],
    answerIndex: 1,
    explanation: "Menggalakkan memiliki arti menggiatkan, membangkitkan semangat, atau mendorong pelaksanaan suatu kegiatan agar lebih semarak."
  },
  {
    id: 509,
    grade: 5,
    topic: "Makna Awalan pe-",
    icon: "fa-user-pen",
    question: "Kata dasar 'lukis' jika diberi awalan 'pe-' berubah menjadi 'pelukis'. Makna kata 'pelukis' adalah...",
    audioText: "Kata dasar lukis jika diberi awalan pe- berubah menjadi pelukis. Makna kata pelukis adalah apa?",
    options: ["Alat untuk melukis", "Orang yang pekerjaannya melukis", "Tempat menjual lukisan", "Hasil dari karya lukisan"],
    answerIndex: 1,
    explanation: "Awalan pe- pada kata 'pelukis' bermakna pelaku atau orang yang gemar dan bekerja di bidang membuat lukisan."
  },
  {
    id: 510,
    grade: 5,
    topic: "Ringkasan Teks",
    icon: "fa-compress",
    question: "Menyajikan intisari suatu karangan atau bacaan panjang menjadi bentuk yang lebih ringkas dan padat tanpa mengubah isi pokoknya disebut kegiatan...",
    audioText: "Menyajikan intisari suatu karangan atau bacaan panjang menjadi bentuk yang lebih ringkas dan padat tanpa mengubah isi pokoknya disebut apa?",
    options: ["Meringkas", "Mengarang", "Mendongeng", "Mendikte"],
    answerIndex: 0,
    explanation: "Meringkas (membuat rangkuman) adalah menyajikan teks secara padat dan singkat dengan tetap mempertahankan gagasan pokok teks asli."
  },

  // =========================================================================
  // KELAS 6 SD - FASE C (Pidato, Teks Laporan, Formulir, Majas & Ejaan Baku)
  // =========================================================================
  {
    id: 601,
    grade: 6,
    topic: "Struktur Pidato",
    icon: "fa-bullhorn",
    question: "Kalimat: 'Marilah kita panjatkan puji dan syukur ke hadirat Tuhan Yang Maha Kuasa atas rahmat dan karunia-Nya...' Kalimat tersebut terdapat pada bagian...",
    audioText: "Kalimat marilah kita panjatkan puji dan syukur ke hadirat Tuhan Yang Maha Kuasa, termasuk dalam bagian pidato yang mana?",
    options: ["Salam penutup pidato", "Pembukaan pidato", "Isi utama pidato", "Pemberian simpulan"],
    answerIndex: 1,
    explanation: "Kalimat rasa syukur dan salam penghormatan kepada hadirin selalu ditempatkan pada bagian pembukaan sebuah pidato."
  },
  {
    id: 602,
    grade: 6,
    topic: "Teks Laporan Pengamatan",
    icon: "fa-clipboard-check",
    question: "Informasi yang disajikan di dalam teks laporan hasil pengamatan (investigasi) harus memiliki sifat...",
    audioText: "Informasi yang disajikan di dalam teks laporan hasil pengamatan harus memiliki sifat apa?",
    options: [
      "Imajinatif dan karangan bebas",
      "Objektif dan sesuai fakta yang diamati",
      "Berdasarkan kabar angin tanpa bukti",
      "Mengandung unsur lelucon semata"
    ],
    answerIndex: 1,
    explanation: "Laporan hasil pengamatan harus faktual dan objektif, artinya ditulis sesuai kenyataan dan bukti nyata yang disaksikan saat pengamatan."
  },
  {
    id: 603,
    grade: 6,
    topic: "Pengisian Formulir Pendaftaran",
    icon: "fa-id-card",
    question: "Saat mengisi formulir pendaftaran anggota perpustakaan, format penulisan tanggal lahir yang tepat dan resmi adalah...",
    audioText: "Saat mengisi formulir pendaftaran anggota perpustakaan, format penulisan tanggal lahir yang tepat dan resmi adalah seperti apa?",
    options: [
      "14 Agustus 2013",
      "14 / Bln Delapan / Tiga Belas",
      "Empat belas Agustus tahun lalu",
      "14-delapan-tigabelas"
    ],
    answerIndex: 0,
    explanation: "Pengisian formulir resmi menuntut ketepatan data dengan angka tanggal, nama bulan yang lengkap, dan tahun yang jelas (contoh: 14 Agustus 2013)."
  },
  {
    id: 604,
    grade: 6,
    topic: "Mengenal Majas Personifikasi",
    icon: "fa-wind",
    question: "Gaya bahasa yang melukiskan benda mati seolah-olah memiliki nyawa atau dapat berperilaku seperti manusia dinamakan majas...",
    audioText: "Gaya bahasa yang melukiskan benda mati seolah-olah memiliki nyawa atau dapat berperilaku seperti manusia dinamakan majas apa?",
    options: ["Hiperbola", "Metafora", "Personifikasi", "Litotes"],
    answerIndex: 2,
    explanation: "Majas personifikasi melekatkan sifat manusia pada benda mati. Contohnya: 'Pena itu menari-nari di atas lembaran kertas putih'."
  },
  {
    id: 605,
    grade: 6,
    topic: "Contoh Majas Personifikasi",
    icon: "fa-tree",
    question: "Di antara pilihan kalimat berikut, manakah yang mengandung majas personifikasi?",
    audioText: "Di antara pilihan kalimat berikut, manakah yang mengandung majas personifikasi?",
    options: [
      "Suaranya menggelegar membelah angkasa raya.",
      "Daun-daun kelapa di tepi pantai melambai-lambai memanggil senja.",
      "Wajahnya cantik laksana rembulan di malam purnama.",
      "Kakak bekerja banting tulang demi keluarga tercinta."
    ],
    answerIndex: 1,
    explanation: "Daun kelapa (benda mati) diibaratkan bisa 'melambai-lambai memanggil' seperti tindakan manusia, maka kalimat tersebut bermajas personifikasi."
  },
  {
    id: 606,
    grade: 6,
    topic: "Kalimat Baku dan Efektif",
    icon: "fa-circle-check",
    question: "Pilihlah kalimat yang memenuhi standar ejaan baku dan kaidah kalimat efektif berikut ini...",
    audioText: "Pilihlah kalimat yang memenuhi standar ejaan baku dan kaidah kalimat efektif berikut ini!",
    options: [
      "Kepada para bapak-bapak dan ibu-ibu semua dimohon untuk segera memasuki ruangan.",
      "Bapak dan Ibu hadirin dimohon segera memasuki ruangan rapat.",
      "Semua para peserta-peserta harap datang berkumpul.",
      "Bagi seluruh para hadirin-hadirin sekalian dipersilakan duduk."
    ],
    answerIndex: 1,
    explanation: "Kalimat efektif menghindari pengulangan kata jamak yang berlebihan ('para bapak-bapak dan ibu-ibu semua'). Pilihan yang benar dan lugas adalah 'Bapak dan Ibu hadirin dimohon segera memasuki ruangan rapat'."
  },
  {
    id: 607,
    grade: 6,
    topic: "Makna Ungkapan (Idiom)",
    icon: "fa-glasses",
    question: "Dimas dijuluki teman-temannya sebagai 'kutu buku' di sekolah. Makna kiasan dari ungkapan 'kutu buku' adalah...",
    audioText: "Dimas dijuluki teman-temannya sebagai kutu buku di sekolah. Makna kiasan dari ungkapan kutu buku adalah apa?",
    options: [
      "Orang yang rambutnya memiliki kutu",
      "Orang yang sangat gemar membaca dan menelaah buku",
      "Orang yang suka mengoleksi buku antik",
      "Orang yang gemar menjual buku pelajaran"
    ],
    answerIndex: 1,
    explanation: "'Kutu buku' adalah ungkapan positif untuk orang yang sangat rajin, tekun, dan hobi membaca berbagai macam buku pengetahuan."
  },
  {
    id: 608,
    grade: 6,
    topic: "Deretan Kosa Kata Baku KBBI",
    icon: "fa-spell-check",
    question: "Kelompok kata di bawah ini yang SELURUHNYA merupakan kosa kata baku bahasa Indonesia adalah...",
    audioText: "Kelompok kata di bawah ini yang seluruhnya merupakan kosa kata baku bahasa Indonesia adalah kelompok yang mana?",
    options: [
      "Jadwal, Izin, Kualitas",
      "Jadual, Ijin, Kwalitas",
      "Jadwal, Ijin, Kwalitet",
      "Jadual, Izin, Kualitas"
    ],
    answerIndex: 0,
    explanation: "Kata baku yang sah dalam KBBI adalah 'Jadwal' (bukan jadual), 'Izin' (bukan ijin dengan j), dan 'Kualitas' (bukan kwalitas)."
  },
  {
    id: 609,
    grade: 6,
    topic: "Menarik Kesimpulan Bacaan",
    icon: "fa-magnifying-glass-chart",
    question: "Langkah pertama yang paling tepat untuk menarik kesimpulan yang benar dari sebuah teks bacaan adalah...",
    audioText: "Langkah pertama yang paling tepat untuk menarik kesimpulan yang benar dari sebuah teks bacaan adalah apa?",
    options: [
      "Menghitung jumlah halaman bacaan",
      "Membaca seluruh teks dengan cermat dan memahami ide pokok setiap paragraf",
      "Menyalin kalimat terakhir pada paragraf penutup saja",
      "Mengganti judul teks dengan kalimat sendiri"
    ],
    answerIndex: 1,
    explanation: "Kesimpulan yang akurat lahir dari pemahaman menyeluruh terhadap seluruh bacaan dan keterkaitan ide pokok antarparagraf."
  },
  {
    id: 610,
    grade: 6,
    topic: "Antonim Makna Kata",
    icon: "fa-scale-balanced",
    question: "Desa Sukamaju menjadi desa yang makmur berkat hasil panen padi yang melimpah. Antonim dari kata 'makmur' adalah...",
    audioText: "Desa Sukamaju menjadi desa yang makmur berkat hasil panen padi yang melimpah. Antonim dari kata makmur adalah apa?",
    options: ["Subur", "Maju", "Miskin atau melarat", "Damai"],
    answerIndex: 2,
    explanation: "Makmur berarti serba berkecukupan dan sejahtera. Lawan kata (antonim) dari makmur adalah miskin atau melarat."
  }
];

