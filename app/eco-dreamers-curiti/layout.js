import "../propuesta-supermercado/propuesta-deck.css";

const title = "Propuesta Ecosistema Digital";
const description =
  "Propuesta para construir 3 ecosistemas digitales integrados: ecommerce, membresía deportiva y fondo de inversión.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/eco-dreamers-curiti" },
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function EcoDreamersCuritiLayout({ children }) {
  return children;
}
