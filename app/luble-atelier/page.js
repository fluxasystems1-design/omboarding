"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const WHATSAPP_URL = "https://wa.me/573116425337";
const WHATSAPP_SCHEDULE_MESSAGE =
  "Hola Fluxa Method. Soy Luble Atelier, revisé la propuesta y quiero agendar una llamada.";
const LUBLE_LOGO = "/imagenes/luble-atelier/logo.png";
const FLUXA_PARTNERS_LOGO = "/imagenes/luble-atelier/fluxa-partners-logo.png";

function waUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function formatUsd(value) {
  return value.toLocaleString("en-US");
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "beneficios", label: "Beneficios" },
  { id: "servicios", label: "La marca" },
  { id: "solucion", label: "Cómo funciona" },
  { id: "comparativa", label: "Diagnóstico" },
  { id: "inversion", label: "Inversión" },
  { id: "cierre", label: "Cierre" },
];

const RESULT_ITEMS = [
  "Una landing del evento que convierte interés en registro",
  "Instagram respondiendo sola mientras ustedes están en clase",
  "Marca Luble con casa digital propia — más allá del evento",
];

const PRACTICE_STRENGTHS = [
  {
    icon: "calendar",
    title: "Eventos barre + pilates",
    today:
      "Tienen experiencias y clases con identidad propia — pero cada evento se promociona desde cero en stories y DMs, sin una página que concentre fecha, beneficio y CTA.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Luble",
    skills: ["Barre · Pilates", "Experiencias en vivo", "Comunidad en Instagram"],
    systemLabel: "Cómo lo potencia Fluxa",
    system:
      "Landing del evento con hero, descripción, beneficios, galería y registro — un solo link para bio, stories y pauta. Todo listo antes de abrir inscripciones.",
  },
  {
    icon: "message",
    title: "Instagram @lubleatelier",
    today:
      "El interés llega por comentarios y DMs — pero sin automatización cada «INFO» depende de que alguien esté disponible para responder.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Luble",
    skills: ["@lubleatelier", "Comentarios en posts", "DMs de interesadas"],
    systemLabel: "Cómo lo potencia Fluxa",
    system:
      "Palabra clave en comentarios: quien escribe la keyword recibe mensaje automático con info del evento + link a la landing. Seguimiento a los 30 min para cerrar reserva.",
  },
  {
    icon: "sparkles",
    title: "Marca y espacio",
    today:
      "Luble Atelier tiene estética y propuesta claras en el espacio físico — en digital aún no hay una home que cuente quiénes son, qué ofrecen y cómo reservar más allá de un evento puntual.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Luble",
    skills: ["Identidad visual", "Fotos del estudio", "Experiencia presencial"],
    systemLabel: "Cómo lo potencia Fluxa",
    system:
      "Home de marca: hero, quiénes son, clases y experiencias, galería y contacto. La landing del evento vive como ruta separada dentro del mismo dominio.",
  },
  {
    icon: "home",
    title: "Registro e inscripciones",
    today:
      "Hoy el cierre depende de conversaciones manuales — sin formulario estructurado ni embudo que separe curiosas de inscritas confirmadas.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Luble",
    skills: ["WhatsApp", "Lista manual", "Cupos limitados"],
    systemLabel: "Cómo lo potencia Fluxa",
    system:
      "Formulario simple en la landing (nombre, email, teléfono) o botón directo a WhatsApp — según lo que prefieran. Un solo destino para no perder leads del evento.",
  },
];

const ROADMAP_ITEMS = [
  {
    num: 1,
    title: "Brief y contenido",
    desc: "Recopilamos nombre del evento, fecha, hora, fotos del espacio, texto de descripción y si prefieren formulario o WhatsApp.",
  },
  {
    num: 2,
    title: "Landing del evento",
    desc: "Diseño, desarrollo y publicación. Una sola página optimizada para convertir visitas en registros.",
  },
  {
    num: 3,
    title: "Automatización (Plan B y C)",
    desc: "Conexión a sus redes, palabra clave en comentarios, flujo de mensajes y seguimiento automático a los 30 minutos.",
  },
  {
    num: 4,
    title: "Home de marca (Plan C)",
    desc: "Sitio completo de Luble Atelier con la landing del evento integrada bajo dominio propio.",
  },
];

const DIAGNOSIS_CARDS = [
  {
    title: "Sin landing del evento",
    desc: "Cada promoción depende de stories y mensajes sueltos — sin una página que concentre fecha, propuesta y CTA de registro.",
  },
  {
    title: "DMs y comentarios sin sistema",
    desc: "Quien comenta «INFO» o escribe por DM espera respuesta manual. Si tardan, el interés se enfría.",
  },
  {
    title: "Marca sin casa digital",
    desc: "Luble tiene identidad en el estudio — pero no una web propia que cuente la experiencia más allá de un evento puntual.",
  },
  {
    title: "Registro disperso",
    desc: "Sin formulario ni embudo claro, las inscripciones quedan en chats sueltos y listas difíciles de seguir.",
  },
];

const PACKAGES = [
  {
    tier: "Plan A",
    name: "Landing evento",
    subtitle: "Una página, un objetivo",
    price: 180,
    idealFor:
      "Para lanzar un evento de barre + pilates con una sola página que convierta — hero, descripción, beneficios, galería y registro.",
    recommended: false,
    sections: [
      {
        label: "Landing del evento",
        items: [
          "Hero — evento + fecha + CTA",
          "Descripción barre + pilates y audiencia",
          "3 beneficios · galería de fotos",
          "Formulario (nombre, email, teléfono) o WhatsApp",
          "Footer mínimo",
        ],
      },
      {
        label: "Publicación",
        items: ["Página lista para compartir y publicar", "Dominio no incluido"],
      },
    ],
    cta: "Quiero Plan A",
    waMessage:
      "Hola Fluxa Method. Soy Luble Atelier, revisé la propuesta y me interesa el Plan A — Landing evento ($180).",
  },
  {
    tier: "Plan B",
    name: "Landing + automatización",
    subtitle: "Evento + redes automáticas",
    price: 320,
    idealFor:
      "Para llenar el evento desde redes — landing del Plan A más respuestas automáticas en comentarios y mensajes directos.",
    recommended: true,
    includesPrevious: true,
    baseLabel: "Plan A — Landing evento",
    sections: [
      {
        label: "Automatización en redes",
        items: [
          "Palabra clave en comentarios del post del evento",
          "Mensaje automático con info del evento + link a la landing",
          "Respuesta automática a mensajes entrantes",
          "Seguimiento a los 30 min para cerrar reserva",
          "Configuración de accesos necesarios en sus cuentas",
        ],
      },
    ],
    cta: "Quiero Plan B",
    waMessage:
      "Hola Fluxa Method. Soy Luble Atelier, revisé la propuesta y me interesa el Plan B — Landing + automatización ($320).",
  },
  {
    tier: "Plan C",
    name: "Ecosistema completo",
    subtitle: "Marca + evento + automatización",
    price: 420,
    idealFor:
      "Para instalar la marca Luble en digital — todo el Plan B más home de atelier con la landing del evento integrada.",
    recommended: false,
    includesPrevious: true,
    baseLabel: "Plan A + Plan B",
    previousSections: null,
    sections: [
      {
        label: "Home Luble Atelier",
        items: [
          "Hero de marca · quiénes son",
          "Clases y experiencias · galería",
          "Contacto y redes sociales",
          "Landing del evento como subpágina",
          "Dominio propio recomendado (.com o .co)",
        ],
      },
    ],
    cta: "Quiero Plan C",
    waMessage:
      "Hola Fluxa Method. Soy Luble Atelier, revisé la propuesta y me interesa el Plan C — Ecosistema completo ($420).",
  },
];

function ServiceIcon({ name }) {
  const props = { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.75" };
  switch (name) {
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      );
    case "message":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.4 8.4 0 0 1-1.1 4.2 8.5 8.5 0 0 1-7.5 4.5 8.4 8.4 0 0 1-4.2-1.1L3 21l1.9-5.2" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...props}>
          <path d="M12 3l1.2 4.2L17.5 8.5 13.2 9.7 12 14l-1.2-4.3L6.5 8.5l4.3-1.3L12 3Z" />
          <path d="M5 17l.6 2.1L7.7 20l-2.1.6L5 23l-.6-2.4L2.3 20l2.1-.6L5 17Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
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

function PackageIncludes({ pkg, planASections, allPackages }) {
  const baseSections = pkg.previousSections
    ? pkg.previousSections
    : pkg.tier === "Plan C"
      ? [...planASections, ...(allPackages[1]?.sections || [])]
      : planASections;

  const totalItems = pkg.includesPrevious
    ? flattenPackageSections(baseSections).length + flattenPackageSections(pkg.sections).length
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
            <p className="gals-package-section-label">{pkg.baseLabel || "Plan anterior"}</p>
            <PackageCheckList items={flattenPackageSections(baseSections)} />
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

export default function LubleAtelierPage() {
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

      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="gals-hero-partners mb-10 flex w-full max-w-3xl flex-row items-center gap-2 sm:mb-12 sm:gap-4">
            <div className="gals-hero-logo-wrap gals-hero-logo-wrap--dark flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={LUBLE_LOGO}
                alt="Luble Atelier"
                width={480}
                height={480}
                priority
                className="gals-hero-logo h-20 w-full object-contain p-4 sm:h-32 sm:p-5 md:h-36"
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
                className="gals-hero-logo h-20 w-full max-w-full object-contain p-3 sm:h-32 sm:p-4 md:h-36"
              />
            </div>
          </div>
          <p className="gals-eyebrow tracking-[0.24em]">Propuesta Fluxa · Barre &amp; Pilates</p>
          <h1 className="gals-hero-title">
            Luble Atelier, la landing que llena tu evento y deja la marca instalada.
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Tienen experiencias de barre y pilates con identidad propia — pero cada evento se promociona
            sin una página de cierre ni respuestas automáticas en redes. Fluxa construye la landing, el flujo de
            mensajes y, si lo necesitan, la casa digital completa de la marca.
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
              href="#inversion"
              className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium"
            >
              Ver planes
            </a>
          </div>
          <p data-reveal className="gals-reveal gals-accent-text mt-8 text-sm font-medium">
            Luble Atelier <span className="gals-muted">/</span> Fluxa Systems
          </p>
        </div>
      </section>

      <SectionBlock
        id="beneficios"
        eyebrow="El resultado"
        title="Lo que cambia cuando el sistema está activo"
        subtitle="No es empezar de cero — es que cada evento y cada DM dejen de depender del esfuerzo manual."
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

      <SectionBlock
        id="servicios"
        eyebrow="La marca hoy"
        title="Luble Atelier, mejor conectada"
        subtitle="Experiencias presenciales con estética propia — lo que falta es el sistema digital que las promocione y cierre."
        elevated
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
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
              <p className="gals-muted mt-3 text-xs leading-relaxed sm:text-sm">{strength.today}</p>
              <p className="gals-eyebrow mt-4 text-[10px] tracking-[0.18em]">{strength.skillsLabel}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {strength.skills.map((skill) => (
                  <span key={skill} className="gals-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-[var(--gals-border)] pt-4">
                <p className="gals-eyebrow text-[10px] tracking-[0.18em]">{strength.systemLabel}</p>
                <p className="gals-card-text mt-1.5 text-sm leading-relaxed">{strength.system}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="solucion"
        eyebrow="Solución Fluxa"
        title="Cómo funciona el proyecto"
        subtitle="Cuatro fases — de brief a ecosistema completo."
      >
        <div className="gals-timeline-group gals-stagger-group max-w-2xl" data-reveal>
          {ROADMAP_ITEMS.map((item, i) => (
            <RoadmapPhase key={item.num} item={item} index={i} isLast={i === ROADMAP_ITEMS.length - 1} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="comparativa"
        eyebrow="Diagnóstico digital"
        title="Lo que está pasando hoy"
        subtitle="No es falta de propuesta ni de comunidad — es falta de landing y automatización."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {DIAGNOSIS_CARDS.map((card, i) => (
            <article key={card.title} className="gals-card gals-stagger rounded-xl p-5 sm:p-6" style={staggerStyle(i, 90)}>
              <h3 className="gals-section-label text-base font-semibold sm:text-lg">{card.title}</h3>
              <p className="gals-muted mt-2 text-sm leading-relaxed">{card.desc}</p>
            </article>
          ))}
        </div>
        <div data-reveal className="gals-reveal mt-12 text-center">
          <p className="gals-callout inline-block rounded-2xl px-6 py-8 text-lg font-medium leading-relaxed sm:px-10 sm:text-xl">
            Tienen la experiencia y la estética. La demanda llega por redes. Lo que falta es la página y el sistema
            que conviertan ese interés en inscritas.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock
        id="inversion"
        eyebrow="Inversión"
        title="Tres planes para Luble Atelier"
        subtitle="Del evento puntual al ecosistema de marca — eligen según el alcance que necesiten hoy."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-6 lg:grid-cols-3" data-reveal>
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
              {pkg.price ? (
                <p className="gals-price mt-2 text-2xl font-semibold sm:text-3xl">${formatUsd(pkg.price)} USD</p>
              ) : null}
              <p className="gals-eyebrow mt-1 text-xs tracking-[0.16em]">{pkg.subtitle}</p>
              <p className="gals-muted mt-3 text-sm leading-relaxed">{pkg.idealFor}</p>
              <PackageIncludes pkg={pkg} planASections={PACKAGES[0].sections} allPackages={PACKAGES} />
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
        <div className="mt-8 flex justify-center" data-reveal>
          <a
            href={waUrl(WHATSAPP_SCHEDULE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            Agendar llamada
          </a>
        </div>
      </SectionBlock>

      <SectionBlock id="cierre" elevated alt>
        <div className="text-center">
          <header data-reveal className="gals-reveal gals-reveal-header">
            <h2 className="gals-heading text-2xl sm:text-3xl md:text-4xl">
              ¿Listas para activar la presencia digital de Luble Atelier?
            </h2>
            <p className="gals-lead mx-auto mt-4 max-w-xl">
              Agendemos una llamada para definir el plan ideal según su próximo evento y objetivos de marca.
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
              Ver planes
            </a>
          </div>
          <p className="gals-muted mt-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            Fluxa Systems · fluxamethod.com
          </p>
          <p className="gals-muted mx-auto mt-3 max-w-lg text-xs leading-relaxed">
            Este documento es confidencial y fue preparado exclusivamente para Luble Atelier.
          </p>
        </div>
      </SectionBlock>

      <a href="#inversion" className="gals-floating-cta">
        Ver planes
      </a>
    </main>
  );
}
