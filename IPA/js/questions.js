/**
 * Bank Soal Kuis IPA SD Lengkap Kelas 1 sampai 6
 * Masing-masing kelas berisi 10 soal kurikulum IPA/IPAS SD yang mendidik,
 * akurat, terstruktur, dan tidak membocorkan jawaban di dalam kalimat soal.
 * Dilengkapi dengan pembahasan sains yang ramah untuk anak-anak.
 */

const GradeLevels = [
  {
    grade: 1,
    title: "Kelas 1 SD",
    sub: "Mengenal Tubuh, Indra & Sekitar",
    iconKey: "humanBody",
    badgeColor: "emerald",
    desc: "Petualangan seru mengenal anggota tubuh, panca indra, hewan lucu, tanaman, dan lingkungan sekitar kita!"
  },
  {
    grade: 2,
    title: "Kelas 2 SD",
    sub: "Tumbuhan, Hewan & Benda",
    iconKey: "plantSprout",
    badgeColor: "teal",
    desc: "Belajar tempat hidup makhluk hidup, pertumbuhan tunas, sifat benda padat dan cair, serta kebersihan alam."
  },
  {
    grade: 3,
    title: "Kelas 3 SD",
    sub: "Wujud Benda, Gerak & Cuaca",
    iconKey: "matterStates",
    badgeColor: "sky",
    desc: "Eksplorasi wujud zat padat, cair, dan gas, perubahan membeku dan mencair, gaya gerak, serta fenomena cuaca."
  },
  {
    grade: 4,
    title: "Kelas 4 SD",
    sub: "Tumbuhan, Gaya & Energi",
    iconKey: "magnetEnergy",
    badgeColor: "amber",
    desc: "Memahami bagian tumbuhan, fotosintesis klorofil, daur hidup metamorfosis kupu-kupu, macam gaya, dan sifat cahaya."
  },
  {
    grade: 5,
    title: "Kelas 5 SD",
    sub: "Organ Tubuh, Ekosistem & Kalor",
    iconKey: "ecosystemGlobe",
    badgeColor: "indigo",
    desc: "Menjelajahi sistem pernapasan dan pencernaan manusia, jaring-jaring makanan, siklus air bumi, dan perpindahan kalor."
  },
  {
    grade: 6,
    title: "Kelas 6 SD",
    sub: "Perkembangbiakan, Listrik & Tata Surya",
    iconKey: "solarSystem",
    badgeColor: "purple",
    desc: "Belajar penyerbukan bunga, adaptasi makhluk hidup unik, rangkaian listrik seri dan paralel, magnet, serta planet tata surya."
  }
];

const QuizQuestions = {
  // =========================================================================
  // KELAS 1 SD (10 SOAL)
  // =========================================================================
  1: [
    {
      id: "ipa-1-1",
      topic: "Panca Indra",
      question: "Bagian tubuh yang kita gunakan untuk mencium harumnya bunga mawar di taman adalah...",
      options: [
        "Telinga",
        "Hidung",
        "Lidah",
        "Kulit"
      ],
      correctIndex: 1,
      explanation: "Hidung berfungsi sebagai indra penciuman untuk membaui aroma wangi maupun bau lainnya di sekitar kita."
    },
    {
      id: "ipa-1-2",
      topic: "Panca Indra",
      question: "Ketika mendengarkan kicauan burung yang merdu di atas pohon, kita menggunakan indra...",
      options: [
        "Pendengaran",
        "Penglihatan",
        "Peraba",
        "Pengecap"
      ],
      correctIndex: 0,
      explanation: "Telinga adalah alat indra pendengaran kita untuk menangkap gelombang suara dan bunyi."
    },
    {
      id: "ipa-1-3",
      topic: "Kesehatan Tubuh",
      question: "Agar gigi kita tetap kuat, bersih, dan terhindar dari kuman pembusuk sisa makanan, kita harus...",
      options: [
        "Mencuci muka dengan air dingin",
        "Menggosok gigi secara teratur",
        "Memotong kuku tangan saja",
        "Keramas setiap pagi hari"
      ],
      correctIndex: 1,
      explanation: "Menggosok gigi teratur setelah makan dan sebelum tidur menjaga gigi tetap bersih dan terbebas dari plak kuman."
    },
    {
      id: "ipa-1-4",
      topic: "Makhluk Hidup",
      question: "Benda berikut ini yang termasuk makhluk hidup di lingkungan sekitar rumah kita adalah...",
      options: [
        "Batu kali",
        "Tanaman melati",
        "Sepeda roda dua",
        "Kursi kayu"
      ],
      correctIndex: 1,
      explanation: "Tanaman melati adalah makhluk hidup karena dapat bertumbuh, memerlukan air, dan menyerap sinar matahari."
    },
    {
      id: "ipa-1-5",
      topic: "Dunia Hewan",
      question: "Hewan peliharaan lucu yang bergerak dengan cara melompat dan senang memakan wortel adalah...",
      options: [
        "Kucing belang",
        "Kelinci",
        "Bebek",
        "Kura-kura"
      ],
      correctIndex: 1,
      explanation: "Kelinci memiliki sepasang kaki belakang yang kuat untuk melompat lincah dan menyukai sayuran segar."
    },
    {
      id: "ipa-1-6",
      topic: "Matahari & Energi",
      question: "Matahari pagi yang bersinar terang memancarkan cahaya dan panas yang bermanfaat untuk...",
      options: [
        "Membuat langit menjadi gelap gulita",
        "Mengeringkan pakaian basah yang dijemur",
        "Membekukan air kolam menjadi es",
        "Menurunkan suhu udara di taman"
      ],
      correctIndex: 1,
      explanation: "Energi panas dari pancaran sinar matahari berguna menguapkan air pada pakaian jemuran sehingga cepat kering."
    },
    {
      id: "ipa-1-7",
      topic: "Langit & Waktu",
      question: "Pada malam hari yang cerah tanpa mendung, kita dapat mengamati penerangan alami di langit dari...",
      options: [
        "Matahari siang",
        "Bulan dan bintang",
        "Lampu jalan raya",
        "Pelangi warna-warni"
      ],
      correctIndex: 1,
      explanation: "Bulan yang memantulkan sinar matahari bersama bintang-bintang menghiasi pemandangan langit malam yang indah."
    },
    {
      id: "ipa-1-8",
      topic: "Bagian Tanaman",
      question: "Bagian tanaman yang biasanya tumbuh di dalam tanah untuk menyerap air dan zat hara adalah...",
      options: [
        "Helai daun",
        "Tangkai bunga",
        "Akar",
        "Buah manis"
      ],
      correctIndex: 2,
      explanation: "Akar menancap kokoh di dalam tanah untuk menyerap air serta mineral tanah yang dibutuhkan tanaman."
    },
    {
      id: "ipa-1-9",
      topic: "Indra Peraba",
      question: "Saat telapak tangan kita menyentuh es batu yang baru dikeluarkan dari lemari es, kulit akan merasakan sensasi...",
      options: [
        "Panas membakar",
        "Dingin dan beku",
        "Kasar berpasir",
        "Hangat terik"
      ],
      correctIndex: 1,
      explanation: "Kulit sebagai indra peraba mampu mengenali perbedaan suhu panas maupun dingin pada benda."
    },
    {
      id: "ipa-1-10",
      topic: "Makanan Sehat",
      question: "Agar tubuh anak senantiasa sehat, berenergi, dan tumbuh dengan baik, kita dianjurkan membiasakan...",
      options: [
        "Makan sayur, lauk bergizi, buah, dan cukup air putih",
        "Makan permen manis berlebihan sepanjang hari",
        "Hanya minum minuman bersoda setiap waktu",
        "Memilih gorengan berminyak setiap saat"
      ],
      correctIndex: 0,
      explanation: "Pola makan seimbang yang kaya vitamin, protein, serat, dan air putih membantu daya tahan tubuh anak tetap prima."
    }
  ],

  // =========================================================================
  // KELAS 2 SD (10 SOAL)
  // =========================================================================
  2: [
    {
      id: "ipa-2-1",
      topic: "Perkembangbiakan Hewan",
      question: "Induk ayam betina berkembang biak untuk melahirkan anak-anak ayam yang lucu dengan cara...",
      options: [
        "Melahirkan langsung",
        "Bertelur lalu mengeraminya",
        "Membelah diri",
        "Tumbuh dari tunas"
      ],
      correctIndex: 1,
      explanation: "Ayam tergolong hewan unggas yang berkembang biak dengan bertelur (ovipar) dan mengeraminya hingga menetas."
    },
    {
      id: "ipa-2-2",
      topic: "Pertumbuhan Tumbuhan",
      question: "Perubahan awal yang terlihat ketika biji kacang hijau mulai tumbuh menjadi kecambah baru adalah...",
      options: [
        "Mengeluarkan getah berbau",
        "Muncul akar kecil dan tunas batang",
        "Biji mengeras menjadi batu",
        "Langsung menghasilkan bunga besar"
      ],
      correctIndex: 1,
      explanation: "Saat berkecambah, biji yang basah akan pecah dan menumbuhkan calon akar ke bawah serta tunas daun ke atas."
    },
    {
      id: "ipa-2-3",
      topic: "Tempat Hidup Makhluk",
      question: "Hewan berikut ini yang menghabiskan seluruh hidupnya bernapas dan berenang di dalam air adalah...",
      options: [
        "Ikan mas koki",
        "Kucing rumahan",
        "Burung kenari",
        "Kambing perah"
      ],
      correctIndex: 0,
      explanation: "Ikan mas koki hidup di perairan tawar dan bernapas menyerap oksigen terlarut melalui organ insang."
    },
    {
      id: "ipa-2-4",
      topic: "Benda Padat",
      question: "Contoh benda berikut ini yang termasuk benda padat dan memiliki bentuk yang tidak berubah saat dipindahkan adalah...",
      options: [
        "Minyak kelapa",
        "Pensil kayu",
        "Air sirop manis",
        "Asap pembakaran"
      ],
      correctIndex: 1,
      explanation: "Pensil kayu adalah benda padat yang wujud dan bentuk fisiknya tetap kokoh meski dipindahkan ke tempat mana pun."
    },
    {
      id: "ipa-2-5",
      topic: "Benda Cair",
      question: "Sifat utama air teh saat dituangkan dari teko ke dalam cangkir bundar adalah...",
      options: [
        "Bentuknya berubah mengikuti bentuk cangkir",
        "Bentuknya tetap kotak kaku seperti teko",
        "Mengeras seketika seperti piring keramik",
        "Langsung melayang dan lenyap ke udara"
      ],
      correctIndex: 0,
      explanation: "Zat cair memiliki sifat khas yaitu bentuknya selalu menyesuaikan dengan wadah tempat ia berada."
    },
    {
      id: "ipa-2-6",
      topic: "Sifat Permukaan Benda",
      question: "Permukaan kulit buah nangka matang ketika diraba dengan telapak tangan akan terasa...",
      options: [
        "Licin seperti kaca",
        "Kasar dan berduri tumpul",
        "Basah berlendir",
        "Sangat halus seperti sutra"
      ],
      correctIndex: 1,
      explanation: "Kulit nangka memiliki struktur duri-duri tumpul sehingga permukaan luarnya terasa kasar saat disentuh."
    },
    {
      id: "ipa-2-7",
      topic: "Sumber Energi Alami",
      question: "Sumber energi alami paling utama di tata surya yang menghangatkan bumi dan menerangi siang hari adalah...",
      options: [
        "Baterai senter",
        "Api lilin",
        "Lampu pijar",
        "Matahari"
      ],
      correctIndex: 3,
      explanation: "Matahari adalah bola gas raksasa yang menjadi sumber energi panas dan cahaya terbesar bagi seluruh makhluk bumi."
    },
    {
      id: "ipa-2-8",
      topic: "Lingkungan Bersih",
      question: "Sampah plastik jajan yang dibuang sembarangan ke selokan depan sekolah dapat berakibat buruk yaitu...",
      options: [
        "Menyumbat aliran air parit dan memicu banjir",
        "Membuat air selokan menjadi bening bersih",
        "Menyuburkan tanaman teratai di taman",
        "Membuat udara sekitar beraroma wangi"
      ],
      correctIndex: 0,
      explanation: "Plastik tidak dapat hancur alami dengan cepat, sehingga mudah menyumbat selokan dan menimbulkan luapan air kotor."
    },
    {
      id: "ipa-2-9",
      topic: "Merawat Tanaman",
      question: "Tanaman hias di dalam pot perlu disiram air secukupnya dan diletakkan di tempat berudara segar agar...",
      options: [
        "Daunnya layu dan rontok menguning",
        "Tumbuh subur, sehat, dan segar",
        "Batangnya rapuh dan cepat busuk",
        "Tanahnya kering kerontang"
      ],
      correctIndex: 1,
      explanation: "Air dan cahaya membantu tanaman mengolah nutrisi sehingga daun-daunnya tetap hijau dan bunganya mekar subur."
    },
    {
      id: "ipa-2-10",
      topic: "Kebersihan Kelas",
      question: "Sikap terpuji yang mencerminkan rasa cinta pada kebersihan ruang belajar bersama adalah...",
      options: [
        "Membuang bungkus kue ke bawah kolong meja",
        "Membuang sisa sampah ke tong sampah yang disediakan",
        "Mencoret-coret papan tulis dengan kapur",
        "Membiarkan remahan makanan di lantai"
      ],
      correctIndex: 1,
      explanation: "Membuang sampah pada tempat sampah menjaga ruang kelas selalu nyaman, bersih, dan bebas dari serangga pembawa penyakit."
    }
  ],

  // =========================================================================
  // KELAS 3 SD (10 SOAL)
  // =========================================================================
  3: [
    {
      id: "ipa-3-1",
      topic: "Ciri Makhluk Hidup",
      question: "Ikan mengambil oksigen di air dengan insang, sedangkan kita manusia di daratan bernapas menggunakan...",
      options: [
        "Paru-paru",
        "Kulit berlendir",
        "Tenggorokan saja",
        "Trakea serangga"
      ],
      correctIndex: 0,
      explanation: "Organ pernapasan utama manusia adalah paru-paru untuk menyerap gas oksigen dari udara bebas."
    },
    {
      id: "ipa-3-2",
      topic: "Perubahan Wujud Benda",
      question: "Batang cokelat yang diletakkan di atas wajan panas lama-kelamaan menjadi lelehan kental. Perubahan ini dinamakan...",
      options: [
        "Membeku",
        "Menguap",
        "Mencair",
        "Mengembun"
      ],
      correctIndex: 2,
      explanation: "Mencair adalah peristiwa perubahan wujud zat dari bentuk padat menjadi cair akibat menerima energi panas (kalor)."
    },
    {
      id: "ipa-3-3",
      topic: "Perubahan Wujud Benda",
      question: "Air tawar yang dimasukkan ke dalam wadah cetakan lalu disimpan di ruang pembeku (freezer) akan berubah menjadi es batu melalui proses...",
      options: [
        "Membeku",
        "Mengembun",
        "Menyublim",
        "Menguap"
      ],
      correctIndex: 0,
      explanation: "Membeku adalah perubahan wujud zat dari fase cair menjadi padat karena melepaskan panas pada suhu dingin."
    },
    {
      id: "ipa-3-4",
      topic: "Perubahan Wujud Benda",
      question: "Saat air di dalam panci direbus terus-menerus hingga mendidih, air berkurang dan membubung ke udara menjadi uap. Proses ini disebut...",
      options: [
        "Menguap",
        "Membeku",
        "Mengendap",
        "Menghablur"
      ],
      correctIndex: 0,
      explanation: "Menguap terjadi saat zat cair memperoleh panas berlebih sehingga partikelnya berubah menjadi zat gas (uap air)."
    },
    {
      id: "ipa-3-5",
      topic: "Perubahan Wujud Benda",
      question: "Butiran air yang muncul membasahi dinding luar gelas berisi es sirop dingin di siang hari merupakan contoh dari peristiwa...",
      options: [
        "Menghablur",
        "Mengembun",
        "Menguap",
        "Menyublim"
      ],
      correctIndex: 1,
      explanation: "Mengembun terjadi saat uap air yang ada di udara luar menempel pada permukaan gelas yang bersuhu dingin."
    },
    {
      id: "ipa-3-6",
      topic: "Sifat Benda Gas",
      question: "Balon karet yang awalnya kempis dapat mengembang bulat ketika ditiup kencang. Hal ini menunjukkan bahwa udara memiliki sifat...",
      options: [
        "Berwujud padat dan kaku",
        "Mengisi dan menekan ke seluruh ruangan wadahnya",
        "Selalu berwujud cair jernih",
        "Tidak memiliki massa maupun volume"
      ],
      correctIndex: 1,
      explanation: "Gas memiliki sifat partikel yang bebas bergerak menekan ke segala arah dan mengisi penuh ruangan wadah yang menampungnya."
    },
    {
      id: "ipa-3-7",
      topic: "Gaya & Gerak",
      question: "Bola sepak yang meluncur di atas rumput lapangan lama-kelamaan akan melambat dan berhenti sendiri karena pengaruh...",
      options: [
        "Gaya gesek antara kulit bola dengan rumput tanah",
        "Tarikan gaya magnet dari awan",
        "Cahaya matahari yang menyilaukan",
        "Hilangnya berat bola secara mendadak"
      ],
      correctIndex: 0,
      explanation: "Gaya gesek yang bekerja berlawanan arah dengan arah gerak bola menahan laju bola hingga akhirnya terhenti."
    },
    {
      id: "ipa-3-8",
      topic: "Gerak Benda",
      question: "Kelereng kaca yang disentil dengan jari di atas lantai ubin yang datar dan rata akan bergerak secara...",
      options: [
        "Melayang-layang di udara",
        "Menggelinding berputar",
        "Mengendap kaku tanpa gerak",
        "Membelah diri menjadi dua"
      ],
      correctIndex: 1,
      explanation: "Benda dengan bentuk bulat simetris seperti bola dan kelereng bergerak menggelinding saat diberikan gaya dorong."
    },
    {
      id: "ipa-3-9",
      topic: "Cuaca & Iklim",
      question: "Pemandangan langit yang tertutup gumpalan awan hitam pekat disertai angin kencang yang sejuk biasanya merupakan tanda akan datangnya...",
      options: [
        "Cuaca panas terik tanpa angin",
        "Hujan lebat",
        "Kemarau panjang berdebu",
        "Hujan salju di pantai"
      ],
      correctIndex: 1,
      explanation: "Awan kumulonimbus yang tebal dan berwarna gelap menampung banyak uap air dingin yang siap jatuh sebagai hujan deras."
    },
    {
      id: "ipa-3-10",
      topic: "Kesehatan Tubuh",
      question: "Untuk menjaga stamina tubuh agar tidak mudah dehidrasi saat berolahraga di bawah cuaca hangat, kita dianjurkan...",
      options: [
        "Memakai mantel bulu tebal tertutup",
        "Cukup meminum air putih bersih secara teratur",
        "Menolak minum air sama sekali",
        "Berdiri diam tanpa berteduh"
      ],
      correctIndex: 1,
      explanation: "Minum air putih mengembalikan cadangan cairan tubuh yang keluar melalui keringat saat kita aktif bergerak."
    }
  ],

  // =========================================================================
  // KELAS 4 SD (10 SOAL)
  // =========================================================================
  4: [
    {
      id: "ipa-4-1",
      topic: "Fotosintesis",
      question: "Zat hijau pada daun tumbuhan yang berfungsi menyerap energi sinar matahari dalam proses fotosintesis dinamakan...",
      options: [
        "Klorofil",
        "Stomata",
        "Kambium",
        "Epidermis"
      ],
      correctIndex: 0,
      explanation: "Klorofil adalah pigmen hijau pada daun yang menyerap energi radiasi matahari untuk memasak zat makanan tumbuhan."
    },
    {
      id: "ipa-4-2",
      topic: "Fotosintesis",
      question: "Gas di udara yang diserap oleh daun tumbuhan hijau sebagai bahan baku pembuatan makanannya adalah...",
      options: [
        "Karbon dioksida",
        "Gas helium",
        "Gas nitrogen",
        "Gas metana"
      ],
      correctIndex: 0,
      explanation: "Tumbuhan hijau menyerap gas karbon dioksida (CO2) dari udara dan air tanah, lalu menghasilkan glukosa serta melepaskan oksigen."
    },
    {
      id: "ipa-4-3",
      topic: "Daur Hidup Hewan",
      question: "Urutan tahapan metamorfosis sempurna yang benar pada daur hidup kupu-kupu adalah...",
      options: [
        "Telur -> Ulat (Larva) -> Kepompong (Pupa) -> Kupu-kupu dewasa",
        "Telur -> Kupu-kupu kecil -> Ulat -> Kepompong",
        "Kepompong -> Telur -> Kupu-kupu dewasa -> Ulat",
        "Ulat -> Telur -> Kepompong -> Kupu-kupu muda"
      ],
      correctIndex: 0,
      explanation: "Metamorfosis sempurna kupu-kupu melalui 4 fase bertahap: telur menetas jadi ulat (larva), membuat kepompong (pupa), lalu keluar menjadi kupu-kupu dewasa."
    },
    {
      id: "ipa-4-4",
      topic: "Gaya Gravitasi",
      question: "Buah mangga yang sudah matang di pohon akan jatuh ke arah permukaan tanah. Hal ini terjadi akibat pengaruh...",
      options: [
        "Gaya magnet bumi",
        "Gaya gravitasi bumi",
        "Gaya pegas elastis",
        "Gaya gesek udara"
      ],
      correctIndex: 1,
      explanation: "Gaya gravitasi bumi adalah gaya tarik dari pusat bumi yang menarik semua benda bermassa jatuh ke bawah."
    },
    {
      id: "ipa-4-5",
      topic: "Gaya Gesek",
      question: "Permukaan ban kendaraan bermotor sengaja dibuat memiliki alur lekukan dan gerigi dengan tujuan...",
      options: [
        "Memperkecil gaya gesek agar permukaan ban licin",
        "Memperbesar gaya gesek agar kendaraan tidak mudah tergelincir",
        "Membuat laju kendaraan otomatis mundur",
        "Mengurangi daya tahan karet ban"
      ],
      correctIndex: 1,
      explanation: "Alur gerigi ban memperbesar gesekan dengan permukaan jalan beraspal sehingga ban memiliki cengkeraman rem yang kuat dan aman."
    },
    {
      id: "ipa-4-6",
      topic: "Perubahan Energi",
      question: "Ketika ibu menancapkan kabel setrika ke stopkontak listrik lalu menyalakannya, terjadi perubahan energi...",
      options: [
        "Energi listrik menjadi energi panas (kalor)",
        "Energi panas menjadi energi gerak mekanik",
        "Energi listrik menjadi energi bunyi saja",
        "Energi gerak menjadi energi kimiawi"
      ],
      correctIndex: 0,
      explanation: "Komponen pemanas pada setrika mengubah arus energi listrik menjadi energi panas untuk merapikan pakaian."
    },
    {
      id: "ipa-4-7",
      topic: "Energi Alternatif",
      question: "Pembangkit listrik ramah lingkungan yang memanfaatkan hembusan angin untuk memutar bilah kincir dinamakan pembangkit energi...",
      options: [
        "Geotermal bumi",
        "Bayu (angin)",
        "Nuklir buatan",
        "Biomassa kayu"
      ],
      correctIndex: 1,
      explanation: "Energi bayu (angin) adalah sumber energi terbarukan yang menggerakkan generator turbin angin tanpa menghasilkan polusi asap."
    },
    {
      id: "ipa-4-8",
      topic: "Bunyi & Perambatan",
      question: "Lonceng atau bel sekolah yang berbunyi nyaring dapat terdengar sampai ke ruang kelas karena getaran gelombang bunyi merambat lewat...",
      options: [
        "Ruang hampa tanpa materi",
        "Udara sebagai zat perantara",
        "Pancaran sinar matahari",
        "Garis medan magnet"
      ],
      correctIndex: 1,
      explanation: "Gelombang bunyi membutuhkan medium atau perantara (seperti udara, zat cair, atau benda padat) untuk sampai ke telinga kita."
    },
    {
      id: "ipa-4-9",
      topic: "Sifat-Sifat Cahaya",
      question: "Batang sedotan yang dicelupkan ke dalam gelas kaca berisi air jernih terlihat seolah-olah patah atau membengkok. Peristiwa ini membuktikan bahwa...",
      options: [
        "Cahaya dapat dibiaskan ketika melewati medium berbeda",
        "Cahaya tidak dapat menembus kaca bening",
        "Cahaya selalu merambat memutar membentuk lingkaran",
        "Cahaya dapat dipantulkan tegak lurus sempurna"
      ],
      correctIndex: 0,
      explanation: "Pembiasan (refraksi) cahaya terjadi saat berkas cahaya merambat miring melalui dua zat dengan kerapatan optik berbeda (udara ke air)."
    },
    {
      id: "ipa-4-10",
      topic: "Hubungan Makhluk Hidup",
      question: "Interaksi saling menguntungkan (simbiosis mutualisme) dapat diamati pada hubungan erat antara...",
      options: [
        "Kutu yang hidup di kulit kepala manusia",
        "Kumbang lebah dengan bunga tanaman",
        "Tanaman benalu dengan pohon inangnya",
        "Cacing pita di organ perut hewan"
      ],
      correctIndex: 1,
      explanation: "Lebah mendapatkan cairan nektar manis dari bunga, sedangkan bunga terbantu proses penyerbukannya oleh serbuk sari yang terbawa lebah."
    }
  ],

  // =========================================================================
  // KELAS 5 SD (10 SOAL)
  // =========================================================================
  5: [
    {
      id: "ipa-5-1",
      topic: "Sistem Pernapasan",
      question: "Bagian organ di dalam paru-paru manusia yang berfungsi sebagai tempat difusi pertukaran gas oksigen dan karbon dioksida adalah...",
      options: [
        "Alveolus",
        "Laring pita suara",
        "Batang tenggorok (trakea)",
        "Faring rongga tekak"
      ],
      correctIndex: 0,
      explanation: "Alveolus berbentuk gelembung-gelembung halus berdinding tipis yang dikelilingi kapiler darah tempat oksigen masuk dan karbon dioksida dilepas."
    },
    {
      id: "ipa-5-2",
      topic: "Pernapasan Hewan",
      question: "Hewan serangga seperti belalang dan capung bernapas mengalirkan udara segar ke sel-sel tubuhnya melalui saluran...",
      options: [
        "Insang lembaran",
        "Trakea dan pori stigma",
        "Paru-paru berongga",
        "Lendir pada sisik tubuh"
      ],
      correctIndex: 1,
      explanation: "Sistem trakea pada serangga mengedarkan oksigen langsung ke seluruh jaringan tubuh melalui lubang stigma di samping tubuh."
    },
    {
      id: "ipa-5-3",
      topic: "Sistem Pencernaan",
      question: "Organ pencernaan lambung manusia memproduksi asam klorida (HCl) yang berfungsi vital untuk...",
      options: [
        "Menyerap air sisa makanan",
        "Membunuh kuman penyakit dan mengaktifkan pepsin",
        "Mengunyah makanan secara mekanik dengan gigi",
        "Menghasilkan empedu penyerap lemak"
      ],
      correctIndex: 1,
      explanation: "Asam lambung (HCl) menciptakan suasana asam untuk membunuh bakteri patogen pada makanan serta mengaktifkan enzim pencerna protein."
    },
    {
      id: "ipa-5-4",
      topic: "Rantai Makanan",
      question: "Perhatikan rantai makanan sawah berikut: Tanaman Padi -> Belalang -> Katak -> Ular -> Burung Elang. Posisi hewan katak berperan sebagai...",
      options: [
        "Produsen penghasil energi",
        "Konsumen tingkat II (sekunder)",
        "Pengurai bahan sisa",
        "Konsumen puncak utama"
      ],
      correctIndex: 1,
      explanation: "Belalang memakan padi (konsumen primer I), lalu katak memangsa belalang sehingga katak berkedudukan sebagai konsumen sekunder II."
    },
    {
      id: "ipa-5-5",
      topic: "Ekosistem & Pengurai",
      question: "Dalam suatu komunitas ekosistem alam, organisme jamur dan bakteri pembusuk memegang peranan krusial sebagai...",
      options: [
        "Herbivor pemakan daun",
        "Dekomposer yang menguraikan bangkai menjadi unsur hara",
        "Karnivor pemburu mangsa",
        "Produsen pengolah energi surya"
      ],
      correctIndex: 1,
      explanation: "Dekomposer mendaur ulang sisa-sisa jasad makhluk hidup menjadi nutrisi tanah yang menyuburkan kembali tanaman produsen."
    },
    {
      id: "ipa-5-6",
      topic: "Siklus Air",
      question: "Proses penguapan air dari perairan samudra, danau, dan sungai ke lapisan atmosfer bumi akibat paparan panas matahari dinamakan...",
      options: [
        "Kondensasi uap",
        "Evaporasi",
        "Presipitasi hujan",
        "Infiltrasi tanah"
      ],
      correctIndex: 1,
      explanation: "Evaporasi adalah tahap siklus hidrologi di mana air berubah fasa menjadi uap air akibat panas energi surya."
    },
    {
      id: "ipa-5-7",
      topic: "Perpindahan Kalor",
      question: "Ujung gagang sendok logam yang kita pegang terasa hangat ketika ujung lainnya terendam dalam kuah sayur sup mendidih. Ini adalah bukti perpindahan kalor secara...",
      options: [
        "Konveksi zat alir",
        "Konduksi zat padat",
        "Radiasi gelombang hampa",
        "Isolasi suhu"
      ],
      correctIndex: 1,
      explanation: "Konduksi merupakan perpindahan panas merambat melalui zat padat tanpa disertai perpindahan fisik partikel penghantarnya."
    },
    {
      id: "ipa-5-8",
      topic: "Sifat Hantar Kalor",
      question: "Bahan berikut ini yang tergolong isolator panas (sukar menghantarkan panas) sehingga cocok dibuat gagang penggorengan adalah...",
      options: [
        "Tembaga murni",
        "Besi coran",
        "Kayu kering dan plastik ebonit",
        "Aluminium lembaran"
      ],
      correctIndex: 2,
      explanation: "Kayu dan plastik ebonit adalah penghambat panas yang sangat baik, melindungi tangan kita dari panas wajan saat memasak."
    },
    {
      id: "ipa-5-9",
      topic: "Perpindahan Kalor",
      question: "Peristiwa berhembusnya angin darat dan angin laut yang dimanfaatkan nelayan tradisional terjadi karena perpindahan kalor secara...",
      options: [
        "Konveksi aliran fluida udara",
        "Konduksi padatan tanah",
        "Radiasi tanpa medium",
        "Evaporasi butir air"
      ],
      correctIndex: 0,
      explanation: "Konveksi adalah perpindahan panas yang disertai pergerakan molekul zat perantaranya, seperti arus perbedaan suhu udara darat dan laut."
    },
    {
      id: "ipa-5-10",
      topic: "Kelestarian Sumber Daya",
      question: "Aktivitas manusia berikut ini yang dapat merusak keseimbangan siklus air dan menyebabkan tanah longsor adalah...",
      options: [
        "Melakukan reboisasi pohon di lereng bukit gundul",
        "Membuat sumur resapan biopori di pemukiman",
        "Penebangan liar hutan tanpa tebang pilih",
        "Menggunakan air bersih secara bijak dan hemat"
      ],
      correctIndex: 2,
      explanation: "Hutan gundul kehilangan akar pohon yang berfungsi mengikat butiran tanah dan menahan cadangan air hujan di dalam tanah."
    }
  ],

  // =========================================================================
  // KELAS 6 SD (10 SOAL)
  // =========================================================================
  6: [
    {
      id: "ipa-6-1",
      topic: "Perkembangbiakan Tumbuhan",
      question: "Bagian bunga sempurna yang bertindak sebagai organ kelamin jantan penghasil butiran serbuk sari adalah...",
      options: [
        "Kepala putik",
        "Benang sari",
        "Mahkota kelopak bunga",
        "Bakal biji dasar"
      ],
      correctIndex: 1,
      explanation: "Benang sari memproduksi serbuk sari sel kelamin jantan yang nantinya jatuh ke kepala putik pada proses penyerbukan bunga."
    },
    {
      id: "ipa-6-2",
      topic: "Adaptasi Tumbuhan",
      question: "Tumbuhan kaktus yang hidup di ekosistem gurun pasir memiliki daun yang bermodifikasi menjadi duri tajam dengan tujuan...",
      options: [
        "Mempercepat proses penguapan air di siang hari",
        "Mengurangi penguapan air di tempat yang kering",
        "Menyerap air hujan sebanyak mungkin dari udara",
        "Mempermudah angin meniup batangnya"
      ],
      correctIndex: 1,
      explanation: "Daun berbentuk duri memiliki luas permukaan sangat sempit sehingga mencegah hilangnya cadangan air kaktus melalui transpirasi."
    },
    {
      id: "ipa-6-3",
      topic: "Adaptasi Hewan",
      question: "Kemampuan seekor bunglon mengubah warna pigmen kulitnya agar menyerupai ranting atau daun tempat ia bertengger dinamakan...",
      options: [
        "Mimikri",
        "Autotomi cicak",
        "Ekolokasi kelelawar",
        "Hibernasi musim dingin"
      ],
      correctIndex: 0,
      explanation: "Mimikri adalah bentuk adaptasi tingkah laku bunglon untuk menyamarkan diri (kamuflase) dari ancaman predator dan mendekati mangsa."
    },
    {
      id: "ipa-6-4",
      topic: "Vegetatif Buatan",
      question: "Metode perbanyakan vegetatif buatan pada tanaman buah dengan mengupas kulit batang dahan agar tumbuh akar baru berkarakter sama persis induknya adalah...",
      options: [
        "Mencangkok dahan",
        "Menyemai biji buah",
        "Menyebarkan spora jamur",
        "Tunas adventif daun"
      ],
      correctIndex: 0,
      explanation: "Mencangkok menghasilkan bibit tanaman yang cepat berbuah dan mewarisi seluruh sifat unggul dari pohon induknya."
    },
    {
      id: "ipa-6-5",
      topic: "Rangkaian Listrik",
      question: "Pada rangkaian listrik seri tertutup, apabila salah satu lampu bohlam diputuskan atau dilepas, maka lampu bohlam lainnya akan...",
      options: [
        "Menyala semakin benderang",
        "Ikut padam karena aliran arus terputus",
        "Menyala berkedip secara bergantian",
        "Mengeluarkan percikan api seketika"
      ],
      correctIndex: 1,
      explanation: "Rangkaian seri hanya memiliki satu jalur lintasan arus listrik tunggal, sehingga jika salah satu komponen putus, seluruh lintasan menjadi terbuka dan padam."
    },
    {
      id: "ipa-6-6",
      topic: "Kemagnetan",
      question: "Metode membuat magnet buatan sementara dengan melilitkan kawat berarus listrik pada sebatang paku besi dinamakan...",
      options: [
        "Induksi jarak dekat",
        "Elektromagnet",
        "Menggosok satu arah",
        "Pemanasan medan"
      ],
      correctIndex: 1,
      explanation: "Elektromagnet memanfaatkan arus listrik yang mengalir pada kumparan kawat untuk menimbulkan medan gaya magnet pada inti besi."
    },
    {
      id: "ipa-6-7",
      topic: "Tata Surya",
      question: "Planet terbesar di tata surya kita yang berputar cepat dan memiliki corak pusaran badai 'Bintik Merah Raksasa' adalah...",
      options: [
        "Merkurius",
        "Mars",
        "Jupiter",
        "Neptunus"
      ],
      correctIndex: 2,
      explanation: "Jupiter adalah planet raksasa gas dengan diameter sekitar 11 kali lipat diameter planet bumi dan memiliki massa terbesar di tata surya."
    },
    {
      id: "ipa-6-8",
      topic: "Rotasi Bumi",
      question: "Perputaran planet bumi mengelilingi poros sumbunya sendiri selama kurang lebih 24 jam mengakibatkan terjadinya fenomena...",
      options: [
        "Pergantian musim semi dan gugur",
        "Pergantian waktu siang dan malam hari",
        "Perubahan rasi bintang tahunan",
        "Gerhana matahari cincin"
      ],
      correctIndex: 1,
      explanation: "Rotasi bumi menyebabkan belahan bumi yang menghadap matahari mengalami waktu siang dan belahan yang membelakangi mengalami waktu malam."
    },
    {
      id: "ipa-6-9",
      topic: "Gerhana",
      question: "Ketika posisi bulan berada persis di antara matahari dan bumi pada satu garis lurus yang sejajar, maka di bumi akan terjadi fenomena...",
      options: [
        "Gerhana bulan total",
        "Gerhana matahari",
        "Pasang perbani air laut",
        "Munculnya komet berekor"
      ],
      correctIndex: 1,
      explanation: "Gerhana matahari terjadi saat bayangan umbra dan penumbra bulan jatuh mengenai permukaan bumi karena bulan menutupi piringan matahari."
    },
    {
      id: "ipa-6-10",
      topic: "Hemat Energi",
      question: "Perilaku bijak yang dapat dibiasakan setiap siswa di rumah untuk menghemat penggunaan energi listrik adalah...",
      options: [
        "Menyalakan lampu kamar tidur sepanjang siang",
        "Membiarkan televisi terus menyala tanpa penonton",
        "Mematikan lampu dan alat elektronik saat ruangan tidak dipakai",
        "Membuka pintu kulkas terus-menerus"
      ],
      correctIndex: 2,
      explanation: "Mematikan lampu dan peranti elektronik yang tidak terpakai menghemat tagihan listrik dan mengurangi emisi gas pembangkit energi."
    }
  ]
};

