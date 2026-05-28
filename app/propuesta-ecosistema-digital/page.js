"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { PropuestaSection } from "@/components/propuesta-deck/DeckUI";
import { useDeckReveal } from "@/components/propuesta-deck/use-deck-motion";
import {
  AnimatedPrice,
  CronogramaTimeline,
  DeliverablesBlock,
  FaqAccordion,
  PackComparator,
  EcoHeroBackground,
  PlanChangeHint,
  PlanRecommendations,
  PlanStickyBar,
  SocialProofStrip,
  Summary30Card,
  TotalCostBox,
  WeekOneSteps,
} from "./eco-ui";

const CLIENT_NAME = "Andrés Wolves";

const WA_URL =
  "https://wa.me/573116425337?text=" +
  encodeURIComponent(
    `Hola Fluxa Method, soy ${CLIENT_NAME}. Revisé la propuesta de ecosistema digital y quiero agendar para avanzar.`
  );

const CTA_BTN = "alianza-btn-primary";

const NAV_LINKS = [
  { href: "#resumen", label: "Resumen" },
  { href: "#ventanas", label: "Ecosistemas" },
  { href: "#inversion", label: "Inversión" },
  { href: "#pago", label: "Pago" },
  { href: "#cronograma", label: "Cronograma" },
  { href: "#funcionamiento", label: "Operación" },
  { href: "#faq", label: "FAQ" },
];

const MOBILE_NAV = [
  { href: "#resumen", label: "Resumen" },
  { href: "#ventanas", label: "Plan" },
  { href: "#inversion", label: "Inversión" },
  { href: "#contacto", label: "Contacto" },
];

const CTA_BY_TAB = {
  full: "Quiero el pack integral",
  eco1: "Quiero Ecommerce + Ropa + Suplementos",
  eco2: "Quiero Asesoramiento Deportivo + Membresía",
  eco3: "Quiero Fondo de Inversión + Brokeraje",
};

const TABS = [
  {
    id: "eco1",
    label: "Ecommerce + Ropa + Suplementos",
    title: "Ecosistema 1: Ecommerce + Ropa + Suplementos",
    investment: "$2,000",
    desc: "Hoy vendes con un catálogo manual por mensajes. Eso limita tu volumen a tu tiempo disponible. Vamos a construir una tienda pensada para convertir visitas en pedidos.",
    items: [
      "Tienda completa con diseño de tu marca",
      "Página del producto ganador de suplementos",
      "Cobro en línea integrado",
      "Medición de campañas desde el inicio",
      "Mensajería para cerrar ventas, no para armar catálogo",
      "Sitio publicado en internet con acceso seguro",
    ],
  },
  {
    id: "eco2",
    label: "Asesoramiento Deportivo + Membresía",
    title: "Ecosistema 2: Asesoramiento Deportivo + Membresía",
    investment: "$1,800",
    desc: "Hoy das mentorías de forma manual. Eso no escala. Construimos un sistema de captación y cobro automático para que tu tiempo se concentre en contenido y autoridad.",
    items: [
      "Video de ventas con estructura de conversión",
      "Página de captación para membresía o reto fitness",
      "Plataforma de membresía configurada",
      "Accesos automáticos tras el pago",
      "Bienvenida automatizada de nuevos miembros",
    ],
  },
  {
    id: "eco3",
    label: "Fondo de Inversión + Brokeraje",
    title: "Ecosistema 3: Fondo de Inversión + Brokeraje",
    investment: "$1,900",
    desc: "Proyecto de mayor ticket y potencial. La prioridad es posicionamiento de autoridad y filtro de perfiles para cuidar calidad de ingreso.",
    items: [
      "Video de autoridad y confianza",
      "Página de captación de perfiles calificados",
      "Canal privado de señales",
      "Membresía escalonada: básico y VIP",
      "Página de resultados con prueba social",
      "Registro de ingreso con aviso legal incluido",
    ],
  },
  {
    id: "full",
    label: "Pack integral",
    title: "Pack completo: 3 ecosistemas integrados",
    investment: "$4,500",
    desc: "Por separado suman $5,700 ($2,000 + $1,800 + $1,900). En pack pagas $4,500 con integración, campañas incluidas y ahorro total de $1,550.",
    items: [
      "Una sola estrategia comercial para 3 fuentes de ingreso",
      "Venta cruzada entre tus marcas con menos fricción",
      "Misma audiencia, más ingresos por persona",
      "Recomendado: construir todo conectado de una vez",
    ],
    featured: true,
  },
];

const DELIVERABLES = {
  eco1: {
    rows: [
      "Configuración de tienda en línea",
      "Diseño visual: tema, colores y marca",
      "Carga de productos + fichas + fotos",
      "Página del producto ganador (suplementos)",
      "Integración de cobros en línea",
      "Medición de campañas y conversiones",
      "Botón de contacto para cerrar ventas",
      "Publicación del sitio y acceso seguro",
    ],
  },
  eco2: {
    rows: [
      "Video de ventas: estructura y diseño",
      "Configuración de plataforma de membresía",
      "Diseño de página de captación (membresía o reto)",
      "Configuración de pagos y accesos automáticos",
      "Página de bienvenida para nuevos miembros",
      "Mensajes automáticos tras el pago",
    ],
  },
  eco3: {
    rows: [
      "Video de autoridad y posicionamiento premium",
      "Página de captación y filtro de contactos calificados",
      "Canal privado para señales",
      "Página de resultados y prueba social",
      "Membresía escalonada básico y VIP",
      "Formulario de ingreso y aviso legal",
    ],
  },
};

const DELIVERABLE_GROUPS = [
  {
    id: "eco1",
    label: "Ecosistema 1 · Ecommerce + Ropa + Suplementos",
    subtotal: "$700",
    rows: [
      ["Configuración de tienda en línea", "$150"],
      ["Diseño visual: tema, colores y marca", "$120"],
      ["Carga de productos + fichas + fotos", "$80"],
      ["Página del producto ganador (suplementos)", "$150"],
      ["Integración de cobros en línea", "$60"],
      ["Medición de campañas y conversiones", "$60"],
      ["Botón de contacto para cerrar ventas", "$40"],
      ["Publicación del sitio y acceso seguro", "$40"],
    ],
  },
  {
    id: "eco2",
    label: "Ecosistema 2 · Asesoramiento Deportivo + Membresía",
    subtotal: "$620",
    rows: [
      ["Video de ventas: estructura y diseño", "$150"],
      ["Configuración de plataforma de membresía", "$120"],
      ["Diseño de página de captación (membresía o reto)", "$130"],
      ["Configuración de pagos y accesos automáticos", "$80"],
      ["Página de bienvenida para nuevos miembros", "$60"],
      ["Mensajes automáticos tras el pago", "$80"],
    ],
  },
  {
    id: "eco3",
    label: "Ecosistema 3 · Fondo de Inversión + Brokeraje",
    subtotal: "$770",
    rows: [
      ["Video de autoridad y posicionamiento premium", "$200"],
      ["Página de captación y filtro de contactos calificados", "$120"],
      ["Canal privado para señales", "$150"],
      ["Página de resultados y prueba social", "$100"],
      ["Membresía escalonada básico y VIP", "$120"],
      ["Formulario de ingreso y aviso legal", "$80"],
    ],
  },
];

const PLAN_VIEWS = {
  eco1: {
    summary: [
      "Construcción enfocada en tienda en línea, página de venta, cobros y medición.",
      "Inversión de construcción: $2,000.",
      "Puedes operar solo este ecosistema y escalar después al plan integral.",
      "Fluxa ejecuta la construcción; tú concentras contenido y cierre.",
    ],
    inversion: [
      ["Construcción · Ecommerce + Ropa + Suplementos", "$2,000"],
      ["Total fase seleccionada", "$2,000"],
      ["Gestión de pauta (opcional)", "$600/mes"],
      ["Mantenimiento y soporte (opcional)", "$200/mes"],
    ],
    pago: [
      ["50% al inicio", "$1,000"],
      ["50% a 20 días del pago inicial", "$1,000"],
    ],
    cronograma: [
      ["Semanas 1–4", "Ecommerce + Ropa + Suplementos + página de venta + cobros + medición"],
      ["Semanas 5–8", "Ajustes, pruebas contigo y salida a operación"],
    ],
    acceptance: [
      [
        "Ecommerce + Ropa + Suplementos",
        "Entregado cuando tienda, página principal, cobros en línea y medición quedan operativos y validados.",
      ],
    ],
    showLegal: false,
  },
  eco2: {
    summary: [
      "Construcción enfocada en captación y monetización de membresía deportiva.",
      "Inversión de construcción: $1,800.",
      "Incluye estructura de cobro y bienvenida automatizada de miembros.",
      "Tú concentras autoridad y ventas; Fluxa ejecuta el sistema.",
    ],
    inversion: [
      ["Construcción · Asesoramiento Deportivo + Membresía", "$1,800"],
      ["Total fase seleccionada", "$1,800"],
      ["Gestión de pauta (opcional)", "$600/mes"],
      ["Mantenimiento y soporte (opcional)", "$200/mes"],
    ],
    pago: [
      ["50% al inicio", "$900"],
      ["50% a 20 días del pago inicial", "$900"],
    ],
    cronograma: [
      ["Semanas 1–4", "Video de ventas + página de captación + plataforma de membresía"],
      ["Semanas 5–8", "Bienvenida de miembros, pruebas contigo y optimización inicial"],
    ],
    acceptance: [
      [
        "Asesoramiento Deportivo + Membresía",
        "Entregado cuando video de ventas, página de captación y plataforma de membresía quedan publicados con bienvenida automática funcional.",
      ],
    ],
    showLegal: false,
  },
  eco3: {
    summary: [
      "Construcción enfocada en autoridad, captación calificada y operación de señales.",
      "Inversión de construcción: $1,900.",
      "Incluye estructura de membresía escalonada y registro con aviso legal.",
      "Requiere validación legal de tu lado antes de salida comercial.",
    ],
    inversion: [
      ["Construcción · Fondo de Inversión + Brokeraje", "$1,900"],
      ["Total fase seleccionada", "$1,900"],
      ["Gestión de pauta (opcional)", "$600/mes"],
      ["Mantenimiento y soporte (opcional)", "$200/mes"],
    ],
    pago: [
      ["50% al inicio", "$950"],
      ["50% a 20 días del pago inicial", "$950"],
    ],
    cronograma: [
      ["Semanas 1–4", "Video de ventas + página de captación + canal privado"],
      ["Semanas 5–8", "Membresía escalonada, página de resultados y validación final"],
    ],
    acceptance: [
      [
        "Fondo de Inversión + Brokeraje",
        "Entregado cuando captación, canal de señales, membresía y página de autoridad quedan activos y validados contigo.",
      ],
    ],
    showLegal: true,
  },
  full: {
    summary: [
      "Construimos 3 ecosistemas conectados para monetizar la misma audiencia en diferentes ofertas.",
      "Precio lista de construcción: $5,700.",
      "Precio pack integral: $4,500.",
      "Ahorro en construcción: $1,200.",
      "Setup campañas incluido: $350.",
      "Ahorro total del pack: $1,550.",
    ],
    inversion: [
      ["Desarrollo completo de los 3 ecosistemas", "$4,500"],
      ["Setup inicial de campañas publicitarias", "$350"],
      ["Precio lista construcción (referencia)", "$5,700"],
      ["Descuento aplicado por Pack Integral", "-$1,550"],
      ["Precio final Pack Integral", "$4,500"],
      ["Gestión mensual de pauta", "$600/mes"],
      ["Mantenimiento y soporte web", "$200/mes"],
      ["Total mensual recurrente desde el mes 5", "$800/mes"],
    ],
    pago: [
      ["50% al inicio para arrancar", "$2,250"],
      ["30% a 20 días del pago inicial", "$1,350"],
      ["20% a 40 días del pago inicial", "$900"],
    ],
    cronograma: [
      ["Mes 1", "Ecommerce + Ropa + Suplementos + páginas de venta"],
      ["Mes 2", "Asesoramiento Deportivo + Membresía + video de ventas + plataforma"],
      ["Mes 3", "Fondo de Inversión + Brokeraje + página de autoridad"],
      ["Mes 4", "Optimización + ajustes de pauta + entrega final"],
    ],
    acceptance: [
      [
        "Ecommerce + Ropa + Suplementos",
        "Entregado cuando tienda, página principal, cobros en línea y medición quedan operativos y validados.",
      ],
      [
        "Asesoramiento Deportivo + Membresía",
        "Entregado cuando video de ventas, página de captación y plataforma de membresía quedan publicados con bienvenida automática funcional.",
      ],
      [
        "Fondo de Inversión + Brokeraje",
        "Entregado cuando captación, canal de señales, membresía y página de autoridad quedan activos y validados contigo.",
      ],
    ],
    showLegal: true,
  },
};

const SCOPE_INCLUDED = [
  "Diseño y desarrollo de páginas y sistemas de venta por ecosistema",
  "Integraciones técnicas: formularios, cobros en línea, medición y automatizaciones base",
  "Configuración de plataformas de venta, membresía y canales privados según ecosistema",
  "Dos rondas de revisión incluidas por cada frente de trabajo",
];

const SCOPE_EXCLUDED = [
  "Producción audiovisual completa (grabación/edición profesional externa)",
  "Costos de servicios externos, licencias o dominios premium de terceros",
  "Asesoría legal/tributaria o representación regulatoria en inversiones",
  "Operación comercial diaria del equipo del cliente",
];

const CLIENT_ASSUMPTIONS = [
  "Ideal tener cuentas de publicidad, dominio y plataformas — si no, te guiamos en la semana 1",
  "Contenido base: oferta, mensajes, branding y fotos (puede ser versión inicial)",
  "Tú o alguien de tu equipo aprueba en máximo 48–72 h para no frenar fechas",
  "Cumplimiento de reglas de las plataformas que uses y normativa de tu mercado",
];

const WHO_DOES_WHAT = [
  {
    who: "Tú",
    items: [
      "Creas contenido, fortaleces marca y cierras ventas",
      "Apruebas piezas y decisiones comerciales",
      "Defines precios finales al mercado",
    ],
  },
  {
    who: "Fluxa",
    items: [
      "Diseña y construye páginas, tienda y sistemas de cobro",
      "Conecta automatizaciones y medición de campañas",
      "Entrega todo listo para operar con el mínimo trabajo manual diario",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Qué pasa si no tengo todo el contenido listo?",
    a: "Arrancamos con versión base. Necesitamos mínimo oferta, mensajes y branding inicial; el resto se completa en las primeras semanas.",
  },
  {
    q: "¿Quién graba y edita los videos de ventas?",
    a: "Tú grabas con guion que te entregamos (celular o cámara). Fluxa diseña estructura, página y montaje ligero si está en alcance; producción profesional externa se cotiza aparte.",
  },
  {
    q: "¿Puedo contratar un ecosistema hoy y otro después?",
    a: "Sí. Muchos clientes empiezan por un frente (desde $1,800) y luego suman el pack o el siguiente ecosistema. El cronograma se ajusta sin perder lo ya construido.",
  },
  {
    q: "¿Qué pasa si me atraso con fotos o aprobaciones?",
    a: "Las fechas se mueven según tus entregas. Te avisamos con anticipación; lo importante es mantener comunicación para no bloquear el equipo.",
  },
  {
    q: "¿Cómo pago?",
    a: "Transferencia internacional o método acordado por WhatsApp. Primer pago al inicio; el resto por calendario (20 y 40 días desde el pago inicial en el pack).",
  },
  {
    q: "¿La parte de señales garantiza ganancias?",
    a: "No. Montamos la estructura comercial y operativa. No prometemos rentabilidad ni recomendamos inversiones.",
  },
  {
    q: "¿Quién es dueño de las páginas y sistemas?",
    a: "Tú. Todo queda para tu operación; Fluxa entrega accesos y documentación básica.",
  },
  {
    q: "¿Qué pasa después de decir que sí?",
    a: "Pagas el hito inicial, completamos checklist de accesos y en 48 h agendamos la reunión de arranque (semana 1).",
  },
];

export default function PropuestaEcosistemaDigitalPage() {
  const [tab, setTab] = useState("full");
  const [tabFade, setTabFade] = useState(true);
  const [planLoading, setPlanLoading] = useState(false);
  const [pricePulse, setPricePulse] = useState(false);
  const [discountFlash, setDiscountFlash] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPlanSticky, setShowPlanSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("resumen");

  const active = useMemo(() => TABS.find((t) => t.id === tab) ?? TABS[3], [tab]);
  const planView = useMemo(() => PLAN_VIEWS[tab] ?? PLAN_VIEWS.full, [tab]);
  const activeDeliverables = useMemo(() => DELIVERABLES[tab] ?? null, [tab]);
  const ctaLabel = CTA_BY_TAB[tab] ?? CTA_BY_TAB.full;
  const planSavings = tab === "full" ? "$1,550" : null;

  useDeckReveal();

  const selectTab = useCallback((id) => {
    if (id === tab) return;
    setPlanLoading(true);
    setTabFade(false);
    if (id === "full") setDiscountFlash(true);
    setPricePulse(true);
    setTab(id);
    window.setTimeout(() => {
      setTabFade(true);
      setPlanLoading(false);
      setPricePulse(false);
    }, 150);
    window.setTimeout(() => setDiscountFlash(false), 700);
    document.getElementById("ventanas")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [tab]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      setShowStickyCta(window.scrollY > 420);
      setShowPlanSticky(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...NAV_LINKS.map((l) => l.href.slice(1)), "contacto"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.2, 0.45] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinkClass = (href) => {
    const id = href.slice(1);
    return `alianza-nav-link rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition-colors hover:bg-zinc-800/80 ${
      activeSection === id ? "eco-nav-link--active text-teal-300" : "text-zinc-400"
    }`;
  };

  const skeleton = planLoading ? "eco-plan-skeleton" : "";

  return (
    <main className="propuesta-supermercado alianza-page min-h-screen pb-20 antialiased md:pb-0">
      <div className="propuesta-progress" aria-hidden>
        <div className="propuesta-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <PlanStickyBar
        visible={showPlanSticky}
        label={active.label}
        investment={active.investment}
        savings={planSavings}
      />

      <nav
        className="eco-nav-mobile alianza-nav-bar sticky top-0 z-40 backdrop-blur-md md:hidden"
        aria-label="Navegación móvil"
      >
        <div className="eco-nav-scroll mx-auto flex max-w-3xl gap-1 overflow-x-auto px-3 py-2">
          {MOBILE_NAV.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <nav
        className="alianza-nav-bar sticky top-0 z-40 hidden backdrop-blur-md md:block"
        aria-label="Navegación de secciones"
      >
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-1 px-4 py-2">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="eco-hero relative w-full overflow-hidden">
        <EcoHeroBackground />
        <div className="relative z-[1] mx-auto flex min-h-[82vh] w-full max-w-3xl flex-col justify-center px-5 pb-12 pt-10 sm:px-8 md:pt-14">
        <div data-reveal className="is-visible">
          <p className="reveal-child alianza-eyebrow text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]" style={{ "--reveal-delay": 0 }}>
            Propuesta privada — {CLIENT_NAME}
          </p>
          <h1 className="reveal-child mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl" style={{ "--reveal-delay": 1 }}>
            <span className="block text-white">DE VENDER POR MENSAJES</span>
            <span className="alianza-hero-accent alianza-hero-glow block">
              a tener 3 marcas en piloto automático.
            </span>
          </h1>
          <p className="reveal-child mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg" style={{ "--reveal-delay": 2 }}>
            Hoy tienes tres negocios que dependen de que tú estés activo para funcionar. Lo que vamos a construir es
            diferente: un sistema donde la tienda vende sola, la membresía cobra sola y la comunidad crece sola. Tú
            sigues siendo la cara. Nosotros ponemos la infraestructura.
          </p>
          <a href="#ventanas" className={`reveal-child alianza-cta-pulse mt-8 inline-flex px-6 py-3 text-sm ${CTA_BTN}`} style={{ "--reveal-delay": 3 }}>
            Ver propuesta completa
          </a>
        </div>
        </div>
      </section>

      <PropuestaSection id="resumen" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Resumen en 30 segundos</h2>
        <Summary30Card />
      </PropuestaSection>

      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Lo que vamos a construir</h2>
        <p className="mt-3 text-sm text-zinc-300 sm:text-base">
          Tres sistemas de venta conectados a tu marca: Ecommerce + Ropa + Suplementos, Asesoramiento Deportivo +
          Membresía y Fondo de Inversión + Brokeraje. Cada uno genera ingresos; juntos multiplican el valor de tu
          audiencia.
        </p>
        <PlanRecommendations />
      </PropuestaSection>

      <PropuestaSection id="ventanas" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Elige qué quieres contratar</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Puedes contratar por separado o tomar el ecosistema integral.
        </p>
        <PlanChangeHint />

        <div className="eco-plan-tabs plan-tabs-scroll mt-6 rounded-xl border border-zinc-800 bg-zinc-900/35 p-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => selectTab(t.id)}
              className={`plan-tab ${
                tab === t.id ? "plan-tab--active" : ""
              } ${t.featured ? "plan-tab--featured" : ""}`}
            >
              <span className="eco-tab-label">{t.label}</span>
              {t.featured ? (
                <span className="eco-tab-badge" aria-hidden>
                  <span className="eco-tab-badge-line">Recomendado</span>
                  <span className="eco-tab-badge-line eco-tab-badge-line--accent">Ahorro $1,550</span>
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <div
          className={`propuesta-card alianza-tab-panel alianza-surface-panel mt-4 p-5 sm:p-6 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton} ${active.featured ? "alianza-combo-featured alianza-featured-pulse" : ""}`}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
            Inversión: <AnimatedPrice value={active.investment} pulse={pricePulse} className="text-base" />
          </p>
          <h3 className="mt-2 text-lg font-extrabold text-white sm:text-xl">{active.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{active.desc}</p>
          <ul className="reveal-stagger mt-4 space-y-2 text-sm text-zinc-300">
            {active.items.map((item, i) => (
              <li key={item} style={{ "--stagger-i": i }} className="flex gap-2">
                <span className="alianza-bullet">●</span>
                {item}
              </li>
            ))}
          </ul>
          {active.featured ? (
            <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-zinc-300">
              <strong className="alianza-money-label">Pack recomendado:</strong> pagas lo
              mismo precio que 3 proyectos sueltos ($5,700), pero pagas $4,500 con ahorro de $1,550 (incluye
              $1,200 en construcción + $350 en setup de campañas), los 3 sistemas conectados y 4 meses coordinados.
            </p>
          ) : null}
        </div>

        <article
          className={`propuesta-card mt-4 p-4 sm:p-5 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton}`}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Detalle del plan elegido</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {planView.summary.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="alianza-bullet">●</span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <DeliverablesBlock
          tab={tab}
          groups={DELIVERABLE_GROUPS}
          single={activeDeliverables ? { ...activeDeliverables, label: active.label } : null}
          tabFade={tabFade}
          loading={planLoading}
        />

        <div className={`propuesta-card alianza-tab-panel mt-4 p-4 sm:p-6 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton}`}>
          <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-400">Comparación rápida</h3>
          <PackComparator />
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div className="alianza-card-hover rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Contratando por separado</p>
              <p className="mt-2 text-zinc-300">3 frentes aislados, sin conectar audiencia ni campañas.</p>
            </div>
            <div className="alianza-card-hover rounded-lg border border-teal-500/35 bg-teal-500/10 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-300">Pack integral</p>
              <p className="mt-2 text-zinc-200">
                Una sola estrategia: captar, vender y retener en los tres frentes del pack.
              </p>
            </div>
          </div>
        </div>
      </PropuestaSection>

      <PropuestaSection id="inversion" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Inversión — {active.label}</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Total construcción:{" "}
          <AnimatedPrice value={active.investment} pulse={pricePulse} className="text-base" />
        </p>
        <ul
          className={`propuesta-card alianza-tab-panel mt-6 list-none divide-y divide-zinc-800 p-0 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton}`}
        >
          {planView.inversion.map(([label, amount]) => {
            const isDiscount = label.toLowerCase().includes("descuento") || amount.startsWith("-");
            const isTotal =
              label.toLowerCase().includes("total") || label.toLowerCase().includes("precio final");
            return (
              <li
                key={label}
                className={`flex items-center justify-between gap-4 px-4 py-3 sm:px-5 ${
                  isDiscount && discountFlash ? "eco-discount-flash rounded-lg" : ""
                }`}
              >
                <span className="text-sm text-zinc-300">{label}</span>
                <span
                  className={`text-sm ${
                    isDiscount
                      ? "font-extrabold text-emerald-300"
                      : isTotal
                        ? "alianza-money-value font-extrabold"
                        : "text-zinc-200"
                  }`}
                >
                  {amount}
                </span>
              </li>
            );
          })}
        </ul>
        <TotalCostBox tab={tab} />
      </PropuestaSection>

      <PropuestaSection id="pago" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Forma de pago — {active.label}</h2>
        <div
          className={`eco-pago-grid reveal-stagger mt-6 grid gap-3 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton}`}
        >
          {planView.pago.map(([label, amount], i) => (
            <article key={label} style={{ "--stagger-i": i }} className="propuesta-card alianza-card-hover p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</p>
              <p className="alianza-price mt-3 text-2xl font-extrabold">{amount}</p>
            </article>
          ))}
        </div>
      </PropuestaSection>

      <PropuestaSection id="cronograma" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Cronograma — {active.label}</h2>
        <CronogramaTimeline items={planView.cronograma} tabFade={tabFade} loading={planLoading} />
      </PropuestaSection>

      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Alcance del servicio</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="propuesta-card p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-300">Incluye</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {SCOPE_INCLUDED.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="alianza-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="propuesta-card p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-300">No incluye</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              {SCOPE_EXCLUDED.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-zinc-500">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </PropuestaSection>

      <PropuestaSection id="funcionamiento" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Cómo funciona</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          Tú creas contenido y cierras ventas. Nosotros construimos las páginas, cobros y automatizaciones que
          convierten ese contenido en ingresos. Dos rondas de revisión por frente. Tú eres la cara; Fluxa
          trabaja detrás.
        </p>
        <h3 className="mt-10 text-xl font-extrabold text-white">Por qué tiene sentido hacerlo todo junto</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          Tus tres marcas comparten el mismo activo: tú. Tu audiencia de fitness puede comprar
          suplementos y entrar a señales o membresía VIP. Si los tres sistemas están conectados, el esfuerzo
          de atraer clientes se reparte entre tres ingresos. No es solo gastar en webs: es invertir en un
          negocio que trabaja en paralelo.
        </p>

        <h3 className="mt-10 text-xl font-extrabold text-white">Quién hace qué</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {WHO_DOES_WHAT.map((block) => (
            <article key={block.who} className="propuesta-card p-5">
              <h4 className="text-sm font-bold uppercase tracking-wide text-teal-300">{block.who}</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="alianza-bullet">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PropuestaSection>

      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Semana 1 — qué pasa al decir que sí</h2>
        <WeekOneSteps />
      </PropuestaSection>

      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Lo que necesitamos de ti</h2>
        <p className="mt-2 text-sm text-zinc-400">
          No tienes que tener todo perfecto el día uno. Esto es el checklist ideal; te acompañamos a completarlo.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {CLIENT_ASSUMPTIONS.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="alianza-check">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </PropuestaSection>

      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Criterios de entrega — {active.label}
        </h2>
        <div className="mt-5 space-y-3">
          {planView.acceptance.map(([phase, criteria]) => (
            <article key={phase} className="propuesta-card p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-teal-300">{phase}</h3>
              <p className="mt-2 text-sm text-zinc-300">{criteria}</p>
            </article>
          ))}
        </div>
      </PropuestaSection>

      {planView.showLegal ? (
        <PropuestaSection className="!max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Nota legal y compliance</h2>
          <p className="mt-3 rounded-lg border border-amber-600/30 bg-amber-950/20 px-4 py-3 text-sm leading-relaxed text-zinc-300">
            El sistema de señales y membresía VIP es operación comercial digital. Esta propuesta no es
            asesoría financiera ni promesa de ganancias. Tú defines los mensajes con tu equipo legal; Fluxa monta
            páginas, cobros y canal privado.
          </p>
        </PropuestaSection>
      ) : null}

      <PropuestaSection className="!max-w-3xl">
        <SocialProofStrip />
      </PropuestaSection>

      <PropuestaSection id="faq" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
        <FaqAccordion items={FAQ_ITEMS} />
      </PropuestaSection>

      <section id="contacto" className="alianza-cta-footer px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Arrancamos?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400 sm:text-base">
            Escríbenos por WhatsApp. En menos de 48 h coordinamos una llamada de 20 minutos para resolver dudas y
            definir si empiezas por un frente o por el pack integral.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`alianza-cta-pulse mt-8 inline-flex px-8 py-3 text-sm ${CTA_BTN}`}
          >
            {ctaLabel}
          </a>
          <p className="mt-4 text-xs text-zinc-500">+57 311 642 5337 · Fluxa Method</p>
        </div>
      </section>

      <div
        className={`alianza-sticky-cta alianza-sticky-bar fixed bottom-0 left-0 right-0 z-50 p-3 backdrop-blur-md md:hidden ${showStickyCta ? "alianza-sticky-cta--visible" : "alianza-sticky-cta--hidden"}`}
      >
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`alianza-cta-pulse flex w-full justify-center py-3 text-sm ${CTA_BTN}`}
        >
          {ctaLabel}
        </a>
      </div>
    </main>
  );
}
