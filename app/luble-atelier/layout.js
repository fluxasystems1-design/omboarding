import { Poppins } from "next/font/google";
import "./luble-atelier-studio.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Comercial | Fluxa Systems · Luble Atelier";
const description =
  "Propuesta privada de Fluxa Systems para Luble Atelier: landing de evento, ManyChat e Instagram y home de marca.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/luble-atelier" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function LubleAtelierLayout({ children }) {
  return <div className={`gals-studio-root ${poppins.className}`}>{children}</div>;
}
