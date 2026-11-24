import { Poppins } from "next/font/google";
import "./brief-ar.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Brief de implementación | AR Pilates Studio";
const description =
  "Cuestionario para diseñar la página, reservas y automatizaciones de AR Pilates Studio · Partnersflux.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-ar-pilates/brief" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function ArPilatesBriefLayout({ children }) {
  return <div className={`ar-brief-root ${poppins.className}`}>{children}</div>;
}
