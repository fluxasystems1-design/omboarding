import "../propuesta-supermercado/propuesta-deck.css";
import "./alianza-chile.css";

const title = "Alianza Fluxa × Chile | Ronaldo Escandón";
const description =
  "Propuesta privada para Ronaldo: tú cierras en Chile, Fluxa ejecuta. Catálogo, combos, ganancia y primer piloto.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/alianza-chile" },
  openGraph: {
    title: "Propuesta Fluxa × Chile — solo para Ronaldo",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AlianzaChileLayout({ children }) {
  return children;
}
