"use client";

import { useEffect, useRef, useState } from "react";

const PLAN_META = {
  system: {
    chip: "FLUXA SYSTEM · MÁS POPULAR",
    subtitle:
      "Tu sistema digital instalado y funcionando para vender más sin depender solo del voz a voz.",
    heroPrice: "$697 USD",
    heroDuration: "2 meses",
    heroModules: "4 módulos",
    heroMetric4: "∞",
    heroMetric4Label: "Clientes potenciales",
    ctaText: "Confirmar arranque del proyecto",
    included: [
      "Presencia digital: Instagram, WhatsApp Business, Google My Business y link en bio.",
      "Sistema de pedidos online con catálogo, confirmaciones y panel del día.",
      "Automatizaciones: ofertas semanales, puntos por WhatsApp, cupones y recuperación.",
      "Pauta Meta Ads geolocalizada (5 km), creativos de ofertas y optimización por ROAS.",
      "Entrega en 2 meses con activos 100 % para el supermercado.",
      "30 días de soporte post-entrega para ajustes menores.",
    ],
    paymentA: {
      title: "Opción A — Pago en 2 cuotas",
      rows: [
        { label: "Cuota 1 al firmar", value: "$350 USD" },
        { label: "Cuota 2 al mes 2", value: "$347 USD" },
      ],
    },
    paymentB: {
      title: "Opción B — Pago único",
      rows: [{ label: "Pago completo al firmar", value: "$647 USD" }],
      footnote: "Ahorra $50 USD · Arranque inmediato.",
    },
    totalLine: "$697 USD · 2 meses · Sin intereses",
    summaryInvestment: "$697 USD",
    summaryPayment: "2 cuotas o pago único",
    metaNote: "Meta Ads se paga aparte por el cliente (sugerido $100–$200 USD/mes).",
    totalProjectLabel: "$697 USD",
  },
  pages: {
    chip: "FLUXA PAGES",
    subtitle:
      "Tu presencia digital profesional lista en 2 semanas. Sin sistema completo — solo las páginas que necesitas.",
    heroPrice: "$350 USD",
    heroDuration: "2 semanas",
    heroModules: "4 activos",
    heroMetric4: "—",
    heroMetric4Label: "Automatizaciones",
    ctaText: "Confirmar arranque del proyecto",
    included: [],
    paymentA: null,
    paymentB: null,
    totalLine: "",
    summaryInvestment: "$350 USD",
    summaryPayment: "50% inicio + 50% entrega",
    metaNote: "",
    totalProjectLabel: "$350 USD",
  },
  education: {
    chip: "FLUXA EDU · 4 SEMANAS",
    subtitle:
      "Aprende a manejar tus redes, crear contenido y pautar en Meta Ads con acompañamiento real de Fluxa Method.",
    heroPrice: "$250 USD",
    heroDuration: "4 semanas",
    heroModules: "4 sesiones",
    heroMetric4: "1",
    heroMetric4Label: "Cupo por cohorte",
    ctaText: "Confirmar arranque del proyecto",
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
    title: "PRESENCIA DIGITAL",
    subtitle: "Semanas 1–2",
    icon: "🌐",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Perfil Instagram optimizado con identidad visual",
      "WhatsApp Business configurado con catálogo",
      'Google My Business activo (aparece en "supermercado cerca de mí")',
      "Link en bio con menú de ofertas, pedidos y contacto",
    ],
    scope: "Base digital local: te encuentran, confían y contactan sin fricción.",
    build: "Configuramos canales, identidad y datos de contacto unificados.",
    activate: "Publicamos bio, catálogo WA y ficha Google con CTA claro.",
    result: "Más visibilidad local y conversaciones que antes se quedaban en el aire.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "SISTEMA DE PEDIDOS",
    subtitle: "Semanas 3–4",
    icon: "🛒",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Página web con catálogo y sistema de pedidos online",
      "Confirmación automática de pedido al cliente por WhatsApp",
      "Notificación al supermercado cuando llega pedido nuevo",
      "Panel de gestión de pedidos del día",
    ],
    scope: "Ventas fuera del mostrador: pedido claro, confirmado y seguible.",
    build: "Implementamos web, flujo de pedido y avisos en tiempo real.",
    activate: "Conectamos WhatsApp del cliente y del equipo con el flujo de pedidos.",
    result: "El cliente compra desde el celular; el local recibe cada orden ordenada.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "AUTOMATIZACIONES",
    subtitle: "Semanas 5–6",
    icon: "⚡",
    color: "#FFD600",
    glow: "0 0 0 2px rgba(255,214,0,0.5), 0 0 36px rgba(255,214,0,0.5)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Envío automático de ofertas semanales cada lunes",
      "Flujo de recuperación de clientes inactivos",
      "Sistema de puntos digital por WhatsApp sin app",
      "Cupones digitales de descuento automatizados",
    ],
    scope: "Recurrencia y ticket: ofertas y fidelidad sin depender solo del tráfico a la puerta.",
    build: "Diseñamos flujos de mensaje, reglas de puntos y cupones.",
    activate: "Programamos envíos, segmentación básica y respuestas automáticas.",
    result: "Más recompra y visitas guiadas por ofertas, no solo por el azar del paso.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "PAUTA Y ESCALA",
    subtitle: "Mes 2",
    icon: "📈",
    color: "#A855F7",
    glow: "0 0 0 2px rgba(168,85,247,0.5), 0 0 36px rgba(168,85,247,0.55)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    items: [
      "Campañas Meta Ads geolocalizadas (5 km a la redonda)",
      "Creativos optimizados para ofertas semanales",
      "Optimización semanal de campañas por ROAS",
      "Reporte mensual de desempeño y clientes nuevos",
    ],
    scope: "Escala medible: inversión en anuncios con control y mejora continua.",
    build: "Estructuramos campañas, creativos y medición por zona y oferta.",
    activate: "Ajustamos pujas, creativos y audiencias con reporte claro.",
    result: "Llegas a familias cercanas con ofertas que convierten, no solo impresiones.",
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
    title: "Contenido que vende",
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
    title: "Meta Ads desde cero",
    subtitle: "Semana 3",
    icon: "🎯",
    color: "#FFD600",
    glow: "0 0 0 2px rgba(255,214,0,0.5), 0 0 36px rgba(255,214,0,0.5)",
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
    title: "Optimización y escala",
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
  titleBlock: "Dónde está hoy tu supermercado",
  subtitle:
    "Tienes clientes que ya te conocen, pero sin sistema digital estás dejando ventas sobre la mesa todos los días.",
  startPointTitle:
    "Ventas locales fuertes, pero sin máquina digital que capture pedidos y recurrentes.",
  startPointItems: [
    "Las ventas dependen 100 % del tráfico de calle.",
    "Sin presencia digital consistente.",
    "Sin sistema de pedidos ni domicilios online.",
    "Sin base de datos de clientes propia.",
    "Sin automatizaciones de ofertas.",
  ],
  frictionItems: [
    {
      title: "Competencia de cadenas",
      description:
        "D1, Ara y Justo&Bueno tienen app y ofertas digitales. Sin sistema, el cliente va donde ve la oferta primero.",
    },
    {
      title: "Ventas solo presenciales",
      description:
        "Si el cliente no pasa por el local, no compra. Sin domicilios ni pedidos online, pierdes ventas diarias.",
    },
    {
      title: "Sin fidelización",
      description:
        "No hay forma de traer de vuelta al cliente que ya compró. Cada semana empiezas desde cero.",
    },
    {
      title: "Ofertas que nadie ve",
      description:
        "Las promociones se hacen en el local pero no llegan a los clientes que están en casa.",
    },
  ],
  conclusion:
    "Ya tienes clientes y ticket; falta el sistema que lleve ofertas, pedidos y recurrencia al celular.",
};

const transformationsSystem = [
  {
    before: "El cliente pasa por el local o no compra.",
    after: "Sistema de pedidos online activo — compra desde el celular a cualquier hora.",
  },
  {
    before: "Las ofertas solo se ven en el local.",
    after: "Ofertas enviadas automáticamente a todos los contactos cada lunes por WhatsApp.",
  },
  {
    before: "No sabes quiénes son tus clientes frecuentes.",
    after: "Base de datos activa con historial de compra y segmentación por preferencias.",
  },
  {
    before: "Sin sistema de fidelización — cada semana empiezas desde cero.",
    after: "Sistema de puntos digital — el cliente acumula y vuelve solo.",
  },
  {
    before: "La competencia tiene app y ofertas digitales — tú no.",
    after: "Campañas Meta Ads geolocalizadas que llegan a familias en 5 km a la redonda.",
  },
];

const deliverablesSystem = [
  {
    title: "Presencia Digital",
    color: "text-emerald-300 border-emerald-400/40",
    items: [
      "Perfil Instagram con identidad visual consistente",
      "WhatsApp Business con catálogo de productos",
      "Google My Business optimizado",
      "Link en bio con menú completo",
      "Fotografía de productos para redes",
    ],
  },
  {
    title: "Sistema de Pedidos",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Página web con catálogo online",
      "Carrito con pago contra entrega o Wompi",
      "Sistema de domicilios con zonas y horarios",
      "Confirmación automática al cliente",
      "Panel de gestión de pedidos",
    ],
  },
  {
    title: "Automatizaciones",
    color: "text-violet-300 border-violet-400/40",
    items: [
      "Ofertas semanales automáticas cada lunes",
      "Sistema de puntos digital por WhatsApp",
      "Cupones digitales de descuento",
      "Flujo de recuperación clientes inactivos",
      "Cumpleaños automatizados con descuento",
    ],
  },
  {
    title: "Pauta y Escala",
    color: "text-amber-300 border-amber-400/40",
    items: [
      "Configuración Meta Ads desde cero",
      "Campañas geolocalizadas 5 km",
      "Creativos para ofertas semanales",
      "Optimización semanal por ROAS",
      "2 sesiones estratégicas mensuales",
    ],
  },
];

const projectConditionsSystem = [
  "Duración: 2 meses desde la firma.",
  "30 días de soporte post-entrega para ajustes menores.",
  "Todos los activos quedan como propiedad del supermercado.",
  "Sin dependencia de Fluxa Method tras la entrega.",
  "Meta Ads se paga aparte por el cliente ($100–$200 USD/mes sugerido).",
];

const executiveSummaryShared = {
  today: ["Sin sistema", "Sin digital", "Sin automatizaciones"],
  withFluxa: ["Sistema activo", "Clientes fidelizados", "Pauta convirtiendo"],
};

const metricsHero = [
  { label: "Competencia con app", value: "D1, Ara", color: "text-emerald-300" },
  { label: "Sistema de pedidos online", value: "0", color: "text-blue-300" },
  { label: "Clientes en base de datos", value: "0", color: "text-violet-300" },
  { label: "Automatizaciones activas", value: "0", color: "text-red-300" },
];

const PAGE_SERVICES_CARTA = [
  {
    id: "landing-negocio",
    label: "Landing de negocio (quiénes somos, servicios, contacto, ubicación)",
    priceUsd: 150,
  },
  {
    id: "landing-producto",
    label: "Landing de producto individual con CTA",
    priceUsd: 120,
  },
  {
    id: "tienda-ecommerce",
    label: "Tienda ecommerce completa (catálogo, carrito, Wompi)",
    priceUsd: 450,
  },
  {
    id: "pedidos-wa",
    label: "Sistema de pedidos por WhatsApp automatizado",
    priceUsd: 180,
  },
  {
    id: "panel-dashboard",
    label: "Panel de control + dashboard de métricas",
    priceUsd: 200,
  },
  {
    id: "inventario",
    label: "Sistema de inventario con alertas de stock",
    priceUsd: 220,
  },
  {
    id: "blog-ofertas",
    label: "Blog o sección de ofertas actualizable",
    priceUsd: 100,
  },
  {
    id: "gmb",
    label: "Google My Business optimizado",
    priceUsd: 60,
  },
  {
    id: "instagram-canva",
    label: "Perfil Instagram optimizado + 5 plantillas Canva",
    priceUsd: 80,
  },
  {
    id: "pagina-ofertas",
    label: "Página de ofertas semanales actualizable",
    priceUsd: 90,
  },
];

function pagesCartaDiscountPercent(count) {
  if (count <= 1) return 0;
  if (count <= 3) return 10;
  if (count <= 5) return 20;
  return 30;
}

function formatUsdAmount(n) {
  const rounded = Math.round(n * 100) / 100;
  const hasCents = rounded % 1 !== 0;
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  });
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
    title: "Presencia + pedidos",
    points: "Fases 1–2 · Digital local · Catálogo y pedidos online",
    color: "text-emerald-300",
  },
  {
    month: "Mes 2",
    title: "Automatización + pauta",
    points: "Fases 3–4 · Ofertas y puntos · Meta Ads 5 km · Reporte",
    color: "text-blue-300",
  },
];

export default function SupermercadoPage() {
  const [selectedTab, setSelectedTab] = useState("system");
  const [activePhase, setActivePhase] = useState("fase-1");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const [tabFade, setTabFade] = useState(true);
  const [selectedPageServices, setSelectedPageServices] = useState([]);
  const timelineCarouselRef = useRef(null);

  const plan = PLAN_META[selectedTab];

  const selectedCartaItems = PAGE_SERVICES_CARTA.filter((s) => selectedPageServices.includes(s.id));
  const cartaCount = selectedCartaItems.length;
  const cartaSubtotal = selectedCartaItems.reduce((acc, s) => acc + s.priceUsd, 0);
  const cartaDiscountPct = pagesCartaDiscountPercent(cartaCount);
  const cartaDiscountUsd = Math.round(cartaSubtotal * (cartaDiscountPct / 100) * 100) / 100;
  const cartaTotal = Math.round((cartaSubtotal - cartaDiscountUsd) * 100) / 100;

  const pagesCartaWaHref = (() => {
    const base = "https://wa.me/573116425337";
    if (cartaCount === 0) {
      return `${base}?text=${encodeURIComponent(
        "Hola Fluxa Method, quiero información sobre Fluxa Pages y la carta de servicios para mi supermercado."
      )}`;
    }
    const lines = [
      "Hola Fluxa Method, quiero consultar este paquete de servicios para mi supermercado:",
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
    selectedTab === "system" || selectedTab === "education"
      ? "md:grid-cols-4"
      : "";

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
            <span className="text-[#FFD600]">•</span>
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
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10 sm:px-8 md:pb-20 md:pt-24">
        <div data-reveal className="reveal mx-auto max-w-4xl text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Toca un plan para ver sus detalles
          </p>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleTabChange("system")}
              aria-pressed={selectedTab === "system"}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                selectedTab === "system"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Plan Sistema · $697
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("pages")}
              aria-pressed={selectedTab === "pages"}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                selectedTab === "pages"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Solo Páginas · $350
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("education")}
              aria-pressed={selectedTab === "education"}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                selectedTab === "education"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Plan Educación · $250
            </button>
          </div>

          <div
            className={`fade-tab ${tabFade ? "fade-tab-visible" : ""}`}
            key={selectedTab}
            aria-live="polite"
          >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{plan.chip}</p>
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            Tu{" "}
            <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.45)]">Supermercado</span>
          </h1>
          <p className="mt-4 text-xl text-zinc-200 sm:text-2xl">
            Sistema digital para que tu supermercado venda más todos los días.
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-300">{plan.subtitle}</p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:mt-7 sm:text-sm sm:tracking-[0.35em]">
            OFERTAS · DOMICILIOS · FIDELIZACIÓN · CLIENTES · CÚCUTA
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                  ? "Sistema completo"
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
            href="https://wa.me/573116425337"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl border border-yellow-400 bg-[#FFD600] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
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
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">FLUXA SYSTEM ($697)</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Información clave del sistema completo para tu supermercado en Cúcuta.
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

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 md:pt-16">
        <div data-reveal className="reveal">
          <div className="mb-9 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">Ruta de activación</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Plan de ejecución por fases</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              4 fases secuenciales para presencia digital, pedidos, automatización y pauta local.
            </p>
            <p className="mx-auto mt-4 inline-flex rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
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
            <p className="rounded-xl border border-[#FFD600] bg-[#FFD600] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_22px_rgba(255,214,0,0.25)] sm:text-base">
              Tu supermercado ya tiene los clientes. Fluxa Method pone el sistema.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            01. {diagnosisSituation.titleBlock}
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">{diagnosisSituation.subtitle}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {metricsHero.map((metric) => (
              <article key={metric.label} className="rounded-xl border border-zinc-700 bg-[#111111] p-4 text-center">
                <p className={`text-3xl font-extrabold ${metric.color}`}>{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-zinc-400">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Punto de partida
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">{diagnosisSituation.startPointTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {diagnosisSituation.startPointItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Fricciones del negocio
              </p>
              <div className="mt-4 space-y-3">
                {diagnosisSituation.frictionItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-zinc-700 bg-zinc-900/75 p-4">
                    <p className="text-base font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <p className="mt-6 rounded-xl border border-sky-300/35 bg-sky-500/10 px-5 py-3 text-center text-base font-bold text-sky-100">
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
            Todo lo que se construye, instala y activa durante los 2 meses dentro de la inversión acordada.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverablesSystem.map((column) => (
              <article
                key={column.title}
                onMouseMove={(event) => handleMagneticMove(event, 8)}
                onMouseLeave={handleMagneticLeave}
                className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]"
              >
                <h3 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}>{column.title}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#FFD600]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="rounded-xl bg-[#0B2A4A] px-5 py-3 text-center text-xl font-extrabold text-white">
              TOTAL DEL PROYECTO | $697 USD
            </p>
            <p className="rounded-xl border border-yellow-400/55 bg-yellow-400/10 px-5 py-3 text-center text-sm font-bold text-yellow-200">
              Presupuesto de pauta Meta Ads se paga aparte por el supermercado.
            </p>
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
        <div className="pb-28 md:pb-0">
          <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
            <div data-reveal className="reveal rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Plan activo</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">FLUXA PAGES ($350)</h2>
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
                Marca los servicios que necesitas. El descuento sube según cuántos incluyas en un mismo proyecto.
              </p>

              <div className="mt-6 rounded-2xl border border-yellow-500/25 bg-yellow-400/5 px-4 py-3 text-sm text-zinc-300">
                <p className="font-bold text-[#FFD600]">Descuentos por cantidad</p>
                <ul className="mt-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
                  <li>1 servicio → precio normal</li>
                  <li>2–3 servicios → 10% off</li>
                  <li>4–5 servicios → 20% off</li>
                  <li>6 o más → 30% off</li>
                </ul>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {PAGE_SERVICES_CARTA.map((svc) => {
                  const checked = selectedPageServices.includes(svc.id);
                  return (
                    <article
                      key={svc.id}
                      onMouseMove={(e) => handleMagneticMove(e, 8)}
                      onMouseLeave={handleMagneticLeave}
                      className={`magnetic route-card rounded-2xl border bg-[#111111] p-5 transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_22px_rgba(255,214,0,0.18)] ${
                        checked ? "border-[#FFD600]/70 shadow-[0_0_18px_rgba(255,214,0,0.12)]" : "border-zinc-700 hover:border-yellow-300/70"
                      }`}
                    >
                      <label className="flex cursor-pointer gap-3">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePageService(svc.id)}
                          className="peer mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-600 bg-zinc-900 accent-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/40 focus:ring-offset-0 focus:ring-offset-black"
                          aria-describedby={`svc-price-${svc.id}`}
                        />
                        <span className="min-w-0 flex-1 text-left text-sm font-medium leading-snug text-zinc-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#FFD600]">
                          {svc.label}
                        </span>
                        <span id={`svc-price-${svc.id}`} className="shrink-0 text-lg font-extrabold tabular-nums text-[#FFD600]">
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
                      Subtotal ({cartaCount} {cartaCount === 1 ? "servicio" : "servicios"})
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
                    <p className="text-3xl font-extrabold text-white">${formatUsdAmount(cartaTotal)} USD</p>
                  </div>
                  <a
                    href={pagesCartaWaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 rounded-xl border border-yellow-400 bg-[#FFD600] px-5 py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)] sm:text-sm"
                  >
                    Consultar por este paquete
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-700 bg-zinc-950/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.65)] backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">Total</p>
                  <p className="text-2xl font-extrabold text-white">${formatUsdAmount(cartaTotal)} USD</p>
                </div>
                {cartaDiscountPct > 0 ? (
                  <p className="text-sm font-semibold text-emerald-400">−{cartaDiscountPct}% aplicado</p>
                ) : (
                  <p className="text-xs text-zinc-500">{cartaCount === 0 ? "Elige servicios" : "Sin dto."}</p>
                )}
              </div>
              <a
                href={pagesCartaWaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border border-yellow-400 bg-[#FFD600] px-4 py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)] sm:w-auto sm:min-w-[200px]"
              >
                Consultar por este paquete
              </a>
            </div>
          </div>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Inversión</h2>
              <p className="mt-3 text-sm text-zinc-400">
                Paquete referencia Fluxa Pages <span className="font-semibold text-zinc-200">$350 USD</span> (entrega ~2 semanas,
                50% + 50%) o arma tu propio mix con la carta y descuentos por volumen arriba.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-500/40 bg-blue-950/25 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Paquete base</p>
                  <p className="mt-2 text-4xl font-extrabold text-blue-300">$350 USD</p>
                </div>
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Entrega típica</p>
                  <p className="mt-2 text-3xl font-extrabold text-emerald-300">2 semanas</p>
                </div>
                <div className="rounded-xl border border-yellow-500/40 bg-yellow-950/15 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Pago paquete</p>
                  <p className="mt-2 text-lg font-bold text-yellow-200">50% inicio + 50% entrega</p>
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
                    <span className="text-[#FFD600]">•</span>
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
                Cupo máximo: 1 supermercado por cohorte (atención personalizada).
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
                    <span className="text-red-400">●</span>
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
                {executiveSummaryShared.withFluxa.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 text-center">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                Inversión
              </p>
              <p className="mt-4 text-5xl font-extrabold text-blue-300">{plan.summaryInvestment}</p>
              <p className="mt-4 text-lg text-zinc-300">
                {selectedTab === "system" && (
                  <>
                    2 meses
                    <br />
                    4 módulos
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
                    1 cupo / cohorte
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

      <section className="bg-[#0B1F3A] px-5 py-16 sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Tu supermercado ya tiene los clientes.
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-blue-300 sm:text-4xl">Fluxa Method pone el sistema.</p>
          <a
            href="https://wa.me/573116425337"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-xl border border-yellow-400 bg-[#FFD600] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
          >
            Confirmar arranque del proyecto
          </a>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/80 sm:text-sm">
            fluxamethod.com · @fluxamethod · Cúcuta, Colombia
          </p>
        </div>
      </section>

      <div className="mobile-cta mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 md:hidden">
        <a
          href="https://wa.me/573116425337"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl border border-yellow-400 bg-[#FFD600] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
        >
          Confirmar arranque del proyecto
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
        .magnetic {
          transition: transform 0.25s ease;
          will-change: transform;
        }
        .route-card {
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .route-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: 0 0 24px rgba(255, 255, 255, 0.08);
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
        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .pulse-glow,
          .timeline-dash,
          .timeline-dash-vertical,
          .magnetic,
          .route-card,
          .fade-tab {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
          .fade-tab {
            opacity: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
