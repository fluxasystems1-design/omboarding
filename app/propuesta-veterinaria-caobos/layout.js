import { Poppins } from "next/font/google";
import "../propuesta-essenza-automatiza/essenza-amy.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Veterinaria Caobos | Propuesta Fluxa Systems";
const description =
  "Homepage + Linktree + reserva de citas básica para Veterinaria Caobos. Presencia digital clara desde Instagram.";

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
