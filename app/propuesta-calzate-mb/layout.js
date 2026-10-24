import { Bodoni_Moda, Figtree } from "next/font/google";
import "./calzate-mb.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cm-display",
  adjustFontFallback: false,
});

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cm-sans",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Cálzate MB · Brand Evolution 2026–2027";
const description =
  "Partnersflux × Cálzate MB: estrategia de marca, producción audiovisual, lanzamientos y marketing digital. Brand Identity $3.500.000/mes · Brand Experience & Launch $4.950.000/mes · 90 días.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-calzate-mb" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-calzate-mb",
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

export default function PropuestaCalzateMbLayout({ children }) {
  return (
    <div className={`cm-root ${display.variable} ${sans.variable} ${sans.className}`}>{children}</div>
  );
}
