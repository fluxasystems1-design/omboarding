import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "../propuesta-mafe-cerquera/mafe-coaching.css";
import "./lamore-floral.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--mafe-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--mafe-display",
});

const title = "Propuesta Comercial | Lamore Fiori · Método PDM Floral";
const description =
  "Presencia Digital Profesional: convierte tu catálogo y tus experiencias florales en Cúcuta en ventas y eventos llenos. Desde $1.100.000 COP · Consultoría, Digital y Pro.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-lamore-fiori" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaLamoreFioriLayout({ children }) {
  return (
    <div className={`mafe-root ${jakarta.className} ${jakarta.variable} ${newsreader.variable}`}>
      {children}
    </div>
  );
}
