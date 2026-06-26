"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";

const GALS_LOGO_SRC = "/imagenes/gals-studio-logo.png";
const BRIEF_URL = "/gals-studio/brief";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "construir", label: "Construir" },
  { id: "tiempo", label: "Fases" },
  { id: "inversion", label: "Inversión" },
  { id: "insumos", label: "Insumos" },
  { id: "brief", label: "Brief" },
  { id: "trabajo", label: "Trabajo" },
  { id: "transformacion", label: "Transformación" },
  { id: "antes-despues", label: "Antes / Después" },
  { id: "cierre", label: "Cierre" },
];

const DIGITAL_SYSTEM = [
  "Homepage de marca e identidad — entrada única del ecosistema GAL'S",
  "Hub central que redirige a cada landing y oferta según el recorrido",
  "Landing principal GAL'S Studio conectada al dashboard de reservas",
  "Landing Eventos para experiencias, workshops y programas especiales",
  "Automatización WhatsApp básica",
];

const CONTENT_SYSTEM = [
  "Laboratorio Notion personalizado para GAL'S",
  "Estrategia de contenido dirigida al nuevo sistema",
  "15 guiones de reels orgánicos",
  "10 guiones para ads",
  "3 guiones UGC para alumnas",
];

const TRAINING = [
  "3 sesiones Zoom con el equipo",
  "GPTs entrenados para bienestar y pilates",
  "Ebook de prompts personalizado",
  "Guía de herramientas IA",
];

const PHASE_1 = {
  title: "Fase 1 — Semanas 1 y 2",
  items: [
    "Homepage de marca + hub central",
    "Landing principal GAL'S Studio conectada al dashboard de reservas",
    "Landing Eventos para experiencias y workshops",
    "Automatización WhatsApp básica",
    "Laboratorio Notion personalizado para GAL'S",
  ],
  result:
    "El sistema empieza a recibir reservas solo y ya tienes tu laboratorio listo para crear",
};

const PHASE_2 = {
  title: "Fase 2 — Días 20 a 25",
  items: [
    "Estrategia de contenido + 15 reels, 10 ads y 3 UGC",
    "3 sesiones Zoom con el equipo",
    "GPTs entrenados listos para usar",
    "Ebook de prompts y guía de herramientas IA",
  ],
  result: "Estás creando contenido con sistema, sin bloquearte",
};

const REQUIRED_ITEMS = [
  "Logo en PNG con fondo transparente",
  "Fotos profesionales del estudio",
  "Videos de clases o ambiente GAL'S",
  "Acceso a tu cuenta Bewe",
  "Número WhatsApp Business activo",
  "Colores y tipografía de tu marca",
  "2 o 3 referencias de páginas que te gusten",
];

const WORK_RULES = [
  { title: "Canal único", text: "Comunicación por WhatsApp" },
  { title: "Revisiones", text: "Máximo 2 rondas de revisión por entregable" },
  { title: "Aprobaciones", text: "Sin tu visto bueno no avanzamos" },
  { title: "Respuesta", text: "Máximo 24 horas de ambos lados" },
  { title: "Avance", text: "Reporte al cierre de cada fase" },
];

const TRANSFORMATION_STORIES = [
  {
    before:
      "Alguien te ve en Instagram, le encanta lo que haces, quiere reservar — y no encuentra cómo hacerlo sola. Te escribe, tú no estás, se pierde la venta.",
    after:
      "Encuentra la homepage, reserva sola en el dashboard, recibe confirmación automática por WhatsApp. Sin que tú muevas un dedo.",
  },
  {
    before:
      "Tienes 16K seguidores que confían en ti y en tu marca — pero no hay un camino claro que las lleve de seguidoras a alumnas activas.",
    after: "Cada persona que llega a tu perfil tiene un recorrido definido que la convierte automáticamente.",
  },
  {
    before: "Si un domingo no respondiste, esa alumna fue a otro estudio.",
    after: "El WhatsApp responde, informa y reserva por ti los 7 días de la semana.",
  },
  {
    before:
      "Tus experiencias, tus clases y tus workshops están desconectados — cada uno vive en un lugar diferente y la gente se confunde.",
    after: "Todo vive bajo un mismo ecosistema digital — una entrada, un recorrido, una conversión.",
  },
  {
    before:
      "Tienes que estar tú presente para que GAL'S funcione — si te vas de viaje, si te enfermas, si simplemente necesitas descansar, el negocio para.",
    after: "GAL'S funciona aunque tú no estés. El sistema trabaja, tú descansas.",
  },
  {
    before: "Creas contenido constantemente pero no sabes exactamente qué está convirtiendo y qué no.",
    after:
      "Tienes un laboratorio de contenido en Notion con estrategia clara, GPTs entrenados para tu voz y capacitación IA — creas en la mitad del tiempo con el doble de intención.",
  },
];

const BEFORE_AFTER_ROWS = [
  { before: "Reservas manuales por WhatsApp", after: "Reservas automáticas 24/7 vía dashboard" },
  { before: "Página informativa que no convierte", after: "Homepage con recorrido claro hacia la reserva" },
  { before: "Si no respondes el domingo, se pierde la venta", after: "Sistema que responde y convierte sin ti" },
  { before: "16K seguidores sin camino claro", after: "Funnel que lleva de seguidora a alumna" },
  { before: "Experiencias y clases desconectadas", after: "Ecosistema unificado bajo una sola entrada" },
  { before: "Todo depende de que tú estés presente", after: "GAL'S funciona aunque tú descanses" },
  { before: "Contenido sin sistema ni estrategia", after: "Laboratorio de contenido con GPTs y guiones listos" },
  { before: "Ninguna venta llega sola", after: "Sistema que vende mientras tú enseñas" },
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

function KickoffDecorLayer() {
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

function PillarCard({ icon, title, items }) {
  return (
    <article className="gals-kickoff-pillar rounded-2xl p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <div className="gals-kickoff-pillar-icon">{icon}</div>
        <h3 className="gals-kickoff-display text-xl sm:text-2xl">{title}</h3>
      </div>
      <ul className="gals-muted mt-5 space-y-3 text-sm leading-relaxed sm:text-[15px]">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="gals-accent-text mt-0.5 shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function KickoffGalsStudioPage() {
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

  const phase1Wa = waUrl(
    "Hola Fluxa Method. Soy Natalia de GAL'S Studio. Confirmo el arranque de Fase 1 ($385 USD) del paquete GAL'S DIGITAL — kickoff Método PDP Wellness™. Lista para enviar los insumos esta semana."
  );

  return (
    <main className="gals-kickoff-page">
      <KickoffDecorLayer />

      <div className="gals-kickoff-content">
      <div className="gals-kickoff-progress fixed left-0 top-0 z-50 w-full">
        <div className="gals-kickoff-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <nav className="gals-kickoff-nav sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-[var(--kickoff-max)] items-center gap-2.5 overflow-x-auto px-4 py-3 sm:px-6">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gals-muted)]">
            Kickoff GAL&apos;S
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

      {/* —— Hero / Portada —— */}
      <section id="hero" className="gals-kickoff-hero scroll-mt-28 px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
        <div className="mx-auto w-full max-w-[var(--kickoff-max)]">
          <div data-reveal className="gals-reveal flex flex-col items-center text-center">
            <Image
              src={GALS_LOGO_SRC}
              alt="GAL'S Studio"
              width={180}
              height={72}
              className="h-auto w-36 sm:w-44"
              priority
            />
            <p className="gals-eyebrow mt-8">Bienvenida oficial</p>
            <p className="gals-muted mt-3 text-sm font-medium tracking-wide sm:text-base">
              GAL&apos;S Studio × Fluxa Systems
            </p>
            <p className="gals-eyebrow mt-6">Paquete 1</p>
            <h1 className="gals-kickoff-display mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              GAL&apos;S DIGITAL
            </h1>
            <p className="gals-lead mx-auto mt-5 max-w-2xl text-lg sm:text-xl">
              Método PDP Wellness™ — hoy arranca tu transformación digital
            </p>
          </div>

          <div
            data-reveal
            className="gals-reveal gals-kickoff-hero-card gals-kickoff-main-card mx-auto mt-12 max-w-4xl rounded-3xl p-7 sm:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="gals-eyebrow">Tu inversión confirmada</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="gals-kickoff-discount-badge">-19%</span>
                  <span className="gals-kickoff-price-original">$947 USD</span>
                </div>
                <p className="gals-kickoff-price-hero gals-kickoff-display mt-2 font-semibold">$770 USD</p>
                <p className="gals-muted mt-4 max-w-sm text-sm leading-relaxed">
                  La transformación digital completa para centralizar tu marca, automatizar procesos y comunicar con
                  propósito.
                </p>
              </div>
              <div className="gals-muted max-w-md text-sm leading-relaxed sm:text-[15px]">
                <p>
                  <strong className="font-semibold text-[var(--gals-heading)]">Fase 1 — $385 USD</strong> al firmar.
                  Arranca todo desde el primer día.
                </p>
                <p className="mt-3">
                  <strong className="font-semibold text-[var(--gals-heading)]">Fase 2 — $385 USD</strong> a los 20 días.
                  Entrega de fase y pago final con el sistema corriendo.
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--gals-muted-light)]">
                  Con el primer pago arranca todo · Sin letra pequeña
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Lo que construimos —— */}
      <SectionBlock
        id="construir"
        eyebrow="01 — Alcance"
        title="Lo que vamos a construir juntas"
        subtitle="Paquete GAL'S DIGITAL — arquitectura digital, contenido y capacitación IA conectados en un solo sistema."
      >
        <div className="gals-kickoff-main-card rounded-3xl p-5 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-2">
            <PillarCard icon={<IconMonitor />} title="Arquitectura digital" items={DIGITAL_SYSTEM} />
            <PillarCard icon={<IconSparkle />} title="Contenido" items={CONTENT_SYSTEM} />
          </div>

          <div className="gals-kickoff-training-band mt-5 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="gals-kickoff-pillar-icon">
                <IconBrain />
              </div>
              <h3 className="gals-kickoff-display text-xl sm:text-2xl">Capacitación IA &amp; ventas</h3>
            </div>
            <ul className="gals-muted mt-5 grid gap-3 text-sm leading-relaxed sm:grid-cols-2 lg:grid-cols-4 sm:text-[15px]">
              {TRAINING.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="gals-accent-text shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      {/* —— Fases en el tiempo —— */}
      <SectionBlock
        id="tiempo"
        eyebrow="02 — Cronograma"
        title="Así se ve tu proyecto en el tiempo"
        subtitle="Dos fases claras: primero el sistema que recibe reservas, luego la capa de contenido e IA."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {[PHASE_1, PHASE_2].map((phase) => (
            <article key={phase.title} className="gals-kickoff-phase-card rounded-2xl p-6 sm:p-7">
              <p className="gals-eyebrow">{phase.title}</p>
              <ul className="gals-muted mt-4 space-y-2.5 text-sm leading-relaxed sm:text-[15px]">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="gals-accent-text shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="gals-kickoff-phase-result mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed text-[var(--gals-heading)]">
                <span className="font-semibold">Resultado: </span>
                {phase.result}
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* —— Inversión / Fases de pago —— */}
      <SectionBlock
        id="inversion"
        eyebrow="03 — Inversión"
        title="Fases de pago"
        subtitle="Tu inversión total confirmada: $770 USD. El proyecto arranca con la Fase 1 al firmar el acuerdo."
      >
        <div className="gals-kickoff-payment-lane grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <article className="gals-kickoff-payment-card rounded-2xl p-6 text-center sm:p-7">
            <p className="gals-eyebrow">Fase 1 — Pago al comienzo</p>
            <p className="gals-kickoff-display mt-2 text-3xl text-[var(--gals-purple-dark)]">$385 USD</p>
            <p className="gals-muted mt-3 text-sm">
              Al firmar el acuerdo se realiza el primer pago para iniciar con el proyecto.
            </p>
          </article>

          <div className="gals-kickoff-payment-bridge flex items-center justify-center self-center rounded-full px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] shadow-lg">
            20 días
          </div>

          <article className="gals-kickoff-payment-card rounded-2xl p-6 text-center sm:p-7">
            <p className="gals-eyebrow">Fase 2 — Pago a los 20 días</p>
            <p className="gals-kickoff-display mt-2 text-3xl text-[var(--gals-purple-dark)]">$385 USD</p>
            <p className="gals-muted mt-3 text-sm">
              Entrega de fase y pago final a los 20 días de iniciado el proyecto.
            </p>
          </article>
        </div>

        <p className="gals-callout mt-8 rounded-2xl px-5 py-4 text-center text-sm font-medium sm:text-base">
          Total confirmado: <span className="gals-price font-semibold">$770 USD</span>
          <span className="gals-muted ml-2 text-sm font-normal">(antes $947 USD · -19%)</span>
        </p>
      </SectionBlock>

      {/* —— Insumos —— */}
      <SectionBlock
        id="insumos"
        eyebrow="04 — Activación"
        title="Lo que necesitamos de ti"
        subtitle="Para que Cristian arranque esta semana. Entre más rápido nos entregas esto, más rápido ves resultados."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REQUIRED_ITEMS.map((item) => (
            <article key={item} className="gals-kickoff-check-item rounded-xl px-4 py-3.5 text-sm text-[var(--gals-heading)]">
              <span className="gals-accent-text mr-2">✓</span>
              {item}
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* —— Brief de arranque —— */}
      <SectionBlock
        id="brief"
        eyebrow="Brief de arranque"
        title="Tu cuestionario estratégico"
        subtitle="Además de los insumos, necesitamos que completes el brief que preparamos para ti. Ahí nos cuentas tu marca, servicios, conversión y metas — para construir con precisión desde el día uno."
      >
        <div className="gals-kickoff-brief-card gals-kickoff-main-card rounded-3xl p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="gals-eyebrow">GAL&apos;S Studio × Fluxa Partners</p>
              <p className="gals-section-label mt-3 text-lg font-semibold leading-snug sm:text-xl">
                Metas de marca, servicios, conversión y accesos
              </p>
              <ul className="gals-muted mt-5 space-y-2 text-sm leading-relaxed sm:text-[15px]">
                <li className="flex gap-2">
                  <span className="gals-accent-text shrink-0">·</span>
                  <span>Identidad y voz de GAL&apos;S</span>
                </li>
                <li className="flex gap-2">
                  <span className="gals-accent-text shrink-0">·</span>
                  <span>Productos, experiencias y precios</span>
                </li>
                <li className="flex gap-2">
                  <span className="gals-accent-text shrink-0">·</span>
                  <span>Recorrido de conversión y sistema de ventas</span>
                </li>
                <li className="flex gap-2">
                  <span className="gals-accent-text shrink-0">·</span>
                  <span>Accesos, referencias y prioridades de arranque</span>
                </li>
              </ul>
              <p className="gals-muted mt-5 text-sm">
                Tómate unos minutos con calma — entre más clara nos dejes la información, más rápido arrancamos.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-center lg:items-end">
              <Link
                href={BRIEF_URL}
                className="gals-btn-solid inline-flex items-center justify-center rounded-full px-8 py-3.5 text-center text-sm font-semibold"
              >
                Ir al brief de arranque
              </Link>
              <p className="gals-muted text-center text-xs sm:text-sm lg:text-right">
                Formulario en pasos · guarda y continúa cuando quieras
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>

      {/* —— Cómo trabajamos —— */}
      <SectionBlock
        id="trabajo"
        eyebrow="05 — Operación"
        title="Cómo trabajamos juntas"
        subtitle="Reglas claras para que el proyecto avance sin fricción."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORK_RULES.map((rule) => (
            <article key={rule.title} className="gals-kickoff-rule rounded-xl p-5">
              <p className="gals-eyebrow">{rule.title}</p>
              <p className="gals-section-label mt-2 text-base font-semibold leading-snug">{rule.text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* —— Transformación —— */}
      <SectionBlock
        id="transformacion"
        eyebrow="06 — Visión"
        title="La transformación de GAL'S"
        subtitle="Hoy te está pasando esto — y así cambia con el sistema."
      >
        <div className="space-y-5">
          {TRANSFORMATION_STORIES.map((story, i) => (
            <article key={i} className="gals-kickoff-story rounded-2xl p-5 sm:p-6">
              <p className="gals-muted text-sm leading-relaxed sm:text-[15px]">
                <span className="font-semibold uppercase tracking-wide text-[var(--gals-muted-light)]">Hoy · </span>
                {story.before}
              </p>
              <p className="gals-kickoff-story-after mt-4 rounded-xl px-4 py-3 text-sm leading-relaxed sm:text-[15px]">
                <span className="font-semibold text-[var(--gals-purple-dark)]">Con el sistema · </span>
                {story.after}
              </p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* —— Antes / Después tabla —— */}
      <SectionBlock id="antes-despues" eyebrow="07 — Comparativa" title="Antes y después">
        <div className="gals-kickoff-table-wrap rounded-2xl">
          <div className="gals-kickoff-table-head grid grid-cols-2 gap-2 px-4 py-3.5 sm:px-6">
            <span>Antes</span>
            <span>Después</span>
          </div>
          {BEFORE_AFTER_ROWS.map((row) => (
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

      {/* —— Cierre —— */}
      <SectionBlock id="cierre" eyebrow="08 — Arranque" title="GAL'S ya tiene la comunidad. Nosotras le construimos el sistema.">
        <div data-reveal className="gals-reveal gals-card rounded-3xl p-8 text-center sm:p-12">
          <p className="gals-kickoff-display text-2xl leading-snug sm:text-3xl">
            Hoy es el día en que GAL&apos;S deja de depender de que estés presente para crecer.
          </p>
          <a
            href={phase1Wa}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Confirmar Fase 1 — $385 USD
          </a>
          <p className="gals-muted mt-6 text-xs sm:text-sm">
            Fluxa Systems · @fluxapartners · Método PDP Wellness™
          </p>
        </div>
      </SectionBlock>

      <footer className="gals-kickoff-footer-band px-4 py-5 text-center text-sm font-medium sm:px-6">
        <p className="flex flex-wrap items-center justify-center gap-3">
          <span>Built by Gals for Gals</span>
          <span className="hidden h-4 w-px bg-white/40 sm:inline" aria-hidden />
          <span className="text-xs opacity-90 sm:text-sm">Espiritualidad por medio del movimiento</span>
        </p>
      </footer>
      </div>
    </main>
  );
}
