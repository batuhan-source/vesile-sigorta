import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">
                <span>V</span>
              </div>
              <span>Vesile Sigorta</span>
            </div>
            <p>
              İstanbul merkezli sigorta acentesi. Aileniz ve işiniz için
              doğru korumayı, samimi bir yaklaşımla sağlıyoruz.
            </p>
          </div>

          <div>
            <h4>Kurumsal</h4>
            <ul>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/hizmetler">Hizmetlerimiz</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4>Branşlar</h4>
            <ul>
              <li><Link href="/hizmetler#kasko">Kasko</Link></li>
              <li><Link href="/hizmetler#trafik">Trafik</Link></li>
              <li><Link href="/hizmetler#konut">Konut & DASK</Link></li>
              <li><Link href="/hizmetler#saglik">Sağlık</Link></li>
              <li><Link href="/hizmetler#hayat">Hayat</Link></li>
            </ul>
          </div>

          <div>
            <h4>İletişim</h4>
            <ul>
              <li>İstanbul, Türkiye</li>
              <li><a href="tel:+902165551234">+90 216 555 12 34</a></li>
              <li><a href="mailto:info@vesilesigorta.com">info@vesilesigorta.com</a></li>
              <li><a href="https://wa.me/905551234567">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Vesile Sigorta. Tüm hakları saklıdır.</div>
          <div>Acente Kodu: 571</div>
        </div>
      </div>
    </footer>
  );
}
