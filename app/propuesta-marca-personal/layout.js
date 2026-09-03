import { Cormorant_Garamond, Poppins } from "next/font/google";
import "../propuesta-natalia/gals-studio.css";
import "../kickoff-gals-studio/kickoff-gals.css";
import "./propuesta-marca-personal.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-gals-display",
});

const title = "PDM — Presencia Digital Magnética y Monetizable | Partnersflux × Natalia Galvis";
const description =
  "Propuesta completa PDM: Fase Magnética $297 USD (10 sesiones) y Fase Monetizable con alianza de ecosistema. Partnersflux × Natalia Galvis.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-marca-personal" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaMarcaPersonalLayout({ children }) {
  return (
    <div className={`gals-studio-root gals-kickoff-root gals-pdm-root ${poppins.className} ${display.variable}`}>
      {children}
    </div>
  );
}
