"use client";

import { useEffect, useMemo, useState } from "react";

const BRAND = "ESTATUS";
const BRAND_FULL = "Estatus Inmobiliaria";
const IG_HANDLE = "@inmobiliariaestatus";
const IG_URL = "https://www.instagram.com/inmobiliariaestatus/";
const WA_NUMBER = "573116425337";
const LOGO = "/imagenes/estatus/logo.png";

const HERO_VIDEO = "/imagenes/inmobiliaria/hero.mp4";
const HERO_POSTER = "/imagenes/inmobiliaria/hero.jpg";
const SHAPESPARK_DEMO = "https://demo.shapespark.com/modern-apartment/";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vemos", label: "Lo que vemos" },
  { id: "oportunidad", label: "Oportunidad" },
  { id: "capitulo", label: "Capítulo" },
  { id: "recorrido-3d", label: "Tour 3D" },
  { id: "rutas", label: "Paquetes" },
  { id: "comparar", label: "Comparar" },
  { id: "como", label: "Cómo" },
  { id: "continuidad", label: "Continuidad" },
  { id: "vision", label: "Visión" },
  { id: "cierre", label: "Cierre" },
];

const PILLARS = [
  {
    title: "Sitio y fichas de propiedad",
    text: "Catálogo con filtros y fichas completas: el interesado entiende el inmueble sin pedirte la información por mensaje.",
  },
  {
    title: "Software para el equipo comercial",
    text: "Seguimiento de interesados, inventario y asignación: cada asesor sabe a quién atender y en qué etapa está.",
  },
  {
    title: "Tour 3D / 360° y captación",
    text: "Viviendas para recorrer en 3D o 360°, páginas por zona y un espacio para que propietarios sumen inventario.",
  },
];

const CAPS = [
  {
    title: "Catálogo digital de Estatus",
    text: "Un sitio de marca con listado filtrable por zona, precio, tipo, venta o arriendo y habitaciones. Cada ficha concentra fotos, video, características, estado y un botón para pedir visita o escribir por WhatsApp — para que el interesado no tenga que armar el rompecabezas en el chat.",
    points: [
      "Páginas de destacadas, nuevas y por zona",
      "Área privada para que el equipo suba y actualice propiedades",
      "Enlace desde Instagram y QR hacia el catálogo",
    ],
  },
  {
    title: "CRM y software comercial",
    text: "El seguimiento deja de vivir solo en WhatsApp y en la memoria del equipo. Cada interesado queda en un sistema con presupuesto, zona, origen del contacto y asesor responsable. El tablero muestra la etapa —consulta, visita, negociación o cierre— y ayuda a priorizar qué hacer después.",
    points: [
      "Asignación de leads entre asesores",
      "Historial de propiedades consultadas y visitas",
      "Vista de resultados por asesor: interesados, visitas y cierres",
    ],
  },
  {
    title: "Inventario y operación del día a día",
    text: "Un área para gestionar el inventario con estados claros: disponible, reservado, vendido o arrendado. Cuando alguien pregunta por Instagram o WhatsApp, el sistema puede enviar la ficha automáticamente y filtrar el interés real antes de ocupar al equipo.",
    points: [
      "Respuestas a dudas frecuentes de precio, zona y requisitos",
      "Paso a un asesor cuando hay intención real de visita",
      "Menos mensajes repetidos, más tiempo para cerrar",
    ],
  },
  {
    title: "Tour 3D o 360° en fichas prioritarias",
    text: "En el alcance Plataforma, las viviendas destacadas pueden llevar un recorrido 3D navegable o imágenes 360°, a elección de la marca. El interesado explora antes de la visita presencial y Estatus filtra mejor a quién agendar.",
    points: [
      "3D navegable o 360°, según la propiedad y el presupuesto",
      "Integración dentro de la ficha de la propiedad",
      "Enlace compartible por WhatsApp e Instagram",
    ],
  },
];

const PAGINA_BLOCKS = [
  {
    label: "Sitio de marca Estatus",
    items: [
      "Sitio inmobiliario completo con identidad visual de la marca",
      "Páginas de inicio, nosotros, contacto y políticas básicas",
      "Diseño responsive: se ve y se usa bien en celular y computador",
      "Conexión del perfil de Instagram y código QR hacia el catálogo",
    ],
  },
  {
    label: "Catálogo y fichas de propiedad",
    items: [
      "Catálogo filtrable por zona, precio, tipo, venta o arriendo y habitaciones",
      "Ficha completa: fotos, video, características, zona, estado y mapa de ubicación",
      "Botón para pedir visita y botón de WhatsApp en cada propiedad",
      "Secciones de destacadas, nuevas y listados por zona",
      "Carga inicial de hasta 20 propiedades con el equipo",
    ],
  },
  {
    label: "Operación simple del catálogo",
    items: [
      "Área privada para que el equipo suba, edite y archive propiedades",
      "Estados básicos: disponible, reservado, vendido o arrendado",
      "Aviso de nuevos contactos del formulario al correo o WhatsApp del equipo",
      "Medición básica de visitas a páginas y fichas",
      "Una sesión de capacitación para cargar y mantener el catálogo",
    ],
  },
];

const SOFTWARE_EXTRA = [
  {
    label: "Sistema de seguimiento de asesores",
    items: [
      "Etapas claras: interesado, con interés real, visita, negociación, cerrado o perdido",
      "Ficha de cada interesado con presupuesto, zona, tipo y origen del contacto",
      "Asignación a asesores e historial de propiedades consultadas",
      "Recordatorios de visita y mensajes de seguimiento",
      "Vista de resultados por asesor: interesados, visitas y cierres",
      "Control de quién del equipo puede ver o editar información",
    ],
  },
  {
    label: "Operación del día a día",
    items: [
      "Área de inventario con estados: disponible, reservado, vendido o arrendado",
      "Envío automático de la ficha cuando alguien escribe por Instagram o WhatsApp",
      "Respuestas automáticas a dudas frecuentes de precio, zona, visita y requisitos",
      "Filtro inicial automático y paso a un asesor cuando hay interés real",
      "Medición de visitas a las páginas desde redes",
      "Dos sesiones de capacitación: páginas y software",
    ],
  },
];

const PLATAFORMA_EXTRA = [
  {
    label: "Tour 3D o imágenes 360°",
    items: [
      "Hasta 5 tipologías o viviendas prioritarias con recorrido 3D o imágenes 360°, a elección de la marca",
      "Recorrido navegable en el navegador cuando eligen 3D: el interesado camina la vivienda sin instalar nada",
      "Vista de distribución para entender cómo se conectan los espacios",
      "Integración del tour dentro de la ficha de cada propiedad destacada",
      "Enlace compartible por WhatsApp e Instagram para cada experiencia",
      "Más viviendas después, una por una, con cotización aparte",
    ],
  },
  {
    label: "Páginas adicionales",
    items: [
      "Páginas por zona, por tipo de inmueble y para inversionistas",
      "Ruta separada para compradores y para propietarios que quieren publicar",
      "Espacio para que un propietario publique su inmueble y sume inventario",
    ],
  },
  {
    label: "Software ampliado",
    items: [
      "Tableros de metas por asesor y por zona",
      "Reportes de interesados, visitas y avance hasta el cierre",
      "Guía digital de asesores dentro del sistema",
      "Preparación para conectar después con portales como FincaRaíz",
    ],
  },
];

const COMPARE_ROWS = [
  { f: "Sitio + catálogo + fichas de propiedad", t: "✓", l: "✓", e: "✓" },
  { f: "Carga inicial de propiedades", t: "Hasta 20", l: "Hasta 20", e: "Hasta 20" },
  { f: "Área para subir propiedades", t: "Sí", l: "Completa", e: "Completa" },
  { f: "Aviso de nuevos contactos", t: "Correo / WA", l: "✓ + CRM", e: "✓ + CRM" },
  { f: "Seguimiento de asesores", t: "—", l: "✓", e: "✓" },
  { f: "Respuestas automáticas IG / WhatsApp", t: "—", l: "✓", e: "✓" },
  { f: "Permisos del equipo y vista por asesor", t: "—", l: "✓", e: "✓" },
  { f: "Reportes y tableros de metas", t: "—", l: "—", e: "✓" },
  { f: "Páginas por zona / tipo", t: "Listados", l: "Listados", e: "Completas + inversionistas" },
  { f: "Espacio para que publiquen propietarios", t: "—", l: "—", e: "✓" },
  { f: "Tour 3D o imágenes 360°", t: "—", l: "—", e: "Hasta 5 + integración" },
];

const PHASES = [
  {
    num: "01",
    when: "Semanas 1 y 2 · Todos los paquetes",
    title: "Diseño y páginas",
    text: "Definimos la estructura, armamos el sitio, el catálogo, las fichas y el área para cargar propiedades.",
  },
  {
    num: "02",
    when: "Semanas 3 a 5 · Software y Plataforma",
    title: "Software comercial",
    text: "Implementamos seguimiento de asesores, estados de inventario, respuestas automáticas y capacitamos al equipo.",
  },
  {
    num: "03",
    when: "Semanas 5 a 8 · Plataforma",
    title: "Tour 3D / 360° y ampliación",
    text: "Integramos hasta 5 recorridos 3D o 360° en las fichas prioritarias, páginas por zona y tableros ampliados.",
  },
  {
    num: "04",
    when: "Entrega",
    title: "Pruebas y puesta en marcha",
    text: "Revisamos el recorrido completo, dejamos accesos a nombre de la marca e incluimos 30 días de soporte.",
  },
];

const CONTINUIDAD = [
  {
    name: "Esencial",
    price: "$250.000 COP/mes",
    featured: false,
    items: [
      "Que las páginas sigan en línea y monitoreadas",
      "Corrección de errores menores",
      "Soporte por WhatsApp · 2 consultas al mes",
    ],
  },
  {
    name: "Software",
    price: "$490.000 COP/mes",
    featured: false,
    items: [
      "Mantenimiento de páginas y seguimiento de asesores",
      "Ajustes del área de inventario",
      "Actualización de respuestas automáticas",
      "Soporte prioritario por WhatsApp",
    ],
  },
  {
    name: "Plataforma",
    price: "$990.000 COP/mes",
    featured: true,
    items: [
      "Todo lo de Software",
      "Hosting y mantenimiento de tours 3D o 360° activos",
      "Páginas o mejoras menores nuevas",
      "Afinar reportes y el recorrido de venta",
      "Acompañamiento del día a día del sistema",
    ],
  },
];

const ROUTES = [
  {
    id: "pagina",
    tag: "Paquete 01 · Páginas",
    name: "Inmo Página",
    short: "Página",
    price: 5497000,
    half: 2748500,
    priceShort: "5,5M",
    featured: false,
    desc: "Sitio de marca, catálogo filtrable, fichas completas, carga inicial de propiedades y área para que el equipo las mantenga al día.",
    allows: "Que el interesado entienda el inmueble solo y escriba para pedir visita — sin armar el rompecabezas por chat.",
  },
  {
    id: "software",
    tag: "Paquete recomendado · Software",
    name: "Inmo Software",
    short: "Software",
    price: 8997000,
    half: 4498500,
    priceShort: "9,0M",
    featured: true,
    desc: "Páginas más software comercial: seguimiento de asesores, inventario y respuestas automáticas.",
    allows: "Que el equipo gestione interesados, visitas y cierres desde un sistema propio.",
  },
  {
    id: "plataforma",
    tag: "Paquete 03 · Premium 3D / 360°",
    name: "Inmo Plataforma",
    short: "Plataforma",
    price: 15997000,
    half: 7998500,
    priceShort: "16M",
    featured: false,
    desc: "Todo lo de Software, más tour 3D o 360° a elección, páginas por zona y captación de propietarios.",
    allows: "Que el interesado recorra la vivienda en 3D o 360° antes de agendar la visita presencial.",
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
    <section id={id} className={`scroll-mt-28 ${soft ? "inmo-section--soft" : ""}`}>
      <div className="inmo-section">
        <div data-reveal className="inmo-reveal">
          {eyebrow ? <p className="inmo-eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="inmo-heading">{title}</h2> : null}
        </div>
        <div data-reveal className="inmo-reveal">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function PropuestaInmobiliariaPage() {
  const [progress, setProgress] = useState(0);
  const [activeNav, setActiveNav] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [selectedId, setSelectedId] = useState("software");
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const selected = ROUTES.find((r) => r.id === selectedId) || ROUTES[1];

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
      const hero = document.getElementById("hero");
      const threshold = hero ? Math.max(220, hero.offsetHeight - 72) : 420;
      setNavSolid(window.scrollY > threshold);
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
    <div className="inmo-page">
      <div className="inmo-decor" aria-hidden>
        <div className="inmo-chart-bg">
          <svg className="inmo-chart-svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="inmoChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7BBBFF" stopOpacity="0.55" />
                <stop offset="55%" stopColor="#B8A9FF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#7BBBFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="inmoChartLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7BBBFF" />
                <stop offset="100%" stopColor="#B8A9FF" />
              </linearGradient>
              <filter id="inmoChartGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g className="inmo-chart-bars">
              <rect x="90" y="480" width="70" height="120" rx="12" />
              <rect x="250" y="390" width="70" height="210" rx="12" />
              <rect x="410" y="430" width="70" height="170" rx="12" />
              <rect x="570" y="300" width="70" height="300" rx="12" />
              <rect x="730" y="220" width="70" height="380" rx="12" />
              <rect x="890" y="140" width="70" height="460" rx="12" />
              <rect x="1040" y="90" width="70" height="510" rx="12" />
            </g>
            <path
              className="inmo-chart-area"
              d="M90 500 L250 400 L410 450 L570 310 L730 230 L890 150 L1110 100 L1110 620 L90 620 Z"
              fill="url(#inmoChartFill)"
            />
            <path
              className="inmo-chart-line"
              d="M90 500 L250 400 L410 450 L570 310 L730 230 L890 150 L1110 100"
              fill="none"
              stroke="url(#inmoChartLine)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#inmoChartGlow)"
            />
            <g className="inmo-chart-dots" filter="url(#inmoChartGlow)">
              <circle cx="90" cy="500" r="10" />
              <circle cx="250" cy="400" r="10" />
              <circle cx="410" cy="450" r="10" />
              <circle cx="570" cy="310" r="10" />
              <circle cx="730" cy="230" r="10" />
              <circle cx="890" cy="150" r="10" />
              <circle cx="1110" cy="100" r="12" />
            </g>
          </svg>
        </div>
      </div>

      <div className="inmo-progress fixed left-0 top-0 z-50 w-full">
        <div className="inmo-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <nav
        className={`inmo-nav ${menuOpen ? "inmo-nav--open" : ""} ${navSolid ? "inmo-nav--solid" : ""}`}
        aria-label="Secciones"
      >
        <div className="inmo-nav-bar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="inmo-nav-logo" src={LOGO} alt={BRAND_FULL} />
          <button
            type="button"
            className="inmo-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="inmo-nav-links"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="inmo-nav-burger" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
          <div id="inmo-nav-links" className="inmo-nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inmo-nav-link ${activeNav === item.id ? "inmo-nav-link--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="inmo-hero inmo-hero--video scroll-mt-28">
        <div className="inmo-hero-bg" aria-hidden>
          <video
            className="inmo-hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="inmo-hero-inner">
          <div className="inmo-hero-copy">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="inmo-hero-logo" src={LOGO} alt={BRAND_FULL} />
            <h1 className="inmo-hero-title">El contenido ya abre las puertas. Ahora falta el sistema que las acompañe.</h1>
            <p className="inmo-hero-lead">
              Catálogo y software para que cada persona que llega por Instagram encuentre la ficha, deje sus datos y
              avance con un asesor.
            </p>
            <p className="inmo-hero-meta">
              Partnersflux ·{" "}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">
                {IG_HANDLE}
              </a>
            </p>
            <div className="inmo-hero-cta">
              <a href="#rutas" className="inmo-btn inmo-btn-solid">
                Ver paquetes
              </a>
              <a
                href={waUrl(
                  `Hola Partnersflux. Revisé la propuesta de ${BRAND_FULL} y quiero conversar sobre el siguiente paso.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inmo-btn inmo-btn-ghost"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="vemos"
        eyebrow="01 — Lo que vemos"
        title="Ya producen el activo más difícil: contenido que genera interés"
      >
        <div className="inmo-feature inmo-feature--tight">
          <div className="inmo-prose inmo-prose--compact">
            <p>
              Estatus Inmobiliaria ya muestra propiedades con videos constantes — algo que muchas inmobiliarias todavía
              no logran. <strong>Ese alcance es un activo real.</strong>
            </p>
            <p>
              El siguiente paso no es “publicar más”. Es construir las páginas y el software para que quien ve un reel
              encuentre la ficha, pida visita y llegue al asesor con contexto: presupuesto, zona e intención.
            </p>
            <p className="inmo-highlight inmo-highlight--inline">
              No venimos a señalar lo que falta. Venimos a ordenar digitalmente lo que ya están construyendo.
            </p>
          </div>
          <figure className="inmo-device inmo-device--compact">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagenes/inmobiliaria/mock-mobile.png" alt={`${BRAND_FULL} · ficha móvil con pedir visita`} />
          </figure>
        </div>
      </Section>

      <Section
        id="oportunidad"
        eyebrow="02 — La oportunidad"
        title="Los videos abren las puertas. Las páginas y el software organizan la visita."
        soft
      >
        <div className="inmo-prose">
          <p>
            Hoy buena parte del proceso ocurre en mensajes: precio, ubicación, disponibilidad, requisitos y agenda. Cada
            respuesta ocupa tiempo del equipo y, si se demora, el interesado puede perderse.
          </p>
          <p>
            No buscamos reemplazar la atención humana. Buscamos reservarla para cuando aporta valor —mientras las
            páginas y el software resuelven lo repetitivo y dejan trazabilidad.
          </p>
        </div>
        <div className="inmo-pillars">
          {PILLARS.map((p) => (
            <article key={p.title}>
              <h3 className="inmo-pillar-title">{p.title}</h3>
              <p className="inmo-pillar-text">{p.text}</p>
            </article>
          ))}
        </div>
        <div className="inmo-feature inmo-feature--flip">
          <div className="inmo-cap-copy">
            <h3>Seguimiento comercial con dueño y etapa claros</h3>
            <p>
              Si el seguimiento vive solo en chats y memoria, los leads se diluyen. Con el software, cada interesado
              queda registrado con presupuesto, zona y asesor responsable. El equipo ve la etapa y sabe qué acción
              corresponde después.
            </p>
          </div>
          <figure className="inmo-device">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagenes/inmobiliaria/mock-crm.png" alt={`${BRAND_FULL} · pipeline de asesores`} />
          </figure>
        </div>
      </Section>

      <Section
        id="capitulo"
        eyebrow="03 — Siguiente capítulo"
        title={`Lo que queremos construir para ${BRAND}: catálogo, software y operación comercial`}
      >
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          No proponemos solo “una página”. Proponemos un sistema digital a nombre de Estatus: catálogo para que el
          interesado se informe, CRM para que el equipo no pierda leads, inventario ordenado y —en el alcance
          Plataforma— recorridos 3D o 360° dentro de las fichas.
        </p>
        <div className="inmo-caps inmo-caps--rich">
          {CAPS.map((cap) => (
            <article key={cap.title} className="inmo-cap inmo-cap--rich">
              <div className="inmo-cap-copy">
                <h3>{cap.title}</h3>
                <p>{cap.text}</p>
                <ul className="inmo-cap-points">
                  {cap.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="inmo-highlight">
          El contenido de Estatus ya genera interés. El siguiente paso es que ese interés entre a un catálogo claro y a
          un CRM donde el equipo pueda seguirlo hasta la visita y el cierre.
        </p>
      </Section>

      <Section
        id="recorrido-3d"
        eyebrow="04 — Tour 3D para ESTATUS"
        title="Así se puede recorrer una vivienda desde el celular"
        soft
      >
        <div className="inmo-feature inmo-feature--flip inmo-feature--tight">
          <p className="inmo-lead" style={{ marginTop: 0 }}>
            Cada propiedad puede tener su ficha o landing editable: fotos, video, planos, mapa, precio y botones para
            pedir visita. En Inmo Plataforma sumamos tour 3D o imágenes 360°, a elección de la marca. El equipo
            actualiza la ficha cuando cambia el inventario —sin depender de un desarrollador para cada ajuste.
          </p>
          <figure className="inmo-device">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagenes/inmobiliaria/mock-3d.png" alt={`${BRAND_FULL} · ficha de propiedad con tour 3D`} />
          </figure>
        </div>

        <div className="inmo-demo-3d">
          <div className="inmo-demo-3d-copy">
            <p className="inmo-eyebrow">Demo · Recorrido inmersivo</p>
            <h3 className="inmo-demo-3d-title">Tour 3D o imágenes 360°, a elección de la marca</h3>
            <p className="inmo-demo-3d-text">
              En las fichas destacadas de Estatus podemos integrar un recorrido 3D navegable —como esta demo— o
              experiencias con imágenes 360°. La marca elige el formato según la propiedad, el presupuesto y el nivel
              de inmersión que quieran ofrecer.
            </p>
            <a href={SHAPESPARK_DEMO} target="_blank" rel="noopener noreferrer" className="inmo-ref-link">
              Abrir demo 3D en pantalla completa →
            </a>
          </div>
          <div className="inmo-phone">
            <div className="inmo-phone-frame">
              <span className="inmo-phone-notch" aria-hidden />
              <div className="inmo-phone-display">
                <iframe
                  className="inmo-phone-iframe"
                  src={SHAPESPARK_DEMO}
                  title={`${BRAND_FULL} · demo de recorrido 3D`}
                  loading="eager"
                  allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <span className="inmo-phone-home" aria-hidden />
            </div>
            <p className="inmo-phone-caption">Interactúa dentro del celular</p>
          </div>
        </div>
      </Section>

      <Section id="rutas" eyebrow="05 — Tres paquetes" title="Tres alcances: páginas, software o plataforma">
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          Sin paquetes de contenido ni pauta. Esta propuesta se centra en páginas de marca y en software comercial
          propio.
        </p>

        <figure className="inmo-device inmo-device--mid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagenes/inmobiliaria/mock-web.png"
            alt={`${BRAND_FULL} · sitio y catálogo en dispositivos`}
          />
        </figure>

        <div className="inmo-plans">
          <article className="inmo-plan">
            <span className="inmo-plan-tag">{ROUTES[0].tag}</span>
            <h3 className="inmo-plan-name">{ROUTES[0].name}</h3>
            <p className="inmo-plan-price">${formatCop(ROUTES[0].price)} COP</p>
            <p className="inmo-plan-desc">{ROUTES[0].desc}</p>
            <div className="inmo-plan-block">
              <h4>Qué incluye</h4>
              {PAGINA_BLOCKS.map((block) => (
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
            <p className="inmo-plan-pay">
              Lo que permite: {ROUTES[0].allows}
              <br />
              <strong>Dos pagos de ${formatCop(ROUTES[0].half)} COP</strong>
            </p>
            <button type="button" className="inmo-btn inmo-btn-ink-ghost" onClick={() => setSelectedId("pagina")}>
              Elegir Página
            </button>
          </article>

          <article className="inmo-plan inmo-plan--featured">
            <span className="inmo-plan-tag">{ROUTES[1].tag}</span>
            <h3 className="inmo-plan-name">{ROUTES[1].name}</h3>
            <p className="inmo-plan-price">${formatCop(ROUTES[1].price)} COP</p>
            <p className="inmo-plan-desc">{ROUTES[1].desc}</p>
            <div className="inmo-plan-block">
              <h4>Incluye todo lo de Página, más</h4>
              {SOFTWARE_EXTRA.map((block) => (
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
            <p className="inmo-plan-pay">
              Lo que permite: {ROUTES[1].allows}
              <br />
              <strong>Dos pagos de ${formatCop(ROUTES[1].half)} COP</strong>
            </p>
            <button type="button" className="inmo-btn inmo-btn-accent" onClick={() => setSelectedId("software")}>
              Elegir Software
            </button>
          </article>

          <article className="inmo-plan">
            <span className="inmo-plan-tag">{ROUTES[2].tag}</span>
            <h3 className="inmo-plan-name">{ROUTES[2].name}</h3>
            <p className="inmo-plan-price">${formatCop(ROUTES[2].price)} COP</p>
            <p className="inmo-plan-desc">{ROUTES[2].desc}</p>
            <div className="inmo-plan-block">
              <h4>Incluye todo lo de Software, más</h4>
              {PLATAFORMA_EXTRA.map((block) => (
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
            <p className="inmo-plan-pay">
              Lo que permite: {ROUTES[2].allows}
              <br />
              <strong>Dos pagos de ${formatCop(ROUTES[2].half)} COP</strong>
            </p>
            <button type="button" className="inmo-btn inmo-btn-ink-ghost" onClick={() => setSelectedId("plataforma")}>
              Elegir Plataforma
            </button>
          </article>
        </div>

        <div className="inmo-feature">
          <div className="inmo-cap-copy">
            <h3>Inventario centralizado y primera respuesta automática</h3>
            <p>
              El equipo publica y actualiza inmuebles en un solo lugar. Cuando alguien escribe por Instagram o WhatsApp,
              el sistema puede enviar la ficha y filtrar el interés real —disponible desde Inmo Software.
            </p>
          </div>
          <figure className="inmo-device">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imagenes/inmobiliaria/mock-ops.png" alt={`${BRAND_FULL} · inventario y WhatsApp`} />
          </figure>
        </div>
      </Section>

      <Section id="comparar" eyebrow="06 — Comparativa" title={`¿Qué paquete tiene más sentido para ${BRAND}?`}>
        <div className="inmo-compare">
          <table>
            <thead>
              <tr>
                <th scope="col">Capacidad</th>
                <th scope="col">
                  <span className="inmo-compare-label inmo-compare-label--full">Página</span>
                  <span className="inmo-compare-label inmo-compare-label--short" title="Página">
                    Pág.
                  </span>
                </th>
                <th scope="col">
                  <span className="inmo-compare-label inmo-compare-label--full">Software</span>
                  <span className="inmo-compare-label inmo-compare-label--short" title="Software">
                    Soft.
                  </span>
                </th>
                <th scope="col">
                  <span className="inmo-compare-label inmo-compare-label--full">Plataforma</span>
                  <span className="inmo-compare-label inmo-compare-label--short" title="Plataforma">
                    Plat.
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.f}>
                  <td>{row.f}</td>
                  <td>{row.t}</td>
                  <td>{row.l}</td>
                  <td>{row.e}</td>
                </tr>
              ))}
              <tr className="inmo-compare-price">
                <td>Inversión COP</td>
                <td>
                  <span className="inmo-compare-price-full">${formatCop(ROUTES[0].price)}</span>
                  <span className="inmo-compare-price-short">{ROUTES[0].priceShort}</span>
                </td>
                <td>
                  <span className="inmo-compare-price-full">${formatCop(ROUTES[1].price)}</span>
                  <span className="inmo-compare-price-short">{ROUTES[1].priceShort}</span>
                </td>
                <td>
                  <span className="inmo-compare-price-full">${formatCop(ROUTES[2].price)}</span>
                  <span className="inmo-compare-price-short">{ROUTES[2].priceShort}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="inmo-stat-note" style={{ marginTop: "0.85rem" }}>
          Servicios de terceros, pauta publicitaria y costos externos no están incluidos.
        </p>
        <div className="inmo-recommend">
          <p>
            <strong>Nuestra recomendación:</strong> Inmo Software es el equilibrio natural si ya hay videos y un equipo
            de asesores, pero el interés se diluye en WhatsApp. Necesitan páginas más seguimiento comercial, no solo un
            catálogo.
          </p>
          <p style={{ marginTop: "0.85rem" }}>
            Si el objetivo es diferenciarse con tour 3D o 360° y captar inventario por zonas, Inmo Plataforma es el
            alcance premium. La decisión no debería basarse solo en el precio, sino en hasta dónde debe llegar el
            sistema en esta etapa.
          </p>
        </div>
      </Section>

      <Section id="como" eyebrow="07 — Cómo lo hacemos" title="Del brief a páginas y software en operación" soft>
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          Nosotros nos ocupamos de la parte técnica. Ustedes definen inventario, procesos comerciales y prioridades.
        </p>
        <div className="inmo-timeline">
          {PHASES.map((phase) => (
            <article key={phase.num} className="inmo-phase">
              <p className="inmo-phase-num">{phase.num}</p>
              <h3 className="inmo-phase-title">{phase.title}</h3>
              <p className="inmo-phase-when">{phase.when}</p>
              <p className="inmo-phase-text">{phase.text}</p>
            </article>
          ))}
        </div>
        <p className="inmo-stat-note">
          Los tiempos dependen de inventario, fotos/videos, accesos y definición de procesos comerciales.
        </p>
      </Section>

      <Section
        id="continuidad"
        eyebrow="08 — Continuidad"
        title="Acompañamiento después de la entrega"
      >
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          El inventario cambia y el sistema necesita mantenimiento. Al cerrar el proyecto pueden continuar con un plan
          mensual opcional.
        </p>
        <div className="inmo-continuity">
          {CONTINUIDAD.map((plan) => (
            <article key={plan.name} className={`inmo-cont ${plan.featured ? "inmo-cont--featured" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="inmo-cont-price">{plan.price}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="inmo-stat-note">Planes opcionales desde el mes 3. El alcance se define antes de contratarlos.</p>
      </Section>

      <Section id="vision" eyebrow="09 — Visión" title={`Hacia dónde queremos llevar a ${BRAND}`}>
        <div className="inmo-prose">
          <p>
            <strong>
              Que {BRAND} opere con páginas claras y software propio — no solo con chats y videos sueltos.
            </strong>
          </p>
          <p>
            Nos interesa trabajar con equipos que ya producen contenido real de propiedades. El siguiente paso es
            convertir ese contenido en un sistema: catálogo serio, seguimiento de asesores y herramientas que crezcan
            con ustedes.
          </p>
        </div>
        <p className="inmo-highlight">
          Ustedes siguen mostrando las propiedades. Nosotros armamos las páginas y el software para venderlas con
          orden.
        </p>
        <p className="inmo-stat-note">— Partnersflux</p>
      </Section>

      <Section
        id="cierre"
        eyebrow="10 — Siguiente paso"
        title={`¿Damos el siguiente paso con ${BRAND}?`}
        soft
      >
        <div className="inmo-close">
          <p className="inmo-lead">
            Si alguno de los paquetes encaja con lo que quieren construir, definimos juntos el alcance y la fecha de
            inicio.
          </p>
          <p className="inmo-eyebrow" style={{ marginTop: "1.5rem" }}>
            Selecciona el paquete
          </p>
          <div className="inmo-route-pick" role="group" aria-label="Paquetes">
            {ROUTES.map((route) => (
              <button
                key={route.id}
                type="button"
                className={`inmo-route-chip ${selectedId === route.id ? "inmo-route-chip--active" : ""}`}
                onClick={() => setSelectedId(route.id)}
              >
                {route.short}
              </button>
            ))}
          </div>
          <p className="inmo-eyebrow" style={{ marginTop: "1.35rem" }}>
            Inversión
          </p>
          <p className="inmo-close-price">${formatCop(selected.price)} COP</p>
          <p className="inmo-close-note">
            50% para iniciar: ${formatCop(selected.half)} COP. El 50% restante a los 15 días.
          </p>
          <div className="inmo-close-cta">
            <a
              href={waUrl(
                `Hola Partnersflux. Revisé la propuesta de ${BRAND_FULL} y quiero dar el siguiente paso con ${selected.name} ($${formatCop(selected.price)} COP).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inmo-btn inmo-btn-accent"
            >
              Quiero dar el siguiente paso
            </a>
          </div>
          <p className="inmo-legal">
            Los activos y cuentas quedarán a nombre de la marca. Incluye 30 días de soporte posterior a la entrega.
            Herramientas de terceros, inversión publicitaria y costos operativos se pagan aparte.
          </p>
        </div>
      </Section>

      <footer className="inmo-footer">
        {BRAND} × Partnersflux · Páginas · Software · Tour 3D / 360°
      </footer>
    </div>
  );
}
