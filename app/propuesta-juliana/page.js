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

const WHATSAPP_URL = "https://wa.me/573116425337";

function waUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "beneficios", label: "Beneficios" },
  { id: "servicios", label: "Su práctica" },
  { id: "fluxa", label: "Ecosistema" },
  { id: "solucion", label: "Cómo funciona" },
  { id: "comparativa", label: "Diagnóstico" },
  { id: "inversion", label: "Inversión" },
  { id: "cierre", label: "Cierre" },
];

const DIAGNOSIS_CARDS = [
  {
    title: "El sitio web no convierte",
    desc: "Existe pero no captura. No hay ruta clara para que el visitante agende una valoración.",
  },
  {
    title: "Leads que se enfrían",
    desc: "Cada respuesta depende de disponibilidad humana. Si tarda, el paciente busca otra opción.",
  },
  {
    title: "Sin diferenciación por servicio",
    desc: "Blefaroplastia, cirugía funcional y turismo médico llegan al mismo punto de contacto.",
  },
  {
    title: "Contenido que educa pero no convierte",
    desc: "El perfil construye autoridad real, pero sin llamados a la acción concretos.",
  },
  {
    title: "Turismo médico sin activar",
    desc: "Su mayor diferencial no tiene sistema de captura propio.",
  },
  {
    title: "Sin seguimiento post-interés",
    desc: "Sin acompañamiento, el lead termina con otra clínica que sí estuvo presente.",
  },
];

const ROADMAP_ITEMS = [
  {
    num: 1,
    title: "Captura automática de interés",
    desc: "ManyChat en Instagram: respuesta inmediata al DM con info del procedimiento e invitación a valoración. Sin depender de disponibilidad humana.",
  },
  {
    num: 2,
    title: "Funnel de conversión por procedimiento",
    desc: "Landing page para blefaroplastia estética con pauta segmentada. El lead llega calificado, no frío.",
  },
  {
    num: 3,
    title: "Turismo médico activado",
    desc: "Landing dedicada + flujo de contacto directo + pauta orientada a pacientes fuera de Cúcuta.",
  },
  {
    num: 4,
    title: "Sistema de seguimiento inteligente",
    desc: "Secuencia de comunicación distribuida en el tiempo que acompaña al paciente hasta la cita. Funciona solo.",
  },
  {
    num: 5,
    title: "Contenido estratégico",
    desc: "Calendario editorial conectado al sistema de captura. Cada pieza tiene un objetivo de conversión.",
  },
];

const PACKAGES = [
  {
    tier: "Paquete 1",
    name: "FLUXA ESENCIAL",
    subtitle: "Arranque de captación",
    idealFor:
      "Para activar respuesta automática y convertir el interés en blefaroplastia — su procedimiento ancla — sin esperar a tener todo el ecosistema listo.",
    recommended: false,
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
          "Bot Instagram (ManyChat): responde DMs, clasifica interés e invita a valoración",
          "Flujo de seguimiento básico post-interés",
          "Configuración Meta Pixel para medir conversiones",
        ],
      },
      {
        label: "Contenido que convierte",
        items: [
          "Calendario de contenido mes 1 — blefaroplastia",
          "Guiones especializados conectados al bot y la landing",
        ],
      },
      {
        label: "Acompañamiento",
        items: ["Reporte mensual de resultados", "Sesión de revisión estratégica al lanzar"],
      },
    ],
    cta: "Quiero FLUXA ESENCIAL",
    waMessage:
      "Hola Fluxa Method. Soy la Dra. Juliana Meneses, revisé la propuesta y me interesa el paquete FLUXA ESENCIAL. Quiero coordinar el siguiente paso.",
  },
  {
    tier: "Paquete 2",
    name: "FLUXA SISTEMA COMPLETO",
    subtitle: "Ecosistema digital activado",
    idealFor:
      "Para captar, convertir y operar con sistema propio: web completa, automatización total, pauta, CRM y contenido alineados a su práctica.",
    recommended: true,
    includesPrevious: true,
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
        label: "Sistemas internos",
        items: [
          "Dashboard CRM de pacientes bajo su marca",
          "Panel de leads: origen, etapa y estado",
          "Control financiero por procedimiento",
        ],
      },
      {
        label: "Contenido que convierte",
        items: [
          "Calendario de contenido estratégico por procedimiento",
          "Guiones de conversión especializados en cirugía plástica ocular",
          "Piezas alineadas al bot, landings y secuencia de nurturing",
        ],
      },
      {
        label: "Acompañamiento",
        items: ["Sesión estratégica mensual"],
      },
    ],
    cta: "Quiero FLUXA SISTEMA COMPLETO",
    waMessage:
      "Hola Fluxa Method. Soy la Dra. Juliana Meneses, revisé la propuesta y me interesa el paquete FLUXA SISTEMA COMPLETO. Quiero coordinar el siguiente paso.",
  },
];

const RESULT_ITEMS = [
  "Una práctica que capta pacientes mientras usted opera",
  "Turismo médico activado con sistema propio",
  "Cero leads perdidos por falta de respuesta",
];

const PRACTICE_STRENGTHS = [
  {
    icon: "eye",
    title: "Cirugía estética ocular",
    skills: ["Blefaroplastia", "Frontoplastia", "Lipofilling", "No quirúrgicos"],
    system: "Landing y bot por procedimiento — el paciente llega clasificado, no frío.",
  },
  {
    icon: "spa",
    title: "Salud y función del párpado",
    skills: ["Spa de párpados", "Ojo seco", "Cirugía funcional"],
    system: "Contenido educativo + nurturing que convierte interés en valoración.",
  },
  {
    icon: "globe",
    title: "Turismo médico",
    skills: ["Venezuela", "Bogotá", "Medellín", "Fuera de Cúcuta"],
    system: "Captación dedicada + pauta geolocalizada para pacientes de otras ciudades.",
  },
];

const FLUXA_BLOCKS = [
  {
    title: "Web y presencia",
    items: [
      "Homepage rediseñada bajo su marca",
      "Landing por procedimiento: blefaroplastia, ojo seco, turismo médico",
      "Link in bio optimizado con acceso directo a cada servicio",
    ],
    media: [
      {
        afterIndex: 0,
        src: "/imagenes/propuesta-juliana/homepage.png",
        alt: "Homepage rediseñada bajo la marca de la Dra. Juliana Meneses",
      },
      {
        afterIndex: 1,
        src: "/imagenes/propuesta-juliana/landing.png",
        alt: "Landing por procedimiento — blefaroplastia, ojo seco y turismo médico",
      },
    ],
  },
  {
    title: "Automatización e IA",
    image: "/imagenes/propuesta-juliana/bot-citas.png",
    imageAlt: "Bot de agendamiento de citas — asistente virtual de la Dra. Juliana Meneses",
    items: [
      "Bot Instagram (ManyChat): responde DMs, clasifica por procedimiento e invita a valoración",
      "Bot WhatsApp: recordatorio de citas y seguimiento post-consulta",
      "Bot de agendamiento: el paciente agenda solo, sin intervención humana",
      "Secuencia de nurturing: acompaña al lead desde el interés hasta la cita",
      "Respuestas automáticas a comentarios en posts",
    ],
  },
  {
    title: "Pauta y captación",
    items: [
      "Gestión Meta Ads con campañas por procedimiento",
      "Pauta turismo médico segmentada fuera de Cúcuta y Venezuela",
    ],
  },
  {
    title: "Sistemas internos",
    image: "/imagenes/propuesta-juliana/dashboard.png",
    imageAlt: "Dashboard CRM — panel de pacientes, leads y control financiero de la Dra. Juliana Meneses",
    items: [
      "Dashboard CRM de pacientes bajo su marca",
      "Control financiero: ingresos por procedimiento y proyecciones",
      "Panel de leads: origen, etapa y estado de cada paciente",
    ],
  },
];

function ServiceIcon({ name }) {
  const props = {
    className: "h-6 w-6 shrink-0 text-[var(--gals-accent-dark)]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "eye":
      return (
        <svg {...props}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "brow":
      return (
        <svg {...props}>
          <path d="M4 14c2.5-3 5.5-4 8-4s5.5 1 8 4" />
          <path d="M6 10V8M10 9V7M14 9V7M18 10V8" />
        </svg>
      );
    case "droplet":
      return (
        <svg {...props}>
          <path d="M12 3c3 4.5 6 8 6 11a6 6 0 1 1-12 0c0-3 3-6.5 6-11Z" />
        </svg>
      );
    case "spa":
      return (
        <svg {...props}>
          <path d="M12 3v18M8 7c0 2 1.5 3 4 3s4-1 4-3M6 12h12M8 17h8" />
        </svg>
      );
    case "dry-eye":
      return (
        <svg {...props}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    case "scalpel":
      return (
        <svg {...props}>
          <path d="m14 4 6 6M8 20l-1.5-1.5a2.1 2.1 0 0 1 0-3L14 8l3 3-6.5 6.5a2.1 2.1 0 0 1-3 0L8 16" />
        </svg>
      );
    case "syringe":
      return (
        <svg {...props}>
          <path d="m18 2 4 4M7 17l8-8M3 21l2-2M15 7l2 2" />
          <path d="M11 11 5 17a2.8 2.8 0 1 0 4 4l6-6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

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
            <p className="gals-package-section-label">Base — FLUXA ESENCIAL</p>
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
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="gals-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            Fluxa Systems
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

      {/* 1 — HEADER */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="gals-eyebrow tracking-[0.24em]">Propuesta Fluxa · Cirugía plástica ocular</p>
          <h1 className="gals-hero-title">
            Dra. Juliana Meneses, el ecosistema digital que convierte su expertise en pacientes.
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Supraespecialista única en Cúcuta, con blefaroplastia, turismo médico y ocho líneas de servicio que hoy
            compiten por la misma atención. Esta propuesta muestra cómo activar web, automatización, pauta, CRM y
            contenido especializado — para que ningún interés se pierda en el camino.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {[
              "Web + landings por procedimiento",
              "Bots, nurturing y CRM",
              "Turismo médico + pauta",
            ].map((pill, i) => (
              <span
                key={pill}
                className="gals-pill gals-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center" data-reveal>
            <a
              href={WHATSAPP_URL}
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
            Dra. Juliana Meneses <span className="gals-muted">/</span> Fluxa Systems
          </p>
        </div>
      </section>

      {/* 2 — BENEFICIOS VISUALES */}
      <SectionBlock
        id="beneficios"
        eyebrow="El resultado"
        title="Lo que cambia cuando el sistema está activo"
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

      {/* Ventaja clínica — puente hacia el ecosistema Fluxa */}
      <SectionBlock
        id="servicios"
        eyebrow="Su ventaja clínica"
        title="Su expertise es el activo. El sistema es lo que convierte."
        subtitle="Ocho líneas de servicio, pacientes distintos en cada una. Hoy compiten por la misma atención. Fluxa construye el canal digital que corresponde a lo que usted ya domina."
        elevated
      >
        <div className="gals-stagger-group grid gap-4 lg:grid-cols-3" data-reveal>
          {PRACTICE_STRENGTHS.map((strength, i) => (
            <article
              key={strength.title}
              className="gals-card gals-service-card gals-stagger flex flex-col rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 90)}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--gals-accent-soft)]">
                  <ServiceIcon name={strength.icon} />
                </span>
                <h3 className="gals-section-label text-base font-semibold">{strength.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {strength.skills.map((skill) => (
                  <span key={skill} className="gals-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-[var(--gals-border)] pt-4">
                <p className="gals-eyebrow text-[10px] tracking-[0.18em]">Sistema Fluxa</p>
                <p className="gals-card-text mt-1.5 text-sm leading-relaxed">{strength.system}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="gals-muted mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed" data-reveal>
          No es un catálogo médico: es la base sobre la que diseñamos web, automatización, pauta y CRM bajo su
          marca.
        </p>
      </SectionBlock>

      {/* Ecosistema Fluxa — qué construimos antes del roadmap */}
      <SectionBlock
        id="fluxa"
        eyebrow="Servicios Fluxa para su práctica"
        title="Un ecosistema construido para cirugía plástica ocular"
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
      <SectionBlock id="solucion" eyebrow="Solución Fluxa" title="El ecosistema digital de la Dra. Juliana">
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

      {/* 4 — COMPARATIVA Y DIFERENCIACIÓN */}
      <SectionBlock
        id="comparativa"
        eyebrow="Diagnóstico digital"
        title="Lo que está pasando hoy"
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {DIAGNOSIS_CARDS.map((card, i) => (
            <article
              key={card.title}
              className="gals-card gals-stagger rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 90)}
            >
              <h3 className="gals-section-label text-base font-semibold sm:text-lg">{card.title}</h3>
              <p className="gals-muted mt-2 text-sm leading-relaxed">{card.desc}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="gals-reveal mt-12 text-center">
          <p className="gals-callout inline-block rounded-2xl px-6 py-8 text-lg font-medium leading-relaxed sm:px-10 sm:text-xl">
            Su especialización es única en la región. La demanda existe. Lo que falta es el sistema que la capture.
          </p>
          <p className="gals-muted mt-6 text-sm sm:text-base">
            Cada día sin ese sistema es un lead que no regresa.
          </p>
        </div>
      </SectionBlock>

      {/* 5 — CHECKOUT VISUAL */}
      <SectionBlock
        id="inversion"
        eyebrow="Inversión"
        title="Dos caminos para activar su sistema"
        subtitle="El Esencial activa captación con su procedimiento ancla. El Sistema Completo despliega web, automatización, pauta, CRM y contenido como un solo ecosistema."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-6 lg:grid-cols-2" data-reveal>
          {PACKAGES.map((pkg, i) => (
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
              <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">{pkg.name}</h3>
              <p className="gals-eyebrow mt-1 text-xs tracking-[0.16em]">{pkg.subtitle}</p>
              <p className="gals-muted mt-3 text-sm leading-relaxed">{pkg.idealFor}</p>
              <PackageIncludes pkg={pkg} essentialSections={PACKAGES[0].sections} />
              <a
                href={waUrl(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium ${
                  pkg.recommended ? "gals-btn-solid font-semibold" : "gals-btn-outline"
                }`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="gals-muted mt-8 text-center text-sm" data-reveal>
          Inversión personalizada según alcance y prioridades — la definimos en la llamada estratégica.
        </p>
        <div className="mt-8 flex justify-center" data-reveal>
          <a
            href={WHATSAPP_URL}
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
              ¿Lista para activar su ecosistema digital?
            </h2>
            <p className="gals-lead mx-auto mt-4 max-w-xl">
              Agendemos una llamada para definir el plan ideal según su práctica y objetivos de captación.
            </p>
          </header>
          <div data-reveal className="gals-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
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
              Ver planes
            </a>
          </div>
          <p className="gals-muted mt-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            Fluxa Systems · fluxamethod.com
          </p>
          <p className="gals-muted mx-auto mt-3 max-w-lg text-xs leading-relaxed">
            Este documento es confidencial y fue preparado exclusivamente para la Dra. Juliana Meneses.
          </p>
        </div>
      </SectionBlock>

      <a href="#inversion" className="gals-floating-cta">
        Ver planes
      </a>
    </main>
  );
}
