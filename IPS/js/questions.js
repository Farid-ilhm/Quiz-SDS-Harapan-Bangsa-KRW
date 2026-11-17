/**
 * Bank Soal Kuis IPS SD Lengkap Kelas 1 sampai 6 (Petualangan Nusantara)
 * Masing-masing kelas terdiri dari 10 soal kurikulum IPS SD yang edukatif,
 * tidak membocorkan jawaban di dalam kalimat soal atau pilihan,
 * serta dilengkapi pembahasan ramah anak tanpa karakter em dash.
 */

const GradeLevels = [
  {
    grade: 1,
    title: "Kelas 1 SD",
    sub: "Keluarga, Diri & Lingkungan Rumah",
    iconKey: "familyHome",
    badgeColor: "amber",
    desc: "Mengenal identitas diri, kasih sayang dalam keluarga, ruangan di rumah, dan kebiasaan baik sehari-hari."
  },
  {
    grade: 2,
    title: "Kelas 2 SD",
    sub: "Hidup Rukun & Lingkungan Sekitar",
    iconKey: "communityHand",
    badgeColor: "emerald",
    desc: "Belajar tolong-menolong dengan tetangga, denah sederhana, tugas piket sekolah, dan dokumen keluarga."
  },
  {
    grade: 3,
    title: "Kelas 3 SD",
    sub: "Kenampakan Alam, Pasar & Pekerjaan",
    iconKey: "marketNature",
    badgeColor: "sky",
    desc: "Eksplorasi gunung, danau, waduk buatan, alat arah mata angin, pasar tradisional, dan jenis pekerjaan."
  },
  {
    grade: 4,
    title: "Kelas 4 SD",
    sub: "Peta, Sumber Daya & Budaya Nusantara",
    iconKey: "mapCulture",
    badgeColor: "purple",
    desc: "Memahami simbol legenda peta, kekayaan alam nusantara, rumah adat, tarian daerah, dan kegiatan distribusi."
  },
  {
    grade: 5,
    title: "Kelas 5 SD",
    sub: "Kerajaan Sejarah & Perjuangan Bangsa",
    iconKey: "historyShip",
    badgeColor: "rose",
    desc: "Menelusuri kerajaan Hindu-Buddha-Islam, pahlawan kemerdekaan, peristiwa Rengasdengklok, dan koperasi."
  },
  {
    grade: 6,
    title: "Kelas 6 SD",
    sub: "Kawasan ASEAN, Benua & Globalisasi",
    iconKey: "aseanGlobe",
    badgeColor: "indigo",
    desc: "Mengenal negara tetangga ASEAN, letak benua dunia, jalur pelayaran terusan, komoditas ekspor, dan perdamaian."
  }
];

const QuizQuestions = {
  // =========================================================================
  // KELAS 1 SD (10 SOAL)
  // =========================================================================
  1: [
    {
      id: "ips-1-1",
      topic: "Identitas Diri",
      question: "Saat pertama kali berkenalan dengan teman baru di depan kelas, informasi utama yang kita sebutkan adalah...",
      options: [
        "Nama lengkap dan nama panggilan",
        "Warna baju kesukaan",
        "Jumlah uang saku harian",
        "Jenis mainan di rumah"
      ],
      correctIndex: 0,
      explanation: "Nama lengkap dan panggilan adalah identitas diri paling dasar agar teman baru mudah mengenal dan memanggil kita."
    },
    {
      id: "ips-1-2",
      topic: "Kerukunan Keluarga",
      question: "Sikap terpuji yang sebaiknya kita tunjukkan saat adik sedang asyik belajar menyusun balok mainan adalah...",
      options: [
        "Merebut mainannya sampai menangis",
        "Menemani dan membantu adik dengan sabar",
        "Menyuruh adik keluar dari ruangan",
        "Membiarkan mainannya berantakan di lantai"
      ],
      correctIndex: 1,
      explanation: "Menemani dan membimbing adik dengan sabar menciptakan suasana rumah yang rukun, damai, dan penuh kasih sayang."
    },
    {
      id: "ips-1-3",
      topic: "Tugas di Rumah",
      question: "Setelah bangun tidur pada pagi hari, kebiasaan mandiri yang dapat kita lakukan di kamar adalah...",
      options: [
        "Langsung bermain game di ponsel",
        "Merapikan selimut dan bantal sendiri",
        "Menunggu ibu merapikan tempat tidur",
        "Menumpuk pakaian kotor di atas kasur"
      ],
      correctIndex: 1,
      explanation: "Merapikan tempat tidur sendiri setelah bangun pagi melatih kemandirian dan rasa tanggung jawab sejak dini."
    },
    {
      id: "ips-1-4",
      topic: "Lingkungan Rumah",
      question: "Ruangan di dalam rumah yang biasa digunakan oleh ibu atau ayah untuk memasak makanan keluarga adalah...",
      options: [
        "Kamar tidur",
        "Ruang tamu",
        "Dapur",
        "Garasi"
      ],
      correctIndex: 2,
      explanation: "Dapur adalah tempat khusus di dalam rumah untuk mengolah bahan makanan dan memasak sajian bergizi bagi keluarga."
    },
    {
      id: "ips-1-5",
      topic: "Sopan Santun",
      question: "Sebelum melangkahkan kaki berangkat menuju ke sekolah, sikap sopan yang kita lakukan kepada orang tua adalah...",
      options: [
        "Berpamitan dan mencium tangan orang tua",
        "Berlari kencang tanpa berbicara",
        "Meminta uang jajan yang sangat banyak",
        "Menutup pintu rumah dengan suara keras"
      ],
      correctIndex: 0,
      explanation: "Berpamitan dan mencium tangan ayah bunda adalah wujud rasa hormat dan memohon doa restu agar belajar dengan lancar."
    },
    {
      id: "ips-1-6",
      topic: "Alamat Rumah",
      question: "Mengetahui nama jalan dan nomor rumah tempat tinggal kita sangat penting agar kita...",
      options: [
        "Bisa membanggakannya kepada orang lain",
        "Tidak tersesat dan tahu arah pulang",
        "Mendapat hadiah dari tetangga",
        "Bisa mengajak teman bermain sepanjang hari"
      ],
      correctIndex: 1,
      explanation: "Hafal alamat rumah membuat kita aman dan bisa meminta bantuan petunjuk arah dengan tepat jika sewaktu-waktu terpisah."
    },
    {
      id: "ips-1-7",
      topic: "Kebersihan Lingkungan",
      question: "Ketika selesai menyantap buah pisang di halaman rumah, kulit pisang tersebut sebaiknya dibuang ke...",
      options: [
        "Selokan air",
        "Halaman rumah tetangga",
        "Tempat sampah",
        "Bawah pohon rindang"
      ],
      correctIndex: 2,
      explanation: "Membuang sampah pada tempatnya menjaga lingkungan tetap bersih, rapi, dan mencegah orang lain terpeleset."
    },
    {
      id: "ips-1-8",
      topic: "Aturan Waktu",
      question: "Agar tubuh kita tetap sehat dan tidak mengantuk saat mendengarkan guru di sekolah, waktu malam sebaiknya digunakan untuk...",
      options: [
        "Menonton televisi sampai larut malam",
        "Bermain di luar rumah bersama teman",
        "Tidur malam tepat waktu",
        "Membaca komik hingga pagi hari"
      ],
      correctIndex: 2,
      explanation: "Tidur malam tepat waktu memberi kesempatan bagi tubuh anak untuk beristirahat sehingga bangun pagi dengan segar."
    },
    {
      id: "ips-1-9",
      topic: "Adab Makan",
      question: "Kebiasaan baik yang harus dilakukan sebelum kita menyantap sarapan pagi bersama keluarga adalah...",
      options: [
        "Mencuci tangan dengan sabun dan berdoa",
        "Berbicara dengan suara sangat keras",
        "Langsung mengambil makanan dengan tergesa-gesa",
        "Meninggalkan meja sebelum makanan habis"
      ],
      correctIndex: 0,
      explanation: "Mencuci tangan membunuh kuman penyakit, sedangkan berdoa adalah wujud rasa syukur kita atas rezeki makanan yang sehat."
    },
    {
      id: "ips-1-10",
      topic: "Tolong Menolong",
      question: "Contoh perbuatan saling tolong-menolong yang dapat kita lakukan bersama keluarga pada hari libur adalah...",
      options: [
        "Membantu ibu menyiram tanaman di taman",
        "Tidur seharian penuh di dalam kamar",
        "Menyuruh kakak mengerjakan tugas kita",
        "Mengabaikan panggilan orang tua"
      ],
      correctIndex: 0,
      explanation: "Membantu menyiram tanaman atau menyapu halaman meringankan pekerjaan orang tua dan mempererat kasih sayang keluarga."
    }
  ],

  // =========================================================================
  // KELAS 2 SD (10 SOAL)
  // =========================================================================
  2: [
    {
      id: "ips-2-1",
      topic: "Hidup Rukun Tetangga",
      question: "Ketika kita sedang berjalan santai dan berpapasan dengan tetangga dekat rumah, sikap yang ramah adalah...",
      options: [
        "Memalingkan muka dan pura-pura tidak melihat",
        "Tersenyum serta menyapa dengan sopan",
        "Berlari menjauh secepat mungkin",
        "Menutup wajah dengan kedua tangan"
      ],
      correctIndex: 1,
      explanation: "Menyapa tetangga dengan senyum ramah menjaga tali silaturahmi dan menciptakan lingkungan tempat tinggal yang damai."
    },
    {
      id: "ips-2-2",
      topic: "Denah Sederhana",
      question: "Gambar petunjuk sederhana yang menunjukkan posisi ruangan, jalan, atau lokasi rumah disebut...",
      options: [
        "Lukisan",
        "Denah",
        "Poster",
        "Grafik"
      ],
      correctIndex: 1,
      explanation: "Denah adalah gambar sederhana yang memudahkan seseorang mencari letak ruangan, bangunan, atau rute perjalanan."
    },
    {
      id: "ips-2-3",
      topic: "Kerjasama Sekolah",
      question: "Supaya ruang kelas tetap bersih, rapi, dan sejuk untuk belajar, tugas regu piket kelas harus...",
      options: [
        "Dikerjakan bersama seluruh anggota regu secara adil",
        "Diserahkan sepenuhnya kepada ketua kelas saja",
        "Ditinggalkan begitu saja saat bel pulang berbunyi",
        "Dikerjakan oleh murid yang datang terlambat"
      ],
      correctIndex: 0,
      explanation: "Melaksanakan piket kelas secara bersama dan kompak membuat pekerjaan cepat selesai dan melatih rasa tanggung jawab."
    },
    {
      id: "ips-2-4",
      topic: "Peran Keluarga",
      question: "Di dalam susunan keluarga, peran utama ayah sebagai kepala keluarga yang bijaksana adalah...",
      options: [
        "Hanya bermain sepanjang hari",
        "Memimpin keluarga dan mencari nafkah halal",
        "Menyerahkan seluruh urusan kepada kakek",
        "Memerintah anggota keluarga tanpa rasa peduli"
      ],
      correctIndex: 1,
      explanation: "Ayah berkewajiban melindungi, mendidik, dan memenuhi kebutuhan seluruh anggota keluarga dengan penuh keikhlasan."
    },
    {
      id: "ips-2-5",
      topic: "Menghargai Perbedaan",
      question: "Di sekolah, Made berasal dari Bali dan Siti berasal dari Jawa. Sikap terpuji yang harus mereka lakukan adalah...",
      options: [
        "Hanya mau berteman dengan suku yang sama",
        "Saling menghargai dan berteman dengan rukun",
        "Membanding-bandingkan kebiasaan daerah",
        "Menghindari berbicara satu sama lain"
      ],
      correctIndex: 1,
      explanation: "Perbedaan suku, budaya, dan asal daerah adalah anugerah persatuan yang harus disikapi dengan saling menghargai."
    },
    {
      id: "ips-2-6",
      topic: "Dokumen Keluarga",
      question: "Lembaran surat berharga milik keluarga yang memuat nama ayah, ibu, dan seluruh anak dalam satu rumah adalah...",
      options: [
        "Kuitansi belanja",
        "Kartu Keluarga",
        "Buku resep makanan",
        "Tiket perjalanan wisata"
      ],
      correctIndex: 1,
      explanation: "Kartu Keluarga (KK) adalah dokumen resmi kependudukan yang mencatat susunan anggota dan status hubungan dalam keluarga."
    },
    {
      id: "ips-2-7",
      topic: "Tata Tertib Sekolah",
      question: "Contoh perilaku yang menunjukkan ketaatan terhadap aturan dan tata tertib sekolah adalah...",
      options: [
        "Datang ke sekolah tepat waktu sebelum bel masuk",
        "Makan jajan di dalam kelas saat guru menerangkan",
        "Mencoret-coret dinding tembok kamar mandi",
        "Membuang bungkus es di kolong meja kelas"
      ],
      correctIndex: 0,
      explanation: "Tiba di sekolah tepat waktu merupakan bentuk kedisiplinan dan kepatuhan terhadap tata tertib lembaga pendidikan."
    },
    {
      id: "ips-2-8",
      topic: "Sportivitas Bermain",
      question: "Saat bermain permainan tradisional petak umpet bersama teman di lapangan, sikap yang baik adalah...",
      options: [
        "Mengubah aturan permainan sesuka hati",
        "Mematuhi aturan permainan dengan jujur",
        "Marah jika giliran kita yang berjaga",
        "Mendorong teman yang hendak berlari"
      ],
      correctIndex: 1,
      explanation: "Bermain dengan jujur dan mematuhi aturan membuat permainan terasa gembira, adil, dan tidak memicu pertengkaran."
    },
    {
      id: "ips-2-9",
      topic: "Sikap Lapang Dada",
      question: "Jika tanpa sengaja kita menjatuhkan kotak pensil teman hingga isinya berserakan, tindakan kita seharusnya adalah...",
      options: [
        "Pergi meninggalkan teman sambil tertawa",
        "Meminta maaf dengan tulus dan membantu merapikannya",
        "Menyalahkan teman karena meletakkan kotak pensil di sana",
        "Pura-pura tidak tahu dan berdiam diri"
      ],
      correctIndex: 1,
      explanation: "Berani meminta maaf secara tulus dan langsung memperbaiki kekhilafan mencerminkan anak yang berkarakter mulia."
    },
    {
      id: "ips-2-10",
      topic: "Kepedulian Sosial",
      question: "Tindakan yang pantas kita lakukan bersama orang tua saat mengetahui ada tetangga sebelah rumah yang sedang sakit adalah...",
      options: [
        "Membunyikan musik keras-keras di dekat rumahnya",
        "Menjenguk serta mendoakan agar lekas sembuh",
        "Menutup jendela agar tidak mendengar keluhannya",
        "Menyuruh tetangga tersebut segera pindah rumah"
      ],
      correctIndex: 1,
      explanation: "Menjenguk dan mendoakan kesembuhan orang yang sedang sakit adalah wujud nyata kepedulian antarsesama warga masyarakat."
    }
  ],

  // =========================================================================
  // KELAS 3 SD (10 SOAL)
  // =========================================================================
  3: [
    {
      id: "ips-3-1",
      topic: "Kenampakan Alam",
      question: "Bentang alam berikut yang terbentuk secara alami oleh keagungan ciptaan Tuhan tanpa dibuat manusia adalah...",
      options: [
        "Gunung dan sungai",
        "Gedung bertingkat",
        "Jembatan layang",
        "Kolam renang kota"
      ],
      correctIndex: 0,
      explanation: "Gunung, bukit, sungai, dan laut merupakan kenampakan alam murni yang terjadi melalui proses geologis bumi."
    },
    {
      id: "ips-3-2",
      topic: "Kenampakan Buatan",
      question: "Danau penampung air berukuran luas yang sengaja dibuat oleh manusia dengan membendung aliran sungai dinamakan...",
      options: [
        "Samudera",
        "Waduk",
        "Palung laut",
        "Mata air alami"
      ],
      correctIndex: 1,
      explanation: "Waduk atau bendungan adalah contoh kenampakan buatan yang dirancang manusia untuk mengelola pasokan air permukaan."
    },
    {
      id: "ips-3-3",
      topic: "Manfaat Kenampakan Buatan",
      question: "Salah satu manfaat utama dari pembuatan waduk bagi para petani di daerah pedesaan adalah...",
      options: [
        "Sebagai tempat balapan perahu cepat",
        "Menyediakan air irigasi untuk mengairi sawah",
        "Membuat lahan sawah menjadi kering permanen",
        "Mengurangi luas area tanaman padi"
      ],
      correctIndex: 1,
      explanation: "Waduk menyimpan cadangan air hujan yang sangat bermanfaat untuk saluran irigasi sawah ketika musim kemarau tiba."
    },
    {
      id: "ips-3-4",
      topic: "Arah Mata Angin",
      question: "Alat navigasi petunjuk arah mata angin yang jarum magnetnya selalu menunjuk ke arah utara dan selatan adalah...",
      options: [
        "Termometer",
        "Kompas",
        "Barometer",
        "Speedometer"
      ],
      correctIndex: 1,
      explanation: "Kompas bekerja memanfaatkan medan magnet bumi sehingga jarumnya senantiasa menunjuk arah kutub utara dan selatan."
    },
    {
      id: "ips-3-5",
      topic: "Kegiatan Jual Beli",
      question: "Tempat berkumpulnya para penjual sayur, buah, dan kebutuhan pokok yang memungkinkan pembeli menawar harga secara langsung adalah...",
      options: [
        "Pasar tradisional",
        "Mesin penjual otomatis",
        "Perpustakaan umum",
        "Kantor pos pusat"
      ],
      correctIndex: 0,
      explanation: "Pasar tradisional adalah pasar rakyat tempat bertemunya penjual dan pembeli secara langsung dengan proses tawar-menawar."
    },
    {
      id: "ips-3-6",
      topic: "Alat Pembayaran",
      question: "Alat pembayaran yang sah dan resmi digunakan dalam setiap kegiatan jual beli di wilayah Negara Kesatuan Republik Indonesia adalah...",
      options: [
        "Dollar",
        "Rupiah",
        "Ringgit",
        "Yen"
      ],
      correctIndex: 1,
      explanation: "Rupiah merupakan satu-satunya mata uang resmi yang diakui oleh undang-undang untuk transaksi keuangan di seluruh Indonesia."
    },
    {
      id: "ips-3-7",
      topic: "Jenis Pekerjaan",
      question: "Contoh profesi atau pekerjaan warga masyarakat yang menghasilkan barang kebutuhan pangan sehari-hari adalah...",
      options: [
        "Sopir bus antarkota",
        "Petani padi",
        "Dokter umum",
        "Tukang pangkas rambut"
      ],
      correctIndex: 1,
      explanation: "Petani menghasilkan wujud barang berupa gabah beras, sayur, jagung, dan buah yang kita konsumsi setiap hari."
    },
    {
      id: "ips-3-8",
      topic: "Pekerjaan Jasa",
      question: "Contoh profesi yang menghasilkan pelayanan atau jasa dalam mendidik dan membimbing siswa di sekolah adalah...",
      options: [
        "Guru",
        "Pengrajin gerabah",
        "Nelayan ikan",
        "Peternak sapi"
      ],
      correctIndex: 0,
      explanation: "Guru memberikan pelayanan jasa berupa bimbingan, pengetahuan, dan keterampilan mendidik tanpa menghasilkan benda fisik."
    },
    {
      id: "ips-3-9",
      topic: "Kebutuhan Pokok",
      question: "Tiga kebutuhan pokok (primer) yang paling mendasar bagi kelangsungan hidup manusia adalah...",
      options: [
        "Mobil, telepon pintar, dan komputer",
        "Sandang, pangan, dan papan",
        "Perhiasan emas, vila, dan perahu pesiar",
        "Sepeda motor, jam tangan, dan kacamata"
      ],
      correctIndex: 1,
      explanation: "Sandang (pakaian), pangan (makanan dan minuman), serta papan (tempat tinggal yang layak) adalah kebutuhan hidup paling pokok."
    },
    {
      id: "ips-3-10",
      topic: "Semangat Gotong Royong",
      question: "Warga masyarakat berkumpul bersama membersihkan parit dan memotong rumput liar di tepi jalan desa. Kegiatan terpuji ini disebut...",
      options: [
        "Kerja bakti gotong royong",
        "Pesta kembang api",
        "Pameran barang mewah",
        "Perlombaan lari cepat"
      ],
      correctIndex: 0,
      explanation: "Gotong royong adalah tradisi luhur bangsa Indonesia dalam menyelesaikan kepentingan bersama secara sukarela dan bersatu."
    }
  ],

  // =========================================================================
  // KELAS 4 SD (10 SOAL)
  // =========================================================================
  4: [
    {
      id: "ips-4-1",
      topic: "Komponen Peta",
      question: "Bagian pada lembar peta yang memuat keterangan mengenai arti dari berbagai simbol warna, garis, dan gambar adalah...",
      options: [
        "Judul peta",
        "Legenda",
        "Garis tepi",
        "Tahun pembuatan"
      ],
      correctIndex: 1,
      explanation: "Legenda adalah kolom keterangan simbol pada peta agar pembaca dapat memahami arti setiap tanda visual yang digambarkan."
    },
    {
      id: "ips-4-2",
      topic: "Sumber Daya Alam",
      question: "Kelompok sumber daya alam yang dapat diperbarui karena dapat terus berkembang biak atau dipulihkan kembali adalah...",
      options: [
        "Minyak bumi dan batu bara",
        "Hewan ternak dan tanaman pangan",
        "Gas alam cair dan bijih timah",
        "Emas murni dan tembaga"
      ],
      correctIndex: 1,
      explanation: "Tumbuhan dan hewan tergolong sumber daya alam hayati yang dapat diperbarui melalui kegiatan budidaya dan pemuliaan."
    },
    {
      id: "ips-4-3",
      topic: "Sumber Daya Mineral",
      question: "Sumber daya tambang energi yang tidak dapat diperbarui dan terbentuk dari sisa jasad renik jutaan tahun silam adalah...",
      options: [
        "Minyak bumi",
        "Sinar matahari",
        "Angin laut",
        "Air terjun"
      ],
      correctIndex: 0,
      explanation: "Minyak bumi merupakan bahan bakar fosil yang jumlahnya terbatas dan membutuhkan waktu jutaan tahun untuk terbentuk kembali."
    },
    {
      id: "ips-4-4",
      topic: "Rumah Adat Nusantara",
      question: "Rumah adat berbentuk panggung megah dengan lengkungan atap lancip menyerupai tanduk kerbau dari Sumatera Barat adalah...",
      options: [
        "Rumah Joglo",
        "Rumah Gadang",
        "Rumah Tongkonan",
        "Rumah Honai"
      ],
      correctIndex: 1,
      explanation: "Rumah Gadang adalah rumah tradisional suku Minangkabau yang beratap gonjong menjulang mirip tanduk kerbau perkasa."
    },
    {
      id: "ips-4-5",
      topic: "Semboyan Persatuan",
      question: "Semboyan bangsa Indonesia yang berasal dari kitab Sutasoma dan bermakna berbeda-beda tetapi tetap satu jua adalah...",
      options: [
        "Tut Wuri Handayani",
        "Bhinneka Tunggal Ika",
        "Garuda Pancasila",
        "Ing Ngarso Sung Tulodo"
      ],
      correctIndex: 1,
      explanation: "Bhinneka Tunggal Ika menegaskan bahwa meskipun kita berbeda suku, agama, dan adat istiadat, kita tetap satu bangsa Indonesia."
    },
    {
      id: "ips-4-6",
      topic: "Tradisi Daerah",
      question: "Upacara adat pembakaran jenazah yang sarat makna spiritual bagi umat Hindu di Pulau Bali dikenal dengan nama...",
      options: [
        "Rambu Solo",
        "Ngaben",
        "Kasada",
        "Sekaten"
      ],
      correctIndex: 1,
      explanation: "Ngaben merupakan upacara kremasi adat di Bali untuk mengembalikan unsur panca maha butha jasad ke alam semesta."
    },
    {
      id: "ips-4-7",
      topic: "Kegiatan Ekonomi",
      question: "Kegiatan menyalurkan barang atau jasa dari pihak produsen pembuat barang kepada konsumen pembeli dinamakan...",
      options: [
        "Produksi",
        "Distribusi",
        "Konsumsi",
        "Eksploitasi"
      ],
      correctIndex: 1,
      explanation: "Distribusi adalah mata rantai kegiatan ekonomi yang bertugas mengangkut dan menyalurkan barang ke tangan para pembeli."
    },
    {
      id: "ips-4-8",
      topic: "Kondisi Geografis",
      question: "Kawasan dataran tinggi yang memiliki suhu udara sejuk dan tanah vulkanik subur sangat cocok dimanfaatkan untuk...",
      options: [
        "Tambak ikan bandeng",
        "Perkebunan teh dan sayuran",
        "Pembuatan garam laut",
        "Pelabuhan kapal peti kemas"
      ],
      correctIndex: 1,
      explanation: "Dataran tinggi beriklim sejuk sangat mendukung pertumbuhan tanaman hortikultura seperti teh, kopi, kubis, dan wortel."
    },
    {
      id: "ips-4-9",
      topic: "Alat Musik Tradisional",
      question: "Alat musik khas berbahan bambu dari daerah Jawa Barat yang dimainkan dengan cara digoyangkan adalah...",
      options: [
        "Gamelan",
        "Angklung",
        "Saluang",
        "Sasando"
      ],
      correctIndex: 1,
      explanation: "Angklung adalah alat musik multitonal bernada indah dari bambu khas Sunda yang diakui dunia sebagai warisan budaya UNESCO."
    },
    {
      id: "ips-4-10",
      topic: "Apresiasi Budaya",
      question: "Sikap terpuji yang mencerminkan rasa bangga dan menghargai keragaman kesenian tari daerah nusantara adalah...",
      options: [
        "Menertawakan pakaian adat yang dipakai penari",
        "Menyaksikan pertunjukan tari daerah dengan tertib dan kagum",
        "Menganggap seni daerah sendiri yang paling hebat di dunia",
        "Meninggalkan tempat pertunjukan saat tarian dimulai"
      ],
      correctIndex: 1,
      explanation: "Menonton seni tari dengan tertib, antusias, dan apresiatif memperkukuh rasa persatuan dan melestarikan kekayaan budaya."
    }
  ],

  // =========================================================================
  // KELAS 5 SD (10 SOAL)
  // =========================================================================
  5: [
    {
      id: "ips-5-1",
      topic: "Letak Geografis",
      question: "Secara geografis, wilayah kepulauan Indonesia menempati posisi silang dunia yang sangat strategis di antara dua benua, yaitu...",
      options: [
        "Benua Eropa dan Benua Afrika",
        "Benua Asia dan Benua Australia",
        "Benua Amerika dan Benua Antarktika",
        "Benua Asia dan Benua Eropa"
      ],
      correctIndex: 1,
      explanation: "Indonesia terletak di antara Benua Asia di sebelah utara dan Benua Australia di sebelah selatan, menjadikannya jalur perdagangan dunia."
    },
    {
      id: "ips-5-2",
      topic: "Iklim Indonesia",
      question: "Wilayah nusantara memiliki iklim tropis dengan dua musim pergantian tahunan karena wilayahnya dilintasi oleh...",
      options: [
        "Garis bujur nol derajat",
        "Garis khatulistiwa",
        "Garis balik utara",
        "Kutub magnet bumi"
      ],
      correctIndex: 1,
      explanation: "Garis khatulistiwa (ekuator) melintasi kepulauan Indonesia sehingga menerima penyinaran sinar matahari sepanjang tahun."
    },
    {
      id: "ips-5-3",
      topic: "Kerajaan Sejarah",
      question: "Kerajaan bercorak Hindu paling tua di nusantara yang terletak di tepian Sungai Mahakam Kalimantan Timur adalah...",
      options: [
        "Kerajaan Majapahit",
        "Kerajaan Kutai",
        "Kerajaan Tarumanegara",
        "Kerajaan Mataram Kuno"
      ],
      correctIndex: 1,
      explanation: "Kerajaan Kutai Martapura dengan Raja Mulawarman dibuktikan oleh penemuan 7 buah prasasti Yupa bertarikh abad ke-4 Masehi."
    },
    {
      id: "ips-5-4",
      topic: "Kerajaan Maritim",
      question: "Kerajaan maritim Buddha terbesar di Sumatera Selatan yang pernah menjadi pusat studi agama Buddha terkemuka di Asia adalah...",
      options: [
        "Kerajaan Samudera Pasai",
        "Kerajaan Sriwijaya",
        "Kerajaan Singasari",
        "Kerajaan Banten"
      ],
      correctIndex: 1,
      explanation: "Sriwijaya di Palembang menguasai Selat Malaka dan menjadi pusat pengajaran agama Buddha yang masyhur hingga mancanegara."
    },
    {
      id: "ips-5-5",
      topic: "Peninggalan Budaya",
      question: "Candi bercorak Buddha termegah di dunia yang didirikan pada masa Dinasti Syailendra di tanah Jawa Tengah adalah...",
      options: [
        "Candi Prambanan",
        "Candi Borobudur",
        "Candi Mendut",
        "Candi Penataran"
      ],
      correctIndex: 1,
      explanation: "Candi Borobudur dibangun pada abad ke-8 sampai ke-9 oleh wangsa Syailendra sebagai mahakarya stupa dan relief ajaran Buddha."
    },
    {
      id: "ips-5-6",
      topic: "Kesultanan Islam",
      question: "Kerajaan Islam pertama yang berdiri di Pulau Jawa dengan raja pertamanya Raden Patah adalah...",
      options: [
        "Kesultanan Demak",
        "Kesultanan Cirebon",
        "Kesultanan Mataram Islam",
        "Kesultanan Banten"
      ],
      correctIndex: 0,
      explanation: "Kesultanan Demak berdiri pada akhir abad ke-15 didukung oleh para Wali Songo sebagai pelopor penyebaran Islam di tanah Jawa."
    },
    {
      id: "ips-5-7",
      topic: "Pahlawan Perjuangan",
      question: "Pahlawan nasional yang memimpin rakyat dalam Perang Jawa kurun waktu 1825 sampai 1830 dengan strategi perang gerilya adalah...",
      options: [
        "Pangeran Diponegoro",
        "Pattimura",
        "Tuanku Imam Bonjol",
        "Sultan Hasanuddin"
      ],
      correctIndex: 0,
      explanation: "Pangeran Diponegoro memimpin perjuangan heroik melawan penjajah Belanda yang sangat menguras kas dan kekuatan kolonial."
    },
    {
      id: "ips-5-8",
      topic: "Detik Kemerdekaan",
      question: "Peristiwa pengamanan Ir. Soekarno dan Mohammad Hatta oleh golongan muda ke suatu daerah menjelang proklamasi kemerdekaan adalah...",
      options: [
        "Bandung Lautan Api",
        "Peristiwa Rengasdengklok",
        "Puputan Margarana",
        "Pertempuran Ambarawa"
      ],
      correctIndex: 1,
      explanation: "Para pemuda membawa dwitunggal ke Rengasdengklok untuk mendesak agar proklamasi kemerdekaan lekas dikumandangkan tanpa pengaruh Jepang."
    },
    {
      id: "ips-5-9",
      topic: "Bentuk Badan Usaha",
      question: "Bentuk badan usaha ekonomi rakyat Indonesia yang berlandaskan asas kekeluargaan sesuai amanat UUD 1945 Pasal 33 adalah...",
      options: [
        "Perseroan Terbatas",
        "Koperasi",
        "Firma Dagang",
        "Perusahaan Asing"
      ],
      correctIndex: 1,
      explanation: "Koperasi adalah sokoguru perekonomian nasional yang bertujuan menyejahterakan para anggotanya atas dasar gotong royong."
    },
    {
      id: "ips-5-10",
      topic: "Persebaran Fauna",
      question: "Garis khayal yang membatasi wilayah persebaran fauna tipe Asiatis di bagian barat dengan fauna tipe Peralihan di Indonesia adalah...",
      options: [
        "Garis Weber",
        "Garis Wallace",
        "Garis Meridian",
        "Garis Bujur Timur"
      ],
      correctIndex: 1,
      explanation: "Garis Wallace membentang dari Selat Lombok ke arah utara melewati Selat Makassar untuk memisahkan ragam hewan Asiatis dan Peralihan."
    }
  ],

  // =========================================================================
  // KELAS 6 SD (10 SOAL)
  // =========================================================================
  6: [
    {
      id: "ips-6-1",
      topic: "Kawasan ASEAN",
      question: "Tokoh pejuang diplomasi yang mewakili bangsa Indonesia dalam penandatanganan Deklarasi Bangkok berdirinya ASEAN tahun 1967 adalah...",
      options: [
        "Ali Alatas",
        "Adam Malik",
        "Mohammad Roem",
        "Soebandrio"
      ],
      correctIndex: 1,
      explanation: "Adam Malik menjabat Menteri Luar Negeri RI saat menandatangani Deklarasi Bangkok bersama 4 menteri luar negeri negara pendiri lainnya."
    },
    {
      id: "ips-6-2",
      topic: "Negara Tetangga ASEAN",
      question: "Satu-satunya negara di kawasan Asia Tenggara yang dalam sejarahnya tidak pernah dijajah oleh bangsa barat atau bangsa Eropa adalah...",
      options: [
        "Myanmar",
        "Thailand",
        "Vietnam",
        "Laos"
      ],
      correctIndex: 1,
      explanation: "Thailand atau Negeri Gajah Putih berhasil mempertahankan kedaulatannya sebagai negara penyangga bebas jajahan di Asia Tenggara."
    },
    {
      id: "ips-6-3",
      topic: "Julukan Negara",
      question: "Negara anggota ASEAN yang dijuluki sebagai Lumbung Padi Asia Tenggara karena produktivitas panen padinya yang sangat berlimpah adalah...",
      options: [
        "Singapura",
        "Thailand",
        "Brunei Darussalam",
        "Malaysia"
      ],
      correctIndex: 1,
      explanation: "Sungai Chao Phraya yang subur menjadikan Thailand salah satu eksportir beras terbesar di dunia sehingga dijuluki lumbung padi."
    },
    {
      id: "ips-6-4",
      topic: "Bentuk Geografis ASEAN",
      question: "Persamaan kondisi geografis yang dimiliki oleh negara Indonesia dan Filipina di kawasan perairan Asia Tenggara adalah...",
      options: [
        "Keduanya tidak memiliki garis pantai",
        "Keduanya berbentuk negara kepulauan",
        "Seluruh daratannya berupa gurun pasir",
        "Berada di dekat kutub selatan"
      ],
      correctIndex: 1,
      explanation: "Indonesia dan Filipina merupakan dua negara kepulauan (archipelagic state) terbesar di Asia Tenggara dengan ribuan pulau."
    },
    {
      id: "ips-6-5",
      topic: "Benua Dunia",
      question: "Benua di dunia yang memiliki luas daratan paling besar serta menampung jumlah penduduk terbanyak di muka bumi adalah...",
      options: [
        "Benua Australia",
        "Benua Asia",
        "Benua Afrika",
        "Benua Eropa"
      ],
      correctIndex: 1,
      explanation: "Benua Asia mencakup hampir sepertiga daratan dunia dan dihuni oleh lebih dari separuh total populasi penduduk bumi."
    },
    {
      id: "ips-6-6",
      topic: "Jalur Pelayaran Dunia",
      question: "Terusan perairan buatan di wilayah Mesir yang menghubungkan Laut Tengah dengan Laut Merah untuk memperpendek rute kapal niaga adalah...",
      options: [
        "Terusan Panama",
        "Terusan Suez",
        "Selat Gibraltar",
        "Selat Bosporus"
      ],
      correctIndex: 1,
      explanation: "Terusan Suez memangkas jalur kapal dari Asia menuju Eropa tanpa harus memutari Benua Afrika lewat Tanjung Harapan."
    },
    {
      id: "ips-6-7",
      topic: "Globalisasi",
      question: "Salah satu dampak positif nyata dari arus globalisasi pada sektor teknologi komunikasi modern bagi masyarakat adalah...",
      options: [
        "Penyebaran informasi dan kabar penting berlangsung sangat cepat",
        "Harga kebutuhan pokok melonjak tak terkendali",
        "Masyarakat enggan menggunakan bahasa daerah",
        "Peralatan manual menjadi rusak total"
      ],
      correctIndex: 0,
      explanation: "Internet dan perangkat digital di era global memudahkan pertukaran kabar, pengetahuan, dan kerjasama antarbenua dalam hitungan detik."
    },
    {
      id: "ips-6-8",
      topic: "Ekspor Indonesia",
      question: "Komoditas hasil perkebunan unggulan dari Indonesia yang banyak diekspor untuk memenuhi kebutuhan pasar internasional adalah...",
      options: [
        "Gandum dan buah apel salju",
        "Kelapa sawit, kopi, dan karet",
        "Bunga tulip dan buah zaitun",
        "Biji kurma dan kismis manis"
      ],
      correctIndex: 1,
      explanation: "Indonesia adalah salah satu penghasil dan pengekspor minyak kelapa sawit (CPO), biji kopi, serta karet alam terbesar di dunia."
    },
    {
      id: "ips-6-9",
      topic: "Peran Perdamaian Dunia",
      question: "Wujud kontribusi aktif bangsa Indonesia dalam memelihara perdamaian dunia di bawah mandat organisasi PBB adalah...",
      options: [
        "Mengirimkan Pasukan Kontingen Garuda",
        "Membangun pangkalan militer di luar negeri",
        "Menutup hubungan diplomatik antarbangsa",
        "Memboikot perdagangan negara sahabat"
      ],
      correctIndex: 0,
      explanation: "Pasukan Garuda adalah kontingen penjaga perdamaian TNI yang ditugaskan ke berbagai zona konflik dunia di bawah bendera PBB."
    },
    {
      id: "ips-6-10",
      topic: "Sikap Terhadap Budaya Luar",
      question: "Sikap bijaksana yang perlu kita pegang teguh dalam menghadapi pengaruh kebudayaan asing di era keterbukaan modern adalah...",
      options: [
        "Meniru semua tren luar negeri tanpa pertimbangan",
        "Menyaring budaya asing dan tetap melestarikan nilai luhur bangsa",
        "Menolak seluruh kemajuan teknologi dari negara lain",
        "Malu mengenakan pakaian bermotif batik khas nusantara"
      ],
      correctIndex: 1,
      explanation: "Kita harus bersikap kritis menyerap hal-hal positif seperti ilmu pengetahuan dan etos kerja, sambil tetap menjaga jati diri budaya bangsa."
    }
  ]
};
