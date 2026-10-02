import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./yk-move.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--yk-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--yk-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta Comercial | YK Move · Presencia Digital Profesional";
const description =
  "Que cada clienta que se enamora de un set de YK Move pueda comprarlo en ese mismo momento. Desde $3.197.000 COP · Tienda, Lanzamiento y Studio.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-yk-move" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-yk-move",
    siteName: "Fluxa Method",
    locale: "es_CO",
    images: [
      {
        url: ogImage,
        width: 800,
        height: 800,
        alt: "Fluxa Method",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function PropuestaYkMoveLayout({ children }) {
  return (
    <div className={`yk-root ${manrope.className} ${manrope.variable} ${cormorant.variable}`}>{children}</div>
  );
}
