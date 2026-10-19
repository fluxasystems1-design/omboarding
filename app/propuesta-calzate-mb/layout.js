import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./calzate-mb.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--cm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--cm-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Cálzate MB · De Cúcuta para toda Colombia";
const description =
  "Ecommerce y expansión para Cálzate MB: convierte el deseo de Instagram en compras, mayoristas y nuevas ciudades. Desde $3.197.000 COP · @calzatemym · Partnersflux.";
const ogImage = "/og/calzate-mb.jpg";

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
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Cálzate MB · Marly Balmaceda" }],
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
    <div className={`cm-root ${manrope.className} ${manrope.variable} ${cormorant.variable}`}>{children}</div>
  );
}
