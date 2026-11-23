import { Poppins } from "next/font/google";
import "./le.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta comercial | Los Expatriados · Partnersflux";
const description =
  "Tienda digital, eventos y ruta de contenido para Tortillas de Los Expatriados. Tienda $2.697.000 · Tienda + Crecimiento $3.497.000. @losexpatriadosbog";
const ogImage = "/imagenes/los-expatriados/logo.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-los-expatriados" },
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: ogImage, type: "image/png" }],
    apple: ogImage,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-los-expatriados",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, width: 800, height: 800, alt: "Los Expatriados" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaLosExpatriadosLayout({ children }) {
  return <div className={`le-root ${poppins.className}`}>{children}</div>;
}
