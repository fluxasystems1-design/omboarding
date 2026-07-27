"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const SMASH_LOGO = "/imagenes/smash-tc/logo-smash.png";
const SMASH_GLOVES = "/imagenes/smash-tc/guantes.png";
const HERO_VIDEO =
  "https://res.cloudinary.com/fvermexb/video/upload/v1785129969/4761806-uhd_4096_2160_25fps_roiam4.mp4";
const SITE_URL = "https://smashboxtrainingcenter.fitcolatam.com";
const INSTAGRAM_URL = "https://www.instagram.com/smashbox_tc/";
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

function GloveSticker({ variant = "a", className = "" }) {
  return (
    <span className={`smash-glove smash-glove--${variant} ${className}`} aria-hidden>
      <Image src={SMASH_GLOVES} alt="" width={220} height={220} className="smash-glove-img" />
    </span>
  );
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

const FRICTION_CARDS = [
  "Reservas que llegan por WhatsApp y se enfrían si la respuesta tarda o se siente robótica",
  "Página conectada a FitCo que informa pero no genera confianza (sin testimonios, sin equipo, sin VSL)",
  "Dos planes de acceso ilimitado que compiten entre sí y bajan el margen",
  "12.9K seguidores sin sistema que los lleve a agendar",
  "Ventas que dependen de que el equipo esté siempre disponible",
  "Si nadie contesta rápido, se pierde el cliente",
  "Week Experience sin una sola venta desde su lanzamiento",
];

const TRANSFORMATIONS = [
  {
    before: "Sin entrada única de marca en el ecosistema",
    after: "Homepage/landing de identidad Smash que redirige a reservas y VSL",
  },
  {
    before: "Reservas manuales por WhatsApp, se pierden si no respondes",
    after: "Landing conectada a FitCo — reservas automáticas 24/7",
  },
  {
    before: "Página FitCo informativa sin evidencia de confianza",
    after: "Landing con VSL y testimonios que convierte",
  },
  {
    before: "Cliente llega y el seguimiento depende de la memoria del equipo",
    after: "Secuencia automática de bienvenida y seguimiento",
  },
  {
    before: "Week Experience se vende manualmente sin resultado",
    after: "Landing propia con checkout y seguimiento automático",
  },
  {
    before: "12.9K seguidores sin sistema",
    after: "Funnel que lleva de seguidor a cliente automáticamente",
  },
];

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Captación y marca",
    text: "Landing + automatización WhatsApp/Instagram para captar y convertir tráfico nuevo (ambos planes).",
    tag: "Ambos planes",
  },
  {
    step: "02",
    title: "Contenido y ventas",
    text: "Laboratorio + guiones + capacitación de cierre (ambos planes).",
    tag: "Ambos planes",
  },
  {
    step: "03",
    title: "Crecimiento continuo",
    text: "Mantenimiento, pauta y optimización mensual (desde mes 3).",
    tag: "Desde mes 3",
  },
];

const DIGITAL_SECTIONS = [
  {
    label: "Arquitectura Digital",
    items: [
      "Landing de marca e identidad Smash — entrada única conectada a FitCo",
      "VSL corto para landing principal",
      "Automatización WhatsApp/Instagram básica",
    ],
  },
  {
    label: "Contenido",
    items: [
      "Laboratorio Notion personalizado para Smash",
      "Estrategia de contenido — 60 días",
      "15 guiones de reels orgánicos",
      "10 guiones para ads",
    ],
  },
  {
    label: "Capacitación IA & Ventas",
    items: ["3 sesiones Zoom con el equipo", "Guion de cierre y seguimiento comercial"],
  },
];

const PRO_EXTRA_SECTIONS = [
  {
    label: "Arquitectura ampliada",
    items: [
      "Landing ampliada para Week Experience / producto adicional",
      "2 VSLs (principal + corto para ads)",
      "Automatización completa (reservas + seguimiento + reactivación de leads fríos)",
      "Secuencia de bienvenida para nuevos clientes",
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
  { feature: "Landing de marca conectada a FitCo", digital: true, pro: true },
  { feature: "VSL estratégico", digital: "1 corto", pro: "2 (principal + ads)" },
  { feature: "Automatización WhatsApp/Instagram", digital: "Básica", pro: "Completa + reactivación" },
  { feature: "Secuencia de bienvenida nuevos clientes", digital: false, pro: true },
  { feature: "Landing adicional (Week Experience)", digital: false, pro: true },
  { feature: "Laboratorio Notion personalizado", digital: true, pro: true },
  { feature: "Estrategia de contenido", digital: "60 días", pro: "90 días" },
  { feature: "Guiones reels orgánicos", digital: "15", pro: "25" },
  { feature: "Guiones para ads", digital: "10", pro: "15" },
  { feature: "Guiones UGC", digital: false, pro: "5" },
  { feature: "Meta Ads + creativos", digital: false, pro: "5 listos + gestión 1 mes" },
  { feature: "Configuración pixel y analítica", digital: false, pro: true },
  { feature: "Capacitación IA (Zoom + guion)", digital: "3 sesiones", pro: "3 sesiones" },
  { feature: "Guion de cierre y seguimiento", digital: true, pro: true },
];

const EXECUTION_PHASES = [
  {
    num: 1,
    when: "Semanas 1–2",
    title: "Base",
    items: "Landing de marca conectada a FitCo · Automatización WhatsApp/Instagram básica",
    proOnly: false,
  },
  {
    num: 2,
    when: "Semanas 3–4",
    title: "Contenido",
    items: "VSL · Laboratorio Notion · Estrategia · Guiones",
    proOnly: false,
  },
  {
    num: 3,
    when: "Semanas 5–6",
    title: "Escala",
    items: "Landing ampliada · Automatización completa · Meta Ads",
    proOnly: true,
  },
  {
    num: 4,
    when: "Mes 2",
    title: "Optimización",
    items: "Campañas + capacitaciones IA + ajustes con datos reales",
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
      "Revisión técnica mensual (landing + FitCo)",
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
      "Revisión y ajustes técnicos landing + FitCo",
      "Actualización de automatizaciones WhatsApp",
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
      "Optimización semanal de anuncios",
      "2 nuevos creativos mensuales",
      "Reporte de pauta — CPL, ROAS, resultados",
      "Reporte mensual de métricas",
      "Recomendación de presupuesto mensual",
    ],
  },
];

const CLOSING_PLANS = [
  {
    id: "digital",
    name: "SMASH DIGITAL",
    price: 957,
    phase1: 479,
    phase2: 478,
    note: "Arquitectura + contenido + capacitación",
    recommended: false,
  },
  {
    id: "pro",
    name: "SMASH PRO",
    price: 1697,
    phase1: 849,
    phase2: 848,
    note: "Sistema completo + Meta Ads + Week Experience",
    recommended: true,
  },
];

function PackageBlock({ label, items }) {
  return (
    <div className="mt-5">
      <p className="smash-section-label text-xs font-semibold uppercase tracking-[0.16em]">{label}</p>
      <ul className="smash-muted mt-2 space-y-1.5 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="smash-accent-text shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareCell({ value, isPro = false }) {
  if (value === true) return <span className="smash-compare-check">✓</span>;
  if (value === false) return <span className="smash-compare-x">✗</span>;
  return (
    <span className={`smash-compare-text ${isPro ? "smash-compare-text--pro" : ""}`}>{value}</span>
  );
}

function TimelinePhase({ phase, index, isLast }) {
  return (
    <div className="smash-timeline-phase smash-stagger relative flex gap-4 pb-8" style={staggerStyle(index, 110)}>
      <div className="flex flex-col items-center">
        <span className="smash-timeline-dot flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">
          {phase.num}
        </span>
        {!isLast ? <span className="smash-timeline-line mt-1 w-0.5 flex-1 min-h-[2.5rem]" aria-hidden /> : null}
      </div>
      <div className="pb-1">
        <p className="smash-muted text-[11px] font-medium uppercase tracking-[0.16em]">{phase.when}</p>
        <h3 className="smash-section-label mt-1 text-lg font-semibold">
          {phase.title}
          {phase.proOnly ? <span className="smash-badge ml-2 rounded-full px-2 py-0.5 text-[9px]">Solo Pro</span> : null}
        </h3>
        <p className="smash-muted mt-2 text-sm leading-relaxed">{phase.items}</p>
      </div>
    </div>
  );
}

function ClosingPlanPicker() {
  const [selectedId, setSelectedId] = useState("pro");
  const selected = CLOSING_PLANS.find((p) => p.id === selectedId) ?? CLOSING_PLANS[1];

  return (
    <div data-reveal className="smash-reveal mt-10 text-left">
      <p className="smash-eyebrow text-center">Resumen de tu elección</p>
      <h3 className="smash-heading mt-2 text-center text-xl sm:text-2xl">¿Qué paquete eliges?</h3>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {CLOSING_PLANS.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelectedId(plan.id)}
            className={`smash-plan-pick smash-card rounded-xl p-4 text-left sm:p-5 ${
              selectedId === plan.id ? "smash-plan-pick--selected" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="smash-section-label text-sm font-semibold sm:text-base">{plan.name}</p>
                <p className="smash-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
              </div>
              {plan.recommended ? (
                <span className="smash-badge shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider">
                  Top
                </span>
              ) : null}
            </div>
            <p className="smash-price mt-4 text-2xl font-semibold">${formatUsd(plan.price)} USD</p>
          </button>
        ))}
      </div>

      <div className="smash-payment-box mt-8 rounded-xl p-5 sm:p-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--smash-border)] pb-3">
            <p className="smash-muted">Paquete elegido</p>
            <p className="smash-section-label font-semibold">{selected.name}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="smash-muted">Total</p>
            <p className="smash-price font-semibold">${formatUsd(selected.price)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="smash-muted">Fase 1 (al firmar)</p>
            <p className="smash-card-text font-medium">${formatUsd(selected.phase1)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="smash-muted">Fase 2 (a los 15 días)</p>
            <p className="smash-card-text font-medium">${formatUsd(selected.phase2)} USD</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={waUrl(
              `Hola Fluxa Method. Revisé la propuesta Smash TC y quiero confirmar el paquete ${selected.name} ($${formatUsd(selected.price)} USD).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="smash-btn-solid inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto sm:min-w-[300px]"
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
    <section id={id} className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "smash-section-alt" : ""}`}>
      <div className={`mx-auto w-full max-w-6xl ${elevated ? "smash-card rounded-2xl p-7 sm:p-10" : ""}`}>
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="smash-reveal smash-reveal-header max-w-3xl">
            {eyebrow ? <p className="smash-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="smash-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2> : null}
            {subtitle ? <p className="smash-lead">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaSmashTcPage() {
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
      .querySelectorAll("[data-reveal], .smash-stagger-group, .smash-timeline-group")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="smash-page">
      <div className="smash-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="smash-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className="smash-nav sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="smash-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            Smash TC
          </span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`smash-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                activeSection === item.id ? "smash-nav-link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="smash-hero-mesh scroll-mt-28 pb-16 pt-16 lg:pb-20 lg:pt-24">
        <div className="smash-hero-bg" aria-hidden>
          <video className="smash-hero-bg-video" autoPlay muted loop playsInline preload="auto">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="smash-hero-bg-overlay" />
        </div>
        <div data-reveal className="smash-reveal smash-stagger-group smash-hero-copy relative z-[2] mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="smash-eyebrow smash-eyebrow--on-video tracking-[0.24em]">Método PDP Combat™</p>
          <h1 className="smash-hero-title smash-hero-title--on-video">
            Presencia Digital
            <br />
            para Smash TC
          </h1>
          <p className="smash-lead smash-lead--on-video mt-5 max-w-xl">
            Convierte tu comunidad en clases llenas — sin depender del WhatsApp.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {["Desde $957 USD", "4–6 semanas", "Landings + IA"].map((pill, i) => (
              <span
                key={pill}
                className="smash-pill smash-pill--on-video smash-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal className="smash-reveal smash-hero-band relative z-[2] mt-14 w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 sm:px-6 sm:py-12">
            <Image
              src={SMASH_LOGO}
              alt="Smash Box Training Center"
              width={640}
              height={640}
              priority
              className="smash-hero-logo h-40 w-auto max-w-full object-contain sm:h-48 md:h-52"
            />
            <p className="smash-hero-band-handle mt-4 text-center text-sm font-medium">@smashbox_tc</p>
          </div>
        </div>

        <div className="relative z-[2] mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <div
            data-reveal
            className="smash-reveal smash-card flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl px-5 py-4 text-center text-xs sm:text-sm"
          >
            <span className="smash-muted">
              Comunidad{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="smash-accent-text font-semibold">
                @smashbox_tc
              </a>{" "}
              · 12.9K seguidores
            </span>
            <span className="hidden h-4 w-px bg-[var(--smash-border)] sm:block" aria-hidden />
            <span className="smash-muted">
              Sitio actual{" "}
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="smash-accent-text font-semibold">
                FitCo Latam
              </a>
            </span>
            <span className="hidden h-4 w-px bg-[var(--smash-border)] sm:block" aria-hidden />
            <span className="smash-muted">Propuesta por Fluxa Method</span>
          </div>
        </div>

        <div className="relative z-[2] mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6" data-reveal>
          <a
            href="#planes"
            className="smash-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Ver planes
          </a>
        </div>
      </section>

      <SectionBlock
        id="donde"
        eyebrow="01 — Punto de partida"
        title="Tienes audiencia, coaches y contenido real."
        subtitle="Pero el sistema comercial todavía depende de que alguien responda rápido y con calidez para que entren clientes."
        elevated
        alt
      >
        <div className="relative">
          <GloveSticker variant="donde" />
          <div className="smash-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
            {FRICTION_CARDS.map((text, i) => (
              <article key={text} className="smash-card smash-stagger rounded-xl p-5" style={staggerStyle(i, 90)}>
                <p className="smash-card-text text-sm leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        id="transformacion"
        eyebrow="02 — Transformaciones concretas"
        title="De presencia manual a sistema que convierte 24/7"
      >
        <div className="smash-stagger-group smash-table-wrap overflow-hidden rounded-xl" data-reveal>
          <div className="smash-table-head grid grid-cols-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
            <span>Antes</span>
            <span className="smash-accent-text">Después</span>
          </div>
          {TRANSFORMATIONS.map((row, i) => (
            <div
              key={row.before}
              className={`smash-stagger grid grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 ${
                i < TRANSFORMATIONS.length - 1 ? "smash-table-row" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="smash-muted text-sm leading-relaxed">{row.before}</p>
              <p
                className="smash-table-after smash-table-after-cell text-sm leading-relaxed"
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
        eyebrow="03 — Inversión"
        title="Elige tu ruta"
        subtitle="Arquitectura central — presente en ambos planes: landing de marca conectada a FitCo, automatización WhatsApp/Instagram, laboratorio de contenido, capacitación de equipo."
        elevated
        alt
      >
        <div data-reveal className="smash-reveal">
          <h3 className="smash-section-label text-lg font-semibold">Cómo encaja todo</h3>
          <p className="smash-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Primero construimos captación y marca. Luego se integra con tu sistema de reservas FitCo ya existente.
            Después, mantenimiento y crecimiento mensual.
          </p>
          <div className="smash-stagger-group mt-6 grid gap-4 md:grid-cols-3" data-reveal>
            {JOURNEY_STEPS.map((item, i) => (
              <article key={item.step} className="smash-card smash-stagger rounded-xl p-5" style={staggerStyle(i, 100)}>
                <p className="smash-eyebrow">{item.step}</p>
                <h3 className="smash-section-label mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="smash-muted mt-2 text-sm leading-relaxed">{item.text}</p>
                <span className="smash-badge mt-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
                  {item.tag}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="smash-stagger-group relative mt-12 grid gap-6 lg:grid-cols-2" data-reveal>
          <GloveSticker variant="planes" />
          <article className="smash-card smash-stagger flex flex-col rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
            <p className="smash-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 1</p>
            <h3 className="smash-section-label mt-2 text-2xl font-semibold">SMASH DIGITAL</h3>
            <p className="smash-price mt-1 text-3xl font-semibold">${formatUsd(957)} USD</p>

            {DIGITAL_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}

            <div className="smash-payment-box mt-6 rounded-lg p-4">
              <p className="smash-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
              <p className="smash-card-text mt-2 text-sm">Fase 1: $479 USD al firmar</p>
              <p className="smash-muted text-sm">Fase 2: $478 USD a los 15 días</p>
            </div>

            <a
              href={waUrl(
                "Hola Fluxa Method. Revisé la propuesta Smash TC y me interesa SMASH DIGITAL ($957 USD). Quiero coordinar el siguiente paso."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="smash-btn-outline mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Quiero SMASH DIGITAL
            </a>
          </article>

          <article
            className="smash-card smash-card--featured smash-stagger relative flex flex-col rounded-2xl p-6 sm:p-8"
            style={staggerStyle(1, 140)}
          >
            <span className="smash-badge smash-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
              Recomendado
            </span>
            <p className="smash-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 2</p>
            <h3 className="smash-section-label mt-2 text-2xl font-semibold">SMASH PRO</h3>
            <p className="smash-price mt-1 text-3xl font-semibold">${formatUsd(1697)} USD</p>
            <p className="smash-section-label mt-4 text-sm font-medium">Todo lo del paquete anterior, más:</p>

            {PRO_EXTRA_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}

            <div className="smash-payment-box mt-6 rounded-lg p-4">
              <p className="smash-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
              <p className="smash-card-text mt-2 text-sm">Fase 1: $849 USD al firmar</p>
              <p className="smash-muted text-sm">Fase 2: $848 USD a los 15 días</p>
            </div>

            <a
              href={waUrl(
                "Hola Fluxa Method. Revisé la propuesta Smash TC y me interesa SMASH PRO ($1,697 USD). Quiero coordinar el siguiente paso."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="smash-btn-solid mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Quiero SMASH PRO
            </a>
          </article>
        </div>

        <div className="smash-reveal mt-12" data-reveal>
          <h3 className="smash-section-label text-center text-lg font-semibold sm:text-xl">Comparativa lado a lado</h3>
          <div className="smash-compare-wrap mt-6 rounded-xl">
            {/* Móvil: característica arriba, Digital / Pro debajo */}
            <div className="sm:hidden">
              <div className="smash-compare-head grid grid-cols-2 gap-2 px-3 py-3">
                <span className="text-center">
                  Digital
                  <span className="smash-compare-price block">${formatUsd(957)}</span>
                </span>
                <span className="text-center smash-accent-text">
                  Pro ⭐
                  <span className="smash-compare-price block">${formatUsd(1697)}</span>
                </span>
              </div>
              {PLAN_COMPARISON.map((row) => (
                <div key={row.feature} className="smash-compare-row px-3 py-3.5">
                  <p className="smash-card-text text-xs leading-snug">{row.feature}</p>
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

            {/* Desktop / tablet */}
            <div className="hidden overflow-x-auto sm:block">
              <div className="smash-compare-head grid grid-cols-[1.4fr_1fr_1fr] gap-2 px-5 py-3">
                <span>Característica</span>
                <span className="text-center">
                  Digital <span className="smash-compare-price block">${formatUsd(957)}</span>
                </span>
                <span className="text-center smash-accent-text">
                  Pro ⭐ <span className="smash-compare-price block">${formatUsd(1697)}</span>
                </span>
              </div>
              {PLAN_COMPARISON.map((row) => (
                <div
                  key={row.feature}
                  className="smash-compare-row grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 px-5 py-3.5"
                >
                  <p className="smash-card-text text-sm leading-snug">{row.feature}</p>
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

      <SectionBlock id="ejecucion" eyebrow="04 — Ejecución" title="Orden de construcción">
        <div className="smash-timeline-group smash-stagger-group max-w-2xl" data-reveal>
          {EXECUTION_PHASES.map((phase, i) => (
            <TimelinePhase key={phase.num} phase={phase} index={i} isLast={i === EXECUTION_PHASES.length - 1} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="reconsumo"
        eyebrow="05 — Continuidad"
        title="Mantenimiento y crecimiento mes a mes"
        subtitle="Disponible desde el mes 3"
        elevated
        alt
      >
        <div className="smash-stagger-group grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal>
          {RECONSUMO.map((plan, i) => (
            <article
              key={plan.name}
              className={`smash-card smash-stagger rounded-2xl p-6 sm:p-8 ${plan.featured ? "smash-card--featured" : ""}`}
              style={staggerStyle(i, 100)}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="smash-eyebrow tracking-[0.18em]">{plan.name}</p>
                {plan.featured ? (
                  <span className="smash-badge rounded-full px-2 py-0.5 text-[9px] uppercase">Más completo</span>
                ) : null}
              </div>
              <h3 className="smash-section-label mt-2 text-2xl font-semibold">${formatUsd(plan.price)} USD/mes</h3>
              {plan.note ? <p className="smash-muted mt-1 text-sm">{plan.note}</p> : null}
              <ul className="smash-muted mt-6 space-y-2 text-sm leading-relaxed">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="smash-accent-text">·</span>
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
        eyebrow="06 — Resumen ejecutivo"
        title="Dos rutas posibles según dónde estén hoy y hacia dónde quieran llegar."
      >
        <div className="smash-stagger-group grid gap-4 md:grid-cols-2" data-reveal>
          <article className="smash-card smash-stagger rounded-xl p-6" style={staggerStyle(0)}>
            <p className="smash-eyebrow">Hoy</p>
            <ul className="smash-muted mt-4 space-y-2 text-sm leading-relaxed">
              <li>Audiencia sin sistema que la monetice</li>
              <li>Ventas dependientes de que alguien esté siempre pendiente del WhatsApp</li>
              <li>Página conectada a FitCo que informa pero no convierte</li>
            </ul>
          </article>
          <article className="smash-card smash-card--featured smash-stagger rounded-xl p-6" style={staggerStyle(1)}>
            <p className="smash-eyebrow">En 60 días</p>
            <ul className="smash-card-text mt-4 space-y-2 text-sm leading-relaxed">
              <li>Sistema digital que responde y filtra 24/7</li>
              <li>Clientes nuevos llegando automáticamente</li>
              <li>Equipo enfocado en cerrar y entrenar — no en responder mensajes</li>
            </ul>
          </article>
        </div>

        <div className="smash-stagger-group mt-6 grid gap-4 sm:grid-cols-2" data-reveal>
          <article className="smash-card smash-stagger rounded-xl p-5" style={staggerStyle(0)}>
            <p className="smash-section-label font-semibold">SMASH DIGITAL</p>
            <p className="smash-price mt-1 text-xl font-semibold">${formatUsd(957)} USD</p>
          </article>
          <article className="smash-card smash-card--featured smash-stagger rounded-xl p-5" style={staggerStyle(1)}>
            <p className="smash-section-label font-semibold">SMASH PRO ⭐</p>
            <p className="smash-price mt-1 text-xl font-semibold">${formatUsd(1697)} USD</p>
            <p className="smash-muted mt-1 text-xs">Recomendado</p>
          </article>
        </div>

        <p data-reveal className="smash-reveal smash-muted mt-8 text-sm">
          Activos quedan en sus cuentas · Pagos en fases · 30 días de soporte post-entrega
        </p>
      </SectionBlock>

      <section id="cierre" className="scroll-mt-28 px-4 pb-24 sm:px-6">
        <div className="smash-card smash-cierre relative mx-auto max-w-6xl rounded-2xl p-7 text-center sm:p-12">
          <GloveSticker variant="cierre-left" />
          <GloveSticker variant="cierre-right" />
          <p className="smash-eyebrow">Siguiente paso</p>
          <h2 className="smash-heading mt-3 text-2xl sm:text-3xl lg:text-4xl">¿Listos para construir el sistema?</h2>
          <p className="smash-lead mx-auto mt-4 max-w-2xl">
            Si cerramos esta semana, arrancamos de inmediato con la fase 1 del proyecto.
          </p>
          <ClosingPlanPicker />
          <p className="smash-muted mt-10 text-[11px] uppercase tracking-[0.18em]">
            Fluxa Method · Método PDP Combat™
          </p>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-2 text-center text-[11px] uppercase tracking-[0.16em] text-[var(--smash-muted-light)] sm:px-6">
        Smash TC · @smashbox_tc · Fluxa Method
      </footer>

      <a href="#planes" className="smash-floating-cta">
        Ver planes
      </a>
    </main>
  );
}
