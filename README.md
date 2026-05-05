# Vesile Sigorta — Web Sitesi

Tüm sigorta türleri (Trafik, Kasko, Konut, DASK, Sağlık, Hayat, İşyeri, BES) için tek sayfalık tanıtım + hızlı teklif sitesi.

## Özellikler
- 📰 Sektör haberleri panosu (SEDDK, Sigorta Gazetesi, Sigorta Gündemi + şirket duyuruları)
- 💬 WhatsApp entegre teklif formu (`+90 532 738 67 17`)
- 📷 **Ruhsat OCR** — Tesseract.js ile tarayıcıda; 4-yön (0°/90°/180°/270°) rotasyon tespiti, plaka / tescil sıra no / TC / ad-soyad otomatik doldurma
- 🛡️ KVKK aydınlatma metni ve onay akışı
- 📱 Mobil uyumlu, küçük logo, sticky header

## Klasör Yapısı
```
.
├── index.html              # Ana sayfa
├── assets/
│   ├── css/
│   │   └── styles.css      # Tüm site stilleri
│   └── js/
│       ├── main.js         # Hamburger, haberler, prefill
│       ├── form.js         # Teklif formu + KVKK + WhatsApp gönderimi
│       └── ocr.js          # Ruhsat OCR (Tesseract.js, 4-yön rotation)
└── README.md
```

## Yerel çalıştırma
Statik bir site — herhangi bir HTTP sunucusu yeterli:
```bash
python3 -m http.server 8000
# veya
npx serve .
```
Ardından `http://localhost:8000` adresini açın.

## Yayına alma
- **GitHub Pages**: Repo'ya push'layın → Settings → Pages → branch `main` / root → kaydet
- **Netlify / Vercel / Cloudflare Pages**: Sürükle-bırak veya repo bağla, build komutu yok, publish dir = root
- **Standart hosting**: `index.html` ve `assets/` klasörünü FTP ile yükleyin

## İletişim Bilgileri (kod içinde)
- WhatsApp: `+90 532 738 67 17` → `assets/js/form.js` ve `index.html`
- Telefon: `0216 354 33 74` → `index.html`
- Adres: Batı Mh. Karanfil Sk. Aliman Apt. No:6-2 D:4

## Bağımlılıklar
- [Tesseract.js 5.1.1](https://github.com/naptha/tesseract.js) — CDN'den yükleniyor (sadece OCR için)
- Google Fonts: Plus Jakarta Sans + Instrument Serif
