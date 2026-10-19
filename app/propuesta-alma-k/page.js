"use client";

import { useEffect, useMemo, useState } from "react";

const LOGO = "/imagenes/alma-k/logo.png?v=10";
const HERO = "/imagenes/alma-k/hero.png?v=6";
const PHOTO_PRODUCTOS = "/imagenes/alma-k/productos.png?v=1";
const PHOTO_VASO = "/imagenes/alma-k/vaso-jamaica.png?v=1";
const PHOTO_MANO = "/imagenes/alma-k/mano-jamaica.png?v=1";
const IG_URL = "https://www.instagram.com/almakcol/";
const WEB_URL = "https://www.almak.com.co";
const WA_NUMBER = "573116425337";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "valor", label: "Oportunidad" },
  { id: "tienda", label: "Más ventas" },
  { id: "sistema", label: "Crecimiento" },
  { id: "lanzamiento", label: "Lanzamiento" },
  { id: "logros", label: "Resultados" },
  { id: "cierre", label: "Cotizar" },
];

const QUESTIONS = [
  "¿Qué es JAMU?",
  "¿Qué sabor tiene?",
  "¿Cómo se toma?",
  "¿Por qué elegirlo?",
  "¿Cuál presentación me conviene?",
];

const JOURNEY = [
  {
    num: "01",
    title: "Descubre",
    text: "Ve una receta con Masala Chai en Instagram y comenta que quiere conocerlo.",
  },
  {
    num: "02",
    title: "Explora",
    text: "Recibe un enlace a una página con preparación, ingredientes y opciones de compra.",
  },
  {
    num: "03",
    title: "Compra",
    text: "Hace su pedido sin fricción. Comprar es el siguiente paso natural.",
  },
  {
    num: "04",
    title: "Regresa",
    text: "Recibe agradecimiento, ideas para disfrutar y un reencuentro cuando sea momento de reponer.",
  },
];

const GOALS = [
  "Convertir el catálogo actual en una experiencia de compra más atractiva y persuasiva.",
  "Comunicar mejor el valor y los diferenciales de cada producto.",
  "Facilitar que las personas pasen de Instagram a comprar.",
  "Aumentar el valor de cada pedido con combos y productos complementarios.",
  "Volver a conectar con quienes ya compraron.",
  "Reducir tareas comerciales repetitivas mediante automatizaciones.",
  "Preparar próximos lanzamientos con una estrategia de ventas.",
];

function waUrl(message) {
  if (!WA_NUMBER || !/^\d{10,15}$/.test(WA_NUMBER)) return null;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function PhotoFrame({ src, alt, caption, variant = "landscape" }) {
  return (
    <figure className={`ak-frame ak-frame--${variant}`}>
      <div className="ak-frame-mat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
      {caption ? <figcaption className="ak-frame-caption">{caption}</figcaption> : null}
    </figure>
  );
}

function DecorLayer() {
  return (
    <div className="ak-decor" aria-hidden>
      <div className="ak-aurora" />
      <div className="ak-mesh" />
    </div>
  );
}

function Section({ id, eyebrow, title, children, tone = "plain" }) {
  return (
    <section id={id} className={`scroll-mt-28 ak-band ak-band--${tone}`}>
      <div className="ak-section">
        <div data-reveal className="ak-reveal">
          {eyebrow ? <p className="ak-eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="ak-heading">{title}</h2> : null}
        </div>
        <div data-reveal className="ak-reveal ak-reveal--delay">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function PropuestaAlmaKPage() {
  const [progress, setProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("hero");
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  const waMessage =
    "Hola Partnersflux. Revisé la propuesta de ALMAK (ecommerce estratégico) y quiero coordinar el siguiente paso.";
  const contactHref = waUrl(waMessage) || "#cierre";

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
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { threshold: 0.28, rootMargin: "-10% 0px -45% 0px" }
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

    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
    document.querySelectorAll("#hero [data-reveal]").forEach((el) => el.classList.add("is-visible"));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <div className="ak-page">
      <DecorLayer />

      <div className="ak-content">
        <div className="ak-progress fixed left-0 top-0 z-50 w-full">
          <div className="ak-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <nav className="ak-nav" aria-label="Secciones">
          <div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ak-nav-link ${activeNav === item.id ? "ak-nav-link--active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="hero" className="ak-hero scroll-mt-28">
          <div className="ak-hero-bg" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO} alt="" />
          </div>
          <div className="ak-hero-copy">
            <h1 className="ak-hero-brand ak-hero-brand--logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ak-hero-logo" src={LOGO} alt="ALMAK" />
            </h1>
            <p className="ak-hero-title">Lo que han construido merece una tienda que esté a su altura.</p>
            <p className="ak-hero-lead">Ecommerce estratégico · Automatización · Crecimiento digital</p>
            <div className="ak-hero-meta">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                @almakcol
              </a>
              <a href={WEB_URL} target="_blank" rel="noopener noreferrer">
                almak.com.co
              </a>
              <span>Una propuesta de Partnersflux</span>
            </div>
            <div className="ak-hero-cta">
              <a href="#valor" className="ak-btn ak-btn-solid">
                Ver propuesta
              </a>
              <a href={contactHref} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn-ghost">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Section
          id="valor"
          tone="plain"
          eyebrow="01 — Lo valioso"
          title="ALMAK ya tiene algo muy valioso"
        >
          <div className="ak-split">
            <div>
              <div className="ak-prose" style={{ marginTop: 0 }}>
                <p>
                  Después de nuestra conversación y de conocer un poco más sobre lo que están construyendo, hay algo que
                  nos quedó claro:
                </p>
                <p>
                  <strong>ALMAK tiene mucho más para ofrecer de lo que hoy está contando su tienda online.</strong>
                </p>
                <p>
                  Sus productos tienen identidad, ingredientes que despiertan curiosidad y una historia que conecta con
                  el bienestar y las tradiciones. Han construido una marca que se siente auténtica.
                </p>
                <p>
                  Y precisamente por eso creemos que su experiencia de compra debería transmitir mucho más que una
                  fotografía y un precio. Porque cuando una persona llega a su página, debería poder descubrir qué hace
                  especial a cada bebida, imaginar cómo incorporarla a su día y encontrar razones para elegirla.
                </p>
              </div>
              <p className="ak-highlight">
                Queremos que la experiencia de comprar ALMAK esté a la altura de la experiencia que prometen sus
                productos.
              </p>
            </div>
            <div className="ak-split-photo">
              <PhotoFrame
                src={PHOTO_PRODUCTOS}
                alt="Línea ALMAK: Masala Chai, Jamu y Flor de Jamaica"
                caption="Masala Chai · Jamu · Flor de Jamaica"
                variant="landscape"
              />
            </div>
          </div>
        </Section>

        <Section
          id="tienda"
          tone="mist"
          eyebrow="02 — Ecommerce"
          title="Una tienda que no solo muestre productos, sino que los venda"
        >
          <div className="ak-split ak-split--tienda">
            <div className="ak-split-photo">
              <PhotoFrame
                src={PHOTO_VASO}
                alt="Vaso de Flor de Jamaica con hielo y romero"
                caption="Flor de Jamaica — lista para disfrutar"
                variant="portrait"
              />
            </div>
            <div>
              <div className="ak-prose" style={{ marginTop: 0 }}>
                <p>
                  Hoy su página funciona principalmente como un catálogo: muestra qué productos están disponibles, sus
                  fotografías y parte de su información. Pero sabemos que el recorrido de una compra necesita más que
                  eso.
                </p>
                <p>Pensemos en alguien que descubre JAMU por primera vez. Todavía tiene preguntas:</p>
              </div>

              <div className="ak-questions" aria-label="Preguntas de una compradora">
                {QUESTIONS.map((q, i) => (
                  <span key={q} className="ak-question" style={{ ["--ak-i"]: i }}>
                    {q}
                  </span>
                ))}
              </div>

              <div className="ak-prose">
                <p>
                  Y si la página no acompaña esa curiosidad, podemos perder una oportunidad de venta.{" "}
                  <strong>
                    Nuestra propuesta es transformar ese catálogo en una experiencia de ecommerce que despierte el
                    deseo de comprar.
                  </strong>
                </p>
                <p>
                  Una tienda donde cada producto tenga su propia historia, sus diferenciales, formas de consumo,
                  fotografías, experiencias de clientes y opciones de compra. Donde comprar sea el siguiente paso
                  natural después de descubrir el producto.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="sistema"
          tone="sage"
          eyebrow="03 — Sistema"
          title="Más que una tienda, un sistema que acompañe cada venta"
        >
          <div className="ak-split ak-split--sistema">
            <div>
              <p className="ak-lead" style={{ marginTop: "1.25rem" }}>
                No queremos detenernos en mejorar la página. Imaginen este recorrido:
              </p>

              <div className="ak-journey">
                {JOURNEY.map((step, i) => (
                  <article key={step.num} className="ak-step" style={{ ["--ak-i"]: i }}>
                    <p className="ak-step-num">{step.num}</p>
                    <h3 className="ak-step-title">{step.title}</h3>
                    <p className="ak-step-text">{step.text}</p>
                  </article>
                ))}
              </div>

              <p className="ak-highlight">
                Una sola persona puede representar mucho más que una primera venta. Puede convertirse en una clienta
                que regresa y recomienda la marca.
              </p>
              <div className="ak-prose">
                <p>
                  Eso es lo que queremos construir: una experiencia conectada entre contenido, tienda, atención y
                  recompra. Sin perder la cercanía que caracteriza a ALMAK.
                </p>
              </div>
            </div>
            <div className="ak-split-photo">
              <PhotoFrame
                src={PHOTO_MANO}
                alt="Botella Flor de Jamaica ALMAK en la mano"
                caption="280 ml · natural y reciclable"
                variant="portrait"
              />
            </div>
          </div>
        </Section>

        <Section
          id="lanzamiento"
          tone="warm"
          eyebrow="04 — Próximo capítulo"
          title="El próximo capítulo: Chía pudín"
        >
          <div className="ak-prose">
            <p>
              Y hay una oportunidad adicional que nos emociona especialmente: el lanzamiento de su nuevo chía pudín
              instantáneo.
            </p>
            <p>
              No queremos que simplemente aparezca como otro producto en el catálogo. Queremos que tenga su propio
              momento. Que las personas empiecen a conocerlo antes de su lanzamiento, que exista expectativa alrededor
              de su llegada y que sus primeros compradores puedan convertirse en parte de la conversación.
            </p>
            <p>
              Un lanzamiento que no dependa únicamente de publicar que ya está disponible.{" "}
              <strong>Sino de crear razones para descubrirlo, querer probarlo y comprarlo.</strong>
            </p>
            <p>
              Porque cada lanzamiento también es una oportunidad para que nuevas personas conozcan el universo completo
              de ALMAK.
            </p>
          </div>
        </Section>

        <Section
          id="logros"
          tone="plain"
          eyebrow="05 — Juntos"
          title="Lo que queremos lograr juntos"
        >
          <p className="ak-lead" style={{ marginTop: "1.25rem" }}>
            No se trata simplemente de entregar una página web. Se trata de que ALMAK pueda:
          </p>
          <ul className="ak-goals">
            {GOALS.map((goal, i) => (
              <li key={goal} className="ak-goal" style={{ ["--ak-i"]: i }}>
                <span className="ak-goal-mark" aria-hidden>
                  ✓
                </span>
                <span className="ak-goal-text">{goal}</span>
              </li>
            ))}
          </ul>
          <p className="ak-highlight">
            Queremos que ALMAK no solo llegue a más personas, sino que aproveche mejor cada oportunidad de
            convertirlas en clientes.
          </p>
        </Section>

        <Section id="cierre" tone="deep" eyebrow="Siguiente paso" title="Hablemos del próximo capítulo de ALMAK">
          <div className="ak-close">
            <p className="ak-lead">
              Revisamos juntas el alcance, priorizamos tienda, automatización y el lanzamiento del chía pudín, y
              definimos cómo arrancar.
            </p>
            <div className="ak-close-cta">
              <a href={contactHref} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn-ink">
                Coordinar por WhatsApp
              </a>
            </div>
          </div>
        </Section>

        <footer className="ak-footer">
          ALMAK × Partnersflux ·{" "}
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">
            @almakcol
          </a>{" "}
          · Ecommerce estratégico
        </footer>
      </div>
    </div>
  );
}
