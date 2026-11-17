/**
 * Bank Soal Kuis Seni Teater SD - Petualangan Bintang Panggung
 * Struktur:
 * - 6 Tingkatan Kelas (Kelas 1 sampai 6)
 * - Masing-masing kelas tepat 10 butir soal (Total 60 soal)
 * - Sesuai dengan materi & Kurikulum Merdeka Seni Teater SD Indonesia
 * - Jawaban tidak diletakkan di dalam teks soal / pilihan ganda
 * - Pilihan jawaban A, B, C, D yang mendidik dengan pengecoh relevan
 * - Setiap butir soal dilengkapi topik materi dan koreksi/penjelasan edukatif ramah anak
 */

const QuizDatabase = {
  // Informasi Tingkatan Kelas 1 sampai 6
  grades: [
    {
      id: 1,
      title: "Kelas 1 SD",
      subtitle: "Ekspresi Wajah, Suara & Gerak Ceria",
      iconKey: "class1MimikWajah",
      badgeColor: "amber",
      description: "Mengenal mimik wajah gembira/sedih, menirukan suara hewan & alam, bermain peran profesi, dan sopan santun panggung.",
      questionCount: 10
    },
    {
      id: 2,
      title: "Kelas 2 SD",
      subtitle: "Pantomim, Karakter Fabel & Topeng",
      iconKey: "class2PantomimTopeng",
      badgeColor: "emerald",
      description: "Mengenal seni gerak pantomim tanpa suara, watak tokoh fabel, penggunaan properti, kostum, dan topeng karakter sederhana.",
      questionCount: 10
    },
    {
      id: 3,
      title: "Kelas 3 SD",
      subtitle: "Dialog, Cerita Rakyat & Boneka Tangan",
      iconKey: "class3BonekaTangan",
      badgeColor: "sky",
      description: "Melatih kejelasan vokal & intonasi dialog, tokoh protagonis vs antagonis, teater boneka, dan dongeng cerita rakyat nusantara.",
      questionCount: 10
    },
    {
      id: 4,
      title: "Kelas 4 SD",
      subtitle: "Teater Tradisional & Naskah Drama",
      iconKey: "class4TeaterTradisional",
      badgeColor: "purple",
      description: "Mengenal Lenong, Ketoprak, Randai, unsur naskah drama, tugas sutradara, tata blocking panggung, dan lampu sorot.",
      questionCount: 10
    },
    {
      id: 5,
      title: "Kelas 5 SD",
      subtitle: "Alur Cerita, Olah Tubuh & Tata Panggung",
      iconKey: "class5TataPanggung",
      badgeColor: "rose",
      description: "Menganalisis konflik & klimaks alur cerita, pernapasan diafragma, penghayatan rasa (olah rasa), dan improvisasi panggung.",
      questionCount: 10
    },
    {
      id: 6,
      title: "Kelas 6 SD",
      subtitle: "Pementasan Mandiri & Apresiasi Teater",
      iconKey: "class6PentasPanggung",
      badgeColor: "indigo",
      description: "Manajemen panggung (stage manager), teater musikal, tokoh tritagonis, etika menonton, dan evaluasi artistik pementasan.",
      questionCount: 10
    }
  ],

  // Kumpulan 60 Butir Soal Orisinal & Edukatif (10 Soal per Kelas)
  questions: {
    // =========================================================================
    // KELAS 1 SD (10 SOAL)
    // =========================================================================
    1: [
      {
        id: "k1-01",
        topic: "Ekspresi Wajah (Mimik)",
        question: "Ketika seorang pemeran teater mendapat hadiah kejutan ulang tahun di atas panggung, bentuk bibir dan matanya sebaiknya menunjukkan ekspresi...",
        options: [
          "Tersenyum lebar dengan mata berbinar riang",
          "Mengernyitkan kening dengan cemberut",
          "Menunduk lesu sambil menangis tersedu",
          "Menutup wajah sambil menggigil ketakutan"
        ],
        answerIndex: 0,
        explanation: "Saat tokoh merasa bahagia atau mendapat kejutan menyenangkan, mimik wajah yang tepat adalah tersenyum riang dengan mata berbinar ceria agar penonton ikut merasakan kegembiraannya."
      },
      {
        id: "k1-02",
        topic: "Gerak Hewan",
        question: "Jika kamu diminta memerankan seekor burung elang yang sedang terbang mengelilingi angkasa, gerakan kedua tanganmu yang tepat adalah...",
        options: [
          "Ditaruh di pinggang sambil melompat kecil",
          "Direntangkan lurus ke samping lalu dikepakkan perlahan",
          "Dirapatkan ke dada sambil merangkak di lantai",
          "Ditepuk keras di atas kepala berulang kali"
        ],
        answerIndex: 1,
        explanation: "Sayap burung elang sangat lebar dan terbang melayang anggun di angkasa, sehingga tangan direntangkan ke samping lalu diayun perlahan menyerupai sayap burung."
      },
      {
        id: "k1-03",
        topic: "Bunyi Suara Alam",
        question: "Dalam sandiwara tentang suasana tepi laut, pemeran dapat menirukan suara desiran ombak yang menerpa karang dengan bunyi...",
        options: [
          "Kring... kring... kring...",
          "Meong... meong... meong...",
          "Tok... tok... tok...",
          "Syuuuu... syuuush..."
        ],
        answerIndex: 3,
        explanation: "Suara deburan dan desiran ombak air laut menyerupai bunyi gesekan angin dan air 'syuuu... syuuush', sedangkan bunyi 'kring' adalah bel sepeda dan 'meong' adalah suara kucing."
      },
      {
        id: "k1-04",
        topic: "Tata Krama Panggung",
        question: "Setelah selesai membawakan drama singkat di depan kelas bersama kelompok, sikap yang baik kepada penonton adalah...",
        options: [
          "Berdiri tegak bersama teman lalu membungkuk memberi hormat dengan sopan",
          "Langsung berlari kencang menuju pintu keluar kelas",
          "Menunjuk teman di sebelah sambil tertawa mengejek",
          "Bersembunyi di balik lemari kelas karena malu"
        ],
        answerIndex: 0,
        explanation: "Membungkuk memberi hormat bersama kelompok setelah pementasan adalah tanda terima kasih dan rasa hormat yang santun kepada penonton yang telah menyaksikan pertunjukan."
      },
      {
        id: "k1-05",
        topic: "Meniru Profesi",
        question: "Ketika memerankan seorang koki cilik yang sedang memasak di dapur panggung, gerakan tangan yang paling menggambarkan perannya adalah...",
        options: [
          "Pura-pura memegang stetoskop memeriksa dada pasien",
          "Pura-pura memegang gagang wajan dan mengaduk masakan",
          "Memegang setir mobil sambil membunyikan klakson",
          "Mengayunkan sapu lidi di halaman rumah"
        ],
        answerIndex: 1,
        explanation: "Koki bekerja mengolah masakan di dapur dengan wajan, spatula, dan panci, sehingga gerak memegang wajan dan mengaduk makanan sangat mencerminkan profesi koki."
      },
      {
        id: "k1-06",
        topic: "Suara Vokal",
        question: "Saat berbicara di panggung sandiwara kelas agar semua teman di bangku paling belakang dapat mendengar ceritamu, suaramu harus...",
        options: [
          "Berbisik sangat pelan agar rahasia tidak bocor",
          "Menggumam tanpa membuka mulut lebar-lebar",
          "Jelas, lantang, dan tidak berteriak",
          "Sangat cepat sampai kata-katanya bertumpuk"
        ],
        answerIndex: 2,
        explanation: "Suara pemain teater harus jelas dan berintonasi lantang teratur sehingga terdengar sampai ke penonton terjauh, namun tetap dijaga agar tidak berteriak kasar."
      },
      {
        id: "k1-07",
        topic: "Mengenal Panggung",
        question: "Tempat khusus di depan kelas atau gedung tempat para pemain menampilkan pertunjukan sandiwara disebut...",
        options: [
          "Panggung pertunjukan",
          "Ruang UKS sekolah",
          "Lapangan parkir kendaraan",
          "Ruang perpustakaan baca"
        ],
        answerIndex: 0,
        explanation: "Panggung adalah area utama di mana para aktor membawakan adegan drama dan disaksikan secara langsung oleh para penonton."
      },
      {
        id: "k1-08",
        topic: "Gerak Tumbuhan",
        question: "Bila kamu berperan menjadi sebatang pohon kelapa ditiup angin sepoi-sepoi yang lembut, gerakan tubuhmu sebaiknya...",
        options: [
          "Berlari kencang memutari ruang kelas",
          "Berdiri di tempat sambil meliuk-liukkan badan ke kiri dan kanan dengan gemulai",
          "Berguling-guling cepat di atas karpet",
          "Melompat-lompat tinggi dengan kedua kaki"
        ],
        answerIndex: 1,
        explanation: "Pohon memiliki akar yang tertancap di tanah sehingga posisinya diam di tempat, lalu batang dan ranting daunnya meliuk-liuk lembut mengikuti hembusan angin."
      },
      {
        id: "k1-09",
        topic: "Kerja Sama Tim",
        question: "Dalam bermain teater bersama teman-teman sekelas, hal utama yang membuat pertunjukan berjalan lancar dan indah adalah...",
        options: [
          "Ingin berbicara paling banyak sendirian tanpa memberi giliran teman",
          "Saling mendukung, kompak, dan menghafal giliran bicara",
          "Mendorong teman agar kita berdiri paling depan",
          "Menertawakan teman yang lupa sedikit kata"
        ],
        answerIndex: 1,
        explanation: "Teater adalah seni kerja sama kelompok. Pementasan akan sukses jika semua pemain kompak, saling menolong, dan tertib menunggu giliran bicara masing-masing."
      },
      {
        id: "k1-10",
        topic: "Ekspresi Sedih",
        question: "Saat memerankan anak kelinci yang terpisah dari induknya di hutan lebat, ekspresi wajah (mimik) yang tepat digambarkan adalah...",
        options: [
          "Sudut bibir melengkung ke bawah dan tatapan mata tampak murung",
          "Tertawa terbahak-bahak sambil melompat gembira",
          "Mengedipkan satu mata sambil tersenyum bangga",
          "Wajah datar tanpa perubahan ekspresi sama sekali"
        ],
        answerIndex: 0,
        explanation: "Rasa sedih atau bingung ditandai dengan sudut bibir yang menurun, mata redup atau berkaca-kaca, serta ekspresi wajah murung memelas."
      }
    ],

    // =========================================================================
    // KELAS 2 SD (10 SOAL)
    // =========================================================================
    2: [
      {
        id: "k2-01",
        topic: "Gerak Pantomim",
        question: "Pertunjukan seni peran di mana sang pemain bercerita hanya menggunakan gerak tubuh serta mimik wajah tanpa mengeluarkan suara kata disebut...",
        options: [
          "Pantomim",
          "Paduan suara vokal",
          "Pidato kenegaraan",
          "Opera musikal klasik"
        ],
        answerIndex: 0,
        explanation: "Pantomim adalah bentuk pertunjukan teater sunyi di mana aktor hanya mengandalkan kelenturan gerak tubuh, isyarat tangan, dan ekspresi wajah tanpa dialog suara."
      },
      {
        id: "k2-02",
        topic: "Teknik Pantomim",
        question: "Ketika seorang pemain pantomim berpura-pura sedang menarik seutas tali tambang yang sangat berat di panggung, sikap tubuhnya yang benar adalah...",
        options: [
          "Kedua tangan menggenggam ke depan, badan condong ke belakang dengan otot tegang",
          "Berjalan santai ke depan sambil melambaikan tangan",
          "Tidur telentang di lantai panggung sambil tersenyum riang",
          "Kedua tangan diangkat ke atas sambil melompat ringan"
        ],
        answerIndex: 0,
        explanation: "Dalam pantomim, beratnya beban tali diperlihatkan dengan genggaman tangan kuat, tubuh condong berlawanan arah beban ke belakang, dan ekspresi wajah mengerahkan tenaga."
      },
      {
        id: "k2-03",
        topic: "Properti Panggung",
        question: "Benda perlengkapan yang dipegang atau digunakan oleh pemain teater di panggung untuk memperkuat watak perannya dinamakan...",
        options: [
          "Lampu panggung",
          "Sound system",
          "Properti",
          "Tiket masuk"
        ],
        answerIndex: 2,
        explanation: "Properti adalah benda-benda pendukung yang digunakan aktor saat berakting, seperti cangkir, tongkat, keranjang, payung, atau pedang tiruan."
      },
      {
        id: "k2-04",
        topic: "Kostum Karakter",
        question: "Jika seorang siswa mendapat peran sebagai ksatria kerajaan zaman dahulu, pakaian atau perlengkapan yang paling sesuai dikenakannya adalah...",
        options: [
          "Baju renang dan kacamata selam karet",
          "Jas dokter putih lengkap dengan stetoskop",
          "Celemek masak bermotif bunga merah jambu",
          "Baju jubah ksatria dan mahkota atau helm pelindung"
        ],
        answerIndex: 3,
        explanation: "Kostum harus sesuai dengan latar waktu dan profesi tokoh. Ksatria kerajaan mengenakan jubah kebesaran, pelindung dada, atau mahkota ksatria gagah."
      },
      {
        id: "k2-05",
        topic: "Watak Tokoh Fabel",
        question: "Dalam fabel kancil dan buaya, pemeran tokoh Si Kancil sebaiknya menampilkan gerak-gerik yang mencerminkan watak...",
        options: [
          "Lambat, mengantuk, dan malas bergerak",
          "Lincah, waspada, dan cerdik",
          "Sangat galak sambil mengaum keras",
          "Menakutkan dan berbadan sangat kaku"
        ],
        answerIndex: 1,
        explanation: "Dalam fabel nusantara, Kancil digambarkan sebagai hewan kecil yang cerdik, berpikir cepat, gesit, dan selalu waspada terhadap bahaya di sekitarnya."
      },
      {
        id: "k2-06",
        topic: "Arah Hadap Aktor",
        question: "Aturan dasar penting bagi seorang pemain saat membawakan adegan di panggung teater adalah...",
        options: [
          "Menghadap ke dinding belakang panggung sepanjang waktu",
          "Tetap membuka tubuh ke arah penonton dan tidak membelakangi penonton",
          "Terus menatap ke lantai panggung tanpa melihat siapa pun",
          "Menutup mata rapat-rapat selama sandiwara berlangsung"
        ],
        answerIndex: 1,
        explanation: "Pemain teater harus selalu menjaga tubuh terbuka (open position) ke arah penonton agar ekspresi wajah, ucapan, dan gerak tubuhnya terlihat jelas oleh penonton."
      },
      {
        id: "k2-07",
        topic: "Topeng Teater",
        question: "Benda tiruan wajah manusia atau hewan berbahan kertas atau kayu yang dipasang menutupi wajah pemain untuk menggambarkan karakter tertentu dinamakan...",
        options: [
          "Topeng",
          "Sorban kepala",
          "Sepatu bot",
          "Tirai panggung"
        ],
        answerIndex: 0,
        explanation: "Topeng adalah media seni pertunjukan yang dipakai di wajah untuk langsung mengubah rupa dan watak pemain menjadi karakter tokoh yang dibawakan."
      },
      {
        id: "k2-08",
        topic: "Konsentrasi Panggung",
        question: "Jika saat tampil di panggung ada penonton yang tertawa atau bersorak, sikap seorang pemain teater yang baik adalah...",
        options: [
          "Berhenti berakting lalu ikut tertawa bersama penonton",
          "Marah-marah kepada penonton yang bersorak",
          "Tetap fokus pada peran dan terus melanjutkan adegan tanpa terganggu",
          "Langsung kabur ke balik tirai panggung"
        ],
        answerIndex: 2,
        explanation: "Konsentrasi adalah kunci akting. Seorang aktor sejati tetap tenang menghidupkan karakternya tanpa terpengaruh oleh kebisingan atau sorak tawa penonton."
      },
      {
        id: "k2-09",
        topic: "Karakter Suara",
        question: "Ketika mendapat peran menjadi seorang raksasa berbadan besar di sebuah dongeng, cara mengucapkan dialog yang tepat adalah dengan suara...",
        options: [
          "Melengking kecil seperti cicitan anak tikus",
          "Berat, bervolume besar, dan berwibawa",
          "Berbisik sangat halus dan manja",
          "Pura-pura batuk tanpa mengeluarkan kata"
        ],
        answerIndex: 1,
        explanation: "Karakter bertubuh besar dan berwibawa seperti raksasa atau raja besar membutuhkan warna suara berat (bass), tebal, dan bervolume mantap."
      },
      {
        id: "k2-10",
        topic: "Pemanasan Olah Tubuh",
        question: "Sebelum pentas teater dimulai, para pemeran melakukan peregangan tubuh dan senam wajah. Kegiatan ini bertujuan untuk...",
        options: [
          "Melemaskan otot-otot tubuh dan wajah agar tidak kaku saat berakting",
          "Membuat tubuh menjadi lelah sebelum pertunjukan",
          "Mengubah warna kulit pemain menjadi lebih cerah",
          "Mengurangi tinggi badan pemain di panggung"
        ],
        answerIndex: 0,
        explanation: "Pemanasan melenturkan persendian, melemaskan otot rahang dan bibir, serta melancarkan pernapasan sehingga pemain siap bergerak luwes dan berdialog lancar."
      }
    ],

    // =========================================================================
    // KELAS 3 SD (10 SOAL)
    // =========================================================================
    3: [
      {
        id: "k3-01",
        topic: "Artikulasi Vokal",
        question: "Kejelasan seorang aktor dalam mengucapkan bunyi huruf, kata, dan suku kata sehingga dialog terdengar sangat terang oleh penonton dinamakan...",
        options: [
          "Dekorasi",
          "Artikulasi",
          "Improvisasi",
          "Kostumisasi"
        ],
        answerIndex: 1,
        explanation: "Artikulasi adalah ketepatan dan kejelasan pelafalan kata demi kata dengan membuka mulut secara benar sehingga penonton memahami setiap kalimat dialog."
      },
      {
        id: "k3-02",
        topic: "Penokohan Protagonis",
        question: "Dalam sebuah lakon teater anak, tokoh utama yang memiliki sifat terpuji, suka menolong, dan berbudi pekerti luhur disebut tokoh...",
        options: [
          "Protagonis",
          "Antagonis",
          "Figuran",
          "Sutradara"
        ],
        answerIndex: 0,
        explanation: "Protagonis adalah sebutan untuk tokoh utama yang membawa nilai-nilai kebaikan, kejujuran, dan kebenaran dalam jalannya cerita sandiwara."
      },
      {
        id: "k3-03",
        topic: "Penokohan Antagonis",
        question: "Tokoh dalam pertunjukan teater yang menjadi penentang tokoh utama dan biasanya berwatak jahat, iri, atau sombong dinamakan tokoh...",
        options: [
          "Protagonis",
          "Antagonis",
          "Konduktor",
          "Narator"
        ],
        answerIndex: 1,
        explanation: "Antagonis adalah tokoh lawan yang memicu konflik atau kesulitan bagi protagonis, biasanya digambarkan berwatak curang, sombong, atau jahat."
      },
      {
        id: "k3-04",
        topic: "Teater Boneka",
        question: "Bentuk pertunjukan teater di mana cerita dimainkan oleh boneka yang digerakkan oleh tangan manusia dari balik layar panggung disebut...",
        options: [
          "Lomba lari estafet",
          "Konser piano tunggal",
          "Teater boneka (puppet show)",
          "Pertunjukan sulap kartu"
        ],
        answerIndex: 2,
        explanation: "Teater boneka mengandalkan kepiawaian dalang menggerakkan boneka tangan, tali, atau tongkat sekaligus mengubah-ubah suara untuk menghidupkan aneka karakter."
      },
      {
        id: "k3-05",
        topic: "Intonasi Dialog",
        question: "Tinggi rendahnya nada suara saat mengucapkan kalimat dialog untuk menggambarkan suasana perasaan marah, bertanya, atau gembira disebut...",
        options: [
          "Intonasi",
          "Tipografi",
          "Koreografi",
          "Asimilasi"
        ],
        answerIndex: 0,
        explanation: "Intonasi adalah lagu kalimat (tinggi rendahnya nada). Intonasi membuat percakapan terdengar hidup, emosional, dan tidak datar seperti membaca buku biasa."
      },
      {
        id: "k3-06",
        topic: "Cerita Rakyat",
        question: "Dalam dongeng cerita rakyat Timun Mas, benda-benda ajaib yang dilemparkan oleh Timun Mas untuk menyelamatkan diri dari kejaran raksasa adalah...",
        options: [
          "Biji mentimun, jarum, garam, dan terasi",
          "Uang koin emas, pisau dapur, dan perahu kertas",
          "Bunga mawar, selendang sutra, dan minyak wangi",
          "Buku cerita, pensil warna, dan penghapus karet"
        ],
        answerIndex: 0,
        explanation: "Dalam cerita rakyat Timun Mas, sang ibu membekali empat bungkusan sakti: biji mentimun (jadi ladang timun), jarum (hutan bambu), garam (lautan luas), dan terasi (lautan lumpur)."
      },
      {
        id: "k3-07",
        topic: "Tugas Narator",
        question: "Orang yang bertugas membacakan narasi pengantar cerita atau menjelaskan suasana babak tanpa ikut menjadi tokoh dalam adegan disebut...",
        options: [
          "Penata lampu",
          "Narator",
          "Produser film",
          "Wasit pertandingan"
        ],
        answerIndex: 1,
        explanation: "Narator bertugas menceritakan latar belakang tempat, waktu, dan pengantar kisah agar penonton memahami alur adegan yang akan ditampilkan para pemain."
      },
      {
        id: "k3-08",
        topic: "Mimik Wajah Marah",
        question: "Ketika seorang tokoh sedang sangat murka karena kebohongannya terbongkar, mimik wajah yang tampak di panggung adalah...",
        options: [
          "Mata terpejam sayu sambil tersenyum manis",
          "Alis mata bertaut menukik tajam, mata melotot, dan rahang mengeras",
          "Pipi digembungkan sambil tertawa riang",
          "Wajah menunduk malu-malu dengan senyum simpul"
        ],
        answerIndex: 1,
        explanation: "Ekspresi marah di atas panggung diwujudkan lewat ketegangan otot wajah: alis meruncing ke bawah, pandangan tajam melotot, dan bibir terkatup kencang."
      },
      {
        id: "k3-09",
        topic: "Latihan Vokal Vokal",
        question: "Latihan melafalkan bunyi vokal 'A - I - U - E - O' dengan membuka rongga mulut secara sempurna sebelum pementasan teater bertujuan untuk...",
        options: [
          "Mempercepat pemain dalam menghafal kostum",
          "Melatih kelenturan bibir, rahang, dan ketepatan vokal suara pemain",
          "Mengganti naskah cerita yang sudah disusun",
          "Melatih kecepatan berlari di atas panggung"
        ],
        answerIndex: 1,
        explanation: "Senam vokal A-I-U-E-O melatih otot rongga mulut, lidah, dan rahang agar artikulasi kata yang diucapkan pemain saat pentas menjadi fasih dan jelas."
      },
      {
        id: "k3-10",
        topic: "Tata Suara Suasana",
        question: "Jika dalam naskah tertulis adegan di tengah hutan malam yang sunyi dan mencekam, tata suara yang paling cocok mengiringinya adalah bunyi...",
        options: [
          "Suara deru klakson bus dan keramaian pasar malam",
          "Lagu mars perjuangan bersemangat tempo cepat",
          "Desau angin malam, jangkrik, dan suara burung hantu",
          "Suara lonceng istana pesta dansa yang megah"
        ],
        answerIndex: 2,
        explanation: "Ilustrasi musik dan efek bunyi (sound effect) hutan malam diciptakan dari gemersik angin, derik jangkrik, dan kokok burung hantu untuk membangun suasana misterius."
      }
    ],

    // =========================================================================
    // KELAS 4 SD (10 SOAL)
    // =========================================================================
    4: [
      {
        id: "k4-01",
        topic: "Teater Tradisional Betawi",
        question: "Kesenian teater tradisional dari daerah Betawi (Jakarta) yang diiringi musik gambang kromong dan terkenal dengan dialog jenakanya yang spontan adalah...",
        options: [
          "Lenong",
          "Ludruk",
          "Ketoprak",
          "Makyong"
        ],
        answerIndex: 0,
        explanation: "Lenong adalah seni teater rakyat Betawi yang diiringi alunan gambang kromong, dibawakan dengan lelucon cerdas, pantun jenaka, dan pesan moral kemasyarakatan."
      },
      {
        id: "k4-02",
        topic: "Teater Tradisional Jawa",
        question: "Pertunjukan teater tradisional dari Jawa Tengah dan Yogyakarta yang mengangkat kisah babad sejarah kerajaan atau legenda Jawa kuno disebut...",
        options: [
          "Ketoprak",
          "Lenong",
          "Randai",
          "Tarling"
        ],
        answerIndex: 0,
        explanation: "Ketoprak merupakan sandiwara rakyat Jawa yang mengangkat cerita sejarah, legenda, atau babad kepahlawanan dengan busana tradisional dan bahasa Jawa yang anggun."
      },
      {
        id: "k4-03",
        topic: "Naskah Drama",
        question: "Teks tertulis yang memuat alur cerita, nama-nama tokoh, rangkaian dialog percakapan, serta petunjuk laku para pemeran dinamakan...",
        options: [
          "Daftar menu makanan restoran",
          "Naskah atau skenario drama",
          "Kamus bahasa daerah nusantara",
          "Lembar absensi harian kelas"
        ],
        answerIndex: 1,
        explanation: "Naskah drama adalah buku panduan utama pementasan yang berisi cerita utuh, babak adegan, dialog para tokoh, serta catatan gerak dan emosi karakter."
      },
      {
        id: "k4-04",
        topic: "Peran Sutradara",
        question: "Orang yang memimpin jalannya latihan, memilih pemeran, serta bertanggung jawab penuh atas keseluruhan pementasan teater dari segi artistik dinamakan...",
        options: [
          "Penonton barisan depan",
          "Petugas kebersihan panggung",
          "Sutradara",
          "Distributor tiket"
        ],
        answerIndex: 2,
        explanation: "Sutradara (director) adalah nahkoda pementasan teater yang menafsirkan naskah, melatih akting pemain, dan menyatukan seluruh elemen seni panggung."
      },
      {
        id: "k4-05",
        topic: "Blocking Panggung",
        question: "Pengaturan posisi berdiri, perpindahan letak, dan tata gerak pemain di atas panggung agar terlihat seimbang dan dinamis dinamakan...",
        options: [
          "Blocking",
          "Casting",
          "Dubbing",
          "Editing"
        ],
        answerIndex: 0,
        explanation: "Blocking adalah pembagian zona panggung bagi aktor agar komposisi visual panggung enak dilihat penonton dan pemain tidak menumpuk di satu sisi."
      },
      {
        id: "k4-06",
        topic: "Tata Lampu Panggung",
        question: "Lampu panggung dengan sorotan cahaya bulat terfokus langsung ke arah satu pemain utama yang sedang bermonolog penting di panggung disebut...",
        options: [
          "Lampu spotlight (lampu sorot fokus)",
          "Lampu lalu lintas jalan raya",
          "Lampu teplok minyak tanah",
          "Lampu senter saku kecil"
        ],
        answerIndex: 0,
        explanation: "Lampu spotlight (sorot terarah) digunakan oleh penata cahaya untuk menarik perhatian penonton secara khusus pada tokoh yang sedang melakukan adegan penting."
      },
      {
        id: "k4-07",
        topic: "Unsur Pemain (Aktor)",
        question: "Orang yang memerankan suatu watak atau tokoh tertentu di dalam sebuah pertunjukan sandiwara teater disebut...",
        options: [
          "Koreografer tari",
          "Aktor atau pemeran",
          "Penulis lirik lagu",
          "Komponis musik"
        ],
        answerIndex: 1,
        explanation: "Aktor (pemeran pria) atau aktris (pemeran wanita) adalah seniman yang menghidupkan tokoh dalam cerita melalui suara, ekspresi, dan tindakan di panggung."
      },
      {
        id: "k4-08",
        topic: "Petunjuk Lakuan (Kramagung)",
        question: "Keterangan tindakan dalam tanda kurung di dalam naskah drama, misalnya: (sambil menggebrak meja dengan geram), disebut...",
        options: [
          "Petunjuk lakuan atau kramagung",
          "Epilog penutup cerita",
          "Prolog pembuka",
          "Sinopsis singkat"
        ],
        answerIndex: 0,
        explanation: "Kramagung atau petunjuk lakuan adalah arahan tertulis bagi aktor mengenai tindakan fisik atau emosi yang harus dilakukan saat mengucapkan dialog tersebut."
      },
      {
        id: "k4-09",
        topic: "Teater Tradisional Minangkabau",
        question: "Teater tradisional dari Minangkabau (Sumatera Barat) yang memadukan seni peran, tarian silek (pencak silat), dan nyanyian dendang dalam formasi lingkaran disebut...",
        options: [
          "Lenong",
          "Randai",
          "Wayang orang",
          "Arja"
        ],
        answerIndex: 1,
        explanation: "Randai adalah teater khas Minangkabau yang dimainkan secara melingkar, memadukan gerakan pencak silat, tepukan celana gelembong berirama, nyanyian, dan akting."
      },
      {
        id: "k4-10",
        topic: "Gestur Tubuh",
        question: "Gerak-gerik anggota tubuh seperti gerakan tangan, kepala, atau bahu yang memiliki makna tertentu untuk memperkuat pesan dialog disebut...",
        options: [
          "Kostum",
          "Gestur",
          "Dekorasi",
          "Efek suara"
        ],
        answerIndex: 1,
        explanation: "Gestur adalah gerak isyarat tubuh yang menyertai percakapan untuk menekankan maksud perkataan, seperti menunjuk, menggeleng, atau merentangkan tangan."
      }
    ],

    // =========================================================================
    // KELAS 5 SD (10 SOAL)
    // =========================================================================
    5: [
      {
        id: "k5-01",
        topic: "Alur Cerita: Klimaks",
        question: "Bagian dalam alur cerita drama di mana permasalahan atau pertentangan antartokoh mencapai titik puncak ketegangan tertinggi dinamakan...",
        options: [
          "Eksposisi awal",
          "Klimaks",
          "Resolusi penyelesaian",
          "Prolog pembuka"
        ],
        answerIndex: 1,
        explanation: "Klimaks adalah puncak dari rangkaian peristiwa dramatik, di mana konflik antartokoh memuncak paling panas dan menentukan nasib perjalanan para tokoh."
      },
      {
        id: "k5-02",
        topic: "Alur Cerita: Resolusi",
        question: "Tahap dalam alur drama setelah klimaks di mana masalah mulai mereda dan menemukan jalan keluar atau penyelesaian disebut...",
        options: [
          "Konflik awal",
          "Klimaks utama",
          "Resolusi (penyelesaian)",
          "Komplikasi cerita"
        ],
        answerIndex: 2,
        explanation: "Resolusi atau peleraian adalah bagian alur saat persoalan yang rumit mulai terurai, kesalahpahaman terungkap, dan cerita melangkah menuju babak akhir."
      },
      {
        id: "k5-03",
        topic: "Pernapasan Aktor",
        question: "Pernapasan yang paling dianjurkan bagi pemain teater karena mampu menghasilkan suara yang bulat, bertenaga kuat, dan tidak mudah lelah adalah pernapasan...",
        options: [
          "Dada bagian atas",
          "Hidung sebelah kiri",
          "Leher dan pundak",
          "Diafragma (perut bagian bawah)"
        ],
        answerIndex: 3,
        explanation: "Pernapasan diafragma memanfaatkan sekat rongga dada dan rongga perut, menghasilkan cadangan udara melimpah sehingga suara aktor terdengar kokoh dan napas panjang."
      },
      {
        id: "k5-04",
        topic: "Olah Rasa (Penghayatan)",
        question: "Kemampuan seorang aktor untuk menyelami dan merasakan suasana batin karakter yang dimainkannya seolah-olah adalah dirinya sendiri disebut proses...",
        options: [
          "Penghayatan peran (olah rasa)",
          "Pemilihan kostum",
          "Penataan tiket penonton",
          "Pemasangan kabel listrik"
        ],
        answerIndex: 0,
        explanation: "Olah rasa melatih kepekaan emosi, empati, dan imajinasi aktor agar dapat menghidupkan perasaan sedih, cemas, atau bahagia tokoh secara tulus dan meyakinkan."
      },
      {
        id: "k5-05",
        topic: "Penata Busana",
        question: "Anggota tim produksi teater yang bertugas merancang, memilih, dan menyiapkan pakaian yang sesuai dengan kurun waktu dan watak setiap tokoh adalah...",
        options: [
          "Penata musik latar",
          "Penata busana (wardrobe)",
          "Pemandu sorak penonton",
          "Penjaga pintu teater"
        ],
        answerIndex: 1,
        explanation: "Penata busana (wardrobe designer) memastikan setiap pakaian yang dikenakan aktor selaras dengan zaman cerita, kepribadian tokoh, dan warna panggung."
      },
      {
        id: "k5-06",
        topic: "Tata Panggung Realistis",
        question: "Jika naskah menceritakan ruang kelas sekolah dasar, tim artistik meletakkan papan tulis, meja guru, dan bangku murid sungguhan. Tata panggung seperti ini mengusung konsep...",
        options: [
          "Panggung realistis (meniru kenyataan sesungguhnya)",
          "Panggung hampa udara",
          "Panggung abstrak tanpa benda apa pun",
          "Panggung ilusi optik cermin"
        ],
        answerIndex: 0,
        explanation: "Panggung realistis meniru suasana dunia nyata secara persis dan wajar dengan menghadirkan perabotan asli sehingga penonton merasa menyaksikan kejadian nyata."
      },
      {
        id: "k5-07",
        topic: "Improvisasi Aktor",
        question: "Tindakan cerdas seorang pemain teater yang secara spontan mengucapkan dialog pengganti yang tepat ketika lawan mainnya lupa naskah di panggung dinamakan...",
        options: [
          "Meditasi",
          "Improvisasi",
          "Reduksi",
          "Provokasi"
        ],
        answerIndex: 1,
        explanation: "Improvisasi adalah kemampuan berakting atau menciptakan dialog spontan tanpa persiapan naskah untuk menyelamatkan adegan agar cerita tetap mengalir lancar."
      },
      {
        id: "k5-08",
        topic: "Bentuk Percakapan: Monolog",
        question: "Bentuk percakapan atau penyampaian kata-kata panjang di atas panggung yang dilakukan oleh satu orang tokoh sendirian tanpa lawan bicara disebut...",
        options: [
          "Monolog",
          "Dialog",
          "Prolog bersama",
          "Paduan suara"
        ],
        answerIndex: 0,
        explanation: "Monolog adalah saat seorang karakter berbicara seorang diri di panggung untuk mengungkapkan isi hati, pergulatan batin, atau renungan pikirannya kepada penonton."
      },
      {
        id: "k5-09",
        topic: "Tujuan Olah Tubuh",
        question: "Latihan olah tubuh pada seni teater sangat bermanfaat bagi para pemeran agar...",
        options: [
          "Menghindari belajar membaca naskah drama",
          "Menguasai koordinasi gerak fisik secara luwes dan ekspresif di panggung",
          "Menghilangkan suara napas secara keseluruhan",
          "Menambah berat badan pemain secara cepat"
        ],
        answerIndex: 1,
        explanation: "Tubuh adalah instrumen utama seorang aktor. Olah tubuh membiasakan tubuh bergerak luwes, tangkas, dan mampu mengekspresikan karakter yang berbeda-beda."
      },
      {
        id: "k5-10",
        topic: "Struktur Lakon: Prolog",
        question: "Bagian pengantar atau pendahuluan sebelum naskah drama inti dimulai yang berisi gambaran awal cerita dinamakan...",
        options: [
          "Prolog",
          "Epilog",
          "Monolog",
          "Klimaks"
        ],
        answerIndex: 0,
        explanation: "Prolog terletak di awal pertunjukan sebelum babak pertama dimulai, berfungsi memberikan latar informasi dan mempersiapkan pikiran penonton menyimak cerita."
      }
    ],

    // =========================================================================
    // KELAS 6 SD (10 SOAL)
    // =========================================================================
    6: [
      {
        id: "k6-01",
        topic: "Manajemen Panggung",
        question: "Petugas yang bertanggung jawab mengawasi kelancaran pergantian babak, kesiapan properti di sayap panggung, serta keluar-masuknya aktor selama pentas adalah...",
        options: [
          "Penonton barisan depan",
          "Pimpinan panggung (stage manager)",
          "Pengkritik surat kabar",
          "Kasir penjualan karcis"
        ],
        answerIndex: 1,
        explanation: "Pimpinan panggung (stage manager) adalah tangan kanan sutradara yang mengatur jadwal waktu, kelancaran teknis di panggung, dan kesiapan para aktor di balik layar."
      },
      {
        id: "k6-02",
        topic: "Ragam Teater: Musikal",
        question: "Bentuk pementasan teater modern yang menggabungkan secara utuh antara seni peran (akting), seni tari (koreografi), dan nyanyian lagu secara terpadu disebut...",
        options: [
          "Teater boneka kayu",
          "Pertunjukan wayang kulit semalam suntuk",
          "Sandiwara bisu monokrom",
          "Teater musikal"
        ],
        answerIndex: 3,
        explanation: "Teater musikal memadukan akting drama dengan nyanyian dan tarian yang menjadi bagian tak terpisahkan dari pengungkapan emosi dan jalan cerita."
      },
      {
        id: "k6-03",
        topic: "Struktur Lakon: Epilog",
        question: "Bagian penutup pada akhir pementasan drama yang biasanya berisi amanat, simpulan kisah, atau pesan moral dari lakon yang dipentaskan disebut...",
        options: [
          "Prolog",
          "Epilog",
          "Dialog",
          "Sinopsis"
        ],
        answerIndex: 1,
        explanation: "Epilog diletakkan di akhir pementasan setelah cerita selesai, berguna merangkum pesan moral dan nilai kehidupan yang dapat dipetik penonton dari cerita drama."
      },
      {
        id: "k6-04",
        topic: "Tokoh Tritagonis",
        question: "Dalam struktur penokohan drama, tokoh penengah atau juru damai yang berada di antara tokoh protagonis dan antagonis dinamakan tokoh...",
        options: [
          "Tokoh figuran bisu",
          "Tritagonis",
          "Tokoh sutradara bayangan",
          "Tokoh penonton setia"
        ],
        answerIndex: 1,
        explanation: "Tritagonis adalah tokoh ketiga yang bersikap netral atau bijaksana, bertindak sebagai penengah dan juru damai saat terjadi perselisihan antara protagonis dan antagonis."
      },
      {
        id: "k6-05",
        topic: "Teater Tradisional Sunda",
        question: "Seni pertunjukan teater wayang boneka kayu khas dari daerah Sunda (Jawa Barat) yang dimainkan oleh seorang dalang dinamakan...",
        options: [
          "Wayang orang",
          "Wayang golek",
          "Wayang kulit purwa",
          "Lenong denes"
        ],
        answerIndex: 1,
        explanation: "Wayang golek adalah kesenian teater boneka kayu tiga dimensi khas Jawa Barat yang dipentaskan oleh dalang dengan iringan gamelan salendro bernuansa Sunda."
      },
      {
        id: "k6-06",
        topic: "Apresiasi Teater",
        question: "Sikap menghargai, menikmati, dan memahami pesan moral serta keindahan nilai seni dari sebuah pertunjukan teater dinamakan kegiatan...",
        options: [
          "Apresiasi seni",
          "Manipulasi seni",
          "Diskriminasi peran",
          "Eksploitasi panggung"
        ],
        answerIndex: 0,
        explanation: "Apresiasi seni adalah proses menikmati, menghayati, dan memberi penghargaan terhadap sebuah karya seni panggung dengan pemahaman yang bijaksana."
      },
      {
        id: "k6-07",
        topic: "Ruang Panggung: Sayap Panggung",
        question: "Area tersembunyi di sebelah kiri dan kanan panggung yang tertutup tirai tempat para pemeran menunggu giliran masuk panggung disebut...",
        options: [
          "Balkon penonton utama",
          "Sayap panggung (wings)",
          "Pintu loket karcis luar",
          "Panggung orkestra bawah"
        ],
        answerIndex: 1,
        explanation: "Sayap panggung (wings) terletak di sisi kiri dan kanan panggung utama, terlindung oleh tirai samping (tormentor) agar pemain dapat bersiap tanpa terlihat penonton."
      },
      {
        id: "k6-08",
        topic: "Corak Teater Realis",
        question: "Pertunjukan teater yang berusaha menampilkan adegan, percakapan, dan permasalahan hidup sehari-hari seperti kehidupan nyata tanpa unsur magis disebut teater bercorak...",
        options: [
          "Realis",
          "Surealis fantasi",
          "Abstrak simbolis",
          "Komedi slapstick fiksi ilmiah"
        ],
        answerIndex: 0,
        explanation: "Corak teater realis berpijak pada kenyataan hidup manusia sehari-hari, mengutamakan keaslian ekspresi, logika peristiwa, dan karakter manusia yang apa adanya."
      },
      {
        id: "k6-09",
        topic: "Evaluasi Pascapentas",
        question: "Setelah pementasan drama selesai, sutradara dan seluruh tim berkumpul untuk membahas hal-hal yang sudah baik dan kekurangan yang perlu dibenahi. Kegiatan ini disebut...",
        options: [
          "Audisi pemeran baru",
          "Promosi iklan lanjutan",
          "Evaluasi pementasan",
          "Penjualan naskah panggung"
        ],
        answerIndex: 2,
        explanation: "Evaluasi adalah sesi diskusi bersama untuk menelaah pencapaian pementasan, mengapresiasi kerja keras tim, dan memperbaiki kelemahan untuk karya berikutnya."
      },
      {
        id: "k6-10",
        topic: "Etika Menonton Teater",
        question: "Sikap penonton yang paling terpuji dan mendukung kekhidmatan saat menyaksikan pertunjukan teater di dalam gedung pertunjukan adalah...",
        options: [
          "Menyalakan lampu senter ponsel ke arah mata pemain di panggung",
          "Berlari-larian di lorong kursi penonton sambil makan makanan berat",
          "Menonaktifkan dering ponsel, tertib menyimak, dan bertepuk tangan di saat yang tepat",
          "Meneriaki pemain yang sedang berakting serius di panggung"
        ],
        answerIndex: 2,
        explanation: "Penonton yang beretika menjaga keheningan ruangan gedung pertunjukan, tidak menyalakan lampu ponsel, dan mengapresiasi penampilan para aktor dengan tepuk tangan meriah."
      }
    ]
  }
};
