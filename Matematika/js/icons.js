/**
 * Koleksi Icon Web Vektor Gratis (SVG Web Icons) - Matematika SD Ceria
 * Menghindari emoji bawaan OS/keyboard agar tampilan konsisten,
 * tajam di segala resolusi, dan menyatu dengan gaya komik.
 */

const AppIcons = {
  // Kelas 1: Tunas / Pensil Ceria (Dasar Berhitung)
  seedling: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22v-8"/>
      <path d="M12 14c-4.4 0-8-3.6-8-8 4.4 0 8 3.6 8 8Z" fill="#86EFAC" fill-opacity="0.35"/>
      <path d="M12 10c4.4 0 8-3.6 8-8-4.4 0-8 3.6-8 8Z" fill="#86EFAC" fill-opacity="0.35"/>
    </svg>
  `,

  // Kelas 2: Sempoa / Blok Berhitung
  abacus: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#BAE6FD" fill-opacity="0.35"/>
      <line x1="3" y1="8" x2="21" y2="8"/>
      <line x1="3" y1="13" x2="21" y2="13"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
      <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="13" r="1.5" fill="currentColor"/>
      <circle cx="9" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="14" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  `,

  // Kelas 3: Penggaris & Jam (Ukuran & Perkalian)
  ruler: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21.3 8.7 8.7 21.3c-1 1-2.6 1-3.6 0l-2.4-2.4c-1-1-1-2.6 0-3.6L15.3 2.7c1-1 2.6-1 3.6 0l2.4 2.4c1 1 1 2.6 0 3.6Z" fill="#FED7AA" fill-opacity="0.35"/>
      <line x1="14.5" y1="5.5" x2="16.5" y2="7.5"/>
      <line x1="11" y1="9" x2="14" y2="12"/>
      <line x1="7.5" y1="12.5" x2="9.5" y2="14.5"/>
      <line x1="4" y1="16" x2="7" y2="19"/>
    </svg>
  `,

  // Kelas 4: Bangun Datar Geometri / Segitiga & Persegi
  shapes: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3 3 19h18Z" fill="#FEF08A" fill-opacity="0.4"/>
      <circle cx="12" cy="13" r="3.5" fill="#F472B6" fill-opacity="0.4" stroke="currentColor" stroke-width="2"/>
    </svg>
  `,

  // Kelas 5: Pecahan & Balok Kubus (Volume & Bilangan)
  cube: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" fill="#DDD6FE" fill-opacity="0.4"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  `,

  // Kelas 6: Piala Bintang Matematika Mahir
  trophy: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#FDE047" fill-opacity="0.4"/>
    </svg>
  `,

  // Suara / Speaker
  volumeHigh: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  // Suara Mute
  volumeMute: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  // Speaker Membaca Soal (TTS)
  readAloud: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <circle cx="19" cy="5" r="2" fill="#F59E0B"/>
    </svg>
  `,

  // Checkmark Sukses / Benar
  check: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,

  // Silang Salah
  cross: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,

  // Lampu Ide / Koreksi & Penjelasan
  bulb: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" fill="#FEF08A" fill-opacity="0.5"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </svg>
  `,

  // Bintang Emas Penuh
  starSolid: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#FACC15" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  // Bintang Emas Kosong
  starOutline: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  // Panah Kiri (Kembali)
  arrowLeft: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  // Panah Kanan (Lanjut)
  arrowRight: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  // Putar Ulang / Coba Lagi
  refresh: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24"/>
      <polyline points="21 3 21 8 16 8"/>
    </svg>
  `,

  // Topi Wisuda Kelulusan
  graduationCap: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  `,

  // Buku Matematika
  bookOpen: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  `
};

