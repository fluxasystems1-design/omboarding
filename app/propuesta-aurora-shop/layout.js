import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./propuesta-aurora-shop.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--aurora-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--aurora-display",
});

const title = "Propuesta Aurora Shop — Sistema de Atención Automatizada | Partnersflux";
const description =
  "Cada mensaje que no respondes a tiempo es una venta perdida. Automatización Botcake + IA para Aurora Shop: detal vs mayorista, Shopify y atención 24/7.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-aurora-shop" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaAuroraShopLayout({ children }) {
  return <div className={`aurora-root ${outfit.className} ${outfit.variable} ${display.variable}`}>{children}</div>;
}
