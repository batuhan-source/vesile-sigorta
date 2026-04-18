# Vesile Sigorta — Tek Sayfa Kurumsal Site

Pendik, İstanbul merkezli Vesile Sigorta acentesi için Next.js ile
geliştirilmiş sade, tek sayfa kurumsal site.

## Teknoloji

- **Framework**: Next.js 14 (App Router)
- **Dil**: TypeScript
- **Styling**: Vanilla CSS (custom design system)
- **Fontlar**: Fraunces (display) + Manrope (body) — Google Fonts
- **Hosting**: Vercel

## Yapı

Tek sayfa (`/`), 4 anchor bölümü:

- `#ust` — Hero
- `#hizmetler` — 2 sütun temiz liste (Bireysel + Kurumsal)
- `#hakkimizda` — 3 paragraf
- `#iletisim` — Ofis/WhatsApp/e-posta + adres + mesai + Pendik haritası

## Tasarım

- **Palet**: Moss Green (#1f3a2a), Terracotta (#c97b5a), Amber (#e8c070),
  Cream (#f7f2ea) — sıcak, toprak tonları
- **Yaklaşım**: Sade, aile sıcaklığı, kurumsal soğukluktan uzak
- **Tipografi**: Fraunces (başlıklar) + Manrope (gövde)

## İletişim Bilgileri

Tüm bilgiler aşağıdaki dosyalarda sabit:

- `app/page.tsx` → `PHONE`, `WHATSAPP`, `EMAIL` constants
- `components/Nav.tsx`, `components/Footer.tsx` → `WHATSAPP` const

Güncellemek için sadece bu sabitleri değiştirmek yeterli.

## Lokal Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde çalışır.

## Deploy

GitHub'a push → Vercel otomatik build → canlı. `vesilesigorta.com`
domain'i Vercel'de zaten bağlı.

## Yapılacaklar (opsiyonel)

- [ ] Resmi logo (şu an tipografik `V` rozeti kullanılıyor)
- [ ] Teklif formu (istenirse WhatsApp'a prefill mesaj atan form)
- [ ] Harita için exact koordinat (şu an adres sorgusuyla geçiyor)
- [ ] Google Analytics / Plausible
- [ ] sitemap.xml + robots.txt
