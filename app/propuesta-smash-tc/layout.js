import { Poppins } from "next/font/google";
import "./smash-combat.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Comercial | Smash TC · Método PDP Combat™";
const description =
  "Presencia Digital Profesional para Smash TC: landings conectadas a FitCo, automatización, contenido e IA. Desde $957 USD.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-smash-tc" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaSmashTcLayout({ children }) {
  return <div className={`smash-tc-root ${poppins.className}`}>{children}</div>;
}
