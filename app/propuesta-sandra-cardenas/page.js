"use client";

import { useEffect, useState } from "react";

const SANDRA_LOGO = "/imagenes/sandra-cardenas/logo.png";
const SANDRA_PORTRAIT = "/imagenes/sandra-cardenas/portrait.png";
const HERO_OFFER = "/imagenes/sandra-cardenas/mockups/oferta-hero.jpg";
const SANDRA_HERO_VIDEO = "/imagenes/sandra-cardenas/hero-reel.mp4";
const SANDRA_FLYER = "/imagenes/sandra-cardenas/flyer-ref.png";
const MOCKUP_ENDO_LAPTOP = "/imagenes/sandra-cardenas/mockups/endolifting-laptop-2.png";
const MOCKUP_ARMO_PHONE = "/imagenes/sandra-cardenas/mockups/armonizacion-phone-2.png";
const MOCKUP_CRM = "/imagenes/sandra-cardenas/mockups/crm-paciente.png";
const CONTEXTO_SEPARATOR = "/imagenes/sandra-cardenas/contexto-clinica-2.jpg";
const ICON_FINGERPRINT = "/imagenes/sandra-cardenas/icons/fingerprint.png";
const ICON_HEART = "/imagenes/sandra-cardenas/icons/heart.png";
const ICON_CURSOR = "/imagenes/sandra-cardenas/icons/cursor.png";
const ICON_CHART = "/imagenes/sandra-cardenas/icons/chart.png";
const ICON_SPARKLE = "/imagenes/sandra-cardenas/icons/sparkle.png";
const ICON_INSTAGRAM = "/imagenes/sandra-cardenas/icons/instagram.png";
const ICON_MEGAPHONE = "/imagenes/sandra-cardenas/icons/megaphone.png";
const ICON_DEVICES = "/imagenes/sandra-cardenas/icons/devices.png";
const ICON_WHATSAPP = "/imagenes/sandra-cardenas/icons/whatsapp.png";
const ICON_FLUXA = "/imagenes/sandra-cardenas/icons/fluxa.jpg";
const ICON_GOOGLE = "/imagenes/sandra-cardenas/icons/google.svg";
const INSTAGRAM_URL = "https://www.instagram.com/drasandracardenasc/";
const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Partnersflux. Revisé la propuesta PDM Clínica Growth 360 para Dra. Sandra Cárdenas y quiero avanzar con el pago 1 para arrancar.";

function waUrl(message = WA_MSG) {
  return WA_BASE + encodeURIComponent(message);
}

const DENTAL_EMOJIS = ["🦷", "🪥"];

const DENTAL_FLOATERS = Array.from({ length: 16 }, (_, i) => {
  // golden-angle scatter so each emoji sits alone, not in pairs
  const angle = i * 2.399963;
  const radius = 0.18 + (i % 7) * 0.09;
  const left = 50 + Math.cos(angle) * radius * 100;
  const top = 50 + Math.sin(angle) * radius * 92;
  return {
    id: i,
    emoji: DENTAL_EMOJIS[i % 3 === 0 ? 1 : 0],
    left: `${Math.min(94, Math.max(4, left)).toFixed(2)}%`,
    top: `${Math.min(92, Math.max(5, top)).toFixed(2)}%`,
    size: `${1.7 + (i % 4) * 0.35}rem`,
    delay: `${(i * 1.7).toFixed(1)}s`,
    duration: `${13 + (i % 5) * 2.4}s`,
  };
});

function DentalEmojiField() {
  return (
    <div className="sc-dental-float" aria-hidden>
      {DENTAL_FLOATERS.map((item) => (
        <span
          key={item.id}
          className={`sc-dental-emoji sc-dental-emoji--${(item.id % 4) + 1}`}
          style={{
            left: item.left,
            top: item.top,
            fontSize: item.size,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

function GoldAtmosphere() {
  const sparks = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div className="sc-gold-bg" aria-hidden>
      <div className="sc-gold-beam sc-gold-beam--a" />
      <div className="sc-gold-beam sc-gold-beam--b" />
      <div className="sc-gold-beam sc-gold-beam--c" />
      <div className="sc-gold-glow sc-gold-glow--tl" />
      <div className="sc-gold-glow sc-gold-glow--br" />
      <div className="sc-gold-glow sc-gold-glow--mid" />
      <div className="sc-gold-dust">
        {sparks.map((i) => (
          <span key={i} className={`sc-gold-spark sc-gold-spark--${(i % 7) + 1}`} style={{ "--i": i }} />
        ))}
      </div>
    </div>
  );
}

const NAV = [
  { id: "contexto", num: "01", label: "Contexto" },
  { id: "marca", num: "02", label: "Diagnóstico" },
  { id: "solucion", num: "03", label: "La solución" },
  { id: "componentes", num: "04", label: "Alcance" },
  { id: "plan", num: "05", label: "Ejecución" },
  { id: "inversion", num: "06", label: "Inversión" },
  { id: "continuidad", num: "07", label: "Continuidad" },
  { id: "medicion", num: "08", label: "Medición" },
  { id: "cierre", num: "09", label: "Cierre" },
];

const MARQUEE = [
  "Marca personal",
  "Instagram",
  "Meta Ads",
  "Landings",
  "WhatsApp",
  "CRM",
  "Agenda",
  "Valoraciones",
  "Fidelización",
  "Medición",
];

const BAND_MARQUEE = [
  "PDM Clínica Growth 360",
  "Atrae",
  "Convierte",
  "Fideliza",
  "Presencia Digital Monetizable",
];

const OPPORTUNITIES = [
  {
    num: "01",
    icon: ICON_FINGERPRINT,
    iconAlt: "Huella",
    title: "Tu experiencia merece más protagonismo que los procedimientos",
    text: "El perfil muestra lo que haces. Falta comunicar quién eres, tu criterio clínico y por qué una paciente debería elegirte a ti.",
  },
  {
    num: "02",
    icon: ICON_HEART,
    iconAlt: "Corazón",
    title: "Necesitamos conectar antes de vender un tratamiento",
    text: "Las pacientes no siempre saben qué necesitan. Primero quieren entender opciones, resolver dudas y sentirse seguras.",
  },
  {
    num: "03",
    icon: ICON_CURSOR,
    iconAlt: "Cursor",
    title: "Hay espacio para mejorar el recorrido hacia la reserva",
    text: "Instagram y WhatsApp son puntos clave. Conectarlos a páginas especializadas, formularios y una agenda organizada multiplica valoraciones.",
  },
  {
    num: "04",
    icon: ICON_CHART,
    iconAlt: "Indicadores",
    title: "Tu crecimiento necesita indicadores comerciales",
    text: "Más allá de seguidores o vistas: qué contenido atrae solicitudes, qué canal genera citas y dónde conviene optimizar.",
  },
];

const HOME_SECTIONS = [
  { section: "Hero principal", fn: "Presentación de tu propuesta de valor y acceso a valoración" },
  { section: "Conoce a tu especialista", fn: "Experiencia, credenciales y filosofía profesional" },
  { section: "Tratamientos destacados", fn: "Acceso visual a los servicios prioritarios" },
  { section: "Catálogo de tratamientos", fn: "Información organizada por categorías" },
  { section: "Resultados y experiencias", fn: "Casos y testimonios reales autorizados" },
  { section: "¿Cómo funciona tu valoración?", fn: "Explicación del proceso de atención" },
  { section: "Preguntas frecuentes", fn: "Resolver dudas antes de agendar" },
  { section: "Reserva tu valoración", fn: "Acceso a agenda o WhatsApp" },
  { section: "Contacto y ubicación", fn: "Facilitar la visita a la clínica" },
];

const STRATEGY_ITEMS = [
  "Auditoría inicial de presencia digital",
  "Definición de paciente ideal y sus motivaciones",
  "Identificación de ventajas competitivas",
  "Posicionamiento y narrativa de marca personal",
  "Optimización estratégica de la biografía y perfil",
  "Definición de pilares de comunicación",
  "Arquitectura del recorrido comercial",
  "Priorización de tratamientos según demanda y objetivos de negocio",
];

const CRM_ITEMS = [
  "CRM para gestionar solicitudes y oportunidades",
  "Integraciones compatibles con WhatsApp e Instagram",
  "Respuesta inicial automatizada",
  "Flujos de preguntas administrativas frecuentes",
  "Clasificación de contactos por tratamiento de interés",
  "Envío de información general y enlaces de reserva",
  "Integración de agenda",
  "Confirmación y recordatorios de citas",
  "Seguimiento a solicitudes pendientes, con consentimiento",
  "Tablero para visualizar el estado de las oportunidades",
  "Capacitación para utilizar el sistema",
];

const CONTENT_LAB = [
  "Estrategia editorial de lanzamiento",
  "Calendario de contenido de 30 días",
  "12 ideas desarrolladas con gancho, guion y CTA",
  "Recomendaciones visuales y de grabación",
  "Estrategia inicial de campañas Meta Ads",
  "Hasta tres rutas publicitarias de captación",
  "Configuración inicial de campañas y medición",
];

const PILLARS = [
  {
    title: "Autoridad profesional",
    text: "Educación sobre procedimientos, seguridad, indicaciones y expectativas realistas.",
  },
  {
    title: "Conexión con la paciente",
    text: "Responder inquietudes y ayudar a tomar decisiones informadas.",
  },
  {
    title: "Confianza y experiencias",
    text: "Testimonios autorizados y procesos reales de atención.",
  },
  {
    title: "Marca personal",
    text: "La profesional detrás de los resultados y su manera de trabajar.",
  },
  {
    title: "Conversión",
    text: "Explicar la experiencia de valoración, disponibilidad y próximos pasos.",
  },
];

const CRM_STACK = [
  { name: "WhatsApp + CRM", src: ICON_WHATSAPP, note: "Automatización con Fluxa" },
  { name: "Google", src: ICON_GOOGLE, note: "Agenda y medición" },
  { name: "Instagram", src: ICON_INSTAGRAM, note: "Captación orgánica" },
  { name: "Meta Ads", src: ICON_MEGAPHONE, note: "Captación publicitaria" },
];

const FUNNEL = [
  {
    title: "Marca personal y contenido estratégico",
    text: "Generamos interés y construimos autoridad",
    icon: ICON_SPARKLE,
  },
  {
    split: true,
    items: [
      { title: "Instagram", text: "Conexión orgánica", icon: ICON_INSTAGRAM },
      { title: "Meta Ads", text: "Captación publicitaria", icon: ICON_MEGAPHONE },
    ],
  },
  {
    title: "Página web + landings de tratamientos",
    text: "Información, confianza y solicitudes de valoración",
    icon: ICON_DEVICES,
  },
  {
    title: "WhatsApp + CRM + agenda",
    text: "Atención y seguimiento organizados",
    icon: ICON_WHATSAPP,
  },
  {
    title: "Valoraciones agendadas",
    text: "Medición, experiencia y oportunidades de fidelización",
    icon: ICON_CHART,
    end: true,
  },
];

const PHASES = [
  {
    num: "01",
    range: "1–15",
    days: "Días 1–15",
    title: "Estrategia y arquitectura",
    text: "Diagnóstico, paciente ideal, posicionamiento, selección de tratamientos, arquitectura web y definición del embudo.",
    deliver: "Estrategia, estructura web y mapa del sistema comercial.",
  },
  {
    num: "02",
    range: "16–45",
    days: "Días 16–45",
    title: "Construcción digital",
    text: "Diseño y desarrollo de homepage y landings, configuración de CRM, automatizaciones, integraciones y agenda.",
    deliver: "Infraestructura desarrollada para revisión y pruebas.",
  },
  {
    num: "03",
    range: "46–60",
    days: "Días 46–60",
    title: "Lanzamiento y activación",
    text: "Publicación, pruebas, configuración inicial de campañas, instalación de medición y capacitación del equipo.",
    deliver: "Ecosistema comercial operativo.",
  },
  {
    num: "04",
    range: "61–90",
    days: "Días 61–90",
    title: "Acompañamiento y optimización",
    text: "Monitoreo inicial, ajustes técnicos menores, revisión de datos, mejoras del recorrido y recomendaciones.",
    deliver: "Reporte de resultados iniciales y plan de continuidad.",
  },
];

const KPIS = [
  "Solicitudes de información generadas",
  "Valoraciones agendadas",
  "Tasa de conversión de solicitudes a citas",
  "Tiempo de respuesta y estado de seguimiento",
  "Rendimiento de los canales de captación",
  "Comportamiento de las páginas comerciales",
  "Oportunidades de mejora identificadas durante el lanzamiento",
];

export default function PropuestaSandraCardenasPage() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...NAV.map((n) => n.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.22, rootMargin: "-12% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll(".sc-reveal")];
    const reveal = (el) => el.classList.add("is-in");
    const syncVisible = () => {
      const limit = window.innerHeight * 0.96;
      nodes.forEach((n) => {
        if (n.getBoundingClientRect().top < limit) reveal(n);
      });
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "12% 0px 12% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    syncVisible();
    const raf = requestAnimationFrame(syncVisible);
    const t1 = window.setTimeout(syncVisible, 120);
    const t2 = window.setTimeout(syncVisible, 400);
    window.addEventListener("hashchange", syncVisible);
    window.addEventListener("scroll", syncVisible, { passive: true });
    window.addEventListener("resize", syncVisible);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", syncVisible);
      window.removeEventListener("scroll", syncVisible);
      window.removeEventListener("resize", syncVisible);
    };
  }, []);

  return (
    <div className="sc-page">
      <GoldAtmosphere />
      <DentalEmojiField />
      <nav className={`sc-nav ${solid ? "is-solid" : ""}`} aria-label="Secciones">
        <div className="sc-wrap sc-nav-inner">
          <a className="sc-btn sc-btn-gold" href={waUrl()} target="_blank" rel="noreferrer">
            Quiero avanzar
          </a>
          <button
            type="button"
            className={`sc-menu-btn ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="sc-section-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
            <span className="sc-sr">Bloques de la propuesta</span>
          </button>
          {menuOpen ? (
            <div id="sc-section-menu" className="sc-menu" role="menu">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  role="menuitem"
                  href={`#${item.id}`}
                  className={active === item.id ? "is-active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.num}</span>
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </nav>

      <header id="hero" className="sc-hero sc-hero--offer">
        <div className="sc-wrap sc-offer">
          <a className="sc-brand-nav sc-hero-logo" href="#hero" aria-label="Sandra Cárdenas">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SANDRA_LOGO} alt="Sandra Cárdenas · Odontología Estética Especializada" />
          </a>
          <h1 className="sc-offer-title">
            <span>Tu próximo paciente</span>
            <em>puede estar viendo</em>
            <span>tu Instagram.</span>
          </h1>
          <p className="sc-offer-kicker">90 días · una valoración real</p>
          <figure className="sc-offer-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_OFFER} alt="Landings, página y CRM de la Dra. Sandra Cárdenas" />
          </figure>
          <p className="sc-offer-caption">90 días para convertir ese interés en una cita.</p>
          <a className="sc-btn sc-btn-gold sc-offer-cta" href={waUrl()} target="_blank" rel="noreferrer">
            Quiero avanzar
          </a>
          <p className="sc-offer-note">PDM Clínica Growth 360 · USD 2.497</p>
        </div>
      </header>

      <div className="sc-marquee" aria-hidden>
        <div className="sc-marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={`${item}-${i}`} className="sc-marquee-item">
              {item}
              <span className="sc-marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="contexto" className="sc-section sc-section--contexto">
        <div className="sc-quote-sep sc-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sc-quote-sep-bg" src={CONTEXTO_SEPARATOR} alt="" />
          <div className="sc-quote-sep-veil" aria-hidden />
          <div className="sc-wrap sc-quote-sep-content">
            <p className="sc-eyebrow">
              <span className="sc-eyebrow-num">01</span> Contexto
            </p>
            <h2>
              El crecimiento
              <br />
              de tu clínica
              <br />
              comienza antes
              <br />
              de la primera cita
            </h2>
          </div>
        </div>
        <div className="sc-wrap sc-quote-body sc-reveal">
          <p className="sc-lead">
            Las pacientes investigan especialistas en Instagram, comparan resultados y perfiles antes de decidir a quién
            confiar. Entre descubrir un perfil y agendar hay un recorrido que, si no está construido, se pierde.
          </p>
          <p className="sc-lead" style={{ marginTop: "1rem" }}>
            No se trata solo de una web bonita ni de publicar más. Se trata de que cada pieza digital cumpla una función
            de crecimiento: atraer, informar, convertir y organizar la atención.
          </p>
        </div>
      </section>

      <section id="marca" className="sc-section sc-section--dark">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">02</span> Diagnóstico
          </p>
          <h2>¿Qué encontramos en tu marca?</h2>
          <p className="sc-lead">
            Ya hay activos valiosos: comunidad, experiencia clínica visible e identidad gráfica reconocible. Pero
            identificamos cuatro oportunidades estratégicas.
          </p>
          <div className="sc-reason-grid">
            {OPPORTUNITIES.map((item) => (
              <article key={item.title} className="sc-reason">
                <div className="sc-reason-head">
                  <span className="sc-reason-num">{item.num}</span>
                  <div className="sc-card-icon" aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt="" />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="sc-note" style={{ marginTop: "1.25rem" }}>
            Este diagnóstico se basa en la presencia digital visible y se validará en la primera fase con tu atención,
            agenda y seguimiento interno actuales.
          </p>
        </div>
      </section>

      <section id="solucion" className="sc-section sc-section--light">
        <div className="sc-wrap sc-reveal sc-solucion">
          <div className="sc-solucion-copy">
            <p className="sc-eyebrow">
              <span className="sc-eyebrow-num">03</span> La solución
            </p>
            <h2>PDM Clínica Growth 360</h2>
            <p className="sc-lead">
              Una marca que atrae. Un sistema que convierte. Una experiencia que fideliza.
            </p>
            <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
              Construimos una infraestructura comercial conectada alrededor de tus servicios y de la experiencia que
              quieres que viva cada paciente.
            </p>
          </div>

          <div className="sc-funnel" role="list">
            {FUNNEL.map((step, idx) => (
              <div key={step.title || `split-${idx}`} className="sc-funnel-stage" role="listitem">
                {idx > 0 ? <div className="sc-funnel-join" aria-hidden /> : null}
                {step.split ? (
                  <div className="sc-funnel-split">
                    {step.items.map((item) => (
                      <div key={item.title} className="sc-funnel-item">
                        <span className="sc-funnel-icon" aria-hidden>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.icon} alt="" />
                        </span>
                        <div className="sc-funnel-copy">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`sc-funnel-item${step.end ? " is-end" : ""}`}>
                    <span className="sc-funnel-icon" aria-hidden>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={step.icon} alt="" />
                    </span>
                    <div className="sc-funnel-copy">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="componentes" className="sc-section sc-section--light">
        <div className="sc-wrap">
          <div className="sc-reveal sc-alcance-head">
            <div>
              <p className="sc-eyebrow">
                <span className="sc-eyebrow-num">04</span> Alcance
              </p>
              <h2>Todo lo que construiremos para tu clínica</h2>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sc-alcance-sticker" src={SANDRA_PORTRAIT} alt="" />
          </div>

          <article className="sc-component sc-component--dark sc-reveal">
            <p className="sc-component-label">Componente 1</p>
            <h3>Estrategia y posicionamiento de marca</h3>
            <div>
                <p className="sc-lead">
                  Queremos que te reconozcan por tu experiencia, no solamente por los tratamientos que realizas.
                  Construiremos una estrategia que comunique tu criterio clínico, tu filosofía de atención y el valor de
                  una experiencia personalizada en odontología estética.
                </p>
                <p className="sc-includes">Incluye</p>
                <ul className="sc-list">
                  {STRATEGY_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="sc-result">
                  <strong>Resultado:</strong> una identidad estratégica clara que guíe las páginas, el contenido y los
                  mensajes comerciales.
                </p>
              </div>
          </article>

          <article className="sc-component sc-reveal">
            <p className="sc-component-label">Componente 2</p>
            <h3>Página web premium</h3>
            <p className="sc-lead">
              Tu nueva web será mucho más que una presentación de servicios: será el espacio donde las pacientes puedan
              conocerte, comprender tu enfoque y dar el siguiente paso hacia una valoración.
            </p>
            <p className="sc-includes">Estructura de la homepage</p>
            <div className="sc-table-wrap">
              <table className="sc-table">
                <thead>
                  <tr>
                    <th scope="col">Sección</th>
                    <th scope="col">Función</th>
                  </tr>
                </thead>
                <tbody>
                  {HOME_SECTIONS.map((row) => (
                    <tr key={row.section}>
                      <td>{row.section}</td>
                      <td>{row.fn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sc-note">
              Desarrollada para móvil y escritorio, con navegación intuitiva, CTAs estratégicos, configuración SEO básica
              y medición de contactos.
            </p>
          </article>

          <article className="sc-component sc-component--dark sc-reveal">
            <p className="sc-component-label">Componente 3</p>
            <h3>Dos landings comerciales especializadas</h3>
            <p className="sc-lead">
              No todas las pacientes buscan el mismo tratamiento ni tienen las mismas preguntas. Desarrollaremos dos
              páginas independientes, enfocadas en los servicios de mayor prioridad comercial.
            </p>
            <div className="sc-landing-protos">
              <article className="sc-landing-proto">
                <figure className="sc-landing-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MOCKUP_ENDO_LAPTOP} alt="Prototipo landing Endolifting en laptop" />
                </figure>
                <div className="sc-landing-body">
                  <h4>Endolifting</h4>
                  <p>
                    Prototipo de landing con información del procedimiento, expectativas, recuperación y
                    agendamiento.
                  </p>
                </div>
              </article>

              <article className="sc-landing-proto">
                <figure className="sc-landing-shot sc-landing-shot--phone">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MOCKUP_ARMO_PHONE} alt="Prototipo landing Armonización facial en móvil" />
                </figure>
                <div className="sc-landing-body">
                  <h4>Armonización facial</h4>
                  <p>
                    Prototipo de landing con alternativas, preguntas frecuentes y solicitud de valoración.
                  </p>
                </div>
              </article>
            </div>
            <p className="sc-note">
              Los tratamientos propuestos son preliminares y dependen del diagnóstico comercial y de la validación
              clínica. Cada landing incluye contenido visual, información del servicio, credenciales, prueba social y
              CTA de valoración.
            </p>
          </article>

          <article className="sc-component sc-reveal">
            <p className="sc-component-label">Componente 4</p>
            <h3>CRM, WhatsApp y automatizaciones</h3>
            <p className="sc-lead">Que ninguna solicitud quede sin un proceso de atención.</p>
            <p className="sc-lead" style={{ marginTop: "0.75rem" }}>
              Integramos los canales principales de contacto en un recorrido comercial organizado para registrar,
              clasificar y dar seguimiento a cada oportunidad.
            </p>
            <div className="sc-stack" aria-label="Stack de integración">
              {CRM_STACK.map((item) => (
                <div key={item.name} className="sc-stack-item">
                  <span className="sc-stack-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt="" />
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="sc-includes">Incluye</p>
            <ul className="sc-list">
              {CRM_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="sc-example">
              <h4>Ejemplo de recorrido</h4>
              <ol>
                <li>Una persona descubre un tratamiento en Instagram.</li>
                <li>Ingresa a la landing y solicita información.</li>
                <li>Sus datos quedan registrados en el CRM.</li>
                <li>Recibe una respuesta inicial y se deriva al equipo.</li>
                <li>Agenda su valoración a través del canal configurado.</li>
                <li>Recibe una confirmación y un recordatorio.</li>
              </ol>
            </div>
            <p className="sc-note">
              La automatización atenderá tareas administrativas. La orientación médica, selección de tratamientos y
              decisiones clínicas seguirán a cargo de la profesional.
            </p>
          </article>

          <article className="sc-component sc-component--dark sc-reveal">
            <p className="sc-component-label">Componente 5</p>
            <h3>Laboratorio de contenido y estrategia de captación</h3>
            <p className="sc-lead">
              Desarrollaremos cinco pilares de comunicación para atraer y convertir con criterio.
            </p>
            <div className="sc-pillar-rows">
              {PILLARS.map((pillar) => (
                <article key={pillar.title} className="sc-pillar-row">
                  <strong>{pillar.title}</strong>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
            <p className="sc-includes">Entregables del laboratorio</p>
            <ul className="sc-list">
              {CONTENT_LAB.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sc-note">
              Este componente cubre estrategia y configuración. Producción audiovisual, edición, publicación recurrente,
              inversión publicitaria y gestión diaria se cotizan por separado.
            </p>
          </article>

          <article className="sc-component sc-reveal">
            <p className="sc-component-label">Componente 6</p>
            <h3>Dashboard de crecimiento comercial</h3>
            <p className="sc-lead">
              Para entender qué ocurre después de que alguien ve tu contenido: solicitudes, citas y oportunidades
              comerciales.
            </p>
            <div className="sc-dash">
              <div className="sc-dash-item">
                <span aria-hidden>◎</span>
                <p>Nuevas solicitudes</p>
              </div>
              <div className="sc-dash-item">
                <span aria-hidden>☰</span>
                <p>Valoraciones agendadas</p>
              </div>
              <div className="sc-dash-item">
                <span aria-hidden>◉</span>
                <p>Seguimiento de contactos</p>
              </div>
              <div className="sc-dash-item">
                <span aria-hidden>↗</span>
                <p>Conversión por canal</p>
              </div>
            </div>
            <figure className="sc-crm-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={MOCKUP_CRM} alt="CRM de la clínica: ficha de paciente, odontograma e historial" />
            </figure>
            <p className="sc-note">
              El dashboard identifica dónde nacen las oportunidades y dónde mejorar el recorrido. Datos de asistencia y
              tratamientos contratados dependen del registro interno de la clínica.
            </p>
          </article>
        </div>
      </section>

      <section id="plan" className="sc-section sc-section--dark">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">05</span> Ejecución
          </p>
          <h2>Nuestro plan de ejecución — 90 días</h2>
          <p className="sc-lead">
            Un mapa claro de fases, entregables y ventanas de tiempo para que sepas qué ocurre en cada tramo.
          </p>
          <div className="sc-timeline" aria-label="Plan de 90 días">
            <div className="sc-timeline-track" aria-hidden>
              <span className="sc-timeline-line" />
            </div>
            <div className="sc-timeline-grid">
              {PHASES.map((phase) => (
                <article key={phase.num} className="sc-timeline-step">
                  <div className="sc-timeline-marker">
                    <span className="sc-timeline-dot">{phase.num}</span>
                    <span className="sc-timeline-range">Días {phase.range}</span>
                  </div>
                  <div className="sc-timeline-card">
                    <strong>{phase.title}</strong>
                    <p>{phase.text}</p>
                    <p className="sc-phase-deliver">
                      <em>Entregamos:</em> {phase.deliver}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inversion" className="sc-section sc-section--light">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">06</span> Inversión
          </p>
          <h2>Tu inversión</h2>
          <div className="sc-invest">
            <p className="sc-invest-tag">PDM Clínica Growth 360</p>
            <p className="sc-invest-price">USD 2.497</p>
            <p className="sc-lead">
              Una inversión integral para desarrollar e implementar tu ecosistema estratégico y digital durante 90 días.
            </p>
            <p className="sc-note" style={{ marginTop: "1rem" }}>
              Puedes dividir tu inversión en tres pagos
            </p>
            <div className="sc-payments">
              <div className="sc-pay">
                <span>Pago 1</span>
                <strong>USD 999</strong>
                <p>Inicio</p>
              </div>
              <div className="sc-pay">
                <span>Pago 2</span>
                <strong>USD 749</strong>
                <p>Diseño aprobado</p>
              </div>
              <div className="sc-pay">
                <span>Pago 3</span>
                <strong>USD 749</strong>
                <p>Sistema entregado</p>
              </div>
            </div>
            <p className="sc-note">Implementación: 60 días · Optimización incluida: 30 días</p>
            <div className="sc-cta-row">
              <a className="sc-btn sc-btn-gold" href={waUrl()} target="_blank" rel="noreferrer">
                Confirmar y arrancar
              </a>
              <a
                className="sc-btn sc-btn-ghost"
                href={waUrl("Hola Partnersflux. Quiero resolver dudas sobre PDM Clínica Growth 360.")}
                target="_blank"
                rel="noreferrer"
              >
                Resolver dudas
              </a>
            </div>
          </div>
          <p className="sc-note">
            La inversión cubre el alcance descrito. No incluye pauta publicitaria, producción audiovisual, community
            management, licencias de software, hosting, dominios, costos de mensajería ni desarrollos adicionales.
          </p>
        </div>
      </section>

      <section id="continuidad" className="sc-section sc-section--dark">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">07</span> Continuidad
          </p>
          <h2>¿Qué sucede después del lanzamiento?</h2>
          <p className="sc-lead">
            Al cabo de 90 días, tu clínica tendrá infraestructura digital para recibir y organizar solicitudes de
            valoración. Partnersflux entrega el sistema y la capacitación acordada.
          </p>
          <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
            Si quieres acompañamiento continuo, dirección estratégica u optimización de campañas, podemos construir un
            plan mensual. Continuar el contrato es independiente y opcional.
          </p>
        </div>
      </section>

      <section id="medicion" className="sc-section sc-section--light">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">08</span> Medición
          </p>
          <h2>¿Cómo mediremos el éxito?</h2>
          <p className="sc-lead">Nuestro enfoque es construir una operación más organizada y medible.</p>
          <ul className="sc-list">
            {KPIS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="sc-note">
            No garantizamos resultados clínicos ni un volumen fijo de pacientes. El rendimiento dependerá de factores
            como demanda, oferta, inversión publicitaria, atención comercial y capacidad operativa.
          </p>
        </div>
      </section>

      <div className="sc-band-marquee" aria-hidden>
        <div className="sc-band-marquee-track">
          {[...BAND_MARQUEE, ...BAND_MARQUEE, ...BAND_MARQUEE].map((item, i) => (
            <span key={`${item}-${i}`} className="sc-band-marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="cierre" className="sc-section sc-section--dark sc-section--finale">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">09</span> Cierre
          </p>
          <h2>Comencemos a construir el siguiente nivel de tu clínica</h2>
          <p className="sc-lead">Tu presencia digital puede hacer mucho más que mostrar lo que haces.</p>
          <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
            Construimos confianza, facilitamos la experiencia de la paciente y generamos oportunidades de crecimiento.
            Partnersflux combina estrategia, desarrollo y automatización para una infraestructura comercial conectada.
          </p>
          <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
            Tu próximo paciente puede estar viendo tu Instagram. Construyamos el camino para que llegue a tu consulta.
          </p>
          <div className="sc-cta-row">
            <a className="sc-btn sc-btn-gold" href={waUrl()} target="_blank" rel="noreferrer">
              Quiero PDM Clínica Growth 360
            </a>
          </div>

          <div className="sc-conditions">
            <h4>Condiciones de implementación</h4>
            <ul>
              <li>El cronograma inicia tras el pago inicial y la recepción de materiales y accesos.</li>
              <li>La cliente es responsable de credenciales profesionales y consentimientos de pacientes para testimonios.</li>
              <li>Publicidad y captación de datos deben cumplir la normativa vigente en Colombia.</li>
              <li>La propuesta incluye una ronda de aprobación de arquitectura y hasta dos rondas de ajustes de diseño por página.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="sc-footer">
        <div className="sc-wrap">Propuesta confidencial · Partnersflux · Dra. Sandra Cárdenas · PDM Clínica Growth 360</div>
      </footer>
    </div>
  );
}
