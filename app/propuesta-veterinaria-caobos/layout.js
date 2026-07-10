import { Poppins } from "next/font/google";
import "../propuesta-essenza-automatiza/essenza-amy.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Veterinaria Caobos | Propuesta Fluxa Systems";
const description =
  "Propuesta de intercambio: sistema digital completo ($2.697.000 COP) sin desembolso para Veterinaria Caobos.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-veterinaria-caobos" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaVeterinariaCaobosLayout({ children }) {
  return <div className={`essenza-amy-root ${poppins.className}`}>{children}</div>;
}
