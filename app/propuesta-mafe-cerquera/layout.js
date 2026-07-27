import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./mafe-coaching.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--mafe-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--mafe-display",
});

const title = "Propuesta Comercial | María Fernanda Cerquera · Método PDM Coaching";
const description =
  "Presencia Digital Profesional: convierte tu comunidad en clientas de membresía recurrente. Desde $947 USD · Landing + automatización + membresía.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-mafe-cerquera" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaMafeCerqueraLayout({ children }) {
  return (
    <div className={`mafe-root ${jakarta.className} ${jakarta.variable} ${newsreader.variable}`}>
      {children}
    </div>
  );
}
