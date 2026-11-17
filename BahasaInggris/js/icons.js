/**
 * Kuis Bahasa Inggris SD - Modul Ikon & Grafis Vektor (SVG & Font Awesome)
 * Bebas dari emoji keyboard bawaan sistem operasi.
 * Menggunakan Font Awesome 6 Free dan SVG komik kustom yang tajam & konsisten.
 */

const IconService = {
  /**
   * Menghasilkan elemen tag i Font Awesome
   * @param {string} iconClass - Nama class Font Awesome (misal: 'fa-star')
   * @param {string} extraClass - Class tambahan (opsional)
   * @returns {string} String HTML
   */
  fa(iconClass, extraClass = '') {
    const safeIcon = iconClass.startsWith('fa-') ? iconClass : `fa-${iconClass}`;
    return `<i class="fa-solid ${safeIcon} ${extraClass}" aria-hidden="true"></i>`;
  },

  /**
   * Menghasilkan ikon bintang komik (Emas / Abu-abu)
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
   * Menghasilkan ikon status jawaban (Benar / Perlu Belajar)
   * @param {boolean} isCorrect
   * @returns {string} String HTML
   */
  statusBadge(isCorrect) {
    if (isCorrect) {
      return `
        <span class="status-pill status-correct">
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          <span>Benar! Hebat!</span>
        </span>
      `;
    }
    return `
      <span class="status-pill status-incorrect">
        <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>
        <span>Perlu Diingat Lagi</span>
      </span>
    `;
  },

  /**
   * Ikon Speaker Audio Suara Soal
   */
  speakerIcon() {
    return `<i class="fa-solid fa-volume-high" aria-hidden="true"></i>`;
  }
};

