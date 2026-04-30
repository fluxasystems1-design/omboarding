"use client";

import { useEffect } from "react";

const funnelNodes = [
  {
    number: "1",
    icon: "📱",
    title: "Instagram / Reels / Historias",
    description: "Contenido educativo que genera interés orgánico masivo",
  },
  {
    number: "2",
    icon: "💬",
    title: "Keyword + DM automático (ManyChat)",
    description: "El usuario comenta CALMA, SUEÑO o MEMORIA y recibe DM automático",
  },
  {
    number: "3",
    icon: "🤝",
    title: "Conversación humanizada",
    description: "Flujo natural, educativo y cercano — no se siente como bot",
  },
  {
    number: "4",
    icon: "🧠",
    title: "Quiz cerebral gratuito",
    description: "Sistema nervioso · Sueño · Ansiedad · Memoria · Estrés",
  },
  {
    number: "5",
    icon: "📊",
    title: "Resultado personalizado",
    description: "El quiz identifica qué suplemento necesita cada persona",
  },
  {
    number: "6",
    icon: "🎥",
    title: "Clase YouTube + PDF gratuito",
    description: "Contenido de valor que genera confianza antes de la venta",
  },
  {
    number: "7",
    icon: "🛒",
    title: "Landing específica del suplemento",
    description: "Landing con VSL del doctor + UGC + testimonios + CTA",
  },
  {
    number: "8",
    icon: "✅",
    title: "Compra",
    description: "Checkout con Wompi · Confirmación automática · Pixel activo",
  },
  {
    number: "9",
    icon: "📧",
    title: "Seguimiento automático",
    description: "Email post-compra · Upsell · Invitación a membresía",
  },
];

const requiredCards = [
  {
    icon: "🎥",
    title: "Videos UGC de suplementos",
    text: "Necesitamos videos reales de personas usando los suplementos. Sin UGC el funnel no convierte — es el activo más importante de la estrategia.",
    badge: "PENDIENTE — PRIORIDAD ALTA",
    border: "border-red-500/80",
    badgeClass: "bg-red-500/20 text-red-200 border-red-400/60",
    bullets: [
      "3–5 videos por suplemento (Magnesio, Omega 3, Creatina)",
      "Formato vertical 9:16 para Reels e historias",
      "Personas reales — no producción profesional",
      "Testimonios naturales: antes/después, rutina diaria, resultado real",
    ],
  },
  {
    icon: "📸",
    title: "Fotos de producto en alta resolución",
    text: "Las landings necesitan fotos reales de los frascos de FuncionA+ para empezar el diseño.",
    badge: "PENDIENTE",
    border: "border-amber-500/80",
    badgeClass: "bg-amber-500/20 text-amber-200 border-amber-400/60",
    bullets: [
      "Fondo blanco preferible",
      "Mínimo 3 ángulos por producto",
      "Alta resolución (no capturas de pantalla)",
    ],
  },
  {
    icon: "🎬",
    title: "VSL grabada por el doctor",
    text: "Cada landing necesita un video del doctor explicando el suplemento. El guion ya está listo — solo necesitamos la grabación.",
    badge: "GUION LISTO — PENDIENTE GRABACIÓN",
    border: "border-amber-500/80",
    badgeClass: "bg-amber-500/20 text-amber-200 border-amber-400/60",
    bullets: [
      "Magnesio Glicinato: guion disponible",
      "Omega 3: guion disponible",
      "Creatina: guion disponible",
      "No se necesita producción profesional — solo buena luz y audio",
    ],
  },
];

const landingReferences = [
  {
    icon: "🌿",
    title: "Naraa — Marca premium de suplementos",
    text: "Diseño, estructura y nivel visual de referencia para FuncionA+",
    href: "https://www.naraa.co/",
    color: "border-emerald-500/70 text-emerald-300",
  },
  {
    icon: "🐟",
    title: "Vitalica — Omega 3",
    text: "Página de producto individual enfocada en conversión",
    href: "https://www.tiendavitalica.com/products/omega-3",
    color: "border-blue-500/70 text-blue-300",
  },
  {
    icon: "💊",
    title: "Savvy — Producto con UGC integrado",
    text: "Estructura de testimonios y social proof para las landings",
    href: "https://www.youaresavvy.com/products/inositol-innerbloom-frutos-rojos-105g",
    color: "border-purple-500/70 text-purple-300",
  },
  {
    icon: "🧪",
    title: "Sin Intermediarios — Magnesio (gomas)",
    text: "Producto de magnesio colombiano — referencia directa",
    href: "https://www.sinintermediarios.co/products/gomas-con-citrato-de-magnesio",
    color: "border-yellow-400/80 text-yellow-300",
  },
  {
    icon: "🏪",
    title: "Sin Intermediarios — Tienda completa",
    text: "Ecommerce colombiano de suplementos — estructura de tienda",
    href: "https://www.sinintermediarios.co/",
    color: "border-red-500/80 text-red-300",
  },
  {
    icon: "💥",
    title: "Sin Intermediarios — Creatina",
    text: "Página de creatina colombiana — referencia para FuncionA+ Creatina",
    href: "https://www.sinintermediarios.co/products/creatina-monohidrato-300g",
    color: "border-amber-500/80 text-amber-300",
  },
];

const ugcStats = [
  { number: "4x", text: "Más conversión tienen las landings con UGC vs sin UGC" },
  { number: "79%", text: "De los compradores dicen que el UGC influye directamente en su decisión de compra" },
  { number: "3", text: "Suplementos necesitan su propio banco de UGC — Magnesio, Omega 3 y Creatina" },
];

const ugcTypes = [
  { icon: "🌅", title: "Rutina de mañana", text: "Persona tomando el suplemento en su rutina diaria" },
  { icon: "😴", title: "Antes de dormir", text: "Resultado del Magnesio en el sueño — video natural en cama" },
  { icon: "💪", title: "Rendimiento", text: "Creatina en contexto de actividad física o trabajo" },
  { icon: "🧠", title: "Concentración", text: "Omega 3 en contexto de trabajo o estudio" },
];

const roadmap = [
  {
    month: "MES 1",
    icon: "🏗️",
    title: "BASE DEL SISTEMA",
    color: "border-blue-500/70 text-blue-300",
    items: [
      "Landing Magnesio Glicinato con VSL",
      "Automatizaciones iniciales ManyChat (CALMA, SUEÑO, MAGNESIO)",
      "Quiz cerebral funcional",
      "Producción y edición de VSL con el doctor",
    ],
  },
  {
    month: "MES 2",
    icon: "🚀",
    title: "EXPANSIÓN",
    color: "border-emerald-500/70 text-emerald-300",
    items: [
      "Landing Creatina Monohidratada",
      "Landing Omega 3",
      "UGC escalado — nuevos creadores",
      "Automatizaciones adicionales (CEREBRO, MEMORIA)",
      "Primeras campañas Meta Ads activas",
    ],
  },
  {
    month: "MES 3",
    icon: "📈",
    title: "ESCALA",
    color: "border-blue-500/70 text-blue-300",
    items: [
      "Landing de membresía",
      "Remarketing y retargeting activo",
      "Optimización de funnels por datos reales",
      "Escalamiento de inversión en anuncios ganadores",
    ],
  },
];

const nextSteps = [
  {
    n: "1️⃣",
    title: "Doctor graba los 3 VSLs con los guiones entregados",
    text: "Tiempo estimado: 1–2 horas total · Sin producción profesional",
  },
  {
    n: "2️⃣",
    title: "Conseguir 3–5 personas para UGC de Magnesio",
    text: "Pueden ser pacientes, conocidos o clientes actuales · 5 min de video natural",
  },
  {
    n: "3️⃣",
    title: "Entregar fotos de los 3 frascos FuncionA+ en alta resolución",
    text: "WhatsApp o Google Drive · Fondo blanco preferible",
  },
  {
    n: "4️⃣",
    title: "Definir cronograma de entregables y fechas de revisión",
    text: "Alineamos próximos hitos del sistema y responsables por frente",
  },
  {
    n: "5️⃣",
    title: "Accesos: Instagram Business, Meta Ads, dominio o hosting",
    text: "Checklist completo se entrega por WhatsApp",
  },
];

export default function DrLeonardoBelloReunionPage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
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
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-50 bg-[#3B82F6] px-4 py-2 text-center text-[12px] font-extrabold uppercase tracking-[0.08em] text-white">
        REUNIÓN ESTRATÉGICA — Dr. Leonardo Bello × Fluxa Method — FuncionA+
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
            ECOSISTEMA DE NEUROLOGÍA FUNCIONAL
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            De la autoridad médica a un sistema que{" "}
            <span className="text-[#3B82F6] drop-shadow-[0_0_14px_rgba(59,130,246,0.45)]">vende solo.</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-zinc-200 sm:text-2xl">
            Instagram · Automatizaciones · Quiz cerebral · Landings · Membresía
          </p>
          <p className="mt-4 text-sm text-zinc-500 sm:text-base">
            Todo conectado dentro de un mismo sistema de conversión.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Cómo va a funcionar el sistema</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">Arquitectura del funnel completo — 90 días</p>

          <div className="mt-8 space-y-5">
            {funnelNodes.map((node, index) => (
              <div key={node.number} data-reveal className="reveal flex gap-4 sm:gap-5" style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="flex w-12 shrink-0 flex-col items-center">
                  <div className="pulse-glow flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#3B82F6] bg-[#3B82F6] text-sm font-extrabold text-white">
                    {node.number}
                  </div>
                  {index !== funnelNodes.length - 1 ? <span className="dash-flow-vertical mt-2 h-full w-[2px] min-h-[54px]" /> : null}
                </div>

                <article className="flex-1 rounded-2xl border border-zinc-700 bg-[#111111] p-4 sm:p-5">
                  <p className="text-lg font-extrabold text-white sm:text-xl">
                    <span className="mr-2">{node.icon}</span>
                    {node.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-300 sm:text-base">{node.description}</p>
                </article>
              </div>
            ))}
          </div>

          <p className="mt-8 inline-flex rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-extrabold text-white sm:text-base">
            = Arquitectura del sistema lista para implementación por fases
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Lo que necesitamos para continuar</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">Sin estos materiales no podemos construir el sistema</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {requiredCards.map((card) => (
              <article key={card.title} className={`rounded-2xl border bg-[#111111] p-5 ${card.border}`}>
                <p className="text-3xl">{card.icon}</p>
                <h3 className="mt-3 text-xl font-extrabold">{card.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{card.text}</p>
                <p className={`mt-4 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${card.badgeClass}`}>
                  {card.badge}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {card.bullets.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-blue-300">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Así van a quedar las landings</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">Referencias visuales seleccionadas para FuncionA+</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {landingReferences.map((item) => (
              <article key={item.title} className={`rounded-2xl border bg-[#111111] p-5 ${item.color}`}>
                <p className="text-3xl">{item.icon}</p>
                <h3 className="mt-3 text-xl font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.text}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-lg border border-zinc-600 bg-zinc-900/70 px-4 py-2 text-sm font-bold text-zinc-100 transition hover:border-blue-400 hover:text-blue-300"
                >
                  Ver referencia →
                </a>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs text-zinc-500 sm:text-sm">
            Estas referencias son inspiración visual. Las landings de FuncionA+ tendrán la identidad propia del Dr. Bello y su
            autoridad médica.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Por qué el UGC es lo más importante</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">
            El contenido generado por usuarios reales convierte más que cualquier producción profesional
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ugcStats.map((stat) => (
              <article key={stat.number} className="rounded-2xl border border-zinc-700 bg-[#111111] p-6 text-center">
                <p className="text-5xl font-extrabold text-blue-300">{stat.number}</p>
                <p className="mt-2 text-sm text-zinc-300">{stat.text}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-10 text-2xl font-extrabold tracking-tight sm:text-3xl">Qué tipo de UGC necesitamos</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {ugcTypes.map((item) => (
              <article key={item.title} className="rounded-xl border border-zinc-700 bg-[#111111] p-5">
                <p className="text-2xl">{item.icon}</p>
                <p className="mt-2 text-lg font-extrabold">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-blue-500/70 bg-[#1a1a1a] px-5 py-3 text-sm font-bold text-zinc-100">
            ¿Tienes clientes actuales que puedan hacer estos videos? Eso es todo lo que necesitamos para empezar.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Roadmap 90 días — FuncionA+</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">Construcción, automatización y escalamiento mes a mes</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {roadmap.map((phase) => (
              <article key={phase.month} className={`rounded-2xl border bg-[#111111] p-5 ${phase.color}`}>
                <p className="text-xs font-bold uppercase tracking-[0.18em]">{phase.month}</p>
                <p className="mt-3 text-3xl">{phase.icon}</p>
                <h3 className="mt-2 text-xl font-extrabold text-white">{phase.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-7 inline-flex rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-extrabold text-white sm:text-base">
            = FuncionA+ con funnels documentados, UGC integrado y roadmap validado
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Cómo funcionan las automatizaciones</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">El usuario comenta una palabra clave y el sistema hace el resto</p>

          <article className="mt-7 overflow-hidden rounded-2xl border border-zinc-700 bg-[#111111]">
            <div className="border-b border-zinc-700 bg-zinc-900/80 px-5 py-3 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Flujo de conversación</p>
              <p className="mt-1 text-lg font-extrabold text-white">Ejemplo — Automatización CALMA</p>
            </div>

            <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
              <div className="ml-auto w-fit max-w-[82%] rounded-2xl rounded-br-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 shadow-sm">
                CALMA
              </div>

              <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-emerald-400/30 bg-emerald-600/20 px-4 py-3 text-[15px] leading-relaxed text-emerald-50">
                Hola 😊 gracias por escribirnos. El doctor preparó un pequeño diagnóstico para ayudarte a identificar qué puede
                estar afectando tu bienestar cerebral.
              </div>

              <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-emerald-400/30 bg-emerald-600/20 px-4 py-3 text-[15px] leading-relaxed text-emerald-50">
                ¿Con cuál de estos te identificas más?
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "1️⃣ Me cuesta apagar la mente en las noches",
                    "2️⃣ Me despierto varias veces",
                    "3️⃣ Siento tensión o ansiedad constante",
                  ].map((option) => (
                    <span key={option} className="rounded-full border border-emerald-300/40 bg-emerald-500/20 px-3 py-1 text-xs text-emerald-100">
                      {option}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ml-auto w-fit max-w-[82%] rounded-2xl rounded-br-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 shadow-sm">
                1️⃣
              </div>

              <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-emerald-400/30 bg-emerald-600/20 px-4 py-3 text-[15px] leading-relaxed text-emerald-50">
                Tus respuestas muestran que probablemente tu sistema nervioso está recibiendo mucha carga. El Dr. Bello preparó
                una clase gratuita sobre esto 👇
              </div>

              <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-blue-400/40 bg-blue-500/15 px-4 py-3 text-sm font-bold text-blue-100">
                🎥 Ver clase gratuita &nbsp;|&nbsp; 💊 Ver suplemento recomendado
              </div>
            </div>
          </article>

          <div className="mt-6 flex flex-wrap gap-2">
            {["CALMA", "SUEÑO", "MAGNESIO", "CEREBRO", "MEMORIA"].map((word) => (
              <span
                key={word}
                className="inline-flex rounded-full border border-blue-400/70 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-300"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
        <div data-reveal className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¿Qué hacemos después de esta reunión?</h2>
          <p className="mt-2 text-sm text-zinc-500 sm:text-base">5 acciones concretas para continuar esta semana</p>

          <div className="mt-7 space-y-3">
            {nextSteps.map((step) => (
              <article key={step.n} className="rounded-xl border border-zinc-700 bg-[#111111] p-4 sm:p-5">
                <p className="text-sm font-extrabold text-blue-300">{step.n}</p>
                <h3 className="mt-1 text-lg font-extrabold text-white sm:text-xl">{step.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/573116425337"
              target="_blank"
              rel="noopener"
              className="inline-flex rounded-xl border border-blue-400 bg-[#3B82F6] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition hover:brightness-105"
            >
              Enviar materiales pendientes
            </a>
            <p className="mt-3 text-xs text-zinc-500">Respondemos en menos de 2 horas hábiles</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-[60px] sm:px-8">
        <div data-reveal className="reveal mx-auto max-w-5xl text-center">
          <p className="text-[26px] font-extrabold text-white">Doctor Bello ya tiene la autoridad y la audiencia.</p>
          <p className="mt-2 text-[26px] font-extrabold text-[#3B82F6]">Fluxa Method presenta la arquitectura del sistema.</p>
          <p className="mt-5 text-[13px] text-zinc-300">FuncionA+ · 90 días · 3 suplementos · Arquitectura validada en reunión</p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-blue-200/80">fluxamethod.com · @fluxamethod · Cúcuta, Colombia</p>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px) scale(0.985);
          transition: opacity 0.68s ease, transform 0.68s ease;
          will-change: transform, opacity;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .pulse-glow {
          animation: pulseGlow 2.2s ease-in-out infinite;
        }
        .dash-flow-vertical {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(59, 130, 246, 0.9) 0,
            rgba(59, 130, 246, 0.9) 9px,
            transparent 9px,
            transparent 16px
          );
          animation: dashFlowVertical 1.8s linear infinite;
        }
        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            filter: brightness(0.96);
          }
          50% {
            transform: scale(1.08);
            filter: brightness(1.1);
          }
          100% {
            transform: scale(1);
            filter: brightness(0.96);
          }
        }
        @keyframes dashFlowVertical {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 56px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .pulse-glow,
          .dash-flow-vertical {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
