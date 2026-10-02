import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./yk-move.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--yk-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--yk-display",
});

const title = "Propuesta Comercial | YK Move · Presencia Digital Profesional";
const description =
  "Que cada clienta que se enamora de un set de YK Move pueda comprarlo en ese mismo momento. Desde $3.197.000 COP · Tienda, Lanzamiento y Studio.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-yk-move" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaYkMoveLayout({ children }) {
  return (
    <div className={`yk-root ${manrope.className} ${manrope.variable} ${cormorant.variable}`}>{children}</div>
  );
}
