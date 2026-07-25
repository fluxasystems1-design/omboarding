"use client";

import { useEffect, useMemo, useState } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Partnersflux. Soy Patricia Porras (@fonopatipo). Revisé la propuesta y quiero conversar.";
const CALENDLY = "https://calendly.com/fluxasystems1/30min";

function waUrl(text = WA_MSG) {
  return WA_BASE + encodeURIComponent(text);
}

function formatCOP(n) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "punto", label: "Hoy → Sistema" },
  { id: "encaje", label: "Encaje" },
  { id: "camino", label: "Camino" },
  { id: "paquetes", label: "Paquetes" },
  { id: "cierre", label: "Cierre" },
];

const POINT_A = [
  "Instagram recién activado: 163 seguidores y 1 publicación — sin historial ni calendario de contenido.",
  "Cero testimonios documentados, cero casos compartidos, cero VSL.",
  "Dos públicos sin segmentar — familias y colegios — ninguno con camino de venta propio.",
  "Interés real ya validado (tu primer post generó interacción sin pauta), pero sin nada construido para capturarlo.",
];

const POINT_B = [
  "Revisar WhatsApp y ver que alguien ya compró tu curso mientras dormías.",
  "Un colegio escribe de noche y ya recibió información automática antes de que abras los ojos.",
  "Tu ingreso deja de depender solo de la agenda física: un sistema capta, nutre y vende todos los días.",
  "Eso es una Presencia Digital Monetizable funcionando de verdad.",
];

const FOR_WHO = [
  "Ya tienes claridad de tu conocimiento, pero no de cómo empaquetarlo digitalmente.",
  "Estás cansada de que tu ingreso dependa 100% de tu tiempo en consulta.",
  "Quieres construir algo bien desde cero, sin corregir hábitos digitales previos.",
];

const NOT_FOR = [
  "Si no tienes ni 30 minutos a la semana para revisar cómo va el sistema.",
  "Si buscas resultados sin participar en la definición de tu producto.",
];

const STAGES = [
  {
    n: "01",
    title: "Cimientos",
    time: "2–3 semanas",
    text: "Definimos juntas tu producto ancla — qué vendes primero, a quién, a qué precio. Guion de VSL desde tu mensaje de marca. Estructura de tu laboratorio de contenido.",
  },
  {
    n: "02",
    title: "Lanzamiento",
    time: "2–3 semanas · en paralelo",
    text: "Tu landing de venta, pasarela de pagos activa y tu curso montado — listo para recibir tu primera venta.",
  },
  {
    n: "03",
    title: "Automatización",
    time: "2 semanas · tras lanzamiento",
    text: "Por ejemplo: alguien escribe “GUÍA” en WhatsApp y recibe información, resuelve dudas y llega a tu oferta sin que tú muevas un dedo. Lo mismo en Instagram. Capacitación en IA y primeras campañas.",
  },
  {
    n: "04",
    title: "Escala",
    time: "Según resultados",
    text: "Nuevos productos con IA, ajuste de pautas y tu siguiente nivel: membresía o línea institucional para colegios.",
  },
];

const DOUBTS = [
  {
    q: "“Apenas estoy empezando”",
    a: "Es tu ventaja real. No hay nada que corregir: se construye bien desde el primer día.",
  },
  {
    q: "“No tengo testimonios ni fotos”",
    a: "Eso se resuelve en paralelo, aparte, sin frenar la instalación del sistema.",
  },
  {
    q: "“¿Y si no vendo nada?”",
    a: "Por eso existe Página + Checkout: validar con una inversión menor antes de comprometerte al sistema completo.",
  },
];

const PACKAGES = {
  p1: {
    id: "p1",
    tab: "Paquete 1",
    badge: "Infraestructura",
    label: "Página + Checkout + Plataforma de cursos",
    price: 3499000,
    pitch:
      "Para cuando ya tienes claro tu producto y solo necesitas la infraestructura técnica: un lugar serio donde la familia o el colegio entiende qué haces… y puede pagar.",
    reconsumo: "Reconsumo mensual: $170.000 COP — ajustes y actualizaciones.",
    blocks: [
      {
        title: "Incluye",
        items: [
          "Landing de venta con diseño personalizado",
          "Integración de pasarela de pagos (Wompi o Bold)",
          "Configuración de plataforma de cursos en Hotmart",
        ],
      },
    ],
    note: "Fotografía y producción de contenido se coordinan aparte, con Axioma.",
    cta: "Quiero el Paquete 1",
    msg: "Hola Partnersflux. Revisé el Paquete 1 de FonoPatipo ($3.499.000) y quiero avanzar.",
  },
  p2: {
    id: "p2",
    tab: "Paquete 2",
    badge: "Recomendado",
    label: "Sistema completo con estrategia",
    price: 4999000,
    pitch:
      "Para cuando quieres que el sistema capte, nutre y venda por ti. Es el salto de “tengo página” a “tengo un motor digital”.",
    reconsumo:
      "Reconsumo mensual (desde el mes 3): $747.000 COP — gestión de campañas y ajustes continuos.",
    blocks: [
      {
        title: "Todo lo anterior, más",
        items: [
          "Laboratorio de contenido (pilares, calendario, guiones)",
          "Estrategia de embudos de venta",
          "Automatización de Instagram y WhatsApp",
          "Pautas (Meta Ads)",
          "Capacitación en IA",
          "Creación de productos con IA",
          "Estrategia y acompañamiento en ventas",
        ],
      },
    ],
    note: "Fotografía y producción de contenido se coordinan aparte, con Axioma.",
    cta: "Quiero el Paquete 2",
    msg: "Hola Partnersflux. Revisé el Paquete 2 de FonoPatipo ($4.999.000) y quiero conversar.",
    featured: true,
  },
};

function staggerStyle(index, step = 80) {
  return { "--fp-delay": `${index * step}ms` };
}

function Section({ id, eyebrow, title, subtitle, children, alt = false }) {
  return (
    <section id={id} className={`fp-section scroll-mt-24 ${alt ? "fp-section--alt" : ""}`}>
      <div className="fp-wrap">
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="fp-reveal fp-reveal-header fp-section-head">
            {eyebrow ? <p className="fp-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="fp-heading">{title}</h2> : null}
            {subtitle ? <p className="fp-sub">{subtitle}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default function PropuestaFonopatipoPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [activePkg, setActivePkg] = useState("p2");
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const pkg = PACKAGES[activePkg];

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
      document.getElementById("fp-nav")?.classList.toggle("fp-nav--scrolled", window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal], .fp-stagger-group").forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="fp-page">
      <div className="fp-bg" aria-hidden>
        <span className="fp-grid" />
      </div>

      <div className="fp-progress" aria-hidden>
        <div className="fp-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <header id="fp-nav" className="fp-nav">
        <div className="fp-nav-inner">
          <a href="#hero" className="fp-nav-brand">
            <span className="fp-brand-mark">FonoPatipo</span>
            <span className="fp-nav-plus">·</span>
            <span className="fp-brand-sub">Partnersflux</span>
          </a>
          <nav className="fp-nav-links" aria-label="Secciones">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`fp-nav-link ${activeSection === item.id ? "fp-nav-link--active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="fp-nav-cta">
            Agendar
          </a>
        </div>
      </header>

      <section id="hero" className="fp-hero scroll-mt-24">
        <div className="fp-hero-bg" aria-hidden>
          <div className="fp-hero-bg__sky" />
          <div className="fp-hero-bg__glow" />
          <div className="fp-hero-bg__grid" />

          <div className="fp-ripple fp-ripple--a">
            <span />
            <span />
            <span />
          </div>
          <div className="fp-ripple fp-ripple--b">
            <span />
            <span />
            <span />
          </div>

          <div className="fp-wave">
            <span className="fp-bar fp-bar--1" />
            <span className="fp-bar fp-bar--2" />
            <span className="fp-bar fp-bar--3" />
            <span className="fp-bar fp-bar--4" />
            <span className="fp-bar fp-bar--5" />
            <span className="fp-bar fp-bar--6" />
            <span className="fp-bar fp-bar--7" />
            <span className="fp-bar fp-bar--8" />
            <span className="fp-bar fp-bar--9" />
            <span className="fp-bar fp-bar--10" />
            <span className="fp-bar fp-bar--11" />
            <span className="fp-bar fp-bar--12" />
          </div>
          <div className="fp-wave fp-wave--soft">
            <span className="fp-bar fp-bar--1" />
            <span className="fp-bar fp-bar--2" />
            <span className="fp-bar fp-bar--3" />
            <span className="fp-bar fp-bar--4" />
            <span className="fp-bar fp-bar--5" />
            <span className="fp-bar fp-bar--6" />
            <span className="fp-bar fp-bar--7" />
            <span className="fp-bar fp-bar--8" />
          </div>

          <span className="fp-node fp-node--1" />
          <span className="fp-node fp-node--2" />
          <span className="fp-node fp-node--3" />
          <span className="fp-node fp-node--4" />
          <span className="fp-node fp-node--5" />
          <span className="fp-node fp-node--6" />
          <span className="fp-link fp-link--1" />
          <span className="fp-link fp-link--2" />
          <span className="fp-link fp-link--3" />

          <span className="fp-dot fp-dot--1" />
          <span className="fp-dot fp-dot--2" />
          <span className="fp-dot fp-dot--3" />
          <span className="fp-dot fp-dot--4" />
          <span className="fp-dot fp-dot--5" />
          <span className="fp-dot fp-dot--6" />
          <span className="fp-dot fp-dot--7" />
          <span className="fp-dot fp-dot--8" />

          <div className="fp-hero-bg__fade" />
        </div>
        <div data-reveal className="fp-wrap fp-reveal is-visible">
          <p className="fp-brand-hero">FonoPatipo</p>
          <p className="fp-eyebrow">Método PDM · Partnersflux · Patricia Porras</p>
          <h1 className="fp-hero-title">
            Tu método ya vende cuando estás en consulta.
            <em>Falta el sistema para que también venda cuando no estás.</em>
          </h1>
          <p className="fp-lead">
            Años formando confianza en Cúcuta. Ahora: página, cobro y cursos que trabajan también sin ti en la
            consulta.
          </p>
          <div className="fp-actions">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--solid">
              Agendar sesión de claridad
            </a>
            <a href="#paquetes" className="fp-btn fp-btn--ghost">
              Ver paquetes
            </a>
          </div>
        </div>
        <div data-reveal className="fp-hero-band fp-reveal is-visible fp-reveal--band">
          <p className="fp-hero-band-text">Presencia Digital Monetizable — captar, nutrir y vender todos los días.</p>
        </div>
      </section>

      <Section
        id="punto"
        eyebrow="01 · Hoy → Sistema"
        title="Dónde estás. A dónde puedes llegar."
        subtitle="No es conseguir más likes. Es convertir tu expertise en un sistema que vende también cuando no estás."
      >
        <div data-reveal className="fp-contrast fp-stagger-group">
          <article className="fp-contrast-col fp-contrast-col--today fp-stagger" style={staggerStyle(0)}>
            <p className="fp-card-label">Dónde estás hoy</p>
            <ul className="fp-plain-list">
              {POINT_A.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="fp-contrast-col fp-contrast-col--system fp-stagger" style={staggerStyle(1)}>
            <p className="fp-card-label">A dónde puedes llegar</p>
            <ul className="fp-plain-list">
              {POINT_B.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section id="encaje" eyebrow="02 · Encaje" title="¿Esto es para ti?" alt>
        <div data-reveal className="fp-ab fp-stagger-group">
          <article className="fp-card fp-stagger" style={staggerStyle(0)}>
            <p className="fp-card-label">Puede ayudarte especialmente si…</p>
            <ul className="fp-plain-list">
              {FOR_WHO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="fp-card fp-stagger" style={staggerStyle(1)}>
            <p className="fp-card-label">Quizás todavía no, si…</p>
            <ul className="fp-plain-list">
              {NOT_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        id="camino"
        eyebrow="03 · Camino"
        title="Cómo se instala — el camino completo"
        subtitle="Cuatro etapas. El sistema se construye contigo, no solo “una web y nos vamos”."
      >
        <ol data-reveal className="fp-timeline fp-stagger-group">
          {STAGES.map((s, i) => (
            <li key={s.n} className="fp-timeline-item fp-stagger" style={staggerStyle(i, 90)}>
              <div className="fp-timeline-rail" aria-hidden>
                <span className="fp-timeline-dot">{s.n}</span>
                {i < STAGES.length - 1 ? <span className="fp-timeline-line" /> : null}
              </div>
              <div className="fp-timeline-card">
                <div className="fp-timeline-meta">
                  <h3 className="fp-stage-title">{s.title}</h3>
                  <p className="fp-stage-time">{s.time}</p>
                </div>
                <p className="fp-card-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="paquetes"
        eyebrow="04 · Cómo empezar"
        title="Cómo prefieres empezar"
        subtitle="Fotografía y producción se coordinan aparte, con Axioma."
        alt
      >
        <div data-reveal className="fp-reveal">
          <div className="fp-pkg-tabs" role="tablist" aria-label="Paquetes">
            {Object.values(PACKAGES).map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activePkg === p.id}
                className={`fp-pkg-tab ${activePkg === p.id ? "fp-pkg-tab--active" : ""} ${
                  p.featured ? "fp-pkg-tab--featured" : ""
                }`}
                onClick={() => setActivePkg(p.id)}
              >
                <span className="fp-pkg-tab-badge">{p.badge}</span>
                <span className="fp-pkg-tab-label">{p.tab}</span>
                <span className="fp-pkg-tab-price">{formatCOP(p.price)}</span>
              </button>
            ))}
          </div>

          <article
            className={`fp-card fp-pkg-panel ${pkg.featured ? "fp-card--featured fp-pkg-panel--hero" : "fp-pkg-panel--quiet"}`}
          >
            {pkg.featured ? <span className="fp-pkg-ribbon">Recomendado</span> : null}
            <p className="fp-card-label">{pkg.label}</p>
            <p className="fp-price">{formatCOP(pkg.price)}</p>
            <p className="fp-price-alt">{pkg.id === "p2" ? "Instalación" : "Infraestructura técnica"}</p>
            <p className="fp-pkg-pitch">{pkg.pitch}</p>
            <p className="fp-reconsumo-chip">{pkg.reconsumo}</p>
            {pkg.blocks.map((block) => (
              <div key={block.title} className="fp-pkg-block">
                <p className="fp-pkg-block-title">{block.title}</p>
                <ul className="fp-check-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="fp-pkg-note">{pkg.note}</p>
            <a
              href={waUrl(pkg.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className={`fp-btn ${pkg.featured ? "fp-btn--solid" : "fp-btn--ghost"}`}
              style={{ marginTop: "1.25rem", width: "100%" }}
            >
              {pkg.cta}
            </a>
          </article>
        </div>
      </Section>

      <Section
        id="dudas"
        eyebrow="Antes de que dudes"
        title="Lo que suele frenar… y por qué no tiene que frenarte"
      >
        <div data-reveal className="fp-objections fp-stagger-group">
          {DOUBTS.map((d, i) => (
            <article key={d.q} className="fp-objection fp-stagger" style={staggerStyle(i)}>
              <p className="fp-objection-q">{d.q}</p>
              <p className="fp-card-text">{d.a}</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="cierre" className="fp-section fp-section--cta scroll-mt-24">
        <div className="fp-wrap">
          <div data-reveal className="fp-cta-panel fp-reveal">
            <p className="fp-eyebrow fp-eyebrow--on-dark">Lo único que falta definir</p>
            <h2 className="fp-heading fp-heading--on-dark">Primer producto. Familias o colegios.</h2>
            <p className="fp-sub fp-sub--on-dark">
              De ahí se deriva todo: el guion de tu VSL, el enfoque de tus testimonios y la automatización. Hoy tienes
              el conocimiento y la reputación. Lo que decides ahora es si sigue limitado al consultorio… o también
              trabaja por ti cuando no estás.
            </p>
            <div className="fp-actions" style={{ justifyContent: "center" }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--bone">
                Agendar sesión de claridad
              </a>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="fp-btn fp-btn--ghost-light">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="fp-footer">Partnersflux · Método PDM · Patricia Porras · @fonopatipo</footer>

      <a
        href={waUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fp-floating"
        aria-label="WhatsApp +57 311 6425337"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
