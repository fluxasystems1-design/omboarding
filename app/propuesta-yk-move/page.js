"use client";

import { useEffect, useMemo, useState } from "react";

const LOGO_SRC = "/imagenes/yk-move/logo.png";
const FLUXA_LOGO_SRC = "/imagenes/yk-move/fluxa-logo.png";
const HERO_IMAGE = "/imagenes/yk-move/hero.jpg";
const INSTAGRAM_URL = "https://www.instagram.com/yk_justmove/";
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
  { id: "continuidad", label: "Continuidad" },
  { id: "resumen", label: "Resumen" },
  { id: "cierre", label: "Cierre" },
];

const FICHA = [
  { label: "Instagram", value: "@yk_justmove · 2.957 seguidores y 181 publicaciones" },
  { label: "Especialidad", value: "ropa deportiva seamless premium" },
  { label: "Ubicación", value: "Cúcuta · envíos a nivel nacional" },
  { label: "Línea", value: "básicos, sets y cajas de regalo" },
  { label: "Sitio web", value: "sin tienda propia · link en bio con Canva" },
];

const ASSETS = [
  "Identidad visual premium y contenido con modelos reales",
  "Cuenta verificada",
  "Creadoras de fitness que ya siguen la cuenta",
  "Destacados de SHOP NOW y FAQ, que muestran que la gente ya pregunta cómo comprar",
  "Una nueva colección en camino",
];

const FRICTION = [
  {
    title: "Compra desde un link de Canva",
    text: "Sin carrito, sin pago en línea y sin inventario por talla y color. Meta tampoco puede leerlo como catálogo para pauta.",
  },
  {
    title: "Consultas manuales por DM",
    text: "Tallas, envíos y disponibilidad dependen de que alguien responda a tiempo.",
  },
  {
    title: "Contenido sin destino",
    text: "El interés llega, pero no hay una página donde cerrar la compra.",
  },
  {
    title: "Nueva colección sin canal de lanzamiento",
    text: "Nada que reciba el tráfico el día que sale.",
  },
];

const TRANSFORMATIONS = [
  { before: "Compra por link de Canva", after: "Tienda online con carrito, talla, color y pago" },
  { before: "Cada consulta atendida a mano", after: "DM automatizado que lleva directo al producto" },
  { before: "Contenido sin ruta de compra", after: "Contenido y pauta que terminan en la tienda" },
  { before: "Colección nueva sin plan", after: "Lanzamiento con calendario, contenido y pauta" },
  { before: "Producción suelta", after: "Producción de lanzamiento con modelos coordinadas" },
];

const JOURNEY = [
  { step: "Fase 1", title: "Tienda", text: "La tienda online lista para vender.", tag: "Todos los planes" },
  {
    step: "Fase 2",
    title: "Automatización y lanzamiento",
    text: "DM conectado a la tienda y estrategia de colección.",
    tag: "Lanzamiento y Studio",
  },
  { step: "Fase 3", title: "Producción", text: "Rodaje y modelos para el lanzamiento.", tag: "Solo Studio" },
  { step: "Fase 4", title: "Escala", text: "Pauta con catálogo conectado, desde el mes 2.", tag: "Lanzamiento y Studio" },
];

const TIENDA_SECTIONS = [
  {
    label: "Tienda online",
    items: [
      "Tienda en Shopify con catálogo organizado por colección",
      "Variantes por talla y color con control de inventario",
      "Pasarela de pago local configurada",
      "Envíos nacionales configurados",
      "Páginas de FAQ, envíos y cambios",
      "Link de la bio conectado a la tienda, en reemplazo del Canva",
    ],
  },
  {
    label: "Capacitación",
    items: ["Sesión para manejar productos, inventario y pedidos"],
  },
];

const LANZAMIENTO_SECTIONS = [
  ...TIENDA_SECTIONS.slice(0, 1),
  {
    label: "Instagram automatizado",
    items: [
      "Automatización de DM con palabras clave por producto y colección, que entrega el link directo a la tienda",
      "Respuestas automáticas a preguntas de tallas, envíos y cambios",
      "Catálogo conectado a Meta para anuncios de producto y retargeting",
    ],
  },
  {
    label: "Estrategia y contenido",
    items: [
      "Estrategia de lanzamiento de la nueva colección (antes, durante y después)",
      "Calendario de contenido de 60 días",
      "15 guiones de reels orgánicos",
      "10 guiones para ads",
      "Laboratorio Notion personalizado",
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
  {
    label: "Capacitación",
    items: [
      "Sesión para manejar productos, inventario y pedidos",
      "Sesión sobre la automatización y el seguimiento de ventas",
    ],
  },
];

const STUDIO_SECTIONS = [
  ...LANZAMIENTO_SECTIONS.slice(0, 3),
  {
    label: "Producción audiovisual de lanzamiento",
    items: [
      "Dirección creativa del lanzamiento",
      "1 día de rodaje en Cúcuta (hasta 8 horas)",
      "Fotografía de producto para la tienda",
      "Fotos lifestyle de la colección",
      "8 reels editados",
      "1 video principal de lanzamiento",
      "Retoque y edición, con 2 rondas de revisión",
    ],
  },
  {
    label: "Gestión de modelos",
    items: [
      "Casting y selección de modelos",
      "Coordinación de agenda y logística del día de rodaje",
      "Permisos de uso de imagen",
      "Dirección de modelos en set",
    ],
  },
  ...LANZAMIENTO_SECTIONS.slice(3),
];

const COMPARE_ROWS = [
  { feature: "Tienda Shopify con talla, color e inventario", tienda: true, lanzamiento: true, studio: true },
  { feature: "Pasarela de pago y envíos nacionales", tienda: true, lanzamiento: true, studio: true },
  { feature: "FAQ, envíos y cambios", tienda: true, lanzamiento: true, studio: true },
  { feature: "DM automatizado a la tienda", tienda: false, lanzamiento: true, studio: true },
  { feature: "Respuestas automáticas de tallas y envíos", tienda: false, lanzamiento: true, studio: true },
  { feature: "Catálogo conectado a Meta", tienda: false, lanzamiento: true, studio: true },
  { feature: "Estrategia de lanzamiento", tienda: false, lanzamiento: true, studio: true },
  { feature: "Calendario de contenido", tienda: false, lanzamiento: "60 días", studio: "60 días" },
  { feature: "Guiones de reels / ads", tienda: false, lanzamiento: "15 / 10", studio: "15 / 10" },
  { feature: "Laboratorio Notion", tienda: false, lanzamiento: true, studio: true },
  { feature: "Meta Ads con 5 creativos", tienda: false, lanzamiento: "Sí, 1 mes", studio: "Sí, 1 mes" },
  { feature: "Dirección creativa del lanzamiento", tienda: false, lanzamiento: false, studio: true },
  { feature: "Rodaje de 1 día", tienda: false, lanzamiento: false, studio: true },
  { feature: "Fotografía de producto y lifestyle", tienda: false, lanzamiento: false, studio: true },
  { feature: "8 reels editados y 1 video de lanzamiento", tienda: false, lanzamiento: false, studio: true },
  { feature: "Gestión de modelos", tienda: false, lanzamiento: false, studio: true },
  { feature: "Sesiones de capacitación", tienda: "1", lanzamiento: "2", studio: "2" },
];

const EXECUTION = [
  {
    num: "1",
    when: "Semanas 1 a 2",
    title: "Tienda",
    items: "Catálogo, variantes, pagos y envíos.",
    scope: null,
  },
  {
    num: "2",
    when: "Semanas 3 a 4",
    title: "Automatización y estrategia",
    items: "DM conectado, catálogo en Meta, calendario y guiones.",
    scope: "Lanzamiento y Studio",
  },
  {
    num: "3",
    when: "Semanas 4 a 5",
    title: "Producción",
    items: "Casting, rodaje y edición.",
    scope: "Studio",
  },
  {
    num: "4",
    when: "Mes 2",
    title: "Lanzamiento y optimización",
    items: "Pauta con catálogo y ajustes con datos reales.",
    scope: "Lanzamiento y Studio",
  },
];

const CONTINUIDAD = [
  {
    name: "Esencial",
    price: 130000,
    usd: 39,
    note: "Solo nivel técnico",
    featured: false,
    items: [
      "Revisión técnica mensual de la tienda",
      "Corrección de errores menores",
      "Soporte por WhatsApp limitado (2 consultas al mes)",
    ],
  },
  {
    name: "Mantenimiento",
    price: 305000,
    usd: 97,
    note: null,
    featured: false,
    items: [
      "Revisión y ajustes técnicos de la tienda",
      "Actualización de productos, precios y catálogo",
      "Actualización de las automatizaciones de Instagram",
      "Ajuste del laboratorio de contenido",
      "Soporte prioritario por WhatsApp",
    ],
  },
  {
    name: "Gestión completa",
    price: 790000,
    usd: 250,
    note: "Más completo",
    featured: true,
    items: [
      "Revisión y ajustes técnicos de la tienda",
      "Actualización de productos, precios y catálogo",
      "Actualización de las automatizaciones de Instagram",
      "Ajuste del laboratorio de contenido",
      "Soporte prioritario por WhatsApp",
      "Gestión activa de campañas en Meta Ads",
      "Optimización semanal de anuncios",
      "2 nuevos creativos al mes",
      "Campañas por nueva colección y fechas especiales",
      "Reporte de pauta (CPL, ROAS y resultados)",
      "Reporte mensual de métricas",
      "Recomendación de presupuesto mensual",
    ],
  },
];

const CLOSING_PLANS = [
  {
    id: "tienda",
    name: "PDM MOVE TIENDA",
    price: 3197000,
    usd: 1017,
    phase1: 1598500,
    phase2: 1598500,
    note: "Tienda online lista para vender",
    recommended: false,
  },
  {
    id: "lanzamiento",
    name: "PDM MOVE LANZAMIENTO",
    price: 4997000,
    usd: 1589,
    phase1: 2498500,
    phase2: 2498500,
    note: "Tienda, Instagram automatizado, contenido y pauta",
    recommended: true,
  },
  {
    id: "studio",
    name: "PDM MOVE STUDIO",
    price: 7297000,
    usd: 2320,
    phase1: 3648500,
    phase2: 3648500,
    note: "Todo el lanzamiento, con producción audiovisual y modelos",
    recommended: false,
  },
];

const SUMMARY_ROUTES = [
  {
    name: "PDM Move Tienda",
    price: "$3.197.000 COP (USD 1.017)",
    forYou: "Quieres dejar el Canva y tener tu tienda lista",
  },
  {
    name: "PDM Move Lanzamiento",
    price: "$4.997.000 COP (USD 1.589)",
    forYou: "Quieres tienda, Instagram automatizado y el lanzamiento con contenido y pauta",
  },
  {
    name: "PDM Move Studio",
    price: "$7.297.000 COP (USD 2.320)",
    forYou: "Quieres además producir el lanzamiento: rodaje, fotos, reels y modelos",
  },
];

function PackageBlock({ label, items }) {
  return (
    <div className="mt-5">
      <p className="yk-section-label text-xs uppercase tracking-[0.16em]">{label}</p>
      <ul className="yk-muted mt-2 space-y-1.5 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="shrink-0 text-[var(--yk-ink)]">*</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareCell({ value }) {
  if (value === true) return <span className="yk-compare-check">Sí</span>;
  if (value === false) return <span className="yk-compare-x">No</span>;
  return <span className="text-sm font-medium text-[var(--yk-ink)]">{value}</span>;
}

function ClosingPlanPicker() {
  const [selectedId, setSelectedId] = useState("lanzamiento");
  const selected = CLOSING_PLANS.find((p) => p.id === selectedId) ?? CLOSING_PLANS[1];

  return (
    <div data-reveal className="yk-reveal mt-10 text-left">
      <p className="yk-eyebrow text-center">Resumen de tu elección</p>
      <h3 className="yk-heading mt-2 text-center text-xl sm:text-2xl">¿Qué ruta eliges?</h3>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {CLOSING_PLANS.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelectedId(plan.id)}
            className={`yk-plan-pick yk-card rounded-xl p-4 text-left sm:p-5 ${
              selectedId === plan.id ? "yk-plan-pick--selected" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="yk-section-label text-sm sm:text-base">{plan.name}</p>
                <p className="yk-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
              </div>
              {plan.recommended ? (
                <span className="yk-badge shrink-0 px-2 py-0.5 text-[9px] uppercase">Top</span>
              ) : null}
            </div>
            <p className="yk-price mt-4 text-xl font-semibold sm:text-2xl">${formatCop(plan.price)} COP</p>
            <p className="yk-muted mt-0.5 text-xs">USD {formatUsd(plan.usd)}</p>
          </button>
        ))}
      </div>

      <div className="yk-payment-box mt-8 rounded-xl p-5 sm:p-6">
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--yk-border)] pb-3">
            <p className="yk-muted">Ruta elegida</p>
            <p className="yk-section-label">{selected.name}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="yk-muted">Total</p>
            <p className="yk-price font-semibold">${formatCop(selected.price)} COP</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="yk-muted">Fase 1 (al firmar)</p>
            <p className="font-medium text-[var(--yk-ink)]">${formatCop(selected.phase1)} COP</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="yk-muted">Fase 2 (a los 15 días)</p>
            <p className="font-medium text-[var(--yk-ink)]">${formatCop(selected.phase2)} COP</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={waUrl(
              `Hola Fluxa Method. Revisé la propuesta de YK Move y quiero confirmar ${selected.name} ($${formatCop(selected.price)} COP).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="yk-btn yk-btn-solid w-full sm:w-auto sm:min-w-[300px]"
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
    <section id={id} className={`yk-section ${alt ? "yk-section--alt" : ""}`}>
      <div className={`yk-section-inner ${elevated ? "yk-section-inner--card" : ""}`}>
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="yk-reveal max-w-3xl">
            {eyebrow ? <p className="yk-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="yk-heading">{title}</h2> : null}
            {subtitle ? <p className="yk-lead">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaYkMovePage() {
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
      { threshold: 0.25, rootMargin: "-10% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const nodes = Array.from(
      document.querySelectorAll("[data-reveal], .yk-stagger-group, .yk-timeline-group")
    );
    const show = (el) => el.classList.add("is-visible");

    const revealNear = () => {
      const limit = window.innerHeight * 0.98;
      nodes.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < limit) show(el);
      });
    };

    revealNear();
    nodes.forEach(show);
    const failsafe = window.setTimeout(() => nodes.forEach(show), 800);

    return () => {
      sectionObserver.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [sectionIds]);

  return (
    <main className="yk-page">
      <div className="yk-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="yk-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className="yk-nav">
        <div>
          <span className="yk-nav-brand">YK Move</span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`yk-nav-link ${activeSection === item.id ? "yk-nav-link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="yk-hero scroll-mt-28">
        <div className="yk-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="yk-hero-bg-img" src={HERO_IMAGE} alt="" />
          <div className="yk-hero-bg-overlay" />
        </div>

        <div className="yk-stagger-group yk-hero-copy is-visible">
          <div className="yk-hero-lockup">
            <div className="yk-hero-logo-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="yk-hero-logo" src={LOGO_SRC} alt="YK Move · Just Move" />
            </div>
            <span className="yk-hero-x" aria-hidden>
              ×
            </span>
            <div className="yk-hero-logo-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="yk-hero-fluxa" src={FLUXA_LOGO_SRC} alt="Fluxa" />
            </div>
          </div>
          <p className="yk-eyebrow yk-eyebrow--on-hero mt-6">Presencia Digital Profesional</p>
          <h1 className="yk-hero-brand">YK Move</h1>
          <p className="yk-hero-title">Presencia Digital Profesional</p>
          <p className="yk-lead yk-lead--on-hero">
            Que cada clienta que se enamora de un set de YK Move pueda comprarlo en ese mismo momento.
          </p>
          <div className="yk-pill-row">
            {["Desde $3.197.000 COP", "4 a 6 semanas", "Tienda · Lanzamiento · Studio"].map((pill) => (
              <span key={pill} className="yk-pill">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="yk-hero-band">
          <div className="yk-hero-band-inner">
            <p className="yk-hero-band-handle">@yk_justmove</p>
            <p className="yk-hero-band-sub">Ropa deportiva seamless premium · Cúcuta · Envíos a nivel nacional</p>
          </div>
        </div>

        <div className="yk-hero-cta">
          <a href="#planes" className="yk-btn yk-btn-solid">
            Ver planes
          </a>
        </div>
      </section>

      <SectionBlock
        id="donde"
        eyebrow="01. Punto de partida"
        title="Hoy una clienta ve un set, le encanta y escribe para preguntar si hay su talla. Si le responden rápido, compra. Si no, se queda con las ganas."
        subtitle="Cada publicación de YK Move hace su trabajo: enamora. Lo que falta es un lugar donde esa clienta pueda terminar la compra sin esperar a nadie."
        elevated
        alt
      >
        <div data-reveal className="yk-reveal">
          <p className="text-sm leading-relaxed text-[var(--yk-text)] sm:text-base">
            Pregunta por la talla, por el color, por el envío a su ciudad, y cada respuesta depende de que alguien esté
            disponible en ese momento.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--yk-text)] sm:text-base">
            Tienes lo más difícil de construir: una marca con identidad clara, producto que se ve bien en personas
            reales, una cuenta verificada y una comunidad donde ya hay creadoras de fitness siguiéndote. Lo que sigue es
            ponerle una tienda a esa vitrina.
          </p>
        </div>

        <div data-reveal className="yk-reveal mt-10">
          <h3 className="yk-section-label text-lg">Ficha técnica</h3>
          <div className="yk-ficha-grid yk-card mt-4 p-5 sm:p-6">
            {FICHA.map((row) => (
              <div key={row.label} className="contents">
                <p className="yk-ficha-label">{row.label}</p>
                <p className="text-sm leading-relaxed text-[var(--yk-ink)]">{row.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="yk-reveal mt-10">
          <h3 className="yk-section-label text-lg">Activos identificados</h3>
          <ul className="yk-stagger-group mt-4 space-y-3 is-visible">
            {ASSETS.map((item, i) => (
              <li key={item} className="yk-stagger flex gap-3 text-sm leading-relaxed" style={staggerStyle(i, 70)}>
                <span className="yk-asset-check" aria-hidden>
                  OK
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="yk-section-label text-lg">Cuellos de botella</h3>
          <div className="yk-stagger-group mt-4 grid gap-4 sm:grid-cols-2 is-visible">
            {FRICTION.map((card, i) => (
              <article key={card.title} className="yk-card yk-stagger p-5" style={staggerStyle(i, 90)}>
                <p className="yk-section-label text-sm">{card.title}</p>
                <p className="yk-muted mt-2 text-sm leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        id="transformacion"
        eyebrow="02. Transformaciones concretas"
        title="De vender por mensaje a una tienda que vende todos los días, con una colección nueva que llega a un lugar listo."
      >
        <div className="yk-stagger-group yk-table-wrap overflow-hidden rounded-xl is-visible" data-reveal>
          <div className="yk-table-head grid grid-cols-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
            <span>Antes</span>
            <span className="yk-after">Después</span>
          </div>
          {TRANSFORMATIONS.map((row, i) => (
            <div
              key={row.before}
              className={`yk-stagger grid grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 ${
                i < TRANSFORMATIONS.length - 1 ? "yk-table-row" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="yk-muted text-sm leading-relaxed">{row.before}</p>
              <p className="text-sm font-medium leading-relaxed text-[var(--yk-ink)]">{row.after}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="planes"
        eyebrow="03. Inversión"
        title="Elige tu ruta"
        subtitle="Fase 1, Tienda. Fase 2, Automatización y lanzamiento. Fase 3, Producción. Fase 4, Escala."
        alt
      >
        <div data-reveal className="yk-reveal">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((item) => (
              <article key={item.title} className="yk-card p-5">
                <p className="yk-eyebrow">{item.step}</p>
                <h3 className="yk-section-label mt-2 text-lg">{item.title}</h3>
                <p className="yk-muted mt-2 text-sm leading-relaxed">{item.text}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--yk-ink)]">
                  {item.tag}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          <article data-reveal className="yk-reveal yk-package">
            <p className="yk-eyebrow">Paquete 1</p>
            <h3 className="yk-section-label mt-2 text-xl">PDM MOVE TIENDA</h3>
            <p className="yk-price mt-4 text-3xl font-semibold">${formatCop(3197000)} COP</p>
            <p className="yk-muted mt-1 text-sm">USD {formatUsd(1017)}</p>
            {TIENDA_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}
            <div className="yk-package-footer">
              <div className="border-t border-[var(--yk-border)] pt-4 text-sm">
                <p className="yk-section-label text-xs uppercase tracking-[0.14em]">Forma de pago</p>
                <p className="yk-muted mt-2">Fase 1: $ {formatCop(1598500)} COP al firmar</p>
                <p className="yk-muted mt-1">Fase 2: $ {formatCop(1598500)} COP a los 15 días</p>
              </div>
              <a
                href={waUrl(
                  "Hola Fluxa Method. Revisé la propuesta de YK Move y me interesa PDM MOVE TIENDA ($3.197.000 COP)."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="yk-btn yk-btn-solid w-full"
              >
                Quiero TIENDA
              </a>
            </div>
          </article>

          <article data-reveal className="yk-reveal yk-package yk-package--featured">
            <div className="flex items-center justify-between gap-3">
              <p className="yk-eyebrow">Paquete 2</p>
              <span className="yk-badge px-2.5 py-1 text-[10px] uppercase">Recomendado</span>
            </div>
            <h3 className="yk-section-label mt-2 text-xl">PDM MOVE LANZAMIENTO</h3>
            <p className="yk-price mt-4 text-3xl font-semibold">${formatCop(4997000)} COP</p>
            <p className="yk-muted mt-1 text-sm">USD {formatUsd(1589)}</p>
            {LANZAMIENTO_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}
            <div className="yk-package-footer">
              <div className="border-t border-[var(--yk-border)] pt-4 text-sm">
                <p className="yk-section-label text-xs uppercase tracking-[0.14em]">Forma de pago</p>
                <p className="yk-muted mt-2">Fase 1: $ {formatCop(2498500)} COP al firmar</p>
                <p className="yk-muted mt-1">Fase 2: $ {formatCop(2498500)} COP a los 15 días</p>
              </div>
              <a
                href={waUrl(
                  "Hola Fluxa Method. Revisé la propuesta de YK Move y me interesa PDM MOVE LANZAMIENTO ($4.997.000 COP)."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="yk-btn yk-btn-solid w-full"
              >
                Quiero LANZAMIENTO
              </a>
            </div>
          </article>

          <article data-reveal className="yk-reveal yk-package">
            <div className="flex items-center justify-between gap-3">
              <p className="yk-eyebrow">Paquete 3</p>
              <span className="yk-badge px-2.5 py-1 text-[10px] uppercase">El más completo</span>
            </div>
            <h3 className="yk-section-label mt-2 text-xl">PDM MOVE STUDIO</h3>
            <p className="yk-price mt-4 text-3xl font-semibold">${formatCop(7297000)} COP</p>
            <p className="yk-muted mt-1 text-sm">USD {formatUsd(2320)}</p>
            {STUDIO_SECTIONS.map((block) => (
              <PackageBlock key={block.label} label={block.label} items={block.items} />
            ))}
            <div className="yk-package-footer">
              <div className="border-t border-[var(--yk-border)] pt-4 text-sm">
                <p className="yk-section-label text-xs uppercase tracking-[0.14em]">Forma de pago</p>
                <p className="yk-muted mt-2">Fase 1: $ {formatCop(3648500)} COP al firmar</p>
                <p className="yk-muted mt-1">Fase 2: $ {formatCop(3648500)} COP a los 15 días</p>
              </div>
              <a
                href={waUrl(
                  "Hola Fluxa Method. Revisé la propuesta de YK Move y me interesa PDM MOVE STUDIO ($7.297.000 COP)."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="yk-btn yk-btn-solid w-full"
              >
                Quiero STUDIO
              </a>
            </div>
          </article>
        </div>

        <div data-reveal className="yk-reveal mt-12 overflow-x-auto">
          <h3 className="yk-section-label text-lg">Comparativa lado a lado</h3>
          <table className="mt-4 w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--yk-border)]">
                <th className="yk-muted py-3 pr-4 font-medium">Característica</th>
                <th className="py-3 pr-4 font-semibold text-[var(--yk-ink)]">Tienda $3.197.000</th>
                <th className="py-3 pr-4 font-semibold text-[var(--yk-ink)]">Lanzamiento $4.997.000</th>
                <th className="py-3 font-semibold text-[var(--yk-ink)]">Studio $7.297.000</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-[var(--yk-border)]">
                  <td className="yk-muted py-3 pr-4">{row.feature}</td>
                  <td className="py-3 pr-4">
                    <CompareCell value={row.tienda} />
                  </td>
                  <td className="py-3 pr-4">
                    <CompareCell value={row.lanzamiento} />
                  </td>
                  <td className="py-3">
                    <CompareCell value={row.studio} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock id="ejecucion" eyebrow="04. Ejecución" title="Orden de construcción">
        <div className="yk-timeline-group is-visible max-w-2xl">
          {EXECUTION.map((phase, i) => (
            <div key={phase.title} className="yk-stagger relative flex gap-4 pb-8" style={staggerStyle(i, 110)}>
              <div className="flex flex-col items-center">
                <span className="yk-timeline-dot flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  {phase.num}
                </span>
                {i < EXECUTION.length - 1 ? (
                  <span className="yk-timeline-line mt-1 w-0.5 flex-1 min-h-[2.5rem]" aria-hidden />
                ) : null}
              </div>
              <div>
                <p className="yk-muted text-[11px] font-medium uppercase tracking-[0.16em]">{phase.when}</p>
                <h3 className="yk-section-label mt-1 text-lg">
                  {phase.title}
                  {phase.scope ? (
                    <span className="yk-badge ml-2 px-2 py-0.5 text-[9px] uppercase">{phase.scope}</span>
                  ) : null}
                </h3>
                <p className="yk-muted mt-2 text-sm leading-relaxed">{phase.items}</p>
              </div>
            </div>
          ))}
        </div>
        <p data-reveal className="yk-reveal yk-muted mt-2 max-w-2xl text-sm leading-relaxed">
          La fecha de salida de la colección define el calendario. Con esa fecha contamos hacia atrás las semanas de
          construcción, contenido y pauta.
        </p>
      </SectionBlock>

      <SectionBlock
        id="continuidad"
        eyebrow="05. Continuidad"
        title="Mantenimiento y crecimiento mes a mes"
        subtitle="Disponible desde el mes 3."
        alt
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {CONTINUIDAD.map((plan) => (
            <article
              key={plan.name}
              data-reveal
              className={`yk-reveal yk-package ${plan.featured ? "yk-package--featured" : ""}`}
            >
              {plan.note ? <span className="yk-badge px-2.5 py-1 text-[10px] uppercase">{plan.note}</span> : null}
              <h3 className="yk-section-label mt-3 text-xl">{plan.name}</h3>
              <p className="yk-price mt-3 text-2xl font-semibold">${formatCop(plan.price)} COP/mes</p>
              <p className="yk-muted mt-1 text-sm">USD {formatUsd(plan.usd)} /mes</p>
              <ul className="yk-muted mt-5 space-y-1.5 text-sm leading-relaxed">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-[var(--yk-ink)]">*</span>
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
        title="Tres rutas, según qué tan lejos quieras llegar con este lanzamiento."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div data-reveal className="yk-reveal yk-card p-6">
            <p className="yk-eyebrow">Hoy</p>
            <ul className="yk-muted mt-4 space-y-2 text-sm leading-relaxed">
              <li>Link de Canva y todas las compras por mensaje</li>
              <li>Consultas de talla, color y envío atendidas a mano</li>
              <li>Colección nueva sin un lugar propio donde recibirla</li>
            </ul>
          </div>
          <div data-reveal className="yk-reveal yk-card p-6">
            <p className="yk-eyebrow">Cuando todo esté funcionando</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--yk-ink)]">
              <li>Una tienda online donde la clienta elige talla y color y paga en el momento</li>
              <li>Un Instagram que responde y la lleva directo al producto</li>
              <li>
                Un lanzamiento con contenido, pauta y, si eliges Studio, producción propia con modelos coordinadas
              </li>
            </ul>
          </div>
        </div>

        <div data-reveal className="yk-reveal mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--yk-border)]">
                <th className="yk-muted py-3 pr-4 font-medium">Ruta</th>
                <th className="yk-muted py-3 pr-4 font-medium">Inversión</th>
                <th className="yk-muted py-3 font-medium">Para ti si</th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROUTES.map((row) => (
                <tr key={row.name} className="border-b border-[var(--yk-border)]">
                  <td className="py-3 pr-4 font-semibold text-[var(--yk-ink)]">{row.name}</td>
                  <td className="py-3 pr-4 text-[var(--yk-ink)]">{row.price}</td>
                  <td className="yk-muted py-3">{row.forYou}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p data-reveal className="yk-reveal yk-muted mt-8 text-sm leading-relaxed">
          Activos en tus cuentas. Pagos en dos fases. 30 días de soporte post entrega. La suscripción de Shopify y la
          pasarela quedan a nombre de YK Move, y la inversión en pauta va aparte.
        </p>
      </SectionBlock>

      <SectionBlock
        id="cierre"
        eyebrow="Siguiente paso"
        title="Una colección nueva merece una tienda lista antes de salir."
        subtitle="Cuando la colección tenga fecha, contamos hacia atrás: semanas de construcción, de contenido y de pauta, para que el día del lanzamiento la clienta llegue a un lugar donde pueda comprar."
        elevated
        alt
      >
        <p data-reveal className="yk-reveal text-sm leading-relaxed text-[var(--yk-text)] sm:text-base">
          Si cerramos esta semana, arrancamos con la tienda y dejamos todo armado para recibir la colección.
        </p>
        <ClosingPlanPicker />
        <p className="yk-muted mt-10 text-center text-sm">
          YK Move |{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--yk-ink)]">
            @yk_justmove
          </a>{" "}
          | Fluxa Method
        </p>
      </SectionBlock>

      <a href="#planes" className="yk-floating-cta">
        Ver planes
      </a>
    </main>
  );
}
