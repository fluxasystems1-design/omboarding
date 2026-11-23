"use client";

import { useEffect, useState } from "react";

const IG = "https://www.instagram.com/losexpatriadosbog/";
const WA_BASE = "https://wa.me/573116425337?text=";
const IMG = "/imagenes/los-expatriados";
const LOGO = `${IMG}/logo.png?v=4`;
const HERO = `${IMG}/hero.jpg?v=7`;
const HERO_MOBILE = `${IMG}/hero-mobile.jpg?v=1`;

const PLANS = [
  {
    id: "tienda",
    num: "01",
    kicker: "Plan PDM · Tienda Digital",
    title: "Tienda Digital",
    line: "Salen a vender online con catálogo, pagos y pedidos claros.",
    price: 2697000,
    was: 3197000,
    save: 500000,
    recommended: false,
    items: [
      "Home con historia de la marca (quiénes son y por qué antoja)",
      "Catálogo digital modificable: fotos, precios, variantes y combos",
      "Tienda online lista para pedir: carrito y checkout",
      "Pagos digitales configurados en el recorrido de compra",
      "Pedidos y entregas: zonas, costos y estados básicos",
      "Panel para cargar, editar y actualizar productos y stock",
      "Reunión estratégica: definición y proyección de marca",
      "Reunión de arranque + capacitación para operar la tienda",
    ],
  },
  {
    id: "crecimiento",
    num: "02",
    kicker: "Plan PDM · Tienda + Crecimiento",
    title: "Tienda + Crecimiento",
    line: "Venden online, cotizan eventos y automatizan el seguimiento.",
    price: 3497000,
    was: 4997000,
    save: 1500000,
    recommended: true,
    items: [
      "Home con historia de la marca (quiénes son y por qué antoja)",
      "Catálogo digital modificable: fotos, precios, variantes y combos",
      "Tienda online lista para pedir: carrito y checkout",
      "Pagos digitales configurados en el recorrido de compra",
      "Pedidos y entregas: zonas, costos y estados básicos",
      "Panel para cargar, editar y actualizar productos y stock",
      "Reunión estratégica: definición y proyección de marca",
      "Reunión de arranque + capacitación para operar la tienda",
      "Landing de eventos y experiencias (#TortillayPola y más)",
      "Formulario de cotización organizado para empresas y eventos",
      "Estructura comercial de ofertas, combos y paquetes",
      "Automatizaciones del recorrido: confirmación y seguimiento",
      "Conexión WhatsApp Business al flujo de pedidos y cotizaciones",
      "Ruta estratégica de contenido: ideas, guiones y CTA",
      "3 sesiones estratégicas de dirección comercial con Jessica",
      "Reunión de ruta de alianzas estratégicas a concretar",
    ],
  },
];

const TRANSFORMATIONS = [
  {
    before: "Pedidos sueltos por Instagram y WhatsApp",
    after: "Tienda online clara: catálogo, combos y pago",
  },
  {
    before: "La historia de la marca vive solo en la bio",
    after: "Home que cuenta la receta y despierta el antojo",
  },
  {
    before: "Eventos y cotizaciones a mano, sin orden",
    after: "Landing de eventos + formulario de cotización",
  },
  {
    before: "Sin ruta de contenido para vender",
    after: "Ideas, guiones y CTA para conectar y convertir",
  },
  {
    before: "Presencia fuerte en IG, débil para escalar",
    after: "Ecosistema digital listo para crecer mes a mes",
  },
];

const OPPORTUNITIES = [
  {
    title: "Hogares",
    text: "Pedidos, combos y mesas para compartir.",
    img: `${IMG}/mesa-brand.jpg`,
    pos: "center 45%",
  },
  {
    title: "Desayunos",
    text: "El antojo de la mañana, listo para pedir.",
    img: `${IMG}/producto.png`,
    pos: "center 40%",
  },
  {
    title: "#TortillayPola",
    text: "Eventos, encuentros y experiencias alrededor del sabor.",
    img: `${IMG}/hero.jpg`,
    pos: "center 55%",
  },
  {
    title: "Comunidad",
    text: "Clientes, aliados y mesas que ya confían en la marca.",
    img: `${IMG}/comunidad.png`,
    pos: "center 35%",
  },
];

const ECOSYSTEM = [
  { icon: "🌐", title: "Los Expatriados · Web principal", text: "Una historia que conecta y despierta el antojo" },
  { icon: "🛍️", title: "Tienda + catálogo", text: "Elegir, combinar, pagar y pedir" },
  { icon: "📅", title: "Landing de eventos", text: "Descubrir y cotizar experiencias" },
  { icon: "🔗", title: "Sistema comercial conectado", text: "Pedidos · Automatizaciones · Cotizaciones" },
];

const PILLARS = [
  { num: "01", title: "Comprar fácil", text: "Catálogo, combos, pagos y pedidos" },
  { num: "02", title: "Cotizar eventos", text: "Solicitudes organizadas en un solo lugar" },
  { num: "03", title: "Automatizar", text: "Confirmaciones y seguimiento sin fricción" },
  { num: "04", title: "Crecer", text: "Contenido y dirección para vender más" },
];

const CONTENT_TAGS = ["Historia de marca", "Contenido que antoja", "Eventos y experiencias", "Contenido que vende"];

const COMPARE = [
  {
    feature: "El foco del plan",
    tienda: "Vender online con claridad",
    crecimiento: "Vender + eventos + crecimiento",
    highlight: true,
  },
  { feature: "Home con historia de marca", tienda: true, crecimiento: true },
  { feature: "Catálogo modificable (fotos, precios, combos)", tienda: true, crecimiento: true },
  { feature: "Carrito, checkout y pagos", tienda: true, crecimiento: true },
  { feature: "Pedidos, entregas y panel editable", tienda: true, crecimiento: true },
  { feature: "Reunión estratégica de marca", tienda: true, crecimiento: true },
  { feature: "Landing de eventos + cotización", tienda: false, crecimiento: true },
  { feature: "Automatizaciones del recorrido", tienda: false, crecimiento: true },
  { feature: "WhatsApp Business en el flujo", tienda: false, crecimiento: true },
  { feature: "Ruta de contenido + 3 sesiones Jessica", tienda: false, crecimiento: true },
  { feature: "Ruta de alianzas estratégicas", tienda: false, crecimiento: true },
];

const STEPS = [
  { num: "1", title: "Descubrimos", text: "Analizamos el negocio, productos y oportunidades." },
  { num: "2", title: "Construimos", text: "Diseñamos e implementamos el ecosistema digital." },
  { num: "3", title: "Activamos", text: "Entregamos la estrategia y conectamos canales." },
  { num: "4", title: "Te acompañamos", text: "Capacitación, revisión y herramientas de operación." },
];

const NAV = [
  { id: "portada", label: "Portada" },
  { id: "origen", label: "Origen" },
  { id: "oportunidades", label: "Oportunidades" },
  { id: "ecosistema", label: "Ecosistema" },
  { id: "contenido", label: "Contenido" },
  { id: "planes", label: "Planes" },
  { id: "proceso", label: "Proceso" },
  { id: "cierre", label: "Cierre" },
];

function cop(value) {
  return `$${value.toLocaleString("es-CO")}`;
}

function waUrl(plan) {
  const half = cop(plan.price / 2);
  const text = `Hola Partnersflux. Quiero el plan ${plan.title} para Los Expatriados (${cop(plan.price)}, inicio 50%: ${half}). Instagram @losexpatriadosbog.`;
  return WA_BASE + encodeURIComponent(text);
}

export default function PropuestaLosExpatriadosPage() {
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
    const nodes = document.querySelectorAll(".le-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) node.classList.add("is-in");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="le-page">
      {popupOpen ? (
        <div
          className="le-popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="le-popup-title"
          onClick={() => setPopupOpen(false)}
        >
          <div className="le-popup-card" onClick={(event) => event.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="le-popup-bg" src={`${IMG}/mesa-brand.jpg`} alt="" />
            <div className="le-popup-shade" />
            <div className="le-popup-body">
              <button type="button" className="le-popup-close" aria-label="Cerrar" onClick={() => setPopupOpen(false)}>
                ×
              </button>
              <b className="le-popup-badge le-bf-badge">Black Friday · 2 bonos</b>
              <h2 id="le-popup-title">Al cerrar cualquier plan, los activas juntos</h2>
              <div className="le-popup-bonuses">
                <article className="le-bf-frame">
                  <b className="le-bf-tag">Black Friday</b>
                  <span>01 · Producción</span>
                  <strong>Sesión con camarógrafo</strong>
                  <p>
                    Producción audiovisual para capturar el producto, la mesa y el vibe de la marca con calidad
                    profesional.
                  </p>
                  <div className="le-popup-price">
                    <s>$1.200.000</s>
                    <em>$800.000</em>
                  </div>
                </article>
                <article className="le-bf-frame">
                  <b className="le-bf-tag">Black Friday</b>
                  <span>02 · Pauta</span>
                  <strong>Desarrollo de pauta estratégica</strong>
                  <p>
                    Diseño de campaña con especialista: objetivos, audiencias, mensajes y estructura de anuncios para
                    impulsar ventas.
                  </p>
                  <div className="le-popup-price">
                    <s>$1.200.000</s>
                    <em>$700.000</em>
                  </div>
                </article>
              </div>
              <p className="le-popup-note">Válido en Tienda Digital o Tienda + Crecimiento</p>
              <a className="le-btn le-btn-popup le-btn-pulse" href="#planes" onClick={() => setPopupOpen(false)}>
                Empezar ahora
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <header className="le-nav">
        <a href="#portada" className="le-nav-logo" aria-label="Los Expatriados">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="Los Expatriados" />
        </a>
        <nav className="le-nav-links" aria-label="Secciones">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="le-nav-actions">
          <a className="le-btn le-btn-start" href="#planes">
            Empezar ahora
          </a>
          <button
            type="button"
            className={`le-burger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className={`le-menu ${menuOpen ? "is-open" : ""}`} aria-label="Menú móvil">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="portada" className="le-hero">
          <picture className="le-hero-bg">
            <source media="(max-width: 759px)" srcSet={HERO_MOBILE} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO} alt="" />
          </picture>
          <div className="le-hero-shade" />
          <p className="le-kicker">Partnersflux × Los Expatriados</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="le-hero-logo" src={LOGO} alt="" />
          <h1>Una receta. Muchas mesas por conquistar.</h1>
          <p className="le-script">Tortillas españolas con sabor colombiano.</p>
          <p className="le-lead">Estrategia y tecnología para llenar más mesas.</p>
          <a className="le-btn le-btn-light le-btn-pulse" href="#planes">
            Descubre tu propuesta
          </a>
          <a className="le-ig" href={IG} target="_blank" rel="noreferrer">
            @losexpatriadosbog
          </a>
        </section>

        <section id="origen" className="le-section le-reveal">
          <div className="le-wrap">
            <header className="le-head">
              <p className="le-num">02</p>
              <h2>De un pedido suelto a un estudio que se puede comprar.</h2>
              <p className="le-script le-script-ink">
                Expertos en tortillas de papa. Españolas con sabor colombiano.
              </p>
            </header>
            <div className="le-table" role="table" aria-label="Transformaciones Los Expatriados">
              <div className="le-table-head" role="row">
                <span role="columnheader">Hoy</span>
                <span role="columnheader">Con Partnersflux</span>
              </div>
              {TRANSFORMATIONS.map((row) => (
                <div key={row.before} className="le-table-row" role="row">
                  <p role="cell">{row.before}</p>
                  <p className="le-table-after" role="cell">
                    {row.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="oportunidades" className="le-section le-reveal">
          <div className="le-wrap">
            <header className="le-head">
              <p className="le-num">03</p>
              <h2>Una marca. Nuevas oportunidades.</h2>
              <p className="le-script le-script-ink">Canales listos para llenar mesas.</p>
            </header>
            <div className="le-opp-grid">
              {OPPORTUNITIES.map((item, i) => (
                <article key={item.title} className="le-opp le-stagger" style={{ "--d": `${i * 70}ms` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt="" style={{ objectPosition: item.pos }} />
                  <div className="le-opp-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="le-note">
              Empezaremos por los canales con mayor potencial inmediato y prepararemos la marca para crecer.
            </p>
          </div>
        </section>

        <section id="ecosistema" className="le-section le-section-soft le-reveal">
          <div className="le-wrap">
            <p className="le-num">04</p>
            <h2>Así imaginamos su ecosistema digital</h2>
            <div className="le-eco">
              <div className="le-eco-node is-main">
                <span aria-hidden>{ECOSYSTEM[0].icon}</span>
                <strong>{ECOSYSTEM[0].title}</strong>
                <p>{ECOSYSTEM[0].text}</p>
              </div>
              <div className="le-eco-branch">
                {ECOSYSTEM.slice(1, 3).map((item) => (
                  <div key={item.title} className="le-eco-node">
                    <span aria-hidden>{item.icon}</span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="le-eco-node">
                <span aria-hidden>{ECOSYSTEM[3].icon}</span>
                <strong>{ECOSYSTEM[3].title}</strong>
                <p>{ECOSYSTEM[3].text}</p>
              </div>
            </div>

            <p className="le-num le-num-space">05</p>
            <h2>Mucho más que una página web</h2>
            <div className="le-pillars">
              {PILLARS.map((item, i) => (
                <article key={item.title} className="le-pillar le-stagger" style={{ "--d": `${i * 60}ms` }}>
                  <span>{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contenido" className="le-section le-reveal">
          <div className="le-wrap">
            <div className="le-story">
              <figure className="le-story-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/contenido.png`} alt="Producto Tortillas de Los Expatriados" />
              </figure>
              <div className="le-story-copy">
                <p className="le-num">06</p>
                <h2>Tu historia también vende</h2>
                <p className="le-script le-script-ink">No se trata de publicar más. Se trata de conectar mejor.</p>
                <p>
                  Construiremos una ruta de contenido alrededor de la historia, el producto y las experiencias que
                  queremos conquistar.
                </p>
                <div className="le-tags">
                  {CONTENT_TAGS.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="le-note">
                  Ideas, guiones y llamados a la acción para que la marca sepa qué comunicar y cómo hacerlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="le-section le-section-soft le-reveal">
          <div className="le-wrap">
            <p className="le-num">07</p>
            <h2>Dos caminos, un mismo objetivo</h2>

            <aside className="le-bonuses">
              <b className="le-bonuses-badge le-bf-badge">Black Friday · Bonos al cerrar</b>
              <p className="le-bonuses-kicker">Se activan juntos al cerrar Tienda o Crecimiento</p>
              <div className="le-bonuses-grid">
                <article className="le-bf-frame">
                  <b className="le-bf-tag">Black Friday</b>
                  <span>Obsequio 01</span>
                  <h3>Sesión con camarógrafo personal</h3>
                  <div className="le-bonuses-price">
                    <s>$1.200.000</s>
                    <strong>$800.000</strong>
                  </div>
                </article>
                <article className="le-bf-frame">
                  <b className="le-bf-tag">Black Friday</b>
                  <span>Obsequio 02</span>
                  <h3>Desarrollo de pauta estratégica con especialista</h3>
                  <div className="le-bonuses-price">
                    <s>$1.200.000</s>
                    <strong>$700.000</strong>
                  </div>
                </article>
              </div>
              <p>Válido al cerrar cualquiera de los dos planes.</p>
            </aside>

            <div className="le-plans">
              {PLANS.map((plan) => (
                <a
                  key={plan.id}
                  className={`le-plan ${plan.recommended ? "is-reco" : ""}`}
                  href={waUrl(plan)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {plan.recommended ? <b className="le-badge">Recomendado</b> : null}
                  <span>{plan.kicker}</span>
                  <h3>{plan.title}</h3>
                  <p>{plan.line}</p>
                  <div className="le-price">
                    <s>{cop(plan.was)}</s>
                    <em>Precio especial</em>
                  </div>
                  <strong>{cop(plan.price)} COP</strong>
                  <small>Beneficio de vinculación: {cop(plan.save)}</small>
                  <div className="le-pay">
                    <p>
                      <span>Al iniciar</span>
                      <b>{cop(plan.price / 2)}</b>
                    </p>
                    <p>
                      <span>Contra entrega</span>
                      <b>{cop(plan.price / 2)}</b>
                    </p>
                  </div>
                  <p className="le-incluye">Incluye</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="le-btn le-btn-light">Quiero este plan</span>
                </a>
              ))}
            </div>

            <p className="le-num le-num-space">08</p>
            <h2>¿Qué cambia entre los dos planes?</h2>
            <div className="le-compare" role="table">
              <div className="le-compare-head" role="row">
                <span>Qué incluye</span>
                <span>Tienda</span>
                <span>Crecimiento</span>
              </div>
              {COMPARE.map((row) => (
                <div key={row.feature} className={`le-compare-row ${row.highlight ? "is-key" : ""}`} role="row">
                  <p>{row.feature}</p>
                  <span className={typeof row.tienda === "string" ? "le-compare-text" : row.tienda ? "le-yes" : "le-no"}>
                    {typeof row.tienda === "string" ? row.tienda : row.tienda ? "✓" : "—"}
                  </span>
                  <span
                    className={
                      typeof row.crecimiento === "string" ? "le-compare-text" : row.crecimiento ? "le-yes" : "le-no"
                    }
                  >
                    {typeof row.crecimiento === "string" ? row.crecimiento : row.crecimiento ? "✓" : "—"}
                  </span>
                </div>
              ))}
              <div className="le-compare-row is-price" role="row">
                <p>Inversión</p>
                <span>{cop(2697000)}</span>
                <span>{cop(3497000)}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="le-section le-reveal">
          <div className="le-wrap">
            <p className="le-num">09</p>
            <h2>De la estrategia a la acción</h2>
            <ol className="le-steps">
              {STEPS.map((step) => (
                <li key={step.num}>
                  <b>{step.num}</b>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="le-note">Tiempo estimado de implementación: 3 a 5 semanas.</p>
          </div>
        </section>

        <section id="cierre" className="le-close le-reveal">
          <p className="le-num">10</p>
          <h2>Lo mejor de esta historia es que apenas está comenzando.</h2>
          <p>Ustedes ponen el sabor, la experiencia y una historia que vale la pena contar.</p>
          <p>Nosotros ponemos la estrategia y la tecnología para llevar Los Expatriados a muchas más mesas.</p>
          <p className="le-close-summary">50% al iniciar · 50% contra entrega</p>
          <aside className="le-close-gift">
            <b className="le-close-gift-badge le-bf-badge">Black Friday · Bonos al cerrar</b>
            <p>
              Camarógrafo <s>$1.200.000</s> → <strong>$800.000</strong> · Pauta estratégica <s>$1.200.000</s> →{" "}
              <strong>$700.000</strong>
            </p>
          </aside>
          <div className="le-close-plans">
            {PLANS.map((plan) => (
              <a key={plan.id} className="le-close-plan" href={waUrl(plan)} target="_blank" rel="noreferrer">
                <span>{plan.title}</span>
                <strong>{cop(plan.price)}</strong>
                <em>
                  Inicio {cop(plan.price / 2)} · Entrega {cop(plan.price / 2)}
                </em>
              </a>
            ))}
          </div>
          <p className="le-fine">
            Inversión única de implementación. No incluye dominio, hosting, plataformas externas, comisiones de pago,
            pauta ni producción audiovisual. Los bonos aplican al cerrar cualquier plan.
          </p>
          <div className="le-close-foot">
            <b>Partnersflux</b>
            <span>Estrategia + Tecnología</span>
          </div>
        </section>
      </main>
    </div>
  );
}
