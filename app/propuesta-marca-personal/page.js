"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";

const PARTNERS_LOGO_SRC = "/imagenes/opticallery/fluxa-partners-logo.png";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "para-quien", label: "Para quién" },
  { id: "metodo", label: "Método" },
  { id: "transformacion", label: "Transformación" },
  { id: "comparativa", label: "Comparativa" },
  { id: "inversion", label: "Inversión" },
];

const AUDIENCE_ITEMS = [
  {
    icon: "👤",
    text: (
      <>
        Tienes conocimiento que otros ya te piden y sabes que podrías{" "}
        <span className="gals-pdm-highlight">monetizarlo</span>.
      </>
    ),
  },
  {
    icon: "◎",
    text: (
      <>
        Has intentado hacerlo solo, pero te falta estructura y una{" "}
        <span className="gals-pdm-highlight">ruta clara</span>.
      </>
    ),
  },
  {
    icon: "▶",
    text: (
      <>
        No quieres otro <span className="gals-pdm-highlight">curso grabado</span> que termine olvidado.
      </>
    ),
  },
  {
    icon: "↗",
    text: (
      <>
        Sabes que con <span className="gals-pdm-highlight">acompañamiento experto</span> podrías avanzar más rápido.
      </>
    ),
  },
  {
    icon: "★",
    text: (
      <>
        Quieres <span className="gals-pdm-highlight">construir algo tuyo</span>, entendiendo cómo funciona y pudiendo
        ejecutarlo después.
      </>
    ),
  },
];

const PILLARS = [
  {
    num: "01",
    title: "Claridad y oferta",
    desc: "Convertimos tu conocimiento en una propuesta estructurada que la gente entiende y paga.",
  },
  {
    num: "02",
    title: "Presencia y posicionamiento",
    desc: "Construyes tu estrategia digital: mensaje, pilares de contenido y posicionamiento que te diferencian y te hacen visible.",
  },
  {
    num: "03",
    title: "Sistema y ejecución",
    desc: "Documentas tu método en tu laboratorio personalizado y sales con una ruta clara para ejecutar, medir y escalar.",
  },
];

const INCLUDES = [
  "10 sesiones de mentoría en vivo con el equipo",
  "Laboratorio personalizado (Notion) con tu método documentado",
  "Estrategia digital: contenido, oferta y posicionamiento",
  "Plantillas y recursos listos para trabajar",
  "Grabaciones de todas las sesiones",
  "Resolución de dudas y revisión de avances en cada sesión",
];

const BEFORE_ITEMS = [
  "No sabes cómo convertir lo que sabes en una oferta que la gente pague.",
  "Publicas sin estrategia clara y sin resultados.",
  "Tienes ideas y herramientas sueltas, pero no un sistema.",
  "Dependes de improvisar cada vez que quieres vender.",
  "No tienes claridad sobre tu mensaje, tu cliente ideal ni tu diferenciador.",
];

const AFTER_ITEMS = [
  "Tienes una oferta clara, estructurada y lista para vender.",
  "Sabes qué comunicar, cómo posicionarte y atraer a las personas correctas.",
  "Tienes tu método documentado en un sistema que puedes repetir y escalar.",
  "Cuentas con una ruta digital que puedes ejecutar y optimizar constantemente.",
  "Generas autoridad, confianza y ventas a través de tu presencia digital.",
];

const COMPARATIVA_ROWS = BEFORE_ITEMS.map((before, index) => ({
  before,
  after: AFTER_ITEMS[index],
}));

const INVESTMENT_BENEFITS = [
  {
    icon: "↗",
    text: "Aprendes a construir un sistema que te permite crecer y escalar con libertad.",
  },
  {
    icon: "◷",
    text: "Acompañamiento experto para avanzar más rápido, sin perder tiempo.",
  },
  {
    icon: "★",
    text: "Te llevas claridad, estructura y un método propio que te diferenciará.",
  },
];

function TransformCards() {
  return (
    <div className="gals-pdm-transform-grid">
      <article className="gals-pdm-before-card">
        <span className="gals-pdm-card-label gals-pdm-card-label--before">Antes</span>
        <ul>
          {BEFORE_ITEMS.map((item) => (
            <li key={item} className="gals-pdm-transform-item">
              <span className="gals-pdm-transform-icon gals-pdm-transform-icon--before">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <div className="gals-pdm-transform-arrow" aria-hidden>
        »
      </div>

      <article className="gals-pdm-after-card">
        <span className="gals-pdm-card-label gals-pdm-card-label--after">Después</span>
        <ul>
          {AFTER_ITEMS.map((item) => (
            <li key={item} className="gals-pdm-transform-item">
              <span className="gals-pdm-transform-icon gals-pdm-transform-icon--after">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function OrganicFlower({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="currentColor" aria-hidden>
      <ellipse cx="60" cy="28" rx="22" ry="30" opacity="0.95" />
      <ellipse cx="88" cy="48" rx="22" ry="30" transform="rotate(72 88 48)" opacity="0.92" />
      <ellipse cx="76" cy="84" rx="22" ry="30" transform="rotate(144 76 84)" opacity="0.9" />
      <ellipse cx="44" cy="84" rx="22" ry="30" transform="rotate(216 44 84)" opacity="0.88" />
      <ellipse cx="32" cy="48" rx="22" ry="30" transform="rotate(288 32 48)" opacity="0.9" />
      <circle cx="60" cy="58" r="14" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

function ScallopShell({ className = "" }) {
  const gradId = useId();

  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 8c18 10 28 24 28 40 0 8-4 16-12 22-6 5-12 8-16 8s-10-3-16-8C16 64 12 56 12 48c0-16 10-30 28-40z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M40 16c12 7 19 17 19 28 0 5-2 10-6 14M40 16c-12 7-19 17-19 28 0 5 2 10 6 14M40 16v44"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={gradId} x1="20" y1="10" x2="60" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b8c8e4" />
          <stop offset="0.5" stopColor="#8da0c6" />
          <stop offset="1" stopColor="#d4c4e8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DecorLayer() {
  return (
    <div className="gals-kickoff-decor" aria-hidden>
      <OrganicFlower className="gals-kickoff-organic gals-kickoff-organic--lavender gals-kickoff-organic--1" />
      <OrganicFlower className="gals-kickoff-organic gals-kickoff-organic--sage gals-kickoff-organic--2" />
      <OrganicFlower className="gals-kickoff-organic gals-kickoff-organic--periwinkle gals-kickoff-organic--3" />
      <OrganicFlower className="gals-kickoff-organic gals-kickoff-organic--lavender gals-kickoff-organic--4" />
      <OrganicFlower className="gals-kickoff-organic gals-kickoff-organic--stone gals-kickoff-organic--5" />
      <OrganicFlower className="gals-kickoff-organic gals-kickoff-organic--sage gals-kickoff-organic--6" />
      <ScallopShell className="gals-kickoff-shell gals-kickoff-shell--1" />
      <ScallopShell className="gals-kickoff-shell gals-kickoff-shell--2" />
      <ScallopShell className="gals-kickoff-shell gals-kickoff-shell--3" />
    </div>
  );
}

function SectionBlock({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${className}`}>
      <div data-reveal className="gals-reveal mx-auto w-full max-w-[var(--kickoff-max)]">
        {(eyebrow || title || subtitle) && (
          <header className="max-w-3xl">
            {eyebrow ? <p className="gals-eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h2 className="gals-kickoff-display mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.65rem]">
                {title}
              </h2>
            ) : null}
            {subtitle ? <p className="gals-lead mt-4 max-w-2xl">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaMarcaPersonalPage() {
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
      { threshold: 0.3, rootMargin: "-10% 0px -45% 0px" }
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
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    document.querySelectorAll("[data-reveal], .gals-stagger-group").forEach((el) => revealObserver.observe(el));

    document.querySelectorAll("#hero [data-reveal], #hero .gals-reveal").forEach((el) => {
      el.classList.add("is-visible");
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  const ctaWa = waUrl(
    "Hola Partnersflux. Soy Natalia Galvis. Quiero la mentoría PDM para construir mi sistema de presencia digital monetizable."
  );

  return (
    <main className="gals-kickoff-page">
      <DecorLayer />

      <div className="gals-kickoff-content">
        <div className="gals-kickoff-progress fixed left-0 top-0 z-50 w-full">
          <div className="gals-kickoff-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <nav className="gals-kickoff-nav sticky top-0 z-40">
          <div className="mx-auto flex w-full max-w-[var(--kickoff-max)] items-center gap-2.5 overflow-x-auto px-4 py-3 sm:px-6">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gals-muted)]">
              Mentoría PDM
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`gals-kickoff-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  activeSection === item.id ? "gals-kickoff-nav-link--active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="hero" className="gals-kickoff-hero scroll-mt-28 px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
          <div className="mx-auto w-full max-w-[var(--kickoff-max)]">
            <div data-reveal className="gals-reveal flex flex-col items-center text-center">
              <span className="gals-pdm-badge">Mentoría PDM</span>
              <Image
                src={PARTNERS_LOGO_SRC}
                alt="Partnersflux"
                width={160}
                height={64}
                className="mt-8 h-auto w-32 sm:w-40"
                priority
              />
              <p className="gals-muted mt-6 text-sm font-medium tracking-wide sm:text-base">
                Natalia Galvis × Partnersflux
              </p>
              <h1 className="gals-kickoff-display gals-pdm-hero-title mt-6 max-w-4xl font-semibold uppercase">
                Aprende a construir tu propio sistema de presencia digital monetizable
              </h1>
              <p className="gals-lead mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
                10 sesiones en vivo. Laboratorio personalizado. Estrategia digital. Tú lo construyes, nosotros te
                guiamos en cada paso.
              </p>
              <a
                href={ctaWa}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-solid mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Quiero mi mentoría PDM →
              </a>
            </div>
          </div>
        </section>

        <SectionBlock
          id="para-quien"
          eyebrow="02 — Audiencia"
          title="¿Para quién es esto?"
          subtitle={
            <>
              Esto es para <span className="gals-pdm-highlight">ti</span> si...
            </>
          }
        >
          <div className="gals-pdm-audience-list max-w-2xl">
            {AUDIENCE_ITEMS.map((item, i) => (
              <article key={i} className="gals-pdm-audience-item">
                <div className="gals-pdm-audience-icon" aria-hidden>
                  {item.icon}
                </div>
                <p className="text-sm leading-relaxed text-[var(--gals-heading)] sm:text-[15px]">{item.text}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="metodo"
          eyebrow="03 — Método"
          title="Método PDM"
          subtitle="Un sistema probado para convertir tu conocimiento en presencia, oferta y resultados."
        >
          <div className="gals-kickoff-main-card rounded-3xl p-5 sm:p-7">
            <div className="grid gap-5 lg:grid-cols-3">
              {PILLARS.map((pillar) => (
                <article key={pillar.num} className="gals-kickoff-pillar rounded-2xl p-6 sm:p-7">
                  <p className="gals-pdm-pillar-num">{pillar.num}</p>
                  <h3 className="gals-kickoff-display mt-2 text-xl uppercase sm:text-2xl">{pillar.title}</h3>
                  <p className="gals-pdm-pillar-desc">{pillar.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
              <div className="gals-pdm-includes-card">
                <p className="gals-eyebrow">Qué incluye</p>
                <ul className="gals-muted mt-4 space-y-2.5 text-sm leading-relaxed sm:text-[15px]">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="gals-accent-text shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="gals-pdm-disclaimer">
                <strong>PDM es una mentoría de construcción guiada.</strong> No incluye: landing page, automatizaciones,
                checkout ni Meta Ads. Tú construyes tu sistema y nosotros te guiamos durante el proceso.
              </div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock
          id="transformacion"
          eyebrow="04 — Visión"
          title="La transformación"
          subtitle="De la confusión y la improvisación a un sistema que te posiciona, atrae y te genera ingresos."
        >
          <TransformCards />
        </SectionBlock>

        <SectionBlock id="comparativa" eyebrow="05 — Comparativa" title="Antes y después">
          <div className="gals-kickoff-table-wrap gals-pdm-comparativa-wrap rounded-2xl">
            <div className="gals-kickoff-table-head grid grid-cols-2 gap-2 px-4 py-3.5 sm:px-6">
              <span>Antes</span>
              <span>Después</span>
            </div>
            {COMPARATIVA_ROWS.map((row) => (
              <div
                key={row.before}
                className="gals-kickoff-table-row grid grid-cols-2 gap-3 px-4 py-3.5 text-sm leading-relaxed sm:px-6 sm:py-4"
              >
                <span className="gals-muted">{row.before}</span>
                <span className="gals-kickoff-table-after">{row.after}</span>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="inversion"
          eyebrow="06 — Inversión"
          title="Tu inversión"
          subtitle="Invierte en tu conocimiento. Construye tu sistema. Genera impacto y resultados."
        >
          <div className="gals-pdm-investment-grid">
            <div className="gals-kickoff-main-card rounded-3xl p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="gals-kickoff-discount-badge">-14%</span>
                <span className="gals-kickoff-price-original">$347 USD</span>
              </div>
              <p className="gals-kickoff-price-hero gals-kickoff-display mt-3 font-semibold">$297 USD</p>
              <span className="gals-pdm-launch-badge mt-3 inline-flex">Precio de lanzamiento</span>
              <p className="gals-muted mt-4 text-sm">Cupos limitados por cohorte.</p>
              <a
                href={ctaWa}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-solid mt-8 inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold sm:w-auto"
              >
                Quiero construir mi sistema PDM →
              </a>
            </div>

            <div className="gals-kickoff-main-card rounded-3xl p-7 sm:p-10">
              <p className="gals-eyebrow">Inversión en ti, retorno en libertad</p>
              <div className="mt-5">
                {INVESTMENT_BENEFITS.map((benefit) => (
                  <div key={benefit.text} className="gals-pdm-benefit-item">
                    <span className="gals-pdm-benefit-icon" aria-hidden>
                      {benefit.icon}
                    </span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
              <p className="gals-muted mt-6 text-sm leading-relaxed">
                Tú construyes el sistema.{" "}
                <span className="gals-pdm-highlight">Nosotros te guiamos en cada paso.</span>
              </p>
            </div>
          </div>
        </SectionBlock>

        <footer className="gals-kickoff-footer-band px-4 py-5 text-center text-sm font-medium sm:px-6">
          <p className="flex flex-wrap items-center justify-center gap-3">
            <span>Partnersflux</span>
            <span className="hidden h-4 w-px bg-white/40 sm:inline" aria-hidden />
            <span className="text-xs opacity-90 sm:text-sm">Método PDM · Marca personal</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
