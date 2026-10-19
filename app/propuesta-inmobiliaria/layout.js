import { Manrope } from "next/font/google";
import "./inmobiliaria.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inmo-sans",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Estatus Inmobiliaria · Páginas, software y 3D";
const description =
  "Páginas, software y modelado 3D de viviendas para Estatus Inmobiliaria. Página $5.497.000 · Software $8.997.000 · Plataforma $15.997.000 · Partnersflux · @inmobiliariaestatus";
const ogImage = "/og/fluxa-logo.jpg";

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
    images: [{ url: ogImage, width: 800, height: 800, alt: "Fluxa · Partnersflux" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaInmobiliariaLayout({ children }) {
  return <div className={`inmo-root ${manrope.className} ${manrope.variable}`}>{children}</div>;
}
