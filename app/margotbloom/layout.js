import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./margotbloom.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--mb-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--mb-display",
});

const title = "MARGOT BLOOM · Método PDM | Construye una presencia digital monetizable";
const description =
  "1.188 personas ya te siguen y tu marca se ve como un estudio floral de lujo. Propuesta Fluxa Method para Margot Bloom.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/margotbloom" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function MargotBloomLayout({ children }) {
  return <div className={`mb-root ${sans.className} ${sans.variable} ${display.variable}`}>{children}</div>;
}
