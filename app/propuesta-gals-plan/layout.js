import { Poppins } from "next/font/google";
import "./gals-plan.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omboarding-alpha.vercel.app";
const title = "Plan de desarrollo web 2027 | GAL'S Studio · Partnersflux";
const description =
  "Actualizar la web actual de GAL'S Studio y abrir GALS Space, Academy y Digital. Ajustes $300.000 + desarrollos con descuento $800.000. Total $1.100.000.";
const ogImage = "/imagenes/gals-studio-logo.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/propuesta-gals-plan" },
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: ogImage, type: "image/png" }],
    apple: ogImage,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/propuesta-gals-plan",
    siteName: "Partnersflux",
    locale: "es_CO",
    images: [{ url: ogImage, alt: "GAL'S Studio" }],
  },
};

export default function PropuestaGalsPlanLayout({ children }) {
  return <div className={`gp-root ${poppins.className}`}>{children}</div>;
}
