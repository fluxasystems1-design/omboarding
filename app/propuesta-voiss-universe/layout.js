import { Figtree, Newsreader } from "next/font/google";
import "./voiss.css";

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-vu-sans",
  adjustFontFallback: false,
});

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-vu-display",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Voiss Universe · Hilda Gabriëls · Partnersflux";
const description =
  "Presencia Digital Monetizable para Voiss Universe: estrategia, contenido, producto digital y ventas. PDM Coaching Digital USD 947 · Pro USD 1.497.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-voiss-universe" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-voiss-universe",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, width: 800, height: 800, alt: "Fluxa · Partnersflux" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaVoissUniverseLayout({ children }) {
  return (
    <div className={`vu-root ${display.variable} ${sans.variable} ${sans.className}`}>{children}</div>
  );
}
