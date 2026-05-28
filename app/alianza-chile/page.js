"use client";

import { useEffect, useMemo, useState } from "react";
import { PropuestaSection } from "@/components/propuesta-deck/DeckUI";
import { useDeckReveal } from "@/components/propuesta-deck/use-deck-motion";

const ALIADO = "Ronaldo Escandón";
const ALIADO_CORTO = "Ronaldo";
const FECHA = "Chile 2026";
const WA_NUMBER = "573116425337";
const CLP_PER_USD_REF = 950;

const WA_TEXT = encodeURIComponent(
  `Hola Fluxa Method. Soy ${ALIADO}, revisé la propuesta de alianza Chile y quiero coordinar el primer piloto.`
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

const CTA_BTN = "alianza-btn-primary";

const NAV_LINKS = [
  { href: "#piloto", label: "Piloto" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#combos", label: "Combos" },
  { href: "#ganancia", label: "Ganancia" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const EXEC_CARDS = [
  { title: "Presencia Digital", desc: "Páginas que venden y generan confianza desde el primer clic." },
  { title: "Automatización", desc: "Sistemas que trabajan mientras el cliente duerme." },
  { title: "Inteligencia Artificial", desc: "Tecnología que atiende, califica y cierra sola." },
  { title: "Bots de Voz", desc: "Recepcionistas virtuales que nunca descansan." },
  { title: "Sistemas y Dashboards", desc: "Visibilidad total del negocio en tiempo real." },
];

const CATALOG_TABS = [
  {
    id: "digital",
    label: "Presencia digital",
    note: null,
    items: [
      {
        name: "Landing page de venta o captación",
        price: "$200 USD",
        includes: "Diseño responsive, 1 CTA, formulario o enlace a WhatsApp.",
        excludes: "Copy largo, fotos de stock, dominio o hosting.",
      },
      {
        name: "Landing page con hasta 4 productos",
        price: "$350 USD",
        includes: "Hasta 4 ofertas con precios y CTA por producto.",
        excludes: "Pasarela de pago integrada.",
      },
      {
        name: "Página web corporativa (hasta 5 secciones)",
        price: "$500 USD",
        includes: "Quiénes somos, servicios, contacto, Pixel si aplica.",
        excludes: "Blog o más de 5 secciones.",
      },
      {
        name: "Ecommerce completo con catálogo y pasarela de pago",
        price: "$1.100 USD",
        includes: "Catálogo, carrito y pasarela acordada.",
        excludes: "Inventario avanzado o ERP.",
      },
    ],
  },
  {
    id: "auto",
    label: "Automatización",
    note: null,
    items: [
      { name: "Bot WhatsApp (respuestas, calificación de leads, seguimiento)", price: "$250 USD" },
      { name: "Bot Instagram (DMs, comentarios, captación de leads)", price: "$250 USD" },
      { name: "Combo WhatsApp + Instagram", price: "$400 USD" },
      { name: "Automatización con flujos personalizados", price: "$400–$700 USD" },
      { name: "Sistema de agendamiento con recordatorios por WhatsApp", price: "$500–$800 USD" },
    ],
  },
  {
    id: "ia",
    label: "Inteligencia artificial",
    note: "Servicios bajo consulta — cotización personalizada según el negocio.",
    items: [
      { name: "Chatbot con IA para sitio web (24/7, califica leads)", price: "$700–$1.200 USD" },
      { name: "Agente de ventas por WhatsApp con IA", price: "$900–$1.500 USD" },
      { name: "Generador de contenido automatizado con IA", price: "$400 setup + $200/mes" },
      { name: "Analizador de métricas con IA", price: "$500–$800 USD" },
    ],
  },
  {
    id: "voz",
    label: "Bots de voz",
    note: "Servicios bajo consulta — cotización personalizada según el negocio.",
    items: [
      { name: "Bot de llamadas para recordatorio de citas", price: "$800–$1.200 USD + $100–$200/mes" },
      { name: "Bot de llamadas para calificación de leads", price: "$1.200–$2.000 USD" },
      { name: "Recepcionista virtual con voz", price: "$1.500–$2.500 USD" },
    ],
  },
  {
    id: "sistemas",
    label: "Sistemas",
    note: null,
    items: [
      { name: "Dashboard de métricas en tiempo real", price: "$600–$900 USD" },
      { name: "CRM simple", price: "$800–$1.200 USD" },
      { name: "Portal de clientes", price: "$600–$1.000 USD" },
    ],
  },
  {
    id: "contenido",
    label: "Contenido",
    note: null,
    items: [
      { name: "VSL (guión + estructura de video de ventas)", price: "$400 USD" },
      { name: "Setup completo Meta Ads", price: "Cotización aparte" },
      { name: "Estrategia de contenido", price: "Cotización aparte" },
    ],
  },
];

const COMBOS = [
  {
    id: "kit",
    badge: "Ahorras $100",
    name: "Kit Entrada",
    priceUsd: 350,
    price: "$350 USD",
    individualValue: "$450 USD",
    items: ["Landing page de venta", "Bot WhatsApp"],
    chile: "$550–$650 USD",
    gain: "$200 USD",
    chargeMidUsd: 600,
    featured: false,
  },
  {
    id: "sistema",
    badge: "El que más cierras",
    name: "Sistema Completo",
    priceUsd: 750,
    price: "$750 USD",
    individualValue: "$1.000 USD",
    items: ["Landing hasta 4 productos", "Bot WhatsApp", "Bot Instagram"],
    chile: "$980–$1.200 USD",
    gain: "$230–$450 USD",
    chargeMidUsd: 1090,
    featured: true,
  },
  {
    id: "ecommerce",
    badge: "Ahorras $500",
    name: "Sistema + Ecommerce",
    priceUsd: 1100,
    price: "$1.100 USD",
    individualValue: "$1.600 USD",
    items: ["Todo el Sistema Completo", "Ecommerce con pasarela de pago"],
    chile: "$1.400–$1.700 USD",
    gain: "$300–$600 USD",
    chargeMidUsd: 1550,
    featured: false,
  },
  {
    id: "vsl",
    badge: "Ahorras $350",
    name: "Sistema + VSL",
    priceUsd: 1050,
    price: "$1.050 USD",
    individualValue: "$1.400 USD",
    items: ["Sistema Completo", "Guión y estructura VSL"],
    chile: "$1.350–$1.600 USD",
    gain: "$300–$550 USD",
    chargeMidUsd: 1475,
    featured: false,
  },
  {
    id: "retainer",
    badge: "Recurrente",
    name: "Retainer Mensual",
    priceUsd: 450,
    price: "$450 USD/mes",
    individualValue: null,
    items: ["Optimizaciones, soporte, ajustes y reportes mensuales"],
    chile: "$650–$800 USD/mes",
    gain: "$200–$350 USD/mes",
    featured: false,
  },
];

const COMBO_COMPARE = [
  { feature: "Landing de venta o captación", kit: true, sistema: false, vsl: false },
  { feature: "Landing hasta 4 productos", kit: false, sistema: true, vsl: true },
  { feature: "Bot WhatsApp", kit: true, sistema: true, vsl: true },
  { feature: "Bot Instagram", kit: false, sistema: true, vsl: true },
  { feature: "Guión y estructura VSL", kit: false, sistema: false, vsl: true },
  { feature: "Ecommerce + pasarela", kit: false, sistema: false, vsl: false },
];

const MONEY_FLOW = [
  {
    n: "1",
    t: "Tu cliente en Chile",
    d: "Cierra contigo y te paga el 100% en CLP — el precio de venta lo defines tú.",
  },
  {
    n: "2",
    t: "Tú pagas a Fluxa",
    d: "Transfieres el neto en USD del combo (ej. $750). Sin este pago confirmado no arrancamos ejecución.",
  },
  {
    n: "3",
    t: "Fluxa ejecuta",
    d: "Con pago + brief completo trabajamos en segundo plano. Tu cliente no habla con nosotros.",
  },
  {
    n: "4",
    t: "Tú entregas",
    d: "Recibes el paquete white-label (sin marca Fluxa visible) y se lo pasas a tu cliente como si fuera tuyo.",
  },
];

const PROJECT_STEPS = [
  "Completas el brief Fluxa (formulario estándar — te lo enviamos al confirmar el piloto).",
  "Nos pasas accesos y contenido del cliente: dominio, WhatsApp Business, Instagram, textos y logos.",
  "Fluxa construye y te manda links de revisión; tú se los compartes a tu cliente — tú eres el único frente.",
  "Tras las 2 rondas de revisión incluidas, recibes entrega final para cerrar el proyecto con tu marca.",
];

const GLOSSARY = [
  { term: "Neto a Fluxa", def: "Lo que nos pagas por ejecutar el combo, en USD. No incluye tu margen en Chile." },
  { term: "Brief", def: "Formulario con lo que el cliente necesita: objetivo, oferta, textos y referencias." },
  { term: "White-label", def: "Entrega sin marca Fluxa; tu cliente ve tu agencia o la suya." },
  { term: "VSL", def: "Video de ventas: guión y estructura para grabar o producir el comercial." },
  { term: "Retainer", def: "Fee mensual a Fluxa por soporte, ajustes y optimización continua." },
];

const GAIN_ROWS = [
  { scenario: "Conservador", projects: "2 Sistema Completo", pay: "$1.500", charge: "$2.200", gain: "$700" },
  { scenario: "Moderado", projects: "3 Sistema + 1 VSL", pay: "$2.650", charge: "$4.000", gain: "$1.350" },
  { scenario: "Escalado", projects: "4 Sistema + 2 Retainer", pay: "$3.900", charge: "$5.800", gain: "$1.900" },
];

const OPERATIVE_ITEMS = [
  { label: "Inicio de proyecto", text: "Al confirmar pago y recibir el brief completo." },
  { label: "Seguimiento", text: "Canal directo por WhatsApp Fluxa para coordinación operativa del proyecto." },
  { label: "Revisiones", text: "2 rondas incluidas por proyecto. Cambios fuera de alcance se cotizan aparte." },
  { label: "Soporte post-entrega", text: "Ajustes menores por bugs o detalles de lo entregado en el combo, acordados por el mismo canal." },
];

const RONALDO_DELIVERS = [
  "Brief Fluxa completado (objetivo, oferta, textos y referencias del cliente).",
  "Accesos listos: dominio, hosting, WhatsApp Business e Instagram si el combo lo incluye.",
  "Contenido base acordado: logos, fotos y copy mínimo para arrancar.",
  "Tú compartes con tu cliente los links de revisión — Fluxa no escribe a tu cartera.",
  "Recibes entrega final lista para reenviar: URLs, archivos y credenciales sin marca Fluxa visible.",
];

const FAQ_ITEMS = [
  {
    q: "¿Quién habla con el cliente final en Chile?",
    a: "Solo tú. Fluxa no contacta a tu cartera. Toda comunicación comercial y de seguimiento es tuya.",
  },
  {
    q: "¿En qué orden van los pagos?",
    a: "Primero cobras a tu cliente en Chile. Luego nos transfieres el neto en USD del combo. Cuando confirmamos ese pago y el brief, arranca la ejecución. No iniciamos con saldo pendiente hacia Fluxa.",
  },
  {
    q: "¿Cómo pago a Fluxa desde Chile?",
    a: "Coordinamos por WhatsApp el medio que te acomode (transferencia internacional, Wise u otro acordado). Lo importante: el neto en USD queda confirmado antes de arrancar.",
  },
  {
    q: "¿Qué pasa si mi cliente no me paga?",
    a: "El cobro al cliente final es tu relación comercial. Nosotros solo ejecutamos cuando el neto a Fluxa está pagado; así evitas prometer entregas sin respaldo de ejecución.",
  },
  {
    q: "¿Qué pasa si el cliente pide cambios extra?",
    a: "Las 2 rondas de revisión cubren ajustes dentro del alcance del combo. Fuera de eso, cotizamos y tú decides si lo cobras al cliente.",
  },
  {
    q: "¿Puedo poner mis propios precios en Chile?",
    a: "Sí. Los precios de esta página son netos a Fluxa. Lo que cobres en CLP es 100% tu decisión comercial.",
  },
  {
    q: "¿Cómo manejo USD vs CLP?",
    a: "Cobras al cliente en CLP. Nos transfieres el equivalente en USD acordado al tipo de cambio vigente en el momento del pago a Fluxa.",
  },
  {
    q: "¿Aparece la marca Fluxa en lo que ve el cliente?",
    a: "No en la entrega al cliente final. Fluxa ejecuta detrás; tu marca o la del cliente es la que se muestra.",
  },
  {
    q: "¿Quién es Fluxa y desde dónde trabajan?",
    a: "Fluxa Method es un equipo de ejecución digital con base en Colombia. Trabajamos remoto para socios en Chile; tú mantienes la relación local con el cliente.",
  },
];

const CALC_COMBOS = COMBOS.filter((c) => c.id !== "retainer");

function formatUsd(n) {
  return `$${n.toLocaleString("en-US")} USD`;
}

function CompareCell({ value }) {
  if (value === true) {
    return (
      <span className="alianza-compare-yes">✓</span>
    );
  }
  return <span className="text-lg font-bold text-red-400">✗</span>;
}

function GainCalculator() {
  const [comboId, setComboId] = useState("sistema");
  const [qty, setQty] = useState(2);
  const [retainers, setRetainers] = useState(0);
  const [gainFlash, setGainFlash] = useState(false);

  const result = useMemo(() => {
    const combo = CALC_COMBOS.find((c) => c.id === comboId) ?? CALC_COMBOS[1];
    const pay = combo.priceUsd * qty + 450 * retainers;
    const charge = Math.round((combo.chargeMidUsd ?? 1000) * qty + 725 * retainers);
    const gain = charge - pay;
    return { pay, charge, gain };
  }, [comboId, qty, retainers]);

  useEffect(() => {
    setGainFlash(true);
    const t = window.setTimeout(() => setGainFlash(false), 600);
    return () => window.clearTimeout(t);
  }, [result.gain]);

  const clampInt = (value, min, max) => {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return min;
    return Math.min(max, Math.max(min, Math.round(parsed)));
  };

  return (
    <div className="propuesta-card mt-6 p-5 sm:p-6">
      <h3 className="text-lg font-bold text-white">Calculadora rápida</h3>
      <p className="mt-1 text-sm text-zinc-400">Estimación mensual con precios de referencia Chile (punto medio).</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="text-zinc-400">Combo principal</span>
          <select
            value={comboId}
            onChange={(e) => setComboId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
          >
            {CALC_COMBOS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-zinc-400">Proyectos / mes</span>
          <input
            type="number"
            min={1}
            max={20}
            value={qty}
            onChange={(e) => setQty(clampInt(e.target.value, 1, 20))}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
          />
        </label>
        <label className="block text-sm">
          <span className="text-zinc-400">Retainers activos</span>
          <input
            type="number"
            min={0}
            max={10}
            value={retainers}
            onChange={(e) => setRetainers(clampInt(e.target.value, 0, 10))}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
          />
        </label>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        <div className="alianza-surface-panel rounded-lg p-3">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">Pagas a Fluxa</p>
          <p className="mt-1 font-bold text-zinc-200">{formatUsd(result.pay)}</p>
        </div>
        <div className="alianza-surface-panel rounded-lg p-3">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">Cobras (ref.)</p>
          <p className="mt-1 font-bold text-zinc-200">{formatUsd(result.charge)}</p>
        </div>
        <div
          className={`alianza-money-box rounded-lg p-3 ${gainFlash ? "alianza-gain-flash" : ""}`}
        >
          <p className="alianza-money-label text-[10px] uppercase tracking-wider">Tu ganancia</p>
          <p className="alianza-money-value mt-1 text-xl font-extrabold transition-all duration-300">{formatUsd(result.gain)}</p>
        </div>
      </div>
    </div>
  );
}

export default function AlianzaChilePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [catalogTab, setCatalogTab] = useState("digital");
  const [tabFade, setTabFade] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const activeCatalog = CATALOG_TABS.find((t) => t.id === catalogTab) ?? CATALOG_TABS[0];

  useDeckReveal();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      setShowStickyCta(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchCatalogTab = (id) => {
    setTabFade(false);
    setCatalogTab(id);
    window.setTimeout(() => setTabFade(true), 40);
  };

  return (
    <main className="propuesta-supermercado alianza-page min-h-screen pb-20 antialiased md:pb-0">
      <div className="propuesta-progress" aria-hidden>
        <div className="propuesta-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Nav anclas — desktop */}
      <nav
        className="alianza-nav-bar sticky top-0 z-40 hidden backdrop-blur-md md:block"
        aria-label="Secciones"
      >
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-1 px-4 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="alianza-nav-link rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-400 hover:bg-zinc-800/80"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-[85vh] w-full max-w-3xl flex-col justify-center px-5 pb-12 pt-10 sm:px-8 md:pt-14">
        <div data-reveal className="is-visible">
          <p className="reveal-child alianza-eyebrow text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]" style={{ "--reveal-delay": 0 }}>
            Alianza estratégica — {FECHA}
          </p>
          <p className="reveal-child mt-1 text-sm text-zinc-500" style={{ "--reveal-delay": 1 }}>
            Para {ALIADO} · Propuesta privada Fluxa Method
          </p>
          <h1 className="reveal-child mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl" style={{ "--reveal-delay": 2 }}>
            <span className="block text-white">Tú cierras.</span>
            <span className="alianza-hero-accent alianza-hero-glow block">Nosotros ejecutamos.</span>
          </h1>
          <p className="reveal-child mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg" style={{ "--reveal-delay": 3 }}>
            {ALIADO_CORTO}, lo que tienes en Chile es valioso: cartera, confianza y capacidad de cierre. Fluxa Method es un
            equipo en Colombia que ejecuta en segundo plano — tú vendes y cobras en CLP; nosotros entregamos el sistema en
            USD neto. Esta propuesta es una invitación a construir algo que genere dinero para los dos.
          </p>
          <div className="reveal-child mt-8 flex flex-wrap gap-3" style={{ "--reveal-delay": 4 }}>
            <a href="#propuesta" className={`alianza-cta-pulse inline-flex px-6 py-3 text-sm ${CTA_BTN}`}>
              Ver la propuesta completa
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="alianza-btn-ghost inline-flex rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide"
            >
              WhatsApp Fluxa
            </a>
          </div>
          <span className="alianza-hero-line mt-6 block h-px w-0 max-w-[120px]" aria-hidden />
        </div>
      </section>

      {/* INTRO */}
      <PropuestaSection className="!max-w-3xl !pb-8">
        <p className="alianza-eyebrow text-xs font-semibold uppercase tracking-[0.2em]">Alianza Fluxa × Chile</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Una propuesta para crecer juntos</h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          Esta propuesta no es un contrato — es una invitación. No hay exclusividad forzada, ni mínimos de volumen, ni
          riesgo de entrada. El primer proyecto es el piloto; si funciona, escalamos.
        </p>

        <article className="propuesta-card alianza-summary-card mt-6 border-teal-500/30 p-5 sm:p-6">
          <p className="alianza-eyebrow text-[10px] font-bold uppercase tracking-[0.2em]">Resumen en 30 segundos</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-200 sm:text-[15px]">
            <li>
              <strong className="text-white">Vendes en Chile</strong> un paquete (ej. Sistema Completo ~$980–$1.200 USD
              o equivalente en CLP).
            </li>
            <li>
              <strong className="text-white">Nos pagas el neto Fluxa</strong> en USD (ej. $750). Con eso confirmado +
              brief, arrancamos.
            </li>
            <li>
              <strong className="text-white">Fluxa ejecuta</strong> sin hablar con tu cliente; tú eres el único contacto.
            </li>
            <li>
              <strong className="text-white">Te quedas la diferencia</strong> entre lo que cobraste y el neto que pagaste.
            </li>
          </ol>
        </article>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Glosario rápido</p>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            {GLOSSARY.map((item) => (
              <div key={item.term} className="rounded-lg border border-zinc-800/90 bg-zinc-900/40 px-3 py-2.5">
                <dt className="alianza-eyebrow text-xs font-bold">{item.term}</dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-zinc-400 sm:text-xs">{item.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PropuestaSection>

      {/* PRIMER PILOTO */}
      <PropuestaSection id="piloto" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Primer piloto recomendado</h2>
        <article className="propuesta-card alianza-card-hover alianza-featured-pulse alianza-pilot-card mt-6 p-5 sm:p-6">
          <p className="alianza-pilot-label text-xs font-bold uppercase tracking-[0.18em]">Sistema Completo · $750 USD neto</p>
          <p className="mt-2 text-sm text-zinc-300">El combo que mejor equilibra margen y resultado para tu cliente.</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-200">
            <li className="flex gap-2">
              <span className="alianza-bullet">●</span> Landing hasta 4 productos
            </li>
            <li className="flex gap-2">
              <span className="alianza-bullet">●</span> Bot WhatsApp + Bot Instagram
            </li>
            <li className="flex gap-2">
              <span className="alianza-bullet">●</span>{" "}
              <span>
                Referencia Chile: $980–$1.200 ·{" "}
                <span className="alianza-money-label">tu ganancia desde ~$230 USD</span>
              </span>
            </li>
          </ul>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={`alianza-cta-pulse mt-5 inline-flex text-sm ${CTA_BTN}`}>
            Coordinar piloto por WhatsApp
          </a>
        </article>

        {/* Caso referencia */}
        <article className="propuesta-card alianza-chile-card mt-4 p-5">
          <p className="alianza-chile-label text-xs font-bold uppercase tracking-wide">Caso de referencia · Chile</p>
          <p className="mt-2 text-sm text-zinc-300">
            <strong className="text-zinc-200">Tipo de negocio:</strong> servicios profesionales locales en Chile (confidencial).
            Vendido a <strong className="alianza-chile-highlight">968.990 CLP</strong> (~$
            {Math.round(968990 / CLP_PER_USD_REF)} USD al cambio de referencia). Fluxa ejecutó equivalente a{" "}
            <strong className="text-white">Sistema Completo ($750 USD neto)</strong>. El mercado ya validó ese precio — tú
            podrías replicar la misma lógica con tu cartera.
          </p>
        </article>
      </PropuestaSection>

      {/* EJECUTA */}
      <PropuestaSection id="propuesta" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Lo que Fluxa ejecuta</h2>
        <div className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-2">
          {EXEC_CARDS.map((card, i) => (
            <article
              key={card.title}
              style={{ "--stagger-i": i }}
              className="propuesta-card alianza-card-hover p-5 transition-colors hover:border-zinc-600"
            >
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{card.desc}</p>
            </article>
          ))}
        </div>
      </PropuestaSection>

      {/* CATÁLOGO */}
      <PropuestaSection id="catalogo" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Catálogo de servicios</h2>
        <p className="mt-2 text-sm text-zinc-400">Precios netos a Fluxa. Lo que cobres en Chile es tuyo.</p>
        <p className="mt-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-xs leading-relaxed text-zinc-400">
          <strong className="text-zinc-200">Para tu primer cierre:</strong> usa la sección{" "}
          <a href="#piloto" className="alianza-eyebrow underline-offset-2 hover:underline">
            Piloto
          </a>{" "}
          y los{" "}
          <a href="#combos" className="alianza-eyebrow underline-offset-2 hover:underline">
            Combos
          </a>
          . Este catálogo sirve para cotizar piezas sueltas o proyectos a medida después.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          Referencia CLP (orientativa): 1 USD ≈ {CLP_PER_USD_REF.toLocaleString("es-CL")} CLP — actualiza al tipo de cambio vigente al cobrar.
        </p>

        <div role="tablist" aria-label="Categorías" className="plan-tabs-scroll mt-6 flex flex-wrap gap-2">
          {CATALOG_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={catalogTab === tab.id}
              onClick={() => switchCatalogTab(tab.id)}
              className={`plan-tab !w-auto !min-h-0 px-3 py-2 text-[11px] sm:text-xs ${catalogTab === tab.id ? "plan-tab--active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className={`propuesta-card alianza-tab-panel mt-4 overflow-hidden p-0 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"}`}
        >
          {activeCatalog.note ? (
            <p className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3 text-xs italic text-zinc-500">{activeCatalog.note}</p>
          ) : null}
          <ul className="divide-y divide-zinc-800">
            {activeCatalog.items.map((item) => (
              <li key={item.name} className="px-4 py-3">
                <div className="flex flex-wrap items-start justify-between gap-2 text-sm sm:text-[15px]">
                  <span className="min-w-[12rem] flex-1 text-zinc-200">{item.name}</span>
                  <span className="alianza-price shrink-0 font-semibold">{item.price}</span>
                </div>
                {item.includes ? (
                  <p className="mt-2 text-xs text-zinc-500">
                    <span className="text-zinc-400">Incluye:</span> {item.includes}{" "}
                    {item.excludes ? (
                      <>
                        · <span className="text-zinc-400">No incluye:</span> {item.excludes}
                      </>
                    ) : null}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </PropuestaSection>

      {/* COMBOS */}
      <PropuestaSection id="combos" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Combos — más por menos</h2>
        <p className="mt-2 text-sm text-zinc-400">Un solo precio al cliente. Valor individual vs combo abajo.</p>

        <div className="alianza-surface-panel mt-6 overflow-x-auto rounded-xl p-4 sm:p-6">
          <h3 className="text-center text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
            Comparativa rápida de combos
          </h3>
          <div className="propuesta-compare-table mt-4 min-w-[300px]">
            <div className="grid grid-cols-[1fr_56px_56px_56px] gap-2 border-b border-zinc-800 pb-3 text-[10px] font-bold uppercase text-zinc-500 sm:text-xs">
              <span>Característica</span>
              <span className="text-center text-zinc-400">Kit</span>
              <span className="text-center alianza-eyebrow">Sistema</span>
              <span className="text-center text-zinc-400">+ VSL</span>
            </div>
            {COMBO_COMPARE.map((row, i) => (
              <div
                key={row.feature}
                style={{ "--stagger-i": i }}
                className="alianza-compare-row grid grid-cols-[1fr_56px_56px_56px] items-center gap-2 border-b border-zinc-800/80 py-2.5 last:border-0"
              >
                <span className="text-[11px] text-zinc-300 sm:text-sm">{row.feature}</span>
                <div className="flex justify-center">
                  <CompareCell value={row.kit} />
                </div>
                <div className="flex justify-center">
                  <CompareCell value={row.sistema} />
                </div>
                <div className="flex justify-center">
                  <CompareCell value={row.vsl} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] leading-relaxed text-zinc-500">
            Los combos <strong className="text-zinc-400">Sistema + Ecommerce</strong> y{" "}
            <strong className="text-zinc-400">Retainer mensual</strong> están detallados en las tarjetas de abajo — esta
            tabla compara los tres paquetes de proyecto más vendidos.
          </p>
        </div>

        <div className="reveal-stagger mt-8 space-y-4">
          {COMBOS.map((combo, i) => (
            <article
              key={combo.name}
              style={{ "--stagger-i": i }}
              className={`propuesta-card alianza-card-hover relative p-5 sm:p-6 ${
                combo.featured ? "alianza-featured-pulse alianza-combo-featured" : ""
              }`}
            >
              <span className="alianza-combo-badge absolute right-4 top-4 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                {combo.badge}
              </span>
              <h3 className="pr-28 text-xl font-extrabold text-white">{combo.name}</h3>
              <p className="alianza-price mt-1 text-3xl font-extrabold">{combo.price}</p>
              {combo.individualValue ? (
                <p className="mt-1 text-xs text-zinc-500">
                  Valor si compras por separado: <span className="text-zinc-400">{combo.individualValue}</span>
                </p>
              ) : null}
              <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
                {combo.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="alianza-bullet">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-zinc-800 pt-3 text-xs leading-relaxed text-zinc-500">
                <strong className="text-zinc-400">Precio de referencia Chile:</strong> {combo.chile}
                <br />
                <strong className="alianza-money-label">Tu ganancia mínima:</strong>{" "}
                <span className="alianza-money-value">{combo.gain}</span>
              </p>
            </article>
          ))}
        </div>
      </PropuestaSection>

      {/* GANANCIA */}
      <PropuestaSection id="ganancia" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Tu ganancia en números reales</h2>
        <div className="propuesta-compare-table alianza-surface-panel mt-6 overflow-x-auto rounded-xl">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-left text-[10px] uppercase tracking-wider text-zinc-500">
                <th className="px-3 py-3 sm:px-4">Escenario</th>
                <th className="px-3 py-3 sm:px-4">Proyectos/mes</th>
                <th className="px-3 py-3 sm:px-4">Pagas a Fluxa</th>
                <th className="px-3 py-3 sm:px-4">Cobras</th>
                <th className="px-3 py-3 sm:px-4">Tu ganancia</th>
              </tr>
            </thead>
            <tbody>
              {GAIN_ROWS.map((row, i) => (
                <tr
                  key={row.scenario}
                  style={{ "--stagger-i": i }}
                  className="alianza-compare-row border-b border-zinc-800/90 last:border-0"
                >
                  <td className="px-3 py-3 text-zinc-200 sm:px-4">{row.scenario}</td>
                  <td className="px-3 py-3 text-zinc-400 sm:px-4">{row.projects}</td>
                  <td className="px-3 py-3 text-zinc-300 sm:px-4">{row.pay}</td>
                  <td className="px-3 py-3 text-zinc-300 sm:px-4">{row.charge}</td>
                  <td className="alianza-gain-cell px-3 py-3 text-lg sm:px-4">{row.gain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Con retainers acumulados, ese número llega solo cada mes sin cerrar nada nuevo.
        </p>
        <GainCalculator />
      </PropuestaSection>

      {/* CÓMO FUNCIONA */}
      <PropuestaSection id="como-funciona" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Cómo funciona la alianza</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Primero el dinero (quién cobra a quién). Después, qué haces tú en cada proyecto.
        </p>

        <h3 className="mt-10 text-lg font-extrabold text-white">1. Flujo del dinero</h3>
        <div className="reveal-stagger mt-5 grid gap-3 sm:grid-cols-2">
          {MONEY_FLOW.map((box, i) => (
            <div key={box.n} style={{ "--stagger-i": i }} className="propuesta-card alianza-card-hover flex gap-4 p-4">
              <span className="alianza-flow-num text-3xl font-extrabold">{box.n}</span>
              <div>
                <p className="font-bold text-white">{box.t}</p>
                <p className="mt-1 text-sm text-zinc-400">{box.d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-lg border border-amber-600/30 bg-amber-950/20 px-4 py-3 text-xs text-zinc-300">
          <strong className="alianza-money-label">Regla clave:</strong> Fluxa no inicia ejecución hasta tener el neto en USD
          pagado y el brief completo. Tú cobras primero a tu cliente en Chile; luego nos transfieres nuestro neto.
        </p>

        <h3 className="mt-12 text-lg font-extrabold text-white">2. Tu rol en cada proyecto</h3>
        <ol className="reveal-stagger mt-5 space-y-0">
          {PROJECT_STEPS.map((text, i) => (
            <li
              key={text}
              style={{ "--stagger-i": i }}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-zinc-800 py-5 last:border-0 sm:grid-cols-[4rem_1fr]"
            >
              <span className="alianza-step-num text-4xl font-extrabold leading-none sm:text-5xl">{i + 1}</span>
              <p className="self-center text-sm text-zinc-200 sm:text-base">{text}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 text-xl font-extrabold text-white">3. Compromisos operativos</h3>
        <ul className="propuesta-card mt-4 list-none divide-y divide-zinc-800 p-0">
          {OPERATIVE_ITEMS.map((item) => (
            <li key={item.label} className="px-4 py-3 text-sm sm:px-5">
              <strong className="alianza-sla-label">{item.label}:</strong>{" "}
              <span className="text-zinc-300">{item.text}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-xl font-extrabold text-white">4. Qué debes tener listo (checklist)</h3>
        <ul className="mt-4 space-y-2">
          {RONALDO_DELIVERS.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-zinc-300">
              <span className="alianza-check">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </PropuestaSection>

      {/* REGLAS */}
      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Las reglas claras</h2>
        <ul className="propuesta-card mt-8 list-none divide-y divide-zinc-800 p-0">
          {[
            {
              label: "Pagos",
              text: "100% del neto a Fluxa antes de iniciar ejecución. Primero cobras a tu cliente en Chile; luego nos transfieres nuestro neto en USD.",
            },
            { label: "Moneda", text: "Precios netos en USD. Tú cobras en CLP y transferes el equivalente acordado." },
            {
              label: "Confidencialidad",
              text: "Fluxa no contacta ni comercializa directamente a tus clientes en Chile. Tu cartera es tuya.",
            },
            { label: "Exclusividad", text: "Ninguna de las dos partes la exige en esta etapa." },
            { label: "Ajuste de precios", text: "Si cambian nuestros costos, te avisamos con anticipación por escrito antes de aplicar nuevos valores." },
          ].map((rule, i) => (
            <li
              key={rule.label}
              style={{ "--stagger-i": i }}
              className="alianza-check-item flex gap-3 px-4 py-4 text-sm text-zinc-300 sm:px-5 sm:text-base"
            >
              <span className="alianza-check mt-0.5 shrink-0">✓</span>
              <span>
                <strong className="text-white">{rule.label}:</strong> {rule.text}
              </span>
            </li>
          ))}
        </ul>
      </PropuestaSection>

      {/* POR QUÉ */}
      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Por qué funciona para los dos</h2>
        <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2">
          <article style={{ "--stagger-i": 0 }} className="propuesta-card alianza-card-hover alianza-partner-card border-l-4 p-5">
            <h3 className="alianza-partner-label text-sm font-bold uppercase tracking-wide">Para ti</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Tú ya vendiste a 968.990 CLP lo que nosotros ejecutamos por $750 USD. El mercado chileno ya pagó ese precio
              sin dudar. Con Fluxa detrás puedes vender con más confianza, entregar con respaldo profesional y cerrar más.
            </p>
          </article>
          <article style={{ "--stagger-i": 1 }} className="propuesta-card alianza-card-hover alianza-partner-card border-l-4 p-5">
            <h3 className="alianza-partner-label text-sm font-bold uppercase tracking-wide">Para nosotros</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Ganamos acceso a Chile sin estructura comercial propia allá. Tú ganas un equipo de ejecución sin nómina fija.
            </p>
          </article>
        </div>
      </PropuestaSection>

      {/* FAQ */}
      <PropuestaSection id="faq" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
        <div className="reveal-stagger mt-6 space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q} style={{ "--stagger-i": i }} className="propuesta-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className={`alianza-faq-btn flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-white sm:px-5 ${openFaq === i ? "alianza-faq-btn--open" : ""}`}
                aria-expanded={openFaq === i}
              >
                {item.q}
                <span className="alianza-faq-icon shrink-0 text-xl leading-none" aria-hidden>
                  +
                </span>
              </button>
              <div className={`alianza-faq-panel ${openFaq === i ? "alianza-faq-panel--open" : ""}`}>
                <div>
                  <p className="border-t border-zinc-800 px-4 pb-4 pt-3 text-sm text-zinc-400 sm:px-5">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PropuestaSection>

      {/* CTA */}
      <section id="contacto" className="alianza-cta-footer px-5 py-16 sm:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¿Arrancamos?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base">
            Escríbenos por WhatsApp para resolver dudas y definir el primer proyecto piloto. Sin compromiso. Si el piloto
            funciona, construimos el sistema.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`alianza-cta-pulse mt-8 inline-flex px-8 py-3 text-sm ${CTA_BTN}`}
          >
            Escribir por WhatsApp
          </a>
          <p className="mt-4 text-xs text-zinc-500">+57 311 642 5337 · Fluxa Method</p>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-5 pb-24 pt-8 text-center text-xs text-zinc-500 sm:px-8 md:pb-12">
        <p>Fluxa — Arquitectura digital para negocios que crecen sin operar manualmente.</p>
        <p className="mt-2">© 2026 Fluxa. Todos los derechos reservados.</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.14em]">
          fluxamethod.com · @fluxamethod · Cúcuta, Colombia
        </p>
      </footer>

      {/* CTA sticky móvil */}
      <div
        className={`alianza-sticky-cta alianza-sticky-bar fixed bottom-0 left-0 right-0 z-50 p-3 backdrop-blur-md md:hidden ${showStickyCta ? "alianza-sticky-cta--visible" : "alianza-sticky-cta--hidden"}`}
      >
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`alianza-cta-pulse flex w-full justify-center py-3 text-sm ${CTA_BTN}`}
        >
          WhatsApp Fluxa
        </a>
      </div>
    </main>
  );
}
