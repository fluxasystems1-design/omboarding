"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const SITE_URL = "https://drajulianameneses.com/";
const INSTAGRAM_URL = "https://www.instagram.com/drajulianameneses/";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

function AreaTag({ type, short = false }) {
  const meta = AREA_TAG_META[type];
  if (!meta) return null;
  return (
    <span className={`juliana-tag ${meta.className}`}>{short ? meta.shortLabel : meta.label}</span>
  );
}

function TaggedItemRow({ item }) {
  return (
    <div className="juliana-build-row">
      <p className="juliana-build-row-text">{item.text}</p>
      <div className="juliana-build-row-tags">
        {item.tags.map((tag) => (
          <AreaTag key={tag} type={tag} short />
        ))}
      </div>
    </div>
  );
}

function TaggedItemList({ items }) {
  return (
    <div className="juliana-build-list">
      {items.map((item) => (
        <TaggedItemRow key={item.text} item={item} />
      ))}
    </div>
  );
}

function BuildGallery({ slides }) {
  if (!slides?.length) return null;
  return (
    <div className="juliana-build-gallery">
      {slides.map((slide) => (
        <figure key={slide.src} className="juliana-build-gallery-item">
          <div className="juliana-build-gallery-frame">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={675}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
          <figcaption className="juliana-build-gallery-caption">
            <span>{slide.caption}</span>
            {slide.tag ? <AreaTag type={slide.tag} short /> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "transformacion", label: "Transformación" },
  { id: "ecosistemas", label: "Ecosistemas" },
  { id: "combo", label: "Combo" },
  { id: "cierre", label: "Cierre" },
];

const DIAGNOSTIC_CARDS = [
  "Marca visual consolidada pero sin sistema de conversión",
  "Leads que dependen de respuesta manual",
  "Servicios sin funnels propios",
  "Contenido que educa pero no activa",
  "Turismo médico sin explotar",
  "Sin seguimiento post-interés",
];

const TRANSFORMATIONS = [
  {
    before: "Marca reconocida sin embudo de conversión",
    after: "Sistema digital que captura y guía hasta la valoración",
  },
  {
    before: "Consultas que dependen de tu respuesta inmediata",
    after: "Captación y seguimiento automático las 24 horas",
  },
  {
    before: "Servicios sin landing ni recorrido propio",
    after: "Funnel dedicado por línea de servicio",
  },
  {
    before: "Contenido que informa pero no convierte",
    after: "Calendario y guiones que activan citas",
  },
  {
    before: "Turismo médico sin canal de captación",
    after: "Landing internacional lista para escalar",
  },
  {
    before: "Interés que se enfría sin seguimiento",
    after: "Secuencia que mantiene el contacto hasta el cierre",
  },
];

const AREA_TAG_META = {
  ocular: { label: "Cirugía plástica ocular", shortLabel: "Ocular", className: "juliana-tag--ocular" },
  armon: { label: "Armonización facial", shortLabel: "Armonización", className: "juliana-tag--armon" },
  both: { label: "Ambas líneas", shortLabel: "Ambas", className: "juliana-tag--both" },
};

const UNIFIED_BUILD_BLOCKS = [
  {
    title: "Web y presencia",
    items: [
      { text: "Homepage rediseñada bajo su marca", tags: ["ocular"] },
      { text: "Landing por procedimiento: blefaroplastia, ojo seco, turismo médico", tags: ["ocular"] },
      { text: "Landing de captura dedicada a armonización facial", tags: ["armon"] },
      { text: "Link in bio optimizado con acceso directo a cada servicio", tags: ["both"] },
    ],
    gallery: [
      {
        src: "/imagenes/propuesta-juliana/homepage.png",
        alt: "Homepage rediseñada bajo la marca de la Dra. Juliana Meneses",
        caption: "Homepage de marca",
        tag: "ocular",
      },
      {
        src: "/imagenes/propuesta-juliana/landing.png",
        alt: "Landing por procedimiento — blefaroplastia, ojo seco y turismo médico",
        caption: "Landings por procedimiento",
        tag: "ocular",
      },
    ],
  },
  {
    title: "Marca, Instagram y presencia",
    items: [
      { text: "Nombre y concepto de marca para armonización facial", tags: ["armon"] },
      { text: "Identidad visual completa: paleta, tipografía y aplicaciones", tags: ["armon"] },
      { text: "Perfil de Instagram configurado bajo la nueva línea", tags: ["armon"] },
      { text: "Highlights y estructura de contenido para armonización", tags: ["armon"] },
    ],
  },
  {
    title: "Automatización e IA",
    image: "/imagenes/propuesta-juliana/bot-citas.png",
    imageAlt: "Bot de agendamiento de citas — asistente virtual de la Dra. Juliana Meneses",
    imageCaption: "Bot de captura y agendamiento",
    items: [
      { text: "Bot Instagram: responde DMs, clasifica por procedimiento e invita a valoración", tags: ["both"] },
      { text: "Bot WhatsApp: recordatorio de citas y seguimiento post-consulta", tags: ["ocular"] },
      { text: "Bot de agendamiento: el paciente agenda solo, sin intervención humana", tags: ["both"] },
      { text: "Secuencia de nurturing: acompaña al lead desde el interés hasta la cita", tags: ["both"] },
      { text: "Flujo de captación básica conectado a la landing de armonización", tags: ["armon"] },
      { text: "Respuestas automáticas a comentarios en posts", tags: ["both"] },
    ],
  },
  {
    title: "Contenido y pauta",
    items: [
      { text: "Calendario editorial alineado a cada línea de servicio", tags: ["both"] },
      { text: "Guiones de reels especializados en cirugía plástica ocular", tags: ["ocular"] },
      { text: "Guiones de reels especializados en armonización facial", tags: ["armon"] },
      { text: "VSL corto para conversión en landing", tags: ["both"] },
      { text: "Pauta turismo médico segmentada fuera de Cúcuta y Venezuela", tags: ["ocular"] },
      { text: "Gestión de pauta pagada — estrategia, configuración y primer mes", tags: ["both"] },
    ],
  },
];

const OCULAR_PACKAGES = [
  {
    tier: "Plan esencial",
    name: "Ocular · Esencial",
    price: 945,
    payment: [472, 473],
    recommended: false,
    idealFor:
      "Para activar respuesta automática y convertir el interés en blefaroplastia — su procedimiento ancla — sin esperar a tener todo el ecosistema listo.",
    sections: [
      {
        label: "Web y presencia",
        items: [
          "Landing de blefaroplastia como procedimiento ancla",
          "Link in bio optimizado hacia la landing principal",
        ],
      },
      {
        label: "Automatización e IA",
        items: [
          "Bot Instagram: responde DMs, clasifica interés e invita a valoración",
          "Flujo de seguimiento básico post-interés",
          "Configuración Meta Pixel para medir conversiones",
        ],
      },
      {
        label: "Contenido que convierte",
        items: [
          "Calendario de contenido mes 1 — blefaroplastia",
          "15 guiones de reels especializados conectados al bot y la landing",
        ],
      },
      {
        label: "Acompañamiento",
        items: ["Reporte mensual de resultados", "Sesión de revisión estratégica al lanzar"],
      },
    ],
    cta: "Quiero Ocular Esencial",
    waMessage:
      "Hola Jessica, soy la Dra. Juliana Meneses. Revisé la propuesta de Fluxa y me interesa el plan Ocular Esencial ($945 USD). Quiero coordinar el siguiente paso.",
  },
  {
    tier: "Plan completo",
    name: "Ocular · Completo",
    price: 1697,
    payment: [848, 849],
    recommended: true,
    includesPrevious: true,
    idealFor:
      "Para captar, convertir y escalar con sistema propio: web completa, automatización total, pauta y contenido alineados a su práctica.",
    sections: [
      {
        label: "Web y presencia",
        items: [
          "Homepage rediseñada bajo su marca",
          "Landings por procedimiento: ojo seco y turismo médico",
          "Link in bio con acceso directo a cada servicio",
        ],
      },
      {
        label: "Automatización e IA",
        items: [
          "Bot WhatsApp: recordatorio de citas y seguimiento post-consulta",
          "Bot de agendamiento: el paciente agenda solo",
          "Secuencia de nurturing completa",
          "Respuestas automáticas a comentarios en posts",
        ],
      },
      {
        label: "Pauta y captación",
        items: [
          "Meta Ads gestionados — mes 1",
          "Campaña turismo médico segmentada fuera de Cúcuta y Venezuela",
        ],
      },
      {
        label: "Contenido que convierte",
        items: [
          "Calendario de contenido estratégico por procedimiento",
          "25 guiones de reels especializados en cirugía plástica ocular",
          "VSL corto",
          "Piezas alineadas al bot, landings y secuencia de nurturing",
        ],
      },
      {
        label: "Acompañamiento",
        items: ["Sesión estratégica mensual"],
      },
    ],
    cta: "Quiero Ocular Completo",
    waMessage:
      "Hola Jessica, soy la Dra. Juliana Meneses. Revisé la propuesta de Fluxa y me interesa el plan Ocular Completo ($1,697 USD). Quiero coordinar el siguiente paso.",
  },
];

const ARMON_PACKAGES = [
  {
    tier: "Plan esencial",
    name: "Armonización · Esencial",
    price: 750,
    payment: [375, 375],
    recommended: false,
    idealFor:
      "Para lanzar la línea de armonización facial con marca, captación y contenido base — sin esperar a tener todo el ecosistema de escala listo.",
    sections: [
      {
        label: "Marca e identidad",
        items: ["Nombre y concepto de marca", "Landing de captura dedicada"],
      },
      {
        label: "Instagram y presencia",
        items: ["Perfil de Instagram configurado", "Link in bio hacia la landing"],
      },
      {
        label: "Automatización",
        items: ["Captación básica de leads", "Flujo de seguimiento post-interés"],
      },
      {
        label: "Contenido",
        items: ["Calendario editorial mes 1", "10 guiones de reels especializados"],
      },
    ],
    cta: "Quiero Armonización Esencial",
    waMessage:
      "Hola Jessica, soy la Dra. Juliana Meneses. Revisé la propuesta de Fluxa y me interesa el plan Armonización Esencial ($750 USD). Quiero coordinar el siguiente paso.",
  },
  {
    tier: "Plan completo",
    name: "Armonización · Completo",
    price: 1297,
    payment: [648, 649],
    recommended: true,
    includesPrevious: true,
    idealFor:
      "Para construir la línea completa: identidad visual, pauta, VSL, seguimiento de leads y estrategia de 90 días bajo una marca propia.",
    sections: [
      {
        label: "Marca e identidad",
        items: ["Identidad visual completa", "Aplicaciones de marca para web y redes"],
      },
      {
        label: "Pauta y escala",
        items: ["Meta Ads gestionados — mes 1", "Campañas segmentadas para armonización facial"],
      },
      {
        label: "Contenido ampliado",
        items: ["20 guiones de reels", "VSL corto", "Estrategia de contenido 90 días"],
      },
      {
        label: "Seguimiento",
        items: ["Secuencia de seguimiento de leads integrada al embudo", "Panel por etapa y origen del paciente"],
      },
    ],
    cta: "Quiero Armonización Completo",
    waMessage:
      "Hola Jessica, soy la Dra. Juliana Meneses. Revisé la propuesta de Fluxa y me interesa el plan Armonización Completo ($1,297 USD). Quiero coordinar el siguiente paso.",
  },
];

const CLOSING_PLANS = {
  ocular: [
    {
      id: "esencial",
      name: "Ocular · Esencial",
      price: 945,
      recommended: false,
      note: "Funnel blefaroplastia + captación + seguimiento",
      payment: [472, 473],
    },
    {
      id: "completo",
      name: "Ocular · Completo",
      price: 1697,
      recommended: true,
      note: "Turismo médico + pauta + VSL",
      payment: [848, 849],
    },
  ],
  armonizacion: [
    {
      id: "esencial",
      name: "Armonización · Esencial",
      price: 750,
      recommended: false,
      note: "Marca nueva + landing + contenido base",
      payment: [375, 375],
    },
    {
      id: "completo",
      name: "Armonización · Completo",
      price: 1297,
      recommended: true,
      note: "Identidad visual + pauta + estrategia 90 días",
      payment: [648, 649],
    },
  ],
};

const SUGGESTED_COMBOS = [
  {
    label: "Esencial + Esencial",
    ocularId: "esencial",
    armonId: "esencial",
    subtotal: 1695,
    total: 1440,
  },
  {
    label: "Completo + Completo",
    ocularId: "completo",
    armonId: "completo",
    subtotal: 2994,
    total: 2545,
  },
  {
    label: "Esencial Ocular + Completo Armonización",
    ocularId: "esencial",
    armonId: "completo",
    subtotal: 2242,
    total: 1906,
  },
  {
    label: "Completo Ocular + Esencial Armonización",
    ocularId: "completo",
    armonId: "esencial",
    subtotal: 2447,
    total: 2080,
  },
];

const COMBO_DISCOUNT = 0.15;

function formatUsd(amount) {
  return amount.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function planLabel(plan) {
  return plan.name;
}

function closingComboWaMessage(ocularPlan, armonPlan) {
  const subtotal = ocularPlan.price + armonPlan.price;
  const discount = Math.round(subtotal * COMBO_DISCOUNT);
  const total = subtotal - discount;
  const phase1 = Math.round(total / 2);
  const phase2 = total - phase1;

  return [
    "Hola Jessica, soy la Dra. Juliana Meneses. Revisé la propuesta de Fluxa y quiero avanzar con esta combinación:",
    "",
    `• Cirugía plástica ocular: ${planLabel(ocularPlan)} — $${formatUsd(ocularPlan.price)} USD`,
    `• Armonización facial: ${planLabel(armonPlan)} — $${formatUsd(armonPlan.price)} USD`,
    "",
    `Subtotal: $${formatUsd(subtotal)} USD`,
    `Descuento combo 15%: -$${formatUsd(discount)} USD`,
    `Total: $${formatUsd(total)} USD`,
    "",
    "Forma de pago:",
    `• $${formatUsd(phase1)} USD al firmar`,
    `• $${formatUsd(phase2)} USD a los 15 días`,
    "",
    "¿Coordinamos el siguiente paso?",
  ].join("\n");
}

function staggerStyle(index, step = 90) {
  return { "--delay": `${index * step}ms` };
}

function CountUp({ value, prefix = "$", suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    const duration = 1100;
    const start = performance.now();
    let frameId = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, value]);

  return (
    <span ref={ref} className="gals-price">
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
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

function flattenPackageSections(sections) {
  return sections.flatMap((section) => section.items);
}

function PackageIncludes({ pkg, essentialSections }) {
  const totalItems = pkg.includesPrevious
    ? flattenPackageSections(essentialSections).length + flattenPackageSections(pkg.sections).length
    : flattenPackageSections(pkg.sections).length;

  return (
    <div className="gals-package-includes mt-6 flex-1">
      <div className="gals-package-includes-head">
        <p className="gals-package-includes-title">Qué incluye</p>
        <span className="gals-package-includes-count">{totalItems} entregables</span>
      </div>

      {pkg.includesPrevious ? (
        <>
          <div className="gals-package-section gals-package-section--base">
            <p className="gals-package-section-label">Base — Ocular Esencial</p>
            <PackageCheckList items={flattenPackageSections(essentialSections)} />
          </div>
          <p className="gals-package-plus">Además incluye</p>
        </>
      ) : null}

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

function UnifiedBuildGrid() {
  return (
    <div className="juliana-build-stack gals-stagger-group mt-8" data-reveal>
      {UNIFIED_BUILD_BLOCKS.map((block, i) => (
        <article
          key={block.title}
          className="gals-card gals-stagger juliana-build-card rounded-2xl p-5 sm:p-7"
          style={staggerStyle(i, 80)}
        >
          <p className="gals-eyebrow tracking-[0.18em]">{block.title}</p>

          {block.image ? (
            <div className="juliana-build-split mt-5">
              <figure className="juliana-build-split-visual">
                <div className="juliana-build-gallery-frame">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    width={1200}
                    height={675}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                {block.imageCaption ? (
                  <figcaption className="juliana-build-gallery-caption">
                    <span>{block.imageCaption}</span>
                    <AreaTag type="both" short />
                  </figcaption>
                ) : null}
              </figure>
              <TaggedItemList items={block.items} />
            </div>
          ) : (
            <>
              <TaggedItemList items={block.items} />
              {block.gallery?.length ? <BuildGallery slides={block.gallery} /> : null}
            </>
          )}
        </article>
      ))}
    </div>
  );
}

function AreaLegend() {
  return (
    <div className="juliana-area-legend" data-reveal>
      {Object.entries(AREA_TAG_META).map(([key, meta]) => (
        <div key={key} className="juliana-area-legend-item">
          <AreaTag type={key} />
          <span className="juliana-area-legend-hint">
            {key === "both" ? "Aplica a las dos líneas de servicio" : `Solo ${meta.label.toLowerCase()}`}
          </span>
        </div>
      ))}
    </div>
  );
}

function PaymentBox({ phase1, phase2, dayLabel = "15 días" }) {
  return (
    <div className="gals-payment-box mt-6 rounded-lg p-4">
      <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
      <p className="gals-card-text mt-2 text-sm">Fase 1: ${formatUsd(phase1)} USD al firmar</p>
      <p className="gals-muted text-sm">
        Fase 2: ${formatUsd(phase2)} USD a los {dayLabel}
      </p>
    </div>
  );
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

function ComboPicker() {
  const [selectedOcularId, setSelectedOcularId] = useState("completo");
  const [selectedArmonId, setSelectedArmonId] = useState("completo");

  const selectedOcular =
    CLOSING_PLANS.ocular.find((plan) => plan.id === selectedOcularId) ?? CLOSING_PLANS.ocular[0];
  const selectedArmon =
    CLOSING_PLANS.armonizacion.find((plan) => plan.id === selectedArmonId) ?? CLOSING_PLANS.armonizacion[0];

  const subtotal = selectedOcular.price + selectedArmon.price;
  const discount = Math.round(subtotal * COMBO_DISCOUNT);
  const total = subtotal - discount;
  const paymentPhase1 = Math.round(total / 2);
  const paymentPhase2 = total - paymentPhase1;

  return (
    <div data-reveal className="gals-reveal mt-10 text-left">
      <p className="gals-eyebrow text-center">Combo interactivo</p>
      <h3 className="gals-heading mt-2 text-center text-xl sm:text-2xl">Arma tu combinación</h3>
      <p className="gals-muted mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed">
        Elige un plan de cada ecosistema. Al combinar ambos, aplicamos{" "}
        <span className="gals-accent-text font-semibold">15% de descuento</span> sobre el total.
      </p>

      <div className="mt-8">
        <p className="gals-muted text-center text-xs font-medium uppercase tracking-[0.16em]">
          Combinaciones sugeridas
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {SUGGESTED_COMBOS.map((combo) => (
            <button
              key={combo.label}
              type="button"
              onClick={() => {
                setSelectedOcularId(combo.ocularId);
                setSelectedArmonId(combo.armonId);
              }}
              className="gals-pill rounded-full px-3 py-1.5 text-[11px] font-medium"
            >
              {combo.label} · ${formatUsd(combo.total)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="gals-section-label text-sm font-semibold">1 · Cirugía plástica ocular</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {CLOSING_PLANS.ocular.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedOcularId(plan.id)}
              className={`gals-plan-pick gals-card rounded-xl p-4 text-left sm:p-5 ${
                selectedOcularId === plan.id ? "gals-plan-pick--selected" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="gals-section-label text-sm font-semibold sm:text-base">{plan.name}</p>
                  <p className="gals-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
                </div>
                {plan.recommended ? (
                  <span className="gals-badge shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider">
                    Top
                  </span>
                ) : null}
              </div>
              <p className="gals-price mt-4 text-2xl font-semibold">${formatUsd(plan.price)} USD</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="gals-section-label text-sm font-semibold">2 · Armonización facial</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {CLOSING_PLANS.armonizacion.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedArmonId(plan.id)}
              className={`gals-plan-pick gals-card rounded-xl p-4 text-left sm:p-5 ${
                selectedArmonId === plan.id ? "gals-plan-pick--selected" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="gals-section-label text-sm font-semibold sm:text-base">{plan.name}</p>
                  <p className="gals-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
                </div>
                {plan.recommended ? (
                  <span className="gals-badge shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider">
                    Top
                  </span>
                ) : null}
              </div>
              <p className="gals-price mt-4 text-2xl font-semibold">${formatUsd(plan.price)} USD</p>
            </button>
          ))}
        </div>
      </div>

      <div className="gals-payment-box mt-10 rounded-xl p-5 sm:p-6">
        <p className="gals-muted text-center text-[11px] font-medium uppercase tracking-[0.16em]">
          Resumen de tu combo
        </p>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex items-start justify-between gap-4 border-b border-[var(--gals-border)] pb-3">
            <div>
              <p className="gals-muted text-[10px] font-medium uppercase tracking-[0.14em]">Ocular</p>
              <p className="gals-section-label mt-1 font-semibold">{selectedOcular.name}</p>
            </div>
            <p className="gals-price shrink-0 font-semibold">${formatUsd(selectedOcular.price)} USD</p>
          </div>
          <div className="flex items-start justify-between gap-4 border-b border-[var(--gals-border)] pb-3">
            <div>
              <p className="gals-muted text-[10px] font-medium uppercase tracking-[0.14em]">Armonización</p>
              <p className="gals-section-label mt-1 font-semibold">{selectedArmon.name}</p>
            </div>
            <p className="gals-price shrink-0 font-semibold">${formatUsd(selectedArmon.price)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4 pt-1">
            <p className="gals-muted">Subtotal</p>
            <p className="gals-card-text font-medium">${formatUsd(subtotal)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="gals-accent-text font-medium">Descuento combo 15%</p>
            <p className="gals-accent-text font-semibold">-${formatUsd(discount)} USD</p>
          </div>
        </div>

        <div className="mt-5 border-t border-[var(--gals-border)] pt-5 text-center">
          <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Total a pagar</p>
          <p className="gals-price mt-1 text-3xl font-semibold sm:text-4xl">${formatUsd(total)} USD</p>
        </div>

        <div className="gals-payment-box mt-5 rounded-lg p-4 text-sm">
          <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago combo</p>
          <p className="gals-card-text mt-2">50% al firmar: ${formatUsd(paymentPhase1)} USD</p>
          <p className="gals-muted mt-1">50% a los 15 días: ${formatUsd(paymentPhase2)} USD</p>
        </div>

        <div className="mt-6 text-center">
          <a
            href={waUrl(closingComboWaMessage(selectedOcular, selectedArmon))}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto sm:min-w-[300px]"
          >
            Confirmar combo por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PropuestaJulianaPage() {
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

    const revealTargets = document.querySelectorAll(
      "[data-reveal], .gals-stagger-group, .gals-timeline-group"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );

    revealTargets.forEach((el) => {
      revealObserver.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
    });

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
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="gals-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            Dra. Juliana Meneses
          </span>
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

      {/* 1 — PORTADA */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group is-visible mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="gals-eyebrow tracking-[0.24em]">Propuesta comercial · Fluxa Systems</p>
          <h1 className="gals-hero-title">
            Presencia digital que convierte
            <br />
            confianza en valoraciones
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Dos ecosistemas digitales independientes — cirugía plástica ocular y armonización facial — con la opción de
            combinarlos y escalar tu práctica en Cúcuta y más allá.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {["Desde $750 USD", "4–6 semanas", "Combo con 15% off"].map((pill, i) => (
              <span
                key={pill}
                className="gals-pill gals-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal className="gals-reveal gals-hero-band is-visible mt-14 w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 sm:px-6 sm:py-12">
            <p className="gals-hero-title text-center text-3xl text-white sm:text-4xl md:text-5xl">
              Dra. Juliana Meneses
            </p>
            <p className="gals-hero-band-handle mt-3 text-center text-sm font-medium sm:text-base">
              Cirugía Plástica Ocular · Armonización Facial
            </p>
            <p className="gals-hero-band-handle mt-1 text-center text-xs opacity-90 sm:text-sm">Cúcuta, Colombia</p>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-muted text-sm font-medium hover:text-[var(--gals-heading)]"
          >
            @drajulianameneses
          </a>
          <span className="hidden h-4 w-px bg-[var(--gals-border)] sm:block" aria-hidden />
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-muted text-sm font-medium hover:text-[var(--gals-heading)]"
          >
            drajulianameneses.com
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6" data-reveal>
          <a
            href="#ecosistemas"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Ver ecosistemas
          </a>
          <a
            href="#combo"
            className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
          >
            Armar combo
          </a>
        </div>
      </section>

      {/* 2 — DIAGNÓSTICO */}
      <SectionBlock
        id="diagnostico"
        eyebrow="01 — Diagnóstico"
        title="Tienes marca, autoridad y pacientes reales."
        subtitle="Pero el sistema comercial todavía depende de tu presencia manual para convertir interés en valoraciones."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {DIAGNOSTIC_CARDS.map((text, i) => (
            <article
              key={text}
              className="gals-card gals-stagger rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 90)}
            >
              <p className="gals-card-text text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 3 — TRANSFORMACIÓN */}
      <SectionBlock
        id="transformacion"
        eyebrow="02 — Transformación"
        title="De presencia manual a sistema que convierte 24/7"
      >
        <div className="gals-stagger-group gals-table-wrap overflow-hidden rounded-xl" data-reveal>
          <div className="gals-table-head grid grid-cols-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
            <span>Antes</span>
            <span className="gals-accent-text">Después</span>
          </div>
          {TRANSFORMATIONS.map((row, i) => (
            <div
              key={row.before}
              className={`gals-stagger grid grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 ${
                i < TRANSFORMATIONS.length - 1 ? "gals-table-row" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="gals-muted text-sm leading-relaxed">{row.before}</p>
              <p
                className="gals-table-after gals-table-after-cell text-sm leading-relaxed"
                style={{ "--after-delay": `${i * 100 + 140}ms` }}
              >
                {row.after}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 4 — ECOSISTEMAS */}
      <SectionBlock
        id="ecosistemas"
        eyebrow="03 — Inversión"
        title="Qué construimos y cómo se invierte"
        subtitle="Un solo mapa de entregables para ambas líneas. Cada ítem está etiquetado por área."
        elevated
        alt
      >
        <div data-reveal className="gals-reveal">
          <p className="gals-eyebrow">Qué construimos</p>
          <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">
            Ecosistema digital con creativos de referencia
          </h3>
          <p className="gals-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Web, automatización, contenido y pauta bajo su marca — organizados por línea de servicio para que veas qué
            corresponde a cada área.
          </p>
          <AreaLegend />
          <UnifiedBuildGrid />
        </div>

        <div className="mt-20 border-t border-[var(--gals-border)] pt-14" data-reveal>
          <p className="gals-eyebrow">Planes · Ecosistema 1</p>
          <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">Cirugía plástica ocular</h3>
          <p className="gals-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Tu práctica consolidada, lista para convertir blefaroplastia y turismo médico con funnels propios.
          </p>
        </div>

        <div className="gals-stagger-group mt-8 grid gap-6 lg:grid-cols-2" data-reveal>
          {OCULAR_PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className={`gals-card gals-stagger flex flex-col rounded-2xl p-6 sm:p-8 ${
                pkg.recommended ? "gals-card--featured relative" : ""
              }`}
              style={staggerStyle(i, pkg.recommended ? 140 : 0)}
            >
              {pkg.recommended ? (
                <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                  Recomendado
                </span>
              ) : null}
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">{pkg.tier}</p>
              <h3 className="gals-section-label mt-2 text-2xl font-semibold">{pkg.name}</h3>
              <p className="mt-1 text-3xl font-semibold">
                <CountUp value={pkg.price} suffix=" USD" />
              </p>
              <p className="gals-muted mt-3 text-sm leading-relaxed">{pkg.idealFor}</p>
              <PackageIncludes pkg={pkg} essentialSections={OCULAR_PACKAGES[0].sections} />
              <PaymentBox phase1={pkg.payment[0]} phase2={pkg.payment[1]} />
              <a
                href={waUrl(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium ${
                  pkg.recommended ? "gals-btn-solid font-semibold" : "gals-btn-outline"
                }`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--gals-border)] pt-14" data-reveal>
          <p className="gals-eyebrow">Planes · Ecosistema 2</p>
          <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">Armonización facial</h3>
          <p className="gals-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Construcción desde cero: marca, captación y contenido para una nueva línea de servicio con identidad propia.
          </p>
        </div>

        <div className="gals-stagger-group mt-8 grid gap-6 lg:grid-cols-2" data-reveal>
          {ARMON_PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className={`gals-card gals-stagger flex flex-col rounded-2xl p-6 sm:p-8 ${
                pkg.recommended ? "gals-card--featured relative" : ""
              }`}
              style={staggerStyle(i, pkg.recommended ? 140 : 0)}
            >
              {pkg.recommended ? (
                <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                  Recomendado
                </span>
              ) : null}
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">{pkg.tier}</p>
              <h3 className="gals-section-label mt-2 text-2xl font-semibold">{pkg.name}</h3>
              <p className="mt-1 text-3xl font-semibold">
                <CountUp value={pkg.price} suffix=" USD" />
              </p>
              <p className="gals-muted mt-3 text-sm leading-relaxed">{pkg.idealFor}</p>
              <PackageIncludes pkg={pkg} essentialSections={ARMON_PACKAGES[0].sections} />
              <PaymentBox phase1={pkg.payment[0]} phase2={pkg.payment[1]} />
              <a
                href={waUrl(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium ${
                  pkg.recommended ? "gals-btn-solid font-semibold" : "gals-btn-outline"
                }`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 5 — COMBO */}
      <SectionBlock
        id="combo"
        eyebrow="04 — Combo"
        title="Combina ambos ecosistemas y ahorra 15%"
        subtitle="Selecciona un plan de cada línea. El descuento se calcula en tiempo real sobre la suma de ambos."
        elevated
      >
        <ComboPicker />
      </SectionBlock>

      {/* 6 — CIERRE */}
      <SectionBlock
        id="cierre"
        eyebrow="05 — Cierre"
        title="Tu práctica merece un sistema que trabaje contigo"
        subtitle="Elige el ecosistema que necesitas hoy — o combínalos — y construimos juntas la infraestructura digital que convierte confianza en pacientes."
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-3" data-reveal>
          {[
            { step: "01", title: "Revisión", text: "Afinamos el plan según tu prioridad: ocular, armonización o combo." },
            { step: "02", title: "Construcción", text: "4 a 6 semanas para base, contenido y escala según el plan elegido." },
            { step: "03", title: "Lanzamiento", text: "Sistema activo captando, siguiendo y convirtiendo sin depender de tu tiempo." },
          ].map((item, i) => (
            <article
              key={item.step}
              className="gals-card gals-stagger rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 100)}
            >
              <p className="gals-eyebrow">{item.step}</p>
              <h3 className="gals-section-label mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="gals-muted mt-2 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal>
          <a
            href="#combo"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Armar mi combo
          </a>
          <a
            href={waUrl(
              "Hola Jessica, soy la Dra. Juliana Meneses. Revisé la propuesta de Fluxa y me gustaría coordinar una reunión para definir el siguiente paso."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <p className="gals-muted mx-auto mt-12 max-w-lg text-center text-xs leading-relaxed">
          Propuesta confidencial preparada por Fluxa Systems para la Dra. Juliana Meneses. Precios en USD. La
          continuidad mensual se define después de la reunión de alineación.
        </p>
      </SectionBlock>

      <a href="#combo" className="gals-floating-cta">
        Ver combo
      </a>
    </main>
  );
}
