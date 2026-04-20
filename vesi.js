/* =========================================================
   VESİ MASCOT — 3D PNG karakter
   Tek bir ana görseli (Vesi 3D) tüm yuvalarda kullanır.
   Her yuva (hero / chat / fab / mini) için farklı crop
   uygulanır; böylece aynı karakter her boyutta doğru görünür.
   ========================================================= */

const VESI_IMG_SRC = 'vesi-wave.jpg';

// Yeni Vesi (dijital chibi mascot): karakter portrait görüntünün ortasında,
// baş üst %30'da, tüm vücut görülüyor. Hero'da tam figür, küçük yuvalarda
// baş-omuz crop'u uyguluyoruz.
const VESI_POSITIONS = {
  hero:      { pos: '50% 50%', fit: 'contain', round: false },
  fab:       { pos: '50% 28%', fit: 'cover',   round: true  },
  chat:      { pos: '50% 28%', fit: 'cover',   round: true  },
  curious:   { pos: '50% 30%', fit: 'cover',   round: true  },
  explain:   { pos: '50% 30%', fit: 'cover',   round: true  },
  calm:      { pos: '50% 30%', fit: 'cover',   round: true  },
  wink:      { pos: '50% 30%', fit: 'cover',   round: true  },
  listen:    { pos: '50% 30%', fit: 'cover',   round: true  },
  happy:     { pos: '50% 28%', fit: 'cover',   round: true  },
  celebrate: { pos: '50% 28%', fit: 'cover',   round: true  },
  wave:      { pos: '50% 28%', fit: 'cover',   round: true  },
};

function vesiMarkup(variant) {
  const v = variant || 'curious';
  const cfg = VESI_POSITIONS[v] || VESI_POSITIONS.curious;
  const cls = [
    'vesi-img',
    'vesi-img-' + v,
    cfg.round ? 'vesi-img-round' : 'vesi-img-hero',
  ].join(' ');
  const style = `object-fit:${cfg.fit};object-position:${cfg.pos};`;
  return `<img class="${cls}" src="${VESI_IMG_SRC}" alt="Vesi — Vesile Sigorta dijital asistanı" style="${style}" draggable="false" loading="lazy">`;
}

function mountVesi(el, variant) {
  if (!el) return;
  const v = variant || el.dataset.vesi || 'curious';
  el.classList.add('vesi-root');
  el.innerHTML = vesiMarkup(v);
}

function mountAllVesi() {
  document.querySelectorAll('[data-vesi]').forEach(el => mountVesi(el));
}

// PNG'de göz kırpma SVG'deki gibi yapılamaz — yerine ince bir parıltı/pulse
// efekti. Kullanıcı motion-reduce seçmişse hiçbir şey olmaz.
function startBlinking() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.vesi-root').forEach(el => {
    const pulse = () => {
      el.classList.add('is-pulse');
      setTimeout(() => el.classList.remove('is-pulse'), 420);
      setTimeout(pulse, 4500 + Math.random() * 5500);
    };
    setTimeout(pulse, 1500 + Math.random() * 4000);
  });
}

// Geriye uyumluluk — app.js eski ismi de çağırıyor olabilir
window.VesiSystem = {
  vesiSVG: vesiMarkup,
  vesiMarkup,
  mountVesi,
  mountAllVesi,
  startBlinking,
};
