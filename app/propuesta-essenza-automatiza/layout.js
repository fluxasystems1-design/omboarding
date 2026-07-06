import { Poppins } from "next/font/google";
import "./essenza-amy.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Automatiza Essenza | Propuesta Fluxa Systems";
const description =
  "Sistema digital para Essenza MD: convierte autoridad médica en pacientes agendados. Homepage, chatbot unificado y reserva integrada.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-essenza-automatiza" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaEssenzaAutomatizaLayout({ children }) {
  return <div className={`essenza-amy-root ${poppins.className}`}>{children}</div>;
}
