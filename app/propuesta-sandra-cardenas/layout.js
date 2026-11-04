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
  "Propuesta comercial Partnersflux × Dra. Sandra Cárdenas. Odontología estética especializada: web, landings, CRM y captación en 90 días. Inversión USD 2.497.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-sandra-cardenas" },
  robots: { index: false, follow: false },
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
