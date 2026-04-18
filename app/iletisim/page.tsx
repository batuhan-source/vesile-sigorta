import type { Metadata } from "next";
import "./iletisim.css";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Vesile Sigorta ile iletişime geçin. Telefon, WhatsApp, e-posta veya ofis ziyareti. İstanbul merkezli sigorta acentesi.",
};

export default function Iletisim() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-inner">
            <div className="section-tag">İletişim</div>
            <h1>
              Bir telefon, <em>bir mesaj,</em>
              <br />
              ya da bir çay.
            </h1>
            <p className="contact-hero-lead">
              Sigorta konuşmak için randevuya gerek yok. Sorularınızı yanıtlamak,
              mevcut poliçelerinizi incelemek ve size özel çözümler sunmak için
              buradayız. İlk görüşme her zaman ücretsiz.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT COLUMN — Methods & Address */}
            <div>
              <div className="contact-methods">
                <a href="tel:+902165551234" className="contact-method">
                  <div className="contact-method-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-label">Telefon</div>
                    <div className="contact-method-value">+90 216 555 12 34</div>
                  </div>
                  <div className="contact-method-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>

                <a href="https://wa.me/905551234567" className="contact-method">
                  <div className="contact-method-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-label">WhatsApp</div>
                    <div className="contact-method-value">+90 555 123 45 67</div>
                  </div>
                  <div className="contact-method-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>

                <a href="mailto:info@vesilesigorta.com" className="contact-method">
                  <div className="contact-method-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <div className="contact-method-label">E-posta</div>
                    <div className="contact-method-value">info@vesilesigorta.com</div>
                  </div>
                  <div className="contact-method-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="address-block">
                <div className="address-label">Ofis Adresi</div>
                <h3>Vesile Sigorta Merkez Ofis</h3>
                <p>
                  İstanbul, Türkiye
                  <br />
                  (Detaylı adres için iletişime geçiniz)
                </p>

                <div className="hours-grid">
                  <div className="hours-row">
                    <span>Pazartesi – Cuma</span>
                    <span>09:00 – 18:30</span>
                  </div>
                  <div className="hours-row">
                    <span>Cumartesi</span>
                    <span>10:00 – 15:00</span>
                  </div>
                  <div className="hours-row">
                    <span>Pazar</span>
                    <span>Kapalı (WhatsApp açık)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Form */}
            <div className="contact-form-wrap">
              <h2>
                Ücretsiz <em>teklif alın</em>
              </h2>
              <p>Bilgilerinizi bırakın, en geç 24 saat içinde dönüş yapalım.</p>

              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" placeholder="05XX XXX XX XX" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input type="email" id="email" name="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">İlgilendiğiniz Sigorta</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>Seçiniz...</option>
                    <option value="kasko">Kasko</option>
                    <option value="trafik">Trafik Sigortası</option>
                    <option value="konut">Konut Sigortası</option>
                    <option value="dask">DASK</option>
                    <option value="saglik">Sağlık Sigortası</option>
                    <option value="hayat">Hayat Sigortası</option>
                    <option value="isyeri">İşyeri Sigortası</option>
                    <option value="bes">BES</option>
                    <option value="diger">Diğer / Emin Değilim</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Kısaca durumunuzdan veya ihtiyacınızdan bahsedin..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Teklif İste
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className="form-note">
                  Verileriniz güvendedir, 3. şahıslarla paylaşılmaz.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="container">
          <div className="map-head">
            <div className="section-tag">Ofisimiz</div>
            <h2>
              Bize <em>ulaşın.</em>
            </h2>
            <p>Çay sevdiğinizi söyleyin yeter, kaynattırırız.</p>
          </div>

          <div className="map-wrapper">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.9784%2C40.9884%2C29.0884%2C41.0384&layer=mapnik"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vesile Sigorta Ofis Lokasyonu"
            />
          </div>
        </div>
      </section>
    </>
  );
}
