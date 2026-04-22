"use client";

import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vision", label: "Vision" },
  { id: "entendimos", label: "Negocio" },
  { id: "activos", label: "Activos" },
  { id: "mapa", label: "Mapa" },
  { id: "modulos", label: "Modulos" },
  { id: "orden", label: "Roadmap" },
  { id: "prioridad", label: "Prioridad" },
  { id: "decisiones", label: "Decisiones" },
  { id: "insumos", label: "Insumos" },
  { id: "resultado", label: "Resultado" },
  { id: "cierre", label: "Cierre" },
];

const EXECUTIVE_POINTS = [
  { title: "Autoridad ya existente", text: "La base de confianza del doctor ya esta construida y validada." },
  { title: "Nuevo ecosistema comercial", text: "Cada activo se conecta en una arquitectura de conversion y seguimiento." },
  { title: "Automatizacion y seguimiento", text: "Se estandariza la operacion comercial y se reduce friccion operativa." },
  { title: "Base para escalar cursos y membresia", text: "El sistema queda preparado para crecimiento por lineas de negocio." },
];

const BUSINESS_INSIGHTS = [
  "Prioridad inmediata: automatizar ventas",
  "Linea principal a crecer: Funciona+",
  "Canales mas activos: Instagram y Facebook",
  "Audiencia actual: adultos mayores e hijos/cuidadores",
  "Diferencial: neurologia funcional",
  "Meta de crecimiento: escalar y preparar expansion",
];

const CURRENT_ASSETS = [
  "Pagina actual del doctor",
  "Marca personal",
  "Instagram, Facebook, YouTube",
  "WhatsApp como canal actual",
  "Base de datos",
  "Cursos y libros ya existentes",
];

const TARGET_ASSETS = [
  "Ecommerce Funciona+",
  "3 landings por suplemento",
  "Paginas de venta de cursos",
  "2 landings de libros",
  "Landing de mentoria / consulta 1:1",
  "Sistema de membresia",
  "Automatizaciones",
  "Panel centralizado",
];

const TRAFFIC_SOURCES = ["Instagram", "Facebook", "YouTube", "Base de datos", "Contenido", "Autoridad del doctor"];
const COMMERCIAL_ECOSYSTEM = ["Suplementos", "Libros", "Cursos", "Consulta 1:1", "Membresia"];
const AUTOMATIONS = ["Emails transaccionales", "Post compra", "Instagram keywords", "Recordatorios", "Seguimiento de leads"];
const CENTRAL_PANEL = ["Pedidos", "Clientes", "Miembros", "Consultas", "Leads"];

const MODULES = [
  {
    title: "Modulo 1 — Infraestructura de ventas",
    points: [
      "Ecommerce Funciona+ con pasarela de pago",
      "3 paginas de venta individuales: Magnesio, Omega 3, Creatina",
      "Paginas de venta para cursos actuales",
      "2 landings de libros con captura de email",
      "Panel admin de pedidos y clientes",
      "Emails transaccionales automaticos con Resend",
    ],
  },
  {
    title: "Modulo 2 — Automatizaciones y embudos",
    points: [
      "Secuencia post-compra (3 emails)",
      "Automatizacion de Instagram con palabras clave via n8n",
      "Sistema de membresia con niveles de suscripcion",
      "Arquitectura completa de embudos por producto",
    ],
  },
  {
    title: "Modulo 3 — Membresia, consultas y panel",
    points: [
      "Landing de aplicacion para consultas 1:1 con Calendly",
      "Recordatorios automaticos 24h y 1h antes",
      "Flujo post-consulta automatizado",
      "Panel centralizado de pedidos, miembros y consultas",
    ],
  },
  {
    title: "Modulo 4 — Contenido, pauta y acompanamiento",
    points: [
      "Arquitectura de contenido de 90 dias",
      "Guias de produccion por formato",
      "Configuracion y gestion de campanas Meta Ads",
      "Optimizacion semanal basada en datos",
      "3 sesiones estrategicas mensuales",
      "Soporte por WhatsApp en horario habil",
    ],
  },
];

const ROADMAP_PHASES = [
  {
    title: "Fase 1 — Base comercial",
    points: ["Ecommerce Funciona+", "Pasarela de pago", "Pedidos y clientes", "Emails transaccionales", "Landing inicial del producto principal"],
  },
  {
    title: "Fase 2 — Conversion y automatizacion",
    points: ["Landings restantes de suplementos", "Secuencia post compra", "Automatizacion de Instagram", "Estructura basica de embudos"],
  },
  {
    title: "Fase 3 — Captacion y expansion",
    points: ["Landings de libros", "Paginas de cursos", "Landing de consulta 1:1", "Flujos de recordatorio y seguimiento"],
  },
  {
    title: "Fase 4 — Escala",
    points: ["Membresia", "Contenido 90 dias", "Pauta Meta", "Optimizacion y consolidacion del sistema"],
  },
];

const DECISIONS = [
  "Arquitectura de marca: Doctor Bello + Funciona+",
  "Producto principal de entrada",
  "Orden de construccion de activos",
  "Pasarela de pago",
  "Rol de WhatsApp dentro del sistema",
  "Prioridad de trafico inicial",
  "Materiales y responsables",
  "Criterios de exito de fase 1",
];

const REQUIRED_ASSETS = [
  "Logos disponibles",
  "Fotos del doctor",
  "Fotos de productos",
  "Videos reutilizables",
  "Base de datos actual",
  "Links de cursos",
  "Politicas de entrega/envio",
  "Accesos tecnicos necesarios",
  "Apoyo operativo de secretaria",
];

function SectionBlock({ id, eyebrow, title, subtitle, children, elevated = false }) {
  return (
    <section id={id} className="scroll-mt-28 px-4 pb-24 sm:px-6 lg:pb-28">
      <div
        data-reveal
        className={`reveal mx-auto w-full max-w-7xl ${
          elevated
            ? "rounded-2xl border border-white/10 bg-gradient-to-b from-[#101c31]/95 to-[#0B1526]/95 p-7 shadow-[0_14px_52px_rgba(2,6,23,0.4)] ring-1 ring-white/5 sm:p-10"
            : ""
        }`}
      >
        {(eyebrow || title || subtitle) && (
          <header className="max-w-4xl">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/90">{eyebrow}</p> : null}
            {title ? <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl lg:text-[2.65rem]">{title}</h2> : null}
            {subtitle ? <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-300 sm:text-[17px]">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

function PremiumCard({ title, text, badge }) {
  return (
    <article className="rounded-xl border border-white/10 bg-gradient-to-b from-[#16253e]/85 to-[#0F1B2E]/85 p-5 shadow-[0_8px_30px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:shadow-[0_0_28px_rgba(56,189,248,0.14)]">
      {badge ? <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300/80">{badge}</p> : null}
      <h3 className="mt-2 text-[17px] font-bold text-slate-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300/95">{text}</p>
    </article>
  );
}

function BulletPanel({ title, items, tone = "default" }) {
  const toneClass =
    tone === "success"
      ? "border-emerald-300/30 bg-emerald-400/[0.05]"
      : "border-white/10 bg-white/[0.03]";
  const bulletTone = tone === "success" ? "text-emerald-300" : "text-sky-300";

  return (
    <article className={`rounded-xl border p-6 shadow-[0_8px_28px_rgba(2,6,23,0.35)] ${toneClass}`}>
      <h3 className="text-lg font-bold text-slate-100">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={bulletTone}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FlowCard({ title, items, accent, step, layerLabel }) {
  return (
    <article
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-b p-5 shadow-[0_10px_30px_rgba(2,6,23,0.4)] ring-1 ring-white/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent ${accent}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {layerLabel ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{layerLabel}</p>
          ) : null}
          <h4 className={`text-[12px] font-bold uppercase tracking-[0.16em] text-slate-100 ${layerLabel ? "mt-1.5" : ""}`}>{title}</h4>
        </div>
        {step ? (
          <span className="shrink-0 rounded-lg border border-white/15 bg-black/35 px-2.5 py-1 text-[11px] font-extrabold tabular-nums text-sky-200/95">
            {step}
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function ConnectorArrow({ vertical = false, label }) {
  if (vertical) {
    return (
      <div className="ecosystem-connector-vertical relative mx-auto flex w-full max-w-md flex-col items-center py-1">
        {label ? (
          <p className="z-[1] mb-2 rounded-full border border-white/12 bg-[#0a1424]/90 px-3 py-1 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-slate-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            {label}
          </p>
        ) : null}
        <div className="flex flex-col items-center">
          <span className="ecosystem-dash-v h-12 w-[2px] rounded-full" />
          <span className="mt-[-1px] h-0 w-0 border-l-[6px] border-r-[6px] border-t-[9px] border-l-transparent border-r-transparent border-t-emerald-300/85" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex min-h-[4.5rem] w-full flex-col items-center justify-center gap-2 lg:min-h-0 lg:w-auto lg:flex-row lg:gap-0">
      <p className="order-2 px-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 lg:absolute lg:-top-5 lg:order-none lg:whitespace-nowrap lg:px-0">
        {label}
      </p>
        <div className="order-1 flex flex-col items-center lg:flex-row">
        <span className="ecosystem-dash-h hidden h-[2px] w-12 rounded-full lg:block" />
        <span className="hidden h-0 w-0 border-b-[5px] border-l-[8px] border-t-[5px] border-b-transparent border-l-emerald-300/85 border-t-transparent lg:block" />
        <span className="ecosystem-dash-v h-10 w-[2px] rounded-full lg:hidden" />
        <span className="mt-[-1px] h-0 w-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-emerald-300/85 lg:hidden" />
      </div>
    </div>
  );
}

function EcosystemMap() {
  return (
    <div className="ecosystem-map-root relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f1c31] to-[#0A1426] p-6 shadow-[0_16px_52px_rgba(2,6,23,0.5)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.14),transparent_45%),radial-gradient(circle_at_78%_82%,rgba(34,197,94,0.1),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        <aside className="relative mb-2 hidden w-10 shrink-0 lg:mb-0 lg:flex lg:flex-col lg:items-center lg:pt-14">
          <span className="absolute left-1/2 top-8 bottom-16 w-px -translate-x-1/2 bg-gradient-to-b from-sky-400/35 via-white/12 to-emerald-400/35" />
          <span className="relative z-[1] mt-6 rounded-full border border-sky-300/25 bg-[#0c1628] px-2 py-3 text-[8px] font-bold uppercase leading-snug tracking-[0.18em] text-slate-400 [writing-mode:vertical-rl] rotate-180">
            Eje
          </span>
        </aside>

        <div className="relative min-w-0 flex-1">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 lg:text-left">
            Diagrama estrategico · de la demanda al control operativo
          </p>

          <div className="grid gap-4 lg:grid-cols-[1fr_minmax(0,7.5rem)_1fr] lg:items-stretch">
            <FlowCard
              step="01"
              layerLabel="Capa de entrada"
              title="Activos actuales / Fuentes de trafico"
              items={TRAFFIC_SOURCES}
              accent="from-sky-500/20 to-cyan-500/10 border-sky-300/30"
            />
            <ConnectorArrow label="Alimentan" />
            <FlowCard
              step="02"
              layerLabel="Capa de oferta"
              title="Nuevo ecosistema comercial"
              items={COMMERCIAL_ECOSYSTEM}
              accent="from-emerald-500/20 to-cyan-500/10 border-emerald-300/35"
            />
          </div>

          <ConnectorArrow vertical label="Conectado por automatizacion" />

          <div className="mx-auto max-w-3xl">
            <FlowCard
              step="03"
              layerLabel="Capa de orquestacion"
              title="Automatizaciones"
              items={AUTOMATIONS}
              accent="from-cyan-500/20 to-blue-500/10 border-cyan-300/30"
            />
          </div>

          <ConnectorArrow vertical label="Consolida en un solo panel" />

          <div className="mx-auto max-w-2xl">
            <FlowCard
              step="04"
              layerLabel="Capa de control"
              title="Panel centralizado"
              items={CENTRAL_PANEL}
              accent="from-blue-500/20 to-indigo-500/10 border-blue-300/30"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-8 rounded-xl border border-emerald-300/45 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-emerald-400/10 px-5 py-4 text-center text-sm font-extrabold tracking-[0.04em] text-emerald-100 shadow-[0_0_32px_rgba(16,185,129,0.15)] sm:text-base">
        MAS VENTAS + MAS CONTROL + MAS AUTOMATIZACION + MAS ESCALABILIDAD
      </div>
    </div>
  );
}

function RoadmapLane({ title, points, index }) {
  const toneClasses = [
    "border-sky-300/30 bg-sky-400/[0.06]",
    "border-cyan-300/30 bg-cyan-400/[0.06]",
    "border-emerald-300/30 bg-emerald-400/[0.06]",
    "border-amber-200/35 bg-amber-300/[0.06]",
  ];
  return (
    <article className={`relative rounded-xl border p-5 shadow-[0_8px_30px_rgba(2,6,23,0.4)] ${toneClasses[index]}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/45 bg-sky-400/20 text-xs font-bold text-sky-100 shadow-[0_0_16px_rgba(56,189,248,0.35)]">
          {index + 1}
        </span>
        <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-100">{title}</h3>
      </div>
      <ul className="space-y-2.5 text-sm text-slate-300">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-slate-500">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {index < 3 ? <div className="absolute -right-3 top-10 hidden h-px w-6 bg-sky-300/55 2xl:block" /> : null}
    </article>
  );
}

export default function RoadmapDoctorBelloPage() {
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
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="min-h-screen bg-[#07111F] text-slate-100">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-900/60">
        <div className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3.5 sm:px-6">
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Kickoff roadmap</span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold transition ${
                activeSection === item.id
                  ? "border-sky-300/70 bg-sky-400/20 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.22)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-sky-300/40 hover:text-slate-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
        <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-72 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <section id="hero" className="scroll-mt-28 px-4 pb-24 pt-16 sm:px-6 lg:pb-28 lg:pt-24">
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.22fr_0.78fr]">
            <div data-reveal className="reveal">
              <p className="inline-flex rounded-full border border-sky-300/40 bg-sky-400/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                Kickoff estrategico
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.06] text-slate-50 sm:text-5xl lg:text-[4rem]">
                Roadmap de crecimiento digital para Dr. Leonardo Bello
              </h1>
              <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-slate-300 sm:text-xl">
                Una arquitectura comercial disenada para convertir autoridad en ventas, automatizacion y escalabilidad.
              </p>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {["Ecommerce Funciona+", "Embudos y automatizaciones", "Cursos, libros y mentoria", "Sistema comercial escalable"].map((chip) => (
                  <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <aside data-reveal className="reveal rounded-2xl border border-white/10 bg-gradient-to-b from-[#14233a]/92 to-[#0F1B2E]/92 p-6 shadow-[0_20px_58px_rgba(2,6,23,0.5)] ring-1 ring-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Resumen del proyecto</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-200">
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Proyecto cerrado</strong>
                </li>
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Inversion:</strong> $12.000.000 COP
                </li>
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Reunion:</strong> Kickoff estrategico
                </li>
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Objetivo inicial:</strong> automatizar ventas y estructurar ecosistema comercial
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <SectionBlock
          id="vision"
          eyebrow="01. Resumen ejecutivo"
          title="Vision general del proyecto"
          subtitle="El objetivo no es construir una sola pagina web, sino desarrollar un ecosistema comercial completo que conecte la autoridad del doctor, sus productos, su contenido y sus servicios en un sistema mas organizado, automatizado y escalable."
          elevated
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {EXECUTIVE_POINTS.map((item) => (
              <PremiumCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="entendimos"
          eyebrow="02. Insights estrategicos"
          title="Lo que entendimos del negocio"
          subtitle="Lectura ejecutiva para alinear foco, oferta y orden de construccion."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {BUSINESS_INSIGHTS.map((insight) => (
              <article key={insight} className="rounded-xl border border-white/10 bg-[#0F1B2E]/80 p-5">
                <p className="text-sm font-semibold text-slate-100">• {insight}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="activos"
          eyebrow="03. Comparativa"
          title="Activos actuales vs nuevo ecosistema"
          subtitle="Comparativa visual del punto de partida frente al sistema que se va a construir."
          elevated
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <BulletPanel title="Activos actuales" items={CURRENT_ASSETS} />
            <BulletPanel title="Activos a construir" items={TARGET_ASSETS} tone="success" />
          </div>
        </SectionBlock>

        <SectionBlock
          id="mapa"
          eyebrow="04. Arquitectura del sistema"
          title="Mapa general del ecosistema comercial"
          subtitle="Diagrama ejecutivo de como fluye el trafico hacia activos de conversion, automatizaciones y control centralizado."
        >
          <EcosystemMap />
        </SectionBlock>

        <SectionBlock
          id="modulos"
          eyebrow="05. Construccion"
          title="Modulos del proyecto"
          subtitle="Cuatro bloques de ejecucion para construir el ecosistema comercial completo."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {MODULES.map((module, index) => (
              <article
                key={module.title}
                className={`rounded-xl border bg-[#0F1B2E]/88 p-6 shadow-[0_10px_32px_rgba(2,6,23,0.38)] transition duration-300 hover:-translate-y-0.5 ${
                  index % 2 === 0 ? "border-sky-300/25 hover:border-sky-300/38" : "border-emerald-300/20 hover:border-emerald-300/35"
                }`}
              >
                <h3 className="text-lg font-bold text-slate-50">{module.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {module.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-sky-300">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="orden"
          eyebrow="06. Implementacion"
          title="Orden recomendado de implementacion"
          subtitle="Roadmap por fases para asegurar construccion progresiva, conversion y escala."
          elevated
        >
          <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
            {ROADMAP_PHASES.map((phase, index) => (
              <RoadmapLane key={phase.title} title={phase.title} points={phase.points} index={index} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="prioridad"
          eyebrow="07. Foco inicial"
          title="Prioridad estrategica inicial"
          subtitle="La primera palanca de crecimiento sera Funciona+, comenzando por una infraestructura comercial solida y una oferta inicial clara para convertir mejor la autoridad y el trafico ya existentes."
          elevated
        >
          <div className="grid gap-4 md:grid-cols-3">
            <PremiumCard title="Producto heroe recomendado" text="Magnesio Glicinato" badge="Prioridad 1" />
            <PremiumCard title="Canal comercial base" text="Ecommerce + landing especializada" badge="Foco comercial" />
            <PremiumCard title="Apoyo inicial" text="Base de datos actual + redes + automatizacion" badge="Apalancamiento" />
          </div>
        </SectionBlock>

        <SectionBlock
          id="decisiones"
          eyebrow="08. Alineacion del kickoff"
          title="Decisiones clave a validar en esta reunion"
          subtitle="Checklist ejecutivo para salir con direccion definida y criterios claros de arranque."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {DECISIONS.map((item) => (
              <article key={item} className="rounded-xl border border-white/10 bg-[#0F1B2E]/85 p-4 shadow-[0_8px_24px_rgba(2,6,23,0.35)]">
                <p className="text-sm font-semibold text-slate-200">✓ {item}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="insumos"
          eyebrow="09. Activacion operativa"
          title="Materiales y accesos necesarios para avanzar"
          subtitle="Insumos requeridos para ejecutar sin bloqueos y respetar el orden de implementacion."
          elevated
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {REQUIRED_ASSETS.map((item) => (
              <article key={item} className="rounded-xl border border-white/10 bg-[#0F1B2E]/78 px-4 py-3 text-sm text-slate-200 shadow-[0_8px_24px_rgba(2,6,23,0.32)]">
                {item}
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="resultado"
          eyebrow="10. Vision de impacto"
          title="Resultado esperado del sistema"
          subtitle="Pasar de una operacion apoyada principalmente en autoridad, contenido y WhatsApp, a un ecosistema comercial conectado, automatizado y preparado para crecer con mayor control."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Mas ventas", "Mas control", "Mas automatizacion", "Mas escalabilidad"].map((kpi) => (
              <article key={kpi} className="rounded-xl border border-emerald-300/25 bg-emerald-400/[0.06] p-6 text-center">
                <p className="text-lg font-extrabold text-emerald-100">{kpi}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="cierre" eyebrow="11. Cierre ejecutivo" title="Proximos pasos" elevated>
          <ol className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {[
              "Validar decisiones del kickoff",
              "Consolidar alcance y orden de implementacion",
              "Recibir materiales y accesos",
              "Iniciar construccion del ecosistema",
            ].map((step, index) => (
              <li key={step} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3">
                <span className="mr-2 text-sky-300">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-base font-semibold leading-relaxed text-slate-100 sm:text-lg">
            Este kickoff marca el inicio de una estructura disenada para transformar autoridad en un sistema comercial escalable.
          </p>
        </SectionBlock>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ecosystem-dash-h {
          background: repeating-linear-gradient(
            90deg,
            rgba(56, 189, 248, 0.75) 0,
            rgba(56, 189, 248, 0.75) 7px,
            rgba(16, 185, 129, 0.45) 7px,
            rgba(16, 185, 129, 0.45) 14px
          );
          background-size: 28px 2px;
          animation: ecoDashH 1.05s linear infinite;
        }
        .ecosystem-dash-v {
          background: repeating-linear-gradient(
            180deg,
            rgba(56, 189, 248, 0.72) 0,
            rgba(56, 189, 248, 0.72) 7px,
            rgba(16, 185, 129, 0.42) 7px,
            rgba(16, 185, 129, 0.42) 14px
          );
          background-size: 2px 28px;
          animation: ecoDashV 1.05s linear infinite;
        }
        @keyframes ecoDashH {
          to {
            background-position: 28px 0;
          }
        }
        @keyframes ecoDashV {
          to {
            background-position: 0 28px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .ecosystem-dash-h,
          .ecosystem-dash-v {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
