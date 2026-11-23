import { Poppins } from "next/font/google";
import "./ar.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta comercial | AR Pilates Estudio · Partnersflux";
const description =
  "Landing de conversión, reservas integradas y panel para AR Pilates. AR Digital $2.697.000 · AR + Estrategia $3.497.000. Se inicia con el 50%. Listo el 5 de diciembre.";
const ogImage = "/imagenes/ar-pilates/logo.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-ar-pilates" },
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: ogImage, type: "image/png" }],
    apple: ogImage,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-ar-pilates",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, width: 800, height: 800, alt: "AR Pilates Estudio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaArPilatesLayout({ children }) {
  return <div className={`ar-root ${poppins.className}`}>{children}</div>;
}
