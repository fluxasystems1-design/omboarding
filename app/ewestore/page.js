import Image from "next/image";
import EweBikeRunway from "./EweBikeRunway";

const WA_BASE = "https://wa.me/573116425337?text=";

function wa(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV = [
  { id: "analisis", label: "Análisis" },
  { id: "antes-despues", label: "Antes / Después" },
  { id: "proyeccion", label: "Proyección" },
  { id: "propuesta", label: "Propuesta" },
  { id: "mensual", label: "Mensual" },
];

const COMPARE = [
  {
    before: "El contenido genera interés, pero cada persona interesada tiene que escribir manualmente y esperar respuesta",
    after: "Instagram y WhatsApp automatizados capturan, califican y dirigen al cliente sin fricción",
  },
  {
    before: "No hay tienda online — todo el proceso de compra depende de una conversación",
    after: "Catálogo o tienda online donde el cliente ve, compara y avanza su compra sin depender de un asesor disponible",
  },
  {
    before: "El alcance nacional no se traduce en leads organizados por ciudad",
    after: "Automatización enruta cada interesado a la sede más cercana automáticamente",
  },
  {
    before: "El contenido se produce, pero no se sabe qué convierte y qué no",
    after: "Reportería mensual de leads y conversión, no solo de alcance",
  },
];

const PLANS = [
  {
    id: "ecosistema",
    accent: "#7BBBFF",
    featured: true,
    badge: "🔵 PARTNERS | ECOSISTEMA COMPLETO",
    tag: "El sistema completo de conversión",
    items: [
      "Tienda online — Ecommerce con catálogo completo de modelos + checkout integrado",
      "Landings de productos ganadores — Página de conversión dedicada por modelo destacado (hasta 3)",
      "Laboratorio y estrategia de contenido — 20 contenidos al mes (10 orgánicos + 10 pensados para Meta Ads)",
      "Automatización de mensajería — WhatsApp e Instagram conectados, con enrutamiento a la sede más cercana",
      "Meta Ads — puesta en marcha — Organización del administrador de anuncios, pixel y catálogo conectado",
    ],
    price: "$9.999.999 COP",
    time: "Tiempo de instalación: 6 a 8 semanas",
    wa: "Hola Partnersflux. Soy eWe Store. Quiero el plan PARTNERS | ECOSISTEMA COMPLETO ($9.999.999 COP).",
  },
  {
    id: "crecimiento",
    accent: "#F0C14A",
    featured: false,
    badge: "🟡 PARTNERS | CRECIMIENTO",
    tag: "Tienda online + contenido + Instagram automatizado",
    items: [
      "Tienda online — Catálogo con checkout + Link tree como punto único de entrada",
      "Laboratorio y estrategia de contenido — 20 contenidos al mes (12 orgánicos + 8 para Meta Ads)",
      "Automatización de Instagram redirigiendo directo a la tienda online",
    ],
    price: "$7.497.000 COP",
    time: "Tiempo de instalación: 6 a 8 semanas",
    wa: "Hola Partnersflux. Soy eWe Store. Quiero el plan PARTNERS | CRECIMIENTO ($7.497.000 COP).",
  },
  {
    id: "basico",
    accent: "#3ECF8E",
    featured: false,
    badge: "🟢 PARTNERS | BÁSICO",
    tag: "Contenido y autoridad de marca",
    items: [
      "Laboratorio de contenido — 20 contenidos al mes (UGC + IGC + contenido creado por el equipo)",
      "Estrategia de contenido",
      "Reclutamiento de creadores UGC | IGC",
      "Estrategia de creativos pensados para Meta Ads",
    ],
    bonus: "Bonus: Capacitación de ventas + manejo del sistema de automatización para el equipo de ventas",
    price: "$2.997.000 COP",
    time: null,
    wa: "Hola Partnersflux. Soy eWe Store. Quiero el plan PARTNERS | BÁSICO ($2.997.000 COP).",
  },
];

const MONTHLY = [
  {
    id: "gestion",
    accent: "#B8A9FF",
    badge: "🟣 PARTNERS | GESTIÓN MENSUAL",
    items: [
      "Laboratorio de contenido — 20 contenidos al mes",
      "Estrategia de contenido",
      "Reclutamiento de creadores UGC | IGC",
      "Estrategia de creativos pensados para Meta Ads",
    ],
    price: "$2.997.000 COP/mes",
    note: null,
    wa: "Hola Partnersflux. Soy eWe Store. Quiero PARTNERS | GESTIÓN MENSUAL ($2.997.000 COP/mes).",
  },
  {
    id: "pauta",
    accent: "#FF8A4C",
    badge: "🟠 PARTNERS | GESTIÓN DE PAUTA",
    lead: "Todo lo de Gestión Mensual, más:",
    items: [
      "Gestión y optimización de campañas en Meta Ads",
      "Administración del Business Manager y reportería de resultados",
    ],
    price: "$4.500.000 COP/mes",
    note: "(presupuesto de pauta publicitaria en Meta va aparte de este fee de gestión)",
    wa: "Hola Partnersflux. Soy eWe Store. Quiero PARTNERS | GESTIÓN DE PAUTA ($4.500.000 COP/mes).",
  },
];

const CTA_ECO = wa(PLANS[0].wa);
const CTA_TALK = wa(
  "Hola Partnersflux. Soy eWe Store (@ewe.movilidadelectrica). Revisé la propuesta y quiero conversar."
);

export default function EweStorePage() {
  return (
    <main className="ewe-page">
      <div className="ewe-decor" aria-hidden>
        <div className="ewe-chart-bg">
          <svg className="ewe-chart-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="eweChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7BBBFF" stopOpacity="0.55" />
                <stop offset="55%" stopColor="#B8A9FF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#7BBBFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="eweChartLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7BBBFF" />
                <stop offset="100%" stopColor="#B8A9FF" />
              </linearGradient>
              <filter id="eweChartGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Barras suaves */}
            <g className="ewe-chart-bars">
              <rect x="90" y="480" width="70" height="120" rx="12" />
              <rect x="250" y="390" width="70" height="210" rx="12" />
              <rect x="410" y="430" width="70" height="170" rx="12" />
              <rect x="570" y="300" width="70" height="300" rx="12" />
              <rect x="730" y="220" width="70" height="380" rx="12" />
              <rect x="890" y="140" width="70" height="460" rx="12" />
              <rect x="1040" y="90" width="70" height="510" rx="12" />
            </g>

            {/* Área bajo la curva */}
            <path
              className="ewe-chart-area"
              d="M90 500 L250 400 L410 450 L570 310 L730 230 L890 150 L1110 100 L1110 620 L90 620 Z"
              fill="url(#eweChartFill)"
            />

            {/* Línea de ganancias */}
            <path
              className="ewe-chart-line"
              d="M90 500 L250 400 L410 450 L570 310 L730 230 L890 150 L1110 100"
              fill="none"
              stroke="url(#eweChartLine)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#eweChartGlow)"
            />

            {/* Nodos */}
            <g className="ewe-chart-dots" filter="url(#eweChartGlow)">
              <circle cx="90" cy="500" r="10" />
              <circle cx="250" cy="400" r="10" />
              <circle cx="410" cy="450" r="10" />
              <circle cx="570" cy="310" r="10" />
              <circle cx="730" cy="230" r="10" />
              <circle cx="890" cy="150" r="10" />
              <circle cx="1110" cy="100" r="12" />
            </g>
          </svg>
        </div>
      </div>

      <div className="ewe-content">
        <nav className="ewe-nav">
          <div className="ewe-shell ewe-nav-inner">
            <a href="#top" className="ewe-nav-brand">
              <Image
                src="/imagenes/ewestore/logo/ewe-logo-clear.png"
                alt="eWe store"
                width={120}
                height={90}
                className="ewe-nav-logo"
                priority
              />
            </a>
            <div className="ewe-nav-links">
              {NAV.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="ewe-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <a href={CTA_ECO} target="_blank" rel="noopener noreferrer" className="ewe-nav-cta">
              Hablar
            </a>
          </div>
        </nav>

        <section id="top" className="ewe-hero">
          <div className="ewe-shell ewe-hero-copy">
            <div className="ewe-brand-pair">
              <Image
                src="/imagenes/opticallery/fluxa-partners-logo.png"
                alt="Partnersflux"
                width={220}
                height={80}
                className="ewe-brand-pair__partners"
                priority
              />
              <span className="ewe-brand-pair__x" aria-hidden>
                ×
              </span>
              <Image
                src="/imagenes/ewestore/logo/ewe-logo-clear.png"
                alt="eWe store"
                width={140}
                height={90}
                className="ewe-brand-pair__ewe"
                priority
              />
            </div>
            <h1 className="ewe-display ewe-hero-title">El sistema que convierte tu alcance en ventas reales</h1>
            <p className="ewe-hero-lead">
              Tienes el contenido. Tienes el alcance. Falta el sistema que lo convierta en clientes.
            </p>
            <div className="ewe-cta-row">
              <a href={CTA_ECO} target="_blank" rel="noopener noreferrer" className="ewe-btn ewe-btn-primary">
                Quiero Ecosistema Completo →
              </a>
              <a href="#propuesta" className="ewe-btn ewe-btn-ghost">
                Ver los 3 sistemas
              </a>
            </div>
          </div>
        </section>

        <section id="analisis" className="ewe-section">
          <div className="ewe-shell ewe-shell--narrow">
            <h2 className="ewe-display ewe-section-title">ANÁLISIS DE MARCA</h2>
            <div className="ewe-glass">
              <p className="ewe-copy">
                eWe Store ya tiene lo que la mayoría de marcas de movilidad eléctrica en Colombia no tiene:
              </p>
              <ul className="ewe-bullets">
                <li>14.2 mil seguidores con contenido audiovisual de alta calidad</li>
                <li>Marca verificada, con presencia física en múltiples ciudades del país</li>
                <li>
                  Testimoniales reales, contenido educativo (mantenimiento, autonomía) y una comunidad que ya confía en
                  la marca
                </li>
              </ul>
              <p className="ewe-copy ewe-copy--spaced">
                Pero todo ese alcance depende hoy de que alguien decida escribir por WhatsApp o Instagram sin ningún
                sistema que lo guíe, lo capture o lo convierta. No hay landing propia, no hay tienda online, no hay
                automatización que dirija ese interés hacia la sede más cercana o hacia una compra concreta.
              </p>
              <p className="ewe-copy">
                El contenido está generando atención. Pero la atención sin sistema no se convierte en venta — se diluye.
              </p>
            </div>
          </div>
        </section>

        <section id="antes-despues" className="ewe-section">
          <div className="ewe-shell ewe-shell--narrow">
            <h2 className="ewe-display ewe-section-title">ANTES / DESPUÉS</h2>
            <div className="ewe-compare">
              {COMPARE.map((row) => (
                <article key={row.before.slice(0, 40)} className="ewe-compare-row">
                  <div className="ewe-compare-col ewe-compare-col--before">
                    <h3>ANTES</h3>
                    <p>{row.before}</p>
                  </div>
                  <div className="ewe-compare-col ewe-compare-col--after">
                    <h3>DESPUÉS</h3>
                    <p>{row.after}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyeccion" className="ewe-section">
          <div className="ewe-shell ewe-shell--narrow">
            <h2 className="ewe-display ewe-section-title">
              PROYECCIÓN ESTADÍSTICA — POR QUÉ ESTO IMPORTA EN 2026
            </h2>
            <div className="ewe-glass">
              <p className="ewe-copy">
                Mientras tú lees esto, alguien en Colombia está comprando una moto eléctrica por internet — con
                financiación en línea, sin pisar una tienda, sin esperar a que alguien conteste un chat.
              </p>
              <p className="ewe-copy">
                Ese comportamiento ya es real en el mercado de movilidad eléctrica en Colombia. La gente ya está lista
                para comprar así.
              </p>
              <p className="ewe-copy">
                La pregunta para eWe no es si ese cliente existe. Es si hoy, con el proceso actual, ese cliente puede
                completar su compra antes de perder el interés.
              </p>
            </div>
          </div>
        </section>

        <EweBikeRunway />

        <section id="propuesta" className="ewe-section">
          <div className="ewe-shell">
            <h2 className="ewe-display ewe-section-title ewe-section-title--wide">
              NUESTRA PROPUESTA — 3 SISTEMAS DE ESCALA
            </h2>
            <div className="ewe-plans">
              {PLANS.map((plan) => (
                <article
                  key={plan.id}
                  className={`ewe-plan ${plan.featured ? "ewe-plan--featured" : ""}`}
                  style={{ "--plan-accent": plan.accent }}
                >
                  <p className="ewe-plan-badge">{plan.badge}</p>
                  <p className="ewe-plan-tag">{plan.tag}</p>
                  <ul className="ewe-plan-list">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {plan.bonus ? <p className="ewe-note">{plan.bonus}</p> : null}
                  <p className="ewe-price">{plan.price}</p>
                  {plan.time ? <p className="ewe-time">{plan.time}</p> : null}
                  <a
                    href={wa(plan.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ewe-btn ewe-btn-primary"
                    style={{ marginTop: "auto" }}
                  >
                    Elegir este plan →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mensual" className="ewe-section">
          <div className="ewe-shell">
            <h2 className="ewe-display ewe-section-title ewe-section-title--wide">
              CONTINUIDAD MENSUAL (gestión posterior a la instalación)
            </h2>
            <div className="ewe-plans ewe-plans--monthly">
              {MONTHLY.map((plan) => (
                <article key={plan.id} className="ewe-plan" style={{ "--plan-accent": plan.accent }}>
                  <p className="ewe-plan-badge">{plan.badge}</p>
                  {plan.lead ? <p className="ewe-plan-tag">{plan.lead}</p> : null}
                  <ul className="ewe-plan-list">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="ewe-price">{plan.price}</p>
                  {plan.note ? <p className="ewe-note">{plan.note}</p> : null}
                  <a
                    href={wa(plan.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ewe-btn ewe-btn-primary"
                    style={{ marginTop: "auto" }}
                  >
                    Quiero este mensual →
                  </a>
                </article>
              ))}
            </div>

            <div className="ewe-close">
              <h2>PARTNERSFLUX × EWE STORE</h2>
              <p>El sistema que convierte tu alcance en ventas reales</p>
              <div className="ewe-cta-row">
                <a href={CTA_ECO} target="_blank" rel="noopener noreferrer" className="ewe-btn ewe-btn-primary">
                  Confirmar Ecosistema Completo →
                </a>
                <a href={CTA_TALK} target="_blank" rel="noopener noreferrer" className="ewe-btn ewe-btn-ghost">
                  Resolver dudas
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="ewe-finale" aria-label="Sede eWe">
          <div className="ewe-shell ewe-finale-inner">
            <Image
              src="/imagenes/ewestore/locales/sede-original.png"
              alt="Sede eWe Movilidad Eléctrica"
              width={1200}
              height={1400}
              className="ewe-finale-img"
              unoptimized
            />
          </div>
        </section>
      </div>
    </main>
  );
}
