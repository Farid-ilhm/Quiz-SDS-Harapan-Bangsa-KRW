/**
 * Bank Soal Kuis Bahasa Mandarin untuk Kelas 1 - 6 SD (10 Soal per Kelas)
 * Dilengkapi dengan Hanzi, Pinyin bertada (tonal), arti bahasa Indonesia,
 * opsi jawaban mandiri tanpa bocoran terjemahan saat kuis, serta pembahasan lengkap di akhir kuis.
 */

const QUIZ_DATA = {
  grades: [
    // =========================================================================
    // KELAS 1: PETUALANGAN ANGKA & SAPAAN (10 SOAL)
    // =========================================================================
    {
      id: 1,
      title: "Kelas 1",
      subtitle: "Petualangan Angka & Sapaan",
      badge: "Tingkat Dasar",
      description: "Mengenal angka 1-10, salam sapaan sehari-hari, dan anggota tubuh.",
      color: "#FACC15",
      accent: "#CA8A04",
      iconKey: "seedling",
      totalQuestions: 10,
      questions: [
        {
          id: "g1_q1",
          topic: "Angka Dasar",
          questionText: "Bagaimana cara menulis angka 'Satu (1)' dalam karakter Hanzi?",
          mandarinPrompt: "Satu (1) = ... ?",
          pinyinPrompt: "",
          voiceText: "Bagaimana cara menulis angka satu dalam karakter Hanzi?",
          mandarinVoice: "",
          options: [
            { text: "一", pinyin: "yī", meaning: "Satu (1)" },
            { text: "二", pinyin: "èr", meaning: "Dua (2)" },
            { text: "三", pinyin: "sān", meaning: "Tiga (3)" },
            { text: "四", pinyin: "sì", meaning: "Empat (4)" }
          ],
          correctIndex: 0,
          explanation: "Karakter '一' dibaca 'yī' yang berarti angka 1. Ciri khasnya hanya memiliki satu garis mendatar sederhana."
        },
        {
          id: "g1_q2",
          topic: "Salam & Sapaan",
          questionText: "Ketika bertemu teman atau guru, kita mengucapkan 'Halo / Hai' yaitu...",
          mandarinPrompt: "Halo / Hai = ... ?",
          pinyinPrompt: "",
          voiceText: "Ketika bertemu teman atau guru, kita mengucapkan Halo atau Hai yaitu apa?",
          mandarinVoice: "",
          options: [
            { text: "谢谢", pinyin: "Xièxie", meaning: "Terima kasih" },
            { text: "你好", pinyin: "Nǐ hǎo", meaning: "Halo / Hai" },
            { text: "再见", pinyin: "Zàijiàn", meaning: "Sampai jumpa" },
            { text: "早上好", pinyin: "Zǎoshang hǎo", meaning: "Selamat pagi" }
          ],
          correctIndex: 1,
          explanation: "你好 (Nǐ hǎo) adalah sapaan paling akrab untuk menyapa siapa saja! 'Nǐ' artinya kamu, dan 'hǎo' artinya baik."
        },
        {
          id: "g1_q3",
          topic: "Angka Dasar",
          questionText: "Karakter '三' memiliki tiga garis mendatar. Berapakah nilai angka tersebut?",
          mandarinPrompt: "三",
          pinyinPrompt: "sān",
          voiceText: "Karakter sān memiliki tiga garis mendatar. Angka berapakah ini?",
          mandarinVoice: "三",
          options: [
            { text: "1", pinyin: "", meaning: "Satu" },
            { text: "2", pinyin: "", meaning: "Dua" },
            { text: "3", pinyin: "", meaning: "Tiga" },
            { text: "5", pinyin: "", meaning: "Lima" }
          ],
          correctIndex: 2,
          explanation: "Karakter 三 dibaca 'sān' artinya angka 3. Cara mudah mengingatnya adalah dengan menghitung 3 garis mendatarnya."
        },
        {
          id: "g1_q4",
          topic: "Ungkapan Terima Kasih",
          questionText: "Jika ada teman yang meminjamkan pensil, kita mengucapkan 'Terima kasih', yaitu...",
          mandarinPrompt: "Terima kasih = ... ?",
          pinyinPrompt: "",
          voiceText: "Jika ada teman yang meminjamkan pensil, kita mengucapkan terima kasih yaitu apa?",
          mandarinVoice: "",
          options: [
            { text: "对不起", pinyin: "Duìbuqǐ", meaning: "Maaf" },
            { text: "不客气", pinyin: "Bú kèqi", meaning: "Sama-sama" },
            { text: "谢谢", pinyin: "Xièxie", meaning: "Terima kasih" },
            { text: "没关系", pinyin: "Méi guānxi", meaning: "Tidak apa-apa" }
          ],
          correctIndex: 2,
          explanation: "谢谢 (Xièxie) berarti terima kasih. Kalau ada yang mengucapkan Xièxie, kita bisa membalas dengan 不客气 (Bú kèqi) alias sama-sama!"
        },
        {
          id: "g1_q5",
          topic: "Anggota Tubuh",
          questionText: "Bagian tubuh yang kita gunakan untuk melihat adalah 'Mata', yaitu...",
          mandarinPrompt: "Mata = ... ?",
          pinyinPrompt: "",
          voiceText: "Bagian tubuh yang kita gunakan untuk melihat adalah mata, dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "眼睛", pinyin: "yǎnjing", meaning: "Mata" },
            { text: "耳朵", pinyin: "ěrduo", meaning: "Telinga" },
            { text: "嘴巴", pinyin: "zuǐba", meaning: "Mulut" },
            { text: "鼻子", pinyin: "bízi", meaning: "Hidung" }
          ],
          correctIndex: 0,
          explanation: "眼睛 (yǎnjing) artinya mata. Kita punya dua mata untuk melihat indahnya dunia dan membaca buku!"
        },
        {
          id: "g1_q6",
          topic: "Angka Dasar",
          questionText: "Karakter Hanzi dengan dua garis mendatar '二' melambangkan angka...",
          mandarinPrompt: "二",
          pinyinPrompt: "èr",
          voiceText: "Karakter èr memiliki dua garis mendatar. Melambangkan angka berapakah ini?",
          mandarinVoice: "二",
          options: [
            { text: "2", pinyin: "", meaning: "Dua" },
            { text: "4", pinyin: "", meaning: "Empat" },
            { text: "6", pinyin: "", meaning: "Enam" },
            { text: "8", pinyin: "", meaning: "Delapan" }
          ],
          correctIndex: 0,
          explanation: "二 dibaca 'èr' artinya angka 2. Terdiri dari dua garis mendatar yang rapi."
        },
        {
          id: "g1_q7",
          topic: "Salam & Berpamitan",
          questionText: "Saat berpamitan pulang sekolah dengan guru dan teman, kita mengucapkan 'Sampai jumpa', yaitu...",
          mandarinPrompt: "Sampai jumpa = ... ?",
          pinyinPrompt: "",
          voiceText: "Saat berpamitan pulang sekolah kita mengucapkan sampai jumpa yaitu apa?",
          mandarinVoice: "",
          options: [
            { text: "你好", pinyin: "Nǐ hǎo", meaning: "Halo" },
            { text: "再见", pinyin: "Zàijiàn", meaning: "Sampai jumpa" },
            { text: "早安", pinyin: "Zǎo'ān", meaning: "Selamat pagi" },
            { text: "晚安", pinyin: "Wǎn'ān", meaning: "Selamat malam" }
          ],
          correctIndex: 1,
          explanation: "再见 (Zàijiàn) artinya sampai jumpa lagi. 'Zài' artinya lagi, dan 'jiàn' artinya bertemu."
        },
        {
          id: "g1_q8",
          topic: "Anggota Tubuh",
          questionText: "Bagian tubuh yang kita gunakan untuk berbicara dan tersenyum ramah adalah 'Mulut', yaitu...",
          mandarinPrompt: "Mulut = ... ?",
          pinyinPrompt: "",
          voiceText: "Bagian tubuh untuk berbicara dan tersenyum adalah mulut. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "手", pinyin: "shǒu", meaning: "Tangan" },
            { text: "脚", pinyin: "jiǎo", meaning: "Kaki" },
            { text: "嘴巴", pinyin: "zuǐba", meaning: "Mulut" },
            { text: "头", pinyin: "tóu", meaning: "Kepala" }
          ],
          correctIndex: 2,
          explanation: "嘴巴 (zuǐba) artinya mulut. Mulut yang bersih dan tutur kata yang santun disenangi banyak teman!"
        },
        {
          id: "g1_q9",
          topic: "Angka Dasar",
          questionText: "Karakter '五' melambangkan jumlah jari pada satu telapak tangan kita, yaitu angka...",
          mandarinPrompt: "五",
          pinyinPrompt: "wǔ",
          voiceText: "Karakter wǔ melambangkan jumlah jari pada satu telapak tangan. Angka berapakah ini?",
          mandarinVoice: "五",
          options: [
            { text: "3", pinyin: "", meaning: "Tiga" },
            { text: "4", pinyin: "", meaning: "Empat" },
            { text: "5", pinyin: "", meaning: "Lima" },
            { text: "10", pinyin: "", meaning: "Sepuluh" }
          ],
          correctIndex: 2,
          explanation: "五 dibaca 'wǔ' artinya angka 5. Tangan kita memiliki 5 jari yang lincah untuk menulis dan berhitung."
        },
        {
          id: "g1_q10",
          topic: "Anggota Tubuh",
          questionText: "Bagian tubuh di sebelah kiri dan kanan kepala untuk mendengar penjelasan guru adalah 'Telinga', yaitu...",
          mandarinPrompt: "Telinga = ... ?",
          pinyinPrompt: "",
          voiceText: "Bagian tubuh untuk mendengar suara adalah telinga. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "耳朵", pinyin: "ěrduo", meaning: "Telinga" },
            { text: "眼睛", pinyin: "yǎnjing", meaning: "Mata" },
            { text: "鼻子", pinyin: "bízi", meaning: "Hidung" },
            { text: "头发", pinyin: "tóufa", meaning: "Rambut" }
          ],
          correctIndex: 0,
          explanation: "耳朵 (ěrduo) artinya telinga. Kita menggunakan telinga untuk menyimak pelajaran dengan saksama di kelas."
        }
      ]
    },

    // =========================================================================
    // KELAS 2: WARNA WARNI & SAHABAT HEWAN (10 SOAL)
    // =========================================================================
    {
      id: 2,
      title: "Kelas 2",
      subtitle: "Warna Warni & Sahabat Hewan",
      badge: "Tingkat Pemula",
      description: "Belajar kosakata aneka warna pelangi dan hewan peliharaan yang lucu.",
      color: "#38BDF8",
      accent: "#0284C7",
      iconKey: "cat",
      totalQuestions: 10,
      questions: [
        {
          id: "g2_q1",
          topic: "Mengenal Warna",
          questionText: "Warna apel matang dan bendera kita adalah 'Merah'. Dalam bahasa Mandarin disebut...",
          mandarinPrompt: "Warna Merah = ... ?",
          pinyinPrompt: "",
          voiceText: "Warna apel matang adalah warna merah. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "红色", pinyin: "hóngsè", meaning: "Warna Merah" },
            { text: "蓝色", pinyin: "lánsè", meaning: "Warna Biru" },
            { text: "黄色", pinyin: "huángsè", meaning: "Warna Kuning" },
            { text: "绿色", pinyin: "lǜsè", meaning: "Warna Hijau" }
          ],
          correctIndex: 0,
          explanation: "红色 (hóngsè) artinya warna merah. 'Hóng' berarti merah dan 'sè' berarti warna."
        },
        {
          id: "g2_q2",
          topic: "Hewan Lucu",
          questionText: "Hewan berbulu yang suka mengeong 'meow~' dan menangkap tikus adalah...",
          mandarinPrompt: "Kucing = ... ?",
          pinyinPrompt: "",
          voiceText: "Hewan berbulu yang suka mengeong meow adalah kucing. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "狗", pinyin: "gǒu", meaning: "Anjing" },
            { text: "猫", pinyin: "māo", meaning: "Kucing" },
            { text: "鸟", pinyin: "niǎo", meaning: "Burung" },
            { text: "兔", pinyin: "tù", meaning: "Kelinci" }
          ],
          correctIndex: 1,
          explanation: "猫 (māo) artinya kucing. Bunyi 'māo' mirip sekali dengan suara kucing saat mengeong!"
        },
        {
          id: "g2_q3",
          topic: "Mengenal Warna",
          questionText: "Karakter '黄色' adalah warna matahari dan buah pisang, yaitu warna...",
          mandarinPrompt: "黄色",
          pinyinPrompt: "huángsè",
          voiceText: "Karakter huángsè adalah warna apa?",
          mandarinVoice: "黄色",
          options: [
            { text: "Kuning", pinyin: "", meaning: "Warna Kuning" },
            { text: "Hitam", pinyin: "", meaning: "Warna Hitam" },
            { text: "Putih", pinyin: "", meaning: "Warna Putih" },
            { text: "Ungu", pinyin: "", meaning: "Warna Ungu" }
          ],
          correctIndex: 0,
          explanation: "黄色 (huángsè) artinya warna kuning. Kulit pisang yang matang dan matahari pagi berwarna kuning ceria!"
        },
        {
          id: "g2_q4",
          topic: "Hewan Sahabat",
          questionText: "Sahabat setia yang suka menggonggong 'guk guk' adalah 'Anjing', yaitu...",
          mandarinPrompt: "Anjing = ... ?",
          pinyinPrompt: "",
          voiceText: "Sahabat setia yang suka menggonggong adalah anjing. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "猫", pinyin: "māo", meaning: "Kucing" },
            { text: "马", pinyin: "mǎ", meaning: "Kuda" },
            { text: "狗", pinyin: "gǒu", meaning: "Anjing" },
            { text: "鱼", pinyin: "yú", meaning: "Ikan" }
          ],
          correctIndex: 2,
          explanation: "狗 (gǒu) artinya anjing. Anjing adalah hewan yang setia menjaga rumah dan gemar bermain lempar bola."
        },
        {
          id: "g2_q5",
          topic: "Hewan di Air",
          questionText: "Hewan yang hidup di air dan berenang menggunakan sirip adalah '鱼', yaitu...",
          mandarinPrompt: "鱼",
          pinyinPrompt: "yú",
          voiceText: "Hewan yú artinya adalah apa?",
          mandarinVoice: "鱼",
          options: [
            { text: "Burung", pinyin: "", meaning: "Burung terbang" },
            { text: "Ikan", pinyin: "", meaning: "Ikan berenang" },
            { text: "Bebek", pinyin: "", meaning: "Bebek berenang" },
            { text: "Katak", pinyin: "", meaning: "Katak melompat" }
          ],
          correctIndex: 1,
          explanation: "鱼 (yú) artinya ikan. Karakter 鱼 bentuk aslinya berasal dari gambar seekor ikan dengan sisik dan ekor!"
        },
        {
          id: "g2_q6",
          topic: "Hewan Terbang",
          questionText: "Hewan bersayap yang bisa bernyanyi merdu dan terbang di angkasa adalah 'Burung', yaitu...",
          mandarinPrompt: "Burung = ... ?",
          pinyinPrompt: "",
          voiceText: "Hewan yang memiliki sayap dan bisa terbang adalah burung. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "鸟", pinyin: "niǎo", meaning: "Burung" },
            { text: "鸡", pinyin: "jī", meaning: "Ayam" },
            { text: "鸭", pinyin: "yā", meaning: "Bebek" },
            { text: "牛", pinyin: "niú", meaning: "Sapi" }
          ],
          correctIndex: 0,
          explanation: "鸟 (niǎo) artinya burung. Burung hinggap di dahan pohon dan berkicau menyambut mentari pagi."
        },
        {
          id: "g2_q7",
          topic: "Mengenal Warna",
          questionText: "Warna langit cerah di siang hari dan warna ombak laut adalah 'Biru', yaitu...",
          mandarinPrompt: "Warna Biru = ... ?",
          pinyinPrompt: "",
          voiceText: "Warna langit di siang hari adalah warna biru. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "黑色", pinyin: "hēisè", meaning: "Warna Hitam" },
            { text: "蓝色", pinyin: "lánsè", meaning: "Warna Biru" },
            { text: "粉色", pinyin: "fěnsè", meaning: "Warna Merah Muda" },
            { text: "白色", pinyin: "báisè", meaning: "Warna Putih" }
          ],
          correctIndex: 1,
          explanation: "蓝色 (lánsè) artinya warna biru. Langit tak berawan dan lautan luas memancarkan warna biru yang menyejukkan."
        },
        {
          id: "g2_q8",
          topic: "Hewan Menggemaskan",
          questionText: "Hewan bertelinga panjang yang suka melompat-lompat dan memakan wortel adalah 'Kelinci', yaitu...",
          mandarinPrompt: "Kelinci = ... ?",
          pinyinPrompt: "",
          voiceText: "Hewan lucu bertelinga panjang pemakan wortel adalah kelinci. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "兔子", pinyin: "tùzi", meaning: "Kelinci" },
            { text: "猴子", pinyin: "hóuzi", meaning: "Monyet" },
            { text: "熊猫", pinyin: "xióngmāo", meaning: "Panda" },
            { text: "狮子", pinyin: "shīzi", meaning: "Singa" }
          ],
          correctIndex: 0,
          explanation: "兔子 (tùzi) artinya kelinci. Kelinci memiliki bulu yang sangat lembut dan telinga tegak yang peka."
        },
        {
          id: "g2_q9",
          topic: "Mengenal Warna",
          questionText: "Karakter '绿色' adalah warna rumput segar dan daun pepohonan, yaitu warna...",
          mandarinPrompt: "绿色",
          pinyinPrompt: "lǜsè",
          voiceText: "Karakter lǜsè melambangkan warna apa?",
          mandarinVoice: "绿色",
          options: [
            { text: "Merah", pinyin: "", meaning: "Warna Merah" },
            { text: "Cokelat", pinyin: "", meaning: "Warna Cokelat" },
            { text: "Hijau", pinyin: "", meaning: "Warna Hijau" },
            { text: "Oranye", pinyin: "", meaning: "Warna Oranye" }
          ],
          correctIndex: 2,
          explanation: "绿色 (lǜsè) artinya warna hijau. Taman kota dan pepohonan hijau membuat udara terasa sejuk dan asri."
        },
        {
          id: "g2_q10",
          topic: "Hewan Unggas",
          questionText: "Karakter '鸭子' yang suka berenang berkelompok di kolam dan berbunyi 'kwek-kwek' artinya adalah...",
          mandarinPrompt: "鸭子",
          pinyinPrompt: "yāzi",
          voiceText: "Hewan yāzi artinya hewan apa?",
          mandarinVoice: "鸭子",
          options: [
            { text: "Ayam", pinyin: "", meaning: "Ayam jago" },
            { text: "Bebek", pinyin: "", meaning: "Bebek air" },
            { text: "Angsa", pinyin: "", meaning: "Angsa putih" },
            { text: "Kambing", pinyin: "", meaning: "Kambing gunung" }
          ],
          correctIndex: 1,
          explanation: "鸭子 (yāzi) artinya bebek. Kaki bebek berselaput sehingga mahir berenang lincah di dalam kolam."
        }
      ]
    },

    // =========================================================================
    // KELAS 3: KELUARGA CERIA & SEKOLAHKU (10 SOAL)
    // =========================================================================
    {
      id: 3,
      title: "Kelas 3",
      subtitle: "Keluarga Ceria & Sekolahku",
      badge: "Tingkat Menengah",
      description: "Kosakata seputar anggota keluarga tercinta dan perlengkapan sekolah.",
      color: "#34D399",
      accent: "#059669",
      iconKey: "school",
      totalQuestions: 10,
      questions: [
        {
          id: "g3_q1",
          topic: "Keluarga Tercinta",
          questionText: "Panggilan hormat dan sayang untuk 'Ayah' dalam bahasa Mandarin adalah...",
          mandarinPrompt: "Ayah = ... ?",
          pinyinPrompt: "",
          voiceText: "Panggilan untuk ayah dalam bahasa Mandarin adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "爸爸", pinyin: "bàba", meaning: "Ayah" },
            { text: "妈妈", pinyin: "māma", meaning: "Ibu" },
            { text: "哥哥", pinyin: "gēge", meaning: "Kakak Laki-laki" },
            { text: "弟弟", pinyin: "dìdi", meaning: "Adik Laki-laki" }
          ],
          correctIndex: 0,
          explanation: "爸爸 (bàba) artinya Ayah. Sosok kepala keluarga yang penuh kasih dan perlindungan."
        },
        {
          id: "g3_q2",
          topic: "Benda di Kelas",
          questionText: "Benda berbentuk batang yang kita pakai untuk menulis dan menggambar adalah 'Pensil', yaitu...",
          mandarinPrompt: "Pensil = ... ?",
          pinyinPrompt: "",
          voiceText: "Benda yang kita pakai untuk menulis adalah pensil. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "书", pinyin: "shū", meaning: "Buku" },
            { text: "书包", pinyin: "shūbāo", meaning: "Tas Sekolah" },
            { text: "铅笔", pinyin: "qiānbǐ", meaning: "Pensil" },
            { text: "尺子", pinyin: "chǐzi", meaning: "Penggaris" }
          ],
          correctIndex: 2,
          explanation: "铅笔 (qiānbǐ) artinya pensil. Kata 'bǐ' (笔) melambangkan segala jenis alat tulis."
        },
        {
          id: "g3_q3",
          topic: "Sosok di Sekolah",
          questionText: "Sosok pahlawan tanpa tanda jasa yang mengajar kita di kelas adalah 'Guru', yaitu...",
          mandarinPrompt: "Guru = ... ?",
          pinyinPrompt: "",
          voiceText: "Sosok yang mengajar kita di kelas adalah guru. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "学生", pinyin: "xuésheng", meaning: "Murid" },
            { text: "老师", pinyin: "lǎoshī", meaning: "Guru" },
            { text: "朋友", pinyin: "péngyou", meaning: "Teman" },
            { text: "校长", pinyin: "xiàozhǎng", meaning: "Kepala Sekolah" }
          ],
          correctIndex: 1,
          explanation: "老师 (lǎoshī) artinya guru. Di kelas, anak-anak menyapa guru dengan kalimat 'Lǎoshī hǎo' (Halo Guru)!"
        },
        {
          id: "g3_q4",
          topic: "Benda di Kelas",
          questionText: "Karakter '书' yang kita baca untuk menambah ilmu setiap hari artinya adalah...",
          mandarinPrompt: "书",
          pinyinPrompt: "shū",
          voiceText: "Karakter shū artinya benda apa?",
          mandarinVoice: "书",
          options: [
            { text: "Meja", pinyin: "", meaning: "Meja belajar" },
            { text: "Kursi", pinyin: "", meaning: "Tempat duduk" },
            { text: "Buku", pinyin: "", meaning: "Buku bacaan" },
            { text: "Papan tulis", pinyin: "", meaning: "Papan tulis" }
          ],
          correctIndex: 2,
          explanation: "书 (shū) artinya buku. Membaca buku dalam bahasa Mandarin disebut 看书 (kàn shū)."
        },
        {
          id: "g3_q5",
          topic: "Sahabat",
          questionText: "Kawan yang selalu belajar dan bermain bersama kita dengan riang adalah 'Teman', yaitu...",
          mandarinPrompt: "Teman = ... ?",
          pinyinPrompt: "",
          voiceText: "Kawan yang selalu bermain bersama kita adalah teman. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "朋友", pinyin: "péngyou", meaning: "Teman / Sahabat" },
            { text: "同学", pinyin: "tóngxué", meaning: "Teman Sekelas" },
            { text: "妹妹", pinyin: "mèimei", meaning: "Adik Perempuan" },
            { text: "姐姐", pinyin: "jiějie", meaning: "Kakak Perempuan" }
          ],
          correctIndex: 0,
          explanation: "朋友 (péngyou) artinya teman atau sahabat. Belajar bersama teman membuat suasana kelas menyenangkan!"
        },
        {
          id: "g3_q6",
          topic: "Keluarga Tercinta",
          questionText: "Sosok wanita penyayang yang melahirkan dan membesarkan kita adalah 'Ibu', yaitu...",
          mandarinPrompt: "Ibu = ... ?",
          pinyinPrompt: "",
          voiceText: "Panggilan untuk Ibu dalam bahasa Mandarin adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "妈妈", pinyin: "māma", meaning: "Ibu" },
            { text: "奶奶", pinyin: "nǎinai", meaning: "Nenek dari ayah" },
            { text: "外婆", pinyin: "wàipó", meaning: "Nenek dari ibu" },
            { text: "阿姨", pinyin: "āyí", meaning: "Bibi" }
          ],
          correctIndex: 0,
          explanation: "妈妈 (māma) artinya Ibu. Panggilan lembut yang penuh cinta di setiap keluarga."
        },
        {
          id: "g3_q7",
          topic: "Perlengkapan Sekolah",
          questionText: "Benda tempat kita menyimpan buku pelajaran dan kotak pensil saat ke sekolah adalah 'Tas Sekolah', yaitu...",
          mandarinPrompt: "Tas Sekolah = ... ?",
          pinyinPrompt: "",
          voiceText: "Tempat menyimpan buku saat ke sekolah adalah tas sekolah. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "文具盒", pinyin: "wénjùhé", meaning: "Kotak pensil" },
            { text: "书包", pinyin: "shūbāo", meaning: "Tas Sekolah" },
            { text: "水壶", pinyin: "shuǐhú", meaning: "Botol minum" },
            { text: "帽子", pinyin: "màozi", meaning: "Topi sekolah" }
          ],
          correctIndex: 1,
          explanation: "书包 (shūbāo) artinya tas sekolah. 'Shū' artinya buku, dan 'bāo' artinya kantong atau tas."
        },
        {
          id: "g3_q8",
          topic: "Keluarga Tercinta",
          questionText: "Karakter '哥哥' dalam silsilah persaudaraan keluarga artinya adalah...",
          mandarinPrompt: "哥哥",
          pinyinPrompt: "gēge",
          voiceText: "Kata gēge artinya anggota keluarga yang mana?",
          mandarinVoice: "哥哥",
          options: [
            { text: "Adik Laki-laki", pinyin: "", meaning: "Adik Laki-laki" },
            { text: "Kakak Laki-laki", pinyin: "", meaning: "Kakak Laki-laki" },
            { text: "Paman", pinyin: "", meaning: "Paman" },
            { text: "Kakek", pinyin: "", meaning: "Kakek" }
          ],
          correctIndex: 1,
          explanation: "哥哥 (gēge) artinya kakak laki-laki. Sedangkan adik laki-laki disebut 弟弟 (dìdi)."
        },
        {
          id: "g3_q9",
          topic: "Warga Sekolah",
          questionText: "Sebutan untuk kita anak-anak yang tekun menuntut ilmu di bangku sekolah adalah 'Murid / Siswa', yaitu...",
          mandarinPrompt: "Murid / Siswa = ... ?",
          pinyinPrompt: "",
          voiceText: "Sebutan untuk anak-anak yang belajar di sekolah adalah murid. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "老师", pinyin: "lǎoshī", meaning: "Guru" },
            { text: "医生", pinyin: "yīshēng", meaning: "Dokter" },
            { text: "学生", pinyin: "xuésheng", meaning: "Murid / Siswa" },
            { text: "司机", pinyin: "sījī", meaning: "Sopir" }
          ],
          correctIndex: 2,
          explanation: "学生 (xuésheng) artinya murid atau siswa. Murid yang rajin kelak akan meraih cita-citanya!"
        },
        {
          id: "g3_q10",
          topic: "Alat Tulis",
          questionText: "Alat tulis panjang lurus untuk mengukur dan membuat garis rapi di buku gambar adalah '尺子', yaitu...",
          mandarinPrompt: "尺子",
          pinyinPrompt: "chǐzi",
          voiceText: "Benda chǐzi artinya alat tulis apa?",
          mandarinVoice: "尺子",
          options: [
            { text: "Penghapus", pinyin: "", meaning: "Karet penghapus" },
            { text: "Gunting", pinyin: "", meaning: "Gunting kertas" },
            { text: "Penggaris", pinyin: "", meaning: "Penggaris ukur" },
            { text: "Lem", pinyin: "", meaning: "Lem perekat" }
          ],
          correctIndex: 2,
          explanation: "尺子 (chǐzi) artinya penggaris. Benda penting untuk membuat garis tepi dan menggambar bangun datar."
        }
      ]
    },

    // =========================================================================
    // KELAS 4: HARI, WAKTU & KEGIATANKU (10 SOAL)
    // =========================================================================
    {
      id: 4,
      title: "Kelas 4",
      subtitle: "Hari, Waktu & Kegiatanku",
      badge: "Tingkat Terampil",
      description: "Nama-nama hari dalam sepekan, membaca jam, dan aktivitas harian.",
      color: "#FB923C",
      accent: "#EA580C",
      iconKey: "clock",
      totalQuestions: 10,
      questions: [
        {
          id: "g4_q1",
          topic: "Nama Hari",
          questionText: "Hari pertama masuk sekolah di awal pekan adalah 'Hari Senin', dalam bahasa Mandarin disebut...",
          mandarinPrompt: "Hari Senin = ... ?",
          pinyinPrompt: "",
          voiceText: "Hari pertama masuk sekolah adalah Hari Senin. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "星期一", pinyin: "xīngqīyī", meaning: "Senin" },
            { text: "星期二", pinyin: "xīngqī'èr", meaning: "Selasa" },
            { text: "星期六", pinyin: "xīngqīliù", meaning: "Sabtu" },
            { text: "星期日", pinyin: "xīngqīrì", meaning: "Minggu" }
          ],
          correctIndex: 0,
          explanation: "Bahasa Mandarin sangat teratur: 'xīngqī' artinya pekan/minggu, ditambah angka 1 sampai 6 untuk Senin sampai Sabtu! Jadi Senin adalah 星期一 (xīngqīyī)."
        },
        {
          id: "g4_q2",
          topic: "Aktivitas Harian",
          questionText: "Saat perut mulai berbunyi tanda lapar di siang hari, kita harus 'Makan', yaitu...",
          mandarinPrompt: "Makan = ... ?",
          pinyinPrompt: "",
          voiceText: "Saat perut lapar kita harus makan. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "喝水", pinyin: "hē shuǐ", meaning: "Minum air" },
            { text: "吃饭", pinyin: "chīfàn", meaning: "Makan nasi" },
            { text: "睡觉", pinyin: "shuìjiào", meaning: "Tidur lelap" },
            { text: "洗手", pinyin: "xǐshǒu", meaning: "Cuci tangan" }
          ],
          correctIndex: 1,
          explanation: "吃饭 (chīfàn) artinya makan. 'Chī' artinya makan, dan 'fàn' artinya nasi atau makanan."
        },
        {
          id: "g4_q3",
          topic: "Aktivitas Harian",
          questionText: "Setelah lelah berolahraga lari, tubuh butuh 'Minum air', dalam bahasa Mandarin yaitu...",
          mandarinPrompt: "Minum air = ... ?",
          pinyinPrompt: "",
          voiceText: "Setelah lelah berolahraga, tubuh butuh minum air. Dalam bahasa Mandarin yaitu apa?",
          mandarinVoice: "",
          options: [
            { text: "喝水", pinyin: "hē shuǐ", meaning: "Minum air" },
            { text: "喝茶", pinyin: "hē chá", meaning: "Minum teh" },
            { text: "吃药", pinyin: "chī yào", meaning: "Minum obat" },
            { text: "跑步", pinyin: "pǎobù", meaning: "Berlari" }
          ],
          correctIndex: 0,
          explanation: "喝水 (hē shuǐ) artinya minum air. 'Hē' adalah kata kerja minum, dan 'shuǐ' artinya air bersih."
        },
        {
          id: "g4_q4",
          topic: "Membaca Waktu",
          questionText: "Kata yang digunakan untuk menyatakan 'Pukul / Jam' (misalnya jam 7 tepat) adalah...",
          mandarinPrompt: "Pukul / Jam = ... ?",
          pinyinPrompt: "",
          voiceText: "Kata untuk menyatakan jam dalam bahasa Mandarin adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "分", pinyin: "fēn", meaning: "Menit" },
            { text: "秒", pinyin: "miǎo", meaning: "Detik" },
            { text: "点", pinyin: "diǎn", meaning: "Jam / Pukul" },
            { text: "年", pinyin: "nián", meaning: "Tahun" }
          ],
          correctIndex: 2,
          explanation: "点 (diǎn) artinya jam atau pukul. Misalnya jam 7 pagi disebut 七点 (qī diǎn). Kalau menit disebut 分 (fēn)."
        },
        {
          id: "g4_q5",
          topic: "Kegiatan Belajar",
          questionText: "Karakter '学习' yang kita lakukan dengan tekun setiap hari artinya adalah...",
          mandarinPrompt: "学习",
          pinyinPrompt: "xuéxí",
          voiceText: "Karakter xuéxí artinya kegiatan apa?",
          mandarinVoice: "学习",
          options: [
            { text: "Bermain", pinyin: "", meaning: "Bermain game" },
            { text: "Belajar", pinyin: "", meaning: "Menuntut ilmu" },
            { text: "Menyanyi", pinyin: "", meaning: "Menyanyi lagu" },
            { text: "Menggambar", pinyin: "", meaning: "Melukis gambar" }
          ],
          correctIndex: 1,
          explanation: "学习 (xuéxí) artinya belajar. Dengan rajin belajar setiap hari, anak-anak pintar akan bertambah wawasannya!"
        },
        {
          id: "g4_q6",
          topic: "Nama Hari",
          questionText: "Hari libur di akhir pekan tempat kita berkumpul ceria bersama keluarga adalah 'Hari Minggu', yaitu...",
          mandarinPrompt: "Hari Minggu = ... ?",
          pinyinPrompt: "",
          voiceText: "Hari libur di akhir pekan adalah Hari Minggu. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "星期四", pinyin: "xīngqīsì", meaning: "Kamis" },
            { text: "星期五", pinyin: "xīngqīwǔ", meaning: "Jumat" },
            { text: "星期六", pinyin: "xīngqīliù", meaning: "Sabtu" },
            { text: "星期日", pinyin: "xīngqīrì", meaning: "Minggu" }
          ],
          correctIndex: 3,
          explanation: "星期日 (xīngqīrì) atau 星期天 (xīngqītiān) artinya hari Minggu. Waktu beristirahat bersama keluarga."
        },
        {
          id: "g4_q7",
          topic: "Aktivitas Harian",
          questionText: "Aktivitas beristirahat di malam hari untuk memulihkan tenaga agar bugar esok hari adalah 'Tidur', yaitu...",
          mandarinPrompt: "Tidur = ... ?",
          pinyinPrompt: "",
          voiceText: "Aktivitas beristirahat di malam hari adalah tidur. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "起床", pinyin: "qǐchuáng", meaning: "Bangun tidur" },
            { text: "睡觉", pinyin: "shuìjiào", meaning: "Tidur lelap" },
            { text: "穿衣服", pinyin: "chuān yīfu", meaning: "Memakai baju" },
            { text: "刷牙", pinyin: "shuāyá", meaning: "Menggosok gigi" }
          ],
          correctIndex: 1,
          explanation: "睡觉 (shuìjiào) artinya tidur. Tidur teratur 8 jam setiap malam sangat penting untuk pertumbuhan anak."
        },
        {
          id: "g4_q8",
          topic: "Menanyakan Waktu",
          questionText: "Kata tanya yang kita pakai saat menanyakan 'Jam berapa sekarang?' adalah '几点', yaitu...",
          mandarinPrompt: "几点",
          pinyinPrompt: "jǐ diǎn",
          voiceText: "Kata jǐ diǎn digunakan untuk menanyakan apa?",
          mandarinVoice: "几点",
          options: [
            { text: "Hari apa", pinyin: "", meaning: "Hari apa" },
            { text: "Jam berapa", pinyin: "", meaning: "Jam berapa" },
            { text: "Berapa harganya", pinyin: "", meaning: "Berapa harga" },
            { text: "Di mana", pinyin: "", meaning: "Di mana" }
          ],
          correctIndex: 1,
          explanation: "几点 (jǐ diǎn) artinya jam berapa. Kalimat lengkapnya: '现在几点？' (Xiànzài jǐ diǎn? / Sekarang jam berapa?)."
        },
        {
          id: "g4_q9",
          topic: "Satuan Waktu",
          questionText: "Karakter '分' dalam penunjukan waktu jam (misal 8 lewat 15) artinya adalah...",
          mandarinPrompt: "分",
          pinyinPrompt: "fēn",
          voiceText: "Karakter fēn dalam satuan waktu artinya apa?",
          mandarinVoice: "分",
          options: [
            { text: "Jam", pinyin: "", meaning: "Satuan jam" },
            { text: "Menit", pinyin: "", meaning: "Satuan menit" },
            { text: "Detik", pinyin: "", meaning: "Satuan detik" },
            { text: "Bulan", pinyin: "", meaning: "Satuan bulan" }
          ],
          correctIndex: 1,
          explanation: "分 (fēn) artinya menit. Misalnya jam delapan lewat sepuluh menit disebut 八点十分 (bā diǎn shí fēn)."
        },
        {
          id: "g4_q10",
          topic: "Kebersihan Diri",
          questionText: "Kegiatan membersihkan badan dengan air dan sabun agar harum dan segar adalah '洗澡', yaitu...",
          mandarinPrompt: "洗澡",
          pinyinPrompt: "xǐzǎo",
          voiceText: "Kata xǐzǎo artinya kegiatan apa?",
          mandarinVoice: "洗澡",
          options: [
            { text: "Mencuci piring", pinyin: "", meaning: "Cuci piring" },
            { text: "Mandi", pinyin: "", meaning: "Mandi bersih" },
            { text: "Menyapu lantai", pinyin: "", meaning: "Sapu lantai" },
            { text: "Memasak sayur", pinyin: "", meaning: "Masak sayur" }
          ],
          correctIndex: 1,
          explanation: "洗澡 (xǐzǎo) artinya mandi. Mandi pagi dan sore menjaga tubuh kita tetap bersih dan terhindar dari kuman."
        }
      ]
    },

    // =========================================================================
    // KELAS 5: MAKANAN SEHAT & TEMPAT SEKITAR (10 SOAL)
    // =========================================================================
    {
      id: 5,
      title: "Kelas 5",
      subtitle: "Makanan Sehat & Tempat Sekitar",
      badge: "Tingkat Cakap",
      description: "Aneka buah-buahan, makanan lezat, minuman sehat, dan tempat umum.",
      color: "#EC4899",
      accent: "#BE185D",
      iconKey: "apple",
      totalQuestions: 10,
      questions: [
        {
          id: "g5_q1",
          topic: "Buah Segar",
          questionText: "Buah manis berwarna merah cerah yang renyah digigit adalah 'Apel', yaitu...",
          mandarinPrompt: "Apel = ... ?",
          pinyinPrompt: "",
          voiceText: "Buah apel yang renyah digigit, dalam bahasa Mandarin adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "苹果", pinyin: "píngguǒ", meaning: "Buah Apel" },
            { text: "西瓜", pinyin: "xīguā", meaning: "Semangka" },
            { text: "葡萄", pinyin: "pútao", meaning: "Anggur" },
            { text: "草莓", pinyin: "cǎoméi", meaning: "Stroberi" }
          ],
          correctIndex: 0,
          explanation: "苹果 (píngguǒ) artinya apel. Di Tiongkok, apel juga melambangkan kedamaian dan keselamatan (píng'ān)!"
        },
        {
          id: "g5_q2",
          topic: "Minuman Sehat",
          questionText: "Minuman putih bergizi tinggi yang dihasilkan dari sapi perah adalah 'Susu', yaitu...",
          mandarinPrompt: "Susu sapi = ... ?",
          pinyinPrompt: "",
          voiceText: "Minuman sehat dari sapi perah adalah susu. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "果汁", pinyin: "guǒzhī", meaning: "Jus buah" },
            { text: "可乐", pinyin: "kělè", meaning: "Minuman soda" },
            { text: "牛奶", pinyin: "niúnǎi", meaning: "Susu sapi" },
            { text: "豆浆", pinyin: "dòujiāng", meaning: "Susu kedelai" }
          ],
          correctIndex: 2,
          explanation: "牛奶 (niúnǎi) artinya susu sapi. 'Niú' artinya sapi dan 'nǎi' artinya susu. Sangat menyehatkan untuk tulang anak-anak!"
        },
        {
          id: "g5_q3",
          topic: "Tempat Belajar",
          questionText: "Gedung tempat berkumpulnya para murid dan guru untuk belajar bersama adalah 'Sekolah', yaitu...",
          mandarinPrompt: "Sekolah = ... ?",
          pinyinPrompt: "",
          voiceText: "Tempat berkumpulnya murid dan guru untuk belajar adalah sekolah. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "家", pinyin: "jiā", meaning: "Rumah tinggal" },
            { text: "学校", pinyin: "xuéxiào", meaning: "Sekolah" },
            { text: "医院", pinyin: "yīyuàn", meaning: "Rumah sakit" },
            { text: "公园", pinyin: "gōngyuán", meaning: "Taman bermain" }
          ],
          correctIndex: 1,
          explanation: "学校 (xuéxiào) artinya sekolah. Tempat kita belajar berbagai mata pelajaran seru bersama teman-teman."
        },
        {
          id: "g5_q4",
          topic: "Makanan Pokok",
          questionText: "Karakter '米饭' yang biasa kita santap bersama lauk pauk lezat artinya adalah...",
          mandarinPrompt: "米饭",
          pinyinPrompt: "mǐfàn",
          voiceText: "Karakter mǐfàn artinya makanan apa?",
          mandarinVoice: "米饭",
          options: [
            { text: "Mie", pinyin: "", meaning: "Mie kuah/goreng" },
            { text: "Roti", pinyin: "", meaning: "Roti panggang" },
            { text: "Nasi putih", pinyin: "", meaning: "Nasi hangat" },
            { text: "Sup", pinyin: "", meaning: "Sup sayuran" }
          ],
          correctIndex: 2,
          explanation: "米饭 (mǐfàn) artinya nasi putih. 'Mǐ' artinya beras dan 'fàn' artinya makanan masak."
        },
        {
          id: "g5_q5",
          topic: "Buah Kesukaan",
          questionText: "Buah melengkung berwarna kuning kesukaan monyet yang lembut manis adalah '香蕉', yaitu...",
          mandarinPrompt: "香蕉",
          pinyinPrompt: "xiāngjiāo",
          voiceText: "Buah xiāngjiāo adalah nama buah apa?",
          mandarinVoice: "香蕉",
          options: [
            { text: "Jeruk", pinyin: "", meaning: "Buah Jeruk" },
            { text: "Pisang", pinyin: "", meaning: "Buah Pisang" },
            { text: "Mangga", pinyin: "", meaning: "Buah Mangga" },
            { text: "Pepaya", pinyin: "", meaning: "Buah Pepaya" }
          ],
          correctIndex: 1,
          explanation: "香蕉 (xiāngjiāo) artinya pisang. Pisang kaya vitamin dan sangat baik untuk energi saat berolahraga!"
        },
        {
          id: "g5_q6",
          topic: "Buah Segar",
          questionText: "Buah berukuran besar bulat dengan daging merah berair manis kesegaran di siang hari adalah 'Semangka', yaitu...",
          mandarinPrompt: "Semangka = ... ?",
          pinyinPrompt: "",
          voiceText: "Buah berair manis segar di siang hari adalah semangka. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "西瓜", pinyin: "xīguā", meaning: "Semangka" },
            { text: "苹果", pinyin: "píngguǒ", meaning: "Apel" },
            { text: "梨", pinyin: "lí", meaning: "Pir" },
            { text: "桃子", pinyin: "táozi", meaning: "Persik" }
          ],
          correctIndex: 0,
          explanation: "西瓜 (xīguā) artinya semangka. Mengandung banyak air yang sangat menyegarkan saat dinikmati dingin."
        },
        {
          id: "g5_q7",
          topic: "Tempat Tinggal",
          questionText: "Karakter '家' tempat kita bernaung hangat dan berkumpul bersama keluarga tercinta artinya adalah...",
          mandarinPrompt: "家",
          pinyinPrompt: "jiā",
          voiceText: "Karakter jiā artinya tempat apa?",
          mandarinVoice: "家",
          options: [
            { text: "Sekolah", pinyin: "", meaning: "Gedung sekolah" },
            { text: "Rumah", pinyin: "", meaning: "Rumah tempat tinggal" },
            { text: "Toko", pinyin: "", meaning: "Toko belanja" },
            { text: "Pasar", pinyin: "", meaning: "Pasar tradisional" }
          ],
          correctIndex: 1,
          explanation: "家 (jiā) artinya rumah atau keluarga. 'Wǒ de jiā' (我的家) artinya rumahku atau keluargaku."
        },
        {
          id: "g5_q8",
          topic: "Makanan Populer",
          questionText: "Makanan berbentuk helaian panjang lezat yang disajikan dengan kuah sedap dan dimakan dengan sumpit adalah 'Mie', yaitu...",
          mandarinPrompt: "Mie = ... ?",
          pinyinPrompt: "",
          voiceText: "Makanan berbentuk helaian panjang adalah mie. Dalam bahasa Mandarin disebut apa?",
          mandarinVoice: "",
          options: [
            { text: "包子", pinyin: "bāozi", meaning: "Bakpao" },
            { text: "饺子", pinyin: "jiǎozi", meaning: "Pangsit" },
            { text: "面条", pinyin: "miàntiáo", meaning: "Mie" },
            { text: "面包", pinyin: "miànbāo", meaning: "Roti" }
          ],
          correctIndex: 2,
          explanation: "面条 (miàntiáo) artinya mie. Di Tiongkok, mie panjang melambangkan doa panjang umur saat ulang tahun!"
        },
        {
          id: "g5_q9",
          topic: "Tempat Umum",
          questionText: "Gedung tempat para dokter dan perawat merawat orang yang sedang sakit adalah '医院', yaitu...",
          mandarinPrompt: "医院",
          pinyinPrompt: "yīyuàn",
          voiceText: "Tempat yīyuàn artinya tempat apa?",
          mandarinVoice: "医院",
          options: [
            { text: "Bank", pinyin: "", meaning: "Tempat simpan uang" },
            { text: "Rumah Sakit", pinyin: "", meaning: "Gedung rumah sakit" },
            { text: "Kantor Polisi", pinyin: "", meaning: "Pos polisi" },
            { text: "Stasiun Kereta", pinyin: "", meaning: "Stasiun kereta" }
          ],
          correctIndex: 1,
          explanation: "医院 (yīyuàn) artinya rumah sakit. 'Yī' berhubungan dengan pengobatan atau dokter."
        },
        {
          id: "g5_q10",
          topic: "Minuman Segar",
          questionText: "Karakter '果汁' yang dibuat dari perasan jeruk atau sari buah mangga manis artinya adalah...",
          mandarinPrompt: "果汁",
          pinyinPrompt: "guǒzhī",
          voiceText: "Minuman guǒzhī artinya minuman apa?",
          mandarinVoice: "果汁",
          options: [
            { text: "Kopi", pinyin: "", meaning: "Kopi hangat" },
            { text: "Teh manis", pinyin: "", meaning: "Air teh" },
            { text: "Jus Buah", pinyin: "", meaning: "Jus buah segar" },
            { text: "Susu kedelai", pinyin: "", meaning: "Susu kedelai" }
          ],
          correctIndex: 2,
          explanation: "果汁 (guǒzhī) artinya jus buah. 'Guǒ' dari kata shuǐguǒ (buah) dan 'zhī' berarti sari air."
        }
      ]
    },

    // =========================================================================
    // KELAS 6: PERCAKAPAN KEREN & LAWAN KATA (10 SOAL)
    // =========================================================================
    {
      id: 6,
      title: "Kelas 6",
      subtitle: "Percakapan Keren & Lawan Kata",
      badge: "Tingkat Mahir",
      description: "Lawan kata penting, kalimat tanya percakapan, dan arah posisi.",
      color: "#8B5CF6",
      accent: "#6D28D9",
      iconKey: "trophy",
      totalQuestions: 10,
      questions: [
        {
          id: "g6_q1",
          topic: "Lawan Kata",
          questionText: "Gajah itu '大' (dà / besar), sedangkan semut itu sangat kecil. Lawan kata 'Kecil' adalah...",
          mandarinPrompt: "Lawan dari 大 (Besar) = ... ?",
          pinyinPrompt: "",
          voiceText: "Gajah itu dà atau besar, sedangkan semut sangat kecil. Lawan kata kecil adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "小", pinyin: "xiǎo", meaning: "Kecil" },
            { text: "多", pinyin: "duō", meaning: "Banyak" },
            { text: "长", pinyin: "cháng", meaning: "Panjang" },
            { text: "高", pinyin: "gāo", meaning: "Tinggi" }
          ],
          correctIndex: 0,
          explanation: "小 (xiǎo) artinya kecil. Pasangannya adalah 大 (dà) yang berarti besar. Misalnya 大象 (gajah besar) dan 小鸟 (burung kecil)."
        },
        {
          id: "g6_q2",
          topic: "Lawan Kata",
          questionText: "Karakter '多' artinya banyak. Apakah lawan katanya yang berarti 'Sedikit'?",
          mandarinPrompt: "Lawan dari 多 (Banyak) = ... ?",
          pinyinPrompt: "",
          voiceText: "Karakter duō artinya banyak. Lawan katanya yang berarti sedikit adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "少", pinyin: "shǎo", meaning: "Sedikit" },
            { text: "短", pinyin: "duǎn", meaning: "Pendek" },
            { text: "白", pinyin: "bái", meaning: "Putih" },
            { text: "轻", pinyin: "qīng", meaning: "Ringan" }
          ],
          correctIndex: 0,
          explanation: "少 (shǎo) artinya sedikit. Pasangan 多 (banyak) dan 少 (sedikit) sering digunakan untuk bertanya harga: 多少钱 (Duōshǎo qián / Berapa harganya)?"
        },
        {
          id: "g6_q3",
          topic: "Kalimat Percakapan",
          questionText: "Jika kita ingin bertanya 'Kamu mau pergi ke mana?', kalimat yang tepat adalah...",
          mandarinPrompt: "Kamu mau pergi ke mana? = ... ?",
          pinyinPrompt: "",
          voiceText: "Jika kita ingin bertanya ke mana kamu pergi, kalimat yang tepat adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "你是谁？", pinyin: "Nǐ shì shéi?", meaning: "Siapa kamu?" },
            { text: "你去哪里？", pinyin: "Nǐ qù nǎlǐ?", meaning: "Kamu pergi ke mana?" },
            { text: "你在做什么？", pinyin: "Nǐ zài zuò shénme?", meaning: "Kamu sedang buat apa?" },
            { text: "你好吗？", pinyin: "Nǐ hǎo ma?", meaning: "Apa kabarmu?" }
          ],
          correctIndex: 1,
          explanation: "你去哪里？ (Nǐ qù nǎlǐ?) digunakan untuk bertanya tujuan seseorang. 'Qù' artinya pergi, dan 'nǎlǐ' artinya di mana / ke mana."
        },
        {
          id: "g6_q4",
          topic: "Arah & Posisi",
          questionText: "Jika '上' (shàng) artinya atas, maka lawan katanya yang berarti 'Bawah' adalah...",
          mandarinPrompt: "Lawan dari 上 (Atas) = ... ?",
          pinyinPrompt: "",
          voiceText: "Jika shàng artinya atas, maka lawan katanya yang berarti bawah adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "左", pinyin: "zuǒ", meaning: "Kiri" },
            { text: "右", pinyin: "yòu", meaning: "Kanan" },
            { text: "下", pinyin: "xià", meaning: "Bawah" },
            { text: "前", pinyin: "qián", meaning: "Depan" }
          ],
          correctIndex: 2,
          explanation: "下 (xià) artinya bawah. Pasangannya adalah 上 (shàng) yang artinya atas. Misalnya 上课 (shàngkè / mulai kelas) dan 下课 (xiàkè / selesai kelas)."
        },
        {
          id: "g6_q5",
          topic: "Ungkapan Perasaan",
          questionText: "Saat berhasil mendapatkan nilai 100, kita bersorak '我很高兴!'. Artinya adalah...",
          mandarinPrompt: "我很高兴!",
          pinyinPrompt: "Wǒ hěn gāoxìng!",
          voiceText: "Karakter Wǒ hěn gāoxìng artinya perasaan apa?",
          mandarinVoice: "我很高兴",
          options: [
            { text: "Saya sangat lelah", pinyin: "", meaning: "Capek" },
            { text: "Saya sangat lapar", pinyin: "", meaning: "Lapar" },
            { text: "Saya sangat senang", pinyin: "", meaning: "Gembira ria" },
            { text: "Saya sangat haus", pinyin: "", meaning: "Haus" }
          ],
          correctIndex: 2,
          explanation: "我很高兴 (Wǒ hěn gāoxìng) berarti 'Saya sangat senang/gembira!'. Kata 'gāoxìng' menunjukkan rasa bahagia yang meluap-luap."
        },
        {
          id: "g6_q6",
          topic: "Lawan Kata Ukuran",
          questionText: "Penggaris kakak itu '长' (cháng / panjang), sedangkan pensil adik sudah pendek. Lawan kata 'Pendek' adalah...",
          mandarinPrompt: "Lawan dari 长 (Panjang) = ... ?",
          pinyinPrompt: "",
          voiceText: "Lawan kata dari cháng atau panjang yang berarti pendek adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "短", pinyin: "duǎn", meaning: "Pendek" },
            { text: "新", pinyin: "xīn", meaning: "Baru" },
            { text: "旧", pinyin: "jiù", meaning: "Lama / Bekas" },
            { text: "热", pinyin: "rè", meaning: "Panas" }
          ],
          correctIndex: 0,
          explanation: "短 (duǎn) artinya pendek. Pasangan lawan katanya adalah 长 (cháng) yang berarti panjang."
        },
        {
          id: "g6_q7",
          topic: "Kalimat Tanya",
          questionText: "Kalimat tanya yang kita gunakan saat ingin mengetahui nama atau identitas seseorang 'Siapakah kamu?' adalah...",
          mandarinPrompt: "Siapakah kamu? = ... ?",
          pinyinPrompt: "",
          voiceText: "Kalimat untuk bertanya siapakah kamu dalam bahasa Mandarin adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "你去哪里？", pinyin: "Nǐ qù nǎlǐ?", meaning: "Kamu mau ke mana?" },
            { text: "你是谁？", pinyin: "Nǐ shì shéi?", meaning: "Siapakah kamu?" },
            { text: "这是什么？", pinyin: "Zhè shì shénme?", meaning: "Apakah ini?" },
            { text: "你好吗？", pinyin: "Nǐ hǎo ma?", meaning: "Apa kabarmu?" }
          ],
          correctIndex: 1,
          explanation: "你是谁？ (Nǐ shì shéi?) artinya 'Siapakah kamu?'. Kata 'shéi' berarti siapa."
        },
        {
          id: "g6_q8",
          topic: "Arah & Posisi",
          questionText: "Jika tangan yang kita gunakan memegang buku adalah '左' (zuǒ / kiri), maka lawan katanya yang berarti 'Kanan' adalah...",
          mandarinPrompt: "Lawan dari 左 (Kiri) = ... ?",
          pinyinPrompt: "",
          voiceText: "Lawan kata dari zuǒ atau kiri yang berarti kanan adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "前", pinyin: "qián", meaning: "Depan" },
            { text: "后", pinyin: "hòu", meaning: "Belakang" },
            { text: "右", pinyin: "yòu", meaning: "Kanan" },
            { text: "中", pinyin: "zhōng", meaning: "Tengah" }
          ],
          correctIndex: 2,
          explanation: "右 (yòu) artinya kanan. Pasangan 左 (zuǒ / kiri) dan 右 (yòu / kanan) sering digunakan untuk petunjuk jalan: 左右 (zuǒyòu)."
        },
        {
          id: "g6_q9",
          topic: "Lawan Kata Fisik",
          questionText: "Pohon kelapa itu '高' (gāo / tinggi), sedangkan semak belukar itu rendah. Karakter untuk 'Rendah / Pendek' adalah...",
          mandarinPrompt: "Lawan dari 高 (Tinggi) = ... ?",
          pinyinPrompt: "",
          voiceText: "Lawan kata dari gāo atau tinggi yang berarti rendah adalah apa?",
          mandarinVoice: "",
          options: [
            { text: "矮", pinyin: "ǎi", meaning: "Rendah / Pendek tubuh" },
            { text: "大", pinyin: "dà", meaning: "Besar" },
            { text: "重", pinyin: "zhòng", meaning: "Berat" },
            { text: "远", pinyin: "yuǎn", meaning: "Jauh" }
          ],
          correctIndex: 0,
          explanation: "矮 (ǎi) artinya rendah atau bertubuh pendek. Pasangannya adalah 高 (gāo) yang berarti tinggi."
        },
        {
          id: "g6_q10",
          topic: "Percakapan Sopan",
          questionText: "Jika teman sekelas mengucapkan terima kasih '谢谢' (Xièxie), kita membalas dengan santun 'Sama-sama', yaitu...",
          mandarinPrompt: "Sama-sama = ... ?",
          pinyinPrompt: "",
          voiceText: "Jika ada teman yang mengucapkan terima kasih, kita membalas sama-sama yaitu apa?",
          mandarinVoice: "",
          options: [
            { text: "没关系", pinyin: "Méi guānxi", meaning: "Tidak apa-apa" },
            { text: "不客气", pinyin: "Bú kèqi", meaning: "Sama-sama" },
            { text: "对不起", pinyin: "Duìbuqǐ", meaning: "Minta maaf" },
            { text: "再见", pinyin: "Zàijiàn", meaning: "Sampai jumpa" }
          ],
          correctIndex: 1,
          explanation: "不客气 (Bú kèqi) artinya sama-sama atau jangan sungkan-sungkan. Balasan wajib yang sangat santun ketika seseorang berterima kasih!"
        }
      ]
    }
  ]
};

// Export ke window agar dapat diakses tanpa bundler
if (typeof window !== "undefined") {
  window.QUIZ_DATA = QUIZ_DATA;
}
