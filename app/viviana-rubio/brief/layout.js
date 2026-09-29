import "./brief-mafe.css";

const title = "Brief de Arranque | Viviana Rubio";
const description =
  "Brief de arranque para identidad, servicios, clienta ideal y producción antes de diseñar el producto digital y la estrategia de marca.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/viviana-rubio/brief" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function BriefVivianaRubioLayout({ children }) {
  return children;
}
