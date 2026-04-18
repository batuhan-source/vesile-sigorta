import type { Metadata } from "next";
import "./hakkimizda.css";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Vesile Sigorta — İstanbul'da aile sıcaklığında hizmet veren sigorta acentesi. Hikâyemiz, değerlerimiz ve ekibimiz.",
};

export default function Hakkimizda() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div className="section-tag">Hakkımızda</div>
            <h1>
              Rakamlardan önce <em>insan,</em>
              <br />
              poliçeden önce <em>güven.</em>
            </h1>
            <p className="about-hero-lead">
              Vesile Sigorta, İstanbul'da aile sıcaklığıyla hizmet veren bir
              sigorta acentesidir. Amacımız doğru poliçeyi satmak değil, sizin
              için doğru kararı birlikte vermektir.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="container">
          <div className="story-grid">
            <div className="story-sticky">
              <div className="story-image">
                <div className="story-image-content">
                  <div className="story-image-label">Kurucu Sözü</div>
                  <div className="story-image-quote">
                    "Bir poliçe satarken değil, hasar anında yanınızda
                    olduğumuzda gerçek işimizi yapmış oluruz."
                  </div>
                  <div className="story-image-attrib">— Vesile Sigorta Ekibi</div>
                </div>
              </div>
            </div>

            <div className="story-content">
              <div className="section-tag">Hikâyemiz</div>
              <h2>
                Küçük bir acente, <em>büyük bir emanet.</em>
              </h2>
              <p>
                Vesile Sigorta bir kurumsal yapı olarak değil, <strong>aile
                işi</strong> olarak kuruldu. İlk müşterilerimiz komşularımız,
                akrabalarımız ve mahalle esnafımızdı. Bu bizim için bir şans
                değil, bir <strong>sorumluluktu</strong> — çünkü tanıdığınız
                birine sigorta satmak, kötü bir poliçe yazma lüksünü ortadan
                kaldırır.
              </p>
              <p>
                Yıllar geçti, müşteri sayımız binleri aştı. Ama yaklaşımımız
                değişmedi: <strong>Her müşteri, sizi tanıyan bir ailenin
                ferdidir.</strong> Randevular aceleyle değil, sohbetle başlar.
                Poliçeler önerilmez, birlikte seçilir. Hasar anında telefonu
                ilk açan biziz, son kapatan da.
              </p>
              <p>
                Bugün Vesile Sigorta, Türkiye'nin önde gelen tüm sigorta
                şirketleriyle çalışan, 25 farklı branşta hizmet veren bir
                acente. Ama bu büyüklüğü müşterimize değil, kendi
                sorumluluğumuza taşıyoruz. Siz hâlâ bir <strong>aile
                ferdisiniz</strong> — biz de hâlâ aynı sözün sahibiyiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="container">
          <div className="values-head">
            <div className="section-tag">Değerlerimiz</div>
            <h2>
              Yaklaşımımızı <em>şekillendiren</em> dört ilke.
            </h2>
            <p>
              Her poliçede, her hasarda, her telefonda bunları hatırlıyoruz.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3>Şeffaflık</h3>
                <p>
                  Komisyon oranlarımız, önerdiğimiz poliçenin her maddesi, eksik
                  ve fazlası — sorulmadan söylenir. Ince yazılar, sürpriz
                  koşullar olmaz.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3>Sahiplenme</h3>
                <p>
                  Hasar çağrısı geldiğinde "sigorta şirketini arayın" demeyiz.
                  Süreci sizin için biz takip ederiz. Dosyanız, bizim dosyamızdır.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3>Hız</h3>
                <p>
                  Poliçe teklifi aynı gün. Hasar başvurusu aynı saat içinde.
                  WhatsApp mesajınıza akşam 9'da da cevap gelir.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3>Aile Sıcaklığı</h3>
                <p>
                  Çağrı merkezi robotu yok. Sizinle konuşan, ismen tanıyan bir
                  insan var. Sorunuz aptalca değil, sorun çözümsüz değildir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers">
        <div className="container">
          <div className="numbers-head">
            <div className="section-tag">Rakamlarla</div>
            <h2>
              Hikâyemizi <em>özetlesek...</em>
            </h2>
          </div>

          <div className="numbers-grid">
            <div className="number-card">
              <div className="number-big">2.500+</div>
              <div className="number-label">Aktif Müşteri</div>
            </div>
            <div className="number-card">
              <div className="number-big">25</div>
              <div className="number-label">Sigorta Branşı</div>
            </div>
            <div className="number-card">
              <div className="number-big">15+</div>
              <div className="number-label">Sigorta Şirketi</div>
            </div>
            <div className="number-card">
              <div className="number-big">%98</div>
              <div className="number-label">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
