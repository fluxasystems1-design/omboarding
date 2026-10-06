"use client";

import { useEffect, useRef, useState } from "react";

/** WhatsApp de Julián Pachón */
const WA_NUMBER = "573112435112";

const IG_HANDLE = "_Julianpachon";
const IG_URL = `https://www.instagram.com/${IG_HANDLE}/`;

const REELS = [
  {
    id: "DdclhE2xBbf",
    href: "https://www.instagram.com/reel/DdclhE2xBbf/",
    src: "/imagenes/julian-pachon/reel-01.mp4",
  },
  {
    id: "DdFMs41PpCo",
    href: "https://www.instagram.com/reel/DdFMs41PpCo/",
    src: "/imagenes/julian-pachon/reel-02.mp4",
  },
  {
    id: "DbWu-yUPYJP",
    href: "https://www.instagram.com/reel/DbWu-yUPYJP/",
    src: "/imagenes/julian-pachon/reel-03.mp4",
  },
  {
    id: "DY8MhcSvaX5",
    href: "https://www.instagram.com/reel/DY8MhcSvaX5/",
    src: "/imagenes/julian-pachon/reel-04.mp4",
  },
];

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "presentacion", label: "Presentación" },
  { id: "portafolio", label: "Portafolio" },
  { id: "por-que", label: "Por qué" },
  { id: "propuestas", label: "Propuestas" },
  { id: "dinamica", label: "Dinámica" },
  { id: "continuidad", label: "Continuidad" },
  { id: "contacto", label: "Contacto" },
];

const REEL_SPEED_PX_PER_SEC = 28;

function waUrl(message) {
  if (!WA_NUMBER || !/^\d{10,15}$/.test(WA_NUMBER)) return null;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ReelCarousel() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startOffset: 0,
    moved: false,
    suppressClick: false,
  });
  const preferReducedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const root = rootRef.current;
    if (!track || !root) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    preferReducedRef.current = media.matches;
    const onMedia = () => {
      preferReducedRef.current = media.matches;
    };
    media.addEventListener?.("change", onMedia);

    const measure = () => {
      const firstSet = track.querySelector(".jp-reel-set");
      loopWidthRef.current = firstSet ? firstSet.getBoundingClientRect().width : track.scrollWidth / 2;
      normalize();
      apply();
    };

    const normalize = () => {
      const loop = loopWidthRef.current;
      if (!loop) return;
      offsetRef.current = ((offsetRef.current % loop) + loop) % loop;
    };

    const apply = () => {
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(track);

    let raf = 0;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min(0.048, (now - last) / 1000);
      last = now;

      if (!dragRef.current.active && !preferReducedRef.current && loopWidthRef.current > 0) {
        offsetRef.current += REEL_SPEED_PX_PER_SEC * dt;
        normalize();
        apply();
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onPointerDown = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragRef.current.active = true;
      dragRef.current.pointerId = event.pointerId;
      dragRef.current.startX = event.clientX;
      dragRef.current.startOffset = offsetRef.current;
      dragRef.current.moved = false;
      root.classList.add("is-dragging");
      try {
        root.setPointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
    };

    const onPointerMove = (event) => {
      if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return;
      const dx = event.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 6) dragRef.current.moved = true;
      offsetRef.current = dragRef.current.startOffset - dx;
      normalize();
      apply();
      if (dragRef.current.moved) event.preventDefault();
    };

    const endDrag = (event) => {
      if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) return;
      dragRef.current.active = false;
      dragRef.current.pointerId = null;
      dragRef.current.suppressClick = dragRef.current.moved;
      root.classList.remove("is-dragging");
      try {
        root.releasePointerCapture(event.pointerId);
      } catch {
        /* ignore */
      }
    };

    const onClickCapture = (event) => {
      if (!dragRef.current.suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.suppressClick = false;
    };

    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointermove", onPointerMove, { passive: false });
    root.addEventListener("pointerup", endDrag);
    root.addEventListener("pointercancel", endDrag);
    root.addEventListener("click", onClickCapture, true);

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      media.removeEventListener?.("change", onMedia);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerup", endDrag);
      root.removeEventListener("pointercancel", endDrag);
      root.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      data-reveal
      className="jp-reveal jp-reel-carousel"
      aria-label="Reels de Julián Pachón"
    >
      <div ref={trackRef} className="jp-reel-track">
        {[0, 1].map((copy) => (
          <div
            key={`set-${copy}`}
            className="jp-reel-set"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {REELS.map((reel) => (
              <a
                key={`${copy}-${reel.id}`}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="jp-reel-card"
                aria-label="Ver reel en Instagram"
                tabIndex={copy === 1 ? -1 : undefined}
                draggable={false}
              >
                <div className="jp-reel-frame">
                  <video
                    data-jp-reel
                    src={reel.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    draggable={false}
                  />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function DecorLayer() {
  return (
    <div className="jp-decor" aria-hidden>
      <div className="jp-scope-bg">
        <svg className="jp-scope-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="jpHistoFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7BBBFF" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#B8A9FF" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FF8A4C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="jpWaveLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7BBBFF" />
              <stop offset="45%" stopColor="#B8A9FF" />
              <stop offset="100%" stopColor="#FF8A4C" />
            </linearGradient>
            <filter id="jpScopeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Histograma de exposición */}
          <g className="jp-histo-bars">
            <rect x="70" y="470" width="42" height="130" rx="10" />
            <rect x="130" y="390" width="42" height="210" rx="10" />
            <rect x="190" y="320" width="42" height="280" rx="10" />
            <rect x="250" y="250" width="42" height="350" rx="10" />
            <rect x="310" y="180" width="42" height="420" rx="10" />
            <rect x="370" y="230" width="42" height="370" rx="10" />
            <rect x="430" y="300" width="42" height="300" rx="10" />
            <rect x="490" y="360" width="42" height="240" rx="10" />
            <rect x="550" y="410" width="42" height="190" rx="10" />
            <rect x="610" y="450" width="42" height="150" rx="10" />
            <rect x="670" y="480" width="42" height="120" rx="10" />
            <rect x="730" y="430" width="42" height="170" rx="10" />
            <rect x="790" y="340" width="42" height="260" rx="10" />
            <rect x="850" y="260" width="42" height="340" rx="10" />
            <rect x="910" y="200" width="42" height="400" rx="10" />
            <rect x="970" y="240" width="42" height="360" rx="10" />
            <rect x="1030" y="310" width="42" height="290" rx="10" />
            <rect x="1090" y="380" width="42" height="220" rx="10" />
          </g>

          {/* Waveform cinematográfico */}
          <path
            className="jp-wave-area"
            d="M60 520 C160 480 220 360 300 300 C380 240 450 280 520 340 C600 410 680 460 760 400 C840 340 920 220 1020 180 C1080 160 1120 170 1160 150 L1160 620 L60 620 Z"
            fill="url(#jpHistoFill)"
          />
          <path
            className="jp-wave-line"
            d="M60 520 C160 480 220 360 300 300 C380 240 450 280 520 340 C600 410 680 460 760 400 C840 340 920 220 1020 180 C1080 160 1120 170 1160 150"
            fill="none"
            stroke="url(#jpWaveLine)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#jpScopeGlow)"
          />

          {/* Puntos de enfoque */}
          <g className="jp-focus-dots" filter="url(#jpScopeGlow)">
            <circle cx="300" cy="300" r="9" />
            <circle cx="520" cy="340" r="9" />
            <circle cx="760" cy="400" r="9" />
            <circle cx="1020" cy="180" r="11" />
            <circle cx="190" cy="450" r="7" />
            <circle cx="910" cy="240" r="8" />
          </g>

          {/* Anillo de diafragma sutil */}
          <g className="jp-aperture-ring" opacity="0.35">
            <circle cx="980" cy="160" r="72" fill="none" stroke="#7BBBFF" strokeWidth="2" />
            <circle cx="980" cy="160" r="48" fill="none" stroke="#B8A9FF" strokeWidth="1.5" />
            <circle cx="980" cy="160" r="22" fill="none" stroke="#FF8A4C" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, soft, children }) {
  return (
    <section id={id} className={`jp-section scroll-mt-28 ${soft ? "jp-section--soft" : ""}`}>
      <div className="jp-section-inner">
        {eyebrow ? <p className="jp-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="jp-heading">{title}</h2> : null}
        <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
      </div>
    </section>
  );
}

export default function PropuestaJulianPachonIshopPage() {
  const [progress, setProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("hero");

  const waMessage =
    "Hola Julián. Vi la propuesta Julián Pachón × iShop (Creador Embajador, Ecosistema Apple) y quiero coordinar.";
  const contactHref = waUrl(waMessage) || "#contacto";
  const contactIsWa = Boolean(waUrl(waMessage));

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

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll("video[data-jp-reel]"));
    const playVisible = (video, visible) => {
      if (visible) {
        video.muted = true;
        const play = video.play();
        if (play && typeof play.catch === "function") play.catch(() => {});
      } else {
        video.pause();
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => playVisible(entry.target, entry.isIntersecting));
      },
      { threshold: 0.35 }
    );

    videos.forEach((video) => {
      playVisible(video, true);
      io.observe(video);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="jp-page">
      <DecorLayer />

      <div className="jp-content">
        <div className="jp-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
          <div className="jp-progress-bar h-full" style={{ width: `${progress}%` }} />
        </div>

        <nav className="jp-nav" aria-label="Secciones">
          <div>
            <span className="jp-nav-brand">Julián × iShop</span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`jp-nav-link ${activeNav === item.id ? "jp-nav-link--active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="hero" className="jp-hero scroll-mt-28">
          <div className="jp-hero-copy">
            <p className="jp-eyebrow">Propuesta</p>
            <h1 className="jp-hero-brand">
              Julián Pachón
              <span>× iShop</span>
            </h1>
            <p className="jp-hero-title">Creador Embajador, Ecosistema Apple</p>
            <p className="jp-meta">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                @{IG_HANDLE}
              </a>
            </p>
            <div className="jp-hero-cta">
              <a href="#propuestas" className="jp-btn jp-btn-solid">
                Ver propuestas
              </a>
              <a
                href={contactHref}
                className="jp-btn jp-btn-ghost"
                {...(contactIsWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Contacto
              </a>
            </div>
          </div>
        </section>

        <Section id="presentacion" title="Presentación">
          <div className="jp-about">
            <div data-reveal className="jp-reveal">
              <p className="jp-body">
                Soy Julián Pachón (@_Julianpachon), filmmaker y productor audiovisual con 7 años de experiencia, enfocado en
                contenido de viajes que me ha llevado a grabar en más de 25 países. Dentro de mi día a día uso herramientas
                Apple, y en mis redes le recomiendo a la gente todo lo que yo mismo utilizo, enseñándoles a sacarle el mejor
                provecho: desde cómo lograr una toma con apariencia profesional hasta cómo editar directamente desde el
                teléfono.
              </p>
              <p className="jp-body">
                Esa cercanía con mi audiencia, sumada a mi experiencia como filmmaker, es lo que me permite mostrarle a la
                gente de forma genuina por qué estas herramientas valen la pena en su día a día.
              </p>
            </div>
            <figure data-reveal className="jp-reveal jp-about-photo">
              <img
                src="/imagenes/julian-pachon/julian-about.jpg"
                alt="Julián Pachón"
                width={1440}
                height={2560}
                loading="lazy"
              />
            </figure>
          </div>
        </Section>

        <Section id="portafolio" soft title="Portafolio ecosistema Apple">
          <ReelCarousel />
        </Section>

        <Section id="por-que" title="Por qué esta colaboración tiene sentido">
          <p data-reveal className="jp-reveal jp-body">
            Mi contenido conecta porque viene de la experiencia real: la gente confía en lo que recomiendo porque me ve
            usarlo y vivirlo en mi día a día, no porque sea publicidad. Eso es lo que puedo aportarle a iShop: contenido
            que enseña y que la audiencia realmente recuerda, construido desde la cercanía y la autenticidad que ya tengo
            con ella.
          </p>
        </Section>

        <Section id="propuestas" soft>
          <p data-reveal className="jp-reveal jp-heading" style={{ marginTop: 0 }}>
            Trabajemos juntos
          </p>
          <h2 className="jp-heading mt-6">Propuestas comerciales</h2>

          <div data-reveal className="jp-reveal jp-plans mt-8">
            <article className="jp-plan jp-plan--featured">
              <span className="jp-plan-tag">Opción A</span>
              <h3 className="jp-plan-title">Canje semestral</h3>
              <div className="jp-plan-copy">
                <p>
                  iShop me entrega el dispositivo como herramienta de trabajo cada semestre, por ejemplo un iPhone 18 Pro
                  Max de 512GB o 1TB. A cambio, entrego 1-2 piezas de contenido mensual sobre un tema o producto que la
                  marca proponga, coproducidos directamente con iShop, enseñando a sacarle el máximo provecho al
                  dispositivo. Primer periodo: octubre-marzo, con renovación según resultados.
                </p>
                <p>
                  Dentro de ese mismo semestre, me encargo de diseñar y ejecutar talleres enfocados en fotografía y video
                  con Apple, presenciales o virtuales, dirigidos a clientes o personas interesadas en adquirir productos
                  Apple. Yo me hago cargo de todo el taller: modelos, logística de contenido y la enseñanza, incluyendo el
                  uso de Creator Studio enfocado en Apple.
                </p>
              </div>
            </article>

            <article className="jp-plan">
              <span className="jp-plan-tag">Opción B</span>
              <h3 className="jp-plan-title">Contenido pago mensual</h3>
              <div className="jp-plan-copy">
                <p>
                  1-2 contenidos al mes sobre un tema o producto que la marca proponga, coproducidos directamente con
                  iShop, con un pago mensual de $1.200.000 COP, equivalente a $7.200.000 COP por el periodo de 6 meses.
                </p>
                <p>
                  Dentro de ese mismo periodo, incluyo sin costo adicional la creación y ejecución de talleres enfocados
                  en fotografía y video con Apple, presenciales o virtuales, dirigidos a clientes o personas interesadas
                  en adquirir productos Apple. Yo me hago cargo de todo el taller: modelos, logística de contenido y la
                  enseñanza, incluyendo el uso de Creator Studio enfocado en Apple.
                </p>
              </div>
            </article>
          </div>
        </Section>

        <Section id="dinamica" title="Dinámica de trabajo">
          <p data-reveal className="jp-reveal jp-body">
            iShop propone el tema del mes (o yo lo sugiero según el dispositivo en foco), grabo y edito con el equipo
            asignado, la marca revisa antes de publicar, y definimos juntos si el contenido sale desde mi perfil o para
            los canales de iShop.
          </p>
        </Section>

        <Section id="continuidad" soft title="Continuidad">
          <p data-reveal className="jp-reveal jp-body">
            Cada semestre evaluamos el contenido entregado y decidimos si se renueva o se actualiza al dispositivo más
            reciente. Si el contenido funciona, se abre espacio para lanzamientos en tienda y para seguir escalando los
            talleres. La idea no es un trato de una sola vez: es que la relación se profundice semestre a semestre.
          </p>
        </Section>

        <Section id="contacto" title="Contacto">
          <div data-reveal className="jp-reveal jp-contact-box">
            <p className="jp-contact-name">Julián Pachón (@_Julianpachon)</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--jp-muted)" }}>
              Disponible por WhatsApp o correo para coordinar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactHref}
                className="jp-btn jp-btn-solid"
                {...(contactIsWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                WhatsApp
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="jp-btn jp-btn-ghost">
                @_Julianpachon
              </a>
            </div>
          </div>
        </Section>

        <footer className="jp-footer">Julián Pachón × iShop · Creador Embajador, Ecosistema Apple</footer>
      </div>

      <a
        href={contactHref}
        className="jp-float"
        {...(contactIsWa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        Contacto
      </a>
    </div>
  );
}
