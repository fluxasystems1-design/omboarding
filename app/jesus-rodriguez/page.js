"use client";

import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vision", label: "Visión" },
  { id: "problema", label: "Problema" },
  { id: "solucion", label: "Solución" },
  { id: "quiz", label: "Quiz" },
  { id: "landings", label: "Landings" },
  { id: "manychat", label: "ManyChat" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "contenido", label: "Contenido" },
  { id: "pauta", label: "Pauta" },
  { id: "entregables", label: "Entregables" },
  { id: "inversion", label: "Inversión" },
  { id: "cierre", label: "Cierre" },
];

const VISION_EXISTS = [
  "Comunidad activa",
  "Contenido de autoridad",
  "Tráfico pago activo",
  "5 líneas de negocio",
  "Audiencia calificada",
];

const VISION_OFFERS = [
  "Academia de trading",
  "Grupo de señales",
  "Escáner de señales",
  "Mentoría 1:1",
  "Fondo de inversión",
];

const PROBLEMA_FRICTION = [
  "Sin quiz que filtre el tipo de trader",
  "Todos los prospectos llegan a la misma landing",
  "Sin rutas diferenciadas por nivel o intención de compra",
  "Las automatizaciones no segmentan ni nutren",
  "El capital y la experiencia no determinan la oferta que reciben",
  "Las ventas dependen de atención manual",
];

const LAYER1_ITEMS = ["Instagram", "Reels orgánicos", "Videos pautados", "Historias", "Retargeting"];
const LAYER2_ITEMS = ["ManyChat", "Quiz estratégico «¿Qué tipo de trader eres?»", "Diagnóstico y segmentación"];
const LAYER3_ITEMS = ["Secuencias de WhatsApp", "7 días nutrición (frío)", "Secuencia de cierre (caliente)"];
const LAYER4_ITEMS = ["Landing correcta por perfil", "Academia", "Señales + escáner", "Mentoría 1:1", "Fondo"];

const QUIZ_RESULTS = [
  { title: "Trader principiante", text: "Quiere bases claras y estructura para aprender.", badge: "Ruta: Academia" },
  { title: "Trader emocional", text: "Tiene estrategia pero necesita contención y hábitos.", badge: "Ruta: Educación + comunidad" },
  { title: "Trader operativo", text: "Ya opera y busca señales, escáner y acompañamiento.", badge: "Ruta: Grupo de señales + escáner" },
  { title: "Trader con capital", text: "Busca gestión seria o acompañamiento premium.", badge: "Ruta: Fondo de inversión o mentoría" },
];

const LANDINGS_SIX = [
  {
    title: "Landing 1 — HUB Principal",
    points: [
      "Página de autoridad y posicionamiento.",
      "Presenta a Jesús, su ecosistema y su comunidad.",
      "Dirige al quiz. No es página de venta, es de posicionamiento.",
    ],
  },
  {
    title: "Landing 2 — Quiz",
    points: [
      "La entrada principal del sistema.",
      "Capta leads, diagnostica el perfil, segmenta y redirige a la oferta correcta.",
      "Debe ser moderna, rápida y fácil.",
    ],
  },
  {
    title: "Landing 3 — Academia de Trading",
    points: [
      "Para quien quiere aprender desde una base clara.",
      "Incluye: promesa educativa, roadmap, módulos, beneficios, testimonios, CTA a pago.",
    ],
  },
  {
    title: "Landing 4 — Señales + Escáner",
    points: [
      "El escáner vive dentro de esta oferta como diferencial.",
      "Vende: membresía operativa, comunidad, escáner, acompañamiento, acceso recurrente.",
    ],
  },
  {
    title: "Landing 5 — Mentoría 1:1",
    points: [
      "Página tipo aplicación. Filtra curiosos y eleva percepción premium.",
      "Incluye: para quién es/no es, requisitos, formulario, CTA a llamada.",
    ],
  },
  {
    title: "Landing 6 — Fondo de Inversión",
    points: [
      "Comunicación financiera sobria y seria.",
      "Para inversionistas calificados: filosofía del fondo, perfil, gestión de riesgo, aplicación privada.",
    ],
  },
];

const MANYCHAT_CARDS = [
  { title: "Reels", text: "Activa cuando alguien comenta palabra clave" },
  { title: "Stories", text: "Activa cuando alguien responde una historia" },
  { title: "Quiz", text: "Entrega el quiz y guía al perfil correcto" },
  { title: "Mini guía gratis", text: "Entrega el recurso de captación a tráfico frío" },
  { title: "Recuperación", text: "Para quien abre el quiz pero no lo termina" },
  { title: "Testimonios", text: "Envía casos y prueba social automáticamente" },
  { title: "Señales", text: "Para interesados en operar acompañados" },
  { title: "Premium", text: "Para mentoría y fondo de inversión" },
];

const NUTRICION_DIAS = [
  { dia: "Día 1", text: "Resultado del quiz personalizado" },
  { dia: "Día 2", text: "Error principal según su perfil" },
  { dia: "Día 3", text: "Contenido educativo clave" },
  { dia: "Día 4", text: "Caso o testimonio real" },
  { dia: "Día 5", text: "Explicación de la solución recomendada" },
  { dia: "Día 6", text: "Objeciones frecuentes respondidas" },
  { dia: "Día 7", text: "CTA directo a la oferta correcta" },
];

const CIERRE_BULLETS = [
  "Recordatorio de la oferta",
  "Urgencia y beneficios",
  "Prueba social",
  "CTA a llamada o pago",
  "Seguimiento si no responde",
];

const CONTENIDO_LINEAS = [
  { title: "Diagnóstico", text: "«Por qué sigues perdiendo dinero operando»" },
  { title: "Psicología", text: "«El problema no es tu estrategia, es cómo reaccionas»" },
  { title: "Educación", text: "«Cómo leer una entrada antes de operar»" },
  { title: "Autoridad", text: "Análisis de mercado y toma de decisiones" },
  { title: "Comunidad", text: "Alumnos, procesos, testimonios, sesiones" },
  { title: "Premium", text: "Contenido sobrio para mentoría y fondo" },
];

const ENTREGABLES_IZQ = [
  "Arquitectura estratégica del funnel",
  "1 quiz principal de diagnóstico",
  "1 mini guía gratuita de captación",
  "6 landings estratégicas completas",
  "8 automatizaciones en ManyChat",
];

const ENTREGABLES_DER = [
  "2 secuencias de WhatsApp (nutrición + cierre)",
  "Segmentación de leads por perfil",
  "Optimización de CTA por oferta",
  "Estructura de contenido por línea",
  "Sistema de seguimiento y organización comercial",
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
          {layerLabel ? <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{layerLabel}</p> : null}
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

function JesusEcosystemMap() {
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
            Diagrama estratégico · de la captación a la conversión por perfil
          </p>

          <div className="grid gap-4 lg:grid-cols-[1fr_minmax(0,7.5rem)_1fr] lg:items-stretch">
            <FlowCard
              step="01"
              layerLabel="Capa 1 — Entrada"
              title="Tráfico y touchpoints"
              items={LAYER1_ITEMS}
              accent="from-sky-500/20 to-cyan-500/10 border-sky-300/30"
            />
            <ConnectorArrow label="Alimentan" />
            <FlowCard
              step="02"
              layerLabel="Capa 2 — Captación y filtro"
              title="ManyChat + quiz estratégico"
              items={LAYER2_ITEMS}
              accent="from-emerald-500/20 to-cyan-500/10 border-emerald-300/35"
            />
          </div>

          <ConnectorArrow vertical label="Nutre y prepara la decisión" />

          <div className="mx-auto max-w-3xl">
            <FlowCard
              step="03"
              layerLabel="Capa 3 — Nutrición"
              title="Secuencias de WhatsApp"
              items={LAYER3_ITEMS}
              accent="from-cyan-500/20 to-blue-500/10 border-cyan-300/30"
            />
          </div>

          <ConnectorArrow vertical label="Cierra en la oferta correcta" />

          <div className="mx-auto max-w-2xl">
            <FlowCard
              step="04"
              layerLabel="Capa 4 — Conversión"
              title="Landing por perfil"
              items={LAYER4_ITEMS}
              accent="from-blue-500/20 to-indigo-500/10 border-blue-300/30"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-8 rounded-xl border border-emerald-300/45 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-emerald-400/10 px-5 py-4 text-center text-sm font-extrabold tracking-[0.04em] text-emerald-100 shadow-[0_0_32px_rgba(16,185,129,0.15)] sm:text-base">
        MÁS LEADS CALIFICADOS + MEJOR SEGMENTACIÓN + CONVERSIÓN AUTOMATIZADA
      </div>
    </div>
  );
}

export default function JesusRodriguezPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [waTab, setWaTab] = useState("frio");
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
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Onboarding</span>
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
                Onboarding estratégico
              </p>
              <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-[1.06] text-slate-50 sm:text-4xl lg:text-[2.75rem]">
                Sistema de captación, segmentación y conversión para el ecosistema de trading de Jesús Rodríguez
              </h1>
              <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-slate-300 sm:text-[17px] lg:text-xl">
                Una arquitectura comercial donde cada persona entra al camino correcto según su nivel, intención, capital
                y necesidad.
              </p>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {["Academia de trading", "Grupo de señales", "Escáner", "Mentoría 1:1", "Fondo de inversión"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <aside data-reveal className="reveal rounded-2xl border border-white/10 bg-gradient-to-b from-[#14233a]/92 to-[#0F1B2E]/92 p-6 shadow-[0_20px_58px_rgba(2,6,23,0.5)] ring-1 ring-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Resumen del proyecto</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-200">
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Proyecto:</strong> Onboarding estratégico
                </li>
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Inversión:</strong> $697 USD / $2.600.000 COP
                </li>
                <li className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <strong className="font-bold text-slate-50">Objetivo:</strong> Segmentar y convertir tráfico en clientes calificados
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <SectionBlock
          id="vision"
          eyebrow="01. Visión general"
          title="Jesús ya tiene algo muy valioso"
          subtitle="Comunidad, contenido, autoridad, tráfico pago y diferentes líneas de negocio. El problema no es que falten servicios — es que todos los perfiles están llegando al mismo lugar sin segmentación clara."
          elevated
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-slate-400">Lo que ya existe</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {VISION_EXISTS.map((t) => (
                  <PremiumCard key={t} title={t} text="Activo clave dentro del ecosistema actual de Jesús." />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-slate-400">Lo que ofrece actualmente</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {VISION_OFFERS.map((t) => (
                  <PremiumCard key={t} title={t} text="Línea de negocio con narrativa y CTA propios en el sistema." />
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock
          id="problema"
          eyebrow="02. El problema"
          title="Lo que entendimos del negocio"
          subtitle="Todos los perfiles llegan al mismo punto sin ruta diferenciada."
        >
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMA_FRICTION.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/10 bg-[#0F1B2E]/85 p-4 text-sm font-semibold text-slate-200 shadow-[0_8px_24px_rgba(2,6,23,0.35)]"
              >
                <span className="shrink-0 text-lg leading-none text-red-400" aria-hidden>
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock
          id="solucion"
          eyebrow="03. La solución"
          title="Un sistema que lleva a cada persona al camino correcto"
          subtitle="Cuatro capas conectadas: entrada, captación y filtro, nutrición y conversión por perfil."
          elevated
        >
          <JesusEcosystemMap />
        </SectionBlock>

        <SectionBlock
          id="quiz"
          eyebrow="04. Quiz estratégico"
          title="El filtro principal del sistema"
          subtitle="No es un formulario simple. Es un diagnóstico de perfil trader que detecta nivel de experiencia, problema principal, estado emocional, capital disponible e intención de compra."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {QUIZ_RESULTS.map((card) => (
              <PremiumCard key={card.title} title={card.title} text={card.text} badge={card.badge} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-slate-400">1 quiz principal. No varios — eso fragmenta el sistema.</p>
        </SectionBlock>

        <SectionBlock
          id="landings"
          eyebrow="05. Las 6 landings"
          title="Cada oferta tiene su propia arquitectura de conversión"
          subtitle="Cada decisión de compra diferente necesita una ruta diferente."
          elevated
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {LANDINGS_SIX.map((landing, index) => (
              <article
                key={landing.title}
                className={`rounded-xl border bg-[#0F1B2E]/88 p-6 shadow-[0_10px_32px_rgba(2,6,23,0.38)] transition duration-300 hover:-translate-y-0.5 ${
                  index % 2 === 0 ? "border-sky-300/25 hover:border-sky-300/38" : "border-emerald-300/20 hover:border-emerald-300/35"
                }`}
              >
                <h3 className="text-lg font-bold text-slate-50">{landing.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Objetivo</p>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {landing.points.map((point) => (
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
          id="manychat"
          eyebrow="06. Automatizaciones ManyChat"
          title="8 automatizaciones para convertir cada interacción en captación"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {MANYCHAT_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-white/10 bg-[#0F1B2E]/85 p-5 shadow-[0_8px_30px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:shadow-[0_0_28px_rgba(56,189,248,0.12)]"
              >
                <h3 className="text-base font-bold text-slate-50">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.text}</p>
              </article>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="whatsapp" eyebrow="07. Secuencias WhatsApp" title="ManyChat capta. WhatsApp nutre y cierra." elevated>
          <div className="mb-4 flex gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setWaTab("frio")}
              className={`flex-1 rounded-full border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide transition ${
                waTab === "frio"
                  ? "border-sky-300/70 bg-sky-400/20 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.22)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-sky-300/40"
              }`}
            >
              Nutrición 7 días
            </button>
            <button
              type="button"
              onClick={() => setWaTab("caliente")}
              className={`flex-1 rounded-full border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide transition ${
                waTab === "caliente"
                  ? "border-sky-300/70 bg-sky-400/20 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.22)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-sky-300/40"
              }`}
            >
              Cierre
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article
              className={`rounded-xl border border-white/10 bg-[#0F1B2E]/88 p-6 shadow-[0_8px_28px_rgba(2,6,23,0.35)] ${
                waTab !== "frio" ? "hidden md:block" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">Secuencia 1 — Nutrición 7 días</p>
              <p className="mt-2 text-sm text-slate-400">Leads fríos</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {NUTRICION_DIAS.map((d) => (
                  <li key={d.dia} className="flex gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="shrink-0 font-bold text-sky-300">{d.dia}</span>
                    <span>{d.text}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article
              className={`rounded-xl border border-white/10 bg-[#0F1B2E]/88 p-6 shadow-[0_8px_28px_rgba(2,6,23,0.35)] ${
                waTab !== "caliente" ? "hidden md:block" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">Secuencia 2 — Cierre</p>
              <p className="mt-2 text-sm text-slate-400">Leads calientes</p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                {CIERRE_BULLETS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </SectionBlock>

        <SectionBlock
          id="contenido"
          eyebrow="08. Estrategia de contenido"
          title="El contenido no puede basarse solo en mostrar profits"
          subtitle="Eso atrae curiosos y baja la calidad del lead. La estrategia se enfoca en: diagnóstico + autoridad + psicología + sistema."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENIDO_LINEAS.map((c) => (
              <PremiumCard key={c.title} title={c.title} text={c.text} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="pauta"
          eyebrow="09. Pauta"
          title="Primero validar, luego escalar"
          subtitle="No escalaríamos pauta agresiva desde el primer día. Primero validamos quiz, mensajes, landings y calidad del lead."
          elevated
        >
          <div className="grid gap-4 md:grid-cols-3">
            <PremiumCard title="Campaña 1 — Quiz" text="Para captar leads segmentados." badge="Validación" />
            <PremiumCard title="Campaña 2 — Mini guía" text="Para tráfico frío." badge="Captación" />
            <PremiumCard title="Campaña 3 — Retargeting" text="Para quienes interactuaron, hicieron quiz o visitaron landings." badge="Recuperación" />
          </div>
        </SectionBlock>

        <SectionBlock id="entregables" eyebrow="10. Qué incluye" title="Todo lo que se construye e implementa">
          <div className="grid gap-6 lg:grid-cols-2">
            <BulletPanel title="Entregables principales" items={ENTREGABLES_IZQ} />
            <BulletPanel title="Sistema y seguimiento" items={ENTREGABLES_DER} tone="success" />
          </div>
        </SectionBlock>

        <SectionBlock id="inversion" eyebrow="11. Inversión" title="La inversión" elevated>
          <div className="mx-auto max-w-xl rounded-2xl border border-emerald-300/35 bg-emerald-400/[0.06] p-8 text-center shadow-[0_12px_40px_rgba(2,6,23,0.4)]">
            <p className="text-4xl font-extrabold text-emerald-100 sm:text-5xl">$697 USD</p>
            <p className="mt-4 text-lg font-semibold text-slate-200">Equivalente: $2.600.000 COP</p>
          </div>
        </SectionBlock>

        <SectionBlock id="cierre" eyebrow="12. Cierre" elevated>
          <div data-reveal className="reveal mx-auto max-w-3xl text-center">
            <p className="text-lg font-semibold leading-relaxed text-slate-100 sm:text-xl">
              Jesús, ya tienes la comunidad, el contenido y la autoridad.
            </p>
            <p className="mt-4 text-base text-slate-300">Fluxa Method construye el sistema que los convierte.</p>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-[#FFD600] bg-[#FFD600] px-8 py-3 text-sm font-extrabold text-black transition hover:brightness-110 sm:text-base"
            >
              Confirmar arranque por WhatsApp
            </a>
          </div>
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
