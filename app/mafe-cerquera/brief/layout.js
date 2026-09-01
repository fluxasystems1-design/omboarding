import "./brief-mafe.css";

const title = "Brief de Arranque | María Fernanda Cerquera";
const description =
  "Brief de arranque para identidad, servicios, cliente ideal y producción antes de diseñar el producto digital y la estrategia de marca.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/propuesta-mafe-cerquera/brief" },
  robots: { index: false, follow: false },
  openGraph: { title, description, type: "website" },
};

export default function BriefMafeCerqueraLayout({ children }) {
  return children;
}
