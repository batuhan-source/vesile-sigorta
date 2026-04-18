import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <div className="home-main">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                İstanbul · Sigorta Acentesi
              </div>

              <h1>
                Sevdikleriniz için <em>doğru koruma.</em>
                <br />
                Size özel bir yaklaşımla.
              </h1>

              <p className="hero-lead">
                Aileniz, işiniz ve geleceğiniz için sigorta bir formalite değil,
                bir güvencedir. Vesile Sigorta olarak her müşterimizle samimi
                bir ilişki kurar, ihtiyaçlarınıza en uygun çözümü birlikte
                buluruz.
              </p>

              <div className="hero-ctas">
                <Link href="/iletisim" className="btn btn-primary">
                  Ücretsiz Teklif Al
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="/hizmetler" className="btn btn-secondary">
                  Hizmetlerimizi İnceleyin
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="stat-number">2.500+</div>
                  <div className="stat-label">Mutlu Müşteri</div>
                </div>
                <div>
                  <div className="stat-number">25</div>
                  <div className="stat-label">Sigorta Branşı</div>
                </div>
                <div>
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Destek Hizmeti</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              {/* Large dark card */}
              <div className="hero-card hero-card-1">
                <div>
                  <div className="hero-card-1-label">
                    <span>✦</span>
                    Aile Paketi
                  </div>
                  <h3>
                    Her şey<br />
                    <em>yolunda</em> olsun
                  </h3>
                </div>
                <div className="hero-card-1-foot">
                  <div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", opacity: 0.7, marginBottom: "4px" }}>
                      AYLIK BAŞLANGIÇ
                    </div>
                    <strong>₺ 149</strong>
                  </div>
                  <div style={{ textAlign: "right", fontSize: "0.75rem", opacity: 0.7 }}>
                    Kasko + Konut + Sağlık<br />
                    3'ü bir arada
                  </div>
                </div>
              </div>

              {/* Small white card with policy list */}
              <div className="hero-card hero-card-2">
                <div className="hero-card-2-row">
                  <div className="hero-card-2-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l4 4L19 5M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div className="hero-card-2-row-content">
                    <div className="hero-card-2-title">Kasko Poliçesi</div>
                    <div className="hero-card-2-meta">Yenilendi · Mart 2026</div>
                  </div>
                  <div className="hero-card-2-status">Aktif</div>
                </div>

                <div className="hero-card-2-row">
                  <div className="hero-card-2-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="hero-card-2-row-content">
                    <div className="hero-card-2-title">Konut Sigortası</div>
                    <div className="hero-card-2-meta">12 aylık · DASK dahil</div>
                  </div>
                  <div className="hero-card-2-status">Aktif</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="hero-card hero-card-3">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="hero-card-3-text">
                  <strong>%100</strong>
                  Güvence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section why">
        <div className="container">
          <div className="why-head">
            <div>
              <div className="section-tag">Neden Biz</div>
              <h2>
                Rakam değil, <em>insan</em>
                <br /> odaklıyız.
              </h2>
            </div>
            <div className="why-lead">
              Sigorta poliçesi imzalamak değil, size uygun çözümü bulmak asıl
              işimiz. Her müşterimizin hikâyesi farklı — biz de buna göre
              çalışırız.
            </div>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-num">01 &nbsp; YAKLAŞIM</div>
              <h3>Sizi dinleriz</h3>
              <p>
                Telefon menüsü yerine gerçek bir insan. İhtiyaçlarınızı anlamadan
                poliçe önermeyiz. İlk görüşme ücretsiz, bağlayıcılığı yok.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-num">02 &nbsp; TECRÜBE</div>
              <h3>Doğru şirket</h3>
              <p>
                Türkiye'nin tüm önde gelen sigorta şirketleriyle çalışıyoruz.
                Size değil, bize en çok komisyon veren değil — sizin için en
                uygun olan poliçeyi seçiyoruz.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-num">03 &nbsp; YANINIZDA</div>
              <h3>Hasar anında</h3>
              <p>
                Bir kaza, bir arıza, beklenmedik bir olay... O anda tek başına
                kalmazsınız. Hasar sürecini sizin yerinize takip eder, çözüme
                kavuştururuz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section services-preview">
        <div className="container">
          <div className="services-head">
            <div className="section-tag">Hizmetlerimiz</div>
            <h2>
              Hayatın her alanı için <em>koruma.</em>
            </h2>
            <p>
              Araç, ev, iş, sağlık ve aile — 25 farklı sigorta branşında
              profesyonel hizmet sunuyoruz.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3>Kasko</h3>
              <p>Aracınız için kapsamlı koruma ve hasarsızlık indirimi.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3>Trafik</h3>
              <p>Yasal zorunlu trafik sigortası, en uygun fiyatlarla.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3>Konut & DASK</h3>
              <p>Yuvanızı her türlü riske karşı koruyun.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3>Sağlık</h3>
              <p>Özel sağlık ve tamamlayıcı sağlık sigortası.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Hayat</h3>
              <p>Aileniz için güvencede bir yarın.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>İşyeri</h3>
              <p>Ticari işletmeniz için kapsamlı koruma paketleri.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>BES & Bireysel</h3>
              <p>Emeklilik dönemine hazırlıklı olun.</p>
            </div>

            <div className="service-tile">
              <div className="service-tile-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3>+18 Farklı Branş</h3>
              <p>Nakliye, mühendislik, tarım ve daha fazlası.</p>
            </div>
          </div>

          <div className="services-cta">
            <Link href="/hizmetler" className="btn btn-secondary">
              Tüm Branşları İncele
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="section-tag" style={{ background: "rgba(247, 242, 234, 0.12)", color: "var(--amber-glow)" }}>
                Ücretsiz Danışmanlık
              </div>
              <h2>
                Konuşmak, bir <em>şey satın almak</em> demek değil.
              </h2>
              <p>
                Mevcut poliçelerinizi inceleyelim, eksiklerinizi görelim, daha
                uygun bir seçenek varsa söyleyelim. Bağlayıcı değil, ücretsiz.
              </p>
            </div>

            <div className="cta-actions">
              <Link href="/iletisim" className="btn btn-primary">
                Teklif Formu Doldur
              </Link>
              <a href="https://wa.me/905551234567" className="btn btn-secondary">
                WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
