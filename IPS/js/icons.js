/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Kuis IPS SD Petualangan Nusantara
 * Menggunakan vektor SVG web murni tanpa menggunakan emoji bawaan keyboard.
 * Dirancang dengan gaya kartun/komik dengan garis tegas dan terukur.
 */

const AppIcons = {
  // Brand & Maskot
  compassBrand: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#E0F2FE" fill-opacity="0.5"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#F59E0B" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="12" r="1.5" fill="#1E293B"/>
    </svg>
  `,

  globeEarth: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#BAE6FD" fill-opacity="0.35"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  `,

  // Kelas 1: Keluarga & Rumah (Keluarga Ceria di Rumah)
  familyHome: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#FEF08A" fill-opacity="0.4"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
      <circle cx="12" cy="7" r="1.5" fill="#D97706"/>
    </svg>
  `,

  // Kelas 2: Rukun & Lingkungan (Kerjasama / Saling Merangkul)
  communityHand: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4" fill="#BBF7D0" fill-opacity="0.4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  `,

  // Kelas 3: Kenampakan Alam & Jual Beli (Pasar / Gunung & Koin)
  marketNature: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m8 3 4 8 5-5 5 11H2L8 3z" fill="#FED7AA" fill-opacity="0.4"/>
      <circle cx="17" cy="16" r="3" fill="#FDE047"/>
      <path d="M17 15v2"/>
    </svg>
  `,

  // Kelas 4: Peta & Budaya Nusantara (Candi & Peta Jelajah)
  mapCulture: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" fill="#DDD6FE" fill-opacity="0.35"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  `,

  // Kelas 5: Sejarah & Perjuangan (Kapal Layar & Bendera Merah Putih)
  historyShip: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 19c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"/>
      <path d="M4 18l2-5h12l2 5z" fill="#FCA5A5" fill-opacity="0.4"/>
      <line x1="12" y1="13" x2="12" y2="3"/>
      <polygon points="12 3 19 7 12 10 12 3" fill="#F87171"/>
    </svg>
  `,

  // Kelas 6: ASEAN & Dunia (Pohon Dunia / ASEAN Union)
  aseanGlobe: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#C7D2FE" fill-opacity="0.4"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20"/>
      <path d="M2 12h20"/>
      <polygon points="12 6 14 10 18 10 15 13 16 17 12 14 8 17 9 13 6 10 10 10 12 6" fill="#FBBF24"/>
    </svg>
  `,

  // Ikon Kontrol Audio
  speakerOn: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fill-opacity="0.2"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  speakerOff: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fill-opacity="0.2"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  speakerWave: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fill-opacity="0.3"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  `,

  // Navigasi & Aksi
  arrowRight: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  arrowLeft: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  refresh: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 2v6h-6"/>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
      <path d="M3 22v-6h6"/>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
    </svg>
  `,

  gridSquares: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#E2E8F0"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#E2E8F0"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#E2E8F0"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#E2E8F0"/>
    </svg>
  `,

  bookOpen: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#E0F2FE"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#E0F2FE"/>
    </svg>
  `,

  // Umpan Balik Jawaban
  checkCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#DCFCE7"/>
      <polyline points="9 12 11 14 15 9"/>
    </svg>
  `,

  crossCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FEE2E2"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  `,

  // Ikon Piala & Bintang
  trophy: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#FDE047"/>
    </svg>
  `,

  starFilled: `
    <svg viewBox="0 0 24 24" width="30" height="30" fill="#F59E0B" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  starEmpty: `
    <svg viewBox="0 0 24 24" width="30" height="30" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `
};
