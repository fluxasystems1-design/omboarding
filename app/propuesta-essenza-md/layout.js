import { Poppins } from "next/font/google";
import "./essenza-studio.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Estratégica | Essenza MD | Fluxa Systems";
const description =
  "Arquitectura digital y sistema de captación para Essenza MD: BE YOU, BE YOU+, Hydrash, dermatología clínica y medicina bioreguladora.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-essenza-md" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaEssenzaLayout({ children }) {
  return <div className={`gals-studio-root ${poppins.className}`}>{children}</div>;
}
