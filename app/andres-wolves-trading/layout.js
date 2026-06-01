import "../propuesta-supermercado/propuesta-deck.css";

const title = "Propuesta Comercial | Andrés Wolves | Fluxa Method";
const description =
  "Propuesta Fluxa Launch y Fluxa Pro para Andrés Wolves: academia y comunidad de trading, diagnóstico, entregables y plan de ejecución en 2 meses.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/andres-wolves-trading" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function AndresWolvesTradingLayout({ children }) {
  return children;
}
