/**
 * Bank Soal Kuis TIK SD Petualangan Robot Chippy
 * Struktur:
 * - 6 Tingkatan Kelas (Kelas 1 sampai 6)
 * - Masing-masing kelas tepat 10 butir soal (Total 60 soal)
 * - Sesuai dengan materi & daya tangkap anak SD Indonesia
 * - Jawaban tidak diletakkan di dalam teks soal / pilihan ganda
 * - Pilihan jawaban A, B, C, D yang mendidik dengan pengecoh relevan
 * - Setiap butir soal dilengkapi topik materi dan penjelasan edukatif lengkap
 */

const QuizDatabase = {
  // Informasi Tingkatan Kelas
  grades: [
    {
      id: 1,
      title: "Kelas 1 SD",
      subtitle: "Mengenal Komputer Ceria",
      iconKey: "class1Device",
      badgeColor: "amber",
      description: "Mengenal layar monitor, mouse, keyboard, CPU, laptop, dan kebiasaan sehat di depan komputer.",
      questionCount: 10
    },
    {
      id: 2,
      title: "Kelas 2 SD",
      subtitle: "Mouse, Keyboard & Paint",
      iconKey: "class2MousePaint",
      badgeColor: "emerald",
      description: "Belajar klik ganda, scroll mouse, tombol spasi, enter, dan menggambar seru di aplikasi Paint.",
      questionCount: 10
    },
    {
      id: 3,
      title: "Kelas 3 SD",
      subtitle: "Hardware & Mengetik Teks",
      iconKey: "class3Hardware",
      badgeColor: "sky",
      description: "Perangkat keras input/output, flashdisk, webcam, merawat komputer, dan mengetik di WordPad.",
      questionCount: 10
    },
    {
      id: 4,
      title: "Kelas 4 SD",
      subtitle: "Aplikasi Pengolah Kata",
      iconKey: "class4WordDoc",
      badgeColor: "purple",
      description: "Kreasi teks di Word: huruf tebal (bold), miring, warna, rata tengah, shapes, simpan & cetak dokumen.",
      questionCount: 10
    },
    {
      id: 5,
      title: "Kelas 5 SD",
      subtitle: "Presentasi, Tabel & Web",
      iconKey: "class5Presentation",
      badgeColor: "rose",
      description: "Slide PowerPoint, animasi transisi, baris & kolom tabel, web browser, dan dasar internet sehat.",
      questionCount: 10
    },
    {
      id: 6,
      title: "Kelas 6 SD",
      subtitle: "Internet Aman & Logika Koding",
      iconKey: "class6CodingNet",
      badgeColor: "indigo",
      description: "Surat elektronik (email), kata sandi kuat, bahaya hoaks, etika netiket, dan logika coding Scratch.",
      questionCount: 10
    }
  ],

  // Kumpulan 60 Soal (10 Soal per Kelas)
  questions: {
    // =========================================================================
    // KELAS 1 SD (10 SOAL)
    // =========================================================================
    1: [
      {
        id: "k1-01",
        topic: "Perangkat Layar",
        question: "Perangkat komputer yang bentuknya mirip televisi dan berfungsi menampilkan gambar serta tulisan disebut...",
        options: [
          { label: "A", text: "CPU" },
          { label: "B", text: "Monitor" },
          { label: "C", text: "Mouse" },
          { label: "D", text: "Keyboard" }
        ],
        correctIndex: 1,
        explanation: "Monitor berfungsi seperti layar televisi yang menampilkan gambar, video, dan tulisan agar kita bisa melihat apa yang sedang dikerjakan di komputer."
      },
      {
        id: "k1-02",
        topic: "Papan Ketik",
        question: "Papan yang memiliki banyak tombol huruf dan angka untuk mengetik di komputer dinamakan...",
        options: [
          { label: "A", text: "Keyboard" },
          { label: "B", text: "Speaker" },
          { label: "C", text: "Monitor" },
          { label: "D", text: "Meja belajar" }
        ],
        correctIndex: 0,
        explanation: "Keyboard adalah papan ketik komputer yang berisi huruf dari A sampai Z dan angka dari 0 sampai 9 untuk menulis teks."
      },
      {
        id: "k1-03",
        topic: "Alat Penunjuk",
        question: "Bagian komputer yang digenggam dengan tangan untuk menggerakkan tanda panah (kursor) di layar adalah...",
        options: [
          { label: "A", text: "Printer" },
          { label: "B", text: "CPU" },
          { label: "C", text: "Mouse" },
          { label: "D", text: "Kabel daya" }
        ],
        correctIndex: 2,
        explanation: "Mouse adalah alat penunjuk kecil yang bentuknya menyerupai tikus, berguna untuk mengarahkan kursor dan memilih menu di layar."
      },
      {
        id: "k1-04",
        topic: "Otak Komputer",
        question: "Bagian komputer berbentuk kotak yang menjadi pusat pemroses kerja seluruh bagian komputer adalah...",
        options: [
          { label: "A", text: "Speaker" },
          { label: "B", text: "CPU" },
          { label: "C", text: "Keyboard" },
          { label: "D", text: "Kacamata" }
        ],
        correctIndex: 1,
        explanation: "CPU (Central Processing Unit) sering disebut otak komputer karena bertugas mengatur dan memproses semua instruksi kerja komputer."
      },
      {
        id: "k1-05",
        topic: "Jenis Komputer",
        question: "Komputer praktis yang bisa dilipat, memiliki baterai, dan mudah dibawa bepergian di dalam tas sekolah dinamakan...",
        options: [
          { label: "A", text: "Komputer Tabung" },
          { label: "B", text: "Komputer Meja" },
          { label: "C", text: "Laptop" },
          { label: "D", text: "Proyektor" }
        ],
        correctIndex: 2,
        explanation: "Laptop atau komputer jinjing memiliki layar, keyboard, dan touchpad yang menyatu sehingga sangat praktis untuk dibawa ke mana saja."
      },
      {
        id: "k1-06",
        topic: "Kesehatan Duduk",
        question: "Sikap duduk yang paling baik dan sehat saat kita sedang menggunakan komputer adalah...",
        options: [
          { label: "A", text: "Duduk membungkuk sangat dekat dengan layar" },
          { label: "B", text: "Duduk tegak dengan punggung bersandar nyaman di kursi" },
          { label: "C", text: "Duduk sambil tiduran di atas lantai" },
          { label: "D", text: "Memutar tubuh ke samping meja" }
        ],
        correctIndex: 1,
        explanation: "Duduk tegak dengan punggung tersandar nyaman menjaga tulang punggung kita tetap sehat dan mencegah tubuh cepat lelah."
      },
      {
        id: "k1-07",
        topic: "Merawat Komputer",
        question: "Mengapa kita tidak boleh makan dan minum di dekat keyboard komputer?",
        options: [
          { label: "A", text: "Supaya komputer tidak merasa lapar" },
          { label: "B", text: "Agar remah makanan dan tumpahan air tidak merusak tombol" },
          { label: "C", text: "Supaya suara speaker terdengar lebih kencang" },
          { label: "D", text: "Agar komputer bisa berjalan lebih cepat" }
        ],
        correctIndex: 1,
        explanation: "Tumpahan air dapat menyebabkan hubungan pendek (korsleting), dan remah makanan bisa menyangkut di bawah tombol keyboard sehingga macet."
      },
      {
        id: "k1-08",
        topic: "Kesehatan Mata",
        question: "Berapa jarak pandang yang aman antara mata anak dengan layar monitor saat belajar komputer?",
        options: [
          { label: "A", text: "Sangat dekat hingga hidung menempel di kaca" },
          { label: "B", text: "Sekitar 5 sentimeter saja" },
          { label: "C", text: "Sekitar 40 sampai 50 sentimeter (sejauh rentangan lengan)" },
          { label: "D", text: "10 meter di luar ruangan" }
        ],
        correctIndex: 2,
        explanation: "Menjaga jarak pandang sekitar 40-50 cm (sejauh satu rentangan tangan) melindungi mata anak agar tidak cepat pedih dan lelah."
      },
      {
        id: "k1-09",
        topic: "Menyalakan Komputer",
        question: "Tombol khusus pada komputer yang ditekan satu kali untuk mulai menghidupkan daya listrik dinamakan...",
        options: [
          { label: "A", text: "Tombol Power" },
          { label: "B", text: "Tombol Spasi" },
          { label: "C", text: "Tombol Huruf" },
          { label: "D", text: "Tombol Hapus" }
        ],
        correctIndex: 0,
        explanation: "Tombol Power memiliki lambang lingkaran bergaris yang berfungsi untuk menyalakan aliran daya listrik pada komputer."
      },
      {
        id: "k1-10",
        topic: "Perangkat Bunyi",
        question: "Perangkat tambahan komputer yang dapat mengeluarkan suara lagu, video belajar, dan musik ceria dinamakan...",
        options: [
          { label: "A", text: "Mouse" },
          { label: "B", text: "Speaker" },
          { label: "C", text: "Flashdisk" },
          { label: "D", text: "Kamera" }
        ],
        correctIndex: 1,
        explanation: "Speaker atau pengeras suara adalah perangkat keluaran yang menghasilkan bunyi dan alunan suara dari komputer."
      }
    ],

    // =========================================================================
    // KELAS 2 SD (10 SOAL)
    // =========================================================================
    2: [
      {
        id: "k2-01",
        topic: "Menggunakan Mouse",
        question: "Menekan tombol kiri pada mouse satu kali secara cepat untuk memilih suatu ikon menu dinamakan...",
        options: [
          { label: "A", text: "Double click" },
          { label: "B", text: "Scroll wheel" },
          { label: "C", text: "Klik kiri" },
          { label: "D", text: "Drag and drop" }
        ],
        correctIndex: 2,
        explanation: "Klik kiri satu kali digunakan untuk menunjuk atau memilih sebuah ikon tombol aplikasi pada layar komputer."
      },
      {
        id: "k2-02",
        topic: "Membuka Aplikasi",
        question: "Menekan tombol kiri mouse sebanyak dua kali dengan cepat dan berurutan untuk membuka aplikasi disebut...",
        options: [
          { label: "A", text: "Klik kanan" },
          { label: "B", text: "Double click (Klik ganda)" },
          { label: "C", text: "Menggeser mouse" },
          { label: "D", text: "Menekan spasi" }
        ],
        correctIndex: 1,
        explanation: "Double click (klik ganda) dilakukan dengan dua ketukan cepat pada tombol kiri mouse untuk membuka program atau folder."
      },
      {
        id: "k2-03",
        topic: "Bagian Mouse",
        question: "Roda kecil yang berada di bagian tengah mouse berguna untuk...",
        options: [
          { label: "A", text: "Menggulung layar ke atas dan ke bawah (Scroll)" },
          { label: "B", text: "Mematikan lampu komputer" },
          { label: "C", text: "Menghapus huruf yang salah ketik" },
          { label: "D", text: "Mengubah warna monitor" }
        ],
        correctIndex: 0,
        explanation: "Roda scroll pada mouse memudahkan kita menggeser tampilan halaman ke atas atau ke bawah tanpa harus menarik garis pembatas."
      },
      {
        id: "k2-04",
        topic: "Tombol Keyboard",
        question: "Tombol paling panjang di bagian bawah keyboard yang berfungsi memberi jarak spasi antar kata adalah...",
        options: [
          { label: "A", text: "Tombol Enter" },
          { label: "B", text: "Tombol Spacebar (Spasi)" },
          { label: "C", text: "Tombol Shift" },
          { label: "D", text: "Tombol Esc" }
        ],
        correctIndex: 1,
        explanation: "Tombol Spacebar adalah tombol terpanjang pada keyboard, ditekan menggunakan ibu jari untuk memberi jarak antar kata."
      },
      {
        id: "k2-05",
        topic: "Baris Baru",
        question: "Tombol keyboard yang ditekan saat kita ingin berpindah menulis ke baris baru di bawahnya adalah...",
        options: [
          { label: "A", text: "Backspace" },
          { label: "B", text: "Delete" },
          { label: "C", text: "Enter" },
          { label: "D", text: "Caps Lock" }
        ],
        correctIndex: 2,
        explanation: "Tombol Enter digunakan untuk berpindah ke baris baru ke bawah saat mengetik atau untuk menyetujui perintah."
      },
      {
        id: "k2-06",
        topic: "Memperbaiki Ketikan",
        question: "Jika salah mengetik huruf, tombol keyboard yang berfungsi menghapus satu huruf di sebelah kiri kursor adalah...",
        options: [
          { label: "A", text: "Backspace" },
          { label: "B", text: "Caps Lock" },
          { label: "C", text: "Tab" },
          { label: "D", text: "Ctrl" }
        ],
        correctIndex: 0,
        explanation: "Tombol Backspace (biasanya bergambar panah ke kiri) berguna untuk menghapus karakter atau huruf yang ada di sebelah kiri kursor."
      },
      {
        id: "k2-07",
        topic: "Aplikasi Gambar",
        question: "Aplikasi bawaan komputer yang sangat seru digunakan anak-anak untuk belajar menggambar dan mewarnai adalah...",
        options: [
          { label: "A", text: "Calculator" },
          { label: "B", text: "Paint" },
          { label: "C", text: "Windows Media Player" },
          { label: "D", text: "Notepad" }
        ],
        correctIndex: 1,
        explanation: "Paint adalah program pengolah gambar sederhana yang menyediakan berbagai kuas, pensil, bentuk bangun datar, dan warna-warni ceria."
      },
      {
        id: "k2-08",
        topic: "Peralatan Paint",
        question: "Ikon pada aplikasi Paint yang bergambar ember cat tumpah (Fill with Color) berfungsi untuk...",
        options: [
          { label: "A", text: "Menghapus seluruh kertas gambar" },
          { label: "B", text: "Mewarnai area gambar yang garisnya tertutup rapat" },
          { label: "C", text: "Memotong kertas gambar menjadi dua" },
          { label: "D", text: "Mengetik nama judul gambar" }
        ],
        correctIndex: 1,
        explanation: "Ikon ember cat (Fill with color) dapat mewarnai satu bidang gambar tertutup secara merata hanya dengan satu kali klik mouse."
      },
      {
        id: "k2-09",
        topic: "Bentuk Bangun Paint",
        question: "Untuk membuat gambar bentuk lingkaran atau roda yang bulat sempurna pada aplikasi Paint, kita memilih bentuk...",
        options: [
          { label: "A", text: "Rectangle (Persegi)" },
          { label: "B", text: "Line (Garis Lurus)" },
          { label: "C", text: "Oval" },
          { label: "D", text: "Triangle (Segitiga)" }
        ],
        correctIndex: 2,
        explanation: "Bentuk Oval pada menu Shapes aplikasi Paint digunakan untuk menggambar bentuk lonjong dan bentuk lingkaran bulat sempurna."
      },
      {
        id: "k2-10",
        topic: "Huruf Kapital",
        question: "Tombol keyboard yang jika ditekan menyala lampunya akan membuat semua huruf yang kita ketik menjadi huruf besar (kapital) adalah...",
        options: [
          { label: "A", text: "Spacebar" },
          { label: "B", text: "Caps Lock" },
          { label: "C", text: "Alt" },
          { label: "D", text: "Arrow Key" }
        ],
        correctIndex: 1,
        explanation: "Tombol Caps Lock mengunci huruf sehingga ketikan menghasilkan huruf kapital (besar). Menekannya kembali akan mematikan huruf kapital."
      }
    ],

    // =========================================================================
    // KELAS 3 SD (10 SOAL)
    // =========================================================================
    3: [
      {
        id: "k3-01",
        topic: "Perangkat Keras",
        question: "Semua komponen komputer yang berwujud nyata, dapat dilihat dengan mata dan diraba dengan tangan disebut...",
        options: [
          { label: "A", text: "Software" },
          { label: "B", text: "Brainware" },
          { label: "C", text: "Hardware (Perangkat Keras)" },
          { label: "D", text: "Malware" }
        ],
        correctIndex: 2,
        explanation: "Hardware adalah istilah untuk perangkat keras komputer seperti monitor, casing CPU, keyboard, mouse, dan printer."
      },
      {
        id: "k3-02",
        topic: "Perangkat Lunak",
        question: "Program atau aplikasi yang berisi kumpulan perintah kerja di dalam komputer tanpa memiliki wujud fisik yang bisa diraba dinamakan...",
        options: [
          { label: "A", text: "Hardware" },
          { label: "B", text: "Software (Perangkat Lunak)" },
          { label: "C", text: "Flashdisk" },
          { label: "D", text: "Kabel listrik" }
        ],
        correctIndex: 1,
        explanation: "Software adalah perangkat lunak atau program komputer seperti sistem operasi, aplikasi Paint, WordPad, dan permainan edukasi."
      },
      {
        id: "k3-03",
        topic: "Mencetak Dokumen",
        question: "Perangkat keras komputer yang berfungsi untuk mencetak tulisan dan gambar dari komputer ke atas selembar kertas adalah...",
        options: [
          { label: "A", text: "Scanner" },
          { label: "B", text: "Printer" },
          { label: "C", text: "Speaker" },
          { label: "D", text: "Mouse" }
        ],
        correctIndex: 1,
        explanation: "Printer adalah perangkat keluaran (output) yang mengubah data digital dari komputer menjadi dokumen nyata di lembaran kertas."
      },
      {
        id: "k3-04",
        topic: "Perangkat Masukan",
        question: "Manakah pasangan perangkat di bawah ini yang keduanya tergolong ke dalam perangkat masukan (Input Device)?",
        options: [
          { label: "A", text: "Monitor dan Speaker" },
          { label: "B", text: "Keyboard dan Mouse" },
          { label: "C", text: "Printer dan Proyektor" },
          { label: "D", text: "Headphone dan Layar TV" }
        ],
        correctIndex: 1,
        explanation: "Perangkat masukan (input) bertugas memasukkan data atau perintah ke dalam komputer. Keyboard dan mouse adalah contoh utama input device."
      },
      {
        id: "k3-05",
        topic: "Penyimpanan Portabel",
        question: "Perangkat kecil penyimpan data portabel yang dicolokkan ke lubang USB komputer untuk menyimpan tugas sekolah adalah...",
        options: [
          { label: "A", text: "RAM" },
          { label: "B", text: "Flashdisk (USB Flash Drive)" },
          { label: "C", text: "Processor" },
          { label: "D", text: "Motherboard" }
        ],
        correctIndex: 1,
        explanation: "Flashdisk adalah media penyimpanan data portabel yang praktis dibawa di saku dan dihubungkan ke komputer melalui porta USB."
      },
      {
        id: "k3-06",
        topic: "Kamera Komputer",
        question: "Kamera kecil yang dipasang di atas monitor komputer atau laptop untuk menampilkan video wajah saat belajar online dinamakan...",
        options: [
          { label: "A", text: "Proyektor" },
          { label: "B", text: "Webcam (Kamera Web)" },
          { label: "C", text: "Barcode Reader" },
          { label: "D", text: "Joystick" }
        ],
        correctIndex: 1,
        explanation: "Webcam (web camera) merekam video pengguna secara langsung untuk keperluan tatap muka daring dan panggilan video."
      },
      {
        id: "k3-07",
        topic: "Aplikasi Pengetikan",
        question: "Aplikasi pengetikan sederhana di Windows yang memiliki fitur pengatur warna dan ukuran huruf untuk mengetik cerita adalah...",
        options: [
          { label: "A", text: "WordPad" },
          { label: "B", text: "Paint" },
          { label: "C", text: "Sound Recorder" },
          { label: "D", text: "Calculator" }
        ],
        correctIndex: 0,
        explanation: "WordPad adalah aplikasi pengolah kata dasar bawaan sistem Windows yang cocok bagi siswa untuk berlatih mengetik cerita pendek."
      },
      {
        id: "k3-08",
        topic: "Perangkat Proyeksi",
        question: "Perangkat keluaran yang dapat menampilkan tampilan komputer ke layar kain lebar di depan kelas dinamakan...",
        options: [
          { label: "A", text: "Mikrofon" },
          { label: "B", text: "Proyektor LCD" },
          { label: "C", text: "Keyboard" },
          { label: "D", text: "Mouse pad" }
        ],
        correctIndex: 1,
        explanation: "Proyektor LCD memancarkan cahaya untuk memperbesar tampilan komputer ke dinding atau layar putih agar dapat ditonton bersama sekelas."
      },
      {
        id: "k3-09",
        topic: "Pengguna Komputer",
        question: "Manusia yang mengoperasikan, menggunakan, dan memberikan perintah kepada komputer dinamakan...",
        options: [
          { label: "A", text: "Software" },
          { label: "B", text: "Hardware" },
          { label: "C", text: "Brainware (Pengguna)" },
          { label: "D", text: "Antivirus" }
        ],
        correctIndex: 2,
        explanation: "Brainware adalah manusia atau pengguna yang mengendalikan kerja komputer agar menghasilkan karya atau tugas yang bermanfaat."
      },
      {
        id: "k3-10",
        topic: "Perawatan Perangkat",
        question: "Cara yang tepat untuk membersihkan debu pada layar monitor dan keyboard agar komputer tetap awet adalah...",
        options: [
          { label: "A", text: "Menyiram monitor dengan air sabun dari ember" },
          { label: "B", text: "Mengelap perlahan menggunakan kain mikrofiber kering dan bersih" },
          { label: "C", text: "Menjemur komputer di bawah terik matahari" },
          { label: "D", text: "Mengikis tombol keyboard menggunakan pisau tajam" }
        ],
        correctIndex: 1,
        explanation: "Gunakan kain halus mikrofiber kering dan bersih untuk mengusap debu. Komputer tidak boleh terkena air atau cairan langsung."
      }
    ],

    // =========================================================================
    // KELAS 4 SD (10 SOAL)
    // =========================================================================
    4: [
      {
        id: "k4-01",
        topic: "Format Teks Bold",
        question: "Ikon berhuruf 'B' tebal pada aplikasi pengolah kata seperti Microsoft Word berfungsi untuk...",
        options: [
          { label: "A", text: "Menggarisbawahi tulisan" },
          { label: "B", text: "Memiringkan tulisan" },
          { label: "C", text: "Menebalkan huruf teks (Bold)" },
          { label: "D", text: "Mengganti warna latar belakang" }
        ],
        correctIndex: 2,
        explanation: "Fitur Bold (ikon huruf B tebal) digunakan untuk membuat karakter teks terpilih menjadi lebih tebal dan mencolok."
      },
      {
        id: "k4-02",
        topic: "Format Teks Italic",
        question: "Ikon berhuruf 'I' yang posisinya miring pada Microsoft Word digunakan untuk...",
        options: [
          { label: "A", text: "Membuat tulisan bergaris bawah" },
          { label: "B", text: "Membuat tulisan bergaya miring (Italic)" },
          { label: "C", text: "Memperbesar ukuran kertas kerja" },
          { label: "D", text: "Menghapus satu baris kalimat" }
        ],
        correctIndex: 1,
        explanation: "Fitur Italic (ikon huruf I miring) berfungsi memiringkan huruf, umumnya dipakai untuk istilah ilmiah, bahasa asing, atau penekanan."
      },
      {
        id: "k4-03",
        topic: "Format Teks Underline",
        question: "Untuk memberi garis lurus di bawah teks (Underline), ikon yang kita pilih adalah ikon berhuruf...",
        options: [
          { label: "A", text: "U bergaris bawah" },
          { label: "B", text: "A dengan warna merah" },
          { label: "C", text: "S dengan coretan mendatar" },
          { label: "D", text: "X dengan angka kecil" }
        ],
        correctIndex: 0,
        explanation: "Ikon Underline (huruf U dengan garis bawah) memberikan garis lurus di bawah kata yang kita seleksi."
      },
      {
        id: "k4-04",
        topic: "Perataan Paragraf",
        question: "Pengaturan posisi paragraf yang menempatkan baris tulisan tepat di tengah-tengah halaman dokumen dinamakan...",
        options: [
          { label: "A", text: "Align Left (Rata Kiri)" },
          { label: "B", text: "Align Right (Rata Kanan)" },
          { label: "C", text: "Center (Rata Tengah)" },
          { label: "D", text: "Justify (Rata Kiri-Kanan)" }
        ],
        correctIndex: 2,
        explanation: "Center Alignment meratakan teks tepat di bagian tengah kertas dokumen, sangat tepat diaplikasikan untuk penulisan judul karya."
      },
      {
        id: "k4-05",
        topic: "Menyisipkan Bentuk",
        question: "Menu pada tab Insert yang menyediakan aneka bentuk bangun seperti bintang, panah, hati, dan lingkaran adalah...",
        options: [
          { label: "A", text: "Shapes" },
          { label: "B", text: "WordArt" },
          { label: "C", text: "Page Number" },
          { label: "D", text: "Margins" }
        ],
        correctIndex: 0,
        explanation: "Shapes menyediakan aneka ragam bentuk vektor siap pakai yang bisa disisipkan untuk mempercantik dokumen laporan."
      },
      {
        id: "k4-06",
        topic: "Menyimpan Dokumen",
        question: "Perintah penting yang harus kita jalankan agar ketikan tugas di komputer tersimpan ke memori dan tidak hilang dinamakan...",
        options: [
          { label: "A", text: "Cut" },
          { label: "B", text: "Copy" },
          { label: "C", text: "Save" },
          { label: "D", text: "Paste" }
        ],
        correctIndex: 2,
        explanation: "Perintah Save (Simpan) merekam dokumen ke dalam penyimpanan komputer sehingga berkas tetap ada walau komputer dimatikan."
      },
      {
        id: "k4-07",
        topic: "Shortcut Keyboard",
        question: "Kombinasi dua tombol keyboard yang ditekan bersamaan sebagai cara cepat menyimpan dokumen (Save) adalah...",
        options: [
          { label: "A", text: "Ctrl + S" },
          { label: "B", text: "Ctrl + P" },
          { label: "C", text: "Ctrl + Z" },
          { label: "D", text: "Ctrl + A" }
        ],
        correctIndex: 0,
        explanation: "Kombinasi Ctrl + S adalah jalan pintas keyboard (shortcut) universal untuk menjalankan perintah Save dokumen secara cepat."
      },
      {
        id: "k4-08",
        topic: "Rupa Huruf",
        question: "Pengaturan gaya bentuk huruf seperti Arial, Calibri, Comic Sans, dan Times New Roman pada Word dinamakan...",
        options: [
          { label: "A", text: "Font Size" },
          { label: "B", text: "Font Family / Font Name" },
          { label: "C", text: "Line Spacing" },
          { label: "D", text: "Page Orientation" }
        ],
        correctIndex: 1,
        explanation: "Font Family atau nama jenis huruf menentukan karakteristik bentuk dan rupa tulisan yang kita tampilkan di dokumen."
      },
      {
        id: "k4-09",
        topic: "Menyalin Tulisan",
        question: "Jika ingin menggandakan kalimat yang sama ke halaman lain tanpa harus mengetik ulang, urutan perintah yang benar adalah...",
        options: [
          { label: "A", text: "Cut lalu Delete" },
          { label: "B", text: "Copy lalu Paste" },
          { label: "C", text: "Save lalu Exit" },
          { label: "D", text: "Print lalu Undo" }
        ],
        correctIndex: 1,
        explanation: "Perintah Copy (Salin) menggandakan teks ke papan memori sementara, dan Paste (Tempel) meletakkannya di posisi kursor yang baru."
      },
      {
        id: "k4-10",
        topic: "Membatalkan Kesalahan",
        question: "Perintah pintas keyboard untuk membatalkan satu langkah kesalahan terakhir (Undo) adalah...",
        options: [
          { label: "A", text: "Ctrl + Z" },
          { label: "B", text: "Ctrl + C" },
          { label: "C", text: "Ctrl + V" },
          { label: "D", text: "Ctrl + B" }
        ],
        correctIndex: 0,
        explanation: "Kombinasi Ctrl + Z (Undo) berguna untuk membatalkan kesalahan ketik atau tindakan terakhir dan mengembalikan dokumen seperti semula."
      }
    ],

    // =========================================================================
    // KELAS 5 SD (10 SOAL)
    // =========================================================================
    5: [
      {
        id: "k5-01",
        topic: "Halaman Presentasi",
        question: "Lembaran-lembaran halaman kerja tempat kita menyusun tulisan dan gambar di aplikasi Microsoft PowerPoint dinamakan...",
        options: [
          { label: "A", text: "Slide" },
          { label: "B", text: "Paragraf" },
          { label: "C", text: "Sel" },
          { label: "D", text: "Folder" }
        ],
        correctIndex: 0,
        explanation: "Pada program presentasi PowerPoint, lembaran halaman tempat materi ditata dinamakan Slide."
      },
      {
        id: "k5-02",
        topic: "Efek Transisi",
        question: "Efek animasi perpindahan visual saat berganti dari satu slide ke slide berikutnya selama presentasi dinamakan...",
        options: [
          { label: "A", text: "Slide Transition (Transisi Slide)" },
          { label: "B", text: "Spell Check" },
          { label: "C", text: "Font Style" },
          { label: "D", text: "Page Border" }
        ],
        correctIndex: 0,
        explanation: "Slide Transition adalah efek animasi visual saat layar berpindah dari slide lama ke slide yang baru agar presentasi lebih menarik."
      },
      {
        id: "k5-03",
        topic: "Struktur Tabel",
        question: "Susunan data teratur yang terdiri dari lajur mendatar (baris) dan lajur tegak (kolom) dinamakan...",
        options: [
          { label: "A", text: "Paragraf" },
          { label: "B", text: "Tabel" },
          { label: "C", text: "Buletin" },
          { label: "D", text: "Ikon" }
        ],
        correctIndex: 1,
        explanation: "Tabel mempermudah pembacaan data karena menyajikan keterangan dalam baris mendatar (rows) dan kolom tegak (columns)."
      },
      {
        id: "k5-04",
        topic: "Jaringan Dunia",
        question: "Jaringan komputer raksasa di seluruh dunia yang saling terhubung untuk berbagi informasi dan pengetahuan dinamakan...",
        options: [
          { label: "A", text: "Intranet lokal" },
          { label: "B", text: "Internet" },
          { label: "C", text: "Bluetooth" },
          { label: "D", text: "Flash memory" }
        ],
        correctIndex: 1,
        explanation: "Internet (Interconnected Network) adalah jejaring komputer berskala global yang menghubungkan pengguna di berbagai belahan bumi."
      },
      {
        id: "k5-05",
        topic: "Peramban Web",
        question: "Aplikasi di komputer yang digunakan untuk membuka dan melihat halaman situs web di internet dinamakan...",
        options: [
          { label: "A", text: "Web Browser (Peramban)" },
          { label: "B", text: "Antivirus" },
          { label: "C", text: "Pemutar Video" },
          { label: "D", text: "Kalkulator" }
        ],
        correctIndex: 0,
        explanation: "Web Browser seperti Google Chrome, Microsoft Edge, dan Mozilla Firefox adalah aplikasi pintu gerbang untuk menjelajah internet."
      },
      {
        id: "k5-06",
        topic: "Mesin Pencari",
        question: "Situs internet khusus seperti Google yang membantu kita mencari informasi dan gambar berdasarkan kata kunci dinamakan...",
        options: [
          { label: "A", text: "Mesin Pencari (Search Engine)" },
          { label: "B", text: "Game Online" },
          { label: "C", text: "Text Editor" },
          { label: "D", text: "Recycle Bin" }
        ],
        correctIndex: 0,
        explanation: "Mesin pencari (Search Engine) seperti Google memudahkan kita menemukan ribuan artikel belajar sesuai kata kunci yang diketik."
      },
      {
        id: "k5-07",
        topic: "Mengambil Berkas",
        question: "Aktivitas menyalin berkas file gambar atau dokumen dari internet untuk disimpan ke dalam komputer kita dinamakan...",
        options: [
          { label: "A", text: "Upload (Unggah)" },
          { label: "B", text: "Download (Unduh)" },
          { label: "C", text: "Log out" },
          { label: "D", text: "Restart" }
        ],
        correctIndex: 1,
        explanation: "Download atau mengunduh adalah proses mentransfer data dari jaringan internet ke komputer atau gawai pribadi kita."
      },
      {
        id: "k5-08",
        topic: "Menayangkan Slide",
        question: "Tombol pada keyboard yang ditekan untuk memulai pertunjukan presentasi PowerPoint dalam layar penuh (Slide Show) adalah...",
        options: [
          { label: "A", text: "F1" },
          { label: "B", text: "F5" },
          { label: "C", text: "Esc" },
          { label: "D", text: "Tab" }
        ],
        correctIndex: 1,
        explanation: "Menekan tombol fungsi F5 akan langsung memulai tayangan Slide Show PowerPoint secara penuh dari halaman slide pertama."
      },
      {
        id: "k5-09",
        topic: "Internet Sehat",
        question: "Perilaku yang paling aman bagi anak-anak saat mencari informasi materi pelajaran di internet adalah...",
        options: [
          { label: "A", text: "Mengklik semua tautan unduhan yang muncul tiba-tiba" },
          { label: "B", text: "Meminta pendampingan orang tua atau guru dan mengunjungi situs edukasi resmi" },
          { label: "C", text: "Membagikan data pribadi seperti alamat rumah kepada orang tak dikenal" },
          { label: "D", text: "Mematikan antivirus komputer saat mengunduh game" }
        ],
        correctIndex: 1,
        explanation: "Didampingi guru atau orang tua serta mengakses situs edukasi tepercaya menjaga anak terhindar dari virus dan konten tidak pantas."
      },
      {
        id: "k5-10",
        topic: "Tautan Web",
        question: "Teks atau gambar di halaman web yang jika diklik akan membuka halaman internet lain yang berkaitan dinamakan...",
        options: [
          { label: "A", text: "Hyperlink (Tautan)" },
          { label: "B", text: "Desktop" },
          { label: "C", text: "Taskbar" },
          { label: "D", text: "Status bar" }
        ],
        correctIndex: 0,
        explanation: "Hyperlink adalah elemen penaut yang menghubungkan dokumen satu dengan dokumen lain di dalam jaringan web."
      }
    ],

    // =========================================================================
    // KELAS 6 SD (10 SOAL)
    // =========================================================================
    6: [
      {
        id: "k6-01",
        topic: "Surat Elektronik",
        question: "Layanan pengiriman surat dan lampiran berkas dokumen secara digital melalui jaringan internet dikenal dengan...",
        options: [
          { label: "A", text: "Telegram pos" },
          { label: "B", text: "E-mail (Surel)" },
          { label: "C", text: "Faksimile" },
          { label: "D", text: "Wesel pos" }
        ],
        correctIndex: 1,
        explanation: "E-mail (Electronic Mail) atau Surat Elektronik memungkinkan pengiriman pesan dan berkas dokumen dengan cepat ke seluruh dunia."
      },
      {
        id: "k6-02",
        topic: "Keamanan Kata Sandi",
        question: "Karakter kata sandi (Password) yang paling kuat dan tidak mudah dibobol oleh pihak yang tidak bertanggung jawab sebaiknya...",
        options: [
          { label: "A", text: "Menggunakan angka 123456 saja" },
          { label: "B", text: "Menggunakan tanggal lahir pribadi" },
          { label: "C", text: "Kombinasi huruf besar, huruf kecil, angka, dan simbol khusus" },
          { label: "D", text: "Sama dengan nama panggilan di sekolah" }
        ],
        correctIndex: 2,
        explanation: "Kata sandi yang tangguh tersusun dari campuran huruf besar, huruf kecil, angka, dan lambang khusus sehingga sulit ditebak orang lain."
      },
      {
        id: "k6-03",
        topic: "Konsep Algoritma",
        question: "Urutan langkah-langkah logis dan terstruktur yang disusun berurutan untuk menyelesaikan suatu masalah pada komputer dinamakan...",
        options: [
          { label: "A", text: "Algoritma" },
          { label: "B", text: "Hardware" },
          { label: "C", text: "Pixel" },
          { label: "D", text: "Resolusi" }
        ],
        correctIndex: 0,
        explanation: "Algoritma adalah deretan langkah terencana dan sistematis yang menjadi panduan komputer untuk mengerjakan suatu tugas atau program."
      },
      {
        id: "k6-04",
        topic: "Ancaman Malware",
        question: "Program perusak yang dapat merusak file dokumen, memperlambat komputer, dan menggandakan dirinya secara diam-diam dinamakan...",
        options: [
          { label: "A", text: "Antivirus" },
          { label: "B", text: "Virus Komputer (Malware)" },
          { label: "C", text: "Firewall" },
          { label: "D", text: "Sistem Operasi" }
        ],
        correctIndex: 1,
        explanation: "Virus komputer adalah program berbahaya yang dapat merusak sistem, menghilangkan dokumen berharga, dan memperlambat kerja komputer."
      },
      {
        id: "k6-05",
        topic: "Koding Visual Scratch",
        question: "Pada aplikasi belajar logika koding 'Scratch', tokoh atau karakter yang digerakkan menggunakan blok perintah dinamakan...",
        options: [
          { label: "A", text: "Sprite" },
          { label: "B", text: "Backdrop" },
          { label: "C", text: "Variable" },
          { label: "D", text: "List" }
        ],
        correctIndex: 0,
        explanation: "Di Scratch, Sprite adalah sebutan untuk objek atau karakter grafis yang diberi animasi dan instruksi menggunakan blok kode."
      },
      {
        id: "k6-06",
        topic: "Perulangan Koding",
        question: "Blok kode pada Scratch yang berfungsi mengulang perintah yang sama berkali-kali tanpa menulis kode ulang dinamakan...",
        options: [
          { label: "A", text: "Say Hello" },
          { label: "B", text: "Loop (Perulangan seperti Repeat atau Forever)" },
          { label: "C", text: "Change Color" },
          { label: "D", text: "Stop All" }
        ],
        correctIndex: 1,
        explanation: "Blok Loop (seperti repeat 10 kali atau forever) mengulang rangkaian perintah secara otomatis, membuat program lebih ringkas."
      },
      {
        id: "k6-07",
        topic: "Literasi Informasi",
        question: "Berita bohong atau informasi palsu yang sengaja disebarkan di internet untuk menyesatkan dan menipu pembaca dinamakan...",
        options: [
          { label: "A", text: "Fakta" },
          { label: "B", text: "Hoaks (Hoax)" },
          { label: "C", text: "Karya ilmiah" },
          { label: "D", text: "Ensiklopedia" }
        ],
        correctIndex: 1,
        explanation: "Hoaks adalah informasi yang tidak benar atau rekayasa. Kita harus selalu mengecek kebenaran berita kepada orang tua atau guru."
      },
      {
        id: "k6-08",
        topic: "Etika Berinternet",
        question: "Tata krama, kesopanan, dan aturan etika yang harus dijaga saat berkomunikasi di ruang internet dinamakan...",
        options: [
          { label: "A", text: "Netiket (Netiquette)" },
          { label: "B", text: "Algoritma" },
          { label: "C", text: "Enkripsi" },
          { label: "D", text: "Koding" }
        ],
        correctIndex: 0,
        explanation: "Netiket (Network Etiquette) adalah aturan moral dan tata krama saat mengirim pesan, berkomentar, dan bergaul di dunia digital."
      },
      {
        id: "k6-09",
        topic: "Perlindungan Komputer",
        question: "Perangkat lunak yang wajib dipasang dan diperbarui di komputer untuk mendeteksi dan membasmi virus jahat adalah...",
        options: [
          { label: "A", text: "Antivirus" },
          { label: "B", text: "Game Simulator" },
          { label: "C", text: "Kuas cat digital" },
          { label: "D", text: "Pembersih layar kaca" }
        ],
        correctIndex: 0,
        explanation: "Program Antivirus bekerja secara aktif menjaga komputer dari infeksi virus dan mengisolasi program mencurigakan yang masuk."
      },
      {
        id: "k6-10",
        topic: "Pemicu Peristiwa Koding",
        question: "Blok di Scratch yang menjadi pemicu awal berjalannya animasi ketika tombol bendera hijau diklik termasuk kelompok...",
        options: [
          { label: "A", text: "Motion" },
          { label: "B", text: "Events (Kejadian)" },
          { label: "C", text: "Sensing" },
          { label: "D", text: "Operators" }
        ],
        correctIndex: 1,
        explanation: "Kategori Events memuat blok pemicu seperti 'When green flag clicked' yang memulai seluruh alur program saat bendera hijau ditekan."
      }
    ]
  }
};
