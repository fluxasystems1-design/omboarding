"use client";

import { useEffect, useMemo, useState } from "react";
import { CountUp } from "@/components/propuesta-deck/CountUp";
import { PropuestaSection, StaggerItems } from "@/components/propuesta-deck/DeckUI";
import { useDeckReveal } from "@/components/propuesta-deck/use-deck-motion";
import { buildClientContent } from "./build-client-content";

const CTA_BTN =
  "rounded-xl border border-teal-400/90 bg-teal-600 font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_18px_rgba(13,148,136,0.28)] transition hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const PAQUETE1_ITEMS = [
  "Landing page con VSL estratégico",
  "Guion VSL listo para grabar",
  "Bot de bienvenida WhatsApp / Instagram",
  "Automatización básica de entrada",
  "Meta Ads configurado + 3 creativos",
  "Píxeles y analítica instalados",
];

const PAQUETE2_ITEMS = [
  "Todo lo del Paquete 1",
  "Comunidad Skool completa configurada",
  "Onboarding y retención de miembros",
  "Embudo de nutrición automatizado (5 mensajes)",
  "Estrategia de contenido 60 días",
  "5 creativos + optimización semanal pauta",
  "Gestión activa comunidad 2 meses",
  "2 sesiones estratégicas mensuales",
];

function formatSectionNum(canonicalNum, hideDiagnostico) {
  const displayed = hideDiagnostico ? canonicalNum - 1 : canonicalNum;
  return String(displayed).padStart(2, "0");
}

function renderCompareCell(value, isProColumn) {
  if (value === true) {
    return (
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/25 text-sm font-bold text-emerald-300 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.35)]"
        aria-label="Incluido"
      >
        ✓
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-lg font-bold leading-none text-red-400" aria-label="No incluido">
        ✗
      </span>
    );
  }
  return (
    <span
      className={`text-center text-[10px] font-semibold leading-tight sm:text-xs ${isProColumn ? "text-teal-300" : "text-zinc-400"}`}
    >
      {value}
    </span>
  );
}

const DISCOVERY_CARDS = [
  {
    emoji: "📡",
    title: "Bot de señales de trading",
    text: "Tus análisis enviados automáticamente a tu comunidad en tiempo real. Tu método trabajando 24/7 sin que estés disponible.",
    tags: ["Telegram", "Tiempo real", "Automatización"],
  },
  {
    emoji: "📱",
    title: "App móvil para tu comunidad",
    text: "Tu comunidad en una app con tu marca. Señales, educación y acceso premium — sin depender de Skool ni plataformas externas.",
    tags: ["iOS + Android", "Marca propia", "Membresía"],
  },
  {
    emoji: "🌐",
    title: "Plataforma web a medida",
    text: "Tu propia plataforma — sin comisiones a terceros. Gestiona cursos, miembros y pagos desde tu propio espacio digital.",
    tags: ["Sin comisiones", "Escalable", "Propio"],
  },
  {
    emoji: "🤖",
    title: "CRM + automatización avanzada",
    text: "Sistema que rastrea cada prospecto y lo lleva a la compra sin intervención manual. Tu embudo en piloto automático.",
    tags: ["n8n / Make", "CRM", "Seguimiento"],
  },
  {
    emoji: "📊",
    title: "Dashboard de resultados en vivo",
    text: "Panel donde tu comunidad ve tu operativa en tiempo real. La prueba social más poderosa que un trader puede mostrar.",
    tags: ["Datos en vivo", "Transparencia", "Confianza"],
  },
  {
    emoji: "💡",
    title: "Tengo otra idea en mente",
    text: "Quizás ya tienes algo que no aparece aquí. Cuéntanos cuál es el problema que quieres resolver — nosotros encontramos la solución.",
    tags: ["A medida", "Tu visión", "Lo construimos"],
  },
];

function SectionHeader({ headerLine }) {
  return (
    <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-[11px]">
      {headerLine}
    </p>
  );
}

function SlideFooter({ cliente, fecha }) {
  return (
    <footer className="mt-10 border-t border-zinc-800 pt-6 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
      <p>Fluxa Method — Propuesta {cliente}</p>
      <p className="mt-1">{fecha}</p>
    </footer>
  );
}

const DEFAULT_COPY = {
  diagnosticoLead: "Tiene resultado real y cuenta verificada, pero aún no tiene el sistema que lo monetice.",
  puntoPartidaBody: (clienteCorto) =>
    `${clienteCorto} es trader rentable desde 2022 con cuenta verificada — pero el prospecto no encuentra un camino claro desde su contenido hasta la compra.`,
  conclusionBar: (clienteCorto) =>
    `${clienteCorto} tiene los 3 ingredientes más difíciles de conseguir — resultado real desde 2022, cuenta verificada y audiencia que confía en él. Lo que falta es el sistema que capte, nutra y convierta sin depender de su tiempo en cada paso.`,
  frictionContenidoDetail:
    "18 publicaciones en toda su historia. Instagram atrae interés, pero no hay una secuencia que convierta atención en demanda real.",
};

export default function PropuestaTradingPage({ config }) {
  const {
    cliente,
    clienteCorto,
    instagram,
    fecha,
    waUrl,
    packageComparison,
    copy: copyOverrides,
    hideDiagnostico = false,
  } = config;
  const headerLine = `FLUXA METHOD | Propuesta Comercial | ${fecha}`;
  const clientLabel = instagram ? `${cliente} · ${instagram}` : cliente;
  const sec = (n) => formatSectionNum(n, hideDiagnostico);

  const copy = { ...DEFAULT_COPY, ...copyOverrides };
  const diagnosticoLead = copy.diagnosticoLead ?? DEFAULT_COPY.diagnosticoLead;
  const puntoPartidaBody =
    typeof copy.puntoPartidaBody === "function"
      ? copy.puntoPartidaBody(clienteCorto)
      : (copy.puntoPartidaBody ?? DEFAULT_COPY.puntoPartidaBody(clienteCorto));
  const conclusionBar =
    typeof copy.conclusionBar === "function"
      ? copy.conclusionBar(clienteCorto)
      : (copy.conclusionBar ?? DEFAULT_COPY.conclusionBar(clienteCorto));
  const frictionContenidoDetail =
    copy.frictionContenidoDetail ?? DEFAULT_COPY.frictionContenidoDetail;

  const { problemaItems, frictionItems, transformations, fases } = useMemo(
    () => buildClientContent(clienteCorto, { frictionContenidoDetail }),
    [clienteCorto, frictionContenidoDetail]
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  useDeckReveal();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="propuesta-supermercado min-h-screen bg-black text-white antialiased">
      <div className="propuesta-progress" aria-hidden>
        <div className="propuesta-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* PORTADA */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-10 sm:px-8 md:pb-16 md:pt-20">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-[11px]">
            {headerLine}
          </p>
          <p className="mt-2 text-sm text-zinc-300 sm:text-base">
            Para {clientLabel}
          </p>

          <h1 className="mt-8 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-white">Sistema digital para</span>
            <span className="block text-teal-400 drop-shadow-[0_0_14px_rgba(13,148,136,0.45)]">lanzar tu academia</span>
            <span className="block text-white">y comunidad de trading</span>
          </h1>

          <p className="mt-5 text-base text-zinc-300 sm:text-lg md:text-xl">
            Diagnóstico del negocio actual, transformaciones esperadas, entregables concretos y plan de ejecución en 2
            meses.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <article className="propuesta-stat">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                <CountUp value={897} suffix=" USD" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Paquete 1 — Fluxa Launch</p>
            </article>
            <article className="propuesta-stat propuesta-stat--pro">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                <CountUp value={1497} suffix=" USD" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Paquete 2 — Fluxa Pro ⭐</p>
            </article>
            <article className="propuesta-stat">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">2 meses</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Duración del proyecto</p>
            </article>
          </div>

          <div className="propuesta-bar-teal mx-auto mt-6 max-w-3xl px-4 py-3 text-sm font-semibold leading-relaxed text-teal-100 sm:text-base">
            <strong>Resultado esperado</strong>
            <br />
            Un ecosistema digital que convierte el conocimiento y resultado de {clienteCorto} en ingresos recurrentes —
            sin depender de su atención manual en cada paso.
          </div>
        </div>

        <div data-reveal className="mx-auto mt-10 max-w-5xl">
          <h2 className="mb-6 text-center text-lg font-extrabold uppercase tracking-[0.12em] text-white sm:text-xl">
            Los 2 paquetes
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="propuesta-card border-blue-400/50 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Paquete 1 · 2 meses</p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">Fluxa Launch</h3>
              <p className="mt-1 text-3xl font-extrabold text-blue-300">
                <CountUp value={897} suffix=" USD" />
              </p>
              <ul className="mt-4 space-y-2">
                {PAQUETE1_ITEMS.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-200">
                    <span className="text-teal-400">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="propuesta-card border-teal-400/60 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Paquete 2 ⭐ · 2 meses</p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">Fluxa Pro</h3>
              <p className="mt-1 text-3xl font-extrabold text-teal-300">
                <CountUp value={1497} suffix=" USD" />
              </p>
              <ul className="mt-4 space-y-2">
                {PAQUETE2_ITEMS.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-200">
                    <span className="text-teal-400">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div data-reveal className="mx-auto mt-10 max-w-5xl rounded-2xl border border-zinc-800 bg-[#0D0D0D] p-4 sm:p-8">
          <h2 className="text-center text-base font-extrabold uppercase leading-snug tracking-wide text-white sm:text-lg md:text-xl">
            Diferencia real entre el Paquete 1 y el Paquete 2
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-zinc-500 sm:text-sm">
            Fluxa Launch ($897) instala captación, VSL y primera pauta. Fluxa Pro ($1,497) suma comunidad Skool, nutrición
            automatizada, contenido 60 días, gestión activa y optimización continua de campañas.
          </p>

          <div className="propuesta-compare-table mt-6 overflow-x-auto rounded-xl border border-zinc-800 bg-black/40">
            <div className="min-w-[320px]">
              <div className="grid grid-cols-[1fr_76px_76px] gap-2 border-b border-zinc-800 px-3 py-3 sm:grid-cols-[1fr_96px_96px] sm:px-4 sm:py-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 sm:text-xs">
                  Característica
                </span>
                <span className="text-center text-[10px] font-bold uppercase leading-tight text-zinc-300 sm:text-xs">
                  Paquete 1
                  <span className="mt-0.5 block whitespace-nowrap font-extrabold normal-case text-teal-300">$897</span>
                </span>
                <span className="text-center text-[10px] font-bold uppercase leading-tight text-zinc-300 sm:text-xs">
                  Paquete 2 ⭐
                  <span className="mt-0.5 block whitespace-nowrap font-extrabold normal-case text-teal-300">$1,497</span>
                </span>
              </div>
              {packageComparison.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1fr_76px_76px] items-center gap-2 border-b border-zinc-800/90 px-3 py-2.5 last:border-b-0 sm:grid-cols-[1fr_96px_96px] sm:px-4 sm:py-3"
                >
                  <span className="text-left text-[11px] leading-snug text-zinc-200 sm:text-sm">{row.feature}</span>
                  <div className="flex justify-center">{renderCompareCell(row.paquete1, false)}</div>
                  <div className="flex justify-center">{renderCompareCell(row.paquete2, true)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p data-reveal className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-zinc-500 sm:text-sm">
          🗺 ¿Qué construirías si tuvieras un equipo de tecnología? Lo exploramos juntos — sin costo — en la última
          página.
        </p>

        <p data-reveal className="mx-auto mt-6 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
          fluxamethod.com
          <br />
          @fluxamethod
          <br />
          Cúcuta, Colombia
        </p>
      </section>

      {!hideDiagnostico && (
        <PropuestaSection>
          <SectionHeader headerLine={headerLine} />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            {sec(1)}. Dónde está hoy {cliente}
          </p>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">{diagnosticoLead}</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="propuesta-card p-5 sm:p-6">
              <p className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Punto de partida
              </p>
              <p className="mt-4 text-lg font-bold leading-snug text-white">
                Hoy el negocio depende 100% de su tiempo y atención manual
              </p>
              <p className="mt-3 text-sm text-zinc-300">{puntoPartidaBody}</p>
              <ul className="mt-4 space-y-2">
                {problemaItems.map((item) => (
                  <li key={item} className="text-sm text-zinc-200 sm:text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <div className="space-y-3">
              <p className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-red-300">
                Fricción actual
              </p>
              {frictionItems.map((f) => (
                <article key={f.t} className="propuesta-card border-red-400/25 p-4 sm:p-5">
                  <h3 className="text-base font-bold text-red-300">{f.t}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{f.d}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="propuesta-bar-teal mt-6 px-4 py-3 text-center text-sm font-semibold text-teal-100 sm:text-base">
            <strong>Conclusión:</strong> {conclusionBar}
          </p>
          <SlideFooter cliente={cliente} fecha={fecha} />
        </PropuestaSection>
      )}

      {/* 02 TRANSFORMACIONES */}
      <PropuestaSection>
        <SectionHeader headerLine={headerLine} />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          {sec(2)}. Las transformaciones concretas en 60 días
        </p>
        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          Cada mejora impacta directamente captación, confianza del prospecto y conversión en ventas.
        </p>

        <div className="mt-6 space-y-4">
          {transformations.map((t) => (
            <div key={t.n} className="grid gap-3 md:grid-cols-2">
              <article className="propuesta-card rounded-xl border-red-400/25 bg-red-950/15 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-300">Antes</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-500">Transformación {t.n}</p>
                <p className="mt-2 text-sm text-zinc-200">{t.before}</p>
              </article>
              <article className="propuesta-card rounded-xl border-emerald-400/25 bg-emerald-950/15 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">Después</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-zinc-500">Impacto {t.n}</p>
                <p className="mt-2 text-sm text-zinc-100">{t.after}</p>
              </article>
            </div>
          ))}
        </div>

        <p className="mt-6 rounded-xl border border-teal-500/45 bg-teal-500/10 px-5 py-3 text-center text-sm font-bold text-teal-100">
          Con el ecosistema activo, el contenido orgánico y la pauta trabajan en paralelo para alimentar un sistema que
          capta, nutre y convierte sin fricción.
        </p>
        <SlideFooter cliente={cliente} fecha={fecha} />
      </PropuestaSection>

      {/* 03 ENTREGABLES */}
      <PropuestaSection>
        <SectionHeader headerLine={headerLine} />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">{sec(3)}. Qué recibe exactamente</p>
        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          Todo lo que se construye, instala y activa durante los 2 meses del proyecto.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Desarrollo digital",
              color: "text-blue-300 border-blue-400/40",
              items: [
                "Landing page de alta conversión con VSL integrado.",
                "Guion VSL estratégico listo para grabar — sin producción profesional.",
                "Comunidad Skool completa: canales, onboarding y retos.",
                "(Solo Paquete 2)",
                "Segunda landing para mentoría 1:1 con agenda integrada.",
                "(Solo Paquete 2)",
                "Píxeles Meta y analítica instalados en todo el ecosistema.",
              ],
            },
            {
              title: "Automatización y embudos",
              color: "text-teal-300 border-teal-400/40",
              items: [
                "Bot de bienvenida por WhatsApp / Instagram DM.",
                "Flujo automático de ingreso a la comunidad.",
                "Secuencia de nutrición automatizada de 5 mensajes.",
                "(Solo Paquete 2)",
                "Agenda automática para mentoría 1:1.",
                "(Solo Paquete 2)",
                "Arquitectura de embudos según perfil del prospecto.",
                "2 sesiones estratégicas mensuales con datos reales.",
                "(Solo Paquete 2)",
              ],
            },
            {
              title: "Gestión de pauta",
              color: "text-emerald-300 border-emerald-400/40",
              items: [
                "Configuración de cuenta publicitaria Meta Ads lista para activar.",
                "3 creativos estáticos (Paquete 1) · 5 creativos con video (Paquete 2).",
                "Segmentación para traders Forex & Crypto en LATAM.",
                "Optimización semanal de campañas según datos reales.",
                "(Solo Paquete 2)",
                "Soporte por WhatsApp en días hábiles durante los 2 meses.",
                "Inversión publicitaria sugerida aparte: $200–$300 USD/mes.",
              ],
            },
          ].map((col) => (
            <article key={col.title} className={`propuesta-card p-5 sm:p-6 ${col.color.split(" ")[0]}`}>
              <h3 className={`mb-4 border-b pb-3 text-lg font-bold tracking-wide ${col.color}`}>{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                {col.items.map((item) =>
                  item === "(Solo Paquete 2)" ? (
                    <li key={`${col.title}-${item}`} className="list-none pl-1 text-xs font-semibold text-zinc-500">
                      {item}
                    </li>
                  ) : (
                    <li key={`${col.title}-${item}`} className="flex gap-2">
                      <span className="shrink-0 text-teal-400">•</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </article>
          ))}
        </div>

        <div className="propuesta-bar-blue mt-6 px-5 py-3 text-center text-lg font-extrabold text-white sm:text-xl">
          Paquete 1 — Fluxa Launch | <CountUp value={897} suffix=" USD" />
          <span className="mx-2 text-zinc-500">·</span>
          Paquete 2 — Fluxa Pro | <CountUp value={1497} suffix=" USD" />
        </div>
        <SlideFooter cliente={cliente} fecha={fecha} />
      </PropuestaSection>

      {/* 04 fases */}
      <PropuestaSection>
        <SectionHeader headerLine={headerLine} />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          {sec(4)}. Plan de ejecución — 2 meses
        </p>
        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          El proyecto se divide en 4 fases para construir, lanzar, activar la comunidad y dejar el sistema listo para
          escalar.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {fases.map((phase) => (
            <article key={phase.num} className="propuesta-card border-l-4 border-l-teal-500/80 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-lg font-extrabold text-white">
                  {phase.num}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal-300">{phase.when}</p>
                  <h3 className="mt-1 text-sm font-bold uppercase leading-snug text-white sm:text-base">{phase.title}</h3>
                </div>
              </div>
              <StaggerItems items={phase.items} className="mt-4" />
              <p className="mt-4 text-sm font-semibold text-teal-300">{phase.result}</p>
            </article>
          ))}
        </div>
        <SlideFooter cliente={cliente} fecha={fecha} />
      </PropuestaSection>

      {/* 05 PAGOS */}
      <PropuestaSection>
        <SectionHeader headerLine={headerLine} />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          {sec(5)}. Forma de pago y condiciones
        </p>
        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          Una inversión clara, activos propios para {clienteCorto} y soporte incluido.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="propuesta-card border-blue-400/60 p-6">
            <h3 className="text-lg font-extrabold text-white">Paquete 1 — Fluxa Launch</h3>
            <p className="mt-1 text-3xl font-extrabold text-blue-300">
              <CountUp value={897} suffix=" USD" />
            </p>
            <p className="mt-2 text-sm text-zinc-400">Pago único al firmar — arranca inmediatamente.</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                <p className="text-sm text-zinc-300">Cuota 1 — Al firmar</p>
                <p className="mt-1 text-3xl font-extrabold text-blue-300">
                  <CountUp value={450} suffix=" USD" />
                </p>
                <p className="text-sm text-zinc-400">Arranca inmediato</p>
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                <p className="text-sm text-zinc-300">Cuota 2 — Día 14</p>
                <p className="mt-1 text-3xl font-extrabold text-blue-300">
                  <CountUp value={447} suffix=" USD" />
                </p>
                <p className="text-sm text-zinc-400">Activa fases 3 y 4</p>
              </div>
            </div>
          </article>

          <article className="propuesta-card border-teal-400/60 p-6">
            <h3 className="text-lg font-extrabold text-white">Paquete 2 — Fluxa Pro</h3>
            <p className="mt-1 text-sm font-bold text-teal-400">⭐ Recomendado</p>
            <p className="mt-2 text-3xl font-extrabold text-teal-300">
              <CountUp value={1497} suffix=" USD" />
            </p>
            <p className="mt-2 text-sm text-zinc-400">Pago único al firmar — acceso total desde el día 1.</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                <p className="text-sm text-zinc-300">Cuota 1 — Al firmar</p>
                <p className="mt-1 text-3xl font-extrabold text-teal-300">
                  <CountUp value={750} suffix=" USD" />
                </p>
                <p className="text-sm text-zinc-400">Arranca inmediato</p>
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/65 p-4">
                <p className="text-sm text-zinc-300">Cuota 2 — Día 14</p>
                <p className="mt-1 text-3xl font-extrabold text-teal-300">
                  <CountUp value={747} suffix=" USD" />
                </p>
                <p className="text-sm text-zinc-400">Activa Skool y gestión</p>
              </div>
            </div>
          </article>
        </div>

        <ul className="propuesta-card mt-6 list-none space-y-2 p-5 text-sm text-zinc-300 sm:p-6 sm:text-base">
          <li>Duración del proyecto: 2 meses desde la firma del contrato.</li>
          <li>30 días de soporte post-entrega incluidos en el Paquete 2 para ajustes menores.</li>
          <li>La landing y todos los activos quedan publicados en el dominio propio de {clienteCorto}.</li>
          <li>
            Los activos digitales son propiedad de {clienteCorto} — sin dependencia de Fluxa Method tras la entrega.
          </li>
          <li>La pauta publicitaria y la suscripción a Skool se pagan directamente por {clienteCorto}.</li>
        </ul>

        <p className="mt-6 text-center text-lg font-bold text-zinc-200 sm:text-xl">
          {clienteCorto}, ya tienes el resultado. Fluxa Method pone el sistema.
        </p>
        <SlideFooter cliente={cliente} fecha={fecha} />
      </PropuestaSection>

      {/* RESUMEN */}
      <PropuestaSection>
        <SectionHeader headerLine={headerLine} />
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Resumen ejecutivo</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="propuesta-card p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-300">Hoy</h3>
            <p className="mt-2 text-sm font-semibold text-zinc-200">
              Un trader rentable sin sistema que monetice su conocimiento.
            </p>
            <StaggerItems
              items={[
                "Sin landing que presente la oferta.",
                "Sin comunidad estructurada.",
                "Sin automatización — todo es manual.",
                "Sin pauta ni creativos activos.",
                "Sin arquitectura de ingresos definida.",
              ]}
            />
          </article>
          <article className="propuesta-card p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-300">En 60 días</h3>
            <p className="mt-2 text-sm font-semibold text-zinc-200">
              Un ecosistema que convierte su resultado en ingresos recurrentes.
            </p>
            <StaggerItems
              items={[
                "Landing con VSL que convierte tráfico frío.",
                "Comunidad Skool activa con miembros pagando.",
                "Automatización completa de bienvenida y nutrición.",
                "Pauta Meta Ads con creativos optimizados.",
                "3 fuentes de ingreso: membresía, mentoría, curso.",
              ]}
            />
          </article>
          <article className="propuesta-card border-teal-500/40 p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-200">Inversión</h3>
            <p className="mt-2 text-sm font-semibold text-zinc-200">Dos opciones, un solo objetivo: construir el negocio.</p>
            <StaggerItems
              items={[
                "Paquete 1 — Fluxa Launch",
                "Paquete 2 — Fluxa Pro ⭐",
                "2 meses · 4 fases de ejecución",
                `Activos 100% propiedad de ${clienteCorto}`,
                "Pago único o 2 cuotas",
                "$897 / $1,497",
              ]}
            />
          </article>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-400 sm:text-base">
          Propuesta diseñada por Fluxa Method para convertir el conocimiento y resultado de {clienteCorto} en una
          academia de trading que crece con sistema, no con esfuerzo manual.
        </p>
        <p className="mt-4 text-center text-[11px] font-medium tracking-wide text-zinc-500 sm:text-xs">
          Fluxa Method | fluxamethod.com | Cúcuta, Colombia
        </p>
        <p className="mt-1 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
          {fecha}
        </p>
      </PropuestaSection>

      {/* 06 DESCUBRIMIENTO */}
      <PropuestaSection>
        <SectionHeader headerLine={headerLine} />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          {sec(6)}. Tu próxima etapa — ¿qué construirías?
        </p>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
          Tenemos programadores, automatizadores y arquitectos digitales. Antes de proponer tecnología, queremos
          escucharte.
        </h2>
        <p className="mt-3 text-sm text-zinc-300 sm:text-base">
          Dependiendo de lo que {clienteCorto} quiera construir para su comunidad, el siguiente paso puede ser muy
          distinto. ¿Un bot de señales? ¿Una app? ¿Una plataforma propia? Eso lo definimos juntos — sin costo. El Paquete
          3 se diseña a la medida de tu visión.
        </p>

        <div className="propuesta-card mt-6 border-l-4 border-l-teal-500/70 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-300">Capacidad del equipo</p>
          <p className="mt-2 text-base font-semibold text-white sm:text-lg">
            &quot;Podemos construir lo que imagines — pero primero necesitamos saber qué imaginas.&quot;
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Bots · Apps móviles · Plataformas web a medida · Automatizaciones · CRM · Integraciones
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISCOVERY_CARDS.map((card) => (
            <article key={card.title} className="propuesta-card p-4 sm:p-5">
              <p className="text-2xl" aria-hidden>
                {card.emoji}
              </p>
              <h3 className="mt-2 text-base font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{card.text}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-600 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-semibold text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="propuesta-card mt-6 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm leading-relaxed text-zinc-300">
            Esta conversación no tiene costo — es parte del proceso. Queremos entender tu visión antes de proponer
            tecnología. El Paquete 3 lo diseñamos juntos, a la medida exacta de lo que quieres construir.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={`shrink-0 px-5 py-3 text-sm ${CTA_BTN}`}>
            Hablemos de tu visión →
          </a>
        </div>

        <p className="mt-8 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
          Fluxa Method | fluxamethod.com | @fluxamethod | Cúcuta, Colombia
          <br />
          {fecha}
        </p>
      </PropuestaSection>
    </main>
  );
}
