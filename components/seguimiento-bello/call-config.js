export const STORE_URL = "https://funciona-2.myshopify.com";
export const STORE_PASSWORD = "pahchi";
export const BRIEF_URL =
  "https://www.notion.so/Brief-Creadores-Funciona-by-Doctor-Bello-36b345981e468171bc52ebf0af0c5501";
export const CREATORS_LANDING_URL = "https://omboarding-alpha.vercel.app/funciona-creadores";
export const TESTS_HUB_URL = "https://testfunciona.vercel.app";

export const WA_URL =
  "https://wa.me/573116425337?text=" +
  encodeURIComponent(
    "Hola Fluxa Method. Estoy revisando el seguimiento Mes 1 de FuncionA+ y quiero confirmar los puntos pendientes."
  );

export const NAV_SECTIONS = [
  { id: "resumen", label: "Resumen" },
  { id: "captacion", label: "Captación" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "ugc", label: "UGC" },
  { id: "automatizaciones", label: "Auto" },
  { id: "decisiones", label: "Decisiones" },
];

export const SUMMARY_ROWS = [
  {
    area: "Captación",
    status: "✅",
    line: "4 landings de test listas",
    href: "#captacion",
    tone: "done",
  },
  {
    area: "Ecommerce",
    status: "🟡",
    line: "Tienda construida · pendiente lanzamiento",
    href: "#ecommerce",
    tone: "progress",
  },
  {
    area: "UGC",
    status: "🟡",
    line: "Esperando materiales de marca",
    href: "#ugc",
    tone: "doctor",
  },
  {
    area: "Automatizaciones",
    status: "🟡",
    line: "Ecosistemas listos · falta programación",
    href: "#automatizaciones",
    tone: "doctor",
  },
];

export const QUICK_LINKS = [
  { label: "Tienda", href: STORE_URL },
  { label: "Hub tests", href: TESTS_HUB_URL },
  { label: "Brief creadores", href: BRIEF_URL },
  { label: "Landing embajadores", href: CREATORS_LANDING_URL },
];
