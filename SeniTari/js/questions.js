/**
 * Bank Soal Kuis Seni Tari SD - Petualangan Tari Nusantara
 * Total: 6 Tingkatan Kelas x 10 Soal = 60 Soal
 * Distribusi Kunci Jawaban Seimbang (A, B, C, D)
 */

const QuizDatabase = {
  "grades": [
    {
      "id": 1,
      "title": "Kelas 1 SD",
      "subtitle": "Gerak Tubuh, Alam & Satwa Ceria",
      "iconKey": "class1AlamTubuh",
      "badgeColor": "emerald",
      "description": "Mengenal bagian anggota tubuh untuk bergerak, meniru gerak alam & hewan, menari riang bersama teman, dan rasa percaya diri.",
      "questionCount": 10
    },
    {
      "id": 2,
      "title": "Kelas 2 SD",
      "subtitle": "Koordinasi Gerak, Irama & Selendang",
      "iconKey": "class2IramaHewan",
      "badgeColor": "rose",
      "description": "Melatih koordinasi tangan dan kaki, menyesuaikan tempo musik cepat-lambat, kelenturan tubuh, dan memainkan selendang sederhana.",
      "questionCount": 10
    },
    {
      "id": 3,
      "title": "Kelas 3 SD",
      "subtitle": "Ruang, Waktu, Tenaga & Level Gerak",
      "iconKey": "class3ElemenTari",
      "badgeColor": "sky",
      "description": "Memahami 3 elemen dasar tari (ruang, waktu, tenaga), level tinggi-sedang-rendah, gerak dasar pergelangan tangan, dan properti panggung.",
      "questionCount": 10
    },
    {
      "id": 4,
      "title": "Kelas 4 SD",
      "subtitle": "Tari Tradisional Nusantara & Wiraga-Wirama-Wirasa",
      "iconKey": "class4TariTradisi",
      "badgeColor": "amber",
      "description": "Mengenal tarian daerah dari Sabang sampai Merauke, keunikan properti (piring, kipas, payung), musik internal vs eksternal, dan 3 pilar tari.",
      "questionCount": 10
    },
    {
      "id": 5,
      "title": "Kelas 5 SD",
      "subtitle": "Pola Lantai, Formasi Kelompok & Dinamika",
      "iconKey": "class5PolaLantai",
      "badgeColor": "purple",
      "description": "Menguasai pola lantai garis lurus (horizontal, vertikal, diagonal) dan lengkung, formasi panggung seimbang, kekompakan, serta tari bertema burung merak & remo.",
      "questionCount": 10
    },
    {
      "id": 6,
      "title": "Kelas 6 SD",
      "subtitle": "Kreasi Nusantara, Tata Rias & Apresiasi Panggung",
      "iconKey": "class6KreasiNusantara",
      "badgeColor": "indigo",
      "description": "Menganalisis tari kreasi baru, tata rias wajah tokoh pementasan, tata lampu panggung, makna filosofis ragam topeng, dan etika menonton tari.",
      "questionCount": 10
    }
  ],
  "questions": {
    "1": [
      {
        "id": "k1-01",
        "topic": "Tiruan Gerak Hewan",
        "question": "Saat memperagakan tarian dengan menirukan seekor kelinci yang sedang mencari wortel di kebun, gerakan yang paling tepat adalah...",
        "options": [
          "Berdiri diam tegak tanpa menggerakkan kaki sama sekali",
          "Merayap pelan di lantai dengan perut menempel tanah",
          "Melompat-lompat kecil dengan kedua tangan dilipat di depan dada",
          "Berjalan mundur sambil memutar badan dengan cepat"
        ],
        "answerIndex": 2,
        "explanation": "Kelinci memiliki kaki belakang yang kuat untuk melompat. Menirukan gerak kelinci yang lincah dilakukan dengan melompat-lompat kecil gembira sambil melipat kedua tangan di dada seperti cakar kelinci."
      },
      {
        "id": "k1-02",
        "topic": "Tiruan Gerak Alam",
        "question": "Jika kamu diminta memeragakan gerakan pohon beringin yang tertiup angin sepoi-sepoi, gerakan tubuh yang tepat adalah...",
        "options": [
          "Menghentakkan kedua kaki ke lantai sekeras-kerasnya",
          "Meliukkan badan dan melambaikan kedua tangan ke kiri dan kanan dengan lembut",
          "Duduk bersila sambil menutup kedua mata rapat-rapat",
          "Melompat tinggi ke atas berulang kali sambil berteriak"
        ],
        "answerIndex": 1,
        "explanation": "Pohon yang tertiup angin sepoi-sepoi bergerak mengayun dengan luwes. Gerakan badan meliuk dan tangan melambai ke kiri dan ke kanan dengan lembut menirukan ranting daun yang bergoyang damai."
      },
      {
        "id": "k1-03",
        "topic": "Anggota Tubuh Penari",
        "question": "Saat guru meminta anak-anak membuat bunyi ketukan berirama di atas lantai tanpa bantuan alat musik, anggota tubuh yang digerakkan adalah...",
        "options": [
          "Kedua telapak kaki dihentakkan ke lantai secara bergantian",
          "Kedua telinga digerakkan perlahan",
          "Kedua mata dikedip-kedipkan cepat",
          "Bahu diangkat tinggi mendekati leher"
        ],
        "answerIndex": 0,
        "explanation": "Kaki adalah anggota tubuh penari yang berfungsi menopang berat badan, melangkah, dan menghentakkan ketukan berirama ritmis ke lantai."
      },
      {
        "id": "k1-04",
        "topic": "Gerak Bagian Kepala",
        "question": "Gerakan menggeleng ke kiri dan ke kanan serta mengangguk ke atas dan ke bawah dilakukan dengan menggerakkan bagian...",
        "options": [
          "Pinggul belakang",
          "Lutut kaki",
          "Siku tangan",
          "Kepala dan leher"
        ],
        "answerIndex": 3,
        "explanation": "Gerak menggeleng dan mengangguk adalah ragam gerak dasar yang berpusat pada persendian kepala dan leher penari."
      },
      {
        "id": "k1-05",
        "topic": "Tiruan Gerak Hewan Bersayap",
        "question": "Ketika menirukan kupu-kupu yang beterbangan dari satu bunga ke bunga lain, ayunan kedua tangan sebaiknya digerakkan...",
        "options": [
          "Ditaruh di dalam kantong baju",
          "Lurus kaku ke depan tanpa digerakkan",
          "Ke atas dan ke bawah secara teratur dan lembut seperti kepakan sayap",
          "Ditepukkan berulang kali ke lutut kaki"
        ],
        "answerIndex": 2,
        "explanation": "Kupu-kupu memiliki sayap indah yang mengepak ringan. Mengayunkan kedua lengan tangan naik-turun dengan lembut memperlihatkan kepakan sayap kupu-kupu yang elok."
      },
      {
        "id": "k1-06",
        "topic": "Tiruan Gerak Alam Laut",
        "question": "Gerakan ombak laut yang bergulung di tepi pantai dapat digambarkan dalam tarian dengan cara...",
        "options": [
          "Memukul lantai secara berulang-ulang",
          "Menggerakkan kedua tangan meliuk naik dan turun secara bergelombang",
          "Tengkurap diam tanpa ada gerakan",
          "Berlari kencang keluar ruangan kelas"
        ],
        "answerIndex": 1,
        "explanation": "Gelombang air laut memiliki bentuk naik dan turun yang berkesinambungan. Gerakan tangan bergelombang naik-turun menirukan riak ombak air yang mengalir indah."
      },
      {
        "id": "k1-07",
        "topic": "Ekspresi Gembira Menari",
        "question": "Ketika menari bersama teman-teman membawakan tarian yang riang, wajah penari sebaiknya memperlihatkan ekspresi...",
        "options": [
          "Tersenyum ramah dan berseri-seri penuh sukacita",
          "Cemberut sambil menunduk lesu",
          "Marah dengan mata melotot tajam",
          "Menangis tersedu-sedu di sudut panggung"
        ],
        "answerIndex": 0,
        "explanation": "Tarian riang gembira bertujuan menghibur dan membagi kebahagiaan. Senyuman tulus dan mata berseri-seri membuat tarian terlihat hidup dan menyenangkan."
      },
      {
        "id": "k1-08",
        "topic": "Tiruan Gerak Keseharian Manusia",
        "question": "Gerakan seorang petani yang sedang mencangkul tanah di sawah dapat ditirukan dalam tarian dengan...",
        "options": [
          "Menutup kedua telinga rapat-rapat",
          "Melambaikan satu jari telunjuk ke arah awan",
          "Berputar-putar cepat seperti gasing mainan",
          "Mengayunkan kedua tangan dari atas ke bawah seirama tenaga mengolah tanah"
        ],
        "answerIndex": 3,
        "explanation": "Gerak mencangkul petani merupakan gerak tiruan pekerjaan (tari agraris). Kedua tangan diayunkan dari atas ke bawah dengan tenaga teratur mencerminkan kerja keras mengolah sawah."
      },
      {
        "id": "k1-09",
        "topic": "Sikap Belajar Menari",
        "question": "Sikap terpuji yang perlu ditunjukkan saat berlatih menari bersama teman-teman satu kelas adalah...",
        "options": [
          "Bercanda sendiri dan menertawakan teman lain",
          "Mendorong teman yang gerakannya belum hafal",
          "Rukun, tertib, dan kompak mengikuti irama bersama-sama",
          "Menolak ikut bergerak dan duduk menyendiri di pojok"
        ],
        "answerIndex": 2,
        "explanation": "Menari bersama membutuhkan kekompakan dan kerukunan. Saling menyemangati dan tertib mengikuti arahan guru membuat latihan menari menjadi seru dan berhasil."
      },
      {
        "id": "k1-10",
        "topic": "Gerak Berpindah Tempat (Lokomotor)",
        "question": "Anggota tubuh yang digunakan oleh penari untuk melangkah maju, melangkah mundur, dan berpindah tempat adalah...",
        "options": [
          "Siku",
          "Kaki",
          "Hidung",
          "Dagu"
        ],
        "answerIndex": 1,
        "explanation": "Kaki adalah anggota tubuh gerak utama untuk berpindah tempat (gerak lokomotor), seperti melangkah ke depan, ke belakang, maupun melompat."
      }
    ],
    "2": [
      {
        "id": "k2-01",
        "topic": "Pengaruh Tempo Musik Terhadap Gerak",
        "question": "Jika musik iringan tari dipukul atau dimainkan dengan ketukan yang cepat dan riang, maka gerakan tubuh penari sebaiknya...",
        "options": [
          "Bergerak lebih lincah, dinamis, dan mengikuti tempo ketukan cepat",
          "Bergerak sangat lambat dan hampir berhenti",
          "Langsung tidur di tengah ruangan",
          "Menutup mata dan mematung diam"
        ],
        "answerIndex": 0,
        "explanation": "Gerak tari harus senantiasa menyatu dengan tempo iringan musik. Tempo cepat menuntut langkah dan ayunan tangan yang lincah, tangkas, dan bertenaga riang."
      },
      {
        "id": "k2-02",
        "topic": "Koordinasi Tangan dan Kaki",
        "question": "Saat melakukan langkah kaki ke depan serong kiri, biasanya lengan penari ikut mengimbangi agar tubuh...",
        "options": [
          "Terguling ke arah samping",
          "Menjadi kaku dan tidak bisa digerakkan",
          "Terasa berat dan cepat lelah",
          "Tetap seimbang, serasi, dan tidak mudah terjatuh"
        ],
        "answerIndex": 3,
        "explanation": "Koordinasi gerak antara ayunan lengan tangan dan langkah kaki bertujuan menjaga keseimbangan tubuh penari agar tarian terlihat elok dan stabil."
      },
      {
        "id": "k2-03",
        "topic": "Kelenturan Tubuh",
        "question": "Menirukan rumpun bambu yang bergoyang tertiup angin kencang melatih anggota badan bagian...",
        "options": [
          "Rambut agar cepat panjang",
          "Kuku jari kaki agar tajam",
          "Pinggang dan punggung agar lentur dan fleksibel",
          "Gigi agar kuat mengunyah"
        ],
        "answerIndex": 2,
        "explanation": "Gerak meliukkan badan dari kiri ke kanan melatih kelenturan persendian pinggang dan otot punggung, sehingga tubuh penari tidak kaku saat membawakan ragam gerak."
      },
      {
        "id": "k2-04",
        "topic": "Gerak Meniru Burung Merak",
        "question": "Burung merak terkenal dengan keindahan bulu ekornya. Dalam tarian merak sederhana, cara penari menggambarkan mekarnya ekor merak adalah...",
        "options": [
          "Memasukkan kedua tangan ke dalam saku rok",
          "Membentangkan kedua tangan lebar-lebar ke samping atas dengan jari lentik",
          "Menekuk kedua tangan rapat di depan dada",
          "Melipat kedua tangan di belakang punggung tanpa bergerak"
        ],
        "answerIndex": 1,
        "explanation": "Burung merak memamerkan sayap dan ekornya yang mengembang megah. Membuka kedua lengan tangan ke samping atas secara anggun menggambarkan ekor merak yang mempesona."
      },
      {
        "id": "k2-05",
        "topic": "Tempo Musik Lambat",
        "question": "Ketika mendengar alunan suling atau petikan senar yang berirama tenang dan lambat, penari membawakan gerakannya dengan...",
        "options": [
          "Gerakan yang gemulai, tenang, mengalir, dan halus",
          "Lompatan tinggi sambil berlari pontang-panting",
          "Hentakan kaki kasar yang mengagetkan",
          "Tepukan tangan sekeras mungkin"
        ],
        "answerIndex": 0,
        "explanation": "Irama lambat dan tenang selaras dengan gerak tari yang lembut, mengalir, dan penuh keanggunan (gerak gemulai)."
      },
      {
        "id": "k2-06",
        "topic": "Gerak Tiruan Satwa Air",
        "question": "Dalam tarian bertema dunia katak di rawa, gerak lompat katak dilakukan dengan posisi awal...",
        "options": [
          "Berjalan jinjit mundur dengan satu kaki",
          "Berdiri lurus tanpa menekuk lutut sama sekali",
          "Tidur terlentang menatap langit-langit",
          "Kedua lutut ditekuk jongkok rendah lalu meloncat ke depan mendarat dengan lentur"
        ],
        "answerIndex": 3,
        "explanation": "Katak meloncat dengan posisi awal merendah (jongkok) untuk mengumpulkan tenaga dorong pada kedua kaki, lalu meloncat ke depan dengan tumpuan yang aman."
      },
      {
        "id": "k2-07",
        "topic": "Properti Kain Selendang",
        "question": "Kain panjang berwana cerah yang disampirkan di bahu atau diikat di pinggang penari disebut...",
        "options": [
          "Kacamata renang",
          "Topi caping tani",
          "Selendang atau sampur tari",
          "Sarung tangan musim dingin"
        ],
        "answerIndex": 2,
        "explanation": "Selendang atau sampur adalah perlengkapan (properti) tari tradisional yang sangat populer di Indonesia, digunakan untuk dikibaskan atau disampirkan dengan anggun."
      },
      {
        "id": "k2-08",
        "topic": "Pemanasan Sebelum Menari",
        "question": "Sebelum mulai berlatih menari, anak-anak selalu diajak guru melakukan pemanasan tubuh. Tujuan utama pemanasan adalah...",
        "options": [
          "Membuat pakaian cepat kotor",
          "Menyiapkan otot agar tidak kram, lentur, dan mencegah cedera",
          "Menghabiskan waktu jam pelajaran tari",
          "Membuat tubuh menjadi mengantuk"
        ],
        "answerIndex": 1,
        "explanation": "Pemanasan mengalirkan darah ke seluruh otot tubuh, melonggarkan persendian, dan mencegah terjadinya keseleo atau cedera saat melakukan gerakan tari."
      },
      {
        "id": "k2-09",
        "topic": "Tiruan Gerak Satwa Unggas",
        "question": "Menirukan gerak anak bebek yang berjalan beriringan bersama induknya dilakukan dengan posisi...",
        "options": [
          "Kedua tangan ditaruh di samping pinggang menyerupai sayap kecil sambil melangkah bergoyang",
          "Kedua tangan menutup mata rapat",
          "Kedua tangan diangkat lurus ke atas tanpa gerak",
          "Duduk bersandar di dinding"
        ],
        "answerIndex": 0,
        "explanation": "Bebek memiliki sayap kecil di samping badan dan berjalan dengan langkah bergoyang ke kiri dan ke kanan secara beriringan."
      },
      {
        "id": "k2-10",
        "topic": "Sikap Awal Menari",
        "question": "Sikap badan berdiri tegak, pandangan lurus terarah, dan tubuh siap mengikuti ketukan pertama disebut sikap...",
        "options": [
          "Sikap bingung",
          "Sikap tidur siang",
          "Sikap malas bergerak",
          "Sikap siap atau sikap awal"
        ],
        "answerIndex": 3,
        "explanation": "Sikap awal atau posisi siap adalah titik mula penari sebelum alunan irama musik pengiring pertama kali berbunyi."
      }
    ],
    "3": [
      {
        "id": "k3-01",
        "topic": "Tiga Elemen Pokok Tari",
        "question": "Seni tari terwujud karena adanya tiga unsur atau elemen pokok yang saling berpadu, yaitu...",
        "options": [
          "Pensil, Kertas, dan Penghapus",
          "Air, Api, dan Angin",
          "Ruang, Waktu, dan Tenaga",
          "Meja, Kursi, dan Lemari"
        ],
        "answerIndex": 2,
        "explanation": "Tiga elemen utama dalam seni tari adalah: Ruang (tempat gerak tubuh dilakukan), Waktu (tempo, ritme, dan durasi gerak), serta Tenaga (intensitas kekuatan yang disalurkan otot saat bergerak)."
      },
      {
        "id": "k3-02",
        "topic": "Level Rendah dalam Tari",
        "question": "Gerakan tari yang dikerjakan dengan posisi tubuh duduk bersimpuh, duduk bersila, atau merebahkan badan di lantai berada pada tingkatan level...",
        "options": [
          "Level Sedang",
          "Level Rendah",
          "Level Tinggi",
          "Level Melayang"
        ],
        "answerIndex": 1,
        "explanation": "Level rendah terjadi saat kontak tubuh penari sangat dekat dengan lantai atau lantai menjadi tumpuan utama, seperti saat duduk bersimpuh, bersila, atau berguling."
      },
      {
        "id": "k3-03",
        "topic": "Level Tinggi dalam Tari",
        "question": "Penari yang melakukan gerakan melompat tinggi ke udara, mengangkat tubuh ke atas, atau berjinjit tegak sedang menggunakan tingkatan...",
        "options": [
          "Level Tinggi",
          "Level Bawah",
          "Level Datar",
          "Level Nol"
        ],
        "answerIndex": 0,
        "explanation": "Level tinggi dicapai ketika penari menjauh dari lantai ke arah atas, misalnya melayang di udara saat melompat atau bertumpu dengan ujung jari kaki (jinjit)."
      },
      {
        "id": "k3-04",
        "topic": "Posisi Kaki Mendak (Level Sedang)",
        "question": "Dalam tari tradisional Jawa dan Sunda, sikap dasar berdiri dengan kedua lutut ditekuk merendah dan badan sedikit condong disebut posisi...",
        "options": [
          "Berbaring",
          "Melompat",
          "Tiduran",
          "Mendak"
        ],
        "answerIndex": 3,
        "explanation": "Mendak adalah sikap dasar kaki yang ditekuk merendahkan pusat gravitasi badan penari (level sedang), memberi kesan kokoh dan mantap saat bergerak."
      },
      {
        "id": "k3-05",
        "topic": "Penggunaan Tenaga Kuat",
        "question": "Karakter tarian perang yang menggambarkan prajurit gagah perkasa sedang bertarung di medan laga menuntut penggunaan tenaga tari yang...",
        "options": [
          "Lambat dan mengantuk",
          "Sangat lemas tanpa daya",
          "Kuat, tegas, bertenaga, dan bersemangat membara",
          "Ragu-ragu dan malu-malu"
        ],
        "answerIndex": 2,
        "explanation": "Gerak tari gagah dan keprajuritan menggunakan tenaga otot yang kuat dan aksen gerak patah-patah yang tegas (staccato) untuk menunjukkan wibawa seorang kesatria."
      },
      {
        "id": "k3-06",
        "topic": "Penggunaan Tenaga Lembut",
        "question": "Gerakan tari yang menggambarkan keanggunan seorang putri bangsawan yang santun dan halus biasanya memanfaatkan tenaga...",
        "options": [
          "Kasar dan menghentak keras",
          "Lembut, mengalir, dan terkontrol dengan halus",
          "Memukul kencang ke segala arah",
          "Tersendat-sendat penuh amarah"
        ],
        "answerIndex": 1,
        "explanation": "Tokoh putri dalam tarian tradisional dibawakan dengan tenaga lembut (legato), di mana peralihan dari satu gerakan ke gerakan lain mengalir tenang dan anggun."
      },
      {
        "id": "k3-07",
        "topic": "Pengertian Properti Tari",
        "question": "Segala macam peralatan atau benda yang dipegang dan dimainkan oleh penari untuk memperindah pertunjukan tarian disebut...",
        "options": [
          "Properti tari",
          "Papan tulis",
          "Buku catatan",
          "Alat tulis kantor"
        ],
        "answerIndex": 0,
        "explanation": "Properti tari adalah benda pendukung yang digunakan langsung oleh penari di atas panggung, misalnya kipas, piring, selendang, panah, atau payung."
      },
      {
        "id": "k3-08",
        "topic": "Fungsi Musik Pengiring Tari",
        "question": "Keberadaan alunan musik dalam pertunjukan tari memegang peranan penting, salah satunya berfungsi untuk...",
        "options": [
          "Menyembunyikan kostum para penari",
          "Mengganggu konsentrasi penonton",
          "Membuat panggung menjadi gelap gulita",
          "Memberikan patokan ketukan ketepatan waktu dan mempertegas suasana gerak"
        ],
        "answerIndex": 3,
        "explanation": "Musik pengiring tari mengatur ketukan (tempo), memberi isyarat pergantian ragam gerak, dan memperkuat suasana hati (gembira, sedih, agung, atau menegangkan)."
      },
      {
        "id": "k3-09",
        "topic": "Gerak Dasar Tangan (Ukel)",
        "question": "Gerak dasar memutar pergelangan tangan secara melingkar dan luwes hingga jemari lentik mengarah ke atas disebut gerak...",
        "options": [
          "Tendang kaki",
          "Lari cepat",
          "Ukel",
          "Geleng kepala"
        ],
        "answerIndex": 2,
        "explanation": "Ukel adalah salah satu gerak dasar pergelangan tangan yang sangat terkenal dalam tari klasik Jawa, Sunda, dan Bali, dilakukan dengan memutar pergelangan tangan secara anggun."
      },
      {
        "id": "k3-10",
        "topic": "Ruang Gerak Pribadi Penari",
        "question": "Batas jangkauan anggota tubuh penari saat bergerak di tempat tanpa berpindah dari titik berdirinya dinamakan...",
        "options": [
          "Ruang umum antarkota",
          "Ruang pribadi (ruang sempit di tempat)",
          "Ruang angkasa luas",
          "Ruang tunggu terminal"
        ],
        "answerIndex": 1,
        "explanation": "Ruang pribadi adalah area yang dapat dijangkau oleh rentangan tangan dan kaki penari di satu titik diam, sedangkan saat penari melangkah menjelajahi panggung disebut ruang umum."
      }
    ],
    "4": [
      {
        "id": "k4-01",
        "topic": "Tari Tradisional Nusantara - Aceh",
        "question": "Tarian dari Provinsi Aceh yang dibawakan oleh barisan penari secara kompak duduk bersimpuh sambil menepuk dada dan paha secara ritmis adalah...",
        "options": [
          "Tari Saman",
          "Tari Kecak",
          "Tari Piring",
          "Tari Kuda Lumping"
        ],
        "answerIndex": 0,
        "explanation": "Tari Saman berasal dari suku Gayo, Aceh. Tarian ini diakui dunia (UNESCO) karena kecepatan gerak tangan, tepukan dada, dan keselarasan barisan yang luar biasa tanpa alat musik eksternal."
      },
      {
        "id": "k4-02",
        "topic": "Tari Tradisional Nusantara - Sumatera Barat",
        "question": "Tarian tradisional dari Minangkabau (Sumatera Barat) di mana penari mengayunkan dua piring keramik di atas telapak tangan dengan gerakan lincah tanpa terjatuh adalah...",
        "options": [
          "Tari Jaipong",
          "Tari Pendet",
          "Tari Gambyong",
          "Tari Piring"
        ],
        "answerIndex": 3,
        "explanation": "Tari Piring berasal dari Minangkabau. Dahulu tarian ini merupakan ungkapan rasa syukur masyarakat kepada dewata atas hasil panen padi yang melimpah ruah."
      },
      {
        "id": "k4-03",
        "topic": "Tari Tradisional Nusantara - Jawa Barat",
        "question": "Tarian kreasi pergaulan dari daerah Jawa Barat (Sunda) yang memiliki ciri khas ketukan kendang lincah, dinamis, ceria, dan penuh energi adalah...",
        "options": [
          "Tari Tor-Tor",
          "Tari Bedhaya",
          "Tari Jaipong",
          "Tari Pakarena"
        ],
        "answerIndex": 2,
        "explanation": "Tari Jaipongan diciptakan oleh seniman Gugum Gumbira di Jawa Barat. Ciri khas utamanya adalah tabuhan kendang Jaipong yang atraktif dan gerak penari yang lincah energik."
      },
      {
        "id": "k4-04",
        "topic": "Tiga Pilar Penilaian Seni Tari",
        "question": "Dalam seni tari tradisional nusantara, tiga aspek penilaian utama terhadap kemampuan seorang penari dikenal dengan sebutan...",
        "options": [
          "Logika, Fisika, dan Kimia",
          "Wiraga, Wirama, dan Wirasa",
          "Bicara, Baca, dan Tulis",
          "Senam, Lari, dan Lompat"
        ],
        "answerIndex": 1,
        "explanation": "Wiraga adalah ketrampilan gerak tubuh (raga), Wirama adalah ketepatan mengikuti ketukan irama musik, dan Wirasa adalah kemampuan menjiwai perasaan dan ekspresi tarian."
      },
      {
        "id": "k4-05",
        "topic": "Tari Tradisional Nusantara - Bali",
        "question": "Tarian penyambutan tamu khas Pulau Dewata Bali di mana para penari membawa mangkok berukir (bokor) berisi bunga warna-warni yang ditaburkan adalah...",
        "options": [
          "Tari Pendet",
          "Tari Remo",
          "Tari Yospan",
          "Tari Serimpi"
        ],
        "answerIndex": 0,
        "explanation": "Tari Pendet awalnya merupakan tari upacara persembahan di pura-pura Bali, namun kini juga populer sebagai tarian ucapan selamat datang bagi tamu kehormatan."
      },
      {
        "id": "k4-06",
        "topic": "Musik Pengiring Internal",
        "question": "Tari Kecak dari Bali diiringi oleh suara vokal puluhan pria yang duduk melingkar menyerukan kata 'cak-cak-cak'. Iringan musik yang berasal dari tubuh penari ini tergolong...",
        "options": [
          "Musik digital sintetis",
          "Musik eksternal",
          "Musik rekaman radio",
          "Musik internal"
        ],
        "answerIndex": 3,
        "explanation": "Musik internal adalah bunyi pengiring yang langsung dihasilkan oleh tubuh pemain/penari itu sendiri, seperti suara nyanyian vokal, tepukan tangan, tepukan dada, atau hentakan kaki."
      },
      {
        "id": "k4-07",
        "topic": "Properti Tari Tradisional - Sulawesi",
        "question": "Properti utama yang wajib dipegang dan dimainkan oleh para penari perempuan dalam Tari Kipas Pakarena dari Gowa (Sulawesi Selatan) adalah...",
        "options": [
          "Pedang logam",
          "Busur panah",
          "Kipas lipat",
          "Topi caping"
        ],
        "answerIndex": 2,
        "explanation": "Tari Pakarena menggunakan properti dua buah kipas lipat. Gerakan memutar kipas secara perlahan mencerminkan kelembutan dan kesabaran wanita suku Bugis-Makassar."
      },
      {
        "id": "k4-08",
        "topic": "Tari Tradisional Nusantara - Kalimantan",
        "question": "Tari Kancet Papatai adalah tarian tradisional suku Dayak di Kalimantan Timur yang menggambarkan keberanian prajurit dengan menggunakan properti...",
        "options": [
          "Bambu runcing dan bendera",
          "Mandau (senjata parang tradisional) dan perisai/tameng",
          "Piring kaca dan lilin",
          "Selendang kain sutra panjang"
        ],
        "answerIndex": 1,
        "explanation": "Tari Kancet Papatai (Tari Perang Dayak) memperlihatkan keperkasaan pemuda Dayak yang membela sukunya menggunakan senjata Mandau dan perisai kayu khas (Kelebit)."
      },
      {
        "id": "k4-09",
        "topic": "Fungsi Busana dan Kostum Tari Daerah",
        "question": "Pemilihan pakaian adat, mahkota, selendang, dan kain batik saat menari di atas panggung bertujuan untuk...",
        "options": [
          "Memperkuat karakter peran tokoh dan memperkenalkan kekayaan budaya daerah",
          "Menutupi wajah penari agar tidak dikenali penonton",
          "Membuat gerakan penari menjadi berat dan lambat",
          "Menggantikan fungsi alunan suara musik"
        ],
        "answerIndex": 0,
        "explanation": "Busana tari dirancang khusus sesuai identitas budaya daerah dan watak tokoh yang diperankan, sehingga pesan dan keindahan cerita tersampaikan jelas kepada penonton."
      },
      {
        "id": "k4-10",
        "topic": "Nilai Karakter dalam Tari Nusantara",
        "question": "Ketika membawakan tarian tradisional nusantara yang dimainkan secara berkelompok, nilai luhur yang dipelajari anak-anak adalah...",
        "options": [
          "Rasa sombong dan tidak mau bekerja sama",
          "Keinginan untuk menonjol sendiri di panggung",
          "Sikap meremehkan teman yang gerakannya tertinggal",
          "Semangat gotong royong, toleransi, dan kebersamaan"
        ],
        "answerIndex": 3,
        "explanation": "Tari kelompok menanamkan karakter Profil Pelajar Pancasila: gotong royong, saling menghargai, disiplin waktu, dan kebersamaan membina persatuan."
      }
    ],
    "5": [
      {
        "id": "k5-01",
        "topic": "Pola Lantai Garis Lurus Horizontal",
        "question": "Susunan formasi di mana para penari berdiri berbaris lurus menyamping dari sisi kiri ke sisi kanan panggung dinamakan pola lantai...",
        "options": [
          "Lingkaran spiral",
          "Garis lurus vertikal",
          "Garis lurus horizontal",
          "Zigzag acak"
        ],
        "answerIndex": 2,
        "explanation": "Pola lantai horizontal adalah garis lurus yang membentang dari kiri ke kanan (atau sebaliknya). Pola ini melambangkan kesetaraan dan ikatan persaudaraan yang erat, seperti dalam Tari Saman."
      },
      {
        "id": "k5-02",
        "topic": "Pola Lantai Garis Lurus Vertikal",
        "question": "Jika sekelompok penari berbaris lurus berurutan dari arah panggung depan menuju ke arah panggung belakang, pola yang dibentuk adalah...",
        "options": [
          "Garis lengkung lingkaran",
          "Garis lurus vertikal",
          "Garis busur panah",
          "Garis spiral melingkar"
        ],
        "answerIndex": 1,
        "explanation": "Pola lantai vertikal membentuk garis lurus dari depan ke belakang (membujur). Pola ini memberikan kesan formasi yang kokoh, tegas, dan mendalam."
      },
      {
        "id": "k5-03",
        "topic": "Pola Lantai Garis Lengkung",
        "question": "Pola lantai berupa lingkaran atau lengkungan bulan sabit dalam tari kelompok memberikan kesan rasa visual yang...",
        "options": [
          "Lembut, luwes, manis, dan melambangkan kebulatan persatuan",
          "Sangat kaku dan menakutkan",
          "Kasar dan mudah pecah",
          "Tajam seperti senjata tusuk"
        ],
        "answerIndex": 0,
        "explanation": "Garis lengkung atau lingkaran memberikan kesan visual yang dinamis, lentur, hangat, dan melambangkan kebulatan tekad serta persatuan yang erat (misal Tari Randai atau Tari Kecak)."
      },
      {
        "id": "k5-04",
        "topic": "Pola Lantai Garis Diagonal",
        "question": "Formasi penari yang berbaris menyudut miring menyerong dari sudut depan kanan panggung menuju ke sudut belakang kiri panggung disebut...",
        "options": [
          "Pola lingkaran penuh",
          "Pola garis horizontal",
          "Pola titik nol",
          "Pola garis diagonal"
        ],
        "answerIndex": 3,
        "explanation": "Pola lantai diagonal menghubungkan dua sudut panggung yang saling berseberangan secara miring (menyerong), memberikan kesan dinamis dan dinamis-bergerak."
      },
      {
        "id": "k5-05",
        "topic": "Fungsi Pola Lantai dalam Pertunjukan",
        "question": "Tujuan pokok dari pengaturan pola lantai yang rapi dan terencana pada tari kelompok adalah...",
        "options": [
          "Menghalangi pandangan penonton dari lampu panggung",
          "Membuat penari cepat haus dan kelelahan",
          "Menjaga panggung tetap seimbang, tampak indah dipandang, dan mencegah penari saling bertabrakan",
          "Menyembunyikan jumlah penari yang sebenarnya"
        ],
        "answerIndex": 2,
        "explanation": "Pola lantai mengatur lalu lintas perpindahan penari agar pemanfaatan ruang panggung tampak estetis, seimbang dari segala sudut pandang penonton, dan mencegah tabrakan antarkawan."
      },
      {
        "id": "k5-06",
        "topic": "Tari Tradisional Jawa Timur (Gongseng)",
        "question": "Tarian dari Jawa Timur yang penarinya mengenakan gelang berlonceng kuningan (gongseng) di pergelangan kaki yang bergemerincing nyaring saat menghentak adalah...",
        "options": [
          "Tari Serimpi",
          "Tari Remo",
          "Tari Legong",
          "Tari Tor-Tor"
        ],
        "answerIndex": 1,
        "explanation": "Tari Remo dari Jombang/Surabaya, Jawa Timur, dibawakan sebagai tarian selamat datang. Salah satu keunikannya adalah hentakan kaki bergelang lonceng (gongseng) yang berpadu dengan ketukan gamelan."
      },
      {
        "id": "k5-07",
        "topic": "Musik Pengiring Eksternal",
        "question": "Iringan tari yang berasal dari perangkat alat di luar tubuh penari, seperti seperangkat gamelan perunggu, talempong, atau gendang disebut iringan...",
        "options": [
          "Musik eksternal",
          "Musik internal",
          "Musik bisikan",
          "Musik batin"
        ],
        "answerIndex": 0,
        "explanation": "Musik eksternal adalah musik pengiring tari yang dihasilkan oleh instrumen pemusik atau pita audio yang berada di luar tubuh penari."
      },
      {
        "id": "k5-08",
        "topic": "Perpindahan Formasi Tari",
        "question": "Saat penari berpindah posisi dari formasi lingkaran menjadi barisan bersaf lurus, perpindahan gerak harus dilakukan dengan...",
        "options": [
          "Mendorong kawan di depannya agar cepat",
          "Berlari kencang saling mendahului",
          "Berteriak histeris di hadapan penonton",
          "Langkah teratur, kompak, tenang, dan selaras dengan birama musik"
        ],
        "answerIndex": 3,
        "explanation": "Perpindahan formasi (blocking transit) harus mengalir indah tanpa kesan terburu-buru, menjaga jarak yang proporsional dan tetap dalam ritme birama lagu."
      },
      {
        "id": "k5-09",
        "topic": "Desain Formasi Simetris",
        "question": "Sebuah susunan penari di mana bentuk barisan di sisi panggung sebelah kanan sama persis dengan bentuk barisan di sebelah kiri disebut desain...",
        "options": [
          "Desain sembarangan",
          "Desain asimetris",
          "Desain simetris",
          "Desain acak-acakan"
        ],
        "answerIndex": 2,
        "explanation": "Desain simetris membagi formasi panggung menjadi dua belahan yang berimbang (cerminan identik kanan dan kiri), memberikan kesan formal, kokoh, dan berwibawa."
      },
      {
        "id": "k5-10",
        "topic": "Tari Merak - Jawa Barat",
        "question": "Keunikan utama kostum Tari Merak dari Jawa Barat yang paling memukau penonton di panggung adalah...",
        "options": [
          "Topeng kayu seram bergigi taring runcing",
          "Kain sayap lebar penuh corak hiasan warna-warni yang dikembangkan penari menyerupai ekor merak",
          "Sepatu roda yang berputar kencang",
          "Baju zirah besi seperti kesatria kuno"
        ],
        "answerIndex": 1,
        "explanation": "Tari Merak karya Raden Tjetje Somantri memiliki ciri khas sayap kain lebar yang disambung ke jemari penari, yang saat dibentangkan merekah indah menyerupai ekor burung merak jantan."
      }
    ],
    "6": [
      {
        "id": "k6-01",
        "topic": "Pengertian Tari Kreasi Baru",
        "question": "Karya seni tari yang berakar dari tarian tradisional namun dikembangkan dengan variasi gerak baru, musik baru, dan busana yang disesuaikan dengan zaman modern disebut...",
        "options": [
          "Tari kreasi baru",
          "Tari primitif zaman purba",
          "Tari senam kebugaran",
          "Tari tanpa aturan"
        ],
        "answerIndex": 0,
        "explanation": "Tari kreasi baru adalah pengembangan inovatif dari kaidah tari tradisional yang disesuaikan dengan kreativitas masa kini tanpa menghilangkan nilai keluhuran budaya dasarnya."
      },
      {
        "id": "k6-02",
        "topic": "Tari Adat Batak - Sumatera Utara",
        "question": "Tarian adat persembahan masyarakat Batak di Sumatera Utara yang diiringi tabuhan ansambel musik gondang dan gerakan tangan menyembah (somba) adalah...",
        "options": [
          "Tari Cakalele",
          "Tari Zapin",
          "Tari Seudati",
          "Tari Tor-Tor"
        ],
        "answerIndex": 3,
        "explanation": "Tari Tor-Tor adalah tarian upacara adat Batak yang penuh penghormatan kepada leluhur, keluarga, dan Tuhan, diiringi ritme tetabuhan magis alat musik Gondang Sabangunan."
      },
      {
        "id": "k6-03",
        "topic": "Fungsi Tata Rias (Makeup) Tari",
        "question": "Penerapan tata rias wajah pada penari di panggung pementasan memiliki peranan utama untuk...",
        "options": [
          "Menggantikan fungsi kostum busana tari",
          "Membuat wajah penari tampak menakutkan sepanjang waktu",
          "Mempertegas garis watak karakter tokoh yang diperankan agar terlihat jelas dari kejauhan penonton",
          "Membuat penari tidak bisa tersenyum"
        ],
        "answerIndex": 2,
        "explanation": "Tata rias panggung memperjelas kontur wajah yang terkena lampu sorot serta menegaskan karakter peran (misalnya karakter putri yang anggun, ksatria gagah, atau raksasa seram)."
      },
      {
        "id": "k6-04",
        "topic": "Tugas Pengatur Panggung (Stage Manager)",
        "question": "Dalam penyelenggaraan pergelaran tari sekolah, orang yang bertanggung jawab mengatur jadwal giliran tampil, properti di belakang panggung, dan kelancaran acara adalah...",
        "options": [
          "Penjual tiket parkir",
          "Stage Manager (Pimpinan Panggung)",
          "Penonton barisan depan",
          "Tukang rias tetangga"
        ],
        "answerIndex": 1,
        "explanation": "Stage Manager adalah koordinator penting di belakang panggung yang memastikan semua pemain, properti, tata lampu, dan musik siap tepat waktu saat tirai panggung dibuka."
      },
      {
        "id": "k6-05",
        "topic": "Tari Tradisional Papua",
        "question": "Tarian pergaulan masyarakat Papua yang dibawakan oleh para remaja dengan riang gembira, langkah kaki ritmis, dan iringan alat musik tifa serta gitar akustik adalah...",
        "options": [
          "Tari Yospan (Yosim Pancar)",
          "Tari Baris",
          "Tari Legong Keraton",
          "Tari Ronggeng"
        ],
        "answerIndex": 0,
        "explanation": "Tari Yospan adalah tarian persahabatan pemuda-pemudi di pesisir Papua yang sangat dinamis, energetik, dan mengekspresikan kegembiraan dengan ketukan tifa yang khas."
      },
      {
        "id": "k6-06",
        "topic": "Apresiasi Seni Pertunjukan",
        "question": "Aktivitas menyaksikan pertunjukan seni tari, menghayati pesan keindahan cerita, serta memberikan ulasan yang membangun disebut kegiatan...",
        "options": [
          "Perdebatan panggung",
          "Ejekan penonton",
          "Pamer kemampuan",
          "Apresiasi tari"
        ],
        "answerIndex": 3,
        "explanation": "Apresiasi seni adalah proses pengamatan yang melibatkan kesadaran rasa, penghargaan nilai keindahan estetika, dan pemahaman nilai pesan moral yang disampaikan koreografer."
      },
      {
        "id": "k6-07",
        "topic": "Fungsi Tata Lampu (Lighting) Panggung",
        "question": "Penggunaan lampu sorot (lighting) berwarna dalam pertunjukan pementasan tari bertujuan untuk...",
        "options": [
          "Menyilaukan mata penari agar tersandung",
          "Memanaskan ruangan panggung agar penari berkeringat",
          "Membantu menciptakan suasana dramatik adegan dan memfokuskan perhatian penonton pada gerak penari",
          "Menghemat listrik gedung sekolah"
        ],
        "answerIndex": 2,
        "explanation": "Tata lampu (lighting) mengatur intensitas cahaya, warna, dan sudut sorot untuk menghidupkan suasana emosional pertunjukan tari (misal cahaya biru temaram untuk suasana malam hening)."
      },
      {
        "id": "k6-08",
        "topic": "Makna Simbolis Warna Kostum Tari",
        "question": "Dalam seni pertunjukan tari tradisional nusantara, kostum atau riasan wajah yang didominasi warna merah terang biasanya menyimbolkan karakter tokoh yang...",
        "options": [
          "Pengecut dan selalu sembunyi",
          "Gagah, berani, bertenaga, atau memiliki temperamen pemarah",
          "Sangat pemalu dan pendiam",
          "Suka mengantuk di kelas"
        ],
        "answerIndex": 1,
        "explanation": "Secara simbolik warna dalam seni tari nusantara, warna merah melambangkan unsur api, keberanian tanpa gentar, keperkasaan, maupun sifat angkara murka yang berapi-api."
      },
      {
        "id": "k6-09",
        "topic": "Etika Menonton Pertunjukan Tari",
        "question": "Sikap terpuji yang mencerminkan etika penonton yang berbudaya saat menyaksikan pertunjukan tari di dalam gedung pementasan adalah...",
        "options": [
          "Menyimak jalannya tarian dengan tertib dan memberikan tepuk tangan meriah saat penampilan usai",
          "Bicara berteriak dengan ponsel aktif bersuara keras",
          "Berlari-larian melintasi depan panggung penari",
          "Melempari penari dengan botol minuman"
        ],
        "answerIndex": 0,
        "explanation": "Menghormati kerja keras para seniman dilakukan dengan duduk tenang menyimak, tidak mengaktifkan suara ponsel yang mengganggu, serta mengapresiasi dengan tepuk tangan meriah."
      },
      {
        "id": "k6-10",
        "topic": "Tari Topeng Cirebon",
        "question": "Tari Topeng Cirebon dari Jawa Barat menampilkan lima watak topeng berbeda (Panji, Samba, Rumyang, Tumenggung, Klana) yang memiliki makna filosofis melambangkan...",
        "options": [
          "Perubahan cuaca musim kemarau dan hujan",
          "Nama-nama buah-buahan lokal khas Jawa Barat",
          "Jenis hewan ternak peliharaan warga desa",
          "Perjalanan siklus tahapan kehidupan manusia dari lahir suci hingga dewasa dan bernafsu"
        ],
        "answerIndex": 3,
        "explanation": "Panca Wanda pada Topeng Cirebon melambangkan fase kehidupan: Panji (bayi suci), Samba (anak lincah), Rumyang (remaja mekar), Tumenggung (kedewasaan pemimpin), dan Klana (hawa nafsu duniawi)."
      }
    ]
  }
};
