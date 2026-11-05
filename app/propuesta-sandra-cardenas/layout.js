import { Archivo_Black, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./sandra.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sc-sans",
  adjustFontFallback: false,
});

const script = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
  variable: "--font-sc-script",
  adjustFontFallback: false,
});

const display = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sc-display",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "PDM Clínica Growth 360 | Dra. Sandra Cárdenas · Odontología Estética";
const description =
  "Propuesta comercial Partnersflux × Dra. Sandra Cárdenas. Contenido para la pauta, página web, tres landings y WhatsApp. Inversión $3.590.000. Se inicia con el 50%. 45 días.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-sandra-cardenas" },
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: "/og/fluxa-logo.jpg", type: "image/jpeg" }],
    apple: "/og/fluxa-logo.jpg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-sandra-cardenas",
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

export default function PropuestaSandraCardenasLayout({ children }) {
  return (
    <div className={`sc-root ${display.variable} ${script.variable} ${sans.variable} ${sans.className}`}>{children}</div>
  );
}
