import { Poppins } from "next/font/google";
import "./opticallery-studio.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Comercial | Fluxa Systems · Opticallery";
const description =
  "Propuesta privada de Fluxa Systems para Opticallery: ecosistema digital de captación y seguimiento.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/opticallery" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function OpticalleryLayout({ children }) {
  return <div className={`gals-studio-root ${poppins.className}`}>{children}</div>;
}
