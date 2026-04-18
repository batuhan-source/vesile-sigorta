import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vesile Sigorta | İstanbul Sigorta Acentesi",
    template: "%s | Vesile Sigorta",
  },
  description:
    "Vesile Sigorta — İstanbul merkezli sigorta acentesi. Kasko, trafik, konut, DASK, sağlık, hayat ve işyeri sigortası. Güvenilir, hızlı, profesyonel sigorta çözümleri.",
  keywords: [
    "sigorta",
    "İstanbul sigorta acentesi",
    "kasko",
    "trafik sigortası",
    "konut sigortası",
    "DASK",
    "sağlık sigortası",
    "hayat sigortası",
    "işyeri sigortası",
    "Vesile Sigorta",
  ],
  authors: [{ name: "Vesile Sigorta" }],
  creator: "Vesile Sigorta",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://vesilesigorta.com",
    title: "Vesile Sigorta | İstanbul Sigorta Acentesi",
    description:
      "Aileniz, işiniz ve sevdikleriniz için güvenilir sigorta çözümleri. İstanbul'dan tüm Türkiye'ye.",
    siteName: "Vesile Sigorta",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://vesilesigorta.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
