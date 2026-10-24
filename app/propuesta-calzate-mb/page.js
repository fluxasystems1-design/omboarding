"use client";

import { useEffect, useMemo, useState } from "react";

const BRAND_FULL = "Cálzate MB";
const IG_HANDLE = "@calzatemym";
const IG_URL = "https://www.instagram.com/calzatemym/";
const LOGO = "/imagenes/calzate-mb/logo.png";
const HERO_POLAROID = "/imagenes/calzate-mb/hero-polaroid.png";
const PHOTO_SHOP = "/imagenes/calzate-mb/cap-shop.jpg?v=ig1";
const PHOTO_IG1 = "/imagenes/calzate-mb/from-ig-1.jpg";
const PHOTO_IG4 = "/imagenes/calzate-mb/from-ig-4.jpg";
const PHOTO_IG5 = "/imagenes/calzate-mb/from-ig-5.jpg";
const PHOTO_ATMO = "/imagenes/calzate-mb/atmosphere.jpg";
const WA_NUMBER = "573116425337";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vision", label: "Nuestra visión" },
  { id: "oportunidad", label: "La oportunidad" },
  { id: "transformacion", label: "Transformación" },
  { id: "solucion", label: "Solución" },
  { id: "planes", label: "Planes" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "experiencias", label: "Experiencias" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "inversion", label: "Inversión" },
  { id: "continuidad", label: "Continuidad" },
  { id: "cierre", label: "Cierre" },
];

const BUILT = [
  { title: "Trayectoria", text: "Experiencia en la industria." },
  { title: "Producto", text: "Conocimiento de fabricación." },
  { title: "Potencial", text: "Colecciones con identidad propia." },
];

const OPPORTUNITY = [
  {
    title: "Una marca que se reconozca",
    text: "Identidad visual y comunicación que eleven su posicionamiento.",
  },
  {
    title: "Colecciones que se deseen",
    text: "Contenido y campañas que generen expectativa por cada lanzamiento.",
  },
  {
    title: "Experiencias que conecten",
    text: "Encuentros y colaboraciones que acerquen los productos a nuevas mujeres.",
  },
  {
    title: "Un ecosistema que convierta",
    text: "Marketing, tienda online y campañas trabajando hacia un mismo objetivo.",
  },
];

const TRANSFORMATIONS = [
  { before: "Reconocimiento principalmente como fabricante", after: "Identidad de marca propia" },
  { before: "Colecciones comunicadas como productos", after: "Colecciones con concepto y narrativa" },
  { before: "Contenido principalmente de catálogo", after: "Campañas audiovisuales profesionales" },
  { before: "Lanzamientos digitales tradicionales", after: "Estrategia de expectativa y experiencias" },
  { before: "Ecommerce en desarrollo", after: "Ecosistema comercial optimizado" },
  { before: "Acciones de marketing independientes", after: "Una estrategia conectada" },
];

const SOLUTIONS = [
  {
    num: "01",
    title: "Estrategia y posicionamiento",
    text: "Definimos cómo queremos que Cálzate MB se vea, se comunique y se diferencie en el mercado.",
  },
  {
    num: "02",
    title: "Dirección creativa y contenido",
    text: "Desarrollamos conceptos de colección, guiones, campañas, fotografía y videos que construyan una imagen más profesional.",
  },
  {
    num: "03",
    title: "Lanzamientos y experiencias",
    text: "Creamos estrategias para presentar colecciones, generar expectativa e integrar la marca en espacios presenciales.",
  },
  {
    num: "04",
    title: "Marketing y crecimiento",
    text: "Conectamos publicidad, contenido, ecommerce y oportunidades de automatización para impulsar las ventas.",
  },
];

const PLANS = [
  {
    id: "identity",
    tag: "Plan 01 · Brand Identity",
    name: "Brand Identity",
    headline: "Construimos una marca que se reconozca.",
    desc: "Para comenzar a elevar su imagen, profesionalizar el contenido y comunicar sus colecciones con una estrategia clara.",
    monthly: 3500000,
    total90: 10500000,
    featured: false,
    blocks: [
      {
        label: "Estrategia de marca",
        items: [
          "Diagnóstico inicial y posicionamiento",
          "Dirección creativa de una colección por trimestre",
          "Concepto visual y moodboard",
          "Calendario estratégico mensual",
          "Hasta 8 guiones mensuales",
        ],
      },
      {
        label: "Contenido profesional",
        items: [
          "Una jornada audiovisual mensual de hasta 4 horas en Cúcuta",
          "6 reels editados al mes",
          "15 fotografías profesionales editadas al mes",
        ],
      },
      {
        label: "Marketing digital",
        items: [
          "Plan estratégico de contenido",
          "Recomendaciones para campañas comerciales",
          "Diagnóstico general del ecommerce",
          "Una reunión estratégica mensual",
        ],
      },
    ],
    note: "Producción audiovisual estándar incluida, sujeta a validación de proveedores. No incluye pauta, gestión de anuncios, administración diaria de redes, modelos, eventos ni desarrollos técnicos.",
  },
  {
    id: "experience",
    tag: "Plan recomendado · Brand Experience & Launch",
    name: "Brand Experience & Launch",
    headline: "Creamos una marca que se viva, se desee y se recuerde.",
    desc: "Para desarrollar campañas más completas, elevar la producción de contenido, impulsar las colecciones y conectar la marca con experiencias.",
    monthly: 4950000,
    total90: 14850000,
    featured: true,
    blocks: [
      {
        label: "Estrategia y dirección de marca",
        items: [
          "Diagnóstico y estrategia de posicionamiento",
          "Dirección creativa de una colección por trimestre",
          "Concepto, narrativa y moodboard de campaña",
          "Calendario estratégico mensual",
          "Hasta 15 guiones mensuales",
        ],
      },
      {
        label: "Producción audiovisual",
        items: [
          "Una jornada de producción mensual de hasta 6 horas en Cúcuta",
          "12 reels garantizados + hasta 3 adicionales, según el material capturado y la capacidad de producción acordada",
          "20 fotografías profesionales editadas mensuales",
          "4 piezas gráficas mensuales",
          "Edición y dirección creativa de las piezas",
        ],
      },
      {
        label: "Marketing y crecimiento",
        items: [
          "Estrategia de expectativa y lanzamiento",
          "Gestión y optimización de hasta 2 campañas activas de Meta Ads",
          "Auditoría inicial del ecommerce",
          "Propuesta de embudo comercial y automatizaciones",
          "Seguimiento de campañas e informe mensual",
        ],
      },
      {
        label: "Experiencias de marca",
        items: [
          "Planeación estratégica de lanzamiento de colección",
          "Gestión de una participación como marca aliada en un evento de Entre Mujeres que Crean durante los 90 días, sujeto a programación y compatibilidad",
          "Conceptualización de una experiencia exclusiva, si la marca decide realizarla",
        ],
      },
      {
        label: "Acompañamiento",
        items: [
          "Una reunión estratégica quincenal",
          "Coordinación creativa del equipo y proveedores",
          "Seguimiento de avances, entregables y resultados",
        ],
      },
    ],
    note: "Incluye la producción mensual estándar especificada. No incluye presupuesto publicitario, modelos, maquillaje, locaciones pagas, logística y ejecución de eventos exclusivos, nuevas páginas web ni implementación técnica de automatizaciones. Antes de impuestos aplicables.",
  },
];

const COMPARE_ROWS = [
  { f: "Estrategia de posicionamiento", fs: "Estrategia", a: "✓", b: "✓" },
  { f: "Dirección creativa", fs: "Dir. creativa", a: "✓", b: "✓" },
  { f: "Concepto de colección trimestral", fs: "Concepto colección", a: "✓", b: "✓" },
  { f: "Calendario de contenido", fs: "Calendario", a: "✓", b: "✓" },
  { f: "Guiones mensuales", fs: "Guiones / mes", a: "8", b: "Hasta 15" },
  { f: "Jornada audiovisual mensual", fs: "Jornada AV", a: "4 h", b: "6 h" },
  { f: "Reels mensuales", fs: "Reels / mes", a: "6", b: "12–15" },
  { f: "Fotografías editadas", fs: "Fotos editadas", a: "15", b: "20" },
  { f: "Piezas gráficas", fs: "Piezas gráficas", a: "—", b: "4" },
  { f: "Plan de lanzamiento", fs: "Lanzamiento", a: "Básico", b: "Integral" },
  { f: "Gestión Meta Ads", fs: "Meta Ads", a: "—", b: "✓" },
  { f: "Auditoría ecommerce", fs: "Auditoría ecom", a: "General", b: "Detallada" },
  { f: "Estrategia de automatizaciones", fs: "Automatizaciones", a: "—", b: "✓" },
  { f: "Participación en experiencia de la comunidad", fs: "Exp. comunidad", a: "—", b: "✓" },
  { f: "Conceptualización de evento exclusivo", fs: "Evento exclusivo", a: "—", b: "✓" },
  { f: "Seguimiento estratégico", fs: "Seguimiento", a: "Mensual", b: "Quincenal" },
  { f: "Precio mensual", fs: "Precio / mes", a: "$3.500.000", b: "$4.950.000", price: true },
];

const PHASES = [
  {
    num: "01",
    when: "Primer mes",
    title: "Descubrimos y definimos el universo de Cálzate MB",
    text: "Empezamos entendiendo la historia de la marca, la clienta que queremos atraer y la imagen que queremos proyectar. Desarrollamos el concepto creativo de la primera colección, definimos la estrategia de contenido, auditamos el ecommerce y realizamos la primera producción audiovisual.",
    deliverable: "Una dirección de marca definida, una campaña conceptualizada y los primeros contenidos profesionales.",
  },
  {
    num: "02",
    when: "Segundo mes",
    title: "Hacemos que la colección empiece a generar expectativa",
    text: "Activamos la campaña de contenido, producimos fotografías y reels, desarrollamos anuncios y organizamos la estrategia de lanzamiento. Si existe un evento de la comunidad compatible con la colección, coordinamos la participación como marca aliada.",
    deliverable: "Campaña de expectativa, contenido activo y preparación comercial del lanzamiento.",
  },
  {
    num: "03",
    when: "Tercer mes",
    title: "Lanzamos, conectamos y seguimos creciendo",
    text: "Ejecutamos la campaña digital de lanzamiento, reforzamos las piezas comerciales y analizamos qué contenidos y anuncios están generando resultados. Diseñamos una hoja de ruta para las siguientes colecciones y nuevas oportunidades de crecimiento.",
    deliverable: "Lanzamiento digital, análisis de resultados y plan de continuidad.",
  },
];

const EXPERIENCES = [
  {
    title: "Brunch & Style",
    text: "Un encuentro para descubrir diseños, compartir y conectar con nuevas compradoras.",
  },
  {
    title: "Wellness & Lifestyle",
    text: "Experiencias de movimiento donde la marca pueda integrarse con productos o beneficios especiales.",
  },
  {
    title: "An Evening with Cálzate",
    text: "Una experiencia nocturna inspirada en una colección especial.",
  },
  {
    title: "Collection Preview",
    text: "Un espacio para conocer, probar y descubrir anticipadamente nuevos modelos.",
  },
];

const ECOM_POINTS = [
  "Presentación de colecciones, fotografías y fichas de producto",
  "Navegación, selección de tallas, colores y proceso de compra",
  "Puntos de confianza y oportunidades de mejora",
  "Integración estratégica con campañas publicitarias",
  "Posibilidad de landing pages para modelos destacados",
  "Oportunidades de seguimiento y automatización",
];

function formatCop(n) {
  return new Intl.NumberFormat("es-CO").format(n);
}

function waUrl(message) {
  if (!WA_NUMBER || !/^\d{10,15}$/.test(WA_NUMBER)) return null;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Eyebrow({ children, className = "" }) {
  const text = String(children || "");
  const match = text.match(/^(\d{2})\s*[·•\-–—]\s*(.+)$/);
  if (match) {
    return (
      <p className={`cm-eyebrow ${className}`.trim()}>
        <i>{match[1]}</i>
        <span>{match[2]}</span>
      </p>
    );
  }
  return <p className={`cm-eyebrow ${className}`.trim()}>{children}</p>;
}

function Section({ id, eyebrow, title, children, soft = false }) {
  return (
    <section id={id} className={`scroll-mt-28 ${soft ? "cm-section--soft" : ""}`}>
      <div className="cm-section">
        <div data-reveal className="cm-reveal">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {title ? <h2 className="cm-heading">{title}</h2> : null}
        </div>
        <div data-reveal className="cm-reveal">
          {children}
        </div>
      </div>
    </section>
  );
}

/** Creativo de apoyo: siempre después del texto, nunca abre la sección. */
function Creative({ src, alt, caption, wide = false }) {
  return (
    <figure className={`cm-creative${wide ? " cm-creative--wide" : ""} cm-reveal`} data-reveal>
      <div className="cm-creative-mat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
      {caption ? <figcaption className="cm-creative-cap">{caption}</figcaption> : null}
    </figure>
  );
}

export default function PropuestaCalzateMbPage() {
  const [progress, setProgress] = useState(0);
  const [navStuck, setNavStuck] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");
  const [selectedId, setSelectedId] = useState("experience");
  const [copied, setCopied] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const selected = PLANS.find((p) => p.id === selectedId) || PLANS[1];

  const waMessage = `Hola Partnersflux. Revisé la propuesta Brand Evolution de ${BRAND_FULL} y quiero comenzar con ${selected.name} ($${formatCop(selected.monthly)} COP/mes · 90 días).`;

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
      setNavStuck(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { threshold: 0.22, rootMargin: "-10% 0px -45% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
    return () => sectionObserver.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const copyWaMessage = async () => {
    try {
      await navigator.clipboard.writeText(waMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="cm-page">
      <div className="cm-ambient" aria-hidden />
      <div className="cm-progress fixed left-0 top-0 z-[60] w-full" aria-hidden>
        <div className="cm-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <nav className={`cm-nav${navStuck ? " is-stuck" : ""}`} aria-label="Secciones">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cm-nav-logo" src={LOGO} alt={BRAND_FULL} />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`cm-nav-link ${activeNav === item.id ? "cm-nav-link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="cm-hero scroll-mt-28">
        <div className="cm-hero-inner">
          <figure className="cm-hero-shot cm-hero-shot--polaroid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_POLAROID} alt="Colección Cálzate MB · @calzatemym" />
          </figure>
          <div className="cm-hero-copy">
            <Eyebrow className="cm-eyebrow--on-hero">Partnersflux × Cálzate MB</Eyebrow>
            <p className="cm-hero-kicker">Propuesta estratégica comercial · Brand Evolution 2026–2027</p>
            <h1 className="cm-hero-title">
              Has creado zapatos para grandes marcas. Ahora es momento de construir una que deje tu propia huella.
            </h1>
            <p className="cm-hero-lead">Una nueva etapa para Cálzate MB.</p>
            <p className="cm-hero-lead cm-hero-lead--soft">
              Queremos ayudarte a transformar toda tu experiencia, trayectoria y conocimiento en una marca que las
              mujeres reconozcan, deseen y recuerden.
            </p>
            <p className="cm-hero-lead cm-hero-lead--soft">
              A través de estrategia, dirección creativa, contenido profesional y experiencias que conviertan tus
              colecciones en verdaderos lanzamientos.
            </p>
            <p className="cm-highlight cm-highlight--on-hero">
              Tu historia ya tiene valor. Hagamos que tu marca también lo refleje.
            </p>
            <p className="cm-hero-meta">
              Estrategia de marca · Producción audiovisual · Lanzamientos · Marketing digital ·{" "}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                {IG_HANDLE}
              </a>
            </p>
            <div className="cm-hero-cta">
              <a href="#planes" className="cm-btn cm-btn-solid">
                Ver planes
              </a>
              <a href="#vision" className="cm-btn cm-btn-ghost">
                Leer propuesta
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="vision"
        eyebrow="02 · Entendemos tu historia"
        title="Durante años has estado detrás de grandes marcas. Hoy quieres que la protagonista sea la tuya."
      >
        <div className="cm-prose cm-prose--story" style={{ marginTop: "1.25rem" }}>
          <p data-reveal className="cm-reveal">
            <strong>Cálzate MB no comienza desde cero.</strong>
          </p>
          <p data-reveal className="cm-reveal">
            Detrás de cada diseño hay una trayectoria en la industria del calzado, experiencia fabricando para marcas
            reconocidas y un conocimiento del producto que se ha construido durante años.
          </p>
          <p data-reveal className="cm-reveal">
            Y justamente por eso, sabemos que tu siguiente paso no consiste simplemente en vender más zapatos.
          </p>
          <p data-reveal className="cm-reveal">
            Quieres desarrollar una marca con personalidad, una imagen más elegante, campañas profesionales y
            colecciones que generen expectativa.
          </p>
          <p data-reveal className="cm-reveal">Una marca que tenga su propio lugar en la mente de las mujeres.</p>
          <p data-reveal className="cm-reveal cm-highlight cm-highlight--ruled">
            Porque una cosa es fabricar un gran producto y otra es construir una marca que las personas quieran elegir
            por su nombre.
          </p>
        </div>
        <div className="cm-pillars">
          {BUILT.map((item, i) => (
            <article key={item.title} data-reveal className="cm-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <h3 className="cm-pillar-title">{item.title}</h3>
              <p className="cm-pillar-text">{item.text}</p>
            </article>
          ))}
        </div>
        <Creative
          src={PHOTO_IG1}
          alt="Colección Cálzate MB"
          caption="El producto ya está. Ahora toca construir la marca."
        />
      </Section>

      <Section
        id="oportunidad"
        eyebrow="03 · La oportunidad"
        title="Tus próximas colecciones merecen mucho más que una publicación en Instagram."
        soft
      >
        <div className="cm-prose">
          <p data-reveal className="cm-reveal">
            Imagina que antes de lanzar una colección, las mujeres ya quieran conocerla.
          </p>
          <p data-reveal className="cm-reveal">
            Que cada lanzamiento tenga su propio concepto, campaña visual, modelos y contenido que transmita la esencia
            de Cálzate MB.
          </p>
          <p data-reveal className="cm-reveal">
            Que tus zapatos estén presentes en experiencias donde las mujeres puedan descubrirlos, probárselos y
            compartirlos.
          </p>
          <p data-reveal className="cm-reveal">
            Y que toda esa atención también se transforme en oportunidades de venta.
          </p>
          <p data-reveal className="cm-reveal">
            Eso es lo que queremos construir contigo: una marca con identidad, visibilidad y una estrategia comercial
            detrás.
          </p>
        </div>
        <div className="cm-points">
          {OPPORTUNITY.map((item, i) => (
            <article
              key={item.title}
              data-reveal
              className="cm-point cm-reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="cm-point-num">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Creative
          src={PHOTO_IG5}
          alt="Cálzate MB en boutique"
          caption="Una marca que se ve, se reconoce y se desea."
          wide
        />
      </Section>

      <Section
        id="transformacion"
        eyebrow="04 · La transformación"
        title="De fabricar zapatos para otras marcas a construir una marca referente por derecho propio."
      >
        <p className="cm-lead cm-reveal" style={{ marginTop: "1.1rem" }} data-reveal>
          Nuestra propuesta busca darle a Cálzate MB una dirección estratégica y creativa que le permita evolucionar,
          cuidando su esencia.
        </p>
        <div className="cm-transform cm-reveal" data-reveal>
          <div className="cm-transform-head">
            <span>Hoy</span>
            <span>La nueva etapa</span>
          </div>
          {TRANSFORMATIONS.map((row) => (
            <div key={row.before} className="cm-transform-row">
              <p>{row.before}</p>
              <p>{row.after}</p>
            </div>
          ))}
        </div>
        <p className="cm-highlight cm-highlight--ruled cm-reveal" data-reveal>
          El objetivo no es parecer una marca diferente. Es lograr que Cálzate MB proyecte la calidad, experiencia y
          visión que ya existen detrás del negocio.
        </p>
      </Section>

      <Section
        id="solucion"
        eyebrow="05 · Nuestra solución"
        title="Un equipo creativo y estratégico para transformar ideas en campañas, experiencias y crecimiento."
        soft
      >
        <p className="cm-lead cm-reveal" style={{ marginTop: "1.1rem" }} data-reveal>
          En Partnersflux reunimos las capacidades de estrategia, marketing, dirección creativa, producción de
          contenido y sistemas digitales para acompañar el crecimiento de tu marca.
        </p>
        <div className="cm-solutions">
          {SOLUTIONS.map((item, i) => (
            <article
              key={item.num}
              className="cm-solution cm-reveal"
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="cm-solution-num" aria-hidden>
                {item.num}
              </span>
              <div className="cm-solution-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Creative
          src={PHOTO_IG4}
          alt="Dirección creativa de colección"
          caption="De la idea a la campaña: concepto, imagen y contenido."
        />
      </Section>

      <Section
        id="planes"
        eyebrow="06 · Elige cómo comenzar esta nueva etapa"
        title="Dos formas de acompañar la evolución de Cálzate MB."
      >
        <div className="cm-plans">
          {PLANS.map((plan) => (
            <article key={plan.id} className={`cm-plan ${plan.featured ? "cm-plan--featured" : ""}`}>
              {plan.featured ? <span className="cm-plan-badge">Plan recomendado</span> : null}
              <span className="cm-plan-tag">{plan.tag}</span>
              <h3 className="cm-plan-name">{plan.name}</h3>
              <p className="cm-plan-headline">{plan.headline}</p>
              <p className="cm-plan-price">${formatCop(plan.monthly)} COP/mes</p>
              <p className="cm-plan-desc">{plan.desc}</p>
              <div className="cm-plan-block">
                {plan.blocks.map((block) => (
                  <div key={block.label} style={{ marginTop: "0.85rem" }}>
                    <h4>{block.label}</h4>
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="cm-plan-pay">
                Inversión por 90 días
                <br />
                <strong>${formatCop(plan.total90)} COP</strong>
              </p>
              <p className="cm-plan-note">{plan.note}</p>
              <button
                type="button"
                className={`cm-btn ${plan.featured ? "cm-btn-accent" : "cm-btn-ink-ghost"}`}
                onClick={() => {
                  setSelectedId(plan.id);
                  document.getElementById("cierre")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Elegir {plan.name === "Brand Identity" ? "Brand Identity" : "Experience & Launch"}
              </button>
            </article>
          ))}
        </div>

        <div className="cm-compare" style={{ marginTop: "2.5rem" }}>
          <p className="cm-eyebrow" style={{ marginBottom: "0.85rem" }}>
            Comparativa de planes
          </p>
          <h3 className="cm-heading" style={{ fontSize: "clamp(1.45rem, 3vw, 1.9rem)" }}>
            Elige el nivel de acompañamiento que necesita tu marca.
          </h3>
          <table className="cm-compare-table">
            <thead>
              <tr>
                <th scope="col">Servicios</th>
                <th scope="col">
                  <span className="cm-compare-label cm-compare-label--full">Brand Identity</span>
                  <span className="cm-compare-label cm-compare-label--short" title="Brand Identity">
                    Identity
                  </span>
                </th>
                <th scope="col">
                  <span className="cm-compare-label cm-compare-label--full">Experience & Launch</span>
                  <span className="cm-compare-label cm-compare-label--short" title="Experience & Launch">
                    Experience
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.f} className={row.price ? "cm-compare-price" : undefined}>
                  <th scope="row">
                    <span className="cm-compare-label cm-compare-label--full">{row.f}</span>
                    <span className="cm-compare-label cm-compare-label--short" title={row.f}>
                      {row.fs || row.f}
                    </span>
                  </th>
                  <td>{row.a}</td>
                  <td>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cm-recommend">
          <p>
            <strong>Nuestra recomendación es Brand Experience & Launch</strong>, porque conecta directamente con la
            visión de Cálzate MB: evolucionar su imagen, profesionalizar sus campañas y convertir cada colección en una
            oportunidad para atraer nuevas mujeres.
          </p>
        </div>
      </Section>

      <Section
        id="ejecucion"
        eyebrow="07 · Nuestra ruta de 90 días"
        title="Una transformación que comienza con estrategia y toma forma con cada campaña."
        soft
      >
        <div className="cm-timeline">
          {PHASES.map((phase) => (
            <article key={phase.num} className="cm-phase">
              <p className="cm-phase-num">{phase.num}</p>
              <p className="cm-phase-when">{phase.when}</p>
              <h3 className="cm-phase-title">{phase.title}</h3>
              <p className="cm-phase-text">{phase.text}</p>
              <p className="cm-phase-deliverable">
                <strong>Entregable principal:</strong> {phase.deliverable}
              </p>
            </article>
          ))}
        </div>
        <p className="cm-stat-note">
          El calendario se ajustará a la disponibilidad de productos, colecciones, aprobaciones y tiempos de
          producción.
        </p>
      </Section>

      <Section
        id="experiencias"
        eyebrow="08 · Experiencias que le dan vida a tu marca"
        title="Porque los zapatos también hacen parte de los momentos que queremos recordar."
      >
        <div className="cm-prose">
          <p>
            En Partnersflux creemos que las marcas crean conexiones más fuertes cuando hacen parte de experiencias
            reales.
          </p>
          <p>
            A través de Entre Mujeres que Crean, organizamos encuentros que reúnen mujeres alrededor del bienestar, las
            conexiones y el estilo de vida.
          </p>
          <p>Queremos que Cálzate MB también tenga la oportunidad de formar parte de estos espacios.</p>
        </div>
        <Creative
          src={PHOTO_ATMO}
          alt="Ambiente para experiencias de marca"
          caption="Espacios donde la marca se vive, no solo se publica."
          wide
        />
        <div className="cm-pillars" style={{ marginTop: "1.75rem" }}>
          {EXPERIENCES.map((item, i) => (
            <article
              key={item.title}
              data-reveal
              className="cm-reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3 className="cm-pillar-title">{item.title}</h3>
              <p className="cm-pillar-text">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="cm-eyebrow" style={{ marginTop: "2rem" }}>
          Dos maneras de participar
        </p>
        <div className="cm-experience-ways">
          <article>
            <span className="cm-plan-badge">Incluido en el plan recomendado</span>
            <p className="cm-eyebrow">01</p>
            <h3>Como marca aliada de Entre Mujeres que Crean</h3>
            <p>
              Gestionamos una oportunidad de participación durante los 90 días en un evento propio compatible con
              Cálzate MB. Puede incluir exhibición de producto, beneficios para las asistentes e integración orgánica
              de la marca, de acuerdo con el formato del evento.
            </p>
            <p className="cm-stat-note">
              La fecha, el aforo y los espacios de visibilidad estarán sujetos a disponibilidad. No incluye productos
              aportados, activaciones exclusivas, creadoras remuneradas ni piezas audiovisuales adicionales.
            </p>
          </article>
          <article>
            <span className="cm-plan-badge cm-badge-muted">Propuesta adicional</span>
            <p className="cm-eyebrow">02</p>
            <h3>Una experiencia creada exclusivamente para Cálzate MB</h3>
            <p>
              Si quieres presentar una colección a través de un evento exclusivo, podemos diseñar y producir una
              experiencia a la medida: brunch, showroom, cena, pasarela o lanzamiento con creadoras y clientas
              seleccionadas.
            </p>
            <p className="cm-stat-note">
              La planificación creativa está contemplada en el plan recomendado. La producción y operación presencial
              requieren un presupuesto independiente, aprobado previamente.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="ecommerce"
        eyebrow="09 · Tu ecommerce también hace parte de la estrategia"
        title="Que cada mujer que descubra tus zapatos tenga un camino sencillo para comprarlos."
        soft
      >
        <div className="cm-split">
          <div className="cm-prose" style={{ marginTop: 0 }}>
            <p data-reveal className="cm-reveal">
              Sabemos que actualmente estás desarrollando tu tienda online.
            </p>
            <p data-reveal className="cm-reveal">
              Por eso, nuestra propuesta busca ayudarte a aprovechar mejor esa inversión, sin reemplazar lo que ya estás
              construyendo.
            </p>
            <p data-reveal className="cm-reveal">
              Una vez esté disponible, revisaremos la experiencia de compra y encontraremos oportunidades para
              convertirla en un canal comercial más efectivo.
            </p>
            <p className="cm-stat-note cm-reveal" style={{ marginTop: "1rem" }} data-reveal>
              Las mejoras técnicas se priorizarán después de la auditoría y se cotizarán por separado, según su
              complejidad.
            </p>
          </div>
          <div data-reveal className="cm-reveal">
            <p className="cm-eyebrow">Qué analizaremos</p>
            <ul className="cm-checklist">
              {ECOM_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <Creative
          src={PHOTO_SHOP}
          alt="Espacio comercial Cálzate MB"
          caption="Que descubrir el producto también invite a comprarlo."
          wide
        />
      </Section>

      <Section
        id="inversion"
        eyebrow="10 · Inversión y forma de trabajo"
        title="Una inversión pensada para construir el siguiente capítulo de tu marca."
      >
        <div className="cm-invest">
          <p className="cm-eyebrow">Plan recomendado · Brand Experience & Launch</p>
          <p className="cm-invest-price">${formatCop(4950000)} COP</p>
          <p className="cm-invest-label">Inversión mensual</p>
          <div className="cm-invest-grid">
            <div>
              <p className="cm-invest-k">Duración inicial</p>
              <p className="cm-invest-v">90 días</p>
            </div>
            <div>
              <p className="cm-invest-k">Forma de pago</p>
              <p className="cm-invest-v">3 mensualidades</p>
            </div>
            <div>
              <p className="cm-invest-k">Inversión total</p>
              <p className="cm-invest-v">${formatCop(14850000)}</p>
            </div>
          </div>
          <p className="cm-stat-note">Precios en pesos colombianos, antes de los impuestos aplicables.</p>
          <div className="cm-prose" style={{ marginTop: "1.35rem" }}>
            <p>
              Así trabajaremos: el primer pago se realiza al iniciar el proyecto y los siguientes al comienzo de cada
              mes de acompañamiento. Se establecerá un cronograma de producción y aprobaciones, con hasta dos rondas de
              ajustes por pieza.
            </p>
            <p>
              La producción mensual contempla una jornada estándar en Cúcuta y sus entregables finales acordados. Las
              grabaciones adicionales, talentos especializados, espacios pagados y cambios sustanciales posteriores a
              la aprobación se presupuestan aparte.
            </p>
            <p>
              La inversión de pauta será asumida directamente por la marca. La implementación tecnológica y los eventos
              exclusivos requerirán cotizaciones independientes.
            </p>
            <p>El inicio del servicio y el alcance definitivo estarán sujetos a la aprobación comercial y contractual.</p>
          </div>
        </div>
      </Section>

      <Section
        id="continuidad"
        eyebrow="11 · Después de los 90 días"
        title="Una colección puede ser el comienzo. Lo que buscamos es construir una marca que siga creciendo."
        soft
      >
        <div className="cm-prose">
          <p>
            Los primeros 90 días nos permitirán definir una identidad, desarrollar contenido, activar campañas y
            conocer mejor la respuesta del mercado.
          </p>
          <p>Pero una marca referente no se construye con un solo lanzamiento.</p>
          <p>
            Por eso, al finalizar esta primera etapa, podremos diseñar una continuidad enfocada en las próximas
            colecciones, nuevas campañas, experiencias presenciales y oportunidades comerciales.
          </p>
          <p>
            Queremos convertirnos en el equipo que acompañe la evolución de Cálzate MB, más allá de ejecutar una sola
            campaña.
          </p>
        </div>
        <p className="cm-stat-note">La continuidad se definirá mediante un nuevo acuerdo de alcance e inversión.</p>
      </Section>

      <Section
        id="cierre"
        eyebrow="12 · Cierre"
        title="Durante años has creado zapatos para grandes marcas. Ahora es momento de que las mujeres recuerden la tuya."
      >
        <div className="cm-close">
          <div className="cm-prose" style={{ marginTop: 0 }}>
            <p data-reveal className="cm-reveal">
              Cálzate MB ya tiene una historia, una trayectoria y un producto detrás.
            </p>
            <p data-reveal className="cm-reveal">
              Nosotros queremos ayudarte a convertir todo eso en una marca con identidad, campañas que emocionen y
              colecciones que las mujeres esperen con ilusión.
            </p>
            <p data-reveal className="cm-reveal">Que cada diseño tenga una historia.</p>
            <p data-reveal className="cm-reveal">Que cada lanzamiento sea una oportunidad para conectar.</p>
            <p data-reveal className="cm-reveal">
              Y que cada paso acerque a Cálzate MB a convertirse en la marca que sueñas construir.
            </p>
          </div>
          <p className="cm-highlight cm-highlight--ruled cm-reveal" data-reveal>
            Hagamos que tu próxima colección sea el inicio de una nueva etapa.
          </p>
          <div className="cm-close-seal cm-reveal" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="" />
          </div>

          <p className="cm-eyebrow" style={{ marginTop: "1.75rem" }}>
            Selecciona el plan
          </p>
          <div className="cm-route-pick" role="group" aria-label="Planes">
            {PLANS.map((plan) => (
              <button
                key={plan.id}
                type="button"
                className={`cm-route-chip ${selectedId === plan.id ? "cm-route-chip--active" : ""}`}
                onClick={() => setSelectedId(plan.id)}
              >
                {plan.id === "identity" ? "Brand Identity" : "Experience & Launch"}
              </button>
            ))}
          </div>

          <p className="cm-close-brand">Partnersflux × Cálzate MB</p>
          <p className="cm-close-plan">{selected.name}</p>
          <p className="cm-close-price">${formatCop(selected.monthly)} COP / mes</p>
          <p className="cm-close-note">
            Acompañamiento estratégico y creativo durante 90 días · Total ${formatCop(selected.total90)} COP
          </p>

          <div className="cm-close-cta">
            <a
              href={waUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="cm-btn cm-btn-accent"
            >
              Quiero comenzar esta etapa
            </a>
            <button type="button" className="cm-btn cm-btn-ink-ghost" onClick={copyWaMessage}>
              {copied ? "Mensaje copiado" : "Copiar mensaje para comenzar"}
            </button>
          </div>
          <p className="cm-legal">
            Los activos creativos quedan a nombre de la marca. Pauta, modelos, locaciones pagas, eventos exclusivos e
            implementación técnica se cotizan aparte. Antes de impuestos aplicables.
          </p>
        </div>
      </Section>

      <footer className="cm-footer">Cálzate MB × Partnersflux · Brand Evolution 2026–2027</footer>
    </div>
  );
}
