"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WA_BASE = "https://wa.me/573105813007?text=";
const PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";

function wa(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV = [
  { id: "punto-partida", label: "Dónde estás" },
  { id: "transformacion", label: "Transformación" },
  { id: "planes", label: "Planes" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "cierre", label: "Cierre" },
];

const FACTS = [
  ["Instagram", "@alejatoledo — 2,282 seguidores, 142 publicaciones, 1,043 seguidos"],
  ["Categoría actual", "Coach en Neurociencia (genérica, sin ángulo propio todavía)"],
  ["Ubicación", "Colombia / Italia — contenido activo en ambos países"],
  ["Sitio web", "No detectado"],
  ["Link en bio", "No detectado"],
  ["Mensaje / posicionamiento", "Por construir"],
  ["Producto", "No definido"],
];

const ASSETS = [
  {
    bold: "Audiencia real de 2,282 seguidores",
    rest: ", con cuentas activas del ecosistema de coaching y bienestar en Bogotá — el contenido ya circula en el nicho correcto.",
  },
  {
    bold: 'Categoría con demanda pero sin ocupar:',
    rest: ' "coach en neurociencia" es un espacio que casi nadie está nombrando con un ángulo propio en español — terreno libre para construir posicionamiento.',
  },
  {
    bold: "Componente de vida en Italia",
    rest: " como diferenciador de marca personal frente a coaches de negocio genéricos.",
  },
  {
    bold: "Formato de contenido variado ya en uso",
    rest: " — carrusel de autoridad, reels de vida, video — hay soltura de creación, falta dirección estratégica.",
  },
];

const BOTTLENECKS = [
  {
    title: "Sin mensaje propio",
    text: '"Coach en Neurociencia" describe una categoría, no una promesa. No hay un ángulo que la diferencie de cualquier otro coach de mentalidad.',
  },
  {
    title: "Cero punto de conversión",
    text: "No hay link en bio, landing ni checkout. Cada persona que se identifica con el contenido no tiene ningún lugar a dónde ir.",
  },
  {
    title: "Sin oferta empaquetada",
    text: "No existe hoy ningún producto, programa o servicio con nombre, precio o estructura que alguien pueda comprar.",
  },
  {
    title: "Destacados sin función comercial",
    text: 'Ninguno de los destacados actuales dirige a una oferta activa ni a un "trabaja conmigo".',
  },
  {
    title: "Mezcla de idioma sin intención",
    text: "La bio está en inglés mientras el contenido y la audiencia son mayoritariamente hispanohablantes.",
  },
  {
    title: "Sin automatización",
    text: "No hay evidencia de WhatsApp o Instagram automatizado; cualquier interés depende de respuesta manual.",
  },
];

const TRANSFORM = [
  ['Categoría genérica ("coach en neurociencia")', "Mensaje propio y diferenciado"],
  ["Sin oferta", "Producto empaquetado bajo Método PDM Neurocoaching"],
  ["Sin link ni landing", "Landing con checkout conectada a la bio"],
  ["Destacados sin función comercial", "Destacado dedicado a la oferta activa"],
  ["Cero automatización", "WhatsApp / Instagram automatizado"],
  ["Cada venta depende de un DM manual", "Sistema de pagos recurrentes con cupos (solo PRO)"],
];

const FASES = [
  { tag: "Ambos planes", title: "Fase 1 · Diseño de oferta", text: "Estructura del producto, nombre, precio y promesa." },
  { tag: "Ambos planes", title: "Fase 2 · Arquitectura digital", text: "Landing, checkout, VSL, automatización básica." },
  { tag: "Solo PRO", title: "Fase 3 · Recurrencia", text: "Membresía o programa con cobro automático y cupos." },
  { tag: "Desde mes 3", title: "Fase 4 · Escala", text: "Meta Ads + alto ticket." },
];

const PACKAGES = {
  digital: {
    key: "digital",
    label: "Paquete 1",
    name: "PDM NEUROCOACHING DIGITAL",
    price: "$3.100.000 COP",
    priceShort: "$3.100.000",
    sub: "Diseño de oferta + landing + contenido + capacitación",
    pay: "Fase 1: $1.550.000 COP al firmar · Fase 2: $1.550.000 COP a los 15 días",
    phases: "Fase 1 (al firmar): $1.550.000 COP · Fase 2 (a los 15 días): $1.550.000 COP",
    wa: "Hola Fluxa Method. Revisé la propuesta de Alejandra Toledo y me interesa PDM NEUROCOACHING DIGITAL ($3.100.000 COP). Quiero coordinar el siguiente paso.",
    groups: [
      {
        title: "Diseño de oferta",
        items: ["Estructuración del producto", "Definición de precio y promesa"],
      },
      {
        title: "Arquitectura digital",
        items: ["Landing de marca con checkout simple", "VSL corto", "Automatización WhatsApp/Instagram básica"],
      },
      {
        title: "Contenido",
        items: [
          "Laboratorio Notion personalizado",
          "Estrategia de contenido 60 días",
          "15 guiones de reels orgánicos",
          "10 guiones para ads",
        ],
      },
      {
        title: "Capacitación",
        items: ["3 sesiones Zoom", "Guion de cierre y seguimiento comercial"],
      },
    ],
  },
  pro: {
    key: "pro",
    label: "Paquete 2",
    name: "PDM NEUROCOACHING PRO",
    price: "$4.800.000 COP",
    priceShort: "$4.800.000",
    featured: true,
    note: "Todo lo del paquete Digital, más:",
    sub: "+ Recurrencia + Meta Ads",
    pay: "Fase 1: $2.400.000 COP al firmar · Fase 2: $2.400.000 COP a los 15 días",
    phases: "Fase 1 (al firmar): $2.400.000 COP · Fase 2 (a los 15 días): $2.400.000 COP",
    wa: "Hola Fluxa Method. Revisé la propuesta de Alejandra Toledo y me interesa PDM NEUROCOACHING PRO ($4.800.000 COP). Quiero coordinar el siguiente paso.",
    groups: [
      {
        title: "Arquitectura ampliada",
        items: [
          "Landing ampliada para programa completo + 2 VSLs",
          "Pagos recurrentes: cobro automático, cupos, recordatorios",
          "Automatización completa con lógica de cupos",
          "Secuencia de bienvenida",
        ],
      },
      {
        title: "Contenido ampliado",
        items: ["Estrategia 90 días", "25 guiones de reels + 15 guiones ads + 5 guiones UGC"],
      },
      {
        title: "Meta Ads",
        items: [
          "Estrategia de campañas, pixel y analítica",
          "5 creativos listos para lanzar",
          "Gestión y optimización primer mes",
        ],
      },
    ],
  },
};

const CMP = [
  ["Diseño de oferta", "Sí", "Sí"],
  ["Landing con checkout", "Sí", "Sí, ampliada"],
  ["VSL", "1 corto", "2"],
  ["Pagos recurrentes", "—", "Sí"],
  ["Automatización", "Básica", "Completa + cupos"],
  ["Secuencia de bienvenida", "—", "Sí"],
  ["Estrategia de contenido", "60 días", "90 días"],
  ["Guiones reels / ads / UGC", "15 / 10 / 0", "25 / 15 / 5"],
  ["Meta Ads", "—", "5 creativos + gestión 1 mes"],
];

const TIMELINE = [
  { when: "1–2", title: "Diseño de oferta + landing + checkout", text: "Fase 1–2, ambos planes." },
  { when: "3–4", title: "VSL, Notion, estrategia y guiones", text: "Fase 2, ambos planes." },
  {
    when: "5–6",
    title: "Recurrencia + automatización completa",
    pro: true,
    text: "Fase 3.",
  },
  { when: "M2", title: "Meta Ads + optimización", pro: true, text: "Fase 4, con datos reales." },
];

const MONTHLY = [
  {
    name: "Esencial",
    price: "$130.000",
    items: [
      "Revisión técnica mensual de landing y checkout",
      "Corrección de errores menores",
      "Soporte WhatsApp limitado (2 consultas/mes)",
    ],
  },
  {
    name: "Mantenimiento",
    price: "$320.000",
    items: [
      "Revisión y ajustes técnicos landing + checkout",
      "Actualización de automatizaciones WhatsApp",
      "Ajuste del laboratorio de contenido",
      "Soporte prioritario WhatsApp",
    ],
  },
  {
    name: "Gestión completa",
    price: "$820.000",
    items: [
      "Todo lo del plan Mantenimiento",
      "Gestión activa de campañas Meta Ads",
      "2 nuevos creativos mensuales",
      "Reporte mensual de métricas y presupuesto",
    ],
  },
];

function DecorLayer() {
  const hubs = [
    { cx: 120, cy: 110, r: 6, accent: false },
    { cx: 220, cy: 200, r: 11, accent: true },
    { cx: 360, cy: 90, r: 8, accent: false },
    { cx: 480, cy: 170, r: 13, accent: true },
    { cx: 620, cy: 80, r: 7, accent: false },
    { cx: 760, cy: 150, r: 12, accent: true },
    { cx: 920, cy: 100, r: 9, accent: false },
    { cx: 1080, cy: 180, r: 10, accent: true },
    { cx: 160, cy: 340, r: 9, accent: false },
    { cx: 310, cy: 300, r: 14, accent: true },
    { cx: 470, cy: 360, r: 8, accent: false },
    { cx: 610, cy: 280, r: 15, accent: true },
    { cx: 780, cy: 330, r: 10, accent: false },
    { cx: 940, cy: 290, r: 12, accent: true },
    { cx: 1100, cy: 360, r: 8, accent: false },
    { cx: 100, cy: 520, r: 7, accent: false },
    { cx: 250, cy: 480, r: 11, accent: true },
    { cx: 420, cy: 540, r: 13, accent: true },
    { cx: 580, cy: 470, r: 9, accent: false },
    { cx: 740, cy: 530, r: 12, accent: true },
    { cx: 900, cy: 480, r: 10, accent: false },
    { cx: 1050, cy: 540, r: 11, accent: true },
    { cx: 180, cy: 680, r: 8, accent: false },
    { cx: 380, cy: 660, r: 10, accent: true },
    { cx: 560, cy: 700, r: 9, accent: false },
    { cx: 740, cy: 670, r: 12, accent: true },
    { cx: 960, cy: 700, r: 8, accent: false },
  ];

  const links = [
    "M120 110 C160 140, 190 170, 220 200",
    "M220 200 C280 120, 320 100, 360 90",
    "M360 90 C410 120, 450 150, 480 170",
    "M480 170 C540 100, 580 85, 620 80",
    "M620 80 C680 110, 720 130, 760 150",
    "M760 150 C820 110, 870 95, 920 100",
    "M920 100 C980 130, 1030 155, 1080 180",
    "M220 200 C190 260, 170 300, 160 340",
    "M360 90 C340 180, 320 250, 310 300",
    "M480 170 C490 240, 480 300, 470 360",
    "M620 80 C620 160, 615 220, 610 280",
    "M760 150 C770 220, 775 280, 780 330",
    "M920 100 C930 180, 935 240, 940 290",
    "M1080 180 C1090 250, 1095 310, 1100 360",
    "M160 340 C220 310, 270 300, 310 300",
    "M310 300 C380 320, 430 345, 470 360",
    "M470 360 C530 310, 570 290, 610 280",
    "M610 280 C680 300, 730 320, 780 330",
    "M780 330 C840 300, 890 290, 940 290",
    "M940 290 C1000 320, 1050 345, 1100 360",
    "M160 340 C130 410, 110 470, 100 520",
    "M310 300 C280 380, 260 440, 250 480",
    "M470 360 C450 430, 430 490, 420 540",
    "M610 280 C600 360, 590 420, 580 470",
    "M780 330 C760 410, 750 480, 740 530",
    "M940 290 C920 370, 910 430, 900 480",
    "M1100 360 C1080 430, 1065 490, 1050 540",
    "M100 520 C160 490, 210 480, 250 480",
    "M250 480 C320 500, 380 525, 420 540",
    "M420 540 C490 490, 540 475, 580 470",
    "M580 470 C640 500, 690 520, 740 530",
    "M740 530 C800 490, 850 480, 900 480",
    "M900 480 C960 510, 1010 530, 1050 540",
    "M250 480 C220 560, 195 620, 180 680",
    "M420 540 C400 590, 390 630, 380 660",
    "M580 470 C570 560, 565 640, 560 700",
    "M740 530 C740 590, 740 640, 740 670",
    "M900 480 C920 570, 940 640, 960 700",
    "M180 680 C260 660, 320 655, 380 660",
    "M380 660 C450 680, 510 695, 560 700",
    "M560 700 C630 680, 690 670, 740 670",
    "M740 670 C820 690, 890 700, 960 700",
    "M220 200 C300 260, 380 290, 470 360",
    "M480 170 C540 230, 575 255, 610 280",
    "M760 150 C720 220, 670 255, 610 280",
    "M310 300 C420 380, 520 450, 640 530",
    "M610 280 C700 360, 800 430, 940 480",
    "M420 540 C520 580, 620 620, 740 670",
    "M250 480 C380 520, 520 560, 680 600",
    "M1080 180 C980 250, 860 300, 740 360",
  ];

  const sparks = links
    .filter((_, i) => i % 2 === 0)
    .slice(0, 18)
    .map((path, i) => ({
      path,
      dur: `${3.6 + (i % 5) * 0.55}s`,
      delay: `${(i % 7) * 0.28}s`,
      hot: i % 3 === 0,
    }));

  return (
    <div className="ale-decor" aria-hidden>
      <svg className="ale-neural" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="aleNeuralStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7BBBFF" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#9BB6FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B8A9FF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="aleNeuralGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7BBBFF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#B8A9FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7BBBFF" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="aleHubCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="35%" stopColor="#A8D0FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7BBBFF" stopOpacity="0.05" />
          </radialGradient>
          <radialGradient id="aleHubCoreHot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="30%" stopColor="#D2C7FF" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#B8A9FF" stopOpacity="0.08" />
          </radialGradient>
          <filter id="aleNodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="alePathGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="aleSparkGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="ale-neural-dust" fill="#7BBBFF">
          {[
            [70, 80],
            [150, 240],
            [280, 50],
            [400, 210],
            [530, 40],
            [670, 200],
            [810, 55],
            [970, 230],
            [1140, 90],
            [60, 400],
            [200, 600],
            [340, 720],
            [500, 620],
            [660, 750],
            [830, 610],
            [1000, 700],
            [1160, 480],
            [90, 720],
            [450, 100],
            [720, 420],
            [880, 180],
            [1040, 420],
          ].map(([cx, cy], i) => (
            <circle key={`dust-${i}`} cx={cx} cy={cy} r={i % 3 === 0 ? 1.8 : 1.2} />
          ))}
        </g>

        <g className="ale-neural-glow-links" fill="none" stroke="url(#aleNeuralGlow)" filter="url(#alePathGlow)">
          {links.map((d, i) => (
            <path key={`glow-${i}`} d={d} strokeWidth={i % 4 === 0 ? 6 : 4} opacity="0.45" />
          ))}
        </g>

        <g className="ale-neural-links" fill="none" stroke="url(#aleNeuralStroke)">
          {links.map((d, i) => (
            <path
              key={`link-${i}`}
              d={d}
              className={`ale-neural-link ale-neural-link--${(i % 4) + 1}`}
              strokeWidth={i % 5 === 0 ? 2.2 : 1.35}
            />
          ))}
        </g>

        <g className="ale-neural-sparks" filter="url(#aleSparkGlow)">
          {sparks.map((spark, i) => (
            <g key={`spark-${i}`}>
              <circle r={spark.hot ? 3.6 : 2.5} fill={spark.hot ? "#B8A9FF" : "#7BBBFF"} opacity="0.95">
                <animateMotion dur={spark.dur} begin={spark.delay} repeatCount="indefinite" path={spark.path} />
                <animate
                  attributeName="opacity"
                  values="0.15;1;0.15"
                  dur={spark.dur}
                  begin={spark.delay}
                  repeatCount="indefinite"
                />
              </circle>
              <circle r={spark.hot ? 1.4 : 1} fill="#FFFFFF" opacity="0.9">
                <animateMotion dur={spark.dur} begin={spark.delay} repeatCount="indefinite" path={spark.path} />
              </circle>
            </g>
          ))}
        </g>

        <g className="ale-neural-nodes" filter="url(#aleNodeGlow)">
          {hubs.map((hub, i) => (
            <g
              key={`hub-${i}`}
              className={`ale-neural-hub ${hub.accent ? "ale-neural-hub--accent" : ""}`}
              style={{ ["--ale-hub-delay"]: `${(i % 8) * 0.28}s` }}
            >
              <circle
                className="ale-neural-halo"
                cx={hub.cx}
                cy={hub.cy}
                r={hub.r * 2.8}
                fill={hub.accent ? "rgba(184,169,255,0.12)" : "rgba(123,187,255,0.1)"}
              />
              <circle
                className="ale-neural-ring"
                cx={hub.cx}
                cy={hub.cy}
                r={hub.r * 2.05}
                fill="none"
                stroke={hub.accent ? "#B8A9FF" : "#7BBBFF"}
                strokeWidth="1.15"
                opacity="0.4"
              />
              <circle
                className="ale-neural-ring ale-neural-ring--mid"
                cx={hub.cx}
                cy={hub.cy}
                r={hub.r * 1.4}
                fill="none"
                stroke={hub.accent ? "#7BBBFF" : "#B8A9FF"}
                strokeWidth="1.35"
                opacity="0.6"
              />
              <circle
                cx={hub.cx}
                cy={hub.cy}
                r={hub.r}
                fill={hub.accent ? "url(#aleHubCoreHot)" : "url(#aleHubCore)"}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function AlejandraToledoPage() {
  const [selected, setSelected] = useState("digital");
  const pkg = PACKAGES[selected];

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.backgroundColor;
    const prevBody = body.style.backgroundColor;
    html.style.backgroundColor = "#f2fdff";
    body.style.backgroundColor = "#f2fdff";
    return () => {
      html.style.backgroundColor = prevHtml;
      body.style.backgroundColor = prevBody;
    };
  }, []);

  return (
    <div className="ale-page">
      <DecorLayer />

      <div className="ale-content">
        <nav className="ale-nav">
          <div className="ale-shell ale-nav-inner">
            <a href="#top" className="ale-nav-brand">
              <span className="ale-brand-name" style={{ fontSize: "1.15rem" }}>
                Alejandra Toledo
              </span>
            </a>
            <div className="ale-nav-links">
              {NAV.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="ale-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <a href={wa(pkg.wa)} target="_blank" rel="noopener noreferrer" className="ale-nav-cta">
              Hablar
            </a>
          </div>
        </nav>

        <section id="top" className="ale-hero">
          <div className="ale-shell ale-hero-copy">
            <div className="ale-brand-pair" style={{ marginBottom: "1.25rem" }}>
              <Image
                src={PARTNERS_LOGO}
                alt="Partnersflux"
                width={220}
                height={80}
                className="ale-brand-pair__partners"
                priority
              />
              <span className="ale-brand-pair__x" aria-hidden>
                ×
              </span>
              <span className="ale-brand-name">Alejandra Toledo</span>
            </div>

            <div className="ale-hero-grid">
              <div>
                <p className="ale-eyebrow">Método PDM Neurocoaching</p>
                <h1 className="ale-display ale-hero-title">
                  Método PDM construye una presencia digital monetizable
                </h1>
                <p className="ale-hero-lead ale-hero-box">
                  2,282 personas ya te siguen como coach en neurociencia — pero hoy esa categoría es genérica: no hay un
                  ángulo propio, no hay oferta, no hay forma de convertir esa atención en ingreso. El trabajo empieza
                  por construir el mensaje que te diferencie, antes que cualquier landing o automatización.
                </p>
                <div className="ale-cta-row">
                  <a href="#planes" className="ale-btn ale-btn-primary">
                    Ver planes
                  </a>
                </div>
              </div>

              <div className="ale-hero-side">
                <div>
                  <b>@alejatoledo</b>
                  <br />
                  2,282 seguidores · 142 publicaciones
                </div>
                <div>Categoría actual: Coach en Neurociencia</div>
                <div>Sitio web: ninguno detectado</div>
                <div>Propuesta por Fluxa Method</div>
              </div>
            </div>

            <div className="ale-hero-meta">
              <div>
                <strong>Desde $3.100.000 COP</strong>
                <span>Inversión inicial</span>
              </div>
              <div>
                <strong>4 a 6 semanas</strong>
                <span>Tiempo de entrega</span>
              </div>
              <div>
                <strong>Mensaje + oferta + landing</strong>
                <span>Alcance del proyecto</span>
              </div>
            </div>
          </div>
        </section>

        <section id="punto-partida" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">01 — Punto de partida</p>
            <h2 className="ale-display ale-section-title ale-section-title--wide">
              Tienes audiencia. No tienes mensaje ni oferta.
            </h2>
            <p className="ale-lede">
              La mayoría de coaches arranca al revés: construyen un producto y después buscan un mensaje que lo venda.
              Aquí el orden real es distinto — antes de landing o automatización, hay que definir qué te hace diferente
              y qué vas a vender.
            </p>

            <div className="ale-glass">
              <p className="ale-block-title">Ficha técnica</p>
              <table className="ale-fact">
                <tbody>
                  {FACTS.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="ale-block-title">Activos identificados</p>
              <ul className="ale-asset-list">
                {ASSETS.map((item) => (
                  <li key={item.bold}>
                    <b>{item.bold}</b>
                    {item.rest}
                  </li>
                ))}
              </ul>

              <p className="ale-block-title">Cuellos de botella críticos</p>
              {BOTTLENECKS.map((item) => (
                <div key={item.title} className="ale-bottleneck">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="transformacion" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">02 — Transformación</p>
            <h2 className="ale-display ale-section-title ale-section-title--wide">
              De categoría genérica a sistema que cobra
            </h2>
            <div className="ale-glass">
              <div className="ale-compare">
                {TRANSFORM.map(([before, after]) => (
                  <article key={before} className="ale-compare-row">
                    <div className="ale-compare-col ale-compare-col--before">
                      <h3>Antes</h3>
                      <p>{before}</p>
                    </div>
                    <div className="ale-compare-col ale-compare-col--after">
                      <h3>Después</h3>
                      <p>{after}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">03 — Inversión</p>
            <h2 className="ale-display ale-section-title">Elige tu ruta</h2>
            <p className="ale-lede">
              Arquitectura central en ambos planes: diseño de oferta, landing con checkout, automatización
              WhatsApp/Instagram, laboratorio de contenido, capacitación.
            </p>

            <p className="ale-block-title">Cómo encaja todo</p>
            <div className="ale-fase-row">
              {FASES.map((fase) => (
                <div key={fase.title} className="ale-fase">
                  <span className="tag">{fase.tag}</span>
                  <h4>{fase.title}</h4>
                  <p>{fase.text}</p>
                </div>
              ))}
            </div>

            <div className="ale-pkg-grid">
              {Object.values(PACKAGES).map((plan) => (
                <article
                  key={plan.key}
                  id={`pkg-${plan.key}`}
                  className={`ale-pkg ${plan.featured ? "ale-pkg--pro" : ""}`}
                >
                  {plan.featured ? <div className="ale-pkg-flag">Recomendado</div> : null}
                  <div className="ale-pkg-label">{plan.label}</div>
                  <h3>{plan.name}</h3>
                  <div className="ale-pkg-price">{plan.price}</div>
                  {plan.note ? <p className="ale-pkg-note">{plan.note}</p> : null}
                  {plan.groups.map((group) => (
                    <div key={group.title} className="ale-pkg-group">
                      <h5>{group.title}</h5>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="ale-pkg-pay">
                    {plan.key === "digital" ? (
                      <>
                        Fase 1: <b>$1.550.000 COP</b> al firmar · Fase 2: <b>$1.550.000 COP</b> a los 15 días
                      </>
                    ) : (
                      <>
                        Fase 1: <b>$2.400.000 COP</b> al firmar · Fase 2: <b>$2.400.000 COP</b> a los 15 días
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="ale-cmp-wrap">
              <div className="ale-cmp-head" aria-hidden>
                <span>Característica</span>
                <span>Digital $3.100.000</span>
                <span>Pro $4.800.000</span>
              </div>
              <div className="ale-cmp-list">
                {CMP.map(([feature, d, p]) => (
                  <div key={feature} className="ale-cmp-row">
                    <p className="ale-cmp-feature">{feature}</p>
                    <div className="ale-cmp-vals">
                      <div className="ale-cmp-val">
                        <span className="ale-cmp-val-label">Digital</span>
                        <strong>{d}</strong>
                      </div>
                      <div className="ale-cmp-val ale-cmp-val--pro">
                        <span className="ale-cmp-val-label">Pro</span>
                        <strong>{p}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ejecucion" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">04 — Ejecución</p>
            <h2 className="ale-display ale-section-title">Orden de construcción</h2>
            <div className="ale-timeline ale-glass">
              {TIMELINE.map((step) => (
                <div key={step.when} className="ale-tstep">
                  <div className="when">{step.when}</div>
                  <div>
                    <h4>
                      {step.title}
                      {step.pro ? (
                        <>
                          {" "}
                          <span className="ale-pro-tag">SOLO PRO</span>
                        </>
                      ) : null}
                    </h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="continuidad" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">05 — Continuidad</p>
            <h2 className="ale-display ale-section-title ale-section-title--wide">
              Mantenimiento y crecimiento mes a mes
            </h2>
            <p className="ale-lede">Disponible desde el mes 3 (Fase 4 · Escala).</p>
            <div className="ale-cont-grid">
              {MONTHLY.map((plan) => (
                <div key={plan.name} className="ale-cont">
                  <h4>{plan.name}</h4>
                  <div className="p">
                    {plan.price} <span>COP/mes</span>
                  </div>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resumen" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">06 — Resumen ejecutivo</p>
            <h2 className="ale-display ale-section-title ale-section-title--wide">
              Dos rutas posibles según hacia dónde quieres llegar.
            </h2>
            <div className="ale-summary-cols ale-glass">
              <div className="ale-summary-col">
                <h4>HOY</h4>
                <ul>
                  <li>Categoría genérica, sin mensaje propio</li>
                  <li>Sin oferta ni producto definido</li>
                  <li>Cero punto de conversión en el perfil</li>
                </ul>
              </div>
              <div className="ale-summary-col">
                <h4>EN 60 DÍAS</h4>
                <ul>
                  <li>Mensaje propio bajo Método PDM Neurocoaching</li>
                  <li>Producto con nombre, precio y landing con checkout</li>
                  <li>Automatización activa y, en PRO, membresía con cobro automático</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cierre" className="ale-section">
          <div className="ale-shell ale-shell--content">
            <p className="ale-eyebrow">Siguiente paso</p>
            <h2 className="ale-display ale-section-title ale-section-title--wide">
              ¿Lista para construir el sistema?
            </h2>
            <p className="ale-lede">Si cerramos esta semana, arrancamos de inmediato con la Fase 1 del proyecto.</p>

            <div className="ale-selector">
              <p className="ale-block-title" style={{ marginBottom: "0.15rem" }}>
                ¿Qué paquete eliges?
              </p>
              {Object.values(PACKAGES).map((plan) => (
                <button
                  key={plan.key}
                  type="button"
                  className={`ale-sel-opt ${selected === plan.key ? "is-active" : ""}`}
                  onClick={() => setSelected(plan.key)}
                >
                  <div>
                    <span className="radio" />
                    <span className="ale-sel-opt-name">{plan.name}</span>
                    <div className="ale-sel-opt-sub">{plan.sub}</div>
                  </div>
                  <div className="ale-sel-opt-price">{plan.priceShort}</div>
                </button>
              ))}
              <div className="ale-sel-total">
                <span>Total</span>
                <b>{pkg.price}</b>
              </div>
              <div className="ale-sel-phases">{pkg.phases}</div>
            </div>

            <a href={wa(pkg.wa)} target="_blank" rel="noopener noreferrer" className="ale-btn ale-btn-primary">
              Confirmar por WhatsApp
            </a>
            <p className="ale-footnote">
              Activos quedan en tus cuentas. Pagos en fases. 30 días de soporte post entrega.
            </p>
          </div>
        </section>

        <footer className="ale-footer">
          Fluxa Method | Método PDM Neurocoaching
          <br />
          Alejandra Toledo |{" "}
          <a href="https://www.instagram.com/alejatoledo/" target="_blank" rel="noopener noreferrer">
            @alejatoledo
          </a>{" "}
          | Fluxa Method
        </footer>
      </div>
    </div>
  );
}
