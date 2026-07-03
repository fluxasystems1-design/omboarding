"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const ESSENZA_LOGO = "/imagenes/propuesta-essenza-md/logo.png";
const FLUXA_PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const INSTAGRAM_ESSENZA = "https://www.instagram.com/essenzamd/";
const INSTAGRAM_ZIUL = "https://www.instagram.com/ziulperezmd/";
const SITE_URL = "https://megalinkpro.com.co/essenzamd/";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

function staggerStyle(index, step = 90) {
  return { "--delay": `${index * step}ms` };
}

function PartnersLogos({ size = "hero", animate = false }) {
  const isNav = size === "nav";
  const stagger = !isNav && animate;

  return (
    <div
      className={`essenza-partners ${isNav ? "essenza-partners--nav shrink-0" : "essenza-partners--hero mb-10 w-full max-w-3xl sm:mb-12 lg:max-w-4xl"}`}
    >
      <a
        href="#hero"
        className={`essenza-partners-logo-wrap ${stagger ? "gals-stagger" : ""}`}
        style={stagger ? staggerStyle(0, 90) : undefined}
        aria-label="Essenza MD — inicio"
      >
        <Image
          src={ESSENZA_LOGO}
          alt="Essenza MD Medicina Estética"
          width={720}
          height={216}
          priority
          className={`essenza-partners-logo essenza-partners-logo--essenza ${isNav ? "essenza-partners-logo--nav" : "essenza-partners-logo--hero"}`}
        />
      </a>
      <span
        className={`essenza-partners-plus ${stagger ? "gals-stagger" : ""}`}
        style={stagger ? staggerStyle(1, 90) : undefined}
        aria-hidden
      >
        +
      </span>
      <div
        className={`essenza-partners-logo-wrap ${stagger ? "gals-stagger" : ""}`}
        style={stagger ? staggerStyle(2, 90) : undefined}
      >
        <Image
          src={FLUXA_PARTNERS_LOGO}
          alt="Fluxa Partners"
          width={480}
          height={480}
          priority
          className={`essenza-partners-logo essenza-partners-logo--fluxa ${isNav ? "essenza-partners-logo--nav" : "essenza-partners-logo--hero"}`}
        />
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "marca", label: "La marca" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "transformacion", label: "Transformación" },
  { id: "construir", label: "Qué construimos" },
  { id: "cierre", label: "Cierre" },
];

const MARCA_COLLECTIONS = [
  {
    title: "BE YOU — perfilamiento y antiedad clásica",
    highlight: true,
    text: "Define tu Perfil (rinomodelación, labios, mentón, Perfil Ziul / Perfil Ziul MD) · Keep Young (Radiesse, hilos, toxina, ácido hialurónico) · Renova (sonrisa, mirada, Full Face).",
  },
  {
    title: "BE YOU+ — regeneración avanzada",
    highlight: true,
    text: "Nanopore · PDRN (Esperma de Salmón) · Exosomas · PRP (Essenza) · Peeling · Skin Hair.",
  },
  {
    title: "Hydrash",
    text: "Limpieza facial y tecnología — puerta de entrada de bajo compromiso.",
  },
  {
    title: "Dermatología clínica",
    text: "Acné, rosácea, psoriasis — combina Hydrash + Nanopore + Bioreguladora.",
  },
  {
    title: "Medicina Bioreguladora / Heel",
    text: "Sueros terapéuticos — energía, sueño, dolor, inmunidad y más. Una categoría con muchas variantes internas, no una línea de negocio aparte.",
  },
];

const DIAGNOSTIC_CARDS = [
  "Autoridad médica real (AMWC Miami, ACIME, formación en 3 países) sin sistema que la capitalice",
  "Dos perfiles de Instagram (@essenzamd, @ziulperezmd) sin destino digital compartido",
  "Catálogo con dos colecciones propias (BE YOU / BE YOU+) que nunca migraron de PDF a web",
  "Perfil Ziul — el producto ancla con nombre propio de la doctora — enterrado en la página 3 de un PDF",
  "La categoría de sueros tiene tantas variantes que exige asesoría manual para cada consulta",
  "Cero automatización: todo el flujo de conversión depende de que alguien responda WhatsApp",
  "Sin sistema de reservas digital",
];

const TRANSFORMATIONS = [
  {
    before: "Dos perfiles sin embudo de conversión",
    after: "Landing única que unifica ambos y dirige por línea",
  },
  {
    before: "BE YOU / BE YOU+ atrapadas en un PDF de 7 páginas",
    after: "Catálogo web navegable por colección",
  },
  {
    before: "Perfil Ziul sin espacio propio",
    after: "Landing dedicada como producto ancla",
  },
  {
    before: "Sueros sin filtro de decisión",
    after: "Selector guiado por necesidad (energía, piel, sueño, dolor)",
  },
  {
    before: "Consultas que dependen de respuesta manual",
    after: "Captación y seguimiento automático 24/7",
  },
  {
    before: "Interés que se enfría sin seguimiento",
    after: "Secuencia de nurturing hasta el cierre",
  },
  {
    before: "Reservas por conversación manual",
    after: "Bot de agendamiento sin intervención humana",
  },
];

const AREA_TAG_META = {
  hydrash: { label: "Hydrash", shortLabel: "Hydrash", className: "essenza-tag--hydrash" },
  beyou: { label: "BE YOU", shortLabel: "BE YOU", className: "essenza-tag--beyou" },
  beyouplus: { label: "BE YOU+", shortLabel: "BE YOU+", className: "essenza-tag--beyouplus" },
  sueros: { label: "Sueros", shortLabel: "Sueros", className: "essenza-tag--sueros" },
  ambas: { label: "Ambas cuentas / transversal", shortLabel: "Ambas", className: "essenza-tag--ambas" },
};

const UNIFIED_BUILD_BLOCKS = [
  {
    title: "Web y presencia",
    items: [
      { text: "Landing única bajo identidad Essenza, que unifica @essenzamd y @ziulperezmd", tags: ["ambas"] },
      { text: "Landing de Hydrash como puerta de entrada", tags: ["hydrash"] },
      { text: "Sección/landing dedicada a Perfil Ziul y Perfil Ziul MD", tags: ["beyou"] },
      { text: "Catálogo web de Keep Young, Define tu Perfil y Renova", tags: ["beyou"] },
      { text: "Catálogo web de Nanopore, PRP, Exosomas y Skin Hair", tags: ["beyouplus"] },
      { text: "Selector guiado para la categoría de sueros", tags: ["sueros"] },
      { text: "Hoja de vida médica integrada, cruzada con Medicina Bioreguladora", tags: ["ambas"] },
    ],
  },
  {
    title: "Marca e Instagram",
    items: [
      {
        text: "Arquitectura de highlights alineada a los pilares ya existentes (Péptidos, ZiulMD, Toxina, Sueros, Tips)",
        tags: ["ambas"],
      },
      { text: "Link in bio con acceso directo por colección", tags: ["ambas"] },
    ],
  },
  {
    title: "Automatización e IA",
    items: [
      { text: "Bot Instagram: responde DMs, clasifica por línea, invita a valoración", tags: ["ambas"] },
      { text: "Bot WhatsApp: seguimiento post-interés", tags: ["ambas"] },
      { text: "Bot de agendamiento sin intervención humana", tags: ["ambas"] },
      { text: "Triggers evergreen por tratamiento ancla (Hydrash, Perfil Ziul)", tags: ["hydrash", "beyou"] },
    ],
  },
  {
    title: "Contenido y pauta",
    items: [
      { text: "Calendario editorial por colección", tags: ["ambas"] },
      { text: "Guiones de reels para Hydrash", tags: ["hydrash"] },
      { text: "Guiones de reels para Perfil Ziul", tags: ["beyou"] },
      { text: "VSL corto para conversión en landing", tags: ["ambas"] },
    ],
  },
];

const CLOSING_STEPS = [
  { step: "01", title: "Diagnóstico", text: "Llamada con la Dra. Ziul para priorizar líneas y definir el mapa real." },
  { step: "02", title: "Propuesta a medida", text: "Fases según prioridad real — no según el orden del catálogo PDF." },
  { step: "03", title: "Construcción", text: "Ejecución por impacto: Hydrash y Perfil Ziul primero, luego escala por colección." },
];

function AreaTag({ type, short = false }) {
  const meta = AREA_TAG_META[type];
  if (!meta) return null;
  return (
    <span className={`essenza-tag ${meta.className}`}>{short ? meta.shortLabel : meta.label}</span>
  );
}

function TaggedItemRow({ item }) {
  return (
    <div className="essenza-build-row">
      <p className="essenza-build-row-text">{item.text}</p>
      <div className="essenza-build-row-tags">
        {item.tags.map((tag) => (
          <AreaTag key={tag} type={tag} short />
        ))}
      </div>
    </div>
  );
}

function TaggedItemList({ items }) {
  return (
    <div className="essenza-build-list">
      {items.map((item) => (
        <TaggedItemRow key={item.text} item={item} />
      ))}
    </div>
  );
}

function BuildGallery({ slides }) {
  if (!slides?.length) return null;
  return (
    <div className="essenza-build-gallery">
      {slides.map((slide) => (
        <figure key={slide.src} className="essenza-build-gallery-item">
          <div className="essenza-build-gallery-frame">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={675}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
          <figcaption className="essenza-build-gallery-caption">
            <span>{slide.caption}</span>
            {slide.tag ? <AreaTag type={slide.tag} short /> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function AreaLegend() {
  return (
    <div className="essenza-area-legend" data-reveal>
      {Object.entries(AREA_TAG_META).map(([key, meta]) => (
        <div key={key} className="essenza-area-legend-item">
          <AreaTag type={key} />
          <span className="essenza-area-legend-hint">
            {key === "ambas" ? "Transversal a @essenzamd y @ziulperezmd" : `Línea ${meta.label}`}
          </span>
        </div>
      ))}
    </div>
  );
}

function UnifiedBuildGrid() {
  return (
    <div className="essenza-build-stack gals-stagger-group mt-8" data-reveal>
      {UNIFIED_BUILD_BLOCKS.map((block, i) => (
        <article
          key={block.title}
          className="gals-card gals-stagger essenza-build-card rounded-2xl p-5 sm:p-7"
          style={staggerStyle(i, 80)}
        >
          <p className="gals-eyebrow tracking-[0.18em]">{block.title}</p>
          <TaggedItemList items={block.items} />
          {block.gallery?.length ? <BuildGallery slides={block.gallery} /> : null}
        </article>
      ))}
    </div>
  );
}

function SectionBlock({ id, eyebrow, title, subtitle, children, elevated = false, alt = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "gals-section-alt" : ""}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${elevated ? "gals-card rounded-2xl p-7 sm:p-10" : ""}`}>
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="gals-reveal gals-reveal-header max-w-3xl">
            {eyebrow ? <p className="gals-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="gals-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2> : null}
            {subtitle ? <p className="gals-lead">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaEssenzaPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [heroReady, setHeroReady] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHeroReady(true);
      return undefined;
    }

    const frame = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

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

    const revealTargets = document.querySelectorAll(
      "[data-reveal], .gals-stagger-group, .gals-timeline-group"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );

    const markVisibleInView = (el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
    };

    revealTargets.forEach((el) => {
      revealObserver.observe(el);
      markVisibleInView(el);
    });

    const onScrollReveal = () => {
      revealTargets.forEach(markVisibleInView);
    };
    window.addEventListener("scroll", onScrollReveal, { passive: true });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScrollReveal);
    };
  }, [sectionIds]);

  const waMessage = waUrl(
    "Hola Fluxa Method. Revisé la propuesta estratégica de Essenza MD y quiero agendar la llamada de diagnóstico con la Dra. Ziul."
  );

  return (
    <main className="gals-page">
      <div className="gals-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="gals-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className={`gals-nav sticky top-0 z-40 ${heroReady ? "gals-nav--ready" : ""}`}>
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <PartnersLogos size="nav" />
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

      {/* PORTADA */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div
          className={`gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6 ${heroReady ? "is-visible" : ""}`}
        >
          <PartnersLogos size="hero" animate />
          <p className="gals-stagger gals-eyebrow mt-8 tracking-[0.24em]" style={staggerStyle(3, 90)}>
            Fluxa Systems · Documento estratégico preliminar
          </p>
          <h1 className="gals-stagger gals-hero-title" style={staggerStyle(4, 90)}>
            Arquitectura digital y sistema de captación
          </h1>
          <p className="gals-stagger gals-lead mt-6 max-w-2xl sm:text-lg" style={staggerStyle(5, 90)}>
            Un ecosistema que unifica @essenzamd y @ziulperezmd, convierte el catálogo BE YOU / BE YOU+ en web navegable
            y automatiza la captación hasta la reserva — sin depender de respuesta manual.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {["Medicina estética", "BE YOU · BE YOU+", "Hydrash + Bioreguladora"].map((pill, i) => (
              <span
                key={pill}
                className="gals-pill gals-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i + 6, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className={`gals-reveal gals-reveal--delayed gals-hero-band mt-14 w-full ${heroReady ? "is-visible" : ""}`}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 sm:px-6 sm:py-12">
            <p className="gals-hero-title text-center text-3xl text-white sm:text-4xl md:text-5xl">
              Dra. Ziul Pérez
            </p>
            <p className="gals-hero-band-handle mt-3 text-center text-sm font-medium sm:text-base">
              Directora Médica · Essenza MD
            </p>
            <p className="gals-hero-band-handle mt-1 text-center text-xs opacity-90 sm:text-sm">
              Medicina Estética · AMWC · ACIME
            </p>
          </div>
        </div>

        <div
          data-reveal
          className={`gals-reveal gals-reveal--delayed mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6 ${heroReady ? "is-visible" : ""}`}
        >
          <a
            href={INSTAGRAM_ESSENZA}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-muted text-sm font-medium hover:text-[var(--gals-heading)]"
          >
            @essenzamd
          </a>
          <span className="hidden h-4 w-px bg-[var(--gals-border)] sm:block" aria-hidden />
          <a
            href={INSTAGRAM_ZIUL}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-muted text-sm font-medium hover:text-[var(--gals-heading)]"
          >
            @ziulperezmd
          </a>
          <span className="hidden h-4 w-px bg-[var(--gals-border)] sm:block" aria-hidden />
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-muted text-sm font-medium hover:text-[var(--gals-heading)]"
          >
            megalinkpro.com.co/essenzamd
          </a>
        </div>

        <div
          data-reveal
          className={`gals-reveal gals-reveal--delayed mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6 ${heroReady ? "is-visible" : ""}`}
        >
          <a
            href="#construir"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Ver qué construimos
          </a>
          <a
            href="#marca"
            className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
          >
            Mapa de marca
          </a>
        </div>
      </section>

      {/* LA MARCA REAL */}
      <SectionBlock
        id="marca"
        eyebrow="La marca real (corregido)"
        title="Esto es lo que existe. Nada más, nada menos."
        subtitle="Essenza no tiene siete líneas sueltas. Tiene dos colecciones marca propia más tres verticales independientes."
        elevated
        alt
      >
        <div className="essenza-marca-grid gals-stagger-group" data-reveal>
          {MARCA_COLLECTIONS.map((item, i) => (
            <article
              key={item.title}
              className={`essenza-marca-card gals-stagger ${item.highlight ? "essenza-marca-card--highlight" : ""}`}
              style={staggerStyle(i, 70)}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* DIAGNÓSTICO */}
      <SectionBlock
        id="diagnostico"
        eyebrow="01 — Diagnóstico"
        title="Autoridad médica real sin sistema que la capitalice."
        subtitle="La confianza ya está construida. Lo que falta es la infraestructura digital que convierta interés en valoraciones y reservas."
        elevated
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {DIAGNOSTIC_CARDS.map((text, i) => (
            <article
              key={text}
              className="gals-card gals-stagger rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 90)}
            >
              <p className="gals-card-text text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* TRANSFORMACIÓN */}
      <SectionBlock
        id="transformacion"
        eyebrow="02 — Transformación"
        title="De catálogo en PDF a sistema que convierte 24/7"
        alt
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

      {/* QUÉ CONSTRUIMOS */}
      <SectionBlock
        id="construir"
        eyebrow="03 — Qué construimos"
        title="Ecosistema digital por colección"
        subtitle="Un solo mapa de entregables. Cada ítem etiquetado por línea: Hydrash, BE YOU, BE YOU+, Sueros o transversal."
        elevated
        alt
      >
        <div data-reveal className="gals-reveal">
          <p className="gals-eyebrow">Qué construimos</p>
          <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">
            Arquitectura digital con prioridad por impacto
          </h3>
          <p className="gals-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Web, automatización, contenido y marca bajo Essenza MD — organizados por colección para que veas qué
            corresponde a cada línea de servicio.
          </p>
          <AreaLegend />
          <UnifiedBuildGrid />
        </div>

        <p className="essenza-scope-note gals-reveal" data-reveal>
          Alcance, fases e inversión se definen tras la llamada de diagnóstico.
        </p>
      </SectionBlock>

      {/* CIERRE */}
      <SectionBlock id="cierre" eyebrow="04 — Cierre" title="El siguiente paso es definir prioridades reales.">
        <div className="gals-stagger-group grid gap-4 md:grid-cols-3" data-reveal>
          {CLOSING_STEPS.map((item, i) => (
            <article
              key={item.step}
              className="gals-card gals-stagger rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 100)}
            >
              <p className="gals-eyebrow">{item.step}</p>
              <h3 className="gals-section-label mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="gals-muted mt-2 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="gals-reveal mt-12 text-center">
          <p className="gals-lead mx-auto max-w-2xl">
            Essenza ya tiene la autoridad y el catálogo. Nosotros construimos el sistema que los convierte en pacientes
            sin fricción.
          </p>
          <a
            href={waMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Agendar diagnóstico por WhatsApp
          </a>
          <p className="gals-muted mt-6 text-xs sm:text-sm">
            Propuesta confidencial · Fluxa Systems · Essenza MD Medicina Estética
          </p>
        </div>
      </SectionBlock>

      <a href="#construir" className="gals-floating-cta gals-floating-cta--pulse">
        Ver propuesta
      </a>
    </main>
  );
}
