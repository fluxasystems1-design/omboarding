import { Poppins } from "next/font/google";
import "./panther.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Ecosistema Panther | Lorena Perch · Partnersflux";
const description =
  "Propuesta de arquitectura digital para Lorena Perch: motor de autoridad, membresía, automatización y Sanctuary Skin Lab en dos fases.";

export const metadata = {
  title,
  description,
  themeColor: "#741f24",
  alternates: { canonical: "/propuesta-ecosistema-panther" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaEcosistemaPantherLayout({ children }) {
  return <div className={`panther-root ${poppins.className}`}>{children}</div>;
}
