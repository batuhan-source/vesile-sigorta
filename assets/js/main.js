/* Vesile Sigorta — Ana etkileşimler
 * Hamburger menu, haber filtresi, hizmet kartı prefill, smooth scroll
 */
(function () {
  'use strict';

  // === Hamburger menu ===
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (ham && nav) {
    ham.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // === News board ===
  const NEWS = [
    { src: 'seddk', srcLabel: 'SEDDK', title: '2026 Yılı Trafik Sigortası Tarife Uygulamalarına İlişkin Genelge Yayımlandı', date: '12 Mart 2026', url: 'https://www.seddk.gov.tr/tr/duyurular' },
    { src: 'seddk', srcLabel: 'SEDDK', title: 'Sigorta Şirketlerinin Sermaye Yeterliliği Hakkında Düzenleme Güncellendi', date: '04 Mart 2026', url: 'https://www.seddk.gov.tr/tr/duyurular' },
    { src: 'gazete', srcLabel: 'Sigorta Gazetesi', title: 'Kasko Primlerinde 2026 İlk Çeyrek Trendleri: Ortalama %12 Artış', date: '08 Mart 2026', url: 'https://sigortagazetesi.com/' },
    { src: 'gazete', srcLabel: 'Sigorta Gazetesi', title: 'Tamamlayıcı Sağlık Sigortasında Üye Sayısı 5 Milyonu Aştı', date: '01 Mart 2026', url: 'https://sigortagazetesi.com/' },
    { src: 'gundem', srcLabel: 'Sigorta Gündemi', title: 'DASK Poliçe Sayısı Türkiye Genelinde 12 Milyona Yaklaştı', date: '10 Mart 2026', url: 'https://www.sigortagundemi.com/' },
    { src: 'gundem', srcLabel: 'Sigorta Gündemi', title: 'Bireysel Emeklilik Fon Büyüklüğü 1 Trilyon TL Sınırını Geçti', date: '06 Mart 2026', url: 'https://www.sigortagundemi.com/' },
    { src: 'sirket', srcLabel: 'Anadolu Sigorta', title: 'Yeni Mobil Hasar İhbar Uygulaması Aktif Kullanımda', date: '07 Mart 2026', url: '#' },
    { src: 'sirket', srcLabel: 'Allianz Türkiye', title: 'Konut Sigortalarında Akıllı Ev Cihazlarına Özel İndirim', date: '05 Mart 2026', url: '#' },
    { src: 'sirket', srcLabel: 'Aksigorta', title: 'Elektrikli Araçlara Özel Kasko Paketleri Lansmanı', date: '02 Mart 2026', url: '#' },
  ];

  const newsGrid = document.getElementById('newsGrid');
  function renderNews(filter = 'all') {
    if (!newsGrid) return;
    const items = filter === 'all' ? NEWS : NEWS.filter((n) => n.src === filter);
    if (items.length === 0) {
      newsGrid.innerHTML =
        '<div class="news-empty">Bu kategoride şu an haber bulunmuyor.</div>';
      return;
    }
    newsGrid.innerHTML = items
      .map(
        (n) => `
      <a class="news-card" href="${n.url}" target="_blank" rel="noopener">
        <div class="source">${n.srcLabel}</div>
        <h3>${n.title}</h3>
        <div class="meta">
          <span>${n.date}</span>
          <span class="read">Oku →</span>
        </div>
      </a>`
      )
      .join('');
  }
  renderNews();

  document.querySelectorAll('.news-tab').forEach((t) => {
    t.addEventListener('click', () => {
      document
        .querySelectorAll('.news-tab')
        .forEach((x) => x.classList.remove('active'));
      t.classList.add('active');
      renderNews(t.dataset.filter);
    });
  });

  // === Service-card prefill → form ===
  document.querySelectorAll('a[data-prefill]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const t = a.getAttribute('data-prefill');
      const qType = document.getElementById('qType');
      if (qType) {
        qType.value = t;
        // notify form module to update vehicle fields
        qType.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const target = document.getElementById('teklif');
      if (target) {
        const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setTimeout(() => qType && qType.focus({ preventScroll: true }), 600);
    });
  });
})();
