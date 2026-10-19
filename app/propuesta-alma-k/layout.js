import { Fraunces, Outfit } from "next/font/google";
import "./alma-k.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--ak-sans",
  adjustFontFallback: false,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--ak-display",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | ALMAK · Ecommerce estratégico";
const description =
  "Lo que han construido merece una tienda que esté a su altura. Ecommerce, automatización y crecimiento digital · Partnersflux · @almakcol";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-alma-k" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-alma-k",
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

export default function PropuestaAlmaKLayout({ children }) {
  return <div className={`ak-root ${outfit.className} ${outfit.variable} ${fraunces.variable}`}>{children}</div>;
}
