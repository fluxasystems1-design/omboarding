"use client";

import { useEffect, useState } from "react";

const SANDRA_LOGO = "/imagenes/sandra-cardenas/logo.png";
const SANDRA_PORTRAIT = "/imagenes/sandra-cardenas/portrait.png";
const HERO_OFFER = "/imagenes/sandra-cardenas/mockups/oferta-hero.jpg";
const SANDRA_HERO_VIDEO = "/imagenes/sandra-cardenas/hero-reel.mp4";
const SANDRA_FLYER = "/imagenes/sandra-cardenas/flyer-ref.png";
const MOCKUP_ENDO_LAPTOP = "/imagenes/sandra-cardenas/mockups/endolifting-laptop-2.png";
const MOCKUP_ARMO_PHONE = "/imagenes/sandra-cardenas/mockups/armonizacion-phone-2.png";
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
const INSTAGRAM_URL = "https://www.instagram.com/drasandracardenasc/";
const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Partnersflux. Revisé la propuesta PDM Clínica Growth 360 para Dra. Sandra Cárdenas y quiero avanzar.";

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
    text: "Instagram y WhatsApp son puntos clave. Conectarlos a páginas especializadas y a un primer mensaje que se responde solo multiplica valoraciones.",
  },
  {
    num: "04",
    icon: ICON_CHART,
    iconAlt: "Indicadores",
    title: "Tu crecimiento necesita indicadores comerciales",
    text: "Más allá de seguidores o vistas: qué contenido atrae solicitudes, qué canal genera citas y dónde conviene optimizar.",
  },
];

const STRATEGY_ITEMS = [
  "Diagnóstico de marca y definición de objetivos",
  "Estrategia de posicionamiento para Endolifting y Armonización facial",
  "Investigación del paciente ideal y sus objeciones",
  "Definición de pilares de contenido",
  "Planeación del calendario mensual",
  "Redacción de los 15 guiones para reels",
  "Conceptualización y copy de los 5 carruseles",
  "Desarrollo de los 5 guiones publicitarios",
  "Definición de CTA y rutas hacia WhatsApp o valoración",
  "Dirección creativa y supervisión estratégica",
  "3 reuniones/sesiones de planificación y seguimiento",
];

const CRM_ITEMS = [
  "Cada persona queda con nombre, teléfono y el servicio que busca",
  "El equipo ve en qué va: nueva, en conversación o cita agendada",
  "La conversación queda junto a la ficha, sin perderse en un chat personal",
];

const AUTO_ITEMS = [
  "Flujo de bienvenida que separa a quien solo mira de quien quiere una valoración",
  "Categoriza el interés: Endolifting, Armonización facial o servicios odontológicos",
  "Identifica a la persona por su nombre antes de que llegue al equipo",
  "Confirma que la solicitud quedó recibida y clasificada",
  "Fuera de horario, el flujo sigue filtrando y ordenando cada interés",
  "Instagram entra al mismo flujo, para que todo interés quede categorizado de la misma forma",
];

const META_ITEMS = [
  "Configuración de los eventos y correlación con quien ya maneja la pauta",
  "Cada solicitud recuerda el servicio y el anuncio que la trajo",
  "Meta aprende a mostrar la pauta a quien sí pide la valoración, y deja de gastarla en curiosos",
];

const DELIVERABLES = [
  "Diagnóstico, posicionamiento, pilares y calendario de contenido",
  "15 guiones para reels, 5 carruseles y 5 guiones publicitarios",
  "Dirección creativa y 3 reuniones/sesiones de planificación y seguimiento",
  "Homepage",
  "Landing de Endolifting",
  "Landing de Armonización facial",
  "Landing de servicios odontológicos",
  "Flujo de filtración y categorización en WhatsApp e Instagram",
  "CRM básico y panel de solicitudes",
  "Configuración de los eventos y correlación con quien ya maneja la pauta",
  "Capacitación del equipo",
  "Hosting de la web y de las automatizaciones de Instagram, de por vida",
];

const TRAIN_ITEMS = [
  "Sesión con el equipo para usar el panel, leer de dónde llegó cada persona y marcar el estado de la cita",
];

const CRM_STACK = [
  { name: "WhatsApp", src: ICON_WHATSAPP, note: "Filtra y categoriza" },
  { name: "Instagram", src: ICON_INSTAGRAM, note: "Mismo flujo de interés" },
  { name: "Meta Ads", src: ICON_MEGAPHONE, note: "Eventos para la pauta" },
];

const FUNNEL = [
  {
    title: "Estrategia de contenido",
    text: "Pensada para el algoritmo de Meta y para ahorrar gasto innecesario en pauta",
    icon: ICON_SPARKLE,
  },
  {
    split: true,
    items: [
      { title: "Instagram", text: "Mensaje directo automático", icon: ICON_INSTAGRAM },
      { title: "Meta Ads", text: "Eventos para el algoritmo", icon: ICON_MEGAPHONE },
    ],
  },
  {
    title: "Homepage y tres landings",
    text: "Filtran curiosos y solo pasan clientes potenciales",
    icon: ICON_DEVICES,
  },
  {
    title: "WhatsApp con respuesta automática",
    text: "Bienvenida, servicio y paso al equipo",
    icon: ICON_WHATSAPP,
  },
  {
    title: "Solicitud en el panel",
    text: "El equipo ve el caso y confirma la hora",
    icon: ICON_CHART,
    end: true,
  },
];

const PHASES = [
  {
    num: "01",
    range: "1–10",
    days: "Días 1–10",
    title: "Estrategia y piezas",
    text: "Diagnóstico, paciente ideal, posicionamiento, pilares, calendario y rutas hacia WhatsApp.",
  },
  {
    num: "02",
    range: "11–25",
    days: "Días 11–25",
    title: "Páginas",
    text: "Homepage y las tres landings: Endolifting, Armonización facial y servicios odontológicos.",
  },
  {
    num: "03",
    range: "26–35",
    days: "Días 26–35",
    title: "Instagram, WhatsApp y CRM",
    text: "Respuestas automáticas, panel de solicitudes y eventos conectados con quien maneja los anuncios.",
  },
  {
    num: "04",
    range: "36–45",
    days: "Días 36–45",
    title: "Entrega",
    text: "Capacitación del equipo, ajustes finales y sesión de cierre.",
  },
];

const KPIS = [
  "Solicitudes de valoración recibidas",
  "Servicio que pidió cada persona",
  "Anuncio del que llegó cada solicitud",
  "Citas que el equipo marcó como agendadas",
  "Qué página convierte mejor",
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
          <a className="sc-btn sc-btn-gold" href="#inversion">
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
            <span>Tu excelencia clínica</span>
            <em>merece</em>
            <span>un crecimiento exponencial.</span>
          </h1>
          <p className="sc-offer-kicker">45 días · una valoración real</p>
          <figure className="sc-offer-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_OFFER} alt="Landings, página y CRM de la Dra. Sandra Cárdenas" />
          </figure>
          <p className="sc-offer-caption">Que esa excelencia se refleje en el crecimiento financiero.</p>
          <a className="sc-btn sc-btn-gold sc-offer-cta" href="#inversion">
            Quiero avanzar
          </a>
          <p className="sc-offer-note">PDM Clínica Growth 360 · $3.590.000</p>
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
              Tu excelencia
              <br />
              merece verse
              <br />
              en el crecimiento
              <br />
              de tu clínica
            </h2>
          </div>
        </div>
        <div className="sc-wrap sc-quote-body sc-reveal">
          <p className="sc-lead">
            Quien te busca compara especialistas, resultados y criterio. El tuyo ya está a esa altura. El recorrido
            digital tiene que reflejar la misma excelencia, desde el primer vistazo hasta la valoración.
          </p>
          <p className="sc-lead" style={{ marginTop: "1rem" }}>
            El contenido, la página y el WhatsApp trabajan con la precisión de tu consulta: atraen a quien corresponde,
            filtran y convierten ese interés en crecimiento financiero.
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
              Estrategia de contenido pensada para el algoritmo de Meta, para no gastar pauta de más. Páginas que filtran curiosos. Un WhatsApp que responde el primer mensaje.
            </p>
            <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
              Todo queda conectado con quien ya maneja tus anuncios, para que el algoritmo de Meta busque personas
              parecidas a las que sí piden una valoración.
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
            <h3>Estrategia y contenido</h3>
            <div>
                <p className="sc-lead">
                  Dejamos listos el mensaje, el contenido y los anuncios de Endolifting y Armonización facial, para que
                  lleguen a quien sí quiere una valoración.
                </p>
                <p className="sc-includes">Incluye</p>
                <ul className="sc-list">
                  {STRATEGY_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="sc-result">
                  <strong>Resultado:</strong> calendario, piezas y anuncios listos para publicarse y medirse.
                </p>
              </div>
          </article>

          <article className="sc-component sc-reveal">
            <p className="sc-component-label">Componente 2</p>
            <h3>Página web de la clínica</h3>
            <p className="sc-lead">
              Pensada para reflejar la excelencia y el profesionalismo de tu marca. Quien entra reconoce tu criterio
              antes de pedir la valoración.
            </p>
            <p className="sc-includes">Servicios</p>
            <ul className="sc-list">
              <li>Endolifting</li>
              <li>Armonización facial</li>
              <li>Servicios odontológicos</li>
            </ul>
            <p className="sc-note">El hosting de esta página queda incluido, gratuito de por vida.</p>
          </article>

          <article className="sc-component sc-component--dark sc-reveal">
            <p className="sc-component-label">Componente 3</p>
            <h3>Tres landings que filtran interesados</h3>
            <div className="sc-landing-proto">
              <div className="sc-landing-shots">
                <figure className="sc-landing-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MOCKUP_ENDO_LAPTOP} alt="Landing de Endolifting en computador" />
                </figure>
                <figure className="sc-landing-shot sc-landing-shot--phone">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MOCKUP_ARMO_PHONE} alt="Landing de Armonización facial en celular" />
                </figure>
              </div>
            </div>
            <p className="sc-landing-copy">
              <em>Estructura pensada para la conversión y para filtrar clientes potenciales.</em>
              <span>La homepage, pensada para reflejar la excelencia y el profesionalismo de tu marca.</span>
              Endolifting, Armonización facial y servicios odontológicos. Cada anuncio llega a una página a la altura de
              tu práctica: el curioso se queda y solo pasa quien ya quiere la valoración.
            </p>
          </article>

          <article className="sc-component sc-reveal">
            <p className="sc-component-label">Componente 4</p>
            <h3>Automatizaciones</h3>
            <p className="sc-lead">
              Un flujo pensado para filtrar y categorizar a un posible cliente interesado, antes de que llegue al equipo.
            </p>
            <div className="sc-stack sc-stack--flow" aria-label="Canales del flujo">
              {CRM_STACK.filter((item) => item.name !== "Meta Ads").map((item) => (
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
            <ul className="sc-list">
              {AUTO_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sc-includes">Pauta</p>
            <ul className="sc-list">
              {META_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sc-note">
              El hosting de las automatizaciones de Instagram queda incluido, gratuito de por vida.
            </p>
          </article>

          <article className="sc-component sc-reveal">
            <p className="sc-component-label">Componente 5</p>
            <h3>CRM básico</h3>
            <p className="sc-lead">
              Cuando el flujo ya clasificó el interés, el equipo lo ve aquí: quién escribió, qué servicio busca y en qué
              va la cita.
            </p>
            <div className="sc-dash">
              <div className="sc-dash-item">
                <span aria-hidden>◎</span>
                <p>Nuevas solicitudes</p>
              </div>
              <div className="sc-dash-item">
                <span aria-hidden>☰</span>
                <p>En conversación</p>
              </div>
              <div className="sc-dash-item">
                <span aria-hidden>◉</span>
                <p>Cita agendada</p>
              </div>
              <div className="sc-dash-item">
                <span aria-hidden>↗</span>
                <p>Servicio de origen</p>
              </div>
            </div>
            <ul className="sc-list">
              {CRM_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sc-includes">Capacitación</p>
            <ul className="sc-list">
              {TRAIN_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sc-note">El panel no agenda solo. El equipo confirma la hora y marca el estado.</p>
          </article>

          <article className="sc-component sc-component--dark sc-promo sc-reveal">
            <p className="sc-component-label">Promoción</p>
            <h3>Hosting gratuito de por vida</h3>
            <p className="sc-lead">
              La página, las tres landings y las automatizaciones de Instagram quedan alojadas sin cobro mensual.
            </p>
            <ul className="sc-list">
              <li>Hosting de la página web y de las tres landings</li>
              <li>Hosting de las automatizaciones de Instagram</li>
            </ul>
            <a
              className="sc-btn sc-btn-gold sc-btn-pulse"
              href={waUrl(
                "Hola Partnersflux. Quiero la promoción de hosting gratuito de por vida de PDM Clínica Growth 360."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Evita mensualidades innecesarias
            </a>
          </article>
        </div>
      </section>

      <section id="plan" className="sc-section sc-section--dark">
        <div className="sc-wrap sc-reveal">
          <p className="sc-eyebrow">
            <span className="sc-eyebrow-num">05</span> Ejecución
          </p>
          <h2>Nuestro plan de ejecución — 45 días</h2>
          <p className="sc-lead">
            Un mapa claro de fases, entregables y ventanas de tiempo para que sepas qué ocurre en cada tramo.
          </p>
          <div className="sc-timeline" aria-label="Plan de 45 días">
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
            <p className="sc-invest-price">$3.590.000</p>
            <p className="sc-includes">Entregables</p>
            <ul className="sc-list">
              {DELIVERABLES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sc-note">Entrega en 45 días. Se inicia con el 50%: $1.795.000.</p>
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
            La inversión cubre el alcance descrito, incluido el hosting de la web y de las automatizaciones de Instagram.
            No incluye pauta publicitaria, producción audiovisual, community management, dominios, costos de mensajería de
            Meta ni desarrollos adicionales.
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
            Al completar la instalación, eres dueña del código implementado: las páginas y el CRM.
          </p>
          <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
            El primer mes incluye soporte gratuito para dudas, ajustes de uso y acompañamiento del equipo.
          </p>
          <p className="sc-lead" style={{ marginTop: "0.85rem" }}>
            Si después quieres acompañamiento continuo, dirección estratégica u optimización de campañas, podemos
            construir un plan mensual. Continuar el contrato es independiente y opcional.
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
          <div className="sc-cta-row">
            <a className="sc-btn sc-btn-gold" href={waUrl()} target="_blank" rel="noreferrer">
              Quiero PDM Clínica Growth 360
            </a>
          </div>
        </div>
      </section>

      <footer className="sc-footer">
        <div className="sc-wrap">Propuesta confidencial · Partnersflux · Dra. Sandra Cárdenas · PDM Clínica Growth 360</div>
      </footer>
    </div>
  );
}
