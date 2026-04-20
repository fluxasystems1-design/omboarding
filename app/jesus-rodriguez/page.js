"use client";

import { useEffect, useState } from "react";

const timelinePhases = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "GUIONES Y ESTRUCTURA",
    subtitle: "Semana 1 · Al confirmar arranque",
    icon: "📋",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["VSL x4", "Landings x4", "Embudo listo"],
    build: "Construimos 4 guiones y estructura comercial por oferta.",
    activate: "Activamos el diseño de landings y flujo inicial.",
    result: "Base clara para pasar a lanzamiento sin fricción.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "LANZAMIENTO",
    subtitle: "Semanas 2–3",
    icon: "🚀",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.6)",
    status: "POR INICIAR",
    statusClass: "border-yellow-400/50 text-yellow-300",
    points: ["VSL publicado", "Agenda activa", "Campaña ON"],
    build: "Publicamos 4 landings con VSL y CTA por producto.",
    activate: "Conectamos agenda automatica y pixeles de seguimiento.",
    result: "Empiezan a entrar leads y solicitudes calificadas.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "CONTENIDO Y PAUTA",
    subtitle: "Semanas 3-4",
    icon: "📊",
    color: "#FFD600",
    glow: "0 0 0 2px rgba(255,214,0,0.5), 0 0 36px rgba(255,214,0,0.58)",
    status: "PROXIMO",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Organico 60 dias", "Creativos Ads", "Sesion 1"],
    build: "Diseñamos calendario organico y angulos creativos.",
    activate: "Encendemos pauta y primera sesion de optimizacion.",
    result: "Canal organico y pago alimentan el mismo sistema.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "ESCALA",
    subtitle: "Mes 2",
    icon: "📈",
    color: "#A855F7",
    glow: "0 0 0 2px rgba(168,85,247,0.5), 0 0 36px rgba(168,85,247,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["ROAS optimizado", "Reporte final", "Plan trimestre"],
    build: "Ajustamos campañas con datos reales de conversion.",
    activate: "Consolidamos reporte y plan del siguiente trimestre.",
    result: "Sistema listo para escalar de forma independiente.",
  },
];

const detailCards = [
  {
    id: "detail-1",
    phase: "Fase 1",
    title: "Guiones y estructura",
    items: [
      "4 guiones VSL estratégicos (uno por producto)",
      "Diseño y estructura de las 4 landings",
      "Configuración inicial de cuentas publicitarias",
      "Arquitectura de embudos según perfil del prospecto",
      "Jesús queda con guiones listos y landings en construcción",
    ],
  },
  {
    id: "detail-2",
    phase: "Fase 2",
    title: "Lanzamiento y automatizaciones",
    items: [
      "Publicación de 4 landings con VSL integrado",
      "Agenda automática para mentoría 1:1 y bot",
      "Sistema de entrega automática de videos en Instagram",
      "Píxeles instalados y primera campaña activa",
      "El sistema empieza a captar y convertir desde la semana 3",
    ],
  },
  {
    id: "detail-3",
    phase: "Fase 3",
    title: "Contenido y pauta",
    items: [
      "Arranque del contenido orgánico (60 días planificados)",
      "Ángulos creativos y mensajes para Meta Ads",
      "Primera sesión estratégica mensual",
      "Optimización según resultados reales",
      "Orgánico y pauta alimentan las landings en paralelo",
    ],
  },
  {
    id: "detail-4",
    phase: "Fase 4",
    title: "Escala y cierre",
    items: [
      "Ajuste de campañas según ROAS real",
      "Segunda sesión estratégica",
      "Reporte final de métricas del proyecto",
      "Plan de acción para el siguiente trimestre",
      "Sistema optimizado y listo para escalar de forma independiente",
    ],
  },
];

const deliverables = [
  {
    title: "Desarrollo digital",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Landing academia de trading con VSL",
      "Landing scanner de señales",
      "Landing bot con agenda automática",
      "Landing mentoría 1:1 con precalificación",
      "Sistema entrega automática videos Instagram",
      "Píxeles en todas las páginas",
    ],
  },
  {
    title: "Estrategia y embudos",
    color: "text-green-300 border-green-400/40",
    items: [
      "4 guiones VSL — uno por producto",
      "Arquitectura de embudos por producto",
      "Estrategia contenido orgánico 60 días",
      "Estrategia de pauta Meta Ads",
      "2 sesiones estratégicas mensuales",
    ],
  },
  {
    title: "Campañas publicitarias",
    color: "text-yellow-300 border-yellow-400/40",
    items: [
      "Configuración Meta Ads completa",
      "Campañas activas mes 1 y mes 2",
      "Optimización semanal",
      "Soporte WhatsApp días hábiles",
      "Inversión publicitaria sugerida aparte: $300-$500 USD/mes",
    ],
  },
];

const currentSituation = {
  startPointTitle: "Hoy las ventas dependen de la atencion manual",
  startPointItems: [
    "Sin landing dedicada por producto.",
    "Sin VSL estrategico que complete la decision de compra.",
    "Sin embudo de contenido que nutra al prospecto.",
    "Sin agenda automatizada para la mentoria 1:1.",
    "Sin flujo gratuito de valor previo a la venta.",
  ],
  frictionItems: [
    {
      title: "Confusion de oferta",
      description: "Academia, scanner, bot y mentoria compiten en el mismo espacio.",
    },
    {
      title: "Falta de persuasion",
      description: "No existe una pieza clara por producto que explique beneficios y siguiente paso.",
    },
    {
      title: "Proceso lento",
      description: "La mentoria depende de mensajes manuales y seguimiento uno a uno.",
    },
    {
      title: "Contenido sin sistema",
      description: "Instagram atrae interes, pero no hay una secuencia que convierta atencion en demanda.",
    },
  ],
};

const transformations = [
  {
    before: "El prospecto llega al perfil y no sabe que producto es para el.",
    after: "4 landings dedicadas, cada una habla al perfil correcto y lo empuja a la decision de compra.",
  },
  {
    before: "Existe contenido, pero no esta conectado al sistema de venta.",
    after: "Estrategia de 60 dias en dos carriles: organico para audiencia y pauta para conversion.",
  },
  {
    before: "La mentoria 1:1 depende de mensajes y espera manual.",
    after: "Embudo de precalificacion con agenda automatica integrada en landing.",
  },
  {
    before: "El prospecto no recibe valor automatizado antes de comprar.",
    after: "Sistema que entrega videos educativos y acelera confianza.",
  },
  {
    before: "Las campanas no tienen landings optimizadas para convertir.",
    after: "Cada producto recibe su landing con VSL y CTA especifico para trafico pagado.",
  },
];

const strategicLandings = [
  {
    title: "Academia de Trading",
    text: "Para quien quiere aprender desde cero o mejorar su operativa.",
    focus: "Transformacion educativa y resultados de alumnos.",
    tags: ["VSL estrategico", "Oferta principal"],
  },
  {
    title: "Scanner de Senales",
    text: "Para el trader que ya opera y quiere ventaja informativa.",
    focus: "Precision, ahorro de tiempo y casos de uso reales.",
    tags: ["VSL estrategico", "Casos reales"],
  },
  {
    title: "Bot de Operacion Automatizada",
    text: "Para el trader avanzado que quiere que el sistema opere por el.",
    focus: "Autonomia, resultados y diferencial tecnico del bot.",
    tags: ["VSL estrategico", "Agenda integrada"],
  },
  {
    title: "Mentoria 1:1",
    text: "Para el trader serio que busca acompanamiento personalizado.",
    focus: "Autoridad, resultado individual y agenda inmediata.",
    tags: ["VSL estrategico", "Agenda integrada"],
  },
];

const projectConditions = [
  "Duracion del proyecto: 2 meses desde la firma.",
  "30 dias de soporte post-entrega incluidos para ajustes menores.",
  "Todas las landings quedan publicadas en el dominio propio de Jesus.",
  "Los activos digitales son propiedad de Jesus; no queda dependencia de Fluxa Method.",
  "La pauta publicitaria y suscripciones requeridas se pagan directamente por Jesus.",
];

const supportPlans = [
  {
    name: "Plan Base",
    price: "Incluido",
    period: "30 dias post-entrega",
    items: [
      "Ajustes menores sobre landings y automatizaciones",
      "Soporte por WhatsApp en dias habiles",
      "Revision de incidencias tecnicas puntuales",
    ],
    highlight: "border-emerald-400/40",
  },
  {
    name: "Plan Continuidad",
    price: "Opcional",
    period: "Mensual",
    items: [
      "Optimizacion semanal de conversion y embudos",
      "Seguimiento de pauta con recomendaciones accionables",
      "1 sesion estrategica mensual de crecimiento",
    ],
    highlight: "border-blue-400/40",
  },
  {
    name: "Plan Escala",
    price: "Opcional",
    period: "Trimestral",
    items: [
      "Roadmap de nuevos activos y ofertas",
      "Iteraciones de mensajes y angulos comerciales",
      "Tablero de metricas para decisiones de escala",
    ],
    highlight: "border-yellow-400/50",
  },
];

export default function JesusRodriguezPage() {
  const [openCard, setOpenCard] = useState("detail-1");
  const [activePhase, setActivePhase] = useState("fase-1");

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24">
        <div data-reveal className="reveal mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-yellow-300/90">
            EL PROYECTO
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            De las ideas
            <br />
            a ejecutar con{" "}
            <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.5)]">
              claridad.
            </span>
          </h1>
          <p className="mt-7 text-xs font-medium uppercase tracking-[0.35em] text-zinc-400 sm:text-sm">
            DIAGNÓSTICO · SISTEMA · LANZAMIENTO · ESCALA
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <div className="mb-9 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">
              Ruta de activacion
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sistema en 60 dias
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              4 fases conectadas para pasar de claridad comercial a captacion automatizada.
            </p>
            <p className="mx-auto mt-4 inline-flex rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
              Arranque: al confirmar propuesta
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-8 md:grid-cols-4 md:gap-6">
              {timelinePhases.map((phase, index) => (
                <div
                  key={phase.id}
                  data-reveal
                  className="reveal route-card relative mx-auto w-full max-w-md rounded-2xl border border-zinc-800/80 bg-zinc-950/55 p-4 text-center backdrop-blur-[1px] md:max-w-none md:p-5"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {index !== timelinePhases.length - 1 && (
                    <div className="relative mx-auto mt-4 h-12 w-[2px] overflow-hidden rounded-full md:hidden">
                      <span className="timeline-dash-vertical block h-full w-full" />
                    </div>
                  )}
                  {index !== timelinePhases.length - 1 && (
                    <div className="absolute left-[calc(50%+50px)] top-[72px] hidden h-[2px] w-[calc(100%-20px)] overflow-hidden rounded-full md:block">
                      <span className="timeline-dash absolute inset-0 block" />
                    </div>
                  )}
                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActivePhase(phase.id)}
                    className="group mx-auto block"
                    aria-label={`Activar ${phase.title}`}
                  >
                    <div
                      className="pulse-glow mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border bg-zinc-950/85 text-2xl md:h-[80px] md:w-[80px] md:text-3xl"
                      style={{
                        borderColor: phase.color,
                        boxShadow: phase.glow,
                        transform: activePhase === phase.id ? "scale(1.08)" : undefined,
                      }}
                    >
                      <span role="img" aria-label={phase.title}>
                        {phase.icon}
                      </span>
                    </div>
                  </button>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white md:text-base">
                    {phase.title}
                  </p>
                  <p className="text-sm text-zinc-300">{phase.subtitle}</p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {phase.points.map((point, chipIndex) => (
                      <span
                        key={point}
                        data-reveal
                        className="reveal fade-soft rounded-full border border-zinc-600/70 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-zinc-200"
                        style={{ transitionDelay: `${chipIndex * 80 + index * 100}ms` }}
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${phase.statusClass}`}
                  >
                    {phase.status}
                  </span>

                  <div
                    className={`mt-4 grid transition-all duration-500 ${
                      activePhase === phase.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-1.5 text-left text-[12px] leading-relaxed text-zinc-300">
                        <li>
                          <span className="font-semibold text-zinc-100">Construimos:</span> {phase.build}
                        </li>
                        <li>
                          <span className="font-semibold text-zinc-100">Activamos:</span> {phase.activate}
                        </li>
                        <li>
                          <span className="font-semibold text-zinc-100">Resultado:</span> {phase.result}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <ul className="sr-only">
                    {phase.points.map((point) => (
                      <li key={`${phase.id}-${point}`} className="flex gap-2">
                        <span style={{ color: phase.color }}>·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <p className="rounded-xl border border-[#FFD600] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_22px_rgba(255,214,0,0.25)] sm:text-base bg-[#FFD600]">
              = Sistema activo + Resultados reales
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            01. Donde esta hoy Jesus Rodriguez
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Tiene credibilidad y productos valiosos, pero el sistema comercial aun no convierte ni escala.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Punto de partida
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">{currentSituation.startPointTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {currentSituation.startPointItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Friccion actual
              </p>
              <div className="mt-4 space-y-3">
                {currentSituation.frictionItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-zinc-700 bg-zinc-900/75 p-4">
                    <p className="text-base font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            02. Transformaciones concretas en 60 dias
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Cada mejora impacta directamente ventas, claridad de oferta y eficiencia operativa.
          </p>

          <div className="mt-6 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Antes
              </p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">
                Despues
              </p>
            </div>
            {transformations.map((item, idx) => (
              <div key={item.before} className="grid gap-3 md:grid-cols-2">
                <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformacion {idx + 1}</p>
                  <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                </article>
                <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Impacto {idx + 1}</p>
                  <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            03. Las 4 landings estrategicas
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Cada producto tiene su propia narrativa de venta con VSL y CTA listo para convertir.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {strategicLandings.map((landing) => (
              <article
                key={landing.title}
                className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-blue-300/60"
              >
                <h3 className="text-2xl font-extrabold">{landing.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{landing.text}</p>
                <p className="mt-3 font-semibold text-zinc-100">{landing.focus}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {landing.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-blue-300/40 bg-blue-500/10 px-5 py-3 text-center font-semibold text-blue-100">
            Los guiones VSL se entregan antes de la semana 2. Jesus solo debe grabarlos.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-7 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Detalle de fases
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {detailCards.map((card) => {
              const isOpen = openCard === card.id;
              return (
                <article
                  key={card.id}
                  className={`group rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)] ${
                    isOpen ? "border-yellow-400/70 shadow-[0_0_26px_rgba(255,214,0,0.2)]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenCard(isOpen ? "" : card.id)}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                        {card.phase}
                      </p>
                      <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                    </div>
                    <span className="ml-4 text-2xl text-yellow-300">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                        {card.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-[#FFD600]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Qué recibe exactamente
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-400 sm:text-base">
            Todo lo que se construye e instala en los 2 meses
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {deliverables.map((column) => (
              <article
                key={column.title}
                className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]"
              >
                <h3
                  className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}
                >
                  {column.title}
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#FFD600]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            La inversión
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-400/80 bg-[#111111] p-8 text-center shadow-[0_0_24px_rgba(59,130,246,0.24)] transition duration-300 hover:scale-[1.02]">
              <p className="text-4xl font-extrabold text-blue-300">$400 USD</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-300">
                Pago 1 — Al firmar
              </p>
              <p className="mt-4 text-zinc-400">Arranca el proyecto de inmediato</p>
            </article>

            <article className="rounded-2xl border border-yellow-400/80 bg-[#111111] p-8 text-center shadow-[0_0_24px_rgba(255,214,0,0.2)] transition duration-300 hover:scale-[1.02]">
              <p className="text-4xl font-extrabold text-[#FFD600]">$297 USD</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-300">
                Pago 2 — Al pasar 15 días
              </p>
              <p className="mt-4 text-zinc-400">Activa las fases 3 y 4</p>
            </article>
          </div>

          <p className="mt-8 text-center text-3xl font-extrabold text-white sm:text-4xl">
            $697 USD <span className="text-zinc-500">· Sin intereses</span>
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Condiciones del proyecto</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
            {projectConditions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-300">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-16 sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Jesus, ya tienes la audiencia y los productos.
          </h2>
          <p className="mt-4 text-lg text-blue-100 sm:text-xl">Fluxa Method pone el sistema.</p>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/80 sm:text-sm">
            fluxamethod.com · @fluxamethod · Cúcuta, Colombia
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Planes de soporte post-entrega
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-400 sm:text-base">
            Puedes continuar con acompanamiento segun el nivel de soporte que necesites despues de la entrega.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {supportPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl border ${plan.highlight} bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{plan.period}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#FFD600]">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#FFD600]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px) scale(0.98);
          transition: opacity 0.7s ease, transform 0.7s ease;
          will-change: transform, opacity;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .pulse-glow {
          animation: pulseGlow 2.2s ease-in-out infinite;
        }

        .timeline-dash {
          background-image: repeating-linear-gradient(
            to right,
            rgba(255, 255, 255, 0.2) 0,
            rgba(255, 255, 255, 0.2) 8px,
            transparent 8px,
            transparent 14px
          );
          animation: dashFlowHorizontal 1.8s linear infinite;
        }

        .timeline-dash-vertical {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.2) 0,
            rgba(255, 255, 255, 0.2) 8px,
            transparent 8px,
            transparent 14px
          );
          animation: dashFlowVertical 1.8s linear infinite;
        }

        .fade-soft {
          transition-duration: 0.8s;
        }

        .route-card {
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .route-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: 0 0 24px rgba(255, 255, 255, 0.08);
        }

        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            filter: brightness(0.95);
          }
          50% {
            transform: scale(1.05);
            filter: brightness(1.12);
          }
          100% {
            transform: scale(1);
            filter: brightness(0.95);
          }
        }

        @keyframes dashFlowHorizontal {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 48px 0;
          }
        }

        @keyframes dashFlowVertical {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 48px;
          }
        }
      `}</style>
    </main>
  );
}
