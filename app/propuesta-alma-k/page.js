"use client";

import { useEffect, useMemo, useState } from "react";

const BRAND = "Almak";
const BRAND_FULL = "Almak";
const LOGO = "/imagenes/alma-k/logo.png?v=10";
const HERO = "/imagenes/alma-k/hero.png?v=6";
const PHOTO_PRODUCTOS = "/imagenes/alma-k/productos.png?v=1";
const PHOTO_VASO = "/imagenes/alma-k/vaso-jamaica.png?v=1";
const PHOTO_MANO = "/imagenes/alma-k/mano-jamaica.png?v=1";
const IG_URL = "https://www.instagram.com/almakcol/";
const WEB_URL = "https://www.almak.com.co";
const WA_NUMBER = "573116425337";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vemos", label: "Lo que vemos" },
  { id: "paso", label: "Siguiente paso" },
  { id: "oportunidad", label: "Oportunidad" },
  { id: "construir", label: "Sistema" },
  { id: "rutas", label: "Planes" },
  { id: "comparar", label: "Comparar" },
  { id: "como", label: "Cómo" },
  { id: "continuidad", label: "Continuidad" },
  { id: "cierre", label: "Cierre" },
];

const FAVOR = [
  "Una identidad de marca reconocible y coherente.",
  "Una comunidad de más de 6.000 seguidores en Instagram.",
  "Fotografías y presentación de producto cuidadas.",
  "Un sitio web con catálogo, carrito y fichas de producto.",
  "Una línea de bebidas con oportunidades para crear combos y estimular la recompra.",
  "Un equipo que ya produce contenido.",
];

const STRENGTHEN = [
  {
    title: "Una experiencia de compra más sencilla",
    text: "Revisar el recorrido desde Instagram hasta el pago, identificar dónde se generan fricciones y facilitar que más visitantes completen su pedido.",
  },
  {
    title: "Una tienda que ayude a vender",
    text: "Fortalecer las páginas de producto con información que resuelva dudas, explique su valor y motive la compra.",
  },
  {
    title: "Una relación que continúe después de la primera venta",
    text: "Crear comunicaciones para acompañar a sus clientes, incentivar nuevas compras y mantener viva la relación con la marca.",
  },
  {
    title: "Contenido con una intención comercial",
    text: "Conectar lo que Almak ya comunica con recorridos que lleven a descubrir, considerar y comprar sus productos.",
  },
  {
    title: "Lanzamientos con estrategia",
    text: "Preparar cada nuevo producto para generar expectativa, atraer compradores y aprovechar la comunidad que ya existe.",
  },
];

const SYSTEM = [
  {
    num: "01",
    title: "Descubrimiento",
    text: "Las personas conocen Almak a través de Instagram, recomendaciones, contenido y campañas.",
  },
  {
    num: "02",
    title: "Compra",
    text: "Llegan a una experiencia de ecommerce clara, atractiva y preparada para facilitar su decisión.",
  },
  {
    num: "03",
    title: "Conexión",
    text: "Reciben información útil, atención cuando la necesitan y una experiencia de compra que las hace sentir acompañadas.",
  },
  {
    num: "04",
    title: "Recompra",
    text: "La marca vuelve a conectar con sus clientes a través de recordatorios oportunos, novedades, combos y experiencias relevantes.",
  },
];

const TIENDA_ITEMS = [
  "Construcción u optimización de su tienda online, según la evaluación técnica del sitio actual.",
  "Catálogo de productos organizado, con variantes e inventario.",
  "Integración de una pasarela de pagos para facilitar la compra.",
  "Configuración de opciones de envío.",
  "Páginas comerciales para sus cuatro líneas actuales: JAMU, Masala Chai, JAMUshots y Té de Flor de Jamaica.",
  "Espacios para reseñas y experiencias reales de clientes.",
  "Combos y paquetes que permitan explorar oportunidades de mayor valor por pedido.",
  "Información clara de envíos, cambios y preguntas frecuentes.",
  "Integración de WhatsApp como canal de acompañamiento.",
  "Capacitación para administrar la tienda, los productos y los pedidos.",
];

const CRECIMIENTO_EXTRA = [
  {
    label: "Una experiencia conectada entre Instagram y la tienda",
    items: [
      "Automatizaciones por palabras clave para conectar conversaciones con productos.",
      "Respuestas a preguntas frecuentes sobre precios, envíos y pedidos.",
      "Recorridos que lleven a cada cliente al producto que le interesa.",
      "Acompañamiento humano cuando la conversación lo necesite.",
    ],
  },
  {
    label: "Una estrategia para que los clientes vuelvan",
    items: [
      "Mensajes de bienvenida y agradecimiento después de la compra.",
      "Comunicación sobre el uso y disfrute de los productos.",
      "Recordatorios de recompra adaptados al consumo y la frecuencia de compra.",
      "Recuperación de carritos abandonados, cuando el cliente haya autorizado las comunicaciones.",
      "Oportunidades para presentar combos y productos complementarios.",
    ],
  },
  {
    label: "Contenido que conecte con las ventas",
    items: [
      "Estrategia de contenido con enfoque comercial.",
      "Calendario estratégico de 60 días.",
      "15 guiones de reels para que su equipo los produzca manteniendo la identidad de Almak.",
      "Estrategia de contenido generado por clientes y creadoras (UGC).",
      "Sistema para solicitar y aprovechar testimonios reales.",
      "Laboratorio estratégico personalizado en Notion.",
    ],
  },
  {
    label: "Medición y conexión comercial",
    items: [
      "Configuración de herramientas de medición.",
      "Integración del catálogo con Meta.",
      "Dos sesiones de capacitación para el equipo.",
    ],
  },
];

const EXPANSION_EXTRA = [
  {
    label: "Una estrategia de prelanzamiento",
    items: [
      "Concepto y narrativa comercial del chía pudín.",
      "Landing exclusiva para presentar el nuevo producto.",
      "Lista de espera para captar personas interesadas.",
      "Estrategia de expectativa y acceso anticipado.",
      "Propuesta de combos con la línea actual de Almak.",
    ],
  },
  {
    label: "Una comunidad que impulse el lanzamiento",
    items: [
      "Estrategia de siembra de producto con clientes y microcreadoras.",
      "Guía de contenido UGC para las colaboraciones.",
      "Plan para recopilar experiencias y reseñas auténticas.",
      "Calendario de comunicación antes, durante y después del lanzamiento.",
    ],
  },
  {
    label: "Campañas para llegar a más personas",
    items: [
      "Estrategia de Meta Ads para la tienda y el nuevo producto.",
      "10 guiones para anuncios.",
      "5 creativos publicitarios.",
      "Configuración y gestión del primer mes de campañas.",
      "Seguimiento y optimización de resultados durante el período contratado.",
    ],
  },
];

const COMPARE_ROWS = [
  { f: "Ecommerce optimizado", t: "✓", l: "✓", e: "✓" },
  { f: "Pagos y experiencia de compra", t: "✓", l: "✓", e: "✓" },
  { f: "Páginas por producto", t: "✓", l: "✓", e: "✓" },
  { f: "Combos y oportunidades de recompra", t: "✓", l: "✓", e: "✓" },
  { f: "Instagram automatizado", t: "—", l: "✓", e: "✓" },
  { f: "Seguimiento poscompra", t: "—", l: "✓", e: "✓" },
  { f: "Recuperación de carritos", t: "—", l: "✓", e: "✓" },
  { f: "Estrategia de contenido", t: "—", l: "✓", e: "✓" },
  { f: "15 guiones de reels", t: "—", l: "✓", e: "✓" },
  { f: "Estrategia UGC", t: "—", l: "✓", e: "✓" },
  { f: "Lista de espera del chía pudín", t: "—", l: "—", e: "✓" },
  { f: "Estrategia de lanzamiento", t: "—", l: "—", e: "✓" },
  { f: "Creativos y gestión de Meta Ads", t: "—", l: "—", e: "✓" },
  {
    f: "Inversión COP",
    t: "$3.197.000",
    l: "$4.997.000",
    e: "$7.297.000",
    price: true,
  },
];

const PHASES = [
  {
    num: "01",
    title: "Conocer y preparar",
    text: "Revisaremos la tienda actual, sus recorridos de compra, productos, procesos y oportunidades de mejora. Definiremos las prioridades y organizaremos lo necesario para construir.",
  },
  {
    num: "02",
    title: "Construir y conectar",
    text: "Trabajaremos en el ecommerce, la experiencia de pago y, según el plan, la conexión de Instagram, las automatizaciones y la estrategia de contenido.",
  },
  {
    num: "03",
    title: "Activar y acompañar",
    text: "Probaremos el funcionamiento de los recorridos y prepararemos al equipo para utilizar las herramientas. En Expansión, también prepararemos y activaremos el lanzamiento del chía pudín, según la fecha que definamos juntos.",
  },
  {
    num: "04",
    title: "Medir para seguir creciendo",
    text: "Revisaremos los primeros resultados disponibles, identificaremos oportunidades de mejora y dejaremos recomendaciones para la siguiente etapa.",
  },
];

const CONTINUITY = [
  {
    name: "Esencial",
    price: "$130.000 COP/mes",
    items: [
      "Revisión mensual",
      "Corrección de errores menores",
      "Hasta dos consultas de soporte por WhatsApp",
    ],
    featured: false,
  },
  {
    name: "Mantenimiento",
    price: "$305.000 COP/mes",
    items: [
      "Ajustes técnicos",
      "Actualización de productos y precios",
      "Mantenimiento de las automatizaciones implementadas",
      "Acompañamiento prioritario",
    ],
    featured: true,
  },
  {
    name: "Gestión de crecimiento",
    price: "$790.000 COP/mes",
    items: [
      "Todo lo de Mantenimiento",
      "Gestión de Meta Ads",
      "Optimización semanal",
      "Dos creativos nuevos al mes",
      "Informe mensual de resultados y oportunidades",
    ],
    featured: false,
  },
];

const ROUTES = [
  {
    id: "tienda",
    tag: "Plan 01 · Tienda",
    name: "PDM Almak Tienda",
    short: "Tienda",
    price: 3197000,
    half: 1598500,
    featured: false,
    desc: "Hagamos que comprar en Almak sea tan agradable como descubrirla.",
    allows:
      "Que Almak cuente con una tienda preparada para recibir a sus clientes, facilitar sus compras y aprovechar mejor el interés que genera su contenido.",
  },
  {
    id: "crecimiento",
    tag: "Plan recomendado · Crecimiento",
    name: "PDM Almak Crecimiento",
    short: "Crecimiento",
    price: 4997000,
    half: 2498500,
    featured: true,
    desc: "Que las ventas no terminen cuando alguien sale de Instagram.",
    allows:
      "Que el contenido atraiga, la tienda facilite la compra y las automatizaciones ayuden a mantener la relación con el cliente.",
  },
  {
    id: "expansion",
    tag: "Plan 03 · Expansión",
    name: "PDM Almak Expansión",
    short: "Expansión",
    price: 7297000,
    half: 3648500,
    featured: false,
    desc: "Su próximo lanzamiento puede convertirse en mucho más que un nuevo producto.",
    allows:
      "Utilizar la llegada del chía pudín para generar nuevas conversaciones, atraer compradores y crear más oportunidades para todo el portafolio.",
  },
];

function formatCop(n) {
  return new Intl.NumberFormat("es-CO").format(n);
}

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
  const [selectedId, setSelectedId] = useState("crecimiento");
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const selected = ROUTES.find((r) => r.id === selectedId) || ROUTES[1];

  const waMessage = `Hola Partnersflux. Revisé la propuesta de ${BRAND_FULL} y quiero conversar sobre el plan ${selected.short}.`;
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
      { threshold: 0.25, rootMargin: "-10% 0px -45% 0px" }
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
            <span className="ak-nav-brand">{BRAND}</span>
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
          <div className="ak-hero-copy" data-reveal>
            <h1 className="ak-hero-brand ak-hero-brand--logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ak-hero-logo" src={LOGO} alt={BRAND} />
            </h1>
            <p className="ak-hero-title">De una marca que enamora a una marca que convierte y crece.</p>
            <p className="ak-hero-lead">Estrategia de ecommerce, automatización y crecimiento digital</p>
            <div className="ak-hero-meta">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                @almakcol
              </a>
              <a href={WEB_URL} target="_blank" rel="noopener noreferrer">
                almak.com.co
              </a>
              <span>Una propuesta creada por Partnersflux</span>
            </div>
            <div className="ak-hero-cta">
              <a href="#vemos" className="ak-btn ak-btn-solid">
                Ver propuesta
              </a>
              <a href={contactHref} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn-ghost">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Section
          id="vemos"
          tone="plain"
          eyebrow="01 — Lo que vemos en Almak"
          title="Ya han construido algo que muchas marcas todavía están buscando."
        >
          <div className="ak-split">
            <div>
              <div className="ak-prose" style={{ marginTop: 0 }}>
                <p>Almak tiene una esencia propia.</p>
                <p>
                  Sus bebidas no son simplemente productos para consumir. Detrás de cada JAMU, Masala Chai o té de flor
                  de Jamaica hay una historia de ingredientes naturales, tradición y bienestar.
                </p>
                <p>Y eso se siente en su marca.</p>
                <p>
                  Se nota en sus fotografías, en la identidad que han construido y en la comunidad que han reunido
                  alrededor de sus productos.
                </p>
                <p>
                  <strong>Pero hay una pregunta que queremos poner sobre la mesa:</strong>
                </p>
                <p>¿Están aprovechando todo ese interés para generar las ventas que su marca podría alcanzar?</p>
                <p>
                  Porque una cosa es lograr que alguien descubra Almak y se enamore de un producto. Y otra muy
                  diferente es conseguir que lo compre, vuelva por él y lo recomiende.
                </p>
              </div>
              <p className="ak-highlight">Ahí es donde vemos una oportunidad para crecer juntos.</p>
            </div>
            <div className="ak-split-photo">
              <PhotoFrame
                src={PHOTO_PRODUCTOS}
                alt="Línea Almak: Masala Chai, Jamu y Flor de Jamaica"
                caption="Masala Chai · Jamu · Flor de Jamaica"
                variant="landscape"
              />
            </div>
          </div>
        </Section>

        <Section
          id="paso"
          tone="mist"
          eyebrow="02 — El siguiente paso para Almak"
          title="Imaginen que cada persona que descubra sus productos tenga un camino sencillo para comprarlos."
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
                  Que alguien vea un reel de JAMU, sienta curiosidad, conozca sus ingredientes y pueda hacer su pedido
                  en ese momento.
                </p>
                <p>
                  Que una persona que compró Masala Chai reciba, días después, una invitación para volver a
                  disfrutarlo.
                </p>
                <p>
                  Que sus clientes conozcan nuevos productos, descubran combinaciones y tengan razones para regresar.
                </p>
                <p>
                  Y que todo esto no dependa de que alguien del equipo esté disponible para responder cada mensaje.
                </p>
              </div>
              <p className="ak-highlight">
                No se trata de quitarle el lado humano a Almak. Se trata de hacer que la tecnología trabaje detrás de
                la marca, sin perder su esencia.
              </p>
              <div className="ak-prose">
                <p>
                  Queremos construir una experiencia en la que descubrir, comprar y volver a elegir Almak sea cada vez
                  más fácil.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="oportunidad"
          tone="sage"
          eyebrow="03 — La oportunidad que identificamos"
          title="Almak ya tiene presencia digital. Ahora queremos potenciar su capacidad de vender."
        >
          <div className="ak-prose">
            <p>Al revisar su ecosistema actual encontramos una base valiosa sobre la que podemos trabajar.</p>
          </div>

          <h3 className="ak-subheading">Lo que ya tienen a favor</h3>
          <ul className="ak-list">
            {FAVOR.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="ak-subheading">Lo que queremos fortalecer</h3>
          <div className="ak-pillars">
            {STRENGTHEN.map((item, i) => (
              <article key={item.title} className="ak-pillar" style={{ ["--ak-i"]: i }}>
                <p className="ak-pillar-num">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="ak-pillar-title">{item.title}</h4>
                <p className="ak-pillar-text">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="ak-highlight">
            Nuestro propósito no es cambiar lo que Almak es. Es construir alrededor de lo que ya funciona, para que su
            potencial comercial siga creciendo.
          </p>
        </Section>

        <Section
          id="construir"
          tone="warm"
          eyebrow="04 — ¿Qué queremos construir juntos?"
          title="Un sistema de ventas que acompañe el crecimiento de Almak."
        >
          <div className="ak-split ak-split--sistema">
            <div>
              <p className="ak-lead" style={{ marginTop: "1.1rem" }}>
                Imaginamos cuatro piezas trabajando conectadas:
              </p>
              <div className="ak-journey">
                {SYSTEM.map((step, i) => (
                  <article key={step.num} className="ak-step" style={{ ["--ak-i"]: i }}>
                    <p className="ak-step-num">{step.num}</p>
                    <h3 className="ak-step-title">{step.title}</h3>
                    <p className="ak-step-text">{step.text}</p>
                  </article>
                ))}
              </div>
              <p className="ak-highlight">
                El objetivo es que cada esfuerzo de marketing tenga un propósito y que cada cliente represente una
                oportunidad de construir una relación a largo plazo.
              </p>
            </div>
            <div className="ak-split-photo">
              <PhotoFrame
                src={PHOTO_MANO}
                alt="Botella Flor de Jamaica Almak en la mano"
                caption="280 ml · natural y reciclable"
                variant="portrait"
              />
            </div>
          </div>
        </Section>

        <Section id="rutas" tone="plain" eyebrow="05 — Tres caminos para crecer" title="No todas las marcas necesitan invertir en todo al mismo tiempo.">
          <p className="ak-lead" style={{ marginTop: "1.1rem" }}>
            Por eso diseñamos tres alternativas para Almak, según la etapa que quieran fortalecer.
          </p>

          <div className="ak-plans">
            <article className="ak-plan">
              <span className="ak-plan-tag">{ROUTES[0].tag}</span>
              <h3 className="ak-plan-name">{ROUTES[0].name}</h3>
              <p className="ak-plan-price">${formatCop(ROUTES[0].price)} COP</p>
              <p className="ak-plan-desc">{ROUTES[0].desc}</p>
              <div className="ak-plan-block">
                <h4>¿Qué vamos a desarrollar?</h4>
                <ul>
                  {TIENDA_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="ak-plan-pay">
                Lo que queremos lograr: {ROUTES[0].allows}
                <br />
                <strong>Dos pagos de ${formatCop(ROUTES[0].half)} COP</strong>
              </p>
              <button type="button" className="ak-btn ak-btn-ink-ghost" onClick={() => setSelectedId("tienda")}>
                Elegir Tienda
              </button>
            </article>

            <article className="ak-plan ak-plan--featured">
              <span className="ak-plan-tag">{ROUTES[1].tag}</span>
              <h3 className="ak-plan-name">{ROUTES[1].name}</h3>
              <p className="ak-plan-price">${formatCop(ROUTES[1].price)} COP</p>
              <p className="ak-plan-desc">{ROUTES[1].desc}</p>
              <div className="ak-plan-block">
                <h4>Incluye todo lo del Plan Tienda, más</h4>
                {CRECIMIENTO_EXTRA.map((block) => (
                  <div key={block.label} style={{ marginTop: "0.85rem" }}>
                    <h4>{block.label}</h4>
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="ak-plan-pay">
                Lo que queremos lograr: {ROUTES[1].allows}
                <br />
                <strong>Dos pagos de ${formatCop(ROUTES[1].half)} COP</strong>
              </p>
              <button type="button" className="ak-btn ak-btn-ink" onClick={() => setSelectedId("crecimiento")}>
                Elegir Crecimiento
              </button>
            </article>

            <article className="ak-plan">
              <span className="ak-plan-tag">{ROUTES[2].tag}</span>
              <h3 className="ak-plan-name">{ROUTES[2].name}</h3>
              <p className="ak-plan-price">${formatCop(ROUTES[2].price)} COP</p>
              <p className="ak-plan-desc">{ROUTES[2].desc}</p>
              <div className="ak-prose" style={{ marginTop: "0.85rem" }}>
                <p>
                  Almak está preparando un nuevo producto: su chía pudín instantáneo. Creemos que su lanzamiento
                  representa una oportunidad para darle un nuevo impulso a la marca.
                </p>
              </div>
              <div className="ak-plan-block">
                <h4>Incluye todo el Plan Crecimiento, más</h4>
                {EXPANSION_EXTRA.map((block) => (
                  <div key={block.label} style={{ marginTop: "0.85rem" }}>
                    <h4>{block.label}</h4>
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="ak-plan-note">
                La inversión publicitaria y los costos de producto o colaboraciones se presupuestan por separado.
              </p>
              <p className="ak-plan-pay">
                Lo que queremos lograr: {ROUTES[2].allows}
                <br />
                <strong>Dos pagos de ${formatCop(ROUTES[2].half)} COP</strong>
              </p>
              <button type="button" className="ak-btn ak-btn-ink-ghost" onClick={() => setSelectedId("expansion")}>
                Elegir Expansión
              </button>
            </article>
          </div>
        </Section>

        <Section
          id="comparar"
          tone="mist"
          eyebrow="06 — ¿Cuál camino tiene más sentido?"
          title="Tres rutas. Una decisión según la etapa de Almak."
        >
          <div className="ak-compare">
            <table>
              <thead>
                <tr>
                  <th>
                    <span className="ak-compare-label--full">Incluye</span>
                    <span className="ak-compare-label--short">Ítem</span>
                  </th>
                  <th>Tienda</th>
                  <th>
                    <span className="ak-compare-label--full">Crecimiento</span>
                    <span className="ak-compare-label--short">Crec.</span>
                  </th>
                  <th>
                    <span className="ak-compare-label--full">Expansión</span>
                    <span className="ak-compare-label--short">Exp.</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.f} className={row.price ? "ak-compare-price" : undefined}>
                    <td>{row.f}</td>
                    <td>
                      {row.price ? (
                        <>
                          <span className="ak-compare-price-full">{row.t}</span>
                          <span className="ak-compare-price-short">$3,2M</span>
                        </>
                      ) : (
                        row.t
                      )}
                    </td>
                    <td>
                      {row.price ? (
                        <>
                          <span className="ak-compare-price-full">{row.l}</span>
                          <span className="ak-compare-price-short">$5,0M</span>
                        </>
                      ) : (
                        row.l
                      )}
                    </td>
                    <td>
                      {row.price ? (
                        <>
                          <span className="ak-compare-price-full">{row.e}</span>
                          <span className="ak-compare-price-short">$7,3M</span>
                        </>
                      ) : (
                        row.e
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ak-recommend">
            <p>
              <strong>Tienda — $3.197.000</strong> · Para fortalecer la experiencia de compra.
            </p>
            <p>
              <strong>Crecimiento — $4.997.000</strong> · Para convertir el ecosistema digital en una herramienta de
              venta y fidelización.
            </p>
            <p>
              <strong>Expansión — $7.297.000</strong> · Para potenciar el ecosistema comercial y preparar
              estratégicamente el lanzamiento del chía pudín.
            </p>
          </div>
        </Section>

        <Section
          id="como"
          tone="sage"
          eyebrow="07 — Cómo lo vamos a hacer"
          title="Sin interrumpir lo que Almak ya ha construido."
        >
          <p className="ak-lead" style={{ marginTop: "1.1rem" }}>
            Nuestro trabajo comienza entendiendo su operación, sus clientes y lo que quieren conseguir comercialmente.
          </p>
          <div className="ak-timeline">
            {PHASES.map((phase) => (
              <article key={phase.num} className="ak-phase">
                <p className="ak-phase-num">{phase.num}</p>
                <h3 className="ak-phase-title">{phase.title}</h3>
                <p className="ak-phase-text">{phase.text}</p>
              </article>
            ))}
          </div>
          <p className="ak-stat-note">
            Tiempo estimado de implementación inicial: 4 a 6 semanas, sujeto al alcance elegido, la plataforma actual y
            la entrega de materiales y accesos.
          </p>
        </Section>

        <Section
          id="continuidad"
          tone="warm"
          eyebrow="08 — Y después de lanzar, ¿qué sigue?"
          title="Una marca que crece necesita seguir evolucionando."
        >
          <div className="ak-prose">
            <p>
              No queremos que Almak termine con una tienda que se entrega y se deja quieta. Queremos que tengan la
              posibilidad de seguir mejorando su experiencia de compra, actualizar sus productos y tomar decisiones a
              partir de lo que sucede con sus clientes.
            </p>
          </div>
          <div className="ak-continuity">
            {CONTINUITY.map((plan) => (
              <article key={plan.name} className={`ak-cont ${plan.featured ? "ak-cont--featured" : ""}`}>
                <h3>{plan.name}</h3>
                <p className="ak-cont-price">{plan.price}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="ak-stat-note">La inversión publicitaria es independiente de estos valores.</p>
        </Section>

        <Section
          id="propuesta"
          tone="plain"
          eyebrow="09 — Nuestra propuesta para Almak"
          title="No queremos que inviertan en herramientas que no necesitan."
        >
          <div className="ak-prose">
            <p>Queremos que cada inversión tenga sentido para la etapa que están viviendo.</p>
            <p>Si hoy su prioridad es facilitar el proceso de compra, podemos empezar por la tienda.</p>
            <p>
              Si quieren aprovechar mejor Instagram y construir relaciones que generen recompra, recomendamos
              Crecimiento.
            </p>
            <p>
              Y si el lanzamiento del chía pudín es una de sus grandes apuestas comerciales para los próximos meses,
              creemos que Expansión ofrece una oportunidad especialmente interesante.
            </p>
          </div>
          <p className="ak-highlight">
            Porque el valor no está solamente en lanzar una novedad. Está en conseguir que cada nuevo producto ayude a
            crecer a toda la marca.
          </p>
        </Section>

        <Section
          id="recuerden"
          tone="mist"
          eyebrow="10 — Lo que queremos que recuerden"
          title="Almak ya ha recorrido un camino importante."
        >
          <div className="ak-prose">
            <p>
              Han dedicado tiempo a desarrollar productos, crear una identidad y conectar con personas que creen en su
              propuesta.
            </p>
            <p>
              Ahora queremos ayudarlos a que todo ese esfuerzo tenga una estructura comercial que lo acompañe. Que
              puedan dedicar más energía a crear, innovar y fortalecer sus productos, mientras su ecosistema digital
              trabaja para atraer, convertir y fidelizar clientes.
            </p>
          </div>
          <p className="ak-highlight">Su esencia ya está construida. Queremos ayudarlos a llevarla más lejos.</p>
        </Section>

        <Section id="cierre" tone="deep" eyebrow="Hablemos" title="Hablemos de la siguiente etapa de Almak">
          <div className="ak-close">
            <p className="ak-lead">
              ¿Y si hacemos que la próxima etapa de Almak no sea solamente tener más productos, sino llegar a más
              personas y conseguir que cada vez más clientes vuelvan a elegirlos?
            </p>

            <p className="ak-close-label">Selecciona el plan</p>
            <div className="ak-route-pick">
              {ROUTES.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  className={`ak-route-chip ${selectedId === route.id ? "ak-route-chip--active" : ""}`}
                  onClick={() => setSelectedId(route.id)}
                >
                  {route.short}
                </button>
              ))}
            </div>

            <p className="ak-close-label" style={{ marginTop: "1.35rem" }}>
              Inversión
            </p>
            <p className="ak-close-price">${formatCop(selected.price)} COP</p>
            <p className="ak-close-note">
              50% para iniciar: ${formatCop(selected.half)} COP. El 50% restante a los 15 días.
            </p>

            <div className="ak-close-cta">
              <a href={contactHref} target="_blank" rel="noopener noreferrer" className="ak-btn ak-btn-ink">
                Agendemos una conversación
              </a>
            </div>

            <p className="ak-legal">
              La inversión de implementación se divide en dos pagos: 50% al inicio y 50% a los 15 días. Incluye 30 días
              de soporte posterior a la entrega. Las herramientas y activos se configuran a nombre de Almak.
              Suscripciones de ecommerce, herramientas externas, tarifas de pasarela, pauta y costos de colaboraciones
              no están incluidos. La plataforma tecnológica definitiva se acordará después de revisar la web actual. Los
              plazos dependen de la entrega de materiales, aprobaciones y accesos. Las acciones están diseñadas para
              mejorar las oportunidades comerciales, sin garantizar un volumen específico de ventas.
            </p>
          </div>
        </Section>

        <footer className="ak-footer">
          {BRAND} × Partnersflux · Estrategia digital · Ecommerce · Automatización · Crecimiento ·{" "}
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">
            @almakcol
          </a>
        </footer>
      </div>
    </div>
  );
}
