/**
 * Kuis Bahasa Inggris SD - Bank Soal Lengkap Kelas 1 sampai 6 SD
 * Total: 60 Soal (10 Soal per jenjang kelas)
 * Setiap soal dilengkapi topik, opsi ganda logis, kunci jawaban, 
 * teks pelafalan suara (Audio Text), ikon Font Awesome, dan pembahasan mendidik ramah anak.
 */

const EnglishQuizQuestions = [
  // =========================================================================
  // KELAS 1 SD - TINGKAT DASAR (Kosakata Dasar, Warna, Angka, Hewan, Tubuh)
  // =========================================================================
  {
    id: 101,
    grade: 1,
    topic: "Colors (Warna)",
    icon: "fa-palette",
    question: "What color is a ripe banana?",
    audioText: "What color is a ripe banana?",
    options: ["Blue", "Yellow", "Red", "Green"],
    answerIndex: 1,
    explanation: "Pisang yang matang umumnya berwarna kuning (Yellow). Blue artinya biru, Red artinya merah, dan Green artinya hijau."
  },
  {
    id: 102,
    grade: 1,
    topic: "Numbers (Angka 1-10)",
    icon: "fa-arrow-down-1-9",
    question: "How do you say angka '5' in English?",
    audioText: "How do you say the number five in English?",
    options: ["Four", "Six", "Five", "Seven"],
    answerIndex: 2,
    explanation: "Angka lima dalam bahasa Inggris adalah Five. Four adalah 4, Six adalah 6, dan Seven adalah 7."
  },
  {
    id: 103,
    grade: 1,
    topic: "Pets & Animals (Hewan)",
    icon: "fa-dog",
    question: "An animal that barks 'woof woof' and wags its tail is a...",
    audioText: "An animal that barks and wags its tail is a dog.",
    options: ["Cat", "Dog", "Duck", "Fish"],
    answerIndex: 1,
    explanation: "Hewan peliharaan yang menggonggong dan setia mengibaskan ekornya adalah anjing (Dog). Cat adalah kucing, Duck adalah bebek, dan Fish adalah ikan."
  },
  {
    id: 104,
    grade: 1,
    topic: "Parts of the Body (Anggota Tubuh)",
    icon: "fa-eye",
    question: "We use our ... to see things around us.",
    audioText: "We use our eyes to see things around us.",
    options: ["Ears", "Eyes", "Hands", "Nose"],
    answerIndex: 1,
    explanation: "Kita melihat keindahan di sekitar kita menggunakan mata (Eyes). Ears untuk mendengar suara, dan Nose untuk mencium aroma."
  },
  {
    id: 105,
    grade: 1,
    topic: "Greetings (Sapaan)",
    icon: "fa-sun",
    question: "When you meet your teacher at 7:00 in the morning, you say:",
    audioText: "Good morning, teacher!",
    options: ["Good night", "Good morning", "Good afternoon", "Goodbye"],
    answerIndex: 1,
    explanation: "Saat bertemu bapak atau ibu guru di pagi hari, sapaan yang tepat dan sopan adalah 'Good morning' (Selamat pagi)."
  },
  {
    id: 106,
    grade: 1,
    topic: "Fruits (Buah-buahan)",
    icon: "fa-apple-whole",
    question: "What is the English word for buah 'Apel'?",
    audioText: "Apple is a delicious red fruit.",
    options: ["Grape", "Apple", "Orange", "Mango"],
    answerIndex: 1,
    explanation: "Buah apel dalam bahasa Inggris adalah Apple. Grape adalah anggur, Orange adalah jeruk, dan Mango adalah mangga."
  },
  {
    id: 107,
    grade: 1,
    topic: "Family (Keluarga)",
    icon: "fa-people-roof",
    question: "The word 'Father' in Indonesian means...",
    audioText: "Father loves his family.",
    options: ["Ibu", "Ayah", "Kakek", "Kakak"],
    answerIndex: 1,
    explanation: "Father artinya Ayah. Sedangkan Ibu adalah Mother, Kakek adalah Grandfather, dan Nenek adalah Grandmother."
  },
  {
    id: 108,
    grade: 1,
    topic: "Classroom Objects (Benda Sekolah)",
    icon: "fa-pencil",
    question: "You use a ... to write words in your notebook.",
    audioText: "You use a pencil to write words in your notebook.",
    options: ["Pencil", "Bag", "Ruler", "Eraser"],
    answerIndex: 0,
    explanation: "Alat untuk menulis tulisan di buku adalah pensil (Pencil). Bag adalah tas sekolah, dan Ruler adalah penggaris."
  },
  {
    id: 109,
    grade: 1,
    topic: "Shapes (Bentuk Geometri)",
    icon: "fa-shapes",
    question: "A shape that has three sides and three corners is a...",
    audioText: "A shape that has three sides is a triangle.",
    options: ["Circle", "Square", "Triangle", "Star"],
    answerIndex: 2,
    explanation: "Bentuk yang memiliki tiga garis sisi dan tiga sudut adalah segitiga (Triangle). Circle adalah lingkaran bundar, dan Square adalah persegi."
  },
  {
    id: 110,
    grade: 1,
    topic: "Feelings (Perasaan)",
    icon: "fa-face-smile",
    question: "When someone smiles and laughs with friends, they feel...",
    audioText: "When someone smiles, they feel happy.",
    options: ["Sad", "Angry", "Sleepy", "Happy"],
    answerIndex: 3,
    explanation: "Saat seseorang tersenyum ceria dan tertawa gembira, perasaannya adalah bahagia (Happy). Sad adalah sedih, dan Angry adalah marah."
  },

  // =========================================================================
  // KELAS 2 SD - TINGKAT PEMULA LANJUTAN (Hari, Makanan, Pakaian, Rumah, Sifat)
  // =========================================================================
  {
    id: 201,
    grade: 2,
    topic: "Days of the Week (Nama Hari)",
    icon: "fa-calendar-days",
    question: "Which day comes right after Sunday?",
    audioText: "Which day comes right after Sunday?",
    options: ["Tuesday", "Monday", "Friday", "Wednesday"],
    answerIndex: 1,
    explanation: "Hari yang datang tepat setelah hari Minggu (Sunday) adalah hari Senin (Monday). Urutannya: Sunday, Monday, Tuesday, Wednesday."
  },
  {
    id: 202,
    grade: 2,
    topic: "Food & Drinks (Makanan & Minuman)",
    icon: "fa-mug-hot",
    question: "We drink a healthy white liquid from a dairy cow called...",
    audioText: "We drink milk every morning for strong bones.",
    options: ["Tea", "Juice", "Milk", "Soda"],
    answerIndex: 2,
    explanation: "Minuman putih sehat berkalsium yang dihasilkan oleh sapi perah adalah susu (Milk). Tea adalah teh, dan Juice adalah sari buah."
  },
  {
    id: 203,
    grade: 2,
    topic: "Clothing (Pakaian)",
    icon: "fa-socks",
    question: "You wear ... on your feet before putting on your shoes.",
    audioText: "Put on your socks before wearing your shoes.",
    options: ["Socks", "Gloves", "Hat", "Belt"],
    answerIndex: 0,
    explanation: "Kaus kaki (Socks) kita kenakan pada kaki sebelum memakai sepatu (Shoes). Gloves adalah sarung tangan, dan Hat adalah topi."
  },
  {
    id: 204,
    grade: 2,
    topic: "Classroom Tools (Alat Belajar)",
    icon: "fa-eraser",
    question: "We use an ... to clean pencil mistakes on paper.",
    audioText: "We use an eraser to clean pencil mistakes.",
    options: ["Eraser", "Sharpener", "Scissors", "Tape"],
    answerIndex: 0,
    explanation: "Benda yang kita pakai untuk menghapus coretan pensil yang keliru adalah penghapus (Eraser). Sharpener adalah rautan pensil."
  },
  {
    id: 205,
    grade: 2,
    topic: "Adjectives (Kata Sifat)",
    icon: "fa-arrows-up-down",
    question: "An elephant is very ..., but a tiny mouse is small.",
    audioText: "An elephant is big, but a mouse is small.",
    options: ["Thin", "Big", "Short", "Weak"],
    answerIndex: 1,
    explanation: "Gajah memiliki tubuh yang sangat besar (Big), berlawanan dengan tikus yang berukuran kecil (Small)."
  },
  {
    id: 206,
    grade: 2,
    topic: "Rooms in the House (Ruangan Rumah)",
    icon: "fa-utensils",
    question: "Mother is frying fish and boiling soup in the...",
    audioText: "Mother is cooking food in the kitchen.",
    options: ["Bedroom", "Bathroom", "Kitchen", "Garage"],
    answerIndex: 2,
    explanation: "Kegiatan memasak makanan dilakukan di dapur (Kitchen). Bedroom adalah kamar tidur, dan Bathroom adalah kamar mandi."
  },
  {
    id: 207,
    grade: 2,
    topic: "Numbers 11-20 (Angka Belasan)",
    icon: "fa-hashtag",
    question: "What number is the word 'Twelve'?",
    audioText: "Twelve is the number between eleven and thirteen.",
    options: ["20", "11", "12", "2"],
    answerIndex: 2,
    explanation: "Twelve adalah lambang bilangan 12. Angka 11 adalah Eleven, angka 20 adalah Twenty, dan angka 2 adalah Two."
  },
  {
    id: 208,
    grade: 2,
    topic: "Animal Anatomy (Ciri Hewan)",
    icon: "fa-feather",
    question: "A bird can fly freely in the blue sky because it has...",
    audioText: "A bird flies using its wings.",
    options: ["Wings", "Horns", "Fins", "Paws"],
    answerIndex: 0,
    explanation: "Burung dapat terbang karena mempunyai sepasang sayap (Wings). Fins adalah sirip ikan untuk berenang, dan Horns adalah tanduk."
  },
  {
    id: 209,
    grade: 2,
    topic: "Polite Expressions (Kesantunan)",
    icon: "fa-hand-holding-heart",
    question: "When someone gives you a birthday present, you say:",
    audioText: "Thank you for the wonderful present!",
    options: ["I am sorry", "Thank you", "Excuse me", "Never mind"],
    answerIndex: 1,
    explanation: "Ucapan kesantunan yang wajib kita sampaikan saat menerima pertolongan atau hadiah adalah 'Thank you' (Terima kasih)."
  },
  {
    id: 210,
    grade: 2,
    topic: "Toys & Games (Permainan)",
    icon: "fa-wind",
    question: "Children love to fly a colorful ... in the open field when the wind blows.",
    audioText: "Children love to fly a kite in the windy field.",
    options: ["Kite", "Doll", "Puzzle", "Marble"],
    answerIndex: 0,
    explanation: "Mainan dari rangka bambu dan kertas yang diterbangkan dengan benang di lapangan adalah layang-layang (Kite)."
  },

  // =========================================================================
  // KELAS 3 SD - TINGKAT MENENGAH DASAR (Aktivitas Harian, Cuaca, Jam, Preposisi)
  // =========================================================================
  {
    id: 301,
    grade: 3,
    topic: "Weather (Cuaca)",
    icon: "fa-cloud-rain",
    question: "The sky is dark and water is falling from the clouds. Take your...",
    audioText: "It is raining outside, please take your umbrella.",
    options: ["Sunglasses", "Umbrella", "Swimsuit", "Fan"],
    answerIndex: 1,
    explanation: "Saat cuaca hujan (Rainy), bawalah payung (Umbrella) agar pakaianmu tidak basah terkena tetesan air hujan."
  },
  {
    id: 302,
    grade: 3,
    topic: "Transportation (Kendaraan)",
    icon: "fa-bicycle",
    question: "Raka rides his two-wheeled ... every morning to school.",
    audioText: "Raka rides his bicycle to school every morning.",
    options: ["Train", "Bicycle", "Airplane", "Ship"],
    answerIndex: 1,
    explanation: "Kendaraan beroda dua yang dikayuh dengan pedal untuk pergi ke sekolah adalah sepeda (Bicycle)."
  },
  {
    id: 303,
    grade: 3,
    topic: "Prepositions of Place (Letak Posisi)",
    icon: "fa-box",
    question: "The cat is hiding ... the wooden table so the dog cannot see it.",
    audioText: "The cat is hiding under the table.",
    options: ["Under", "Above", "Inside", "Between"],
    answerIndex: 0,
    explanation: "Kucing bersembunyi di bawah (Under) meja. Above artinya di atas tanpa menyentuh, Inside artinya di dalam wadah."
  },
  {
    id: 304,
    grade: 3,
    topic: "School Subjects (Mata Pelajaran)",
    icon: "fa-calculator",
    question: "In this lesson, students learn about counting, plus, minus, and numbers:",
    audioText: "Mathematics is the study of numbers and shapes.",
    options: ["English", "Mathematics", "Music", "Art"],
    answerIndex: 1,
    explanation: "Mata pelajaran yang mengajarkan berhitung, penjumlahan, dan angka adalah Matematika (Mathematics)."
  },
  {
    id: 305,
    grade: 3,
    topic: "Feelings & States (Kondisi Fisik)",
    icon: "fa-bed",
    question: "After playing football under the hot sun, Budi feels ... and wants to sleep.",
    audioText: "After playing football, Budi feels tired and wants to rest.",
    options: ["Angry", "Tired", "Brave", "Proud"],
    answerIndex: 1,
    explanation: "Setelah berolahraga keras, tubuh akan merasa lelah atau letih (Tired) sehingga membutuhkan waktu istirahat."
  },
  {
    id: 306,
    grade: 3,
    topic: "Wild Animals (Hewan Liar)",
    icon: "fa-paw",
    question: "A majestic animal with thick golden fur around its neck known as the king of jungle is the...",
    audioText: "The lion is known as the king of the jungle.",
    options: ["Tiger", "Lion", "Zebra", "Giraffe"],
    answerIndex: 1,
    explanation: "Singa jantan (Lion) dijuluki raja hutan (King of the jungle) dengan surai emas lebat yang mengelilingi kepalanya."
  },
  {
    id: 307,
    grade: 3,
    topic: "Telling Time (Membaca Jam)",
    icon: "fa-clock",
    question: "If someone says 'It is seven o'clock sharp in the morning', the clock shows:",
    audioText: "It is seven o'clock sharp in the morning.",
    options: ["07.00", "07.30", "06.45", "08.15"],
    answerIndex: 0,
    explanation: "Ungkapan 'seven o'clock' menandakan jarum panjang tepat di angka 12, yaitu pukul 07.00 tepat."
  },
  {
    id: 308,
    grade: 3,
    topic: "Hobbies (Kegemaran)",
    icon: "fa-person-swimming",
    question: "Dina likes moving her body through the water at the pool. Her hobby is...",
    audioText: "Dina loves swimming at the pool every Sunday.",
    options: ["Swimming", "Painting", "Dancing", "Gardening"],
    answerIndex: 0,
    explanation: "Kegiatan olahraga di kolam air adalah berenang (Swimming). Painting adalah melukis, dan Dancing adalah menari."
  },
  {
    id: 309,
    grade: 3,
    topic: "Daily Verbs (Kata Kerja Harian)",
    icon: "fa-book-open",
    question: "Dono is sitting quietly in the library. He is ... an interesting storybook.",
    audioText: "Dono is reading an interesting storybook.",
    options: ["Eating", "Reading", "Kicking", "Washing"],
    answerIndex: 1,
    explanation: "Buku cerita dinikmati dengan cara dibaca, maka kata kerja aktif yang tepat adalah 'reading' (sedang membaca)."
  },
  {
    id: 310,
    grade: 3,
    topic: "Time & Calendar (Waktu)",
    icon: "fa-sun",
    question: "How many days are there in one complete week?",
    audioText: "There are seven days in one complete week.",
    options: ["Five days", "Six days", "Seven days", "Twelve days"],
    answerIndex: 2,
    explanation: "Dalam satu minggu utuh ada 7 hari (Seven days): Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday."
  },

  // =========================================================================
  // KELAS 4 SD - TINGKAT PERTENGAHAN (Tense Dasar, Waktu Menit, Kesehatan, Rutinitas)
  // =========================================================================
  {
    id: 401,
    grade: 4,
    topic: "Daily Habits (Kebiasaan Baik)",
    icon: "fa-tooth",
    question: "Sinta always brushes her teeth ... she goes to sleep at night.",
    audioText: "Sinta always brushes her teeth before she goes to sleep.",
    options: ["Before", "After", "While", "During"],
    answerIndex: 0,
    explanation: "Menyikat gigi dilakukan sebelum (Before) tidur malam agar kuman tidak merusak gigi saat kita terlelap."
  },
  {
    id: 402,
    grade: 4,
    topic: "Telling Time (Waktu Setengah Jam)",
    icon: "fa-clock-rotate-left",
    question: "The clock shows the time '08:30'. How do we read it correctly in English?",
    audioText: "It is half past eight in the morning.",
    options: ["Half past eight", "Eight o'clock", "Quarter past eight", "Quarter to nine"],
    answerIndex: 0,
    explanation: "Pukul 08.30 dibaca 'Half past eight' (lewat tiga puluh menit dari jam delapan). Quarter past digunakan untuk lewat 15 menit."
  },
  {
    id: 403,
    grade: 4,
    topic: "Health & Illness (Kesehatan)",
    icon: "fa-stethoscope",
    question: "Beni ate too many extra spicy snacks yesterday. Now his tummy hurts. He has a...",
    audioText: "Beni has a stomachache because he ate spicy snacks.",
    options: ["Toothache", "Stomachache", "Headache", "Cough"],
    answerIndex: 1,
    explanation: "Perut yang terasa sakit akibat makanan pedas disebut 'Stomachache' (sakit perut). Toothache adalah sakit gigi, Headache sakit kepala."
  },
  {
    id: 404,
    grade: 4,
    topic: "House Activities (Kegiatan di Rumah)",
    icon: "fa-couch",
    question: "In our house, the family usually sits on the sofa and watches news together in the...",
    audioText: "Our family watches television together in the living room.",
    options: ["Bathroom", "Living room", "Garage", "Kitchen"],
    answerIndex: 1,
    explanation: "Ruangan berkumpul bersama keluarga untuk menonton televisi dan bersantai adalah ruang keluarga (Living room)."
  },
  {
    id: 405,
    grade: 4,
    topic: "Auxiliary Verbs (Do / Does)",
    icon: "fa-circle-question",
    question: "Rian asks: 'Do you like playing basketball?' - Fajar answers: 'Yes, I...'",
    audioText: "Yes, I do. I love basketball!",
    options: ["Am", "Do", "Does", "Like"],
    answerIndex: 1,
    explanation: "Pertanyaan Yes/No yang diawali kata bantu 'Do you...' dijawab dengan pasangan yang selaras: 'Yes, I do' atau 'No, I don't'."
  },
  {
    id: 406,
    grade: 4,
    topic: "Quantifiers (Satuan Benda Cair)",
    icon: "fa-glass-water",
    question: "I am thirsty after running. May I have a ... of cool water, please?",
    audioText: "May I have a glass of water, please?",
    options: ["Slice", "Glass", "Bunch", "Loaf"],
    answerIndex: 1,
    explanation: "Air minum dalam wadah cangkir/gelas menggunakan satuan 'a glass of water' (segelas air). Slice untuk sepotong roti/kue."
  },
  {
    id: 407,
    grade: 4,
    topic: "Prepositions (Posisi Antara Dua Tempat)",
    icon: "fa-location-dot",
    question: "The school library stands ... the computer lab and the science room.",
    audioText: "The library is between the computer lab and the science room.",
    options: ["Between", "Under", "Behind", "Inside"],
    answerIndex: 0,
    explanation: "Kata 'Between' digunakan untuk menunjukkan posisi suatu objek yang berada di tengah-tengah antara dua tempat/benda."
  },
  {
    id: 408,
    grade: 4,
    topic: "Weather Conditions (Cuaca Berangin & Badai)",
    icon: "fa-bolt",
    question: "Dark clouds fill the sky, thunder rumbles loudly, and lightning flashes. The weather is...",
    audioText: "Dark clouds and thunder mean it is stormy outside.",
    options: ["Windy", "Stormy", "Sunny", "Snowy"],
    answerIndex: 1,
    explanation: "Cuaca dengan awan gelap pekat disertai petir menyambar dan guntur dinamakan badai (Stormy). Sunny artinya cerah berawan."
  },
  {
    id: 409,
    grade: 4,
    topic: "Adverbs of Frequency (Tingkat Keseringan)",
    icon: "fa-award",
    question: "Toni is very disciplined and respectful. He ... arrives late to his morning class.",
    audioText: "Toni never arrives late to his class.",
    options: ["Always", "Never", "Usually", "Often"],
    answerIndex: 1,
    explanation: "Siswa yang disiplin tidak pernah datang terlambat, sehingga kata keterangan keseringan yang tepat adalah 'Never' (tidak pernah)."
  },
  {
    id: 410,
    grade: 4,
    topic: "Simple Present Tense (Orang Ketiga)",
    icon: "fa-bread-slice",
    question: "Complete the sentence: 'She ... healthy oatmeal for breakfast every morning.'",
    audioText: "She has healthy oatmeal for breakfast every morning.",
    options: ["Have", "Has", "Having", "Had"],
    answerIndex: 1,
    explanation: "Untuk subjek tunggal orang ketiga (She, He, It) pada kalimat Simple Present Tense, kata kerja kepemilikan/makan yang digunakan adalah 'has'."
  },

  // =========================================================================
  // KELAS 5 SD - TINGKAT MAHIR DASAR (Profesi, Perbandingan, Lampau, Arah, Rasa)
  // =========================================================================
  {
    id: 501,
    grade: 5,
    topic: "Professions & Jobs (Profesi)",
    icon: "fa-plane-departure",
    question: "A trained professional who operates an aircraft and flies passengers safely is a...",
    audioText: "A pilot flies airplanes across the sky.",
    options: ["Sailor", "Pilot", "Mechanic", "Carpenter"],
    answerIndex: 1,
    explanation: "Orang yang mengemudikan pesawat terbang dan membawa penumpang di udara adalah Pilot. Sailor adalah pelaut, Mechanic adalah montir mesin."
  },
  {
    id: 502,
    grade: 5,
    topic: "Comparative Degrees (Tingkat Perbandingan)",
    icon: "fa-bolt-lightning",
    question: "A modern bullet train travels much ... than a regular city bus.",
    audioText: "A bullet train travels much faster than a city bus.",
    options: ["Fast", "Faster", "Fastest", "More fast"],
    answerIndex: 1,
    explanation: "Untuk membandingkan dua benda dengan kata sifat bersuku kata satu (fast), kita menambahkan akhiran '-er than', menjadi 'faster than' (lebih cepat daripada)."
  },
  {
    id: 503,
    grade: 5,
    topic: "Simple Past Tense (Bentuk Lampau)",
    icon: "fa-landmark",
    question: "Alfi: 'Where did you go yesterday?' - Maya: 'I ... to the city museum with my cousin.'",
    audioText: "I went to the city museum yesterday.",
    options: ["Go", "Goes", "Went", "Going"],
    answerIndex: 2,
    explanation: "Karena peristiwa terjadi pada waktu lampau (yesterday), kata kerja pertama 'go' berubah menjadi kata kerja bentuk kedua (V2), yaitu 'went'."
  },
  {
    id: 504,
    grade: 5,
    topic: "Taste & Flavors (Cita Rasa Makanan)",
    icon: "fa-lemon",
    question: "Fresh yellow lemons and young green mangoes have a very ... taste.",
    audioText: "Lemons and unripe mangoes taste very sour.",
    options: ["Sweet", "Sour", "Salty", "Spicy"],
    answerIndex: 1,
    explanation: "Buah lemon segar dan mangga muda memiliki rasa yang masam atau asam (Sour). Sweet adalah rasa manis, dan Salty adalah rasa asin."
  },
  {
    id: 505,
    grade: 5,
    topic: "Giving Directions (Petunjuk Jalan)",
    icon: "fa-signs-post",
    question: "To reach the public library, walk straight on this avenue, then ... at the green bank.",
    audioText: "Walk straight and turn left at the corner.",
    options: ["Turn left", "Wake up", "Jump high", "Sit down"],
    answerIndex: 0,
    explanation: "Petunjuk arah bernavigasi menggunakan frasa arah seperti 'Turn left' (belok ke kiri) atau 'Turn right' (belok ke kanan)."
  },
  {
    id: 506,
    grade: 5,
    topic: "Animal Science (Golongan Makanan Hewan)",
    icon: "fa-seedling",
    question: "Animals such as horses, cows, and rabbits feed only on plants. They are called...",
    audioText: "Herbivores are animals that only eat plants.",
    options: ["Carnivores", "Herbivores", "Omnivores", "Predators"],
    answerIndex: 1,
    explanation: "Hewan pemakan rumput dan daun-tumbuhan digolongkan sebagai Herbivora (Herbivores). Carnivores adalah pemakan daging."
  },
  {
    id: 507,
    grade: 5,
    topic: "Asking for Help (Meminta Bantuan Santun)",
    icon: "fa-handshake",
    question: "Excuse me sir, ... you please help me find the teacher's office?",
    audioText: "Could you please help me find the teacher's office?",
    options: ["Must", "Could", "Shall", "Did"],
    answerIndex: 1,
    explanation: "Kata modal 'Could' digunakan untuk menyampaikan permintaan tolong secara halus, santun, dan menghormati lawan bicara."
  },
  {
    id: 508,
    grade: 5,
    topic: "Public Places (Fasilitas Umum)",
    icon: "fa-train-subway",
    question: "Passengers wait on the platform and purchase tickets for the locomotive at the railway...",
    audioText: "Passengers board the train at the railway station.",
    options: ["Airport", "Station", "Harbor", "Clinic"],
    answerIndex: 1,
    explanation: "Tempat pemberhentian kereta api dan naik-turunnya para penumpang adalah stasiun kereta api (Railway station). Airport untuk bandara pesawat."
  },
  {
    id: 509,
    grade: 5,
    topic: "Conjunctions (Kata Sambung Kontras)",
    icon: "fa-shuffle",
    question: "Danu wanted to play badminton outdoors, ... the sudden heavy rain stopped him.",
    audioText: "Danu wanted to play outside, but it started to rain heavily.",
    options: ["And", "But", "Because", "Or"],
    answerIndex: 1,
    explanation: "Kata sambung 'But' (tetapi) berfungsi merangkaikan dua peristiwa yang berlawanan atau terdapat kendala yang tak terduga."
  },
  {
    id: 510,
    grade: 5,
    topic: "Units of Measurement (Satuan Berat)",
    icon: "fa-scale-balanced",
    question: "Mother bought a large sack of brown sugar at the grocery store. It weighs five...",
    audioText: "The sack of sugar weighs five kilograms.",
    options: ["Liters", "Kilograms", "Meters", "Hours"],
    answerIndex: 1,
    explanation: "Satuan untuk menimbang bobot benda padat seperti gula dan beras adalah kilogram (Kilograms). Liter digunakan untuk mengukur volume cairan."
  },

  // =========================================================================
  // KELAS 6 SD - TINGKAT TERATAS (Masa Depan, Superlatif, W-H Questions, Teks)
  // =========================================================================
  {
    id: 601,
    grade: 6,
    topic: "Future Plans (Rencana Masa Depan)",
    icon: "fa-compass",
    question: "During the upcoming semester break, our family is ... to visit the national monument.",
    audioText: "Our family is going to visit the national monument.",
    options: ["Go", "Goes", "Going", "Gone"],
    answerIndex: 2,
    explanation: "Struktur kalimat untuk menyatakan rencana pasti di waktu mendatang (Future plan) adalah 'be + going to + verb', sehingga bentuk yang tepat adalah 'going'."
  },
  {
    id: 602,
    grade: 6,
    topic: "Superlative Degree (Tingkat Paling)",
    icon: "fa-mountain",
    question: "Mount Everest rises above all other peaks. It is the ... mountain in the entire world.",
    audioText: "Mount Everest is the highest mountain in the world.",
    options: ["High", "Higher", "Highest", "Most high"],
    answerIndex: 2,
    explanation: "Tingkat paling tinggi (Superlative) dari kata sifat pendek 'high' ditambahkan awalan 'the' dan akhiran '-est', menjadi 'the highest'."
  },
  {
    id: 603,
    grade: 6,
    topic: "WH-Questions (Kata Tanya Subjek)",
    icon: "fa-circle-question",
    question: "Q: '... is knocking gently on our front wooden door?' - A: 'It is Uncle Danang.'",
    audioText: "Who is knocking gently on our front door?",
    options: ["What", "Who", "Where", "When"],
    answerIndex: 1,
    explanation: "Kata tanya yang digunakan untuk menanyakan identitas orang atau seseorang (Uncle Danang) adalah 'Who' (Siapa)."
  },
  {
    id: 604,
    grade: 6,
    topic: "Environment Care (Menjaga Lingkungan)",
    icon: "fa-earth-americas",
    question: "Students should plant fresh trees, recycle paper, and conserve clean water to ... our earth.",
    audioText: "We should plant trees to protect our earth.",
    options: ["Destroy", "Protect", "Pollute", "Ignore"],
    answerIndex: 1,
    explanation: "Menanam pohon dan mendaur ulang sampah bertujuan untuk melindungi serta merawat kelestarian bumi (Protect our earth)."
  },
  {
    id: 605,
    grade: 6,
    topic: "Expressions of Congratulation (Ucapan Selamat)",
    icon: "fa-trophy",
    question: "Rian won first place in the speech contest! What should his classmates say to him?",
    audioText: "Congratulations on winning first place!",
    options: ["Good luck", "Congratulations", "I am sorry", "Pardon me"],
    answerIndex: 1,
    explanation: "Ucapan penghargaan atas prestasi membanggakan yang diraih seorang teman adalah 'Congratulations' (Selamat atas keberhasilanmu)."
  },
  {
    id: 606,
    grade: 6,
    topic: "School Rules (Tata Tertib Sekolah)",
    icon: "fa-book-bookmark",
    question: "The reading hall sign says: 'All readers must remain ... so others can concentrate.'",
    audioText: "All readers must remain quiet in the reading hall.",
    options: ["Noisy", "Quiet", "Careless", "Crowded"],
    answerIndex: 1,
    explanation: "Di dalam ruang baca perpustakaan, semua siswa diwajibkan untuk tetap tenang dan hening (Quiet) agar tidak mengganggu pembaca lain."
  },
  {
    id: 607,
    grade: 6,
    topic: "Cause and Effect (Sebab Akibat)",
    icon: "fa-link",
    question: "Edo had to stay resting in bed all day ... he caught a high fever.",
    audioText: "Edo stayed in bed because he caught a high fever.",
    options: ["Although", "Because", "Unless", "So that"],
    answerIndex: 1,
    explanation: "Kata sambung 'Because' (karena) digunakan untuk menerangkan alasan atau penyebab timbulnya suatu kondisi."
  },
  {
    id: 608,
    grade: 6,
    topic: "Healthy Lifestyle (Gaya Hidup Sehat)",
    icon: "fa-heart-pulse",
    question: "To keep our heart strong and mind sharp, we need balanced nutritious food and regular...",
    audioText: "We need nutritious food and regular exercise to stay fit.",
    options: ["Exercise", "Video games", "Snacking", "Daydreaming"],
    answerIndex: 0,
    explanation: "Menjaga kebugaran jasmani membutuhkan asupan gizi seimbang serta berolahraga secara teratur (regular exercise)."
  },
  {
    id: 609,
    grade: 6,
    topic: "Good Character Traits (Sifat Terpuji)",
    icon: "fa-shield-halved",
    question: "Budi found a lost wallet full of money and immediately returned it to the teacher. Budi is very...",
    audioText: "Budi returned the lost wallet because he is honest.",
    options: ["Greedy", "Honest", "Selfish", "Lazy"],
    answerIndex: 1,
    explanation: "Perilaku mengembalikan barang berharga yang bukan miliknya kepada pihak berwenang mencerminkan sifat terpuji dan jujur (Honest)."
  },
  {
    id: 610,
    grade: 6,
    topic: "Past Tense Grammar (Tata Bahasa Lampau)",
    icon: "fa-spell-check",
    question: "Which of the following sentences has the correct English grammar for a past event?",
    audioText: "She went to the traditional market yesterday.",
    options: [
      "She go to the traditional market yesterday.",
      "She went to the traditional market yesterday.",
      "She going to the traditional market yesterday.",
      "She is went to the traditional market yesterday."
    ],
    answerIndex: 1,
    explanation: "Keterangan waktu lampau 'yesterday' mewajibkan pemakaian kata kerja bentuk kedua (Past Simple: went) tanpa kata kerja bantu to-be tambahan."
  }
];

// Metadata Rincian Tiap Jenjang Kelas untuk Tampilan Dashboard
const GradeMetadata = [
  {
    grade: 1,
    title: "Kelas 1 SD",
    themeName: "First Steps English",
    badgeLabel: "Pemula Ceria",
    icon: "fa-shapes",
    color: "#F59E0B",
    description: "Mengenal warna, angka 1-10, hewan peliharaan, sapaan pagi, dan anggota tubuh dasar."
  },
  {
    grade: 2,
    title: "Kelas 2 SD",
    themeName: "Explorer Words",
    badgeLabel: "Petualang Kata",
    icon: "fa-compass",
    color: "#0284C7",
    description: "Mengenal hari dalam seminggu, makanan, pakaian, perabot rumah, dan angka belasan."
  },
  {
    grade: 3,
    title: "Kelas 3 SD",
    themeName: "Daily Adventure",
    badgeLabel: "Dunia Sekitar",
    icon: "fa-bicycle",
    color: "#10B981",
    description: "Mengenal cuaca, transportasi, jam dasar, hobi, dan preposisi posisi benda."
  },
  {
    grade: 4,
    title: "Kelas 4 SD",
    themeName: "Grammar & Habit",
    badgeLabel: "Kalimat Percakapan",
    icon: "fa-book-bookmark",
    color: "#8B5CF6",
    description: "Mempelajari jam menit, Simple Present Tense, istilah kesehatan, dan rutinitas harian."
  },
  {
    grade: 5,
    title: "Kelas 5 SD",
    themeName: "Discovery & Skills",
    badgeLabel: "Kosa Kata Lanjutan",
    icon: "fa-magnifying-glass",
    color: "#EC4899",
    description: "Mempelajari nama profesi, perbandingan kata sifat, bentuk waktu lampau, dan arah."
  },
  {
    grade: 6,
    title: "Kelas 6 SD",
    themeName: "Champion Master",
    badgeLabel: "Juara Bahasa",
    icon: "fa-graduation-cap",
    color: "#F97316",
    description: "Mempelajari rencana masa depan, kalimat tanya WH, superlatif, dan pemahaman paragraf."
  }
];

