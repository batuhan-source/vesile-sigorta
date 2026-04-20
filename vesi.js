/* =========================================================
   VESİ MASCOT — mature-friendly abstract blob
   Not childish: soft geometric blob, calm eyes, subtle smile,
   kept abstract (no arms/legs on most expressions). Based on
   the logo's blob + checkmark family so logo + mascot feel
   kin.
   ========================================================= */

const VESI_EXPRESSIONS = {
  // Base greeting — eye contact, slight smile
  hero: {
    mouth: 'M 60 110 Q 80 125 100 110',
    mouthStyle: 'smile',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: true,
    arm: true,
  },
  // Mini card avatar, curious — head tilt
  curious: {
    mouth: 'M 62 112 Q 80 120 98 112',
    mouthStyle: 'smile',
    eyeOffset: { x: 3, y: -2 },
    brows: 'up',
    blush: false,
  },
  // Explaining — open smile
  explain: {
    mouth: 'M 58 108 Q 80 128 102 108',
    mouthStyle: 'open',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: true,
  },
  // Calm / composed
  calm: {
    mouth: 'M 64 114 L 96 114',
    mouthStyle: 'line',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: false,
  },
  // Wink — one eye closed
  wink: {
    mouth: 'M 60 110 Q 80 124 100 110',
    mouthStyle: 'smile',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: true,
    wink: true,
  },
  // Listening — tilted head, closed-lip smile
  listen: {
    mouth: 'M 64 113 Q 80 118 96 113',
    mouthStyle: 'smile',
    eyeOffset: { x: -3, y: 1 },
    brows: 'neutral',
    blush: false,
    tilt: -5,
  },
  // Happy — wide smile
  happy: {
    mouth: 'M 56 106 Q 80 132 104 106',
    mouthStyle: 'open',
    eyeOffset: { x: 0, y: 0 },
    brows: 'up',
    blush: true,
    tilt: 2,
  },
  // Celebrate — very happy
  celebrate: {
    mouth: 'M 56 106 Q 80 132 104 106',
    mouthStyle: 'open',
    eyeOffset: { x: 0, y: 0 },
    brows: 'up',
    blush: true,
    celebrate: true,
  },
  // Waving hello
  wave: {
    mouth: 'M 60 110 Q 80 125 100 110',
    mouthStyle: 'smile',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: true,
    arm: true,
    wave: true,
  },
  // FAB — small portrait
  fab: {
    mouth: 'M 62 112 Q 80 122 98 112',
    mouthStyle: 'smile',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: false,
  },
  // Chat header
  chat: {
    mouth: 'M 62 112 Q 80 122 98 112',
    mouthStyle: 'smile',
    eyeOffset: { x: 0, y: 0 },
    brows: 'neutral',
    blush: true,
  },
};

function vesiSVG(variant = 'hero') {
  const e = VESI_EXPRESSIONS[variant] || VESI_EXPRESSIONS.hero;
  const tilt = e.tilt || 0;
  const armAngle = e.wave ? -18 : 0;

  const mouthEl = e.mouthStyle === 'open'
    ? `<path class="vesi-mouth" d="${e.mouth} Z" fill="#2B1810" stroke="#2B1810" stroke-width="2" stroke-linejoin="round"/>
       <path d="M 66 114 Q 80 124 94 114" fill="#D94F5C"/>`
    : e.mouthStyle === 'line'
    ? `<path class="vesi-mouth" d="${e.mouth}" fill="none" stroke="#2B1810" stroke-width="3" stroke-linecap="round"/>`
    : `<path class="vesi-mouth" d="${e.mouth}" fill="none" stroke="#2B1810" stroke-width="3.5" stroke-linecap="round"/>`;

  const leftEye = e.wink
    ? `<path class="vesi-eye vesi-eye-l" d="M 60 82 Q 68 78 76 82" stroke="#2B1810" stroke-width="3" fill="none" stroke-linecap="round"/>`
    : `<ellipse class="vesi-eye vesi-eye-l" cx="68" cy="82" rx="5.5" ry="7" fill="#2B1810"/>
       <ellipse cx="70" cy="79" rx="2" ry="2.4" fill="white"/>`;

  const rightEye = `<ellipse class="vesi-eye vesi-eye-r" cx="92" cy="82" rx="5.5" ry="7" fill="#2B1810"/>
       <ellipse cx="94" cy="79" rx="2" ry="2.4" fill="white"/>`;

  const brows = e.brows === 'up'
    ? `<path d="M 60 68 Q 68 64 76 68" stroke="#2B1810" stroke-width="2.5" fill="none" stroke-linecap="round"/>
       <path d="M 84 68 Q 92 64 100 68" stroke="#2B1810" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
    : '';

  const blush = e.blush
    ? `<ellipse cx="56" cy="100" rx="7" ry="4" fill="#FFB8AE" opacity=".55"/>
       <ellipse cx="104" cy="100" rx="7" ry="4" fill="#FFB8AE" opacity=".55"/>`
    : '';

  const arm = e.arm
    ? `<g class="vesi-arm" transform="translate(120 110) rotate(${armAngle})">
         <path d="M 0 0 Q 14 -6 22 -22 Q 28 -10 22 4 Q 14 12 0 10 Z" fill="url(#vesiGradSoft)" stroke="rgba(0,0,0,.08)" stroke-width="1"/>
       </g>`
    : '';

  const sparkles = e.celebrate
    ? `<g class="vesi-sparkle">
        <path d="M 30 30 L 34 38 L 42 34 L 34 42 L 38 50 L 30 42 L 22 46 L 26 38 L 18 34 Z" fill="#FDC13A"/>
       </g>
       <g class="vesi-sparkle" style="animation-delay:.15s">
        <path d="M 130 40 L 134 48 L 142 44 L 134 52 L 138 60 L 130 52 L 122 56 L 126 48 L 118 44 Z" fill="#1FB981"/>
       </g>
       <g class="vesi-sparkle" style="animation-delay:.3s">
        <circle cx="20" cy="100" r="3" fill="#2B4FE8"/>
        <circle cx="145" cy="120" r="3" fill="#FDC13A"/>
       </g>`
    : '';

  return `
    <svg class="vesi-svg" viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="vesiGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stop-color="#4B6AFF"/>
          <stop offset="55%" stop-color="#2B4FE8"/>
          <stop offset="100%" stop-color="#1B2FB4"/>
        </linearGradient>
        <linearGradient id="vesiGradSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#4B6AFF"/>
          <stop offset="100%" stop-color="#2B4FE8"/>
        </linearGradient>
        <linearGradient id="vesiHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,.45)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
        <radialGradient id="vesiAura" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stop-color="#FDC13A" stop-opacity=".25"/>
          <stop offset="100%" stop-color="#FDC13A" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="80" cy="100" r="70" fill="url(#vesiAura)"/>

      ${sparkles}

      <g class="vesi-body-group" transform="rotate(${tilt} 80 100)">
        <!-- Body: blob, echoes logo silhouette -->
        <path class="vesi-body"
              d="M 80 30
                 C 110 30 135 44 140 70
                 C 145 95 138 120 125 135
                 C 110 152 92 160 80 160
                 C 68 160 48 152 34 134
                 C 20 116 15 92 22 68
                 C 30 44 55 30 80 30 Z"
              fill="url(#vesiGrad)"
              stroke="rgba(0,0,0,.08)" stroke-width="1.5"/>

        <!-- Top highlight -->
        <path d="M 50 45 Q 80 36 115 48 Q 120 55 115 62 Q 90 52 55 60 Q 47 55 50 45 Z"
              fill="url(#vesiHighlight)" opacity=".7"/>

        <!-- Tiny checkmark badge — tie to logo -->
        <g transform="translate(112 48)">
          <circle r="10" fill="#FDC13A"/>
          <path d="M -4 0 L -1 3 L 5 -3" stroke="#1B2FB4" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>

        <!-- Face -->
        ${brows}
        <g class="vesi-pupils" style="transform: translate(${e.eyeOffset.x}px, ${e.eyeOffset.y}px)">
          ${leftEye}
          ${rightEye}
        </g>
        ${blush}
        ${mouthEl}

        ${arm}
      </g>
    </svg>
  `;
}

function mountVesi(el, variant) {
  if (!el) return;
  const v = variant || el.dataset.vesi || 'hero';
  el.classList.add('vesi-root');
  el.innerHTML = vesiSVG(v);
}

function mountAllVesi() {
  document.querySelectorAll('[data-vesi]').forEach(el => mountVesi(el));
}

// Blinking — randomised intervals per element
function startBlinking() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.vesi-root').forEach(el => {
    const blink = () => {
      el.classList.add('is-blink');
      setTimeout(() => el.classList.remove('is-blink'), 140);
      setTimeout(blink, 3000 + Math.random() * 4500);
    };
    setTimeout(blink, 1000 + Math.random() * 3000);
  });
}

window.VesiSystem = { vesiSVG, mountVesi, mountAllVesi, startBlinking };
