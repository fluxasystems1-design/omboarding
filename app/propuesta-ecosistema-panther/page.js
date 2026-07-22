"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const LORENA_LOGO = "/imagenes/lorena-perch/logo-lp.png";
const FLUXA_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Partnersflux. Soy Lorena Perch. Revisé la propuesta del Ecosistema Panther y quiero conversar.";

function waUrl(text = WA_MSG) {
  return WA_BASE + encodeURIComponent(text);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "analisis", label: "Análisis" },
  { id: "mapa", label: "Categorías" },
  { id: "cuellos", label: "Cuellos" },
  { id: "antes", label: "Antes / Después" },
  { id: "vision", label: "Visión" },
  { id: "fases", label: "Fases" },
  { id: "paquetes", label: "Paquetes" },
  { id: "cierre", label: "Cierre" },
];

const CATEGORIES = [
  {
    label: "Motor de autoridad",
    account: "@lorena_perch",
    role: "Genera descubrimiento, comunidad y confianza — todo lo demás depende de su alcance.",
    featured: true,
  },
  {
    label: "Producto monetizable",
    account: "@sanctuaryskinlab + Face Yoga",
    role: "Necesitan conversión, no descubrimiento propio.",
  },
  {
    label: "Posicionamiento",
    account: "Barre (instructora invitada)",
    role: "Construye prestigio, no vende directo.",
  },
  {
    label: "Autosuficiente",
    account: "@pantherstribe_closetsale + @panthers._love",
    role: "Ya funcionan solas.",
  },
];

const BOTTLENECKS = [
  "Todas las líneas reciben el mismo trato, saturando su capacidad operativa.",
  "Sanctuary desconectada visualmente del universo Panther — un lead no identifica que es la misma fundadora.",
  "Cuentas satélite en cero intentando crecer solas sin historial (el algoritmo penaliza cuentas sin recorrido).",
  "Face Yoga sin lugar definido — su producto Evergreen real vive en Google Drive.",
  "Comunidad en Telegram, no en WhatsApp — pierde data y seguimiento.",
  "Cero recurrencia — depende de lanzamientos sueltos y 1:1 (insostenible por límite de agenda).",
  "Checkout de Sanctuary sin validar — construido en Lovable, tráfico UTM activo sin confirmar conversión.",
  "Contenido rígido no funciona para ella — ya lo probó (“lunes esto, martes esto”) y lo abandonó.",
  "Todo pasa por sus manos — sin equipo ni sistema de IA que le quite carga operativa.",
];

const BEFORE_AFTER = [
  {
    before: "5 líneas tratadas como negocios paralelos",
    after: "4 categorías con inversión según función",
  },
  {
    before: "Sanctuary desconectada de Panther",
    after: "Identidad cruzada entre cuentas",
  },
  {
    before: "Cuentas satélite creciendo solas",
    after: "Tráfico dirigido desde @lorena_perch",
  },
  {
    before: "Face Yoga sin lugar definido",
    after: "Pilar Evergreen dentro de la membresía",
  },
  {
    before: "Comunidad en Telegram sin data",
    after: "WhatsApp con seguimiento automatizado",
  },
  {
    before: "Mentoría sin recurrencia",
    after: "Membresía por pilares + eventos ancla",
  },
  {
    before: "Calendario rígido",
    after: "Banco de guiones a su ritmo",
  },
  {
    before: "Todo pasa por ella sola",
    after: "Sabe usar IA para producto + base de equipo definida",
  },
];

const TIMELINE = [
  {
    when: "Semana 1–5",
    title: "Paquete Completo — @lorena_perch",
    text: "Arquitectura, membresía, landing, WhatsApp, contenido, pauta, IA y equipo.",
  },
  {
    when: "Semana 6–13",
    title: "Ventana de estabilización",
    text: "Opera el sistema, genera resultado y valida antes de expandir.",
  },
  {
    when: "Semana 14–16",
    title: "Paquete Consultoría + Instalación — @sanctuaryskinlab",
    text: "Auditoría, identidad Panther, landing/checkout, WhatsApp y lanzamiento de cuenta.",
  },
];

const PACKAGES = {
  lorena: {
    id: "lorena",
    tab: "Completo",
    badge: "Fase 1",
    label: "Paquete completo · 5 semanas",
    title: "@lorena_perch — Motor de autoridad",
    price: "$1,797 USD",
    alt: "Pago único · o $1,897 en 2 cuotas de $948.50 (1ª al iniciar / 2ª al arrancar Fase 3, Semana 4)",
    blurb: "Incluye 4 checkpoints semanales + 15 días de soporte post-entrega.",
    phases: [
      {
        title: "Fase 1 · Semana 1 — Arquitectura y estrategia",
        items: [
          "Diagnóstico y alineación (90 min)",
          "Avatar, oferta y mensaje maestro",
          "Mapa de arquitectura de marca: naming, cross-promoción, guía visual entre las 4 cuentas",
          "Escalera de valor completa (gratis → low ticket → membresía → high ticket)",
        ],
      },
      {
        title: "Fase 2 · Semanas 2–3 — Construcción del sistema",
        items: [
          "Membresía: hasta 4 pilares clasificados",
          "1 landing page con checkout",
          "VSL: 1 guion (edición básica, hasta 2 rondas de revisión)",
          "Automatización WhatsApp: 3 flujos (bienvenida, seguimiento 2h-24h-48h, carrito abandonado)",
          "Migración Telegram → WhatsApp",
        ],
      },
      {
        title: "Fase 3 · Semana 4 — Laboratorio de contenido",
        items: [
          "Banco de 24 guiones por pilar, sin fecha fija — ella elige según lo que sienta",
          "Sesión de consultoría de contenido + marco de 3 preguntas antes de grabar",
          "2 guiones dedicados a Barre (posicionamiento, sin funnel)",
          "Conexión visual de @panthers._love y @pantherstribe_closetsale al universo Panther",
        ],
      },
      {
        title: "Fase 4 · Semana 5 — Pauta, IA y equipo",
        items: [
          "Meta Ads: 2 campañas + 4 creativos (presupuesto de pauta aparte)",
          "Sesión 1 — Productos inteligentes con IA (2h): 1 producto piloto construido en sesión",
          "Sesión 2 — Estructura de equipo (2h): organigrama simple + plantilla de brief de contratación",
        ],
      },
    ],
    note: "No incluye: presupuesto de pauta, guiones adicionales a los 24, contratación/nómina, producto digital más allá del piloto, ni herramientas de pago/hosting (licencias de landing, checkout y WhatsApp API corren por cuenta de la clienta).",
    cta: "Quiero el Paquete Completo",
    msg: "Hola Partnersflux. Revisé el Paquete Completo de @lorena_perch ($1,797) y quiero avanzar.",
  },
  sanctuary: {
    id: "sanctuary",
    tab: "Sanctuary",
    badge: "Fase 2",
    label: "Consultoría + instalación · 3 semanas",
    title: "@sanctuaryskinlab — Producto monetizable",
    price: "$897 USD",
    alt: "Inicia 60–90 días después del Paquete 1",
    blurb: "Incluye 2 checkpoints + 10 días de soporte post-entrega. La capacitación de IA y equipo ya está cubierta en el Paquete 1.",
    phases: [
      {
        title: "Fase 1 · Semana 1 — Auditoría y estrategia",
        items: [
          "Auditoría técnica de la tienda Lovable (checkout, flujo de pago, UTMs activos)",
          "Cláusula de alcance: reconstrucción completa se cotiza aparte si aplica",
          "Avatar, oferta y mensaje de Skincare",
          "Identidad visual conectada al universo Panther",
        ],
      },
      {
        title: "Fase 2 · Semana 2 — Instalación",
        items: [
          "Landing/checkout ajustado",
          "Automatización WhatsApp: 2 flujos",
          "Lead magnet",
        ],
      },
      {
        title: "Fase 3 · Semana 3 — Lanzamiento de cuenta",
        items: [
          "Banco de 8 guiones, sin fecha fija",
          "Plan de cross-promoción desde @lorena_perch",
        ],
      },
    ],
    note: "No incluye: presupuesto de pauta, reconstrucción completa de tienda (si aplica), capacitación IA/equipo (ya cubierta en Paquete 1), ni herramientas de pago/hosting.",
    cta: "Quiero el Paquete Sanctuary",
    msg: "Hola Partnersflux. Revisé el Paquete Sanctuary ($897) y quiero conversar sobre la secuencia.",
  },
};

const COMPARISON = [
  { feature: "Avatar, oferta y mensaje", sanctuary: true, lorena: true },
  { feature: "Arquitectura de marca cruzada", sanctuary: "Solo Sanctuary", lorena: "Ecosistema completo" },
  { feature: "Banco de guiones (consultoría)", sanctuary: "8", lorena: "24" },
  { feature: "Landing / checkout", sanctuary: true, lorena: true },
  { feature: "Automatización WhatsApp", sanctuary: "2 flujos", lorena: "3 flujos" },
  { feature: "Construcción de membresía", sanctuary: false, lorena: true },
  { feature: "VSL con guion de conversión", sanctuary: false, lorena: true },
  { feature: "Manejo de Meta Ads", sanctuary: false, lorena: true },
  { feature: "Capacitación IA — productos inteligentes", sanctuary: false, lorena: true },
  { feature: "Capacitación — estructura de equipo", sanctuary: false, lorena: true },
  { feature: "Checkpoints de seguimiento", sanctuary: "2", lorena: "4" },
  { feature: "Soporte post-entrega", sanctuary: "10 días", lorena: "15 días" },
];

function CellValue({ value }) {
  if (value === true) return <span className="ph-yes">Sí</span>;
  if (value === false) return <span className="ph-no">No</span>;
  return <span>{value}</span>;
}

function staggerStyle(index, step = 80) {
  return { "--ph-delay": `${index * step}ms` };
}

function Section({ id, eyebrow, title, subtitle, children, alt = false }) {
  return (
    <section id={id} className={`ph-section scroll-mt-24 ${alt ? "ph-section--alt" : ""}`}>
      <div className="ph-wrap">
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="ph-reveal ph-reveal-header ph-section-head">
            {eyebrow ? <p className="ph-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="ph-heading">{title}</h2> : null}
            {subtitle ? <p className="ph-sub">{subtitle}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default function PropuestaEcosistemaPantherPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [activePkg, setActivePkg] = useState("lorena");
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

      const nav = document.getElementById("ph-nav");
      nav?.classList.toggle("ph-nav--scrolled", window.scrollY > 24);
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

    document
      .querySelectorAll("[data-reveal], .ph-stagger-group")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="ph-page">
      <div className="ph-progress" aria-hidden>
        <div className="ph-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <header id="ph-nav" className="ph-nav">
        <div className="ph-nav-inner">
          <a href="#hero" className="ph-nav-brand">
            <span className="ph-logo-frame ph-logo-frame--nav">
              <Image
                src={LORENA_LOGO}
                alt="Lorena Perch"
                width={180}
                height={120}
                priority
                className="ph-nav-logo"
              />
            </span>
            <span className="ph-nav-plus">×</span>
            <span className="ph-logo-frame ph-logo-frame--nav">
              <Image
                src={FLUXA_LOGO}
                alt="Partnersflux"
                width={120}
                height={36}
                className="ph-nav-fluxa"
              />
            </span>
          </a>
          <nav className="ph-nav-links" aria-label="Secciones">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ph-nav-link ${activeSection === item.id ? "ph-nav-link--active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ph-nav-cta">
            Conversar
          </a>
        </div>
      </header>

      <section id="hero" className="ph-hero scroll-mt-24">
        <div className="ph-hero-mesh" aria-hidden />
        <div data-reveal className="ph-wrap ph-reveal is-visible">
          <p className="ph-eyebrow">Propuesta de arquitectura digital</p>
          <h1 className="ph-hero-title">Ecosistema Panther</h1>
          <p className="ph-lead">
            Cómo ordenar las líneas de Lorena Perch para invertir distinto según el rol de cada una — empezando por
            @lorena_perch.
          </p>
          <div className="ph-actions">
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ph-btn ph-btn--solid">
              Quiero conversar
            </a>
            <a href="#paquetes" className="ph-btn ph-btn--ghost">
              Ver paquetes
            </a>
          </div>
        </div>
        <div data-reveal className="ph-hero-band ph-reveal is-visible ph-reveal--band">
          <p className="ph-hero-band-text">Primero el motor. Después Sanctuary.</p>
        </div>
      </section>

      <Section
        id="analisis"
        eyebrow="01 · Análisis de marca"
        title="Una marca madre sólida. Cinco líneas sin jerarquía clara."
      >
        <div data-reveal className="ph-prose ph-reveal">
          <p>
            Lorena Perch construyó en 2.5 años una identidad sólida como mentora de empoderamiento femenino bajo el
            universo Panther — FemSovereignPower, EmbodiedWellness, SoulStyling — con 2,059 seguidores en su cuenta
            principal. Alrededor de esa marca madre expandió un ecosistema multidisciplinario: skincare, face yoga,
            Barre como instructora invitada, venta de ropa preloved y testimonios.
          </p>
          <p>
            La visión es correcta y el mensaje es auténtico; lo que falta es orden: está tratando 5 líneas como si
            necesitaran la misma inversión, cuando cada una cumple una función distinta.
          </p>
        </div>
      </Section>

      <Section
        id="mapa"
        eyebrow="02 · Marco de 4 categorías"
        title="Inversión según función, no según entusiasmo."
        alt
      >
        <div data-reveal className="ph-marca-tree ph-stagger-group">
          {CATEGORIES.map((cat, i) => (
            <article
              key={cat.label}
              className={`ph-marca-block ph-stagger ${cat.featured ? "ph-marca-block--featured" : ""}`}
              style={staggerStyle(i, 90)}
            >
              <p className="ph-card-label">{cat.label}</p>
              <h3 className="ph-card-title">{cat.account}</h3>
              <p className="ph-card-text">{cat.role}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="cuellos"
        eyebrow="03 · Cuellos de botella"
        title="Lo que hoy frena el ecosistema"
      >
        <ul data-reveal className="ph-list ph-stagger-group">
          {BOTTLENECKS.map((item, i) => (
            <li key={item} className="ph-stagger" style={staggerStyle(i, 55)}>
              <span className="ph-list-mark">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="antes"
        eyebrow="04 · Antes y después"
        title="De saturación operativa a arquitectura clara"
        alt
      >
        <div data-reveal className="ph-compare ph-stagger-group">
          {BEFORE_AFTER.map((row, i) => (
            <div key={row.before} className="ph-compare-row ph-stagger" style={staggerStyle(i, 60)}>
              <span className="ph-compare-before">{row.before}</span>
              <span className="ph-compare-arrow">→</span>
              <span className="ph-compare-after">{row.after}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="vision" eyebrow="05 · Destino" title="A dónde llevará su marca">
        <div data-reveal className="ph-prose ph-reveal">
          <p>
            <strong>@lorena_perch</strong> queda como el único motor de contenido y descubrimiento, con membresía
            recurrente e ingreso más predecible.
          </p>
          <p>
            Face Yoga entra como pilar continuo dentro de esa membresía. Sanctuary deja de pelear por audiencia propia
            y se convierte en el destino de conversión.
          </p>
          <p>
            Barre sigue construyendo prestigio sin desviar presupuesto. Y ella gana herramientas de IA para producir,
            más un criterio claro de a quién delegar primero.
          </p>
        </div>
        <div data-reveal className="ph-card ph-card--featured ph-reveal" style={{ marginTop: "1.25rem" }}>
          <p className="ph-card-text" style={{ margin: 0, color: "var(--ph-heading)", fontSize: "1rem" }}>
            Ingreso predecible. Menos 1:1. Más sistema.
          </p>
        </div>
      </Section>

      <Section
        id="fases"
        eyebrow="06 · Por qué va en 2 fases"
        title="60–90 días entre paquetes. No es demora: es absorción."
        alt
      >
        <div data-reveal className="ph-prose ph-reveal">
          <p>
            <strong>Capacidad de absorción:</strong> instalar los dos sistemas a la vez, mientras aprende a
            operarlos, es la receta para que ninguno se sostenga.
          </p>
          <p>
            <strong>Validación antes de expandir:</strong> el Paquete 1 necesita generar resultado (membresía +
            automatización funcionando) antes de invertir presupuesto y atención en Sanctuary.
          </p>
          <p>
            <strong>Reutilización de aprendizaje:</strong> lo aprendido en la capacitación de IA y equipo del Paquete
            1 se aplica directo a instalar el Paquete 2.
          </p>
        </div>
        <div data-reveal className="ph-timeline ph-stagger-group" style={{ marginTop: "1.75rem" }}>
          {TIMELINE.map((item, i) => (
            <article key={item.when} className="ph-timeline-item ph-stagger" style={staggerStyle(i, 100)}>
              <p className="ph-timeline-when">{item.when}</p>
              <h3 className="ph-timeline-title">{item.title}</h3>
              <p className="ph-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="paquetes" eyebrow="07 · Paquetes" title="Dos caminos, un orden claro">
        <div data-reveal className="ph-reveal">
          <p className="ph-pkg-order">
            Fase 1 ahora (@lorena_perch) · Fase 2 a los 60–90 días (@sanctuaryskinlab)
          </p>
          <div className="ph-pkg-tabs" role="tablist" aria-label="Paquetes">
            {Object.values(PACKAGES).map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activePkg === p.id}
                className={`ph-pkg-tab ${activePkg === p.id ? "ph-pkg-tab--active" : ""}`}
                onClick={() => setActivePkg(p.id)}
              >
                <span className="ph-pkg-tab-badge">{p.badge}</span>
                <span className="ph-pkg-tab-label">{p.tab}</span>
                <span className="ph-pkg-tab-price">{p.price}</span>
              </button>
            ))}
          </div>

          <article className="ph-card ph-card--featured ph-pkg-panel">
            <p className="ph-card-label">{pkg.label}</p>
            <h3 className="ph-card-title">{pkg.title}</h3>
            <p className="ph-price">{pkg.price}</p>
            <p className="ph-price-alt">{pkg.alt}</p>
            <p className="ph-card-text">{pkg.blurb}</p>
            {pkg.phases.map((phase) => (
              <div key={phase.title} className="ph-phase">
                <p className="ph-phase-title">{phase.title}</p>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="ph-note">{pkg.note}</p>
            <a
              href={waUrl(pkg.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="ph-btn ph-btn--solid"
              style={{ marginTop: "1.25rem", width: "100%" }}
            >
              {pkg.cta}
            </a>
          </article>
        </div>

        <header data-reveal className="ph-section-head ph-reveal ph-reveal-header" style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          <p className="ph-eyebrow">08 · Diferenciador</p>
          <h3 className="ph-heading" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)" }}>
            Qué incluye cada paquete
          </h3>
        </header>
        <div data-reveal className="ph-table-wrap ph-reveal">
          <table className="ph-table">
            <thead>
              <tr>
                <th>Entregable</th>
                <th>$897 Sanctuary</th>
                <th>$1,797 Lorena Perch</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>
                    <CellValue value={row.sanctuary} />
                  </td>
                  <td>
                    <CellValue value={row.lorena} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <section id="cierre" className="ph-section ph-section--cta scroll-mt-24">
        <div className="ph-wrap">
          <div data-reveal className="ph-partners-strip ph-stagger-group" aria-label="Alianza">
            <span className="ph-logo-frame ph-logo-frame--hero ph-stagger ph-logo-in" style={staggerStyle(0, 120)}>
              <Image
                src={LORENA_LOGO}
                alt="Lorena Perch · Panthera Deliciosa"
                width={420}
                height={280}
                className="ph-hero-logo"
              />
            </span>
            <span className="ph-nav-plus ph-stagger" aria-hidden style={staggerStyle(1, 120)}>
              ×
            </span>
            <span className="ph-logo-frame ph-logo-frame--hero ph-stagger ph-logo-in" style={staggerStyle(2, 120)}>
              <Image
                src={FLUXA_LOGO}
                alt="Partnersflux"
                width={200}
                height={60}
                className="ph-hero-fluxa"
              />
            </span>
          </div>
          <div data-reveal className="ph-cta-panel ph-reveal">
            <p className="ph-eyebrow ph-eyebrow--on-dark">Siguiente paso</p>
            <h2 className="ph-heading ph-heading--on-dark">Primero el motor. Después el producto que convierte.</h2>
            <p className="ph-sub ph-sub--on-dark">
              Si el orden del Ecosistema Panther te hace sentido, conversamos y definimos el arranque del Paquete
              Completo.
            </p>
            <div className="ph-actions" style={{ justifyContent: "center" }}>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ph-btn ph-btn--bone">
                Escribir por WhatsApp
              </a>
              <a href="#paquetes" className="ph-btn ph-btn--ghost-light">
                Revisar paquetes
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="ph-footer">
        Propuesta confidencial · Partnersflux · Lorena Perch · Ecosistema Panther
      </footer>

      <a
        href={waUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="ph-floating"
        aria-label="WhatsApp +57 311 6425337"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
