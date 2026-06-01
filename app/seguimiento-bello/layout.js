import "../propuesta-supermercado/propuesta-deck.css";
import "../alianza-chile/alianza-chile.css";

const title = "Seguimiento Mes 1 — Dr. Leonardo Bello | Fluxa Method";
const description =
  "Reporte de avance Mes 1 para Dr. Leonardo Bello · FuncionA Plus. UGC, captación, automatizaciones y ecommerce.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/seguimiento-bello" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function SeguimientoBelloLayout({ children }) {
  return children;
}
