"use client";

import { useEffect, useRef, useState } from "react";

const PLAN_CONFIGS = {
  system: {
    chip: "FLUXA SYSTEM · MAS POPULAR",
    subtitle: "Plan base para ordenar captacion y empezar a convertir.",
    ctaText: "Elegir Fluxa System",
    heroPrice: "$697 USD",
    heroDuration: "Arranque base",
    heroModules: "Plan esencial",
    progressLabel: "Sistema de captacion",
    included: [
      "1 landing principal de captacion (diseno + copy + desarrollo)",
      "Estructura base del embudo de conversion",
      "Setup inicial de Meta Ads (sin gestion continua)",
      "Guia de contenido base para publicaciones organicas",
      "1 sesion estrategica de arranque",
      "Soporte por WhatsApp durante implementacion inicial",
    ],
    paymentA: {
      title: "Opcion A - Pago en 2 cuotas",
      rows: [
        { label: "Cuota 1 - Al firmar", value: "$400 USD" },
        { label: "Cuota 2 - Maximo 15 dias despues", value: "$297 USD" },
      ],
    },
    paymentB: {
      title: "Opcion B - Pago unico",
      rows: [
        { label: "Pago completo al firmar", value: "$697 USD" },
      ],
      footnote: "Arranque operativo inmediato.",
    },
    totalLine: "$697 USD · Sin intereses",
    summaryInvestment: "$697 USD",
    summaryPayment: "2 cuotas (inicio + 15 dias)",
  },
  scale: {
    chip: "FLUXA SCALE",
    subtitle: "Tu maquina completa de captacion y conversion.",
    ctaText: "Elegir Fluxa Scale",
    heroPrice: "$1,597 USD",
    heroDuration: "3 meses",
    heroModules: "4 modulos",
    progressLabel: "Sistema completo",
    included: [
      "Todo lo de Fluxa System a mayor escala",
      "Landing page profesional + VSL integrado",
      "Embudo de conversion digital multi-etapa",
      "Automatizacion avanzada WhatsApp (flujos completos + post-venta)",
      "Sistema UGC completo: 5-10 creadoras activas",
      "Gestion y optimizacion de campanas Meta Ads",
      "CRM o sistema personalizado segun necesidad",
    ],
    paymentA: {
      title: "Opcion A - Pago en 2 cuotas",
      rows: [
        { label: "Cuota 1 - Al firmar", value: "$800 USD" },
        { label: "Cuota 2 - Maximo 15 dias despues", value: "$797 USD" },
      ],
    },
    paymentB: {
      title: "Opcion B - Pago unico",
      rows: [
        { label: "Pago completo al firmar", value: "$1,497 USD" },
      ],
      footnote: "Ahorra $100 USD · Arranque inmediato.",
    },
    totalLine: "$1,597 USD · 3 meses · Sin intereses",
    summaryInvestment: "$1,597 USD",
    summaryPayment: "2 cuotas o pago unico",
  },
};

const timelinePhasesScale = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "LANDING DE EXPERIENCIAS",
    subtitle: "Semanas 1-2 · Al confirmar arranque",
    icon: "🏕️",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["VIP/Deluxe/Compartido", "Plan romantico", "CTA reserva"],
    build: "Construimos la landing premium con galeria visual y secciones por tipo de cabana.",
    activate: "Publicamos CTA directo al sistema de reservas y pixel de medicion.",
    result: "El prospecto encuentra claridad y reserva sin depender del DM manual.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "SISTEMA DE RESERVAS ONLINE",
    subtitle: "Semanas 3-4",
    icon: "📅",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Calendario activo", "Anticipo Wompi", "Confirmacion auto"],
    build: "Implementamos calendario, seleccion de cabana y flujo de pago de anticipo.",
    activate: "Conectamos confirmacion automatica por WhatsApp y correo.",
    result: "Reservas ordenadas, trazables y activas 24/7.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "CRM Y SEGUIMIENTO",
    subtitle: "Semanas 5-6",
    icon: "📊",
    color: "#8B5CF6",
    glow: "0 0 0 2px rgba(139,92,246,0.5), 0 0 36px rgba(139,92,246,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Historial cliente", "Recordatorios", "Reactivacion"],
    build: "Creamos CRM de prospectos con estados y notas por cliente.",
    activate: "Automatizamos mensajes de seguimiento y reactivacion de clientes 60+ dias.",
    result: "Menos fugas comerciales y mayor recurrencia de reservas.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "PAUTA, CONTENIDO Y ESCALA",
    subtitle: "Mes 2-3",
    icon: "📈",
    color: "#F59E0B",
    glow: "0 0 0 2px rgba(245,158,11,0.5), 0 0 36px rgba(245,158,11,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Contenido 90 dias", "Meta Ads activa", "Optimizacion semanal"],
    build: "Diseñamos arquitectura de contenido y campanas por ciudad objetivo.",
    activate: "Ajustamos anuncios segun conversion y sesiones estrategicas.",
    result: "El sistema escala reservas sin esfuerzo manual del equipo.",
  },
];

const timelinePhasesSystem = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "LANDING BASE DE CAPTACION",
    subtitle: "Semana 1 · Al confirmar arranque",
    icon: "🧱",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Oferta clara", "CTA directo", "Pixel base"],
    build: "Disenamos una landing esencial enfocada en captar interesados con claridad.",
    activate: "Configuramos CTA de contacto y medicion basica para iniciar conversion.",
    result: "Eco-Dreamers deja de depender solo del DM desordenado.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "EMBUDO ESENCIAL",
    subtitle: "Semana 2",
    icon: "🧭",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Ruta simple", "Seguimiento inicial", "Conversion base"],
    build: "Estructuramos el flujo minimo desde contenido o anuncio hacia contacto.",
    activate: "Dejamos mensaje de seguimiento inicial para responder leads mas rapido.",
    result: "Mas orden comercial con menor carga manual en el dia a dia.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "SETUP ADS + ARRANQUE",
    subtitle: "Semana 3",
    icon: "🚀",
    color: "#8B5CF6",
    glow: "0 0 0 2px rgba(139,92,246,0.5), 0 0 36px rgba(139,92,246,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Cuenta lista", "Publicos base", "Sesion estrategica"],
    build: "Configuramos cuenta Meta Ads y eventos principales para primeras pruebas.",
    activate: "Realizamos sesion de arranque y guia inicial para ejecucion organica.",
    result: "Plan base operativo, listo para evolucionar a una fase de escala.",
  },
];

const currentSituation = {
  startPointTitle: "Tienen audiencia activa e instalaciones premium, pero sin sistema comercial escalable.",
  startPointItems: [
    "Las reservas dependen del WhatsApp manual.",
    "Sin sistema de reservas online.",
    "Sin calendario de disponibilidad visible.",
    "Sin captura de anticipo automatica.",
    "Sin CRM para seguimiento de prospectos.",
    "Sin embudo que nutra antes de la reserva.",
  ],
  frictionItems: [
    {
      title: "Reservas perdidas",
      description: "Prospectos preguntan por DM y no reciben respuesta inmediata; reservan en otro lugar.",
    },
    {
      title: "Carga operativa manual",
      description: "El equipo responde mensajes manualmente en lugar de enfocarse en la experiencia del huesped.",
    },
    {
      title: "Sin datos de conversion",
      description: "No saben cuantos prospectos llegan a reserva real ni donde se pierde el interes.",
    },
    {
      title: "Pauta sin destino",
      description: "Los anuncios llevan a Instagram, no a una landing optimizada para convertir visitas en reservas.",
    },
  ],
  conclusion:
    "Ya existe el negocio, el contenido y la audiencia. Lo que falta es el sistema que convierte esa audiencia en reservas pagadas sin friccion manual.",
};

const transformationsCore = [
  {
    before:
      "El prospecto llega al perfil, pregunta por DM y muchas veces no recibe respuesta a tiempo.",
    after:
      "Landing profesional con toda la informacion, precios claros y boton de reserva disponible 24/7.",
  },
  {
    before:
      "Las reservas llegan por WhatsApp sin sistema, se pierden o se olvidan.",
    after:
      "Sistema de reservas online con calendario, seleccion de cabana y pago automatico de anticipo.",
  },
  {
    before:
      "No saben cuantos prospectos tienen activos ni quienes son clientes recurrentes.",
    after:
      "CRM con historial, estado de reserva, recordatorios y reactivacion automatica.",
  },
];

const transformationsScale = [
  {
    before:
      "El contenido de Instagram genera likes pero no tiene un sistema que lo convierta en reservas.",
    after:
      "Arquitectura de contenido 90 dias con pilares definidos que dirigen a la landing.",
  },
  {
    before:
      "Los anuncios de pauta llevan a Instagram sin una pagina de conversion optimizada para cerrar.",
    after:
      "Campañas Meta Ads con landing dedicada, apuntando a parejas en Bogota, Bucaramanga y Cucuta.",
  },
];

const transformationsSystem = [
  {
    before:
      "El contenido trae interaccion, pero no existe una ruta minima clara para convertir interesados.",
    after:
      "Landing base + CTA directo para transformar trafico en conversaciones con intencion de reserva.",
  },
  {
    before:
      "La gestion comercial depende de respuestas manuales sin seguimiento estructurado.",
    after:
      "Embudo esencial con mensaje inicial y orden de atencion para no perder oportunidades.",
  },
];

const deliverablesScale = [
  {
    title: "Landing de Experiencias",
    color: "text-emerald-300 border-emerald-400/40",
    items: [
      "Pagina principal con diseno premium mobile-first",
      "Seccion VIP, Deluxe y Compartido con fotos, precios y que incluye",
      "Plan romantico destacado: fogata, jacuzzi climatizado, naturaleza",
      "Galeria visual optimizada para mobile",
      "CTA directo al sistema de reservas",
      "Meta Pixel instalado",
    ],
  },
  {
    title: "Sistema de Reservas Online",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Calendario de disponibilidad en tiempo real",
      "Seleccion de tipo de cabana, fecha y numero de personas",
      "Pago de anticipo online con Wompi",
      "Confirmacion automatica por WhatsApp y email",
      "Panel administrativo para gestionar reservas",
      "Recordatorio automatico 48 horas antes de la llegada",
    ],
  },
  {
    title: "CRM y Seguimiento de Clientes",
    color: "text-violet-300 border-violet-400/40",
    items: [
      "Base de datos de prospectos con estados",
      "Historial por cliente",
      "Mensaje de agradecimiento y encuesta post-estadia",
      "Campaña de reactivacion para clientes de 60+ dias",
      "Segmentacion por tipo de experiencia",
      "Reporte mensual de reservas, conversion y ticket promedio",
    ],
  },
  {
    title: "Pauta, Contenido y Acompañamiento",
    color: "text-amber-300 border-amber-400/40",
    items: [
      "Arquitectura de contenido de 90 dias",
      "Guias de produccion por formato",
      "Configuracion y gestion de campañas Meta Ads",
      "Publicos objetivo: Bogota, Bucaramanga, Cucuta y Medellin",
      "Optimizacion semanal",
      "3 sesiones estrategicas + soporte WhatsApp",
    ],
  },
];

const deliverablesSystem = [
  {
    title: "Landing Base de Captacion",
    color: "text-emerald-300 border-emerald-400/40",
    items: [
      "1 landing principal con estructura de conversion",
      "Secciones esenciales: oferta, prueba social, CTA y FAQ",
      "Diseno responsive mobile-first",
      "Integracion de formulario o boton directo a WhatsApp",
      "Pixel base instalado para medicion",
    ],
  },
  {
    title: "Embudo Esencial",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Ruta simple de captacion: anuncio o contenido -> landing -> contacto",
      "Mensaje de seguimiento inicial para leads entrantes",
      "Estructura minima para no depender solo del DM manual",
      "Sin tienda multi-producto ni checkout avanzado",
    ],
  },
  {
    title: "Setup Publicitario y Acompanamiento Inicial",
    color: "text-violet-300 border-violet-400/40",
    items: [
      "Configuracion inicial de cuenta Meta Ads",
      "Evento principal de conversion listo",
      "Publicos base para primeras pruebas",
      "Sin gestion semanal de campañas incluida",
      "1 sesion estrategica de arranque",
      "Guia de contenido base para iniciar publicacion",
      "Soporte por WhatsApp en fase de implementacion",
      "No incluye sistema avanzado de CRM ni automatizaciones complejas",
    ],
  },
];

const projectConditions = [
  "Duracion del proyecto: 3 meses desde la firma del contrato.",
  "30 dias de soporte post-entrega para ajustes menores.",
  "La landing, el sistema de reservas y el CRM quedan como activos propios de Eco-Dreamers.",
  "Sin dependencia de Fluxa Method tras la entrega.",
  "Meta Ads se paga directamente por el cliente (sugerido $200-$400 USD/mes).",
  "Wompi procesa los anticipos con sus comisiones estandar.",
];

const supportPlans = [
  {
    name: "Plan Base",
    price: "Incluido",
    period: "30 dias post-entrega",
    items: [
      "Ajustes menores sobre landing y reservas",
      "Soporte por WhatsApp en dias habiles",
      "Revision de incidencias tecnicas puntuales",
    ],
    highlight: "border-emerald-400/40",
  },
  {
    name: "Plan Continuidad",
    price: "Opcional",
    period: "Mensual",
    items: [
      "Optimizacion semanal de conversion y campañas",
      "Seguimiento comercial de reservas y ticket promedio",
      "1 sesion estrategica mensual",
    ],
    highlight: "border-blue-400/40",
  },
  {
    name: "Plan Escala",
    price: "Opcional",
    period: "Trimestral",
    items: [
      "Roadmap de nuevas experiencias y promociones",
      "Iteraciones creativas para contenido y pauta",
      "Tablero de metricas para decisiones de escala",
    ],
    highlight: "border-yellow-400/50",
  },
];

const executiveSummaryScale = {
  today: [
    "Reservas por DM.",
    "Sin landing.",
    "Sin reservas online.",
    "Sin CRM.",
    "Sin embudo de pauta.",
  ],
  in90: [
    "Sistema completo activo.",
    "Landing visual.",
    "Reservas + pago online.",
    "CRM instalado.",
    "Pauta convirtiendo.",
  ],
  targetTitle: "Sistema completo activo y orientado a conversion.",
};

const executiveSummarySystem = {
  today: [
    "Reservas por DM.",
    "Sin landing estructurada.",
    "Sin ruta comercial clara.",
    "Sin setup publicitario base.",
  ],
  in90: [
    "Landing base operativa.",
    "Ruta esencial de captacion funcionando.",
    "Setup inicial de Meta Ads listo.",
    "Proceso comercial mas ordenado.",
  ],
  targetTitle: "Base de captacion activa y lista para escalar.",
};

const metrics = [
  { label: "Seguidores en Instagram", value: "30,100", color: "text-emerald-300" },
  { label: "Publicaciones activas", value: "426", color: "text-blue-300" },
  { label: "Tipos de cabana", value: "3", color: "text-violet-300" },
  { label: "Reservas online hoy", value: "0", color: "text-red-300" },
];

const executionPlanScale = [
  {
    month: "Mes 1",
    title: "Instalacion del sistema",
    points: "Landing · Sistema de reservas · CRM · Primeras campañas activas",
    color: "text-emerald-300",
  },
  {
    month: "Mes 2",
    title: "Optimizacion y contenido",
    points: "Ajuste de campañas · Arquitectura de contenido en ejecucion · 1a sesion estrategica",
    color: "text-blue-300",
  },
  {
    month: "Mes 3",
    title: "Escala y cierre",
    points: "ROAS optimizado · Reporte final · Plan del siguiente trimestre · Entrega de activos",
    color: "text-violet-300",
  },
];

const executionPlanSystem = [
  {
    month: "Semana 1",
    title: "Landing y estructura base",
    points: "Oferta clara · CTA directo · Pixel base",
    color: "text-emerald-300",
  },
  {
    month: "Semana 2",
    title: "Embudo esencial",
    points: "Ruta simple de conversion · Seguimiento inicial",
    color: "text-blue-300",
  },
  {
    month: "Semana 3",
    title: "Setup publicitario inicial",
    points: "Cuenta Meta Ads lista · Publicos base · Sesion de arranque",
    color: "text-violet-300",
  },
];

export default function EcoDreamersCuritiPage() {
  const [selectedPlan, setSelectedPlan] = useState("scale");
  const [activePhase, setActivePhase] = useState("fase-1");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const timelineCarouselRef = useRef(null);
  const currentPlan = PLAN_CONFIGS[selectedPlan];
  const currentDeliverables = selectedPlan === "scale" ? deliverablesScale : deliverablesSystem;
  const currentTimelinePhases = selectedPlan === "scale" ? timelinePhasesScale : timelinePhasesSystem;
  const currentTransformationsCore = selectedPlan === "scale" ? transformationsCore : transformationsSystem;
  const currentExecutiveSummary = selectedPlan === "scale" ? executiveSummaryScale : executiveSummarySystem;
  const currentExecutionPlan = selectedPlan === "scale" ? executionPlanScale : executionPlanSystem;

  const progressPercent = 0;

  useEffect(() => {
    setActivePhase("fase-1");
  }, [selectedPlan]);

  const handleMagneticMove = (event, strength = 10) => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
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
  }, [reduceMotion]);

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

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10 sm:px-8 md:pb-20 md:pt-24">
        <div data-reveal className="reveal mx-auto max-w-4xl text-center">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedPlan("system")}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                selectedPlan === "system"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Fluxa System
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlan("scale")}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                selectedPlan === "scale"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Fluxa Scale
            </button>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{currentPlan.chip}</p>
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            Eco-Dreamers{" "}
            <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.45)]">Curiti</span>
          </h1>
          <p className="mt-4 text-xl text-zinc-200 sm:text-2xl">
            Sistema digital para convertir <span className="font-extrabold">30,000 seguidores</span> en reservas automaticas.
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-300">{currentPlan.subtitle}</p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:mt-7 sm:text-sm sm:tracking-[0.35em]">
            GLAMPING · PLAN ROMANTICO · JACUZZI · NATURALEZA · CURITI, SANTANDER
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{currentPlan.heroPrice}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Inversion total</p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{currentPlan.heroDuration}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Duracion</p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">{currentPlan.heroModules}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{currentPlan.progressLabel}</p>
            </article>
          </div>
          <a
            href="https://wa.me/573116425337"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl border border-yellow-400 bg-[#FFD600] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
          >
            {currentPlan.ctaText}
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
        <div data-reveal className="reveal rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Plan activo</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            {selectedPlan === "scale" ? "FLUXA SCALE ($1,597)" : "FLUXA SYSTEM ($697)"}
          </h2>
          <p className="mt-2 text-sm text-zinc-300">Informacion clave que cambia automaticamente segun el plan seleccionado.</p>
          {selectedPlan === "system" ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
              Version esencial: menor alcance que Fluxa Scale.
            </p>
          ) : null}
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {currentPlan.included.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">Ruta de activacion</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Plan de ejecucion por fases</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              {selectedPlan === "scale"
                ? "4 fases secuenciales para construir, lanzar, conectar y escalar el sistema."
                : "3 fases esenciales para activar la base comercial del sistema."}
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
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">Progreso del plan: {Math.round(progressPercent)}%</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
              <button type="button" onClick={() => scrollTimeline("left")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200" aria-label="Deslizar fases hacia la izquierda">←</button>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Desliza para ver fases</p>
              <button type="button" onClick={() => scrollTimeline("right")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200" aria-label="Deslizar fases hacia la derecha">→</button>
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
            <div className="pointer-events-none absolute -left-10 top-14 hidden h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl md:block" style={{ transform: `translateY(${reduceMotion ? 0 : parallaxOffset * 0.45}px)` }} />
            <div className="pointer-events-none absolute -right-8 bottom-10 hidden h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl md:block" style={{ transform: `translateY(${reduceMotion ? 0 : -parallaxOffset * 0.35}px)` }} />
            <div className="spotlight-layer pointer-events-none absolute inset-0 z-0 hidden rounded-3xl md:block" style={{ opacity: spotlight.active ? 1 : 0, background: `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.12), transparent 60%)` }} />

            <div ref={timelineCarouselRef} className={`mobile-snap-carousel flex gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0 ${selectedPlan === "scale" ? "md:grid md:grid-cols-4 md:gap-6" : "md:grid md:grid-cols-3 md:gap-6"}`}>
              {currentTimelinePhases.map((phase, index) => (
                <div key={phase.id} data-reveal className="reveal route-card relative z-10 w-[88vw] min-w-[88vw] max-w-md shrink-0 snap-center rounded-2xl border border-zinc-800/80 bg-zinc-950/55 p-4 text-center backdrop-blur-[1px] md:mx-auto md:w-full md:min-w-0 md:max-w-none md:shrink md:snap-none md:p-5" style={{ transitionDelay: `${index * 120}ms` }}>
                  {index !== currentTimelinePhases.length - 1 && <div className="relative mx-auto mt-4 h-12 w-[2px] overflow-hidden rounded-full md:hidden"><span className="timeline-dash-vertical block h-full w-full" /></div>}
                  {index !== currentTimelinePhases.length - 1 && <div className="absolute left-[calc(50%+50px)] top-[72px] hidden h-[2px] w-[calc(100%-20px)] overflow-hidden rounded-full md:block"><span className="timeline-dash absolute inset-0 block" /></div>}

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: phase.color }}>{phase.label}</p>
                  <button type="button" onClick={() => setActivePhase(phase.id)} onMouseMove={(event) => handleMagneticMove(event, 12)} onMouseLeave={handleMagneticLeave} className="magnetic mx-auto block">
                    <div className="pulse-glow mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border bg-zinc-950/85 text-2xl md:h-[80px] md:w-[80px] md:text-3xl" style={{ borderColor: phase.color, boxShadow: phase.glow, transform: activePhase === phase.id ? "scale(1.08)" : undefined }}>
                      <span role="img" aria-label={phase.title}>{phase.icon}</span>
                    </div>
                  </button>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white md:text-base">{phase.title}</p>
                  <p className="text-sm text-zinc-300">{phase.subtitle}</p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {phase.points.map((point, chipIndex) => (
                      <span key={point} data-reveal className="reveal fade-soft rounded-full border border-zinc-600/70 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-zinc-200" style={{ transitionDelay: `${chipIndex * 80 + index * 100}ms` }}>
                        {point}
                      </span>
                    ))}
                  </div>

                  <span className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${phase.statusClass}`}>{phase.status}</span>

                  <div className={`mt-4 grid transition-all duration-500 ${activePhase === phase.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <ul className="space-y-1.5 text-left text-[12px] leading-relaxed text-zinc-300">
                        <li><span className="font-semibold text-zinc-100">Construimos:</span> {phase.build}</li>
                        <li><span className="font-semibold text-zinc-100">Activamos:</span> {phase.activate}</li>
                        <li><span className="font-semibold text-zinc-100">Resultado:</span> {phase.result}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <p className="rounded-xl border border-[#FFD600] bg-[#FFD600] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_22px_rgba(255,214,0,0.25)] sm:text-base">
              = Sistema activo + Reservas automaticas
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">01. Donde esta hoy Eco-Dreamers Curiti</h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Tienen audiencia activa, instalaciones premium y contenido de calidad, pero el sistema comercial no convierte ni escala.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-xl border border-zinc-700 bg-[#111111] p-4 text-center">
                <p className={`text-3xl font-extrabold ${metric.color}`}>{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-zinc-400">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Punto de partida</p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">{currentSituation.startPointTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {currentSituation.startPointItems.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400">●</span><span>{item}</span></li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">Fricciones del negocio</p>
              <div className="mt-4 space-y-3">
                {currentSituation.frictionItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-zinc-700 bg-zinc-900/75 p-4">
                    <p className="text-base font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <p className="mt-6 rounded-xl border border-sky-300/35 bg-sky-500/10 px-5 py-3 text-center text-base font-bold text-sky-100">
            Conclusion: {currentSituation.conclusion}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {selectedPlan === "scale" ? "02. Las transformaciones concretas en 90 dias" : "02. Transformaciones clave del plan esencial"}
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            {selectedPlan === "scale"
              ? "Cada transformacion impacta reservas, eficiencia operativa y crecimiento sostenible."
              : "Cambios iniciales para ordenar la captacion y preparar la siguiente etapa de crecimiento."}
          </p>

          <div className="mt-6 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">Antes</p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">Despues</p>
            </div>
            {currentTransformationsCore.map((item, idx) => (
              <div key={item.before} className="grid gap-3 md:grid-cols-2">
                <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformacion {idx + 1}</p>
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

      {selectedPlan === "scale" ? (
      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">02. Transformaciones 4 y 5 - conversion y escalamiento</h2>
          <p className="text-sm text-zinc-400 sm:text-base">Contenido y pauta trabajan como sistema para llenar calendario con reservas reales.</p>

          <div className="mt-6 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">Antes</p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">Despues</p>
            </div>
            {transformationsScale.map((item, idx) => (
              <div key={item.before} className="grid gap-3 md:grid-cols-2">
                <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformacion {idx + 4}</p>
                  <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                </article>
                <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Impacto {idx + 4}</p>
                  <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                </article>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-emerald-300/35 bg-emerald-500/10 px-5 py-3 text-center text-base font-bold text-emerald-100">
            Con el ecosistema activo, el contenido organico y la pauta trabajan en paralelo para llenar el calendario de reservas sin esfuerzo manual.
          </p>
        </div>
      </section>
      ) : null}

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">03. Que recibe exactamente - entregables y presupuesto</h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            {selectedPlan === "scale"
              ? "Todo lo que se construye, instala y activa durante los 3 meses dentro de la inversion acordada."
              : "Version esencial del sistema: entregables base para arrancar captacion y conversion con menor alcance."}
          </p>

          <div className={`mt-8 grid gap-5 ${selectedPlan === "scale" ? "md:grid-cols-2" : "md:grid-cols-1 lg:grid-cols-3"}`}>
            {currentDeliverables.map((column) => (
              <article key={column.title} onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]">
                <h3 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}>{column.title}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-[#FFD600]">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="rounded-xl bg-[#0B2A4A] px-5 py-3 text-center text-xl font-extrabold text-white">
              TOTAL DEL PROYECTO | {selectedPlan === "scale" ? "$1,597 USD" : "$697 USD"}
            </p>
            <p className="rounded-xl border border-yellow-400/55 bg-yellow-400/10 px-5 py-3 text-center text-sm font-bold text-yellow-200">
              Presupuesto de pauta Meta Ads se paga aparte por Eco-Dreamers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">06. Forma de pago y condiciones</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <article onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-blue-400/60 bg-[#111111] p-6">
              <p className="rounded-xl bg-blue-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100">{currentPlan.paymentA.title}</p>
              <div className="mt-4 space-y-3">
                {currentPlan.paymentA.rows.map((row) => (
                  <div key={row.label} className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                    <p className="text-sm text-zinc-300">{row.label}</p>
                    <p className="mt-1 text-3xl font-extrabold text-blue-300">{row.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-emerald-400/60 bg-[#111111] p-6">
              <p className="rounded-xl bg-emerald-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-emerald-100">{currentPlan.paymentB.title}</p>
              <div className="mt-4 space-y-3">
                {currentPlan.paymentB.rows.map((row, idx) => (
                  <div key={row.label} className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                    <p className="text-sm text-zinc-300">{row.label}</p>
                    <p className={`mt-1 font-extrabold text-emerald-300 ${idx === 0 ? "text-4xl" : "text-3xl"}`}>{row.value}</p>
                    {idx === 0 && currentPlan.paymentB.footnote ? <p className="text-sm font-semibold text-emerald-200">{currentPlan.paymentB.footnote}</p> : null}
                    {idx === 0 && selectedPlan === "scale" ? <p className="text-xs text-zinc-400">El proyecto arranca de inmediato</p> : null}
                  </div>
                ))}
              </div>
            </article>
          </div>
          <p className="mt-7 text-center text-4xl font-extrabold">{currentPlan.totalLine}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Condiciones del proyecto</h2>
          <details className="mt-4 rounded-xl border border-zinc-700 bg-zinc-900/65 p-4 md:hidden">
            <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">Ver condiciones y soporte</summary>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
              {projectConditions.map((item) => (
                <li key={`mobile-${item}`} className="flex gap-2"><span className="text-emerald-300">●</span><span>{item}</span></li>
              ))}
            </ul>
          </details>
          <ul className="mt-4 hidden space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base md:block">
            {projectConditions.map((item) => (
              <li key={item} className="flex gap-2"><span className="text-emerald-300">●</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-16 sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Eco-Dreamers ya tiene el lugar, el contenido y la audiencia.
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-blue-300 sm:text-4xl">Fluxa Method pone el sistema.</p>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/80 sm:text-sm">
            fluxamethod.com · @fluxamethod · Cucuta, Colombia
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Resumen ejecutivo</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-300">Hoy</p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">Reservas por DM sin sistema.</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {currentExecutiveSummary.today.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400">●</span><span>{item}</span></li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                {selectedPlan === "scale" ? "En 90 dias" : "En el arranque"}
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">{currentExecutiveSummary.targetTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {currentExecutiveSummary.in90.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-emerald-400">●</span><span>{item}</span></li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 text-center">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300">Inversion</p>
              <p className="mt-4 text-5xl font-extrabold text-blue-300">{currentPlan.summaryInvestment}</p>
              <p className="mt-4 text-3xl text-zinc-300">
                {selectedPlan === "scale" ? "3 meses" : "Arranque base"}
                <br />
                {selectedPlan === "scale" ? "4 modulos" : "Sistema captacion"}
                <br />
                activos propios
                <br />
                {selectedPlan === "scale" ? "soporte post-entrega" : "soporte inicial"}
              </p>
              <p className="mx-auto mt-5 inline-flex rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                {currentPlan.summaryPayment}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Plan de ejecucion</p>
          <div className="mt-5 rounded-xl border border-zinc-700 bg-[#111111] p-3">
            {currentExecutionPlan.map((row) => (
              <article key={row.month} className="grid gap-2 border-b border-zinc-800 p-4 last:border-b-0 sm:grid-cols-[100px_1fr] sm:items-start">
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

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Planes de soporte post-entrega</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-400 sm:text-base">
            Puedes continuar con acompanamiento segun el nivel de soporte que necesites despues de la entrega.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {supportPlans.map((plan) => (
              <article key={plan.name} onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className={`magnetic rounded-2xl border ${plan.highlight} bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{plan.period}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#FFD600]">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-[#FFD600]">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mobile-cta mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 md:hidden">
        <a href="https://wa.me/573116425337" target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl border border-yellow-400 bg-[#FFD600] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]">
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
        .pulse-glow {
          animation: pulseGlow 2.2s ease-in-out infinite;
        }
        .timeline-dash {
          background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 8px, transparent 8px, transparent 14px);
          animation: dashFlowHorizontal 1.8s linear infinite;
        }
        .timeline-dash-vertical {
          background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 8px, transparent 8px, transparent 14px);
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
          .route-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
