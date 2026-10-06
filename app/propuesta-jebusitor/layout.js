import { IBM_Plex_Sans, Syne } from "next/font/google";
import "./jebusitor.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--jb-sans",
});

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--jb-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Jebusitor · PDM BROKER";
const description =
  "Oferta ordenada, landing de registro, DM automatizado, contenido y Meta Ads. PDM BROKER · $2.000.000 COP · @jebusitor";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-jebusitor" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-jebusitor",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, width: 800, height: 800, alt: "Partnersflux" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaJebusitorLayout({ children }) {
  return (
    <div className={`jb-root ${sans.className} ${sans.variable} ${display.variable}`}>{children}</div>
  );
}
