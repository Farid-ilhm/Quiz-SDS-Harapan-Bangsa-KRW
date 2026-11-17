/**
 * Koleksi Ikon Vektor Web (SVG) - Kuis IPA SD Petualangan Sains
 * Seluruh ikon menggunakan SVG web murni tanpa emoji keyboard bawaan.
 * Tajam, terukur, dan selaras dengan gaya komik/kartun edukatif.
 */

const AppIcons = {
  // Maskot Mini / Sains Umum
  scienceFlask: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10 2v7.31L4.15 19.33A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.71-2.67L14 9.31V2"/>
      <path d="M8.5 2h7"/>
      <path d="M7 16h10" stroke-dasharray="2 2"/>
      <circle cx="10" cy="18" r="1" fill="currentColor"/>
      <circle cx="14" cy="17" r="1.5" fill="currentColor"/>
    </svg>
  `,

  atom: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-30 12 12)"/>
    </svg>
  `,

  microscope: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 18h8"/>
      <path d="M3 22h18"/>
      <path d="M14 22a7 7 0 1 0-7-7"/>
      <path d="M9 14h2"/>
      <path d="M9 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"/>
      <path d="m14 9 3-3"/>
    </svg>
  `,

  // Kelas 1: Tubuh & Indra (Mata & Telinga / Detektif Cilik)
  humanBody: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="3" fill="#BAE6FD" fill-opacity="0.4"/>
      <path d="M12 8v8"/>
      <path d="m8 11 4-2 4 2"/>
      <path d="m9 21 3-5 3 5"/>
    </svg>
  `,

  // Kelas 2: Tumbuhan & Hewan (Tunas Daun Segar)
  plantSprout: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22v-9"/>
      <path d="M12 13c0-4.5 3.5-7 8-7 0 4.5-2.5 8-8 8Z" fill="#86EFAC" fill-opacity="0.45"/>
      <path d="M12 16c0-3.5-2.5-6-6-6 0 3.5 2 6 6 6Z" fill="#86EFAC" fill-opacity="0.45"/>
    </svg>
  `,

  // Kelas 3: Wujud Benda & Gerak (Es, Air, Uap / Tetesan & Es)
  matterStates: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2v6"/>
      <path d="m4.93 4.93 4.24 4.24"/>
      <path d="M2 12h6"/>
      <path d="m4.93 19.07 4.24-4.24"/>
      <path d="M12 22v-6"/>
      <path d="m19.07 19.07-4.24-4.24"/>
      <path d="M22 12h-6"/>
      <path d="m19.07 4.93-4.24 4.24"/>
      <circle cx="12" cy="12" r="2.5" fill="#38BDF8"/>
    </svg>
  `,

  // Kelas 4: Gaya & Energi (Magnet & Kilat Energi)
  magnetEnergy: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m4 15 3 3"/>
      <path d="m17 4 3 3"/>
      <path d="m10 4 5 5"/>
      <path d="m4 10 5 5"/>
      <path d="m6 17 8.5-8.5a3.54 3.54 0 0 1 5 5L11 22l-5-5Z" fill="#FCA5A5" fill-opacity="0.35"/>
      <path d="M13 2 9 8h4l-2 6"/>
    </svg>
  `,

  // Kelas 5: Ekosistem & Siklus Air (Bumi, Air, Kehidupan)
  ecosystemGlobe: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#67E8F9" fill-opacity="0.25"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20"/>
      <path d="M2 12h20"/>
      <path d="M6 8c2 1 4 0 6 2s2 4 4 3"/>
      <path d="M4 16c2-1 4-1 6 1s4 1 5-1"/>
    </svg>
  `,

  // Kelas 6: Tata Surya & Kelistrikan (Planet Bercincin & Orbit)
  solarSystem: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="#FDE047" fill-opacity="0.5"/>
      <path d="M3 13c1.5 3 5 5.5 10 5.5 4 0 7-1.5 8-4"/>
      <path d="M21 11c-1.5-3-5-5.5-10-5.5-4 0-7 1.5-8 4"/>
      <circle cx="19" cy="6" r="1.5" fill="currentColor"/>
    </svg>
  `,

  // Kontrol Audio & Pembaca Suara
  speakerOn: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fill-opacity="0.2"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  speakerOff: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="22" y1="2" x2="2" y2="22"/>
    </svg>
  `,

  speakerWave: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fill-opacity="0.25"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  `,

  // Navigasi & Aksi
  arrowRight: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14"/>
      <path d="m13 6 6 6-6 6"/>
    </svg>
  `,

  arrowLeft: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m11 18-6-6 6-6"/>
      <path d="M5 12h14"/>
    </svg>
  `,

  refresh: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
      <path d="M21 3v5h-5"/>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
      <path d="M3 21v-5h5"/>
    </svg>
  `,

  gridSquares: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
    </svg>
  `,

  // Validasi & Koreksi
  checkCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#86EFAC" fill-opacity="0.3"/>
      <path d="m8.5 12.5 2.5 2.5 5-5"/>
    </svg>
  `,

  crossCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FECDD3" fill-opacity="0.35"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  `,

  lightbulb: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.4 4.5 2.7 5.7.5.5.8 1.2.8 1.9V18h7v-1.4c0-.7.3-1.4.8-1.9A6.97 6.97 0 0 0 19 9a7 7 0 0 0-7-7Z" fill="#FEF08A" fill-opacity="0.45"/>
    </svg>
  `,

  trophy: `
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#FDE047" fill-opacity="0.6"/>
    </svg>
  `,

  starFill: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#FACC15" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  starOutline: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  confettiPopper: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5.8 11.3 2 22l10.7-3.79"/>
      <path d="M4 3h.01"/>
      <path d="M22 8h.01"/>
      <path d="M15 2h.01"/>
      <path d="M22 20h.01"/>
      <path d="m22 2-2.24.75a2.5 2.5 0 0 0-1.6 1.6L17.4 6.6a2.5 2.5 0 0 1-1.6 1.6L13.5 9"/>
      <path d="m11 13 1.5 1.5"/>
    </svg>
  `,

  bookOpen: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  `
};

