/**
 * Bank Soal Kuis Seni Musik SD Petualangan Si Melodi
 * Struktur:
 * - 6 Tingkatan Kelas (Kelas 1 sampai 6)
 * - Masing-masing kelas tepat 10 butir soal (Total 60 soal)
 * - Sesuai dengan materi & kurikulum Seni Musik SD di Indonesia
 * - Jawaban tidak diletakkan di dalam teks soal / pilihan ganda
 * - Pilihan jawaban A, B, C, D yang mendidik dengan pengecoh relevan
 * - Setiap butir soal dilengkapi topik materi dan koreksi/penjelasan edukatif lengkap
 */

const QuizDatabase = {
  // Informasi Tingkatan Kelas 1 sampai 6
  grades: [
    {
      id: 1,
      title: "Kelas 1 SD",
      subtitle: "Bunyi Alam, Ritme & Suara Ceria",
      iconKey: "class1VoiceNotes",
      badgeColor: "amber",
      description: "Mengenal bunyi alam, bunyi buatan, tempo cepat lambat, suara tinggi rendah, dan tepuk irama tubuh.",
      questionCount: 10
    },
    {
      id: 2,
      title: "Kelas 2 SD",
      subtitle: "Alat Musik Ritmis & Dinamika",
      iconKey: "class2RhythmDrum",
      badgeColor: "emerald",
      description: "Mengenal alat musik ritmis (marakas, rebana, tamborin), dinamika keras lembut, dan lagu anak nusantara.",
      questionCount: 10
    },
    {
      id: 3,
      title: "Kelas 3 SD",
      subtitle: "Alat Musik Melodis & Notasi Dasar",
      iconKey: "class3MelodicKeys",
      badgeColor: "sky",
      description: "Mengenal tangga nada Do-Re-Mi, instrumen melodis (pianika, rekorder), birama ketukan, dan bernyanyi unisono.",
      questionCount: 10
    },
    {
      id: 4,
      title: "Kelas 4 SD",
      subtitle: "Alat Musik Tradisional Nusantara",
      iconKey: "class4TradMusic",
      badgeColor: "purple",
      description: "Eksplorasi angklung, gamelan, sasando, kolintang, not angka, not balok, dan tanda dinamika forte piano.",
      questionCount: 10
    },
    {
      id: 5,
      title: "Kelas 5 SD",
      subtitle: "Tangga Nada & Ansambel Musik",
      iconKey: "class5Ensemble",
      badgeColor: "rose",
      description: "Belajar tangga nada diatonis mayor & minor, pentatonis, struktur lagu (intro, reff), dan ansambel musik.",
      questionCount: 10
    },
    {
      id: 6,
      title: "Kelas 6 SD",
      subtitle: "Harmoni, Akor & Paduan Suara",
      iconKey: "class6ChoirHarmoni",
      badgeColor: "indigo",
      description: "Akor dasar piano/gitar, jenis vokal sopran-alto-tenor-bass, peran konduktor, dan apresiasi pertunjukan musik.",
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
        topic: "Bunyi Alam",
        question: "Saat hujan lebat di luar rumah, terdengar suara gemuruh menggelegar dari langit. Sumber suara tersebut berasal dari...",
        options: [
          "Suara klakson mobil di jalan",
          "Petir yang menyambar di angkasa",
          "Tepukan tangan penonton",
          "Kicauan burung di pohon"
        ],
        correctIndex: 1,
        explanation: "Petir adalah contoh bunyi alam asli yang terjadi secara alami di langit, bukan dibuat oleh manusia atau alat elektronik."
      },
      {
        id: "k1-02",
        topic: "Bunyi Buatan Manusia",
        question: "Pak Polisi mengatur lalu lintas di perempatan jalan. Pak Polisi membunyikan benda kecil di mulutnya yang berbunyi 'priiit priiit'. Benda itu adalah...",
        options: [
          "Peluit",
          "Gendang",
          "Kacamata",
          "Topi"
        ],
        correctIndex: 0,
        explanation: "Peluit adalah alat bunyi buatan manusia yang menghasilkan bunyi nyaring ketika ditiup dengan udara."
      },
      {
        id: "k1-03",
        topic: "Tempo Musik",
        question: "Lagu anak-anak yang dinyanyikan saat senam pagi biasanya dinyanyikan dengan ketukan yang...",
        options: [
          "Sangat pelan dan mengantuk",
          "Cepat dan penuh semangat",
          "Berbisik-bisik tanpa nada",
          "Tersendat-sendat berhenti"
        ],
        correctIndex: 1,
        explanation: "Lagu senam pagi menggunakan tempo cepat dan riang gembira agar tubuh kita bersemangat saat bergerak sehat."
      },
      {
        id: "k1-04",
        topic: "Tinggi Rendah Nada",
        question: "Bila kita mendengar suara anak burung yang menciap 'ciap ciap', suara tersebut termasuk kategori bunyi bernada...",
        options: [
          "Sangat rendah dan berat",
          "Tinggi dan melengking kecil",
          "Bisu tanpa suara",
          "Bergemuruh seperti gempa"
        ],
        correctIndex: 1,
        explanation: "Suara anak burung berfrekuensi tinggi sehingga terdengar melengking kecil dan nyaring, berbeda dengan auman singa yang rendah dan berat."
      },
      {
        id: "k1-05",
        topic: "Ritme Tubuh Kita",
        question: "Ketika bernyanyi bersama teman tanpa alat musik, kita bisa membuat bunyi irama pengiring yang meriah dengan cara...",
        options: [
          "Menutup kedua mata rapat-rapat",
          "Bertepuk kedua telapak tangan",
          "Diam mematung di tempat duduk",
          "Mengedipkan kelopak mata"
        ],
        correctIndex: 1,
        explanation: "Tepuk tangan adalah salah satu perkusi tubuh (body percussion) yang sangat mudah dan seru untuk mengiringi lagu."
      },
      {
        id: "k1-06",
        topic: "Etika Bernyanyi",
        question: "Saat guru mengajak bernyanyi bersama di dalam ruang kelas, sikap bernyanyi yang baik adalah...",
        options: [
          "Berteriak sekuat tenaga sampai tenggorokan sakit",
          "Bernyanyi dengan suara wajar, merdu, dan kompak",
          "Tidur di atas meja belajar",
          "Mengganggu teman di samping kita"
        ],
        correctIndex: 1,
        explanation: "Bernyanyi bukan berteriak. Bernyanyi dengan volume yang pas membuat paduan suara terdengar merdu dan menjaga pita suara tetap sehat."
      },
      {
        id: "k1-07",
        topic: "Mengenal Lagu Anak",
        question: "Dalam lagu anak ciptaan A.T. Mahmud berjudul 'Cicak di Dinding', hewan cicak bergerak di dinding dengan cara...",
        options: [
          "Terbang ke angkasa luas",
          "Merayap secara perlahan",
          "Berenang menyelam di danau",
          "Melompat seperti katak"
        ],
        correctIndex: 1,
        explanation: "Lirik lagu menyebutkan 'Cicak-cicak di dinding, diam-diam merayap', yang menceritakan gerak khas hewan cicak."
      },
      {
        id: "k1-08",
        topic: "Benda Penghasil Bunyi",
        question: "Botol plastik bekas yang diisi dengan butiran beras kering lalu diguncang-guncangkan ke atas dan ke bawah akan berbunyi seperti...",
        options: [
          "Klakson kapal laut",
          "Alat musik marakas",
          "Suara petir menggelegar",
          "Kicau burung pipit"
        ],
        correctIndex: 1,
        explanation: "Botol berisi beras yang digoyang adalah kreasi alat musik perkusi sederhana yang meniru bunyi gemerisik marakas."
      },
      {
        id: "k1-09",
        topic: "Bernyanyi dan Berbicara",
        question: "Perbedaan utama antara berbicara biasa dengan bernyanyi adalah ketika bernyanyi suara kita memiliki...",
        options: [
          "Nada yang beraturan dan berirama indah",
          "Kata-kata yang tidak ada artinya",
          "Suara yang harus selalu menyeramkan",
          "Larangan membuka rongga mulut"
        ],
        correctIndex: 0,
        explanation: "Bernyanyi mengeluarkan kata-kata yang dirangkai mengikuti nada (melodi) dan pola irama (ritme) yang teratur dan enak didengar."
      },
      {
        id: "k1-10",
        topic: "Sikap Tubuh Bernyanyi",
        question: "Agar udara pernapasan mengalir lancar dan suara terdengar jernih, saat bernyanyi sebaiknya posisi punggung kita...",
        options: [
          "Membungkuk sangat rendah ke bawah",
          "Tegak rileks dan tidak kaku",
          "Berbaring terlentang di lantai",
          "Miring ke arah kiri terus menerus"
        ],
        correctIndex: 1,
        explanation: "Posisi punggung tegak namun tetap rileks memberi ruang luas bagi rongga paru-paru untuk mengambil napas dengan optimal."
      }
    ],

    // =========================================================================
    // KELAS 2 SD (10 SOAL)
    // =========================================================================
    2: [
      {
        id: "k2-01",
        topic: "Alat Musik Ritmis",
        question: "Alat musik yang berfungsi mengatur ketukan dan irama lagu namun tidak memiliki susunan nada paten (do-re-mi) disebut alat musik...",
        options: [
          "Melodis",
          "Harmonis",
          "Ritmis",
          "Elektronis"
        ],
        correctIndex: 2,
        explanation: "Alat musik ritmis berfungsi menjaga tempo dan menciptakan pola ketukan irama pada musik tanpa tangga nada solmisasi."
      },
      {
        id: "k2-02",
        topic: "Mengenal Rebana",
        question: "Sebuah alat musik berbentuk lingkaran dengan bingkai kayu dan dilapisi kulit hewan tipis di bagian atasnya, dimainkan dengan cara...",
        options: [
          "Ditiup pipa sedotannya",
          "Ditepuk atau dipukul dengan telapak tangan",
          "Digesek dawai senurnya",
          "Dipetik dengan jemari tangan"
        ],
        correctIndex: 1,
        explanation: "Rebana adalah instrumen membranofon/ritmis tradisional yang dibunyikan dengan menepuk permukaan kulit menggunakan telapak tangan."
      },
      {
        id: "k2-03",
        topic: "Dinamika Musik",
        question: "Terkadang lagu dinyanyikan dengan suara yang sangat lembut seperti bisikan angin, lalu berubah menjadi lantang bertenaga. Perubahan kuat dan lemahnya bunyi ini disebut...",
        options: [
          "Dinamika",
          "Partitur",
          "Lirik",
          "Kostum"
        ],
        correctIndex: 0,
        explanation: "Dinamika adalah unsur musik yang menyatakan tingkat kekerasan (kuat) dan kelembutan (lemah) dari suatu bunyi atau lagu."
      },
      {
        id: "k2-04",
        topic: "Alat Musik Tamborin",
        question: "Alat musik berbentuk bingkai bundar yang dipasangi lempengan logam bundar kecil kemerincing di sekelilingnya bernama...",
        options: [
          "Tamborin",
          "Gitar",
          "Suling",
          "Piano"
        ],
        correctIndex: 0,
        explanation: "Tamborin memiliki jingle logam (lempengan bundar) yang bergemerincing ceria saat digoyang atau diketukkan ke telapak tangan."
      },
      {
        id: "k2-05",
        topic: "Pola Irama Teratur",
        question: "Bunyi benda berikut yang menghasilkan pola ketukan irama tetap dan teratur seperti detak metronom adalah...",
        options: [
          "Suara petir yang datang tiba-tiba",
          "Detak jarum jam dinding 'tik-tok-tik-tok'",
          "Kucing mengeong saat lapar",
          "Deru angin ribut yang berubah-ubah"
        ],
        correctIndex: 1,
        explanation: "Detak jarum jam dinding berbunyi secara konsisten dan teratur dengan jeda waktu yang sama persis di setiap detiknya."
      },
      {
        id: "k2-06",
        topic: "Bunyi Panjang dan Pendek",
        question: "Pada lirik lagu 'Balonku Ada Lima', suku kata yang dinyanyikan lebih panjang ditandai agar memberi...",
        options: [
          "Waktu penyanyi untuk tertidur",
          "Aksen irama lagu yang serasi dan menarik",
          "Kesempatan penonton pulang",
          "Hukuman bagi yang mendengarkan"
        ],
        correctIndex: 1,
        explanation: "Kombinasi bunyi panjang dan pendek membentuk pola melodi berkarakter sehingga lagu terdengar harmonis dan tidak membosankan."
      },
      {
        id: "k2-07",
        topic: "Lagu Ciptaan Tokoh Musik",
        question: "Lagu anak terkenal berjudul 'Pelangi-Pelangi' yang menceritakan keindahan warna-warni di langit biru diciptakan oleh...",
        options: [
          "Ibu Sud",
          "A.T. Mahmud",
          "Pak Kasur",
          "L. Manik"
        ],
        correctIndex: 1,
        explanation: "Lagu legendaris 'Pelangi-Pelangi' ('Pelangi pelangi alangkah indahmu...') diciptakan oleh tokoh musik anak Indonesia, A.T. Mahmud."
      },
      {
        id: "k2-08",
        topic: "Alat Musik Tiup Sederhana",
        question: "Alat musik tradisional yang terbuat dari sebatang bambu berongga dan memiliki beberapa lubang nada di atasnya adalah...",
        options: [
          "Suling bambu",
          "Gendang beleq",
          "Kastanyet kayu",
          "Gong perunggu"
        ],
        correctIndex: 0,
        explanation: "Suling bambu adalah instrumen tiup tiup tradisional nusantara yang menghasilkan alunan suara merdu dari hembusan angin rongga bambu."
      },
      {
        id: "k2-09",
        topic: "Kastanyet",
        question: "Dua keping kayu berbentuk kerang yang disatukan tali lalu ditepukkan dengan jari jempol dan telunjuk tangan disebut...",
        options: [
          "Marakas",
          "Kastanyet",
          "Terompet",
          "Biola"
        ],
        correctIndex: 1,
        explanation: "Kastanyet merupakan perkusi dari dua bilah cangkang kayu cekung yang menghasilkan bunyi 'klak-klak' yang renyah dan lincah."
      },
      {
        id: "k2-10",
        topic: "Kekompakan Bernyanyi",
        question: "Saat kelompok vokal kelas bernyanyi bersama, yang harus dilakukan agar lagu terdengar enak didengar adalah...",
        options: [
          "Saling mendahului agar lagunya cepat selesai",
          "Memperhatikan aba-aba ketukan dan bernyanyi serempak",
          "Bernyanyi dengan lagu yang berbeda dari teman",
          "Menutup telinga agar tidak mendengar musik"
        ],
        correctIndex: 1,
        explanation: "Kekompakan dan menyamakan tempo sesuai aba-aba ketukan adalah kunci keindahan penampilan bernyanyi bersama."
      }
    ],

    // =========================================================================
    // KELAS 3 SD (10 SOAL)
    // =========================================================================
    3: [
      {
        id: "k3-01",
        topic: "Alat Musik Melodis",
        question: "Alat musik yang memiliki susunan nada beraturan sehingga dapat memainkan melodi utama sebuah lagu disebut alat musik...",
        options: [
          "Ritmis",
          "Melodis",
          "Perkusi murni",
          "Hiasan dinding"
        ],
        correctIndex: 1,
        explanation: "Alat musik melodis mampu membunyikan nada-nada solmisasi (Do, Re, Mi, Fa, Sol, La, Si) untuk membentuk rangkaian melodi lagu."
      },
      {
        id: "k3-02",
        topic: "Mengenal Pianika",
        question: "Cara membunyikan alat musik pianika di sekolah dasar adalah dengan perpaduan dua gerakan yaitu...",
        options: [
          "Dipetik dawainya dan diguncang",
          "Ditiup pipa selangnya sambil menekan tuts nada",
          "Dipukul menggunakan dua stik pemukul",
          "Digesek busur senar di atas tuts"
        ],
        correctIndex: 1,
        explanation: "Pianika tergolong alat musik aerofon bertuts; udara ditiupkan melalui pipa tiup sambil jari-jari menekan tuts yang diinginkan."
      },
      {
        id: "k3-03",
        topic: "Tangga Nada Diatonis",
        question: "Urutan solmisasi tangga nada diatonis yang berjenjang dari nada terendah menuju nada tertinggi adalah...",
        options: [
          "Do - Mi - Sol - Fa - Re - La - Si",
          "Do - Re - Mi - Fa - Sol - La - Si - Do'",
          "Si - La - Sol - Fa - Mi - Re - Do",
          "Do - Do - Re - Re - Mi - Mi - Fa"
        ],
        correctIndex: 1,
        explanation: "Tangga nada diatonis tersusun berurutan: Do (1), Re (2), Mi (3), Fa (4), Sol (5), La (6), Si (7), dan Do tinggi (1')."
      },
      {
        id: "k3-04",
        topic: "Mengenal Tuts Piano",
        question: "Pada papan tuts pianika atau keyboard mini, tuts yang berukuran lebih pendek dan berwarna hitam biasanya berfungsi untuk...",
        options: [
          "Mematikan aliran listrik alat musik",
          "Memainkan nada-nada kromatis (kres atau mol)",
          "Tempat menyimpan cadangan baterai",
          "Mengatur volume menjadi paling keras"
        ],
        correctIndex: 1,
        explanation: "Tuts hitam pada keyboard/pianika menghasilkan nada kromatis berjarak setengah nada (nada dinaikkan/kres atau diturunkan/mol)."
      },
      {
        id: "k3-05",
        topic: "Tanda Birama",
        question: "Pada lembar notasi tertulis tanda birama 2/4. Arti dari angka 2 di bagian atas tanda birama tersebut adalah...",
        options: [
          "Lagu tersebut harus dimainkan oleh dua orang saja",
          "Dalam setiap ruas birama terdapat 2 ketukan",
          "Lagu hanya boleh diulang sebanyak dua kali",
          "Lagu tersebut diciptakan pada bulan Februari"
        ],
        correctIndex: 1,
        explanation: "Angka pembilang di atas tanda birama menunjukkan banyaknya ketukan yang ada di dalam setiap kotak ruas birama."
      },
      {
        id: "k3-06",
        topic: "Bernyanyi Unisono",
        question: "Ketika seluruh siswa di kelas menyanyikan satu baris lagu yang sama secara bersamaan dengan satu jenis nada melodi, teknik bernyanyi ini dinamakan...",
        options: [
          "Unisono",
          "Akapela bertingkat",
          "Kanon berlawanan",
          "Harmoni empat suara"
        ],
        correctIndex: 0,
        explanation: "Unisono berasal dari kata 'uni' (satu) dan 'sono' (suara), artinya menyanyikan melodi lagu dengan satu suara secara serentak."
      },
      {
        id: "k3-07",
        topic: "Instrumen Rekorder",
        question: "Alat musik rekorder sopran ditiup dari ujung moncongnya. Untuk menghasilkan nada Do rendah (nada paling rendah), lubang yang harus ditutup adalah...",
        options: [
          "Hanya satu lubang di bagian paling atas",
          "Semua lubang nada ditutup rapat oleh jari kedua tangan",
          "Seluruh lubang nada dibuka tanpa disentuh jari",
          "Hanya lubang jempol di bagian belakang"
        ],
        correctIndex: 1,
        explanation: "Menutup seluruh 7 lubang depan dan 1 lubang belakang rekorder secara rapat membuat kolom udara terpanjang dan menghasilkan nada Do rendah."
      },
      {
        id: "k3-08",
        topic: "Lagu Wajib Nasional",
        question: "Lagu 'Hari Merdeka' yang diawali dengan lirik 'Tujuh belas Agustus tahun empat lima...' diciptakan oleh komponis nasional bernama...",
        options: [
          "H. Mutahar",
          "W.R. Supratman",
          "Ismail Marzuki",
          "Kusbini"
        ],
        correctIndex: 0,
        explanation: "Lagu perjuangan penuh gelora kemerdekaan 'Hari Merdeka' diciptakan oleh Habib Husein Mutahar (H. Mutahar)."
      },
      {
        id: "k3-09",
        topic: "Garis Paranada",
        question: "Tempat berupa lima garis mendatar sejajar yang digunakan untuk menuliskan lambang not-not balok disebut...",
        options: [
          "Papan tulis",
          "Garis paranada (stave)",
          "Jalur labirin",
          "Penggaris melodi"
        ],
        correctIndex: 1,
        explanation: "Garis paranada terdiri atas 5 garis mendatar sejajar dan 4 spasi celah sebagai media penulisan notasi balok musik standar."
      },
      {
        id: "k3-10",
        topic: "Pernapasan Bernyanyi",
        question: "Teknik pernapasan yang paling baik digunakan saat bernyanyi agar udara tersimpan banyak dan suara stabil adalah pernapasan...",
        options: [
          "Bahu dengan mengangkat kedua pundak tinggi",
          "Diafragma di rongga perut bagian bawah dada",
          "Hidung dengan menahan napas sampai pusing",
          "Tenggorokan dengan batuk-batuk kecil"
        ],
        correctIndex: 1,
        explanation: "Pernapasan diafragma memanfaatkan otot sekat rongga dada dan perut, menampung udara optimal tanpa membuat bahu menegang."
      }
    ],

    // =========================================================================
    // KELAS 4 SD (10 SOAL)
    // =========================================================================
    4: [
      {
        id: "k4-01",
        topic: "Alat Musik Angklung",
        question: "Alat musik khas Jawa Barat yang dibuat dari tabung-tabung bambu dan menghasilkan nada khas saat digoyangkan atau digetarkan adalah...",
        options: [
          "Angklung",
          "Gamelan",
          "Sasando",
          "Tifa"
        ],
        correctIndex: 0,
        explanation: "Angklung terbuat dari bambu yang dipotong khusus dan dimainkan dengan menggoyang rangkanya hingga bergetar merdu."
      },
      {
        id: "k4-02",
        topic: "Alat Musik Sasando",
        question: "Alat musik petik unik tradisional dari Pulau Rote, Nusa Tenggara Timur (NTT) yang wadah resonansinya terbuat dari daun lontar kering adalah...",
        options: [
          "Kolintang",
          "Sasando",
          "Kecapi",
          "Rebab"
        ],
        correctIndex: 1,
        explanation: "Sasando adalah instrumen kordofon kebanggaan NTT dengan tabung bambu berdawai yang dikelilingi anyaman daun lontar berbentuk kipas."
      },
      {
        id: "k4-03",
        topic: "Alat Musik Kolintang",
        question: "Kolintang adalah alat musik tradisional dari Minahasa, Sulawesi Utara yang terdiri dari bilah-bilah kayu berjajar, dimainkan dengan cara...",
        options: [
          "Ditiup hembusan napas",
          "Dipukul dengan stik pemukul berkepala karet",
          "Digesek senar dawainya",
          "Digoyang kedua ujung rangkanya"
        ],
        correctIndex: 1,
        explanation: "Kolintang dimainkan dengan memukul bilah-bilah kayu bernada menggunakan stik khusus, menghasilkan suara denting kayu yang khas."
      },
      {
        id: "k4-04",
        topic: "Gamelan Jawa",
        question: "Dalam ansambel gamelan Jawa, alat musik berbentuk lingkaran perunggu besar yang digantung dan dipukul pada tonjolan tengahnya adalah...",
        options: [
          "Gong",
          "Saron",
          "Kendang",
          "Bonang"
        ],
        correctIndex: 0,
        explanation: "Gong berukuran besar digantung pada gawangan kayu dan menghasilkan dengungan nada agung yang menandai akhir siklus gending."
      },
      {
        id: "k4-05",
        topic: "Membaca Not Angka",
        question: "Dalam sistem notasi angka musik, lambang angka 1, 3, dan 5 masing-masing mewakili nada...",
        options: [
          "Do, Re, Mi",
          "Do, Mi, Sol",
          "Fa, Sol, La",
          "Re, Fa, La"
        ],
        correctIndex: 1,
        explanation: "Pada solmisasi not angka: 1 = Do, 2 = Re, 3 = Mi, 4 = Fa, 5 = Sol, 6 = La, dan 7 = Si. Jadi 1, 3, 5 adalah Do, Mi, Sol."
      },
      {
        id: "k4-06",
        topic: "Tanda Titik Not Angka",
        question: "Jika di atas lambang not angka 1 terdapat sebuah tanda titik kecil (. ), hal tersebut menandakan bahwa nada tersebut dimainkan pada...",
        options: [
          "Oktaf tinggi (nada naik satu oktaf)",
          "Oktaf rendah (nada turun satu oktaf)",
          "Tempo sangat lambat",
          "Kondisi hening tanpa suara"
        ],
        correctIndex: 0,
        explanation: "Titik di atas not angka menunjukkan nada oktaf tinggi. Sebaliknya, titik di bawah not angka menunjukkan nada oktaf rendah."
      },
      {
        id: "k4-07",
        topic: "Simbol Dinamika Forte",
        question: "Dalam partitur lagu terdapat huruf cetak 'f' yang merupakan singkatan dari istilah musik 'Forte'. Tanda tersebut memberi petunjuk agar musik dimainkan dengan...",
        options: [
          "Sangat lembut dan perlahan",
          "Keras, lantang, dan bertenaga",
          "Cepat seperti kilat",
          "Berhenti total seketika"
        ],
        correctIndex: 1,
        explanation: "Istilah musik 'Forte' (f) berasal dari bahasa Italia yang berarti kuat atau keras. Sedangkan 'Piano' (p) berarti lembut."
      },
      {
        id: "k4-08",
        topic: "Alat Musik Saluang",
        question: "Alat musik tradisional Saluang berasal dari daerah Minangkabau (Sumatera Barat). Saluang tergolong ke dalam kelompok instrumen...",
        options: [
          "Tiup (aerofon)",
          "Petik (kordofon)",
          "Pukul logam (idiifon)",
          "Goyang bambu (idiofon)"
        ],
        correctIndex: 0,
        explanation: "Saluang adalah alat musik tiup khas Minangkabau yang dibuat dari bambu tipis talang dengan teknik tiup menyamping."
      },
      {
        id: "k4-09",
        topic: "Tempo Andante",
        question: "Lagu yang memiliki keterangan tempo 'Andante' sebaiknya dibawakan dengan kecepatan seperti...",
        options: [
          "Mobil balap di sirkuit cepat",
          "Langkah kaki orang berjalan santai",
          "Siput yang hampir tidak bergerak",
          "Pesawat terbang lepas landas"
        ],
        correctIndex: 1,
        explanation: "Andante adalah istilah tempo sedang dalam musik, dengan kecepatan rata-rata 76–108 ketukan per menit seperti orang berjalan santai."
      },
      {
        id: "k4-10",
        topic: "Apresiasi Musik Daerah",
        question: "Sikap terpuji yang mencerminkan rasa cinta tanah air terhadap keberagaman lagu-lagu daerah nusantara adalah...",
        options: [
          "Hanya mau mendengarkan lagu dari suku sendiri",
          "Mengejek lagu daerah lain yang belum pernah didengar",
          "Bangga mempelajari dan menghargai lagu daerah dari seluruh Indonesia",
          "Mengganti lirik lagu daerah dengan kata-kata ejekan"
        ],
        correctIndex: 2,
        explanation: "Keberagaman lagu daerah adalah warisan budaya luhur Indonesia yang harus kita pelajari, rawat, dan banggakan bersama."
      }
    ],

    // =========================================================================
    // KELAS 5 SD (10 SOAL)
    // =========================================================================
    5: [
      {
        id: "k5-01",
        topic: "Tangga Nada Diatonis Mayor",
        question: "Tangga nada diatonis mayor memiliki susunan jarak interval 1 - 1 - 1/2 - 1 - 1 - 1 - 1/2. Karakter atau suasana perasaan lagu bertangga nada mayor umumnya adalah...",
        options: [
          "Murung dan penuh rasa duka",
          "Riang gembira, ceria, dan penuh semangat",
          "Misterius dan menakutkan",
          "Hampa tanpa emosi"
        ],
        correctIndex: 1,
        explanation: "Lagu bertangga nada diatonis mayor umumnya bernuansa ceria, cerah, optimis, dan diawali serta diakhiri dengan nada Do."
      },
      {
        id: "k5-02",
        topic: "Tangga Nada Diatonis Minor",
        question: "Lagu wajib nasional 'Gugur Bunga' karya Ismail Marzuki dibawakan dengan perasaan syahdu, khidmat, dan penuh rasa sedih. Lagu tersebut menggunakan tangga nada...",
        options: [
          "Diatonis Mayor",
          "Diatonis Minor",
          "Pentatonis Pelog lincah",
          "Kromatis ceria"
        ],
        correctIndex: 1,
        explanation: "Tangga nada diatonis minor memiliki interval 1 - 1/2 - 1 - 1 - 1/2 - 1 - 1 dan sering digunakan untuk lagu bertema duka atau khidmat."
      },
      {
        id: "k5-03",
        topic: "Tangga Nada Pentatonis",
        question: "Berbeda dengan tangga nada diatonis yang memiliki 7 nada pokok, tangga nada pentatonis pada gamelan tradisional tersusun atas...",
        options: [
          "3 nada pokok saja",
          "5 nada pokok dalam satu oktaf",
          "12 nada semitone",
          "20 nada campuran"
        ],
        correctIndex: 1,
        explanation: "Kata 'penta' berarti lima dan 'tone' berarti nada. Tangga nada pentatonis (seperti laras Slendro dan Pelog) hanya memakai 5 nada pokok."
      },
      {
        id: "k5-04",
        topic: "Struktur Bagian Lagu",
        question: "Bagian melodi instrumen pembuka yang dimainkan pada awal sebuah lagu sebelum vokal penyanyi masuk disebut...",
        options: [
          "Intro (Introduction)",
          "Reff (Chorus)",
          "Coda",
          "Outro"
        ],
        correctIndex: 0,
        explanation: "Intro adalah bagian pembuka lagu yang memperkenalkan nuansa musik, nada dasar, dan tempo sebelum bait pertama dinyanyikan."
      },
      {
        id: "k5-05",
        topic: "Bagian Reff / Chorus",
        question: "Bagian lagu yang memuat pesan utama, memiliki melodi paling menarik, dan biasanya diulang beberapa kali dalam lagu disebut...",
        options: [
          "Interlude melodi solo",
          "Reff atau Chorus",
          "Jeda istirahat total",
          "Judul lagu"
        ],
        correctIndex: 1,
        explanation: "Reff/Chorus adalah klimaks atau inti utama lagu yang lirik dan melodinya paling mudah diingat serta dinyanyikan bersama."
      },
      {
        id: "k5-06",
        topic: "Pengertian Musik Ansambel",
        question: "Kelompok siswa memainkan berbagai alat musik secara teratur bersama-sama dalam satu panggung pertunjukan. Kegiatan ini dinamakan...",
        options: [
          "Solo instrumen tunggal",
          "Bermain musik ansambel",
          "Senam irama perorangan",
          "Drama bisu tanpa nada"
        ],
        correctIndex: 1,
        explanation: "Ansambel adalah sajian kombinasi permainan musik yang dibawakan oleh rombongan pemusik secara kompak dan terkoordinasi."
      },
      {
        id: "k5-07",
        topic: "Ansambel Campuran",
        question: "Sebuah grup musik di sekolah membawakan lagu dengan memadukan pianika, gitar akustik, rekorder, tamborin, dan marakas. Sajian musik ini tergolong ansambel...",
        options: [
          "Ansambel sejenis",
          "Ansambel campuran",
          "Ansambel elektrik tunggal",
          "Ansambel digital virtual"
        ],
        correctIndex: 1,
        explanation: "Ansambel campuran menggabungkan dua atau lebih kelompok instrumen berbeda (misal instrumen tiup, petik, dan perkusi) secara serasi."
      },
      {
        id: "k5-08",
        topic: "Tanda Istirahat Musik",
        question: "Pada lembaran partitur lagu terdapat lambang tanda istirahat (rest). Fungsi tanda istirahat tersebut adalah memberi petunjuk agar penyanyi atau pemusik...",
        options: [
          "Mempercepat tempo ketukan secepat mungkin",
          "Diam atau berhenti membunyikan nada selama nilai ketukannya",
          "Berteriak menyebutkan judul lagu",
          "Menurunkan nada setinggi dua oktaf"
        ],
        correctIndex: 1,
        explanation: "Tanda istirahat menandai jeda hening dalam musik, di mana musisi tidak membunyikan nada selama durasi nilai ketukan tanda istirahat tersebut."
      },
      {
        id: "k5-09",
        topic: "Alat Musik Tifa",
        question: "Alat musik ritmis khas dari Papua dan Maluku yang terbuat dari kayu bulat berongga dengan membran kulit biawak atau rusa di ujungnya adalah...",
        options: [
          "Tifa",
          "Rebana",
          "Bedug",
          "Timpani"
        ],
        correctIndex: 0,
        explanation: "Tifa adalah instrumen perkusi membranofon berbentuk tabung memanjang khas masyarakat adat Papua dan Maluku."
      },
      {
        id: "k5-10",
        topic: "Keseimbangan Ansambel",
        question: "Saat bermain musik bersama dalam ansambel, agar suara melodi utama tidak tertutup dan terdengar jelas, pemain alat musik perkusi pengiring harus...",
        options: [
          "Memukul perkusi sekeras-kerasnya sampai menutupi melodi",
          "Menjaga dinamika volume agar seimbang dan mendukung melodi",
          "Berhenti bermain dan meninggalkan panggung",
          "Memainkan tempo yang berbeda sendiri"
        ],
        correctIndex: 1,
        explanation: "Keseimbangan volume bunyi (balancing) sangat penting agar instrumen melodi vokal dan instrumen pengiring berpadu harmonis."
      }
    ],

    // =========================================================================
    // KELAS 6 SD (10 SOAL)
    // =========================================================================
    6: [
      {
        id: "k6-01",
        topic: "Pengertian Akor Harmoni",
        question: "Paduan tiga nada atau lebih yang dibunyikan secara serentak bersamaan sehingga menghasilkan bunyi yang selaras dan indah dinamakan...",
        options: [
          "Akor (Chord)",
          "Birama",
          "Vibrato",
          "Monofon"
        ],
        correctIndex: 0,
        explanation: "Akor adalah paduan tiga nada (triad) atau lebih yang dimainkan bersama untuk membentuk fondasi harmoni pengiring lagu."
      },
      {
        id: "k6-02",
        topic: "Akor C Mayor",
        question: "Pada tangga nada natural C Mayor, akor tingkat I (akor dasar C) tersusun dari tiga nada pokok (triad) yaitu...",
        options: [
          "C - E - G (Do - Mi - Sol)",
          "D - F - A (Re - Fa - La)",
          "F - A - C (Fa - La - Do)",
          "G - B - D (Sol - Si - Re)"
        ],
        correctIndex: 0,
        explanation: "Akor C Mayor terdiri atas nada root C (Do), terts mayor E (Mi), dan kuint G (Sol)."
      },
      {
        id: "k6-03",
        topic: "Wilayah Suara Wanita",
        question: "Dalam paduan suara bertingkat, suara tinggi untuk kelompok wanita dewasa atau anak perempuan disebut suara...",
        options: [
          "Sopran",
          "Alto",
          "Tenor",
          "Bass"
        ],
        correctIndex: 0,
        explanation: "Sopran adalah jenis suara tertinggi untuk vokal wanita, sedangkan jenis suara rendah wanita disebut Alto."
      },
      {
        id: "k6-04",
        topic: "Wilayah Suara Pria",
        question: "Kelompok penyanyi pria yang memiliki warna suara paling rendah, berwibawa, dan berat ditempatkan pada kelompok suara...",
        options: [
          "Sopran",
          "Mezzo Sopran",
          "Tenor",
          "Bass"
        ],
        correctIndex: 3,
        explanation: "Bass adalah register suara terendah pada vokal pria dewasa, sedangkan suara tinggi pria disebut Tenor."
      },
      {
        id: "k6-05",
        topic: "Pemimpin Paduan Suara",
        question: "Orang yang berdiri di depan kelompok paduan suara atau orkestra untuk memimpin tempo, dinamika, dan ekspresi musik disebut...",
        options: [
          "Konduktor (Dirigen)",
          "Koreografer tari",
          "Promotor tiket",
          "Narator cerita"
        ],
        correctIndex: 0,
        explanation: "Dirigen atau konduktor memandu keselarasan seluruh pemusik dan penyanyi menggunakan gerakan tangan atau tongkat birama (baton)."
      },
      {
        id: "k6-06",
        topic: "Bagian Penutup Lagu (Coda)",
        question: "Bagian tambahan pada akhir lagu yang berfungsi mengantarkan komposisi musik menuju penutupan yang tuntas dan manis disebut...",
        options: [
          "Coda",
          "Bait pertama",
          "Interlude awal",
          "Prelude pembuka"
        ],
        correctIndex: 0,
        explanation: "Coda (dari bahasa Italia yang berarti 'ekor') merupakan bagian penutup atau penyelesaian akhir dari suatu karya musik."
      },
      {
        id: "k6-07",
        topic: "Tempo Cepat Riang",
        question: "Istilah dalam musik klasik yang menandakan bahwa suatu karya lagu harus dibawakan dengan tempo cepat, lincah, dan gembira adalah...",
        options: [
          "Largo",
          "Adagio",
          "Allegro",
          "Grave"
        ],
        correctIndex: 2,
        explanation: "Allegro menandakan tempo cepat dan ceria (sekitar 120–156 bpm). Sebaliknya Largo dan Adagio adalah tempo lambat."
      },
      {
        id: "k6-08",
        topic: "Alat Musik Gesek",
        question: "Alat musik kordofon modern yang dibunyikan dengan menggesekkan rambut busur (bow) pada senar dawainya adalah...",
        options: [
          "Biola (Violin)",
          "Klarinet",
          "Pianika",
          "Xilofon"
        ],
        correctIndex: 0,
        explanation: "Biola, cello, dan kontrabas adalah keluarga alat musik dawai gesek yang menghasilkan getaran suara merdu melalui gesekan busur senar."
      },
      {
        id: "k6-09",
        topic: "Akor Minor",
        question: "Akor A Minor (Am) yang sering terdengar syahdu pada lagu-lagu sedih tersusun dari paduan tiga nada yaitu...",
        options: [
          "A - C - E (La - Do - Mi)",
          "C - E - G (Do - Mi - Sol)",
          "F - A - C (Fa - La - Do)",
          "B - D - F (Si - Re - Fa)"
        ],
        correctIndex: 0,
        explanation: "Akor minor A Minor (Am) tersusun dari nada dasar A (La), terts minor C (Do), dan kuint sempurna E (Mi)."
      },
      {
        id: "k6-10",
        topic: "Apresiasi & Etika Menonton",
        question: "Ketika menyaksikan penampilan konser musik atau pentas seni teman-teman di aula sekolah, etika penonton yang terpuji adalah...",
        options: [
          "Meneriakkan kata-kata ejekan saat lagu sedang dimainkan",
          "Mendengarkan dengan tenang lalu bertepuk tangan meriah setelah lagu selesai",
          "Mondar-mandir di depan panggung dan menghalangi penonton lain",
          "Menyalakan musik dari speaker ponsel sendiri di tengah pertunjukan"
        ],
        correctIndex: 1,
        explanation: "Menonton dengan tertib, menghargai musisi di atas panggung, dan memberikan apresiasi tepuk tangan yang hangat adalah wujud etika budaya musikal."
      }
    ]
  }
};
