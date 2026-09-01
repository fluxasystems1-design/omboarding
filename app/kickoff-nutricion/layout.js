import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "../propuesta-mafe-cerquera/mafe-coaching.css";
import "./kickoff-nutricion.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--mafe-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--mafe-display",
});

const title = "Kickoff Oficial | María Fernanda Cerquera × Partnersflux";
const description =
  "Método PDM Nutrición™ — Bienvenida oficial, cronograma de 6 semanas, inversión confirmada y arranque de MAFE DIGITAL.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/kickoff-nutricion" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function KickoffNutricionLayout({ children }) {
  return (
    <div className={`mafe-root mafe-kickoff-root ${jakarta.className} ${jakarta.variable} ${newsreader.variable}`}>
      {children}
    </div>
  );
}
