# Vesile Sigorta — Kurumsal Web Sitesi

İstanbul merkezli Vesile Sigorta acentesi için Next.js ile geliştirilmiş
kurumsal web sitesi.

## Teknoloji Stack

- **Framework**: Next.js 14 (App Router)
- **Dil**: TypeScript
- **Styling**: Vanilla CSS (custom design system)
- **Fontlar**: Fraunces (display) + Manrope (body) — Google Fonts
- **Hosting**: Vercel

## Sayfalar

- `/` — Ana Sayfa (hero, neden biz, hizmet önizleme, CTA)
- `/hakkimizda` — Kurumsal hikâye ve değerler
- `/hizmetler` — 25+ branşın detaylı listesi
- `/iletisim` — Telefon, WhatsApp, e-posta, form, harita

## Tasarım

- **Palet**: Sıcak, toprak tonları — Moss Green (#1f3a2a), Terracotta
  (#c97b5a), Amber (#e8c070), Cream (#f7f2ea)
- **Yaklaşım**: Sıcak & samimi (aile/insan odaklı), klasik sigortacılığın
  soğuk kurumsallığından farklılaşan bir dil
- **Tipografi**: Karakterli serif (Fraunces) başlıkları + temiz sans-serif
  (Manrope) gövde

## Lokal Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde çalışır.

## Vercel'e Deploy

### GitHub üzerinden (önerilen)

1. Projeyi GitHub'a push et
2. [vercel.com](https://vercel.com)'a GitHub ile giriş yap
3. **Add New → Project** → GitHub repo'nu seç
4. **Deploy** (tüm ayarlar otomatik algılanır)
5. Deploy tamamlanınca Vercel size `*.vercel.app` uzantılı URL verir

### Custom Domain Bağlama (vesilesigorta.com)

1. Vercel Dashboard → Projenin **Settings** → **Domains**
2. `vesilesigorta.com` yaz → **Add**
3. Vercel iki adet DNS kaydı verir:
   - `A` record: `76.76.21.21`
   - veya `CNAME`: `cname.vercel-dns.com`
4. Cloudflare DNS'de bu kayıtları ekle (proxy'i kapat — **DNS only**)
5. Vercel otomatik SSL sertifikası alır (5-10 dakika)

## Yapılacaklar

- [ ] Gerçek telefon, adres ve harita koordinatlarını güncelle
- [ ] Resmi logo entegre et
- [ ] Teklif form backend'i (Resend / Vercel Form / kendi API)
- [ ] Gerçek ofis fotoğrafları
- [ ] Google Analytics / Plausible entegrasyonu
- [ ] Sitemap.xml ve robots.txt
