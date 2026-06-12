import { Poppins } from "next/font/google";
import "./gals-studio.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Propuesta Comercial | GAL'S Studio · Natalia Galvis";
const description =
  "Método PDP Wellness™ — presencia digital profesional para GAL'S Studio: landings, Bewe, automatización, contenido e IA. Paquetes desde $947 USD.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-natalia" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function PropuestaNataliaLayout({ children }) {
  return <div className={`gals-studio-root ${poppins.className}`}>{children}</div>;
}
