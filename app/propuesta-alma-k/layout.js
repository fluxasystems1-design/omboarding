import { Poppins } from "next/font/google";
import "./alma-k.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ak-sans",
  adjustFontFallback: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Propuesta | Almak · Ecommerce, automatización y crecimiento";
const description =
  "De una marca que enamora a una marca que convierte y crece. Tienda $3.197.000 · Crecimiento $4.997.000 · Expansión $7.297.000 · Partnersflux · @almakcol";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-alma-k" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-alma-k",
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

export default function PropuestaAlmaKLayout({ children }) {
  return <div className={`ak-root ${poppins.className} ${poppins.variable}`}>{children}</div>;
}
