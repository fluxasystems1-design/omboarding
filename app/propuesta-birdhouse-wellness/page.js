"use client";

import { useEffect, useState } from "react";

const GALS_LOGO = "/imagenes/birdhouse-wellness/gals-logo-plate.png";
const BIRDHOUSE_LOGO = "/imagenes/birdhouse-wellness/birdhouse-logo-hi.png";
const HERO_IMAGE = "/imagenes/birdhouse-wellness/hero.jpg";
const WA_BASE = "https://wa.me/573116425337?text=";

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

function FloralDecorLayer() {
  return (
    <div className="bh-floral-ambient" aria-hidden>
      <OrganicFlower className="bh-organic bh-organic--lavender bh-organic--1" />
      <OrganicFlower className="bh-organic bh-organic--sage bh-organic--2" />
      <OrganicFlower className="bh-organic bh-organic--periwinkle bh-organic--3" />
      <OrganicFlower className="bh-organic bh-organic--lavender bh-organic--4" />
      <OrganicFlower className="bh-organic bh-organic--stone bh-organic--5" />
      <OrganicFlower className="bh-organic bh-organic--sage bh-organic--6" />
    </div>
  );
}

function waUrl(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "objetivo", label: "Objetivo" },
  { id: "antes", label: "Antes / Después" },
  { id: "capas", label: "Entregables" },
  { id: "alianza", label: "Ganar-ganar" },
  { id: "experiencia", label: "Experiencia" },
  { id: "cronograma", label: "Cronograma" },
  { id: "cierre", label: "Cierre" },
];

const BEFORE_AFTER = [
  {
    before: "Fotografía estática, sin narrativa emocional",
    after: "Birdhouse asociado a una experiencia real de transformación",
  },
  {
    before: "El contenido depende de lo que el hotel produce",
    after: "Equipo profesional documenta y edita todo, sin costo de producción para el hotel",
  },
  {
    before: "El alcance depende solo de la cuenta del hotel",
    after: "Cada creadora expone a Birdhouse ante su propia audiencia, sin pauta",
  },
  {
    before: '"Un lugar bonito" en fotos',
    after: '"El lugar donde pasó algo"',
  },
];

const LAYER_ONE = [
  "1 reel insignia editado del evento completo",
  "Reels cortos por cada momento clave (yin yoga, fogata, escritura, pilates, cena)",
  "Set de fotografía profesional de espacios, gastronomía y experiencia",
  "Testimoniales en cámara de las asistentes",
];

const UGC_LEVELS = [
  {
    id: "esencial",
    tone: "Esencial",
    creators: "5 creadoras",
    deliverables: "5 reels + ~25 historias",
  },
  {
    id: "recomendado",
    tone: "Recomendado",
    creators: "10 creadoras",
    deliverables: "10 reels + ~50 historias",
  },
  {
    id: "completo",
    tone: "Completo",
    creators: "Hasta 20 creadoras",
    deliverables: "20 reels + 80+ historias",
  },
];

const GIVE_GALS = [
  "Curaduría y coordinación de creadoras",
  "Dirección de la experiencia (Natalia Galvis)",
  "Producción y edición profesional",
  "Gestión de las demás creadoras (pase de día o cupo propio)",
];

const GIVE_BIRD = [
  "Espacio para las actividades (interior/exterior)",
  "Alojamiento para equipo de producción y grupo núcleo de creadoras (5 a 8)",
  "Catering (cena y desayuno) para el grupo núcleo y el equipo",
  "Tarifa preferencial de habitaciones para el resto de creadoras",
];

const DAY_ONE = [
  { time: "4:00 pm", text: "Bienvenida con shots de bienestar (Alamak)" },
  { time: "5:30 pm", text: "Yin Yoga" },
  { time: "6:30 pm", text: "Sound Healing" },
  { time: "7:30 pm", text: "Fogata" },
  {
    time: "7:45 pm",
    text: 'Escritura terapéutica, vision board y rueda de la vida: "suelta el 2026, manifiesta el 2027"',
  },
  { time: "9:00 pm", text: "Cena" },
];

const DAY_TWO = [
  { time: "8:00 am", text: "Pilates y Barre" },
  { time: "9:30 am", text: "Charla de alimentación consciente" },
  { time: "10:30 am", text: "Desayuno y cierre" },
];

const TIMELINE = [
  { num: "01", title: "Semana 1", text: "Confirmación de fecha, aforo y alcance con Birdhouse" },
  { num: "02", title: "Semana 2", text: "Curaduría y confirmación de creadoras" },
  { num: "03", title: "Semana 3", text: "Logística final (espacios, horarios, equipo)" },
  { num: "04", title: "Evento", text: "Día 1 y Día 2" },
  { num: "05", title: "+10 a 15 días", text: "Entrega del contenido profesional editado" },
];

function Section({ id, eyebrow, title, subtitle, soft, children }) {
  return (
    <section id={id} className={`bh-section scroll-mt-28 ${soft ? "bh-section--soft" : ""}`}>
      <div className="bh-section-inner">
        {eyebrow ? <p className="bh-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="bh-heading">{title}</h2> : null}
        {subtitle ? <p className="bh-muted mt-3 max-w-3xl text-base leading-relaxed">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaBirdhouseWellnessPage() {
  const [progress, setProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("hero");
  const [levelId, setLevelId] = useState("recomendado");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = "hero";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActiveNav(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const waMessage =
    "Hola. Revisé la propuesta Birdhouse · Ritual de Cierre y Manifestación (GAL's Studio × Partnersflux) y quiero agendar una llamada esta semana.";

  return (
    <div className="bh-page">
      <FloralDecorLayer />

      <div className="bh-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="bh-progress-bar h-full" style={{ width: `${progress}%` }} />
      </div>

      <nav className="bh-nav" aria-label="Secciones">
        <div>
          <span className="bh-nav-brand">Birdhouse</span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`bh-nav-link ${activeNav === item.id ? "bh-nav-link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="bh-hero scroll-mt-28">
        <div className="bh-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bh-hero-bg-img" src={HERO_IMAGE} alt="" />
          <div className="bh-hero-bg-overlay" />
        </div>

        <div className="bh-hero-copy">
          <div className="bh-lockup">
            <div className="bh-lockup-capsule">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="bh-lockup-logo bh-lockup-logo--gals" src={GALS_LOGO} alt="GAL's Studio" />
            </div>
            <span className="bh-lockup-x" aria-hidden>
              ×
            </span>
            <div className="bh-lockup-capsule bh-lockup-capsule--bird">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="bh-lockup-logo bh-lockup-logo--bird" src={BIRDHOUSE_LOGO} alt="Bird House" />
            </div>
          </div>

          <p className="bh-eyebrow bh-eyebrow--on-hero mt-7">Propuesta de colaboración</p>
          <h1 className="bh-hero-brand">Birdhouse</h1>
          <p className="bh-hero-title">Ritual de Cierre y Manifestación</p>
          <p className="bh-lead">
            Una experiencia de bienestar de fin de año que posiciona a Birdhouse como destino de conexión y
            transformación consciente.
          </p>
          <div className="bh-pill-row">
            {["GAL's Studio", "Partnersflux", "Fin de año", "Contenido + UGC"].map((pill) => (
              <span key={pill} className="bh-pill">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="bh-hero-cta">
          <a href="#capas" className="bh-btn bh-btn-solid">
            Ver entregables
          </a>
          <a href={waUrl(waMessage)} target="_blank" rel="noopener noreferrer" className="bh-btn bh-btn-ghost">
            Agendar llamada
          </a>
        </div>
      </section>

      <Section
        id="objetivo"
        eyebrow="Objetivo"
        title="Una experiencia real, documentada en dos capas."
        subtitle="Evento de bienestar liderado por Natalia Galvis y documentado con material profesional para la marca de Birdhouse, más contenido UGC de un grupo curado de creadoras."
      >
        <p data-reveal className="bh-reveal max-w-3xl text-base leading-relaxed text-[var(--bh-text)]">
          Estimado equipo de Birdhouse: esta propuesta une a Natalia Galvis, fundadora de GAL&apos;s Studio, y al
          equipo creativo de Partnersflux, liderado por Jessica Omaña, para crear juntos una experiencia de cierre de
          año con narrativa, prueba social y activos de marca listos para usar.
        </p>
      </Section>

      <Section
        id="antes"
        eyebrow="Antes / Después"
        title="De lugar bonito a lugar donde pasó algo."
        soft
      >
        <div className="grid gap-5">
          {BEFORE_AFTER.map((row) => (
            <div key={row.before} data-reveal className="bh-reveal bh-pair">
              <div className="bh-pair-col">
                <p className="bh-pair-label">Hoy</p>
                <p className="bh-pair-text">{row.before}</p>
              </div>
              <div className="bh-pair-col bh-pair-col--after">
                <p className="bh-pair-label">Con esta colaboración</p>
                <p className="bh-pair-text">{row.after}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="capas"
        eyebrow="Qué recibe Birdhouse"
        title="Dos capas. Una siempre incluida. La otra escala."
        subtitle="La Capa 1 nunca cambia. Lo único que crece con más creadoras es el contenido UGC y el alcance orgánico."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article data-reveal className="bh-reveal bh-layer bh-layer--featured">
            <p className="bh-eyebrow">Capa 1 · Siempre incluida</p>
            <h3 className="bh-section-label mt-3 text-xl">Contenido profesional</h3>
            <p className="bh-muted mt-2 text-sm leading-relaxed">
              El activo de marca del hotel, para web, ads y prensa.
            </p>
            <ul className="bh-list">
              {LAYER_ONE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article data-reveal className="bh-reveal bh-layer">
            <p className="bh-eyebrow">Capa 2 · Escala según confirmaciones</p>
            <h3 className="bh-section-label mt-3 text-xl">Contenido UGC de creadoras</h3>
            <p className="bh-muted mt-2 text-sm leading-relaxed">
              Alcance y prueba social. Cada creadora muestra el espacio a su manera, desde su cuenta, etiquetando a
              Birdhouse.
            </p>

            <div className="bh-levels" role="group" aria-label="Niveles UGC">
              {UGC_LEVELS.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  className={`bh-level ${levelId === level.id ? "bh-level--active" : ""}`}
                  onClick={() => setLevelId(level.id)}
                >
                  <p className="bh-level-tone">{level.tone}</p>
                  <p className="bh-level-name">{level.creators}</p>
                  <p className="bh-level-meta">{level.deliverables}</p>
                </button>
              ))}
            </div>

            <p className="bh-muted mt-5 text-sm leading-relaxed">
              Sobre el alcance: no prometemos una cifra fija. Antes del evento compartimos con Birdhouse la suma real
              de seguidores de las creadoras confirmadas, para que vean el alcance potencial de forma transparente.
            </p>
          </article>
        </div>
      </Section>

      <Section id="alianza" eyebrow="Estrategia ganar-ganar" title="Cada parte aporta lo que mejor hace." soft>
        <div className="grid gap-5 md:grid-cols-2">
          <div data-reveal className="bh-reveal bh-layer">
            <p className="bh-eyebrow">GAL&apos;s Studio &amp; Partnersflux aportan</p>
            <ul className="bh-list">
              {GIVE_GALS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div data-reveal className="bh-reveal bh-layer">
            <p className="bh-eyebrow">Birdhouse aporta</p>
            <ul className="bh-list">
              {GIVE_BIRD.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="experiencia"
        eyebrow="La experiencia"
        title="Dos días. Un ritual de cierre y manifestación."
        subtitle="Diseñada para sentirse, documentarse y compartirse."
      >
        <div className="bh-schedule">
          <div data-reveal className="bh-reveal bh-layer">
            <h3 className="bh-day-title">Día 1 · Tarde y noche</h3>
            <div className="bh-timeline">
              {DAY_ONE.map((item) => (
                <div key={item.time + item.text} className="bh-time-row">
                  <span className="bh-time">{item.time}</span>
                  <span className="bh-time-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="bh-reveal bh-layer">
            <h3 className="bh-day-title">Día 2 · Mañana</h3>
            <div className="bh-timeline">
              {DAY_TWO.map((item) => (
                <div key={item.time + item.text} className="bh-time-row">
                  <span className="bh-time">{item.time}</span>
                  <span className="bh-time-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="cronograma" eyebrow="Cronograma" title="De la confirmación a la entrega." soft>
        <div className="bh-steps">
          {TIMELINE.map((step) => (
            <div key={step.num} data-reveal className="bh-reveal bh-step">
              <span className="bh-step-num">{step.num}</span>
              <div>
                <p className="bh-step-title">{step.title}</p>
                <p className="bh-step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cierre" eyebrow="Siguiente paso" title="Confirmemos esta semana.">
        <div data-reveal className="bh-reveal bh-closing">
          <p className="max-w-3xl text-base leading-relaxed text-[var(--bh-ink)]">
            Las fechas de cierre de año son limitadas: entre más pronto confirmemos, más margen tenemos para curar al
            grupo ideal y coordinar la logística con calma. Quedamos atentas para agendar una llamada esta semana.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waUrl(waMessage)} target="_blank" rel="noopener noreferrer" className="bh-btn bh-btn-solid">
              Agendar llamada
            </a>
            <a href="#capas" className="bh-btn bh-btn-ghost--ink">
              Revisar entregables
            </a>
          </div>
          <div className="bh-sign">
            <p>
              <strong className="text-[var(--bh-ink)]">Natalia Galvis</strong>, GAL&apos;s Studio
            </p>
            <p>
              <strong className="text-[var(--bh-ink)]">Jessica Omaña</strong>, Equipo Creativo, Partnersflux
            </p>
          </div>
        </div>
      </Section>

      <footer className="px-4 pb-10 text-center text-xs text-[var(--bh-muted)] sm:px-6">
        GAL&apos;s Studio · Partnersflux · Birdhouse · Ritual de Cierre y Manifestación
      </footer>

      <a href={waUrl(waMessage)} target="_blank" rel="noopener noreferrer" className="bh-floating-cta">
        Agendar llamada
      </a>
    </div>
  );
}
