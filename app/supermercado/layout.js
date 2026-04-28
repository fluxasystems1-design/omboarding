const defaultSite = "https://fluxamethod.com";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || defaultSite),
  title: "Supermercado | Fluxa Method — Sistema digital y pedidos online",
  description:
    "Planes Fluxa System ($697), Fluxa Pages ($450) y Fluxa Edu ($250) para supermercados en Bogotá: pedidos online, automatización, Meta Ads y fidelización.",
  alternates: {
    canonical: "/supermercado",
  },
  openGraph: {
    title: "Supermercado | Fluxa Method — Sistema digital que vende todos los días",
    description:
      "Sistema digital para supermercados: presencia, pedidos online, automatizaciones y pauta local. Bogotá, Colombia.",
    url: "/supermercado",
    siteName: "Fluxa Method",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermercado | Fluxa Method",
    description:
      "Activa pedidos online, fidelización y automatización en tu supermercado. Planes y precios claros.",
  },
};

export default function SupermercadoLayout({ children }) {
  return children;
}
