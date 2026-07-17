"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function fluxaMediaAfterIndex(media = []) {
  return media.reduce((acc, item) => {
    if (!acc[item.afterIndex]) acc[item.afterIndex] = [];
    acc[item.afterIndex].push(item);
    return acc;
  }, {});
}

function FluxaInlineList({ items, media = [] }) {
  const mediaByIndex = fluxaMediaAfterIndex(media);

  return (
    <div className="gals-muted mt-4 space-y-2 text-sm leading-relaxed">
      {items.map((item, idx) => (
        <div key={item} className="space-y-3">
          <p className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </p>
          {(mediaByIndex[idx] || []).map((entry) => (
            <div key={entry.src} className="gals-fluxa-visual pl-4 sm:pl-5">
              <Image
                src={entry.src}
                alt={entry.alt}
                width={1200}
                height={675}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const WHATSAPP_URL = "https://wa.me/56982556906";
const WHATSAPP_SCHEDULE_MESSAGE =
  "Hola, soy Opticallery. Revisé la propuesta Fluxa y quiero agendar una llamada.";
const OPTICALLERY_LOGO = "/imagenes/opticallery/logo.png";
const FLUXA_PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const CONNECT_360_LOGO = "/imagenes/opticallery/logo2.png";

function waUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "beneficios", label: "Beneficios" },
  { id: "fluxa", label: "Ecosistema" },
  { id: "solucion", label: "Cómo funciona" },
  { id: "probador", label: "Probador virtual" },
  { id: "inversion", label: "Inversión" },
  { id: "cierre", label: "Cierre" },
];

const TRYON_PRICE_COP = 2599000;

const PLAN_VALUE_LINES = [
  { label: "Probador Virtual de Lentes", amount: TRYON_PRICE_COP },
  { label: "Automatización WhatsApp e Instagram", amount: 2800000 },
  { label: "Email marketing (captación, promos, carritos)", amount: 1600000 },
  { label: "Pauta y captación (gestión Meta Ads)", amount: 2500000 },
  { label: "Sistema UGC (3–5 creadores)", amount: 2200000 },
  { label: "Laboratorio de contenido orgánico", amount: 1800000 },
  { label: "Acompañamiento y reportes", amount: 1500000 },
];

const PLAN_PRICE_NORMAL_COP = PLAN_VALUE_LINES.reduce((sum, line) => sum + line.amount, 0);
const PLAN_PRICE_COP = 4899000;

const PLAN_WA_MESSAGE =
  "Hola Fluxa. Soy Opticallery. Revisé el plan con Probador Virtual y el ecosistema completo. Quiero coordinar el siguiente paso.";

const TRYON_WA_MESSAGE = PLAN_WA_MESSAGE;

const TRYON_POINTS = [
  {
    title: "Se integra al catálogo actual",
    desc: "Botón “Pruébatelos” en cada producto. Sin rediseñar la tienda ni migrar de plataforma.",
  },
  {
    title: "Foto propia o cámara",
    desc: "El cliente sube una imagen o toma una en el momento. El sistema detecta el rostro y los ojos.",
  },
  {
    title: "Montura realista",
    desc: "Ajusta tamaño, ángulo y color del modelo seleccionado sobre la foto, en segundos.",
  },
  {
    title: "Más conversión, menos devoluciones",
    desc: "Elimina la incertidumbre de comprar lentes online y deja probar varias monturas sin salir de la página.",
  },
];

const TRYON_VIDEO = "/imagenes/opticallery/probador/demo-probador.mp4";

const TRYON_SUPPORT = [
  {
    src: "/imagenes/opticallery/probador/apoyo-montura.png",
    alt: "Montura del catálogo con variantes de color",
    caption: "Catálogo y color de montura",
  },
  {
    src: "/imagenes/opticallery/probador/apoyo-resultado.png",
    alt: "Probador virtual con montura superpuesta sobre el rostro",
    caption: "Prueba en el rostro del cliente",
  },
];

function formatCOP(n) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

const ROADMAP_ITEMS = [
  {
    num: 1,
    title: "UGC y contenido con destino",
    desc: "Calendario de 3 pilares + creadores reales en contexto. Cada reel, story y highlight deriva al bot o a WhatsApp — no solo likes.",
  },
  {
    num: 2,
    title: "Automatización en WhatsApp, Instagram y email",
    desc: "Flujos retail, membresía y B2B por chat, más emails de captación, promociones y recuperación de carrito a las 2h, 24h y 48h.",
  },
  {
    num: 3,
    title: "Meta Ads a escala",
    desc: "Cuatro campañas con destinos propios: e-commerce, membresía, captación B2B en Santiago y retargeting — alimentadas con creativos UGC.",
  },
];

const PACKAGES = [
  {
    tier: "Plan único",
    name: "FLUXA OPTICALLERY",
    subtitle: "Probador Virtual + ecosistema completo",
    idealFor:
      "Un solo plan: Probador Virtual de Lentes más bots, email marketing, UGC, contenido y Meta Ads — todo conectado bajo marca Opticallery.",
    recommended: true,
    price: PLAN_PRICE_COP,
    priceNormal: PLAN_PRICE_NORMAL_COP,
    priceNote: "Precio con descuento · implementación única",
    valueLines: PLAN_VALUE_LINES,
    sections: [
      {
        label: "Probador Virtual de Lentes",
        items: [
          "Botón “Pruébatelos” en fichas de producto del e-commerce",
          "El cliente sube una foto o usa la cámara y ve cómo le quedan las monturas",
          "Ajuste automático de tamaño, ángulo y color sobre el rostro",
          "Compatible con el catálogo existente — sin rediseñar ni migrar la tienda",
        ],
      },
      {
        label: "Automatización WhatsApp e Instagram",
        items: [
          "Bot en Instagram: clasifica consultas retail y deriva al producto",
          "WhatsApp con flujos retail, membresía y B2B separados",
          "Recuperación automática de carrito a las 2h, 24h y 48h",
          "Respuestas automáticas a comentarios en publicaciones",
          "Configuración Meta Pixel para medir conversiones",
        ],
      },
      {
        label: "Email marketing",
        items: [
          "Secuencias de captación para nuevos leads y suscriptores",
          "Correos de promociones, lanzamientos y ofertas del catálogo",
          "Recuperación de carritos abandonados por email (2h, 24h, 48h)",
          "Flujos de bienvenida, membresía y reactivación de clientes inactivos",
          "Segmentación por interés: retail, membresía y B2B",
        ],
      },
      {
        label: "Pauta y captación",
        items: [
          "Meta Ads gestionados — tráfico hacia bots y catálogo",
          "Campaña e-commerce con lentes de sol como producto de entrada",
          "Campaña membresía + captación B2B en Santiago",
          "Retargeting de visitantes sin compra con creativos UGC",
          "Creativos iniciales + optimización de campaña",
        ],
      },
      {
        label: "Sistema UGC",
        items: [
          "3–5 creadores en contextos reales con marcas premium",
          "Piezas listas para reels, stories y campañas de pauta",
        ],
      },
      {
        label: "Contenido orgánico",
        items: [
          "Calendario con 3 pilares: educación, prueba social y conversión",
          "Scripts de reels con palabra clave al bot o WhatsApp",
        ],
      },
      {
        label: "Acompañamiento",
        items: [
          "Reporte mensual de resultados",
          "Sesión estratégica mensual",
        ],
      },
    ],
    cta: "Quiero este plan",
    waMessage: PLAN_WA_MESSAGE,
  },
];

const RESULT_ITEMS = [
  "Un e-commerce que vende mientras la tienda está cerrada",
  "La membresía funcionando como ingreso recurrente real",
  "Cero leads perdidos por WhatsApp o DM sin respuesta",
];

const FLUXA_BLOCKS = [
  {
    title: "Sistema UGC",
    items: [
      "Reclutamiento y brief de 3–5 creadores en contextos reales (tienda, oficina, uso diario)",
      "Unboxing y prueba de marcas premium: Oakley, Ray-Ban, Armani, Carrera, Nike, Polaroid",
      "Piezas listas para reels, stories y campañas de pauta",
      "Contenido auténtico que compite por confianza — no solo por producción pulida",
      "Derechos de uso para Meta Ads sin rodajes adicionales cada mes",
    ],
  },
  {
    title: "Automatización WhatsApp e Instagram",
    image: "/imagenes/opticallery/bot.png",
    imageAlt: "Bot de automatización Opticallery — flujos retail, membresía y B2B en WhatsApp e Instagram",
    items: [
      "Flujo retail: consulta de producto → recomendación → carrito o link de compra",
      "Flujo membresía: beneficios → precio → link de pago y seguimiento hasta activación",
      "Flujo B2B: interés corporativo → cotización → agendamiento del operativo en empresa",
      "Bot en Instagram: clasifica DMs por intención y deriva al destino correcto",
      "Recuperación automática de carrito por WhatsApp a las 2h, 24h y 48h",
      "Respuestas automáticas a comentarios en publicaciones con CTA al bot",
    ],
  },
  {
    title: "Email marketing",
    items: [
      "Secuencias de captación para leads nuevos y suscriptores del catálogo",
      "Correos de promociones, lanzamientos y ofertas por temporada",
      "Recuperación de carritos abandonados por email (2h, 24h, 48h)",
      "Flujos de bienvenida, membresía y reactivación de clientes inactivos",
      "Segmentación por intención: retail, membresía y B2B",
      "Medición de aperturas, clics y conversiones del flujo de email",
    ],
  },
  {
    title: "Laboratorio de contenido orgánico",
    items: [
      "Calendario mensual con arquitectura de 3 pilares: educación, prueba social y conversión",
      "Educación visual: polarizado vs UV400, monofocal vs multifocal, cuándo cambiar tus lentes",
      "Prueba social: clientes reales, testimonios, unboxing y antes/después de estilo",
      "Conversión: ofertas, membresía, operativo B2B y envío gratis como gancho",
      "Scripts de reels con palabra clave que activa el bot o WhatsApp",
      "Highlights y bio alineados al embudo — cada pieza con destino, no solo likes",
    ],
  },
  {
    title: "Meta Ads y pauta pagada",
    items: [
      "Campaña e-commerce — lentes de sol como producto de entrada y mayor volumen",
      "Captación B2B segmentada a empresas en Santiago",
      "Pauta de membresía orientada a recurrencia y mayor LTV del catálogo",
      "Retargeting de visitantes que no compraron — creativos de urgencia y envío gratis",
      "UGC de creadores reales como combustible creativo de todas las campañas",
      "Reporte mensual: CPA, ROAS, leads por canal y recomendaciones de optimización",
    ],
  },
];

function flattenPackageSections(sections) {
  return sections.flatMap((section) => section.items);
}

function PackageCheckList({ items }) {
  return (
    <ul className="gals-package-list">
      {items.map((item) => (
        <li key={item} className="gals-package-item">
          <span className="gals-package-check" aria-hidden>
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PackageIncludes({ pkg }) {
  const totalItems = flattenPackageSections(pkg.sections).length;

  return (
    <div className="gals-package-includes mt-6 flex-1">
      <div className="gals-package-includes-head">
        <p className="gals-package-includes-title">Qué incluye</p>
        <span className="gals-package-includes-count">{totalItems} entregables</span>
      </div>

      <div className="gals-package-sections">
        {pkg.sections.map((section) => (
          <div key={section.label} className="gals-package-section">
            <p className="gals-package-section-label">{section.label}</p>
            <PackageCheckList items={section.items} />
          </div>
        ))}
      </div>
    </div>
  );
}

function staggerStyle(index, step = 90) {
  return { "--delay": `${index * step}ms` };
}

function SectionBlock({ id, eyebrow, title, subtitle, children, elevated = false, alt = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "gals-section-alt" : ""}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${elevated ? "gals-card rounded-2xl p-7 sm:p-10" : ""}`}>
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="gals-reveal gals-reveal-header max-w-3xl">
            {eyebrow ? <p className="gals-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="gals-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2> : null}
            {subtitle ? <p className="gals-lead">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

function RoadmapPhase({ item, index, isLast }) {
  return (
    <div
      className="gals-timeline-phase gals-stagger relative flex gap-5 pb-10 last:pb-0"
      style={staggerStyle(index, 120)}
    >
      {!isLast ? (
        <span className="gals-timeline-line absolute left-[15px] top-9 bottom-0 w-px" aria-hidden />
      ) : null}
      <span className="gals-timeline-dot relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
        {item.num}
      </span>
      <article className="gals-card min-w-0 flex-1 rounded-xl p-5">
        <h3 className="gals-section-label text-lg font-semibold">{item.title}</h3>
        <p className="gals-muted mt-2 text-sm leading-relaxed">{item.desc}</p>
      </article>
    </div>
  );
}

export default function OpticalleryPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
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
      { threshold: 0.35, rootMargin: "-10% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll("[data-reveal], .gals-stagger-group, .gals-timeline-group")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="gals-page">
      <div className="gals-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="gals-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className="gals-nav sticky top-0 z-40">
        <div className="gals-nav-inner mx-auto flex w-full max-w-6xl items-center justify-start gap-2 overflow-x-auto px-4 py-3.5 sm:justify-center sm:flex-wrap sm:gap-2.5 sm:px-6 sm:py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`gals-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                activeSection === item.id ? "gals-nav-link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* 1 — HEADER */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="gals-hero-partners mb-10 flex w-full max-w-4xl flex-row items-center gap-2 sm:mb-12 sm:gap-3 lg:max-w-5xl lg:gap-4">
            <div className="gals-hero-logo-wrap flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={OPTICALLERY_LOGO}
                alt="Opticallery"
                width={720}
                height={216}
                priority
                className="gals-hero-logo h-20 w-full object-contain p-2 sm:h-36 sm:p-3 md:h-44 lg:h-48"
              />
            </div>
            <span
              className="gals-hero-partners-plus flex shrink-0 items-center justify-center px-0.5 text-2xl font-light leading-none sm:px-1 sm:text-4xl"
              aria-hidden
            >
              +
            </span>
            <div className="gals-hero-logo-wrap flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={FLUXA_PARTNERS_LOGO}
                alt="Fluxa Partners"
                width={480}
                height={480}
                priority
                className="gals-hero-logo h-20 w-full max-w-full object-contain p-3 sm:h-36 sm:p-4 md:h-44 lg:h-48"
              />
            </div>
            <span
              className="gals-hero-partners-plus flex shrink-0 items-center justify-center px-0.5 text-2xl font-light leading-none sm:px-1 sm:text-4xl"
              aria-hidden
            >
              +
            </span>
            <div className="gals-hero-logo-wrap flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={CONNECT_360_LOGO}
                alt="360 Connect"
                width={720}
                height={216}
                priority
                className="gals-hero-logo h-20 w-full object-contain p-2 sm:h-36 sm:p-3 md:h-44 lg:h-48"
              />
            </div>
          </div>
          <p className="gals-eyebrow tracking-[0.24em]">Contexto de venta</p>
          <h1 className="gals-hero-title">
            Opticallery, el sistema que convierte tu catálogo en ventas recurrentes.
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Opticallery no es una óptica pequeña sin rumbo. Tienen e-commerce activo, membresía propia, catálogo
            premium (Oakley, Ray-Ban, Armani, Carrera), servicio B2B y envío gratis a todo Chile. El problema no es el
            producto — es que ninguno de sus activos tiene un sistema que lo venda. Eso es exactamente lo que Fluxa
            construye.
          </p>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center" data-reveal>
            <a
              href={waUrl(WHATSAPP_SCHEDULE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              Agendar llamada
            </a>
            <a
              href="#fluxa"
              className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium"
            >
              Ver el ecosistema
            </a>
          </div>
          <p data-reveal className="gals-reveal gals-accent-text mt-8 text-sm font-medium">
            Opticallery <span className="gals-muted">/</span> Fluxa Systems
          </p>
        </div>
      </section>

      {/* 2 — BENEFICIOS VISUALES */}
      <SectionBlock
        id="beneficios"
        eyebrow="El resultado"
        title="Lo que cambia cuando el sistema está activo"
        subtitle="No es empezar de cero — es que cada activo de Opticallery deje de depender del esfuerzo manual y empiece a vender con ruta propia."
        alt
      >
        <div className="gals-stagger-group grid gap-5 md:grid-cols-3" data-reveal>
          {RESULT_ITEMS.map((text, i) => (
            <article
              key={text}
              className="gals-card gals-stagger rounded-xl p-6 text-center sm:p-8"
              style={staggerStyle(i, 110)}
            >
              <p className="gals-card-text text-sm font-medium leading-relaxed sm:text-base">{text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* Ecosistema Fluxa — qué construimos antes del roadmap */}
      <SectionBlock
        id="fluxa"
        eyebrow="Lo que construimos"
        title="El ecosistema Fluxa para Opticallery"
        subtitle="Cinco bloques conectados — UGC, automatización, email, contenido y pauta — para que cada línea de negocio venda con sistema propio."
        alt
      >
        <div className="gals-stagger-group grid gap-6 sm:grid-cols-2" data-reveal>
          {FLUXA_BLOCKS.map((block, i) => (
            <article
              key={block.title}
              className={`gals-card gals-stagger rounded-xl p-5 sm:p-6 ${
                block.image ? "sm:col-span-2" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="gals-eyebrow tracking-[0.18em]">{block.title}</p>
              {block.image ? (
                <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
                  <div className="gals-fluxa-visual">
                    <Image
                      src={block.image}
                      alt={block.imageAlt}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <ul className="gals-muted space-y-2 text-sm leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="gals-accent-text shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : block.media?.length ? (
                <FluxaInlineList items={block.items} media={block.media} />
              ) : (
                <ul className="gals-muted mt-4 space-y-2 text-sm leading-relaxed">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="gals-accent-text shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 3 — PRUEBA SOCIAL Y USO REAL */}
      <SectionBlock
        id="solucion"
        eyebrow="Solución Fluxa"
        title="Cómo funciona el ecosistema Opticallery"
        subtitle="Tres fases en secuencia — contenido, automatización y pauta — para que cada activo venda con sistema propio."
      >
        <div className="gals-timeline-group gals-stagger-group max-w-2xl" data-reveal>
          {ROADMAP_ITEMS.map((item, i) => (
            <RoadmapPhase
              key={item.num}
              item={item}
              index={i}
              isLast={i === ROADMAP_ITEMS.length - 1}
            />
          ))}
        </div>
      </SectionBlock>

      {/* PROBADOR VIRTUAL */}
      <SectionBlock
        id="probador"
        eyebrow="Incluido en el plan"
        title="Probador Virtual de Lentes"
        subtitle="El cliente se prueba las monturas en su propia foto (o con la cámara) antes de comprar — integrado al e-commerce existente."
        elevated
      >
        <div data-reveal>
          <figure className="gals-card gals-tryon-video overflow-hidden rounded-2xl">
            <video
              className="gals-tryon-video-el h-auto w-full"
              controls
              playsInline
              preload="metadata"
              poster={TRYON_SUPPORT[1].src}
            >
              <source src={TRYON_VIDEO} type="video/mp4" />
            </video>
            <figcaption className="gals-muted px-4 py-3 text-xs font-medium sm:px-5 sm:text-sm">
              Demo del Probador Virtual de Lentes
            </figcaption>
          </figure>

          <div className="gals-stagger-group mt-5 grid gap-4 sm:grid-cols-2">
            {TRYON_SUPPORT.map((shot, i) => (
              <figure
                key={shot.src}
                className="gals-card gals-stagger overflow-hidden rounded-xl"
                style={staggerStyle(i, 70)}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1200}
                  height={900}
                  className="h-auto w-full bg-white object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <figcaption className="gals-muted px-4 py-3 text-xs font-medium sm:text-sm">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="gals-stagger-group mt-10 grid gap-4 sm:grid-cols-2" data-reveal>
          {TRYON_POINTS.map((point, i) => (
            <div
              key={point.title}
              className="gals-card gals-stagger rounded-xl p-4 sm:p-5"
              style={staggerStyle(i, 70)}
            >
              <p className="gals-section-label text-sm font-semibold">{point.title}</p>
              <p className="gals-muted mt-1.5 text-xs leading-relaxed sm:text-sm">{point.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="gals-card gals-card--featured mt-8 rounded-2xl p-6 text-center sm:p-8"
          data-reveal
        >
          <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">Precio normal</p>
          <p className="gals-heading mt-2 text-3xl font-semibold sm:text-4xl">
            {formatCOP(TRYON_PRICE_COP)}
          </p>
          <p className="gals-muted mt-2 text-sm leading-relaxed">
            Valor del Probador Virtual de Lentes como módulo independiente.
          </p>
        </div>

        <div className="mt-8 flex justify-center" data-reveal>
          <a
            href="#inversion"
            className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
          >
            Ver el plan completo
          </a>
        </div>
      </SectionBlock>

      {/* INVERSIÓN — plan único */}
      <SectionBlock
        id="inversion"
        eyebrow="Inversión"
        title="Un solo plan para activar Opticallery"
        subtitle="Probador Virtual de Lentes más bots, email, UGC, contenido y Meta Ads — todo en una implementación."
        elevated
        alt
      >
        <div className="gals-stagger-group mx-auto max-w-2xl" data-reveal>
          {PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className="gals-card gals-card--featured gals-stagger relative flex flex-col rounded-2xl p-6 sm:p-8"
              style={staggerStyle(i, 100)}
            >
              <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                Plan único
              </span>
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">{pkg.tier}</p>
              <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">{pkg.name}</h3>
              <p className="gals-eyebrow mt-1 text-xs tracking-[0.16em]">{pkg.subtitle}</p>
              <p className="gals-muted mt-4 text-sm">
                Valor normal{" "}
                <span className="gals-price-strike">{formatCOP(pkg.priceNormal)}</span>
              </p>
              <p className="gals-heading mt-1 text-3xl font-semibold sm:text-4xl">
                {formatCOP(pkg.price)}
              </p>
              <p className="gals-eyebrow mt-1 text-xs tracking-[0.16em]">{pkg.priceNote}</p>
              <p className="gals-muted mt-3 text-sm leading-relaxed">{pkg.idealFor}</p>

              <div className="gals-plan-breakdown mt-6">
                <p className="gals-package-includes-title">Resumen de inversión</p>
                <p className="gals-muted mt-1 text-xs leading-relaxed">
                  Desglose a precio normal. En este plan todo queda en {formatCOP(pkg.price)} con descuento.
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.valueLines.map((line) => (
                    <li key={line.label} className="gals-plan-breakdown-row">
                      <span>{line.label}</span>
                      <span className="gals-plan-breakdown-amount">{formatCOP(line.amount)}</span>
                    </li>
                  ))}
                </ul>
                <div className="gals-plan-breakdown-subtotal">
                  <span>Valor normal</span>
                  <span className="gals-price-strike">{formatCOP(pkg.priceNormal)}</span>
                </div>
                <div className="gals-plan-breakdown-total">
                  <span>Total con descuento</span>
                  <span>{formatCOP(pkg.price)}</span>
                </div>
              </div>

              <PackageIncludes pkg={pkg} />
              <a
                href={waUrl(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-solid mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="gals-muted mt-8 text-center text-sm" data-reveal>
          Presupuesto de inversión en plataformas (Meta Ads) no incluido — se define según objetivo y mercado chileno.
        </p>
        <div className="mt-8 flex justify-center" data-reveal>
          <a
            href={waUrl(PLAN_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            Agendar llamada
          </a>
        </div>
      </SectionBlock>

      {/* 6 — CIERRE FINAL */}
      <SectionBlock id="cierre" elevated alt>
        <div className="text-center">
          <header data-reveal className="gals-reveal gals-reveal-header">
            <h2 className="gals-heading text-2xl sm:text-3xl md:text-4xl">
              ¿Listos para activar el ecosistema digital de Opticallery?
            </h2>
            <p className="gals-lead mx-auto mt-4 max-w-xl">
              Agendemos una llamada para definir el plan ideal según su catálogo, membresía y objetivos de captación.
            </p>
          </header>
          <div data-reveal className="gals-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waUrl(WHATSAPP_SCHEDULE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="gals-btn-solid inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto"
            >
              Agendar llamada
            </a>
            <a
              href="#inversion"
              className="gals-btn-outline inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium sm:w-auto"
            >
              Ver plan
            </a>
          </div>
          <p className="gals-muted mt-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            Fluxa Systems · fluxamethod.com
          </p>
          <p className="gals-muted mx-auto mt-3 max-w-lg text-xs leading-relaxed">
            Este documento es confidencial y fue preparado exclusivamente para Opticallery.
          </p>
        </div>
      </SectionBlock>

      <a href="#inversion" className="gals-floating-cta">
        Ver plan
      </a>
    </main>
  );
}
