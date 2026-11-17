/**
 * Kuis Bahasa Indonesia SD - Modul Ikon & Grafis Vektor (SVG & Font Awesome)
 * Bebas dari emoji keyboard bawaan sistem operasi.
 * Menggunakan Font Awesome 6 Free dan Ilustrasi Komik Vektor SVG Kustom.
 */

const IconService = {
  /**
   * Menghasilkan elemen tag i Font Awesome
   * @param {string} iconClass - Nama class Font Awesome (misal: 'fa-star')
   * @param {string} extraClass - Class tambahan opsional
   * @returns {string} String HTML
   */
  fa(iconClass, extraClass = '') {
    const safeIcon = iconClass.startsWith('fa-') ? iconClass : `fa-${iconClass}`;
    return `<i class="fa-solid ${safeIcon} ${extraClass}" aria-hidden="true"></i>`;
  },

  /**
   * Menghasilkan bintang komik bernuansa emas atau abu-abu
   * @param {boolean} filled - Apakah bintang terisi warna emas
   * @param {number} size - Ukuran pixel (default 36)
   * @returns {string} String SVG HTML
   */
  star(filled = true, size = 36) {
    const fillColor = filled ? '#FACC15' : '#E2E8F0';
    const strokeColor = '#1E293B';
    return `
      <svg class="comic-star-svg ${filled ? 'star-filled' : 'star-empty'}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        ${filled ? '<polygon points="12,5 13.8,9.5 17.5,10.2 14.5,13.2 15.2,17.2 12,15 8.8,17.2 9.5,13.2 6.5,10.2 10.2,9.5" fill="#FEF08A" opacity="0.6"/>' : ''}
      </svg>
    `;
  },

  /**
   * Menghasilkan badge status jawaban untuk lembar koreksi
   * @param {boolean} isCorrect - Benar atau Salah
   * @returns {string} String HTML
   */
  statusBadge(isCorrect) {
    if (isCorrect) {
      return `
        <span class="status-pill status-correct">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          <span>Benar! Hebat Sekali!</span>
        </span>
      `;
    }
    return `
      <span class="status-pill status-incorrect">
        <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>
        <span>Perlu Diingat & Dipelajari</span>
      </span>
    `;
  },

  /**
   * Maskot Si Kancil Pintar (SVG Komik Lucu Ceria)
   * @param {number} size - Ukuran lebar SVG
   * @returns {string} String SVG HTML
   */
  kancilMascot(size = 120) {
    return `
      <svg class="kancil-mascot-svg" width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Bayangan Komik Bawah -->
        <ellipse cx="60" cy="112" rx="38" ry="6" fill="#1E293B" opacity="0.25"/>
        
        <!-- Telinga Kancil Lucu (Kiri & Kanan) -->
        <g class="mascot-ear mascot-ear-left">
          <path d="M42 38 C32 18, 30 6, 40 4 C48 2, 52 20, 50 36 Z" fill="#D97706" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round"/>
          <path d="M40 32 C35 20, 34 10, 40 8 C44 7, 46 19, 45 30 Z" fill="#FDE68A"/>
        </g>
        <g class="mascot-ear mascot-ear-right">
          <path d="M78 38 C88 18, 90 6, 80 4 C72 2, 68 20, 70 36 Z" fill="#D97706" stroke="#1E293B" stroke-width="3.5" stroke-linejoin="round"/>
          <path d="M80 32 C85 20, 86 10, 80 8 C76 7, 74 19, 75 30 Z" fill="#FDE68A"/>
        </g>

        <!-- Tanduk Cilik Kancil Lucu -->
        <path d="M49 26 Q46 16 52 14 Q53 22 51 28" fill="#F59E0B" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M71 26 Q74 16 68 14 Q67 22 69 28" fill="#F59E0B" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>

        <!-- Kepala Kancil Utama -->
        <ellipse cx="60" cy="58" rx="36" ry="32" fill="#F59E0B" stroke="#1E293B" stroke-width="3.5"/>
        
        <!-- Moncong / Hidung Kancil Krem Lembut -->
        <path d="M44 60 C44 50, 76 50, 76 60 C76 76, 44 76, 44 60 Z" fill="#FEF3C7" stroke="#1E293B" stroke-width="3"/>
        <ellipse cx="60" cy="62" rx="6" ry="4" fill="#1E293B"/>
        <!-- Senyum Ramah -->
        <path d="M54 68 Q60 74 66 68" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M60 66 L60 69" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Mata Berbinar Lucu & Bersahabat -->
        <g class="mascot-eye mascot-eye-left">
          <ellipse cx="44" cy="46" rx="7" ry="9" fill="#1E293B"/>
          <circle cx="42" cy="44" r="3" fill="#FFFFFF"/>
          <circle cx="46" cy="48" r="1.5" fill="#FFFFFF"/>
        </g>
        <g class="mascot-eye mascot-eye-right">
          <ellipse cx="76" cy="46" rx="7" ry="9" fill="#1E293B"/>
          <circle cx="74" cy="44" r="3" fill="#FFFFFF"/>
          <circle cx="78" cy="48" r="1.5" fill="#FFFFFF"/>
        </g>

        <!-- Pipi Merona Komik -->
        <ellipse cx="32" cy="56" rx="6" ry="4" fill="#F87171" opacity="0.8"/>
        <ellipse cx="88" cy="56" rx="6" ry="4" fill="#F87171" opacity="0.8"/>

        <!-- Dasi Pita Cilik Merah Pelajar -->
        <path d="M54 84 L46 88 L52 94 Z" fill="#EF4444" stroke="#1E293B" stroke-width="2.5"/>
        <path d="M66 84 L74 88 L68 94 Z" fill="#EF4444" stroke="#1E293B" stroke-width="2.5"/>
        <circle cx="60" cy="88" r="4.5" fill="#DC2626" stroke="#1E293B" stroke-width="2.5"/>

        <!-- Buku Terbuka yang Dipegang Kancil -->
        <g class="mascot-book">
          <rect x="42" y="93" width="36" height="20" rx="3" fill="#38BDF8" stroke="#1E293B" stroke-width="3"/>
          <path d="M60 93 L60 113" stroke="#1E293B" stroke-width="2"/>
          <line x1="46" y1="99" x2="56" y2="99" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="46" y1="104" x2="54" y2="104" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="64" y1="99" x2="74" y2="99" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="64" y1="104" x2="72" y2="104" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
        </g>
      </svg>
    `;
  },

  /**
   * Piala Emas Komik untuk Layar Akhir
   * @param {number} size - Ukuran lebar SVG (default 140)
   * @returns {string} String SVG HTML
   */
  comicTrophy(size = 140) {
    return `
      <div class="trophy-wrapper">
        <svg class="comic-trophy-svg" width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <!-- Kilau Bintang Sekitar Piala -->
          <g class="trophy-sparkles">
            <polygon class="sparkle sparkle-1" points="24,20 27,27 34,30 27,33 24,40 21,33 14,30 21,27" fill="#FACC15" stroke="#1E293B" stroke-width="1.5"/>
            <polygon class="sparkle sparkle-2" points="98,16 100,22 106,24 100,26 98,32 96,26 90,24 96,22" fill="#FACC15" stroke="#1E293B" stroke-width="1.5"/>
            <polygon class="sparkle sparkle-3" points="60,6 62,11 67,13 62,15 60,20 58,15 53,13 58,11" fill="#FEF08A" stroke="#1E293B" stroke-width="1.5"/>
          </g>

          <!-- Gagang Kiri dan Kanan Piala Komik -->
          <path d="M38 38 C18 38, 14 62, 36 68" fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
          <path d="M38 38 C18 38, 14 62, 36 68" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>

          <path d="M82 38 C102 38, 106 62, 84 68" fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
          <path d="M82 38 C102 38, 106 62, 84 68" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>

          <!-- Mangkuk Piala Emas -->
          <path d="M32 26 H88 V54 C88 70 76 80 60 80 C44 80 32 70 32 54 Z" fill="#FACC15" stroke="#1E293B" stroke-width="4.5" stroke-linejoin="round"/>
          <!-- Pantulan Cahaya Komik pada Mangkuk -->
          <path d="M38 32 C38 48 44 68 52 72 C44 66 40 48 40 32 Z" fill="#FEF08A" opacity="0.8"/>

          <!-- Bintang Mini Tengah Piala -->
          <polygon points="60,42 63,49 71,50 65,56 67,64 60,60 53,64 55,56 49,50 57,49" fill="#F59E0B" stroke="#1E293B" stroke-width="2"/>

          <!-- Batang Piala -->
          <path d="M54 80 H66 V92 H54 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="4"/>

          <!-- Alas Tatakan Piala Bertingkat -->
          <path d="M42 92 H78 L82 102 H38 Z" fill="#D97706" stroke="#1E293B" stroke-width="4"/>
          <rect x="30" y="102" width="60" height="12" rx="3" fill="#1E293B"/>
          <rect x="34" y="104" width="52" height="4" rx="1.5" fill="#38BDF8"/>
        </svg>
      </div>
    `;
  }
};

