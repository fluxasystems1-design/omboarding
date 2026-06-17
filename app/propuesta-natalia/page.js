"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const GALS_LOGO_SRC = "/imagenes/gals-studio-logo.png";
const BEWELL_URL = "https://www.bewellclubnataliagalvis.com/";
const INSTAGRAM_URL = "https://www.instagram.com/galstudio___/";
const WA_BASE = "https://wa.me/573116425337?text=";

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "donde", label: "Dónde estás" },
  { id: "transformacion", label: "Transformación" },
  { id: "planes", label: "Planes" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "reconsumo", label: "Continuidad" },
  { id: "resumen", label: "Resumen" },
  { id: "cierre", label: "Cierre" },
];

const FRICTION_CARDS = [
  "Reservas que llegan por WhatsApp y se pierden si no respondes",
  "Página en Canva que informa pero no convierte",
  "Productos digitales sin funnel de venta real",
  "16K seguidores sin sistema que los lleve a comprar",
  "Ventas que dependen de tu presencia constante",
  "Si no respondes un domingo, se pierde la venta",
];

const TRANSFORMATIONS = [
  {
    before: "Sin entrada única de marca en el ecosistema",
    after: "Homepage de identidad GAL'S que redirige a landings y VSLs",
  },
  { before: "Reservas manuales por WhatsApp", after: "Landing con Bewe integrado — reservas automáticas 24/7" },
  { before: "Página Canva informativa", after: "Landing con VSL y CTA directo que convierte" },
  { before: "Alumna llega y no vuelve a saber de Natalia", after: "Secuencia automática de bienvenida y seguimiento" },
  { before: "Reset se vende manualmente", after: "Landing del Reset con checkout y email automático" },
  { before: "16K seguidores sin sistema", after: "Funnel que lleva de seguidor a alumna automáticamente" },
];

const EXECUTION_PHASES = [
  {
    num: 1,
    when: "Semanas 1–2",
    title: "Base",
    items: "Homepage marca + hub · Landing GAL'S + Bewe · Landing Reset · WhatsApp básico",
    proOnly: false,
  },
  {
    num: 2,
    when: "Semanas 3–4",
    title: "Contenido",
    items: "VSL + Notion + estrategia + guiones + UGC",
    proOnly: false,
  },
  {
    num: 3,
    when: "Semanas 5–6",
    title: "Escala",
    items: "Hub ampliado · Landings adicionales · Meta Ads · email marketing",
    proOnly: true,
  },
  {
    num: 4,
    when: "Mes 2",
    title: "Optimización",
    items: "Campañas + capacitaciones IA + GPTs + ebook",
    proOnly: true,
  },
];

const PLAN_COMPARISON = [
  {
    feature: "Homepage de marca e identidad (hub a landings y VSLs)",
    digital: true,
    pro: true,
  },
  { feature: "Landing principal GAL'S Studio + integración Bewe", digital: true, pro: true },
  { feature: "Landing GAL'S Reset", digital: true, pro: true },
  { feature: "Landing experiencias de bienestar", digital: false, pro: true },
  { feature: "Landing ebook / producto digital", digital: false, pro: true },
  { feature: "VSL estratégico", digital: "1 corto", pro: "2 (principal + ads)" },
  { feature: "Automatización WhatsApp", digital: "Básica", pro: "Completa + reactivación" },
  { feature: "Secuencia bienvenida nuevas alumnas", digital: false, pro: true },
  { feature: "Laboratorio Notion GAL'S", digital: true, pro: true },
  { feature: "Estrategia de contenido", digital: "60 días", pro: "90 días" },
  { feature: "Guiones reels orgánicos", digital: "15", pro: "25" },
  { feature: "Guiones para ads", digital: "10", pro: "15" },
  { feature: "Guiones UGC alumnas", digital: "3", pro: "5" },
  { feature: "Meta Ads + creativos", digital: false, pro: "5 listos + gestión 1 mes" },
  { feature: "Email marketing automatizado", digital: false, pro: true },
  { feature: "Capacitación IA (Zoom + GPTs + ebook)", digital: true, pro: true },
  { feature: "Sesiones Zoom con el equipo", digital: "3", pro: "3" },
];

const DIGITAL_SECTIONS = [
  {
    label: "Arquitectura Digital",
    items: [
      "Homepage de marca e identidad — entrada única del ecosistema GAL'S",
      "Hub central que redirige a cada landing, VSL y oferta según el recorrido",
      "Landing principal GAL'S Studio con integración Bewe",
      "Landing GAL'S Reset",
      "VSL corto para landing principal",
      "Automatización WhatsApp básica",
    ],
  },
  {
    label: "Contenido",
    items: [
      "Laboratorio Notion personalizado para GAL'S",
      "Estrategia de contenido dirigida al nuevo sistema",
      "15 guiones de reels orgánicos",
      "10 guiones para ads",
      "3 guiones UGC para alumnas",
    ],
  },
  {
    label: "Capacitación IA & Ventas",
    items: [
      "3 sesiones Zoom con el equipo",
      "GPTs entrenados para bienestar y pilates",
      "Ebook de prompts personalizado",
      "Guía de herramientas IA",
    ],
  },
];

const PRO_EXTRA_SECTIONS = [
  {
    label: "Arquitectura Digital ampliada",
    items: [
      "Homepage actualizada con nuevas rutas a landings y VSLs del plan Pro",
      "Landing experiencias de bienestar",
      "Landing ebook/producto digital",
      "2 VSLs (principal + corto para ads)",
      "Automatización WhatsApp completa (reservas + seguimiento + reactivación)",
      "Secuencia de bienvenida para nuevas alumnas",
    ],
  },
  {
    label: "Contenido ampliado",
    items: [
      "Estrategia 90 días",
      "25 guiones de reels orgánicos",
      "15 guiones para ads",
      "5 guiones UGC",
      "3 guiones para historias de ventas",
    ],
  },
  {
    label: "Meta Ads",
    items: [
      "Estrategia completa de campañas",
      "Configuración pixel y analítica",
      "5 creativos listos para lanzar",
      "Segmentación audiencia bienestar Colombia",
      "Gestión y optimización primer mes",
    ],
  },
  {
    label: "Email Marketing",
    items: [
      "Lista de emails integrada al sistema",
      "Secuencia de bienvenida automática",
      "4 emails mensuales estratégicos",
      "Emails automáticos fechas especiales",
      "Email de reactivación alumnas inactivas",
    ],
  },
];

const DASHBOARD_PLANS = [
  {
    planNum: 1,
    name: "Starter",
    price: 500,
    inherits: false,
    recommended: false,
    items: [
      "Control de alumnas (perfil, estado, historial)",
      "Registro manual de pagos",
      "Asistencia básica por clase",
      "Clases fijas semanales",
      "Panel de métricas básico (solo admin)",
    ],
    roles: "Solo Natalia (admin)",
    payment: "50% al firmar · 50% al entregar",
    timeline: "3–4 semanas",
    idealFor: "Ideal para ordenar alumnas y pagos sin depender aún de reservas online.",
  },
  {
    planNum: 2,
    name: "Growth",
    price: 850,
    inherits: true,
    recommended: false,
    items: [
      "Reservas online por horario",
      "Portal para alumnas (perfil + reservas)",
      "Contador de sesiones restantes del paquete",
      "Checkout con Bold (pago online)",
    ],
    roles: "Natalia + portal alumna",
    payment: "40% al firmar · 30% semana 3 · 30% al entregar",
    timeline: "5–6 semanas",
    idealFor: "Ideal si quieres que las alumnas reserven solas y paguen con Bold.",
  },
  {
    planNum: 3,
    name: "Pro",
    price: 1200,
    inherits: true,
    recommended: true,
    items: [
      "Notificaciones automáticas por WhatsApp y email (recordatorio de clase, confirmación de reserva, alerta de sesiones por vencer)",
      "Lista de espera automática si la clase está llena",
      "Cancelación de reserva por la alumna (con límite de tiempo configurable)",
      "Checkout completo: landing pública + generación de link desde el dashboard",
    ],
    roles: "Natalia + portal alumna",
    payment: "40% al firmar · 30% semana 3 · 30% al entregar",
    timeline: "7–8 semanas",
    idealFor: "Ideal para operar en automático con notificaciones y checkout completo.",
  },
  {
    planNum: 4,
    name: "Enterprise",
    price: 1700,
    inherits: true,
    recommended: false,
    items: [
      "Exportar reportes en Excel",
      "Multi-usuario (Natalia + instructoras con roles diferenciados)",
      "Panel de métricas avanzado",
    ],
    roles: "Admin + instructoras + portal alumna",
    payment: "33% al firmar · 33% semana 4 · 34% al entregar",
    timeline: "10–12 semanas",
    idealFor: "Ideal para escalar con equipo, reportes y métricas avanzadas.",
  },
];

const CLOSING_PLANS = {
  ecosistema: [
    {
      id: "digital",
      name: "GAL'S DIGITAL",
      price: 947,
      recommended: false,
      note: "Captación + landings + automatización",
    },
    {
      id: "pro",
      name: "GAL'S PRO",
      price: 1497,
      recommended: true,
      note: "Sistema completo con pauta y email",
    },
  ],
  dashboard: [
    { id: "starter", name: "Starter", price: 500, recommended: false, note: "Ordenar alumnas y pagos" },
    { id: "growth", name: "Growth", price: 850, recommended: false, note: "Reservas online + Bold" },
    { id: "dash-pro", name: "Pro", price: 1200, recommended: true, note: "Operación en automático" },
    { id: "enterprise", name: "Enterprise", price: 1700, recommended: false, note: "Equipo + reportes avanzados" },
  ],
};

const COMBO_DISCOUNT = 0.2;

function formatUsd(amount) {
  return amount.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function planLabel(plan, group) {
  if (group === "dashboard") return `Dashboard ${plan.name}`;
  return plan.name;
}

function closingComboWaMessage(ecosistemaPlan, dashboardPlan) {
  const subtotal = ecosistemaPlan.price + dashboardPlan.price;
  const discount = Math.round(subtotal * COMBO_DISCOUNT);
  const total = subtotal - discount;

  return [
    "Hola Fluxa Method. Soy Natalia de GAL'S Studio, revisé la propuesta y quiero avanzar con esta combinación:",
    "",
    `• Sistema digital: ${planLabel(ecosistemaPlan, "ecosistema")} — $${formatUsd(ecosistemaPlan.price)} USD`,
    `• Dashboard propio: ${planLabel(dashboardPlan, "dashboard")} — $${formatUsd(dashboardPlan.price)} USD`,
    "",
    `Subtotal: $${formatUsd(subtotal)} USD`,
    `Descuento combo 20%: -$${formatUsd(discount)} USD`,
    `Total: $${formatUsd(total)} USD`,
    "",
    "¿Coordinamos el siguiente paso?",
  ].join("\n");
}

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Captación y marca",
    text: "Homepage hub + landings + VSL + automatización WhatsApp. Integración con Bewe para arrancar rápido.",
    tag: "GAL'S DIGITAL / PRO",
  },
  {
    step: "02",
    title: "Operación y escala",
    text: "Reservas, pagos y seguimiento de alumnas. Bewe en fase 1 o migración al dashboard propio cuando quieras.",
    tag: "Bewe o Dashboard",
  },
  {
    step: "03",
    title: "Crecimiento continuo",
    text: "Mantenimiento, contenido, pauta y optimización mensual para que el sistema siga vendiendo.",
    tag: "Desde mes 3",
  },
];

const ROUTE_OPTIONS = [
  {
    id: "bewe",
    title: "Ruta rápida con Bewe",
    text: "Ideal para lanzar en 4–6 semanas. Mantienes Bewe como motor de reservas mientras el ecosistema digital captura y convierte tráfico nuevo.",
    fit: "GAL'S DIGITAL o PRO",
  },
  {
    id: "dashboard",
    title: "Ruta dashboard propio",
    text: "Sistema bajo tu marca, sin mensualidades de terceros. Evolución natural cuando quieras dejar de pagar Bewe y ser dueña del 100% de la operación.",
    fit: "Planes Starter → Enterprise",
  },
];

function staggerStyle(index, step = 90) {
  return { "--delay": `${index * step}ms` };
}

function CountUp({ value, prefix = "$", suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    const duration = 1100;
    const start = performance.now();
    let frameId = 0;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, value]);

  return (
    <span ref={ref} className="gals-price">
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function PackageMark() {
  return <span className="gals-mark" aria-hidden />;
}

function CompareCell({ value, isPro }) {
  if (value === true) {
    return (
      <span className="gals-compare-check" aria-label="Incluido">
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="gals-compare-x" aria-label="No incluido">
        ✗
      </span>
    );
  }
  return <span className={`gals-compare-text ${isPro ? "gals-compare-text--pro" : ""}`}>{value}</span>;
}

function PlanCompareTable() {
  return (
    <div className="gals-compare-wrap mt-12 overflow-x-auto rounded-xl" data-reveal>
      <div className="min-w-[300px]">
        <div className="gals-compare-head grid grid-cols-[1fr_72px_72px] gap-2 px-4 py-4 sm:grid-cols-[1fr_96px_96px] sm:px-6">
          <span>Característica</span>
          <span className="text-center">
            Digital
            <span className="gals-compare-price mt-0.5 block font-semibold normal-case">$947</span>
          </span>
          <span className="text-center">
            PRO ⭐
            <span className="gals-compare-price mt-0.5 block font-semibold normal-case">$1.497</span>
          </span>
        </div>
        {PLAN_COMPARISON.map((row) => (
          <div
            key={row.feature}
            className="gals-compare-row grid grid-cols-[1fr_72px_72px] items-center gap-2 px-4 py-3 sm:grid-cols-[1fr_96px_96px] sm:px-6 sm:py-3.5"
          >
            <span className="gals-card-text text-left text-[11px] leading-snug sm:text-sm">{row.feature}</span>
            <div className="flex justify-center">
              <CompareCell value={row.digital} isPro={false} />
            </div>
            <div className="flex justify-center">
              <CompareCell value={row.pro} isPro />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HubArchitectureCard() {
  return (
    <article className="gals-hub-card gals-card rounded-2xl p-6 sm:p-8" data-reveal>
      <p className="gals-eyebrow">Arquitectura central · ambos planes</p>
      <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">
        Homepage de marca e identidad GAL&apos;S
      </h3>
      <p className="gals-lead mt-3 max-w-3xl">
        No es otra landing suelta: es la <strong className="font-semibold text-[var(--gals-heading)]">puerta de entrada</strong>{" "}
        del ecosistema. Presenta la marca GAL&apos;S Studio con identidad visual unificada y distribuye a cada alumna
        hacia el destino correcto — reservas Bewe, GAL&apos;S Reset, experiencias, productos digitales o el VSL que
        corresponda a su momento.
      </p>
      <ul className="gals-muted mt-5 grid gap-2 text-sm leading-relaxed sm:grid-cols-2">
        {[
          "Un solo link para bio, ads y WhatsApp",
          "Rutas claras a cada landing del sistema",
          "VSL integrado en el recorrido de conversión",
          "Bewe conectado sin reemplazar lo que ya funciona",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function DashboardPlanCard({ plan, index }) {
  const waMessage = `Hola Fluxa Method. Soy Natalia de GAL'S Studio, revisé la propuesta y me interesa el plan Dashboard ${plan.name} ($${plan.price} USD). Quiero coordinar el siguiente paso.`;

  return (
    <article
      className={`gals-card gals-stagger flex flex-col rounded-2xl p-6 sm:p-8 ${
        plan.recommended ? "gals-card--featured relative" : ""
      }`}
      style={staggerStyle(index, 100)}
    >
      {plan.recommended ? (
        <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
          Recomendado
        </span>
      ) : null}
      <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">Plan {plan.planNum}</p>
      <h3 className="gals-section-label mt-2 text-2xl font-semibold">{plan.name}</h3>
      <p className="mt-1 text-3xl font-semibold">
        <CountUp value={plan.price} suffix=" USD" />
      </p>
      <p className="gals-muted mt-3 text-sm leading-relaxed">{plan.idealFor}</p>

      <p className="gals-section-label mt-5 text-sm font-semibold">
        {plan.inherits ? "Incluye todo lo anterior, más:" : "Incluye:"}
      </p>
      <ul className="gals-muted mt-2 space-y-1.5 text-sm leading-relaxed">
        {plan.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="gals-payment-box mt-6 space-y-2 rounded-lg p-4 text-sm">
        <p>
          <span className="gals-muted text-[11px] font-medium uppercase tracking-[0.14em]">Roles · </span>
          <span className="gals-card-text">{plan.roles}</span>
        </p>
        <p>
          <span className="gals-muted text-[11px] font-medium uppercase tracking-[0.14em]">Forma de pago · </span>
          <span className="gals-card-text">{plan.payment}</span>
        </p>
        <p>
          <span className="gals-muted text-[11px] font-medium uppercase tracking-[0.14em]">Plazo · </span>
          <span className="gals-card-text">{plan.timeline}</span>
        </p>
      </div>

      <a
        href={waUrl(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${plan.recommended ? "gals-btn-solid" : "gals-btn-outline"} mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium`}
      >
        Quiero Dashboard {plan.name}
      </a>
    </article>
  );
}

function JourneyBlock() {
  return (
    <div className="gals-stagger-group grid gap-4 md:grid-cols-3" data-reveal>
      {JOURNEY_STEPS.map((item, i) => (
        <article key={item.step} className="gals-card gals-stagger rounded-xl p-5" style={staggerStyle(i, 100)}>
          <p className="gals-eyebrow">{item.step}</p>
          <h3 className="gals-section-label mt-2 text-lg font-semibold">{item.title}</h3>
          <p className="gals-muted mt-2 text-sm leading-relaxed">{item.text}</p>
          <span className="gals-badge mt-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
            {item.tag}
          </span>
        </article>
      ))}
    </div>
  );
}

function RouteOptionsBlock() {
  return (
    <div className="gals-stagger-group mt-8 grid gap-4 md:grid-cols-2" data-reveal>
      {ROUTE_OPTIONS.map((route, i) => (
        <article key={route.id} className="gals-card gals-stagger rounded-xl p-5 sm:p-6" style={staggerStyle(i, 90)}>
          <h3 className="gals-section-label text-lg font-semibold">{route.title}</h3>
          <p className="gals-muted mt-2 text-sm leading-relaxed">{route.text}</p>
          <p className="gals-accent-text mt-4 text-xs font-semibold uppercase tracking-[0.14em]">{route.fit}</p>
        </article>
      ))}
    </div>
  );
}

function TrustStrip() {
  return (
    <div
      data-reveal
      className="gals-reveal gals-card mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl px-5 py-4 text-center text-xs sm:text-sm"
    >
      <span className="gals-muted">
        Comunidad{" "}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="gals-accent-text font-semibold">
          @galstudio___
        </a>{" "}
        · 16K seguidores
      </span>
      <span className="hidden h-4 w-px bg-[var(--gals-border)] sm:block" aria-hidden />
      <span className="gals-muted">
        Sitio actual{" "}
        <a href={BEWELL_URL} target="_blank" rel="noopener noreferrer" className="gals-accent-text font-semibold">
          Be Well Club
        </a>
      </span>
      <span className="hidden h-4 w-px bg-[var(--gals-border)] sm:block" aria-hidden />
      <span className="gals-muted">Propuesta por Fluxa Method · Cúcuta, Colombia</span>
    </div>
  );
}

function FloatingCta() {
  return (
    <a href="#planes" className="gals-floating-cta">
      Ver planes
    </a>
  );
}

function ClosingPlanPicker() {
  const [selectedEcosistemaId, setSelectedEcosistemaId] = useState("pro");
  const [selectedDashboardId, setSelectedDashboardId] = useState("dash-pro");

  const selectedEcosistema =
    CLOSING_PLANS.ecosistema.find((plan) => plan.id === selectedEcosistemaId) ?? CLOSING_PLANS.ecosistema[0];
  const selectedDashboard =
    CLOSING_PLANS.dashboard.find((plan) => plan.id === selectedDashboardId) ?? CLOSING_PLANS.dashboard[0];

  const subtotal = selectedEcosistema.price + selectedDashboard.price;
  const discount = Math.round(subtotal * COMBO_DISCOUNT);
  const total = subtotal - discount;

  return (
    <div data-reveal className="gals-reveal mt-10 text-left">
      <p className="gals-eyebrow text-center">Tu elección</p>
      <h3 className="gals-heading mt-2 text-center text-xl sm:text-2xl">¿Qué planes eliges?</h3>
      <p className="gals-muted mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed">
        Elige un plan del sistema digital y otro del dashboard propio. Al combinar ambos, aplicamos{" "}
        <span className="gals-accent-text font-semibold">20% de descuento</span> sobre el total.
      </p>

      <div className="mt-10">
        <p className="gals-section-label text-sm font-semibold">1 · Sistema digital</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {CLOSING_PLANS.ecosistema.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedEcosistemaId(plan.id)}
              className={`gals-plan-pick gals-card rounded-xl p-4 text-left sm:p-5 ${
                selectedEcosistemaId === plan.id ? "gals-plan-pick--selected" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="gals-section-label text-sm font-semibold sm:text-base">{plan.name}</p>
                  <p className="gals-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
                </div>
                {plan.recommended ? (
                  <span className="gals-badge shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider">
                    Top
                  </span>
                ) : null}
              </div>
              <p className="gals-price mt-4 text-2xl font-semibold">${formatUsd(plan.price)} USD</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="gals-section-label text-sm font-semibold">2 · Dashboard propio</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {CLOSING_PLANS.dashboard.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedDashboardId(plan.id)}
              className={`gals-plan-pick gals-card rounded-xl p-4 text-left sm:p-5 ${
                selectedDashboardId === plan.id ? "gals-plan-pick--selected" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="gals-section-label text-sm font-semibold sm:text-base">Dashboard {plan.name}</p>
                  <p className="gals-muted mt-1 text-xs leading-relaxed">{plan.note}</p>
                </div>
                {plan.recommended ? (
                  <span className="gals-badge shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider">
                    Top
                  </span>
                ) : null}
              </div>
              <p className="gals-price mt-4 text-2xl font-semibold">${formatUsd(plan.price)} USD</p>
            </button>
          ))}
        </div>
      </div>

      <div className="gals-payment-box mt-10 rounded-xl p-5 sm:p-6">
        <p className="gals-muted text-center text-[11px] font-medium uppercase tracking-[0.16em]">
          Resumen de tu combo
        </p>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex items-start justify-between gap-4 border-b border-[var(--gals-border)] pb-3">
            <div>
              <p className="gals-muted text-[10px] font-medium uppercase tracking-[0.14em]">Sistema digital</p>
              <p className="gals-section-label mt-1 font-semibold">{selectedEcosistema.name}</p>
            </div>
            <p className="gals-price shrink-0 font-semibold">${formatUsd(selectedEcosistema.price)} USD</p>
          </div>
          <div className="flex items-start justify-between gap-4 border-b border-[var(--gals-border)] pb-3">
            <div>
              <p className="gals-muted text-[10px] font-medium uppercase tracking-[0.14em]">Dashboard propio</p>
              <p className="gals-section-label mt-1 font-semibold">Dashboard {selectedDashboard.name}</p>
            </div>
            <p className="gals-price shrink-0 font-semibold">${formatUsd(selectedDashboard.price)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4 pt-1">
            <p className="gals-muted">Subtotal</p>
            <p className="gals-card-text font-medium">${formatUsd(subtotal)} USD</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="gals-accent-text font-medium">Descuento combo 20%</p>
            <p className="gals-accent-text font-semibold">-${formatUsd(discount)} USD</p>
          </div>
        </div>

        <div className="mt-5 border-t border-[var(--gals-border)] pt-5 text-center">
          <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Total a pagar</p>
          <p className="gals-price mt-1 text-3xl font-semibold sm:text-4xl">${formatUsd(total)} USD</p>
        </div>

        <div className="mt-6 text-center">
          <a
            href={waUrl(closingComboWaMessage(selectedEcosistema, selectedDashboard))}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto sm:min-w-[300px]"
          >
            Confirmar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionBlock({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  elevated = false,
  alt = false,
}) {
  return (
    <>
      <section
        id={id}
        className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "gals-section-alt" : ""}`}
      >
        <div
          className={`mx-auto w-full max-w-6xl ${elevated ? "gals-card rounded-2xl p-7 sm:p-10" : ""}`}
        >
          {(eyebrow || title || subtitle) && (
            <header data-reveal className="gals-reveal gals-reveal-header max-w-3xl">
              {eyebrow ? <p className="gals-eyebrow">{eyebrow}</p> : null}
              {title ? (
                <h2 className="gals-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
              ) : null}
              {subtitle ? <p className="gals-lead">{subtitle}</p> : null}
            </header>
          )}
          <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
        </div>
      </section>
    </>
  );
}

function PackageBlock({ label, items }) {
  return (
    <div className="mt-5 first:mt-0">
      <p className="gals-section-label flex items-center text-sm font-semibold">
        <PackageMark />
        {label}
      </p>
      <ul className="gals-muted mt-2 space-y-1.5 pl-1 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelinePhase({ phase, isLast, index }) {
  return (
    <div
      className="gals-timeline-phase gals-stagger relative flex gap-5 pb-10 last:pb-0"
      style={staggerStyle(index, 120)}
    >
      {!isLast ? (
        <span className="gals-timeline-line absolute left-[15px] top-9 bottom-0 w-px" aria-hidden />
      ) : null}
      <span className="gals-timeline-dot relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
        {phase.num}
      </span>
      <article className="gals-card min-w-0 flex-1 rounded-xl p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.18em]">{phase.when}</p>
          {phase.proOnly ? (
            <span className="gals-badge rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider">
              Solo Pro
            </span>
          ) : null}
        </div>
        <h3 className="gals-section-label mt-2 text-lg font-semibold">{phase.title}</h3>
        <p className="gals-muted mt-2 text-sm leading-relaxed">{phase.items}</p>
      </article>
    </div>
  );
}

export default function PropuestaNataliaPage() {
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
        <div
          className="gals-progress-bar h-full"
          style={{ width: `${progress}%` }}
          aria-hidden
        />
      </div>

      <nav className="gals-nav sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3.5 sm:gap-3 sm:px-6">
          <span className="gals-nav-brand mr-1 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em]">
            GAL&apos;S Studio
          </span>
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

      {/* 1 — HERO */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="gals-eyebrow tracking-[0.24em]">Método PDP Wellness™</p>
          <h1 className="gals-hero-title">
            Presencia Digital Profesional
            <br />
            para GAL&apos;S Studio
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Sistema digital para convertir tu comunidad en reservas y ventas recurrentes — sin depender de tu presencia
            manual.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {["Desde $947 USD", "4–6 semanas", "Landings + automatización + IA"].map((pill, i) => (
              <span
                key={pill}
                className="gals-pill gals-stagger rounded-full px-4 py-2 text-xs font-medium"
                style={staggerStyle(i, 80)}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal className="gals-reveal gals-hero-band mt-14 w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 sm:px-6 sm:py-12">
            <Image
              src={GALS_LOGO_SRC}
              alt="GAL'S Studio"
              width={640}
              height={640}
              priority
              className="gals-hero-logo h-40 w-auto max-w-full object-contain sm:h-48 md:h-52"
            />
            <p className="gals-hero-band-handle mt-4 text-center text-sm font-medium">@galstudio___</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
          <TrustStrip />
        </div>

        <p
          data-reveal
          className="gals-reveal gals-accent-text mx-auto mt-8 max-w-6xl px-4 text-sm font-medium sm:px-6"
        >
          Natalia Galvis <span className="gals-muted">/</span> GAL&apos;S Studio
        </p>

        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-3 px-4 sm:px-6" data-reveal>
          <a
            href="#planes"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Ver planes
          </a>
        </div>
      </section>
      <SectionBlock
        id="donde"
        eyebrow="01 — Punto de partida"
        title="Tienes audiencia, comunidad y contenido real."
        subtitle="Pero el sistema comercial todavía depende de que Natalia esté presente para que entren ventas."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {FRICTION_CARDS.map((text, i) => (
            <article
              key={text}
              className="gals-card gals-stagger rounded-xl p-5"
              style={staggerStyle(i, 90)}
            >
              <p className="gals-card-text text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 3 — TRANSFORMACIONES */}
      <SectionBlock
        id="transformacion"
        eyebrow="02 — Transformaciones concretas"
        title="De presencia manual a sistema que vende 24/7"
      >
        <div className="gals-stagger-group gals-table-wrap overflow-hidden rounded-xl" data-reveal>
          <div className="gals-table-head grid grid-cols-2 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] sm:px-6">
            <span>Antes</span>
            <span className="gals-accent-text">Después</span>
          </div>
          {TRANSFORMATIONS.map((row, i) => (
            <div
              key={row.before}
              className={`gals-stagger grid grid-cols-2 gap-3 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5 ${
                i < TRANSFORMATIONS.length - 1 ? "gals-table-row" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="gals-muted text-sm leading-relaxed">{row.before}</p>
              <p
                className="gals-table-after gals-table-after-cell text-sm leading-relaxed"
                style={{ "--after-delay": `${i * 100 + 140}ms` }}
              >
                {row.after}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* 3 — PLANES (ecosistema + dashboard) */}
      <SectionBlock
        id="planes"
        eyebrow="03 — Inversión"
        title="Elige tu ruta"
        subtitle="Dos familias de planes que se complementan: el sistema digital para captar y convertir, y el dashboard propio para operar sin depender de Bewe. Puedes empezar con uno y evolucionar al otro."
        elevated
        alt
      >
        <div data-reveal className="gals-reveal">
          <h3 className="gals-section-label text-lg font-semibold">Cómo encaja todo</h3>
          <p className="gals-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Primero construimos captación y marca. Luego operas con Bewe o migras al dashboard. Después, mantenimiento y
            crecimiento mensual.
          </p>
          <div className="mt-6">
            <JourneyBlock />
          </div>
        </div>

        <RouteOptionsBlock />

        <div className="mt-14" data-reveal>
          <p className="gals-eyebrow">Sistema digital</p>
          <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">GAL&apos;S DIGITAL · PRO</h3>
          <p className="gals-muted mt-2 max-w-3xl text-sm leading-relaxed">
            Homepage hub, landings, VSL y automatización para captar y convertir tráfico nuevo.
          </p>
        </div>

        <div className="mt-8">
          <HubArchitectureCard />

          <div className="gals-stagger-group mt-8 grid gap-6 lg:grid-cols-2" data-reveal>
            <article className="gals-card gals-stagger flex flex-col rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 1</p>
              <h3 className="gals-section-label mt-2 text-2xl font-semibold">GAL&apos;S DIGITAL</h3>
              <p className="mt-1 text-3xl font-semibold">
                <CountUp value={947} suffix=" USD" />
              </p>

              {DIGITAL_SECTIONS.map((block) => (
                <PackageBlock key={block.label} label={block.label} items={block.items} />
              ))}

              <div className="gals-payment-box mt-6 rounded-lg p-4">
                <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
                <p className="gals-card-text mt-2 text-sm">Fase 1: $474 USD al firmar</p>
                <p className="gals-muted text-sm">Fase 2: $473 USD a los 15 días</p>
              </div>

              <a
                href={waUrl(
                  "Hola Fluxa Method. Soy Natalia de GAL'S Studio, revisé la propuesta y me interesa el paquete GAL'S DIGITAL ($947 USD). Quiero coordinar el siguiente paso."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-outline mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
              >
                Quiero GAL&apos;S DIGITAL
              </a>
            </article>

            <article
              className="gals-card gals-card--featured gals-stagger relative flex flex-col rounded-2xl p-6 sm:p-8"
              style={staggerStyle(1, 140)}
            >
              <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                Recomendado
              </span>
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">Paquete 2</p>
              <h3 className="gals-section-label mt-2 text-2xl font-semibold">GAL&apos;S PRO</h3>
              <p className="mt-1 text-3xl font-semibold">
                <CountUp value={1497} suffix=" USD" />
              </p>

              <p className="gals-section-label mt-4 text-sm font-medium">Todo lo del paquete anterior, más:</p>

              {PRO_EXTRA_SECTIONS.map((block) => (
                <PackageBlock key={block.label} label={block.label} items={block.items} />
              ))}

              <PackageBlock label="Capacitación IA" items={["Igual al paquete GAL'S DIGITAL"]} />

              <div className="gals-payment-box mt-6 rounded-lg p-4">
                <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.16em]">Forma de pago</p>
                <p className="gals-card-text mt-2 text-sm">Fase 1: $749 USD al firmar</p>
                <p className="gals-muted text-sm">Fase 2: $748 USD a los 15 días</p>
              </div>

              <a
                href={waUrl(
                  "Hola Fluxa Method. Soy Natalia de GAL'S Studio, revisé la propuesta y me interesa el paquete GAL'S PRO ($1,497 USD). Quiero coordinar el siguiente paso."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="gals-btn-solid mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Quiero GAL&apos;S PRO
              </a>
            </article>
          </div>

          <div className="gals-reveal mt-12" data-reveal>
            <h3 className="gals-section-label text-center text-lg font-semibold sm:text-xl">
              Comparativa lado a lado
            </h3>
            <p className="gals-muted mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed">
              Qué incluye cada plan en arquitectura, contenido, pauta y automatización.
            </p>
            <PlanCompareTable />
          </div>
        </div>

        <div id="planes-dashboard" className="mt-20 scroll-mt-28 border-t border-[var(--gals-border)] pt-14" data-reveal>
          <p className="gals-eyebrow">Dashboard GAL&apos;S Studio</p>
          <h3 className="gals-heading mt-2 text-2xl font-semibold sm:text-3xl">
            Dueña de tu operación — sin Bewe, sin mensualidades
          </h3>
          <p className="gals-lead mt-3 max-w-3xl">
            Planes Starter → Enterprise. Un dashboard hecho a tu medida: alumnas, clases y pagos bajo tu marca, de tu
            propiedad para siempre.
          </p>

          <div className="gals-stagger-group mt-8 grid gap-6 lg:grid-cols-2" data-reveal>
            {DASHBOARD_PLANS.map((plan, i) => (
              <DashboardPlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* 5 — EJECUCIÓN */}
      <SectionBlock id="ejecucion" eyebrow="04 — Ejecución" title="Orden de construcción">
        <div className="gals-timeline-group gals-stagger-group max-w-2xl" data-reveal>
          {EXECUTION_PHASES.map((phase, i) => (
            <TimelinePhase
              key={phase.num}
              phase={phase}
              index={i}
              isLast={i === EXECUTION_PHASES.length - 1}
            />
          ))}
        </div>

        <p
          data-reveal
          className="gals-reveal gals-callout mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
        >
          ⚡ La landing del Reset se construye en la fase 1 del proyecto.
        </p>
      </SectionBlock>

      {/* 6 — RECONSUMO */}
      <SectionBlock
        id="reconsumo"
        eyebrow="05 — Continuidad"
        title="Mantenimiento y crecimiento mes a mes"
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-6 lg:grid-cols-2" data-reveal>
          <article className="gals-card gals-stagger rounded-2xl p-6 sm:p-8" style={staggerStyle(0)}>
            <p className="gals-eyebrow tracking-[0.18em]">Mantenimiento</p>
            <h3 className="gals-section-label mt-2 text-2xl font-semibold">
              <CountUp value={97} suffix=" USD/mes" />
            </h3>
            <p className="gals-muted mt-1 text-sm">Disponible desde el mes 3</p>
            <ul className="gals-muted mt-6 space-y-2 text-sm leading-relaxed">
              {[
                "Revisión y ajustes técnicos landing + Bewe",
                "Actualización automatizaciones WhatsApp",
                "8 nuevas ideas de contenido mensual",
                "1 email mensual estratégico",
                "Reporte mensual de métricas",
                "Soporte prioritario WhatsApp",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="gals-accent-text">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="gals-card gals-card--featured gals-stagger rounded-2xl p-6 sm:p-8"
            style={staggerStyle(1, 140)}
          >
            <p className="gals-eyebrow tracking-[0.18em]">Gestión completa</p>
            <h3 className="gals-section-label mt-2 text-2xl font-semibold">
              <CountUp value={250} suffix=" USD/mes" />
            </h3>
            <p className="gals-muted mt-1 text-sm">Disponible desde el mes 3</p>
            <p className="gals-section-label mt-4 text-sm font-medium">Todo lo anterior más:</p>
            <ul className="gals-muted mt-4 space-y-2 text-sm leading-relaxed">
              {[
                "Gestión activa campañas Meta Ads",
                "Optimización semanal de anuncios",
                "2 nuevos creativos mensuales",
                "Reporte de pauta — CPL, ROAS, resultados",
                "Recomendación de presupuesto mensual",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="gals-accent-text">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionBlock>

      {/* 6 — RESUMEN */}
      <SectionBlock
        id="resumen"
        eyebrow="06 — Resumen"
        title="Resumen ejecutivo"
        subtitle="Tres rutas posibles según dónde estés hoy y hacia dónde quieras llegar."
      >
        <div className="gals-stagger-group grid gap-5 md:grid-cols-3" data-reveal>
          {[
            {
              title: "Hoy",
              titleClass: "gals-muted",
              items: [
                "Audiencia sin sistema que la monetice",
                "Ventas manuales y dependientes de tu presencia",
                "Página que informa pero no convierte",
              ],
            },
            {
              title: "En 60 días",
              titleClass: "gals-eyebrow tracking-[0.2em]",
              items: [
                "Sistema digital que vende 24/7",
                "Alumnas nuevas llegando automáticamente",
                "Natalia enfocada en crear y enseñar — no en responder",
              ],
            },
            {
              title: "Tres rutas",
              titleClass: "gals-muted",
              items: [
                "GAL'S DIGITAL — desde $947 USD",
                "GAL'S PRO — $1,497 USD (recomendado)",
                "Dashboard propio — desde $500 USD",
              ],
            },
          ].map((col, i) => (
            <article
              key={col.title}
              className="gals-card gals-stagger rounded-xl p-6"
              style={staggerStyle(i, 110)}
            >
              <h3 className={`text-[11px] font-medium uppercase tracking-[0.2em] ${col.titleClass}`}>
                {col.title}
              </h3>
              <ul className="gals-card-text mt-4 space-y-2.5 text-sm leading-relaxed">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="gals-muted mt-8 text-center text-sm" data-reveal>
          Activos quedan en tus cuentas · Pagos en fases · 30 días de soporte post-entrega
        </p>
      </SectionBlock>

      {/* 7 — CIERRE */}
      <SectionBlock id="cierre" elevated alt>
        <div className="text-center">
          <header data-reveal className="gals-reveal gals-reveal-header">
            <h2 className="gals-heading text-2xl sm:text-3xl md:text-4xl">¿Lista para construir el sistema?</h2>
            <p className="gals-lead mx-auto mt-4 max-w-xl">
              Si cerramos esta semana, arrancamos de inmediato con la fase 1 del proyecto.
            </p>
          </header>

          <ClosingPlanPicker />

          <p className="gals-muted mt-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            Fluxa Method · Método PDP Wellness™
          </p>
        </div>
      </SectionBlock>

      <FloatingCta />
    </main>
  );
}
