/**
 * Koleksi Icon Web Vektor Gratis (SVG Web Icons)
 * Menghilangkan penggunaan emoji bawaan HP/OS agar tampilan seragam,
 * profesional, tajam, dan menyatu dengan estetika komik anak.
 */

const AppIcons = {
  // Tanaman / Tunas (Kelas 1 - Tingkat Dasar)
  seedling: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22v-8"/>
      <path d="M12 14c-4.4 0-8-3.6-8-8 4.4 0 8 3.6 8 8Z" fill="#86EFAC" fill-opacity="0.3"/>
      <path d="M12 10c4.4 0 8-3.6 8-8-4.4 0-8 3.6-8 8Z" fill="#86EFAC" fill-opacity="0.3"/>
    </svg>
  `,

  // Kucing Lucu (Kelas 2 - Warna & Sahabat Hewan)
  cat: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 5c-4 0-7.5 2-7.5 6 0 4.5 3.5 8 7.5 8s7.5-3.5 7.5-8c0-4-3.5-6-7.5-6Z" fill="#BAE6FD" fill-opacity="0.3"/>
      <path d="m5.5 8-2.5-5 5 2.5"/>
      <path d="m18.5 8 2.5-5-5 2.5"/>
      <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="11" r="1.5" fill="currentColor"/>
      <path d="M12 13v1.5"/>
      <path d="m10.5 15.5 1.5-1 1.5 1"/>
    </svg>
  `,

  // Gedung Sekolah (Kelas 3 - Keluarga & Sekolahku)
  school: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m4 6 8-4 8 4"/>
      <path d="m18 10 3.4 1.7a1 1 0 0 1 .6.9V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.4a1 1 0 0 1 .6-.9L6 10"/>
      <path d="M6 5v16"/>
      <path d="M18 5v16"/>
      <path d="M10 21v-4a2 2 0 0 1 4 0v4"/>
      <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
    </svg>
  `,

  // Jam Weker (Kelas 4 - Waktu & Hari)
  clock: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="13" r="8" fill="#FED7AA" fill-opacity="0.3"/>
      <polyline points="12 9 12 13 15 15"/>
      <path d="m5 3 3 3"/>
      <path d="m19 3-3 3"/>
      <line x1="7" y1="21" x2="5" y2="23"/>
      <line x1="17" y1="21" x2="19" y2="23"/>
    </svg>
  `,

  // Buah Apel (Kelas 5 - Makanan & Tempat)
  apple: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" fill="#FBCFE8" fill-opacity="0.3"/>
      <path d="M12 5V2"/>
      <path d="M12 2c1.5 0 3 .8 3 2"/>
    </svg>
  `,

  // Piala Juara (Kelas 6 - Mahir)
  trophy: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#DDD6FE" fill-opacity="0.3"/>
    </svg>
  `,

  // Speaker Suara Aktif
  volumeHigh: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  // Speaker Suara Mati / Mute
  volumeMute: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <line x1="22" y1="2" x2="2" y2="22"/>
      <path d="M15.5 15.5a5 5 0 0 0 0-7"/>
    </svg>
  `,

  // Tas Sekolah / Backpack (Label Banner Pilihan Kelas)
  backpack: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" fill="#FEF08A" fill-opacity="0.4"/>
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/>
      <path d="M8 10h8"/>
    </svg>
  `,

  // Bintang Penuh (Skor Hasil Kuis)
  starFilled: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#FACC15" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  // Bintang Kosong (Skor Hasil Kuis)
  starEmpty: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  // Tanda Centang / Benar
  check: `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,

  // Tanda Silang / Kurang Tepat
  xmark: `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,

  // Lampu Ide (Koreksi & Pembahasan Guru)
  lightbulb: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" fill="#FEF08A" fill-opacity="0.3"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </svg>
  `,

  // Papan Lembar Catatan (Review Lengkap)
  clipboard: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="16" height="18" x="4" y="4" rx="2" fill="#E0F2FE" fill-opacity="0.3"/>
      <path d="M8 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <path d="m9 14 2 2 4-4"/>
    </svg>
  `,

  // Putar Ulang / Coba Lagi Kuis
  rotate: `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24"/>
      <polyline points="21 3 21 8 16 8"/>
    </svg>
  `,

  // Panah Kanan
  arrowRight: `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `,

  // Panah Kiri (Kembali)
  chevronLeft: `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  `
};

if (typeof window !== "undefined") {
  window.AppIcons = AppIcons;
}

