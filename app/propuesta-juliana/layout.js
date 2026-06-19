import { Poppins } from "next/font/google";
import "./juliana-studio.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Comercial | Fluxa Systems · Dra. Juliana Meneses";
const description =
  "Propuesta privada de Fluxa Systems para la Dra. Juliana Meneses: ecosistema digital de captación y seguimiento para cirugía plástica ocular y turismo médico.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-juliana" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaJulianaLayout({ children }) {
  return <div className={`gals-studio-root ${poppins.className}`}>{children}</div>;
}
