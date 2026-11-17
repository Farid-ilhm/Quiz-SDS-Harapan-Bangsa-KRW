/**
 * Bank Soal Kuis PJOK SD Lengkap Kelas 1 sampai 6 (Arena Kuis PJOK)
 * Setiap tingkatan kelas terdiri dari 10 soal kurikulum resmi PJOK SD.
 * Soal mendidik, tidak membocorkan jawaban di dalam kalimat,
 * serta dilengkapi koreksi dan pembahasan ramah anak tanpa em dash.
 */

const GradeLevels = [
  {
    grade: 1,
    title: "Kelas 1 SD",
    sub: "Gerak Dasar, Bagian Tubuh & Kebersihan Diri",
    iconKey: "runner",
    badgeColor: "emerald",
    desc: "Mengenal gerak lokomotor jalan dan lari, anggota tubuh, kebiasaan cuci tangan, menggosok gigi, dan istirahat."
  },
  {
    grade: 2,
    title: "Kelas 2 SD",
    sub: "Gerak Manipulatif, Keseimbangan & Sikap Sportif",
    iconKey: "whistle",
    badgeColor: "amber",
    desc: "Belajar lempar tangkap bola, berdiri bangau melatih keseimbangan, gerak berirama, dan kebersihan pakaian."
  },
  {
    grade: 3,
    title: "Kelas 3 SD",
    sub: "Kombinasi Gerak, Senam Irama & Makanan Sehat",
    iconKey: "appleNutrition",
    badgeColor: "sky",
    desc: "Eksplorasi lari melewati rintangan, sikap kapal terbang, senam irama ceria, keselamatan air, dan gizi seimbang."
  },
  {
    grade: 4,
    title: "Kelas 4 SD",
    sub: "Kasti, Sepak Bola Mini & Senam Ketangkasan",
    iconKey: "soccerBall",
    badgeColor: "purple",
    desc: "Menguasai lemparan kasti, tendangan kaki bagian dalam, lari bolak-balik kelincahan, dan guling depan."
  },
  {
    grade: 5,
    title: "Kelas 5 SD",
    sub: "Bola Voli, Senam Lantai, Renang Dada & P3K",
    iconKey: "firstAid",
    badgeColor: "rose",
    desc: "Mempelajari passing bawah voli, sikap lilin di atas matras, kompres es luka memar, dan bahaya zat rokok."
  },
  {
    grade: 6,
    title: "Kelas 6 SD",
    sub: "Teknik Lanjutan, Kebugaran Jasmani & Hidup Sehat",
    iconKey: "trophy",
    badgeColor: "indigo",
    desc: "Menyundul bola dengan dahi, start jongkok atletik, cek denyut nadi jantung, dan pencegahan penyakit menular."
  }
];

const QuizQuestions = {
  // =========================================================================
  // KELAS 1 SD (10 SOAL)
  // =========================================================================
  1: [
    {
      id: "pjok-1-1",
      topic: "Gerak Lokomotor",
      question: "Saat guru meminta siswa berjalan lurus ke depan, posisi pandangan mata yang tepat diarahkan ke...",
      options: [
        "Arah depan sejajar tinggi mata",
        "Ujung kedua sepatu sendiri",
        "Arah langit-langit atap ruangan",
        "Teman yang berada di samping kiri"
      ],
      correctIndex: 0,
      explanation: "Memandang lurus ke depan saat berjalan membantu menjaga keseimbangan tubuh dan mencegah kita tersandung atau menabrak rintangan."
    },
    {
      id: "pjok-1-2",
      topic: "Gerak Lokomotor",
      question: "Ketika melakukan gerakan melompat dari atas kardus rendah ke lantai, sikap lutut saat mendarat sebaiknya...",
      options: [
        "Tetap lurus kaku tanpa bergerak",
        "Sedikit ditekuk mengeper lentur",
        "Diluruskan ke belakang badan",
        "Diangkat tinggi menempel ke dada"
      ],
      correctIndex: 1,
      explanation: "Lutut yang ditekuk sedikit mengeper berfungsi seperti pegas untuk meredam benturan sehingga telapak kaki dan lutut aman dari cedera."
    },
    {
      id: "pjok-1-3",
      topic: "Gerak Non-lokomotor",
      question: "Contoh gerakan tubuh yang dilakukan di tempat tanpa berpindah tempat dari posisi berdiri adalah...",
      options: [
        "Berlari mengejar bola di lapangan",
        "Meliukkan badan ke kiri dan kanan",
        "Melompat jauh melintasi parit",
        "Berjalan berbaris menuju ruang kelas"
      ],
      correctIndex: 1,
      explanation: "Meliukkan badan ke kiri dan kanan adalah gerak non-lokomotor karena posisi kedua kaki tetap diam di tempat dan tidak berpindah posisi."
    },
    {
      id: "pjok-1-4",
      topic: "Bagian Tubuh",
      question: "Bagian tubuh manusia yang paling sering digunakan untuk menendang bola saat berolahraga di lapangan adalah...",
      options: [
        "Kedua siku tangan",
        "Kepala bagian belakang",
        "Kaki",
        "Bahu bagian atas"
      ],
      correctIndex: 2,
      explanation: "Kaki memiliki otot yang kuat serta telapak kaki yang kokoh untuk mengarahkan dan mendorong bola meluncur ke depan."
    },
    {
      id: "pjok-1-5",
      topic: "Kebersihan Diri",
      question: "Setelah selesai mengikuti pelajaran olahraga dan bermain tanah di halaman, tindakan pertama yang wajib dilakukan sebelum masuk kelas adalah...",
      options: [
        "Langsung mengambil makanan ringan",
        "Mencuci kedua tangan memakai sabun dan air mengalir",
        "Menyeka keringat langsung ke baju teman",
        "Duduk melamun di lantai teras"
      ],
      correctIndex: 1,
      explanation: "Mencuci tangan dengan sabun dan air mengalir mampu membasmi kuman penyakit dan debu yang menempel setelah beraktivitas fisik."
    },
    {
      id: "pjok-1-6",
      topic: "Kesehatan Gigi",
      question: "Waktu yang paling tepat untuk menggosok gigi pada malam hari agar kuman tidak merusak lapisan gigi adalah...",
      options: [
        "Sesaat sebelum melangkah tidur",
        "Sebelum waktu makan malam tiba",
        "Saat sedang asyik menonton televisi",
        "Hanya saat bangun di tengah malam"
      ],
      correctIndex: 0,
      explanation: "Menyikat gigi sebelum tidur membersihkan sisa makanan sehingga kuman tidak berkembang biak dan gigi tetap putih bersih serta bebas lubang."
    },
    {
      id: "pjok-1-7",
      topic: "Pakaian Olahraga",
      question: "Alasan utama kita mengenakan seragam kaos olahraga berbahan katun yang longgar saat berolahraga adalah...",
      options: [
        "Agar terlihat seperti baju pesta",
        "Mudah menyerap keringat dan nyaman untuk bergerak aktif",
        "Agar tubuh terasa sangat hangat dan tebal",
        "Supaya tidak perlu dicuci setelah dipakai"
      ],
      correctIndex: 1,
      explanation: "Kaos katun berpori mampu menyerap keringat dengan baik sehingga kulit tetap sejuk, nyaman, dan bebas dari iritasi atau biang keringat."
    },
    {
      id: "pjok-1-8",
      topic: "Keselamatan Tubuh",
      question: "Bagian tubuh yang tertutup oleh pakaian dalam adalah bagian pribadi yang...",
      options: [
        "Boleh diperlihatkan kepada siapa saja",
        "Tidak boleh dilihat maupun disentuh sembarangan oleh orang lain",
        "Boleh disentuh oleh orang asing yang baru dikenal",
        "Harus selalu terbuka di tempat umum"
      ],
      correctIndex: 1,
      explanation: "Bagian tubuh yang tertutup pakaian dalam adalah area pribadi. Jika ada orang asing yang mencoba menyentuh, segera tolak dengan tegas dan lapor ke orang tua atau guru."
    },
    {
      id: "pjok-1-9",
      topic: "Istirahat dan Tidur",
      question: "Manfaat utama tidur malam yang cukup dan teratur bagi anak-anak yang sedang dalam masa pertumbuhan adalah...",
      options: [
        "Membuat tubuh cepat lemas di pagi hari",
        "Mengistirahatkan organ tubuh dan memulihkan kembali tenaga",
        "Mengurangi nafsu makan pada siang hari",
        "Membuat anak sering terlambat bangun sekolah"
      ],
      correctIndex: 1,
      explanation: "Tidur malam selama 8 sampai 9 jam memberi kesempatan sel-sel tubuh untuk berkembang, memperbaiki jaringan yang lelah, dan mengembalikan kesegaran tubuh."
    },
    {
      id: "pjok-1-10",
      topic: "Kebutuhan Cairan",
      question: "Ketika tenggorokan terasa kering dan haus setelah berlari di bawah terik matahari, minuman yang paling sehat untuk tubuh adalah...",
      options: [
        "Minuman bersoda yang sangat manis",
        "Air putih bersih dan matang",
        "Air berwarna pekat dengan banyak pemanis buatan",
        "Minuman kemasan berpengawet tinggi"
      ],
      correctIndex: 1,
      explanation: "Air putih alami adalah cairan terbaik untuk menggantikan cairan tubuh yang hilang lewat keringat tanpa menambah gula berlebih."
    }
  ],

  // =========================================================================
  // KELAS 2 SD (10 SOAL)
  // =========================================================================
  2: [
    {
      id: "pjok-2-1",
      topic: "Gerak Manipulatif",
      question: "Saat bersiap menerima lemparan bola mendatar dari teman, posisi kedua telapak tangan yang benar adalah...",
      options: [
        "Mengepal kuat di dalam saku celana",
        "Membuka lebar membentuk mangkuk menghadap arah datangnya bola",
        "Diletakkan rapat di belakang punggung badan",
        "Ditekuk bersedekap di depan dada"
      ],
      correctIndex: 1,
      explanation: "Telapak tangan yang terbuka dan membentuk mangkuk siap meredam laju bola sehingga bola tidak mudah terlepas atau memantul jatuh."
    },
    {
      id: "pjok-2-2",
      topic: "Gerak Manipulatif",
      question: "Gerakan mengayunkan lengan dari belakang ke arah depan bertujuan untuk menghasilkan...",
      options: [
        "Lompatan kaki yang tinggi di udara",
        "Dorongan lemparan bola ke arah sasaran",
        "Putaran badan di lantai secara cepat",
        "Langkah kaki mundur ke belakang"
      ],
      correctIndex: 1,
      explanation: "Ayunan lengan yang kuat dari belakang ke depan memberikan gaya dorong pada benda yang dipegang sehingga lemparan meluncur tepat ke sasaran."
    },
    {
      id: "pjok-2-3",
      topic: "Keseimbangan Statis",
      question: "Latihan berdiri menirukan burung bangau dengan mengangkat satu kaki ke depan bertujuan melatih...",
      options: [
        "Kecepatan lari jarak pendek",
        "Keseimbangan tubuh saat diam",
        "Kekuatan otot jari jemari tangan",
        "Kelenturan otot leher bagian belakang"
      ],
      correctIndex: 1,
      explanation: "Menumpukan berat badan pada satu kaki dalam posisi tegak melatih kekuatan tumpuan otot kaki dan melatih keseimbangan statis tubuh."
    },
    {
      id: "pjok-2-4",
      topic: "Gerak Berirama",
      question: "Saat melakukan senam irama sederhana bersama teman sekelas, seluruh gerakan langkah kaki sebaiknya disesuaikan dengan...",
      options: [
        "Langkah kaki semaunya sendiri",
        "Ketukan musik atau hitungan irama lagu",
        "Bunyi klakson kendaraan di jalan raya",
        "Teriakan penonton di luar pagar"
      ],
      correctIndex: 1,
      explanation: "Kunci utama senam irama adalah keselarasan gerak dengan ketukan tempo musik sehingga barisan terlihat serempak, indah, dan kompak."
    },
    {
      id: "pjok-2-5",
      topic: "Kebugaran Jasmani",
      question: "Latihan melompat dengan kedua kaki melewati garis pembatas secara berulang-ulang bermanfaat untuk memperkuat otot...",
      options: [
        "Leher dan rahang",
        "Kaki dan betis",
        "Jari jemari tangan",
        "Kelopak mata"
      ],
      correctIndex: 1,
      explanation: "Tolakan dan pendaratan kaki berulang kali mengaktifkan otot paha, betis, dan pergelangan kaki sehingga otot kaki semakin kuat dan kokoh."
    },
    {
      id: "pjok-2-6",
      topic: "Kebersihan Lingkungan",
      question: "Setelah selesai menikmati bekal air minum saat jam istirahat olahraga, botol plastik kosong sebaiknya diletakkan di...",
      options: [
        "Bawah pohon rindang di lapangan",
        "Tempat sampah khusus plastik daur ulang",
        "Di dalam gawang sepak bola",
        "Dibiarkan tergeletak di tengah lintasan lari"
      ],
      correctIndex: 1,
      explanation: "Membuang sampah plastik pada tempatnya menjaga lapangan tetap bersih, nyaman dipakai bersama, dan terbebas dari bahaya tersandung sampah."
    },
    {
      id: "pjok-2-7",
      topic: "Kebersihan Pakaian",
      question: "Baju olahraga yang basah kuyup karena keringat sebaiknya segera diganti dengan pakaian bersih agar tidak menimbulkan...",
      options: [
        "Rasa lapar yang bertambah kuat",
        "Gatal-gatal pada kulit dan bau badan yang tidak sedap",
        "Pusing kepala secara tiba-tiba",
        "Gigi menjadi terasa ngilu"
      ],
      correctIndex: 1,
      explanation: "Pakaian basah yang dibiarkan menempel di kulit menjadi sarang jamur dan bakteri yang memicu gatal merah serta aroma tidak sedap."
    },
    {
      id: "pjok-2-8",
      topic: "Sikap Duduk Sehat",
      question: "Sikap duduk yang benar saat membaca buku di meja belajar kelas adalah...",
      options: [
        "Duduk membungkuk dengan dada menempel ke meja",
        "Punggung tegak bersandar nyaman dan pandangan tidak terlalu dekat",
        "Duduk bertumpu miring pada salah satu siku tangan",
        "Tengkurap dengan kepala menunduk sangat rendah"
      ],
      correctIndex: 1,
      explanation: "Duduk dengan punggung tegak menjaga susunan tulang belakang tetap lurus alami serta mencegah gangguan postur bungkuk di kemudian hari."
    },
    {
      id: "pjok-2-9",
      topic: "Gizi dan Nutrisi",
      question: "Kelompok makanan yang mengandung banyak vitamin dan serat untuk menjaga daya tahan tubuh agar tidak mudah terserang flu adalah...",
      options: [
        "Gorengan minyak jelantah dan keripik asin",
        "Buah-buahan segar dan sayuran hijau",
        "Permen gulali manis dengan pewarna pekat",
        "Cokelat batangan dengan pemanis sintetis"
      ],
      correctIndex: 1,
      explanation: "Sayur dan buah kaya akan vitamin C, vitamin A, serat, dan antioksidan alami yang berperan penting memperkuat sistem kekebalan tubuh."
    },
    {
      id: "pjok-2-10",
      topic: "Sikap Sportif",
      question: "Sikap terpuji yang ditunjukkan oleh seorang anak saat kelompoknya belum berhasil memenangkan permainan estafet adalah...",
      options: [
        "Menyalahkan teman sekelompok di depan guru",
        "Mengucapkan selamat kepada pemenang dan bertekad berlatih lebih giat",
        "Menangis berguling-guling di tengah lapangan",
        "Merusak peralatan permainan yang ada di lapangan"
      ],
      correctIndex: 1,
      explanation: "Sikap sportif mengajarkan kita untuk lapang dada menerima hasil pertandingan, menghargai usaha lawan, dan tetap bersemangat memperbaiki diri."
    }
  ],

  // =========================================================================
  // KELAS 3 SD (10 SOAL)
  // =========================================================================
  3: [
    {
      id: "pjok-3-1",
      topic: "Kombinasi Gerak Dasar",
      question: "Dalam permainan lari berintang, kombinasi gerak dasar lokomotor yang dilakukan secara berurutan adalah...",
      options: [
        "Duduk santai lalu berguling santai di rumput",
        "Berlari cepat ke depan lalu melompati bilah rintangan",
        "Diam mematung lalu melambaikan tangan ke atas",
        "Berdiri jinjit lalu berputar di tempat"
      ],
      correctIndex: 1,
      explanation: "Kombinasi gerak lari dan lompat menggabungkan perpindahan tempat cepat dengan tolakan kaki di udara untuk melewati bilah rintangan."
    },
    {
      id: "pjok-3-2",
      topic: "Gerak Manipulatif",
      question: "Saat memantulkan bola basket ke lantai sambil berjalan, bagian tangan yang digunakan untuk mendorong bola ke bawah adalah...",
      options: [
        "Punggung tangan dengan jari merapat kaku",
        "Ujung ruas telapak tangan dan jari yang lentur",
        "Siku tangan bagian dalam yang ditekuk",
        "Pergelangan tangan dengan kepalan keras"
      ],
      correctIndex: 1,
      explanation: "Memantulkan bola (dribble) dilakukan dengan mendorong bola memakai bantalan jari tangan yang rileks, bukan memukul bola dengan telapak kaku."
    },
    {
      id: "pjok-3-3",
      topic: "Keseimbangan Dinamis",
      question: "Pada gerakan sikap kapal terbang, salah satu kaki bertumpu tegak di lantai sedangkan kaki lainnya diluruskan ke arah...",
      options: [
        "Arah samping kanan menempel lutut",
        "Belakang sejajar rata dengan punggung badan",
        "Depan setinggi dada dengan lutut ditekuk",
        "Bawah lantai menyentuh ujung jari tangan"
      ],
      correctIndex: 1,
      explanation: "Meluruskan kaki ke belakang dan merentangkan kedua tangan ke samping membentuk garis horizontal yang menyeimbangkan titik pusat gravitasi tubuh."
    },
    {
      id: "pjok-3-4",
      topic: "Senam Irama",
      question: "Sebelum memulai rangkaian gerakan inti senam irama yang bersemangat, kita wajib melakukan gerakan...",
      options: [
        "Makan berat hingga kenyang",
        "Pemanasan ringan untuk menyiapkan otot dan persendian",
        "Tidur telentang di bawah terik matahari",
        "Lari sprint secepat mungkin tanpa arahan"
      ],
      correctIndex: 1,
      explanation: "Gerakan pemanasan menaikkan suhu tubuh secara bertahap, melumasi sendi, dan mengalirkan oksigen ke otot guna mencegah cedera dan kram."
    },
    {
      id: "pjok-3-5",
      topic: "Keselamatan di Air",
      question: "Aturan keselamatan yang harus dipatuhi oleh seluruh siswa saat berada di tepi kolam renang sekolah adalah...",
      options: [
        "Saling mendorong teman ke dalam kolam yang dalam",
        "Tidak berlari di tepi kolam karena lantainya basah dan licin",
        "Membawa bekal makanan ke dalam air kolam",
        "Langsung menyelam ke area dalam tanpa pemanasan"
      ],
      correctIndex: 1,
      explanation: "Lantai di sekitar tepi kolam renang sering basah dan licin sehingga berlari sangat berisiko membuat terpeleset dan membentur lantai keras."
    },
    {
      id: "pjok-3-6",
      topic: "Kebugaran Jasmani",
      question: "Latihan menahan berat badan dengan kedua tangan bersandar pada dinding (push-up dinding) bertujuan melatih kekuatan otot...",
      options: [
        "Lengan, dada, dan bahu",
        "Mata dan telinga",
        "Jari kaki bagian jempol",
        "Rambut dan kulit kepala"
      ],
      correctIndex: 0,
      explanation: "Dorongan beban badan oleh kedua lengan menguatkan otot trisep, deltoid pada bahu, serta otot pektoralis di area dada."
    },
    {
      id: "pjok-3-7",
      topic: "Kebersihan Diri",
      question: "Kuku tangan yang dibiarkan tumbuh panjang dan kotor berpotensi menjadi sarang kuman yang dapat menyebabkan penyakit...",
      options: [
        "Sakit perut dan diare saat makan memakai tangan",
        "Kaki terkilir saat berjalan",
        "Telinga berdengung di malam hari",
        "Mata menjadi rabun dekat"
      ],
      correctIndex: 0,
      explanation: "Kotoran hitam di balik kuku mengandung jutaan telur cacing dan bakteri penyebab diare yang mudah berpindah ke makanan saat disuapkan ke mulut."
    },
    {
      id: "pjok-3-8",
      topic: "Makanan dan Jajanan Sehat",
      question: "Ciri makanan jajanan sehat di lingkungan kantin sekolah yang aman dikonsumsi oleh siswa adalah...",
      options: [
        "Berwarna sangat mencolok terang berpendar",
        "Ditempatkan dalam wadah tertutup bersih dan tidak dihinggapi lalat",
        "Berbau menyengat dan berlendir lengket",
        "Dijual di pinggir jalan dekat tumpukan sampah terbuka"
      ],
      correctIndex: 1,
      explanation: "Makanan yang tertutup rapat terlindung dari debu polusi dan lalat pembawa bakteri patogen sehingga aman untuk pencernaan anak."
    },
    {
      id: "pjok-3-9",
      topic: "Kesehatan Kulit Kepala",
      question: "Kebiasaan mencuci rambut dengan air bersih dan sampo minimal dua hari sekali berguna untuk...",
      options: [
        "Menghilangkan ketombe, kotoran debu, dan rasa gatal di kepala",
        "Mengubah warna rambut menjadi ungu",
        "Menambah berat badan anak secara cepat",
        "Membuat tidur menjadi gelisah"
      ],
      correctIndex: 0,
      explanation: "Mencuci rambut secara teratur membersihkan minyak berlebih dan debu keringat sehingga kulit kepala sehat, segar, dan bebas dari kutu rambut."
    },
    {
      id: "pjok-3-10",
      topic: "Waktu Luang Sehat",
      question: "Contoh kegiatan bermanfaat untuk mengisi waktu luang pada hari libur sekolah yang menyehatkan raga adalah...",
      options: [
        "Bermain gawai ponsel seharian penuh di kamar gelap",
        "Bersepeda santai bersama keluarga di taman kota",
        "Menatap layar gawai tanpa berkedip selama berjam-jam",
        "Tidur terus-menerus tanpa beranjak dari kasur"
      ],
      correctIndex: 1,
      explanation: "Bersepeda santai di ruang terbuka menghirup udara segar, menggerakkan seluruh persendian tubuh, dan mempererat keharmonisan keluarga."
    }
  ],

  // =========================================================================
  // KELAS 4 SD (10 SOAL)
  // =========================================================================
  4: [
    {
      id: "pjok-4-1",
      topic: "Permainan Bola Kecil (Kasti)",
      question: "Dalam permainan kasti, teknik melempar bola melambung tinggi ke atas digunakan ketika pelempar ingin...",
      options: [
        "Mengirim bola kepada teman penjaga yang berjarak cukup jauh",
        "Mematikan pelari yang berada sangat dekat dengan pemukul",
        "Memantulkan bola ke dalam tanah liat",
        "Menyembunyikan bola di balik seragam kaos"
      ],
      correctIndex: 0,
      explanation: "Lemparan melambung dengan sudut ayunan ke atas menghasilkan lintasan parabola jarak jauh yang efektif untuk operan jarak jauh di lapangan kasti."
    },
    {
      id: "pjok-4-2",
      topic: "Permainan Bola Kecil (Kasti)",
      question: "Saat bersiap memukul bola kasti yang dilempar oleh pelambung, cara memegang tongkat pemukul kayu yang tepat adalah...",
      options: [
        "Dipegang hanya dengan ujung dua jari telunjuk",
        "Digenggam erat oleh kedua tangan dengan posisi tangan terkuat di atas",
        "Diletakkan di pundak tanpa digenggam oleh telapak tangan",
        "Dilemparkan ke arah pelambung sebelum bola meluncur"
      ],
      correctIndex: 1,
      explanation: "Genggaman dua tangan yang kokoh memberi kendali arah pukulan yang presisi dan mencegah tongkat kayu terlempar tanpa sengaja saat diayunkan."
    },
    {
      id: "pjok-4-3",
      topic: "Permainan Bola Besar (Sepak Bola Mini)",
      question: "Teknik mengoper bola jarak dekat kepada kawan satu regu paling akurat dilakukan dengan menggunakan...",
      options: [
        "Ujung runcing ibu jari kaki",
        "Kaki bagian dalam yang memiliki permukaan bidang luas",
        "Tumit telapak kaki belakang",
        "Lutut bagian samping luar"
      ],
      correctIndex: 1,
      explanation: "Kaki bagian dalam memiliki bidang permukaan yang luas dan datar sehingga memudahkan pemain mengontrol laju serta akurasi operan pendek."
    },
    {
      id: "pjok-4-4",
      topic: "Permainan Bola Besar (Sepak Bola Mini)",
      question: "Dalam permainan sepak bola mini, tugas utama dari seorang penjaga gawang (kiper) di area kotak penalti adalah...",
      options: [
        "Berlari mencetak gol ke gawang lawan setiap menit",
        "Mencegah bola tendangan lawan masuk ke dalam jaring gawang",
        "Duduk santai di tepi garis samping lapangan",
        "Menjaga bola agar tidak pernah disentuh oleh siapapun"
      ],
      correctIndex: 1,
      explanation: "Penjaga gawang adalah pemain bertahan terakhir yang diberi keistimewaan memegang bola di area terlarang guna menggagalkan peluang gol lawan."
    },
    {
      id: "pjok-4-5",
      topic: "Kebugaran Jasmani (Kelincahan)",
      question: "Latihan lari bolak-balik memindahkan balok kayu (shuttle run) bertujuan untuk meningkatkan...",
      options: [
        "Kelincahan mengubah arah gerak dengan cepat",
        "Kekuatan daya ingat saat menghafal rumus",
        "Ketebalan lapisan tulang tengkorak",
        "Panjang kuku jari jemari kaki"
      ],
      correctIndex: 0,
      explanation: "Shuttle run melatih koordinasi neuromuscular sehingga tubuh mampu berakselerasi, mengerem, dan berbalik arah tanpa kehilangan keseimbangan."
    },
    {
      id: "pjok-4-6",
      topic: "Kebugaran Jasmani (Kelenturan)",
      question: "Gerakan mencium lutut dengan posisi duduk selonjor di atas lantai bermanfaat untuk melatih kelenturan otot...",
      options: [
        "Punggung, pinggang, dan paha bagian belakang",
        "Otot wajah dan kelopak bibir",
        "Jemari tangan bagian kelingking",
        "Daun telinga kanan dan kiri"
      ],
      correctIndex: 0,
      explanation: "Mencium lutut meregangkan otot hamstring di paha belakang dan otot erector spinae di punggung sehingga elastisitas persendian meningkat."
    },
    {
      id: "pjok-4-7",
      topic: "Senam Lantai",
      question: "Pada gerakan guling ke depan (forward roll) di atas matras, bagian tubuh yang pertama kali menyentuh matras setelah kedua telapak tangan adalah...",
      options: [
        "Ujung hidung dan dahi kepala",
        "Tengkuk leher bagian belakang",
        "Ujung kedua lutut kaki",
        "Punggung telapak kaki"
      ],
      correctIndex: 1,
      explanation: "Dengan menempelkan dagu ke dada, bagian tengkuk belakang leher akan mendarat mulus di matras dan mencegah cedera benturan kepala atau dahi."
    },
    {
      id: "pjok-4-8",
      topic: "Olahraga Air (Renang)",
      question: "Pada renang gaya dada, gerakan kedua tungkai kaki yang membuka lebar ke samping lalu merapat mendorong air menirukan gerakan hewan...",
      options: [
        "Kucing yang melompat",
        "Katak yang berenang di kolam",
        "Burung elang yang melayang",
        "Kuda yang berlari kencang"
      ],
      correctIndex: 1,
      explanation: "Renang gaya dada sering dijuluki gaya katak karena tendangan kakinya menyerupai gerak kaki katak yang menekuk lalu menendang keluar mendorong air."
    },
    {
      id: "pjok-4-9",
      topic: "Kebersihan Alat Reproduksi",
      question: "Langkah menjaga kebersihan organ reproduksi yang wajib dibiasakan setiap hari adalah...",
      options: [
        "Mengganti pakaian dalam minimal dua kali sehari dan setelah mandi",
        "Memakai celana dalam yang sama selama tiga hari berturut-turut",
        "Membiarkan pakaian dalam dalam keadaan lembap setelah berolahraga",
        "Mencuci organ dengan air comberan kotor"
      ],
      correctIndex: 0,
      explanation: "Pakaian dalam bersih dari bahan katun menjaga area lipatan tetap kering dan bersih sehingga terhindar dari kuman serta infeksi jamur kulit."
    },
    {
      id: "pjok-4-10",
      topic: "Pencegahan Penyakit Kulit",
      question: "Agar terhindar dari penularan penyakit jamur kulit seperti panu dan kadas, kebiasaan yang harus dihindari di sekolah adalah...",
      options: [
        "Membawa bekal botol minum sendiri dari rumah",
        "Saling bertukar atau bergantian memakai handuk mandi dengan teman",
        "Menjemur pakaian di bawah sinar terik matahari",
        "Mencuci tangan sebelum jam makan tiba"
      ],
      correctIndex: 1,
      explanation: "Spora jamur kulit dapat menempel dan bertahan hidup pada serat kain handuk yang lembap sehingga mudah menular bila dipakai bergantian."
    }
  ],

  // =========================================================================
  // KELAS 5 SD (10 SOAL)
  // =========================================================================
  5: [
    {
      id: "pjok-5-1",
      topic: "Permainan Bola Voli",
      question: "Saat melakukan teknik passing bawah bola voli, posisi kedua lengan yang tepat di depan badan adalah...",
      options: [
        "Ditekuk membentuk sudut siku sembilan puluh derajat",
        "Lurus rapat ke depan dengan ibu jari tangan sejajar menghadap ke atas",
        "Direntangkan lebar ke samping badan seperti burung",
        "Diletakkan santai di belakang pinggang"
      ],
      correctIndex: 1,
      explanation: "Kedua siku yang lurus terkunci dan ibu jari sejajar menghasilkan bidang pantul lengan bawah yang rata sehingga laju bola mudah diarahkan ke toser."
    },
    {
      id: "pjok-5-2",
      topic: "Permainan Bola Basket",
      question: "Operan bola lurus setinggi dada teman satu regu dalam olahraga bola basket dikenal dengan istilah...",
      options: [
        "Bounce pass (operan pantul)",
        "Overhead pass (operan atas kepala)",
        "Chest pass (operan dada)",
        "Baseball pass (operan lambung jauh)"
      ],
      correctIndex: 2,
      explanation: "Chest pass dilakukan dengan melempar bola lurus dari depan dada menuju ke dada rekan satu tim dengan dorongan jari dan lecutan pergelangan tangan."
    },
    {
      id: "pjok-5-3",
      topic: "Permainan Bulu Tangkis",
      question: "Jenis pukulan keras, cepat, dan menukik tajam ke area lapangan lawan untuk mematikan lawan dalam bulu tangkis disebut pukulan...",
      options: [
        "Lob tinggi ke garis belakang",
        "Drop shot lembut tipis di net",
        "Smash tajam bertenaga",
        "Netting pelan memutar"
      ],
      correctIndex: 2,
      explanation: "Smash merupakan pukulan ofensif utama dalam bulu tangkis yang dipukul dari atas kepala dengan lompatan dan ayunan raket berkekuatan penuh."
    },
    {
      id: "pjok-5-4",
      topic: "Kebugaran Jasmani (Kekuatan Otot)",
      question: "Gerakan baring duduk (sit-up) yang dilakukan secara benar di atas matras bermanfaat utama untuk melatih kekuatan otot...",
      options: [
        "Perut (abdominal)",
        "Betis dan tumit kaki",
        "Jemari telunjuk tangan",
        "Pipi dan rahang"
      ],
      correctIndex: 0,
      explanation: "Mengangkat tubuh bagian atas dari posisi telentang melatih kontraksi otot rektus abdominis di bagian dinding perut sehingga perut lebih kuat dan stabil."
    },
    {
      id: "pjok-5-5",
      topic: "Senam Lantai",
      question: "Pada gerakan sikap lilin di atas matras, posisi kedua kaki yang benar saat tubuh terangkat adalah...",
      options: [
        "Membuka lebar ke samping menempel lantai",
        "Rapat lurus ke atas vertikal dengan pinggul ditopang kedua tangan",
        "Ditekuk bersila di atas dada",
        "Digerakkan memutar seperti mengayuh sepeda"
      ],
      correctIndex: 1,
      explanation: "Sikap lilin menuntut keseimbangan di mana berat badan bertumpu pada pundak dan tengkuk, sedangkan kedua tangan menyangga pinggang agar kaki tegak lurus."
    },
    {
      id: "pjok-5-6",
      topic: "Senam Irama (Pemanasan)",
      question: "Gerakan pendinginan (cooling down) setelah selesai melakukan aktivitas fisik olahraga berat bertujuan untuk...",
      options: [
        "Menaikkan detak jantung secara mendadak",
        "Menurunkan detak jantung secara bertahap dan merilekskan otot",
        "Membuat otot seketika menjadi kaku dan tegang",
        "Memicu keringat keluar lebih deras"
      ],
      correctIndex: 1,
      explanation: "Pendinginan membantu sirkulasi darah kembali normal, mengangkut asam laktat penyebab pegal, dan mengembalikan denyut nadi ke fase istirahat."
    },
    {
      id: "pjok-5-7",
      topic: "Olahraga Air (Renang)",
      question: "Pada saat berenang gaya dada, pengambilan napas dilakukan dengan cara...",
      options: [
        "Menolehkan kepala ke samping kanan sejajar permukaan air",
        "Mengangkat kepala ke atas permukaan air saat kedua tangan mendayung",
        "Membuka mulut di dalam air saat posisi meluncur",
        "Menengadahkan wajah ke atas sambil posisi telentang"
      ],
      correctIndex: 1,
      explanation: "Ketika kedua tangan mendayung ke luar dan ke bawah, dada akan terangkat sehingga kepala dapat naik menghirup udara melalui mulut di atas air."
    },
    {
      id: "pjok-5-8",
      topic: "Pertolongan Pertama (P3K)",
      question: "Tindakan pertama yang tepat untuk meredakan pembengkakan dan rasa nyeri pada luka memar akibat terbentur adalah...",
      options: [
        "Mengoleskan air mendidih yang sangat panas",
        "Mengompres bagian memar dengan es batu yang dibalut kain bersih",
        "Memijat dan menekan luka sekuat tenaga",
        "Menaburkan pasir kering di atas memar"
      ],
      correctIndex: 1,
      explanation: "Kompres dingin (es) mempersempit pembuluh darah kapiler yang pecah (vasokonstriksi) sehingga pendarahan di bawah kulit dan pembengkakan dapat ditekan."
    },
    {
      id: "pjok-5-9",
      topic: "Pertolongan Pertama (Luka Lecet)",
      question: "Sebelum memberikan obat antiseptik pada lutut yang lecet akibat terjatuh di lapangan, luka tersebut wajib...",
      options: [
        "Dibersihkan dahulu dengan air bersih yang mengalir untuk membuang butiran pasir",
        "Dibalut langsung dengan plester tanpa dibersihkan",
        "Digaruk dengan kuku tangan",
        "Ditutup rapat dengan daun kotor"
      ],
      correctIndex: 0,
      explanation: "Membilas luka dengan air mengalir membersihkan debu dan pasir yang mengandung bakteri tetanus sebelum diberikan cairan obat merah antiseptik."
    },
    {
      id: "pjok-5-10",
      topic: "Bahaya Zat Berbahaya (Rokok)",
      question: "Zat kimia beracun di dalam asap rokok yang dapat mengikat sel darah merah sehingga tubuh kekurangan pasokan oksigen adalah...",
      options: [
        "Gas Karbon Monoksida",
        "Vitamin C alami",
        "Kalsium pembentuk tulang",
        "Mineral air murni"
      ],
      correctIndex: 0,
      explanation: "Karbon monoksida berikatan kuat dengan hemoglobin dalam darah mengalahkan oksigen sehingga jantung harus bekerja ekstra keras memompa darah."
    }
  ],

  // =========================================================================
  // KELAS 6 SD (10 SOAL)
  // =========================================================================
  6: [
    {
      id: "pjok-6-1",
      topic: "Sepak Bola Lanjutan",
      question: "Saat melakukan sundulan bola (heading) dalam permainan sepak bola, bagian kepala yang paling tepat dan aman untuk kontak dengan bola adalah...",
      options: [
        "Puncak ubun-ubun kepala bagian atas",
        "Dahi (kening) bagian depan",
        "Telinga bagian samping kanan",
        "Batang leher bagian belakang"
      ],
      correctIndex: 1,
      explanation: "Tulang dahi (frontal) adalah bagian tengkorak yang paling tebal dan keras. Menggunakan dahi memudahkan pemain melihat bola dan mengontrol arah sundulan."
    },
    {
      id: "pjok-6-2",
      topic: "Bola Voli Lanjutan",
      question: "Dalam permainan bola voli, pukulan servis yang dilakukan dengan melemparkan bola ke atas lalu memukulnya di atas kepala disebut servis...",
      options: [
        "Bawah dengan ayunan tangan lurus",
        "Atas (floating atau tennis serve)",
        "Samping membelakangi lapangan",
        "Duduk dari lantai dasar"
      ],
      correctIndex: 1,
      explanation: "Servis atas dipukul saat bola berada di atas ketinggian kepala sehingga laju bola lebih kencang, menukik tajam, dan menyulitkan lawan menerima bola."
    },
    {
      id: "pjok-6-3",
      topic: "Atletik (Lari Cepat)",
      question: "Pada perlombaan lari cepat (sprint), aba-aba resmi yang diberikan oleh juri starter sebelum melepas pelari adalah...",
      options: [
        "Awas, lari, cepat",
        "Bersedia, siap, ya (atau bunyi tembakan pistol)",
        "Satu, dua, tiga, jalan",
        "Maju, lompat, berhenti"
      ],
      correctIndex: 1,
      explanation: "Urutan aba-aba start jongkok internasional adalah Bersedia (mengatur posisi kaki di balok start), Siap (mengangkat panggul), dan Ya (melesat ke depan)."
    },
    {
      id: "pjok-6-4",
      topic: "Atletik (Tolak Peluru)",
      question: "Posisi peluru besi yang benar sebelum dilakukan tolakan gaya menyamping adalah diletakkan...",
      options: [
        "Di atas kedua tempurung lutut",
        "Menempel di leher samping bagian bawah daun telinga",
        "Di dalam kantong jaket olahraga",
        "Diayun bebas di bawah pinggang"
      ],
      correctIndex: 1,
      explanation: "Peluru ditempelkan di cekungan leher dekat rahang bawah agar tenaga dari putaran bahu dan dorongan siku tersalur sempurna saat peluru ditolak (bukan dilempar)."
    },
    {
      id: "pjok-6-5",
      topic: "Kebugaran Jasmani (Sirkuit Training)",
      question: "Latihan fisik yang terdiri atas beberapa pos berbeda (seperti pos lompat tali, push up, lari bolak-balik) yang dilakukan berurutan disebut...",
      options: [
        "Senam irama tunggal",
        "Latihan sirkuit (circuit training)",
        "Lompat jauh gaya menggantung",
        "Renang estafet beregu"
      ],
      correctIndex: 1,
      explanation: "Circuit training mengombinasikan berbagai bentuk stasiun latihan fisik guna melatih kekuatan, kelincahan, dan daya tahan jantung secara terpadu dan efisien."
    },
    {
      id: "pjok-6-6",
      topic: "Pemeriksaan Kesehatan (Denyut Nadi)",
      question: "Tempat yang paling mudah diraba memakai dua jari tangan untuk menghitung frekuensi denyut nadi setelah berolahraga adalah...",
      options: [
        "Pergelangan tangan bagian dalam (arteri radialis) atau leher samping (arteri karotis)",
        "Ujung kuku jari tengah tangan",
        "Daun telinga bagian belakang",
        "Tempurung tulang kering kaki"
      ],
      correctIndex: 0,
      explanation: "Arteri radialis pada pergelangan tangan dan arteri karotis di leher berada dekat dengan permukaan kulit sehingga denyut pompa jantung dapat teraba dengan jelas."
    },
    {
      id: "pjok-6-7",
      topic: "Senam Ketangkasan",
      question: "Sikap mendarat yang benar setelah melakukan lompatan dari atas peti lompat untuk mencegah cedera persendian adalah...",
      options: [
        "Kedua kaki mendarat kaku tanpa ditekuk",
        "Mendarat dengan kedua ujung kaki mengeper lentur dan lutut sedikit ditekuk",
        "Mendarat dengan pantat menyentuh lantai terlebih dahulu",
        "Mendarat dengan salah satu tangan menahan beban badan"
      ],
      correctIndex: 1,
      explanation: "Gerak mengeper pada persendian pergelangan kaki dan lutut bekerja efektif meredam gaya gravitasi bumi sehingga tulang belakang terlindungi dari goncangan."
    },
    {
      id: "pjok-6-8",
      topic: "Pencegahan Penyakit Menular",
      question: "Langkah 3M Plus untuk mencegah penularan penyakit demam berdarah yang disebarkan oleh nyamuk Aedes aegypti adalah...",
      options: [
        "Membiarkan genangan air kotor di ember terbuka",
        "Menguras bak mandi, menutup rapat penampungan air, dan mendaur ulang barang bekas",
        "Menumpuk pakaian kotor berbulan-bulan di sudut kamar",
        "Membuang sampah kaleng di selokan depan rumah"
      ],
      correctIndex: 1,
      explanation: "Gerakan 3M Plus memutus siklus hidup jentik nyamuk demam berdarah yang berkembang biak pada genangan air bersih di sekitar pekarangan rumah."
    },
    {
      id: "pjok-6-9",
      topic: "Bahaya Narkoba dan Napza",
      question: "Salah satu dampak negatif yang sangat berbahaya dari penyalahgunaan narkoba terhadap sistem saraf manusia adalah...",
      options: [
        "Menambah konsentrasi belajar menjadi sangat cerdas",
        "Merusak sel-sel otak, memicu ketergantungan mental, dan hilangnya kesadaran",
        "Membuat otot tubuh menjadi kuat secara alami",
        "Menjaga tubuh agar selalu awet muda"
      ],
      correctIndex: 1,
      explanation: "Zat narkotika dan zat adiktif merusak reseptor neurotransmitter di otak yang menyebabkan kerusakan permanen pada memori, emosi, dan organ vital."
    },
    {
      id: "pjok-6-10",
      topic: "Pola Hidup Bersih dan Sehat (PHBS)",
      question: "Penerapan Pola Hidup Bersih dan Sehat (PHBS) di lingkungan sekolah dapat diwujudkan melalui tindakan nyata...",
      options: [
        "Membuka ventilasi jendela kelas agar sirkulasi udara lancar dan memilah sampah",
        "Menutup semua jendela rapat-rapat saat ruangan penuh siswa",
        "Mencoret-coret dinding toilet sekolah dengan spidol",
        "Menimbun sampah daun kering di laci meja belajar"
      ],
      correctIndex: 0,
      explanation: "Ventilasi yang baik mengalirkan udara segar kaya oksigen dan mengurangi risiko penularan virus melalui udara pernapasan di dalam ruang kelas."
    }
  ]
};
