/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Kuis Seni Rupa SD
 * Maskot: Ciko si Kuas Ajaib & Palet Pelangi
 * Catatan: Vektor SVG murni tanpa emoji bawaan keyboard (Syarat 8).
 * Gaya visual: Garis outline komik tegas, penuh warna ceria, ramah anak.
 */

const AppIcons = {
  // Brand & Maskot
  artPaletteBrand: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.5 1.05 4.75 2.73 6.36.43.41.97.64 1.57.64H8c1.1 0 2-.9 2-2 0-.55.45-1 1-1h2c4.42 0 8-3.58 8-8 0-4.42-3.58-6-9-6z" fill="#FEF08A" stroke="#1E293B"/>
      <circle cx="7.5" cy="8.5" r="1.8" fill="#EF4444" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="12" cy="6.5" r="1.8" fill="#3B82F6" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="16.5" cy="8.5" r="1.8" fill="#10B981" stroke="#1E293B" stroke-width="1.2"/>
      <circle cx="15.5" cy="13.5" r="1.8" fill="#F59E0B" stroke="#1E293B" stroke-width="1.2"/>
    </svg>
  `,

  paintbrush: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18.37 2.63c.98.98.98 2.56 0 3.54L9 15.63l-5 1 1-5 9.46-9.46c.98-.98 2.56-.98 3.54 0l.37.46z" fill="#FED7AA"/>
      <path d="M4 16.63c-1.5 1.5-2 3.5-1 4.5s3 .5 4.5-1l-3.5-3.5z" fill="#F43F5E"/>
    </svg>
  `,

  // Kelas 1: Garis, Warna Dasar & Bentuk Geometris
  class1ShapesLines: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="7" cy="8" r="4.5" fill="#FEF08A" fill-opacity="0.6"/>
      <polygon points="17,3.5 21.5,12 12.5,12" fill="#FCA5A5" fill-opacity="0.6"/>
      <rect x="4" y="15" width="6.5" height="6.5" rx="1" fill="#BAE6FD" fill-opacity="0.6"/>
      <path d="M14 18 C16 15, 18 21, 21 18" stroke="#10B981" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  // Kelas 2: Campuran Warna Sekunder, Ritme & Origami
  class2ColorMix: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#DDD6FE" fill-opacity="0.5"/>
      <circle cx="12" cy="14" r="3" fill="#8B5CF6"/>
      <path d="M8 7 L12 3 L16 7" stroke="#F59E0B" stroke-width="2"/>
    </svg>
  `,

  // Kelas 3: Seni Dekoratif, Cetak Cap & Lempung 3D
  class3DecorativePrint: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#BBF7D0" fill-opacity="0.4"/>
      <path d="M12 7v10 M7 12h10" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="5" stroke="#F59E0B" stroke-width="2" stroke-dasharray="2 3"/>
      <circle cx="7" cy="7" r="1.5" fill="#EF4444"/>
      <circle cx="17" cy="17" r="1.5" fill="#EF4444"/>
    </svg>
  `,

  // Kelas 4: Arsitektur, Tekstur Arsir & Daur Ulang
  class4TextureCraft: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 3 3 10 21 10" fill="#FED7AA" fill-opacity="0.5"/>
      <rect x="5" y="10" width="14" height="11" rx="1" fill="#FEF08A" fill-opacity="0.4"/>
      <rect x="9" y="14" width="6" height="7" fill="#F97316"/>
      <line x1="6" y1="12" x2="8" y2="14" stroke="#1E293B" stroke-width="1.8"/>
      <line x1="8" y1="12" x2="10" y2="14" stroke="#1E293B" stroke-width="1.8"/>
    </svg>
  `,

  // Kelas 5: Ragam Hias Batik, Keseimbangan & Desain Poster
  class5BatikPoster: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#E0E7FF" fill-opacity="0.4"/>
      <path d="M12 3c0 5 5 9 9 9-4 0-9 4-9 9 0-5-5-9-9-9 4 0 9-4 9-9z" fill="#6366F1" fill-opacity="0.5"/>
      <circle cx="12" cy="12" r="2.5" fill="#F59E0B"/>
    </svg>
  `,

  // Kelas 6: Karya 3D, Perspektif & Pameran Seni
  class6Exhibition3D: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="#FBCFE8" fill-opacity="0.5"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  `,

  // Kontrol Audio / Suara
  volumeOn: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  `,

  volumeMute: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#E2E8F0"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,

  // Fitur Membaca Soal (Text-To-Speech)
  speakerSpeak: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FEF08A"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#F43F5E" stroke-width="2.5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="#F43F5E" stroke-width="2.5"/>
    </svg>
  `,

  speakerActive: `
    <svg class="icon-pulse-wave" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#F43F5E"/>
      <path d="M15 9c1.5 1.5 1.5 4.5 0 6"/>
      <path d="M18 6c3 3 3 9 0 12"/>
      <path d="M21 3c4.5 4.5 4.5 13.5 0 18"/>
    </svg>
  `,

  // Navigasi & Aksi
  arrowLeft: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  `,

  arrowRight: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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

  // Umpan Balik & Koreksi
  checkCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#059669" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#D1FAE5"/>
      <polyline points="9 12 11.5 14.5 15.5 9.5"/>
    </svg>
  `,

  xCircle: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#DC2626" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#FEE2E2"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  `,

  sparkleGlow: `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#F59E0B"/>
    </svg>
  `,

  bookReview: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#FEF3C7"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#FEF3C7"/>
    </svg>
  `,

  goldenTrophy: `
    <svg viewBox="0 0 24 24" width="72" height="72" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v3h10v-3c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/>
      <path d="M6 4h12v6c0 3.31-2.69 6-6 6s-6-2.69-6-6V4Z" fill="#FDE047"/>
      <circle cx="12" cy="9" r="2.5" fill="#D97706"/>
    </svg>
  `,

  goldenStar: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#FDE047" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `
};
