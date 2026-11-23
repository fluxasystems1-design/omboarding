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
const ogImagePath = "/imagenes/los-expatriados/og.jpg";
const ogImageAbsolute = `${siteUrl}${ogImagePath}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-los-expatriados" },
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: ogImagePath, type: "image/jpeg" }],
    apple: ogImagePath,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${siteUrl}/propuesta-los-expatriados`,
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [
      {
        url: ogImageAbsolute,
        secureUrl: ogImageAbsolute,
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "Los Expatriados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageAbsolute],
  },
};

export default function PropuestaLosExpatriadosLayout({ children }) {
  return <div className={`le-root ${poppins.className}`}>{children}</div>;
}
