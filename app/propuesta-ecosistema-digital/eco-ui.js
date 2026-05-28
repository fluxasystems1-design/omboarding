"use client";

import { Fragment, useEffect, useRef, useState } from "react";

/** Fondo animado solo del hero: asteroides + glow + rejilla */
export function EcoHeroBackground() {
  return (
    <div className="eco-hero-bg" aria-hidden>
      <div className="eco-hero-bg__glow" />
      <div className="eco-hero-bg__grid" />
      <span className="eco-asteroid eco-asteroid--1" />
      <span className="eco-asteroid eco-asteroid--2" />
      <span className="eco-asteroid eco-asteroid--3" />
      <span className="eco-asteroid eco-asteroid--4" />
      <span className="eco-asteroid eco-asteroid--5" />
      <span className="eco-asteroid eco-asteroid--6" />
      <span className="eco-asteroid eco-asteroid--7" />
      <span className="eco-asteroid eco-asteroid--8" />
      <span className="eco-debris eco-debris--1" />
      <span className="eco-debris eco-debris--2" />
      <span className="eco-debris eco-debris--3" />
      <div className="eco-hero-bg__fade" />
    </div>
  );
}

export function parseUsd(str) {
  const n = parseInt(String(str).replace(/[^0-9-]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

export function formatUsd(n) {
  const abs = Math.abs(n);
  const formatted = abs.toLocaleString("en-US");
  return n < 0 ? `-$${formatted}` : `$${formatted}`;
}

export function AnimatedPrice({ value, className = "", pulse = false }) {
  const target = parseUsd(value);
  const fromRef = useRef(target);
  const [display, setDisplay] = useState(target);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setDisplay(target);
      fromRef.current = target;
      return;
    }
    const start = fromRef.current;
    const diff = target - start;
    if (diff === 0) return;
    const dur = 420;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - (1 - p) ** 3;
      setDisplay(Math.round(start + diff * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, reduced]);

  return (
    <span
      className={`eco-price-animated alianza-money-value font-extrabold ${pulse ? "eco-price-animated--pulse" : ""} ${className}`}
    >
      {formatUsd(display)}
    </span>
  );
}

export function PlanStickyBar({ visible, label, investment, savings }) {
  if (!visible) return null;
  return (
    <div
      className="eco-plan-sticky fixed left-0 right-0 top-[38px] z-[45] border-b border-teal-900/40 px-4 py-2.5 md:top-[42px]"
      role="status"
      aria-live="polite"
    >
      <div className="eco-plan-sticky-inner mx-auto flex max-w-3xl flex-col gap-1.5 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:text-sm">
        <span className="font-semibold text-zinc-300">
          Plan: <span className="text-white">{label}</span>
        </span>
        <span className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-zinc-500">Inversión</span>
          <AnimatedPrice value={investment} />
          {savings ? (
            <span className="rounded-full border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-200">
              Ahorro {savings}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}

export function PlanChangeHint() {
  return (
    <div className="eco-plan-hint mt-4 rounded-lg bg-zinc-900/50 px-4 py-3 text-sm text-zinc-300">
      <p>
        <strong className="text-white">Un solo frente (desde $1,800):</strong> eliges ecommerce, asesoramiento deportivo
        o fondo de inversión.
        Duración aproximada 6–8 semanas. Pagas 50% al inicio y 50% a los 20 días del pago inicial.
      </p>
      <p className="mt-2">
        <strong className="text-teal-300">Pack integral ($4,500):</strong> los 3 frentes conectados en 4 meses.
        Incluye configuración inicial de campañas ($350 de valor) y una sola estrategia para tu audiencia.
        Precio lista $5,700 → pagas <span className="alianza-money-label">$4,500</span> (ahorro $1,200).
      </p>
    </div>
  );
}

export function Summary30Card() {
  return (
    <article className="propuesta-card eco-summary-30 mt-6 border-teal-500/30 p-5 sm:p-6">
      <p className="alianza-eyebrow text-[10px] font-bold uppercase tracking-[0.2em]">
        Resumen en 30 segundos
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-200 sm:text-[15px]">
        <li>
          <strong className="text-white">Tres frentes:</strong> Ecommerce + Ropa + Suplementos, Asesoramiento Deportivo +
          Membresía y Fondo de Inversión + Brokeraje — conectados a tu marca.
        </li>
        <li>
          <strong className="text-white">Inversión:</strong> desde <span className="alianza-money-label">$1,800</span>{" "}
          por frente o <span className="alianza-money-label">$4,500</span> el pack completo (4 meses, pagos por hitos).
        </li>
        <li>
          <strong className="text-white">Tú:</strong> contenido, cierre y decisiones.{" "}
          <strong className="text-white">Fluxa:</strong> construye páginas, cobros, automatizaciones y medición.
        </li>
        <li>
          <strong className="text-white">Después del sí:</strong> pago inicial, checklist de accesos y arranque en la
          semana 1.
        </li>
      </ol>
    </article>
  );
}

export function TotalCostBox({ tab }) {
  const isFull = tab === "full";
  return (
    <article className="eco-total-cost propuesta-card mt-6 p-5 sm:p-6">
      <h3 className="text-sm font-bold uppercase tracking-wide text-teal-300">Costo total real (sin sorpresas)</h3>
      {isFull ? (
        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
          <li className="flex justify-between gap-4 border-b border-zinc-800/80 pb-3">
            <span>Inversión inicial (construcción pack)</span>
            <span className="alianza-money-value font-extrabold">$4,500</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-zinc-800/80 pb-3">
            <span>Primer pago para arrancar (50%)</span>
            <span className="font-bold text-white">$2,250</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-zinc-800/80 pb-3">
            <span>Duración estimada</span>
            <span className="text-zinc-100">4 meses</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Opcional desde mes 5 (pauta + mantenimiento)</span>
            <span className="text-zinc-100">hasta $800/mes</span>
          </li>
        </ul>
      ) : (
        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
          <li className="flex justify-between gap-4 border-b border-zinc-800/80 pb-3">
            <span>Inversión inicial (un ecosistema)</span>
            <span className="alianza-money-value font-extrabold">desde $1,800</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-zinc-800/80 pb-3">
            <span>Primer pago para arrancar (50%)</span>
            <span className="font-bold text-white">desde $900</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-zinc-800/80 pb-3">
            <span>Duración estimada</span>
            <span className="text-zinc-100">6–8 semanas</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Opcional después (pauta + mantenimiento)</span>
            <span className="text-zinc-100">hasta $800/mes</span>
          </li>
        </ul>
      )}
      <p className="mt-4 text-xs text-zinc-500">
        La pauta y el mantenimiento son opcionales. Puedes operar el sistema sin contratarlos.
      </p>
    </article>
  );
}

export function PlanRecommendations() {
  const items = [
    {
      title: "¿Vendes mucho por mensajes?",
      rec: "Empieza por Ecommerce + Ropa + Suplementos",
      tab: "eco1",
      desc: "Sales del catálogo manual y cobras en la web con seguimiento de anuncios.",
    },
    {
      title: "¿Tu fuerza es la comunidad fitness?",
      rec: "Empieza por Asesoramiento Deportivo + Membresía",
      tab: "eco2",
      desc: "Automatizas captación, cobro y bienvenida de miembros.",
    },
    {
      title: "¿Ya tienes audiencia para señales o educación premium?",
      rec: "Empieza por Fondo de Inversión + Brokeraje",
      tab: "eco3",
      desc: "Montamos captación calificada, canal privado y niveles básico/VIP.",
      highlight: false,
    },
    {
      title: "¿Quieres los tres ingresos conectados?",
      rec: "Pack integral (recomendado)",
      tab: "full",
      desc: "Misma audiencia en tres ofertas: menos fricción y una sola estrategia en 4 meses.",
      highlight: true,
    },
  ];
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.tab}
          className={`propuesta-card alianza-card-hover p-4 ${item.highlight ? "eco-rec-card--highlight border-teal-500/40" : ""}`}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">{item.title}</p>
          <p className="mt-2 text-sm font-extrabold text-teal-300">{item.rec}</p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
        </article>
      ))}
    </div>
  );
}

export function WeekOneSteps() {
  const steps = [
    ["Día 1–2", "Confirmación de pago, accesos compartidos y reunión de arranque (30–45 min)."],
    ["Día 3–5", "Checklist de contenido: oferta, fotos, textos y precios que apruebas tú."],
    ["Semana 1", "Primer avance visible según el plan elegido (estructura, diseño o borrador de página)."],
  ];
  return (
    <div className="mt-6 space-y-3">
      {steps.map(([when, what]) => (
        <article key={when} className="propuesta-card flex gap-4 p-4">
          <span className="alianza-eyebrow shrink-0 text-xs font-bold uppercase">{when}</span>
          <p className="text-sm text-zinc-300">{what}</p>
        </article>
      ))}
    </div>
  );
}

export function SocialProofStrip() {
  return (
    <article className="propuesta-card mt-6 border-zinc-700/80 p-5 sm:p-6">
      <p className="alianza-eyebrow text-[10px] font-bold uppercase tracking-[0.18em]">Experiencia Fluxa</p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
        Hemos montado sistemas de venta digital para creadores y marcas personales: tiendas en línea, membresías y
        captación premium. Trabajamos detrás de escena;{" "}
        <strong className="text-zinc-100">tú eres quien aparece frente a tu audiencia</strong>.
      </p>
    </article>
  );
}

export function PackComparator() {
  const rows = [
    ["Precio por construir los 3 frentes", "$5,700 ($2,000 + $1,800 + $1,900)", "$4,500"],
    ["Configuración inicial de campañas", "Se cotiza aparte", "$350 incluido en pack"],
    ["Los 3 sistemas hablan entre sí", "No", "Sí — misma audiencia"],
    ["Una sola estrategia de crecimiento", "No", "Sí"],
    ["Tiempo total estimado", "3 proyectos por separado", "4 meses coordinados"],
    ["Precio lista pack (referencia)", "—", "$5,700 → pagas $4,500"],
  ];
  return (
    <div className="propuesta-compare-table mt-4 overflow-x-auto rounded-xl border border-zinc-800 bg-black/30">
      <table className="eco-pack-compare w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/70 text-left text-[10px] uppercase tracking-wider text-zinc-500">
            <th className="px-3 py-3">Concepto</th>
            <th className="px-3 py-3">Por separado</th>
            <th className="px-3 py-3 text-teal-300">Pack integral</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([concept, sep, pack]) => (
            <tr key={concept} className="border-b border-zinc-800/80 last:border-0">
              <td className="px-3 py-2.5 text-zinc-400">{concept}</td>
              <td className="px-3 py-2.5 text-zinc-300">{sep}</td>
              <td
                className={`px-3 py-2.5 font-medium ${
                  pack.startsWith("-") ? "text-emerald-300" : "text-zinc-100"
                }`}
              >
                {pack}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DeliverablesBlock({ tab, groups, single, tabFade, loading }) {
  const skeleton = loading ? "eco-plan-skeleton" : "";
  const panelClass = `propuesta-card alianza-tab-panel mt-4 p-4 sm:p-6 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton}`;

  if (tab === "full") {
    return (
      <div className={panelClass}>
        <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-400">
          Entregables y precio — Ecosistema Integral
        </h3>
        <div className="mt-4 space-y-4 md:hidden">
          {groups.map((g) => (
            <div key={g.id} className="eco-deliverable-group space-y-2 pt-4 first:pt-0">
              <p className="text-[11px] font-bold uppercase tracking-wide text-teal-300">{g.label}</p>
              {g.rows.map(([name, price], i) => (
                <article
                  key={name}
                  style={{ "--stagger-i": i }}
                  className="alianza-compare-row rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900/70 to-zinc-950/70 p-3"
                >
                  <p className="text-xs leading-relaxed text-zinc-300">{name}</p>
                  <p className="mt-2 text-right text-sm font-extrabold text-teal-300">{price}</p>
                </article>
              ))}
              <p className="text-right text-xs font-bold text-zinc-400">
                Subtotal {g.label.split("·")[0].trim()}:{" "}
                <span className="alianza-money-value text-sm">{g.subtotal}</span>
              </p>
            </div>
          ))}
          <article className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3">
            <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-300">Subtotal combinado</p>
            <p className="alianza-money-value mt-1 text-right text-lg font-extrabold">$2,090</p>
          </article>
        </div>
        <div className="propuesta-compare-table mt-4 hidden overflow-x-auto rounded-xl border border-zinc-800 bg-black/30 md:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/70 text-left text-[10px] uppercase tracking-wider text-zinc-500">
                <th className="px-3 py-3 sm:px-4">Entregable</th>
                <th className="px-3 py-3 text-right sm:px-4">Precio</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <Fragment key={g.id}>
                  <tr className="eco-deliverable-group bg-teal-950/30">
                    <td colSpan={2} className="px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-teal-300 sm:px-4">
                      {g.label} · Subtotal {g.subtotal}
                    </td>
                  </tr>
                  {g.rows.map(([name, price], i) => (
                    <tr
                      key={name}
                      style={{ "--stagger-i": i }}
                      className="alianza-compare-row border-b border-zinc-800/80 transition-colors hover:bg-zinc-900/40"
                    >
                      <td className="px-3 py-2.5 text-zinc-300 sm:px-4">{name}</td>
                      <td className="px-3 py-2.5 text-right font-semibold text-teal-300 sm:px-4">{price}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-zinc-700 bg-amber-500/10">
                <td className="px-3 py-3 font-bold text-zinc-200 sm:px-4">SUBTOTAL COMBINADO</td>
                <td className="alianza-money-value px-3 py-3 text-right font-extrabold sm:px-4">$2,090</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-400">
          El pack integral incluye integración entre los tres frentes y puesta en marcha coordinada.
        </p>
      </div>
    );
  }

  return (
    <div className={panelClass}>
      <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-400">
        Entregables y precio — {single?.label ?? ""}
      </h3>
      <div className="mt-4 space-y-2 md:hidden">
        {(single?.rows ?? []).map((name, i) => (
          <article
            key={name}
            style={{ "--stagger-i": i }}
            className="alianza-compare-row rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900/70 to-zinc-950/70 p-3"
          >
            <p className="text-xs leading-relaxed text-zinc-300">{name}</p>
          </article>
        ))}
      </div>
      <div className="propuesta-compare-table mt-4 hidden overflow-x-auto rounded-xl border border-zinc-800 bg-black/30 md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/70 text-left text-[10px] uppercase tracking-wider text-zinc-500">
              <th className="px-3 py-3 sm:px-4">Entregable</th>
            </tr>
          </thead>
          <tbody>
            {(single?.rows ?? []).map((name, i) => (
              <tr
                key={name}
                style={{ "--stagger-i": i }}
                className="alianza-compare-row border-b border-zinc-800/80 transition-colors hover:bg-zinc-900/40 last:border-0"
              >
                <td className="px-3 py-2.5 text-zinc-300 sm:px-4">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CronogramaTimeline({ items, tabFade, loading }) {
  const skeleton = loading ? "eco-plan-skeleton" : "";
  return (
    <div
      className={`eco-timeline mt-6 ${tabFade ? "alianza-tab-panel--enter" : "alianza-tab-panel--exit"} ${skeleton}`}
    >
      {items.map(([mes, detail], i) => (
        <div key={mes} style={{ "--stagger-i": i }} className="eco-timeline-item grid grid-cols-1 gap-1 sm:grid-cols-[6rem_1fr]">
          <span className="alianza-eyebrow text-sm font-bold uppercase tracking-wide text-teal-300">{mes}</span>
          <span className="text-sm leading-relaxed text-zinc-300">{detail}</span>
        </div>
      ))}
    </div>
  );
}

export function FaqAccordion({ items }) {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="reveal-stagger mt-6 space-y-2">
      {items.map((item, i) => (
        <div key={item.q} style={{ "--stagger-i": i }} className="propuesta-card overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            className={`alianza-faq-btn flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-white sm:px-5 ${openFaq === i ? "alianza-faq-btn--open" : ""}`}
            aria-expanded={openFaq === i}
          >
            {item.q}
            <span className="alianza-faq-icon shrink-0 text-xl leading-none" aria-hidden>
              +
            </span>
          </button>
          <div className={`alianza-faq-panel ${openFaq === i ? "alianza-faq-panel--open" : ""}`}>
            <div>
              <p className="border-t border-zinc-800 px-4 pb-4 pt-3 text-sm text-zinc-400 sm:px-5">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
