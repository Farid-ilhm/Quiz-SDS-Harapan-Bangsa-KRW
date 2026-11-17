/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Kuis Seni Musik SD Petualangan Si Melodi
 * Menggunakan vektor SVG murni tanpa emoji bawaan keyboard (Sesuai Syarat 8).
 * Dirancang khusus dengan gaya komik/kartun, garis outline tegas (comic lineart), dan warna ceria.
 */

const AppIcons = {
  // Brand & Maskot Seni Musik: Not Kunci G dengan Headphone Ceria
  musicBrand: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" stroke="#1E293B" stroke-width="2.2"/>
      <circle cx="6" cy="18" r="3" fill="#FBBF24" stroke="#1E293B" stroke-width="2.2"/>
      <circle cx="18" cy="16" r="3" fill="#38BDF8" stroke="#1E293B" stroke-width="2.2"/>
      <path d="M9 9l12-2" stroke="#1E293B" stroke-width="2"/>
    </svg>
  `,

  // Tombol Audio & Suara
  volumeOn: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  volumeOff: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#E2E8F0"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  speakerSpeak: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 11l19-9-9 19-2-8-8-2z" fill="#FEF08A" stroke="#1E293B"/>
      <circle cx="12" cy="12" r="2" fill="#F59E0B"/>
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
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#E0F2FE"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
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

  // Validasi & Status Jawaban
  checkCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#059669" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#DCFCE7"/>
      <polyline points="9 12 11.5 14.5 16 9.5"/>
    </svg>
  `,

  xCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#DC2626" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FEE2E2"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  `,

  bulbTip: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18h6M10 22h4" stroke="#D97706" stroke-width="2.5"/>
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 5.5v1.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V14.5c1.5-1 3-3 3-5.5a7 7 0 0 0-7-7z" fill="#FEF08A"/>
    </svg>
  `,

  // Ikon Tiap Tingkat Kelas (1 sampai 6) - Khusus Seni Musik
  class1VoiceNotes: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#FEF08A" stroke="#1E293B"/>
      <circle cx="8" cy="14" r="2.5" fill="#F59E0B" stroke="#1E293B"/>
      <line x1="10.5" y1="14" x2="10.5" y2="7" stroke="#1E293B" stroke-width="2"/>
      <circle cx="16" cy="12" r="2.5" fill="#EF4444" stroke="#1E293B"/>
      <line x1="18.5" y1="12" x2="18.5" y2="6" stroke="#1E293B" stroke-width="2"/>
      <path d="M10.5 7 Q14.5 5 18.5 6" stroke="#1E293B" stroke-width="2"/>
    </svg>
  `,

  class2RhythmDrum: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Drum / Gendang Komik Ceria -->
      <ellipse cx="12" cy="7" rx="8" ry="3.5" fill="#BAE6FD" stroke="#1E293B" stroke-width="2.2"/>
      <path d="M4 7v9c0 2 3.5 3.5 8 3.5s8-1.5 8-3.5V7" fill="#E0F2FE" stroke="#1E293B" stroke-width="2.2"/>
      <path d="M5 9l5 9 M19 9l-5 9 M12 10.5v8" stroke="#0284C7" stroke-width="1.8"/>
      <!-- Stik Drum Silang -->
      <line x1="2" y1="2" x2="7" y2="6" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="2" x2="17" y2="6" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  class3MelodicKeys: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Pianika / Piano Melodis -->
      <rect x="3" y="4" width="18" height="16" rx="3" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.2"/>
      <line x1="7.5" y1="4" x2="7.5" y2="20" stroke="#1E293B" stroke-width="1.8"/>
      <line x1="12" y1="4" x2="12" y2="20" stroke="#1E293B" stroke-width="1.8"/>
      <line x1="16.5" y1="4" x2="16.5" y2="20" stroke="#1E293B" stroke-width="1.8"/>
      <!-- Tuts Hitam -->
      <rect x="5.5" y="4" width="4" height="9" rx="1" fill="#1E293B"/>
      <rect x="14.5" y="4" width="4" height="9" rx="1" fill="#1E293B"/>
    </svg>
  `,

  class4TradMusic: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Angklung Tradisional Nusantara -->
      <rect x="4" y="2" width="16" height="2.5" rx="1" fill="#FBBF24" stroke="#1E293B" stroke-width="1.8"/>
      <rect x="6" y="4.5" width="2.5" height="15" fill="#FED7AA" stroke="#1E293B" stroke-width="1.8"/>
      <rect x="11" y="4.5" width="2.5" height="12" fill="#FED7AA" stroke="#1E293B" stroke-width="1.8"/>
      <rect x="16" y="4.5" width="2.5" height="17" fill="#FED7AA" stroke="#1E293B" stroke-width="1.8"/>
      <rect x="3" y="19" width="18" height="3" rx="1" fill="#F59E0B" stroke="#1E293B" stroke-width="1.8"/>
    </svg>
  `,

  class5Ensemble: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Ansambel & Gitar Akustik -->
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11l2 2a3.5 3.5 0 0 1-5 5H9a3.5 3.5 0 0 1-3.5-3.5c0-1.5.8-2.8 2-3.5l2-2v-1.5C8.3 6.8 7.5 5.5 7.5 4a4 4 0 0 1 4.5-2z" fill="#DDD6FE" stroke="#1E293B" stroke-width="2"/>
      <circle cx="12" cy="14" r="2" fill="#1E293B"/>
    </svg>
  `,

  class6ChoirHarmoni: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Paduan Suara & Harmoni Orkestra -->
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#1E293B" stroke-width="2"/>
      <circle cx="9" cy="7" r="4" fill="#BBF7D0" stroke="#1E293B" stroke-width="2"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#1E293B" stroke-width="2"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#1E293B" stroke-width="2"/>
      <path d="M8 7h2 M9 6v2" stroke="#059669" stroke-width="1.8"/>
    </svg>
  `,

  // Layar Hasil: Piala & Bintang
  trophyGold: `
    <svg viewBox="0 0 24 24" width="70" height="70" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" fill="#FDE68A"/>
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" fill="#FDE68A"/>
      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill="#FBBF24"/>
      <line x1="12" y1="16" x2="12" y2="19" stroke-width="2.8"/>
      <rect x="7" y="19" width="10" height="3" rx="1.5" fill="#F59E0B" stroke="#1E293B" stroke-width="2"/>
      <circle cx="12" cy="8" r="2.5" fill="#FFFFFF"/>
    </svg>
  `,

  starGold: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="#FBBF24" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  starEmpty: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `
};
