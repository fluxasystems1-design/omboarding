"use client";

import { useEffect, useState } from "react";

const timelinePhases = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "BASE DIGITAL - LA TIENDA FUNCIONA",
    subtitle: "Semanas 1-2 · Al confirmar arranque",
    icon: "🛒",
    color: "#14B8A6",
    glow: "0 0 0 2px rgba(20,184,166,0.5), 0 0 36px rgba(20,184,166,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Tienda activa", "Tracking base", "Venta directa"],
    build: "Construimos la tienda FuncionA+ con pasarela activa y base de datos propia.",
    activate: "Publicamos la primera pagina de suplemento y activamos pixel + analitica.",
    result: "El doctor puede vender sin WhatsApp desde semana 2.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "EMBUDOS DE VENTA Y CONTENIDO",
    subtitle: "Semanas 3-4",
    icon: "🚀",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["VSL por oferta", "Emails auto", "Captura activa"],
    build: "Creamos landings VSL y paginas de cursos con foco en conversion.",
    activate: "Conectamos secuencias post-compra y automatizaciones de seguimiento.",
    result: "Cada venta deja lead propio y abre la siguiente oportunidad comercial.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "MEMBRESIA, CONSULTAS Y PANEL",
    subtitle: "Semanas 5-6",
    icon: "📊",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Membresia ON", "Agenda 1:1", "Panel central"],
    build: "Implementamos comunidad con niveles de suscripcion y flujo de consultas.",
    activate: "Activamos formulario + agenda automatica con recordatorios.",
    result: "Tres fuentes de ingreso funcionando en paralelo y con control.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "OPTIMIZACION Y ESCALA",
    subtitle: "Mes 2-3",
    icon: "📈",
    color: "#1E3A8A",
    glow: "0 0 0 2px rgba(30,58,138,0.5), 0 0 36px rgba(30,58,138,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["ROAS real", "Escala ads", "Reporte mensual"],
    build: "Ajustamos campanas y landings segun datos reales de conversion.",
    activate: "Escalamos anuncios ganadores y cerramos reporte estrategico.",
    result: "Sistema optimizado para escalar con menor dependencia operativa.",
  },
];

const currentSituation = {
  startPointTitle: "Hoy la autoridad existe, pero no esta convertida en un sistema escalable.",
  startPointItems: [
    "Suplementos vendidos manualmente por WhatsApp.",
    "Libros que no capturan el lead propio.",
    "Cursos sin conexion con la tienda.",
    "Sin landing dedicada por producto.",
    "Sin membresia ni comunidad recurrente.",
    "Sin sistema de consultas 1:1 automatizado.",
  ],
  frictionItems: [
    {
      title: "Suplementos por WhatsApp",
      description: "Magnesio, Omega 3 y Creatina se venden sin carrito, sin tracking y sin automatizacion.",
    },
    {
      title: "Libros sin base de datos propia",
      description: "La editorial captura el lead y el doctor pierde la posibilidad de seguimiento.",
    },
    {
      title: "Cursos aislados",
      description: "No existe upsell cruzado entre cursos, suplementos y audiencia actual.",
    },
    {
      title: "Ventas que arrancan de cero",
      description: "Sin comunidad activa ni embudos, cada mes depende de volver a empujar manualmente.",
    },
  ],
  conclusion:
    "Hoy el doctor genera trafico y confianza organica, pero las ventas dependen de contacto manual. Sin sistema, el crecimiento es fragil.",
};

const transformationsCore = [
  {
    before: "Vende suplementos por WhatsApp: manual, sin registro y sin trazabilidad.",
    after: "Tienda con checkout automatico, confirmacion instantanea e inventario en tiempo real.",
  },
  {
    before: "Un seguidor ve su suplemento en Instagram pero no sabe donde comprar.",
    after: "Landing VSL por producto: video del doctor + CTA directo al checkout + pixel activo.",
  },
  {
    before: "Alguien compra Magnesio y despues no vuelve a saber del doctor.",
    after: "Email post-compra con contenido de valor y oferta complementaria automatica.",
  },
  {
    before: "Los libros se venden en Planeta de Libros y el lead se pierde.",
    after: "Landing de libro con captura de email antes de redirigir; la base de datos queda en casa.",
  },
];

const transformationsScale = [
  {
    before: "Sin membresia: ingreso impredecible cada mes.",
    after: "Comunidad con niveles de suscripcion mensual en Hotmart Club o Skool.",
  },
  {
    before: "Las consultas 1:1 se agendan a mano y muchos interesados se enfrian.",
    after: "Landing de aplicacion + Calendly + recordatorios automaticos 24h y 1h antes de la cita.",
  },
  {
    before: "La audiencia comenta en Instagram pero nadie activa conversaciones con palabras clave.",
    after: "Automatizacion inteligente: quien comenta recibe contenido por mensaje directo y entra al embudo.",
  },
];

const deliverables = [
  {
    title: "Infraestructura de ventas",
    color: "text-teal-300 border-teal-400/40",
    items: [
      "Tienda de suplementos FuncionA+ con pasarela integrada.",
      "3 paginas de venta por suplemento enfocadas en conversion.",
      "Paginas de venta para cursos del doctor.",
      "2 landings de libros con captura de datos.",
      "Panel de control de pedidos y clientes.",
    ],
  },
  {
    title: "Automatizaciones y embudos",
    color: "text-blue-300 border-blue-400/40",
    items: [
      "Automatizaciones post-compra, seguimiento y notificaciones.",
      "Email marketing: secuencias automaticas y newsletters.",
      "Automatizacion de conversaciones en Instagram con palabras clave.",
      "Sistema de membresia con niveles de suscripcion.",
      "Arquitectura y diseno de embudos completos.",
    ],
  },
  {
    title: "Gestion y escalamiento",
    color: "text-indigo-300 border-indigo-400/40",
    items: [
      "Estrategia de contenido para campanas de pauta.",
      "Redaccion de textos para emails y secuencias.",
      "Guiones de automatizacion para Instagram.",
      "Gestion mensual de estrategia digital por 3 meses.",
      "Configuracion inicial y optimizacion de campanas en meses 2 y 3.",
    ],
  },
];

const projectConditions = [
  "Duracion del proyecto: 3 meses desde la firma del contrato.",
  "30 dias de soporte post-entrega incluidos para bugs y ajustes menores.",
  "Todos los activos (tienda, landings y automatizaciones) quedan en las cuentas del doctor.",
  "No hay dependencia de Fluxa Method despues de la entrega.",
  "Pauta publicitaria y suscripciones requeridas se pagan directamente por el doctor.",
];

const supportPlans = [
  {
    name: "Plan Base",
    price: "Incluido",
    period: "30 dias post-entrega",
    items: [
      "Ajustes menores de conversion y automatizacion",
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
      "Optimizacion semanal de embudos y landings",
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
      "Roadmap de nuevas ofertas y productos",
      "Iteraciones de mensajes comerciales y retencion",
      "Tablero de metricas para decisiones de escala",
    ],
    highlight: "border-yellow-400/50",
  },
];

const executiveSummary = {
  today: [
    "Suplementos por WhatsApp.",
    "Libros sin lead propio.",
    "Cursos desconectados.",
    "Consultas manuales.",
    "Sin membresia recurrente.",
  ],
  in90: [
    "Tienda con checkout y tracking.",
    "Landings VSL por producto.",
    "Emails y automatizaciones.",
    "Membresia mensual.",
    "Consultas 1:1 con agenda automatica.",
  ],
};

export default function DrLeonardoBelloPage() {
  const [activePhase, setActivePhase] = useState("fase-1");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const progressPercent = 0;

  const handleMagneticMove = (event, strength = 10) => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const moveX = (offsetX / rect.width) * strength;
    const moveY = (offsetY / rect.height) * strength;
    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const handleMagneticLeave = (event) => {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (reduceMotion) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return () => {};
    }

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
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return () => {};

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setParallaxOffset(Math.min(window.scrollY * 0.08, 140));
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduceMotion]);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24">
        <div data-reveal className="reveal mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
            De las ideas
            <br />
            a ejecutar con{" "}
            <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.5)]">claridad.</span>
          </h1>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:mt-7 sm:text-sm sm:tracking-[0.35em]">
            DIAGNOSTICO · SISTEMA · LANZAMIENTO · ESCALA
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8">
        <div data-reveal className="reveal">
          <div className="mb-9 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">Ruta de activacion</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Plan de ejecucion por fases</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              4 fases secuenciales para construir, lanzar, conectar y escalar el sistema.
            </p>
            <p className="mx-auto mt-4 inline-flex rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
              Arranque: al confirmar propuesta
            </p>
            <div className="mx-auto mt-5 w-full max-w-md">
              <div className="h-2 rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">Progreso del plan: {Math.round(progressPercent)}%</p>
            </div>
          </div>

          <div
            className="relative"
            onMouseMove={(event) => {
              if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
              const rect = event.currentTarget.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              setSpotlight({ x, y, active: true });
            }}
            onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
          >
            <div
              className="pointer-events-none absolute -left-10 top-14 hidden h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl md:block"
              style={{ transform: `translateY(${reduceMotion ? 0 : parallaxOffset * 0.45}px)` }}
            />
            <div
              className="pointer-events-none absolute -right-8 bottom-10 hidden h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl md:block"
              style={{ transform: `translateY(${reduceMotion ? 0 : -parallaxOffset * 0.35}px)` }}
            />
            <div
              className="spotlight-layer pointer-events-none absolute inset-0 z-0 hidden rounded-3xl md:block"
              style={{
                opacity: spotlight.active ? 1 : 0,
                background: `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.12), transparent 60%)`,
              }}
            />
            <div className="mobile-snap-carousel flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
              {timelinePhases.map((phase, index) => (
                <div
                  key={phase.id}
                  data-reveal
                  className="reveal route-card relative z-10 w-[88vw] min-w-[88vw] max-w-md shrink-0 snap-center rounded-2xl border border-zinc-800/80 bg-zinc-950/55 p-4 text-center backdrop-blur-[1px] md:mx-auto md:w-full md:min-w-0 md:max-w-none md:shrink md:snap-none md:p-5"
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

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: phase.color }}>
                    {phase.label}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActivePhase(phase.id)}
                    onMouseMove={(event) => handleMagneticMove(event, 12)}
                    onMouseLeave={handleMagneticLeave}
                    className="magnetic mx-auto block"
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
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white md:text-base">{phase.title}</p>
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
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <p className="rounded-xl border border-[#FFD600] bg-[#FFD600] px-6 py-3 text-center text-sm font-bold text-black shadow-[0_0_22px_rgba(255,214,0,0.25)] sm:text-base">
              = Sistema activo + Ingresos recurrentes
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            01. Donde esta hoy el Dr. Leonardo Bello
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Tiene credibilidad, audiencia y productos solidos, pero el sistema comercial todavia depende de procesos manuales.
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
                Fricciones del negocio
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

          <p className="mt-6 rounded-xl border border-sky-300/35 bg-sky-500/10 px-5 py-3 text-center text-base font-bold text-sky-100">
            Conlusion: {currentSituation.conclusion}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            02. Las transformaciones concretas en 90 dias
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Cada transformacion impacta ventas, captura de datos y eficiencia operativa.
          </p>

          <details className="mt-6 rounded-xl border border-zinc-700 bg-[#111111] p-4 md:hidden">
            <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">
              Ver transformaciones 1 a 4
            </summary>
            <div className="mt-4 grid gap-3">
              <div className="grid gap-3">
                <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                  Antes
                </p>
                <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Despues
                </p>
              </div>
              {transformationsCore.map((item, idx) => (
                <div key={`mobile-core-${item.before}`} className="grid gap-3">
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
          </details>

          <div className="mt-6 hidden gap-3 md:grid">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Antes
              </p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">
                Despues
              </p>
            </div>
            {transformationsCore.map((item, idx) => (
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

          <p className="mt-6 rounded-xl border border-blue-300/35 bg-blue-500/10 px-5 py-3 text-center text-base font-bold text-blue-100">
            Primer bloque: se ordena la venta directa, se recupera el lead propio y cada compra empieza a abrir la siguiente oportunidad comercial.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            02. Transformaciones 5 a 7 - monetizacion recurrente y automatizacion
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            La segunda capa del sistema convierte audiencia en recurrencia, consultas y conversacion activa.
          </p>

          <details className="mt-6 rounded-xl border border-zinc-700 bg-[#111111] p-4 md:hidden">
            <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">
              Ver transformaciones 5 a 7
            </summary>
            <div className="mt-4 grid gap-3">
              <div className="grid gap-3">
                <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                  Antes
                </p>
                <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Despues
                </p>
              </div>
              {transformationsScale.map((item, idx) => (
                <div key={`mobile-scale-${item.before}`} className="grid gap-3">
                  <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformacion {idx + 5}</p>
                    <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                  </article>
                  <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Impacto {idx + 5}</p>
                    <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                  </article>
                </div>
              ))}
            </div>
          </details>

          <div className="mt-6 hidden gap-3 md:grid">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Antes
              </p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">
                Despues
              </p>
            </div>
            {transformationsScale.map((item, idx) => (
              <div key={item.before} className="grid gap-3 md:grid-cols-2">
                <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformacion {idx + 5}</p>
                  <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                </article>
                <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Impacto {idx + 5}</p>
                  <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                </article>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-emerald-300/35 bg-emerald-500/10 px-5 py-3 text-center text-base font-bold text-emerald-100">
            Con el ecosistema activo, el doctor tiene tres fuentes de ingreso funcionando en paralelo: suplementos, membresia y consultas 1:1.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            03. Que recibe exactamente - entregables y presupuesto
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Todo lo que se entrega en los 3 meses dentro de la inversion acordada.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {deliverables.map((column) => (
              <article
                key={column.title}
                onMouseMove={(event) => handleMagneticMove(event, 8)}
                onMouseLeave={handleMagneticLeave}
                className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]"
              >
                <h3 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${column.color}`}>{column.title}</h3>
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

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="rounded-xl bg-[#0B2A4A] px-5 py-3 text-center text-xl font-extrabold text-white">
              TOTAL DEL PROYECTO | $12.000.000 COP
            </p>
            <p className="rounded-xl border border-yellow-400/55 bg-yellow-400/10 px-5 py-3 text-center text-sm font-bold text-yellow-200">
              Presupuesto de pauta y suscripciones se paga aparte por el doctor.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">05. Forma de pago y condiciones</h2>

          <div className="grid gap-5 lg:grid-cols-2">
            <article
              onMouseMove={(event) => handleMagneticMove(event, 8)}
              onMouseLeave={handleMagneticLeave}
              className="magnetic rounded-2xl border border-blue-400/60 bg-[#111111] p-6"
            >
              <p className="rounded-xl bg-blue-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100">
                Opcion A - 2 cuotas
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Cuota 1 - Al firmar el contrato</p>
                  <p className="mt-1 text-3xl font-extrabold text-blue-300">$6.000.000</p>
                  <p className="text-xs text-zinc-400">Arranca el proyecto de inmediato</p>
                </div>
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Cuota 2 - Al iniciar el mes 2</p>
                  <p className="mt-1 text-3xl font-extrabold text-blue-300">$6.000.000</p>
                  <p className="text-xs text-zinc-400">Activa la Fase 3</p>
                </div>
              </div>
            </article>

            <article
              onMouseMove={(event) => handleMagneticMove(event, 8)}
              onMouseLeave={handleMagneticLeave}
              className="magnetic rounded-2xl border border-emerald-400/60 bg-[#111111] p-6"
            >
              <p className="rounded-xl bg-emerald-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-emerald-100">
                Opcion B - 3 cuotas
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Cuota 1 - Al firmar el contrato</p>
                  <p className="mt-1 text-3xl font-extrabold text-emerald-300">$4.000.000</p>
                  <p className="text-xs text-zinc-400">Arranca el proyecto</p>
                </div>
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Cuota 2 - Al iniciar el mes 2</p>
                  <p className="mt-1 text-3xl font-extrabold text-emerald-300">$4.000.000</p>
                  <p className="text-xs text-zinc-400">Activa la Fase 3</p>
                </div>
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Cuota 3 - Al iniciar el mes 3</p>
                  <p className="mt-1 text-3xl font-extrabold text-emerald-300">$4.000.000</p>
                  <p className="text-xs text-zinc-400">Fase 4 de optimizacion</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Condiciones del proyecto</h2>
          <details className="mt-4 rounded-xl border border-zinc-700 bg-zinc-900/65 p-4 md:hidden">
            <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">
              Ver condiciones y soporte
            </summary>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
              {projectConditions.map((item) => (
                <li key={`mobile-${item}`} className="flex gap-2">
                  <span className="text-emerald-300">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
          <ul className="mt-4 hidden space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base md:block">
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
            Doctor, ya tiene la credibilidad. Fluxa Method pone el sistema.
          </h2>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-blue-200/80 sm:text-sm">
            fluxamethod.com · @fluxamethod · Cucuta, Colombia
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Resumen ejecutivo</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-300">
                Hoy
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">
                Autoridad y audiencia ya existen, pero el sistema comercial todavia no captura ni escala bien.
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {executiveSummary.today.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                En 90 dias
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">
                Se construye un ecosistema conectado para vender, nutrir, retener y reactivar desde una sola arquitectura.
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {executiveSummary.in90.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-400">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 text-center">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300">
                Inversion
              </p>
              <p className="mt-4 text-5xl font-extrabold text-blue-300">$12.000.000 COP</p>
              <p className="mt-4 text-3xl text-zinc-300">
                3 meses
                <br />
                4 fases
                <br />
                activos propios
                <br />
                soporte post-entrega
              </p>
              <p className="mx-auto mt-5 inline-flex rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                2 o 3 cuotas disponibles
              </p>
            </article>
          </div>

        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Planes de soporte post-entrega</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-400 sm:text-base">
            Puedes continuar con acompanamiento segun el nivel de soporte que necesites despues de la entrega.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {supportPlans.map((plan) => (
              <article
                key={plan.name}
                onMouseMove={(event) => handleMagneticMove(event, 8)}
                onMouseLeave={handleMagneticLeave}
                className={`magnetic rounded-2xl border ${plan.highlight} bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]`}
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

      <div className="mobile-cta mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 md:hidden">
        <a
          href="https://wa.me/573116425337"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl border border-yellow-400 bg-[#FFD600] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
        >
          Confirmar arranque del proyecto
        </a>
      </div>

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

        .spotlight-layer {
          transition: opacity 0.28s ease;
        }

        .mobile-snap-carousel {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .mobile-snap-carousel::-webkit-scrollbar {
          display: none;
        }

        .magnetic {
          transition: transform 0.25s ease;
          will-change: transform;
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

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .pulse-glow,
          .timeline-dash,
          .timeline-dash-vertical,
          .magnetic,
          .route-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
