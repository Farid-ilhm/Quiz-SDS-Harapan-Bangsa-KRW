/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Kuis Seni Tari SD
 * Menggunakan vektor SVG murni tanpa emoji bawaan keyboard (Sesuai Syarat 8).
 * Dirancang dengan gaya kartun/komik ramah anak: garis outline tegas (comic lineart 2.2px)
 * dan warna ceria berenergi nusantara.
 */

const DanceIcons = {
  // Brand & Identitas Seni Tari: Mahkota & Selendang Tari Cilik
  danceBrand: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Mahkota Tari Keemasan -->
      <path d="M3 17l2.5-9 4.5 4.5 2-6.5 2 6.5 4.5-4.5 2.5 9H3z" fill="#FDE047" stroke="#1E293B"/>
      <!-- Permata Mahkota -->
      <circle cx="5.5" cy="8" r="1.3" fill="#EF4444"/>
      <circle cx="12" cy="5.5" r="1.5" fill="#3B82F6"/>
      <circle cx="18.5" cy="8" r="1.3" fill="#10B981"/>
      <!-- Selendang Melengkung Luwes -->
      <path d="M2 19c4 2 8-1 12 2s6-1 8-2" stroke="#DC2626" stroke-width="2.5"/>
    </svg>
  `,

  // Tombol Audio & Suara Pembaca (TTS)
  volumeOn: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A" stroke="#1E293B"/>
      <path d="M15.5 8.5a5 5 0 0 1 0 7" stroke="#1E293B"/>
      <path d="M19 5a10 10 0 0 1 0 14" stroke="#1E293B"/>
    </svg>
  `,

  volumeOff: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#E2E8F0" stroke="#1E293B"/>
      <line x1="23" y1="9" x2="17" y2="15" stroke="#EF4444" stroke-width="2.4"/>
      <line x1="17" y1="9" x2="23" y2="15" stroke="#EF4444" stroke-width="2.4"/>
    </svg>
  `,

  // Pengeras Suara / Pembaca Soal (Syarat 3)
  speakerSpeak: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#FEF08A" stroke="#1E293B"/>
      <path d="M15.5 8.5a5 5 0 0 1 0 7" stroke="#EA580C" stroke-width="2.4"/>
      <path d="M19 5a10 10 0 0 1 0 14" stroke="#EA580C" stroke-width="2.4"/>
      <circle cx="12" cy="12" r="1.5" fill="#F59E0B"/>
    </svg>
  `,

  // Properti Tari: Selendang / Sampur Merah Melayang
  selendangSampur: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 16C5 10 9 6 14 7C19 8 21 13 18 17C15 21 9 20 6 18C4 17 3 16 3 16Z" fill="#FEE2E2" stroke="#DC2626"/>
      <path d="M6 14C9 10 13 9 17 11" stroke="#EF4444" stroke-width="2" stroke-dasharray="2 2"/>
      <circle cx="18" cy="17" r="1.5" fill="#DC2626"/>
    </svg>
  `,

  // Properti Tari: Kipas Tari Nusantara
  kipasTari: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Rangka Kipas Terbuka Setengah Lingkaran -->
      <path d="M12 20C5 20 2 15 2 12C2 7 6 3 12 3C18 3 22 7 22 12C22 15 19 20 12 20Z" fill="#FEF08A" stroke="#1E293B"/>
      <!-- Jari-jari Kipas -->
      <line x1="12" y1="20" x2="6" y2="7" stroke="#F59E0B" stroke-width="1.8"/>
      <line x1="12" y1="20" x2="12" y2="5" stroke="#F59E0B" stroke-width="1.8"/>
      <line x1="12" y1="20" x2="18" y2="7" stroke="#F59E0B" stroke-width="1.8"/>
      <circle cx="12" cy="20" r="2.5" fill="#DC2626" stroke="#1E293B" stroke-width="2"/>
    </svg>
  `,

  // Properti Tari: Piring Tari (Minangkabau)
  piringTari: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="9" ry="6" fill="#CCFBF1" stroke="#1E293B"/>
      <ellipse cx="12" cy="12" rx="5" ry="3" fill="#5EEAD4" stroke="#0D9488" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="1.2" fill="#134E4A"/>
    </svg>
  `,

  // Alat Musik Pengiring: Kendang Tari
  kendangTari: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Bodi Kendang Kayu Kayu Cembung -->
      <path d="M5 8C5 6 7 4 12 4C17 4 19 6 19 8V16C19 18 17 20 12 20C7 20 5 18 5 16V8Z" fill="#FED7AA" stroke="#1E293B"/>
      <!-- Tali Lilitan Kendang Zigzag -->
      <path d="M5 8L12 14L19 8 M5 16L12 10L19 16" stroke="#EA580C" stroke-width="1.8"/>
      <!-- Kulit Atas & Bawah Kendang -->
      <ellipse cx="12" cy="4" rx="7" ry="2" fill="#FEF3C7" stroke="#1E293B"/>
      <ellipse cx="12" cy="20" rx="7" ry="2" fill="#FDE68A" stroke="#1E293B"/>
    </svg>
  `,

  // Alat Musik Pengiring: Gong Perunggu
  gongTari: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Dudukan Tiang Gantungan Gong -->
      <path d="M3 3h18 M6 3v18 M18 3v18" stroke="#78350F" stroke-width="2.2"/>
      <line x1="9" y1="7" x2="10" y2="9" stroke="#1E293B" stroke-width="1.8"/>
      <line x1="15" y1="7" x2="14" y2="9" stroke="#1E293B" stroke-width="1.8"/>
      <!-- Lingkaran Gong Emas -->
      <circle cx="12" cy="13" r="5.5" fill="#FBBF24" stroke="#1E293B"/>
      <!-- Pencon Gong (Pusat Tonjolan Gong) -->
      <circle cx="12" cy="13" r="1.8" fill="#B45309" stroke="#1E293B"/>
    </svg>
  `,

  // Gelang Kaki Kelintingan Tari (Gongseng Remo)
  gelangKaki: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="14" rx="8" ry="4" fill="#FED7AA" stroke="#1E293B"/>
      <!-- Lonceng-lonceng Emas Kecil -->
      <circle cx="6" cy="14" r="2.2" fill="#FBBF24" stroke="#1E293B" stroke-width="1.8"/>
      <circle cx="10" cy="16" r="2.2" fill="#FBBF24" stroke="#1E293B" stroke-width="1.8"/>
      <circle cx="14" cy="16" r="2.2" fill="#FBBF24" stroke="#1E293B" stroke-width="1.8"/>
      <circle cx="18" cy="14" r="2.2" fill="#FBBF24" stroke="#1E293B" stroke-width="1.8"/>
    </svg>
  `,

  // Ikon Kartu Tingkatan Kelas 1 sampai 6
  class1AlamTubuh: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Gerak Ranting Daun & Tangan Ceria -->
      <path d="M12 2a9 9 0 0 1 9 9c0 5-4 9-9 9s-9-4-9-9a9 9 0 0 1 9-9z" fill="#DCFCE7" stroke="#16A34A"/>
      <path d="M12 8c-2 2-3 5-3 8" stroke="#15803D" stroke-width="2.2"/>
      <path d="M12 11c2 1 4 0 5-2" stroke="#15803D" stroke-width="2.2"/>
      <circle cx="8" cy="7" r="1.5" fill="#22C55E"/>
    </svg>
  `,

  class2IramaHewan: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Kelinci Melompat Irama Gerak -->
      <ellipse cx="12" cy="14" rx="6" ry="5" fill="#FEE2E2" stroke="#E11D48"/>
      <path d="M8 10C7 5 9 3 10 5C11 7 10 9 9 10" fill="#FDA4AF" stroke="#E11D48"/>
      <path d="M16 10C17 5 15 3 14 5C13 7 14 9 15 10" fill="#FDA4AF" stroke="#E11D48"/>
      <circle cx="10" cy="13" r="1" fill="#1E293B"/>
      <circle cx="14" cy="13" r="1" fill="#1E293B"/>
    </svg>
  `,

  class3ElemenTari: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Tiga Elemen: Ruang (Segitiga), Waktu (Jam), Tenaga (Kilau) -->
      <path d="M12 3l8 14H4L12 3z" fill="#E0F2FE" stroke="#0284C7"/>
      <circle cx="12" cy="13" r="3" fill="#BAE6FD" stroke="#0369A1"/>
      <line x1="12" y1="13" x2="12" y2="11" stroke="#0369A1" stroke-width="1.8"/>
      <line x1="12" y1="13" x2="14" y2="13" stroke="#0369A1" stroke-width="1.8"/>
    </svg>
  `,

  class4TariTradisi: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Mahkota Tari Daerah Megah -->
      <path d="M2 18l3-11 4.5 5 2.5-7 2.5 7 4.5-5 3 11H2z" fill="#FEF08A" stroke="#CA8A04"/>
      <circle cx="5" cy="7" r="1.3" fill="#DC2626"/>
      <circle cx="12" cy="5" r="1.5" fill="#2563EB"/>
      <circle cx="19" cy="7" r="1.3" fill="#16A34A"/>
    </svg>
  `,

  class5PolaLantai: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Diagram Pola Lantai Geometris Tari Kelompok -->
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#F3E8FF" stroke="#9333EA"/>
      <circle cx="7" cy="7" r="2" fill="#C084FC" stroke="#7E22CE"/>
      <circle cx="17" cy="7" r="2" fill="#C084FC" stroke="#7E22CE"/>
      <circle cx="12" cy="12" r="2.5" fill="#E879F9" stroke="#7E22CE"/>
      <circle cx="7" cy="17" r="2" fill="#C084FC" stroke="#7E22CE"/>
      <circle cx="17" cy="17" r="2" fill="#C084FC" stroke="#7E22CE"/>
      <line x1="7" y1="7" x2="17" y2="17" stroke="#A855F7" stroke-width="1.5" stroke-dasharray="2 2"/>
    </svg>
  `,

  class6KreasiNusantara: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Bintang Kreasi Seni Panggung & Selendang Emas -->
      <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" fill="#FDE047" stroke="#D97706"/>
      <circle cx="12" cy="12" r="3" fill="#F59E0B" stroke="#B45309"/>
    </svg>
  `,

  // Navigasi & Aksi
  arrowLeft: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  arrowRight: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  refreshCw: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  `,

  home: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#FEE2E2" stroke="#1E293B"/>
      <polyline points="9 22 9 12 15 12 15 22" stroke="#1E293B"/>
    </svg>
  `,

  sparkles: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#F59E0B"/>
      <circle cx="12" cy="12" r="3" fill="#FBBF24"/>
      <circle cx="19" cy="5" r="1.5" fill="#EF4444"/>
      <circle cx="5" cy="19" r="1.5" fill="#3B82F6"/>
    </svg>
  `,

  // Validasi & Status Jawaban (Komik Ceria)
  checkCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#059669" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#DCFCE7"/>
      <polyline points="8 12 11 15 16 9"/>
    </svg>
  `,

  xCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#DC2626" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FEE2E2"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  `,

  infoCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563EB" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#DBEAFE"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <circle cx="12" cy="8" r="1" fill="#1E40AF"/>
    </svg>
  `,

  // Layar Akhir: Piala Emas Bersinar & Bintang Gemerlap (Syarat 9)
  goldenTrophy: `
    <svg viewBox="0 0 24 24" width="68" height="68" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Cawan Piala Emas -->
      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill="#FDE047" stroke="#1E293B"/>
      <!-- Pegangan Kiri & Kanan Piala -->
      <path d="M6 5H3a3 3 0 0 0 3 5h0 M18 5h3a3 3 0 0 1-3 5h0" stroke="#CA8A04" stroke-width="2.2"/>
      <!-- Batang & Dudukan Piala -->
      <line x1="12" y1="13" x2="12" y2="17" stroke="#1E293B" stroke-width="2.5"/>
      <rect x="7" y="17" width="10" height="4" rx="1.5" fill="#EA580C" stroke="#1E293B"/>
      <!-- Permata Bintang Ceria di Dada Piala -->
      <polygon points="12 5 13 8 16 8 13.5 10 14.5 13 12 11 9.5 13 10.5 10 8 8 11 8 12 5" fill="#F59E0B" stroke="#1E293B" stroke-width="1.2"/>
    </svg>
  `,

  starFull: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#FBBF24" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/>
    </svg>
  `,

  starEmpty: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/>
    </svg>
  `,

  filterIcon: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" fill="#FEF08A"/>
    </svg>
  `
};
