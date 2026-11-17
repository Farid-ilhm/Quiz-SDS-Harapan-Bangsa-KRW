/**
 * Koleksi Web Icons Vektor (SVG) - Kuis Pendidikan Pancasila SD Ceria
 * Semua icon adalah SVG berbasis web gratis, tajam di semua ukuran,
 * dan bebas dari emoji keyboard sistem agar konsisten pada gaya komik/kartun.
 */

const AppIcons = {
  // Garuda / Perisai Pancasila
  shieldPancasila: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#FEF08A" fill-opacity="0.4"/>
      <path d="M12 2v20"/>
      <path d="M4 11h16"/>
    </svg>
  `,

  // Kelas 1: Tunas Bintang (Awal Mengenal Simbol Pancasila)
  starBadge: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FDE047" fill-opacity="0.45"/>
    </svg>
  `,

  // Kelas 2: Rantai Persahabatan & Gotong Royong
  chainLink: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="#FED7AA" fill-opacity="0.4"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="#FED7AA" fill-opacity="0.4"/>
    </svg>
  `,

  // Kelas 3: Pohon Beringin (Persatuan & Keteduhan)
  treeBanyan: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22v-6"/>
      <path d="M9 16c-3 0-5-2-5-5 0-2.5 1.5-4.5 4-4.8A6 6 0 0 1 19 8c2.5.5 3.5 2.5 3.5 4.5 0 2.8-2.2 4.5-5 4.5h-8.5z" fill="#86EFAC" fill-opacity="0.45"/>
      <path d="M9 18h6"/>
    </svg>
  `,

  // Kelas 4: Kepala Banteng / Musyawarah Mufakat
  bullHead: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 4c0 3 2 5 4 5h6c2 0 4-2 4-5" />
      <path d="M7 9v4c0 3 2.5 6 5 6s5-3 5-6V9" fill="#FECDD3" fill-opacity="0.4"/>
      <circle cx="10" cy="13" r="1" fill="currentColor"/>
      <circle cx="14" cy="13" r="1" fill="currentColor"/>
      <path d="M10 16a2 2 0 0 0 4 0"/>
    </svg>
  `,

  // Kelas 5: Padi dan Kapas (Keadilan Sosial & Kemakmuran)
  wheatSheaf: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 22 16 8"/>
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" fill="#FDE047" fill-opacity="0.45"/>
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" fill="#FDE047" fill-opacity="0.45"/>
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" fill="#FDE047" fill-opacity="0.45"/>
      <path d="m20 2-3 3"/>
    </svg>
  `,

  // Kelas 6: Bendera Merah Putih & Piala Pahlawan Bangsa
  flagWaving: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="#F87171" fill-opacity="0.45"/>
      <line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  `,

  // Kontrol Suara & Speaker
  volumeHigh: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  volumeMute: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  // Tombol Dengarkan Soal (Text-to-Speech)
  readAloud: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 6a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0v-2a4 4 0 0 0-4-4Z" fill="#BAE6FD" fill-opacity="0.45"/>
      <path d="M19 11v1a7 7 0 0 1-14 0v-1"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  `,

  // Status Membaca / Animasi Suara
  speakingWave: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 10v4"/>
      <path d="M6 7v10"/>
      <path d="M10 4v16"/>
      <path d="M14 7v10"/>
      <path d="M18 10v4"/>
      <path d="M22 12v0"/>
    </svg>
  `,

  // Navigasi & Aksi
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

  refresh: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="1 4 1 10 7 10"/>
      <polyline points="23 20 23 14 17 14"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </svg>
  `,

  graduationCap: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" fill="#DDD6FE" fill-opacity="0.4"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  `,

  bookOpen: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#BAE6FD" fill-opacity="0.35"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#BAE6FD" fill-opacity="0.35"/>
    </svg>
  `,

  // Indikator Jawaban Benar & Salah
  checkCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#86EFAC" fill-opacity="0.4"/>
      <polyline points="8 12 11 15 16 9"/>
    </svg>
  `,

  timesCircle: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FCA5A5" fill-opacity="0.4"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  `,

  // Piala Juara & Bintang Bersinar
  trophy: `
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#FDE047" fill-opacity="0.45"/>
    </svg>
  `,

  sparkle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" fill="#FDE047"/>
    </svg>
  `,

  ribbonMedal: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" fill="#FDE047" fill-opacity="0.5"/>
      <path d="m8.2 13-3.2 9 7-3 7 3-3.2-9"/>
    </svg>
  `,

  heartPancasila: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="#F87171" fill-opacity="0.5"/>
    </svg>
  `
};

