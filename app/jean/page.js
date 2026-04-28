"use client";

import { useEffect, useRef, useState } from "react";

const timelinePhasesJean = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "ARQUITECTURA Y BASE",
    subtitle: "Semanas 1–2",
    icon: "🏗️",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: [
      "Arquitectura estratégica de ambos ecosistemas",
      "Branding empresa de envíos y GrowNow Investments",
      "Infraestructura inicial: dominios, hosting, cuentas",
      "Brief completo y kick-off con Jean",
    ],
    scope: "Cimientos alineados para dos marcas en un solo ecosistema.",
    build: "Arquitectura, branding dual, dominios, hosting y brief unificado.",
    activate: "Kick-off con Jean y validación de prioridades.",
    result: "Base clara para construir en paralelo sin retrabajo.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "CONSTRUCCIÓN",
    subtitle: "Semanas 3–5",
    icon: "⚙️",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: [
      "Sitio web profesional empresa de envíos",
      "Cotizador automático + rastreo de pedidos",
      "Landing premium GrowNow Investments con VSL",
      "Sistema de aplicación para inversionistas",
    ],
    scope: "Activos digitales centrales de ambas líneas de negocio.",
    build: "Web logística, cotizador, rastreo, landing financiera y aplicación.",
    activate: "Publicación, formularios y flujos de captación listos.",
    result: "Dos presencias profesionales listas para tráfico y conversión.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "AUTOMATIZACIONES",
    subtitle: "Semanas 6–8",
    icon: "🤖",
    color: "#FFD600",
    glow: "0 0 0 2px rgba(255,214,0,0.5), 0 0 36px rgba(255,214,0,0.5)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: [
      "Confirmaciones, avisos de salida y entrega automáticos",
      "CRM de leads para GrowNow",
      "Automatización WhatsApp ambas empresas",
      "Dashboard operativo con KPIs en tiempo real",
    ],
    scope: "Menos fricción operativa y seguimiento comercial ordenado.",
    build: "Flujos WhatsApp, CRM, avisos y tablero de KPIs.",
    activate: "Reglas, disparadores y vistas en vivo para el equipo.",
    result: "Operación y captación con menos trabajo manual.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "CAPTACIÓN Y ESCALA",
    subtitle: "Semanas 9–12",
    icon: "🚀",
    color: "#A855F7",
    glow: "0 0 0 2px rgba(168,85,247,0.5), 0 0 36px rgba(168,85,247,0.55)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: [
      "Campañas Meta Ads empresa de envíos (B2B)",
      "Campañas Meta Ads GrowNow (captación inversionistas)",
      "Funnels de conversión ambas líneas",
      "3 sesiones estratégicas + reporte final",
    ],
    scope: "Demanda pagada y embudos alineados a cada oferta.",
    build: "Campañas B2B y de inversionistas, funnels y medición.",
    activate: "Puesta en marcha, pruebas y optimización inicial.",
    result: "Pipeline activo en ambas compañías con reporte de cierre.",
  },
];

const diagnosisJean = {
  title: "Dónde están hoy las dos compañías",
  subtitle:
    "Operación real y potencial fuerte en ambas — pero sin la infraestructura digital que permite escalar.",
  col1: {
    title: "📦 Empresa de Envíos",
    bullets: [
      "Cotizaciones manuales que consumen tiempo del equipo",
      "Sin rastreo automatizado — el cliente llama para preguntar",
      "Sin captación B2B estructurada",
      "Confirmaciones y notificaciones manuales",
      "Sin dashboard de operación ni KPIs",
    ],
  },
  col2: {
    title: "📈 GrowNow Investments",
    bullets: [
      "Branding en etapa temprana sin percepción premium",
      "Sin funnel robusto de captación de inversionistas",
      "Captación todavía dependiente de interacción manual",
      "Sin VSL estratégica ni sistema de aplicación",
      "Sin automatización de leads ni CRM financiero",
    ],
  },
};

const transformationsJean = [
  {
    before: "Cotizaciones manuales que consumen horas del equipo.",
    after: "Cotizador automático online — el cliente cotiza solo en segundos.",
  },
  {
    before: "El cliente llama a preguntar dónde está su paquete.",
    after: "Rastreo automático por WhatsApp — el cliente consulta sin intermediarios.",
  },
  {
    before: "GrowNow sin funnel — captación manual de inversionistas.",
    after: "Funnel financiero con VSL, sistema de aplicación y CRM automatizado.",
  },
  {
    before: "Sin presencia digital premium para ninguna de las dos marcas.",
    after: "Dos ecosistemas digitales profesionales listos para captar y convertir.",
  },
  {
    before: "Sin campañas activas — crecimiento solo por referidos.",
    after: "Meta Ads activos para B2B (envíos) y captación de inversionistas (GrowNow).",
  },
];

const deliverablesShipping = [
  {
    title: "Infraestructura digital",
    color: "text-emerald-300 border-emerald-400/40",
    items: [
      "Sitio web profesional y moderno",
      "Landing de captación B2B",
      "Sistema de cotización automática",
      "Rastreo de pedidos por cliente",
      "Dashboard operativo con KPIs",
    ],
  },
  {
    title: "Automatizaciones",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Confirmación automática de pedidos",
      "Avisos de salida y entrega",
      "Seguimientos automáticos WhatsApp",
      "Solicitud de reseñas post-entrega",
      "Alertas internas del equipo",
    ],
  },
  {
    title: "Crecimiento",
    color: "text-violet-300 border-violet-400/40",
    items: [
      "Estrategia de contenido",
      "Campañas Meta Ads B2B",
      "Captación empresarial estructurada",
      "Funnels de conversión",
      "Optimización semanal",
    ],
  },
];

const deliverablesGrowNow = [
  {
    title: "Infraestructura",
    color: "text-emerald-300 border-emerald-400/40",
    items: [
      "Landing premium financiera",
      "Funnel de captación de inversionistas",
      "CRM automatizado de leads",
      "Formularios de aplicación",
      "VSL estratégica",
    ],
  },
  {
    title: "Autoridad y branding",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Branding premium financiero",
      "Estrategia de contenido",
      "Reels financieros",
      "Posicionamiento de autoridad",
      "Calendario de llamadas",
    ],
  },
  {
    title: "Captación",
    color: "text-violet-300 border-violet-400/40",
    items: [
      "Campañas Meta Ads inversionistas",
      "Automatización WhatsApp leads",
      "Optimización continua",
      "Funnels adicionales",
      "Escalamiento de comunidad",
    ],
  },
];

const metricsDouble = [
  { label: "Inversión total", value: "$3,300 USD", color: "text-white" },
  { label: "Duración", value: "90 días", color: "text-white" },
  { label: "Ecosistemas", value: "2 empresas", color: "text-white" },
  { label: "Ahorro estratégico", value: "$694 USD", color: "text-emerald-300" },
];

const projectConditionsJean = [
  "Duración: 90 días desde la firma",
  "El presupuesto publicitario se paga directamente a Meta",
  "Herramientas externas asumidas por el cliente",
  "Ambos ecosistemas quedan en propiedad de Jean",
  "Incluye acompañamiento estratégico durante todo el proceso",
  "Continuidad recomendada: Fluxa Active $1,200–$2,000 USD/mes",
];

const faqItems = [
  {
    q: "¿Por qué es más barato desarrollar las dos juntas?",
    a: "Porque compartimos arquitectura, infraestructura y estrategia entre ambas empresas. Eso reduce tiempo y costos operativos internos — y ese ahorro te lo trasladamos a ti.",
  },
  {
    q: "¿Se trabajan las dos empresas al mismo tiempo?",
    a: "Sí. Ambas corren en paralelo bajo el mismo equipo estratégico, lo que permite mayor velocidad de ejecución y coherencia entre las dos marcas.",
  },
  {
    q: "¿Qué pasa si quiero empezar solo con una?",
    a: "Puedes arrancar con una y sumar la segunda después. El precio por empresa individual es $1,997 USD.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar listo?",
    a: "90 días para el ecosistema completo. En las primeras 2 semanas ya tienes la arquitectura, branding e infraestructura base de ambas empresas.",
  },
  {
    q: "¿Los activos quedan en mis cuentas?",
    a: "Sí. Todo queda en tus cuentas propias — dominios, plataformas, redes, CRM. Sin dependencia de Fluxa Method después de la entrega.",
  },
  {
    q: "¿Qué incluye la continuidad después de los 90 días?",
    a: "El plan Fluxa Active ($1,200–$2,000 USD/mes) incluye optimización, nuevas campañas, automatizaciones, mejoras continuas y soporte prioritario.",
  },
];

const doubleIncludedSummary = [
  "Arquitectura y branding para empresa de envíos + GrowNow Investments.",
  "Sitios, cotizador, rastreo, landing financiera, VSL y aplicación de inversionistas.",
  "Automatizaciones WhatsApp, CRM y dashboard de KPIs.",
  "Meta Ads B2B y captación de inversionistas + 3 sesiones estratégicas.",
];

export default function JeanPage() {
  const [selectedTab, setSelectedTab] = useState("double");
  const [activePhase, setActivePhase] = useState("fase-1");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const [tabFade, setTabFade] = useState(true);
  const [selectedSingleOffer, setSelectedSingleOffer] = useState("shipping");
  const [faqOpen, setFaqOpen] = useState(null);
  const timelineCarouselRef = useRef(null);

  const progressPercent = 0;

  useEffect(() => {
    setActivePhase("fase-1");
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

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {phase.points.map((point) => (
          <span
            key={point}
            className="rounded-full border border-zinc-600/70 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-zinc-200"
          >
            {point}
          </span>
        ))}
      </div>
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
            ONBOARDING ESTRATÉGICO 2026
          </p>
          <div className="mb-5 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2">
            <button
              type="button"
              onClick={() => handleTabChange("double")}
              aria-pressed={selectedTab === "double"}
              className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition sm:py-1.5 ${
                selectedTab === "double"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Ecosistema Doble · $3,300
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("single")}
              aria-pressed={selectedTab === "single"}
              className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition sm:py-1.5 ${
                selectedTab === "single"
                  ? "border-[#FFD600] bg-[#FFD600] text-black"
                  : "border-zinc-600 bg-zinc-900/70 text-zinc-300"
              }`}
            >
              Por empresa · $1,997 c/u
            </button>
          </div>

          <div
            className={`fade-tab ${tabFade ? "fade-tab-visible" : ""}`}
            key={selectedTab}
            aria-live="polite"
          >
            {selectedTab === "double" ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">
                  FLUXA METHOD · OFERTA ESTRATÉGICA
                </p>
                <h1 className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                  Jean — Dos empresas. Un{" "}
                  <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.45)]">
                    ecosistema digital.
                  </span>
                </h1>
                <p className="mt-4 text-lg text-zinc-200 sm:text-2xl">
                  Empresa de envíos automatizada + marca financiera premium, construidas para escalar en 90 días.
                </p>
                <p className="mt-3 text-sm font-medium text-zinc-400 sm:text-base">
                  Valor normal $3,994 USD — inviertes $3,300 USD porque ambas compañías se desarrollan bajo un mismo
                  ecosistema estratégico compartido.
                </p>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400 sm:text-sm">
                  ENVÍOS · INVERSIONES · AUTOMATIZACIÓN · GROWNOW · FLUXA METHOD
                </p>
                <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {metricsDouble.map((m) => (
                    <article
                      key={m.label}
                      className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center"
                    >
                      <p className={`text-2xl font-extrabold sm:text-3xl ${m.color}`}>{m.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-zinc-400 sm:text-xs">
                        {m.label}
                      </p>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">
                  FLUXA METHOD · UN PROYECTO A LA VEZ
                </p>
                <h1 className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                  Jean —{" "}
                  <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.45)]">
                    Por empresa
                  </span>
                </h1>
                <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">$1,997 USD por empresa</p>
                <p className="mt-2 text-sm text-zinc-400 sm:text-base">90 días por proyecto</p>
                <p className="mt-4 text-sm font-medium text-zinc-300 sm:text-base">
                  Elige desarrollar una sola empresa primero. Misma calidad, mismo equipo, mismo resultado — un proyecto
                  a la vez.
                </p>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400 sm:text-sm">
                  ENVÍOS · INVERSIONES · AUTOMATIZACIÓN · GROWNOW · FLUXA METHOD
                </p>
              </>
            )}
            <a
              href="https://wa.me/573116425337"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full justify-center rounded-xl border border-yellow-400 bg-[#FFD600] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)] sm:w-auto"
            >
              QUIERO ARRANCAR MI PROYECTO
            </a>
          </div>
        </div>
      </section>

      {selectedTab === "double" ? (
        <>
          <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
            <div data-reveal className="reveal rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">Ecosistema doble activo</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">$3,300 USD · 90 días · 2 empresas</h2>
              <p className="mt-2 text-sm text-zinc-300">Resumen de lo que incluye el paquete conjunto.</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {doubleIncludedSummary.map((item) => (
                  <p
                    key={item}
                    className="rounded-lg border border-zinc-800 bg-black/60 px-3 py-2 text-sm text-zinc-200"
                  >
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
                  4 fases en 12 semanas para arquitectura, construcción, automatización y captación.
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
                    aria-label="Anterior fase"
                  >
                    ←
                  </button>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Desliza para ver fases</p>
                  <button
                    type="button"
                    onClick={() => scrollTimeline("right")}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200"
                    aria-label="Siguiente fase"
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
                  className="mobile-snap-carousel flex items-start gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:gap-6"
                >
                  {timelinePhasesJean.map((phase, index) =>
                    renderPhaseCard(phase, index, timelinePhasesJean.length)
                  )}
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <p className="rounded-xl border border-[#FFD600] bg-[#FFD600] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_22px_rgba(255,214,0,0.25)] sm:text-base">
                  = Dos compañías preparadas para escalar digitalmente
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal">
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{diagnosisJean.title}</h2>
              <p className="text-sm text-zinc-400 sm:text-base">{diagnosisJean.subtitle}</p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
                  <h3 className="text-xl font-extrabold text-white">{diagnosisJean.col1.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {diagnosisJean.col1.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-red-400">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
                  <h3 className="text-xl font-extrabold text-white">{diagnosisJean.col2.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {diagnosisJean.col2.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-red-400">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal">
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Transformaciones antes / después
              </h2>
              <p className="text-sm text-zinc-400 sm:text-base">Cambios concretos al activar el ecosistema doble.</p>
              <div className="mt-6 grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                    Antes
                  </p>
                  <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">
                    Después
                  </p>
                </div>
                {transformationsJean.map((item, idx) => (
                  <div key={item.before} className="grid gap-3 md:grid-cols-2">
                    <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">
                        Transformación {idx + 1}
                      </p>
                      <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                    </article>
                    <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">
                        Impacto {idx + 1}
                      </p>
                      <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Entregables por empresa</h2>
              <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                Dos bloques: logística digital y marca financiera premium.
              </p>

              <h3 className="mt-10 text-xl font-bold text-[#FFD600] sm:text-2xl">Empresa de Envíos</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {deliverablesShipping.map((column) => (
                  <article
                    key={column.title}
                    onMouseMove={(event) => handleMagneticMove(event, 8)}
                    onMouseLeave={handleMagneticLeave}
                    className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]"
                  >
                    <h4 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}>
                      {column.title}
                    </h4>
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

              <h3 className="mt-14 text-xl font-bold text-[#FFD600] sm:text-2xl">GrowNow Investments</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {deliverablesGrowNow.map((column) => (
                  <article
                    key={column.title}
                    onMouseMove={(event) => handleMagneticMove(event, 8)}
                    onMouseLeave={handleMagneticLeave}
                    className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]"
                  >
                    <h4 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}>
                      {column.title}
                    </h4>
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
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal">
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">Inversión</h2>
              <div className="grid gap-5 lg:grid-cols-2">
                <article
                  onMouseMove={(event) => handleMagneticMove(event, 8)}
                  onMouseLeave={handleMagneticLeave}
                  className="magnetic rounded-2xl border border-blue-400/60 bg-[#111111] p-6"
                >
                  <p className="rounded-xl bg-blue-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100">
                    Opción A — 2 pagos (recomendada)
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                      <p className="text-sm text-zinc-300">Pago 1 al inicio</p>
                      <p className="mt-1 text-3xl font-extrabold text-blue-300">$1,650 USD</p>
                      <p className="text-sm text-zinc-400">Arranca ambos ecosistemas</p>
                    </div>
                    <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                      <p className="text-sm text-zinc-300">Pago 2 al día 20</p>
                      <p className="mt-1 text-3xl font-extrabold text-blue-300">$1,650 USD</p>
                      <p className="text-sm text-zinc-400">Fase de crecimiento activa</p>
                    </div>
                  </div>
                </article>
                <article
                  onMouseMove={(event) => handleMagneticMove(event, 8)}
                  onMouseLeave={handleMagneticLeave}
                  className="magnetic rounded-2xl border border-emerald-400/60 bg-[#111111] p-6"
                >
                  <p className="rounded-xl bg-emerald-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-emerald-100">
                    Opción B — Pago único
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                      <p className="text-sm text-zinc-300">Pago completo al firmar</p>
                      <p className="mt-1 text-4xl font-extrabold text-emerald-300">$3,100 USD</p>
                      <p className="text-sm font-semibold text-emerald-200">Ahorra $200 USD adicionales</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="mt-8 flex flex-col items-center gap-2 text-center">
                <p className="text-lg text-zinc-500 line-through">Valor normal: $3,994 USD</p>
                <p className="text-3xl font-extrabold text-white">Inversión final: $3,300 USD</p>
                <p className="text-xl font-bold text-emerald-300">Ahorro: $694 USD</p>
              </div>
              <p className="mt-10 text-center text-lg font-semibold text-zinc-200">
                Jean ya tiene las empresas. Fluxa Method construye el ecosistema.
              </p>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Condiciones</h2>
              <details className="mt-4 rounded-xl border border-zinc-700 bg-zinc-900/65 p-4 md:hidden">
                <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">
                  Ver condiciones
                </summary>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
                  {projectConditionsJean.map((item) => (
                    <li key={`m-${item}`} className="flex gap-2">
                      <span className="text-emerald-300">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
              <ul className="mt-4 hidden space-y-2 text-sm leading-relaxed text-zinc-300 md:block">
                {projectConditionsJean.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-300">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
            <div data-reveal className="reveal">
              <div className="grid gap-4 md:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSelectedSingleOffer("shipping")}
                  className={`rounded-2xl border p-6 text-left transition ${
                    selectedSingleOffer === "shipping"
                      ? "border-[#FFD600] bg-zinc-900/80 shadow-[0_0_22px_rgba(255,214,0,0.15)]"
                      : "border-zinc-700 bg-[#111111] hover:border-zinc-500"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD600]">LOGÍSTICA DIGITAL</p>
                  <h3 className="mt-2 text-xl font-extrabold text-white">Empresa de Envíos</h3>
                  <p className="mt-1 text-2xl font-extrabold text-white">$1,997 USD</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {[
                      "Sitio web profesional",
                      "Cotizador + rastreo automático",
                      "Dashboard operativo + KPIs",
                      "Automatizaciones WhatsApp completas",
                      "Campañas Meta Ads B2B",
                      "Funnels de captación empresarial",
                      "3 sesiones estratégicas",
                    ].map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-[#FFD600]">•</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSingleOffer("grownow")}
                  className={`rounded-2xl border p-6 text-left transition ${
                    selectedSingleOffer === "grownow"
                      ? "border-[#FFD600] bg-zinc-900/80 shadow-[0_0_22px_rgba(255,214,0,0.15)]"
                      : "border-zinc-700 bg-[#111111] hover:border-zinc-500"
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD600]">
                    MARCA FINANCIERA PREMIUM
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-white">GrowNow Investments</h3>
                  <p className="mt-1 text-2xl font-extrabold text-white">$1,997 USD</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {[
                      "Landing premium + VSL estratégica",
                      "Funnel financiero completo",
                      "CRM automatizado de leads",
                      "Branding premium financiero",
                      "Campañas Meta Ads inversionistas",
                      "Sistema de aplicación",
                      "3 sesiones estratégicas",
                    ].map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-[#FFD600]">•</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </button>
              </div>
              <p className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900/50 p-4 text-center text-sm text-zinc-300">
                💡 Desarrollar ambas juntas cuesta $3,300 USD — ahorras $694 USD vs contratarlas por separado ($3,994
                USD).
              </p>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
            <div data-reveal className="reveal">
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">Inversión por proyecto</h2>
              <div className="grid gap-5 lg:grid-cols-2">
                <article className="rounded-2xl border border-blue-400/60 bg-[#111111] p-6">
                  <p className="rounded-xl bg-blue-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100">
                    2 cuotas
                  </p>
                  <p className="mt-4 text-center text-3xl font-extrabold text-blue-300">$998 USD</p>
                  <p className="text-center text-sm text-zinc-400">cada una</p>
                </article>
                <article className="rounded-2xl border border-emerald-400/60 bg-[#111111] p-6">
                  <p className="rounded-xl bg-emerald-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-emerald-100">
                    Pago único
                  </p>
                  <p className="mt-4 text-center text-4xl font-extrabold text-emerald-300">$1,897 USD</p>
                  <p className="text-center text-sm font-semibold text-emerald-200">Ahorra $100</p>
                </article>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Preguntas frecuentes</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-2">
            {faqItems.map((item, idx) => {
              const open = faqOpen === idx;
              return (
                <div key={item.q} className="rounded-xl border border-zinc-700 bg-[#111111]">
                  <button
                    type="button"
                    onClick={() => setFaqOpen(open ? null : idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-bold text-white sm:text-base"
                    aria-expanded={open}
                  >
                    <span>{item.q}</span>
                    <span className="shrink-0 text-[#FFD600]">{open ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-zinc-800 px-4 pb-4 pt-0 text-sm leading-relaxed text-zinc-400">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-[60px] sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-3xl text-center">
          <p className="text-[26px] font-bold leading-tight text-white">Jean ya tiene las empresas.</p>
          <p className="mt-5 text-[26px] font-bold leading-tight text-[#FFD600]">
            Fluxa Method construye el ecosistema.
          </p>
          <p className="mt-5 text-[13px] text-zinc-400">
            2 pagos · Sin dependencia · Activos propios · 90 días
          </p>
          <a
            href="https://wa.me/573116425337"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl border border-yellow-400 bg-[#FFD600] px-8 py-4 text-base font-extrabold uppercase tracking-[0.12em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
          >
            QUIERO ARRANCAR MI PROYECTO
          </a>
          <p className="mt-6 text-xs text-zinc-500">Te respondemos en menos de 2 horas hábiles</p>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/80 sm:text-sm">
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
          QUIERO ARRANCAR MI PROYECTO
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
          .fade-tab,
          .pulse-glow,
          .timeline-dash,
          .timeline-dash-vertical,
          .magnetic,
          .route-card {
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
