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
  { id: "proposito", label: "Propósito" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "metas", label: "Metas" },
  { id: "magnetica", label: "Fase Magnética" },
  { id: "monetizable", label: "Fase Monetizable" },
  { id: "conexion", label: "Conexión" },
  { id: "resumen", label: "Resumen" },
];

const PURPOSE = [
  {
    title: "Fase Magnética",
    text: "Convertir a Natalia en un imán: que su historia, su identidad y su trayectoria como fundadora atraigan marcas, eventos y oportunidades, sin que ella tenga que salir a buscarlas.",
  },
  {
    title: "Fase Monetizable",
    text: "Que Natalia convierta su conocimiento en un ecosistema que factura por sí solo — dejando de depender de vender su tiempo, para vivir de un sistema que trabaja incluso cuando ella no está.",
  },
];

const GOALS = [
  "Posicionar a Natalia como referente del coaching y el wellness, visible para marcas, eventos y colaboraciones de imagen.",
  "Construir contenido estratégico que muestre su vida como emprendedora y su proceso construyendo GAL's, complementando —no compitiendo con— la cuenta del estudio.",
  "Dejar un portafolio real y un sistema de presencia que siga trabajando incluso cuando ella no está publicando.",
  "Sentar la base para que, cuando decida activarlas, existan otras líneas de negocio posibles: mentoría, método propio, certificaciones.",
  "Formalizar, si esa línea de producto propio se activa, una alianza donde Partnersflux participa del resultado y no solo cobra por el trabajo.",
];

const OBJECTIVES = [
  "Cerrar la Fase Magnética con Natalia publicando de forma consistente y con un portafolio listo para mostrar a marcas.",
  "Validar, con esa base construida, si hay tracción suficiente para pasar a la Fase Monetizable.",
  "Formalizar la alianza sobre todo el ecosistema —digital y presencial— que nazca de su marca personal.",
  "Sostener la relación con reuniones semanales, para que la estrategia se ajuste en tiempo real.",
];

const CONTENT_PILLARS = [
  {
    num: "01",
    title: "Detrás de GAL's — la fundadora",
    desc: "Su proceso real construyendo el estudio: decisiones, aprendizajes, lo que no se ve en el feed pulido. Es el pilar más difícil de copiar por cualquier competencia, y el punto donde su historia personal y la marca GAL's se complementan de forma natural.",
  },
  {
    num: "02",
    title: "Autoridad de movimiento — la coach",
    desc: "Su criterio sobre pilates, barre y bienestar, en formato corto y accesible. Construye la credibilidad técnica que sostiene cualquier propuesta de marca.",
  },
  {
    num: "03",
    title: "Presencia — la imagen",
    desc: "Contenido pensado para que un brand manager vea estética y profesionalismo. Entra después de los otros dos pilares, cuando el perfil ya tiene contexto, respetando que Natalia quiere avanzar despacio en exponerse como imagen desde el primer día.",
  },
];

const SCHEDULE = [
  { sessions: "1-2", focus: "Ángulo de marca + confirmar dónde vive el contenido personal" },
  { sessions: "3-5", focus: 'Pilares "Detrás de GAL\'s" y "Autoridad de movimiento"' },
  { sessions: "6-8", focus: "Introducción gradual del pilar de presencia/imagen" },
  { sessions: "9-10", focus: "Portafolio para marcas, Linktree y sistema documentado" },
];

const DELIVERABLES = [
  "10 sesiones en vivo con grabaciones",
  "Laboratorio en Notion con los 3 pilares y calendario de contenido",
  "Portafolio para marcas",
  "Linktree profesional",
];

const ALLIANCE_POINTS = [
  {
    title: "Cómo se vuelve real esta alianza",
    text: "Nosotros montamos el ecosistema completo de pagos y distribución — digital y presencial. Cuando el producto se instala en Hotmart o Skool, Partnersflux queda registrado directamente como coproductor (Hotmart) o socio/admin (Skool), con un split automático del 35%/65% en cada venta. Los eventos presenciales también pasan por nuestra infraestructura, con el mismo split del 35%.",
  },
  {
    title: "Qué significa esto para ti",
    text: "Dejamos de cobrarte por hora o por proyecto. Ponemos estrategia, contenido, automatizaciones, pauta, desarrollo técnico y logística de eventos sin pago adelantado. A cambio, participamos con el 35% de lo neto que genere el ecosistema completo — digital y presencial.",
  },
  {
    title: "Quién es dueño de qué",
    text: "Tu método, tu nombre y tu forma de enseñar siempre son tuyos. El registro como coproductor es un mecanismo de reparto de ingresos, no te quita propiedad. Lo que sí es de ambos es el ecosistema que construimos juntas: sistema de ventas, automatizaciones e infraestructura.",
  },
];

const NUMBERS = [
  { label: "Ingreso bruto (programa + membresía + evento presencial)", value: "$5.000.000" },
  { label: "(−) Comisión de plataformas de pago", value: "−$250.000" },
  { label: "(−) Pauta publicitaria de todo el ecosistema", value: "−$800.000" },
  { label: "(−) Producción y logística (todas las piezas)", value: "−$200.000" },
  { label: "Neto del ecosistema completo", value: "$3.750.000", strong: true },
  { label: "Para ti (65%)", value: "$2.437.500", highlight: true },
  { label: "Para Partnersflux (35%)", value: "$1.312.500", highlight: true },
];

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
      { threshold: 0.25, rootMargin: "-10% 0px -45% 0px" }
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

    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
    document.querySelectorAll("#hero [data-reveal], #hero .gals-reveal").forEach((el) => {
      el.classList.add("is-visible");
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  const ctaHero = waUrl(
    "Hola Partnersflux. Soy Natalia Galvis. Revisé la propuesta completa PDM — Presencia Digital Magnética y Monetizable — y quiero conversar sobre ella."
  );
  const ctaMagnetica = waUrl(
    "Hola Partnersflux. Soy Natalia Galvis. Quiero avanzar con la Fase Magnética de PDM ($297 USD)."
  );
  const ctaMonetizable = waUrl(
    "Hola Partnersflux. Soy Natalia Galvis. Revisé la Fase Monetizable de PDM y quiero resolver dudas sobre la alianza."
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
              PDM
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

        {/* 01 HERO */}
        <section id="hero" className="gals-kickoff-hero scroll-mt-28 px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
          <div className="mx-auto w-full max-w-[var(--kickoff-max)]">
            <div data-reveal className="gals-reveal flex flex-col items-center text-center">
              <span className="gals-pdm-badge">Propuesta completa</span>
              <Image
                src={PARTNERS_LOGO_SRC}
                alt="Partnersflux"
                width={160}
                height={64}
                className="mt-8 h-auto w-32 sm:w-40"
                priority
              />
              <p className="gals-muted mt-6 text-sm font-medium tracking-wide sm:text-base">
                Partnersflux × Natalia Galvis
              </p>
              <h1 className="gals-kickoff-display gals-pdm-hero-title mt-6 max-w-4xl font-semibold">
                PDM — Presencia Digital Magnética y Monetizable
              </h1>
              <p className="gals-lead mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
                Construimos la marca personal que atrae marcas, eventos y oportunidades — y la convertimos en un
                ecosistema propio cuando estés lista para monetizarlo.
              </p>
              <a
                href={ctaHero}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-solid mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Quiero conversar sobre PDM →
              </a>
            </div>
          </div>
        </section>

        {/* 02 PROPÓSITO */}
        <SectionBlock
          id="proposito"
          eyebrow="01 — Propósito"
          title="Dos fases. Un mismo camino."
          subtitle="Primero atraer. Después monetizar. En ese orden."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {PURPOSE.map((item) => (
              <article key={item.title} className="gals-kickoff-pillar rounded-2xl p-6 sm:p-7">
                <p className="gals-eyebrow">{item.title}</p>
                <p className="gals-muted mt-4 text-sm leading-relaxed sm:text-[15px]">{item.text}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        {/* 03 DIAGNÓSTICO */}
        <SectionBlock
          id="diagnostico"
          eyebrow="02 — Diagnóstico"
          title="El diagnóstico"
          subtitle="El problema no es que las marcas no la vean. Es que ven a GAL's, no a ella."
        >
          <div className="gals-kickoff-main-card space-y-5 rounded-3xl p-6 sm:p-9">
            <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
              Todo lo que existe hoy de Natalia en redes vive dentro de la narrativa de GAL&apos;s como estudio. Eso
              construye el negocio del estudio, atrae alumnas y factura clases — pero no construye un activo separado
              llamado &quot;Natalia&quot;, que es justo lo que necesita cualquier marca, evento o colaboración de imagen
              para encontrarla y evaluarla.
            </p>
            <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
              No se trata de separar ambos activos, sino de que Natalia muestre su propio proceso de construir GAL&apos;s:
              sus decisiones, sus aprendizajes, su camino como fundadora. Eso es lo que GAL&apos;s como marca no puede
              contar, porque GAL&apos;s habla de las clases y la comunidad, no de quién está detrás construyéndolo.
            </p>
            <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
              GAL&apos;s ya tiene comunidad y visibilidad real, así que este es el momento de sumar esa capa: hay
              audiencia dispuesta a seguir el proceso de su fundadora, no solo el resultado del estudio. Cuanto más se
              espera, más se pierde la oportunidad de que ambos se complementen y crezcan juntos.
            </p>
          </div>
        </SectionBlock>

        {/* 04 METAS + OBJETIVOS */}
        <SectionBlock id="metas" eyebrow="03 — Dirección" title="Metas y objetivos">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="gals-pdm-includes-card">
              <p className="gals-eyebrow">Metas</p>
              <ul className="gals-muted mt-4 space-y-3 text-sm leading-relaxed sm:text-[15px]">
                {GOALS.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="gals-accent-text mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gals-pdm-includes-card">
              <p className="gals-eyebrow">Objetivos</p>
              <ul className="gals-muted mt-4 space-y-3 text-sm leading-relaxed sm:text-[15px]">
                {OBJECTIVES.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="gals-accent-text mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionBlock>

        {/* 05 FASE MAGNÉTICA */}
        <SectionBlock
          id="magnetica"
          eyebrow="04 — Fase Magnética"
          title="Marca personal, eventos y contenido"
          subtitle="Las marcas buscan estética, historia real y evidencia. Natalia ya tiene las dos primeras — falta empaquetar la evidencia."
        >
          <div className="space-y-8">
            <div className="gals-kickoff-main-card rounded-3xl p-6 sm:p-8">
              <p className="gals-eyebrow">El principio detrás de la estrategia</p>
              <p className="gals-muted mt-4 text-sm leading-relaxed sm:text-[15px]">
                Las marcas no buscan coaches al azar. Buscan tres cosas, en este orden: una estética reconocible, una
                historia que se sienta real y evidencia de que ya trabajaron con otros antes. Natalia ya tiene la estética
                y la historia — lo que falta es empaquetar esa evidencia para que una marca decida, en segundos de scroll,
                si ella es la persona correcta para su evento o campaña.
              </p>
            </div>

            <div>
              <p className="gals-eyebrow mb-4">Los 3 pilares de contenido</p>
              <div className="grid gap-5 lg:grid-cols-3">
                {CONTENT_PILLARS.map((pillar) => (
                  <article key={pillar.num} className="gals-kickoff-pillar rounded-2xl p-6">
                    <p className="gals-pdm-pillar-num">{pillar.num}</p>
                    <h3 className="gals-kickoff-display mt-2 text-xl sm:text-2xl">{pillar.title}</h3>
                    <p className="gals-pdm-pillar-desc">{pillar.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="gals-pdm-disclaimer">
              <strong>Dónde vive esto.</strong> Un perfil personal de Natalia que se complementa con @galstudio___, sin
              competir con él. GAL&apos;s sigue hablando de la marca, la comunidad y las clases; el perfil de Natalia
              muestra el proceso detrás — su camino, su identidad, sus decisiones como fundadora.
            </div>

            <div>
              <p className="gals-eyebrow mb-4">Cronograma — 10 sesiones</p>
              <div className="gals-kickoff-table-wrap gals-pdm-comparativa-wrap rounded-2xl">
                <div className="gals-kickoff-table-head grid grid-cols-[7rem_1fr] gap-2 px-4 py-3.5 sm:grid-cols-[9rem_1fr] sm:px-6">
                  <span>Sesiones</span>
                  <span>Enfoque</span>
                </div>
                {SCHEDULE.map((row) => (
                  <div
                    key={row.sessions}
                    className="gals-kickoff-table-row grid grid-cols-[7rem_1fr] gap-3 px-4 py-3.5 text-sm leading-relaxed sm:grid-cols-[9rem_1fr] sm:px-6 sm:py-4"
                  >
                    <span className="gals-kickoff-table-after font-semibold">{row.sessions}</span>
                    <span className="gals-muted">{row.focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="gals-pdm-includes-card">
                <p className="gals-eyebrow">Entregables</p>
                <ul className="gals-muted mt-4 space-y-2.5 text-sm leading-relaxed sm:text-[15px]">
                  {DELIVERABLES.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="gals-accent-text shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="gals-muted mt-5 text-xs leading-relaxed sm:text-sm">
                  No incluye gestión de contratos con marcas, negociación en su nombre ni producción audiovisual.
                </p>
              </div>

              <div className="gals-kickoff-main-card rounded-3xl p-6 sm:p-8">
                <p className="gals-eyebrow">Inversión — Fase Magnética</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="gals-kickoff-discount-badge">Lanzamiento</span>
                  <span className="gals-kickoff-price-original">$345 USD</span>
                </div>
                <p className="gals-kickoff-price-hero gals-kickoff-display mt-2 font-semibold">$297 USD</p>
                <p className="gals-muted mt-3 text-sm">Pago único o 2 cuotas de $160 USD.</p>
                <a
                  href={ctaMagnetica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gals-btn-solid mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Quiero la Fase Magnética →
                </a>
              </div>
            </div>
          </div>
        </SectionBlock>

        {/* 06 FASE MONETIZABLE */}
        <SectionBlock
          id="monetizable"
          eyebrow="05 — Fase Monetizable"
          title="Alianza de ecosistema digital y presencial"
          subtitle="Cuando decidas dar el siguiente paso, no te ofrecemos un contrato de servicios más. Arrancamos como tus socios."
        >
          <div className="space-y-8">
            <div className="gals-kickoff-main-card rounded-3xl p-6 sm:p-8">
              <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
                Todo lo que construimos en la Fase Magnética es la base que hace posible que, cuando decidas convertir tu
                conocimiento en algo propio, no empieces de cero. Nos sentamos a definir el producto, el objetivo del
                primer lanzamiento y el cronograma — y arrancamos como socios de todo el ecosistema que construyamos
                juntas, digital y presencial: programas, membresías, bootcamps, eventos, experiencias en vivo.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {ALLIANCE_POINTS.map((item) => (
                <article key={item.title} className="gals-kickoff-pillar rounded-2xl p-6">
                  <h3 className="gals-kickoff-display text-xl sm:text-2xl">{item.title}</h3>
                  <p className="gals-pdm-pillar-desc">{item.text}</p>
                </article>
              ))}
            </div>

            <div>
              <p className="gals-eyebrow mb-4">Cómo se ve esto en números reales</p>
              <div className="gals-kickoff-table-wrap gals-pdm-comparativa-wrap rounded-2xl">
                <div className="gals-kickoff-table-head grid grid-cols-[1fr_auto] gap-2 px-4 py-3.5 sm:px-6">
                  <span>Concepto</span>
                  <span>Monto</span>
                </div>
                {NUMBERS.map((row) => (
                  <div
                    key={row.label}
                    className={`gals-kickoff-table-row grid grid-cols-[1fr_auto] gap-3 px-4 py-3.5 text-sm leading-relaxed sm:px-6 sm:py-4 ${
                      row.strong || row.highlight ? "gals-pdm-number-strong" : ""
                    }`}
                  >
                    <span className={row.highlight ? "gals-kickoff-table-after" : "gals-muted"}>{row.label}</span>
                    <span
                      className={`whitespace-nowrap font-semibold tabular-nums ${
                        row.highlight || row.strong ? "gals-kickoff-table-after" : "text-[var(--gals-heading)]"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="gals-muted mt-4 text-sm leading-relaxed">
                El split completo —digital y presencial— se ve en Hotmart o Skool para productos digitales, y en nuestra
                plataforma de inscripciones y cobro para eventos presenciales.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="gals-pdm-includes-card">
                <p className="gals-eyebrow">Dónde aplica esto</p>
                <p className="gals-muted mt-4 text-sm leading-relaxed sm:text-[15px]">
                  Todo el ecosistema que construyamos juntas a partir de tu marca personal: cursos, métodos, membresías,
                  bootcamps, programas, eventos presenciales, experiencias en vivo — cualquier pieza que Partnersflux
                  diseñe, instale y posicione. El 35% no distingue el canal: distingue si Partnersflux participó en
                  construirlo.
                </p>
                <p className="gals-muted mt-3 text-sm leading-relaxed sm:text-[15px]">
                  Lo que ya existe hoy en GAL&apos;s —tus clases, tus membresías del estudio— sigue exactamente igual,
                  bajo el contrato que ya tienen.
                </p>
              </article>
              <article className="gals-pdm-includes-card">
                <p className="gals-eyebrow">Cómo trabajamos juntas</p>
                <p className="gals-muted mt-4 text-sm leading-relaxed sm:text-[15px]">
                  Una reunión semanal fija para revisar estrategia, resultados del ecosistema y siguientes pasos. Cada 4
                  meses revisamos juntas cómo va la alianza completa y ajustamos lo que haga falta.
                </p>
                <p className="gals-muted mt-3 text-sm leading-relaxed sm:text-[15px]">
                  <strong className="text-[var(--gals-heading)]">Si decides salir:</strong> puedes hacerlo avisando con 3
                  meses de anticipación. La compensación equivale a 12 meses del promedio mensual que el ecosistema
                  completo venía generando.
                </p>
              </article>
            </div>

            <div className="text-center">
              <a
                href={ctaMonetizable}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-solid inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Quiero resolver dudas sobre la Fase Monetizable →
              </a>
            </div>
          </div>
        </SectionBlock>

        {/* 07 CONEXIÓN */}
        <SectionBlock
          id="conexion"
          eyebrow="06 — Conexión"
          title="Cómo se conectan las dos fases"
          subtitle="Magnética primero. Monetizable cuando esté lista."
        >
          <div className="gals-kickoff-main-card rounded-3xl p-6 sm:p-9">
            <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
              La Fase Magnética no es un paso previo desconectado de la Fase Monetizable: es la inversión que hace
              posible que la segunda tenga sentido. Sin una marca personal construida, un producto propio no tiene
              audiencia lista para comprarlo. Con la marca personal ya construida y complementando a GAL&apos;s, cuando
              Natalia decida lanzar algo propio no empieza desde cero: empieza con un portafolio, una narrativa y una
              audiencia que ya la conoce como fundadora, coach y presencia con historia real.
            </p>
          </div>
        </SectionBlock>

        {/* 08 RESUMEN */}
        <SectionBlock
          id="resumen"
          eyebrow="07 — Resumen ejecutivo"
          title="Para Natalia, en claro"
        >
          <div className="space-y-5">
            <article className="gals-pdm-after-card">
              <span className="gals-pdm-card-label gals-pdm-card-label--after">Ahora — Fase Magnética</span>
              <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
                <strong className="text-[var(--gals-heading)]">$297</strong>, 10 sesiones. Contenido enfocado en mostrar
                tu proceso como fundadora, complementando a GAL&apos;s, a tu ritmo con la parte de imagen. Te llevas un
                portafolio real para marcas y un Linktree profesional.
              </p>
            </article>
            <article className="gals-pdm-before-card">
              <span className="gals-pdm-card-label gals-pdm-card-label--before">Después — Fase Monetizable</span>
              <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
                Si decides lanzar un producto propio: dejas de depender de vender tu tiempo y construyes un ecosistema
                que factura por sí solo. Split del <strong className="text-[var(--gals-heading)]">35% Partnersflux / 65%
                tú</strong> sobre todo lo activo — programas, membresías, bootcamps, eventos.
              </p>
            </article>
            <div data-reveal className="gals-reveal gals-card rounded-3xl p-8 text-center sm:p-12">
              <p className="gals-kickoff-display text-2xl leading-snug sm:text-3xl">
                Tu método siempre es tuyo. El ecosistema que construimos lo sostenemos juntas, como socios reales del
                resultado.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={ctaMagnetica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gals-btn-solid inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
                >
                  Quiero la Fase Magnética →
                </a>
                <a
                  href={ctaMonetizable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gals-btn-outline inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
                >
                  Dudas sobre la Fase Monetizable →
                </a>
              </div>
              <p className="gals-muted mt-6 text-xs sm:text-sm">
                Partnersflux × Natalia Galvis · PDM — Presencia Digital Magnética y Monetizable
              </p>
            </div>
          </div>
        </SectionBlock>

        <footer className="gals-kickoff-footer-band px-4 py-5 text-center text-sm font-medium sm:px-6">
          <p className="flex flex-wrap items-center justify-center gap-3">
            <span>Partnersflux</span>
            <span className="hidden h-4 w-px bg-white/40 sm:inline" aria-hidden />
            <span className="text-xs opacity-90 sm:text-sm">PDM · Natalia Galvis</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
