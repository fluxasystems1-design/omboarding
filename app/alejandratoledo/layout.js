import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./alejandratoledo.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--ale-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--ale-display",
});

const title = "Propuesta Comercial | Alejandra Toledo · Método PDM Neurocoaching";
const description =
  "Tienes la audiencia. El mensaje que la convierte todavía no existe. Propuesta Fluxa Method para Alejandra Toledo.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/alejandratoledo" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function AlejandraToledoLayout({ children }) {
  return <div className={`ale-root ${sans.className} ${sans.variable} ${display.variable}`}>{children}</div>;
}
