import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./birdhouse-wellness.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--bh-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--bh-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta de Colaboración | Birdhouse · Ritual de Cierre y Manifestación";
const description =
  "Evento wellness de fin de año: experiencia liderada por Natalia Galvis (GAL's Studio) y documentada por Partnersflux. Contenido profesional + UGC de creadoras.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-birdhouse-wellness" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-birdhouse-wellness",
    siteName: "Partnersflux × GAL's Studio",
    locale: "es_CO",
    images: [{ url: ogImage, width: 800, height: 800, alt: "Partnersflux" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaBirdhouseWellnessLayout({ children }) {
  return (
    <div className={`bh-root ${outfit.className} ${outfit.variable} ${display.variable}`}>{children}</div>
  );
}
