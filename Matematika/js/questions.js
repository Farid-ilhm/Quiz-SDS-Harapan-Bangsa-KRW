/**
 * Bank Soal Matematika SD Kelas 1 sampai 6
 * Masing-masing kelas terdiri dari 10 soal kurikulum sekolah dasar.
 * Dilengkapi dengan pilihan ganda yang proporsional, kunci jawaban,
 * serta pembahasan koreksi langkah demi langkah yang ramah anak.
 */

const MathQuestionsData = {
  1: {
    gradeName: "Kelas 1 SD",
    gradeBadge: "Tingkat Pemula",
    gradeIcon: "seedling",
    themeColor: "#FEF08A",
    borderColor: "#EAB308",
    description: "Mengenal angka, penjumlahan & pengurangan 1-20, bentuk geometri, dan pola bilangan sederhana.",
    questions: [
      {
        id: 1,
        topic: "Penjumlahan Gambar & Benda",
        question: "Di atas meja ada 4 buah apel merah dan 3 buah apel hijau. Berapa jumlah seluruh apel di atas meja?",
        options: [
          "6 buah apel",
          "7 buah apel",
          "8 buah apel",
          "9 buah apel"
        ],
        correctIndex: 1,
        explanation: "Cara menghitung: 4 apel ditambah 3 apel. Kita hitung maju: 4... 5, 6, 7. Jadi total seluruh apel adalah 7 buah."
      },
      {
        id: 2,
        topic: "Pengurangan Dasar",
        question: "Deni membawa 8 permen ke sekolah. Saat istirahat, Deni memakan 3 permen. Berapa sisa permen Deni sekarang?",
        options: [
          "4 permen",
          "5 permen",
          "6 permen",
          "11 permen"
        ],
        correctIndex: 1,
        explanation: "Cara menghitung: 8 dikurangi 3. Hitung mundur dari 8 sebanyak 3 langkah: 7, 6, 5. Jadi sisa permen Deni adalah 5 permen."
      },
      {
        id: 3,
        topic: "Mengenal Bangun Datar",
        question: "Benda seperti roda sepeda, uang koin, dan piring makan memiliki bentuk bangun datar apa?",
        options: [
          "Segitiga",
          "Persegi",
          "Lingkaran",
          "Persegi panjang"
        ],
        correctIndex: 2,
        explanation: "Roda sepeda dan uang koin memiliki permukaan bulat melingkar tanpa sudut, bangun datar ini dinamakan lingkaran."
      },
      {
        id: 4,
        topic: "Urutan Bilangan",
        question: "Perhatikan deret angka berikut: 12, 13, ..., 15, 16. Angka yang tepat untuk mengisi titik-titik adalah?",
        options: [
          "11",
          "14",
          "17",
          "18"
        ],
        correctIndex: 1,
        explanation: "Urutan angka naik satu demi satu: setelah angka 13 dan sebelum angka 15 adalah angka 14."
      },
      {
        id: 5,
        topic: "Penjumlahan Belasan",
        question: "Berapakah hasil dari penjumlahan 10 + 6?",
        options: [
          "14",
          "15",
          "16",
          "17"
        ],
        correctIndex: 2,
        explanation: "1 puluhan (10) ditambah 6 satuan (6) menjadi 16 (enam belas)."
      },
      {
        id: 6,
        topic: "Pengurangan Belasan",
        question: "Ibu membeli 15 butir telur. Ibu menggunakan 5 butir untuk membuat kue bolu. Berapa sisa telur Ibu?",
        options: [
          "8 butir",
          "9 butir",
          "10 butir",
          "12 butir"
        ],
        correctIndex: 2,
        explanation: "Cara menghitung: 15 - 5 = 10. Angka satuan 5 dikurangi 5 menjadi 0, sehingga tersisa 10 butir telur."
      },
      {
        id: 7,
        topic: "Membandingkan Jumlah",
        question: "Rani mempunyai 9 buah pensil warna, sedangkan Sinta mempunyai 12 buah pensil warna. Pernyataan yang benar adalah?",
        options: [
          "Pensil Rani lebih banyak dari pensil Sinta",
          "Pensil Rani sama banyak dengan pensil Sinta",
          "Pensil Sinta lebih banyak dari pensil Rani",
          "Pensil Sinta lebih sedikit dari pensil Rani"
        ],
        correctIndex: 2,
        explanation: "Angka 12 lebih besar daripada angka 9. Maka pensil milik Sinta lebih banyak dibandingkan milik Rani."
      },
      {
        id: 8,
        topic: "Pola Bilangan Loncat",
        question: "Ayo perhatikan pola loncat 2 berikut: 2, 4, 6, ..., 10. Angka berapa yang melengkapi pola tersebut?",
        options: [
          "7",
          "8",
          "9",
          "11"
        ],
        correctIndex: 1,
        explanation: "Pola ini bertambah 2 setiap langkah: 2 (+2) = 4, 4 (+2) = 6, 6 (+2) = 8, 8 (+2) = 10. Jadi angka yang tepat adalah 8."
      },
      {
        id: 9,
        topic: "Bangun Datar Sederhana",
        question: "Bangun datar yang memiliki 3 buah sisi lurus dan 3 buah sudut lancip dinamakan?",
        options: [
          "Persegi",
          "Lingkaran",
          "Segitiga",
          "Oval"
        ],
        correctIndex: 2,
        explanation: "Segitiga adalah bangun datar yang memiliki tepat 3 sisi dan 3 titik sudut."
      },
      {
        id: 10,
        topic: "Soal Cerita Penjumlahan",
        question: "Di kolam ada 7 ekor ikan berenang. Paman memasukkan lagi 5 ekor ikan baru. Berapa total ikan di kolam sekarang?",
        options: [
          "10 ekor",
          "11 ekor",
          "12 ekor",
          "13 ekor"
        ],
        correctIndex: 2,
        explanation: "Cara hitung: 7 + 5. Hitung maju dari 7 sebanyak 5: 8, 9, 10, 11, 12. Jadi total ikan sekarang ada 12 ekor."
      }
    ]
  },

  2: {
    gradeName: "Kelas 2 SD",
    gradeBadge: "Tingkat Dasar",
    gradeIcon: "abacus",
    themeColor: "#BAE6FD",
    borderColor: "#0284C7",
    description: "Nilai tempat ratusan, penjumlahan/pengurangan bersusun, konsep perkalian awal, dan membaca waktu.",
    questions: [
      {
        id: 1,
        topic: "Nilai Tempat Bilangan",
        question: "Pada bilangan 275, angka 7 menempati nilai tempat apa?",
        options: [
          "Satuan",
          "Puluhan",
          "Ratusan",
          "Ribuan"
        ],
        correctIndex: 1,
        explanation: "Pada bilangan 275: angka 2 adalah Ratusan (200), angka 7 adalah Puluhan (70), dan angka 5 adalah Satuan (5)."
      },
      {
        id: 2,
        topic: "Penjumlahan Bersusun",
        question: "Berapakah hasil dari penjumlahan 34 + 25?",
        options: [
          "58",
          "59",
          "60",
          "69"
        ],
        correctIndex: 1,
        explanation: "Jumlahkan satuan terlebih dahulu: 4 + 5 = 9. Lalu jumlahkan puluhan: 3 + 2 = 5. Hasil akhirnya adalah 59."
      },
      {
        id: 3,
        topic: "Pengurangan Bersusun",
        question: "Berapakah hasil dari pengurangan 58 - 23?",
        options: [
          "25",
          "31",
          "35",
          "45"
        ],
        correctIndex: 2,
        explanation: "Kurangkan satuan: 8 - 3 = 5. Kurangkan puluhan: 5 - 2 = 3. Hasil akhirnya adalah 35."
      },
      {
        id: 4,
        topic: "Konsep Perkalian",
        question: "Bentuk penjumlahan berulang 4 + 4 + 4 sama artinya dengan perkalian berapa?",
        options: [
          "3 x 4",
          "4 x 4",
          "3 x 3",
          "4 + 3"
        ],
        correctIndex: 0,
        explanation: "Angka 4 dijumlahkan sebanyak 3 kali, sehingga ditulis menjadi 3 x 4 (tiga kali empat), hasilnya adalah 12."
      },
      {
        id: 5,
        topic: "Penjumlahan dengan Menyimpan",
        question: "Berapakah hasil dari penjumlahan 28 + 17?",
        options: [
          "35",
          "44",
          "45",
          "55"
        ],
        correctIndex: 2,
        explanation: "Jumlahkan satuan: 8 + 7 = 15 (tulis 5, simpan 1). Jumlahkan puluhan: 1 (simpanan) + 2 + 1 = 4. Hasilnya adalah 45."
      },
      {
        id: 6,
        topic: "Pengurangan dengan Meminjam",
        question: "Berapakah hasil dari pengurangan 52 - 18?",
        options: [
          "34",
          "36",
          "44",
          "46"
        ],
        correctIndex: 0,
        explanation: "Satuan 2 tidak bisa dikurangi 8, pinjam 1 puluhan dari 5 (menjadi 12): 12 - 8 = 4. Puluhan sisa 4 dikurangi 1 = 3. Hasilnya 34."
      },
      {
        id: 7,
        topic: "Membaca Jam",
        question: "Jarum pendek menunjuk tepat ke angka 4, dan jarum panjang menunjuk tepat ke angka 12. Jam berapa saat itu?",
        options: [
          "Pukul 12.04",
          "Pukul 04.00",
          "Pukul 04.12",
          "Pukul 01.20"
        ],
        correctIndex: 1,
        explanation: "Jarum pendek menunjukkan jam dan jarum panjang di angka 12 menunjukkan menit ke-00. Jadi waktu tersebut adalah pukul 04.00."
      },
      {
        id: 8,
        topic: "Pengukuran Berat",
        question: "Ibu membeli gula pasir seberat 1 kilogram di warung. 1 kilogram sama dengan berapa gram?",
        options: [
          "10 gram",
          "100 gram",
          "1.000 gram",
          "10.000 gram"
        ],
        correctIndex: 2,
        explanation: "Satuan baku berat: 1 kilogram (kg) setara dengan 1.000 gram (g)."
      },
      {
        id: 9,
        topic: "Ciri Bangun Datar",
        question: "Sebuah bangun datar memiliki 4 sisi yang sama panjang dan 4 sudut siku-siku. Bangun tersebut adalah?",
        options: [
          "Persegi",
          "Segitiga",
          "Lingkaran",
          "Trapesium"
        ],
        correctIndex: 0,
        explanation: "Bangun dengan 4 sisi yang semuanya sama panjang dan memiliki 4 sudut siku-siku adalah persegi (bujur sangkar)."
      },
      {
        id: 10,
        topic: "Soal Cerita Pengurangan",
        question: "Pak Budi memetik 45 buah mangga dari pohon. Sebanyak 12 buah mangga dibagikan ke tetangga. Berapa sisa mangga Pak Budi?",
        options: [
          "23 buah",
          "32 buah",
          "33 buah",
          "57 buah"
        ],
        correctIndex: 2,
        explanation: "Kurangkan jumlah awal dengan yang dibagikan: 45 - 12 = 33 buah mangga tersisa."
      }
    ]
  },

  3: {
    gradeName: "Kelas 3 SD",
    gradeBadge: "Tingkat Terampil",
    gradeIcon: "ruler",
    themeColor: "#FED7AA",
    borderColor: "#EA580C",
    description: "Perkalian & pembagian dasar, pecahan sederhana, keliling bangun datar, dan konversi satuan waktu/panjang.",
    questions: [
      {
        id: 1,
        topic: "Perkalian Dasar",
        question: "Berapakah hasil dari perkalian 7 x 8?",
        options: [
          "48",
          "54",
          "56",
          "64"
        ],
        correctIndex: 2,
        explanation: "7 dikalikan 8 sama dengan 56. (Dapat dihitung dengan 7 x 7 = 49, ditambah 7 = 56)."
      },
      {
        id: 2,
        topic: "Pembagian Dasar",
        question: "Berapakah hasil dari pembagian 54 : 6?",
        options: [
          "7",
          "8",
          "9",
          "11"
        ],
        correctIndex: 2,
        explanation: "Pembagian adalah kebalikan dari perkalian. Karena 9 x 6 = 54, maka 54 dibagi 6 hasilnya adalah 9."
      },
      {
        id: 3,
        topic: "Operasi Hitung Campuran",
        question: "Berapakah hasil dari (6 x 5) + 18?",
        options: [
          "38",
          "48",
          "52",
          "68"
        ],
        correctIndex: 1,
        explanation: "Hitung terlebih dahulu yang ada di dalam kurung: 6 x 5 = 30. Lalu tambahkan dengan 18: 30 + 18 = 48."
      },
      {
        id: 4,
        topic: "Pecahan Sederhana",
        question: "Sebuah semangka dibelah menjadi 4 bagian sama besar. Bayu memakan 1 bagian. Nilai pecahan dari bagian yang dimakan Bayu adalah?",
        options: [
          "1/2",
          "1/3",
          "1/4",
          "4/1"
        ],
        correctIndex: 2,
        explanation: "1 bagian dari total 4 potongan sama besar ditulis dalam bentuk pecahan sebagai 1/4 (satu per empat)."
      },
      {
        id: 5,
        topic: "Sifat Pertukaran (Komutatif)",
        question: "Pada sifat pertukaran perkalian: 8 x 4 = ... x 8. Angka yang tepat untuk melengkapi adalah?",
        options: [
          "2",
          "4",
          "8",
          "32"
        ],
        correctIndex: 1,
        explanation: "Sifat pertukaran perkalian menyatakan a x b = b x a. Maka 8 x 4 = 4 x 8, yang keduanya bernilai 32."
      },
      {
        id: 6,
        topic: "Keliling Persegi",
        question: "Sebuah papan catur berbentuk persegi memiliki panjang sisi 6 cm. Berapakah keliling papan catur tersebut?",
        options: [
          "12 cm",
          "18 cm",
          "24 cm",
          "36 cm"
        ],
        correctIndex: 2,
        explanation: "Rumus keliling persegi adalah 4 x sisi. Keliling = 4 x 6 cm = 24 cm."
      },
      {
        id: 7,
        topic: "Konversi Satuan Waktu",
        question: "Riko belajar di sekolah selama 2 jam. 2 jam tersebut sama dengan berapa menit?",
        options: [
          "60 menit",
          "90 menit",
          "120 menit",
          "180 menit"
        ],
        correctIndex: 2,
        explanation: "1 jam terdiri dari 60 menit. Maka 2 jam = 2 x 60 menit = 120 menit."
      },
      {
        id: 8,
        topic: "Konversi Satuan Panjang",
        question: "Panjang sebuah pita adalah 3 meter. Jika diubah ke dalam satuan centimeter (cm), panjang pita adalah?",
        options: [
          "30 cm",
          "300 cm",
          "3.000 cm",
          "30.000 cm"
        ],
        correctIndex: 1,
        explanation: "Setiap 1 meter sama dengan 100 centimeter. Maka 3 meter = 3 x 100 = 300 cm."
      },
      {
        id: 9,
        topic: "Penjumlahan Pecahan Sejenis",
        question: "Berapakah hasil dari penjumlahan pecahan 2/7 + 3/7?",
        options: [
          "5/14",
          "5/7",
          "6/7",
          "1/7"
        ],
        correctIndex: 1,
        explanation: "Karena penyebutnya sudah sama (yaitu 7), kita cukup menjumlahkan pembilangnya: 2 + 3 = 5. Hasilnya adalah 5/7."
      },
      {
        id: 10,
        topic: "Soal Cerita Pembagian",
        question: "Tante membuat 36 kue donat dan menaruhnya ke dalam 4 kotak sama banyak. Berapa isi kue donat pada tiap kotak?",
        options: [
          "7 buah",
          "8 buah",
          "9 buah",
          "12 buah"
        ],
        correctIndex: 2,
        explanation: "Bagikan total donat dengan jumlah kotak: 36 : 4 = 9 buah donat di setiap kotak."
      }
    ]
  },

  4: {
    gradeName: "Kelas 4 SD",
    gradeBadge: "Tingkat Menengah",
    gradeIcon: "shapes",
    themeColor: "#FDE047",
    borderColor: "#CA8A04",
    description: "KPK & FPB, pecahan senilai & desimal, keliling dan luas bangun datar, jenis sudut, dan pembulatan.",
    questions: [
      {
        id: 1,
        topic: "Pembagian Porogapit",
        question: "Berapakah hasil dari pembagian 168 : 6?",
        options: [
          "26",
          "28",
          "32",
          "38"
        ],
        correctIndex: 1,
        explanation: "16 dibagi 6 dapat 2 sisa 4. Gabungkan dengan 8 menjadi 48. 48 dibagi 6 dapat 8. Jadi hasil baginya adalah 28."
      },
      {
        id: 2,
        topic: "Kelipatan Persekutuan Terkecil (KPK)",
        question: "Berapakah Kelipatan Persekutuan Terkecil (KPK) dari bilangan 4 dan 6?",
        options: [
          "8",
          "12",
          "16",
          "24"
        ],
        correctIndex: 1,
        explanation: "Kelipatan 4: 4, 8, 12, 16, 20... Kelipatan 6: 6, 12, 18, 24... Kelipatan sama yang paling kecil adalah 12."
      },
      {
        id: 3,
        topic: "Faktor Persekutuan Terbesar (FPB)",
        question: "Berapakah Faktor Persekutuan Terbesar (FPB) dari bilangan 12 dan 18?",
        options: [
          "2",
          "3",
          "6",
          "12"
        ],
        correctIndex: 2,
        explanation: "Faktor 12: 1, 2, 3, 4, 6, 12. Faktor 18: 1, 2, 3, 6, 9, 18. Faktor terbesar yang sama adalah 6."
      },
      {
        id: 4,
        topic: "Pecahan Senilai",
        question: "Pecahan berikut yang nilainya sama (senilai) dengan 2/3 adalah?",
        options: [
          "4/9",
          "6/9",
          "4/5",
          "6/12"
        ],
        correctIndex: 1,
        explanation: "Kalikan pembilang dan penyebut dengan angka yang sama (dikali 3): 2 x 3 = 6, 3 x 3 = 9. Maka 2/3 senilai dengan 6/9."
      },
      {
        id: 5,
        topic: "Mengubah Pecahan ke Desimal",
        question: "Bentuk desimal dari pecahan 3/4 adalah?",
        options: [
          "0,25",
          "0,50",
          "0,75",
          "0,80"
        ],
        correctIndex: 2,
        explanation: "3 dibagi 4 = 0,75. Atau kalikan penyebut agar jadi 100: (3 x 25) / (4 x 25) = 75/100 = 0,75."
      },
      {
        id: 6,
        topic: "Luas Persegi Panjang",
        question: "Sebuah buku gambar memiliki panjang 15 cm dan lebar 10 cm. Berapakah luas permukaan buku gambar tersebut?",
        options: [
          "50 cm²",
          "100 cm²",
          "150 cm²",
          "250 cm²"
        ],
        correctIndex: 2,
        explanation: "Rumus luas persegi panjang = panjang x lebar. Luas = 15 cm x 10 cm = 150 cm²."
      },
      {
        id: 7,
        topic: "Keliling Segitiga Sama Sisi",
        question: "Sebuah segitiga sama sisi memiliki panjang sisi 9 cm. Berapakah keliling segitiga tersebut?",
        options: [
          "18 cm",
          "24 cm",
          "27 cm",
          "36 cm"
        ],
        correctIndex: 2,
        explanation: "Segitiga sama sisi memiliki 3 sisi yang sama panjang. Keliling = sisi + sisi + sisi = 3 x 9 cm = 27 cm."
      },
      {
        id: 8,
        topic: "Pembulatan Bilangan",
        question: "Bilangan 86 jika dibulatkan ke puluhan terdekat menjadi?",
        options: [
          "80",
          "85",
          "90",
          "100"
        ],
        correctIndex: 2,
        explanation: "Angka satuannya adalah 6. Karena 6 lebih besar atau sama dengan 5, maka dibulatkan ke atas menjadi 90."
      },
      {
        id: 9,
        topic: "Mengenal Jenis Sudut",
        question: "Sudut yang besarnya tepat 90 derajat dinamakan sebagai sudut apa?",
        options: [
          "Sudut Lancip",
          "Sudut Siku-siku",
          "Sudut Tumpul",
          "Sudut Lurus"
        ],
        correctIndex: 1,
        explanation: "Sudut siku-siku adalah sudut yang besarnya tepat 90°. Sudut lancip kurang dari 90°, sedangkan sudut tumpul lebih dari 90°."
      },
      {
        id: 10,
        topic: "Aplikasi FPB pada Soal Cerita",
        question: "Ibu memiliki 20 kue sus dan 30 kue lapis. Kue tersebut akan dimasukkan ke dalam beberapa piring dengan jumlah sama rata. Berapa jumlah piring terbanyak yang dibutuhkan Ibu?",
        options: [
          "5 piring",
          "6 piring",
          "10 piring",
          "15 piring"
        ],
        correctIndex: 2,
        explanation: "Mencari piring terbanyak sama dengan mencari FPB dari 20 dan 30. FPB dari 20 dan 30 adalah 10 piring."
      }
    ]
  },

  5: {
    gradeName: "Kelas 5 SD",
    gradeBadge: "Tingkat Unggul",
    gradeIcon: "cube",
    themeColor: "#DDD6FE",
    borderColor: "#7C3AED",
    description: "Operasi pecahan beda penyebut, volume kubus/balok, perbandingan & skala peta, kecepatan, dan statistika awal.",
    questions: [
      {
        id: 1,
        topic: "Penjumlahan Pecahan Beda Penyebut",
        question: "Berapakah hasil dari 1/2 + 1/3?",
        options: [
          "2/5",
          "5/6",
          "3/5",
          "4/6"
        ],
        correctIndex: 1,
        explanation: "Samakan penyebut dengan mencari KPK dari 2 dan 3, yaitu 6. 1/2 = 3/6 dan 1/3 = 2/6. Maka 3/6 + 2/6 = 5/6."
      },
      {
        id: 2,
        topic: "Pengurangan Pecahan",
        question: "Berapakah hasil dari 3/4 - 1/2?",
        options: [
          "1/4",
          "2/2",
          "1/2",
          "2/6"
        ],
        correctIndex: 0,
        explanation: "Samakan penyebut ke angka 4: 1/2 = 2/4. Maka 3/4 - 2/4 = 1/4."
      },
      {
        id: 3,
        topic: "Perkalian Pecahan",
        question: "Berapakah hasil dari perkalian pecahan 2/5 x 3/4?",
        options: [
          "5/9",
          "6/20 atau disederhanakan 3/10",
          "6/9",
          "8/15"
        ],
        correctIndex: 1,
        explanation: "Kalikan pembilang dengan pembilang dan penyebut dengan penyebut: (2 x 3) / (5 x 4) = 6/20. Disederhanakan bagi 2 menjadi 3/10."
      },
      {
        id: 4,
        topic: "Pembagian Pecahan",
        question: "Berapakah hasil dari 2/3 : 4/9?",
        options: [
          "1/2",
          "3/2 atau 1 1/2",
          "8/27",
          "2/6"
        ],
        correctIndex: 1,
        explanation: "Pembagian pecahan dihitung dengan mengalikan kebalikan pecahan kedua: 2/3 x 9/4 = 18/12. Disederhanakan bagi 6 menjadi 3/2 = 1 1/2."
      },
      {
        id: 5,
        topic: "Skala dan Peta",
        question: "Jarak dua kota pada peta berskala 1 : 200.000 adalah 4 cm. Berapakah jarak sebenarnya antara kedua kota tersebut?",
        options: [
          "800 meter",
          "8 kilometer",
          "80 kilometer",
          "800 kilometer"
        ],
        correctIndex: 1,
        explanation: "Jarak sebenarnya = jarak peta x skala = 4 cm x 200.000 = 800.000 cm. Ubah ke kilometer (bagi 100.000) = 8 km."
      },
      {
        id: 6,
        topic: "Kecepatan dan Jarak",
        question: "Sebuah mobil melaju dengan kecepatan rata-rata 60 km/jam selama 2,5 jam. Berapakah jarak yang ditempuh mobil tersebut?",
        options: [
          "120 km",
          "140 km",
          "150 km",
          "160 km"
        ],
        correctIndex: 2,
        explanation: "Rumus: Jarak = Kecepatan x Waktu. Jarak = 60 km/jam x 2,5 jam = 150 km."
      },
      {
        id: 7,
        topic: "Volume Kubus",
        question: "Sebuah kardus berbentuk kubus memiliki panjang rusuk 6 cm. Berapakah volume kubus tersebut?",
        options: [
          "36 cm³",
          "72 cm³",
          "180 cm³",
          "216 cm³"
        ],
        correctIndex: 3,
        explanation: "Rumus volume kubus = rusuk x rusuk x rusuk = 6 x 6 x 6 = 216 cm³."
      },
      {
        id: 8,
        topic: "Volume Balok",
        question: "Sebuah akuarium memiliki ukuran panjang 8 cm, lebar 5 cm, dan tinggi 10 cm. Berapakah volume akuarium tersebut?",
        options: [
          "200 cm³",
          "400 cm³",
          "450 cm³",
          "500 cm³"
        ],
        correctIndex: 1,
        explanation: "Rumus volume balok = panjang x lebar x tinggi = 8 x 5 x 10 = 400 cm³."
      },
      {
        id: 9,
        topic: "Luas Jajar Genjang",
        question: "Suatu jajar genjang memiliki panjang alas 12 cm dan tinggi 7 cm. Berapakah luas jajar genjang tersebut?",
        options: [
          "38 cm²",
          "42 cm²",
          "84 cm²",
          "96 cm²"
        ],
        correctIndex: 2,
        explanation: "Rumus luas jajar genjang = alas x tinggi = 12 cm x 7 cm = 84 cm²."
      },
      {
        id: 10,
        topic: "Statistika Dasar (Modus)",
        question: "Perhatikan data nilai ulangan matematika berikut: 7, 8, 8, 9, 7, 8, 10. Nilai modus (nilai yang paling sering muncul) adalah?",
        options: [
          "7",
          "8",
          "9",
          "10"
        ],
        correctIndex: 1,
        explanation: "Nilai 7 muncul 2 kali, nilai 8 muncul 3 kali, nilai 9 muncul 1 kali, dan nilai 10 muncul 1 kali. Modus adalah nilai dengan frekuensi terbanyak, yaitu 8."
      }
    ]
  },

  6: {
    gradeName: "Kelas 6 SD",
    gradeBadge: "Tingkat Mahir",
    gradeIcon: "trophy",
    themeColor: "#FECDD3",
    borderColor: "#E11D48",
    description: "Operasi bilangan bulat negatif, lingkaran, luas permukaan & volume tabung, serta rata-rata (mean).",
    questions: [
      {
        id: 1,
        topic: "Penjumlahan Bilangan Bulat Negatif",
        question: "Berapakah hasil dari (-12) + 20?",
        options: [
          "-32",
          "-8",
          "8",
          "32"
        ],
        correctIndex: 2,
        explanation: "Kita memiliki hutang 12 lalu dibayar 20. Sisa uang kita adalah positif 8. Cara hitung: 20 - 12 = 8."
      },
      {
        id: 2,
        topic: "Pengurangan Bilangan Negatif",
        question: "Berapakah hasil dari 15 - (-7)?",
        options: [
          "8",
          "-8",
          "21",
          "22"
        ],
        correctIndex: 3,
        explanation: "Mengurangkan bilangan negatif sama dengan menjumlahkan bilangan positif: 15 - (-7) = 15 + 7 = 22."
      },
      {
        id: 3,
        topic: "Perkalian Bilangan Bulat Negatif",
        question: "Berapakah hasil dari perkalian (-6) x (-8)?",
        options: [
          "-48",
          "48",
          "-14",
          "14"
        ],
        correctIndex: 1,
        explanation: "Aturan tanda bilangan bulat: bilangan negatif dikalikan bilangan negatif hasilnya adalah positif. Maka (-6) x (-8) = +48."
      },
      {
        id: 4,
        topic: "Urutan Operasi Campuran",
        question: "Berapakah hasil dari operasi: 25 + 15 x 2 - 10?",
        options: [
          "35",
          "45",
          "70",
          "80"
        ],
        correctIndex: 1,
        explanation: "Dahulukan operasi perkalian sebelum penjumlahan dan pengurangan: 15 x 2 = 30. Lalu hitung dari kiri: 25 + 30 - 10 = 55 - 10 = 45."
      },
      {
        id: 5,
        topic: "Unsur-unsur Lingkaran",
        question: "Garis lurus yang menghubungkan titik pusat lingkaran dengan garis lengkung lingkaran dinamakan?",
        options: [
          "Diameter",
          "Jari-jari",
          "Tali Busur",
          "Apotema"
        ],
        correctIndex: 1,
        explanation: "Jari-jari (r) adalah ruas garis yang menghubungkan titik pusat dengan titik pada lingkaran. Diameter adalah dua kali panjang jari-jari."
      },
      {
        id: 6,
        topic: "Keliling Lingkaran",
        question: "Sebuah roda memiliki diameter 14 cm. Berapakah keliling roda tersebut? (Gunakan pi = 22/7)",
        options: [
          "22 cm",
          "44 cm",
          "88 cm",
          "154 cm"
        ],
        correctIndex: 1,
        explanation: "Rumus keliling lingkaran = pi x d = (22/7) x 14 cm = 22 x 2 = 44 cm."
      },
      {
        id: 7,
        topic: "Luas Lingkaran",
        question: "Sebuah piring berbentuk lingkaran dengan panjang jari-jari 7 cm. Berapakah luas piring tersebut? (Gunakan pi = 22/7)",
        options: [
          "44 cm²",
          "154 cm²",
          "176 cm²",
          "308 cm²"
        ],
        correctIndex: 1,
        explanation: "Rumus luas lingkaran = pi x r² = (22/7) x 7 x 7 = 22 x 7 = 154 cm²."
      },
      {
        id: 8,
        topic: "Luas Permukaan Kubus",
        question: "Sebuah kotak kado kubus memiliki panjang rusuk 5 cm. Berapakah total luas seluruh permukaan kado tersebut?",
        options: [
          "25 cm²",
          "100 cm²",
          "125 cm²",
          "150 cm²"
        ],
        correctIndex: 3,
        explanation: "Kubus memiliki 6 sisi berbentuk persegi. Luas 1 sisi = 5 x 5 = 25 cm². Luas permukaan = 6 x 25 cm² = 150 cm²."
      },
      {
        id: 9,
        topic: "Volume Tabung",
        question: "Sebuah kaleng susu berbentuk tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Berapakah volumenya? (Gunakan pi = 22/7)",
        options: [
          "770 cm³",
          "1.440 cm³",
          "1.540 cm³",
          "2.200 cm³"
        ],
        correctIndex: 2,
        explanation: "Rumus volume tabung = Luas alas x tinggi = (pi x r²) x t = ((22/7) x 7 x 7) x 10 = 154 x 10 = 1.540 cm³."
      },
      {
        id: 10,
        topic: "Statistika: Menghitung Rata-rata (Mean)",
        question: "Nilai ulangan matematika Budi adalah 6, 8, 7, 9, dan 10. Berapakah nilai rata-rata ulangan Budi?",
        options: [
          "7,5",
          "8",
          "8,5",
          "9"
        ],
        correctIndex: 1,
        explanation: "Jumlahkan semua nilai: 6 + 8 + 7 + 9 + 10 = 40. Lalu bagi dengan banyaknya data (5 nilai): 40 : 5 = 8."
      }
    ]
  }
};

