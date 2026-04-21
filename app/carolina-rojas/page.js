"use client";

import { useEffect, useRef, useState } from "react";

const timelinePhases = [
  {
    id: "fase-1",
    label: "FASE 1",
    title: "MEMBRESIA Y AUTOMATIZACION",
    subtitle: "Semanas 1-2",
    icon: "⚡",
    color: "#14B8A6",
    glow: "0 0 0 2px rgba(20,184,166,0.5), 0 0 36px rgba(20,184,166,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Landing membresia", "DMs auto", "Cobro activo"],
    build: "Publicamos landing de membresia con pago integrado desde la semana 1.",
    activate: "Automatizamos palabras clave GRUPO, CURSO e INFO en Instagram.",
    result: "Tu video viral empieza a generar ingresos automaticos.",
  },
  {
    id: "fase-2",
    label: "FASE 2",
    title: "ECOMMERCE Y LANDINGS",
    subtitle: "Semanas 3-4",
    icon: "🛍️",
    color: "#3B82F6",
    glow: "0 0 0 2px rgba(59,130,246,0.5), 0 0 36px rgba(59,130,246,0.6)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Tienda online", "Landings por producto", "Carrito recuperado"],
    build: "Montamos ecommerce completo con catalogo, checkout y fichas de producto.",
    activate: "Lanzamos landings de los productos top con campañas Meta Ads activas.",
    result: "Los productos de Canton se venden sin responder pedido a pedido.",
  },
  {
    id: "fase-3",
    label: "FASE 3",
    title: "ACADEMIA ONLINE Y VSL",
    subtitle: "Semanas 5-6",
    icon: "🎓",
    color: "#10B981",
    glow: "0 0 0 2px rgba(16,185,129,0.5), 0 0 36px rgba(16,185,129,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Plataforma curso", "Landing VSL", "CRM unificado"],
    build: "Implementamos academia con login, modulos y contenido descargable.",
    activate: "Conectamos VSL + CRM para estudiantes, miembros y clientes ecommerce.",
    result: "Tu conocimiento genera ingresos recurrentes en paralelo.",
  },
  {
    id: "fase-4",
    label: "FASE 4",
    title: "OPTIMIZACION Y ENTREGA",
    subtitle: "Semanas 7-8",
    icon: "📈",
    color: "#1E3A8A",
    glow: "0 0 0 2px rgba(30,58,138,0.5), 0 0 36px rgba(30,58,138,0.58)",
    status: "POR INICIAR",
    statusClass: "border-zinc-500/60 text-zinc-300",
    points: ["Ajuste ROAS", "Reporte final", "Ecosistema entregado"],
    build: "Optimizamos anuncios y flujos con los datos reales de conversion.",
    activate: "Cerramos con sesion final, reporte de KPIs y entrega de activos.",
    result: "Sistema completo funcionando con datos reales y control.",
  },
];

const currentSituation = {
  startPointTitle:
    "Tienes audiencia real, producto y momento viral, pero sin sistema el crecimiento depende de tu tiempo.",
  startPointItems: [
    "El caos de DMs te esta costando clientes.",
    "No hay donde aterrizar el trafico.",
    "El grupo de $200 USD no tiene sistema de cobro.",
    "No tienes donde vender tus productos fisicos.",
    "Tu conocimiento no genera ingresos recurrentes aun.",
    "Sin datos no puedes crecer con criterio.",
  ],
  frictionItems: [
    {
      title: "DMs sin respuesta inmediata",
      description: "Cuando tardas en responder, ese cliente potencial se enfria y se pierde.",
    },
    {
      title: "Cobro manual uno a uno",
      description: "Escribes, esperas transferencia y agregas manualmente al grupo.",
    },
    {
      title: "Sin ecommerce activo",
      description: "Los productos de Canton no tienen un flujo de compra organizado.",
    },
    {
      title: "Sin sistema para escalar",
      description: "Cada lanzamiento arranca desde cero y depende de improvisacion.",
    },
    {
      title: "Sin data comercial",
      description: "No hay CRM ni panel para segmentar, medir y optimizar ingresos.",
    },
  ],
  conclusion:
    "Resultado hoy: tienes audiencia, producto y momento, pero sin sistema digital el crecimiento tiene un techo muy bajo y depende completamente de tu disponibilidad. Fluxa Method instala el sistema.",
};

const transformationsCore = [
  {
    before:
      "Alguien ve tu video viral, escribe al DM y nadie responde o tardas horas; ese cliente se va.",
    after:
      "Palabra clave en el DM activa respuesta inmediata con link de pago y landing; el cliente compra solo a cualquier hora.",
  },
  {
    before:
      "Para cobrar el grupo escribes uno a uno, esperas la transferencia y agregas manualmente.",
    after:
      "Landing profesional con pago integrado; el interesado paga, entra al grupo y recibe bienvenida sin que intervengas.",
  },
  {
    before:
      "Tienes productos de Canton que la gente quiere pero no hay donde verlos ni comprarlos de forma organizada.",
    after:
      "Tienda online con catalogo, ficha por producto y proceso de compra; el cliente navega, elige y paga sin escribirte.",
  },
];

const transformationsScale = [
  {
    before:
      "Tu conocimiento existe solo en tu cabeza y en tus historias de Instagram.",
    after:
      "Academia organizada con modulos, acceso de pago y membresia recurrente; tu conocimiento genera ingresos mientras duermes.",
  },
  {
    before:
      "Lanzas un producto nuevo y tienes que improvisar la comunicacion cada vez.",
    after:
      "Guion de lanzamiento listo, landing por producto activa y campana configurada; cada novedad tiene su sistema.",
  },
  {
    before:
      "No sabes quienes son tus clientes, que compraron ni como volver a contactarlos.",
    after:
      "CRM activo con historial de cada contacto, segmentacion por producto y panel de ingresos en tiempo real.",
  },
];

const deliverablesAcademy = [
  {
    title: "Arquitectura y estrategia",
    items: [
      "Arquitectura completa del negocio digital: que vender, a quien, a que precio y en que orden",
      "Guion VSL del curso: estructura de dolor, transformacion, bonos, objeciones y CTA",
      "Estrategia de trafico 60 dias para aprovechar el momento viral de Canton en Instagram",
      "Consultoria de posicionamiento: propuesta de valor, angulo de marca y mensajes clave",
      "Guiones de lanzamiento por producto",
    ],
  },
  {
    title: "Desarrollo e implementacion",
    items: [
      "Landing VSL del curso",
      "Plataforma del curso online con login, modulos, videos y descargables",
      "Landing de membresia del grupo",
      "Automatizacion de DMs en Instagram con palabras clave: GRUPO, CURSO, INFO",
      "Flujo de bienvenida automatico",
      "CRM de estudiantes y miembros",
    ],
  },
  {
    title: "Campanas publicitarias",
    items: [
      "Retargeting al publico que vio el video viral de Canton",
      "Pauta hacia la landing VSL",
      "Campana de membresia del grupo con segmentacion por intereses y comportamiento de compra",
    ],
  },
];

const deliverablesEcommerce = [
  {
    title: "Arquitectura y estrategia",
    items: [
      "Arquitectura del ecommerce",
      "Guiones de landings por producto",
      "Estrategia de lanzamiento de cada novedad de Canton",
    ],
  },
  {
    title: "Desarrollo e implementacion",
    items: [
      "Tienda online completa con categorias, ficha por producto, fotos, precio y checkout",
      "Landings individuales por producto destacado",
      "Automatizacion post-compra",
      "Recuperacion de carritos abandonados",
      "Panel de control con ventas del mes, productos mas vendidos, pedidos en curso e ingresos por canal",
    ],
  },
  {
    title: "Campanas publicitarias",
    items: [
      "Campanas por producto destacado",
      "Retargeting de visitantes que vieron un producto pero no completaron compra",
    ],
  },
];

const projectConditions = [
  "Duracion del proyecto: 2 meses desde la firma.",
  "30 dias de soporte post-entrega incluidos para bugs y ajustes menores.",
  "La tienda, la plataforma del curso, los flujos y todos los activos digitales quedan en propiedad de Carolina.",
  "No hay dependencia de Fluxa Method tras la entrega.",
  "El presupuesto de pauta va directo de Carolina a Meta Ads.",
  "Las suscripciones de plataformas digitales requeridas las paga Carolina directamente.",
];

const supportPlans = [
  {
    name: "Fluxa Soporte",
    price: "USD 150-200/mes",
    period: "Plan base",
    items: [
      "Soporte tecnico por WhatsApp en dias habiles",
      "Correccion de bugs y errores",
      "Ajustes de contenido: textos, precios, imagenes",
      "Monitoreo de automatizaciones",
      "Actualizaciones de seguridad",
      "Ideal si Carolina ya tiene equipo de marketing",
    ],
    highlight: "border-emerald-400/40",
  },
  {
    name: "Fluxa Activo",
    price: "USD 350-500/mes",
    period: "Plan crecimiento",
    items: [
      "Todo Fluxa Soporte incluido",
      "1 entregable nuevo por mes",
      "Estrategia de contenido mensual actualizada",
      "2 sesiones estrategicas mensuales",
      "Reporte mensual de metricas y funcionamiento",
    ],
    highlight: "border-blue-400/40",
  },
  {
    name: "Fluxa Full",
    price: "USD 700-900/mes",
    period: "Plan completo",
    items: [
      "Todo Fluxa Activo incluido",
      "Gestion y optimizacion de campanas Meta Ads",
      "Nuevas creatividades para anuncios cada mes",
      "Reporte de rendimiento de pauta mensual",
      "4 sesiones estrategicas mensuales",
      "Soporte prioritario 6 dias por semana",
    ],
    highlight: "border-yellow-400/50",
  },
];

const executiveSummary = {
  today: [
    "Reservas por DM.",
    "Sin landing.",
    "Sin reservas online.",
    "Sin CRM.",
    "Sin embudo de pauta.",
  ],
  in90: [
    "Sistema completo activo.",
    "Landing visual.",
    "Reservas + pago online.",
    "CRM instalado.",
    "Pauta convirtiendo.",
  ],
};

const executionPlan = [
  {
    month: "Fase 1",
    title: "Membresia y automatizacion - lo urgente primero",
    points:
      "Landing membresia activa · DMs automatas GRUPO/CURSO/INFO · Flujo bienvenida · Retargeting video viral",
    color: "text-emerald-300",
    range: "Semanas 1-2",
    result:
      "Carolina tiene sistema de cobro desde la semana 1; el video viral empieza a generar ingresos automaticos.",
  },
  {
    month: "Fase 2",
    title: "Ecommerce y landings de productos",
    points:
      "Tienda online completa · Landings de productos top · Recuperacion carrito · Meta Ads activa · 1a sesion",
    color: "text-blue-300",
    range: "Semanas 3-4",
    result:
      "Los productos de Canton se venden solos, sin responder pedido a pedido.",
  },
  {
    month: "Fase 3",
    title: "Academia online y VSL del curso",
    points:
      "Plataforma curso online · Landing VSL activa · CRM unificado · Panel negocio tiempo real · 2a sesion",
    color: "text-violet-300",
    range: "Semanas 5-6",
    result:
      "El conocimiento de Carolina genera ingresos recurrentes; curso y membresia funcionan en paralelo.",
  },
  {
    month: "Fase 4",
    title: "Optimizacion y entrega del ecosistema",
    points:
      "Ajuste campanas por retorno real · Optimizar flujos · Sesion final · Reporte miembros/ventas/KPIs",
    color: "text-yellow-300",
    range: "Semanas 7-8",
    result:
      "Sistema completo entregado: academia, ecommerce y automatizaciones funcionando con datos reales.",
  },
];

export default function CarolinaRojasPage() {
  const [activePhase, setActivePhase] = useState("fase-1");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const timelineCarouselRef = useRef(null);

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

  const scrollTimeline = (direction) => {
    if (!timelineCarouselRef.current) return;
    const cardWidth = timelineCarouselRef.current.clientWidth * 0.9;
    timelineCarouselRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();
    if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", updateMotionPreference);
    else mediaQuery.addListener(updateMotionPreference);
    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", updateMotionPreference);
      else mediaQuery.removeListener(updateMotionPreference);
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
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
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
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10 sm:px-8 md:pb-20 md:pt-24">
        <div data-reveal className="reveal mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">
            Fluxa Method | Propuesta Comercial | Abril 2026
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Carolina Rojas
          </h1>
          <p className="mt-4 text-xl text-zinc-200 sm:text-3xl">
            Ecosistema digital completo para monetizar tu audiencia, vender tus productos y construir tu academia de importacion.
          </p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 sm:mt-7 sm:text-sm sm:tracking-[0.35em]">
            PAQUETE FLUXA SCALE · $1.597 USD · 2 MESES · FLUXAMETHOD.COM
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">$1,597 USD</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Inversion total</p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">2 meses</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Duracion</p>
            </article>
            <article className="rounded-xl border border-blue-500/70 bg-blue-950/20 p-4 text-center">
              <p className="text-3xl font-extrabold text-white">4 modulos</p>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Sistema completo</p>
            </article>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
            {[
              "Academia de importacion",
              "Curso + membresia recurrente",
              "Ecommerce de productos",
              "Tienda + landings",
              "Automatizaciones",
              "DMs + flujos + CRM",
              "Estrategia y guiones",
              "Arquitectura + contenido",
            ].map((tag) => (
              <span key={tag} className="rounded-full border border-zinc-700 bg-[#111111] px-3 py-1.5 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://wa.me/573116425337"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl border border-yellow-400 bg-[#FFD600] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
          >
            Aprobar propuesta y avanzar
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 md:pt-16">
        <div data-reveal className="reveal">
          <div className="mb-9 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-zinc-400">Ruta de activacion</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Plan de ejecucion por fases</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              4 fases secuenciales para construir, vender y escalar el ecosistema.
            </p>
            <p className="mx-auto mt-4 inline-flex rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
              Arranque: al confirmar propuesta
            </p>
            <div className="mx-auto mt-5 w-full max-w-md">
              <div className="h-2 rounded-full bg-zinc-800">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 transition-all duration-700 ease-out" style={{ width: `${progressPercent}%` }} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">Progreso del plan: {Math.round(progressPercent)}%</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
              <button type="button" onClick={() => scrollTimeline("left")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200" aria-label="Deslizar fases hacia la izquierda">←</button>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Desliza para ver fases</p>
              <button type="button" onClick={() => scrollTimeline("right")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/80 text-lg font-bold text-zinc-200" aria-label="Deslizar fases hacia la derecha">→</button>
            </div>
          </div>

          <div
            className="relative"
            onMouseMove={(event) => {
              if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
              const rect = event.currentTarget.getBoundingClientRect();
              setSpotlight({ x: event.clientX - rect.left, y: event.clientY - rect.top, active: true });
            }}
            onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
          >
            <div className="pointer-events-none absolute -left-10 top-14 hidden h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl md:block" style={{ transform: `translateY(${reduceMotion ? 0 : parallaxOffset * 0.45}px)` }} />
            <div className="pointer-events-none absolute -right-8 bottom-10 hidden h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl md:block" style={{ transform: `translateY(${reduceMotion ? 0 : -parallaxOffset * 0.35}px)` }} />
            <div className="spotlight-layer pointer-events-none absolute inset-0 z-0 hidden rounded-3xl md:block" style={{ opacity: spotlight.active ? 1 : 0, background: `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.12), transparent 60%)` }} />

            <div ref={timelineCarouselRef} className="mobile-snap-carousel flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
              {timelinePhases.map((phase, index) => (
                <div key={phase.id} data-reveal className="reveal route-card relative z-10 w-[88vw] min-w-[88vw] max-w-md shrink-0 snap-center rounded-2xl border border-zinc-800/80 bg-zinc-950/55 p-4 text-center backdrop-blur-[1px] md:mx-auto md:w-full md:min-w-0 md:max-w-none md:shrink md:snap-none md:p-5" style={{ transitionDelay: `${index * 120}ms` }}>
                  {index !== timelinePhases.length - 1 && <div className="relative mx-auto mt-4 h-12 w-[2px] overflow-hidden rounded-full md:hidden"><span className="timeline-dash-vertical block h-full w-full" /></div>}
                  {index !== timelinePhases.length - 1 && <div className="absolute left-[calc(50%+50px)] top-[72px] hidden h-[2px] w-[calc(100%-20px)] overflow-hidden rounded-full md:block"><span className="timeline-dash absolute inset-0 block" /></div>}

                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: phase.color }}>{phase.label}</p>
                  <button type="button" onClick={() => setActivePhase(phase.id)} onMouseMove={(event) => handleMagneticMove(event, 12)} onMouseLeave={handleMagneticLeave} className="magnetic mx-auto block">
                    <div className="pulse-glow mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border bg-zinc-950/85 text-2xl md:h-[80px] md:w-[80px] md:text-3xl" style={{ borderColor: phase.color, boxShadow: phase.glow, transform: activePhase === phase.id ? "scale(1.08)" : undefined }}>
                      <span role="img" aria-label={phase.title}>{phase.icon}</span>
                    </div>
                  </button>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white md:text-base">{phase.title}</p>
                  <p className="text-sm text-zinc-300">{phase.subtitle}</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {phase.points.map((point, chipIndex) => (
                      <span key={point} data-reveal className="reveal fade-soft rounded-full border border-zinc-600/70 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-zinc-200" style={{ transitionDelay: `${chipIndex * 80 + index * 100}ms` }}>
                        {point}
                      </span>
                    ))}
                  </div>
                  <span className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${phase.statusClass}`}>{phase.status}</span>
                  <div className={`mt-4 grid transition-all duration-500 ${activePhase === phase.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <ul className="space-y-1.5 text-left text-[12px] leading-relaxed text-zinc-300">
                        <li><span className="font-semibold text-zinc-100">Construimos:</span> {phase.build}</li>
                        <li><span className="font-semibold text-zinc-100">Activamos:</span> {phase.activate}</li>
                        <li><span className="font-semibold text-zinc-100">Resultado:</span> {phase.result}</li>
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
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">01. Donde esta hoy tu negocio</h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Tienes algo que muy pocos tienen: audiencia real, video viral y producto demandado. El problema no es el producto, es que no hay un sistema que convierta ese interes en dinero automatico.
          </p>
          <p className="mt-4 rounded-xl border border-yellow-500/50 bg-yellow-500/10 px-5 py-3 text-sm font-bold text-yellow-100 sm:text-base">
            URGENTE: Cada dia sin sistema es dinero que se pierde. Tu video viral esta activo ahora mismo. Las personas estan preguntando ahora mismo. Sin automatizacion, ese interes se enfria y no vuelve.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Punto de partida</p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">{currentSituation.startPointTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {currentSituation.startPointItems.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400">●</span><span>{item}</span></li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">Fricciones actuales</p>
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
            Resultado hoy: {currentSituation.conclusion}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">02. Las transformaciones concretas en 60 dias</h2>
          <p className="text-sm text-zinc-400 sm:text-base">Cada transformacion elimina un cuello de botella y abre una nueva fuente de ingresos.</p>
          <div className="mt-6 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">Antes</p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">Despues</p>
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">02. Transformaciones 4 a 6 - conversion continua</h2>
          <p className="text-sm text-zinc-400 sm:text-base">Cada novedad y cada cliente tienen seguimiento, estructura y conversion.</p>
          <div className="mt-6 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <p className="inline-flex w-fit rounded-full bg-red-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">Antes</p>
              <p className="inline-flex w-fit rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 md:justify-self-end">Despues</p>
            </div>
            {transformationsScale.map((item, idx) => (
              <div key={item.before} className="grid gap-3 md:grid-cols-2">
                <article className="rounded-xl border border-red-400/25 bg-red-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-red-300">Transformacion {idx + 4}</p>
                  <p className="mt-1 text-sm text-zinc-200">{item.before}</p>
                </article>
                <article className="rounded-xl border border-emerald-400/25 bg-emerald-950/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">Impacto {idx + 4}</p>
                  <p className="mt-1 text-sm text-zinc-100">{item.after}</p>
                </article>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-emerald-300/35 bg-emerald-500/10 px-5 py-3 text-center text-base font-bold text-emerald-100">
            Con el ecosistema activo, tu negocio vende cursos, membresias y productos de forma automatica mientras sigues en Canton buscando los mejores productos para tu comunidad.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">03. Que recibes - Academia de importacion</h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">Todo lo que se construye para convertir tu conocimiento en ingresos recurrentes.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {deliverablesAcademy.map((column) => (
              <article key={column.title} onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]">
                <h3 className="mb-4 border-b border-blue-400/40 pb-3 text-lg font-bold tracking-wide text-blue-300">{column.title}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-[#FFD600]">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">04. Que recibes - Ecommerce de productos</h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">Todo lo que se construye para vender tus productos de Canton en forma profesional y automatizada.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {deliverablesEcommerce.map((column) => (
              <article key={column.title} onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:border-yellow-300/70 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]">
                <h3 className="mb-4 border-b border-blue-400/40 pb-3 text-lg font-bold tracking-wide text-blue-300">{column.title}</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-[#FFD600]">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="rounded-xl bg-[#0B2A4A] px-5 py-3 text-center text-xl font-extrabold text-white">
              TOTAL DEL PROYECTO — PAQUETE FLUXA SCALE $1.597 USD
            </p>
            <p className="rounded-xl border border-yellow-400/55 bg-yellow-400/10 px-5 py-3 text-center text-sm font-bold text-yellow-200">
              Aparte del proyecto: pauta Meta Ads ($200-$300 USD/mes) y suscripciones van directas por cuenta de Carolina.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">05. Plan de ejecucion - 2 meses</h2>
          <div className="space-y-4">
            {executionPlan.map((phase) => (
              <article key={phase.month} className="rounded-xl border border-zinc-700 bg-[#111111] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className={`text-sm font-bold uppercase tracking-[0.16em] ${phase.color}`}>{phase.month}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">{phase.range}</p>
                </div>
                <h3 className="mt-2 text-2xl font-extrabold">{phase.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{phase.points}</p>
                <p className="mt-3 text-sm font-bold text-blue-300">Resultado: {phase.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">06. Forma de pago y condiciones</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <article onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-blue-400/60 bg-[#111111] p-6">
              <p className="rounded-xl bg-blue-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-blue-100">Pago en 2 cuotas</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Pago 1 — Al firmar contrato</p>
                  <p className="mt-1 text-3xl font-extrabold text-blue-300">$800 USD</p>
                </div>
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Pago 2 — Maximo 15 dias despues</p>
                  <p className="mt-1 text-3xl font-extrabold text-blue-300">$797 USD</p>
                </div>
              </div>
            </article>
            <article onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className="magnetic rounded-2xl border border-emerald-400/60 bg-[#111111] p-6">
              <p className="rounded-xl bg-emerald-900/60 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.12em] text-emerald-100">Condicion comercial</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                  <p className="text-sm text-zinc-300">Total del proyecto</p>
                  <p className="mt-1 text-4xl font-extrabold text-emerald-300">$1.597 USD</p>
                  <p className="text-xs text-zinc-400">Sin intereses · Precio fijo · Duracion 2 meses</p>
                </div>
              </div>
            </article>
          </div>
          <p className="mt-7 text-center text-4xl font-extrabold">$1.597 USD · 2 meses · Sin intereses</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal rounded-2xl border border-zinc-700 bg-[#111111] p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Condiciones del proyecto</h2>
          <details className="mt-4 rounded-xl border border-zinc-700 bg-zinc-900/65 p-4 md:hidden">
            <summary className="cursor-pointer list-none text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">Ver condiciones</summary>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
              {projectConditions.map((item) => (
                <li key={`mobile-${item}`} className="flex gap-2"><span className="text-emerald-300">●</span><span>{item}</span></li>
              ))}
            </ul>
          </details>
          <ul className="mt-4 hidden space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base md:block">
            {projectConditions.map((item) => (
              <li key={item} className="flex gap-2"><span className="text-emerald-300">●</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Continuidad post-proyecto - planes mensuales</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {supportPlans.map((plan) => (
              <article key={plan.name} onMouseMove={(event) => handleMagneticMove(event, 8)} onMouseLeave={handleMagneticLeave} className={`magnetic rounded-2xl border ${plan.highlight} bg-[#111111] p-6 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">{plan.period}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#FFD600]">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-[#FFD600]">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-center text-sm text-blue-100">
            Estos planes no son obligatorios. Al terminar el proyecto Carolina tiene el ecosistema completo en su propiedad y puede operarlo sin depender de Fluxa Method.
          </p>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-16 sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Carolina, la audiencia ya existe. El momento es ahora.
          </h2>
          <p className="mt-3 text-2xl font-bold text-blue-200 sm:text-3xl">
            Fluxa Method pone el sistema para que ese interes se convierta en ingresos: automatico, escalable y tuyo.
          </p>
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
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-300">Hoy</p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">Reservas por DM sin sistema.</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {executiveSummary.today.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400">●</span><span>{item}</span></li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6">
              <p className="inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">En 60 dias</p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight">Sistema completo activo.</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {executiveSummary.in90.map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-emerald-400">●</span><span>{item}</span></li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 text-center">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300">Inversion</p>
              <p className="mt-4 text-5xl font-extrabold text-blue-300">$1.597 USD</p>
              <p className="mt-4 text-3xl text-zinc-300">
                2 meses
                <br />
                4 fases
                <br />
                activos propios
                <br />
                soporte post-entrega
              </p>
              <p className="mx-auto mt-5 inline-flex rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                2 pagos
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="mobile-cta mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 md:hidden">
        <a href="https://wa.me/573116425337" target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl border border-yellow-400 bg-[#FFD600] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]">
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
          background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 8px, transparent 8px, transparent 14px);
          animation: dashFlowHorizontal 1.8s linear infinite;
        }
        .timeline-dash-vertical {
          background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 8px, transparent 8px, transparent 14px);
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
          0% { transform: scale(1); filter: brightness(0.95); }
          50% { transform: scale(1.05); filter: brightness(1.12); }
          100% { transform: scale(1); filter: brightness(0.95); }
        }
        @keyframes dashFlowHorizontal {
          from { background-position: 0 0; }
          to { background-position: 48px 0; }
        }
        @keyframes dashFlowVertical {
          from { background-position: 0 0; }
          to { background-position: 0 48px; }
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
