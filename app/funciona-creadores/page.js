import Link from "next/link";
import { ProductImageSlider } from "@/components/ui/image-auto-slider";
import { GradientCtaPulse, ScrollReveal, FloatFrame } from "./ClientWidgets";

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

const CONTENIDO_FASE1 = [
  {
    ent: "1 Reel Orgánico",
    obj: "Generar conexión y humanizar la marca.",
    fmt: "Storytelling, experiencia, rutina y lifestyle.",
  },
  {
    ent: "1 Video UGC Ads",
    obj: "Contenido para campañas publicitarias.",
    fmt: "Hook + experiencia + sensación + CTA.",
  },
  {
    ent: "3-5 Historias",
    obj: "Mostrar integración real del suplemento.",
    fmt: "Rutina, unboxing, experiencia y CTA.",
  },
  {
    ent: "3-5 Fotos Lifestyle",
    obj: "Contenido para landings y funnels.",
    fmt: "Naturales, humanas y wellness premium.",
  },
];

export default function FuncionaCreadoresPage() {
  return (
    <div className="min-h-screen overflow-x-hidden antialiased selection:bg-[#A855F7]/25 selection:text-white" style={{ backgroundColor: DARK, color: W }}>
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
          .text-grad-kit-subtitle {
            background: linear-gradient(90deg, ${P}, ${M});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          @keyframes kitBonosPulse {
            0%, 100% { box-shadow: 0 0 0 1px rgba(168,85,247,0.35), 0 0 24px rgba(168,85,247,0.2); }
            50% { box-shadow: 0 0 0 1px rgba(168,85,247,0.55), 0 0 40px rgba(168,85,247,0.45); }
          }
          .kit-bonos-pulse { animation: kitBonosPulse 3s ease-in-out infinite; }
          @keyframes kitValorGrad {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .kit-valor-grad-anim {
            background: linear-gradient(120deg, ${P}, ${M}, ${P}, ${M});
            background-size: 300% 300%;
            animation: kitValorGrad 4s ease infinite;
          }
          .kit-product-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          @media (hover: hover) and (pointer: fine) {
            .kit-product-card:hover {
              transform: scale(1.03);
              box-shadow: 0 14px 36px rgba(168, 85, 247, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);
            }
          }
        `,
        }}
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#A855F7]/30 bg-[#0F0F1E]/85 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5">
          <Link href="/" className="text-[22px] font-extrabold tracking-tight text-[#A855F7]">
            Funciona+
          </Link>
          <div className="shrink-0">
            <GradientCtaPulse>Aplicar ahora</GradientCtaPulse>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 hero-bg-pulse bg-gradient-to-br from-[#1A1A2E] via-[#0F0F1E] to-[#0F0F1E]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#A855F7]/18 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-[#0066FF]/12 blur-3xl" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(28rem,90vw)] w-[min(28rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF0080]/6 blur-[100px]"
          aria-hidden
        />

        <div className="relative z-[1] mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="hero-enter w-full lg:w-[55%] lg:max-w-none xl:w-[52%]">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A855F7] bg-[rgba(168,85,247,0.15)] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white">
                <span className="text-sm" aria-hidden>
                  ✨
                </span>
                Selección privada — Solo 10 perfiles
              </p>
              <h1 className="hero-enter mb-4 text-[28px] font-extrabold leading-[1.2] tracking-tight text-grad-hero md:text-4xl lg:text-5xl lg:leading-[1.2] xl:text-[52px]">
                Sé parte de la primera generación de embajadores Funciona+
              </h1>
              <p className="hero-enter-slow mb-3 text-base font-normal leading-snug" style={{ color: GRAY }}>
                No buscamos anuncios. Buscamos conexión real.
              </p>
              <p className="hero-enter-slow mb-6 text-[14px] font-light leading-[1.6] lg:hidden" style={{ color: GRAY }}>
                Seleccionando únicamente 10 perfiles estratégicos para formar parte de esta primera fase.
              </p>
              <div className="hero-enter-slow mb-6 hidden space-y-4 text-base font-normal leading-[1.7] lg:block" style={{ color: GRAY }}>
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

              <div className="hero-enter-slow mb-6 flex w-full justify-center md:mx-auto">
                <div className="w-fit max-w-full overflow-hidden rounded-xl border-2 border-[#A855F7] bg-transparent shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  <img
                    src="/imagenes/productos.png"
                    alt="Kit de suplementos Funciona+: creatina, glicinato de magnesio y omega 3"
                    width={1363}
                    height={1154}
                    loading="eager"
                    className="block h-auto max-h-[260px] w-auto max-w-full md:max-h-[280px]"
                  />
                </div>
              </div>

              <div className="hero-enter-slow flex w-full max-w-xl flex-col gap-3 lg:max-w-lg">
                <GradientCtaPulse className="w-full [&_a]:w-full [&_a]:rounded-lg [&_a]:px-8 [&_a]:py-4 [&_a]:text-base [&_a]:font-bold lg:[&_a]:w-auto">
                  <span className="whitespace-nowrap">Quiero formar parte</span>
                </GradientCtaPulse>
                <Link
                  href="#kit"
                  className="inline-flex w-full items-center justify-center rounded-lg border-2 border-[#00D9FF] bg-transparent px-8 py-3.5 text-center text-sm font-semibold text-[#00D9FF] transition hover:bg-[rgba(0,217,255,0.1)] lg:w-auto"
                >
                  Ver más info
                </Link>
              </div>
            </div>

            <div className="hero-enter-slow hidden w-full shrink-0 lg:flex lg:w-[45%] lg:items-center lg:justify-center">
              <div className="w-fit max-w-full overflow-hidden rounded-xl border-2 border-[#A855F7] bg-transparent shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                <img
                  src="/imagenes/productos.png"
                  alt="Kit de suplementos Funciona+: creatina, glicinato de magnesio y omega 3"
                  width={1363}
                  height={1154}
                  loading="eager"
                  className="block h-auto max-h-[min(70vh,520px)] w-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 — ¿Por qué estamos haciendo esto? */}
      <ScrollReveal>
        <section className="mx-4 mb-12 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#1A1A2E]/95 to-[#0F0F1E] px-5 py-8 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] sm:mx-auto sm:max-w-6xl sm:px-8 sm:py-10">
          <div className="flex gap-5 sm:gap-6">
            <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#A855F7] via-[#FF0080]/80 to-[#00D9FF]" aria-hidden />
            <div className="min-w-0 flex-1">
              <h2 className="mb-4 text-[26px] font-extrabold leading-tight text-grad-title md:text-3xl lg:text-[32px] [text-shadow:0_0_20px_rgba(168,85,247,0.2)]">
                ¿Por qué estamos haciendo esto?
              </h2>
              <div className="space-y-3 text-[15px] font-normal leading-relaxed md:text-base" style={{ color: GRAY }}>
                <p>
                  En Funciona+ creemos que el contenido que más conecta NO es el más producido. Es el más real.
                </p>
                <p className="hidden lg:block">
                  Por eso queremos trabajar con perfiles capaces de transmitir: bienestar, hábitos saludables, claridad mental, energía, descanso, y
                  experiencias humanas reales.
                </p>
              </div>
              <p className="mt-3 text-lg font-bold leading-snug lg:text-[18px]" style={{ color: G }}>
                No buscamos anuncios. Buscamos conexión.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-0.5 py-4 text-[15px] md:justify-start md:text-base">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[20px] leading-none" aria-hidden>
                    🧠
                  </span>
                  <span className="font-medium" style={{ color: G }}>
                    Bienestar y salud
                  </span>
                </span>
                <span className="px-2 text-[#64748B]" aria-hidden>
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[20px] leading-none" aria-hidden>
                    ⚡
                  </span>
                  <span className="font-medium" style={{ color: B }}>
                    Energía y claridad
                  </span>
                </span>
                <span className="px-2 text-[#64748B]" aria-hidden>
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[20px] leading-none" aria-hidden>
                    ❤️
                  </span>
                  <span className="font-medium" style={{ color: M }}>
                    Conexión real
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="mx-4 mb-12 overflow-hidden rounded-xl border border-[#A855F7]/25 shadow-[0_0_32px_rgba(168,85,247,0.15)] sm:mx-auto sm:max-w-6xl">
        <ProductImageSlider />
      </div>

      {/* Sección 3 */}
      <ScrollReveal>
        <section className="mx-4 mb-12 rounded-2xl border border-white/10 bg-[#1A1A2E]/90 px-4 py-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:mx-auto sm:max-w-6xl sm:px-8 sm:py-10">
          <h2 className="mb-5 text-center text-[26px] font-extrabold leading-tight text-grad-title sm:text-3xl md:text-[32px]">
            ¿Por qué fuiste seleccionado?
          </h2>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex shrink-0 justify-center md:w-[30%] md:justify-start">
              <div className="rounded-full bg-gradient-to-br from-[#A855F7] to-[#FF0080] p-[3px] shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <img
                  src="/imagenes/1.png"
                  alt="Dr. Leonardo Bello, especialista en neurología funcional"
                  width={150}
                  height={150}
                  loading="lazy"
                  className="h-[100px] w-[100px] rounded-full object-cover lg:h-[120px] lg:w-[120px]"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 md:w-[70%]">
              <p className="text-xl font-bold text-white lg:text-2xl">Dr. Leonardo Bello</p>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide lg:text-sm" style={{ color: G }}>
                Especialista en neurología funcional
              </p>
              <p className="mb-5 text-[15px] font-normal leading-relaxed lg:hidden" style={{ color: GRAY }}>
                No fue al azar. Fuiste seleccionado por lo que comunicas, cómo conectas y tu alineación con bienestar real.
              </p>
              <p className="mb-5 hidden text-[15px] font-normal leading-relaxed lg:block" style={{ color: GRAY }}>
                Cada perfil fue seleccionado estratégicamente según: su comunicación, su autenticidad, su estética visual, su conexión con la audiencia, y
                su alineación con la visión de Funciona+. No buscamos únicamente alcance. Valoramos mucho más: la autenticidad, la conexión humana, la
                comunicación, y la capacidad de transmitir bienestar de forma real.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { t: "Su comunicación", c: G },
                  { t: "Su autenticidad", c: B },
                  { t: "Su estética visual", c: P },
                  { t: "Su conexión con audiencia", c: M },
                  { t: "Su alineación con Funciona+", c: C },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3 text-[15px] font-medium leading-snug" style={{ color: GRAY }}>
                    <span className="mt-0.5 shrink-0 text-xl font-black leading-none" style={{ color: item.c }}>
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
      <section id="kit" className="mb-12 bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1E] py-8 sm:py-10">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:max-w-6xl">
          <ScrollReveal>
            <h2 className="text-[26px] font-extrabold leading-tight text-white md:text-3xl lg:text-[34px]">
              ¿Qué recibirá el creador?
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={100} className="mt-3">
            <p className="flex flex-wrap items-center gap-2 text-lg font-extrabold leading-snug sm:text-xl">
              <span className="text-2xl leading-none sm:text-[26px] text-grad-kit-subtitle" aria-hidden>
                🎁
              </span>
              <span className="text-grad-kit-subtitle">Kit Funciona+ completo</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={180} className="mt-8">
            <div
              className="rounded-2xl p-[3px] shadow-[0_0_40px_rgba(168,85,247,0.45)]"
              style={{
                borderRadius: 16,
                background: `linear-gradient(90deg, ${P}, ${M})`,
              }}
            >
              <div className="rounded-[13px] bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1E] px-5 py-8 md:px-8" style={{ borderRadius: 13 }}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
                  {[
                    {
                      img: "/imagenes/creatina.png",
                      title: "Creatina Funciona+",
                      sub: "Energía mental y física",
                      icon: "💪",
                      iconColor: M,
                      border: P,
                    },
                    {
                      img: "/imagenes/glicinatodemagensio.png",
                      title: "Glicinato de magnesio Funciona+",
                      sub: "Descanso y claridad",
                      icon: "💤",
                      iconColor: G,
                      border: G,
                    },
                    {
                      img: "/imagenes/omega3.png",
                      title: "Omega 3 Funciona+",
                      sub: "Memoria y concentración",
                      icon: "🧠",
                      iconColor: B,
                      border: B,
                    },
                  ].map((s) => (
                    <div
                      key={s.title}
                      className="kit-product-card mb-4 flex min-h-[160px] flex-row items-center gap-3 rounded-xl border-2 bg-[#1A1A2E] p-5 last:mb-0 lg:mb-0 lg:flex-col lg:items-stretch lg:gap-3"
                      style={{ borderColor: s.border }}
                    >
                      <div className="flex h-[180px] w-[45%] shrink-0 items-center justify-center rounded-lg bg-[#0F0F1E] p-2 lg:h-[180px] lg:w-full">
                        <img
                          src={s.img}
                          alt={s.title}
                          width={240}
                          height={240}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="flex min-w-0 w-[55%] flex-col justify-center lg:w-full">
                        <span className="text-[28px] leading-none" style={{ color: s.iconColor }} aria-hidden>
                          {s.icon}
                        </span>
                        <p className="mt-2 text-base font-bold leading-snug text-white">{s.title}</p>
                        <p className="mt-1 text-[13px] font-normal leading-relaxed" style={{ color: GRAY }}>
                          {s.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <ScrollReveal delayMs={160} className="mt-8">
                  <p className="mb-4 text-center text-base font-bold text-white sm:text-lg">
                    Libros del Dr. Leonardo Bello
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div className="flex min-h-[200px] items-center justify-center rounded-xl border-2 border-[#A855F7]/40 bg-[#0F0F1E] p-4 sm:min-h-[220px]">
                      <img
                        src="/imagenes/libro1.png"
                        alt="Libro: Para que no se te olvide"
                        width={480}
                        height={640}
                        loading="lazy"
                        className="max-h-[280px] w-full max-w-[220px] object-contain sm:max-h-[300px] sm:max-w-[240px]"
                      />
                    </div>
                    <div className="flex min-h-[200px] items-center justify-center rounded-xl border-2 border-[#A855F7]/40 bg-[#0F0F1E] p-4 sm:min-h-[220px]">
                      <img
                        src="/imagenes/libro2.png"
                        alt="Libro: Que tu vida no sea un dolor de cabeza"
                        width={480}
                        height={640}
                        loading="lazy"
                        className="max-h-[280px] w-full max-w-[220px] object-contain sm:max-h-[300px] sm:max-w-[240px]"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delayMs={200} className="mt-8">
                  <div
                    className="kit-bonos-pulse rounded-xl border-2 p-5 sm:p-6"
                    style={{
                      borderColor: P,
                      backgroundColor: "rgba(168, 85, 247, 0.15)",
                      borderRadius: 12,
                    }}
                  >
                    <p className="mb-4 text-lg font-bold" style={{ color: P }}>
                      Bonos
                    </p>
                    <ul className="flex flex-col gap-4">
                      {[
                        { icon: "⭐", c: YELLOW, text: "Acceso prioritario a lanzamientos y campañas futuras" },
                        { icon: "👥", c: B, text: "Invitación a comunidad privada de embajadores" },
                        { icon: "💬", c: M, text: "Soporte directo del equipo Funciona+ durante todo el proceso" },
                      ].map((row) => (
                        <li
                          key={row.text}
                          className="flex gap-3 border-l-2 py-0.5 pl-4"
                          style={{ borderColor: P }}
                        >
                          <span className="shrink-0 text-xl sm:text-2xl" style={{ color: row.c }} aria-hidden>
                            {row.icon}
                          </span>
                          <span className="text-[14px] leading-[1.6] sm:text-[15px]" style={{ color: GRAY }}>
                            {row.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delayMs={280} className="mt-8">
                  <div className="kit-valor-grad-anim rounded-xl px-5 py-7 text-center sm:px-8 sm:py-9" style={{ borderRadius: 12 }}>
                    <p
                      className="font-black leading-none text-white"
                      style={{
                        fontSize: "clamp(40px, 8vw, 56px)",
                        textShadow: "0 0 20px rgba(0, 217, 255, 0.5)",
                      }}
                    >
                      +$700.000{" "}
                      <span className="align-baseline text-[18px] font-bold sm:text-[20px]" style={{ color: C }}>
                        COP
                      </span>
                    </p>
                    <p className="pt-3 text-lg font-bold sm:text-[18px]" style={{ color: G, paddingTop: 12 }}>
                      Completamente gratis
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sección 5 */}
      <ScrollReveal>
        <section className="mx-4 mb-12 sm:mx-auto sm:max-w-6xl">
          <h2 className="mb-8 text-center text-[26px] font-extrabold leading-tight text-grad-title md:text-4xl">
            Contenido solicitado — Primera fase
          </h2>

          {/* Mobile: cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {CONTENIDO_FASE1.map((row) => (
              <div
                key={row.ent}
                className="cursor-default rounded-lg border border-[#A855F7] bg-[#1A1A2E] p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">Entregable</p>
                <p className="mb-3 mt-1 text-lg font-bold text-white">{row.ent}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">Objetivo</p>
                <p className="mb-3 mt-1 text-sm leading-relaxed text-[#B0B0B0]">{row.obj}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">Formato</p>
                <p className="mt-1 text-sm leading-relaxed text-[#B0B0B0]">{row.fmt}</p>
              </div>
            ))}
          </div>

          {/* Desktop / tablet: tabla */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full cursor-default border-collapse border border-[#A855F7] bg-[#1A1A2E] text-left text-[13px] leading-[1.6] text-[#B0B0B0] lg:text-sm">
              <thead>
                <tr className="bg-[#0B1F33]">
                  <th
                    className="w-[25%] border-b-2 border-[#A855F7] p-3 text-sm font-bold uppercase tracking-wide text-white lg:p-4"
                    scope="col"
                  >
                    Entregable
                  </th>
                  <th
                    className="w-[40%] border-b-2 border-[#A855F7] p-3 text-sm font-bold uppercase tracking-wide text-white lg:p-4"
                    scope="col"
                  >
                    Objetivo
                  </th>
                  <th
                    className="w-[35%] border-b-2 border-[#A855F7] p-3 text-sm font-bold uppercase tracking-wide text-white lg:p-4"
                    scope="col"
                  >
                    Formato
                  </th>
                </tr>
              </thead>
              <tbody>
                {CONTENIDO_FASE1.map((row, i) => (
                  <tr
                    key={row.ent}
                    className={`cursor-default border-b border-[#333333] transition-colors hover:bg-[rgba(168,85,247,0.2)] ${i % 2 === 0 ? "bg-[#1A1A2E]" : "bg-[rgba(26,26,46,0.5)]"}`}
                  >
                    <td className="p-3 align-top lg:p-4">{row.ent}</td>
                    <td className="p-3 align-top lg:p-4">{row.obj}</td>
                    <td className="p-3 align-top lg:p-4">{row.fmt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* Sección 6 */}
      <ScrollReveal>
        <section className="mx-4 mb-12 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#1A1A2E]/95 to-[#0F0F1E] px-4 py-8 shadow-[0_0_60px_-20px_rgba(168,85,247,0.2)] backdrop-blur-sm sm:mx-auto sm:max-w-6xl sm:px-8 sm:py-10">
          <h2 className="mb-4 text-center text-[26px] font-extrabold text-white md:text-3xl lg:text-4xl">Esto es solo el inicio</h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-[15px] font-normal leading-relaxed md:text-base" style={{ color: GRAY }}>
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

      {/* Sección 7 */}
      <ScrollReveal>
        <section className="mx-4 mb-12 sm:mx-auto sm:max-w-6xl">
          <h2 className="mb-5 text-center text-[26px] font-extrabold sm:text-3xl text-grad-title md:text-[32px]">Lineamientos importantes</h2>
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
                className="rounded-xl border-2 p-5 shadow-[0_0_30px_rgba(168,85,247,0.25)] transition hover:brightness-110"
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
                className="rounded-xl border-2 p-5 shadow-[0_0_30px_rgba(0,102,255,0.25)] transition hover:brightness-110"
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

      {/* Sección 8 */}
      <ScrollReveal>
        <section className="mx-4 mb-12 sm:mx-auto sm:max-w-6xl">
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

      {/* Sección 9 */}
      <ScrollReveal>
        <section className="mx-4 mb-12 sm:mx-auto sm:max-w-6xl">
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

      {/* Sección 10 */}
      <ScrollReveal>
        <section id="final-cta" className="mx-4 mb-12 scroll-mt-24 sm:mx-auto sm:max-w-6xl">
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0F0F1E] p-4 sm:flex-row sm:items-center sm:p-6">
            <div className="flex w-full shrink-0 justify-center sm:w-[40%] sm:justify-center">
              <FloatFrame>
                <div className="w-fit max-w-full rounded-xl bg-gradient-to-br from-[#A855F7] to-[#0066FF] p-[2px] shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                  <img
                    src="/imagenes/productos.png"
                    alt="Kit de suplementos Funciona+"
                    width={1363}
                    height={1154}
                    loading="lazy"
                    className="block h-auto max-h-[220px] w-auto max-w-full rounded-[10px] transition hover:brightness-110 sm:max-h-[280px] md:max-h-[320px]"
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
                <GradientCtaPulse className="flex-1 [&_a]:w-full [&_a]:rounded-lg [&_a]:px-8 [&_a]:py-4 [&_a]:text-base [&_a]:font-bold sm:[&_a]:w-auto">
                  <span className="text-lg">Quiero formar parte</span>
                </GradientCtaPulse>
                <a
                  href="https://www.instagram.com/doctor_bello?igsh=MXJzc2hjaGo0cGxtMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border-2 px-8 py-4 text-center text-lg font-bold transition hover:bg-[#00D9FF]/15"
                  style={{ borderColor: C, color: C }}
                >
                  Ver más sobre Funciona+
                </a>
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
