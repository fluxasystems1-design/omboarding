import Link from "next/link";
import { GradientCtaPulse, ScrollReveal, FloatFrame } from "./ClientWidgets";
import { HeroProductScroll } from "./HeroProductScroll";

const P = "#A855F7";
const B = "#0066FF";
const G = "#22C55E";
const M = "#FF0080";
const C = "#00D9FF";
const DARK = "#0F0F1E";
const CARD = "#1A1A2E";
const W = "#FFFFFF";
const GRAY = "#B0B0B0";
const YELLOW = "#FFD600";

export default function FuncionaCreadoresPage() {
  return (
    <div className="min-h-screen overflow-x-hidden antialiased" style={{ backgroundColor: DARK, color: W }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-floaty { animation: floaty 3s ease-in-out infinite; }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 24px rgba(168,85,247,0.45), 0 0 0 0 rgba(168,85,247,0.2); }
            50% { box-shadow: 0 0 40px rgba(168,85,247,0.85), 0 0 24px rgba(255,0,128,0.25); }
          }
          .cta-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
          @keyframes heroEnter {
            from { opacity: 0; transform: translateY(22px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-enter { animation: heroEnter 0.6s ease-out both; }
          .hero-enter-slow { animation: heroEnter 0.85s ease-out 0.12s both; }
          @keyframes bgShift {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.55; }
          }
          .hero-bg-pulse { animation: bgShift 5s ease-in-out infinite; }
          @keyframes quoteGrad {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .quote-grad-anim {
            background: linear-gradient(120deg, ${P}, ${M}, ${B}, ${P});
            background-size: 320% 320%;
            animation: quoteGrad 5s ease infinite;
          }
          @keyframes dashMove {
            to { background-position: 200% 0; }
          }
          .timeline-seg {
            height: 4px;
            flex: 1;
            min-width: 12px;
            border-radius: 9999px;
            background: linear-gradient(90deg, ${P}, ${B}, ${C});
            background-size: 200% 100%;
            animation: dashMove 2.5s linear infinite;
          }
          .reveal-scale { will-change: transform, opacity; }
          .text-grad-hero {
            background: linear-gradient(105deg, ${P}, ${C});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .text-grad-title {
            background: linear-gradient(90deg, ${P}, ${B});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .text-grad-mag {
            background: linear-gradient(90deg, ${M}, ${P});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .text-grad-val {
            background: linear-gradient(90deg, ${M}, ${P});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `,
        }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#A855F7]/40 bg-[#0F0F1E]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="text-lg font-extrabold tracking-wide sm:text-xl" style={{ color: P }}>
            FuncionA+
          </Link>
          <nav className="order-3 flex w-full flex-nowrap items-center justify-center gap-4 overflow-x-auto text-sm sm:order-none sm:w-auto sm:justify-end md:gap-8">
            <Link href="/" className="shrink-0 font-medium text-[#B0B0B0] transition hover:text-[#22C55E]">
              Home
            </Link>
            <Link href="/dr-leonardo-bello" className="shrink-0 font-medium text-[#B0B0B0] transition hover:text-[#22C55E]">
              Sobre nosotros
            </Link>
            <Link href="#final-cta" className="shrink-0 font-medium text-[#B0B0B0] transition hover:text-[#22C55E]">
              Contacto
            </Link>
          </nav>
          <div className="shrink-0">
            <GradientCtaPulse className="[&_button]:!px-4 [&_button]:!py-2 [&_button]:!text-sm sm:[&_button]:!px-6 sm:[&_button]:!py-2.5">
              Aplicar ahora
            </GradientCtaPulse>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-8 sm:py-12">
        <div
          className="pointer-events-none absolute inset-0 hero-bg-pulse bg-gradient-to-br from-[#1A1A2E] via-[#0F0F1E] to-[#0F0F1E]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#A855F7]/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#0066FF]/15 blur-3xl" aria-hidden />

        <div className="relative z-[1] mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="hero-enter w-full lg:w-[58%] lg:max-w-none">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
              style={{ borderColor: P, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
            >
              <span className="text-base" aria-hidden>
                ✨
              </span>
              Selección privada — Solo 10 perfiles
            </p>
            <h1 className="hero-enter mb-4 text-3xl font-extrabold leading-tight tracking-wide text-grad-hero sm:text-4xl lg:text-[48px] lg:leading-[1.1]">
              Sé parte de la primera generación de embajadores Funciona+
            </h1>
            <div className="hero-enter-slow mb-6 space-y-4 text-base leading-relaxed" style={{ color: GRAY }}>
              <p>
                Estamos construyendo la primera selección privada de embajadores Funciona+. Una nueva generación de contenido enfocada en: bienestar,
                salud funcional, neurología moderna, y conexión humana real. La idea de este proyecto NO es crear publicidad tradicional ni contenido
                forzado.
              </p>
              <p>
                Queremos construir contenido: humano, elegante, emocional, auténtico, wellness/lifestyle, y alineado con la visión de la marca.
                Actualmente estamos seleccionando únicamente 10 perfiles estratégicos para formar parte de esta primera fase.
              </p>
            </div>
            <div className="hero-enter-slow flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
              <GradientCtaPulse className="flex-1 sm:flex-none">
                <span className="whitespace-nowrap">Quiero formar parte</span>
              </GradientCtaPulse>
              <Link
                href="#kit"
                className="inline-flex flex-1 items-center justify-center rounded-lg border-2 px-6 py-3.5 text-center text-base font-bold transition hover:bg-[#00D9FF]/10 sm:flex-none"
                style={{ borderColor: C, color: C }}
              >
                Ver más info
              </Link>
            </div>
          </div>

          <div className="hero-enter-slow w-full shrink-0 lg:w-[42%]">
            <HeroProductScroll />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 rounded-2xl border border-white/5 bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1E] px-6 py-10 sm:mx-auto sm:max-w-6xl sm:px-12 sm:py-12">
          <div className="flex gap-6 sm:gap-8">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#A855F7] to-[#00D9FF]" aria-hidden />
            <div className="min-w-0 flex-1">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-[40px] text-grad-title [text-shadow:0_0_24px_rgba(168,85,247,0.35)]">
              El contenido que más conecta es el más real.
            </h2>
            <div className="mb-6 space-y-4 text-base leading-[1.7]" style={{ color: GRAY }}>
              <p>En Funciona+ creemos que el contenido que más conecta NO es el más producido.</p>
              <p>Es el más real.</p>
              <p>
                Por eso queremos trabajar con perfiles capaces de transmitir: bienestar, hábitos saludables, claridad mental, energía, descanso, y
                experiencias humanas reales. No buscamos anuncios.
              </p>
              <p className="font-semibold text-white">Buscamos conexión.</p>
            </div>
            <div
              className="mb-8 flex flex-col items-start gap-3 rounded-xl border-2 px-6 py-6 sm:flex-row sm:items-center sm:gap-4"
              style={{ borderColor: G, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
            >
              <span className="text-3xl" aria-hidden>
                🎯
              </span>
              <p className="text-2xl font-extrabold sm:text-[28px]" style={{ color: G }}>
                Es el más real.
              </p>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl" aria-hidden>
                  🧠
                </span>
                <p className="mt-2 text-sm font-bold" style={{ color: G }}>
                  Bienestar y salud
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl" aria-hidden>
                  ⚡
                </span>
                <p className="mt-2 text-sm font-bold" style={{ color: B }}>
                  Energía y claridad
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl" aria-hidden>
                  ❤️
                </span>
                <p className="mt-2 text-sm font-bold" style={{ color: M }}>
                  Conexión real
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 3 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 rounded-2xl border border-white/10 bg-[#1A1A2E]/80 px-4 py-8 backdrop-blur-md sm:mx-auto sm:max-w-6xl sm:px-8">
          <h2 className="mb-6 text-center text-2xl font-extrabold sm:text-3xl text-grad-title">¿Por qué fuiste seleccionado?</h2>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex shrink-0 justify-center md:w-[30%] md:justify-start">
              <div className="rounded-full bg-gradient-to-br from-[#A855F7] to-[#FF0080] p-[3px] shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <img
                  src="/imagenes/1.png"
                  alt="Dr. Leonardo Bello, especialista en neurología funcional"
                  width={150}
                  height={150}
                  loading="lazy"
                  className="h-[150px] w-[150px] rounded-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 md:w-[70%]">
              <p className="text-2xl font-bold text-white">Dr. Leonardo Bello</p>
              <p className="mb-4 text-sm font-semibold" style={{ color: G }}>
                Especialista en Neurología Funcional
              </p>
              <p className="mb-6 text-[15px] leading-relaxed" style={{ color: GRAY }}>
                Cada perfil fue seleccionado estratégicamente según: su comunicación, su autenticidad, su estética visual, su conexión con la audiencia, y
                su alineación con la visión de Funciona+. No buscamos únicamente alcance. Valoramos mucho más: la autenticidad, la conexión humana, la
                comunicación, y la capacidad de transmitir bienestar de forma real.
              </p>
              <ul className="flex flex-col gap-6">
                {[
                  { t: "Su comunicación", c: G },
                  { t: "Su autenticidad", c: B },
                  { t: "Su estética visual", c: P },
                  { t: "Su conexión con audiencia", c: M },
                  { t: "Su alineación con Funciona+", c: C },
                ].map((item) => (
                  <li key={item.t} className="flex items-center gap-3 text-[15px] font-medium" style={{ color: GRAY }}>
                    <span className="text-xl font-black" style={{ color: item.c }}>
                      ✓
                    </span>
                    {item.t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 4 — Kit */}
      <ScrollReveal>
        <section id="kit" className="mx-4 mb-6 sm:mx-auto sm:max-w-6xl">
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#A855F7] to-[#FF0080] shadow-[0_0_40px_rgba(168,85,247,0.4)]">
            <div className="rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1E] px-6 py-8 sm:p-10">
              <h2 className="mb-2 text-2xl font-extrabold text-white sm:text-3xl">¿Qué recibirá el creador?</h2>
              <p className="mb-8 flex flex-wrap items-center gap-2 text-xl font-extrabold text-white sm:text-[32px]">
                <span aria-hidden>🎁</span> Kit Funciona+ completo
              </p>
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { emoji: "💪", title: "Creatina Funciona+", sub: "Energía mental y física", e: M },
                  { emoji: "💤", title: "Magnesio Glicinato", sub: "Descanso y claridad", e: G },
                  { emoji: "🧠", title: "Omega 3", sub: "Memoria y concentración", e: B },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-[#A855F7]/60 bg-[rgba(26,26,46,0.85)] p-5 transition duration-300 hover:scale-105 hover:border-[#FF0080]"
                  >
                    <span className="text-4xl" aria-hidden>
                      {s.emoji}
                    </span>
                    <p className="mt-3 text-lg font-bold text-white">{s.title}</p>
                    <p className="mt-1 text-sm" style={{ color: GRAY }}>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mb-8 rounded-xl border-2 px-6 py-6"
                style={{ borderColor: P, backgroundColor: "rgba(168, 85, 247, 0.15)" }}
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Bonos</p>
                <ul className="space-y-2 text-sm leading-relaxed text-white/95 sm:text-base">
                  <li>📚 2 libros del Dr. Leonardo Bello (bestseller + guía práctica)</li>
                  <li>⭐ Acceso prioritario a lanzamientos y campañas futuras</li>
                  <li>👥 Invitación a comunidad privada de embajadores</li>
                  <li>💬 Soporte directo del equipo Funciona+ durante todo el proceso</li>
                </ul>
              </div>
              <p className="text-center text-4xl font-black text-grad-val">+$700.000 COP</p>
              <p className="mt-2 text-center text-lg font-bold" style={{ color: G }}>
                completamente gratis
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 5 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 sm:mx-auto sm:max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-extrabold sm:text-4xl text-grad-title">Entregables — Primera fase</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              {
                n: "1",
                icon: "🎬",
                title: "Tu historia con Funciona+",
                obj: "Generar conexión y humanizar la marca.",
                fmt: "Storytelling, experiencia, rutina y lifestyle.",
              },
              {
                n: "2",
                icon: "▶️",
                title: "El hook que convierte",
                obj: "Contenido para campañas publicitarias.",
                fmt: "Hook + experiencia + sensación + CTA.",
              },
              {
                n: "3",
                icon: "📖",
                title: "Day-in-your-life",
                obj: "Mostrar integración real del suplemento.",
                fmt: "Rutina, unboxing, experiencia y CTA.",
              },
              {
                n: "4",
                icon: "📷",
                title: "Lifestyle puro",
                obj: "Contenido para landings y funnels.",
                fmt: "Naturales, humanas y wellness premium.",
              },
            ].map((row) => (
              <article
                key={row.n}
                className="relative overflow-hidden rounded-xl border-2 border-[#A855F7] bg-[#1A1A2E] p-6 transition duration-300 hover:scale-105 hover:border-[#FF0080] hover:shadow-[0_0_28px_rgba(255,0,128,0.35)]"
              >
                <span className="pointer-events-none absolute right-4 top-2 text-7xl font-black leading-none opacity-30" style={{ color: P }}>
                  {row.n}
                </span>
                <span className="relative z-[1] text-4xl" aria-hidden>
                  {row.icon}
                </span>
                <h3 className="relative z-[1] mt-3 text-xl font-bold text-white">{row.title}</h3>
                <p className="relative z-[1] mt-2 text-sm font-semibold" style={{ color: YELLOW }}>
                  {row.obj}
                </p>
                <p className="relative z-[1] mt-1 text-sm" style={{ color: GRAY }}>
                  {row.fmt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 6 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 grid max-w-6xl gap-3 sm:mx-auto md:grid-cols-2">
          <div className="rounded-xl border-l-4 py-6 pl-5 pr-4" style={{ borderColor: G, backgroundColor: "rgba(34, 197, 94, 0.1)" }}>
            <p className="mb-4 text-lg font-extrabold text-white">✓ Lo que queremos</p>
            <ul className="space-y-3 text-sm sm:text-base" style={{ color: GRAY }}>
              {["Tu experiencia real", "Emociones genuinas", "Luz natural, sin filtros", "Tu voz auténtica", "Composición limpia", "Vibes wellness premium"].map(
                (x) => (
                  <li key={x} className="flex gap-2">
                    <span className="font-black" style={{ color: G }}>
                      ✓
                    </span>
                    {x}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="rounded-xl border-l-4 py-6 pl-5 pr-4" style={{ borderColor: M, backgroundColor: "rgba(255, 0, 128, 0.1)" }}>
            <p className="mb-4 text-lg font-extrabold text-white">✗ Lo que no queremos</p>
            <ul className="space-y-3 text-sm sm:text-base" style={{ color: GRAY }}>
              {["Comerciales forzados", "Actitud de vendedor", "Overediting", "Guiones exagerados", "Promesas irreales", "Contenido demasiado producido"].map(
                (x) => (
                  <li key={x} className="flex gap-2">
                    <span className="font-black" style={{ color: M }}>
                      ✗
                    </span>
                    {x}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 7 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 rounded-2xl border border-white/10 bg-[#1A1A2E]/90 px-4 py-8 backdrop-blur-sm sm:mx-auto sm:max-w-6xl sm:px-8">
          <h2 className="mb-4 text-center text-3xl font-extrabold text-white sm:text-4xl">Esto es solo el inicio</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed" style={{ color: GRAY }}>
            Los perfiles con mejor conexión y rendimiento podrán participar en: campañas futuras, lanzamientos, publicidad oficial de la marca, contenido
            para escalamiento internacional, y futuras embajadurías Funciona+.
          </p>

          <div className="hidden items-center md:flex">
            {[
              { num: "01", icon: "🎬", c: M, t: "Contenido inicial" },
              { num: "02", icon: "📊", c: B, t: "Análisis de rendimiento" },
              { num: "03", icon: "📢", c: G, t: "Campañas futuras" },
              { num: "04", icon: "🏆", c: P, t: "Publicidad oficial" },
              { num: "05", icon: "👑", c: M, t: "Embajadurías" },
            ].map((ph, i, arr) => (
              <div key={ph.num} className="flex min-w-0 flex-1 items-center">
                <div className="flex w-full flex-col items-center px-1 text-center">
                  <div
                    className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[#0F0F1E] text-lg font-black text-white"
                    style={{ borderColor: ph.c }}
                  >
                    {ph.num}
                  </div>
                  <span className="text-2xl">{ph.icon}</span>
                  <p className="mt-1 text-xs font-bold sm:text-sm" style={{ color: ph.c }}>
                    {ph.t}
                  </p>
                </div>
                {i < arr.length - 1 ? <div className="timeline-seg mx-1 h-1 max-w-[72px] flex-1" aria-hidden /> : null}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:hidden">
            {[
              { num: "01", icon: "🎬", c: M, t: "Contenido inicial" },
              { num: "02", icon: "📊", c: B, t: "Análisis de rendimiento" },
              { num: "03", icon: "📢", c: G, t: "Campañas futuras" },
              { num: "04", icon: "🏆", c: P, t: "Publicidad oficial" },
              { num: "05", icon: "👑", c: M, t: "Embajadurías" },
            ].map((ph, i, arr) => (
              <div key={ph.num} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[#0F0F1E] text-sm font-black text-white"
                    style={{ borderColor: ph.c }}
                  >
                    {ph.num}
                  </div>
                  {i < arr.length - 1 ? (
                    <div
                      className="mt-1 w-0.5 flex-1 min-h-[20px] bg-gradient-to-b from-[#A855F7] via-[#0066FF] to-[#00D9FF] opacity-80"
                      style={{ minHeight: "24px" }}
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div>
                  <span className="text-xl">{ph.icon}</span>
                  <p className="text-sm font-bold" style={{ color: ph.c }}>
                    {ph.t}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 8 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 sm:mx-auto sm:max-w-6xl">
          <h2 className="mb-6 text-center text-2xl font-extrabold sm:text-3xl text-grad-title">Lineamientos importantes</h2>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
            <div className="md:w-2/5">
              <img
                src="/imagenes/2.png"
                alt="Dr. Leonardo Bello explicando lineamientos Funciona+"
                width={600}
                height={800}
                loading="lazy"
                className="h-full max-h-80 w-full rounded-xl border-2 border-[#A855F7]/50 object-cover object-top shadow-[0_0_24px_rgba(168,85,247,0.35)] transition hover:brightness-110 md:max-h-none"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 md:w-3/5">
              <article
                className="rounded-xl border-2 p-6 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition hover:brightness-110"
                style={{ borderColor: P, backgroundColor: CARD }}
              >
                <span className="text-4xl" aria-hidden>
                  📦
                </span>
                <h3 className="mt-3 text-xl font-bold" style={{ color: P }}>
                  Entrega
                </h3>
                <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: GRAY }}>
                  La entrega del contenido deberá realizarse entre: 7 y 10 días después de recibir el kit.
                </p>
              </article>
              <article
                className="rounded-xl border-2 p-6 shadow-[0_0_30px_rgba(0,102,255,0.25)] transition hover:brightness-110"
                style={{ borderColor: B, backgroundColor: CARD }}
              >
                <span className="text-4xl" aria-hidden>
                  ✏️
                </span>
                <h3 className="mt-3 text-xl font-bold" style={{ color: B }}>
                  Antes de grabar
                </h3>
                <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: GRAY }}>
                  El equipo Funciona+ compartirá: referencias visuales, hooks, ideas de contenido, lineamientos visuales, y dirección estratégica.
                </p>
              </article>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 9 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 sm:mx-auto sm:max-w-6xl">
          <div
            className="rounded-xl border border-white/10 px-6 py-8"
            style={{ backgroundColor: CARD, borderTopWidth: "3px", borderTopColor: YELLOW }}
          >
            <p className="mb-3 text-2xl" aria-hidden>
              📋
            </p>
            <h2 className="mb-4 text-xl font-extrabold text-white">Términos generales</h2>
            <p className="text-sm leading-relaxed sm:text-base" style={{ color: GRAY }}>
              El contenido podrá ser utilizado por Funciona+ para campañas y material publicitario. El contenido debe ser original y grabado por el creador
              seleccionado. Funciona+ podrá reutilizar, editar o adaptar el contenido para fines comerciales. La participación en esta fase no garantiza
              continuidad automática.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 10 */}
      <ScrollReveal>
        <section className="mx-4 mb-6 sm:mx-auto sm:max-w-6xl">
          <div className="quote-grad-anim rounded-2xl border-4 p-8 shadow-[0_0_50px_rgba(168,85,247,0.6)] sm:p-12" style={{ borderColor: C }}>
            <blockquote className="text-center">
              <p
                className="text-2xl font-extrabold leading-snug text-white sm:text-4xl sm:leading-tight"
                style={{ textShadow: "0 0 20px rgba(0, 217, 255, 0.45)", letterSpacing: "0.04em" }}
              >
                La persona no compra suplementos. Compra descanso, claridad, energía, bienestar y sentirse mejor consigo misma.
              </p>
              <footer className="mt-6 text-base font-semibold sm:text-lg" style={{ color: C }}>
                — Dr. Leonardo Bello
              </footer>
            </blockquote>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 11 */}
      <ScrollReveal>
        <section id="final-cta" className="mx-4 mb-10 scroll-mt-24 sm:mx-auto sm:max-w-6xl">
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0F0F1E] p-4 sm:flex-row sm:items-center sm:p-6">
            <div className="w-full shrink-0 sm:w-[40%]">
              <FloatFrame>
                <div className="rounded-xl bg-gradient-to-br from-[#A855F7] to-[#0066FF] p-[2px] shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                  <img
                    src="/imagenes/15.png"
                    alt="Dr. Leonardo Bello invita a embajadores Funciona+"
                    width={800}
                    height={900}
                    loading="lazy"
                    className="w-full rounded-[10px] object-cover transition hover:brightness-110"
                  />
                </div>
              </FloatFrame>
            </div>
            <div className="flex w-full flex-1 flex-col gap-4 sm:w-[60%]">
              <h2 className="flex flex-wrap items-center gap-2 text-2xl font-extrabold sm:text-3xl text-grad-mag">
                <span aria-hidden>⚡</span> ¿Eres el creador que buscamos?
              </h2>
              <p className="text-base leading-[1.7]" style={{ color: GRAY }}>
                Si resonaste con esto y crees que tu audiencia merece contenido auténtico sobre bienestar, aplica ahora. Solo quedan plazas para esta
                primera generación de embajadores Funciona+.
              </p>
              <div className="flex max-w-lg flex-col gap-4 sm:flex-row">
                <GradientCtaPulse className="flex-1">
                  <span className="text-lg">Quiero formar parte</span>
                </GradientCtaPulse>
                <Link
                  href="/dr-leonardo-bello"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border-2 px-8 py-4 text-center text-lg font-bold transition hover:bg-[#00D9FF]/15"
                  style={{ borderColor: C, color: C }}
                >
                  Ver más sobre Funciona+
                </Link>
              </div>
              <p className="pt-2 text-xs sm:text-sm" style={{ color: "#64748B" }}>
                Seleccionaremos creadores durante las próximas 2 semanas. Responderemos a todas las aplicaciones.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
