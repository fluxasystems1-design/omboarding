import { Poppins } from "next/font/google";
import "../propuesta-juliana/juliana-studio.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Comercial | Fluxa Systems · Dra. Juliana Meneses";
const description =
  "Propuesta privada de Fluxa Systems para la Dra. Juliana Meneses: dos ecosistemas digitales para cirugía plástica ocular y armonización facial, con combo y descuento.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/juliana-meneses" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function JulianaMenesesLayout({ children }) {
  return <div className={`gals-studio-root ${poppins.className}`}>{children}</div>;
}
