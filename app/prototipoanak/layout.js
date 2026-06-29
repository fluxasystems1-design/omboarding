import { Poppins } from "next/font/google";
import "../../styles/prototipoanak.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const title = "ANAK · Barre by Anak — Membresía fitness";
const description =
  "Movimiento consciente, barre y bienestar integral. Únete a la membresía ANAK y entrena con propósito.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/prototipoanak" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PrototipoAnakLayout({ children }) {
  return <div className={`anak-root ${poppins.className} ${poppins.variable}`}>{children}</div>;
}
