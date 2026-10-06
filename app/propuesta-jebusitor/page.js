"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "573116425337";
const IG_HANDLE = "jebusitor";
const IG_URL = `https://www.instagram.com/${IG_HANDLE}/`;

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "partida", label: "Punto de partida" },
  { id: "transformaciones", label: "Transformaciones" },
  { id: "inversion", label: "Inversión" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "resumen", label: "Resumen" },
  { id: "contacto", label: "Contacto" },
];

const FICHA = [
  { label: "Instagram", value: "@jebusitor" },
  { label: "Especialidad", value: "trading y acompañamiento a traders" },
  { label: "Ubicación", value: "Cali · audiencia en Latinoamérica" },
  { label: "Foco actual", value: "brokeraje, con registro por tu link" },
  { label: "Base actual", value: "landing en Systeme.io, VSL y guiones del trabajo anterior" },
];

const ASSETS = [
  "Autoridad y trayectoria como trader profesional",
  "Una historia que conecta (abogado que se volvió trader)",
  "Guiones, VSL y laboratorio de contenido en Notion",
  "Equipo propio para grabar y editar",
  "Un modelo (brokeraje) que ya está funcionando",
];

const BOTTLENECKS = [
  {
    title: "Oferta sin ordenar",
    text: "Tienes varias líneas (academia, scanner, mentoría, brokeraje) y hoy no está claro cuál es la principal ni cómo se conectan entre sí.",
  },
  {
    title: "Landing básica",
    text: "Está construida en una plataforma sencilla (Systeme.io), con un diseño que no está a la altura de tu autoridad ni optimizado para convertir.",
  },
  {
    title: "Sin automatización activa",
    text: "Las preguntas llegan por DM y dependen de que alguien responda a tiempo.",
  },
  {
    title: "Contenido sin destino",
    text: "Los videos generan interés, pero no hay una página que lo convierta en registro.",
  },
  {
    title: "Pauta sin montar",
    text: "No hay tráfico pagado trayendo registros.",
  },
];

const TRANSFORMATIONS = [
  {
    before: "Varias líneas de negocio sin jerarquía clara",
    after: "Oferta ordenada, con una línea principal (brokeraje) y las demás como apoyo",
  },
  {
    before: "Landing básica en Systeme.io",
    after: "Landing nueva, de diseño profesional y enfocada en registro con tu link",
  },
  {
    before: "Mensajes por DM atendidos a mano",
    after: "DM automatizado que lleva directo a la landing",
  },
  {
    before: "Contenido sin ruta clara",
    after: "Calendario de 3 videos semanales con CTA al registro",
  },
  {
    before: "Sin pauta activa",
    after: "10 guiones de ads y campaña montada en Meta Ads",
  },
];

const PACKAGE_BLOCKS = [
  {
    title: "Ordenamiento de oferta",
    items: [
      "Diagnóstico de tus líneas actuales (academia, scanner, mentoría, brokeraje)",
      "Definición de la oferta principal y cómo se conectan las demás",
      "Mensaje central y propuesta de valor para el registro por tu link",
    ],
  },
  {
    title: "Landing",
    items: [
      "Landing nueva, diseñada para captar registros con tu link de broker",
      "Reemplaza la actual de Systeme.io",
      "Copy y estructura de conversión basados en la oferta ordenada",
    ],
  },
  {
    title: "Instagram automatizado",
    items: [
      "Automatización de DM por palabra clave, conectada a la landing",
      "Respuestas automáticas a las preguntas frecuentes antes del registro",
    ],
  },
  {
    title: "Estrategia y contenido (noviembre y diciembre)",
    items: [
      "Estrategia de contenido enfocada en el registro",
      "Guiones y calendario de 3 videos semanales, entregados por bloques mensuales",
    ],
  },
  {
    title: "Estrategia de ads",
    items: [
      "10 guiones de video para ads",
      "Montaje y configuración de la campaña en Meta Ads",
      "Configuración de pixel y analítica",
    ],
  },
];

const TIMELINE = [
  {
    num: "1",
    when: "Octubre, semanas 1 y 2",
    title: "Oferta y landing",
    text: "Ordenamos tu oferta y construimos la landing nueva.",
  },
  {
    num: "2",
    when: "Octubre, semanas 3 y 4",
    title: "Automatización y ads",
    text: "DM conectado a la landing, guiones de ads y campaña montada.",
  },
  {
    num: "3",
    when: "Noviembre",
    title: "Contenido y lanzamiento de pauta",
    text: "Primer bloque de guiones (3 por semana) y campaña activa.",
  },
  {
    num: "4",
    when: "Diciembre",
    title: "Optimización",
    text: "Segundo bloque de guiones, ajustes con datos reales y mejora de creativos.",
  },
];

const CLIENT_DUTIES = [
  "Grabar y editar todos los videos, orgánicos y ads",
  "Entregar accesos y materiales a tiempo (cuenta publicitaria, link de afiliado, videos)",
  "Cubrir la inversión en pauta, que va aparte",
];

const SUMMARY_TODAY = [
  "Varias líneas de negocio sin una oferta principal definida",
  "Una landing básica que no refleja tu autoridad",
  "Mensajes atendidos a mano y sin pauta activa",
];

const SUMMARY_AFTER = [
  "Una oferta clara, con el brokeraje como eje",
  "Una landing profesional que lleva directo al registro con tu link",
  "Un Instagram que responde y conduce a esa landing",
  "Contenido y ads con un destino definido",
];

function waUrl(message) {
  if (!WA_NUMBER || !/^\d{10,15}$/.test(WA_NUMBER)) return null;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function DecorLayer() {
  return (
    <div className="jb-decor" aria-hidden>
      <div className="jb-grid" />
      <div className="jb-candles">
        <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="jbLineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3DDC97" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#3DDC97" />
              <stop offset="100%" stopColor="#E8B84A" />
            </linearGradient>
          </defs>

          {/* Wicks */}
          <line className="jb-candle-wick" x1="90" y1="420" x2="90" y2="560" />
          <line className="jb-candle-wick" x1="170" y1="360" x2="170" y2="540" />
          <line className="jb-candle-wick" x1="250" y1="300" x2="250" y2="500" />
          <line className="jb-candle-wick" x1="330" y1="280" x2="330" y2="470" />
          <line className="jb-candle-wick" x1="410" y1="240" x2="410" y2="430" />
          <line className="jb-candle-wick" x1="490" y1="210" x2="490" y2="390" />
          <line className="jb-candle-wick" x1="570" y1="260" x2="570" y2="420" />
          <line className="jb-candle-wick" x1="650" y1="180" x2="650" y2="360" />
          <line className="jb-candle-wick" x1="730" y1="150" x2="730" y2="340" />
          <line className="jb-candle-wick" x1="810" y1="200" x2="810" y2="380" />
          <line className="jb-candle-wick" x1="890" y1="140" x2="890" y2="320" />
          <line className="jb-candle-wick" x1="970" y1="110" x2="970" y2="290" />
          <line className="jb-candle-wick" x1="1050" y1="160" x2="1050" y2="330" />
          <line className="jb-candle-wick" x1="1130" y1="90" x2="1130" y2="270" />

          {/* Bodies */}
          <rect className="jb-candle-bear" x="74" y="460" width="32" height="70" rx="3" />
          <rect className="jb-candle-bull" x="154" y="400" width="32" height="95" rx="3" />
          <rect className="jb-candle-bull" x="234" y="340" width="32" height="110" rx="3" />
          <rect className="jb-candle-bear" x="314" y="320" width="32" height="90" rx="3" />
          <rect className="jb-candle-bull" x="394" y="270" width="32" height="120" rx="3" />
          <rect className="jb-candle-bull" x="474" y="240" width="32" height="115" rx="3" />
          <rect className="jb-candle-bear" x="554" y="300" width="32" height="85" rx="3" />
          <rect className="jb-candle-bull" x="634" y="210" width="32" height="120" rx="3" />
          <rect className="jb-candle-bull" x="714" y="180" width="32" height="125" rx="3" />
          <rect className="jb-candle-bear" x="794" y="240" width="32" height="95" rx="3" />
          <rect className="jb-candle-bull" x="874" y="170" width="32" height="120" rx="3" />
          <rect className="jb-candle-bull" x="954" y="140" width="32" height="120" rx="3" />
          <rect className="jb-candle-bear" x="1034" y="200" width="32" height="90" rx="3" />
          <rect className="jb-candle-bull" x="1114" y="120" width="32" height="125" rx="3" />

          <path
            className="jb-price-line"
            d="M60 500 C140 470 180 410 250 360 C320 310 360 330 420 280 C500 210 560 300 640 220 C720 150 780 240 860 180 C940 120 1000 150 1160 110"
          />
        </svg>
      </div>
    </div>
  );
}

function Section({ id, kicker, title, soft, children }) {
  return (
    <section id={id} className={`jb-section scroll-mt-28 ${soft ? "jb-section--soft" : ""}`}>
      <div className="jb-section-inner">
        {kicker ? <p className="jb-kicker">{kicker}</p> : null}
        {title ? <h2 className="jb-heading">{title}</h2> : null}
        <div className={title || kicker ? "mt-8" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaJebusitorPage() {
  const [progress, setProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("hero");

  const waMessage =
    "Hola Partnersflux. Vi la propuesta PDM BROKER para @jebusitor y quiero coordinar.";
  const contactHref = waUrl(waMessage) || "#contacto";
  const contactIsWa = Boolean(waUrl(waMessage));

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = "hero";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActiveNav(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="jb-page">
      <DecorLayer />

      <div className="jb-content">
        <div className="jb-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
          <div className="jb-progress-bar h-full" style={{ width: `${progress}%` }} />
        </div>

        <nav className="jb-nav" aria-label="Secciones">
          <div>
            <span className="jb-nav-brand">PDM BROKER</span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`jb-nav-link ${activeNav === item.id ? "jb-nav-link--active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="hero" className="jb-hero scroll-mt-28">
          <div className="jb-hero-copy">
            <p className="jb-eyebrow">
              <span className="jb-eyebrow-dot" aria-hidden />
              Mercado abierto · Propuesta
            </p>
            <h1 className="jb-hero-brand">
              Jebusitor
              <span>PDM BROKER</span>
            </h1>
            <p className="jb-hero-title">Del video al registro. Oferta clara, landing y pauta.</p>
            <p className="jb-hero-lead">
              Hoy tu contenido genera confianza y tu foco está en el brokeraje. Falta una oferta clara y un camino
              directo desde el video hasta el registro.
            </p>
            <div className="jb-hero-meta">
              <span className="jb-chip">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                  @{IG_HANDLE}
                </a>
              </span>
              <span className="jb-chip">Cali · LatAm</span>
              <span className="jb-chip">$2.000.000 COP</span>
            </div>
            <div className="jb-hero-cta">
              <a href="#inversion" className="jb-btn jb-btn-solid">
                Ver inversión
              </a>
              <a
                href={contactHref}
                className="jb-btn jb-btn-ghost"
                {...(contactIsWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Coordinar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Section id="partida" kicker="01 · Punto de partida" title="Dónde estás hoy">
          <p data-reveal className="jb-reveal jb-lead" style={{ marginTop: 0 }}>
            Hoy tu contenido genera confianza y tu foco está en el brokeraje. Falta una oferta clara y un camino
            directo desde el video hasta el registro.
          </p>

          <div data-reveal className="jb-reveal">
            <p className="jb-kicker" style={{ marginTop: "1.75rem" }}>
              Ficha técnica
            </p>
            <div className="jb-ficha">
              {FICHA.map((row) => (
                <div key={row.label} className="jb-ficha-row">
                  <span className="jb-ficha-label">{row.label}</span>
                  <span className="jb-ficha-value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="jb-reveal mt-10">
            <p className="jb-kicker">Activos identificados</p>
            <ul className="jb-list jb-list--assets">
              {ASSETS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div data-reveal className="jb-reveal mt-10">
            <p className="jb-kicker">Cuellos de botella</p>
            <div className="jb-bottlenecks">
              {BOTTLENECKS.map((item) => (
                <article key={item.title} className="jb-bottle">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="transformaciones" soft kicker="02 · Transformaciones" title="Antes → Después">
          <div data-reveal className="jb-reveal jb-transform">
            {TRANSFORMATIONS.map((row) => (
              <div key={row.before} className="jb-transform-row">
                <div className="jb-before">
                  <span className="jb-tag-before">Antes</span>
                  {row.before}
                </div>
                <div className="jb-arrow" aria-hidden>
                  →
                </div>
                <div className="jb-after">
                  <span className="jb-tag-after">Después</span>
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="inversion" kicker="03 · Inversión" title="PDM BROKER">
          <div data-reveal className="jb-reveal jb-invest-hero">
            <p className="jb-plan-name">PDM BROKER</p>
            <p className="jb-price">$2.000.000 COP</p>
            <p className="jb-price-usd">USD 536 aprox.</p>
          </div>

          <div data-reveal className="jb-reveal jb-blocks">
            {PACKAGE_BLOCKS.map((block) => (
              <article key={block.title} className="jb-block">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div data-reveal className="jb-reveal jb-payment">
            <h3>Forma de pago</h3>
            <div className="jb-payment-grid">
              <div className="jb-pay-item">
                <strong>Fase 1 · $1.000.000 COP</strong>
                <span>Al firmar (corresponde al saldo pendiente de la pauta anterior)</span>
              </div>
              <div className="jb-pay-item">
                <strong>Fase 2 · $1.000.000 COP</strong>
                <span>A los 15 días</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="ejecucion" soft kicker="04 · Ejecución" title="Cronograma">
          <div data-reveal className="jb-reveal jb-timeline">
            {TIMELINE.map((step) => (
              <article key={step.num} className="jb-step">
                <p className="jb-step-num">Fase {step.num}</p>
                <p className="jb-step-when">{step.when}</p>
                <h3 className="jb-step-title">{step.title}</h3>
                <p className="jb-step-text">{step.text}</p>
              </article>
            ))}
          </div>

          <div data-reveal className="jb-reveal jb-client-box">
            <h3>Tu equipo se encarga de</h3>
            <ul className="jb-list">
              {CLIENT_DUTIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="resumen" kicker="06 · Resumen ejecutivo" title="Hoy vs cuando todo esté funcionando">
          <div data-reveal className="jb-reveal jb-summary">
            <div className="jb-summary-col jb-summary-col--today">
              <h3>Hoy</h3>
              <ul className="jb-list">
                {SUMMARY_TODAY.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="jb-summary-col jb-summary-col--after">
              <h3>Cuando todo esté funcionando</h3>
              <ul className="jb-list jb-list--assets">
                {SUMMARY_AFTER.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contacto" soft title="¿Arrancamos?">
          <div data-reveal className="jb-reveal jb-contact-box">
            <p className="jb-contact-name">PDM BROKER · @jebusitor</p>
            <p className="jb-body mt-4" style={{ maxWidth: "36rem" }}>
              Oferta ordenada, landing de registro, Instagram automatizado, contenido y Meta Ads. Coordinemos por
              WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactHref}
                className="jb-btn jb-btn-solid"
                {...(contactIsWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                WhatsApp
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="jb-btn jb-btn-ghost">
                @{IG_HANDLE}
              </a>
            </div>
          </div>
        </Section>

        <footer className="jb-footer">Jebusitor · PDM BROKER · Partnersflux · Confidencial</footer>
      </div>

      <a
        href={contactHref}
        className="jb-float"
        {...(contactIsWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        WhatsApp
      </a>
    </div>
  );
}
