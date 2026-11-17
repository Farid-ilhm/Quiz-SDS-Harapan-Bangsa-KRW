/**
 * Koleksi Ikon Vektor Web (SVG) Murni - Kuis Seni Teater SD
 * Menggunakan vektor SVG murni tanpa emoji bawaan keyboard (Sesuai Syarat 8).
 * Dirancang khusus dengan estetika kartun/komik anak dengan garis outline tegas (comic lineart)
 * dan warna ceria ramah anak.
 */

const AppIcons = {
  // Brand & Maskot Seni Teater: Topeng Ganda Teater (Komedi & Tragedi)
  theaterBrand: `
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Topeng Senang (Komedi) -->
      <path d="M3 11c0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8-1.5 0-2.8-.4-4-1.1L3 19l1.1-4c-.7-1.2-1.1-2.5-1.1-4z" fill="#FEF08A" stroke="#1E293B"/>
      <!-- Mata Melengkung Gembira -->
      <path d="M8 9.5c.5-.7 1.5-.7 2 0" stroke="#1E293B" stroke-width="2.2"/>
      <path d="M14 9.5c.5-.7 1.5-.7 2 0" stroke="#1E293B" stroke-width="2.2"/>
      <!-- Senyum Lebar Teater -->
      <path d="M8.5 13.5c1.5 2 5.5 2 7 0" stroke="#1E293B" stroke-width="2.2"/>
    </svg>
  `,

  // Tombol Audio & Pengatur Suara
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

  curtain: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="3" rx="1" fill="#F59E0B" stroke="#1E293B"/>
      <path d="M4 6c1 5 1 10 0 15 M20 6c-1 5-1 10 0 15" stroke="#1E293B" stroke-width="2.2"/>
      <path d="M4 6c3 3 5 8 4 15 M20 6c-3 3-5 8-4 15" fill="#EF4444" fill-opacity="0.25" stroke="#DC2626" stroke-width="2"/>
      <path d="M8 14c2-1 4-1 8 0" stroke="#F59E0B" stroke-width="2"/>
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

  // Ikon Tiap Tingkat Kelas (1 sampai 6) - Khusus Seni Teater SD
  class1MimikWajah: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Wajah Ceria Tersenyum & Mata Berkedip -->
      <circle cx="12" cy="12" r="9" fill="#FEF08A"/>
      <circle cx="8.5" cy="10" r="1.5" fill="#1E293B"/>
      <path d="M14 10c.8-.5 1.8-.5 2.5 0" stroke="#1E293B" stroke-width="2.2"/>
      <path d="M8.5 14.5c1.5 2 5.5 2 7 0" stroke="#1E293B" stroke-width="2.2"/>
      <!-- Pipi Merona Merah Muda -->
      <circle cx="6.5" cy="13" r="1.2" fill="#F87171"/>
      <circle cx="17.5" cy="13" r="1.2" fill="#F87171"/>
    </svg>
  `,

  class2PantomimTopeng: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Topeng Teater & Sarung Tangan Pantomim -->
      <path d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v7a8 8 0 0 1-16 0V6z" fill="#E0F2FE"/>
      <ellipse cx="9" cy="9" rx="1.8" ry="2.2" fill="#0284C7"/>
      <ellipse cx="15" cy="9" rx="1.8" ry="2.2" fill="#0284C7"/>
      <path d="M10 14q2 2 4 0" stroke="#1E293B" stroke-width="2"/>
      <line x1="2" y1="9" x2="4" y2="9" stroke="#0284C7" stroke-width="2"/>
      <line x1="20" y1="9" x2="22" y2="9" stroke="#0284C7" stroke-width="2"/>
    </svg>
  `,

  class3BonekaTangan: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Wayang Golek / Boneka Tangan Lucu -->
      <circle cx="12" cy="7" r="4.5" fill="#FED7AA"/>
      <path d="M7 21v-5a5 5 0 0 1 10 0v5" fill="#F472B6"/>
      <circle cx="10.5" cy="6.5" r="1" fill="#1E293B"/>
      <circle cx="13.5" cy="6.5" r="1" fill="#1E293B"/>
      <path d="M11 9q1 1 2 0" stroke="#1E293B" stroke-width="1.8"/>
      <!-- Telinga Boneka Kelinci / Karakter -->
      <ellipse cx="9" cy="2.5" rx="1.2" ry="2" fill="#F472B6"/>
      <ellipse cx="15" cy="2.5" rx="1.2" ry="2" fill="#F472B6"/>
    </svg>
  `,

  class4TeaterTradisional: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Mahkota Teater Tradisional (Lenong / Ketoprak) -->
      <path d="M2 18l3-11 4.5 5 2.5-7 2.5 7 4.5-5 3 11H2z" fill="#FDE047"/>
      <circle cx="5" cy="7" r="1.5" fill="#EF4444"/>
      <circle cx="12" cy="5" r="1.8" fill="#3B82F6"/>
      <circle cx="19" cy="7" r="1.5" fill="#10B981"/>
      <rect x="2" y="18" width="20" height="3" rx="1" fill="#F59E0B"/>
    </svg>
  `,

  class5TataPanggung: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Lampu Sorot Panggung (Spotlight) & Panggung -->
      <path d="M4 3l4 4-2 3-4-4 2-3z" fill="#DDD6FE"/>
      <line x1="12" y1="2" x2="8" y2="6" stroke="#1E293B" stroke-width="2.4"/>
      <!-- Sinar Cahaya Sorot -->
      <path d="M7 8l13 8v5l-16-7v-3l3-3z" fill="#FEF08A" fill-opacity="0.4" stroke="#F59E0B" stroke-dasharray="2 2"/>
      <rect x="2" y="20" width="20" height="2.5" rx="1" fill="#1E293B"/>
    </svg>
  `,

  class6PentasPanggung: `
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Panggung Utama Teater Lengkap dengan Bintang -->
      <rect x="3" y="17" width="18" height="5" rx="1.5" fill="#FCA5A5" stroke="#1E293B"/>
      <line x1="6" y1="17" x2="6" y2="22" stroke="#1E293B" stroke-width="2"/>
      <line x1="18" y1="17" x2="18" y2="22" stroke="#1E293B" stroke-width="2"/>
      <!-- Aktor Kecil dengan Tangan Terbuka di Panggung -->
      <circle cx="12" cy="7" r="2.8" fill="#FDBA74"/>
      <path d="M12 10v4 M8 12l4-1 4 1 M10 17l2-3 2 3" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round"/>
      <polygon points="12 2 13 4 15 4 13.5 5.5 14 7.5 12 6.2 10 7.5 10.5 5.5 9 4 11 4" fill="#FBBF24"/>
    </svg>
  `,

  // Layar Hasil & Perayaan: Piala Emas & Bintang Bersinar (Syarat 9)
  trophyGold: `
    <svg viewBox="0 0 24 24" width="76" height="76" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- Pegangan Kiri & Kanan Piala -->
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" fill="#FDE68A"/>
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" fill="#FDE68A"/>
      <!-- Cawan Utama Emas -->
      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill="#FBBF24"/>
      <!-- Topeng Teater Mini di Tengah Cawan Piala -->
      <circle cx="12" cy="7.5" r="2.2" fill="#EF4444"/>
      <path d="M11 9q1 1 2 0" stroke="#FFFFFF" stroke-width="1.2"/>
      <!-- Batang & Dudukan Piala -->
      <line x1="12" y1="16" x2="12" y2="19" stroke="#1E293B" stroke-width="2.8"/>
      <rect x="7" y="19" width="10" height="3" rx="1.5" fill="#F59E0B"/>
    </svg>
  `,

  starGold: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#FBBF24" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  starEmpty: `
    <svg viewBox="0 0 24 24" width="34" height="34" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  `,

  // Gimmick Tombol Interaktif Panggung Teater
  applause: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" stroke="#1E293B"/>
      <path d="M14 10V4a2 2 0 0 0-4 0v7" stroke="#1E293B"/>
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" stroke="#1E293B"/>
      <path d="M6 14v-2a2 2 0 0 0-4 0v5a7 7 0 0 0 14 0v-4" fill="#FED7AA" stroke="#1E293B"/>
      <!-- Percikan Tepuk Tangan -->
      <path d="M19 4l2-2 M21 9h2 M18 15l2 1" stroke="#F59E0B" stroke-width="2"/>
    </svg>
  `,

  theatreMaskHappy: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#FEF08A" stroke="#1E293B"/>
      <circle cx="9" cy="10" r="1.5" fill="#1E293B"/>
      <circle cx="15" cy="10" r="1.5" fill="#1E293B"/>
      <path d="M8.5 14.5c1.5 2 5.5 2 7 0" stroke="#1E293B" stroke-width="2.2"/>
    </svg>
  `,

  theatreMaskSad: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#BAE6FD" stroke="#1E293B"/>
      <circle cx="9" cy="10" r="1.5" fill="#1E293B"/>
      <circle cx="15" cy="10" r="1.5" fill="#1E293B"/>
      <path d="M8.5 16.5c1.5-2 5.5-2 7 0" stroke="#1E293B" stroke-width="2.2"/>
    </svg>
  `,

  theatreMaskSurprise: `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="#BBF7D0" stroke="#1E293B"/>
      <ellipse cx="9" cy="9.5" rx="1.5" ry="2" fill="#1E293B"/>
      <ellipse cx="15" cy="9.5" rx="1.5" ry="2" fill="#1E293B"/>
      <ellipse cx="12" cy="15" rx="2.5" ry="3" fill="#EF4444" stroke="#1E293B"/>
    </svg>
  `
};
