"use client";

import { useEffect, useState } from "react";

const LOGO = "/imagenes/ar-pilates/logo.png?v=2";
const HERO = "/imagenes/ar-pilates/hero.mp4";
const IG = "https://www.instagram.com/arpilates.estudio/";
const WA_BASE = "https://wa.me/573116425337?text=";

const PLANS = [
  {
    id: "digital",
    kicker: "AR Digital",
    price: 2697000,
    line: "Landing hecha para convertir cuando pautes + reservas y panel listos.",
    recommended: true,
    close: "Tu landing convierte. Tu sistema reserva. Tu estudio arranca con control.",
    items: [
      "Landing de conversión pensada para pauta",
      "Sistema de reservas integrado: horarios, cupos y pagos",
      "Panel de control de clases y alumnas",
      "Pagos y paquetes dentro del mismo recorrido",
      "Capacitación del equipo para operar sin fricción",
      "Reunión de arranque para alinear el lanzamiento",
      "Reunión estratégica: definición y proyección de marca",
    ],
  },
  {
    id: "estrategia",
    kicker: "AR + Estrategia",
    price: 3497000,
    line: "Todo lo de Digital, más homepage, Instagram automatizado y 3 reuniones de dirección.",
    close: "Landing + homepage + reservas + Instagram que trabaja. Marca y operación al mismo nivel.",
    items: [
      "Landing de conversión pensada para pauta",
      "Sistema de reservas integrado: horarios, cupos y pagos",
      "Panel de control de clases y alumnas",
      "Pagos y paquetes dentro del mismo recorrido",
      "Capacitación del equipo para operar sin fricción",
      "Reunión de arranque para alinear el lanzamiento",
      "Reunión estratégica: definición y proyección de marca",
      "Homepage de marca con la esencia completa de AR",
      "Automatizaciones del recorrido de la alumna",
      "Automatización completa de Instagram",
      "3 reuniones de dirección comercial",
      "Seguimiento hands-on hasta el día del lanzamiento",
    ],
  },
];

const TRANSFORMATIONS = [
  {
    before: "Sin página lista para pauta",
    after: "Landing de conversión: anuncio → interés → reserva",
  },
  {
    before: "Cupos y horarios a mano, por chat",
    after: "Sistema de reservas integrado: ella agenda sola",
  },
  {
    before: "Sin control claro de clases y alumnas",
    after: "Panel de gestión para operar el estudio con orden",
  },
  {
    before: "Pagos fuera del recorrido",
    after: "Pagos y paquetes dentro del mismo camino",
  },
  {
    before: "Marca fuerte en Instagram, débil en web",
    after: "Presencia digital a la altura del estudio (y homepage en Estrategia)",
  },
  {
    before: "Sin fecha de salida digital",
    after: "Todo queda listo el 5 de diciembre",
  },
];

const PLAN_COMPARE = [
  {
    feature: "El foco del plan",
    digital: "Convertir pauta en reservas",
    estrategia: "Marca completa + operación",
    highlight: true,
  },
  { feature: "Landing de conversión para pauta", digital: true, estrategia: true },
  { feature: "Sistema de reservas integrado", digital: true, estrategia: true },
  { feature: "Panel de clases y alumnas", digital: true, estrategia: true },
  { feature: "Pagos y paquetes en el recorrido", digital: true, estrategia: true },
  { feature: "Capacitación del equipo", digital: true, estrategia: true },
  { feature: "Reunión de arranque", digital: true, estrategia: true },
  { feature: "Reunión estratégica de marca", digital: true, estrategia: true },
  { feature: "Homepage de marca", digital: false, estrategia: true },
  { feature: "Automatizaciones del recorrido", digital: false, estrategia: true },
  { feature: "Automatización completa de Instagram", digital: false, estrategia: true },
  { feature: "3 reuniones de dirección comercial", digital: false, estrategia: true },
  { feature: "Seguimiento hands-on al lanzamiento", digital: false, estrategia: true },
];

const STEPS = [
  { num: "01", title: "Llega desde el anuncio", text: "La landing habla claro: clases, método y por qué AR." },
  { num: "02", title: "Elige su clase", text: "Reformer, Mat, Hot Barre o Jumping con cupos visibles." },
  { num: "03", title: "Reserva y paga", text: "En el sistema: horario, cupo y pago sin fricción." },
];

const BUILD = [
  { emoji: "🎯", title: "Landing de conversión", text: "Hecha para que la pauta no se desperdicie.", tag: "Pauta" },
  { emoji: "📅", title: "Reservas integradas", text: "Horarios, cupos y pagos en un solo flujo.", tag: "Sistema" },
  { emoji: "🗂️", title: "Panel del estudio", text: "Clases y alumnas bajo control, cada día.", tag: "Operación" },
  { emoji: "🏠", title: "Homepage de marca", text: "La casa digital completa de AR. En Estrategia.", tag: "Marca" },
];

const PHASES = [
  {
    num: "1",
    when: "23–26 nov",
    title: "Diseñamos",
    text: "Estructura, conversión, clases y proyección de marca.",
  },
  {
    num: "2",
    when: "27 nov – 1 dic",
    title: "Conectamos",
    text: "Landing, reservas, panel y pruebas reales.",
  },
  {
    num: "3",
    when: "2–5 dic",
    title: "Entregamos",
    text: "Publicación, capacitación y ajustes finales. Listo el 5.",
  },
];

const NAV_SECTIONS = [
  { id: "portada", label: "Tu propuesta" },
  { id: "hoy", label: "El salto digital" },
  { id: "experiencia", label: "Por qué nosotros" },
  { id: "construimos", label: "Lo que vas a tener" },
  { id: "planes", label: "Elige tu plan" },
  { id: "lanzamiento", label: "Listo el 5 dic" },
  { id: "cierre", label: "Reservar ahora" },
];

function cop(value) {
  return `$${value.toLocaleString("es-CO")}`;
}

function waUrl(plan) {
  const half = cop(plan.price / 2);
  const text = `Hola Partnersflux. Quiero comenzar con ${plan.kicker} para AR Pilates Estudio (${cop(plan.price)}, inicio con el 50%: ${half}). Entiendo que todo queda listo el 5 de diciembre.`;
  return WA_BASE + encodeURIComponent(text);
}

function CompareValue({ value }) {
  if (typeof value === "string") return <span className="ar-compare-text">{value}</span>;
  if (value) return <span className="ar-check">Sí</span>;
  return <span className="ar-x">—</span>;
}

export default function PropuestaArPilatesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setPopupOpen(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!popupOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setPopupOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [popupOpen]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".ar-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        node.classList.add("is-in");
      }
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="ar-page">
      {popupOpen ? (
        <div
          className="ar-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ar-popup-title"
          onClick={() => setPopupOpen(false)}
        >
          <div className="ar-popup-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="ar-popup-close" aria-label="Cerrar" onClick={() => setPopupOpen(false)}>
              ×
            </button>
            <b className="ar-popup-badge">Obsequio al cerrar cualquier plan</b>
            <h2 id="ar-popup-title">Por cerrar cualquier plan recibes un descuento en la sesión con camarógrafo.</h2>
            <p>
              De <s>$1.200.000</s> a <strong>$800.000</strong>. Válido al cerrar cualquier plan.
            </p>
            <a className="ar-btn ar-btn-dark" href="#planes" onClick={() => setPopupOpen(false)}>
              Empezar ahora
            </a>
          </div>
        </div>
      ) : null}

      <header className="ar-nav">
        <a href="#portada" className="ar-nav-logo" aria-label="AR Pilates Estudio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="AR Pilates Estudio" />
        </a>
        <div className="ar-nav-actions">
          <a className="ar-btn ar-btn-start" href="#cierre">
            Empezar ahora
          </a>
          <button
            type="button"
            className={`ar-burger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="ar-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav id="ar-menu" className={`ar-menu ${menuOpen ? "is-open" : ""}`} aria-label="Secciones">
          {NAV_SECTIONS.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="portada" className="ar-hero">
          <video className="ar-hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden>
            <source src={HERO} type="video/mp4" />
          </video>
          <div className="ar-hero-shade" />
          <p className="ar-kicker">Partnersflux × AR Pilates Studio</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ar-hero-logo" src={LOGO} alt="" />
          <h1>AR Pilates tiene todo para convertirse en el estudio favorito de muchas mujeres.</h1>
          <p className="ar-script">Hagamos que más lo descubran.</p>
          <p className="ar-lead">
            Landing de conversión, reservas integradas y una presencia digital lista para llenar clases.
          </p>
          <p className="ar-date">Todo queda listo el 5 de diciembre.</p>
          <a className="ar-btn ar-btn-light ar-btn-pulse" href="#planes">
            Descubre tu propuesta
          </a>
          <p className="ar-meta">
            <a href={IG} target="_blank" rel="noreferrer">
              @arpilates.estudio
            </a>
            <span>Calle 8 sur # 38B-24 · Ciudad Montes, Bogotá</span>
          </p>
        </section>

        <section id="hoy" className="ar-section ar-reveal">
          <div className="ar-wrap">
            <header className="ar-head">
              <p className="ar-eyebrow">El antes y el después</p>
              <h2>De un Instagram bonito a un estudio que convierte y reserva solo.</h2>
            </header>
            <div className="ar-table" role="table" aria-label="Transformaciones para AR Pilates">
              <div className="ar-table-head" role="row">
                <span role="columnheader">Hoy</span>
                <span role="columnheader">Con Partnersflux</span>
              </div>
              {TRANSFORMATIONS.map((row) => (
                <div key={row.before} className="ar-table-row" role="row">
                  <p role="cell">{row.before}</p>
                  <p className="ar-table-after" role="cell">
                    {row.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="ar-section ar-section-soft ar-reveal">
          <div className="ar-wrap">
            <header className="ar-head">
              <p className="ar-eyebrow">La experiencia</p>
              <h2>Así reserva una alumna desde el anuncio</h2>
            </header>
            <div className="ar-steps">
              {STEPS.map((step, index) => (
                <article key={step.num} className="ar-step ar-stagger" style={{ "--delay": `${index * 90}ms` }}>
                  <strong>{step.num}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="ar-stage">
              <div className="ar-phone" aria-hidden>
                <div className="ar-phone-bar">AR Pilates</div>
                <p>Reformer · Mat · Hot Barre · Jumping</p>
                <span>Elige horario</span>
                <span>Confirma tu cupo</span>
                <b>Reservar</b>
              </div>
              <div className="ar-stage-copy">
                <p className="ar-eyebrow">En ambos planes</p>
                <h3>El sistema de reservas va incluido desde el día uno.</h3>
                <p>
                  Ella elige, reserva y paga. Ustedes operan desde el panel. Sin depender de responder cada mensaje a
                  tiempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="construimos" className="ar-section ar-reveal">
          <div className="ar-wrap">
            <header className="ar-head">
              <p className="ar-eyebrow">Qué construiremos</p>
              <h2>Piezas que llenan clases, no solo una web bonita.</h2>
            </header>
            <div className="ar-grid">
              {BUILD.map((item, index) => (
                <article key={item.title} className="ar-card ar-stagger" style={{ "--delay": `${index * 80}ms` }}>
                  <div className="ar-card-top">
                    <span className="ar-emoji" aria-hidden>
                      {item.emoji}
                    </span>
                    <em>{item.tag}</em>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <p className="ar-note">
              El sistema de reservas integrado usa el panel de la plataforma externa. No es un software propio.
            </p>
          </div>
        </section>

        <section id="planes" className="ar-section ar-section-soft ar-reveal">
          <div className="ar-wrap">
            <header className="ar-head">
              <p className="ar-eyebrow">Elige tu plan</p>
              <h2>Dos niveles. El primero ya llega completo para convertir.</h2>
              <p className="ar-lead">
                Digital es la base para iniciar la marca online y empezar a convertir. Estrategia suma homepage,
                Instagram automatizado y más dirección.
              </p>
            </header>

            <aside className="ar-gift">
              <div className="ar-gift-top">
                <b className="ar-gift-badge">Obsequio al cerrar cualquier plan</b>
                <span>Ahorras $400.000</span>
              </div>
              <p className="ar-gift-kicker">Al cerrar Digital o Estrategia</p>
              <h3>Sesión con camarógrafo personal</h3>
              <div className="ar-gift-price">
                <s>$1.200.000</s>
                <strong>$800.000</strong>
              </div>
              <p>Válido al cerrar cualquier plan.</p>
            </aside>

            <div className="ar-plans">
              {PLANS.map((item) => (
                <a
                  key={item.id}
                  className={`ar-plan-card ar-plan-card-link ${item.recommended ? "is-reco" : ""}`}
                  href={waUrl(item)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.recommended ? <b className="ar-badge">Recomendado al iniciar la marca</b> : null}
                  <span>{item.kicker}</span>
                  <strong>{cop(item.price)}</strong>
                  <em>{item.line}</em>
                  <ul>
                    {item.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <span className={`ar-btn ${item.recommended ? "ar-btn-dark ar-btn-pulse" : "ar-btn-outline"}`}>
                    Quiero {item.kicker}
                  </span>
                </a>
              ))}
            </div>

            <div className="ar-compare" role="table" aria-label="Comparación de planes AR">
              <div className="ar-compare-head" role="row">
                <span role="columnheader">Qué incluye</span>
                <span role="columnheader">
                  Digital
                  <b>{cop(2697000)}</b>
                </span>
                <span role="columnheader">
                  Estrategia
                  <b>{cop(3497000)}</b>
                </span>
              </div>
              {PLAN_COMPARE.map((row) => (
                <div key={row.feature} className={`ar-compare-row ${row.highlight ? "is-key" : ""}`} role="row">
                  <p role="cell">{row.feature}</p>
                  <div role="cell" className="ar-compare-cell">
                    <CompareValue value={row.digital} />
                  </div>
                  <div role="cell" className="ar-compare-cell">
                    <CompareValue value={row.estrategia} />
                  </div>
                </div>
              ))}
            </div>

            <aside className="ar-reco">
              <p>Recomendación</p>
              <h3>Al iniciar la marca digital, empieza con Digital.</h3>
              <p>
                Sales el 5 de diciembre con landing, reservas y panel: la base para que AR exista online y convierta.
                Si quieres la casa completa de marca, Instagram automatizado y más dirección, ve directo a Estrategia.
              </p>
            </aside>
          </div>
        </section>

        <section id="lanzamiento" className="ar-section ar-reveal">
          <div className="ar-wrap">
            <header className="ar-head">
              <p className="ar-eyebrow">Lanzamiento</p>
              <h2>Del 23 de noviembre al 5 de diciembre. Doce días. Tres fases.</h2>
            </header>
            <ol className="ar-weeks">
              {PHASES.map((phase, index) => (
                <li key={phase.num} className="ar-stagger" style={{ "--delay": `${index * 110}ms` }}>
                  <span className="ar-dot">{phase.num}</span>
                  <div>
                    <span>{phase.when}</span>
                    <strong>{phase.title}</strong>
                    <p>{phase.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="ar-note">
              Arranca con el 50% y los materiales esta semana. La entrega de todo es el 5 de diciembre.
            </p>
          </div>
        </section>

        <section id="cierre" className="ar-close ar-reveal">
          <div className="ar-close-glow" />
          <p className="ar-kicker">Partnersflux × AR Pilates Studio</p>
          <h2>El siguiente capítulo de AR empieza aquí.</h2>
          <p className="ar-script">Elige tu nivel. Pulsa. Te escribimos por WhatsApp con todo listo.</p>
          <p className="ar-date">Todo queda listo el 5 de diciembre.</p>
          <p className="ar-close-summary">50% para iniciar · 50% contra entrega</p>

          <aside className="ar-close-gift">
            <b className="ar-close-gift-badge">Obsequio al cerrar cualquier plan</b>
            <p>
              Sesión con camarógrafo: de <s>$1.200.000</s> a <strong>$800.000</strong>. Válido al cerrar cualquier
              plan.
            </p>
          </aside>

          <div className="ar-close-plans">
            {PLANS.map((item) => (
              <a
                key={item.id}
                className={`ar-close-plan ${item.recommended ? "is-reco" : ""}`}
                href={waUrl(item)}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.kicker}</span>
                <strong>{cop(item.price)}</strong>
                <em>Inicio {cop(item.price / 2)}</em>
                <b className="ar-btn ar-btn-light">Quiero este plan</b>
              </a>
            ))}
          </div>

          <p className="ar-fine">
            No incluye anuncios, dominio ni producción adicional. El obsequio del camarógrafo aplica al cerrar
            cualquier plan.
          </p>
        </section>
      </main>
    </div>
  );
}
