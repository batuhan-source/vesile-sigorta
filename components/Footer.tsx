const WHATSAPP = "905327386717";

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
              Pendik, İstanbul merkezli sigorta acentesi. Aileniz ve işiniz
              için doğru korumayı, samimi bir yaklaşımla sağlıyoruz.
            </p>
          </div>

          <div>
            <h4>Menü</h4>
            <ul>
              <li><a href="#hizmetler">Hizmetler</a></li>
              <li><a href="#hakkimizda">Hakkımızda</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4>İletişim</h4>
            <ul>
              <li><a href="tel:+902163543374">0216 354 33 74</a></li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@vesilesigorta.com">info@vesilesigorta.com</a>
              </li>
              <li>Pendik / İstanbul</li>
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
