"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const AURORA_LOGO = "/imagenes/aurora-shop/logo/aurora-logo.png";
const PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "situacion", label: "Situación" },
  { id: "cambio", label: "Antes / Después" },
  { id: "por-que", label: "Partnersflux" },
  { id: "planes", label: "Planes" },
  { id: "mensual", label: "Mensual" },
  { id: "proyeccion", label: "Proyección" },
  { id: "tiempo", label: "Tiempo" },
  { id: "cierre", label: "Cierre" },
  { id: "agregados", label: "Agregados" },
];

const ADDONS = [
  {
    id: "pauta",
    title: "Acompañamiento de pauta",
    tag: "Agregado opcional",
    summary: "Tráfico calificado hacia el chat y hacia Shopify, con el bot listo para convertir.",
    benefits: [
      "Llevas gente nueva a WhatsApp / Instagram / TikTok con intención de compra, no solo likes.",
      "El bot + IA que montamos atiende esos leads 24/7: no pagas pauta para que el equipo se sature.",
      "Puedes segmentar campañas por detal vs mayorista y medir qué canal trae mejor ticket.",
      "La automatización deja de depender solo de tráfico orgánico: escalas cuando Aurora quiera vender más.",
    ],
    explain:
      "La automatización ordena y convierte. La pauta multiplica cuántas personas entran a ese sistema. Sin bot, la pauta satura. Sin pauta, el bot espera. Juntas, convierten atención en ventas medibles. El presupuesto de ads lo pone Aurora; Partnersflux acompaña estrategia, estructura y lectura de resultados.",
    wa: "Hola Partnersflux. Soy Aurora Shop. Me interesa el agregado de acompañamiento de pauta (opcional, aparte de la automatización).",
  },
  {
    id: "landings",
    title: "Desarrollo de landings",
    tag: "Agregado opcional",
    summary: "Páginas de alta conversión que impulsan el ecommerce Shopify de Aurora.",
    benefits: [
      "Una landing enfocada vende mejor que mandar todo el tráfico directo al catálogo general.",
      "Puedes lanzar colecciones, combos, liquidaciones o mayoristas con una oferta clara y un solo CTA.",
      "Conectan con Shopify (compra) y/o con el bot (WhatsApp/IG) según el objetivo de la campaña.",
      "Mejoran la tasa de conversión del ecommerce: menos distracción, más decisión de compra.",
      "Sirven de destino limpio para pauta: pagas por visitas que llegan a una página pensada para cerrar.",
    ],
    explain:
      "Shopify es tu tienda completa. Las landings son escaparates de una sola misión: convertir una campaña o un lanzamiento. Por ejemplo: “Nueva colección blazers”, “Combo 3×”, “Mayoristas — catálogo y MOQ”. El visitante entiende la oferta en segundos, agrega al carrito o escribe al chat automatizado. Así impulsas el ecommerce sin rediseñar toda la tienda cada vez que Aurora quiera empujar una línea.",
    wa: "Hola Partnersflux. Soy Aurora Shop. Me interesa el agregado de desarrollo de landings para impulsar el ecommerce (opcional, aparte de la automatización).",
  },
];

const PLANS = [
  {
    id: "a",
    name: "Setup Comercial",
    badge: "Entrada",
    featured: false,
    priceCop: "$3.600.000",
    priceUsd: "~$900 USD",
    time: "~2 semanas",
    includes: [
      "Auditoría de tu Pancake actual",
      "Botcake + OpenAI conectados",
      "IA básica (FAQ, políticas, tono de marca)",
      "2 flujos: retail + mayorista (filtro + tags)",
      "Hand-off a humano",
      "Capacitación 1 sesión",
      "15 días de ajustes",
    ],
    excludes: [
      "TikTok a profundidad",
      "Sync Shopify complejo",
      "Broadcasts / recuperación avanzada",
      "Pauta, landings o creativos",
      "Costos de plataformas",
    ],
    explain: [
      "Hoy muchos mensajes llegan iguales: “¿tienen esta talla?”, “¿hacen envíos?”, “¿venden al por mayor?”. Eso satura al equipo y hace que se pierdan conversaciones, sobre todo fuera de horario.",
      "Con este plan armamos tu primer sistema de automatización en WhatsApp e Instagram: el bot pregunta si compra al detal o al por mayor, lo etiqueta y lo lleva por un camino distinto. La IA responde lo repetido y, si el caso es complejo, pasa a tu equipo sin perder el contexto.",
      "Ideal si quieren empezar ya y validar el sistema antes de subir a omnicanal + Shopify.",
    ],
    wa: "Hola Partnersflux. Soy Aurora Shop. Quiero avanzar con el Paquete A — Setup Comercial ($3.600.000 COP).",
  },
  {
    id: "b",
    name: "Omnicanal + IA",
    badge: "Recomendado",
    featured: true,
    priceCop: "$5.500.000",
    priceUsd: "~$1.375 USD",
    time: "3–4 semanas",
    includes: [
      "Todo lo del Paquete A",
      "Canales: WhatsApp + Instagram + TikTok",
      "IA entrenada con catálogo y reglas detal/mayor",
      "Segmentación: retail · mayorista · VIP",
      "Toma de pedido en chat",
      "Sync Shopify → Pancake POS → Botcake",
      "Templates base de WhatsApp",
      "2–3 seguimientos (abandono de chat / follow-up)",
      "Capacitación 2 sesiones",
      "30 días de optimización",
    ],
    excludes: [
      "Pauta, landings o creativos",
      "Costos de plataformas",
      "Negociación de precios mayoristas",
      "Soporte ilimitado después de 30 días",
    ],
    explain: [
      "Este es el plan pensado para cómo opera Aurora de verdad: tienda online en Shopify, puntos físicos, venta al detal y al por mayor, y mensajes llegando por varios canales.",
      "No solo “activamos un bot”. Construimos tu operación comercial automatizada: atiendes en WhatsApp, Instagram y TikTok con la misma lógica; el bot se apoya en tu catálogo real de Shopify; el detal puede avanzar más solo; el mayorista se califica y va a un asesor.",
      "Durante 30 días afinamos con chats reales. Menos carga operativa, mejor atención fuera de horario, mayoristas mejor identificados y menos leads muertos.",
    ],
    wa: "Hola Partnersflux. Soy Aurora Shop. Quiero avanzar con el Paquete B — Omnicanal + IA ($5.500.000 COP), el recomendado.",
  },
  {
    id: "c",
    name: "Operación completa",
    badge: "Máximo",
    featured: false,
    priceCop: "$8.500.000",
    priceUsd: "~$2.125 USD",
    time: "45–60 días de acompañamiento",
    includes: [
      "Todo lo del Paquete B",
      "Broadcasts segmentados (detal vs mayor)",
      "Postventa automática: confirmación, envío, recompra",
      "Carrito abandonado Shopify → WhatsApp",
      "Flujos por etapa del pedido",
      "Acompañamiento 45–60 días",
    ],
    excludes: [
      "Pauta, landings o creativos",
      "Presupuesto de mensajes Meta",
      "Costos OpenAI / Pancake / Botcake",
    ],
    explain: [
      "Aquí automatizamos el ciclo completo del cliente en mensajería, no solo la primera respuesta.",
      "Desde que alguien escribe o deja un carrito en Shopify, hasta que compra, recibe confirmación, updates de pedido y un mensaje de recompra. También puedes comunicar distinto a detal y a mayoristas.",
      "Es el plan si quieren que WhatsApp, Instagram y TikTok funcionen como canal de ventas y postventa automatizado de punta a punta — sin publicidad ni páginas web.",
    ],
    wa: "Hola Partnersflux. Soy Aurora Shop. Quiero avanzar con el Paquete C — Operación completa ($8.500.000 COP).",
  },
];

const SITUATION = [
  "118K seguidores generan un volumen de mensajes que hoy nadie alcanza a cubrir",
  "Detal y mayorista llegan mezclados en la misma bandeja, y un mayorista serio se puede perder entre cien preguntas de talla",
  "Contratar y entrenar gente nueva a tiempo para la temporada alta es un riesgo que no vale la pena correr",
];

const BEFORE_AFTER_ROWS = [
  {
    label: "Atención",
    before: "Depende de que haya alguien disponible",
    after: "Responde al instante, 24/7",
  },
  {
    label: "Detal vs mayorista",
    before: "Se mezclan y se pierden",
    after: "Se clasifican solos desde el primer mensaje",
  },
  {
    label: "Preguntas repetidas",
    before: "Consumen el tiempo del equipo",
    after: "Las resuelve la IA",
  },
  {
    label: "Casos complejos",
    before: "Se quedan en la fila",
    after: "Pasan a una persona, con contexto completo",
  },
  {
    label: "Carrito abandonado",
    before: "Sin seguimiento",
    after: "Recordatorio automático por WhatsApp",
  },
  {
    label: "Diciembre",
    before: "Requiere contratar ya",
    after: "El sistema ya está corriendo",
  },
];

const WHY_US = [
  {
    title: "Dr. Bello / Funciona+",
    text: "Con Dr. Bello / Funciona+, integramos Shopify con automatización conversacional para una marca que vende productos físicos con pedidos recurrentes, la misma arquitectura que necesita Aurora entre catálogo, inventario y chat.",
  },
  {
    title: "GAL’s Studio",
    text: "Con GAL’s Studio, montamos flujos por palabra clave que filtran y clasifican automáticamente a cada cliente según su intención, sin que nadie tenga que estar monitoreando el chat en tiempo real.",
  },
];

function DecorLayer() {
  return (
    <div className="aurora-decor" aria-hidden>
      <div className="aurora-sky" />
      <div className="aurora-wash aurora-wash--1" />
      <div className="aurora-wash aurora-wash--2" />
      <div className="aurora-brush" />
      <div className="aurora-dots aurora-dots--left" />
      <div className="aurora-dots aurora-dots--right" />
      <div className="aurora-rose-bar" />
      <div className="aurora-grain" />
    </div>
  );
}

function SectionBlock({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${className}`}>
      <div data-reveal className="aurora-reveal mx-auto w-full max-w-[var(--aurora-max)]">
        {(eyebrow || title || subtitle) && (
          <header className="max-w-3xl">
            {eyebrow ? <p className="aurora-eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h2 className="aurora-display mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.65rem]">{title}</h2>
            ) : null}
            {subtitle ? <p className="aurora-lead mt-4 max-w-2xl">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaAuroraShopPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [showStickyCta, setShowStickyCta] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.backgroundColor;
    const prevBody = body.style.backgroundColor;
    html.style.backgroundColor = "#f7f1eb";
    body.style.backgroundColor = "#f7f1eb";
    return () => {
      html.style.backgroundColor = prevHtml;
      body.style.backgroundColor = prevBody;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
      setShowStickyCta(window.scrollY > window.innerHeight * 0.55);

      const decor = document.querySelector(".aurora-decor");
      if (decor) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (reduceMotion || isMobile) {
          decor.style.setProperty("--aurora-parallax", "0px");
        } else {
          const y = window.scrollY * 0.12;
          decor.style.setProperty("--aurora-parallax", `${y}px`);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll("[data-stagger]").forEach((child, i) => {
              child.style.setProperty("--stagger", `${i * 0.08}s`);
              child.classList.add("is-staggered");
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
    document.querySelectorAll("#hero [data-reveal]").forEach((el) => {
      el.classList.add("is-visible");
      el.querySelectorAll("[data-stagger]").forEach((child, i) => {
        child.style.setProperty("--stagger", `${i * 0.1}s`);
        child.classList.add("is-staggered");
      });
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  const ctaHero = waUrl(
    "Hola Partnersflux. Soy Aurora Shop (@aurora_shopcyf). Revisé la propuesta de Sistema de Atención Automatizada y quiero conversar."
  );
  const ctaB = waUrl(PLANS[1].wa);
  const ctaMensual = waUrl(
    "Hola Partnersflux. Soy Aurora Shop. Quiero conocer más del mantenimiento mensual opcional ($750.000 COP / mes)."
  );

  return (
    <main className="aurora-page">
      <DecorLayer />

      <div className="aurora-content">
        <div className="aurora-progress fixed left-0 top-0 z-50 w-full">
          <div className="aurora-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <nav className="aurora-nav sticky top-0 z-40">
          <div className="mx-auto flex w-full max-w-[var(--aurora-max)] items-center gap-2.5 overflow-x-auto px-4 py-3 sm:px-6">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--aurora-muted)]">
              Aurora
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`aurora-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  activeSection === item.id ? "aurora-nav-link--active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section id="hero" className="aurora-hero scroll-mt-28">
          <div className="aurora-hero-bleed">
            <div className="mx-auto grid w-full max-w-[var(--aurora-max)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
              <div data-reveal className="aurora-reveal aurora-hero-copy">
                <div className="aurora-logo-wrap aurora-logo-wrap--hero" data-stagger>
                  <Image
                    src={AURORA_LOGO}
                    alt="Aurora Shop"
                    width={360}
                    height={180}
                    className="h-auto w-56 sm:w-72 lg:w-80"
                    priority
                  />
                </div>

                <p className="aurora-hero-brandmark mt-5" data-stagger>
                  Aurora Shop
                </p>

                <span className="aurora-badge aurora-badge--pulse mt-6 inline-flex" data-stagger>
                  Sistema de Atención Automatizada
                </span>

                <div className="aurora-hero-partner mt-5" data-stagger>
                  <Image src={PARTNERS_LOGO} alt="Partnersflux" width={100} height={32} className="h-6 w-auto opacity-70" />
                  <span>Partnersflux</span>
                </div>

                <p className="aurora-eyebrow mt-7" data-stagger>
                  Propuesta Aurora Shop — Sistema de Atención Automatizada
                </p>

                <h1 className="aurora-display aurora-hero-title mt-4 max-w-3xl" data-stagger>
                  Cada mensaje que no respondes a tiempo es una venta perdida.
                </h1>
                <p className="aurora-lead mt-6 max-w-2xl text-base sm:text-lg" data-stagger>
                  Aurora tiene 118 mil seguidores y el tráfico para vender mucho más de lo que vende hoy. Lo que falta no
                  es demanda, es un sistema que atienda cada mensaje al instante, clasifique entre detal y mayorista, y
                  lo lleve solo hacia el pedido, sin importar la hora ni si hay alguien disponible para responder.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3" data-stagger>
                  <a
                    href={ctaB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aurora-btn-solid aurora-btn-glow inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
                  >
                    Quiero el plan recomendado →
                  </a>
                  <a
                    href="#planes"
                    className="aurora-btn-outline inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
                  >
                    Ver planes
                  </a>
                </div>

                <p
                  className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-[var(--aurora-muted-light)]"
                  data-stagger
                >
                  Solo automatización · Sin pauta · Sin landings en el setup
                </p>
              </div>

              <div className="aurora-hero-visual" data-reveal>
                <div className="aurora-chat-mock" aria-hidden>
                  <div className="aurora-chat-mock__bar">
                    <span className="aurora-chat-mock__dot" />
                    <span>WhatsApp · Aurora Shop</span>
                  </div>
                  <div className="aurora-chat-mock__thread">
                    <p className="aurora-chat-bubble aurora-chat-bubble--in">Hola, ¿tienen esta blazer en M?</p>
                    <p className="aurora-chat-bubble aurora-chat-bubble--out">
                      ¡Hola! Sí, la tenemos disponible en M. ¿Te la apartamos para envío o la recoges en tienda?
                    </p>
                    <p className="aurora-chat-bubble aurora-chat-bubble--in">Para envío, por favor</p>
                    <p className="aurora-chat-bubble aurora-chat-bubble--out">
                      Perfecto. Para darte el precio y el proceso correcto: ¿compras al detal o eres mayorista?
                    </p>
                    <div className="aurora-chat-choices">
                      <span>Detal</span>
                      <span>Mayorista</span>
                    </div>
                    <p className="aurora-chat-bubble aurora-chat-bubble--in">Detal</p>
                    <p className="aurora-chat-bubble aurora-chat-bubble--out">
                      Listo. Te dejo link de pago y datos de envío para cerrar el pedido.
                    </p>
                  </div>
                  <p className="aurora-chat-mock__foot">Clasifica · Responde · Lleva al pedido · 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SITUACIÓN */}
        <SectionBlock id="situacion" eyebrow="01 — La situación" title="La situación">
          <ol className="aurora-editorial-list">
            {SITUATION.map((item, index) => (
              <li key={item} className="aurora-editorial-item" data-stagger>
                <span className="aurora-editorial-num">{String(index + 1).padStart(2, "0")}</span>
                <p className="aurora-editorial-text">{item}</p>
              </li>
            ))}
          </ol>
        </SectionBlock>

        {/* ANTES / DESPUÉS */}
        <SectionBlock id="cambio" eyebrow="02 — Antes / Después" title="Antes / Después">
          <div className="aurora-compare">
            <div className="aurora-compare-head">
              <span className="aurora-compare-label-spacer" />
              <span>Hoy</span>
              <span className="aurora-compare-after-label">Con el sistema instalado</span>
            </div>
            {BEFORE_AFTER_ROWS.map((row) => (
              <div key={row.label} className="aurora-compare-row" data-stagger>
                <p className="aurora-compare-metric">{row.label}</p>
                <div className="aurora-compare-before">
                  <span className="aurora-chip aurora-chip--before mb-2 sm:hidden">Hoy</span>
                  <p>{row.before}</p>
                </div>
                <div className="aurora-compare-after">
                  <span className="aurora-chip aurora-chip--after mb-2 sm:hidden">Con el sistema instalado</span>
                  <p>{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* POR QUÉ */}
        <SectionBlock id="por-que" eyebrow="03 — Por qué Partnersflux" title="Por qué Partnersflux">
          <p className="aurora-editorial-lead" data-stagger>
            No llegamos a instalar un bot genérico. Ya construimos sistemas de automatización para marcas que atienden
            alto volumen de mensajes en categorías distintas: moda, bienestar y salud.
          </p>

          <div className="aurora-cases">
            {WHY_US.map((item) => (
              <article key={item.title} className="aurora-case" data-stagger>
                <h3 className="aurora-display aurora-case-title">{item.title}</h3>
                <p className="aurora-case-text">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="aurora-editorial-close" data-stagger>
            Cada marca tiene un comprador distinto y una lógica de venta distinta. Lo que no cambia es el problema de
            fondo: mensajes que llegan más rápido de lo que un equipo humano puede responder. Ese es exactamente el
            sistema que sabemos instalar.
          </p>
        </SectionBlock>

        {/* PLANES */}
        <SectionBlock
          id="planes"
          eyebrow="04 — Inversión"
          title="Tres planes. Una sola promesa: automatizar."
        >
          <div className="aurora-after-card mb-8" data-stagger>
            <span className="aurora-chip aurora-chip--after">Forma de pago</span>
            <p className="mt-3 text-sm leading-relaxed text-[var(--aurora-heading)] sm:text-[15px]">
              <strong>Todos los planes (A, B y C) se pueden pagar en 2 cuotas:</strong> 50% al firmar y 50% al go-live.
              Así arrancan sin desembolsar el total de una sola vez.
            </p>
          </div>

          <div className="aurora-plans-grid">
            {PLANS.map((plan) => (
              <article
                key={plan.id}
                data-stagger
                className={`aurora-card flex flex-col p-6 sm:p-7 ${plan.featured ? "aurora-card--featured aurora-card--featured-lift" : "aurora-card--quiet"}`}
              >
                <p className="aurora-eyebrow">{plan.badge}</p>
                <h3 className="aurora-display mt-2 text-2xl sm:text-[1.75rem]">{plan.name}</h3>
                <p className="aurora-price-cop mt-4">{plan.priceCop} COP</p>
                <p className="aurora-price-usd mt-1">{plan.priceUsd}</p>
                <p className="aurora-muted mt-2 text-xs font-medium uppercase tracking-[0.12em]">{plan.time}</p>
                <p className="mt-2 text-xs font-semibold text-[var(--aurora-accent-deep)]">
                  Pago en 2 cuotas · 50% al firmar · 50% al go-live
                </p>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--aurora-heading)]">Incluye</p>
                  <ul className="mt-3 space-y-2">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--aurora-text)]">
                        <span className="aurora-check shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--aurora-muted)]">No incluye</p>
                  <ul className="mt-3 space-y-2">
                    {plan.excludes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--aurora-muted)]">
                        <span className="aurora-x shrink-0">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="aurora-explain">
                  <p className="aurora-explain-label">Explicación para ti</p>
                  <div className="mt-2 space-y-3">
                    {plan.explain.map((p) => (
                      <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-[var(--aurora-text)]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href={waUrl(plan.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${
                    plan.featured ? "aurora-btn-solid aurora-btn-glow" : "aurora-btn-outline"
                  }`}
                >
                  Elegir {plan.name} →
                </a>
              </article>
            ))}
          </div>

          <p className="aurora-saas-note mt-8">
            <strong className="text-[var(--aurora-heading)]">Importante:</strong> solo automatización (sin pauta ni
            landings). Las herramientas (Pancake, Botcake, OpenAI, Meta) las paga Aurora aparte.{" "}
            <strong className="text-[var(--aurora-heading)]">
              Todos los planes en 2 cuotas: 50% al firmar · 50% al go-live.
            </strong>
          </p>
        </SectionBlock>

        {/* MENSUAL */}
        <SectionBlock
          id="mensual"
          eyebrow="05 — Continuidad"
          title="Mantenimiento mensual"
          subtitle="Opcional. Solo si quieren que Partnersflux mantenga el bot al día después del setup."
        >
          <div className="aurora-main-card max-w-2xl p-6 sm:p-9" data-stagger>
            <span className="aurora-badge">Opcional</span>
            <p className="aurora-price-cop mt-4">$750.000 COP / mes</p>
            <p className="aurora-price-usd mt-1">~$188 USD</p>

            <p className="mt-5 text-sm leading-relaxed text-[var(--aurora-text)] sm:text-[15px]">
              Cuando cambian productos, precios o reglas, actualizamos el bot para que no se quede viejo. Sin
              mantenimiento, en poco tiempo el equipo vuelve a responder todo a mano.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Actualizar el bot cuando cambie el catálogo",
                "Revisar chats que fallaron (1 vez por semana)",
                "Ajustar flujos según lo que esté pasando",
                "Reporte simple de cómo va la automatización",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed">
                  <span className="aurora-check shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={ctaMensual}
              target="_blank"
              rel="noopener noreferrer"
              className="aurora-btn-outline mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Quiero el mensual (opcional) →
            </a>
          </div>
        </SectionBlock>

        {/* PROYECCIÓN */}
        <SectionBlock
          id="proyeccion"
          eyebrow="06 — La proyección"
          title="Menos que un mes de nómina. Sin el riesgo de volver a empezar."
          subtitle="Reemplazar el equipo que renunció cuesta entre $5M y $9M COP al mes en nómina, sin contar selección ni entrenamiento — tiempo que hoy no hay."
        >
          <div className="aurora-stat-block" data-stagger>
            <p className="aurora-stat-kicker">Paquete B</p>
            <p className="aurora-stat-number">$5.500.000</p>
            <p className="aurora-stat-unit">COP · menos que un mes de nómina</p>
            <p className="aurora-stat-copy">
              El <strong>Paquete B</strong> cuesta menos que un mes de esa nómina. Y una vez instalado, no renuncia, no
              tiene mal día y vende mientras el equipo duerme.
            </p>
          </div>
        </SectionBlock>

        {/* TIEMPO */}
        <SectionBlock
          id="tiempo"
          eyebrow="07 — El tiempo corre"
          title="Hoy es septiembre. Diciembre no espera."
          subtitle="El Paquete B toma entre 3 y 4 semanas de implementación más 30 días de ajuste con chats reales."
        >
          <div className="aurora-after-card" data-stagger>
            <p className="text-sm leading-relaxed text-[var(--aurora-heading)] sm:text-[15px]">
              Si arrancamos esta semana, el sistema llega probado y afinado antes de que empiece la temporada alta de
              diciembre. Cada semana que se aplaza es una semana menos de margen para probarlo con tráfico real antes del
              momento que más importa.
            </p>
          </div>
        </SectionBlock>

        {/* CIERRE */}
        <SectionBlock
          id="cierre"
          eyebrow="08 — Siguiente paso"
          title="Recomendación para Aurora"
          subtitle="Paquete B — Omnicanal + IA ($5.500.000 COP · ~$1.375 USD) + mensual opcional. Todos los planes en 2 cuotas: 50% al firmar · 50% al go-live."
        >
          <div className="aurora-main-card flex flex-col items-start gap-6 p-6 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="aurora-muted text-sm leading-relaxed sm:text-[15px]">
                118K seguidores ya generan demanda. Falta el sistema que atienda, clasifique y convierta — antes de que
                diciembre llegue sin margen.
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--aurora-muted-light)]">
                @aurora_shopcyf · aurorashops.com.co
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={ctaB}
                target="_blank"
                rel="noopener noreferrer"
                className="aurora-btn-solid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Confirmar Paquete B →
              </a>
              <a
                href={ctaHero}
                target="_blank"
                rel="noopener noreferrer"
                className="aurora-btn-outline inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Resolver dudas
              </a>
            </div>
          </div>
        </SectionBlock>

        {/* AGREGADOS FINALES — al final de todo */}
        <SectionBlock
          id="agregados"
          eyebrow="09 — Agregados finales"
          title="Cuando quieran escalar más allá de la automatización"
          subtitle="Opcionales. No forman parte de los planes A, B o C. Se cotizan y activan aparte, cuando Aurora lo decida."
        >
          <div className="aurora-addons-grid">
            {ADDONS.map((addon) => (
              <article key={addon.id} className="aurora-addon flex flex-col" data-stagger>
                <span className="aurora-badge">{addon.tag}</span>
                <h3 className="aurora-display mt-4 text-2xl">{addon.title}</h3>
                <p className="aurora-muted mt-3 text-sm leading-relaxed">{addon.summary}</p>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--aurora-heading)]">
                  Cómo beneficia al negocio
                </p>
                <ul className="mt-3 space-y-2.5">
                  {addon.benefits.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--aurora-text)]">
                      <span className="aurora-check shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="aurora-explain mt-6">
                  <p className="aurora-explain-label">Explicación para ti</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--aurora-text)]">{addon.explain}</p>
                </div>

                <a
                  href={waUrl(addon.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aurora-btn-outline mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                >
                  Preguntar por {addon.title.toLowerCase()} →
                </a>
              </article>
            ))}
          </div>
        </SectionBlock>

        <div className={`aurora-sticky-cta ${showStickyCta ? "is-visible" : ""}`}>
          <a href={ctaB} target="_blank" rel="noopener noreferrer" className="aurora-btn-solid aurora-btn-glow">
            Quiero el plan recomendado →
          </a>
        </div>
      </div>
    </main>
  );
}
