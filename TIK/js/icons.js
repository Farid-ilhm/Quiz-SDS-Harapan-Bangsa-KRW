/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Kuis TIK SD Petualangan Robot Chippy
 * Menggunakan vektor SVG murni tanpa emoji bawaan keyboard.
 * Dirancang khusus dengan gaya komik/kartun, garis outline tegas, dan ramah anak.
 */

const AppIcons = {
  // Brand & Maskot
  robotBrand: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="3" fill="#E0F2FE"/>
      <path d="M12 2v6"/>
      <circle cx="12" cy="2" r="1.5" fill="#F59E0B"/>
      <circle cx="9" cy="13" r="1.5" fill="#0284C7"/>
      <circle cx="15" cy="13" r="1.5" fill="#0284C7"/>
      <path d="M9 17h6"/>
      <path d="M2 12h2 M20 12h2"/>
    </svg>
  `,

  computerScreen: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" fill="#FEF08A" fill-opacity="0.35"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  `,

  // Kelas 1: Pengenalan Komputer & Perangkat Dasar
  class1Device: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="12" rx="2" fill="#BAE6FD" fill-opacity="0.4"/>
      <path d="M8 21h8 M12 15v6"/>
      <circle cx="12" cy="9" r="2" fill="#0284C7"/>
    </svg>
  `,

  // Kelas 2: Mouse, Keyboard & Menggambar di Paint
  class2MousePaint: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="6" y="3" width="12" height="18" rx="6" fill="#BBF7D0" fill-opacity="0.4"/>
      <line x1="12" y1="3" x2="12" y2="10"/>
      <circle cx="12" cy="7" r="1.5" fill="#059669"/>
    </svg>
  `,

  // Kelas 3: Hardware, Software & Mengetik WordPad
  class3Hardware: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#FED7AA" fill-opacity="0.4"/>
      <rect x="9" y="9" width="6" height="6" fill="#F97316"/>
      <line x1="9" y1="1" x2="9" y2="4"/>
      <line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/>
      <line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/>
      <line x1="20" y1="15" x2="23" y2="15"/>
      <line x1="1" y1="9" x2="4" y2="9"/>
      <line x1="1" y1="15" x2="4" y2="15"/>
    </svg>
  `,

  // Kelas 4: Pengolah Kata (Word) & Kreasi Dokumen
  class4WordDoc: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#DDD6FE" fill-opacity="0.4"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="12" y2="17"/>
    </svg>
  `,

  // Kelas 5: Presentasi (PowerPoint), Tabel & Dasar Internet
  class5Presentation: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" fill="#FCA5A5" fill-opacity="0.35"/>
      <path d="M8 21l4-4 4 4"/>
      <circle cx="12" cy="10" r="3" fill="#EF4444"/>
    </svg>
  `,

  // Kelas 6: Internet Aman, Surel & Logika Coding Scratch
  class6CodingNet: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="10" y1="20" x2="14" y2="4"/>
      <circle cx="12" cy="12" r="3" fill="#6366F1" fill-opacity="0.4"/>
    </svg>
  `,

  // Fitur Audio / Suara
  volumeOn: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  volumeOff: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#E2E8F0"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  speakerSpeak: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A"/>
      <path d="M15 9a3 3 0 0 1 0 6"/>
      <path d="M18 6a7 7 0 0 1 0 12"/>
    </svg>
  `,

  speakerActive: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#38BDF8"/>
      <path d="M15 9a3 3 0 0 1 0 6" stroke="#F59E0B" stroke-width="2.5"/>
      <path d="M18 6a7 7 0 0 1 0 12" stroke="#F59E0B" stroke-width="2.5"/>
      <circle cx="21" cy="12" r="1.5" fill="#EF4444"/>
    </svg>
  `,

  // Tombol & Navigasi
  arrowLeft: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  arrowRight: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  refreshCw: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10"/>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  `,

  gridMenu: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#FEF08A"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#BAE6FD"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#BBF7D0"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#FED7AA"/>
    </svg>
  `,

  // Status Jawaban: Benar, Salah, Koreksi
  checkCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#DCFCE7"/>
      <polyline points="9 12 11 14 15 9" stroke="#16A34A" stroke-width="2.8"/>
    </svg>
  `,

  xCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FEE2E2"/>
      <line x1="15" y1="9" x2="9" y2="15" stroke="#DC2626" stroke-width="2.8"/>
      <line x1="9" y1="9" x2="15" y2="15" stroke="#DC2626" stroke-width="2.8"/>
    </svg>
  `,

  lightbulbCorrection: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18h6" stroke-width="2.5"/>
      <path d="M10 22h4" stroke-width="2.5"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" fill="#FEF08A" stroke-width="2.2"/>
    </svg>
  `,

  bookReview: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#E0F2FE"/>
      <line x1="8" y1="7" x2="16" y2="7"/>
      <line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  `,

  // Gimmick Akhir: Piala Emas & Bintang Bersinar
  trophyGold: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#FDE047"/>
      <circle cx="12" cy="9" r="2" fill="#D97706"/>
    </svg>
  `,

  starFull: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#F59E0B" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  starEmpty: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  confettiParty: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 22l6-6"/>
      <path d="M12 14l9-9-5-1-4 10z" fill="#FEF08A"/>
      <path d="M19 19l1 3 M15 17l-1 4 M21 14l2 1"/>
      <circle cx="14" cy="5" r="1.5" fill="#EF4444"/>
      <circle cx="19" cy="8" r="1.5" fill="#0284C7"/>
    </svg>
  `
};
