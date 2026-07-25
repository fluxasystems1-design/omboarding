import { Poppins } from "next/font/google";
import "./fonopatipo.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Presencia Digital Monetizable | Patricia Porras · Partnersflux";
const description =
  "Propuesta PDM para Patricia Porras (@fonopatipo): página, checkout, cursos y sistema completo. Partnersflux.";

export const metadata = {
  title,
  description,
  themeColor: "#5ba3d9",
  alternates: { canonical: "/propuesta-fonopatipo" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaFonopatipoLayout({ children }) {
  return <div className={`fp-root ${poppins.className}`}>{children}</div>;
}
