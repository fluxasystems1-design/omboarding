import { Poppins } from "next/font/google";
import "./rifex-proposal.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const title = "RIFEX · Propuesta de mejoras v2 | Fluxa Systems";
const description =
  "Actualización comercial de rifex.app: landing visual, premios, countdown, ganadores públicos y prueba social real.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-rifex-mejoras" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaRifexMejorasLayout({ children }) {
  return <div className={`rifex-proposal-root ${poppins.className}`}>{children}</div>;
}
