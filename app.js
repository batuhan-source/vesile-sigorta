/* =========================================================
   VESİLE SİGORTA — app behavior
   - mascot mount + animations
   - hero entrance / typing bubble
   - timeline + stat counter via IntersectionObserver
   - accordion, form success, header scroll
   - chat widget (kural tabanlı, WA'ya yönlendirir)
   - tweakable controls (radius, vesi size)
   ========================================================= */

/* ---------- VESI_CONFIG: tek noktadan güncellenebilir iletişim bilgileri.
   GitHub'a push öncesi bu değerleri Vesile Sigorta'nın gerçek bilgileriyle
   doldurun. Tüm wa.me/ ve tel: linkleri ile footer otomatik güncellenir. */
const VESI_CONFIG = {
  whatsapp:    '905327386717',                                                   // WA: +90 532 738 67 17
  phone:       '0 (216) 354 33 74',                                              // ekranda görünen sabit hat
  phoneLink:   '+902163543374',                                                  // tel: tıklanınca aranır
  email:       'info@vesilesigorta.com',
  address:     'Pendik, İstanbul',                                               // kısa
  addressFull: 'Batı Mahallesi, Karanfil Sokak No: 6/2-4, 34890 Pendik',         // tam adres
  mapsUrl:     'https://www.google.com/maps/search/?api=1&query=' +
               encodeURIComponent('Batı Mahallesi Karanfil Sokak 6/2-4 Pendik İstanbul'),
  hours:       '7/24 hizmetinizdeyiz',
};

function waLink(prefill) {
  const n = String(VESI_CONFIG.whatsapp || '').replace(/\D/g, '');
  const t = prefill ? '?text=' + encodeURIComponent(prefill) : '';
  return `https://wa.me/${n}${t}`;
}

(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Vesi ----------
  window.VesiSystem.mountAllVesi();
  window.VesiSystem.startBlinking();

  // ---------- Config ile iletişim linklerini patch et ----------
  patchContactLinks();
  function patchContactLinks() {
    // Tüm wa.me/ linkleri
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => { a.href = waLink(); });
    // Tüm tel: placeholder linkleri
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      if (a.href === 'tel:+900000000000' || a.href.endsWith('tel:')) a.href = 'tel:' + VESI_CONFIG.phoneLink;
    });
    // Footer iletişim bloğu metinlerini güncelle
    document.querySelectorAll('.foot-contact').forEach(a => {
      const ico = a.querySelector('.foot-ico')?.textContent?.trim();
      const label = a.querySelector('span:last-child');
      if (ico === '📍' && label) {
        a.href = VESI_CONFIG.mapsUrl;
        a.target = '_blank';
        a.rel = 'noopener';
        const extra = VESI_CONFIG.addressFull ? `<br><span class="muted">${VESI_CONFIG.addressFull}</span>` : '';
        label.innerHTML = `${VESI_CONFIG.address}${extra}`;
      } else if (ico === '☎' && label) {
        a.href = 'tel:' + VESI_CONFIG.phoneLink;
        label.textContent = VESI_CONFIG.phone;
      } else if (ico === '💬' && label) {
        a.href = waLink();
      } else if (ico === '✉' && label) {
        a.href = 'mailto:' + VESI_CONFIG.email;
        label.textContent = VESI_CONFIG.email;
      }
    });
  }

  // ---------- Tweaks ----------
  const defaults = window.__TWEAK_DEFAULTS || { radius: 'soft', vesiSize: 1.0 };
  applyRadius(defaults.radius);
  applyVesiSize(defaults.vesiSize);

  function applyRadius(r) {
    document.body.classList.remove('radius-sharp', 'radius-soft', 'radius-very');
    document.body.classList.add('radius-' + r);
    document.querySelectorAll('[data-radius]').forEach(b => b.classList.toggle('is-active', b.dataset.radius === r));
  }
  function applyVesiSize(v) {
    document.documentElement.style.setProperty('--vesi-scale', v);
    const slider = document.getElementById('vesiSize');
    const val = document.getElementById('vesiSizeVal');
    if (slider) slider.value = v;
    if (val) val.textContent = Number(v).toFixed(2) + '×';
  }

  // Tweak events
  window.addEventListener('message', e => {
    if (!e.data) return;
    if (e.data.type === '__activate_edit_mode') {
      document.getElementById('tweaksPanel').hidden = false;
    }
    if (e.data.type === '__deactivate_edit_mode') {
      document.getElementById('tweaksPanel').hidden = true;
    }
  });
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');

  document.getElementById('tweaksClose')?.addEventListener('click', () => {
    document.getElementById('tweaksPanel').hidden = true;
  });
  document.querySelectorAll('[data-radius]').forEach(b => {
    b.addEventListener('click', () => {
      applyRadius(b.dataset.radius);
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { radius: b.dataset.radius } }, '*');
    });
  });
  document.getElementById('vesiSize')?.addEventListener('input', e => {
    const v = parseFloat(e.target.value);
    applyVesiSize(v);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { vesiSize: v } }, '*');
  });

  // ---------- Header scroll ----------
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Hero entrance ----------
  const vesiHero = document.getElementById('vesiHero');
  if (vesiHero) {
    vesiHero.classList.add('enter');
    setTimeout(() => vesiHero.classList.add('is-wave'), 700);
    setTimeout(() => typeBubble(), 1000);
  }

  function typeBubble() {
    const text = 'Merhaba, ben Vesi. Size hangi konuda yardımcı olayım?';
    const bubble = document.getElementById('vesiBubble');
    const typer = document.getElementById('bubbleTyper');
    const caret = bubble?.querySelector('.bubble-caret');
    const chips = document.getElementById('vesiChips');
    if (!bubble || !typer) return;
    bubble.classList.add('is-visible');
    if (reduce) {
      typer.textContent = text;
      caret?.classList.add('is-done');
      if (chips) chips.hidden = false;
      return;
    }
    let i = 0;
    const step = () => {
      typer.textContent = text.slice(0, i);
      if (i++ < text.length) setTimeout(step, 22 + Math.random() * 28);
      else {
        caret?.classList.add('is-done');
        if (chips) chips.hidden = false;
      }
    };
    step();
  }

  document.querySelectorAll('#vesiChips .chip').forEach(b => {
    b.addEventListener('click', () => {
      document.getElementById('teklif')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const select = document.getElementById('fBranch');
      if (select) {
        const map = { arac: 'Araç (Kasko + Trafik)', konut: 'Konut & DASK', isyeri: 'İşyeri & Sorumluluk' };
        select.value = map[b.dataset.branch] || '';
      }
    });
  });

  // ---------- Stat counters & timeline ----------
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      if (en.target.classList.contains('counter')) {
        animateCounter(en.target);
      } else if (en.target.id === 'timeline') {
        document.getElementById('tLineFill').style.width = '100%';
      } else if (en.target.classList.contains('gen-arc')) {
        en.target.classList.add('is-in');
      }
      io.unobserve(en.target);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.counter').forEach(c => io.observe(c));
  const tl = document.getElementById('timeline'); if (tl) io.observe(tl);
  document.querySelectorAll('.gen-arc').forEach(c => io.observe(c));

  function animateCounter(el) {
    const to = parseInt(el.dataset.to, 10);
    const dur = 1200;
    const start = performance.now();
    const tick = t => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(to * e);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = to;
    };
    requestAnimationFrame(tick);
  }

  // ---------- Accordion ----------
  document.querySelectorAll('.acc-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  // ---------- Form submit ----------
  const form = document.getElementById('quoteForm');
  const success = document.getElementById('formSuccess');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    success.hidden = false;
    document.querySelector('.success-vesi')?.classList.add('is-celebrate');
    setTimeout(() => document.querySelector('.success-vesi')?.classList.remove('is-celebrate'), 2000);
    form.querySelectorAll('input, select, textarea').forEach(f => f.disabled = true);
    form.querySelector('button[type="submit"]').disabled = true;
  });

  // ---------- Branch card hover — mini Vesi eye follows ----------
  document.querySelectorAll('.branch-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.querySelectorAll('.section-head .vesi-pupils').forEach(p => {
        const rect = card.getBoundingClientRect();
        const headRect = card.closest('section')?.querySelector('.section-head .mini-vesi')?.getBoundingClientRect();
        if (!headRect) return;
        const dx = Math.max(-4, Math.min(4, (rect.left + rect.width / 2 - headRect.left - headRect.width / 2) / 80));
        const dy = Math.max(-3, Math.min(3, (rect.top + rect.height / 2 - headRect.top - headRect.height / 2) / 80));
        p.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      document.querySelectorAll('.section-head .vesi-pupils').forEach(p => p.style.transform = '');
    });
  });

  // ---------- Chat widget ----------
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  const preview = document.getElementById('chatPreview');
  const badge = document.getElementById('fabBadge');
  const closeBtn = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatLog = document.getElementById('chatLog');

  let previewShown = false;
  setTimeout(() => {
    if (!panel || !panel.hidden) return;
    preview.hidden = false;
    badge.hidden = false;
    previewShown = true;
    setTimeout(() => { preview.hidden = true; }, 4500);
  }, 10000);

  fab?.addEventListener('click', openChat);
  closeBtn?.addEventListener('click', () => {
    panel.hidden = true;
  });

  function openChat() {
    if (!panel.hidden) { panel.hidden = true; return; }
    panel.hidden = false;
    preview.hidden = true;
    badge.hidden = true;
    if (!chatLog.dataset.init) {
      chatLog.dataset.init = '1';
      setTimeout(() => addBotMessage(
        'Merhaba! Ben Vesi — Vesile Sigorta dijital asistanı 👋 Size nasıl yardımcı olayım?',
        ['Ürünlerimiz', 'Adres', 'Telefon', 'Hasar oldu']
      ), 400);
    }
  }

  chatForm?.addEventListener('submit', e => {
    e.preventDefault();
    const q = chatInput.value.trim();
    if (!q) return;
    chatInput.value = '';
    addUserMessage(q);
    askVesi(q);
  });

  function addUserMessage(text) {
    const el = document.createElement('div');
    el.className = 'msg msg-user';
    el.innerHTML = `<div class="msg-bubble">${escapeHTML(text)}</div>`;
    chatLog.appendChild(el);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function addBotMessage(text, quick, cta) {
    const el = document.createElement('div');
    el.className = 'msg msg-bot';
    el.innerHTML = `<div class="msg-bubble">${text}</div>`;
    chatLog.appendChild(el);

    if (cta && cta.length) {
      const w = document.createElement('div');
      w.className = 'chat-cta';
      cta.forEach(c => {
        const a = document.createElement('a');
        a.href = c.href;
        a.textContent = c.label;
        a.className = c.whatsapp ? 'chat-cta-wa' : 'chat-cta-primary';
        if (c.href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
        w.appendChild(a);
      });
      chatLog.appendChild(w);
    }

    if (quick && quick.length) {
      const q = document.createElement('div');
      q.className = 'chat-quick';
      quick.forEach(label => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = label;
        b.addEventListener('click', () => {
          addUserMessage(label);
          askVesi(label);
        });
        q.appendChild(b);
      });
      chatLog.appendChild(q);
    }
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function addTyping() {
    const el = document.createElement('div');
    el.className = 'msg-typing';
    el.id = 'typingEl';
    el.innerHTML = '<span></span><span></span><span></span>';
    chatLog.appendChild(el);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function removeTyping() {
    document.getElementById('typingEl')?.remove();
  }

  // ---------- Vesi bilgi tabanı (vesi-bilgi.md özeti) ----------
  const VESI_KB = {
    adres: () => ({
      text: `📍 <strong>${VESI_CONFIG.address}</strong>${VESI_CONFIG.addressFull ? '<br>' + VESI_CONFIG.addressFull : ''}<br>${VESI_CONFIG.hours} 🟢`,
      cta: [{ label: 'Haritada aç', href: VESI_CONFIG.mapsUrl }],
      quick: ['Telefon', 'WhatsApp', 'Ürünlerimiz'],
    }),
    telefon: () => ({
      text: `☎ Bizi <strong>${VESI_CONFIG.phone}</strong> numaradan arayabilirsiniz. Müsait değilsek WhatsApp'tan da yazabilirsiniz — ekibimiz hızlı döner.`,
      cta: [
        { label: 'Şimdi ara', href: 'tel:' + VESI_CONFIG.phoneLink },
        { label: 'WhatsApp', href: waLink('Merhaba, bilgi almak istiyorum.'), whatsapp: true },
      ],
      quick: ['Adres', 'Ürünlerimiz'],
    }),
    whatsapp: () => ({
      text: 'WhatsApp bizim en hızlı kanalımız — işin uzmanı ekibimiz anında döner.',
      cta: [{ label: 'WhatsApp\'ı aç', href: waLink('Merhaba, bilgi almak istiyorum.'), whatsapp: true }],
      quick: ['Adres', 'Telefon', 'Ürünlerimiz'],
    }),
    urunler: {
      text: 'İşte sunduğumuz ana sigorta branşları — bir konuda kısa bilgi için dokunun:',
      quick: ['Kasko', 'Trafik', 'DASK', 'Konut', 'Sağlık', 'İşyeri & KOBİ', 'Hayat & BES', 'Nakliyat', 'Mühendislik', 'Tarım / TARSİM'],
    },
    kasko: {
      text: '🚗 <strong>Kasko</strong>, aracınızın <em>kendi hasarlarını</em> karşılar — çarpma, hırsızlık, yangın, doğal afet. İMM, ferdi kaza, yol yardım gibi ek teminatlarla güçlendirilebilir. Kasko ihtiyaridir ama araç sahipliğinde gerçek güvenceyi o sağlar.',
      cta: [{ label: 'Kasko teklifi al', href: waLink('Kasko için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Trafik', 'Ürünlerimiz', 'Adres'],
    },
    trafik: {
      text: '🚦 <strong>Zorunlu Trafik Sigortası (ZMMS)</strong> her motorlu araç için yasal zorunluluktur. Kaza yaparsanız <em>karşı tarafın</em> maddi ve bedeni zararını karşılar. 2025 maddi limit araç başına 300.000 ₺, sağlık/sakatlık limiti kişi başına 2.700.000 ₺.',
      cta: [{ label: 'Trafik teklifi al', href: waLink('Zorunlu trafik sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Kasko', 'Ürünlerimiz'],
    },
    dask: {
      text: '🏠 <strong>DASK (Zorunlu Deprem Sigortası)</strong> mesken tüm yapılar için zorunlu. Deprem ve deprem kaynaklı yangın/infilak/tsunami/yer kayması zararlarını karşılar. 2025 azami teminat mesken başına <strong>1.704.162 ₺</strong>. Eşya, enkaz ve konaklama için ayrıca konut sigortası önerilir.',
      cta: [{ label: 'DASK + Konut teklifi al', href: waLink('DASK ve konut sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Konut', 'Ürünlerimiz'],
    },
    konut: {
      text: '🏡 <strong>Konut Sigortası</strong> DASK\'ın üstüne; yangın, hırsızlık, dahili su, cam kırılması, 3. şahıs zararı ve eşya kaybı gibi geniş teminatlar sunar. Çilingir, tesisatçı, elektrikçi gibi asistans hizmetleri de paketlere dahil olabilir.',
      cta: [{ label: 'Konut teklifi al', href: waLink('Konut sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['DASK', 'Ürünlerimiz'],
    },
    saglik: {
      text: '🏥 İki seçenek: <strong>Tamamlayıcı Sağlık (TSS)</strong> — SGK\'lılar için ekonomik, anlaşmalı özel hastanelerde fark ödemezsiniz. <strong>Özel Sağlık (ÖSS)</strong> — daha geniş hastane ağı, yurt dışı ve ek teminatlar. Hangisi size uygun, ekibimiz hesaplasın.',
      cta: [{ label: 'Sağlık sigortası teklifi al', href: waLink('Sağlık sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Hayat & BES', 'Ürünlerimiz'],
    },
    isyeri: {
      text: '🏢 <strong>İşyeri & KOBİ Paket</strong> tek poliçede yangın, hırsızlık, cam, elektronik cihaz, iş durması, 3. şahıs ve işveren sorumluluk teminatlarını sunar. Restoran, market, atölye, klinik gibi sektörlere özel paketler de var.',
      cta: [{ label: 'İşyeri teklifi al', href: waLink('İşyeri / KOBİ sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Mühendislik', 'Ürünlerimiz'],
    },
    hayat: {
      text: '❤️ <strong>Hayat Sigortası</strong> vefat ve maluliyet teminatı sunar — kredi ya da aile güvencesi için. <strong>Bireysel Emeklilik (BES)</strong> <em>%25 devlet katkısıyla</em> tasarruf; 2025 üst limit 93.619,80 ₺.',
      cta: [{ label: 'Hayat / BES teklifi al', href: waLink('Hayat sigortası / BES için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Sağlık', 'Ürünlerimiz'],
    },
    nakliyat: {
      text: '🚢 <strong>Nakliyat (Emtia) Sigortası</strong> yüklerinizin çıkıştan varışa kadar uğrayabileceği hasar ve kayıpları karşılar. Seferlik tek poliçe, seferlik abonman veya yıllık blok abonman seçenekleri vardır. Dar teminat (sadece majör olaylar) veya All Risks (tüm riskler) seçebilirsiniz.',
      cta: [{ label: 'Nakliyat teklifi al', href: waLink('Nakliyat sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Mühendislik', 'Ürünlerimiz'],
    },
    muhendislik: {
      text: '🏗️ <strong>Mühendislik Sigortaları</strong>: İnşaat Tüm Riskler (CAR), Montaj Tüm Riskler (EAR), Makine Kırılması, Elektronik Cihaz. Proje bazlı tekliflendirme gerektirir.',
      cta: [{ label: 'Proje teklifi al', href: waLink('Mühendislik sigortası için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['İşyeri & KOBİ', 'Ürünlerimiz'],
    },
    tarim: {
      text: '🌾 <strong>TARSİM</strong> devlet destekli tarım sigortası: bitkisel ürün, sera, büyükbaş/küçükbaş hayvan, arıcılık, su ürünleri, ipek böcekçiliği (2025 yeni). 2025\'te devlet prim desteği <strong>%60</strong>.',
      cta: [{ label: 'TARSİM teklifi al', href: waLink('Tarım sigortası (TARSİM) için teklif almak istiyorum.'), whatsapp: true }],
      quick: ['Ürünlerimiz'],
    },
    hasar: {
      text: '⚠️ Önce can güvenliği. Sonra: <strong>hasar ihbar süresi 5 iş günü</strong> — geç bildirim teminat kaybına yol açabilir. Hemen WhatsApp\'tan yazın, ekibimiz sizi adım adım yönlendirsin.',
      cta: [{ label: 'Hasar için hemen WhatsApp', href: waLink('Hasar bildirimi yapmak istiyorum, yardımcı olur musunuz?'), whatsapp: true }],
      quick: ['Ürünlerimiz', 'Telefon'],
    },
    tesekkur: {
      text: 'Rica ederim! Başka bir konuda yardımcı olabilirim — ya da doğrudan ekibimizle konuşmak isterseniz WhatsApp her zaman açık. 🤝',
      cta: [{ label: 'WhatsApp', href: waLink('Merhaba!'), whatsapp: true }],
      quick: ['Ürünlerimiz', 'Adres'],
    },
    default: {
      text: 'Bu soruya size en doğru yanıtı vermesi için işin uzmanı ekibimize bağlıyorum — WhatsApp\'tan yazın, hemen dönüş yapıyorlar. 👇',
      cta: [{ label: 'WhatsApp\'a yaz', href: waLink('Merhaba, bir sorum var.'), whatsapp: true }],
      quick: ['Ürünlerimiz', 'Adres', 'Telefon'],
    },
  };

  // Anahtar kelime → bilgi tabanı eşleştirmesi (sıralama önemli; özgül olan önce)
  const VESI_ROUTES = [
    [/(te[sş]ekk[uü]r|sa[gğ]ol|eyvallah|thank)/i, 'tesekkur'],
    [/(adres|nerede|konum|mekan|ofis|şube|lokasyon|yol tarifi|harita)/i, 'adres'],
    [/(whats?app|\bwp\b|\bwa\b)/i, 'whatsapp'],
    [/(telefon|\btel\b|\bara(r|yabilir|ma|nız)?\b|numara)/i, 'telefon'],
    [/(ürün|branş|hizmet|ne satıyor|neler var|ürünler|branşlar|katalog)/i, 'urunler'],
    [/(hasar|kaza oldu|deprem oldu|yangın|çaldı|çalındı|ihbar|eksper)/i, 'hasar'],
    [/kasko/i, 'kasko'],
    [/(trafik|zmms|zorunlu trafik|mali mes[uü]liyet)/i, 'trafik'],
    [/(dask|deprem sigortas)/i, 'dask'],
    [/(konut|ev sigortas|daire|mesken|yangın sigortas)/i, 'konut'],
    [/(sa[gğ]l[iı]k|tss|özel sa[gğ]l[iı]k|oss|hastane|check ?up)/i, 'saglik'],
    [/(i[sş]yeri|kobi|dükkan|market|b[uü]ro|restoran|kafe|atolye|eczane)/i, 'isyeri'],
    [/(hayat sigortas|\bbes\b|emeklilik|bireysel emeklilik)/i, 'hayat'],
    [/(nakliyat|emtia|kargo|y[uü]k sigortas)/i, 'nakliyat'],
    [/(m[uü]hendislik|in[sş]aat|montaj|elektronik cihaz|makine k[iı]r|car|ear)/i, 'muhendislik'],
    [/(tar[iı]m|tarsim|[cç]ift[cç]i|hayvan sigortas|sera|ar[iı]c[iı]l[iı]k|ipek b[oö]c)/i, 'tarim'],
  ];

  function askVesi(q) {
    addTyping();
    const delay = 350 + Math.random() * 350;
    setTimeout(() => {
      removeTyping();
      let key = 'default';
      for (const [re, k] of VESI_ROUTES) { if (re.test(q)) { key = k; break; } }
      const entry = VESI_KB[key];
      const payload = typeof entry === 'function' ? entry() : entry;
      addBotMessage(payload.text, payload.quick, payload.cta);
    }, delay);
  }

  function escapeHTML(s) { return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  // ---------- Menu toggle (mobile) ----------
  document.getElementById('menuToggle')?.addEventListener('click', () => {
    const nav = document.querySelector('.site-nav');
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'white';
    nav.style.flexDirection = 'column';
    nav.style.padding = '16px';
    nav.style.boxShadow = 'var(--sh-md)';
  });
})();
