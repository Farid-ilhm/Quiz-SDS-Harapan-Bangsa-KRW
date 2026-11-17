/**
 * Kuis Pendidikan Agama Kristen (PAK) SD - Modul Ikon & Grafis Vektor (SVG & Font Awesome)
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
          <span>Jawaban Tepat</span>
        </span>
      `;
    }
    return `
      <span class="status-pill status-incorrect">
        <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>
        <span>Perlu Diingat & Diperbaiki</span>
      </span>
    `;
  },

  /**
   * Maskot Mimi si Domba Cilik (Vektor SVG Komik Lucu Ceria)
   * @param {number} size - Ukuran lebar SVG
   * @returns {string} String SVG HTML
   */
  mascotSvg(size = 120) {
    return `
      <svg class="lamb-mascot-svg" width="${size}" height="${size}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Bayangan Komik Bawah -->
        <ellipse cx="60" cy="112" rx="36" ry="6" fill="#1E293B" opacity="0.25"/>
        
        <!-- Kaki Domba Lucu -->
        <rect x="42" y="90" width="10" height="20" rx="5" fill="#F1F5F9" stroke="#1E293B" stroke-width="3"/>
        <rect x="42" y="104" width="10" height="6" rx="2" fill="#1E293B"/>
        <rect x="68" y="90" width="10" height="20" rx="5" fill="#F1F5F9" stroke="#1E293B" stroke-width="3"/>
        <rect x="68" y="104" width="10" height="6" rx="2" fill="#1E293B"/>

        <!-- Badan Bulu Wol Domba -->
        <circle cx="44" cy="74" r="16" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
        <circle cx="76" cy="74" r="16" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
        <circle cx="60" cy="80" r="18" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
        <circle cx="60" cy="65" r="22" fill="#FFFFFF"/>

        <!-- Syal Ceria Bergaris Kuning-Merah -->
        <path d="M42 66 C48 76, 72 76, 78 66 C75 62, 45 62, 42 66 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="3"/>
        <path d="M70 70 L76 86 L66 84 Z" fill="#EF4444" stroke="#1E293B" stroke-width="2.5"/>

        <!-- Telinga Domba Lucu Menggantung (Kiri & Kanan) -->
        <g class="mascot-ear mascot-ear-left">
          <ellipse cx="28" cy="46" rx="14" ry="7" transform="rotate(-25 28 46)" fill="#FEE2E2" stroke="#1E293B" stroke-width="3"/>
        </g>
        <g class="mascot-ear mascot-ear-right">
          <ellipse cx="92" cy="46" rx="14" ry="7" transform="rotate(25 92 46)" fill="#FEE2E2" stroke="#1E293B" stroke-width="3"/>
        </g>

        <!-- Wajah Domba -->
        <ellipse cx="60" cy="48" rx="26" ry="22" fill="#FFF1F2" stroke="#1E293B" stroke-width="3.5"/>

        <!-- Mahkota Wol Lucu di Kepala -->
        <circle cx="46" cy="28" r="9" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
        <circle cx="60" cy="24" r="11" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>
        <circle cx="74" cy="28" r="9" fill="#FFFFFF" stroke="#1E293B" stroke-width="3"/>

        <!-- Mata Berbinar Lucu Ceria -->
        <g class="mascot-eye mascot-eye-left">
          <ellipse cx="49" cy="45" rx="5.5" ry="7" fill="#1E293B"/>
          <circle cx="47" cy="43" r="2.5" fill="#FFFFFF"/>
          <circle cx="51" cy="47" r="1.2" fill="#FFFFFF"/>
        </g>
        <g class="mascot-eye mascot-eye-right">
          <ellipse cx="71" cy="45" rx="5.5" ry="7" fill="#1E293B"/>
          <circle cx="69" cy="43" r="2.5" fill="#FFFFFF"/>
          <circle cx="73" cy="47" r="1.2" fill="#FFFFFF"/>
        </g>

        <!-- Pipi Merona Merah Muda Ceria -->
        <ellipse cx="38" cy="52" rx="4.5" ry="3" fill="#F43F5E" opacity="0.6"/>
        <ellipse cx="82" cy="52" rx="4.5" ry="3" fill="#F43F5E" opacity="0.6"/>

        <!-- Hidung & Senyuman Manis -->
        <polygon points="60,51 57,48 63,48" fill="#1E293B"/>
        <path d="M55 55 Q60 60 65 55" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      </svg>
    `;
  }
};

