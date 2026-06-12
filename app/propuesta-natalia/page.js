"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const GALS_LOGO_SRC = "/imagenes/gals-studio-logo.png";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "donde", label: "Dónde estás" },
  { id: "transformacion", label: "Transformación" },
  { id: "paquetes", label: "Paquetes" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "reconsumo", label: "Reconsumo" },
  { id: "cierre", label: "Cierre" },
];

const FRICTION_CARDS = [
  "Reservas que llegan por WhatsApp y se pierden si no respondes",
  "Página en Canva que informa pero no convierte",
  "Productos digitales sin funnel de venta real",
  "16K seguidores sin sistema que los lleve a comprar",
  "Ventas que dependen de tu presencia constante",
  "Si no respondes un domingo, se pierde la venta",
];

const TRANSFORMATIONS = [
  {
    before: "Sin entrada única de marca en el ecosistema",
    after: "Homepage de identidad GAL'S que redirige a landings y VSLs",
  },
  { before: "Reservas manuales por WhatsApp", after: "Landing con Bewe integrado — reservas automáticas 24/7" },
  { before: "Página Canva informativa", after: "Landing con VSL y CTA directo que convierte" },
  { before: "Alumna llega y no vuelve a saber de Natalia", after: "Secuencia automática de bienvenida y seguimiento" },
  { before: "Reset se vende manualmente", after: "Landing del Reset con checkout y email automático" },
  { before: "16K seguidores sin sistema", after: "Funnel que lleva de seguidor a alumna automáticamente" },
];

const EXECUTION_PHASES = [
  {
    num: 1,
    when: "Semanas 1–2",
    title: "Base",
    items: "Homepage marca + hub · Landing GAL'S + Bewe · Landing Reset · WhatsApp básico",
    proOnly: false,
  },
  {
    num: 2,
    when: "Semanas 3–4",
    title: "Contenido",
    items: "VSL + Notion + estrategia + guiones + UGC",
    proOnly: false,
  },
  {
    num: 3,
    when: "Semanas 5–6",
    title: "Escala",
    items: "Hub ampliado · Landings adicionales · Meta Ads · email marketing",
    proOnly: true,
  },
  {
    num: 4,
    when: "Mes 2",
    title: "Optimización",
    items: "Campañas + capacitaciones IA + GPTs + ebook",
    proOnly: true,
  },
];

const PLAN_COMPARISON = [
  {
    feature: "Homepage de marca e identidad (hub a landings y VSLs)",
    digital: true,
    pro: true,
  },
  { feature: "Landing principal GAL'S Studio + integración Bewe", digital: true, pro: true },
  { feature: "Landing GAL'S Reset", digital: true, pro: true },
  { feature: "Landing experiencias de bienestar", digital: false, pro: true },
  { feature: "Landing ebook / producto digital", digital: false, pro: true },
  { feature: "VSL estratégico", digital: "1 corto", pro: "2 (principal + ads)" },
  { feature: "Automatización WhatsApp", digital: "Básica", pro: "Completa + reactivación" },
  { feature: "Secuencia bienvenida nuevas alumnas", digital: false, pro: true },
  { feature: "Laboratorio Notion GAL'S", digital: true, pro: true },
  { feature: "Estrategia de contenido", digital: "60 días", pro: "90 días" },
  { feature: "Guiones reels orgánicos", digital: "15", pro: "25" },
  { feature: "Guiones para ads", digital: "10", pro: "15" },
  { feature: "Guiones UGC alumnas", digital: "3", pro: "5" },
  { feature: "Meta Ads + creativos", digital: false, pro: "5 listos + gestión 1 mes" },
  { feature: "Email marketing automatizado", digital: false, pro: true },
  { feature: "Capacitación IA (Zoom + GPTs + ebook)", digital: true, pro: true },
  { feature: "Sesiones Zoom con el equipo", digital: "3", pro: "3" },
];

const DIGITAL_SECTIONS = [
  {
    label: "Arquitectura Digital",
    items: [
      "Homepage de marca e identidad — entrada única del ecosistema GAL'S",
      "Hub central que redirige a cada landing, VSL y oferta según el recorrido",
      "Landing principal GAL'S Studio con integración Bewe",
      "Landing GAL'S Reset",
      "VSL corto para landing principal",
      "Automatización WhatsApp básica",
    ],
  },
  {
    label: "Contenido",
    items: [
      "Laboratorio Notion personalizado para GAL'S",
      "Estrategia de contenido dirigida al nuevo sistema",
      "15 guiones de reels orgánicos",
      "10 guiones para ads",
      "3 guiones UGC para alumnas",
    ],
  },
  {
    label: "Capacitación IA & Ventas",
    items: [
      "3 sesiones Zoom con el equipo",
      "GPTs entrenados para bienestar y pilates",
      "Ebook de prompts personalizado",
      "Guía de herramientas IA",
    ],
  },
];

const PRO_EXTRA_SECTIONS = [
  {
    label: "Arquitectura Digital ampliada",
    items: [
      "Homepage actualizada con nuevas rutas a landings y VSLs del plan Pro",
      "Landing experiencias de bienestar",
      "Landing ebook/producto digital",
      "2 VSLs (principal + corto para ads)",
      "Automatización WhatsApp completa (reservas + seguimiento + reactivación)",
      "Secuencia de bienvenida para nuevas alumnas",
    ],
  },
  {
    label: "Contenido ampliado",
    items: [
      "Estrategia 90 días",
      "25 guiones de reels orgánicos",
      "15 guiones para ads",
      "5 guiones UGC",
      "3 guiones para historias de ventas",
    ],
  },
  {
    label: "Meta Ads",
    items: [
      "Estrategia completa de campañas",
      "Configuración pixel y analítica",
      "5 creativos listos para lanzar",
      "Segmentación audiencia bienestar Colombia",
      "Gestión y optimización primer mes",
    ],
  },
  {
    label: "Email Marketing",
    items: [
      "Lista de emails integrada al sistema",
      "Secuencia de bienvenida automática",
      "4 emails mensuales estratégicos",
      "Emails automáticos fechas especiales",
      "Email de reactivación alumnas inactivas",
    ],
  },
];

function staggerStyle(index, step = 90) {
  return { "--delay": `${index * step}ms` };
}

function CountUp({ value, prefix = "$", suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    const duration = 1100;
    const start = performance.now();
    let frameId = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, value]);

  return (
    <span ref={ref} className="gals-price">
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function PackageMark() {
  return <span className="gals-mark" aria-hidden />;
}

function CompareCell({ value, isPro }) {
  if (value === true) {
    return (
      <span className="gals-compare-check" aria-label="Incluido">
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="gals-compare-x" aria-label="No incluido">
        ✗
      </span>
    );
  }
  return <span className={`gals-compare-text ${isPro ? "gals-compare-text--pro" : ""}`}>{value}</span>;
}

function PlanCompareTable() {
  return (
    <div className="gals-compare-wrap mt-12 overflow-x-auto rounded-xl" data-reveal>
      <div className="min-w-[300px]">
        <div className="gals-compare-head grid grid-cols-[1fr_72px_72px] gap-2 px-4 py-4 sm:grid-cols-[1fr_96px_96px] sm:px-6">
          <span>Característica</span>
          <span className="text-center">
            Digital
            <span className="gals-compare-price mt-0.5 block font-semibold normal-case">$947</span>
          </span>
          <span className="text-center">
            PRO ⭐
            <span className="gals-compare-price mt-0.5 block font-semibold normal-case">$1.497</span>
          </span>
        </div>
        {PLAN_COMPARISON.map((row) => (
          <div
            key={row.feature}
            className="gals-compare-row grid grid-cols-[1fr_72px_72px] items-center gap-2 px-4 py-3 sm:grid-cols-[1fr_96px_96px] sm:px-6 sm:py-3.5"
          >
            <span className="gals-card-text text-left text-[11px] leading-snug sm:text-sm">{row.feature}</span>
            <div className="flex justify-center">
              <CompareCell value={row.digital} isPro={false} />
            </div>
            <div className="flex justify-center">
              <CompareCell value={row.pro} isPro />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HubArchitectureCard() {
  return (
    <article className="gals-hub-card gals-card rounded-2xl p-6 sm:p-8" data-reveal>
      <p className="gals-eyebrow">Arquitectura central · ambos planes</p>
      <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">
        Homepage de marca e identidad GAL&apos;S
      </h3>
      <p className="gals-lead mt-3 max-w-3xl">
        No es otra landing suelta: es la <strong className="font-semibold text-[var(--gals-heading)]">puerta de entrada</strong>{" "}
        del ecosistema. Presenta la marca GAL&apos;S Studio con identidad visual unificada y distribuye a cada alumna
        hacia el destino correcto — reservas Bewe, GAL&apos;S Reset, experiencias, productos digitales o el VSL que
        corresponda a su momento.
      </p>
      <ul className="gals-muted mt-5 grid gap-2 text-sm leading-relaxed sm:grid-cols-2">
        {[
          "Un solo link para bio, ads y WhatsApp",
          "Rutas claras a cada landing del sistema",
          "VSL integrado en el recorrido de conversión",
          "Bewe conectado sin reemplazar lo que ya funciona",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function SectionBlock({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  elevated = false,
  alt = false,
}) {
  return (
    <>
      <section
        id={id}
        className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "gals-section-alt" : ""}`}
      >
        <div
          className={`mx-auto w-full max-w-6xl ${elevated ? "gals-card rounded-2xl p-7 sm:p-10" : ""}`}
        >
          {(eyebrow || title || subtitle) && (
            <header data-reveal className="gals-reveal gals-reveal-header max-w-3xl">
              {eyebrow ? <p className="gals-eyebrow">{eyebrow}</p> : null}
              {title ? (
                <h2 className="gals-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
              ) : null}
              {subtitle ? <p className="gals-lead">{subtitle}</p> : null}
            </header>
          )}
          <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
        </div>
      </section>
    </>
  );
}

function PackageBlock({ label, items }) {
  return (
    <div className="mt-5 first:mt-0">
      <p className="gals-section-label flex items-center text-sm font-semibold">
        <PackageMark />
        {label}
      </p>
      <ul className="gals-muted mt-2 space-y-1.5 pl-1 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelinePhase({ phase, isLast, index }) {
  return (
    <div
      className="gals-timeline-phase gals-stagger relative flex gap-5 pb-10 last:pb-0"
      style={staggerStyle(index, 120)}
    >
      {!isLast ? (
        <span className="gals-timeline-line absolute left-[15px] top-9 bottom-0 w-px" aria-hidden />
      ) : null}
      <span className="gals-timeline-dot relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
        {phase.num}
      </span>
      <article className="gals-card min-w-0 flex-1 rounded-xl p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.18em]">{phase.when}</p>
          {phase.proOnly ? (
            <span className="gals-badge rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
              Solo Pro
            </span>
          ) : null}
        </div>
        <h3 className="gals-section-label mt-2 text-lg font-semibold">{phase.title}</h3>
        <p className="gals-muted mt-2 text-sm leading-relaxed">{phase.items}</p>
      </article>
    </div>
  );
}

export default function PropuestaNataliaPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionIds = useMemo(() => [...NAV_ITEMS.map((item) => item.id), "resumen"], []);

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
      .querySelectorAll("[data-reveal], .gals-stagger-group, .gals-timeline-group")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="gals-page">
      <div className="gals-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div
          className="gals-progress-bar h-full"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      <nav className="gals-nav sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="gals-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            GAL&apos;S Studio
          </span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`gals-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                activeSection === item.id ? "gals-nav-link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* 1 — HERO */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="gals-eyebrow tracking-[0.24em]">Método PDP Wellness™</p>
          <h1 className="gals-hero-title">
            Presencia Digital Profesional
            <br />
            para GAL&apos;S Studio
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Sistema digital para convertir tu comunidad en reservas y ventas recurrentes — sin depender de tu presencia
            manual.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {["Desde $947 USD", "4–6 semanas", "Landings + automatización + IA"].map((pill, i) => (
              <span
                key={pill}
                className="gals-pill gals-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal className="gals-reveal gals-hero-band mt-14 w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 sm:px-6 sm:py-12">
            <Image
              src={GALS_LOGO_SRC}
              alt="GAL'S Studio"
              width={640}
              height={640}
              priority
              className="gals-hero-logo h-40 w-auto max-w-full object-contain sm:h-48 md:h-52"
            />
            <p className="gals-hero-band-handle mt-4 text-center text-sm font-medium">@galstudio___</p>
          </div>
        </div>

        <p
          data-reveal
          className="gals-reveal gals-accent-text mx-auto mt-8 max-w-6xl px-4 text-sm font-medium sm:px-6"
        >
          Natalia Galvis <span className="gals-muted">/</span> GAL&apos;S Studio
        </p>
      </section>

      {/* 2 — DÓNDE ESTÁ */}
      <SectionBlock
        id="donde"
        eyebrow="01 — Punto de partida"
        title="Tienes audiencia, comunidad y contenido real."
        subtitle="Pero el sistema comercial todavía depende de que Natalia esté presente para que entren ventas."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {FRICTION_CARDS.map((text, i) => (
            <article
              key={text}
              className="gals-card gals-stagger rounded-xl p-5"
              style={staggerStyle(i, 90)}
            >
              <p className="gals-card-text text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 3 — TRANSFORMACIONES */}
      <SectionBlock
        id="transformacion"
        eyebrow="02 — Transformaciones concretas"
        title="De presencia manual a sistema que vende 24/7"
      >
        <div className="gals-stagger-group gals-table-wrap overflow-hidden rounded-xl" data-reveal>
          <div className="gals-table-head grid grid-cols-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
            <span>Antes</span>
            <span className="gals-accent-text">Después</span>
          </div>
          {TRANSFORMATIONS.map((row, i) => (
            <div
              key={row.before}
              className={`gals-stagger grid grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 ${
                i < TRANSFORMATIONS.length - 1 ? "gals-table-row" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="gals-muted text-sm leading-relaxed">{row.before}</p>
              <p
                className="gals-table-after gals-table-after-cell text-sm leading-relaxed"
                style={{ "--after-delay": `${i * 100 + 140}ms` }}
              >
                {row.after}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 4 — PAQUETES */}
      <SectionBlock
        id="paquetes"
        eyebrow="03 — Inversión"
        title="Elige el sistema que necesitas"
        subtitle="Ambos planes incluyen la homepage de marca como centro del ecosistema. La diferencia está en cuántas landings, VSLs y automatizaciones se conectan a ese hub."
        elevated
        alt
      >
        <HubArchitectureCard />

        <div className="gals-stagger-group mt-8 grid gap-6 lg:grid-cols-2" data-reveal>
          <article className="gals-card gals-stagger flex flex-col rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
            <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 1</p>
            <h3 className="gals-section-label mt-2 text-2xl font-semibold">GAL&apos;S DIGITAL</h3>
            <p className="mt-1 text-3xl font-semibold">
              <CountUp value={947} suffix=" USD" />
            </p>

            {DIGITAL_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}

            <div className="gals-payment-box mt-6 rounded-lg p-4">
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
              <p className="gals-card-text mt-2 text-sm">Fase 1: $474 USD al firmar</p>
              <p className="gals-muted text-sm">Fase 2: $473 USD a los 15 días</p>
            </div>

            {/* TODO: agregar link de cierre */}
            <a
              href="#"
              className="gals-btn-outline mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
            >
              Quiero GAL&apos;S DIGITAL
            </a>
          </article>

          <article
            className="gals-card gals-card--featured gals-stagger relative flex flex-col rounded-2xl p-6 sm:p-8"
            style={staggerStyle(1, 140)}
          >
            <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
              Recomendado
            </span>
            <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 2</p>
            <h3 className="gals-section-label mt-2 text-2xl font-semibold">GAL&apos;S PRO</h3>
            <p className="mt-1 text-3xl font-semibold">
              <CountUp value={1497} suffix=" USD" />
            </p>

            <p className="gals-section-label mt-4 text-sm font-medium">Todo lo del paquete anterior, más:</p>

            {PRO_EXTRA_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}

            <PackageBlock label="Capacitación IA" items={["Igual al paquete GAL'S DIGITAL"]} />

            <div className="gals-payment-box mt-6 rounded-lg p-4">
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
              <p className="gals-card-text mt-2 text-sm">Fase 1: $749 USD al firmar</p>
              <p className="gals-muted text-sm">Fase 2: $748 USD a los 15 días</p>
            </div>

            {/* TODO: agregar link de cierre */}
            <a
              href="#"
              className="gals-btn-solid mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Quiero GAL&apos;S PRO
            </a>
          </article>
        </div>

        <div className="gals-reveal mt-12" data-reveal>
          <h3 className="gals-section-label text-center text-lg font-semibold sm:text-xl">
            Comparativa lado a lado
          </h3>
          <p className="gals-muted mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed">
            Qué incluye cada plan en arquitectura, contenido, pauta y automatización.
          </p>
          <PlanCompareTable />
        </div>
      </SectionBlock>

      {/* 5 — EJECUCIÓN */}
      <SectionBlock id="ejecucion" eyebrow="04 — Ejecución" title="Orden de construcción">
        <div className="gals-timeline-group gals-stagger-group max-w-2xl" data-reveal>
          {EXECUTION_PHASES.map((phase, i) => (
            <TimelinePhase
              key={phase.num}
              phase={phase}
              index={i}
              isLast={i === EXECUTION_PHASES.length - 1}
            />
          ))}
        </div>

        <p
          data-reveal
          className="gals-reveal gals-callout mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
        >
          ⚡ La landing del Reset se construye en la fase 1 del proyecto.
        </p>
      </SectionBlock>

      {/* 6 — RECONSUMO */}
      <SectionBlock
        id="reconsumo"
        eyebrow="05 — Continuidad"
        title="Mantenimiento y crecimiento mes a mes"
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-6 lg:grid-cols-2" data-reveal>
          <article className="gals-card gals-stagger rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
            <p className="gals-eyebrow tracking-[0.18em]">Mantenimiento</p>
            <h3 className="gals-section-label mt-2 text-2xl font-semibold">
              <CountUp value={97} suffix=" USD/mes" />
            </h3>
            <p className="gals-muted mt-1 text-sm">Disponible desde el mes 3</p>
            <ul className="gals-muted mt-6 space-y-2 text-sm leading-relaxed">
              {[
                "Revisión y ajustes técnicos landing + Bewe",
                "Actualización automatizaciones WhatsApp",
                "8 nuevas ideas de contenido mensual",
                "1 email mensual estratégico",
                "Reporte mensual de métricas",
                "Soporte prioritario WhatsApp",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="gals-accent-text">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="gals-card gals-card--featured gals-stagger rounded-2xl p-6 sm:p-8"
            style={staggerStyle(1, 140)}
          >
            <p className="gals-eyebrow tracking-[0.18em]">Gestión completa</p>
            <h3 className="gals-section-label mt-2 text-2xl font-semibold">
              <CountUp value={250} suffix=" USD/mes" />
            </h3>
            <p className="gals-muted mt-1 text-sm">Disponible desde el mes 3</p>
            <p className="gals-section-label mt-4 text-sm font-medium">Todo lo anterior más:</p>
            <ul className="gals-muted mt-4 space-y-2 text-sm leading-relaxed">
              {[
                "Gestión activa campañas Meta Ads",
                "Optimización semanal de anuncios",
                "2 nuevos creativos mensuales",
                "Reporte de pauta — CPL, ROAS, resultados",
                "Recomendación de presupuesto mensual",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="gals-accent-text">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionBlock>

      {/* 7 — RESUMEN */}
      <SectionBlock id="resumen" eyebrow="06 — Resumen" title="Resumen ejecutivo">
        <div className="gals-stagger-group grid gap-5 md:grid-cols-3" data-reveal>
          {[
            {
              title: "Hoy",
              titleClass: "gals-muted",
              items: [
                "Audiencia sin sistema que la monetice",
                "Ventas manuales y dependientes de tu presencia",
                "Página que informa pero no convierte",
              ],
            },
            {
              title: "En 60 días",
              titleClass: "gals-eyebrow tracking-[0.2em]",
              items: [
                "Sistema digital que vende 24/7",
                "Alumnas nuevas llegando automáticamente",
                "Natalia enfocada en crear y enseñar — no en responder",
              ],
            },
            {
              title: "Inversión",
              titleClass: "gals-muted",
              items: [
                "Desde $947 USD",
                "2 fases de pago",
                "Activos quedan en tus cuentas",
                "30 días soporte post-entrega",
              ],
            },
          ].map((col, i) => (
            <article
              key={col.title}
              className="gals-card gals-stagger rounded-xl p-6"
              style={staggerStyle(i, 110)}
            >
              <h3 className={`text-[11px] font-medium uppercase tracking-[0.2em] ${col.titleClass}`}>
                {col.title}
              </h3>
              <ul className="gals-card-text mt-4 space-y-2.5 text-sm leading-relaxed">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 8 — CIERRE */}
      <SectionBlock id="cierre" elevated alt>
        <div className="text-center">
          <header data-reveal className="gals-reveal gals-reveal-header">
            <h2 className="gals-heading text-2xl sm:text-3xl md:text-4xl">¿Lista para construir el sistema?</h2>
            <p className="gals-lead mx-auto mt-4 max-w-xl">
              Si cerramos esta semana, arrancamos de inmediato con la fase 1 del sistema.
            </p>
          </header>

          <div
            data-reveal
            className="gals-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* TODO: agregar link de cierre */}
            <a
              href="#"
              className="gals-btn-outline inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium sm:w-auto"
            >
              Quiero GAL&apos;S DIGITAL — $947 USD
            </a>
            {/* TODO: agregar link de cierre */}
            <a
              href="#"
              className="gals-btn-solid inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto"
            >
              Quiero GAL&apos;S PRO — $1.497 USD
            </a>
          </div>

          <p className="gals-muted mt-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            Fluxa Method · Método PDP Wellness™
          </p>
        </div>
      </SectionBlock>
    </main>
  );
}
