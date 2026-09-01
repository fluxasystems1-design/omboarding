"use client";

import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "construir", label: "Construir" },
  { id: "tiempo", label: "Cronograma" },
  { id: "inversion", label: "Inversión" },
  { id: "insumos", label: "Insumos" },
  { id: "brief", label: "Brief" },
  { id: "transformacion", label: "Transformación" },
  { id: "antes-despues", label: "Antes / Después" },
  { id: "cierre", label: "Cierre" },
];

const DIGITAL_SYSTEM = [
  "Landing de venta real (reemplaza el Wix actual)",
  "Automatización en Botcake — Instagram y base de WhatsApp",
  "Laboratorio Notion personalizado para Mafe",
];

const PRODUCT_SYSTEM = [
  "Definición del Producto Mínimo Viable (llamadas de trabajo semana 1-2)",
  "Estructura y contenido del producto (basado en el taller de ansiedad)",
  "Checkout conectado al producto",
];

const TRAINING = [
  "Estrategia de contenido bajo Método PDM Nutrición (alimentación emocional como protagonista)",
  "Contenido construido con IA para lanzamiento",
  "Llamadas de capacitación/educativas durante el proceso",
];

const WEEKS = [
  {
    title: "Semana 1 (1-7 sept) — Brief + Capacitación + Definición MVP",
    items: [
      "Brief completo en vivo",
      "Llamadas educativas/capacitación",
      "Llamadas para definir el Producto Mínimo Viable",
    ],
    result: "sabemos exactamente qué vamos a construir y vender",
  },
  {
    title: "Semana 2 (8-14 sept) — Cierre de producto + contenido con IA",
    items: [
      "MVP definido y aprobado",
      "Arranca construcción de contenido con IA",
      "Recolección de fotos, testimonios y accesos pendientes",
    ],
    result: "producto cerrado, insumos listos para landing",
  },
  {
    title: "Semana 3-4 (15-28 sept) — Landing + automatización",
    items: [
      "Landing de venta construida con fotos/testimonios/producto ya definidos",
      "Automatización en Botcake configurada (Instagram + WhatsApp)",
      "Checkout conectado",
    ],
    result: "sistema montado y funcionando — aquí se activa el pago de Fase 2",
  },
  {
    title: "Semana 5 (29 sept-5 oct) — Contenido y pruebas",
    items: [
      "Producción de contenido con IA para lanzamiento",
      "Pruebas de flujo completo",
      "Ajustes según feedback",
    ],
    result: null,
  },
  {
    title: "Semana 6 (6-12 oct) — Lanzamiento y entrega",
    items: [
      "Sistema completo funcionando",
      "Capacitación final sobre uso y mantenimiento",
      "Reporte de cierre",
    ],
    result: null,
  },
];

const ACCESS_ITEMS = [
  "Usuario de Facebook (para escanear Administrador Comercial y Portafolio Comercial de Meta)",
  "Acceso a Instagram",
  "Correo(s) asociados a las cuentas — para revisar accesos y permisos",
  "Base de contactos de WhatsApp existente",
];

const VISUAL_ITEMS = [
  "Fotos y videos testimoniales de pacientes",
  "Fotos y videos de eventos (incluyendo el taller de ansiedad)",
  "Fotos de transformaciones (antes/después de pacientes, si las tiene y con su consentimiento)",
  "Fotos actualizadas de perfil/página — que reflejen su imagen actual",
  "Logo en PNG con fondo transparente",
];

const BRAND_ITEMS = [
  "Colores y tipografía de marca (si los tiene)",
  "Disponibilidad para llamadas de capacitación y definición de producto en semanas 1-2",
];

const TRANSFORM_STORIES = [
  {
    before: "Vendes tu conocimiento solo con tu tiempo — consultas 1:1 y talleres puntuales que no se repiten solos.",
    after: "Tienes un producto digital que vende mientras tú atiendes pacientes o descansas.",
  },
  {
    before: "Tu Instagram tiene comunidad, pero no hay un camino que convierta seguidoras en compradoras.",
    after: "Botcake responde, nutre y convierte automáticamente desde Instagram y WhatsApp.",
  },
  {
    before:
      "Ya validaste que la gente paga por tu conocimiento (el taller de ansiedad lo probó), pero quedó como evento aislado.",
    after:
      "Ese mismo conocimiento se convierte en un producto digital que se vende una y otra vez, bajo tu propio Método PDM Nutrición.",
  },
  {
    before: 'Eres "nutricionista dietista" — igual que miles de perfiles.',
    after: "Eres la especialista reconocida en romper el ciclo de comer por ansiedad, con método propio y nombre.",
  },
];

const BEFORE_AFTER_ROWS = [
  { before: "Landing tipo bio sin función comercial", after: "Landing con oferta clara y checkout" },
  { before: "Captura de leads manual por DM", after: "Automatización Botcake que responde y convierte" },
  { before: "Taller vendido una sola vez", after: "Producto digital que vende de forma recurrente" },
  { before: "Contenido disperso sin método propio", after: "Contenido bajo Método PDM Nutrición, con pilares claros" },
  { before: "Posicionamiento genérico", after: "Especialista reconocida en alimentación emocional" },
];

function IconMonitor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3z" />
      <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5v1A3 3 0 0 0 5 14a3 3 0 0 0 1 5.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5A3 3 0 0 0 21 14a3 3 0 0 0-1-5.5v-1A3.5 3.5 0 0 0 16.5 4 3 3 0 0 0 14 5.2 3 3 0 0 0 10 5.2 3 3 0 0 0 9.5 4z" />
    </svg>
  );
}

function KickoffDecorLayer() {
  const foods = [
    { emoji: "🥑", className: "mafe-kickoff-food--1" },
    { emoji: "🥗", className: "mafe-kickoff-food--2" },
    { emoji: "🫐", className: "mafe-kickoff-food--3" },
    { emoji: "🥦", className: "mafe-kickoff-food--4" },
    { emoji: "🍋", className: "mafe-kickoff-food--5" },
    { emoji: "🍓", className: "mafe-kickoff-food--6" },
    { emoji: "🌿", className: "mafe-kickoff-food--7" },
    { emoji: "🥕", className: "mafe-kickoff-food--8" },
  ];

  return (
    <div className="mafe-kickoff-decor" aria-hidden>
      {foods.map((item) => (
        <span key={item.className} className={`mafe-kickoff-food ${item.className}`}>
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

function SectionBlock({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${className}`}>
      <div data-reveal className="mafe-reveal mx-auto w-full max-w-[var(--kickoff-max)]">
        {(eyebrow || title || subtitle) && (
          <header className="max-w-3xl">
            {eyebrow ? <p className="mafe-eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h2 className="mafe-kickoff-display mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.65rem]">
                {title}
              </h2>
            ) : null}
            {subtitle ? <p className="mafe-lead mt-4 max-w-2xl">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

function PillarCard({ icon, title, items }) {
  return (
    <article className="mafe-kickoff-pillar rounded-2xl p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <div className="mafe-kickoff-pillar-icon">{icon}</div>
        <h3 className="mafe-kickoff-display text-xl sm:text-2xl">{title}</h3>
      </div>
      <ul className="mafe-muted mt-5 space-y-3 text-sm leading-relaxed sm:text-[15px]">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="mafe-accent-text mt-0.5 shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CheckGrid({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item} className="mafe-kickoff-check-item rounded-xl px-4 py-3.5 text-sm text-[var(--mafe-heading)]">
          <span className="mafe-accent-text mr-2">✓</span>
          {item}
        </article>
      ))}
    </div>
  );
}

export default function KickoffNutricionPage() {
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

    document.querySelectorAll("[data-reveal], .mafe-stagger-group").forEach((el) => revealObserver.observe(el));

    document.querySelectorAll("#hero [data-reveal], #hero .mafe-reveal").forEach((el) => {
      el.classList.add("is-visible");
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="mafe-kickoff-page">
      <KickoffDecorLayer />

      <div className="mafe-kickoff-content">
        <div className="mafe-kickoff-progress fixed left-0 top-0 z-50 w-full">
          <div className="mafe-kickoff-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <nav className="mafe-kickoff-nav sticky top-0 z-40">
          <div className="mx-auto flex w-full max-w-[var(--kickoff-max)] items-center gap-2.5 overflow-x-auto px-4 py-3 sm:px-6">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--mafe-muted)]">
              Kickoff Mafe
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mafe-kickoff-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  activeSection === item.id ? "mafe-kickoff-nav-link--active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="hero" className="mafe-kickoff-hero scroll-mt-28 px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
          <div className="mx-auto w-full max-w-[var(--kickoff-max)]">
            <div data-reveal className="mafe-reveal flex flex-col items-center text-center">
              <div className="mafe-kickoff-hero-mark">
                <p className="mafe-kickoff-hero-tag">Kickoff oficial</p>
                <p className="mafe-kickoff-display mafe-kickoff-hero-name font-semibold">María Fernanda Cerquera</p>
              </div>
              <p className="mafe-eyebrow mt-8">Bienvenida oficial</p>
              <p className="mafe-muted mt-3 text-sm font-medium tracking-wide sm:text-base">
                María Fernanda Cerquera × Fluxateam / Partnersflux
              </p>
              <p className="mafe-eyebrow mt-6">Paquete 1</p>
              <h1 className="mafe-kickoff-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                MAFE DIGITAL
              </h1>
              <p className="mafe-lead mx-auto mt-5 max-w-2xl text-lg sm:text-xl">
                Método PDM Nutrición™ — hoy arranca tu transformación digital
              </p>
            </div>

            <div
              data-reveal
              className="mafe-reveal mafe-kickoff-hero-card mafe-kickoff-main-card mx-auto mt-12 max-w-4xl rounded-3xl p-7 sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="mafe-eyebrow">Tu inversión confirmada</p>
                  <p className="mafe-kickoff-price-hero mafe-kickoff-display mt-3 font-semibold">$4.000.000 COP</p>
                  <p className="mafe-muted mt-4 max-w-sm text-sm leading-relaxed">
                    La transformación digital completa para posicionar tu método, automatizar tu captura de leads y
                    lanzar tu primer producto digital.
                  </p>
                </div>
                <div className="mafe-muted max-w-md text-sm leading-relaxed sm:text-[15px]">
                  <p>
                    <strong className="font-semibold text-[var(--mafe-heading)]">Fase 1 — $2.000.000 COP</strong>{" "}
                    <span className="mafe-accent-text font-semibold">✓ Ya cancelado.</span> Arranca todo desde el primer
                    día.
                  </p>
                  <p className="mt-3">
                    <strong className="font-semibold text-[var(--mafe-heading)]">Fase 2 — $2.000.000 COP</strong> —
                    cuando el producto esté definido y montado en landing (estimado semana 3-4)
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--mafe-muted-light)]">
                    Con el primer pago arranca todo · Sin letra pequeña
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionBlock
          id="construir"
          eyebrow="01 — Alcance"
          title="Lo que vamos a construir juntas"
          subtitle="Arquitectura digital, producto digital y contenido con IA bajo Método PDM Nutrición."
        >
          <div className="mafe-kickoff-main-card rounded-3xl p-5 sm:p-7">
            <div className="grid gap-5 lg:grid-cols-2">
              <PillarCard icon={<IconMonitor />} title="Arquitectura digital" items={DIGITAL_SYSTEM} />
              <PillarCard icon={<IconSparkle />} title="Producto digital" items={PRODUCT_SYSTEM} />
            </div>

            <div className="mafe-kickoff-training-band mt-5 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="mafe-kickoff-pillar-icon">
                  <IconBrain />
                </div>
                <h3 className="mafe-kickoff-display text-xl sm:text-2xl">Contenido y capacitación IA</h3>
              </div>
              <ul className="mafe-muted mt-5 grid gap-3 text-sm leading-relaxed sm:grid-cols-1 lg:grid-cols-3 sm:text-[15px]">
                {TRAINING.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mafe-accent-text shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock
          id="tiempo"
          eyebrow="02 — Cronograma"
          title="Así se ve tu proyecto en 6 semanas"
          subtitle="Del brief al lanzamiento: definición de producto, landing, automatización y entrega."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {WEEKS.map((week) => (
              <article key={week.title} className="mafe-kickoff-phase-card rounded-2xl p-6 sm:p-7">
                <p className="mafe-eyebrow">{week.title}</p>
                <ul className="mafe-muted mt-4 space-y-2.5 text-sm leading-relaxed sm:text-[15px]">
                  {week.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mafe-accent-text shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {week.result ? (
                  <div className="mafe-kickoff-phase-result mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed text-[var(--mafe-heading)]">
                    <span className="font-semibold">Resultado: </span>
                    {week.result}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="inversion"
          eyebrow="03 — Inversión"
          title="Fases de pago"
          subtitle="Tu inversión total confirmada: $4.000.000 COP"
        >
          <div className="mafe-kickoff-payment-lane grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <article className="mafe-kickoff-payment-card rounded-2xl p-6 text-center sm:p-7">
              <p className="mafe-eyebrow">Fase 1 — Pago al comienzo ✓</p>
              <p className="mafe-kickoff-display mt-2 text-3xl text-[var(--mafe-purple-dark)]">$2.000.000 COP</p>
              <p className="mafe-muted mt-3 text-sm">Ya cancelado — con esto arrancó el proyecto.</p>
            </article>

            <div className="mafe-kickoff-payment-bridge flex items-center justify-center self-center rounded-full px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] shadow-lg">
              Semana 3-4
            </div>

            <article className="mafe-kickoff-payment-card rounded-2xl p-6 text-center sm:p-7">
              <p className="mafe-eyebrow">Fase 2 — Producto en landing</p>
              <p className="mafe-kickoff-display mt-2 text-3xl text-[var(--mafe-purple-dark)]">$2.000.000 COP</p>
              <p className="mafe-muted mt-3 text-sm">
                Se activa cuando el sistema esté funcionando con el producto ya definido (estimado semana 3-4).
              </p>
            </article>
          </div>

          <p className="mafe-callout mt-8 rounded-2xl px-5 py-4 text-center text-sm font-medium sm:text-base">
            Total confirmado: <span className="mafe-price font-semibold">$4.000.000 COP</span>
          </p>
        </SectionBlock>

        <SectionBlock
          id="insumos"
          eyebrow="04 — Activación"
          title="Lo que necesitamos de ti"
          subtitle="Accesos, contenido visual y marca para arrancar con precisión."
        >
          <div className="space-y-8">
            <div>
              <p className="mafe-eyebrow mb-4">Accesos</p>
              <CheckGrid items={ACCESS_ITEMS} />
            </div>
            <div>
              <p className="mafe-eyebrow mb-4">Contenido visual</p>
              <CheckGrid items={VISUAL_ITEMS} />
            </div>
            <div>
              <p className="mafe-eyebrow mb-4">Marca</p>
              <CheckGrid items={BRAND_ITEMS} />
            </div>
          </div>
        </SectionBlock>

        <SectionBlock
          id="brief"
          eyebrow="Brief de arranque"
          title="Tu cuestionario estratégico"
          subtitle="Además de los insumos, necesitamos completar juntas el brief — identidad, servicios, producto, cliente ideal y metas."
        >
          <div className="mafe-kickoff-brief-card mafe-kickoff-main-card rounded-3xl p-7 sm:p-10">
            <p className="mafe-eyebrow">Se completa en vivo</p>
            <p className="mafe-section-label mt-3 text-lg font-semibold leading-snug sm:text-xl">
              Llamada 1 — no se manda para llenar sola
            </p>
            <ul className="mafe-muted mt-5 space-y-2 text-sm leading-relaxed sm:text-[15px]">
              <li className="flex gap-2">
                <span className="mafe-accent-text shrink-0">·</span>
                <span>Identidad y voz de marca</span>
              </li>
              <li className="flex gap-2">
                <span className="mafe-accent-text shrink-0">·</span>
                <span>Servicios, producto y cliente ideal</span>
              </li>
              <li className="flex gap-2">
                <span className="mafe-accent-text shrink-0">·</span>
                <span>Metas y prioridades de arranque</span>
              </li>
            </ul>
            <p className="mafe-callout mt-6 rounded-2xl px-5 py-4 text-sm">
              El brief se trabaja juntas en la primera llamada. No necesitas llenarlo por tu cuenta.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock
          id="transformacion"
          eyebrow="05 — Visión"
          title="La transformación de Mafe"
          subtitle="Hoy te está pasando esto — y así cambia con el sistema."
        >
          <div className="space-y-5">
            {TRANSFORM_STORIES.map((story, i) => (
              <article key={i} className="mafe-kickoff-story rounded-2xl p-5 sm:p-6">
                <p className="mafe-muted text-sm leading-relaxed sm:text-[15px]">
                  <span className="font-semibold uppercase tracking-wide text-[var(--mafe-muted-light)]">Hoy · </span>
                  {story.before}
                </p>
                <p className="mafe-kickoff-story-after mt-4 rounded-xl px-4 py-3 text-sm leading-relaxed sm:text-[15px]">
                  <span className="font-semibold text-[var(--mafe-purple-dark)]">Con el sistema · </span>
                  {story.after}
                </p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="antes-despues" eyebrow="06 — Comparativa" title="Antes y después">
          <div className="mafe-kickoff-table-wrap rounded-2xl">
            <div className="mafe-kickoff-table-head grid grid-cols-2 gap-2 px-4 py-3.5 sm:px-6">
              <span>Antes</span>
              <span>Después</span>
            </div>
            {BEFORE_AFTER_ROWS.map((row) => (
              <div
                key={row.before}
                className="mafe-kickoff-table-row grid grid-cols-2 gap-3 px-4 py-3.5 text-sm leading-relaxed sm:px-6 sm:py-4"
              >
                <span className="mafe-muted">{row.before}</span>
                <span className="mafe-kickoff-table-after">{row.after}</span>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="cierre" eyebrow="07 — Arranque" title="Ya diste el primer paso">
          <div data-reveal className="mafe-reveal mafe-card rounded-3xl p-8 text-center sm:p-12">
            <p className="mafe-kickoff-display text-2xl leading-snug sm:text-3xl">
              Mafe, ya diste el primer paso. Ahora construimos el sistema para que tu conocimiento trabaje incluso
              cuando tú no estás.
            </p>
            <div className="mafe-btn-solid mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold">
              Fase 1 confirmada ✓ — Fase 2 se activa al montar producto en landing
            </div>
            <p className="mafe-muted mt-6 text-xs sm:text-sm">
              Fluxateam · Partnersflux · Método PDM Nutrición
            </p>
          </div>
        </SectionBlock>

        <footer className="mafe-kickoff-footer-band px-4 py-5 text-center text-sm font-medium sm:px-6">
          <p className="flex flex-wrap items-center justify-center gap-3">
            <span>María Fernanda Cerquera × Partnersflux</span>
            <span className="hidden h-4 w-px bg-white/40 sm:inline" aria-hidden />
            <span className="text-xs opacity-90 sm:text-sm">Método PDM Nutrición · MAFE DIGITAL</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
