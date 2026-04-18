import "./home.css";

const WHATSAPP = "905327386717";
const WHATSAPP_DISPLAY = "+90 532 738 67 17";
const PHONE = "+902163543374";
const PHONE_DISPLAY = "0216 354 33 74";
const EMAIL = "info@vesilesigorta.com";

// Harita için adres sorgusu — Google Maps embed'e geçer
const MAP_QUERY = encodeURIComponent(
  "Batı Mahallesi Karanfil Sokak Aliman Apartmanı No:6 Pendik İstanbul"
);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="home-main">
      {/* ===== HERO ===== */}
      <section className="hero" id="ust">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              İstanbul · Pendik — Sigorta Acentesi
            </div>

            <h1>
              Sevdikleriniz için <em>doğru koruma,</em>
              <br />
              size özel bir yaklaşımla.
            </h1>

            <p className="hero-lead">
              Aileniz, işiniz ve geleceğiniz için sigorta bir formalite değil,
              bir güvencedir. Vesile Sigorta olarak her müşterimizle samimi bir
              ilişki kurar, ihtiyaçlarınıza en uygun çözümü birlikte buluruz.
            </p>

            <div className="hero-ctas">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                WhatsApp'tan Yaz
                <Arrow />
              </a>
              <a href={`tel:${PHONE}`} className="btn btn-secondary">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HİZMETLER ===== */}
      <section className="services" id="hizmetler">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Hizmetlerimiz</div>
            <h2>
              Hayatın her alanı için <em>koruma.</em>
            </h2>
            <p>
              25 farklı branşta çözüm. Hangisi size uygun, birlikte karar
              veririz.
            </p>
          </div>

          <div className="services-cols">
            <div className="services-col">
              <h3 className="services-col-title">Bireysel</h3>
              <ul>
                <li>Kasko &amp; Trafik Sigortası</li>
                <li>İhtiyari Mali Mesuliyet</li>
                <li>Konut Sigortası &amp; DASK</li>
                <li>Özel Sağlık &amp; Tamamlayıcı Sağlık</li>
                <li>Hayat Sigortası &amp; Ferdi Kaza</li>
                <li>BES — Bireysel Emeklilik</li>
                <li>Seyahat Sağlık</li>
              </ul>
            </div>

            <div className="services-col">
              <h3 className="services-col-title">Kurumsal &amp; Ticari</h3>
              <ul>
                <li>İşyeri Sigortası</li>
                <li>Nakliye &amp; Emtea</li>
                <li>Mühendislik &amp; İnşaat All-Risk</li>
                <li>Mesleki &amp; İşveren Sorumluluk</li>
                <li>Tarım Sigortaları (TARSİM)</li>
                <li>Tekne &amp; Deniz</li>
                <li>Siber Güvenlik</li>
              </ul>
            </div>
          </div>

          <p className="services-note">
            Listede göremediğiniz bir ihtiyacınız mı var?{" "}
            <a href={`tel:${PHONE}`}>Arayın</a>, konuşalım.
          </p>
        </div>
      </section>

      {/* ===== HAKKIMIZDA ===== */}
      <section className="about" id="hakkimizda">
        <div className="container">
          <div className="about-grid">
            <div className="about-head">
              <div className="section-tag">Hakkımızda</div>
              <h2>
                Rakamlardan önce <em>insan,</em>
                <br />
                poliçeden önce <em>güven.</em>
              </h2>
            </div>
            <div className="about-text">
              <p>
                Vesile Sigorta, Pendik'te aile sıcaklığıyla hizmet veren bir
                sigorta acentesidir. Amacımız doğru poliçeyi satmak değil,
                sizin için doğru kararı birlikte vermektir.
              </p>
              <p>
                Türkiye'nin önde gelen sigorta şirketleriyle çalışıyoruz. Size
                en yüksek komisyonu veren değil, ihtiyacınıza en uygun olan
                poliçeyi öneriyoruz.
              </p>
              <p>
                Hasar anı, gerçek işimizi yaptığımız andır. Telefonu ilk açan,
                süreci sonuna kadar takip eden biziz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== İLETİŞİM ===== */}
      <section className="contact" id="iletisim">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">İletişim</div>
            <h2>
              Bir telefon, <em>bir mesaj,</em>
              <br />
              ya da bir çay.
            </h2>
            <p>
              Sigorta konuşmak için randevuya gerek yok. İlk görüşme her zaman
              ücretsiz, bağlayıcı değil.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <a href={`tel:${PHONE}`} className="contact-method">
                <span className="contact-method-label">Ofis</span>
                <span className="contact-method-value">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method-label">WhatsApp</span>
                <span className="contact-method-value">{WHATSAPP_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact-method">
                <span className="contact-method-label">E-posta</span>
                <span className="contact-method-value">{EMAIL}</span>
              </a>

              <div className="contact-address">
                <div className="contact-address-label">Ofis</div>
                <address>
                  Batı Mahallesi, Karanfil Sokak
                  <br />
                  Aliman Apartmanı No:6-2, Daire:4
                  <br />
                  Pendik / İstanbul
                </address>
              </div>

              <div className="contact-hours">
                <div>
                  <span>Pazartesi – Cuma</span>
                  <span>09:00 – 18:30</span>
                </div>
                <div>
                  <span>Cumartesi</span>
                  <span>10:00 – 15:00</span>
                </div>
                <div>
                  <span>Pazar</span>
                  <span>WhatsApp açık</span>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vesile Sigorta Ofis Lokasyonu — Pendik"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
