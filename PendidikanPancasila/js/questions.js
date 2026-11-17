/**
 * Bank Soal Kuis Pendidikan Pancasila SD (Kelas 1 - 6)
 * Sesuai Kurikulum Merdeka Sekolah Dasar
 * Masing-masing kelas terdiri dari 10 soal mendidik, tanpa membocorkan jawaban di teks soal,
 * dilengkapi pembahasan koreksi ramah anak.
 */

const PancasilaQuestionsData = {
  1: {
    gradeName: "Kelas 1 SD",
    gradeBadge: "Fase A • Pengenalan Nilai",
    gradeIcon: "starBadge",
    themeColor: "#FEF08A",
    accentColor: "#F59E0B",
    description: "Belajar mengenal simbol Garuda Pancasila, aturan di rumah & sekolah, serta hidup rukun bersama teman.",
    questions: [
      {
        id: 1,
        topic: "Mengenal Identitas Diri",
        question: "Saat berkenalan di depan kelas, Doni menyebutkan nama dan kegemarannya. Sikap teman-teman yang mendengarkan sebaiknya...",
        options: [
          "Mendengarkan dengan tertib dan tersenyum ramah",
          "Mengobrol sendiri dengan teman sebangku",
          "Menertawakan kegemaran Doni di depan guru"
        ],
        correctAnswer: 0,
        explanation: "Saat teman sedang berbicara atau berkenalan, kita harus mendengarkan dengan tertib dan menghargai mereka agar suasana kelas rukun dan akrab."
      },
      {
        id: 2,
        topic: "Simbol Sila Pertama",
        question: "Simbol sila pertama Pancasila yang melambangkan cahaya kerohanian bagi setiap manusia adalah...",
        options: [
          "Bintang emas bersudut lima",
          "Rantai emas melingkar",
          "Pohon beringin yang rindang"
        ],
        correctAnswer: 0,
        explanation: "Sila pertama 'Ketuhanan Yang Maha Esa' dilambangkan dengan Bintang Emas bersudut lima dengan latar belakang perisai hitam."
      },
      {
        id: 3,
        topic: "Aturan Baik di Rumah",
        question: "Sebelum berangkat ke sekolah pada pagi hari, kebiasaan baik yang harus kita lakukan kepada orang tua adalah...",
        options: [
          "Berpamitan dan mencium tangan ayah dan ibu",
          "Langsung lari keluar rumah tanpa berbicara",
          "Menangis meminta uang jajan yang sangat banyak"
        ],
        correctAnswer: 0,
        explanation: "Berpamitan dan bersalaman dengan orang tua sebelum berangkat sekolah adalah tanda anak yang berbakti, sopan, dan mendoakan keselamatan."
      },
      {
        id: 4,
        topic: "Simbol Sila Kedua",
        question: "Mata rantai berbentuk lingkaran dan persegi yang saling mengait pada perisai Pancasila melambangkan bahwa kita harus saling...",
        options: [
          "Membantu dan bersatu tanpa membeda-bedakan",
          "Bersaing dan bertengkar satu sama lain",
          "Memilih-milih teman yang kaya saja"
        ],
        correctAnswer: 0,
        explanation: "Rantai emas adalah simbol sila kedua 'Kemanusiaan yang Adil dan Beradab', bermakna bahwa laki-laki dan perempuan saling membantu dan bersatu kukuh."
      },
      {
        id: 5,
        topic: "Menjaga Kebersihan Sekolah",
        question: "Saat melihat sampah bungkus jajanan terjatuh di halaman sekolah, tindakan terpuji yang dapat kita lakukan adalah...",
        options: [
          "Mengambilnya dan memasukkan ke dalam tempat sampah",
          "Membiarkannya karena bukan kita yang menjatuhkan",
          "Menendang sampah tersebut ke halaman orang lain"
        ],
        correctAnswer: 0,
        explanation: "Menjaga kebersihan lingkungan sekolah adalah tanggung jawab bersama semua murid dengan selalu membuang sampah pada tempatnya."
      },
      {
        id: 6,
        topic: "Simbol Sila Ketiga",
        question: "Simbol sila ketiga Pancasila yang berwujud pohon rindang tempat bernaung dan memiliki akar kokoh adalah...",
        options: [
          "Pohon beringin yang hijau",
          "Bintang emas berkilau",
          "Kepala banteng gagah"
        ],
        correctAnswer: 0,
        explanation: "Pohon beringin melambangkan sila ketiga 'Persatuan Indonesia', sebagai tempat berteduh dan bernaung bagi seluruh rakyat Indonesia yang beragam."
      },
      {
        id: 7,
        topic: "Tolong Menolong Sesama Teman",
        question: "Ketika melihat Siti kesulitan membawa tumpukan buku menuju ruang guru, tindakan Edo sebaiknya...",
        options: [
          "Menawarkan bantuan membawakan sebagian buku",
          "Menonton Siti dari kejauhan sambil bersorak",
          "Pura-pura tidak melihat lalu berlari bermain bola"
        ],
        correctAnswer: 0,
        explanation: "Anak berkarakter Pancasila memiliki rasa peduli dan suka menolong teman yang sedang kesulitan dengan tulus tanpa pamrih."
      },
      {
        id: 8,
        topic: "Simbol Sila Keempat",
        question: "Hewan yang senang berkumpul dan menjadi lambang musyawarah untuk mufakat pada sila keempat Pancasila adalah...",
        options: [
          "Kepala banteng",
          "Burung cendrawasih",
          "Ikan lumba-lumba"
        ],
        correctAnswer: 0,
        explanation: "Kepala banteng adalah lambang sila keempat. Banteng dikenal sebagai hewan sosial yang suka berkumpul, sama seperti manusia saat bermusyawarah mengambil keputusan."
      },
      {
        id: 9,
        topic: "Tertib di Ruang Kelas",
        question: "Ketika bel tanda masuk berbunyi dan bapak guru memasuki ruang kelas, semua murid sebaiknya...",
        options: [
          "Masuk kelas dengan rapi dan duduk tertib di bangku",
          "Tetap asyik berkejaran di lorong sekolah",
          "Bersembunyi di balik pintu kelas untuk mengagetkan"
        ],
        correctAnswer: 0,
        explanation: "Mematuhi bel sekolah dan duduk rapi saat pelajaran dimulai merupakan contoh kedisiplinan dan rasa hormat kepada bapak dan ibu guru."
      },
      {
        id: 10,
        topic: "Simbol Sila Kelima",
        question: "Lambang kebutuhan pokok berupa pangan (makanan) dan sandang (pakaian) pada sila kelima Pancasila adalah...",
        options: [
          "Padi dan kapas",
          "Rantai emas",
          "Pohon kelapa gading"
        ],
        correctAnswer: 0,
        explanation: "Padi melambangkan makanan pokok dan kapas melambangkan bahan pakaian. Keduanya adalah lambang sila kelima 'Keadilan Sosial bagi Seluruh Rakyat Indonesia'."
      }
    ]
  },

  2: {
    gradeName: "Kelas 2 SD",
    gradeBadge: "Fase A • Sikap & Pembiasaan",
    gradeIcon: "chainLink",
    themeColor: "#BAE6FD",
    accentColor: "#0284C7",
    description: "Menerapkan nilai ketuhanan, tolong-menolong, musyawarah kelas, serta sikap adil dalam pergaulan sehari-hari.",
    questions: [
      {
        id: 1,
        topic: "Pengamalan Sila Pertama",
        question: "Setiap kali hendak mulai belajar atau menyantap makan siang bersama, kegiatan utama yang kita panjatkan adalah...",
        options: [
          "Berdoa sesuai agama dan kepercayaan masing-masing",
          "Menghitung banyaknya butir nasi di piring",
          "Bernyanyi sekeras-kerasnya di ruang makan"
        ],
        correctAnswer: 0,
        explanation: "Berdoa sebelum makan dan belajar adalah wujud pengamalan Sila ke-1 sebagai ungkapan rasa syukur kepada Tuhan Yang Maha Esa atas rezeki dan ilmu."
      },
      {
        id: 2,
        topic: "Pengamalan Sila Kedua",
        question: "Saat ada teman yang tersandung di lapangan dan lututnya berdarah, sikap kita yang sesuai nilai kemanusiaan adalah...",
        options: [
          "Membantu teman berdiri dan mengantarnya ke ruang UKS",
          "Menertawakan teman karena berjalan kurang hati-hati",
          "Memotret teman yang terjatuh untuk ditunjukkan ke orang lain"
        ],
        correctAnswer: 0,
        explanation: "Menolong teman yang cedera adalah cerminan Sila ke-2 'Kemanusiaan yang Adil dan Beradab' yang mengajarkan kasih sayang antarsesama manusia."
      },
      {
        id: 3,
        topic: "Pengamalan Sila Ketiga",
        question: "Di kelas dua, ada teman yang berasal dari suku Sunda, Jawa, Madura, dan Minang. Agar kelas selalu damai, kita harus...",
        options: [
          "Bermain bersama dengan rukun tanpa membeda-bedakan asal daerah",
          "Hanya mau berbagi mainan dengan teman yang satu suku saja",
          "Mengejek logat bicara teman yang berbeda dari daerah kita"
        ],
        correctAnswer: 0,
        explanation: "Sila ke-3 mengajarkan 'Persatuan Indonesia'. Menghargai teman dari suku mana pun membuat suasana belajar jadi nyaman dan bersatu."
      },
      {
        id: 4,
        topic: "Pengamalan Sila Keempat",
        question: "Ketika memilih ketua kelas yang baru, cara terbaik yang diajarkan dalam Pancasila untuk mengambil keputusan bersama adalah...",
        options: [
          "Bermusyawarah atau pemungutan suara bersama seluruh warga kelas",
          "Ditunjuk sepihak oleh murid yang paling berani di kelas",
          "Menentukan pemenang melalui lomba adu cepat berlari"
        ],
        correctAnswer: 0,
        explanation: "Musyawarah untuk mufakat adalah cara mulia Sila ke-4 dalam mengambil keputusan yang disepakati bersama secara adil dan bijaksana."
      },
      {
        id: 5,
        topic: "Pengamalan Sila Kelima",
        question: "Dalam membagi tugas piket kebersihan kelas, ketua kelas membagi jadwal secara adil sehingga...",
        options: [
          "Semua murid mendapat tugas membersihkan sesuai gilirannya",
          "Hanya murid perempuan yang bertugas menyapu setiap hari",
          "Murid yang mendapat ranking satu dibebaskan dari tugas piket"
        ],
        correctAnswer: 0,
        explanation: "Sila ke-5 menjunjung tinggi keadilan sosial. Semua siswa memiliki hak dan kewajiban yang sama dalam menjaga kebersihan ruang kelas bersama."
      },
      {
        id: 6,
        topic: "Aturan di Ruang Perpustakaan",
        question: "Saat berada di dalam perpustakaan sekolah, aturan penting yang wajib kita patuhi bersama adalah...",
        options: [
          "Menjaga ketenangan dan tidak berisik agar tidak mengganggu yang lain",
          "Boleh menyantap makanan berminyak sambil membuka buku",
          "Melipat dan merobek halaman buku yang gambarnya menarik"
        ],
        correctAnswer: 0,
        explanation: "Di perpustakaan, kita wajib menjaga ketenangan agar teman-teman lain dapat membaca dan belajar dengan konsentrasi tinggi."
      },
      {
        id: 7,
        topic: "Toleransi Antarumat Beragama",
        question: "Di Indonesia terdapat berbagai agama yang sah. Sikap terpuji saat tetangga atau teman sedang beribadah adalah...",
        options: [
          "Menghormati dan tidak membunyikan petasan atau suara bising di dekatnya",
          "Mengajak teman tersebut keluar untuk bermain petak umpet",
          "Menyuruh teman segera menyudahi ibadah karena jam bermain dimulai"
        ],
        correctAnswer: 0,
        explanation: "Saling menghormati ketenangan teman yang sedang beribadah adalah wujud kerukunan dan toleransi beragama yang sangat dijunjung tinggi di Indonesia."
      },
      {
        id: 8,
        topic: "Gotong Royong di Lingkungan Rumah",
        question: "Warga desa mengadakan kerja bakti membersihkan saluran air. Peran yang tepat bagi anak-anak untuk ikut membantu adalah...",
        options: [
          "Membantu mengumpulkan sampah daun kering yang ringan ke tempat sampah",
          "Bermain lempar lumpur di saluran air yang sedang dikeruk",
          "Tidur dan berdiam diri di kamar sepanjang hari"
        ],
        correctAnswer: 0,
        explanation: "Anak-anak dapat ikut bergotong royong sesuai dengan tenaganya, misalnya mengumpulkan sampah dedaunan kering atau membawakan minuman untuk warga."
      },
      {
        id: 9,
        topic: "Menghargai Pendapat Orang Lain",
        question: "Saat berdiskusi menentukan judul pertunjukan seni kelas, usulan Lani berbeda dengan usulan Budi. Sikap Budi sebaiknya...",
        options: [
          "Mendengarkan usulan Lani dengan sopan sebelum memutuskan bersama",
          "Memaksa semua orang agar hanya memilih usulannya sendiri",
          "Mogok bicara dan meninggalkan ruang kelas dengan marah"
        ],
        correctAnswer: 0,
        explanation: "Menghargai usulan orang lain dan tidak memaksakan kehendak adalah sikap terpuji yang diajarkan dalam nilai musyawarah Pancasila."
      },
      {
        id: 10,
        topic: "Adab dan Sopan Santun",
        question: "Ketika berjalan melewati guru yang sedang berbincang di lorong sekolah, sikap sopan yang kita tunjukkan adalah...",
        options: [
          "Berjalan sedikit membungkuk sambil mengucap permisi atau salam santun",
          "Berlari kencang sambil berteriak memanggil teman di ujung lorong",
          "Memalingkan muka dan pura-pura tidak melihat keberadaan guru"
        ],
        correctAnswer: 0,
        explanation: "Mengucapkan salam atau permisi sambil membungkukkan badan sedikit mencerminkan adab sopan santun dan budi pekerti luhur pelajar Indonesia."
      }
    ]
  },

  3: {
    gradeName: "Kelas 3 SD",
    gradeBadge: "Fase B • Keragaman & Makna Lambang",
    gradeIcon: "treeBanyan",
    themeColor: "#BBF7D0",
    accentColor: "#16A34A",
    description: "Mempelajari filosofi lambang Garuda Pancasila, semboyan Bhinneka Tunggal Ika, hak dan kewajiban, serta tradisi budaya.",
    questions: [
      {
        id: 1,
        topic: "Makna Lambang Garuda",
        question: "Pada lambang negara Garuda Pancasila, kepala burung Garuda menoleh ke arah sebelah kanan. Arah kanan ini secara filosofis melambangkan...",
        options: [
          "Kebaikan, kebenaran, dan harapan jalan moral yang luhur",
          "Keinginan kuat untuk menyerang negara tetangga",
          "Ketangkasan burung dalam memburu mangsa di udara",
          "Tanda bahwa burung sedang mencari arah angin terbang"
        ],
        correctAnswer: 0,
        explanation: "Kepala Garuda yang menoleh ke kanan melambangkan bahwa bangsa Indonesia selalu berpihak pada nilai kebaikan, kejujuran, dan kebenaran yang mulia."
      },
      {
        id: 2,
        topic: "Semboyan Bhinneka Tunggal Ika",
        question: "Pita putih yang dicengkeram kokoh oleh kedua cakar burung Garuda bertuliskan 'Bhinneka Tunggal Ika', yang memiliki arti...",
        options: [
          "Berbeda-beda tetapi pada hakikatnya tetap satu jua",
          "Bersatu kita teguh, bercerai kita runtuh bersama",
          "Berjuang tanpa pamrih demi kemakmuran keluarga",
          "Maju terus pantang mundur menghadapi rintangan"
        ],
        correctAnswer: 0,
        explanation: "Semboyan Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karya Mpu Tantular, menegaskan persatuan Indonesia di tengah keberagaman suku, ras, dan agama."
      },
      {
        id: 3,
        topic: "Jumlah Bulu Garuda Pancasila",
        question: "Jumlah helai bulu pada ekor burung Garuda Pancasila berjumlah 8 helai. Angka 8 ini melambangkan...",
        options: [
          "Bulan kemerdekaan Republik Indonesia yaitu bulan Agustus",
          "Jumlah pulau-pulau besar utama di kepulauan Indonesia",
          "Delapan tokoh perumus naskah proklamasi kemerdekaan",
          "Delapan arah mata angin penjaga perbatasan samudra"
        ],
        correctAnswer: 0,
        explanation: "Helai bulu Garuda melambangkan 17-8-1945: 17 bulu di masing-masing sayap, 8 bulu di ekor (bulan Agustus), 19 bulu di pangkal ekor, dan 45 bulu di leher."
      },
      {
        id: 4,
        topic: "Hak dan Kewajiban Anak di Rumah",
        question: "Setiap anak berhak mendapatkan kasih sayang dan makanan bergizi dari orang tua. Sebagai timbal balik yang seimbang, kewajiban anak di rumah adalah...",
        options: [
          "Membantu orang tua sesuai kemampuan dan belajar dengan sungguh-sungguh",
          "Menuntut uang jajan berlipat ganda setiap akhir pekan",
          "Menyerahkan seluruh tugas membersihkan kamar kepada ibu",
          "Bermain gawai tanpa mengenal waktu belajar dan tidur"
        ],
        correctAnswer: 0,
        explanation: "Hak dan kewajiban harus seimbang. Setelah mendapatkan hak asuh dan kasih sayang, anak berkewajiban membantu orang tua dan tekun menuntut ilmu."
      },
      {
        id: 5,
        topic: "Kewajiban Siswa di Sekolah",
        question: "Salah satu contoh kewajiban utama seorang murid saat berada di lingkungan sekolah adalah...",
        options: [
          "Mematuhi tata tertib sekolah dan menghormati para pendidik",
          "Bebas menggunakan alat musik sekolah tanpa izin petugas",
          "Menentukan jam istirahat sekolah sesuai keinginan sendiri",
          "Hanya menyapa teman yang memiliki hobi yang sama"
        ],
        correctAnswer: 0,
        explanation: "Tata tertib sekolah dibuat untuk ditaati semua murid agar kegiatan belajar mengajar berjalan teratur, aman, dan disiplin."
      },
      {
        id: 6,
        topic: "Keragaman Pakaian Tradisional",
        question: "Kain Ulos dari Sumatera Utara, Baju Bodo dari Sulawesi Selatan, dan Beskap dari Jawa Tengah merupakan bukti kekayaan budaya berupa...",
        options: [
          "Pakaian adat warisan luhur nenek moyang bangsa",
          "Senjata tradisional untuk pertahanan wilayah",
          "Alat musik petik khas daerah pesisir pantai",
          "Perlengkapan upacara menyambut panen raya saja"
        ],
        correctAnswer: 0,
        explanation: "Kain Ulos, Baju Bodo, dan Beskap adalah contoh pakaian tradisional yang menunjukkan tingginya nilai seni dan budaya nusantara."
      },
      {
        id: 7,
        topic: "Keputusan Musyawarah Bersama",
        question: "Hasil musyawarah kelas memutuskan bahwa hari Jumat seluruh murid akan membawa satu bibit tanaman. Tindakan Rina yang tepat adalah...",
        options: [
          "Melaksanakan hasil keputusan bersama dengan penuh rasa tanggung jawab",
          "Menolak membawa bibit karena usulannya menanam bunga mawar tidak disetujui",
          "Menghasut teman sebangku agar tidak perlu membawa tanaman ke sekolah",
          "Berpura-pura lupa agar tidak perlu merawat tanaman di kelas"
        ],
        correctAnswer: 0,
        explanation: "Keputusan musyawarah merupakan kesepakatan bersama yang wajib dihormati dan dijalankan dengan ikhlas serta bertanggung jawab oleh semua peserta."
      },
      {
        id: 8,
        topic: "Arsitektur Rumah Adat Nusantara",
        question: "Rumah Gadang dengan atap melengkung runcing berasal dari Minangkabau dan Rumah Tongkonan berasal dari Toraja. Keunikan bentuk rumah ini membuktikan...",
        options: [
          "Indonesia memiliki kearifan lokal arsitektur yang tinggi dan berharga",
          "Nenek moyang zaman dahulu tidak mampu membangun rumah yang seragam",
          "Rumah adat hanya boleh ditempati oleh kepala suku pada zaman kuno",
          "Setiap daerah harus bersaing memamerkan rumah yang paling megah"
        ],
        correctAnswer: 0,
        explanation: "Keberagaman rumah adat di seluruh Indonesia membuktikan kekayaan budaya, kecerdasan arsitektur nusantara, dan adaptasi terhadap alam sekitar."
      },
      {
        id: 9,
        topic: "Kejujuran sebagai Nilai Moral",
        question: "Saat guru sedang keluar ruang kelas dan ulangan harian sedang berlangsung, sikap yang mencerminkan pribadi berakhlak Pancasila adalah...",
        options: [
          "Tetap percaya diri mengerjakan soal sendiri dengan jujur tanpa mencontek",
          "Membuka buku catatan secara diam-diam di bawah kolong meja",
          "Berbisik menanyakan kunci jawaban kepada murid yang paling pintar",
          "Melihat lembar jawaban teman di sebelah saat teman menengok"
        ],
        correctAnswer: 0,
        explanation: "Kejujuran adalah pondasi utama karakter. Mengerjakan ulangan tanpa mencontek melatih kemandirian, rasa percaya diri, dan integritas diri."
      },
      {
        id: 10,
        topic: "Menghormati Tradisi Keagamaan",
        question: "Ketika umat Hindu di Bali melaksanakan ibadah Hari Raya Nyepi dengan hening selama sehari semalam, sikap warga sekitar yang baik adalah...",
        options: [
          "Menjaga suasana tetap hening dan mematikan penerangan luar rumah yang mencolok",
          "Menyalakan pengeras suara radio di teras rumah dengan volume tinggi",
          "Mengadakan pesta kembang api di jalan umum depan pura",
          "Mendesak agar upacara dihentikan karena mengganggu jalan raya"
        ],
        correctAnswer: 0,
        explanation: "Menjaga keheningan saat Hari Raya Nyepi adalah wujud toleransi mendalam dalam mengapresiasi dan menghormati peribadatan saudara sebangsa."
      }
    ]
  },

  4: {
    gradeName: "Kelas 4 SD",
    gradeBadge: "Fase B • Norma, Aturan & Keutuhan NKRI",
    gradeIcon: "bullHead",
    themeColor: "#FED7AA",
    accentColor: "#EA580C",
    description: "Mendalami makna Pancasila sebagai dasar negara, empat jenis norma di masyarakat, hak warga negara, dan persatuan NKRI.",
    questions: [
      {
        id: 1,
        topic: "Pancasila sebagai Dasar Negara",
        question: "Pancasila memiliki kedudukan istimewa sebagai dasar negara Republik Indonesia. Maksud dari kedudukan tersebut adalah bahwa Pancasila...",
        options: [
          "Menjadi sumber utama dari segala hukum dan pedoman penyelenggaraan negara",
          "Hanya berlaku sebagai materi ujian bagi para siswa di sekolah",
          "Merupakan naskah pidato kenegaraan yang hanya dibaca saat hari kemerdekaan",
          "Dapat diganti kapan saja apabila ada undang-undang baru yang disahkan"
        ],
        correctAnswer: 0,
        explanation: "Sebagai dasar negara (fundamen), seluruh undang-undang, tata hukum, dan kebijakan pemerintahan di Indonesia wajib berlandaskan pada nilai-nilai Pancasila."
      },
      {
        id: 2,
        topic: "Mengenal Norma Kesusilaan",
        question: "Norma yang bersumber dari bisikan suara hati nurani manusia tentang hal yang benar dan salah, serta sanksinya berupa rasa penyesalan batin adalah norma...",
        options: [
          "Kesusilaan",
          "Hukum pidana",
          "Kesopanan pergaulan",
          "Tata tertib lalu lintas"
        ],
        correctAnswer: 0,
        explanation: "Norma kesusilaan bersumber dari hati nurani sanubari. Jika dilanggar (misalnya berbohong), pelakunya akan merasa bersalah dan gelisah di dalam batin."
      },
      {
        id: 3,
        topic: "Penerapan Norma Kesopanan",
        question: "Menyapa dengan kata-kata santun kepada orang yang lebih tua serta menerima pemberian menggunakan tangan kanan merupakan wujud ketaatan terhadap norma...",
        options: [
          "Kesopanan",
          "Hukum",
          "Kesusilaan",
          "Ketatanegaraan"
        ],
        correctAnswer: 0,
        explanation: "Norma kesopanan lahir dari tata krama, adat istiadat, dan kebiasaan masyarakat mengenai kepantasan serta kepatutan tingkah laku dalam pergaulan."
      },
      {
        id: 4,
        topic: "Kekayaan Lagu Daerah",
        question: "Lagu 'Bungong Jeumpa' berasal dari Aceh, sedangkan lagu 'Apuse' berasal dari Papua. Mengetahui dan menyanyikan lagu-lagu daerah nusantara dapat menumbuhkan...",
        options: [
          "Rasa cinta tanah air dan persaudaraan kebangsaan yang erat",
          "Perasaan bahwa lagu dari daerah sendiri jauh lebih bagus dari daerah lain",
          "Persaingan tidak sehat antarsuku untuk memperebutkan wilayah",
          "Rasa enggan mempelajari kesenian musik modern yang positif"
        ],
        correctAnswer: 0,
        explanation: "Menyanyikan lagu-lagu daerah dari Sabang sampai Merauke menumbuhkan kebanggaan nasional dan mempererat rasa persatuan sebagai satu bangsa Indonesia."
      },
      {
        id: 5,
        topic: "Norma Hukum dalam Masyarakat",
        question: "Seorang pengendara motor wajib memiliki SIM, memakai helm standar, dan berhenti saat lampu lalu lintas menyala merah. Aturan ini termasuk dalam norma...",
        options: [
          "Hukum yang bersifat mengikat dan memiliki sanksi tegas",
          "Kesopanan yang sanksinya hanya berupa teguran keluarga",
          "Kesusilaan yang aturannya diserahkan kepada kemauan pribadi",
          "Adat istiadat setempat yang hanya berlaku di desa tertentu"
        ],
        correctAnswer: 0,
        explanation: "Peraturan lalu lintas dibuat oleh lembaga negara yang berwenang dan memiliki sanksi tegas (tilang/denda), sehingga merupakan bagian dari norma hukum."
      },
      {
        id: 6,
        topic: "Menjaga Keutuhan NKRI",
        question: "Sebagai seorang pelajar sekolah dasar, bentuk tindakan nyata yang dapat kita lakukan untuk menjaga keutuhan NKRI di lingkungan sekolah adalah...",
        options: [
          "Menghargai perbedaan teman dan tidak membentuk kelompok yang suka mengucilkan orang lain",
          "Memilih teman belajar hanya yang berasal dari suku atau daerah asal yang sama",
          "Menyebarkan kabar bohong mengenai teman sekelas yang berlainan keyakinan",
          "Menolak mempelajari lagu kebangsaan Indonesia Raya"
        ],
        correctAnswer: 0,
        explanation: "Menjaga kerukunan di kelas dan menolak diskriminasi adalah langkah awal yang sangat berharga bagi pelajar untuk menjaga keutuhan Negara Kesatuan Republik Indonesia."
      },
      {
        id: 7,
        topic: "Pengamalan Sila Pertama di Masyarakat",
        question: "Warga desa saling bahu-membahu menjaga keamanan tempat ibadah tetangga saat sedang berlangsung perayaan hari besar keagamaan. Hal ini merupakan pengamalan sila...",
        options: [
          "Pertama: Ketuhanan Yang Maha Esa",
          "Kedua: Kemanusiaan yang Adil dan Beradab",
          "Ketiga: Persatuan Indonesia",
          "Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia"
        ],
        correctAnswer: 0,
        explanation: "Menjamin kemerdekaan beribadah dan membina kerukunan hidup antarumat beragama merupakan butir pengamalan penting Sila ke-1 Pancasila."
      },
      {
        id: 8,
        topic: "Makna Hak Asasi Anak",
        question: "Hak adalah segala sesuatu yang mutlak menjadi milik seseorang sejak lahir. Salah satu hak dasar yang wajib diterima oleh setiap anak Indonesia adalah...",
        options: [
          "Hak mendapatkan pengasuhan, perlindungan, serta pendidikan yang layak",
          "Hak untuk tidak mematuhi nasihat kedua orang tua dan bapak ibu guru",
          "Hak menggunakan fasilitas sekolah tanpa mempedulikan aturan pemakaian",
          "Hak untuk bermain game sepanjang hari tanpa perlu belajar"
        ],
        correctAnswer: 0,
        explanation: "Setiap anak berhak mendapatkan perlindungan dari kekerasan, pengasuhan penuh kasih sayang, serta akses pendidikan untuk masa depannya."
      },
      {
        id: 9,
        topic: "Kewajiban Menjaga Lingkungan",
        question: "Bencana banjir yang melanda pemukiman sering kali berawal dari kelalaian warga dalam menjalankan kewajibannya terhadap alam, yaitu...",
        options: [
          "Kebiasaan membuang sampah rumah tangga ke aliran parit dan sungai",
          "Kegiatan menanam pohon peneduh di pekarangan rumah",
          "Membersihkan saluran drainase secara teratur setiap pekan",
          "Mengurangi penggunaan kantong plastik sekali pakai"
        ],
        correctAnswer: 0,
        explanation: "Membuang sampah ke parit menyumbat aliran air, yang melanggar kewajiban kita dalam menjaga kelestarian dan kebersihan alam sekitar."
      },
      {
        id: 10,
        topic: "Batas Wilayah Sabang sampai Merauke",
        question: "Wilayah Indonesia sangat luas membentang dari Sabang sampai Merauke. Sikap paling tepat dalam memandang luasnya tanah air kita adalah...",
        options: [
          "Bersyukur, merawat persatuan, dan menjaga kedaulatan tanah air bersama",
          "Menganggap pulau tempat kelahiran kita paling mulia dibandingkan pulau lain",
          "Menyerahkan pengawasan pulau terluar kepada negara tetangga",
          "Hanya peduli pada kemajuan kota tempat tinggal keluarga sendiri"
        ],
        correctAnswer: 0,
        explanation: "Dari Sabang sampai Merauke adalah satu kesatuan utuh tanah air Indonesia yang harus kita cintai, jaga kedaulatannya, dan bangun bersama."
      }
    ]
  },

  5: {
    gradeName: "Kelas 5 SD",
    gradeBadge: "Fase C • Tanggung Jawab & Nilai Kebangsaan",
    gradeIcon: "wheatSheaf",
    themeColor: "#DDD6FE",
    accentColor: "#7C3AED",
    description: "Mempelajari Pancasila sebagai pandangan hidup, keseimbangan hak dan kewajiban warga negara, etika digital, dan tradisi gotong royong.",
    questions: [
      {
        id: 1,
        topic: "Pancasila sebagai Pandangan Hidup",
        question: "Pancasila disebut sebagai pandangan hidup bangsa (way of life). Hal ini mengandung pengertian bahwa nilai-nilai Pancasila...",
        options: [
          "Berfungsi sebagai petunjuk arah dan pedoman berperilaku dalam kehidupan sehari-hari",
          "Hanya digunakan sebagai pedoman para menteri dan pejabat tingkat tinggi",
          "Merupakan teori tertulis yang tidak perlu diterapkan dalam masyarakat",
          "Hanya berlaku saat rakyat sedang menghadapi peperangan melawan penjajah"
        ],
        correctAnswer: 0,
        explanation: "Sebagai pandangan hidup, Pancasila menjadi kompas moral dan pedoman sikap rakyat Indonesia dalam mengambil tindakan, berteman, dan bermasyarakat."
      },
      {
        id: 2,
        topic: "Keseimbangan Hak dan Kewajiban",
        question: "Agar tercipta kehidupan masyarakat yang harmonis dan tertib, pelaksanaan hak dan kewajiban warga negara harus berjalan secara seimbang, yaitu dengan cara...",
        options: [
          "Mendahulukan pelaksanaan kewajiban dengan penuh tanggung jawab baru menuntut hak",
          "Menuntut perolehan hak sebesar-besarnya tanpa mau menjalankan kewajiban",
          "Hanya bersedia mematuhi aturan jika ada imbalan hadiah uang dari pemerintah",
          "Mengabaikan kewajiban sosial demi keuntungan dan kenyamanan pribadi semata"
        ],
        correctAnswer: 0,
        explanation: "Warga negara yang bertanggung jawab selalu mengutamakan pelaksanaan kewajibannya terlebih dahulu, sehingga hak setiap orang terlindungi secara adil."
      },
      {
        id: 3,
        topic: "Pengamalan Sila Kedua di Dunia Digital",
        question: "Ketika menggunakan internet dan media sosial, wujud nyata pengamalan sila 'Kemanusiaan yang Adil dan Beradab' adalah...",
        options: [
          "Berkomentar secara santun, tidak menyebarkan fitnah, dan menolak perundungan siber",
          "Membuat akun palsu untuk mengejek dan menghina karya teman di internet",
          "Menyebarkan kabar bohong (hoaks) yang dapat memicu pertengkaran warga",
          "Menyebarkan data pribadi orang lain tanpa izin di grup percakapan"
        ],
        correctAnswer: 0,
        explanation: "Di dunia maya, menghormati martabat manusia dengan bertutur kata sopan dan tidak melakukan cyberbullying adalah cerminan adab kemanusiaan Sila ke-2."
      },
      {
        id: 4,
        topic: "Sikap Lapang Dada dalam Musyawarah",
        question: "Dalam musyawarah desa, usulan Pak Arman tidak terpilih karena warga sepakat pada usulan lain. Sikap terpuji yang ditunjukkan Pak Arman adalah...",
        options: [
          "Menerima keputusan bersama dengan lapang dada dan ikut menyukseskan program tersebut",
          "Menolak membayar iuran desa karena merasa usulannya paling pintar",
          "Mengajak beberapa tetangga untuk memboikot kegiatan yang sudah disepakati",
          "Menjelek-jelekkan ketua musyawarah di warung kopi desa"
        ],
        correctAnswer: 0,
        explanation: "Berjiwa besar menerima hasil musyawarah mufakat demi kepentingan bersama adalah nilai luhur demokrasi Pancasila Sila ke-4."
      },
      {
        id: 5,
        topic: "Dampak Kurangnya Toleransi",
        question: "Indonesia adalah negara dengan beragam agama dan suku. Apabila masyarakat tidak memelihara sikap toleransi, bahaya terbesar yang dapat menimpa bangsa adalah...",
        options: [
          "Munculnya konflik horizontal, kebencian antargolongan, dan perpecahan bangsa",
          "Kondisi perekonomian rakyat kecil yang langsung meningkat tajam",
          "Semakin eratnya rasa saling percaya dan kekeluargaan di masyarakat",
          "Terciptanya suasana lingkungan yang damai dan tenteram di setiap pelosok"
        ],
        correctAnswer: 0,
        explanation: "Tanpa toleransi, keberagaman yang indah dapat dimanfaatkan oleh oknum untuk memecah belah persatuan dan menimbulkan konflik saudara."
      },
      {
        id: 6,
        topic: "Bela Negara bagi Pelajar SD",
        question: "Bentuk partisipasi nyata seorang pelajar sekolah dasar dalam upaya pembelaan negara di masa sekarang ini adalah...",
        options: [
          "Belajar dengan tekun, berprestasi, menjaga nama baik bangsa, dan mencintai produk lokal",
          "Membawa senjata tajam untuk berjaga-jaga di gerbang sekolah",
          "Mengikuti demonstrasi jalanan yang diwarnai tindakan merusak fasilitas umum",
          "Menolak mempelajari bahasa daerah dan kebudayaan tradisional sendiri"
        ],
        correctAnswer: 0,
        explanation: "Bela negara bagi pelajar diwujudkan melalui belajar sungguh-sungguh, berprestasi, berkarakter jujur, serta bangga menggunakan produk buatan Indonesia."
      },
      {
        id: 7,
        topic: "Pengamalan Sila Kelima: Hidup Hemat",
        question: "Menyisihkan sebagian uang saku ke dalam celengan dan tidak menghabiskannya untuk membeli mainan mahal yang tidak bermanfaat mencerminkan pengamalan Sila ke-5, yaitu...",
        options: [
          "Mengembangkan sikap hemat, hidup bersahaja, dan tidak bergaya hidup mewah",
          "Menghargai hasil karya orang lain dalam bidang kesenian",
          "Membantu orang lain agar kelak mendapatkan pujian dari para tetangga",
          "Menghormati hak milik orang lain saat sedang berkunjung"
        ],
        correctAnswer: 0,
        explanation: "Butir pengamalan Sila ke-5 mengajak kita untuk tidak boros, tidak bergaya hidup bermewah-mewahan, serta suka menabung untuk masa depan."
      },
      {
        id: 8,
        topic: "Keberagaman sebagai Modal Pembangunan",
        question: "Keberagaman suku, bahasa daerah, dan tradisi di Indonesia bukanlah pemecah belah, melainkan modal berharga untuk...",
        options: [
          "Memperkaya khazanah kebudayaan nasional dan daya tarik wisata nusantara",
          "Menentukan suku mana yang berhak menguasai kepengurusan negara",
          "Menciptakan persaingan antarsuku untuk saling menjatuhkan",
          "Mengubah ideologi dasar negara sesuai adat suku yang terbanyak"
        ],
        correctAnswer: 0,
        explanation: "Keberagaman adalah kekayaan tak ternilai yang memperkuat identitas budaya bangsa Indonesia di mata peradaban dunia."
      },
      {
        id: 9,
        topic: "Tanggung Jawab Fasilitas Umum",
        question: "Taman bermain kota, halte bus, dan rambu penyeberangan jalan dibangun dari uang rakyat. Kewajiban kita saat memanfaatkan fasilitas tersebut adalah...",
        options: [
          "Menjaga kebersihan, merawat, dan tidak mencoret-coret fasilitas umum",
          "Mencatut atau membawa pulang bagian kursi taman untuk digunakan di rumah",
          "Menggoreskan nama pribadi pada dinding halte sebagai tanda kenang-kenangan",
          "Membiarkan orang lain merusak tanaman tanpa mengingatkan petugas"
        ],
        correctAnswer: 0,
        explanation: "Fasilitas umum adalah milik bersama yang wajib dipelihara bersama-sama agar tetap bermanfaat dan nyaman dipakai seluruh warga."
      },
      {
        id: 10,
        topic: "Kearifan Lokal Gotong Royong",
        question: "Tradisi tolong-menolong masyarakat nusantara seperti 'Gugur Gunung' di Jawa dan 'Subak' di Bali mencerminkan kepribadian bangsa yang mengutamakan...",
        options: [
          "Kerja sama, asas kekeluargaan, dan kebersamaan untuk kemaslahatan bersama",
          "Persaingan mencari keuntungan materi sebesar-besarnya untuk diri sendiri",
          "Ketergantungan penuh terhadap bantuan dana dari negara asing",
          "Pembayaran upah yang sangat mahal bagi setiap tetangga yang membantu"
        ],
        correctAnswer: 0,
        explanation: "Tradisi gotong royong nusantara adalah bukti nyata bahwa sejak dahulu kala bangsa Indonesia menjunjung tinggi persaudaraan dan kerja sama tanpa pamrih."
      }
    ]
  },

  6: {
    gradeName: "Kelas 6 SD",
    gradeBadge: "Fase C • Sejarah Perumusan & Demokrasi",
    gradeIcon: "flagWaving",
    themeColor: "#FECDD3",
    accentColor: "#E11D48",
    description: "Mendalami sejarah lahirnya Pancasila, sidang BPUPKI/PPKI, tokoh proklamasi, ideologi terbuka, dan pengabdian bangsa.",
    questions: [
      {
        id: 1,
        topic: "Sejarah Perumusan Pancasila",
        question: "Badan bentukan tahun 1945 yang bertugas menyelidiki usaha persiapan kemerdekaan Indonesia dan pertama kali merumuskan calon dasar negara adalah...",
        options: [
          "BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia)",
          "PPKI (Panitia Persiapan Kemerdekaan Indonesia)",
          "KNIP (Komite Nasional Indonesia Pusat)",
          "Budi Utomo pergerakan pemuda nusantara"
        ],
        correctAnswer: 0,
        explanation: "BPUPKI dibentuk pada 29 April 1945. Pada sidang pertamanya (29 Mei - 1 Juni 1945), para tokoh bangsa merumuskan dasar negara Indonesia."
      },
      {
        id: 2,
        topic: "Pidato Bersejarah 1 Juni 1945",
        question: "Tokoh bangsa yang menyampaikan pidato pada 1 Juni 1945 dan untuk pertama kalinya mengusulkan lima prinsip yang dinamainya 'Pancasila' adalah...",
        options: [
          "Ir. Soekarno",
          "Drs. Mohammad Hatta",
          "Mr. Mohammad Yamin",
          "Prof. Dr. Soepomo"
        ],
        correctAnswer: 0,
        explanation: "Pada tanggal 1 Juni 1945, Ir. Soekarno berpidato mengusulkan lima dasar negara yang dinamai Pancasila. Tanggal ini diperingati sebagai Hari Lahir Pancasila."
      },
      {
        id: 3,
        topic: "Perubahan Kalimat Piagam Jakarta",
        question: "Pada 18 Agustus 1945, para pendiri bangsa bermusyawarah mengubah kalimat sila pertama Piagam Jakarta menjadi 'Ketuhanan Yang Maha Esa'. Hal ini membuktikan bahwa para pendiri bangsa...",
        options: [
          "Mengutamakan persatuan dan keutuhan seluruh rakyat Indonesia yang majemuk",
          "Mengikuti kemauan penjajah Jepang yang belum meninggalkan Indonesia",
          "Hanya mementingkan kelompok perwakilan dari satu pulau saja",
          "Terburu-buru ingin segera mengakhiri jalannya sidang perumusan"
        ],
        correctAnswer: 0,
        explanation: "Keputusan agung para pendiri bangsa mengubah rumusan sila pertama menunjukkan sikap kenegarawanan demi merangkul seluruh rakyat Indonesia dari timur hingga barat."
      },
      {
        id: 4,
        topic: "Pancasila sebagai Ideologi Terbuka",
        question: "Pancasila diakui sebagai ideologi terbuka bagi bangsa Indonesia. Maksud dari ideologi terbuka adalah bahwa Pancasila...",
        options: [
          "Mampu menyesuaikan diri dengan perkembangan zaman tanpa mengubah nilai-nilai luhur dasarnya",
          "Dapat diubah dan diganti setiap kali ada pergantian presiden baru",
          "Bebas menerima ideologi asing seperti komunisme dan liberalisme masuk ke Indonesia",
          "Hanya berlaku apabila telah disetujui oleh organisasi bangsa-bangsa di dunia"
        ],
        correctAnswer: 0,
        explanation: "Ideologi terbuka berarti nilai-nilai dasarnya (Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, Keadilan) bersifat tetap, namun penerapannya dinamis mengikuti kemajuan iptek dan zaman."
      },
      {
        id: 5,
        topic: "Cinta Produk Dalam Negeri",
        question: "Memilih memakai sepatu sekolah, pakaian batik, dan tas produksi perajin lokal Indonesia daripada produk impor luar negeri merupakan wujud penerapan nilai Pancasila, yaitu...",
        options: [
          "Cinta tanah air dan kemandirian ekonomi bangsa",
          "Sikap menutup diri terhadap kemajuan teknologi luar negeri",
          "Tindakan terpaksa karena harga barang lokal lebih murah",
          "Bentuk rasa takut untuk mencoba produk negara tetangga"
        ],
        correctAnswer: 0,
        explanation: "Mencintai dan membeli produk lokal menggerakkan perekonomian bangsa, mendukung UMKM rakyat, dan merupakan wujud nyata patriotisme kebangsaan."
      },
      {
        id: 6,
        topic: "Musyawarah untuk Mufakat",
        question: "Ciri khas pelaksanaan demokrasi Pancasila di Indonesia dalam menyelesaikan permasalahan bersama adalah mengedepankan...",
        options: [
          "Musyawarah untuk mencapai mufakat yang dilandasi semangat kekeluargaan",
          "Pemungutan suara yang memenangkan pihak pemilik modal kekayaan terbesar",
          "Keputusan sepihak oleh golongan yang anggotanya paling banyak bersuara keras",
          "Penyelesaian sengketa melalui pertarungan fisik dan adu kekuatan"
        ],
        correctAnswer: 0,
        explanation: "Demokrasi Pancasila mengutamakan musyawarah mufakat dengan akal sehat dan hati nurani yang luhur, bukan tirani mayoritas atau dominasi kekuatan modal."
      },
      {
        id: 7,
        topic: "Prinsip Keadilan di Lingkungan Sekolah",
        question: "Bapak dan ibu guru memberikan perlakuan serta kesempatan yang setara bagi semua siswa untuk berpendapat dan mengembangkan bakat tanpa membeda-bedakan latar belakang. Hal ini mencerminkan Sila...",
        options: [
          "Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia",
          "Ketiga: Persatuan Indonesia",
          "Kedua: Kemanusiaan yang Adil dan Beradab",
          "Pertama: Ketuhanan Yang Maha Esa"
        ],
        correctAnswer: 0,
        explanation: "Memberikan kesempatan dan hak yang setara kepada setiap peserta didik tanpa diskriminasi merupakan wujud nyata pengamalan Sila ke-5 di sekolah."
      },
      {
        id: 8,
        topic: "Tantangan Pancasila di Era Globalisasi",
        question: "Di tengah derasnya arus informasi internet dan media sosial saat ini, ancaman yang dapat merusak persatuan bangsa jika kita melupakan nilai Pancasila adalah...",
        options: [
          "Penyebaran ujaran kebencian bernuansa SARA dan hoaks yang mengadu domba",
          "Kemudahan mengakses buku perpustakaan digital untuk belajar",
          "Terbukanya peluang kolaborasi penelitian ilmiah antarpelajar dunia",
          "Berkurangnya biaya pengiriman surat kabar cetak ke pelosok desa"
        ],
        correctAnswer: 0,
        explanation: "Penyebaran hoaks dan politik adu domba berbau SARA di media sosial adalah bahaya nyata yang harus kita tangkal dengan berpegang teguh pada nilai persatuan Pancasila."
      },
      {
        id: 9,
        topic: "Kewajiban Pajak bagi Pembangunan",
        question: "Salah satu kewajiban utama warga negara yang sudah berpenghasilan untuk membiayai pembangunan jalan raya, jembatan, dan sekolah negeri adalah...",
        options: [
          "Membayar pajak tepat pada waktunya secara jujur dan tertib",
          "Memberikan sumbangan sukarela jika diminta oleh pejabat daerah",
          "Menyimpan seluruh uang simpanan di bank luar negeri",
          "Mengkritik fasilitas negara tanpa ikut berpartisipasi merawatnya"
        ],
        correctAnswer: 0,
        explanation: "Pajak adalah gotong royong modern seluruh rakyat untuk membiayai fasilitas publik, rumah sakit, pertahanan, dan pendidikan generasi penerus bangsa."
      },
      {
        id: 10,
        topic: "Mengisi Kemerdekaan Indonesia",
        question: "Kemerdekaan Indonesia diraih dengan pengorbanan jiwa dan raga para pahlawan kusuma bangsa. Cara paling mulia bagi generasi muda dalam mengisi kemerdekaan adalah...",
        options: [
          "Menuntut ilmu dengan tekun, berakhlak mulia, dan berkarya positif bagi kemajuan bangsa",
          "Menuntut perlakuan istimewa dari pemerintah karena merasa warga asli",
          "Berpesta pora setiap hari tanpa memikirkan masa depan generasi bangsa",
          "Mengadopsi seluruh budaya luar negeri tanpa menyaring nilai baik dan buruknya"
        ],
        correctAnswer: 0,
        explanation: "Mengisi kemerdekaan berarti meneruskan perjuangan pahlawan dengan belajar giat, menjaga persatuan, dan berkontribusi nyata bagi kejayaan tanah air tercinta."
      }
    ]
  }
};

