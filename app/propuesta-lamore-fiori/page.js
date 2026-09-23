"use client";

import { useEffect, useMemo, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=2400&q=80";
const INSTAGRAM_URL = "https://www.instagram.com/lamore.fiori/";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

function formatUsd(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatCop(n) {
  return new Intl.NumberFormat("es-CO").format(n);
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
  { label: "Instagram", value: "@lamore.fiori" },
  { label: "Seguidores", value: "1.496 seguidores y 89 publicaciones" },
  {
    label: "Sitio web",
    value: "sin web propia. WhatsApp y catálogo en Canva",
  },
  {
    label: "Especialidad",
    value: "arreglos florales, talleres y experiencias florales",
  },
  { label: "Modalidad", value: "Cúcuta, Norte de Santander" },
  {
    label: "Producto validado",
    value:
      "catálogo de arreglos de $90.000 a $450.000, eventos privados y talleres (Café, flores y colibríes; Día de la Mujer)",
  },
];

const ASSETS = [
  "Identidad visual premium: producción editorial al nivel de marcas nacionales",
  "Catálogo con precios definidos, del ticket de entrada al ticket alto",
  "Talleres y experiencias ya realizados, con demanda probada",
  "Eventos florales privados como línea de alto valor",
  "Comunidad femenina local con creadoras de Cúcuta que ya siguen la cuenta",
];

const FRICTION_CARDS = [
  {
    title: "Un solo link para dos negocios",
    text: "La clienta que quiere un arreglo y la que quiere un evento entran por el mismo WhatsApp y reciben el mismo trato manual.",
  },
  {
    title: "Catálogo en Canva, sin tienda",
    text: "No tiene carrito, pago, ni forma de saber quién lo vio y no compró. Meta tampoco puede leerlo como catálogo para pauta.",
  },
  {
    title: "Eventos sin página propia",
    text: "Los talleres viven en destacados, sin calendario, cupos, inscripción ni pago anticipado.",
  },
  {
    title: "Eventos privados y corporativos sin canal de cotización",
    text: "Hoy nada invita a una empresa o a una anfitriona a pedirte una propuesta.",
  },
  {
    title: "Fechas comerciales sin sistema",
    text: "Grados, cierres corporativos, Navidad, San Valentín, 8 de marzo y Día de la Madre llegan sin campaña ni reactivación de clientas anteriores.",
  },
  {
    title: "Sin recurrencia",
    text: "Cada venta depende de que alguien escriba y de que alguien responda a tiempo.",
  },
];

const TRANSFORMATIONS = [
  {
    before: "Un solo link de WhatsApp para todo",
    after: "Rutas separadas: tienda, talleres y eventos",
  },
  {
    before: "Catálogo en Canva",
    after: "Catálogo web por ocasión y precio, con pedido y pago en línea",
  },
  {
    before: "Talleres anunciados en destacados",
    after: "Landing de experiencias con calendario, cupos y pago anticipado",
  },
  {
    before: "Eventos privados solo por referido",
    after: "Landing de eventos privados y corporativos con formulario de cotización",
  },
  {
    before: "Fechas especiales improvisadas",
    after: "Calendario comercial anual con campañas y reactivación",
  },
  {
    before: "Contenido bonito sin ruta de compra",
    after: "Método PDM Floral como sistema detrás de cada publicación",
  },
];

const JOURNEY_STEPS = [
  {
    step: "Fase 1",
    title: "Tienda",
    text: "Catálogo web con pedido y pago como quick win.",
    tag: "Ambos planes",
  },
  {
    step: "Fase 2",
    title: "Experiencias",
    text: "Landing de talleres, contenido y automatización.",
    tag: "Ambos planes",
  },
  {
    step: "Fase 3",
    title: "Eventos y recurrencia",
    text: "Landing de eventos privados y corporativos, reactivación por fechas especiales.",
    tag: "Solo PRO",
  },
  {
    step: "Fase 4",
    title: "Escala",
    text: "Pauta con catálogo conectado y temporadas comerciales.",
    tag: "Desde mes 3",
  },
];

const CONSULTORIA_ITEMS = [
  "Definición de avatar por línea: arreglos, talleres y eventos",
  "Mensaje por público",
  "Estrategia digital",
  "Calendario de contenido",
  "Definición de embudos",
  "Estrategia de ventas",
];

const DIGITAL_SECTIONS = [
  {
    label: "Arquitectura Digital",
    items: [
      "Landing de marca con catálogo web por ocasión y precio, que reemplaza el Canva, con pedido y pago en línea",
      "Landing de talleres y experiencias con calendario y cupos",
      "VSL corto para la landing principal",
      "Automatización WhatsApp/Instagram básica",
    ],
  },
  {
    label: "Contenido",
    items: [
      "Laboratorio Notion personalizado",
      "Estrategia de contenido: 60 días bajo Método PDM Floral",
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
      "Landing de eventos privados y corporativos con formulario de cotización",
      "2 VSLs",
      "Catálogo conectado a Meta para anuncios de productos y retargeting",
      "Automatización completa: palabras clave por ocasión y lógica de cupos para talleres",
      "Secuencia post compra y reactivación en fechas especiales",
      "Calendario comercial anual con campañas por temporada",
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
      "Configuración de pixel y analítica",
      "5 creativos listos para lanzar",
      "Gestión y optimización del primer mes",
    ],
  },
];

const PLAN_COMPARISON = [
  { feature: "Avatar, oferta y producto", consultoria: true, digital: true, pro: true },
  { feature: "Mensaje y estrategia digital", consultoria: true, digital: true, pro: true },
  { feature: "Embudos y estrategia de ventas", consultoria: true, digital: true, pro: true },
  { feature: "Calendario de contenido", consultoria: true, digital: "60 días", pro: "90 días" },
  { feature: "Catálogo web con pago", consultoria: false, digital: true, pro: true },
  { feature: "Landing talleres y experiencias", consultoria: false, digital: true, pro: true },
  {
    feature: "Landing eventos privados y corporativos",
    consultoria: false,
    digital: false,
    pro: true,
  },
  { feature: "VSL", consultoria: false, digital: "1 corto", pro: "2" },
  { feature: "Catálogo conectado a Meta", consultoria: false, digital: false, pro: true },
  {
    feature: "Automatización WhatsApp/Instagram",
    consultoria: false,
    digital: "Básica",
    pro: "Completa + cupos",
  },
  { feature: "Post compra y reactivación", consultoria: false, digital: false, pro: true },
  { feature: "Laboratorio Notion", consultoria: false, digital: true, pro: true },
  { feature: "Guiones reels", consultoria: false, digital: "15", pro: "25" },
  { feature: "Guiones ads", consultoria: false, digital: "10", pro: "15" },
  { feature: "Guiones UGC", consultoria: false, digital: false, pro: "5" },
  { feature: "Meta Ads + creativos", consultoria: false, digital: false, pro: "5 + gestión 1 mes" },
  { feature: "Capacitación", consultoria: false, digital: "3 sesiones", pro: "3 sesiones" },
];

const EXECUTION_PHASES = [
  {
    num: 1,
    when: "Semanas 1 a 2",
    title: "Tienda",
    items: "Catálogo web con pedido y pago. Automatización básica.",
    proOnly: false,
  },
  {
    num: 2,
    when: "Semanas 3 a 4",
    title: "Experiencias",
    items: "Landing de talleres, VSL, Laboratorio Notion, estrategia y guiones.",
    proOnly: false,
  },
  {
    num: 3,
    when: "Semanas 5 a 6",
    title: "Eventos y recurrencia",
    items:
      "Landing de eventos privados y corporativos, automatización completa y reactivación.",
    proOnly: true,
  },
  {
    num: 4,
    when: "Mes 2",
    title: "Optimización",
    items: "Meta Ads con catálogo, capacitaciones y ajustes con datos reales.",
    proOnly: true,
  },
];

const RECONSUMO = [
  {
    name: "Esencial",
    price: 130000,
    usd: 39,
    note: "Solo nivel técnico",
    featured: false,
    items: [
      "Revisión técnica mensual de landings y catálogo",
      "Corrección de errores menores",
      "Soporte WhatsApp limitado (2 consultas/mes)",
    ],
  },
  {
    name: "Mantenimiento",
    price: 305000,
    usd: 97,
    note: null,
    featured: false,
    items: [
      "Revisión y ajustes técnicos de landings y catálogo",
      "Actualización de precios y productos del catálogo",
      "Actualización de automatizaciones WhatsApp",
      "Ajuste del laboratorio de contenido",
      "Soporte prioritario WhatsApp",
    ],
  },
  {
    name: "Gestión completa",
    price: 790000,
    usd: 250,
    note: "Más completo",
    featured: true,
    items: [
      "Todo lo del plan Mantenimiento",
      "Gestión activa de campañas Meta Ads",
      "Optimización semanal de anuncios",
      "2 nuevos creativos mensuales",
      "Campañas por fecha especial",
      "Reporte de pauta (CPL, ROAS, resultados)",
      "Reporte mensual de métricas",
      "Recomendación de presupuesto mensual",
    ],
  },
];

const CLOSING_PLANS = [
  {
    id: "consultoria",
    name: "PDM CONSULTORÍA",
    price: 1100000,
    usd: 350,
    phase1: 550000,
    phase2: 550000,
    note: "Oferta, mensaje y estrategia",
    recommended: false,
  },
  {
    id: "digital",
    name: "PDM FLORAL DIGITAL",
    price: 3197000,
    usd: 1017,
    phase1: 1598500,
    phase2: 1598500,
    note: "Catálogo web + talleres + contenido + capacitación",
    recommended: false,
  },
  {
    id: "pro",
    name: "PDM FLORAL PRO",
    price: 4897000,
    usd: 1557,
    phase1: 2448500,
    phase2: 2448500,
    note: "Eventos corporativos + catálogo en Meta + Meta Ads",
    recommended: true,
  },
];

const FLOATING_FLORALS = [
  { emoji: "🌸", className: "lam-food--1" },
  { emoji: "💐", className: "lam-food--2" },
  { emoji: "🌸", className: "lam-food--3" },
  { emoji: "💐", className: "lam-food--4" },
  { emoji: "🌸", className: "lam-food--5" },
  { emoji: "💐", className: "lam-food--6" },
  { emoji: "🌸", className: "lam-food--7" },
  { emoji: "💐", className: "lam-food--8" },
];

function FloralAmbient() {
  return (
    <div className="lam-food-ambient" aria-hidden>
      {FLOATING_FLORALS.map((item) => (
        <span key={item.className} className={`lam-food ${item.className}`}>
          <span className="lam-food__emoji">{item.emoji}</span>
        </span>
      ))}
    </div>
  );
}

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
  const selected = CLOSING_PLANS.find((p) => p.id === selectedId) ?? CLOSING_PLANS[2];

  return (
    <div data-reveal className="mafe-reveal mt-10 text-left">
      <p className="mafe-eyebrow text-center">Resumen de tu elección</p>
      <h3 className="mafe-heading mt-2 text-center text-xl sm:text-2xl">¿Qué paquete eliges?</h3>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
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
            <p className="mafe-price mt-4 text-xl font-semibold sm:text-2xl">${formatCop(plan.price)} COP</p>
            <p className="mafe-muted mt-0.5 text-xs">USD {formatUsd(plan.usd)}</p>
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
            <p className="mafe-price font-semibold">${formatCop(selected.price)} COP</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="mafe-muted">Fase 1 (al firmar)</p>
            <p className="mafe-card-text font-medium">${formatCop(selected.phase1)} COP</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="mafe-muted">Fase 2 (a los 15 días)</p>
            <p className="mafe-card-text font-medium">${formatCop(selected.phase2)} COP</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={waUrl(
              `Hola Fluxa Method. Revisé la propuesta de Lamore Fiori y quiero confirmar el paquete ${selected.name} ($${formatCop(selected.price)} COP).`
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

export default function PropuestaLamoreFioriPage() {
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

    // CSS de Lamore fuerza opacity:1; esto solo mantiene compatibilidad con mafe-coaching.css
    document
      .querySelectorAll("[data-reveal], .mafe-stagger-group, .mafe-timeline-group")
      .forEach((el) => el.classList.add("is-visible"));

    return () => sectionObserver.disconnect();
  }, [sectionIds]);

  return (
    <main className="mafe-page">
      <div className="mafe-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="mafe-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className="mafe-nav sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="mafe-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            Lamore Fiori
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
        <div className="mafe-stagger-group mafe-hero-copy is-visible">
          <p className="mafe-eyebrow mafe-eyebrow--on-video">Método PDM Floral</p>
          <h1 className="mafe-hero-brand">Lamore Fiori</h1>
          <p className="mafe-hero-title mafe-hero-title--on-video">Presencia Digital Profesional</p>
          <p className="mafe-lead mafe-lead--on-video">
            Convierte tu catálogo y tus experiencias florales en ventas diarias y eventos llenos, sin que cada pedido
            dependa de una conversación manual por WhatsApp.
          </p>

          <div className="mafe-pill-row">
            {["Desde $1.100.000 COP", "4 a 6 semanas", "Consultoría · Digital · Pro"].map((pill) => (
              <span key={pill} className="mafe-pill mafe-pill--on-video">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="mafe-hero-band mt-14 w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-12">
            <p className="mafe-hero-band-handle text-lg font-semibold tracking-wide sm:text-xl">@lamore.fiori</p>
            <p className="mt-2 text-sm text-white/75">
              Floristería · Talleres florales · Experiencias para los sentidos
            </p>
          </div>
        </div>

        <div className="relative z-[2] mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <div className="mafe-card flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl px-5 py-4 text-center text-xs sm:text-sm">
            <span className="mafe-muted">
              Comunidad{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mafe-accent-text font-semibold"
              >
                @lamore.fiori
              </a>{" "}
              | 1.496 seguidores
            </span>
            <span className="hidden h-4 w-px bg-[var(--mafe-border)] sm:block" aria-hidden />
            <span className="mafe-muted">
              Contacto{" "}
              <a
                href={waUrl("Hola, quiero contactar con Lamore Fiori.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mafe-accent-text font-semibold"
              >
                WhatsApp
              </a>
            </span>
            <span className="hidden h-4 w-px bg-[var(--mafe-border)] sm:block" aria-hidden />
            <span className="mafe-muted">Propuesta por Fluxa Method</span>
          </div>
        </div>

        <div className="mafe-hero-cta-row">
          <a href="#planes" className="mafe-btn-solid">
            Ver planes
          </a>
        </div>
      </section>

      <div className="lam-body">
        <FloralAmbient />
        <div className="lam-body-content">
          <SectionBlock
            id="donde"
            eyebrow="01. Punto de partida"
            title="Tienes una marca con estética premium, catálogo con precios y experiencias que ya se venden."
            subtitle="Pero todo llega por la misma puerta y termina en un chat, tanto el arreglo de $90.000 como el evento privado."
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
            eyebrow="02. Transformaciones concretas"
            title="De pedidos por chat a un sistema que vende arreglos y llena eventos"
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
          </SectionBlock>

          <SectionBlock
            id="planes"
            eyebrow="03. Inversión"
            title="Elige tu ruta"
            subtitle="Tres rutas: consultoría de oferta, sistema digital con tienda y talleres, o el paquete completo con eventos corporativos y Meta Ads."
            elevated
            alt
          >
            <div data-reveal className="mafe-reveal">
              <h3 className="mafe-section-label text-lg font-semibold">Cómo encaja todo</h3>
              <p className="mafe-muted mt-2 max-w-3xl text-sm leading-relaxed">
                Puedes empezar solo con la oferta y el mensaje, o montar el sistema digital completo. En PRO activamos
                el canal de eventos privados y corporativos y conectamos el catálogo a la pauta.
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

            <div className="mafe-stagger-group mt-12 grid gap-6 lg:grid-cols-3" data-reveal>
              <article className="mafe-card mafe-stagger flex flex-col rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
                <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 3</p>
                <h3 className="mafe-section-label mt-2 text-2xl font-semibold">PDM CONSULTORÍA</h3>
                <p className="mafe-price mt-1 text-3xl font-semibold">${formatCop(1100000)} COP</p>
                <p className="mafe-muted mt-1 text-sm">USD 350</p>
                <p className="mafe-muted mt-4 text-sm leading-relaxed">
                  Te ayudamos a construir tu oferta irresistible y magnética.
                </p>
                <ul className="mafe-muted mt-5 space-y-1.5 text-sm leading-relaxed">
                  {CONSULTORIA_ITEMS.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mafe-accent-text shrink-0">*</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mafe-payment-box mt-6 rounded-lg p-4">
                  <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
                  <p className="mafe-card-text mt-2 text-sm">
                    Fase 1: <strong>${formatCop(550000)} COP</strong> al firmar
                  </p>
                  <p className="mafe-muted text-sm">
                    Fase 2: <strong>${formatCop(550000)} COP</strong> a los 15 días
                  </p>
                </div>
                <a
                  href={waUrl(
                    "Hola Fluxa Method. Revisé la propuesta de Lamore Fiori y me interesa PDM CONSULTORÍA ($1.100.000 COP). Quiero coordinar el siguiente paso."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mafe-btn-outline mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
                >
                  Quiero CONSULTORÍA
                </a>
              </article>

              <article className="mafe-card mafe-stagger flex flex-col rounded-2xl p-6 sm:p-8" style={staggerStyle(1, 100)}>
                <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 1</p>
                <h3 className="mafe-section-label mt-2 text-2xl font-semibold">PDM FLORAL DIGITAL</h3>
                <p className="mafe-price mt-1 text-3xl font-semibold">${formatCop(3197000)} COP</p>
                <p className="mafe-muted mt-1 text-sm">USD 1.017</p>

                {DIGITAL_SECTIONS.map((block) => (
                  <PackageBlock key={block.label} label={block.label} items={block.items} />
                ))}

                <div className="mafe-payment-box mt-6 rounded-lg p-4">
                  <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
                  <p className="mafe-card-text mt-2 text-sm">
                    Fase 1: <strong>${formatCop(1598500)} COP</strong> al firmar
                  </p>
                  <p className="mafe-muted text-sm">
                    Fase 2: <strong>${formatCop(1598500)} COP</strong> a los 15 días
                  </p>
                </div>

                <a
                  href={waUrl(
                    "Hola Fluxa Method. Revisé la propuesta de Lamore Fiori y me interesa PDM FLORAL DIGITAL ($3.197.000 COP). Quiero coordinar el siguiente paso."
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
                style={staggerStyle(2, 140)}
              >
                <span className="mafe-badge mafe-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                  Recomendado
                </span>
                <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 2</p>
                <h3 className="mafe-section-label mt-2 text-2xl font-semibold">PDM FLORAL PRO</h3>
                <p className="mafe-price mt-1 text-3xl font-semibold">${formatCop(4897000)} COP</p>
                <p className="mafe-muted mt-1 text-sm">USD 1.557</p>
                <p className="mafe-section-label mt-4 text-sm font-medium">Todo lo del paquete Digital, más:</p>

                {PRO_EXTRA_SECTIONS.map((block) => (
                  <PackageBlock key={block.label} label={block.label} items={block.items} />
                ))}

                <div className="mafe-payment-box mt-6 rounded-lg p-4">
                  <p className="mafe-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
                  <p className="mafe-card-text mt-2 text-sm">
                    Fase 1: <strong>${formatCop(2448500)} COP</strong> al firmar
                  </p>
                  <p className="mafe-muted text-sm">
                    Fase 2: <strong>${formatCop(2448500)} COP</strong> a los 15 días
                  </p>
                </div>

                <a
                  href={waUrl(
                    "Hola Fluxa Method. Revisé la propuesta de Lamore Fiori y me interesa PDM FLORAL PRO ($4.897.000 COP). Quiero coordinar el siguiente paso."
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
                  <div className="mafe-compare-head grid grid-cols-3 gap-1 px-2 py-3 text-[10px]">
                    <span className="text-center">
                      Consultoría
                      <span className="mafe-compare-price block">$1.1M</span>
                    </span>
                    <span className="text-center">
                      Digital
                      <span className="mafe-compare-price block">$3.197M</span>
                    </span>
                    <span className="text-center mafe-accent-text">
                      Pro
                      <span className="mafe-compare-price block">$4.897M</span>
                    </span>
                  </div>
                  {PLAN_COMPARISON.map((row) => (
                    <div key={row.feature} className="mafe-compare-row px-2 py-3.5">
                      <p className="mafe-card-text text-xs leading-snug">{row.feature}</p>
                      <div className="mt-2.5 grid grid-cols-3 gap-1">
                        <div className="flex min-h-[2rem] items-center justify-center px-0.5">
                          <CompareCell value={row.consultoria} />
                        </div>
                        <div className="flex min-h-[2rem] items-center justify-center px-0.5">
                          <CompareCell value={row.digital} />
                        </div>
                        <div className="flex min-h-[2rem] items-center justify-center px-0.5">
                          <CompareCell value={row.pro} isPro />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden overflow-x-auto sm:block">
                  <div className="mafe-compare-head grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-2 px-5 py-3">
                    <span>Característica</span>
                    <span className="text-center">
                      Consultoría <span className="mafe-compare-price block">${formatCop(1100000)}</span>
                    </span>
                    <span className="text-center">
                      Digital <span className="mafe-compare-price block">${formatCop(3197000)}</span>
                    </span>
                    <span className="text-center mafe-accent-text">
                      Pro <span className="mafe-compare-price block">${formatCop(4897000)}</span>
                    </span>
                  </div>
                  {PLAN_COMPARISON.map((row) => (
                    <div
                      key={row.feature}
                      className="mafe-compare-row grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center gap-2 px-5 py-3.5"
                    >
                      <p className="mafe-card-text text-sm leading-snug">{row.feature}</p>
                      <div className="flex justify-center">
                        <CompareCell value={row.consultoria} />
                      </div>
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
                  <h3 className="mafe-section-label mt-2 text-2xl font-semibold">
                    ${formatCop(plan.price)} <span className="text-base font-medium">COP/mes</span>
                  </h3>
                  <p className="mafe-muted mt-0.5 text-xs">USD {formatUsd(plan.usd)}/mes</p>
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
            title="Dos rutas posibles según dónde estás hoy y hacia dónde quieres llegar."
          >
            <div className="mafe-stagger-group grid gap-4 md:grid-cols-2" data-reveal>
              <article className="mafe-card mafe-stagger rounded-xl p-6" style={staggerStyle(0)}>
                <p className="mafe-eyebrow">Hoy</p>
                <ul className="mafe-muted mt-4 space-y-2 text-sm leading-relaxed">
                  <li>Catálogo en Canva y todos los pedidos por chat</li>
                  <li>Talleres y eventos sin página, cupos ni pago anticipado</li>
                  <li>Fechas especiales sin campaña ni reactivación</li>
                </ul>
              </article>
              <article className="mafe-card mafe-card--featured mafe-stagger rounded-xl p-6" style={staggerStyle(1)}>
                <p className="mafe-eyebrow">En 60 días</p>
                <ul className="mafe-card-text mt-4 space-y-2 text-sm leading-relaxed">
                  <li>Catálogo web con pedido y pago en línea</li>
                  <li>Talleres con calendario y cupos, y eventos corporativos con canal de cotización</li>
                  <li>Método PDM Floral como sistema, con pauta conectada al catálogo</li>
                </ul>
              </article>
            </div>

            <div className="mafe-stagger-group mt-6 grid gap-4 sm:grid-cols-3" data-reveal>
              <article className="mafe-card mafe-stagger rounded-xl p-5" style={staggerStyle(0)}>
                <p className="mafe-section-label font-semibold">PDM CONSULTORÍA</p>
                <p className="mafe-price mt-1 text-xl font-semibold">${formatCop(1100000)} COP</p>
                <p className="mafe-muted mt-0.5 text-xs">USD 350</p>
              </article>
              <article className="mafe-card mafe-stagger rounded-xl p-5" style={staggerStyle(1)}>
                <p className="mafe-section-label font-semibold">PDM FLORAL DIGITAL</p>
                <p className="mafe-price mt-1 text-xl font-semibold">${formatCop(3197000)} COP</p>
                <p className="mafe-muted mt-0.5 text-xs">USD 1.017</p>
              </article>
              <article className="mafe-card mafe-card--featured mafe-stagger rounded-xl p-5" style={staggerStyle(2)}>
                <p className="mafe-section-label font-semibold">PDM FLORAL PRO</p>
                <p className="mafe-price mt-1 text-xl font-semibold">${formatCop(4897000)} COP</p>
                <p className="mafe-muted mt-0.5 text-xs">USD 1.557</p>
                <p className="mafe-muted mt-1 text-xs">Recomendado</p>
              </article>
            </div>

            <p data-reveal className="mafe-reveal mafe-muted mt-8 text-sm">
              Activos quedan en sus cuentas. Pagos en fases. 30 días de soporte post entrega.
            </p>
          </SectionBlock>

          <section id="cierre" className="scroll-mt-28 px-4 pb-24 sm:px-6">
            <div className="mafe-card mafe-cierre relative mx-auto max-w-6xl rounded-2xl p-7 text-center sm:p-12">
              <p className="mafe-eyebrow">Siguiente paso</p>
              <h2 className="mafe-heading mt-3 text-2xl sm:text-3xl lg:text-4xl">¿Lista para construir el sistema?</h2>
              <p className="mafe-lead mx-auto mt-4 max-w-2xl">
                Si cerramos esta semana, el sistema queda listo para la temporada de grados y los cierres corporativos
                de diciembre.
              </p>
              <ClosingPlanPicker />
              <p className="mafe-muted mt-10 text-[11px] uppercase tracking-[0.18em]">
                Fluxa Method | Método PDM Floral
              </p>
            </div>
          </section>

          <footer className="px-4 pb-24 pt-2 text-center text-[11px] uppercase tracking-[0.16em] text-[var(--mafe-muted-light)] sm:px-6">
            Lamore Fiori |{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              @lamore.fiori
            </a>
            {" | Fluxa Method"}
          </footer>

          <a href="#planes" className="mafe-floating-cta">
            Ver planes
          </a>
        </div>
      </div>
    </main>
  );
}
