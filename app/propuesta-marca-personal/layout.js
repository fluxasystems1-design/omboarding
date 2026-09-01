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

const title = "Propuesta | Mentoría PDM — Marca Personal · Partnersflux";
const description =
  "Método PDM — Aprende a construir tu propio sistema de presencia digital monetizable. 10 sesiones en vivo · $297 USD · Partnersflux.";

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
