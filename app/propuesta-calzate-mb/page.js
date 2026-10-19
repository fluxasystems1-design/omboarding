"use client";

import { useEffect, useMemo, useState } from "react";

const BRAND_FULL = "Cálzate MB";
const BRAND_TAG = "Partnersflux × Cálzate MB · Ecommerce y expansión";
const IG_HANDLE = "@calzatemym";
const IG_URL = "https://www.instagram.com/calzatemym/";
const LOGO = "/imagenes/calzate-mb/logo.png";
const HERO = "/imagenes/calzate-mb/hero.jpg?v=ig1";
const PHOTO_SHOP = "/imagenes/calzate-mb/cap-shop.jpg?v=ig1";
const PHOTO_ORDERS = "/imagenes/calzate-mb/cap-orders.jpg?v=ig1";
const PHOTO_DISCOVER = "/imagenes/calzate-mb/cap-discover.jpg?v=ig1";
const PHOTO_WHOLESALE = "/imagenes/calzate-mb/cap-wholesale.jpg?v=ig1";
const WA_NUMBER = "573116425337";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vemos", label: "Lo que vemos" },
  { id: "oportunidad", label: "Oportunidad" },
  { id: "capitulo", label: "Capítulo" },
  { id: "rutas", label: "Rutas" },
  { id: "comparar", label: "Comparar" },
  { id: "como", label: "Cómo" },
  { id: "continuidad", label: "Continuidad" },
  { id: "cierre", label: "Cierre" },
];

const STATS = [
  { value: "10,7 mil", label: "Seguidores reportados" },
  { value: "2", label: "Canales: detal y mayor" },
  { value: "Nacional", label: "Potencial de distribución" },
];

const PILLARS = [
  {
    title: "Que comprar sea tan fácil como enamorarse del diseño.",
    text: "Una tienda donde cada mujer encuentre sus modelos favoritos, tallas, colores, precios y medios de pago.",
  },
  {
    title: "Que tu equipo tenga más tiempo para hacer crecer el negocio.",
    text: "Menos conversaciones repetitivas y una atención más organizada para quienes necesitan asesoría personalizada.",
  },
  {
    title: "Que Cálzate MB no dependa únicamente de su mercado local.",
    text: "Preparar la marca para llegar a nuevas compradoras, boutiques y revendedoras de otras ciudades.",
  },
];

const CAPS = [
  {
    img: PHOTO_SHOP,
    title: "Una tienda que venda las 24 horas",
    text: "Tus clientas pueden comprar cuando estén listas, incluso fuera del horario de atención.",
    caption: "@calzatemym",
  },
  {
    img: PHOTO_ORDERS,
    title: "Pedidos más organizados",
    text: "Disponibilidad, pagos y solicitudes reunidos en un mismo sistema.",
    caption: "Colección propia · Cálzate MB",
  },
  {
    img: PHOTO_DISCOVER,
    title: "Más mujeres descubriendo tus diseños",
    text: "Contenido y publicidad que conecten cada colección con nuevas compradoras.",
    caption: "Tienda · Cúcuta",
  },
  {
    img: PHOTO_WHOLESALE,
    title: "Una oportunidad mayorista real",
    text: "Una experiencia diferenciada para boutiques y personas interesadas en revender tu calzado.",
    caption: "Detal y mayor",
  },
];

const TIENDA_ITEMS = [
  "Tienda online en Shopify con una presentación organizada de tus colecciones",
  "Catálogo con tallas, colores, precios y disponibilidad",
  "Carrito de compras y configuración de medios de pago",
  "Configuración de envíos nacionales según cobertura y tarifas acordadas",
  "Páginas especiales para destacar tus modelos más vendidos",
  "Sección mayorista básica para orientar solicitudes de compra por volumen hacia WhatsApp",
  "Información clara de cambios, envíos, preguntas frecuentes y guía de tallas",
  "Conexión de tu Instagram con la nueva tienda",
  "Una capacitación para que puedas gestionar productos, inventario y pedidos",
];

const LANZAMIENTO_EXTRA = [
  {
    label: "Automatización de ventas",
    items: [
      "Instagram conectado a páginas de modelos con palabras clave",
      "Respuestas automáticas a tallas, envíos y cambios",
      "Seguimientos postcompra, carritos abandonados y recompra",
      "Atención diferenciada a mayoristas con derivación humana",
    ],
  },
  {
    label: "Contenido que inspira y dirige a comprar",
    items: [
      "Estrategia de lanzamiento de la tienda",
      "Calendario estratégico de contenido para 60 días",
      "15 guiones de reels para diseños, novedades y best sellers",
      "Estrategia UGC con clientas reales",
      "Laboratorio estratégico personalizado en Notion",
    ],
  },
  {
    label: "Medición y capacitación",
    items: [
      "Configuración de píxel, eventos y catálogo de Meta",
      "Dos sesiones para gestionar tienda y automatizaciones",
    ],
  },
];

const EXPANSION_EXTRA = [
  {
    label: "Un nuevo camino para vender al por mayor",
    items: [
      "Landing y catálogo para boutiques y revendedoras",
      "Presentación de condiciones, mínimos y precios por volumen",
      "Flujo para captar y atender oportunidades mayoristas",
      "Estrategia para atraer y activar nuevas revendedoras",
    ],
  },
  {
    label: "Estrategia para llegar a más ciudades",
    items: [
      "Ruta de expansión comercial comenzando por Bogotá",
      "Evaluación posterior de Medellín, Cali y Barranquilla",
      "Campañas de Meta Ads segmentadas por ubicación",
      "10 guiones publicitarios y 5 piezas creativas",
      "Gestión y optimización del primer mes de campañas",
    ],
  },
];

const COMPARE_ROWS = [
  { f: "Ecommerce con pagos, tallas e inventario", t: "✓", l: "✓", e: "✓" },
  { f: "Canal mayorista básico", t: "✓", l: "✓", e: "✓" },
  { f: "Automatización de Instagram", t: "—", l: "✓", e: "✓" },
  { f: "Seguimiento de oportunidades de venta", t: "—", l: "✓", e: "✓" },
  { f: "Estrategia de contenido 60 días", t: "—", l: "✓", e: "✓" },
  { f: "15 guiones de reels", t: "—", l: "✓", e: "✓" },
  { f: "Estrategia UGC", t: "—", l: "✓", e: "✓" },
  { f: "Píxel y catálogo de Meta", t: "—", l: "✓", e: "✓" },
  { f: "Programa comercial de revendedoras", t: "—", l: "—", e: "✓" },
  { f: "Estrategia de expansión nacional", t: "—", l: "—", e: "✓" },
  { f: "Gestión inicial de Meta Ads", t: "—", l: "—", e: "✓" },
  { f: "Activación estratégica en Bogotá", t: "—", l: "—", e: "✓" },
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
    when: "Semanas 1 y 2 · Todas las rutas",
    title: "Le damos forma a tu tienda",
    text: "Colecciones, fichas, variantes, pagos, envíos y páginas para que la compradora se sienta segura.",
  },
  {
    num: "02",
    when: "Semanas 3 y 4 · Lanzamiento y Expansión",
    title: "Conectamos el contenido con las ventas",
    text: "Automatizaciones, seguimientos y estrategia para presentar la tienda a tu comunidad.",
  },
  {
    num: "03",
    when: "Semanas 4 a 6 · Expansión",
    title: "Preparamos la apertura de nuevos mercados",
    text: "Canal mayorista, crecimiento por ciudades y preparación de la activación en Bogotá.",
  },
  {
    num: "04",
    when: "Desde el mes 2 · Expansión",
    title: "Lanzamos, medimos y mejoramos",
    text: "Activamos campañas acordadas y optimizamos con los primeros datos reales.",
  },
];

const CONTINUIDAD = [
  {
    name: "Esencial",
    price: "$130.000 COP/mes",
    featured: false,
    items: [
      "Revisión técnica mensual de la tienda",
      "Corrección de errores menores",
      "Soporte WhatsApp limitado (2 consultas/mes)",
    ],
  },
  {
    name: "Mantenimiento",
    price: "$305.000 COP/mes",
    featured: false,
    items: [
      "Ajustes técnicos de la tienda",
      "Actualización de catálogo y productos",
      "Actualización de automatizaciones",
      "Soporte prioritario por WhatsApp",
    ],
  },
  {
    name: "Gestión completa",
    price: "$790.000 COP/mes",
    featured: true,
    items: [
      "Todo lo de Mantenimiento",
      "Gestión de campañas Meta Ads",
      "Optimización semanal",
      "Nuevas piezas publicitarias",
      "Reportes de resultados",
    ],
  },
];

const ROUTES = [
  {
    id: "tienda",
    tag: "Ruta 01 · Construcción",
    name: "PDM Cálzate Tienda",
    price: 3197000,
    half: 1598500,
    featured: false,
    desc: "Para que tu marca tenga una tienda propia y comprar tus diseños sea mucho más sencillo.",
    allows:
      "Tener tu propio canal digital de ventas, darle una experiencia de compra más profesional a tus clientas y organizar mejor los pedidos.",
  },
  {
    id: "lanzamiento",
    tag: "Ruta recomendada",
    name: "PDM Cálzate Lanzamiento",
    price: 4997000,
    half: 2498500,
    featured: true,
    desc: "Para que no solo tengas una tienda bonita, sino una estrategia que lleve personas a comprar en ella.",
    allows:
      "Conectar lo que publicas con lo que vendes, reducir pasos en la compra y recuperar oportunidades que hoy podrían perderse.",
  },
  {
    id: "expansion",
    tag: "Ruta 03 · Expansión",
    name: "PDM Cálzate Expansión",
    price: 7297000,
    half: 3648500,
    featured: false,
    desc: "Para que Cálzate MB comience a posicionarse como una marca con presencia comercial en diferentes ciudades de Colombia.",
    allows:
      "Comenzar a desarrollar una marca con nuevos mercados, un canal mayorista más estructurado y una estrategia de adquisición más allá de Cúcuta.",
  },
];

function formatCop(n) {
  return new Intl.NumberFormat("es-CO").format(n);
}

function waUrl(message) {
  if (!WA_NUMBER || !/^\d{10,15}$/.test(WA_NUMBER)) return null;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Section({ id, eyebrow, title, children, soft = false }) {
  return (
    <section id={id} className={`scroll-mt-28 ${soft ? "cm-section--soft" : ""}`}>
      <div className="cm-section">
        <div data-reveal className="cm-reveal">
          {eyebrow ? <p className="cm-eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="cm-heading">{title}</h2> : null}
        </div>
        <div data-reveal className="cm-reveal">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function PropuestaCalzateMbPage() {
  const [progress, setProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("hero");
  const [selectedId, setSelectedId] = useState("lanzamiento");
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const selected = ROUTES.find((r) => r.id === selectedId) || ROUTES[1];

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
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

    return () => {
      sectionObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <div className="cm-page">
      <div className="cm-ambient" aria-hidden />
      <div className="cm-progress fixed left-0 top-0 z-50 w-full">
        <div className="cm-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <nav className="cm-nav" aria-label="Secciones">
        <div>
          <span className="cm-nav-brand">{BRAND_FULL}</span>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`cm-nav-link ${activeNav === item.id ? "cm-nav-link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="cm-hero scroll-mt-28">
        <div className="cm-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO} alt="" />
        </div>
        <div className="cm-hero-inner">
          <div className="cm-hero-copy">
            <p className="cm-eyebrow cm-eyebrow--on-hero">{BRAND_TAG}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cm-hero-logo" src={LOGO} alt={`${BRAND_FULL} · Marly Balmaceda`} />
            <h1 className="cm-hero-title">De Cúcuta para toda Colombia.</h1>
            <p className="cm-hero-lead">
              Tus diseños ya tienen una historia. Ahora queremos que puedan llegar mucho más lejos.
            </p>
            <p className="cm-hero-lead cm-hero-lead--soft">
              Una propuesta para transformar Cálzate MB en una marca que no solo enamora en redes, sino que también
              convierte ese interés en compras, nuevas clientas y oportunidades de expansión.
            </p>
            <p className="cm-hero-meta">
              Una propuesta de Partnersflux ·{" "}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                {IG_HANDLE}
              </a>
            </p>
            <div className="cm-hero-cta">
              <a href="#vemos" className="cm-btn cm-btn-solid">
                Ver propuesta
              </a>
              <a
                href={waUrl(
                  `Hola Partnersflux. Revisé la propuesta de ${BRAND_FULL} y quiero conversar sobre el siguiente paso.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="cm-btn cm-btn-ghost"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          <figure className="cm-hero-shot">
            <div className="cm-frame-mat">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HERO} alt="Colección Cálzate MB · @calzatemym" />
            </div>
            <figcaption className="cm-frame-caption cm-frame-caption--on-dark">@calzatemym</figcaption>
          </figure>
        </div>
      </section>

      <Section
        id="vemos"
        eyebrow="01 — Lo que vemos en Cálzate MB"
        title="Ya has construido algo que muchas marcas apenas están intentando conseguir."
      >
        <div className="cm-split">
          <div className="cm-prose" style={{ marginTop: 0 }}>
            <p>
              Una marca propia. Diseños que llevan tu identidad. Una comunidad que sigue tus colecciones y, sobre
              todo, la capacidad de fabricar el producto que vendes.
            </p>
            <p>
              <strong>Eso tiene muchísimo valor.</strong>
            </p>
            <p>
              Porque detrás de cada par de zapatos hay decisiones, inversión, trabajo y una visión de negocio que
              merece crecer.
            </p>
            <p>
              Hoy, Cálzate MB ya tiene una presencia digital importante y la posibilidad de vender al detal y al
              mayor. Sin embargo, vemos una oportunidad para que todo ese esfuerzo comercial tenga una estructura más
              sólida.
            </p>
            <p>
              Imagina que una mujer en Bogotá ve uno de tus diseños, se enamora, encuentra su talla, elige el color y
              completa su compra sin tener que esperar una respuesta.
            </p>
            <p>
              Y que, al mismo tiempo, una boutique en Medellín pueda conocer tus colecciones y solicitar información
              para comprar al por mayor.
            </p>
          </div>
          <figure className="cm-frame cm-frame--solo">
            <div className="cm-frame-mat">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTO_ORDERS} alt="Sandalias Cálzate MB" />
            </div>
            <figcaption className="cm-frame-caption">@calzatemym</figcaption>
          </figure>
        </div>
        <p className="cm-highlight">Eso es lo que queremos empezar a construir contigo.</p>

        <div className="cm-stats">
          {STATS.map((s) => (
            <article key={s.label} className="cm-stat">
              <p className="cm-stat-value">{s.value}</p>
              <p className="cm-stat-label">{s.label}</p>
            </article>
          ))}
        </div>
        <p className="cm-stat-note">
          Referencia de partida según el diagnóstico compartido; cifras y canales sujetos a validación con la marca.
        </p>
      </Section>

      <Section
        id="oportunidad"
        eyebrow="02 — La oportunidad que encontramos"
        title="Tu Instagram puede despertar el deseo. Tu tienda debe facilitar la compra."
        soft
      >
        <div className="cm-prose">
          <p>
            Hoy las redes sociales son una vitrina importante para Cálzate MB. Pero cuando una mujer descubre un
            modelo que le encanta, el proceso de compra puede depender de varios mensajes: preguntar el precio,
            confirmar la talla, verificar disponibilidad y conocer cómo recibirlo.
          </p>
          <p>
            Cada uno de esos pasos requiere tiempo y puede convertirse en una razón para posponer su decisión.
          </p>
          <p>
            No queremos quitarle el trato cercano que caracteriza a una marca. Queremos reservar esa atención para
            los momentos donde realmente aporta valor, mientras la tecnología facilita lo demás.
          </p>
        </div>
        <div className="cm-pillars">
          {PILLARS.map((p) => (
            <article key={p.title}>
              <h3 className="cm-pillar-title">{p.title}</h3>
              <p className="cm-pillar-text">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="capitulo" eyebrow="03 — Siguiente capítulo" title="Así imaginamos el siguiente capítulo de tu marca">
        <div className="cm-caps">
          {CAPS.map((cap) => (
            <article key={cap.title} className="cm-cap">
              <figure className="cm-frame">
                <div className="cm-frame-mat">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cap.img} alt="" />
                </div>
                {cap.caption ? <figcaption className="cm-frame-caption">{cap.caption}</figcaption> : null}
              </figure>
              <div className="cm-cap-copy">
                <h3>{cap.title}</h3>
                <p>{cap.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="cm-highlight">
          No se trata solamente de abrir una página web. Se trata de empezar a construir una estructura de ventas que
          acompañe el crecimiento de Cálzate MB.
        </p>
      </Section>

      <Section id="rutas" eyebrow="04 — Tres maneras de dar el siguiente paso" title="No todas las marcas necesitan crecer al mismo ritmo" soft>
        <p className="cm-lead" style={{ marginTop: "1.1rem" }}>
          Por eso planteamos tres caminos, dependiendo de lo que quieras priorizar hoy.
        </p>

        <div className="cm-plans">
          <article className="cm-plan">
            <span className="cm-plan-tag">{ROUTES[0].tag}</span>
            <h3 className="cm-plan-name">{ROUTES[0].name}</h3>
            <p className="cm-plan-price">${formatCop(ROUTES[0].price)} COP</p>
            <p className="cm-plan-desc">{ROUTES[0].desc}</p>
            <div className="cm-plan-block">
              <h4>Qué construiremos</h4>
              <ul>
                {TIENDA_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="cm-plan-pay">
              Lo que permite: {ROUTES[0].allows}
              <br />
              <strong>Dos pagos de ${formatCop(ROUTES[0].half)} COP</strong>
            </p>
            <button type="button" className="cm-btn cm-btn-ink-ghost" onClick={() => setSelectedId("tienda")}>
              Elegir Tienda
            </button>
          </article>

          <article className="cm-plan cm-plan--featured">
            <span className="cm-plan-tag">{ROUTES[1].tag}</span>
            <h3 className="cm-plan-name">{ROUTES[1].name}</h3>
            <p className="cm-plan-price">${formatCop(ROUTES[1].price)} COP</p>
            <p className="cm-plan-desc">{ROUTES[1].desc}</p>
            <div className="cm-plan-block">
              <h4>Incluye todo lo de Tienda, más</h4>
              {LANZAMIENTO_EXTRA.map((block) => (
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
            <p className="cm-plan-pay">
              Lo que permite: {ROUTES[1].allows}
              <br />
              <strong>Dos pagos de ${formatCop(ROUTES[1].half)} COP</strong>
            </p>
            <button type="button" className="cm-btn cm-btn-accent" onClick={() => setSelectedId("lanzamiento")}>
              Elegir Lanzamiento
            </button>
          </article>

          <article className="cm-plan">
            <span className="cm-plan-tag">{ROUTES[2].tag}</span>
            <h3 className="cm-plan-name">{ROUTES[2].name}</h3>
            <p className="cm-plan-price">${formatCop(ROUTES[2].price)} COP</p>
            <p className="cm-plan-desc">{ROUTES[2].desc}</p>
            <div className="cm-plan-block">
              <h4>Incluye todo lo de Lanzamiento, más</h4>
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
              <div style={{ marginTop: "0.85rem" }}>
                <h4>Activación en Bogotá</h4>
                <ul>
                  <li>
                    Activación con la comunidad Entre mujeres que crean. Partnersflux desarrolla la propuesta
                    estratégica y una experiencia de conversión medible. Participación y costos operativos se definen
                    de común acuerdo.
                  </li>
                </ul>
              </div>
            </div>
            <p className="cm-plan-pay">
              Lo que permite: {ROUTES[2].allows}
              <br />
              <strong>Dos pagos de ${formatCop(ROUTES[2].half)} COP</strong>
            </p>
            <button type="button" className="cm-btn cm-btn-ink-ghost" onClick={() => setSelectedId("expansion")}>
              Elegir Expansión
            </button>
          </article>
        </div>
      </Section>

      <Section id="comparar" eyebrow="05 — Comparativa" title="¿Cuál de estas rutas tiene más sentido para Cálzate MB?">
        <div className="cm-compare">
          <table>
            <thead>
              <tr>
                <th scope="col">Capacidad</th>
                <th scope="col">
                  <span className="cm-compare-label cm-compare-label--full">Tienda</span>
                  <span className="cm-compare-label cm-compare-label--short" title="Tienda">
                    Tda
                  </span>
                </th>
                <th scope="col">
                  <span className="cm-compare-label cm-compare-label--full">Lanzamiento</span>
                  <span className="cm-compare-label cm-compare-label--short" title="Lanzamiento">
                    Lanz.
                  </span>
                </th>
                <th scope="col">
                  <span className="cm-compare-label cm-compare-label--full">Expansión</span>
                  <span className="cm-compare-label cm-compare-label--short" title="Expansión">
                    Exp.
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.f} className={row.price ? "cm-compare-price" : undefined}>
                  <td>{row.f}</td>
                  <td>
                    {row.price ? (
                      <>
                        <span className="cm-compare-price-full">{row.t}</span>
                        <span className="cm-compare-price-short">3,2M</span>
                      </>
                    ) : (
                      row.t
                    )}
                  </td>
                  <td>
                    {row.price ? (
                      <>
                        <span className="cm-compare-price-full">{row.l}</span>
                        <span className="cm-compare-price-short">5,0M</span>
                      </>
                    ) : (
                      row.l
                    )}
                  </td>
                  <td>
                    {row.price ? (
                      <>
                        <span className="cm-compare-price-full">{row.e}</span>
                        <span className="cm-compare-price-short">7,3M</span>
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
        <p className="cm-stat-note" style={{ marginTop: "0.85rem" }}>
          La inversión publicitaria, suscripciones y costos externos no están incluidos en estos valores.
        </p>
        <div className="cm-recommend">
          <p>
            <strong>Nuestra recomendación</strong>
          </p>
          <p style={{ marginTop: "0.65rem" }}>
            Creemos que PDM Cálzate Lanzamiento es el punto de equilibrio más interesante si hoy la prioridad es
            comenzar a convertir la atención de Instagram en compras a través de un sistema organizado.
          </p>
          <p style={{ marginTop: "0.85rem" }}>
            Pero si la visión de la marca es empezar desde ahora a desarrollar nuevos canales mayoristas y
            posicionarse en otras ciudades, PDM Cálzate Expansión es el camino más alineado con ese objetivo.
          </p>
          <p style={{ marginTop: "0.85rem" }}>
            La elección no debería depender únicamente del precio, sino de qué tan lejos quiere llevar la marca en
            esta nueva etapa.
          </p>
        </div>
      </Section>

      <Section id="como" eyebrow="06 — Cómo lo hacemos" title="De la idea a una marca preparada para crecer" soft>
        <p className="cm-lead" style={{ marginTop: "1.1rem" }}>
          No necesitas ocuparte de toda la parte técnica. Te acompañamos desde la estrategia hasta la implementación,
          con una solución que puedas gestionar con tu equipo.
        </p>
        <div className="cm-timeline">
          {PHASES.map((phase) => (
            <article key={phase.num} className="cm-phase">
              <p className="cm-phase-num">{phase.num}</p>
              <h3 className="cm-phase-title">{phase.title}</h3>
              <p className="cm-phase-when">{phase.when}</p>
              <p className="cm-phase-text">{phase.text}</p>
            </article>
          ))}
        </div>
        <p className="cm-stat-note">
          Los tiempos dependen de fotografías, catálogo, precios, inventario, accesos y políticas comerciales. La
          fecha de una activación presencial se confirma por separado.
        </p>
      </Section>

      <Section
        id="continuidad"
        eyebrow="07 — Continuidad"
        title="Queremos acompañar el crecimiento, no solo entregarte una página"
      >
        <p className="cm-lead" style={{ marginTop: "1.1rem" }}>
          Una tienda necesita mantenerse actualizada. Las colecciones cambian y las oportunidades evolucionan. Después
          del proyecto, Cálzate MB puede elegir continuar con nosotros.
        </p>
        <div className="cm-continuity">
          {CONTINUIDAD.map((plan) => (
            <article key={plan.name} className={`cm-cont ${plan.featured ? "cm-cont--featured" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="cm-cont-price">{plan.price}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="cm-stat-note">Planes opcionales desde el mes 3. El alcance se define antes de contratarlos.</p>
      </Section>

      <Section id="vision" eyebrow="08 — Visión" title="Lo que nos gustaría construir contigo">
        <div className="cm-prose">
          <p>
            <strong>Que Cálzate MB sea una de esas marcas que empiezan en una ciudad, pero no se quedan allí.</strong>
          </p>
          <p>
            Nos emociona trabajar con marcas que tienen historia detrás de lo que venden. Especialmente cuando no se
            limitan a comercializar un producto, sino que participan en su creación.
          </p>
          <p>
            En Cálzate MB vemos la posibilidad de construir mucho más que un ecommerce: una marca de calzado colombiano
            con potencial para llegar a nuevas mujeres, crear relaciones comerciales y crecer sin perder su esencia.
          </p>
        </div>
        <p className="cm-highlight">
          Tú sigues creando los zapatos. Nosotras te ayudamos a construir nuevas formas de venderlos.
        </p>
        <p className="cm-stat-note">— Partnersflux</p>
      </Section>

      <Section id="cierre" eyebrow="09 — Siguiente paso" title="¿Hacemos que esta nueva etapa de Cálzate MB comience?" soft>
        <div className="cm-close">
          <p className="cm-lead">
            Si alguna ruta conecta con lo que quieres construir, definimos juntas el alcance y la fecha de inicio.
          </p>
          <p className="cm-eyebrow" style={{ marginTop: "1.5rem" }}>
            Selecciona la ruta
          </p>
          <div className="cm-route-pick" role="group" aria-label="Rutas">
            {ROUTES.map((route) => (
              <button
                key={route.id}
                type="button"
                className={`cm-route-chip ${selectedId === route.id ? "cm-route-chip--active" : ""}`}
                onClick={() => setSelectedId(route.id)}
              >
                {route.id === "tienda" ? "Tienda" : route.id === "lanzamiento" ? "Lanzamiento" : "Expansión"}
              </button>
            ))}
          </div>
          <p className="cm-eyebrow" style={{ marginTop: "1.35rem" }}>
            Inversión
          </p>
          <p className="cm-close-price">${formatCop(selected.price)} COP</p>
          <p className="cm-close-note">
            50% para iniciar: ${formatCop(selected.half)} COP. El 50% restante a los 15 días.
          </p>
          <div className="cm-close-cta">
            <a
              href={waUrl(
                `Hola Partnersflux. Revisé la propuesta de ${BRAND_FULL} (${IG_HANDLE}) y quiero dar el siguiente paso con ${selected.name} ($${formatCop(selected.price)} COP).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="cm-btn cm-btn-ink"
            >
              Quiero dar el siguiente paso
            </a>
          </div>
          <p className="cm-legal">
            Los activos y cuentas quedarán a nombre de la marca. Incluye 30 días de soporte posterior a la entrega.
            Shopify, herramientas de terceros, inversión publicitaria y gastos logísticos se pagan aparte.
          </p>
        </div>
      </Section>

      <footer className="cm-footer">Cálzate MB × Partnersflux · De Cúcuta para toda Colombia</footer>
    </div>
  );
}
