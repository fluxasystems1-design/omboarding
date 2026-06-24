import { Poppins } from "next/font/google";
import "./brief-gals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Brief de arranque | GAL'S Studio";
const description =
  "Cuestionario estratégico para activar el ecosistema digital de GAL'S Studio — identidad, servicios, conversión y metas de marca.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/gals-studio/brief" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function GalsStudioBriefLayout({ children }) {
  return <div className={`gals-brief-root ${poppins.className}`}>{children}</div>;
}
