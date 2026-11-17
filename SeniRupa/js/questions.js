/**
 * Bank Soal Kuis Seni Rupa SD
 * Maskot: Ciko si Kuas Ajaib & Palet Pelangi
 * Struktur Kurikulum:
 * - 6 Tingkatan Kelas (Kelas 1 sampai 6)
 * - Masing-masing kelas tepat 10 butir soal (Total 60 soal)
 * - Sesuai Kurikulum Merdeka Seni Rupa SD & daya kognitif anak usia SD
 * - Jawaban tidak diletakkan di dalam teks pertanyaan atau petunjuk pilihan ganda
 * - Pilihan jawaban A, B, C, D yang mendidik dengan pengecoh yang relevan
 * - Setiap butir soal dilengkapi topik materi dan pembahasan koreksi edukatif yang jelas
 */

const QuizDatabase = {
  // Informasi Tingkatan Kelas 1 sampai 6
  grades: [
    {
      id: 1,
      title: "Kelas 1 SD",
      subtitle: "Garis, Warna Pokok & Bentuk",
      iconKey: "class1ShapesLines",
      badgeColor: "amber",
      description: "Mengenal aneka garis, 3 warna pokok (primer), bentuk lingkaran dan segitiga, tekstur permukaan benda, serta ekspresi wajah.",
      questionCount: 10
    },
    {
      id: 2,
      title: "Kelas 2 SD",
      subtitle: "Campuran Warna & Kolase",
      iconKey: "class2ColorMix",
      badgeColor: "emerald",
      description: "Mencampur warna primer menjadi warna sekunder, pola ritme berulang, seni melipat kertas (origami), dan kreasi kolase bahan alam.",
      questionCount: 10
    },
    {
      id: 3,
      title: "Kelas 3 SD",
      subtitle: "Gambar Dekoratif & Cetak Cap",
      iconKey: "class3DecorativePrint",
      badgeColor: "sky",
      description: "Karya hias dekoratif flora dan fauna, cetak cap sederhana dari umbi/pelepah pisang, karya 3 dimensi lempung/plastisin, dan anyaman kertas.",
      questionCount: 10
    },
    {
      id: 4,
      title: "Kelas 4 SD",
      subtitle: "Tekstur, Arsitektur & Kriya",
      iconKey: "class4TextureCraft",
      badgeColor: "purple",
      description: "Tekstur semu dan nyata, teknik arsir silang gelap terang, menggambar rumah tetangga, daur ulang barang bekas, dan ragam hias tenun nusantara.",
      questionCount: 10
    },
    {
      id: 5,
      title: "Kelas 5 SD",
      subtitle: "Batik Nusantara & Desain Poster",
      iconKey: "class5BatikPoster",
      badgeColor: "rose",
      description: "Prinsip keseimbangan simetris & fokus perhatian, motif batik khas nusantara (Kawung, Megamendung), canting dan malam, serta desain poster edukatif.",
      questionCount: 10
    },
    {
      id: 6,
      title: "Kelas 6 SD",
      subtitle: "Karya 3D, Perspektif & Pameran",
      iconKey: "class6Exhibition3D",
      badgeColor: "indigo",
      description: "Perbedaan karya 2D dan 3D, gambar perspektif satu titik lenyap, desain kemasan produk kreatif, apresiasi maestro pelukis Indonesia, dan pameran karya seni sekolah.",
      questionCount: 10
    }
  ],

  // Kumpulan 60 Soal (10 Soal per Kelas)
  questions: {
    // =========================================================================
    // KELAS 1 SD (10 BUTIR SOAL)
    // =========================================================================
    1: [
      {
        id: "sr-k1-01",
        topic: "Mengenal Jenis Garis",
        question: "Garis yang bentuknya berkelok-kelok naik dan turun tajam meruncing menyerupai mata gergaji dinamakan garis...",
        options: [
          { label: "A", text: "Lurus mendatar" },
          { label: "B", text: "Lingkaran" },
          { label: "C", text: "Zig-zag" },
          { label: "D", text: "Lengkung pelangi" }
        ],
        correctIndex: 2,
        explanation: "Garis zig-zag adalah garis patah-patah yang naik dan turun secara bergantian dengan sudut yang tajam dan runcing."
      },
      {
        id: "sr-k1-02",
        topic: "Warna Primer / Pokok",
        question: "Warna-warna dasar yang murni dan tidak bisa dihasilkan dari campuran warna lain dinamakan warna...",
        options: [
          { label: "A", text: "Sekunder" },
          { label: "B", text: "Primer (pokok)" },
          { label: "C", text: "Hitam putih" },
          { label: "D", text: "Pelangi" }
        ],
        correctIndex: 1,
        explanation: "Warna primer adalah tiga warna asli yang menjadi asal-usul warna lainnya. Warna primer tidak dapat dibuat dari campuran warna apa pun."
      },
      {
        id: "sr-k1-03",
        topic: "Kelompok Tiga Warna Dasar",
        question: "Di bawah ini yang merupakan kelompok tiga warna primer atau warna pokok adalah...",
        options: [
          { label: "A", text: "Merah, Kuning, dan Biru" },
          { label: "B", text: "Hijau, Ungu, dan Oranye" },
          { label: "C", text: "Hitam, Abu-abu, dan Putih" },
          { label: "D", text: "Cokelat, Emas, dan Perak" }
        ],
        correctIndex: 0,
        explanation: "Tiga warna dasar dalam seni rupa adalah merah, kuning, dan biru. Dari ketiga warna ini, kita dapat menciptakan aneka warna baru!"
      },
      {
        id: "sr-k1-04",
        topic: "Bentuk Geometris",
        question: "Benda di sekitar kita seperti uang koin logam, roda sepeda, dan piring makan memiliki bentuk dasar...",
        options: [
          { label: "A", text: "Segitiga" },
          { label: "B", text: "Persegi kotak" },
          { label: "C", text: "Lingkaran" },
          { label: "D", text: "Bintang" }
        ],
        correctIndex: 2,
        explanation: "Koin, roda sepeda, dan piring memiliki bentuk tepi melingkar penuh tanpa sudut, yaitu bentuk lingkaran."
      },
      {
        id: "sr-k1-05",
        topic: "Bangun Datar Segitiga",
        question: "Bangun datar yang memiliki 3 buah sisi garis lurus dan 3 sudut lancip menyerupai potongan pizza adalah...",
        options: [
          { label: "A", text: "Lingkaran" },
          { label: "B", text: "Segitiga" },
          { label: "C", text: "Persegi panjang" },
          { label: "D", text: "Tabung" }
        ],
        correctIndex: 1,
        explanation: "Segitiga adalah bidang yang dibentuk oleh tiga garis lurus yang saling terhubung dan memiliki 3 sudut lancip."
      },
      {
        id: "sr-k1-06",
        topic: "Tekstur Permukaan Benda",
        question: "Saat jari tangan kita meraba permukaan kaca cermin atau lantai keramik yang bersih, kulit kita akan merasakan tekstur yang...",
        options: [
          { label: "A", text: "Kasar berduri" },
          { label: "B", text: "Halus dan licin" },
          { label: "C", text: "Berbulu tebal" },
          { label: "D", text: "Empuk basah" }
        ],
        correctIndex: 1,
        explanation: "Kaca cermin dan keramik memiliki permukaan yang rata, tidak bergerigi, sehingga terasa licin dan halus saat diraba."
      },
      {
        id: "sr-k1-07",
        topic: "Alat Mewarnai Gambar",
        question: "Alat menggambar dan mewarnai yang terbuat dari bahan lilin padat berwarna cerah dan nyaman digenggam anak-anak adalah...",
        options: [
          { label: "A", text: "Krayon" },
          { label: "B", text: "Gunting kertas" },
          { label: "C", text: "Penghapus pensil" },
          { label: "D", text: "Penggaris besi" }
        ],
        correctIndex: 0,
        explanation: "Krayon terbuat dari lilin khusus yang diberi pigmen warna. Krayon sangat cocok untuk mewarnai bidang gambar anak SD karena warnanya tebal dan cerah."
      },
      {
        id: "sr-k1-08",
        topic: "Menggambar Ekspresi Wajah",
        question: "Ketika menggambar wajah seorang anak yang sedang tertawa ceria dan gembira, garis bentuk bibir biasanya melengkung ke arah...",
        options: [
          { label: "A", text: "Bawah melorot" },
          { label: "B", text: "Atas tersenyum" },
          { label: "C", text: "Samping miring" },
          { label: "D", text: "Garis lurus kaku" }
        ],
        correctIndex: 1,
        explanation: "Garis bibir yang melengkung ke atas menandakan senyuman dan perasaan senang. Sebaliknya garis melengkung ke bawah menandakan sedih atau cemberut."
      },
      {
        id: "sr-k1-09",
        topic: "Mengenal Tekstur Kasar",
        question: "Contoh benda alami di lingkungan sekitar yang permukaannya terasa sangat kasar dan bersisik tajam saat diraba adalah...",
        options: [
          { label: "A", text: "Kulit buah tomat" },
          { label: "B", text: "Kulit buah anggur" },
          { label: "C", text: "Kulit buah apel" },
          { label: "D", text: "Kulit buah nanas atau salak" }
        ],
        correctIndex: 3,
        explanation: "Kulit buah salak memiliki sisik menyerupai sisik ular dan kulit nanas memiliki mata berduri kecil, sehingga permukaannya bertekstur kasar."
      },
      {
        id: "sr-k1-10",
        topic: "Karya Tempel Sederhana",
        question: "Karya seni yang dibuat dengan cara menempelkan potongan kertas warna-warni atau daun-daun kering pada selembar kertas gambar disebut...",
        options: [
          { label: "A", text: "Kolase" },
          { label: "B", text: "Pahat batu" },
          { label: "C", text: "Fotografi" },
          { label: "D", text: "Seni musik" }
        ],
        correctIndex: 0,
        explanation: "Kolase adalah karya seni dua dimensi yang dibuat dengan merekatkan berbagai bahan (seperti kertas warna, daun kering, atau biji-bijian) pada pola gambar."
      }
    ],

    // =========================================================================
    // KELAS 2 SD (10 BUTIR SOAL)
    // =========================================================================
    2: [
      {
        id: "sr-k2-01",
        topic: "Campuran Warna Merah & Kuning",
        question: "Jika kita mencampurkan cat warna merah dengan cat warna kuning dengan perbandingan yang seimbang, maka akan menghasilkan warna...",
        options: [
          { label: "A", text: "Hijau" },
          { label: "B", text: "Oranye (jingga)" },
          { label: "C", text: "Ungu" },
          { label: "D", text: "Cokelat tua" }
        ],
        correctIndex: 1,
        explanation: "Campuran antara warna merah dan warna kuning akan menghasilkan warna oranye (jingga), yang merupakan salah satu warna sekunder."
      },
      {
        id: "sr-k2-02",
        topic: "Campuran Warna Kuning & Biru",
        question: "Percampuran antara cat air warna kuning dan cat air warna biru di atas palet akan menghasilkan warna baru yaitu...",
        options: [
          { label: "A", text: "Hijau" },
          { label: "B", text: "Ungu" },
          { label: "C", text: "Hitam" },
          { label: "D", text: "Merah muda" }
        ],
        correctIndex: 0,
        explanation: "Kuning dicampur dengan biru menghasilkan warna hijau yang sejuk seperti daun pepohonan di alam."
      },
      {
        id: "sr-k2-03",
        topic: "Campuran Warna Merah & Biru",
        question: "Perpaduan warna primer merah dengan warna primer biru akan menghasilkan warna sekunder yang cantik, yaitu warna...",
        options: [
          { label: "A", text: "Kuning terang" },
          { label: "B", text: "Abu-abu" },
          { label: "C", text: "Ungu" },
          { label: "D", text: "Cokelat tanah" }
        ],
        correctIndex: 2,
        explanation: "Warna merah yang berani dicampur dengan warna biru yang tenang menghasilkan warna ungu (violet)."
      },
      {
        id: "sr-k2-04",
        topic: "Warna Sekunder",
        question: "Warna oranye, hijau, dan ungu dikelompokkan ke dalam kelompok warna sekunder karena...",
        options: [
          { label: "A", text: "Dihasilkan dari campuran dua warna primer" },
          { label: "B", text: "Berasal dari pantulan cahaya bulan di malam hari" },
          { label: "C", text: "Hanya bisa dibuat oleh mesin komputer cetak" },
          { label: "D", text: "Merupakan warna yang tidak bisa dilihat mata" }
        ],
        correctIndex: 0,
        explanation: "Warna sekunder adalah kelompok warna tingkatan kedua yang terwujud dari percampuran dua warna pokok (primer)."
      },
      {
        id: "sr-k2-05",
        topic: "Pola Irama (Ritme Visual)",
        question: "Susunan bentuk atau pola gambar yang digambar secara teratur dan berulang-ulang dari kiri ke kanan dinamakan pola...",
        options: [
          { label: "A", text: "Coretan acak" },
          { label: "B", text: "Irama (ritme)" },
          { label: "C", text: "Garis terputus" },
          { label: "D", text: "Bayangan siluet" }
        ],
        correctIndex: 1,
        explanation: "Irama atau ritme visual adalah pengulangan satu atau lebih unsur seni rupa (seperti garis, bentuk, atau warna) secara teratur sehingga tampak selaras."
      },
      {
        id: "sr-k2-06",
        topic: "Seni Melipat Kertas (Origami)",
        question: "Kesenian melipat selembar kertas persegi warna-warni menjadi bentuk bangau, katak, atau perahu layar dinamakan seni...",
        options: [
          { label: "A", text: "Anyaman" },
          { label: "B", text: "Origami" },
          { label: "C", text: "Pahat ukir" },
          { label: "D", text: "Grafiti" }
        ],
        correctIndex: 1,
        explanation: "Origami adalah seni tradisional melipat kertas yang berasal dari Jepang, mengasah ketelitian tangan tanpa menggunakan lem dan gunting berlebihan."
      },
      {
        id: "sr-k2-07",
        topic: "Alat Pembuat Kolase",
        question: "Alat yang berfungsi untuk merekatkan guntingan kertas lipat pada permukaan kertas gambar saat membuat kolase adalah...",
        options: [
          { label: "A", text: "Lem kertas" },
          { label: "B", text: "Rautan pensil" },
          { label: "C", text: "Jangka bundar" },
          { label: "D", text: "Penggaris plastik" }
        ],
        correctIndex: 0,
        explanation: "Lem kertas digunakan sebagai bahan perekat agar serpihan kertas atau daun kering menempel kokoh pada bidang gambar."
      },
      {
        id: "sr-k2-08",
        topic: "Bentuk Organik Alami",
        question: "Bentuk-bentuk di alam bebas yang luwes, lentur, dan tidak beraturan seperti bentuk gumpalan awan dan helai daun disebut bentuk...",
        options: [
          { label: "A", text: "Geometris kaku" },
          { label: "B", text: "Organik (alami)" },
          { label: "C", text: "Garis lurus" },
          { label: "D", text: "Kotak beraturan" }
        ],
        correctIndex: 1,
        explanation: "Bentuk organik adalah bentuk yang terinspirasi dari alam, memiliki garis tepi yang bebas, meliuk-liuk, dan tidak beraturan secara matematis."
      },
      {
        id: "sr-k2-09",
        topic: "Wadah Mencampur Cat",
        question: "Papan ceper plastik atau kayu yang memiliki lekukan tempat menaruh dan mencampur aneka cat lukis dinamakan...",
        options: [
          { label: "A", text: "Kuas lukis" },
          { label: "B", text: "Palet warna" },
          { label: "C", text: "Kanvas lukis" },
          { label: "D", text: "Kotak spidol" }
        ],
        correctIndex: 1,
        explanation: "Palet adalah alat datar berlubang jempol atau bersekat-sekat yang digunakan pelukis untuk meletakkan serta mencampur warna-warna cat."
      },
      {
        id: "sr-k2-10",
        topic: "Gambar Imajinatif Kreatif",
        question: "Gambar yang dibuat berdasarkan khayalan atau mimpi kreatif anak sendiri, misalnya istana awan atau ikan terbang, dinamakan gambar...",
        options: [
          { label: "A", text: "Imajinatif" },
          { label: "B", text: "Peta wilayah" },
          { label: "C", text: "Foto rontgen" },
          { label: "D", text: "Denah ruangan" }
        ],
        correctIndex: 0,
        explanation: "Gambar imajinatif adalah gambar yang lahir dari daya khayal (imajinasi) dan kreativitas pikiran seseorang, bukan menjiplak kenyataan secara persis."
      }
    ],

    // =========================================================================
    // KELAS 3 SD (10 BUTIR SOAL)
    // =========================================================================
    3: [
      {
        id: "sr-k3-01",
        topic: "Gambar Seni Dekoratif",
        question: "Gambar hiasan yang dibuat dengan tujuan memperindah permukaan suatu benda menggunakan motif tumbuhan, hewan, atau geometris dinamakan...",
        options: [
          { label: "A", text: "Gambar dekoratif" },
          { label: "B", text: "Gambar denah" },
          { label: "C", text: "Sketsa buram" },
          { label: "D", text: "Karikatur sindiran" }
        ],
        correctIndex: 0,
        explanation: "Gambar dekoratif adalah gambar ornamen hias yang berfungsi mempercantik tampilan suatu bidang tanpa menghilangkan ciri dasar bentuk aslinya."
      },
      {
        id: "sr-k3-02",
        topic: "Teknik Cetak Cap Sederhana",
        question: "Membuat pola gambar berulang dengan cara mengoleskan cat warna pada potongan pelepah pisang lalu menempelkannya ke kertas dinamakan teknik...",
        options: [
          { label: "A", text: "Cetak cap (cap stempel)" },
          { label: "B", text: "Pahat ukir kayu" },
          { label: "C", text: "Batik tulis canting" },
          { label: "D", text: "Anyaman bambu" }
        ],
        correctIndex: 0,
        explanation: "Cetak cap sederhana memanfaatkan penampang potongan bahan alami (seperti pelepah daun pisang, belimbing, kentang) yang diberi cat lalu dicapkan ke kertas."
      },
      {
        id: "sr-k3-03",
        topic: "Karya Seni 3 Dimensi",
        question: "Karya seni rupa yang memiliki ukuran panjang, lebar, dan tinggi (volume) sehingga dapat dinikmati keindahannya dari berbagai arah pandang disebut karya...",
        options: [
          { label: "A", text: "Satu dimensi" },
          { label: "B", text: "Dua dimensi" },
          { label: "C", text: "Tiga dimensi (3D)" },
          { label: "D", text: "Garis bayangan" }
        ],
        correctIndex: 2,
        explanation: "Karya seni 3 dimensi memiliki ruang dan volume (panjang, lebar, dan tinggi atau ketebalan), contohnya seperti patung, vas bunga, dan gerabah."
      },
      {
        id: "sr-k3-04",
        topic: "Bahan Lunak Plastisin & Lempung",
        question: "Bahan lunak yang lentur, empuk, mudah ditekan dan dibentuk menggunakan jemari tangan untuk membuat model hewan atau buah adalah...",
        options: [
          { label: "A", text: "Kaca bening" },
          { label: "B", text: "Besi baja" },
          { label: "C", text: "Plastisin atau tanah liat" },
          { label: "D", text: "Batu kali padat" }
        ],
        correctIndex: 2,
        explanation: "Plastisin dan tanah liat (lempung) adalah bahan lunak yang elastis dan mudah dibentuk dengan teknik pijat, tekan, atau pilin."
      },
      {
        id: "sr-k3-05",
        topic: "Gradasi Warna Halus",
        question: "Perubahan tingkat kecerahan warna dari yang paling pekat gelap berangsur-angsur menjadi terang secara bertahap dinamakan...",
        options: [
          { label: "A", text: "Gradasi warna" },
          { label: "B", text: "Warna kusam" },
          { label: "C", text: "Bercak tinta" },
          { label: "D", text: "Garis putus" }
        ],
        correctIndex: 0,
        explanation: "Gradasi warna adalah peralihan atau percampuran halus dari satu tingkat warna ke tingkat warna lainnya (misalnya dari biru tua ke biru muda)."
      },
      {
        id: "sr-k3-06",
        topic: "Bahan Alami Karya Mozaik",
        question: "Contoh bahan alami ramah lingkungan yang sangat bagus dimanfaatkan untuk membuat kerajinan mozaik atau hiasan tempel adalah...",
        options: [
          { label: "A", text: "Biji jagung, kacang hijau, dan cangkang telur" },
          { label: "B", text: "Bungkus plastik saset dan styrofoam" },
          { label: "C", text: "Pecahan botol kaca dan aki bekas" },
          { label: "D", text: "Potongan kawat duri" }
        ],
        correctIndex: 0,
        explanation: "Biji-bijian dan cangkang telur yang dibersihkan adalah bahan alami yang aman, ramah lingkungan, dan memiliki aneka warna serta tekstur unik untuk karya seni."
      },
      {
        id: "sr-k3-07",
        topic: "Motif Hias Fauna",
        question: "Motif dekoratif yang terinspirasi dari keindahan bentuk binatang seperti burung merak, ikan hias, atau kupu-kupu dinamakan motif...",
        options: [
          { label: "A", text: "Geometris" },
          { label: "B", text: "Fauna" },
          { label: "C", text: "Flora" },
          { label: "D", text: "Alam benda" }
        ],
        correctIndex: 1,
        explanation: "Motif fauna adalah ragam hias yang mengambil objek dunia hewan (binatang). Sedangkan motif flora terinspirasi dari tumbuh-tumbuhan."
      },
      {
        id: "sr-k3-08",
        topic: "Teknik Kolase & Montase",
        question: "Kegiatan memotong gambar dari majalah atau kertas warna menggunakan gunting lalu menempelkannya membentuk cerita baru disebut keterampilan...",
        options: [
          { label: "A", text: "Mengukir dan memahat" },
          { label: "B", text: "Gunting dan tempel (montase/kolase)" },
          { label: "C", text: "Mengecor semen" },
          { label: "D", text: "Menempa besi" }
        ],
        correctIndex: 1,
        explanation: "Teknik gunting dan tempel melatih koordinasi mata dan motorik halus tangan anak untuk memadukan aneka potongan gambar menjadi sebuah karya baru."
      },
      {
        id: "sr-k3-09",
        topic: "Fungsi Gelap Terang",
        question: "Pemberian bagian terang dan bagian bayangan gelap pada gambar suatu benda bertujuan agar gambar tampak...",
        options: [
          { label: "A", text: "Kabur dan berdebu" },
          { label: "B", text: "Bervolume dan tampak hidup (nyata)" },
          { label: "C", text: "Hilang dari kertas" },
          { label: "D", text: "Tipis datar tanpa bentuk" }
        ],
        correctIndex: 1,
        explanation: "Prinsip gelap terang memberikan ilusi kedalaman ruang dan volume, sehingga gambar dua dimensi terlihat memiliki wujud nyata menyerupai aslinya."
      },
      {
        id: "sr-k3-10",
        topic: "Seni Menganyam Kertas",
        question: "Menyusun bilah-bilah kertas memanjang dengan cara menyusupkan secara berselang-seling (tindih-menindih teratur) dinamakan teknik...",
        options: [
          { label: "A", text: "Merajut wol" },
          { label: "B", text: "Menganyam" },
          { label: "C", text: "Memahat kayu" },
          { label: "D", text: "Membubut logam" }
        ],
        correctIndex: 1,
        explanation: "Anyaman adalah teknik menumpuk dan menyilangkan pita atau bilah bahan secara teratur sehingga membentuk jalinan lembaran yang rapi dan kuat."
      }
    ],

    // =========================================================================
    // KELAS 4 SD (10 BUTIR SOAL)
    // =========================================================================
    4: [
      {
        id: "sr-k4-01",
        topic: "Tekstur Nyata dan Tekstur Semu",
        question: "Tekstur pada gambar kayu yang tampak sangat kasar di mata, namun ketika kita raba kertasnya tetap terasa halus datar dinamakan tekstur...",
        options: [
          { label: "A", text: "Tekstur nyata" },
          { label: "B", text: "Tekstur semu (maya)" },
          { label: "C", text: "Tekstur alami" },
          { label: "D", text: "Tekstur kaku" }
        ],
        correctIndex: 1,
        explanation: "Tekstur semu adalah ilusi visual di mana kesan permukaan yang terlihat oleh mata berbeda dengan kenyataan rasa rabaan tangan kita."
      },
      {
        id: "sr-k4-02",
        topic: "Teknik Arsir Silang",
        question: "Teknik membuat bayangan gelap terang dengan cara menggoreskan garis-garis sejajar yang saling berpotongan menyilang dinamakan teknik...",
        options: [
          { label: "A", text: "Blok siluet hitam" },
          { label: "B", text: "Arsir silang (cross-hatching)" },
          { label: "C", text: "Titik (pointilis)" },
          { label: "D", text: "Sapuan basah aquarel" }
        ],
        correctIndex: 1,
        explanation: "Teknik arsir silang (cross-hatching) dilakukan dengan menumpuk garis miring dalam arah berlawanan untuk menciptakan gradasi bayangan yang semakin gelap."
      },
      {
        id: "sr-k4-03",
        topic: "Menggambar Arsitektur Bangunan",
        question: "Saat menggambar bangunan rumah adat atau gedung sekolah, unsur dasar seni rupa yang paling dominan digunakan adalah perpaduan...",
        options: [
          { label: "A", text: "Garis, bidang geometris, dan proporsi bentuk" },
          { label: "B", text: "Irama suara dan nada melodi" },
          { label: "C", text: "Aroma wewangian dan rasa masakan" },
          { label: "D", text: "Gerakan tari langkah kaki" }
        ],
        correctIndex: 0,
        explanation: "Menggambar bangunan bertumpu pada ketegasan garis lurus/miring, bidang bangun (persegi, segitiga atap), serta proporsi perbandingan ukuran jendela dan dinding."
      },
      {
        id: "sr-k4-04",
        topic: "Daur Ulang Kreatif (Upcycling)",
        question: "Memanfaatkan botol plastik bekas minuman menjadi pot tanaman hias berbentuk kucing yang dicat cantik merupakan kegiatan...",
        options: [
          { label: "A", text: "Pencemaran sungai" },
          { label: "B", text: "Daur ulang kreatif (upcycling)" },
          { label: "C", text: "Pembakaran sampah berbahaya" },
          { label: "D", text: "Perusakan barang" }
        ],
        correctIndex: 1,
        explanation: "Daur ulang kreatif (upcycling) adalah mengubah barang bekas tak terpakai menjadi barang seni bernilai pakai yang indah dan bermanfaat bagi lingkungan."
      },
      {
        id: "sr-k4-05",
        topic: "Karya Wayang Karton",
        question: "Saat membuat boneka wayang dari kertas karton tebal, alat sambung yang digunakan agar lengan dan tangan wayang dapat diputar leluasa adalah...",
        options: [
          { label: "A", text: "Lem lilin panas mati" },
          { label: "B", text: "Kawat pengait atau benang pengikat engsel" },
          { label: "C", text: "Pita selotip bening kaku" },
          { label: "D", text: "Cairan penghapus tipex" }
        ],
        correctIndex: 1,
        explanation: "Kawat kecil atau benang yang dilonggarkan berfungsi sebagai sendi gerak (engsel) sehingga tangan wayang kertas dapat digerakkan ke atas dan ke bawah."
      },
      {
        id: "sr-k4-06",
        topic: "Kelompok Warna Dingin & Hangat",
        question: "Kelompok warna yang memberikan suasana sejuk, tenang, damai, dan dingin pada sebuah lukisan pemandangan adalah kelompok warna...",
        options: [
          { label: "A", text: "Biru, hijau, dan ungu muda" },
          { label: "B", text: "Merah menyala, oranye, dan kuning api" },
          { label: "C", text: "Cokelat tembaga dan hitam legam" },
          { label: "D", text: "Emas berkilau dan perak" }
        ],
        correctIndex: 0,
        explanation: "Warna dingin (cool colors) terdiri dari kelompok biru, hijau, dan nila yang membangkitkan perasaan sejuk seperti air, daun, dan langit pagi."
      },
      {
        id: "sr-k4-07",
        topic: "Seni Kerajinan Tenun Nusantara",
        question: "Kain tradisional nusantara yang dibuat dengan menyilangkan benang pakan dan benang lungsin pada alat tenun gedogan dinamakan kain...",
        options: [
          { label: "A", text: "Tenun ikat atau songket" },
          { label: "B", text: "Plastik terpal" },
          { label: "C", text: "Kertas koran bekas" },
          { label: "D", text: "Karet ban sintetis" }
        ],
        correctIndex: 0,
        explanation: "Kain tenun (seperti tenun ikat Nusa Tenggara dan songket Palembang) adalah warisan adiluhung nusantara yang dibuat secara cermat jalin-menjalin benang."
      },
      {
        id: "sr-k4-08",
        topic: "Teknik Lukis Pointilis",
        question: "Teknik melukis gambar di mana seluruh objek dan bayangan dibentuk oleh ribuan kumpulan titik-titik kecil warna dinamakan...",
        options: [
          { label: "A", text: "Dussel" },
          { label: "B", text: "Pointilis" },
          { label: "C", text: "Plakat pekat" },
          { label: "D", text: "Siluet rata" }
        ],
        correctIndex: 1,
        explanation: "Pointilis berasal dari kata 'point' (titik). Pelukis menorehkan ribuan titik-titik rapat dan renggang untuk menghasilkan gelap-terang dan corak warna."
      },
      {
        id: "sr-k4-09",
        topic: "Seni Pahat Relief Dinding",
        question: "Seni ukiran timbul yang terpahat pada dinding batu Candi Borobudur dan menceritakan kisah kehidupan zaman dahulu disebut seni...",
        options: [
          { label: "A", text: "Mozaik keramik" },
          { label: "B", text: "Lukisan kaca" },
          { label: "C", text: "Relief" },
          { label: "D", text: "Sablon kain" }
        ],
        correctIndex: 2,
        explanation: "Relief adalah karya seni pahat timbul pada permukaan bidang datar (seperti dinding batu candi) yang memperlihatkan figur cerita dengan ketebalan timbul tertentu."
      },
      {
        id: "sr-k4-10",
        topic: "Membuat Sketsa Gambar",
        question: "Goresan garis pensil yang tipis dan cepat sebagai rancangan dasar sebelum memulai proses melukis yang sebenarnya disebut...",
        options: [
          { label: "A", text: "Sketsa" },
          { label: "B", text: "Cat penutup" },
          { label: "C", text: "Vernis mengkilap" },
          { label: "D", text: "Bingkai pigura" }
        ],
        correctIndex: 0,
        explanation: "Sketsa adalah gambar rancangan awal yang dibuat tipis dan fleksibel menggunakan pensil untuk menentukan letak, bentuk, dan ukuran objek sebelum ditebalkan atau diwarnai."
      }
    ],

    // =========================================================================
    // KELAS 5 SD (10 BUTIR SOAL)
    // =========================================================================
    5: [
      {
        id: "sr-k5-01",
        topic: "Prinsip Keseimbangan Simetris",
        question: "Keseimbangan dalam susunan gambar di mana bagian sisi sebelah kiri dan sisi sebelah kanan memiliki bentuk, ukuran, dan jarak yang sama persis dinamakan...",
        options: [
          { label: "A", text: "Keseimbangan asimetris" },
          { label: "B", text: "Keseimbangan simetris" },
          { label: "C", text: "Keseimbangan miring acak" },
          { label: "D", text: "Ketidakseimbangan visual" }
        ],
        correctIndex: 1,
        explanation: "Keseimbangan simetris menghasilkan kesan formal, teratur, dan kokoh karena kedua sisi kanan dan kiri ibarat bayangan cermin yang sama persis."
      },
      {
        id: "sr-k5-02",
        topic: "Pusat Perhatian (Center of Interest)",
        question: "Bagian objek dalam sebuah gambar yang sengaja dibuat paling menonjol dan kontras sehingga pertama kali menangkap pandangan mata orang dinamakan...",
        options: [
          { label: "A", text: "Latar belakang kosong" },
          { label: "B", text: "Pusat perhatian (center of interest / focal point)" },
          { label: "C", text: "Garis tepi bingkai" },
          { label: "D", text: "Tanda tangan pelukis" }
        ],
        correctIndex: 1,
        explanation: "Pusat perhatian adalah titik utama yang ingin disampaikan oleh pelukis, dibuat lebih tegas, berwarna cerah, atau berukuran proporsional agar memikat pandangan."
      },
      {
        id: "sr-k5-03",
        topic: "Ragam Hias Batik Kawung",
        question: "Motif batik tradisional Jawa yang memiliki pola empat bulatan lonjong menyerupai buah kolang-kaling yang terbelah dan tersusun rapi disebut batik...",
        options: [
          { label: "A", text: "Parang Rusak" },
          { label: "B", text: "Kawung" },
          { label: "C", text: "Megamendung" },
          { label: "D", text: "Sekar Jagad" }
        ],
        correctIndex: 1,
        explanation: "Motif Kawung adalah salah satu motif batik tertua di Jawa yang terinspirasi dari irisan buah kelapa atau kolang-kaling, melambangkan kebersihan hati dan kesucian."
      },
      {
        id: "sr-k5-04",
        topic: "Ragam Hias Batik Megamendung",
        question: "Motif batik khas pesisir Cirebon yang tersusun dari bentuk gumpalan awan dengan gradasi warna biru atau merah berlapis-lapis dinamakan batik...",
        options: [
          { label: "A", text: "Kawung" },
          { label: "B", text: "Megamendung" },
          { label: "C", text: "Truntum" },
          { label: "D", text: "Sido Mukti" }
        ],
        correctIndex: 1,
        explanation: "Megamendung berasal dari kata 'mega' (awan) dan 'mendung' (sejuk pembawa hujan), memiliki filosofi ketenangan pikiran dan kesabaran menahan amarah."
      },
      {
        id: "sr-k5-05",
        topic: "Desain Seni Poster Edukasi",
        question: "Karya desain grafis perpaduan antara ilustrasi gambar yang menarik perhatian dan teks ajakan yang singkat padat untuk dipasang di dinding umum dinamakan...",
        options: [
          { label: "A", text: "Komik strip panjang" },
          { label: "B", text: "Poster" },
          { label: "C", text: "Cerita novel" },
          { label: "D", text: "Buku harian pribadi" }
        ],
        correctIndex: 1,
        explanation: "Poster adalah media komunikasi visual berupa gabungan gambar dan kalimat persuasif (ajakan) singkat agar pesannya langsung dipahami masyarakat yang melintas."
      },
      {
        id: "sr-k5-06",
        topic: "Alat Membatik Tulis Canting",
        question: "Alat tradisional kecil terbuat dari tembaga dengan tangkai kayu atau bambu yang digunakan untuk menorehkan lilin malam cair pada kain batik dinamakan...",
        options: [
          { label: "A", text: "Kuas cat lukis" },
          { label: "B", text: "Canting" },
          { label: "C", text: "Pisau pahat ukir" },
          { label: "D", text: "Penggaris pola" }
        ],
        correctIndex: 1,
        explanation: "Canting memiliki cucuk (paruh pipa kecil tembaga) untuk menyalurkan cairan lilin panas saat membatik motif garis dan titik halus di atas kain mori."
      },
      {
        id: "sr-k5-07",
        topic: "Bahan Lilin Malam Batik",
        question: "Zat khusus dari getah dan damar yang dipanaskan untuk merintangi warna agar tidak meresap ke dalam bagian kain yang digambar pada proses batik disebut...",
        options: [
          { label: "A", text: "Lem perekat kayu" },
          { label: "B", text: "Malam (lilin batik)" },
          { label: "C", text: "Minyak goreng bening" },
          { label: "D", text: "Adonan tepung terigu" }
        ],
        correctIndex: 1,
        explanation: "Malam (lilin batik) bertindak sebagai bahan perintang alami. Saat kain dicelupkan ke pewarna, bagian yang tertutup lilin malam tidak akan terkena zat warna."
      },
      {
        id: "sr-k5-08",
        topic: "Kriya Anyaman Bambu & Rotan",
        question: "Seni kerajinan tangan yang memanfaatkan sifat kelenturan dari bilah bambu atau rotan untuk dianyam menjadi bakul nasi dan caping dinamakan seni...",
        options: [
          { label: "A", text: "Kriya anyaman" },
          { label: "B", text: "Pahat batu andesit" },
          { label: "C", text: "Seni grafika digital" },
          { label: "D", text: "Fotografi alam liar" }
        ],
        correctIndex: 0,
        explanation: "Seni kriya anyaman adalah cabang kriya tradisional yang memadukan keahlian tangan dan ketelitian menganyam bilah serat alam menjadi wadah yang fungsional dan indah."
      },
      {
        id: "sr-k5-09",
        topic: "Teknik Ukir Sabun Batangan",
        question: "Teknik pembuatan patung mini dari sabun batangan dengan cara mengikis dan membuang bagian yang tidak dipakai menggunakan pisau tumpul atau sudip dinamakan...",
        options: [
          { label: "A", text: "Membutsir pilin" },
          { label: "B", text: "Memahat atau mengukir (subtraktif)" },
          { label: "C", text: "Mengecor cairan leleh" },
          { label: "D", text: "Menenun benang lungsin" }
        ],
        correctIndex: 1,
        explanation: "Mengukir atau memahat sabun adalah teknik subtraktif, yaitu mengurangi volume bahan padat sedikit demi sedikit hingga tercipta wujud figur patung yang diinginkan."
      },
      {
        id: "sr-k5-10",
        topic: "Warna Komplementer (Kontras)",
        question: "Pasangan dua warna yang posisinya saling berhadapan langsung pada lingkaran warna (seperti merah berhadapan dengan hijau) dinamakan warna...",
        options: [
          { label: "A", text: "Warna monokromatik" },
          { label: "B", text: "Warna komplementer (kontras)" },
          { label: "C", text: "Warna pastel pucat" },
          { label: "D", text: "Warna netral abu-abu" }
        ],
        correctIndex: 1,
        explanation: "Warna komplementer adalah pasangan warna yang letaknya berseberangan pada roda warna. Jika disandingkan, keduanya saling memperkuat daya kontras warna tersebut."
      }
    ],

    // =========================================================================
    // KELAS 6 SD (10 BUTIR SOAL)
    // =========================================================================
    6: [
      {
        id: "sr-k6-01",
        topic: "Perbedaan Karya Seni 2D dan 3D",
        question: "Ciri pembeda yang mendasar antara karya seni rupa dua dimensi dan karya seni rupa tiga dimensi terletak pada adanya dimensi...",
        options: [
          { label: "A", text: "Warna dan goresan garis" },
          { label: "B", text: "Ruang, volume, dan ketebalan (tinggi)" },
          { label: "C", text: "Bahan kertas yang digunakan" },
          { label: "D", text: "Nama tanda tangan seniman" }
        ],
        correctIndex: 1,
        explanation: "Karya 2 dimensi hanya memiliki panjang dan lebar (bidang datar), sedangkan karya 3 dimensi memiliki ruang fisik nyata, ketebalan/tinggi, dan volume."
      },
      {
        id: "sr-k6-02",
        topic: "Perspektif Satu Titik Hilang",
        question: "Teknik menggambar objek jalan raya lurus panjang di mana kedua sisi jalan tampak semakin menyempit dan menyatu pada sebuah titik di kejauhan dinamakan...",
        options: [
          { label: "A", text: "Perspektif satu titik hilang (titik lenyap)" },
          { label: "B", text: "Gambar bayangan siluet" },
          { label: "C", text: "Pola mozaik pecahan kaca" },
          { label: "D", text: "Denah lokasi datar" }
        ],
        correctIndex: 0,
        explanation: "Gambar perspektif satu titik lenyap merekayasa kedalaman ruang nyata pada kertas gambar, di mana objek yang makin jauh dari pandangan akan terlihat semakin mengecil."
      },
      {
        id: "sr-k6-03",
        topic: "Desain Kemasan Produk (Packaging)",
        question: "Desain wadah atau kotak pembungkus produk makanan yang dirancang memikat pembeli, melindungi kebersihan isi makanan, dan memuat informasi merek dinamakan...",
        options: [
          { label: "A", text: "Sampul buku cerita" },
          { label: "B", text: "Kemasan produk (packaging design)" },
          { label: "C", text: "Karcis tanda masuk" },
          { label: "D", text: "Lembar jadwal pelajaran" }
        ],
        correctIndex: 1,
        explanation: "Desain kemasan (packaging) memadukan seni rupa grafis dan fungsi perlindungan barang agar produk tampak menarik, higienis, dan mudah dibawa konsumen."
      },
      {
        id: "sr-k6-04",
        topic: "Maestro Seni Lukis Romantisme Indonesia",
        question: "Pelukis legendaris perintis seni lukis modern Indonesia yang terkenal di tingkat dunia dengan lukisan 'Penangkapan Pangeran Diponegoro' adalah...",
        options: [
          { label: "A", text: "Raden Saleh" },
          { label: "B", text: "Basoeki Abdullah" },
          { label: "C", text: "Affandi" },
          { label: "D", text: "S. Sudjojono" }
        ],
        correctIndex: 0,
        explanation: "Raden Saleh Syarif Bustaman adalah pelukis agung kebanggaan Indonesia di abad ke-19 bergaya romantisme dramatis yang karyanya diakui museum-museum besar Eropa."
      },
      {
        id: "sr-k6-05",
        topic: "Maestro Seni Lukis Ekspresionisme Indonesia",
        question: "Tokoh maestro seni lukis Indonesia yang terkenal dengan gaya ekspresionisme unik melukis langsung memencet cat minyak dari tube memakai telapak tangannya adalah...",
        options: [
          { label: "A", text: "Affandi" },
          { label: "B", text: "Raden Saleh" },
          { label: "C", text: "Popo Iskandar" },
          { label: "D", text: "Henk Ngantung" }
        ],
        correctIndex: 0,
        explanation: "Affandi adalah maestro lukis dunia asal Cirebon-Yogyakarta yang menuangkan gejolak emosi dan jiwanya langsung ke kanvas dengan sapuan telapak tangan dan jari tanpa kuas."
      },
      {
        id: "sr-k6-06",
        topic: "Pameran Karya Seni Sekolah",
        question: "Kegiatan memajang dan menyajikan aneka hasil karya lukisan, patung, dan kerajinan siswa di ruang kelas atau aula untuk diapresiasi bersama dinamakan...",
        options: [
          { label: "A", text: "Lelang barang antik" },
          { label: "B", text: "Pameran karya seni" },
          { label: "C", text: "Pertandingan olahraga lari" },
          { label: "D", text: "Ujian tertulis menghafal" }
        ],
        correctIndex: 1,
        explanation: "Pameran seni di sekolah menjadi wadah unjuk karya, melatih rasa percaya diri siswa, serta membangun rasa saling menghargai antarteman terhadap karya seni."
      },
      {
        id: "sr-k6-07",
        topic: "Buku Tamu Pameran Seni",
        question: "Buku yang diletakkan di dekat pintu masuk galeri pameran untuk mencatat nama pengunjung serta menampung kesan, pesan, dan saran apresiasi dinamakan...",
        options: [
          { label: "A", text: "Buku catatan kas" },
          { label: "B", text: "Buku tamu dan pesan-kesan" },
          { label: "C", text: "Katalog harga barang dagangan" },
          { label: "D", text: "Buku daftar hadir ulangan" }
        ],
        correctIndex: 1,
        explanation: "Buku tamu berguna bagi panitia pameran untuk mengetahui jumlah hadirin dan membaca kritik yang membangun guna meningkatkan kualitas pameran selanjutnya."
      },
      {
        id: "sr-k6-08",
        topic: "Apresiasi Seni Rupa",
        question: "Kegiatan mengamati, menikmati, menghayati, dan memberikan penghargaan atau penilaian positif terhadap nilai keindahan suatu karya seni disebut kegiatan...",
        options: [
          { label: "A", text: "Modifikasi fisik" },
          { label: "B", text: "Apresiasi seni" },
          { label: "C", text: "Duplikasi tiruan" },
          { label: "D", text: "Pengabaian makna" }
        ],
        correctIndex: 1,
        explanation: "Apresiasi seni menumbuhkan kepekaan estetis siswa agar mampu memahami pesan makna, teknik pembuatannya, dan menghormati kerja keras seorang seniman."
      },
      {
        id: "sr-k6-09",
        topic: "Seni Grafis Cetak Tinggi (Woodcut)",
        question: "Teknik mencetak karya seni grafis di mana gambar yang mencetak warna dihasilkan dari bagian permukaan bidang cetakan yang timbul (menonjol) dinamakan cetak...",
        options: [
          { label: "A", text: "Cetak dalam (intaglio)" },
          { label: "B", text: "Cetak tinggi (relief print)" },
          { label: "C", text: "Cetak saring (sablon)" },
          { label: "D", text: "Cetak datar (planografi)" }
        ],
        correctIndex: 1,
        explanation: "Cetak tinggi (relief print seperti cukil kayu/linoleum) memanfaatkan bagian permukaan yang timbul untuk menerima tinta dan memindahkannya ke lembar kertas."
      },
      {
        id: "sr-k6-10",
        topic: "Prinsip Proporsi dalam Seni Rupa",
        question: "Kesesuaian dan perbandingan ukuran yang seimbang antara bagian yang satu dengan bagian lainnya (misalnya ukuran kepala dibanding tinggi tubuh manusia) dinamakan...",
        options: [
          { label: "A", text: "Gradasi warna" },
          { label: "B", text: "Proporsi" },
          { label: "C", text: "Tekstur kasar" },
          { label: "D", text: "Irama putus" }
        ],
        correctIndex: 1,
        explanation: "Proporsi adalah perbandingan ukuran yang ideal antara satu bagian dengan bagian lain secara keseluruhan sehingga gambar tampak harmonis dan wajar dipandang."
      }
    ]
  }
};
