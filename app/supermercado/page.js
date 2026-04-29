"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/** Paleta profesional: teal (frescura + confianza), sin amarillo */
const THEME = {
  accent: "#0d9488",
  accentGlow:
    "0 0 0 2px rgba(13,148,136,0.5), 0 0 36px rgba(13,148,136,0.42)",
};

const CTA_BTN =
  "rounded-xl border border-teal-400/90 bg-teal-600 font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_18px_rgba(13,148,136,0.28)] transition hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const PLAN_META = {
  system: {
    chip: "FLUXA SYSTEM · MÁS POPULAR",
    subtitle:
      "Tu sistema digital instalado y funcionando para vender más sin depender solo del voz a voz.",
    heroPrice: "$697 USD",
    heroDuration: "2 meses",
    heroModules: "2 páginas",
    heroMetric4: "∞",
    heroMetric4Label: "Clientes potenciales",
    ctaText: "QUIERO ACTIVAR MI SISTEMA",
    included: [
      "Landing principal del supermercado con diseño profesional",
      "Landing catálogo de productos con categorías y precios",
      "Automatización de oferta semanal cada lunes vía n8n",
      "Meta Pixel instalado en ambas páginas",
      "Configuración inicial Meta Ads + primera campaña activa",
      "1 sesión estratégica de arranque · 30 días soporte post-entrega",
    ],
    paymentA: {
      title: "Opción A — Pago en 2 cuotas",
      rows: [
        { label: "Cuota 1 al firmar", value: "$350 USD" },
        { label: "Cuota 2 a los 20 días", value: "$347 USD" },
      ],
    },
    paymentB: {
      title: "Opción B — Pago único",
      rows: [{ label: "Pago completo al firmar", value: "$647 USD" }],
      footnote: "Ahorra $50 USD · Arranque inmediato.",
    },
    totalLine: "$697 USD · 2 meses · Sin intereses",
    summaryInvestment: "$697 USD",
    summaryPayment: "2 cuotas — inicio y día 20 — o pago único",
    metaNote: "Meta Ads se paga aparte por el cliente. Rango sugerido: $100–$200 USD/mes.",
    totalProjectLabel: "$697 USD",
  },
  pages: {
    chip: "FLUXA PAGES",
    subtitle:
      "Tu presencia digital profesional lista en 2 semanas. Sin sistema completo — solo las páginas que necesitas.",
    heroPrice: "$450 USD",
    heroDuration: "2 semanas",
    heroModules: "4 activos",
    heroMetric4: "—",
    heroMetric4Label: "Automatizaciones",
    ctaText: "QUIERO ACTIVAR MI SISTEMA",
    included: [],
    paymentA: null,
    paymentB: null,
    totalLine: "",
    summaryInvestment: "$450 USD",
    summaryPayment: "50% inicio + 50% entrega",
    metaNote: "",
    totalProjectLabel: "$450 USD",
  },
  education: {
    chip: "FLUXA EDU · 4 SEMANAS",
    subtitle:
      "Aprende a manejar tus redes, crear contenido y pautar en Meta Ads con acompañamiento real de Fluxa Method.",
    heroPrice: "$250 USD",
    heroDuration: "4 semanas",
    heroModules: "4 sesiones",
    heroMetric4: "1:1",
    heroMetric4Label: "Acompañamiento",
    ctaText: "QUIERO ACTIVAR MI SISTEMA",
    included: [],
    paymentA: null,
    paymentB: null,
    totalLine: "",
    summaryInvestment: "$250 USD",
    summaryPayment: "Pago único antes de la 1.ª sesión",
    metaNote: "",
    totalProjectLabel: "$250 USD",
  },
};

const timelinePhasesSystem = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "LANDING PRINCIPAL",
    subtitle: "Semanas 1–2",
    icon: "🌐",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Diseño y desarrollo de la landing del supermercado",
      "Secciones: quiénes somos, productos destacados, contacto y ubicación",
      "Formulario de contacto directo al WhatsApp del negocio",
      "Meta Pixel instalado y verificado",
    ],
    scope: "La cara digital del supermercado: clara, confiable y medible desde el día uno.",
    build: "Diseño, desarrollo, formulario a WhatsApp e instalación del Pixel.",
    activate: "Publicamos la landing en producción con Pixel verificado.",
    result: "Te buscan, entienden qué ofreces y escriben por WhatsApp sin fricción.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "CATÁLOGO DIGITAL",
    subtitle: "Semanas 3–4",
    icon: "🛒",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Landing de catálogo con categorías de productos",
      "Cada producto con foto, nombre y precio actualizable",
      "Botón de pedido directo al WhatsApp por producto",
      "Diseño mobile-first optimizado para compartir en redes",
    ],
    scope: "Tu vitrina online: precios visibles y pedido en un toque.",
    build: "Catálogo por categorías, fichas de producto y CTAs a WhatsApp.",
    activate: "Dejamos precios editables y la experiencia lista para móvil.",
    result: "El cliente ve qué hay y a cuánto, y pide sin pasar por el mostrador.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "AUTOMATIZACIÓN",
    subtitle: "Semanas 5–6",
    icon: "⚡",
    color: THEME.accent,
    glow: THEME.accentGlow,
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Flujo automático de oferta semanal cada lunes vía n8n",
      "Notificación automática al equipo cuando llega consulta",
      "Mensaje de bienvenida automático a nuevos contactos",
      "Integración básica de formularios con WhatsApp",
    ],
    scope: "Menos trabajo manual: avisos y ofertas que corren en segundo plano.",
    build: "Flujos en n8n, notificaciones al equipo y bienvenidas automáticas.",
    activate: "Conectamos formularios y WhatsApp con reglas claras.",
    result: "Oferta del lunes en marcha y cero consultas perdidas por desorden.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "PAUTA Y CIERRE",
    subtitle: "Mes 2",
    icon: "📈",
    color: "#A855F7",
    glow: "0 0 0 2px rgba(168,85,247,0.5), 0 0 36px rgba(168,85,247,0.55)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Configuración cuenta Meta Ads desde cero",
      "Primera campaña activa geolocalizada (5km a la redonda)",
      "1 sesión estratégica de revisión de resultados",
      "Reporte final + plan del siguiente trimestre",
    ],
    scope: "Llegar a familias cercanas con inversión clara y cierre documentado.",
    build: "Cuenta publicitaria, campaña geolocalizada y estructura de reporte.",
    activate: "Encendemos la primera campaña y revisamos resultados en sesión.",
    result: "Tráfico pagado local y una hoja de ruta para el trimestre siguiente.",
  },
];

const timelineWeeksEducation = [
  {
    id: "sem-1",
    label: "SEMANA 1",
    title: "Diagnóstico y estrategia",
    subtitle: "Semana 1",
    icon: "🧭",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Auditoría completa de redes actuales",
      "Definición de cliente ideal del supermercado",
      "Estrategia de contenido personalizada",
      "Calendario editorial de 30 días",
    ],
    scope: "Claridad: a quién le vendes y qué contar cada semana.",
    build: "Revisamos perfiles, competencia y oportunidades reales.",
    activate: "Dejamos ruta de contenido y calendario de 30 días listo para ejecutar.",
    result: "Dejas de publicar al azar: publicas con criterio y constancia.",
  },
  {
    id: "sem-2",
    label: "SEMANA 2",
    title: "Cómo crear contenido que genere pedidos reales",
    subtitle: "Semana 2",
    icon: "🎬",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Cómo grabar y editar Reels de ofertas",
      "Templates de diseño editables en Canva",
      "Banco de 15 hooks virales para supermercados",
      "Guía de captions y llamados a la acción",
    ],
    scope: "Producción ágil: ofertas que se ven bien y generan respuesta.",
    build: "Formatos, plantillas y ganchos listos para tu operación diaria.",
    activate: "Practicas con feedback y ajustes de mensaje y estética.",
    result: "Más alcance y consultas por ofertas sin depender de agencia diaria.",
  },
  {
    id: "sem-3",
    label: "SEMANA 3",
    title: "Cómo conseguir clientes cerca con Meta Ads",
    subtitle: "Semana 3",
    icon: "🎯",
    color: THEME.accent,
    glow: THEME.accentGlow,
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Configuración de cuenta publicitaria",
      "Cómo crear tu primera campaña de ofertas",
      "Segmentación por zona geográfica (5 km)",
      "Presupuesto mínimo y cómo leerlo",
    ],
    scope: "Pauta bajo control: inversión pequeña, aprendizaje claro.",
    build: "Cuenta, píxel/eventos básicos y primera campaña de oferta.",
    activate: "Lanzamos prueba y revisamos métricas en vivo.",
    result: "Pasas de solo orgánico a demanda pagada con criterio local.",
  },
  {
    id: "sem-4",
    label: "SEMANA 4",
    title: "Cómo leer los datos y seguir creciendo solo",
    subtitle: "Semana 4",
    icon: "📊",
    color: "#A855F7",
    glow: "0 0 0 2px rgba(168,85,247,0.5), 0 0 36px rgba(168,85,247,0.55)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Cómo leer las métricas de Meta Ads",
      "Ajuste de campañas según resultados",
      "Plan de contenido para el siguiente mes",
      "Sesión de cierre y preguntas",
    ],
    scope: "Autonomía: mejorar lo que ya corre y planificar el mes siguiente.",
    build: "Tablero simple de lectura y checklist de optimización.",
    activate: "Ajustamos creativos, públicos y presupuesto con datos.",
    result: "Sales del curso sabiendo qué mirar y qué cambiar cada semana.",
  },
];

const diagnosisSituation = {
  titleBlock:
    "Tu supermercado ya vende. El problema es que depende completamente del tráfico físico.",
  subtitle:
    "Sin página, catálogo digital ni pauta, cada venta depende de quien pase por la puerta.",
  startPointTitle: "Hoy el negocio funciona… pero no escala.",
  startPointItems: [
    "Sin página web ni catálogo digital de productos",
    "Las ofertas no llegan al celular del cliente",
    "Sin presencia en Meta Ads — solo vendes a quien pasa",
    "Sin automatización — todo depende de atención manual",
    "Sin datos de cuántas personas buscan el negocio online",
  ],
  frictionItems: [
    {
      title: "La competencia ya vende desde el celular.",
      description:
        "Mientras las cadenas usan apps, ofertas digitales y fidelización, el supermercado tradicional sigue dependiendo solo del tráfico físico.",
    },
    {
      title: "Si el cliente no pasa, no compra.",
      description:
        "Sin pedidos online ni domicilios digitales, se pierden ventas todos los días.",
    },
    {
      title: "No existe recompra.",
      description:
        "El cliente compra una vez… y nadie lo vuelve a contactar. Cada semana hay que empezar desde cero.",
    },
    {
      title: "Las promociones no llegan al cliente.",
      description:
        "Las ofertas viven dentro del local, no en el celular de las personas.",
    },
  ],
  conclusion:
    "Fluxa entrega dos landings con Pixel, automatización semanal con n8n y primera campaña Meta con cierre y plan a 90 días.",
};

const transformationsSystem = [
  {
    before: "El cliente no sabe qué productos tienes ni a qué precio.",
    after:
      "Catálogo digital profesional — tus productos con fotos y precios visibles desde cualquier celular.",
  },
  {
    before: "Las ofertas de la semana solo se ven en el local.",
    after: "Oferta semanal automática enviada cada lunes sin que nadie tenga que hacer nada.",
  },
  {
    before: "Sin presencia digital — no apareces cuando te buscan.",
    after: "Landing profesional del supermercado lista para compartir en redes y recibir consultas.",
  },
  {
    before: "Sin pauta — solo vendes a quien pasa por la puerta.",
    after: "Campaña Meta Ads activa llegando a familias en 5 km a la redonda del local.",
  },
  {
    before: "Sin datos — no sabes cuántas personas llegan desde digital.",
    after: "Meta Pixel instalado midiendo todo el tráfico desde el primer día.",
  },
];

const deliverablesSystem = [
  {
    title: "Páginas web",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Landing principal del supermercado",
      "Landing catálogo de productos con precios",
      "Diseño responsive mobile-first",
      "Meta Pixel instalado en ambas",
      "Dominio y despliegue en producción incluido",
    ],
  },
  {
    title: "Automatización",
    color: "text-amber-300 border-amber-400/40",
    items: [
      "Oferta semanal automática cada lunes",
      "Notificación automática de nuevas consultas",
      "Mensaje de bienvenida a nuevos contactos",
      "Integración formularios → WhatsApp",
    ],
  },
  {
    title: "Pauta y estrategia",
    color: "text-purple-300 border-purple-400/40",
    items: [
      "Configuración inicial Meta Ads",
      "Primera campaña activa geolocalizada",
      "1 sesión estratégica de arranque",
      "30 días soporte post-entrega",
    ],
  },
];

const projectConditionsSystem = [
  "Duración: 2 meses desde la firma",
  "Incluye 2 páginas web + automatización básica + Meta Ads setup",
  "El catálogo se construye con la info que entregue el cliente en el brief",
  "Meta Ads se paga directamente por el cliente ($100–$200 USD/mes sugerido)",
  "30 días de soporte post-entrega para ajustes menores",
  "Todos los activos quedan en las cuentas propias del supermercado",
];

const executiveSummaryShared = {
  today: ["Sin sistema", "Sin digital", "Sin automatizaciones"],
  withFluxa: ["Sistema activo", "Clientes fidelizados", "Pauta convirtiendo"],
};

/** Resumen “Con Fluxa” alineado al plan mostrado (evita prometer Paquete 3 en $697) */
const executiveWithFluxaByTab = {
  system: [
    "Dos landings con Pixel y pedidos por WhatsApp",
    "Automatización semanal con n8n y avisos al equipo",
    "Primera campaña Meta activa — inversión en anuncios aparte",
  ],
  pages: ["Páginas y módulos que elijas en la carta", "Precio según combinación", "Ideal si aún no quieres el sistema completo"],
  education: ["4 sesiones 1:1 sobre redes, contenido y Meta Ads", "Plantillas y material para ejecutar tú", "Enfoque práctico para tu supermercado"],
};

/** Referencias mercado al contratar por separado piezas similares al paquete sistema */
const marketSeparateCostRows = [
  { label: "Landing principal profesional →", value: "$150 USD" },
  { label: "Landing catálogo de productos →", value: "$180 USD" },
  { label: "Automatización oferta semanal →", value: "$120 USD" },
  { label: "Setup Meta Ads + primera campaña →", value: "$150 USD" },
  { label: "Estrategia y sesión de arranque →", value: "$100 USD" },
];

const whyFluxaCards = [
  {
    emoji: "⚡",
    title: "Entrega en semanas, no meses",
    body: "Nuestro stack propio nos permite lanzar en 2–6 semanas lo que una agencia tradicional demora 3–6 meses.",
  },
  {
    emoji: "🏆",
    title: "Activos que son tuyos",
    body: "Todo lo que construimos queda en tus cuentas. Sin dependencia de Fluxa después de la entrega.",
  },
  {
    emoji: "🤖",
    title: "Automatización real",
    body: "No solo diseño — instalamos automatizaciones y flujos en WhatsApp que trabajan mientras tú atiendes tu negocio.",
  },
  {
    emoji: "📍",
    title: "Entendemos tu mercado",
    body: "Somos locales. Conocemos la plaza, la competencia y el comportamiento del consumidor colombiano.",
  },
];

const PRIMARY_PAGE_SERVICE_ID = "tienda-ecommerce";

const PAGE_SERVICES_CARTA = [
  {
    id: "tienda-ecommerce",
    label: "Tienda ecommerce completa (catálogo, carrito, Wompi)",
    priceUsd: 450,
  },
  {
    id: "landing-negocio",
    label: "Página web de tu negocio (quiénes somos, servicios, contacto y ubicación)",
    priceUsd: 150,
  },
  {
    id: "landing-producto",
    label: "Página para vender un solo producto",
    priceUsd: 120,
  },
  {
    id: "pedidos-wa",
    label: "Pedidos por WhatsApp automáticos",
    priceUsd: 180,
  },
  {
    id: "panel-dashboard",
    label: "Panel para ver ventas y resultados",
    priceUsd: 200,
  },
  {
    id: "inventario",
    label: "Control de inventario con alertas cuando se acaba algo",
    priceUsd: 220,
  },
  {
    id: "blog-ofertas",
    label: "Sección de ofertas que puedes actualizar fácil",
    priceUsd: 100,
  },
  {
    id: "gmb",
    label: "Perfil digital local optimizado",
    priceUsd: 60,
  },
  {
    id: "instagram-canva",
    label: "Instagram optimizado + 5 plantillas listas para usar",
    priceUsd: 80,
  },
  {
    id: "pagina-ofertas",
    label: "Página de promociones semanales",
    priceUsd: 90,
  },
];

function pagesCartaDiscountPercent(count) {
  return 0;
}

function formatUsdAmount(n) {
  const rounded = Math.round(n * 100) / 100;
  const hasCents = rounded % 1 !== 0;
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  });
}

const WA_NUMBER = "573116425337";

function buildPlanWaMessage(selectedTab, plan) {
  const planByTab = {
    system: "Plan Sistema / Fluxa System — $697 USD",
    pages: "Plan Solo Páginas / Fluxa Pages — desde $450 USD",
    education: "Plan Educación / Fluxa Edu — $250 USD",
  };
  return [
    "Hola Fluxa Method.",
    "",
    "QUIERO ACTIVAR MI SISTEMA.",
    "",
    `Me interesa: ${planByTab[selectedTab]}`,
    `Referencia: ${plan.chip}`,
    "",
    "Mi supermercado está en Bogotá. ¿Me indican los siguientes pasos?",
  ].join("\n");
}

function waHrefFromText(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const educationIncludes = [
  "4 sesiones en vivo de 60 minutos (1 por semana).",
  "Grabación de cada sesión para repasar.",
  "Grupo privado de WhatsApp con Fluxa durante las 4 semanas.",
  "Templates de Canva editables para el supermercado.",
  "Banco de hooks y captions listos para usar.",
  "Guía de Meta Ads paso a paso en PDF.",
];

const executionRowsSystem = [
  {
    month: "Mes 1",
    title: "Landings + catálogo",
    points: "Fases 1–2 · Landing principal · Catálogo digital y Pixel",
    color: "text-emerald-300",
  },
  {
    month: "Mes 2",
    title: "Automatización + pauta",
    points: "Fases 3–4 · n8n · Meta Ads · Sesión y reporte final",
    color: "text-blue-300",
  },
];

/** Paquete 2 vs Paquete 3 — boolean = incluido; string = texto en celda */
const supermercadoPackageComparison = [
  { feature: "Landing estratégica", paquete2: true, paquete3: true },
  { feature: "Catálogo digital", paquete2: true, paquete3: true },
  { feature: "Pagos online", paquete2: true, paquete3: true },
  { feature: "WhatsApp integrado", paquete2: true, paquete3: true },
  {
    feature: "Vista de pedidos del día — seguimiento operativo básico",
    paquete2: true,
    paquete3: true,
  },
  { feature: "Diseño responsive", paquete2: true, paquete3: true },
  { feature: "Automatización básica", paquete2: true, paquete3: true },
  { feature: "Pixel Meta", paquete2: true, paquete3: true },
  { feature: "Ecommerce avanzado", paquete2: false, paquete3: true },
  { feature: "Panel administrativo completo", paquete2: false, paquete3: true },
  { feature: "Gestión de inventario", paquete2: false, paquete3: true },
  { feature: "Alertas de stock", paquete2: false, paquete3: true },
  { feature: "CRM integrado", paquete2: false, paquete3: true },
  { feature: "Dashboard comercial", paquete2: false, paquete3: true },
  { feature: "Recuperación de carritos", paquete2: false, paquete3: true },
  { feature: "Recompra automática", paquete2: false, paquete3: true },
  { feature: "Automatización avanzada", paquete2: false, paquete3: true },
  { feature: "Fidelización de clientes", paquete2: "Básica", paquete3: "Avanzada" },
  { feature: "Preparado para escalamiento", paquete2: "Limitado", paquete3: "Completo" },
];

export default function SupermercadoPage() {
  const [selectedTab, setSelectedTab] = useState("system");
  const [activePhase, setActivePhase] = useState("fase-1");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const [tabFade, setTabFade] = useState(true);
  const [selectedPageServices, setSelectedPageServices] = useState([PRIMARY_PAGE_SERVICE_ID]);
  const [totalPulse, setTotalPulse] = useState(false);
  const timelineCarouselRef = useRef(null);

  const plan = PLAN_META[selectedTab];

  const planWaHref = useMemo(
    () => waHrefFromText(buildPlanWaMessage(selectedTab, plan)),
    [selectedTab, plan]
  );

  const renderPkgCompareCell = (value, isPaquete3Column) => {
    if (value === true) {
      return (
        <span
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/25 text-sm font-bold text-emerald-300 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.35)]"
          aria-label="Incluido"
        >
          ✓
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="text-lg font-bold leading-none text-red-400" aria-label="No incluido">
          ✗
        </span>
      );
    }
    return (
      <span
        className={`text-center text-[11px] font-semibold leading-tight sm:text-sm ${isPaquete3Column ? "text-teal-300" : "text-zinc-400"}`}
      >
        {value}
      </span>
    );
  };

  const diagnosisTitleParts = diagnosisSituation.titleBlock.split(". ");
  const diagnosisTitleHead = diagnosisTitleParts[0] ? `${diagnosisTitleParts[0]}.` : diagnosisSituation.titleBlock;
  const diagnosisTitleTail = diagnosisTitleParts.slice(1).join(". ").trim();

  const selectedCartaItems = PAGE_SERVICES_CARTA.filter((s) => selectedPageServices.includes(s.id));
  const cartaCount = selectedCartaItems.length;
  const additionalServicesCount = Math.max(cartaCount - 1, 0);
  const cartaSubtotal = selectedCartaItems.reduce((acc, s) => acc + s.priceUsd, 0);
  const cartaDiscountPct = pagesCartaDiscountPercent(additionalServicesCount);
  const cartaDiscountUsd = Math.round(cartaSubtotal * (cartaDiscountPct / 100) * 100) / 100;
  const cartaTotal = Math.round((cartaSubtotal - cartaDiscountUsd) * 100) / 100;

  const pagesCartaWaHref = (() => {
    const base = `https://wa.me/${WA_NUMBER}`;
    if (cartaCount === 0) {
      return `${base}?text=${encodeURIComponent(
        "Hola Fluxa Method.\n\nQUIERO ACTIVAR MI SISTEMA.\n\nQuiero información sobre Fluxa Pages y la carta de servicios para mi supermercado (Bogotá)."
      )}`;
    }
    const lines = [
      "Hola Fluxa Method.",
      "",
      "QUIERO ACTIVAR MI SISTEMA — consulto este paquete Fluxa Pages para mi supermercado (Bogotá):",
      "",
      ...selectedCartaItems.map((s) => `• ${s.label} — $${formatUsdAmount(s.priceUsd)} USD`),
      "",
      `Subtotal: $${formatUsdAmount(cartaSubtotal)} USD`,
    ];
    if (cartaDiscountPct > 0) {
      lines.push(`Descuento (${cartaDiscountPct}%): -$${formatUsdAmount(cartaDiscountUsd)} USD`);
    }
    lines.push(`Total estimado: $${formatUsdAmount(cartaTotal)} USD`);
    return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
  })();

  const togglePageService = (id) => {
    if (id === PRIMARY_PAGE_SERVICE_ID) return;
    setSelectedPageServices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const currentTimelinePhases =
    selectedTab === "education"
      ? timelineWeeksEducation
      : selectedTab === "system"
        ? timelinePhasesSystem
        : [];

  const progressPercent = 0;

  useEffect(() => {
    const phaseId =
      selectedTab === "education"
        ? "sem-1"
        : selectedTab === "system"
          ? "fase-1"
          : "fase-1";
    setActivePhase(phaseId);
  }, [selectedTab]);

  const handleTabChange = (tab) => {
    if (tab === selectedTab) return;
    setTabFade(false);
    window.setTimeout(() => {
      setSelectedTab(tab);
      window.requestAnimationFrame(() => setTabFade(true));
    }, 160);
  };

  const handleMagneticMove = (event, strength = 10) => {
    if (reduceMotion || typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const moveX = (offsetX / rect.width) * strength;
    const moveY = (offsetY / rect.height) * strength;
    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const handleMagneticLeave = (event) => {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  };

  const scrollTimeline = (direction) => {
    if (!timelineCarouselRef.current) return;
    const cardWidth = timelineCarouselRef.current.clientWidth * 0.9;
    timelineCarouselRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();
    if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", updateMotionPreference);
    else mediaQuery.addListener(updateMotionPreference);
    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", updateMotionPreference);
      else mediaQuery.removeListener(updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    setTabFade(true);
  }, []);

  useEffect(() => {
    setTotalPulse(true);
    const id = window.setTimeout(() => setTotalPulse(false), 280);
    return () => window.clearTimeout(id);
  }, [cartaTotal]);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    if (reduceMotion) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return () => {};
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reduceMotion, selectedTab]);

  useEffect(() => {
    if (reduceMotion) return () => {};
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setParallaxOffset(Math.min(window.scrollY * 0.08, 140));
        rafId = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduceMotion]);

  const timelineGridClass =
    selectedTab === "system" ? "md:grid-cols-4" : selectedTab === "education" ? "md:grid-cols-4" : "";

  const renderPhaseCard = (phase, index, phasesLength) => (
    <div
      key={phase.id}
      data-reveal
      className="reveal route-card relative z-10 w-[88vw] min-w-[88vw] max-w-md shrink-0 snap-center rounded-2xl border border-zinc-800/80 bg-zinc-950/55 p-4 text-center backdrop-blur-[1px] md:mx-auto md:w-full md:min-w-0 md:max-w-none md:shrink md:snap-none md:p-5"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {index !== phasesLength - 1 && (
        <div className="relative mx-auto mt-4 h-12 w-[2px] overflow-hidden rounded-full md:hidden">
          <span className="timeline-dash-vertical block h-full w-full" />
        </div>
      )}
      {index !== phasesLength - 1 && (
        <div className="absolute left-[calc(50%+50px)] top-[72px] hidden h-[2px] w-[calc(100%-20px)] overflow-hidden rounded-full md:block">
          <span className="timeline-dash absolute inset-0 block" />
        </div>
      )}

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: phase.color }}>
        {phase.label}
      </p>
      <button
        type="button"
        onClick={() => setActivePhase(phase.id)}
        onMouseMove={(event) => handleMagneticMove(event, 12)}
        onMouseLeave={handleMagneticLeave}
        className="magnetic mx-auto block"
      >
        <div
          className="pulse-glow mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border bg-zinc-950/85 text-2xl md:h-[80px] md:w-[80px] md:text-3xl"
          style={{
            borderColor: phase.color,
            boxShadow: phase.glow,
            transform: activePhase === phase.id ? "scale(1.08)" : undefined,
          }}
        >
          <span role="img" aria-label={phase.title}>
            {phase.icon}
          </span>
        </div>
      </button>
      <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white md:text-base">{phase.title}</p>
      <p className="text-sm text-zinc-300">{phase.subtitle}</p>

      <ul className="mt-3 space-y-1.5 text-left text-[12px] leading-relaxed text-zinc-300">
        {phase.items.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="text-teal-400">•</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] font-medium leading-relaxed text-zinc-400">{phase.scope}</p>

      <span
        className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${phase.statusClass}`}
      >
        {phase.status}
      </span>

      <div
        className={`mt-4 grid transition-all duration-500 ${activePhase === phase.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1.5 text-left text-[12px] leading-relaxed text-zinc-300">
            <li>
              <span className="font-semibold text-zinc-100">Construimos:</span> {phase.build}
            </li>
            <li>
              <span className="font-semibold text-zinc-100">Activamos:</span> {phase.activate}
            </li>
            <li>
              <span className="font-semibold text-zinc-100">Resultado:</span> {phase.result}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10 sm:px-8 md:pb-20 md:pt-24">
        <div data-reveal className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400" id="supermercado-plans-label">
            Selecciona un plan
          </p>
          <div
            role="tablist"
            aria-labelledby="supermercado-plans-label"
            className="plan-tabs-scroll mb-5 flex w-full flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2"
          >
            <button
              type="button"
              role="tab"
              id="supermercado-tab-system"
              aria-selected={selectedTab === "system"}
              onClick={() => handleTabChange("system")}
              className={`flex h-12 w-full items-center justify-center rounded-full border px-4 text-xs uppercase tracking-[0.14em] transition md:h-auto md:w-auto md:py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                selectedTab === "system"
                  ? "border-teal-500 bg-teal-600 font-bold text-white"
                  : "border-[#333] bg-[#1a1a1a] font-medium text-[#94A3B8]"
              }`}
            >
              Plan Sistema · $697
            </button>
            <button
              type="button"
              role="tab"
              id="supermercado-tab-pages"
              aria-selected={selectedTab === "pages"}
              onClick={() => handleTabChange("pages")}
              className={`flex h-12 w-full items-center justify-center rounded-full border px-4 text-xs uppercase tracking-[0.14em] transition md:h-auto md:w-auto md:py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                selectedTab === "pages"
                  ? "border-teal-500 bg-teal-600 font-bold text-white"
                  : "border-[#333] bg-[#1a1a1a] font-medium text-[#94A3B8]"
              }`}
            >
              Solo Páginas · $450
            </button>
            <button
              type="button"
              role="tab"
              id="supermercado-tab-education"
              aria-selected={selectedTab === "education"}
              onClick={() => handleTabChange("education")}
              className={`flex h-12 w-full items-center justify-center rounded-full border px-4 text-xs uppercase tracking-[0.14em] transition md:h-auto md:w-auto md:py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                selectedTab === "education"
                  ? "border-teal-500 bg-teal-600 font-bold text-white"
                  : "border-[#333] bg-[#1a1a1a] font-medium text-[#94A3B8]"
              }`}
            >
              Plan Educación · $250
            </button>
          </div>

          <div
            role="tabpanel"
            id="supermercado-hero-panel"
            aria-labelledby={`supermercado-tab-${selectedTab}`}
            className={`fade-tab ${tabFade ? "fade-tab-visible" : ""}`}
            key={selectedTab}
            aria-live="polite"
          >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{plan.chip}</p>
          <h1 className="text-3xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            Tu{" "}
            <span className="text-teal-400 drop-shadow-[0_0_14px_rgba(13,148,136,0.45)]">Supermercado</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-200 sm:text-2xl">
            Sistema digital para que tu supermercado venda más todos los días.
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-300">{plan.subtitle}</p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:mt-7 sm:text-sm sm:tracking-[0.35em]">
            {selectedTab === "system"
              ? "OFERTAS · CATÁLOGO · AUTOMATIZACIÓN · CLIENTES · BOGOTÁ"
              : "OFERTAS · DOMICILIOS · FIDELIZACIÓN · CLIENTES · BOGOTÁ"}
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{plan.heroPrice}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                {selectedTab === "system" ? "Inversión total" : selectedTab === "pages" ? "Precio único" : "Precio"}
              </p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{plan.heroDuration}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Duración</p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{plan.heroModules}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                {selectedTab === "system"
                  ? "ENTREGABLES"
                  : selectedTab === "pages"
                    ? "Entregables"
                    : "Formato"}
              </p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{plan.heroMetric4}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{plan.heroMetric4Label}</p>
            </article>
          </div>
          <a
            href={planWaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex w-full justify-center px-6 py-3 text-sm sm:w-auto ${CTA_BTN}`}
          >
            {plan.ctaText}
          </a>
          </div>
        </div>
      </section>

      {/* Contenido por pestaña */}
      <div className={`fade-tab ${tabFade ? "fade-tab-visible" : ""}`} key={`body-${selectedTab}`}>
      {selectedTab === "system" ? (
        <>
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
        <div data-reveal className="reveal rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Plan activo</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">FLUXA SYSTEM · $697 USD</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Alcance acorde a la primera columna de la tabla comparativa. Para inventario, CRM y ecommerce avanzado revisa el
            plan superior en la misma tabla.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {plan.included.map((item) => (
              <p key={item} className="rounded-lg border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-200">
                • {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <div data-reveal className="reveal rounded-2xl border border-zinc-800 bg-[#0D0D0D] p-4 sm:p-8">
          <h2 className="text-center text-base font-extrabold uppercase leading-snug tracking-wide text-white sm:text-lg md:text-xl">
            Diferencia real entre el Paquete 2 y el Paquete 3
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-zinc-500 sm:text-sm">
            Este plan Fluxa System es el de $697 en la tabla. El de $1,597 suma ecommerce avanzado, panel administrativo
            completo, inventario, alertas, CRM, dashboard, recuperación de carritos, recompra automática y automatización
            avanzada.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-800 bg-black/40">
            <div className="min-w-[320px]">
              <div className="grid grid-cols-[1fr_72px_72px] gap-2 border-b border-zinc-800 px-3 py-3 sm:grid-cols-[1fr_88px_88px] sm:px-4 sm:py-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 sm:text-xs">Característica</span>
                <span className="text-center text-[10px] font-bold uppercase leading-tight text-zinc-300 sm:text-xs">
                  Paquete 2
                  <span className="mt-0.5 block whitespace-nowrap font-extrabold normal-case text-teal-300">$697</span>
                </span>
                <span className="text-center text-[10px] font-bold uppercase leading-tight text-zinc-300 sm:text-xs">
                  Paquete 3
                  <span className="mt-0.5 block whitespace-nowrap font-extrabold normal-case text-teal-300">$1,597</span>
                </span>
              </div>
              {supermercadoPackageComparison.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1fr_72px_72px] items-center gap-2 border-b border-zinc-800/90 px-3 py-2.5 last:border-b-0 sm:grid-cols-[1fr_88px_88px] sm:px-4 sm:py-3"
                >
                  <span className="text-left text-[11px] leading-snug text-zinc-200 sm:text-sm">{row.feature}</span>
                  <div className="flex justify-center">{renderPkgCompareCell(row.paquete2, false)}</div>
                  <div className="flex justify-center">{renderPkgCompareCell(row.paquete3, true)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 md:pt-16">
        <div data-reveal className="reveal">
          <div className="mb-9 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">Ruta de activación</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Plan de ejecución por fases</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              Cuatro fases: landing principal, catálogo digital, automatización con n8n y pauta con cierre.
            </p>
            <p className="mx-auto mt-4 inline-flex rounded-full border border-teal-500/50 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Arranque: al confirmar propuesta
            </p>
            <div className="mx-auto mt-5 w-full max-w-md">
              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Progreso del plan: {Math.round(progressPercent)}%
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => scrollTimeline("left")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200"
                aria-label="Deslizar fases hacia la izquierda"
              >
                ←
              </button>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Desliza para ver fases</p>
              <button
                type="button"
                onClick={() => scrollTimeline("right")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200"
                aria-label="Deslizar fases hacia la derecha"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="relative"
            onMouseMove={(event) => {
              if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
              const rect = event.currentTarget.getBoundingClientRect();
              setSpotlight({ x: event.clientX - rect.left, y: event.clientY - rect.top, active: true });
            }}
            onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
          >
            <div
              className="pointer-events-none absolute -left-10 top-14 hidden h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl md:block"
              style={{ transform: `translateY(${reduceMotion ? 0 : parallaxOffset * 0.45}px)` }}
            />
            <div
              className="pointer-events-none absolute -right-8 bottom-10 hidden h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl md:block"
              style={{ transform: `translateY(${reduceMotion ? 0 : -parallaxOffset * 0.35}px)` }}
            />
            <div
              className="spotlight-layer pointer-events-none absolute inset-0 z-0 hidden rounded-3xl md:block"
              style={{
                opacity: spotlight.active ? 1 : 0,
                background: `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.12), transparent 60%)`,
              }}
            />

            <div
              ref={timelineCarouselRef}
              className={`mobile-snap-carousel flex items-start gap-4 overflow-x-auto pb-4 md:grid md:overflow-visible md:pb-0 ${timelineGridClass} md:gap-6`}
            >
              {currentTimelinePhases.map((phase, index) =>
                renderPhaseCard(phase, index, currentTimelinePhases.length)
              )}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <p className="rounded-xl border border-teal-500/80 bg-teal-600 px-6 py-3 text-center text-sm font-bold text-white shadow-[0_0_22px_rgba(13,148,136,0.25)] sm:text-base">
              Tu supermercado ya tiene los clientes. Fluxa Method pone el sistema.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            01. {diagnosisTitleHead}
            {diagnosisTitleTail ? (
              <>
                <br className="lg:hidden" aria-hidden />
                <span> {diagnosisTitleTail}</span>
              </>
            ) : null}
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">{diagnosisSituation.subtitle}</p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <article className="rounded-2xl border border-[#222222] border-l-2 border-l-teal-500 bg-[#111111] pl-5 pr-5 py-5 sm:pl-6 sm:pr-6 sm:py-6">
              <h3 className="text-[20px] font-bold leading-snug text-white">
                {diagnosisSituation.startPointTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {diagnosisSituation.startPointItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-teal-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#222222] bg-[#111111] p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#666666]">
                Lo que ya hacen las cadenas
              </p>
              <div className="mt-4 space-y-3">
                {diagnosisSituation.frictionItems.map((item) => {
                  const frictionIcon =
                    item.title === "La competencia ya vende desde el celular."
                      ? "⚡"
                      : item.title === "Si el cliente no pasa, no compra."
                        ? "📍"
                        : item.title === "No existe recompra."
                          ? "🔄"
                          : "📣";
                  return (
                    <div
                      key={item.title}
                      className="border-l-[3px] border-l-teal-500 bg-[#0D0D0D] py-3 pl-4 pr-3 transition-colors duration-200 hover:bg-[#1a1a1a] sm:pl-5 sm:pr-4"
                    >
                      <p className="flex items-start gap-2.5">
                        <span className="shrink-0 text-base leading-none" aria-hidden>
                          {frictionIcon}
                        </span>
                        <span className="text-[13px] font-bold leading-snug text-white">{item.title}</span>
                      </p>
                      <p className="mt-1.5 pl-[1.85rem] text-[12px] leading-relaxed text-[#94A3B8]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>

          <p className="mt-6 rounded-lg bg-teal-600 p-3 text-center text-base font-bold text-white shadow-[0_0_18px_rgba(13,148,136,0.22)]">
            <span aria-hidden>→ </span>
            Conclusión: {diagnosisSituation.conclusion}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            02. Transformaciones antes / después
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Del mostrador tradicional al sistema digital que vende todos los días.
          </p>

          <div className="mt-6 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Antes
              </p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">
                Después
              </p>
            </div>
            {transformationsSystem.map((item, idx) => (
              <div key={item.before} className="grid gap-3 md:grid-cols-2">
                <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformación {idx + 1}</p>
                  <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                </article>
                <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Impacto {idx + 1}</p>
                  <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">03. Qué recibe exactamente — entregables</h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Dos landings, automatización semanal y arranque en Meta Ads. Implementación en 2 meses.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverablesSystem.map((column) => (
              <article
                key={column.title}
                onMouseMove={(event) => handleMagneticMove(event, 8)}
                onMouseLeave={handleMagneticLeave}
                className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-teal-400/60 hover:shadow-[0_0_22px_rgba(13,148,136,0.14)]"
              >
                <h3 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}>{column.title}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-teal-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="rounded-xl bg-[#0B2A4A] px-5 py-3 text-center text-xl font-extrabold text-white">
              PAQUETE 2 · TOTAL | $697 USD
            </p>
            <p className="rounded-xl border border-teal-500/45 bg-teal-500/10 px-5 py-3 text-center text-sm font-bold text-teal-100">
              Presupuesto de pauta Meta Ads se paga aparte por el supermercado.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal-fade-in-up rounded-2xl border border-zinc-800 bg-[#0A0A0A] p-5 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Construir esto por separado costaría:
          </h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">
            Referencias de mercado Colombia 2026 para piezas parecidas a este paquete.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800/80">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {marketSeparateCostRows.map((row) => (
                  <tr key={row.label} className="border-b border-zinc-800/90">
                    <td className="px-4 py-3 text-zinc-300 sm:px-5 sm:py-3.5">{row.label}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-zinc-100 sm:px-5 sm:py-3.5">
                      {row.value}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-zinc-800/90">
                  <td className="px-4 py-3 text-zinc-400 line-through sm:px-5 sm:py-3.5">Total referencia mercado</td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums text-zinc-400 line-through sm:px-5 sm:py-3.5">
                    $700 USD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md border-l-4 border-teal-500 bg-black/25 py-4 pl-4 sm:py-5 sm:pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Inversión Fluxa</p>
              <p className="mt-1 text-3xl font-extrabold tabular-nums text-teal-400 sm:text-4xl md:text-5xl">
                $697 USD
              </p>
              <p className="mt-3 text-sm font-bold text-emerald-400">Mismo precio. Todo incluido.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">04. Forma de pago y condiciones</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <article
              onMouseMove={(event) => handleMagneticMove(event, 8)}
              onMouseLeave={handleMagneticLeave}
              className="magnetic rounded-2xl border border-blue-400/60 bg-[#111111] p-6"
            >
              <p className="rounded-xl bg-blue-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100">
                {plan.paymentA.title}
              </p>
              <div className="mt-4 space-y-3">
                {plan.paymentA.rows.map((row) => (
                  <div key={row.label} className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                    <p className="text-sm text-zinc-300">{row.label}</p>
                    <p className="mt-1 text-3xl font-extrabold text-blue-300">{row.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article
              onMouseMove={(event) => handleMagneticMove(event, 8)}
              onMouseLeave={handleMagneticLeave}
              className="magnetic rounded-2xl border border-emerald-400/60 bg-[#111111] p-6"
            >
              <p className="rounded-xl bg-emerald-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-emerald-100">
                {plan.paymentB.title}
              </p>
              <div className="mt-4 space-y-3">
                {plan.paymentB.rows.map((row, idx) => (
                  <div key={row.label} className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                    <p className="text-sm text-zinc-300">{row.label}</p>
                    <p className={`mt-1 font-extrabold text-emerald-300 ${idx === 0 ? "text-4xl" : "text-3xl"}`}>{row.value}</p>
                    {idx === 0 && plan.paymentB.footnote ? (
                      <p className="text-sm font-semibold text-emerald-200">{plan.paymentB.footnote}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          </div>
          <p className="mt-7 text-center text-4xl font-extrabold">{plan.totalLine}</p>
          <p className="mt-4 text-center text-sm font-semibold text-zinc-300">
            Tu supermercado ya tiene los clientes. Fluxa Method pone el sistema.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Condiciones del proyecto</h2>
          <details className="mt-4 rounded-xl border border-zinc-700 bg-zinc-900/65 p-4 md:hidden">
            <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">
              Ver condiciones
            </summary>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
              {projectConditionsSystem.map((item) => (
                <li key={`mobile-${item}`} className="flex gap-2">
                  <span className="text-emerald-300">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
          <ul className="mt-4 hidden space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base md:block">
            {projectConditionsSystem.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-300">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Plan de ejecución</p>
          <div className="mt-5 rounded-xl border border-zinc-700 bg-[#111111] p-3">
            {executionRowsSystem.map((row) => (
              <article
                key={row.month}
                className="grid gap-2 border-b border-zinc-800 p-4 last:border-b-0 sm:grid-cols-[100px_1fr] sm:items-start"
              >
                <p className={`text-sm font-bold uppercase tracking-[0.16em] ${row.color}`}>{row.month}</p>
                <div>
                  <h3 className="text-3xl font-extrabold">{row.title}</h3>
                  <p className="mt-1 text-xl text-zinc-300">{row.points}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
        </>
      ) : selectedTab === "pages" ? (
        <div className="pb-10 md:pb-0">
          <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
            <div data-reveal className="reveal rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Plan activo</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">FLUXA PAGES ($450)</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Presencia profesional en 2 semanas — páginas listas para dirigir tráfico a WhatsApp y ofertas.
              </p>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8 md:pb-12">
            <div data-reveal className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Carta modular</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Arma tu paquete</h2>
              <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                El ecommerce es la base principal. Los demás servicios se agregan como adicionales según lo que necesites.
              </p>

              <article className="mt-6 overflow-hidden rounded-2xl border border-teal-500/40 bg-gradient-to-br from-teal-500/10 via-zinc-950 to-zinc-900 p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-400">Servicio principal</p>
                <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                  <h3 className="text-2xl font-extrabold sm:text-3xl">Tienda ecommerce completa</h3>
                  <p className="text-4xl font-extrabold text-teal-400">$450</p>
                </div>
                <p className="mt-2 text-sm text-zinc-300">Incluye catálogo, carrito, checkout y Wompi listo para vender.</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                  <span className="service-shine block h-full w-1/3 rounded-full bg-gradient-to-r from-teal-500 via-teal-300 to-transparent" />
                </div>
              </article>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {PAGE_SERVICES_CARTA.map((svc) => {
                  const isPrimary = svc.id === PRIMARY_PAGE_SERVICE_ID;
                  const checked = selectedPageServices.includes(svc.id);
                  return (
                    <article
                      key={svc.id}
                      onMouseMove={(e) => handleMagneticMove(e, 8)}
                      onMouseLeave={handleMagneticLeave}
                      className={`magnetic route-card rounded-2xl border bg-[#111111] p-5 transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_22px_rgba(13,148,136,0.12)] ${
                        checked ? "border-teal-500/70 shadow-[0_0_18px_rgba(13,148,136,0.1)]" : "border-zinc-700 hover:border-teal-400/50"
                      }`}
                    >
                      <label className={`flex gap-3 ${isPrimary ? "cursor-default" : "cursor-pointer"}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePageService(svc.id)}
                          disabled={isPrimary}
                          className="peer mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-600 bg-zinc-900 accent-teal-600 focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-0 focus:ring-offset-black"
                          aria-describedby={`svc-price-${svc.id}`}
                        />
                        <span className="min-w-0 flex-1 text-left text-sm font-medium leading-snug text-zinc-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-500">
                          {svc.label}
                          <span
                            className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${
                              isPrimary
                                ? "border-teal-500/70 bg-teal-500/10 text-teal-300"
                                : "border-zinc-600 text-zinc-400"
                            }`}
                          >
                            {isPrimary ? "Principal" : "Adicional"}
                          </span>
                          {!isPrimary ? (
                            <span className={`ml-2 inline-flex text-xs font-bold text-emerald-300 transition-all duration-200 ${checked ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}>
                              ✓ agregado
                            </span>
                          ) : null}
                        </span>
                        <span id={`svc-price-${svc.id}`} className="shrink-0 text-lg font-extrabold tabular-nums text-teal-400">
                          ${formatUsdAmount(svc.priceUsd)}
                        </span>
                      </label>
                    </article>
                  );
                })}
              </div>

              <div className="mx-auto mt-10 hidden max-w-xl rounded-2xl border border-zinc-700 bg-[#111111] p-6 md:block">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Total estimado</p>
                <div className="mt-4 space-y-3 border-b border-zinc-800 pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">
                      Subtotal ({additionalServicesCount} {additionalServicesCount === 1 ? "adicional" : "adicionales"} + principal)
                    </span>
                    <span className="font-semibold text-white">${formatUsdAmount(cartaSubtotal)} USD</span>
                  </div>
                  {cartaDiscountPct > 0 ? (
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-400">Descuento ({cartaDiscountPct}%)</span>
                      <span className="font-semibold text-emerald-400">−${formatUsdAmount(cartaDiscountUsd)} USD</span>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-500">
                      {cartaCount === 0 ? "Selecciona servicios para ver el total." : "Sin descuento hasta agregar otro servicio."}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">A pagar</p>
                    <p className={`text-3xl font-extrabold text-white transition-all duration-200 ${totalPulse ? "scale-[1.04] text-teal-200" : ""}`}>
                      ${formatUsdAmount(cartaTotal)} USD
                    </p>
                  </div>
                  <a
                    href={pagesCartaWaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex shrink-0 px-5 py-3 text-center text-xs tracking-[0.12em] sm:text-sm ${CTA_BTN}`}
                  >
                    Consultar por este paquete
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="sticky bottom-3 z-30 mx-4 mt-6 rounded-2xl border border-zinc-700 bg-zinc-950/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_0_24px_rgba(0,0,0,0.55)] backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Total</p>
                  <p className={`text-2xl font-extrabold text-white transition-all duration-200 ${totalPulse ? "scale-[1.04] text-teal-200" : ""}`}>
                    ${formatUsdAmount(cartaTotal)} USD
                  </p>
                </div>
                {cartaDiscountPct > 0 ? (
                  <p className="text-sm font-semibold text-emerald-400">−{cartaDiscountPct}% aplicado</p>
                ) : (
                  <p className="text-xs text-zinc-500">Sin dto. aún</p>
                )}
              </div>
              <a
                href={pagesCartaWaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full px-4 py-3 text-center text-xs tracking-[0.12em] sm:w-auto sm:min-w-[200px] sm:text-sm ${CTA_BTN}`}
              >
                Consultar por este paquete
              </a>
            </div>
          </div>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Inversión</h2>
              <p className="mt-3 text-sm text-zinc-400">
                Paquete referencia Fluxa Pages <span className="font-semibold text-zinc-200">$450 USD</span> (entrega ~2 semanas,
                50% + 50%) o arma tu propio mix con la carta y descuentos por volumen arriba.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-500/40 bg-blue-950/25 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Ecommerce principal</p>
                  <p className="mt-2 text-4xl font-extrabold text-blue-300">$450 USD</p>
                </div>
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Entrega típica</p>
                  <p className="mt-2 text-3xl font-extrabold text-emerald-300">2 semanas</p>
                </div>
                <div className="rounded-xl border border-teal-500/40 bg-teal-950/20 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Pago paquete</p>
                  <p className="mt-2 text-lg font-bold text-teal-100">50% inicio + 50% entrega</p>
                </div>
              </div>
              <p className="mt-6 rounded-xl border border-zinc-600 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-300">
                Las combinaciones por carta se cotizan según selección y descuento. Para automatizaciones y sistema completo ver
                Plan Sistema $697.
              </p>
            </div>
          </section>
        </div>
      ) : (
        <>
          <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
            <div data-reveal className="reveal rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Plan activo</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">FLUXA EDU ($250)</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Cuatro semanas en vivo — contenido, redes y Meta Ads con feedback directo del equipo Fluxa.
              </p>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-4 sm:px-8 md:pt-8">
            <div data-reveal className="reveal">
              <div className="mb-9 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">Calendario</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Semana a semana</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
                  Cuatro módulos en línea con entregables prácticos por semana.
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
                  <button
                    type="button"
                    onClick={() => scrollTimeline("left")}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200"
                    aria-label="Anterior"
                  >
                    ←
                  </button>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Desliza semanas</p>
                  <button
                    type="button"
                    onClick={() => scrollTimeline("right")}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200"
                    aria-label="Siguiente"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                className="relative"
                onMouseMove={(event) => {
                  if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
                  const rect = event.currentTarget.getBoundingClientRect();
                  setSpotlight({ x: event.clientX - rect.left, y: event.clientY - rect.top, active: true });
                }}
                onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
              >
                <div
                  className="pointer-events-none absolute -left-10 top-14 hidden h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl md:block"
                  style={{ transform: `translateY(${reduceMotion ? 0 : parallaxOffset * 0.45}px)` }}
                />
                <div
                  className="pointer-events-none absolute -right-8 bottom-10 hidden h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl md:block"
                  style={{ transform: `translateY(${reduceMotion ? 0 : -parallaxOffset * 0.35}px)` }}
                />
                <div
                  className="spotlight-layer pointer-events-none absolute inset-0 z-0 hidden rounded-3xl md:block"
                  style={{
                    opacity: spotlight.active ? 1 : 0,
                    background: `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.12), transparent 60%)`,
                  }}
                />
                <div
                  ref={timelineCarouselRef}
                  className={`mobile-snap-carousel flex items-start gap-4 overflow-x-auto pb-4 md:grid md:overflow-visible md:pb-0 ${timelineGridClass} md:gap-6`}
                >
                  {currentTimelinePhases.map((phase, index) =>
                    renderPhaseCard(phase, index, currentTimelinePhases.length)
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Qué incluye</h2>
              <ul className="mt-5 space-y-2 text-sm text-zinc-300 sm:text-base">
                {educationIncludes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-teal-400">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Inversión</h2>
              <p className="mt-4 text-4xl font-extrabold text-blue-300">$250 USD</p>
              <p className="mt-2 text-sm text-zinc-400">Pago único antes de la primera sesión.</p>
              <p className="mt-4 rounded-xl border border-violet-500/40 bg-violet-950/20 px-4 py-3 text-sm text-violet-200">
                Atención personalizada durante las 4 semanas.
              </p>
            </div>
          </section>
        </>
      )}
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Resumen ejecutivo</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-300">
                Hoy
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {executiveSummaryShared.today.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-[#FCA5A5]" aria-hidden>
                      ❌
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                Con Fluxa
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {(executiveWithFluxaByTab[selectedTab] ?? executiveSummaryShared.withFluxa).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-[#6EE7B7]" aria-hidden>
                      ✅
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 text-center">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                Inversión
              </p>
              <p className="mt-4 text-4xl font-extrabold text-blue-300 sm:text-5xl">{plan.summaryInvestment}</p>
              <p className="mt-4 text-lg text-zinc-300">
                {selectedTab === "system" && (
                  <>
                    2 meses
                    <br />
                    2 páginas · 4 fases
                    <br />
                    activos propios
                  </>
                )}
                {selectedTab === "pages" && (
                  <>
                    2 semanas
                    <br />
                    4 entregables
                    <br />
                    pago 50/50
                  </>
                )}
                {selectedTab === "education" && (
                  <>
                    4 semanas
                    <br />
                    4 sesiones en vivo
                    <br />
                    acompañamiento personalizado
                  </>
                )}
              </p>
              <p className="mx-auto mt-5 inline-flex rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                {plan.summaryPayment}
              </p>
              {plan.metaNote ? (
                <p className="mt-4 text-xs text-zinc-500">{plan.metaNote}</p>
              ) : null}
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8">
        <div data-reveal className="reveal-fade-in-up">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Por qué Fluxa y no una agencia tradicional
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
            No hacemos páginas web. Instalamos sistemas digitales.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {whyFluxaCards.map((card) => (
              <article
                key={card.title}
                className="route-card rounded-2xl border border-zinc-700 bg-[#111111] p-5 transition duration-300 hover:border-teal-400/60 hover:shadow-[0_0_22px_rgba(13,148,136,0.14)] sm:p-6"
              >
                <p className="text-2xl" aria-hidden>
                  {card.emoji}
                </p>
                <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-16 sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Tu supermercado ya tiene los clientes.
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-blue-300 sm:text-4xl">Fluxa Method pone el sistema.</p>
          <a
            href={planWaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-10 inline-flex px-8 py-4 text-sm ${CTA_BTN}`}
          >
            QUIERO ACTIVAR MI SISTEMA
          </a>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/80 sm:text-sm">
            fluxamethod.com · @fluxamethod · Bogotá, Colombia
          </p>
        </div>
      </section>

      <div className="mobile-cta mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 md:hidden">
        <a
          href={planWaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full px-4 py-3 text-center text-sm ${CTA_BTN}`}
        >
          QUIERO ACTIVAR MI SISTEMA
        </a>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px) scale(0.98);
          transition: opacity 0.7s ease, transform 0.7s ease;
          will-change: transform, opacity;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .reveal-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.72s ease, transform 0.72s ease;
          will-change: transform, opacity;
        }
        .reveal-fade-in-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-tab {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .fade-tab.fade-tab-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .pulse-glow {
          animation: pulseGlow 2.2s ease-in-out infinite;
        }
        .timeline-dash {
          background-image: repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.2) 0,
            rgba(255, 255, 255, 0.2) 8px,
            transparent 8px,
            transparent 14px
          );
          animation: dashFlowHorizontal 1.8s linear infinite;
        }
        .timeline-dash-vertical {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2) 0,
            rgba(255, 255, 255, 0.2) 8px,
            transparent 8px,
            transparent 14px
          );
          animation: dashFlowVertical 1.8s linear infinite;
        }
        .fade-soft {
          transition-duration: 0.8s;
        }
        .spotlight-layer {
          transition: opacity 0.28s ease;
        }
        .mobile-snap-carousel {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .mobile-snap-carousel::-webkit-scrollbar {
          display: none;
        }
        .plan-tabs-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .plan-tabs-scroll::-webkit-scrollbar {
          display: none;
        }
        .magnetic {
          transition: transform 0.25s ease;
          will-change: transform;
        }
        .route-card {
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .route-card:hover {
          transform: translateY(-2px);
          border-color: rgba(45, 212, 191, 0.35);
          box-shadow: 0 0 24px rgba(13, 148, 136, 0.12);
        }
        .service-shine {
          animation: serviceShine 2.4s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            filter: brightness(0.95);
          }
          50% {
            transform: scale(1.05);
            filter: brightness(1.12);
          }
          100% {
            transform: scale(1);
            filter: brightness(0.95);
          }
        }
        @keyframes dashFlowHorizontal {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 48px 0;
          }
        }
        @keyframes dashFlowVertical {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 48px;
          }
        }
        @keyframes serviceShine {
          0% {
            transform: translateX(-35%);
            opacity: 0.55;
          }
          50% {
            transform: translateX(115%);
            opacity: 1;
          }
          100% {
            transform: translateX(220%);
            opacity: 0.4;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal-fade-in-up,
          .pulse-glow,
          .timeline-dash,
          .timeline-dash-vertical,
          .magnetic,
          .route-card,
          .fade-tab,
          .service-shine {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
          .fade-tab {
            opacity: 1 !important;
          }
          .reveal-fade-in-up {
            opacity: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
