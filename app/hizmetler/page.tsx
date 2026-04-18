import type { Metadata } from "next";
import Link from "next/link";
import "./hizmetler.css";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Kasko, trafik, konut, DASK, sağlık, hayat, işyeri ve 25 farklı branşta sigorta hizmetleri. Vesile Sigorta ile tüm ihtiyaçlarınıza tek adresten çözüm.",
};

// Icon components
const Icon = ({ path }: { path: string }) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// Branch data organized by category
const categories = [
  {
    id: "arac",
    number: "01",
    label: "Araç",
    emphasis: "Sigortaları",
    lead: "Aracınız için gerekli olan yasal zorunlu sigortalar ve kapsamlı koruma paketleri.",
    items: [
      {
        id: "kasko",
        title: "Kasko",
        icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1",
        desc: "Çarpma, çalınma, yangın ve doğal afetlere karşı aracınıza tam koruma.",
        features: ["Hasarsızlık indirimi", "Yedek araç hizmeti", "Değer kaybı teminatı"],
      },
      {
        id: "trafik",
        title: "Trafik Sigortası",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
        desc: "Yasal zorunlu trafik sigortası, anında düzenleme.",
        features: ["Hemen geçerli", "Tüm şirketlerde fiyat karşılaştırma", "Online poliçe teslimi"],
      },
      {
        id: "imm",
        title: "İhtiyari Mali Mesuliyet",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        desc: "Trafik sigortasının üstünde ek mali sorumluluk teminatı.",
        features: ["Yüksek limitli koruma", "3. şahıs zararları", "Avukatlık masrafları"],
      },
      {
        id: "karayolu-tasimacilik",
        title: "Karayolu Taşımacılık",
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
        desc: "Ticari araçlar ve yük taşımacılığı için özel teminatlar.",
        features: ["Yük sigortası", "Ticari araç kasko", "Güzergâh teminatı"],
      },
    ],
  },
  {
    id: "konut",
    number: "02",
    label: "Konut &",
    emphasis: "Yaşam Alanı",
    lead: "Yuvanızı ve içindeki her şeyi korumak için kapsamlı sigorta paketleri.",
    items: [
      {
        id: "konut",
        title: "Konut Sigortası",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        desc: "Eviniz ve eşyalarınız için yangın, hırsızlık ve doğal afet koruması.",
        features: ["Eşya teminatı", "Cam kırılması", "Su baskını koruması"],
      },
      {
        id: "dask",
        title: "DASK",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        desc: "Zorunlu deprem sigortası — yasal gereklilik ve temel güvence.",
        features: ["Anında poliçe", "Zorunlu sigorta", "Hasar anında hızlı ödeme"],
      },
      {
        id: "yangin",
        title: "Yangın Sigortası",
        icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.24 17 7.25 17.61 8.59 18 10.48 18 12c0 2.92-1.64 5.21-4.004 5.965",
        desc: "İşyeri veya konut için özel yangın ve ek tehlike teminatları.",
        features: ["Deprem teminatı", "Hırsızlık teminatı", "Kasa hırsızlığı"],
      },
    ],
  },
  {
    id: "saglik-hayat",
    number: "03",
    label: "Sağlık &",
    emphasis: "Hayat",
    lead: "Siz ve sevdikleriniz için bugünü ve yarını güvence altına alan kişisel sigortalar.",
    items: [
      {
        id: "saglik",
        title: "Özel Sağlık Sigortası",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        desc: "Özel hastane hizmeti, ameliyat ve yatışlarınız için kapsamlı koruma.",
        features: ["Anlaşmalı hastane ağı", "Ayakta tedavi", "Check-up"],
      },
      {
        id: "tss",
        title: "Tamamlayıcı Sağlık",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        desc: "SGK'nın karşılamadığı fark ücretlerini karşılayan uygun fiyatlı paket.",
        features: ["Ekonomik prim", "SGK anlaşmalı hastaneler", "Çocuklar için özel"],
      },
      {
        id: "hayat",
        title: "Hayat Sigortası",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        desc: "Sevdiklerinizin geleceğini güvence altına alan hayat sigortası.",
        features: ["Vefat teminatı", "Maluliyet", "Kritik hastalık"],
      },
      {
        id: "ferdi-kaza",
        title: "Ferdi Kaza",
        icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        desc: "Ani ve beklenmedik kazalara karşı 24 saat kapsamlı teminat.",
        features: ["Günlük yaşam kazaları", "İş kazaları", "Tedavi masrafları"],
      },
      {
        id: "bes",
        title: "BES — Bireysel Emeklilik",
        icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
        desc: "Devlet katkılı emeklilik sistemiyle geleceğe yatırım yapın.",
        features: ["%30 devlet katkısı", "Vergi avantajları", "Esnek ödeme planı"],
      },
      {
        id: "seyahat",
        title: "Seyahat Sağlık",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        desc: "Yurt dışı gezileriniz için gereken tüm teminatlar.",
        features: ["Vize için geçerli", "Acil tıbbi yardım", "Bagaj kaybı"],
      },
    ],
  },
  {
    id: "ticari",
    number: "04",
    label: "Ticari &",
    emphasis: "Kurumsal",
    lead: "İşletmeniz, çalışanlarınız ve operasyonunuz için profesyonel sigorta çözümleri.",
    items: [
      {
        id: "isyeri",
        title: "İşyeri Sigortası",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        desc: "Ticari işletmeniz için yangın, hırsızlık ve 3. şahıs zarar teminatları.",
        features: ["Demirbaş teminatı", "Cam kırılması", "İş durması"],
      },
      {
        id: "nakliye",
        title: "Nakliye (Emtea)",
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
        desc: "Ticari malların taşıma sırasındaki riskleri için koruma.",
        features: ["Kara / deniz / hava", "Avarya teminatı", "Çalınma koruması"],
      },
      {
        id: "muhendislik",
        title: "Mühendislik Sigortaları",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
        desc: "İnşaat, montaj ve makine kırılması sigortaları.",
        features: ["İnşaat all-risk", "Makine kırılması", "Elektronik cihaz"],
      },
      {
        id: "sorumluluk",
        title: "Sorumluluk Sigortaları",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        desc: "İşveren, 3. şahıs ve mesleki sorumluluk teminatları.",
        features: ["Mesleki sorumluluk", "İşveren sorumluluğu", "Ürün sorumluluğu"],
      },
      {
        id: "kredi",
        title: "Kredi & Kefalet",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        desc: "Ticari alacaklar ve ihale/sözleşme teminatları.",
        features: ["Ticari alacak sigortası", "Kefalet senedi", "İhale teminatı"],
      },
      {
        id: "siber",
        title: "Siber Güvenlik",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        desc: "Veri ihlali, siber saldırı ve iş kesintisi için modern koruma.",
        features: ["Veri ihlali teminatı", "Fidye yazılımı", "İtibar zararı"],
      },
    ],
  },
  {
    id: "ozel",
    number: "05",
    label: "Özel Branş",
    emphasis: "Sigortaları",
    lead: "Tarım, tekne, deniz ve diğer özel ihtiyaçlar için uzman branşlarımız.",
    items: [
      {
        id: "tarim",
        title: "Tarım Sigortaları (TARSİM)",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        desc: "Ekili ürünler, sera, hayvan ve tarımsal varlıklar için teminat.",
        features: ["Dolu & don teminatı", "Sera sigortası", "Büyükbaş hayvan"],
      },
      {
        id: "tekne",
        title: "Tekne Sigortası",
        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        desc: "Özel tekne ve yatlar için kapsamlı deniz sigortası.",
        features: ["Tekne gövde", "Denizcilik sorumluluğu", "Kişisel eşya"],
      },
      {
        id: "turizm",
        title: "Turizm Amaçlı Sigortalar",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        desc: "Otel, seyahat acentesi ve turizm işletmeleri için özel paketler.",
        features: ["Müşteri sorumluluk", "İşletme paketi", "Personel sigortaları"],
      },
    ],
  },
];

export default function Hizmetler() {
  return (
    <>
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-inner">
            <div className="section-tag">Hizmetlerimiz</div>
            <h1>
              25 farklı branş, <em>bir tek yaklaşım:</em>
              <br /> doğru koruma.
            </h1>
            <p className="services-hero-lead">
              Araçtan eve, sağlıktan iş yerine — hayatın her alanında
              ihtiyacınıza uygun sigorta çözümünü tek adresten sunuyoruz.
              Hangi branşın size uygun olduğundan emin değil misiniz? Bir
              telefon, ücretsiz danışmanlık.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="service-category">
          <div className="container">
            <div className="category-head">
              <div>
                <div className="section-tag">Kategori {cat.number}</div>
                <div className="category-label">
                  {cat.label} <em>{cat.emphasis}</em>
                </div>
              </div>
              <div className="category-lead">{cat.lead}</div>
            </div>

            <div className="service-items">
              {cat.items.map((item) => (
                <div key={item.id} id={item.id} className="service-item">
                  <div className="service-item-header">
                    <div className="service-item-icon">
                      <Icon path={item.icon} />
                    </div>
                    <h3 className="service-item-title">{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                  <ul className="service-item-features">
                    {item.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="services-cta-bottom">
        <div className="container">
          <div className="services-cta-bottom-inner">
            <div className="section-tag" style={{ background: "rgba(247, 242, 234, 0.12)", color: "var(--amber-glow)" }}>
              Sıradaki adım
            </div>
            <h2>
              Size <em>hangisi</em> uygun, birlikte bulalım.
            </h2>
            <p>
              Hangi sigortaya ihtiyacınız olduğundan emin değilseniz, bir
              telefon uzaktayız. İlk görüşme ücretsiz ve bağlayıcı değil.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/iletisim" className="btn btn-primary">
                Ücretsiz Teklif Al
              </Link>
              <a href="https://wa.me/905551234567" className="btn btn-secondary" style={{ color: "var(--cream)", borderColor: "rgba(247, 242, 234, 0.3)" }}>
                WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
