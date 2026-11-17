/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Arena Kuis PJOK SD
 * Standar: Menggunakan vektor SVG murni berkualitas tinggi tanpa emoji keyboard.
 * Desain bergaya kartun komik dengan garis tinta tegas (#1E293B) dan aksen warna ceria.
 */

const AppIcons = {
  // Peluit Olahraga / Wasit
  whistle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M11 6h7a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1l-3 4H9a5 5 0 1 1 2-10z" fill="#FEF08A" fill-opacity="0.45"/>
      <circle cx="9" cy="14" r="2.5" fill="#F59E0B"/>
      <path d="M14 6V3"/>
      <circle cx="18" cy="8" r="1" fill="currentColor"/>
    </svg>
  `,

  // Bola Sepak Komik
  soccerBall: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FFFFFF"/>
      <polygon points="12 7 15 9.5 14 13.5 10 13.5 9 9.5" fill="#1E293B"/>
      <line x1="12" y1="7" x2="12" y2="2"/>
      <line x1="15" y1="9.5" x2="19.5" y2="8"/>
      <line x1="14" y1="13.5" x2="17" y2="18"/>
      <line x1="10" y1="13.5" x2="7" y2="18"/>
      <line x1="9" y1="9.5" x2="4.5" y2="8"/>
    </svg>
  `,

  // Bola Basket
  basketball: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#F97316" fill-opacity="0.35"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
      <path d="M4.93 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M19.07 4.93a10 10 0 0 0 0 14.14"/>
    </svg>
  `,

  // Kok Bulu Tangkis (Shuttlecock)
  shuttlecock: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8 5l-4 7h16l-4-7z" fill="#E0F2FE" fill-opacity="0.5"/>
      <line x1="8" y1="5" x2="8" y2="12"/>
      <line x1="12" y1="5" x2="12" y2="12"/>
      <line x1="16" y1="5" x2="16" y2="12"/>
      <path d="M9 14h6v2a3 3 0 0 1-6 0v-2z" fill="#EF4444"/>
    </svg>
  `,

  // Pelari Cepat (Gerak Lokomotor)
  runner: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="15" cy="5" r="3" fill="#FBBF24"/>
      <path d="M8 12l3-3 4 2 3-2"/>
      <path d="M11 9v6l-4 5"/>
      <path d="M14 15l2 4 4-1"/>
    </svg>
  `,

  // Perenang (Olahraga Air & Akuatik)
  swimmer: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="6" cy="7" r="2.5" fill="#FBBF24"/>
      <path d="M2 13l5-3 5 2 4-2"/>
      <path d="M2 18c2-1 4-1 6 0s4 1 6 0 4-1 6 0" stroke="#0284C7"/>
      <path d="M2 21c2-1 4-1 6 0s4 1 6 0 4-1 6 0" stroke="#38BDF8"/>
    </svg>
  `,

  // Senam & Keseimbangan
  gymnast: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="4" r="2.5" fill="#FBBF24"/>
      <path d="M5 9l7 2 7-2"/>
      <path d="M12 11v5"/>
      <path d="M12 16l-4 5"/>
      <path d="M12 16l4 5"/>
      <line x1="3" y1="21" x2="21" y2="21" stroke-dasharray="2 2"/>
    </svg>
  `,

  // Barbel Kebugaran (Latihan Kekuatan Jasmani)
  dumbbell: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="3" height="10" rx="1.5" fill="#94A3B8"/>
      <rect x="5" y="9" width="2" height="6" rx="1" fill="#64748B"/>
      <line x1="7" y1="12" x2="17" y2="12"/>
      <rect x="17" y="9" width="2" height="6" rx="1" fill="#64748B"/>
      <rect x="19" y="7" width="3" height="10" rx="1.5" fill="#94A3B8"/>
    </svg>
  `,

  // Piala Emas Kejuaraan
  trophy: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 3h12v6a6 6 0 0 1-12 0V3z" fill="#FBBF24" fill-opacity="0.45"/>
      <path d="M6 5H3a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1"/>
      <path d="M18 5h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1"/>
      <line x1="12" y1="15" x2="12" y2="19"/>
      <line x1="7" y1="21" x2="17" y2="21"/>
      <circle cx="12" cy="7" r="1.5" fill="#F59E0B"/>
    </svg>
  `,

  // Medali Emas Juara
  medal: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M7 2l5 6-3 1-5-6h3z" fill="#EF4444"/>
      <path d="M17 2l-5 6 3 1 5-6h-3z" fill="#3B82F6"/>
      <circle cx="12" cy="15" r="5" fill="#FDE047"/>
      <circle cx="12" cy="15" r="3" fill="#F59E0B"/>
    </svg>
  `,

  // Detak Jantung / Denyut Nadi Sehat
  heartbeat: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 5.864a5 5 0 0 1 7.5 6.708z" fill="#FEE2E2"/>
      <polyline points="7 12 10 12 11 9 13 15 14 12 17 12" stroke="#EF4444"/>
    </svg>
  `,

  // Apel Nutrisi & Gizi Sehat
  appleNutrition: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z" fill="#FCA5A5" fill-opacity="0.3"/>
      <path d="M10 2c1 .5 2 2 2 4"/>
      <path d="M10 4c2-1 4-1 5 0"/>
    </svg>
  `,

  // Botol Minum Olahraga (Hidrasi Tubuh)
  waterBottle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="9" y="2" width="6" height="3" rx="1" fill="#94A3B8"/>
      <rect x="8" y="5" width="8" height="2" rx="0.5" fill="#64748B"/>
      <rect x="7" y="7" width="10" height="15" rx="3" fill="#BAE6FD" fill-opacity="0.45"/>
      <line x1="7" y1="12" x2="17" y2="12" stroke="#38BDF8"/>
      <line x1="7" y1="17" x2="17" y2="17" stroke="#38BDF8"/>
    </svg>
  `,

  // Kotak P3K (Pertolongan Pertama Pada Kecelakaan)
  firstAid: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="6" width="18" height="15" rx="3" fill="#FFFFFF"/>
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <path d="M12 10v7" stroke="#EF4444" stroke-width="3"/>
      <path d="M8.5 13.5h7" stroke="#EF4444" stroke-width="3"/>
    </svg>
  `,

  // Suara Aktif
  speakerOn: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  // Suara Mati (Mute)
  speakerOff: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#E2E8F0"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  // Megafon Pembaca Soal (TTS)
  speakerWave: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 11l15-7v16l-15-7v-2z" fill="#FEF08A"/>
      <path d="M7 14v4a2 2 0 0 0 2 2h1"/>
      <path d="M21 9a4 4 0 0 1 0 6"/>
      <circle cx="10" cy="12" r="1" fill="#1E293B"/>
    </svg>
  `,

  // Ikon Gelombang Suara (Bicara Berjalan)
  soundWaveAnimated: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="4" y1="10" x2="4" y2="14" stroke="#D97706"/>
      <line x1="8" y1="7" x2="8" y2="17" stroke="#EF4444"/>
      <line x1="12" y1="4" x2="12" y2="20" stroke="#059669"/>
      <line x1="16" y1="7" x2="16" y2="17" stroke="#2563EB"/>
      <line x1="20" y1="10" x2="20" y2="14" stroke="#7C3AED"/>
    </svg>
  `,

  // Jawaban Benar (Checkmark Komik)
  check: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,

  // Jawaban Salah (Crossmark Komik)
  cross: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,

  // Panah Maju
  arrowRight: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  // Panah Kembali
  arrowLeft: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  // Segarkan / Ulangi Kuis
  refresh: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10"/>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  `,

  // Menu Pilihan Kelas (Grid 6 Kotak)
  gridSquares: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#FEF08A"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#BAE6FD"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#BBF7D0"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#DDD6FE"/>
    </svg>
  `,

  // Buku Catatan Koreksi
  bookOpen: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#FEF3C7"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#FEF3C7"/>
      <line x1="6" y1="8" x2="8" y2="8"/>
      <line x1="6" y1="12" x2="9" y2="12"/>
      <line x1="16" y1="8" x2="18" y2="8"/>
      <line x1="15" y1="12" x2="18" y2="12"/>
    </svg>
  `,

  // Bintang Berkilau Juara
  starFilled: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#FBBF24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  // Api Semangat Olahraga
  flameEnergy: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill="#F97316" fill-opacity="0.45"/>
      <circle cx="12" cy="16" r="2.5" fill="#FDE047"/>
    </svg>
  `,

  // Bantuan / Tips Guru Olahraga
  helpCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#E0F2FE"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="3"/>
    </svg>
  `
};
