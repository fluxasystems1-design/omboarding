import { Cormorant_Garamond, Poppins } from "next/font/google";
import "../propuesta-natalia/gals-studio.css";
import "./kickoff-gals.css";

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

const title = "Kickoff Oficial | GAL'S Studio × Fluxa Systems";
const description =
  "Método PDP Wellness™ — Bienvenida oficial, fases de construcción, inversión confirmada y arranque del ecosistema digital GAL'S Studio.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/kickoff-gals-studio" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function KickoffGalsStudioLayout({ children }) {
  return (
    <div className={`gals-studio-root gals-kickoff-root ${poppins.className} ${display.variable}`}>
      {children}
    </div>
  );
}
