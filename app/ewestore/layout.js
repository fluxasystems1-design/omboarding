import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./ewestore.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--ewe-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--ewe-display",
});

const title = "PARTNERSFLUX × EWE STORE | El sistema que convierte tu alcance en ventas reales";
const description =
  "Tienes el contenido. Tienes el alcance. Falta el sistema que lo convierta en clientes. Propuesta Partnersflux para eWe Store.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/ewestore" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function EweStoreLayout({ children }) {
  return <div className={`ewe-root ${sans.className} ${sans.variable} ${display.variable}`}>{children}</div>;
}
