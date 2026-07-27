"use client";

import { useEffect, useMemo, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=2400&q=80";
const SITE_URL = "https://mcerqueraplaza.wixsite.com/nutricionmafecerquer";
const INSTAGRAM_URL = "https://www.instagram.com/mafecerquerap.nutricion/";
const LADY_BOSS_URL = "https://www.instagram.com/ladybossclub_colombia/";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

function formatUsd(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function staggerStyle(index, step = 80) {
  return { "--delay": `${index * step}ms` };
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "donde", label: "Dónde estás" },
  { id: "transformacion", label: "Transformación" },
  { id: "planes", label: "Planes" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "reconsumo", label: "Continuidad" },
  { id: "resumen", label: "Resumen" },
  { id: "cierre", label: "Cierre" },
];

const FICHA = [
  { label: "Instagram", value: "@mafecerquerap.nutricion (verificada)" },
  { label: "Seguidores", value: "5,209 seguidores y 215 publicaciones" },
  { label: "Otros roles", value: "Founder @ladybossclub_colombia" },
  { label: "Sitio web", value: "Wix (mcerqueraplaza.wixsite.com)" },
  { label: "Especialidad", value: "Nutrición funcional basada en evidencia, enfoque personalizado" },
  { label: "Modalidad", value: "Consultas presenciales y online" },
  { label: "Producto validado", value: "Producto digital de alimentación emocional (formato taller)" },
];

const ASSETS = [
  "Cuenta verificada con 5,209 seguidores reales",
  "Producto digital ya validado: prueba de que la audiencia paga por experiencias grupales",
  'Hábito de contenido en series ("Serie 3 de 4", "Serie 4 de 4"): formato de retención ya instalado',
  "Comunidad propia: Founder de Lady Boss Club, canal de distribución sin explotar",
  "Bio con enfoque claro: nutrición funcional + enfoque personalizado",
];

const FRICTION_CARDS = [
  {
    title: "Página sin optimizar para conversión",
    text: 'El Wix es una plantilla genérica sin jerarquía visual, con texto largo tipo "About me" antes de cualquier CTA, sin testimonios ni prueba social. Único botón: "Reserva tu consulta". Empuja todo hacia 1:1, el modelo menos escalable.',
  },
  {
    title: "Sin oferta de producto digital ni checkout",
    text: "No existe ningún punto de venta para producto, membresía ni servicio. Todo el ecosistema depende de agendar cita.",
  },
  {
    title: "Producto digital validado pero aislado",
    text: "Tratado como evento suelto: no está conectado a ninguna escalera de productos ni funciona como entrada a algo recurrente.",
  },
  {
    title: "Contenido en series sin método propio",
    text: 'El formato de retención ya existe, pero las series no apuntan a ningún sistema con nombre que sea "lo que vendes".',
  },
  {
    title: "Lady Boss Club desconectado del negocio",
    text: "Comunidad propia sin ningún puente hacia el funnel de ventas.",
  },
  {
    title: "Sin recurrencia",
    text: "Cada ingreso depende de gestión manual, consulta por consulta.",
  },
];

const TRANSFORMATIONS = [
  {
    before: "Wix generico, sin jerarquía ni optimización",
    after: "Landing optimizada: estructura clara, prueba social, checkout directo",
  },
  {
    before: "Único CTA hacia consulta 1:1",
    after: "Landing con checkout directo para producto digital",
  },
  {
    before: "Producto digital tratado como evento aislado",
    after: "Entrada validada hacia escalera de productos",
  },
  {
    before: "Series sin método propio",
    after: "Método PDM Coaching como paraguas de todo el contenido",
  },
  {
    before: "Ventas manuales, sin recurrencia",
    after: "Sistema de pagos recurrentes con recordatorios y seguimiento automático de membresía",
  },
  {
    before: "Lady Boss Club desconectado",
    after: "Canal de distribución integrado al funnel",
  },
];

const JOURNEY_STEPS = [
  {
    step: "Fase 1",
    title: "Validación",
    text: "Lanzamiento de producto digital de bajo ticket como quick win.",
    tag: "Ambos planes",
  },
  {
    step: "Fase 2",
    title: "Producto digital",
    text: "Construcción del producto completo con landing, VSL y contenido.",
    tag: "Ambos planes",
  },
  {
    step: "Fase 3",
    title: "Recurrencia",
    text: "Membresia mensual con cobro automático, cupos y bienvenida.",
    tag: "Solo PRO",
  },
  {
    step: "Fase 4",
    title: "Escala",
    text: "Alto ticket + Lady Boss Club integrado al funnel.",
    tag: "Desde mes 3",
  },
];

const DIGITAL_SECTIONS = [
  {
    label: "Arquitectura Digital",
    items: [
      "Landing de marca que reemplaza el Wix, con checkout simple para el producto digital",
      "VSL corto para landing principal",
      "Automatización WhatsApp/Instagram básica",
    ],
  },
  {
    label: "Contenido",
    items: [
      "Laboratorio Notion personalizado",
      "Estrategia de contenido: 60 días bajo Método PDM Coaching",
      "15 guiones de reels orgánicos",
      "10 guiones para ads",
    ],
  },
  {
    label: "Capacitación IA y Ventas",
    items: ["3 sesiones Zoom con el equipo", "Guion de cierre y seguimiento comercial"],
  },
];

const PRO_EXTRA_SECTIONS = [
  {
    label: "Arquitectura ampliada",
    items: [
      "Landing ampliada para el producto digital completo",
      "2 VSLs",
      "Sistema de pagos recurrentes: cobro automático, recordatorios y seguimiento de membresía",
      "Automatización completa con lógica de cupos limitados",
      "Secuencia de bienvenida para nuevas membresías",
      "Conexión de Lady Boss Club al funnel",
    ],
  },
  {
    label: "Contenido ampliado",
    items: [
      "Estrategia 90 días",
      "25 guiones de reels orgánicos",
      "15 guiones para ads",
      "5 guiones UGC",
    ],
  },
  {
    label: "Meta Ads",
    items: [
      "Estrategia completa de campañas",
      "Configuración pixel y analítica",
      "5 creativos listos para lanzar",
      "Gestión y optimización primer mes",
    ],
  },
];

const PLAN_COMPARISON = [
  { feature: "Landing con checkout (producto digital)", digital: true, pro: true },
  { feature: "Landing producto digital completo", digital: false, pro: true },
  { feature: "VSL", digital: "1 corto", pro: "2" },
  { feature: "Pagos recurrentes de membresía", digital: false, pro: true },
  { feature: "Automatización WhatsApp/Instagram", digital: "Básica", pro: "Completa + cupos limitados" },
  { feature: "Conexión Lady Boss Club al funnel", digital: false, pro: true },
  { feature: "Secuencia de bienvenida", digital: false, pro: true },
  { feature: "Laboratorio Notion", digital: true, pro: true },
  { feature: "Estrategia de contenido", digital: "60 días", pro: "90 días" },
  { feature: "Guiones reels", digital: "15", pro: "25" },
  { feature: "Guiones ads", digital: "10", pro: "15" },
  { feature: "Guiones UGC", digital: false, pro: "5" },
  { feature: "Meta Ads + creativos", digital: false, pro: "5 + gestión 1 mes" },
];

const EXECUTION_PHASES = [
  {
    num: 1,
    when: "Semanas 1 a 2",
    title: "Validación",
    items: "Landing + checkout producto digital (Fase 1). Automatización básica",
    proOnly: false,
  },
  {
    num: 2,
    when: "Semanas 3 a 4",
    title: "Producto digital",
    items: "VSL, Laboratorio Notion, Estrategia y Guiones (Fase 2)",
    proOnly: false,
  },
  {
    num: 3,
    when: "Semanas 5 a 6",
    title: "Recurrencia",
    items: "Membresia con cobro automático (Fase 3). Automatización completa",
    proOnly: true,
  },
  {
    num: 4,
    when: "Mes 2",
    title: "Optimizacion",
    items: "Meta Ads + capacitaciónes + ajustes con datos reales",
    proOnly: true,
  },
];

const RECONSUMO = [
  {
    name: "Esencial",
    price: 39,
    note: "Solo nivel técnico",
    featured: false,
    items: [
      "Revisión tecnica mensual de landing y checkout",
      "Corrección de errores menores",
      "Soporte WhatsApp limitado (2 consultas/mes)",
    ],
  },
  {
    name: "Mantenimiento",
    price: 97,
    note: null,
    featured: false,
    items: [
      "Revisión y ajustes técnicos landing + checkout",
      "Actualización de automatizaciónes WhatsApp",
      "Ajuste del laboratorio de contenido",
      "Soporte prioritario WhatsApp",
    ],
  },
  {
    name: "Gestión completa",
    price: 250,
    note: "Más completo",
    featured: true,
    items: [
      "Todo lo del plan Mantenimiento",
      "Gestión activa campañas Meta Ads",
      "Optimizacion semanal de anuncios",
      "2 nuevos creativos mensuales",
      "Reporte de pauta (CPL, ROAS, resultados)",
      "Reporte mensual de métricas",
      "Recomendación de presupuesto mensual",
    ],
  },
];

const CLOSING_PLANS = [
  {
    id: "digital",
    name: "PDM COACHING DIGITAL",
    price: 947,
    phase1: 474,
    phase2: 473,
    note: "Landing + checkout + contenido + capacitación",
    recommended: false,
  },
  {
    id: "pro",
    name: "PDM COACHING PRO",
    price: 1497,
    phase1: 749,
    phase2: 748,
    note: "Membresia recurrente + Lady Boss Club + Meta Ads",
    recommended: true,
  },
];

function PackageBlock({ label, items }) {
  return (
    <div className="mt-5">
      <p className="mafe-section-label text-xs font-semibold uppercase tracking-[0.16em]">{label}</p>
      <ul className="mafe-muted mt-2 space-y-1.5 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mafe-accent-text shrink-0">*</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareCell({ value, isPro = false }) {
  if (value === true) return <span className="mafe-compare-check">OK</span>;
  if (value === false) return <span className="mafe-compare-x">X</span>;
  return <span className={`mafe-compare-text ${isPro ? "mafe-compare-text--pro" : ""}`}>{value}</span>;
}

function TimelinePhase({ phase, index, isLast }) {
  return (
    <div className="mafe-timeline-phase mafe-stagger relative flex gap-4 pb-8" style={staggerStyle(index, 110)}>
      <div className="flex flex-col items-center">
        <span className="mafe-timeline-dot flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">
          {phase.num}
        </span>
        {!isLast ? <span className="mafe-timeline-line mt-1 w-0.5 flex-1 min-h-[2.5rem]" aria-hidden /> : null}
      </div>
      <div className="pb-1">
        <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.16em]">{phase.when}</p>
        <h3 className="mafe-section-label mt-1 text-lg font-semibold">
          {phase.title}
          {phase.proOnly ? <span className="mafe-badge ml-2 rounded-full px-2 py-0.5 text-[9px]">Solo Pro</span> : null}
        </h3>
        <p className="mafe-muted mt-2 text-sm leading-relaxed">{phase.items}</p>
      </div>
    </div>
  );
}

function ClosingPlanPicker() {
  const [selectedId, setSelectedId] = useState("pro");
  const selected = CLOSING_PLANS.find((p) => p.id === selectedId) ?? CLOSING_PLANS[1];

  return (
    <div data-reveal className="mafe-reveal mt-10 text-left">
      <p className="mafe-eyebrow text-center">Resumen de tu elección</p>
      <h3 className="mafe-heading mt-2 text-center text-xl sm:text-2xl">¿Qué paquete eliges?</h3>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {CLOSING_PLANS.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelectedId(plan.id)}
            className={`mafe-plan-pick mafe-card rounded-xl p-4 text-left sm:p-5 ${
              selectedId === plan.id ? "mafe-plan-pick--selected" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="mafe-section-label text-sm font-semibold sm:text-base">{plan.name}</p>
                <p className="mafe-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
              </div>
              {plan.recommended ? (
                <span className="mafe-badge shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider">
                  Top
                </span>
              ) : null}
            </div>
            <p className="mafe-price mt-4 text-2xl font-semibold">${formatUsd(plan.price)} USD</p>
          </button>
        ))}
      </div>

      <div className="mafe-payment-box mt-8 rounded-xl p-5 sm:p-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--mafe-border)] pb-3">
            <p className="mafe-muted">Paquete elegido</p>
            <p className="mafe-section-label font-semibold">{selected.name}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="mafe-muted">Total</p>
            <p className="mafe-price font-semibold">${formatUsd(selected.price)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="mafe-muted">Fase 1 (al firmar)</p>
            <p className="mafe-card-text font-medium">${formatUsd(selected.phase1)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="mafe-muted">Fase 2 (a los 15 días)</p>
            <p className="mafe-card-text font-medium">${formatUsd(selected.phase2)} USD</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={waUrl(
              `Hola Fluxa Method. Revisé la propuesta de María Fernanda Cerquera y quiero confirmar el paquete ${selected.name} ($${formatUsd(selected.price)} USD).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mafe-btn-solid inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto sm:min-w-[300px]"
          >
            Confirmar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ id, eyebrow, title, subtitle, children, elevated = false, alt = false }) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "mafe-section-alt" : ""}`}>
      <div className={`mx-auto w-full max-w-6xl ${elevated ? "mafe-card rounded-2xl p-7 sm:p-10" : ""}`}>
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="mafe-reveal mafe-reveal-header max-w-3xl">
            {eyebrow ? <p className="mafe-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="mafe-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2> : null}
            {subtitle ? <p className="mafe-lead">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaMafeCerqueraPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-10% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll("[data-reveal], .mafe-stagger-group, .mafe-timeline-group")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="mafe-page">
      <div className="mafe-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="mafe-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className="mafe-nav sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="mafe-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            Mafe Cerquera
          </span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mafe-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                activeSection === item.id ? "mafe-nav-link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="mafe-hero-mesh scroll-mt-28 pb-16 pt-16 lg:pb-20 lg:pt-24">
        <div className="mafe-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="mafe-hero-bg-img" src={HERO_IMAGE} alt="" />
          <div className="mafe-hero-bg-overlay" />
        </div>
        <div
          data-reveal
          className="mafe-reveal mafe-stagger-group mafe-hero-copy relative z-[2] mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <p className="mafe-eyebrow mafe-eyebrow--on-video tracking-[0.24em]">Método PDM Coaching</p>
          <h1 className="mafe-hero-brand">María Fernanda Cerquera</h1>
          <p className="mafe-hero-title mafe-hero-title--on-video">Presencia Digital Profesional</p>
          <p className="mafe-lead mafe-lead--on-video mt-5 max-w-xl">
            Convierte tu comunidad en clientas de membresía recurrente, sin depender de que cada venta pase por una
            consulta agendada manualmente.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {["Desde $947 USD", "4 a 6 semanas", "Landing + automatización + membresía"].map((pill, i) => (
              <span
                key={pill}
                className="mafe-pill mafe-pill--on-video mafe-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal className="mafe-reveal mafe-hero-band relative z-[2] mt-14 w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-12">
            <p className="mafe-hero-band-handle text-lg font-semibold tracking-wide sm:text-xl">
              @mafecerquerap.nutricion
            </p>
            <p className="mt-2 text-sm text-white/75">Nutricionista Dietista | Founder Lady Boss Club</p>
          </div>
        </div>

        <div className="relative z-[2] mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <div
            data-reveal
            className="mafe-reveal mafe-card flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl px-5 py-4 text-center text-xs sm:text-sm"
          >
            <span className="mafe-muted">
              Comunidad{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mafe-accent-text font-semibold"
              >
                @mafecerquerap.nutricion
              </a>{" "}
              | 5.2K seguidores
            </span>
            <span className="hidden h-4 w-px bg-[var(--mafe-border)] sm:block" aria-hidden />
            <span className="mafe-muted">
              Sitio actual{" "}
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="mafe-accent-text font-semibold">
                Wix
              </a>
            </span>
            <span className="hidden h-4 w-px bg-[var(--mafe-border)] sm:block" aria-hidden />
            <span className="mafe-muted">Propuesta por Fluxa Method</span>
          </div>
        </div>

        <div className="relative z-[2] mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6" data-reveal>
          <a
            href="#planes"
            className="mafe-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Ver planes
          </a>
        </div>
      </section>

      <SectionBlock
        id="donde"
        eyebrow="01. Punto de partida"
        title="Tienes comunidad, producto validado y series que retienen."
        subtitle="Pero el sistema comercial todavía empuja todo hacia consulta 1:1 y deja fuera la membresía recurrente."
        elevated
        alt
      >
        <div data-reveal className="mafe-reveal">
          <h3 className="mafe-section-label text-lg font-semibold">Ficha técnica</h3>
          <div className="mafe-ficha-grid mafe-card mt-4 rounded-xl p-5 sm:p-6">
            {FICHA.map((row) => (
              <div key={row.label} className="contents">
                <p className="mafe-ficha-label">{row.label}</p>
                <p className="mafe-card-text text-sm leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mafe-reveal mt-10">
          <h3 className="mafe-section-label text-lg font-semibold">Activos identificados</h3>
          <ul className="mafe-stagger-group mt-4 space-y-3" data-reveal>
            {ASSETS.map((item, i) => (
              <li key={item} className="mafe-stagger flex gap-3 text-sm leading-relaxed" style={staggerStyle(i, 70)}>
                <span className="mafe-asset-check" aria-hidden>
                  OK
                </span>
                <span className="mafe-card-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="mafe-section-label text-lg font-semibold">Cuellos de botella críticos</h3>
          <div className="mafe-stagger-group mt-4 grid gap-4 sm:grid-cols-2" data-reveal>
            {FRICTION_CARDS.map((card, i) => (
              <article key={card.title} className="mafe-card mafe-stagger rounded-xl p-5" style={staggerStyle(i, 90)}>
                <p className="mafe-section-label text-sm font-semibold">{card.title}</p>
                <p className="mafe-muted mt-2 text-sm leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        id="transformacion"
        eyebrow="02. Transformaciónes concretas"
        title="De consulta manual a sistema de membresía recurrente"
      >
        <div className="mafe-stagger-group mafe-table-wrap overflow-hidden rounded-xl" data-reveal>
          <div className="mafe-table-head grid grid-cols-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
            <span>Antes</span>
            <span className="mafe-accent-text">Después</span>
          </div>
          {TRANSFORMATIONS.map((row, i) => (
            <div
              key={row.before}
              className={`mafe-stagger grid grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 ${
                i < TRANSFORMATIONS.length - 1 ? "mafe-table-row" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="mafe-muted text-sm leading-relaxed">{row.before}</p>
              <p
                className="mafe-table-after mafe-table-after-cell text-sm leading-relaxed"
                style={{ "--after-delay": `${i * 100 + 140}ms` }}
              >
                {row.after}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal className="mafe-reveal mafe-callout mt-8 rounded-xl p-5 sm:p-6">
          <p className="mafe-eyebrow">Referente de marca</p>
          <p className="mafe-card-text mt-3 text-sm leading-relaxed sm:text-base">
            Dra. Cadavid (303K seguidores) valida el mecanismo: método propio bautizado y cuantificado, automatización
            con botónes de conversión, cupos limitados como escasez real. Replicamos ese mecanismo, no su ángulo de
            pérdida de peso/estética, incompatible con el posicionamiento de alimentación consciente y emocional de
            María Fernanda.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock
        id="planes"
        eyebrow="03. Inversión"
        title="Elige tu ruta"
        subtitle="Arquitectura central en ambos planes: landing con checkout, automatización WhatsApp/Instagram, laboratorio de contenido, capacitación de equipo."
        elevated
        alt
      >
        <div data-reveal className="mafe-reveal">
          <h3 className="mafe-section-label text-lg font-semibold">Cómo encaja todo</h3>
          <p className="mafe-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Primero validamos con un producto digital de bajo ticket. Luego construimos el producto completo. En PRO
            activamos membresía recurrente y conectamos Lady Boss Club al funnel.
          </p>
          <div className="mafe-stagger-group mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {JOURNEY_STEPS.map((item, i) => (
              <article key={item.step} className="mafe-card mafe-stagger rounded-xl p-5" style={staggerStyle(i, 100)}>
                <p className="mafe-eyebrow">{item.step}</p>
                <h3 className="mafe-section-label mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mafe-muted mt-2 text-sm leading-relaxed">{item.text}</p>
                <span className="mafe-badge mt-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
                  {item.tag}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="mafe-stagger-group mt-12 grid gap-6 lg:grid-cols-2" data-reveal>
          <article className="mafe-card mafe-stagger flex flex-col rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
            <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 1</p>
            <h3 className="mafe-section-label mt-2 text-2xl font-semibold">PDM COACHING DIGITAL</h3>
            <p className="mafe-price mt-1 text-3xl font-semibold">${formatUsd(947)} USD</p>

            {DIGITAL_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}

            <div className="mafe-payment-box mt-6 rounded-lg p-4">
              <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
              <p className="mafe-card-text mt-2 text-sm">Fase 1: $474 USD al firmar</p>
              <p className="mafe-muted text-sm">Fase 2: $473 USD a los 15 días</p>
            </div>

            <a
              href={waUrl(
                "Hola Fluxa Method. Revisé la propuesta de María Fernanda Cerquera y me interesa PDM COACHING DIGITAL ($947 USD). Quiero coordinar el siguiente paso."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mafe-btn-outline mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Quiero DIGITAL
            </a>
          </article>

          <article
            className="mafe-card mafe-card--featured mafe-stagger relative flex flex-col rounded-2xl p-6 sm:p-8"
            style={staggerStyle(1, 140)}
          >
            <span className="mafe-badge mafe-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
              Recomendado
            </span>
            <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 2</p>
            <h3 className="mafe-section-label mt-2 text-2xl font-semibold">PDM COACHING PRO</h3>
            <p className="mafe-price mt-1 text-3xl font-semibold">${formatUsd(1497)} USD</p>
            <p className="mafe-section-label mt-4 text-sm font-medium">Todo lo del paquete anterior, más:</p>

            {PRO_EXTRA_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}

            <div className="mafe-payment-box mt-6 rounded-lg p-4">
              <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
              <p className="mafe-card-text mt-2 text-sm">Fase 1: $749 USD al firmar</p>
              <p className="mafe-muted text-sm">Fase 2: $748 USD a los 15 días</p>
            </div>

            <a
              href={waUrl(
                "Hola Fluxa Method. Revisé la propuesta de María Fernanda Cerquera y me interesa PDM COACHING PRO ($1,497 USD). Quiero coordinar el siguiente paso."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mafe-btn-solid mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Quiero PRO
            </a>
          </article>
        </div>

        <div className="mafe-reveal mt-12" data-reveal>
          <h3 className="mafe-section-label text-center text-lg font-semibold sm:text-xl">Comparativa lado a lado</h3>
          <div className="mafe-compare-wrap mt-6 rounded-xl">
            <div className="sm:hidden">
              <div className="mafe-compare-head grid grid-cols-2 gap-2 px-3 py-3">
                <span className="text-center">
                  Digital
                  <span className="mafe-compare-price block">${formatUsd(947)}</span>
                </span>
                <span className="text-center mafe-accent-text">
                  Pro
                  <span className="mafe-compare-price block">${formatUsd(1497)}</span>
                </span>
              </div>
              {PLAN_COMPARISON.map((row) => (
                <div key={row.feature} className="mafe-compare-row px-3 py-3.5">
                  <p className="mafe-card-text text-xs leading-snug">{row.feature}</p>
                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    <div className="flex min-h-[2rem] items-center justify-center px-1">
                      <CompareCell value={row.digital} />
                    </div>
                    <div className="flex min-h-[2rem] items-center justify-center px-1">
                      <CompareCell value={row.pro} isPro />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden overflow-x-auto sm:block">
              <div className="mafe-compare-head grid grid-cols-[1.4fr_1fr_1fr] gap-2 px-5 py-3">
                <span>Característica</span>
                <span className="text-center">
                  Digital <span className="mafe-compare-price block">${formatUsd(947)}</span>
                </span>
                <span className="text-center mafe-accent-text">
                  Pro <span className="mafe-compare-price block">${formatUsd(1497)}</span>
                </span>
              </div>
              {PLAN_COMPARISON.map((row) => (
                <div
                  key={row.feature}
                  className="mafe-compare-row grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 px-5 py-3.5"
                >
                  <p className="mafe-card-text text-sm leading-snug">{row.feature}</p>
                  <div className="flex justify-center">
                    <CompareCell value={row.digital} />
                  </div>
                  <div className="flex justify-center">
                    <CompareCell value={row.pro} isPro />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock id="ejecucion" eyebrow="04. Ejecución" title="Orden de construcción">
        <div className="mafe-timeline-group mafe-stagger-group max-w-2xl" data-reveal>
          {EXECUTION_PHASES.map((phase, i) => (
            <TimelinePhase key={phase.num} phase={phase} index={i} isLast={i === EXECUTION_PHASES.length - 1} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="reconsumo"
        eyebrow="05. Continuidad"
        title="Mantenimiento y crecimiento mes a mes"
        subtitle="Disponible desde el mes 3 (Fase 4 Escala)"
        elevated
        alt
      >
        <div className="mafe-stagger-group grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
          {RECONSUMO.map((plan, i) => (
            <article
              key={plan.name}
              className={`mafe-card mafe-stagger rounded-2xl p-6 sm:p-8 ${plan.featured ? "mafe-card--featured" : ""}`}
              style={staggerStyle(i, 100)}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="mafe-eyebrow tracking-[0.18em]">{plan.name}</p>
                {plan.featured ? (
                  <span className="mafe-badge rounded-full px-2 py-0.5 text-[9px] uppercase">Más completo</span>
                ) : null}
              </div>
              <h3 className="mafe-section-label mt-2 text-2xl font-semibold">${formatUsd(plan.price)} USD/mes</h3>
              {plan.note ? <p className="mafe-muted mt-1 text-sm">{plan.note}</p> : null}
              <ul className="mafe-muted mt-6 space-y-2 text-sm leading-relaxed">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mafe-accent-text">*</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="resumen"
        eyebrow="06. Resumen ejecutivo"
        title="Dos rutas posibles según dónde estas hoy y hacia dónde quieres llegar."
      >
        <div className="mafe-stagger-group grid gap-4 md:grid-cols-2" data-reveal>
          <article className="mafe-card mafe-stagger rounded-xl p-6" style={staggerStyle(0)}>
            <p className="mafe-eyebrow">Hoy</p>
            <ul className="mafe-muted mt-4 space-y-2 text-sm leading-relaxed">
              <li>Página sin optimizar con único CTA hacia consulta 1:1</li>
              <li>Producto digital validado pero aislado</li>
              <li>Lady Boss Club sin conexión al negocio</li>
            </ul>
          </article>
          <article className="mafe-card mafe-card--featured mafe-stagger rounded-xl p-6" style={staggerStyle(1)}>
            <p className="mafe-eyebrow">En 60 días</p>
            <ul className="mafe-card-text mt-4 space-y-2 text-sm leading-relaxed">
              <li>Landing optimizada con checkout</li>
              <li>Método PDM Coaching como sistema nombrado</li>
              <li>Membresia con cobro automático y Lady Boss Club integrado al funnel</li>
            </ul>
          </article>
        </div>

        <div className="mafe-stagger-group mt-6 grid gap-4 sm:grid-cols-2" data-reveal>
          <article className="mafe-card mafe-stagger rounded-xl p-5" style={staggerStyle(0)}>
            <p className="mafe-section-label font-semibold">PDM COACHING DIGITAL</p>
            <p className="mafe-price mt-1 text-xl font-semibold">${formatUsd(947)} USD</p>
          </article>
          <article className="mafe-card mafe-card--featured mafe-stagger rounded-xl p-5" style={staggerStyle(1)}>
            <p className="mafe-section-label font-semibold">PDM COACHING PRO</p>
            <p className="mafe-price mt-1 text-xl font-semibold">${formatUsd(1497)} USD</p>
            <p className="mafe-muted mt-1 text-xs">Recomendado</p>
          </article>
        </div>

        <p data-reveal className="mafe-reveal mafe-muted mt-8 text-sm">
          Activos quedan en sus cuentas. Pagos en fases. 30 días de soporte post entrega
        </p>
      </SectionBlock>

      <section id="cierre" className="scroll-mt-28 px-4 pb-24 sm:px-6">
        <div className="mafe-card mafe-cierre relative mx-auto max-w-6xl rounded-2xl p-7 text-center sm:p-12">
          <p className="mafe-eyebrow">Siguiente paso</p>
          <h2 className="mafe-heading mt-3 text-2xl sm:text-3xl lg:text-4xl">¿Lista para construir el sistema?</h2>
          <p className="mafe-lead mx-auto mt-4 max-w-2xl">
            Si cerramos esta semana, arrancamos de inmediato con la fase 1 del proyecto.
          </p>
          <ClosingPlanPicker />
          <p className="mafe-muted mt-10 text-[11px] uppercase tracking-[0.18em]">
            Fluxa Method | Método PDM Coaching
          </p>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-2 text-center text-[11px] uppercase tracking-[0.16em] text-[var(--mafe-muted-light)] sm:px-6">
        María Fernanda Cerquera |{" "}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
          @mafecerquerap.nutricion
        </a>
        {" | "}
        <a href={LADY_BOSS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
          Lady Boss Club
        </a>
        {" | Fluxa Method"}
      </footer>

      <a href="#planes" className="mafe-floating-cta">
        Ver planes
      </a>
    </main>
  );
}
