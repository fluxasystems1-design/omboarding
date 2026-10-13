import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "../propuesta-mafe-cerquera/mafe-coaching.css";
import "../kickoff-nutricion/kickoff-nutricion.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--mafe-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--mafe-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Kickoff Oficial | Viviana Rubio × Partnersflux";
const description =
  "Método PDM Coaching™ — Bienvenida oficial, cronograma de 6 semanas, inversión confirmada ($4.200.000 COP) y arranque de VIVIANA DIGITAL.";
const ogImage = "/og/fluxa-logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/kickoff-viviana-rubio" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/kickoff-viviana-rubio",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, width: 800, height: 800, alt: "Fluxa" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function KickoffVivianaRubioLayout({ children }) {
  return (
    <div className={`mafe-root mafe-kickoff-root ${jakarta.className} ${jakarta.variable} ${newsreader.variable}`}>
      {children}
    </div>
  );
}
