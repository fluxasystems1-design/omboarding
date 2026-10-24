"use client";

import { useEffect, useMemo, useState } from "react";

const FLUXA_LOGO = "/og/fluxa-logo.jpg";
const HERO_IMAGE = "/imagenes/voiss-universe/hero.png";
const WA_NUMBER = "573116425337";
const TRM = 3185;
const IG_VOISS = "https://www.instagram.com/voiss.universe/";
const IG_HILDA = "https://www.instagram.com/hildagabriels_/";

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
  { label: "Marca", value: "Voiss Universe" },
  { label: "Fundadora", value: "Hilda Gabriëls" },
  { label: "Redes", value: "@voiss.universe · @hildagabriels_" },
  { label: "Nueva etapa", value: "Residente en Arabia Saudita" },
  { label: "Experiencia", value: "Coaching, sound healing, tarot, astrología y bienestar" },
  { label: "Interés anterior", value: "Acompañar a mujeres que atraviesan agotamiento" },
  { label: "Deseo actual", value: "Encontrar una dirección, posicionarse y monetizar sus conocimientos" },
];

const A_FAVOR = [
  {
    title: "No estás empezando desde cero",
    text: "Tienes experiencia, herramientas y una comunidad que ya conoce parte de tu trabajo.",
  },
  {
    title: "Tienes una historia propia",
    text: "Lo que has vivido, aprendido y experimentado puede convertirse en una parte importante de tu comunicación.",
  },
  {
    title: "Puedes acompañar de distintas maneras",
    text: "Tus conocimientos pueden tomar forma en sesiones, experiencias grupales, talleres y productos digitales.",
  },
  {
    title: "Tu trabajo no tiene que limitarse a un lugar",
    text: "La posibilidad de compartirlo digitalmente te permite explorar oportunidades más allá de tu ciudad o país.",
  },
];

const RESOLVER = [
  {
    num: "01",
    title: "Muchas ideas, pero ninguna oferta protagonista.",
    text: "Te gustan distintas áreas y todas forman parte de ti. Ahora necesitamos encontrar cómo unirlas para que una persona entienda fácilmente qué puede vivir o aprender contigo.",
  },
  {
    num: "02",
    title: "La constancia en redes se vuelve difícil cuando no tienes claro qué comunicar.",
    text: "Queremos que dejes de enfrentarte cada semana a la pregunta de qué publicar y tengas una forma más sencilla de compartir tu conocimiento.",
  },
  {
    num: "03",
    title: "Tu nueva vida abre oportunidades, pero necesitas saber por dónde empezar.",
    text: "Vamos a explorar si tiene más sentido fortalecer la comunidad que ya tienes, acercarte a nuevas personas en el exterior o preparar tu marca para ambos caminos, sin duplicar el trabajo desde el primer día.",
  },
  {
    num: "04",
    title: "Quieres crear algo propio que puedas vender más de una vez.",
    text: "No se trata de abandonar las sesiones individuales. Queremos encontrar una manera de compartir tus conocimientos que no dependa exclusivamente de tu tiempo en una agenda.",
  },
];

const TRANSFORM = [
  {
    hoy: "Tienes muchas ideas y no sabes cuál priorizar",
    despues: "Saber qué ofrecer primero y cómo presentar el resto de tus servicios",
  },
  {
    hoy: "Te preguntas de qué hablar en redes",
    despues: "Tener una estrategia y guiones que puedas grabar a tu manera",
  },
  {
    hoy: "No sabes exactamente a quién dirigirte",
    despues: "Reconocer a las personas que más conectan con tu trabajo",
  },
  {
    hoy: "Tus conocimientos parecen servicios separados",
    despues: "Reunirlos bajo una experiencia y metodología que tengan sentido",
  },
  {
    hoy: "Quieres lanzar un producto, pero no sabes cuál",
    despues: "Crear una primera oferta que puedas presentar y probar con tu audiencia",
  },
  {
    hoy: "Dependes de conversaciones para explicar lo que haces",
    despues: "Tener un espacio digital donde las personas conozcan y compren tu oferta",
  },
];

const FLOW = [
  {
    num: "01",
    title: "CONECTAR",
    text: "Contenido que haga que las personas quieran conocerte. Compartir tu experiencia, reflexiones, conocimientos y pequeñas prácticas que permitan descubrir tu forma de acompañar.",
  },
  {
    num: "02",
    title: "ACERCAR",
    text: "Una primera experiencia contigo. Un recurso, clase o encuentro que permita conocer más de cerca tu trabajo y empezar a generar confianza.",
  },
  {
    num: "03",
    title: "MONETIZAR",
    text: "Un primer producto digital que reúna tus conocimientos. Puede ser un taller, una experiencia guiada o un programa corto. Elegiremos el formato después de revisar qué tiene más sentido para tu audiencia.",
  },
  {
    num: "04",
    title: "CRECER",
    text: "Nuevas experiencias y acompañamientos. A partir de las primeras ventas, podremos explorar programas grupales, experiencias premium y otras formas de seguir creciendo.",
  },
];

const DIGITAL_BLOCKS = [
  {
    label: "1. Encontramos la dirección de tu marca",
    items: [
      "Diagnóstico de Voiss Universe y de tu marca personal.",
      "Sesiones para entender tu historia, tus servicios y tus objetivos.",
      "Definición de las personas a quienes quieres llegar.",
      "Revisión de las oportunidades para comunicarte con tu comunidad actual y conectar con personas en el exterior.",
      "Organización de tus servicios y propuesta de valor.",
      "Conceptualización de tu método y de tu primer producto digital.",
    ],
  },
  {
    label: "2. Hacemos que crear contenido sea más sencillo",
    items: [
      "Laboratorio de contenido en Notion.",
      "Calendario estratégico de 60 días.",
      "15 guiones de reels orgánicos.",
      "10 guiones publicitarios para futuras campañas.",
      "Pilares de contenido y llamadas a la acción.",
    ],
  },
  {
    label: "3. Preparamos tu primer espacio de ventas",
    items: [
      "Una landing para presentar y vender tu producto.",
      "Integración con una pasarela de pagos compatible.",
      "Un guion corto de video de venta.",
      "Automatización básica de Instagram/WhatsApp.",
      "Guion de seguimiento de posibles clientas.",
      "Capacitación para utilizar las herramientas.",
    ],
  },
  {
    label: "4. Te acompañamos durante la implementación",
    items: [
      "3 sesiones estratégicas con el equipo.",
      "Revisión y aprobación de los entregables.",
      "Soporte técnico de implementación.",
    ],
  },
];

const PRO_EXTRA_BLOCKS = [
  {
    label: "1. Una oferta con más posibilidades de crecer",
    items: [
      "Estructura de tu producto principal o programa digital.",
      "Propuesta de una futura experiencia grupal o programa de continuidad.",
      "Una landing ampliada para presentar tu oferta principal.",
      "2 guiones de videos de venta en total.",
      "Automatizaciones de bienvenida y seguimiento de interesados.",
    ],
  },
  {
    label: "2. Más contenido para empezar a posicionarte",
    items: [
      "Calendario estratégico de 90 días en total.",
      "25 guiones de reels orgánicos en total.",
      "15 guiones publicitarios en total.",
      "5 guiones UGC.",
      "Dirección creativa para el lanzamiento.",
    ],
  },
  {
    label: "3. Tu primera campaña de lanzamiento",
    items: [
      "Estrategia para presentar tu producto a la audiencia.",
      "Configuración de Meta Ads y medición.",
      "5 piezas creativas publicitarias.",
      "Gestión y optimización de campañas durante el primer mes de activación.",
      "Revisión de resultados y recomendaciones para las siguientes campañas.",
    ],
  },
];

const PLAN_COMPARE = [
  { f: "Estrategia de marca", fs: "Estrategia", a: "✓", b: "✓" },
  { f: "Definición de audiencia", fs: "Audiencia", a: "✓", b: "✓" },
  { f: "Organización de servicios", fs: "Servicios", a: "✓", b: "✓" },
  { f: "Estructura primer producto", fs: "1er producto", a: "✓", b: "✓" },
  { f: "Producto principal ampliado", fs: "Producto ampl.", a: "—", b: "✓" },
  { f: "Laboratorio Notion", fs: "Notion", a: "✓", b: "✓" },
  { f: "Estrategia de contenido", fs: "Contenido", a: "60 días", b: "90 días" },
  { f: "Guiones de reels", fs: "Reels", a: "15", b: "25" },
  { f: "Guiones publicitarios", fs: "Ads guiones", a: "10", b: "15" },
  { f: "Guiones UGC", fs: "UGC", a: "—", b: "5" },
  { f: "Landing con checkout", fs: "Landing", a: "✓", b: "✓" },
  { f: "Landing ampliada", fs: "Landing+", a: "—", b: "✓" },
  { f: "Guiones VSL", fs: "VSL", a: "1", b: "2" },
  { f: "Automatizaciones", fs: "Automatiz.", a: "Básicas", b: "Ampliadas" },
  { f: "Creativos de Meta Ads", fs: "Creativos", a: "—", b: "5" },
  { f: "Gestión de campañas", fs: "Gestión ads", a: "—", b: "1 mes" },
  { f: "Diseño de continuidad", fs: "Continuidad", a: "—", b: "✓" },
  { f: "Inversión USD", fs: "Inversión", a: "$947", b: "$1.497", price: true },
];

const PHASES = [
  {
    num: "01",
    when: "Semanas 1–2",
    title: "Queremos conocer lo que hay detrás de Voiss.",
    text: "Hablaremos de tus experiencias, de lo que disfrutas hacer, de lo que quieres conservar y también de lo que ya no se siente tan alineado contigo. Revisaremos las personas que hoy se interesan por tu trabajo y las oportunidades que se abren con tu nueva vida. Al terminar, tendremos una dirección mucho más clara para tu marca y tu primera oferta.",
  },
  {
    num: "02",
    when: "Semanas 3–4",
    title: "Le damos forma a lo que quieres compartir.",
    text: "Diseñaremos tu estrategia de contenido, prepararemos los guiones y organizaremos la primera experiencia que quieres ofrecer. La idea es que tengas una guía práctica para grabar sin pasar horas buscando qué decir.",
  },
  {
    num: "03",
    when: "Semanas 5–6",
    title: "Preparamos el lugar donde podrán comprar tu oferta.",
    text: "Construiremos la página, conectaremos el sistema de pagos y configuraremos los mensajes automáticos para que las personas interesadas puedan avanzar sin depender de que estés respondiendo todo el día.",
  },
  {
    num: "04",
    when: "Activación · Plan Pro",
    title: "Es momento de compartir tu producto.",
    text: "Prepararemos y activaremos la campaña cuando el producto esté listo, empezaremos a atraer interesadas y revisaremos qué mensajes generan mejores respuestas. Con esa información podremos tomar decisiones para los siguientes pasos.",
  },
];

const CONTINUIDAD = [
  {
    id: "esencial",
    name: "Plan Esencial",
    price: 63,
    desc: "Para que lo que construimos siga funcionando. Si prefieres encargarte de tu contenido y de tus ventas, podemos ayudarte a mantener en orden la parte técnica.",
    items: [
      "Revisión mensual de la landing y sistema de pagos.",
      "Comprobación de automatizaciones.",
      "Corrección de errores menores.",
      "Actualización puntual de textos y enlaces.",
      "Soporte técnico limitado.",
    ],
  },
  {
    id: "crecimiento",
    name: "Plan Crecimiento",
    price: 188,
    desc: "Para que sigas creando, pero con alguien que te ayude a encontrar el siguiente paso. Además del mantenimiento técnico, seguiremos revisando tu comunicación y encontrando maneras de mejorar tus resultados.",
    items: [
      "Todo lo del plan Esencial.",
      "Una sesión estratégica mensual.",
      "Revisión de los contenidos que mejor están funcionando.",
      "Ajustes al calendario editorial.",
      "4 guiones cortos de reels mensuales.",
      "Recomendaciones para mejorar mensajes y ofertas.",
      "Ajustes menores a la página de ventas.",
      "Reporte mensual con próximos pasos.",
    ],
  },
  {
    id: "integral",
    name: "Plan Gestión Integral",
    price: 502,
    featured: true,
    desc: "Para que te concentres en compartir lo que sabes mientras tienes un equipo detrás de tu marca. Diseñado para cuando quieras delegar buena parte de la ejecución digital sin perder tu estilo ni tu voz.",
    items: [
      "Mantenimiento técnico del ecosistema existente.",
      "Planeación mensual de contenido.",
      "12 guiones de reels mensuales.",
      "Edición de hasta 8 reels con material proporcionado por ti.",
      "Dirección creativa y programación de contenido.",
      "Gestión de una campaña activa en Meta Ads.",
      "Optimización de los embudos y automatizaciones existentes.",
      "Dos reuniones mensuales de seguimiento.",
      "Reporte de resultados y recomendaciones comerciales.",
    ],
  },
];

const CONT_COMPARE = [
  { f: "Soporte técnico", fs: "Soporte", a: "Sí", b: "Sí", c: "Sí" },
  { f: "Ajustes de landing", fs: "Landing", a: "Puntuales", b: "Menores", c: "Optimiz." },
  { f: "Sesiones estratégicas", fs: "Sesiones", a: "—", b: "1", c: "2" },
  { f: "Guiones reels", fs: "Guiones", a: "—", b: "4", c: "12" },
  { f: "Edición reels", fs: "Edición", a: "—", b: "—", c: "Hasta 8" },
  { f: "Planeación de contenido", fs: "Planeación", a: "—", b: "Ajustes", c: "Completa" },
  { f: "Programación", fs: "Programación", a: "—", b: "—", c: "Sí" },
  { f: "Gestión Meta Ads", fs: "Meta Ads", a: "—", b: "—", c: "1 camp." },
  { f: "Reportes", fs: "Reportes", a: "Técnico", b: "Estratégico", c: "Comercial" },
  { f: "Mensualidad USD", fs: "USD / mes", a: "$63", b: "$188", c: "$502", price: true },
];

const CLOSING_PLANS = [
  {
    id: "digital",
    name: "PDM Coaching Digital",
    short: "Para organizar tu marca y preparar tu oferta",
    price: 947,
    phase1: 474,
    phase2: 473,
  },
  {
    id: "pro",
    name: "PDM Coaching Pro",
    short: "Para construir tu oferta y preparar el lanzamiento",
    price: 1497,
    phase1: 749,
    phase2: 748,
    recommended: true,
  },
];

function formatUsd(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function waUrl(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Eyebrow({ children }) {
  const text = String(children || "");
  const match = text.match(/^(\d{2})\s*[·•\-–—]\s*(.+)$/);
  if (match) {
    return (
      <p className="vu-eyebrow">
        <i>{match[1]}</i>
        <span>{match[2]}</span>
      </p>
    );
  }
  return <p className="vu-eyebrow">{children}</p>;
}

function Section({ id, eyebrow, title, soft = false, children }) {
  return (
    <section id={id} className={`scroll-mt-28 ${soft ? "vu-section--soft" : ""}`}>
      <div className="vu-section">
        <div data-reveal className="vu-reveal">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {title ? <h2 className="vu-heading">{title}</h2> : null}
        </div>
        <div data-reveal className="vu-reveal">
          {children}
        </div>
      </div>
    </section>
  );
}

function CellCheck({ value }) {
  if (value === "✓") return <span aria-label="Incluido">✓</span>;
  if (value === "—") return <span aria-label="No incluido">—</span>;
  return value;
}

export default function PropuestaVoissUniversePage() {
  const [progress, setProgress] = useState(0);
  const [navStuck, setNavStuck] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");
  const [selectedId, setSelectedId] = useState("pro");
  const [copied, setCopied] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const selected = CLOSING_PLANS.find((p) => p.id === selectedId) || CLOSING_PLANS[1];

  const waMessage = `Hola Partnersflux. Revisé la propuesta Voiss Universe y quiero comenzar con ${selected.name} (USD ${formatUsd(selected.price)}).`;

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
    <div className="vu-page">
      <div className="vu-ambient" aria-hidden>
        <span className="vu-orb vu-orb--a" />
        <span className="vu-orb vu-orb--b" />
        <span className="vu-orb vu-orb--c" />
        <span className="vu-orb vu-orb--d" />
      </div>
      <div className="vu-progress fixed left-0 top-0 z-[60] w-full" aria-hidden>
        <div className="vu-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <nav className={`vu-nav${navStuck ? " is-stuck" : ""}`} aria-label="Secciones">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="vu-nav-logo" src={FLUXA_LOGO} alt="Fluxa · Partnersflux" />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`vu-nav-link ${activeNav === item.id ? "vu-nav-link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* —— Portada —— */}
      <section id="hero" className="vu-hero scroll-mt-28">
        <div className="vu-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="vu-hero-bg-img" src={HERO_IMAGE} alt="" />
          <div className="vu-hero-bg-overlay" />
        </div>
        <div className="vu-hero-copy vu-reveal is-in">
          <div className="vu-hero-seal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FLUXA_LOGO} alt="" />
            <span>Partnersflux presenta</span>
          </div>
          <p className="vu-hero-kicker">Presencia Digital Monetizable</p>
          <h1 className="vu-hero-brand">Voiss Universe</h1>
          <p className="vu-hero-sub">Coaching · Voiss Universe</p>
          <p className="vu-hero-title">
            De tener mil ideas a construir una marca que sabes cómo comunicar y monetizar.
          </p>
          <p className="vu-hero-lead">
            Hilda, has aprendido, explorado y creado tantas cosas que hoy tienes distintas posibilidades frente a ti.
            Queremos ayudarte a darle forma a una propuesta propia y a una presencia digital que también genere ingresos.
          </p>
          <p className="vu-hero-price">Desde USD {formatUsd(947)}</p>
          <p className="vu-hero-meta">Estrategia · Contenido · Producto digital · Ventas</p>
          <div className="vu-hero-cta">
            <a href="#planes" className="vu-btn vu-btn-solid vu-btn-on-hero">
              Ver planes
            </a>
            <a href="#donde" className="vu-btn vu-btn-ghost vu-btn-on-hero">
              Leer propuesta
            </a>
          </div>
        </div>
      </section>

      {/* —— 01 Dónde estás —— */}
      <Section
        id="donde"
        eyebrow="01 · Dónde estás hoy"
        title="Tienes tanto para compartir que a veces no sabes qué mostrar primero."
      >
        <div className="vu-prose">
          <p>
            Has recorrido distintos caminos dentro del bienestar y el autoconocimiento. Tienes experiencia en sound
            healing, tarot, astrología, coaching y sesiones individuales.
          </p>
          <p>
            Cada herramienta representa una parte de lo que has aprendido, pero cuando intentas reunirlas en una sola
            marca aparecen las dudas: ¿qué debería ofrecer primero?, ¿de qué hablar en redes?, ¿cómo lograr que las
            personas entiendan lo que hago?
          </p>
          <p>
            Y a todo esto se suma una nueva etapa de tu vida: ahora estás viviendo en Arabia Saudita.
          </p>
          <p>
            Quizás una parte de ti quiere seguir hablando con las mujeres que ya conocen tu trabajo, pero otra también
            quiere explorar las oportunidades que pueden abrirse al vivir en otro país.
          </p>
          <p className="vu-highlight vu-highlight--ruled" style={{ marginTop: "0.5rem" }}>
            La idea no es escoger un camino a ciegas. Es descubrir qué quieres construir, para quién y cómo hacer que
            funcione como negocio.
          </p>
        </div>

        <h3 className="vu-lead" style={{ marginTop: "2rem", fontSize: "1.15rem" }}>
          Tu punto de partida
        </h3>
        <table className="vu-ficha">
          <tbody>
            {FICHA.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="vu-lead" style={{ marginTop: "2.25rem", fontSize: "1.15rem" }}>
          Lo que ya tienes a tu favor
        </h3>
        <div className="vu-favor">
          {A_FAVOR.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <h3 className="vu-lead" style={{ marginTop: "2.25rem", fontSize: "1.15rem" }}>
          Lo que hoy necesitamos resolver
        </h3>
        <div className="vu-resolve">
          {RESOLVER.map((item) => (
            <article key={item.num} className="vu-resolve-item">
              <span className="vu-resolve-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* —— 02 Transformación —— */}
      <Section
        id="transformacion"
        eyebrow="02 · Lo que queremos construir"
        title="Que vuelvas a sentir claridad sobre tu marca y emoción por compartir lo que haces."
        soft
      >
        <div className="vu-prose">
          <p>Imagina abrir tu calendario y saber qué vas a grabar esa semana.</p>
          <p>
            Que las personas lleguen a tu perfil y entiendan qué haces, por qué lo haces y cómo pueden empezar a
            trabajar contigo.
          </p>
          <p>
            Que tengas una experiencia propia, creada a partir de tus conocimientos, que alguien pueda descubrir y
            comprar aunque esté en otro país.
          </p>
          <p className="vu-highlight vu-highlight--ruled" style={{ marginTop: "0.35rem" }}>
            Eso es lo que queremos construir: una marca con la que te identifiques y una forma más organizada de
            convertir tu trabajo en ingresos.
          </p>
        </div>

        <h3 className="vu-lead" style={{ marginTop: "2rem", fontSize: "1.15rem" }}>
          De dónde partimos y hacia dónde vamos
        </h3>
        <div className="vu-transform">
          <table className="vu-transform-table">
            <thead>
              <tr>
                <th>Hoy</th>
                <th>Queremos que puedas…</th>
              </tr>
            </thead>
            <tbody>
              {TRANSFORM.map((row) => (
                <tr key={row.hoy}>
                  <td>{row.hoy}</td>
                  <td>{row.despues}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="vu-callout">
          <h3>Una posibilidad que podemos explorar</h3>
          <p>
            Durante nuestra conversación mencionaste que en algún momento quisiste acompañar a mujeres que atravesaban
            agotamiento y burnout.
          </p>
          <p>
            Puede que allí exista una idea interesante: ayudar a mujeres que llevan mucho tiempo ocupándose de todo y
            sienten que han dejado de dedicarse espacio a ellas mismas.
          </p>
          <p>
            Quizás el sound healing, las sesiones de reflexión y otras herramientas que utilizas puedan formar parte
            de una experiencia de reconexión personal.
          </p>
          <p>
            No queremos decidirlo por ti antes de comenzar. Queremos ayudarte a descubrir qué parte de tu trabajo
            disfrutas más, qué necesita tu audiencia y cómo convertir ese encuentro en una propuesta que puedas vender.
          </p>
        </div>

        <h3 className="vu-lead" style={{ marginTop: "2rem", fontSize: "1.15rem" }}>
          Cómo podría funcionar tu negocio digital
        </h3>
        <div className="vu-flow">
          {FLOW.map((item) => (
            <article key={item.num} className="vu-flow-item">
              <span className="vu-flow-num">
                {item.num} · {item.title}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* —— 03 Planes —— */}
      <Section
        id="planes"
        eyebrow="03 · Nuestros planes"
        title="Dos formas de comenzar a construir esta nueva etapa."
      >
        <div className="vu-prose" style={{ marginTop: "1.1rem" }}>
          <p>
            Ambas opciones empiezan por lo más importante: entender qué quieres lograr con Voiss Universe y cómo darle
            forma a tus ideas.
          </p>
          <p>
            La diferencia es que una te ayuda a organizar tu marca y dejar preparado el camino para vender, mientras
            que la otra también incluye una estrategia para lanzar tu primera oferta y empezar a atraer personas
            interesadas.
          </p>
        </div>

        <div className="vu-plans">
          <article className="vu-plan">
            <p className="vu-plan-tag">Plan 01</p>
            <h3 className="vu-plan-name">PDM Coaching Digital</h3>
            <p className="vu-plan-price">USD {formatUsd(947)}</p>
            <p className="vu-plan-desc">
              Para que tengas claridad sobre tu marca, sepas qué comunicar y prepares tu primera oferta digital.
            </p>
            <p className="vu-plan-desc">
              Empezaremos por organizar lo que sabes y encontrar cómo quieres presentarlo. Después construiremos el
              contenido y las herramientas para que las personas puedan conocer y comprar tu primera experiencia.
            </p>
            {DIGITAL_BLOCKS.map((block) => (
              <div key={block.label} className="vu-plan-block">
                <h4>{block.label}</h4>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="vu-plan-pay">
              <span>Inversión en dos pagos</span>
              <strong>Al comenzar · USD {formatUsd(474)}</strong>
              <span>A los 15 días · USD {formatUsd(473)}</span>
            </div>
          </article>

          <article className="vu-plan vu-plan--featured">
            <span className="vu-plan-badge">Recomendado</span>
            <p className="vu-plan-tag">Plan 02</p>
            <h3 className="vu-plan-name">PDM Coaching Pro</h3>
            <p className="vu-plan-price">USD {formatUsd(1497)}</p>
            <p className="vu-plan-desc">
              Para pasar de tener muchas ideas a crear tu propia oferta y empezar a darla a conocer.
            </p>
            <p className="vu-plan-desc">
              Este plan está pensado si quieres aprovechar esta etapa no solo para reorganizar tu marca, sino también
              para preparar y poner en marcha tu primer lanzamiento digital.
            </p>
            <p className="vu-plan-desc">
              <strong>Incluye todo lo del plan Digital, más:</strong>
            </p>
            {PRO_EXTRA_BLOCKS.map((block) => (
              <div key={block.label} className="vu-plan-block">
                <h4>{block.label}</h4>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="vu-plan-pay">
              <span>Inversión en dos pagos</span>
              <strong>Al comenzar · USD {formatUsd(749)}</strong>
              <span>A los 15 días · USD {formatUsd(748)}</span>
            </div>
          </article>
        </div>

        <div className="vu-compare">
          <h3>Comparativa de planes</h3>
          <table className="vu-compare-table">
            <thead>
              <tr>
                <th>
                  <span className="vu-compare-label--full">Qué incluye</span>
                  <span className="vu-compare-label--short">Incluye</span>
                </th>
                <th>Digital</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              {PLAN_COMPARE.map((row) => (
                <tr key={row.f} className={row.price ? "vu-compare-price" : undefined}>
                  <th scope="row">
                    <span className="vu-compare-label--full">{row.f}</span>
                    <span className="vu-compare-label--short">{row.fs}</span>
                  </th>
                  <td>
                    <CellCheck value={row.a} />
                  </td>
                  <td>
                    <CellCheck value={row.b} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* —— 04 Ejecución —— */}
      <Section
        id="ejecucion"
        eyebrow="04 · Ejecución"
        title="Primero ponemos en orden tus ideas. Después empezamos a construir."
        soft
      >
        <div className="vu-timeline">
          {PHASES.map((phase) => (
            <article key={phase.num} className="vu-phase">
              <span className="vu-phase-num">{phase.num}</span>
              <p className="vu-phase-when">{phase.when}</p>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* —— 05 Continuidad —— */}
      <Section
        id="continuidad"
        eyebrow="05 · Continuidad"
        title="Y cuando tu marca empiece a moverse, podemos seguir acompañándote."
      >
        <div className="vu-prose">
          <p>
            Después de organizar tu marca, preparar tu contenido y poner en funcionamiento tu primer sistema de
            ventas, puedes decidir si prefieres gestionarlo tú misma o seguir contando con nuestro equipo.
          </p>
          <p>
            No necesitas contratar un acompañamiento mensual para conservar los activos que construimos. Estas
            opciones están pensadas para cuando quieras seguir mejorando tu presencia digital sin tener que
            encargarte de todo.
          </p>
        </div>

        <div className="vu-cont-grid">
          {CONTINUIDAD.map((plan) => (
            <article key={plan.id} className={`vu-cont${plan.featured ? " vu-cont--featured" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="vu-cont-price">USD {formatUsd(plan.price)} /mes</p>
              <p className="vu-cont-desc">{plan.desc}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="vu-compare">
          <h3>Comparativa de continuidad</h3>
          <table className="vu-compare-table vu-compare-3">
            <thead>
              <tr>
                <th>
                  <span className="vu-compare-label--full">Servicio mensual</span>
                  <span className="vu-compare-label--short">Servicio</span>
                </th>
                <th>
                  <span className="vu-compare-label--full">Esencial</span>
                  <span className="vu-compare-label--short">Esenc.</span>
                </th>
                <th>
                  <span className="vu-compare-label--full">Crecimiento</span>
                  <span className="vu-compare-label--short">Crec.</span>
                </th>
                <th>
                  <span className="vu-compare-label--full">Integral</span>
                  <span className="vu-compare-label--short">Integr.</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {CONT_COMPARE.map((row) => (
                <tr key={row.f} className={row.price ? "vu-compare-price" : undefined}>
                  <th scope="row">
                    <span className="vu-compare-label--full">{row.f}</span>
                    <span className="vu-compare-label--short">{row.fs}</span>
                  </th>
                  <td>{row.a}</td>
                  <td>{row.b}</td>
                  <td>{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="vu-note">
          Valores mensuales en USD (referencia TRM ≈ {TRM.toLocaleString("es-CO")} COP). No se recalculan cada mes. No
          incluyen inversión publicitaria, grabaciones, nuevos productos, nuevas páginas ni licencias externas. El mes
          de pauta de PDM Coaching Pro no se cobra nuevamente como continuidad.
        </p>
      </Section>

      {/* —— 06 Resumen —— */}
      <Section
        id="resumen"
        eyebrow="06 · Resumen"
        title="Queremos que sepas qué estás construyendo y tengas las herramientas para hacerlo crecer."
        soft
      >
        <div className="vu-summary">
          <article>
            <h3>Hoy</h3>
            <p>
              Muchas ideas y muchas posibilidades. Tienes conocimientos, experiencia y ganas de crear algo propio,
              pero necesitas decidir qué ofrecer primero, cómo contarlo y por dónde empezar.
            </p>
          </article>
          <article>
            <h3>Lo que construiremos</h3>
            <p>
              Una marca que sabes cómo comunicar y empezar a monetizar. Una oferta definida, contenido preparado, un
              primer producto estructurado y un sistema digital donde las personas puedan conocerlo y comprarlo.
            </p>
          </article>
        </div>

        <h3 className="vu-lead" style={{ marginTop: "2rem", fontSize: "1.15rem" }}>
          Inversión inicial
        </h3>
        <div className="vu-invest">
          <article>
            <h3>PDM Coaching Digital</h3>
            <p>Claridad, contenido y primera oferta</p>
            <p className="vu-invest-price">USD {formatUsd(947)}</p>
          </article>
          <article>
            <h3>PDM Coaching Pro</h3>
            <p>Todo lo anterior, más lanzamiento</p>
            <p className="vu-invest-price">USD {formatUsd(1497)}</p>
          </article>
        </div>
        <p className="vu-note">Ambos se pagan en dos cuotas: una al comenzar y otra a los 15 días.</p>

        <h3 className="vu-lead" style={{ marginTop: "1.75rem", fontSize: "1.15rem" }}>
          Acompañamiento posterior opcional
        </h3>
        <div className="vu-compare" style={{ marginTop: "0.75rem" }}>
          <table className="vu-compare-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th colSpan={2}>Inversión mensual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Esencial</th>
                <td colSpan={2}>USD {formatUsd(63)}</td>
              </tr>
              <tr>
                <th scope="row">Crecimiento</th>
                <td colSpan={2}>USD {formatUsd(188)}</td>
              </tr>
              <tr className="vu-compare-price">
                <th scope="row">Gestión Integral</th>
                <td colSpan={2}>USD {formatUsd(502)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vu-legal-list">
          <p>
            <strong>Qué queda a tu nombre:</strong> la landing, los materiales estratégicos, los guiones y las
            configuraciones desarrolladas en tus cuentas, siempre que se mantengan activas las plataformas
            correspondientes.
          </p>
          <p>
            <strong>Qué necesitamos de ti:</strong> tu conocimiento, participación en las sesiones, aprobación de
            entregables y grabación del contenido especializado.
          </p>
          <p>
            <strong>Qué se cotiza aparte:</strong> producción audiovisual presencial, edición completa de programas o
            cursos, traducciones profesionales, inversión en anuncios y herramientas de terceros. El producto digital
            se estructura comercialmente dentro del proyecto, pero la grabación y producción completa del contenido
            formativo no están incluidas.
          </p>
          <p>
            <strong>Arabia Saudita:</strong> el funcionamiento de los pagos internacionales dependerá de la pasarela
            disponible para tu situación.
          </p>
        </div>
      </Section>

      {/* —— 07 Cierre —— */}
      <Section id="cierre" eyebrow="07 · Cierre" title="Hilda, tu siguiente etapa">
        <p className="vu-highlight" style={{ marginTop: "1rem" }}>
          Que lo que te apasiona también pueda convertirse en un negocio del que disfrutes vivir.
        </p>
        <div className="vu-prose">
          <p>
            Queremos que vuelvas a disfrutar crear contenido, sin sentir que tienes que hablar de todo al mismo
            tiempo.
          </p>
          <p>
            Que tengas claro qué quieres ofrecer, que tu marca refleje quién eres hoy y que las personas que conectan
            contigo encuentren una forma sencilla de vivir tus experiencias.
          </p>
          <p>
            Has dedicado tiempo a aprender, experimentar y descubrir diferentes maneras de acompañar a otras personas.
            Ahora queremos ayudarte a darle forma a todo eso para que Voiss Universe tenga una dirección propia.
          </p>
          <p className="vu-highlight vu-highlight--ruled" style={{ marginTop: "0.35rem" }}>
            Tú tienes el conocimiento y la experiencia. Desde Partnersflux te ayudamos a convertirlos en una marca que
            puedas comunicar, compartir y monetizar.
          </p>
        </div>

        <div className="vu-close-seal" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={FLUXA_LOGO} alt="Fluxa · Partnersflux" />
        </div>

        <p className="vu-eyebrow" style={{ marginTop: "1.85rem" }}>
          Elige cómo quieres empezar
        </p>
        <div className="vu-route-pick" role="group" aria-label="Planes">
          {CLOSING_PLANS.map((plan) => (
            <button
              key={plan.id}
              type="button"
              className={`vu-route-chip ${selectedId === plan.id ? "vu-route-chip--active" : ""}`}
              onClick={() => setSelectedId(plan.id)}
            >
              <p className="vu-route-name">{plan.name}</p>
              <p className="vu-route-meta">{plan.short}</p>
              <p className="vu-route-price">USD {formatUsd(plan.price)}</p>
            </button>
          ))}
        </div>

        <div className="vu-paybox">
          <div className="vu-paybox-row">
            <span>Inversión total</span>
            <strong>USD {formatUsd(selected.price)}</strong>
          </div>
          <div className="vu-paybox-row">
            <span>Primer pago</span>
            <strong>USD {formatUsd(selected.phase1)}</strong>
          </div>
          <div className="vu-paybox-row">
            <span>Segundo pago · Día 15</span>
            <strong>USD {formatUsd(selected.phase2)}</strong>
          </div>
        </div>

        <div className="vu-close-cta">
          <a href={waUrl(waMessage)} target="_blank" rel="noopener noreferrer" className="vu-btn vu-btn-solid">
            Confirmar por WhatsApp
          </a>
          <button type="button" className="vu-btn vu-btn-ghost" onClick={copyWaMessage}>
            {copied ? "Mensaje copiado" : "Copiar mensaje de confirmación"}
          </button>
        </div>
        <p className="vu-legal">
          WhatsApp Partnersflux · +57 311 642 5337 · Los activos quedan a nombre de la marca. Pauta, producción
          presencial y herramientas de terceros se cotizan aparte.
        </p>
      </Section>

      <footer className="vu-footer">
        Voiss Universe ·{" "}
        <a href={IG_VOISS} target="_blank" rel="noopener noreferrer">
          @voiss.universe
        </a>{" "}
        ·{" "}
        <a href={IG_HILDA} target="_blank" rel="noopener noreferrer">
          @hildagabriels_
        </a>{" "}
        · Partnersflux × Fluxa
      </footer>
    </div>
  );
}
