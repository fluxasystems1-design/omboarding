"use client";

import { useMemo, useState } from "react";
import { PropuestaSection } from "@/components/propuesta-deck/DeckUI";
import { useDeckReveal } from "@/components/propuesta-deck/use-deck-motion";

const WA_URL =
  "https://wa.me/573116425337?text=" +
  encodeURIComponent(
    "Hola Fluxa Method, revisé la propuesta de ecosistema digital y quiero avanzar."
  );

const CTA_BTN =
  "rounded-xl border border-teal-400/90 bg-teal-600 font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_18px_rgba(13,148,136,0.28)] transition hover:bg-teal-500";

const TABS = [
  {
    id: "eco1",
    label: "Ecosistema 1",
    title: "ECOSISTEMA 1 — ECOMMERCE + ROPA + SUPLEMENTOS",
    investment: "$1,400",
    desc: "Hoy tienes un catálogo por WhatsApp. Eso limita tu volumen de ventas a tu tiempo disponible. Lo que vamos a construir es una tienda que vende mientras duermes.",
    items: [
      "Tienda completa con diseño de tu marca",
      "Landing page del producto ganador de suplementos",
      "Pasarela de pago integrada",
      "Meta Pixel configurado para capturar datos desde el primer día",
      "WhatsApp como canal de cierre, no de catálogo",
      "Dominio, hosting y SSL incluidos",
    ],
  },
  {
    id: "eco2",
    label: "Ecosistema 2",
    title: "ECOSISTEMA 2 — ASESORAMIENTO DEPORTIVO + MEMBRESÍA",
    investment: "$1,400",
    desc: "Hoy das mentorías de forma manual. Eso no escala. Lo que vamos a construir es un sistema donde la gente llega, ve tu VSL, se convence sola y paga sin que tú tengas que estar presente.",
    items: [
      "Video de ventas profesional con estructura de conversión",
      "Landing page de membresía o reto fitness",
      "Setup completo en Hotmart o Skool",
      "Accesos automáticos tras el pago",
      "Onboarding automatizado para cada nuevo miembro",
    ],
  },
  {
    id: "eco3",
    label: "Ecosistema 3",
    title: "ECOSISTEMA 3 — FONDO DE INVERSIÓN + SEÑALES",
    investment: "$1,400",
    desc: "Este es el proyecto de mayor ticket y mayor potencial. Requiere posicionamiento de autoridad desde el primer segundo.",
    items: [
      "VSL de autoridad y confianza",
      "Landing de captación de perfiles calificados",
      "Canal privado de señales",
      "Membresía escalonada básico y VIP",
      "Página de track record con prueba social",
      "Onboarding con disclaimer legal incluido",
    ],
  },
  {
    id: "full",
    label: "Todo junto",
    title: "TOTAL LOS 3 ECOSISTEMAS — $4,200",
    investment: "$4,200",
    desc: "Si los contratas por separado son $1,400 cada uno. Si cierras los 3 juntos el precio es el mismo pero el valor es triple porque los tres embudos se alimentan entre sí con la misma audiencia.",
    items: [
      "Los 3 ecosistemas conectados a tu marca personal",
      "Una sola arquitectura comercial para múltiples ingresos",
      "Costo de adquisición distribuido entre tres ofertas",
      "Oferta integral recomendada",
    ],
    featured: true,
  },
];

const INVERSION = [
  ["Desarrollo completo de los 3 ecosistemas", "$4,200"],
  ["Setup inicial de campañas publicitarias", "$350"],
  ["Total fase de construcción", "$4,550"],
  ["Gestión mensual de pauta", "$600/mes"],
  ["Mantenimiento y soporte web", "$200/mes"],
  ["Total mensual recurrente desde el mes 5", "$800/mes"],
];

const PAGO = [
  ["50% al inicio para arrancar", "$2,100"],
  ["30% al entregar los ecosistemas 1 y 2", "$1,260"],
  ["20% al entregar el ecosistema 3", "$840"],
];

const CRONOGRAMA = [
  ["Mes 1", "Ecommerce + tienda + landings"],
  ["Mes 2", "Membresía deportiva + VSL + plataforma"],
  ["Mes 3", "Fondo de inversión + señales + membresía VIP"],
  ["Mes 4", "Optimización + ajustes de pauta + entrega final"],
];

export default function PropuestaEcosistemaDigitalPage() {
  const [tab, setTab] = useState("full");
  const active = useMemo(() => TABS.find((t) => t.id === tab) ?? TABS[3], [tab]);
  useDeckReveal();

  return (
    <main className="propuesta-supermercado min-h-screen bg-black pb-16 text-white antialiased md:pb-0">
      <section className="mx-auto flex min-h-[82vh] w-full max-w-3xl flex-col justify-center px-5 pb-12 pt-10 sm:px-8 md:pt-14">
        <div data-reveal className="is-visible">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-400 sm:text-[11px]">
            Propuesta privada
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">PROPUESTA ECOSISTEMA DIGITAL</span>
            <span className="block text-teal-400 drop-shadow-[0_0_14px_rgba(13,148,136,0.45)]">
              Una propuesta para transformar tus marcas en sistemas que venden solos
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Lo que tienes hoy es valioso: audiencia, conocimiento y capacidad de generar ingresos. Lo que
            tienes enfrente es un equipo que ejecuta. Esta propuesta no es solo un servicio, es una
            arquitectura completa para que tus 3 marcas funcionen como un negocio digital real,
            automatizado y escalable.
          </p>
          <a href="#ventanas" className={`mt-8 inline-flex px-6 py-3 text-sm ${CTA_BTN}`}>
            Ver propuesta completa
          </a>
        </div>
      </section>

      <PropuestaSection className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Lo que vamos a construir</h2>
        <p className="mt-3 text-sm text-zinc-300 sm:text-base">
          Tres ecosistemas digitales integrados. Cada uno con su propio embudo, su propia audiencia y su
          propia fuente de ingresos. Los tres conectados a tu marca personal.
        </p>
      </PropuestaSection>

      <PropuestaSection id="ventanas" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Ventanas cambiables (3 ecosistemas + todo junto)
        </h2>
        <div className="plan-tabs-scroll mt-6 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`plan-tab !w-auto !min-h-0 px-3 py-2 text-[11px] sm:text-xs ${
                tab === t.id ? "plan-tab--active" : ""
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div
          className={`propuesta-card mt-4 p-5 sm:p-6 ${
            active.featured ? "border-teal-400/70 bg-teal-950/20" : ""
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">Inversión: {active.investment}</p>
          <h3 className="mt-2 text-lg font-extrabold text-white sm:text-xl">{active.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{active.desc}</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {active.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-teal-400">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PropuestaSection>

      <PropuestaSection id="inversion" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Inversión</h2>
        <ul className="propuesta-card mt-6 list-none divide-y divide-zinc-800 p-0">
          {INVERSION.map(([label, amount], i) => (
            <li key={label} className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <span className="text-sm text-zinc-300">{label}</span>
              <span className={`text-sm ${i === 2 || i === 5 ? "font-extrabold text-teal-300" : "text-zinc-200"}`}>
                {amount}
              </span>
            </li>
          ))}
        </ul>
      </PropuestaSection>

      <PropuestaSection id="pago" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Forma de pago</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {PAGO.map(([label, amount]) => (
            <article key={label} className="propuesta-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</p>
              <p className="mt-3 text-2xl font-extrabold text-teal-300">{amount}</p>
            </article>
          ))}
        </div>
      </PropuestaSection>

      <PropuestaSection id="cronograma" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Cronograma</h2>
        <ol className="mt-6 space-y-0">
          {CRONOGRAMA.map(([mes, detail]) => (
            <li key={mes} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-zinc-800 py-4 last:border-0">
              <span className="text-sm font-bold uppercase tracking-wide text-teal-300">{mes}</span>
              <span className="text-sm text-zinc-300">{detail}</span>
            </li>
          ))}
        </ol>
      </PropuestaSection>

      <PropuestaSection id="funcionamiento" className="!max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Cómo funciona</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          Tú te enfocas en crear contenido y cerrar ventas. Nosotros construimos la infraestructura que
          convierte ese contenido en ingresos. Dos rondas de revisión incluidas por proyecto. Tú eres el
          único que aparece frente a tu audiencia. Nosotros trabajamos detrás.
        </p>
        <h3 className="mt-10 text-xl font-extrabold text-white">Por qué tiene sentido hacerlo todo junto</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          Tus tres marcas comparten el mismo activo: tú. Tu audiencia de fitness puede convertirse en
          cliente de suplementos y también en inversor. Si construimos los tres embudos con una
          arquitectura integrada, el costo de adquisición se divide entre tres fuentes de ingreso. Eso no
          es un gasto, es infraestructura.
        </p>
      </PropuestaSection>

      <section id="contacto" className="border-t border-teal-500/50 bg-[#0B1F3A] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Arquitectura digital para negocios que crecen sin operar manualmente.
          </h2>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex px-8 py-3 text-sm ${CTA_BTN}`}
          >
            Quiero avanzar con esta propuesta
          </a>
        </div>
      </section>
    </main>
  );
}
