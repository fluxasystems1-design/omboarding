"use client";

import { FallingPattern } from "@/components/ui/falling-pattern";
import { useEffect, useState } from "react";

const funnelSteps = [
  { id: "ig", label: "Instagram / Pauta" },
  { id: "mc", label: "ManyChat" },
  { id: "qz", label: "Quiz" },
  { id: "wa", label: "WhatsApp" },
  { id: "ld", label: "Landing correcta" },
  { id: "cv", label: "Conversión" },
];

const quizProfiles = [
  {
    perfil: "Trader principiante",
    descripcion: "Quiere aprender desde base",
    ruta: "Academia",
  },
  {
    perfil: "Trader emocional",
    descripcion: "Tiene estrategia pero falla emocionalmente",
    ruta: "Educación + comunidad",
  },
  {
    perfil: "Trader operativo",
    descripcion: "Ya opera, quiere estructura",
    ruta: "Señales + escáner",
  },
  {
    perfil: "Trader con capital",
    descripcion: "Busca gestión o guía personalizada",
    ruta: "Fondo / Mentoría 1:1",
  },
];

const landingsSix = [
  {
    n: "1",
    title: "HUB Principal",
    text: "Página de autoridad y posicionamiento. Presenta el ecosistema, dirige al quiz.",
  },
  {
    n: "2",
    title: "Landing del Quiz",
    text: "La entrada principal. Captura leads, diagnostica el perfil, segmenta y redirige a la oferta correcta.",
  },
  {
    n: "3",
    title: "Academia de Trading",
    text: "Para quien quiere aprender. Incluye roadmap, módulos, testimonios y CTA a pago.",
  },
  {
    n: "4",
    title: "Señales + Escáner",
    text: "Membresía operativa. El escáner vive dentro de esta oferta como diferencial. CTA a acceso recurrente.",
  },
  {
    n: "5",
    title: "Mentoría 1:1",
    text: "Página tipo aplicación. Filtra curiosos, eleva percepción premium, lleva a llamada de cierre.",
  },
  {
    n: "6",
    title: "Fondo de Inversión",
    text: "Comunicación financiera sobria. Para inversionistas calificados. Proceso de aplicación privada.",
  },
];

const manychatAutomations = [
  { n: "1", title: "Reels", text: "Activa cuando alguien comenta palabra clave" },
  { n: "2", title: "Stories", text: "Activa cuando alguien responde una historia" },
  { n: "3", title: "Quiz", text: "Entrega el quiz y guía al perfil correcto" },
  { n: "4", title: "Mini guía gratis", text: "Entrega el recurso de captación" },
  { n: "5", title: "Recuperación", text: "Para quien abre el quiz pero no lo termina" },
  { n: "6", title: "Testimonios", text: "Envía casos y prueba social automáticamente" },
  { n: "7", title: "Señales", text: "Para interesados en operar acompañados" },
  { n: "8", title: "Premium", text: "Para mentoría y fondo de inversión" },
];

const nutricionDias = [
  { dia: "Día 1", text: "Resultado del quiz personalizado" },
  { dia: "Día 2", text: "Error principal según su perfil" },
  { dia: "Día 3", text: "Contenido educativo clave" },
  { dia: "Día 4", text: "Caso o testimonio real" },
  { dia: "Día 5", text: "Explicación de la solución recomendada" },
  { dia: "Día 6", text: "Objeciones frecuentes respondidas" },
  { dia: "Día 7", text: "CTA directo a la oferta correcta" },
];

const cierreBullets = [
  "Recordatorio",
  "Urgencia",
  "Beneficios",
  "Prueba social",
  "CTA a llamada o pago",
  "Seguimiento si no responde",
];

const implementacionIzq = [
  "Arquitectura estratégica del funnel",
  "1 quiz principal de diagnóstico",
  "1 mini guía gratuita de captación",
  "6 landings estratégicas completas",
  "8 automatizaciones en ManyChat",
];

const implementacionDer = [
  "2 secuencias de WhatsApp (nutrición + cierre)",
  "Segmentación de leads por perfil",
  "Optimización de CTA por oferta",
  "Estructura de contenido por línea",
  "Sistema de seguimiento y organización comercial",
];

const problemaBullets = [
  "Sin quiz que filtre el tipo de trader",
  "Todos los prospectos llegan a la misma landing",
  "Sin rutas diferenciadas por nivel o intención de compra",
  "Las automatizaciones no segmentan ni nutren",
  "El capital y la experiencia no determinan la oferta",
];

export default function JesusRodriguezPage() {
  const [waTab, setWaTab] = useState("frio");

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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <FallingPattern />
      <div className="relative z-10">
      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 md:pb-8 md:pt-10">
        <div data-reveal className="reveal mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl md:text-5xl">
            Tu sistema de captación está listo para{" "}
            <span className="text-[#FFD600] drop-shadow-[0_0_14px_rgba(255,214,0,0.5)]">construirse.</span>
          </h1>
          <p className="mt-4 text-sm font-bold text-zinc-200 sm:text-base md:text-lg">
            Ecosistema digital completo — quiz, landings, automatizaciones y secuencias de WhatsApp para convertir tu
            comunidad en clientes.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD600] sm:text-sm">
            DIAGNÓSTICO · SEGMENTACIÓN · CONVERSIÓN · AUTOMATIZACIÓN
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.28em] text-zinc-500">El problema actual</p>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Hoy todos llegan al mismo lugar
          </h2>
          <p className="mb-4 max-w-3xl text-sm font-bold text-zinc-300 sm:text-base">
            Tienes comunidad, contenido, autoridad y tráfico. El problema es que todos los perfiles están llegando al
            mismo punto sin segmentación clara.
          </p>
          <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:border-[#FFD600]/50 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)] sm:p-6">
            <ul className="flex flex-col gap-3 text-sm font-bold text-zinc-100 sm:text-[15px]">
              {problemaBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="shrink-0 text-red-400" aria-hidden>
                    ●
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.28em] text-zinc-500">
            La solución: el funnel segmentado
          </p>
          <h2 className="mb-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Un sistema que lleva a cada persona al camino correcto
          </h2>

          <div className="mb-4 md:hidden">
            <div className="flex flex-col gap-3">
              {funnelSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center gap-3">
                  <article className="w-full max-w-sm rounded-2xl border border-zinc-700 bg-[#111111] p-4 text-center transition duration-300 hover:border-[#FFD600]/50 hover:shadow-[0_0_22px_rgba(255,214,0,0.18)]">
                    <div
                      className="pulse-glow mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FFD600] bg-zinc-950/85 text-xs font-extrabold text-[#FFD600] shadow-[0_0_0_2px_rgba(255,214,0,0.35),0_0_28px_rgba(255,214,0,0.45)]"
                      aria-hidden
                    >
                      {index + 1}
                    </div>
                    <p className="mt-3 text-sm font-extrabold text-white">{step.label}</p>
                  </article>
                  {index < funnelSteps.length - 1 && (
                    <div className="relative h-10 w-[2px] overflow-hidden rounded-full">
                      <span className="timeline-dash-vertical block h-full w-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4 hidden md:flex md:flex-wrap md:items-start md:justify-center md:gap-0">
            {funnelSteps.map((step, index) => (
              <div key={step.id} className="flex min-w-0 items-start">
                <div className="flex w-[88px] shrink-0 flex-col items-center text-center lg:w-[100px]">
                  <div
                    className="pulse-glow flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#FFD600] bg-zinc-950/85 text-xs font-extrabold text-[#FFD600] shadow-[0_0_0_2px_rgba(255,214,0,0.35),0_0_28px_rgba(255,214,0,0.45)]"
                    aria-hidden
                  >
                    {index + 1}
                  </div>
                  <p className="mt-3 text-[10px] font-extrabold leading-tight text-white lg:text-[11px]">{step.label}</p>
                </div>
                {index < funnelSteps.length - 1 && (
                  <div className="relative mt-7 h-[2px] min-w-[12px] flex-1 max-w-[48px] overflow-hidden lg:max-w-[72px]">
                    <span className="timeline-dash absolute inset-0 block" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quizProfiles.map((row) => (
              <article
                key={row.perfil}
                className="rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:scale-[1.01] hover:border-[#FFD600]/55 hover:shadow-[0_0_22px_rgba(255,214,0,0.2)]"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFD600]">Perfil</p>
                <h3 className="mt-2 text-base font-extrabold text-white">{row.perfil}</h3>
                <p className="mt-3 text-sm font-bold text-zinc-300">{row.descripcion}</p>
                <p className="mt-4 border-t border-zinc-700 pt-3 text-xs font-extrabold uppercase tracking-wide text-zinc-400">
                  Ruta
                </p>
                <p className="mt-1 text-sm font-extrabold text-white">{row.ruta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Las 6 landings estratégicas
          </h2>
          <p className="mb-2 text-sm font-bold text-white sm:text-base">Cada oferta tiene su propia arquitectura de conversión</p>
          <p className="mb-4 max-w-3xl text-sm font-bold text-zinc-400 sm:text-base">
            No una sola landing genérica. Seis rutas distintas para seis decisiones distintas.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {landingsSix.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:scale-[1.01] hover:border-[#FFD600]/55 hover:shadow-[0_0_22px_rgba(255,214,0,0.2)] sm:p-5"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#FFD600]/60 bg-[#FFD600]/10 text-sm font-extrabold text-[#FFD600]">
                  {card.n}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-white sm:text-xl">{card.title}</h3>
                <p className="mt-3 text-sm font-bold leading-relaxed text-zinc-300">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Las 8 automatizaciones ManyChat
          </h2>
          <p className="mb-4 max-w-3xl text-sm font-bold text-zinc-300 sm:text-base">
            ManyChat convierte cada interacción en una captación
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {manychatAutomations.map((a) => (
              <article
                key={a.title}
                className="rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:border-[#FFD600]/55 hover:shadow-[0_0_22px_rgba(255,214,0,0.2)] sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FFD600]/50 bg-zinc-950 text-sm font-extrabold text-[#FFD600]">
                    {a.n}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-white sm:text-lg">{a.title}</h3>
                    <p className="mt-2 text-sm font-bold text-zinc-300">{a.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Secuencias de WhatsApp
          </h2>
          <p className="mb-4 text-sm font-bold text-[#FFD600] sm:text-base">ManyChat capta. WhatsApp nutre y cierra.</p>

          <div className="mb-4 flex gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setWaTab("frio")}
              className={`flex-1 rounded-xl border px-3 py-2 text-center text-xs font-extrabold uppercase tracking-wide transition ${
                waTab === "frio"
                  ? "border-[#FFD600] bg-[#FFD600] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
                  : "border-zinc-600 bg-[#111111] text-zinc-300"
              }`}
            >
              Nutrición 7 días
            </button>
            <button
              type="button"
              onClick={() => setWaTab("caliente")}
              className={`flex-1 rounded-xl border px-3 py-2 text-center text-xs font-extrabold uppercase tracking-wide transition ${
                waTab === "caliente"
                  ? "border-[#FFD600] bg-[#FFD600] text-black shadow-[0_0_18px_rgba(255,214,0,0.35)]"
                  : "border-zinc-600 bg-[#111111] text-zinc-300"
              }`}
            >
              Cierre
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <article
              className={`rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:border-[#FFD600]/45 hover:shadow-[0_0_20px_rgba(255,214,0,0.14)] sm:p-5 ${
                waTab !== "frio" ? "hidden md:block" : ""
              }`}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFD600]">
                Secuencia 1 — Nutrición 7 días
              </p>
              <p className="mt-2 text-sm font-bold text-zinc-400">Para leads fríos</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm font-bold text-zinc-100">
                {nutricionDias.map((d) => (
                  <li key={d.dia} className="flex gap-3 border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                    <span className="shrink-0 text-[#FFD600]">{d.dia}</span>
                    <span className="text-zinc-200">{d.text}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article
              className={`rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:border-[#FFD600]/45 hover:shadow-[0_0_20px_rgba(255,214,0,0.14)] sm:p-5 ${
                waTab !== "caliente" ? "hidden md:block" : ""
              }`}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFD600]">Secuencia 2 — Cierre</p>
              <p className="mt-2 text-sm font-bold text-zinc-400">Para leads calientes</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm font-bold text-zinc-100">
                {cierreBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#FFD600]" aria-hidden>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Qué incluye la implementación
          </h2>
          <p className="mb-4 text-sm font-bold text-zinc-300 sm:text-base">Todo lo que se construye e implementa</p>
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:border-[#FFD600]/55 hover:shadow-[0_0_22px_rgba(255,214,0,0.2)] sm:p-5">
              <ul className="flex flex-col gap-3 text-sm font-bold text-zinc-200">
                {implementacionIzq.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#FFD600]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-zinc-700 bg-[#111111] p-4 transition duration-300 hover:border-[#FFD600]/55 hover:shadow-[0_0_22px_rgba(255,214,0,0.2)] sm:p-5">
              <ul className="flex flex-col gap-3 text-sm font-bold text-zinc-200">
                {implementacionDer.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#FFD600]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <div data-reveal className="reveal text-center">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">La inversión</h2>
          <p className="text-3xl font-extrabold text-[#FFD600] drop-shadow-[0_0_20px_rgba(255,214,0,0.25)] sm:text-4xl">
            $697 USD / 2.600.000 COP
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6 pb-16 sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xl font-extrabold leading-snug text-white sm:text-2xl md:text-3xl">
            Jesús, ya tienes la comunidad, el contenido y la autoridad.
          </p>
          <p className="mt-4 text-sm font-bold text-zinc-300 sm:text-base">Fluxa Method construye el sistema que los convierte.</p>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-[#FFD600] bg-[#FFD600] px-8 py-3 text-sm font-extrabold text-black shadow-[0_0_24px_rgba(255,214,0,0.35)] transition hover:brightness-110 sm:text-base"
          >
            Confirmar arranque por WhatsApp
          </a>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            fluxamethod.com · @fluxamethod · Cúcuta, Colombia
          </p>
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
      </div>
    </main>
  );
}
