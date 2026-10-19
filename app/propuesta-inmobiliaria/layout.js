import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./inmobiliaria.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--inmo-sans",
  adjustFontFallback: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--inmo-display",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Estatus Inmobiliaria · Páginas, software y 3D";
const description =
  "Páginas, software y modelado 3D de viviendas para Estatus Inmobiliaria. Página $5.497.000 · Software $8.997.000 · Plataforma $19.997.000 · Partnersflux · @inmobiliariaestatus";
const ogImage = "/og/estatus-inmobiliaria.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-inmobiliaria" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-inmobiliaria",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Estatus Inmobiliaria · Partnersflux" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaInmobiliariaLayout({ children }) {
  return (
    <div className={`inmo-root ${manrope.className} ${manrope.variable} ${cormorant.variable}`}>{children}</div>
  );
}
