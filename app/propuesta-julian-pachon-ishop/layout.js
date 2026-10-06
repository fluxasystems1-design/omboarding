import { Space_Grotesk } from "next/font/google";
import "./julian-ishop.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--jp-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Julián Pachón × iShop · Creador Embajador";
const description =
  "Colaboración semestral: contenido ecosistema Apple + talleres de foto y video. Canje de dispositivo o contenido pago mensual.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-julian-pachon-ishop" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-julian-pachon-ishop",
    siteName: "Julián Pachón × iShop",
    locale: "es_CO",
    images: [{ url: ogImage, width: 640, height: 640, alt: "Julián Pachón" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaJulianPachonIshopLayout({ children }) {
  return <div className={`jp-root ${sans.className} ${sans.variable}`}>{children}</div>;
}
