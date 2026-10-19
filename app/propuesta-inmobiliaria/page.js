"use client";

import { useEffect, useMemo, useState } from "react";

const BRAND = "ESTATUS";
const BRAND_FULL = "Estatus Inmobiliaria";
const BRAND_TAG = "Partnersflux × Estatus Inmobiliaria · Páginas y software de propiedades";
const IG_HANDLE = "@inmobiliariaestatus";
const IG_URL = "https://www.instagram.com/inmobiliariaestatus/";
const WA_NUMBER = "573116425337";
const LOGO = "/imagenes/estatus/logo.png";

const HERO = "/imagenes/inmobiliaria/hero.jpg";
const SHAPESPARK_DEMO = "https://demo.shapespark.com/modern-apartment/";

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "vemos", label: "Lo que vemos" },
  { id: "oportunidad", label: "Oportunidad" },
  { id: "capitulo", label: "Capítulo" },
  { id: "referentes", label: "Referentes" },
  { id: "rutas", label: "Paquetes" },
  { id: "comparar", label: "Comparar" },
  { id: "como", label: "Cómo" },
  { id: "continuidad", label: "Continuidad" },
  { id: "cierre", label: "Cierre" },
];

const PILLARS = [
  {
    title: "Páginas que venden la propiedad",
    text: "Sitio, listado con filtros y fichas completas: la persona entiende el inmueble sin pedirte info por chat.",
  },
  {
    title: "Software para el equipo comercial",
    text: "Seguimiento de interesados, inventario y asignación: cada asesor sabe qué seguir y en qué etapa está.",
  },
  {
    title: "Modelados 3D y captación que escalan",
    text: "Viviendas modeladas en 3D para recorrerlas en el navegador, páginas por zona y espacio para propietarios.",
  },
];

const CAPS = [
  {
    img: "/imagenes/inmobiliaria/cap-catalog.jpg",
    title: "Sitio + catálogo",
    text: "Listado con filtros y fichas completas: fotos, video, características y botón para pedir visita.",
  },
  {
    img: "/imagenes/inmobiliaria/cap-crm.jpg",
    title: "Seguimiento de asesores",
    text: "Cada interesado tiene dueño y etapa: consulta → visita → negociación → cerrado.",
  },
  {
    img: "/imagenes/inmobiliaria/cap-visit.jpg",
    title: "Carga y respuestas automáticas",
    text: "Suben propiedades, marcan estado y el sistema responde lo repetido por WhatsApp o Instagram.",
  },
  {
    img: "/imagenes/inmobiliaria/cap-ads.jpg",
    title: "Modelo 3D de la vivienda",
    text: "Se construye la casa en 3D desde planos o medidas y el interesado la recorre en el navegador.",
  },
];

const REFERENTES = [
  {
    name: "Wasi",
    type: "Software de renta mensual · LatAm",
    note: "Software inmobiliario con vitrina, fichas y herramientas para asesores. Se paga mes a mes.",
    href: "https://wasi.co/",
    price: "Planes de pago · el valor se confirma al registrarse",
  },
  {
    name: "Vitrina Raíz",
    type: "Software de renta mensual · Colombia",
    note: "Seguimiento de clientes, vitrina y app. Referente local todo-en-uno para agentes e inmobiliarias.",
    href: "https://vitrinaraiz.com/precios",
    price: "Desde $29.900 hasta $149.900 COP/mes",
  },
  {
    name: "KiteProp",
    type: "Software de renta mensual · Colombia",
    note: "Plataforma con sitio, búsqueda de propiedades y conexión con portales.",
    href: "https://www.kiteprop.com/co/planes",
    price: "Desde ~$142.000 hasta ~$430.000 COP/mes + IVA",
  },
  {
    name: "Shapespark · apartamento 3D",
    type: "Modelado 3D navegable · demo",
    note: "Referente de vivienda modelada en 3D: se camina por el espacio en el navegador, no es una cámara 360.",
    href: "https://demo.shapespark.com/modern-apartment/",
    price: "Demo pública de modelado 3D interactivo",
  },
  {
    name: "Mentora · Catálogo",
    type: "Desarrollo a medida · Bogotá",
    note: "Referente de precio público para una web con catálogo de inmuebles, filtros y área para editar.",
    href: "https://mentoracolombia.com/diseno-web",
    price: "$5.990.000 COP + IVA · solo catálogo web",
  },
  {
    name: "FincaRaíz / Metrocuadrado",
    type: "Portales · Cómo se busca hoy",
    note: "Referencia de cómo se siente buscar, filtrar y abrir una ficha de propiedad en Colombia.",
    href: "https://www.fincaraiz.com.co/",
    price: "Solo referencia de experiencia · no es una cotización",
  },
];

const PAGINA_ITEMS = [
  "Sitio web inmobiliario completo de la marca",
  "Catálogo con filtros por zona, precio, tipo, venta o arriendo y habitaciones",
  "Ficha de cada propiedad con fotos, video, características, zona, estado y botón para pedir visita",
  "Páginas de propiedades destacadas, nuevas y por zona",
  "Formulario de contacto en cada propiedad y botón de WhatsApp",
  "Enlace del perfil de Instagram y código QR hacia el catálogo",
  "Área privada para que el equipo suba y actualice propiedades",
  "Capacitación para cargar el catálogo",
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
    label: "Modelado 3D de viviendas",
    items: [
      "Modelado 3D de hasta 5 tipologías o viviendas prioritarias a partir de planos o medidas",
      "Recorrido navegable en el navegador: el interesado camina la vivienda sin instalar nada",
      "Vista de distribución para entender cómo se conectan los espacios",
      "Integración del modelo 3D dentro de la ficha de cada propiedad destacada",
      "Enlace compartible por WhatsApp e Instagram para cada modelo",
      "Capacidad de modelar más viviendas después, una por una, con cotización aparte",
    ],
  },
  {
    label: "Páginas adicionales",
    items: [
      "Páginas por zona, por tipo de inmueble y para inversionistas",
      "Ruta separada para compradores y para propietarios que quieren publicar",
      "Espacio para que un propietario publique su inmueble y sumar inventario",
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
  { f: "Área para subir propiedades", t: "Sí", l: "Completa", e: "Completa" },
  { f: "Seguimiento de asesores", t: "—", l: "✓", e: "✓" },
  { f: "Respuestas automáticas IG / WhatsApp", t: "—", l: "✓", e: "✓" },
  { f: "Permisos del equipo y reportes", t: "—", l: "✓", e: "✓" },
  { f: "Páginas por zona / tipo", t: "—", l: "—", e: "✓" },
  { f: "Espacio para que publiquen propietarios", t: "—", l: "—", e: "✓" },
  { f: "Modelado 3D navegable de viviendas", t: "—", l: "—", e: "Hasta 5 + integración" },
  {
    f: "Inversión COP",
    t: "$5.497.000",
    l: "$8.997.000",
    e: "$19.997.000",
    price: true,
  },
];

const PHASES = [
  {
    num: "01",
    when: "Semanas 1 y 2 · Todos los paquetes",
    title: "Armamos las páginas",
    text: "Sitio, listado, fichas de propiedad, botones de contacto y área para subir inmuebles.",
  },
  {
    num: "02",
    when: "Semanas 3 a 5 · Software y Plataforma",
    title: "Construimos el software comercial",
    text: "Seguimiento de asesores, estados del inventario, respuestas automáticas y capacitaciones.",
  },
  {
    num: "03",
    when: "Semanas 5 a 8 · Plataforma",
    title: "Modelado 3D y páginas extra",
    text: "Modelamos las viviendas prioritarias, las integramos a las fichas, sumamos páginas por zona y tableros.",
  },
  {
    num: "04",
    when: "Entrega",
    title: "Pruebas, entrega y soporte",
    text: "Revisamos todo el recorrido, dejamos los accesos a nombre de la marca y 30 días de soporte.",
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
    price: "$1.290.000 COP/mes",
    featured: true,
    items: [
      "Todo lo de Software",
      "Hosting y mantenimiento de modelos 3D activos",
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
    featured: false,
    desc: "Solo páginas: sitio, catálogo con filtros y fichas de propiedad completas.",
    allows: "Tener una vitrina seria las 24 horas, sin mandar la información a pedazos por chat.",
  },
  {
    id: "software",
    tag: "Paquete recomendado · Software",
    name: "Inmo Software",
    short: "Software",
    price: 8997000,
    half: 4498500,
    featured: true,
    desc: "Páginas + software comercial: seguimiento de asesores, inventario y respuestas automáticas.",
    allows: "Que el equipo gestione interesados, visitas y cierres con un sistema propio.",
  },
  {
    id: "plataforma",
    tag: "Paquete 03 · Premium 3D",
    name: "Inmo Plataforma",
    short: "Plataforma",
    price: 19997000,
    half: 9998500,
    featured: false,
    desc: "Todo lo anterior más modelado 3D de viviendas, páginas por zona y captación de propietarios.",
    allows: "Que el interesado camine un modelo 3D de la casa antes de la visita presencial.",
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
  const [selectedId, setSelectedId] = useState("software");
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

      <nav className="inmo-nav" aria-label="Secciones">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="inmo-nav-logo" src={LOGO} alt={BRAND_FULL} />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`inmo-nav-link ${activeNav === item.id ? "inmo-nav-link--active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="inmo-hero scroll-mt-28">
        <div className="inmo-hero-bg" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO} alt="" />
        </div>
        <div className="inmo-hero-inner">
          <div className="inmo-hero-copy">
            <p className="inmo-eyebrow inmo-eyebrow--on-hero">{BRAND_TAG}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="inmo-hero-logo" src={LOGO} alt={BRAND_FULL} />
            <h1 className="inmo-hero-title">Páginas y software para vender propiedades.</h1>
            <p className="inmo-hero-lead">
              Sin página y sin sistema, cada video termina en chat. Armamos el sitio, el catálogo y el software
              comercial para que el interés se vuelva visita rastreable — con tu equipo de asesores ordenado.
            </p>
            <p className="inmo-hero-meta">
              Una propuesta de Partnersflux ·{" "}
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
          <figure className="inmo-hero-shot">
            <div className="inmo-frame-mat">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HERO} alt={`${BRAND_FULL} · ${IG_HANDLE}`} />
            </div>
            <figcaption className="inmo-frame-caption">{IG_HANDLE}</figcaption>
          </figure>
        </div>
      </section>

      <Section
        id="vemos"
        eyebrow="01 — Lo que vemos"
        title="Ya tienes el activo más difícil: contenido que genera interés"
      >
        <div className="inmo-prose">
          <p>
            Estatus Inmobiliaria ya comunica con videos — algo que muchas marcas todavía no logran: mostrar propiedades
            de forma viva, cercana y constante.
          </p>
          <p>
            <strong>Eso tiene muchísimo valor.</strong> El siguiente paso no es “hacer posts más bonitos”. Es construir
            las páginas y el software para que cada persona interesada encuentre la ficha, deje sus datos y avance hacia
            una visita — sin que todo dependa de responder chats a mano.
          </p>
          <p>
            Imagina que alguien ve un apartamento en un reel, abre la ficha completa, pide visita y tu asesor recibe el
            interesado ya filtrado en el sistema. Eso es lo que queremos empezar a construir contigo.
          </p>
        </div>
        <p className="inmo-highlight">
          No venimos a señalar lo que falta. Venimos a poner estructura digital a lo que ya estás construyendo.
        </p>
      </Section>

      <Section
        id="oportunidad"
        eyebrow="02 — La oportunidad"
        title="El video despierta el deseo. Las páginas y el software facilitan la visita."
        soft
      >
        <div className="inmo-prose">
          <p>
            Hoy el recorrido suele vivir en mensajes: precio, ubicación, disponibilidad, requisitos, agenda. Cada paso
            toma tiempo del equipo y puede convertirse en una razón para que la persona se enfríe.
          </p>
          <p>
            No queremos quitar la atención humana. Queremos reservarla para cuando realmente aporta valor, mientras las
            páginas y el software hacen el trabajo repetitivo.
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
      </Section>

      <Section id="capitulo" eyebrow="03 — Siguiente capítulo" title={`Así imaginamos el siguiente capítulo de ${BRAND}`}>
        <div className="inmo-caps">
          {CAPS.map((cap) => (
            <article key={cap.title} className="inmo-cap">
              <figure className="inmo-frame">
                <div className="inmo-frame-mat">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cap.img} alt={`${cap.title} · ${IG_HANDLE}`} />
                </div>
                <figcaption className="inmo-frame-caption">{IG_HANDLE}</figcaption>
              </figure>
              <div className="inmo-cap-copy">
                <h3>{cap.title}</h3>
                <p>{cap.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="inmo-highlight">
          No se trata de “una web bonita”. Se trata de páginas + software comercial que acompañen el inventario y el
          equipo.
        </p>
      </Section>

      <Section
        id="referentes"
        eyebrow="04 — Referentes actuales"
        title="Con qué se compara este tipo de producto en el mercado"
        soft
      >
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          Precios y productos públicos consultados en 2026. Sirven para dimensionar: un software genérico se paga mes a
          mes; un desarrollo a medida de páginas, software propio y modelado 3D de viviendas es una inversión de
          proyecto — y suele costar más que una tienda online de moda.
        </p>

        <div className="inmo-demo-3d">
          <div className="inmo-demo-3d-copy">
            <p className="inmo-eyebrow">Demo · Modelado 3D</p>
            <h3 className="inmo-demo-3d-title">Así se siente recorrer una vivienda en el celular</h3>
            <p className="inmo-demo-3d-text">
              Referente Shapespark: el interesado camina el espacio desde el navegador. En Inmo Plataforma integramos
              este tipo de recorrido dentro de la ficha de cada propiedad.
            </p>
            <a href={SHAPESPARK_DEMO} target="_blank" rel="noopener noreferrer" className="inmo-ref-link">
              Abrir demo en pantalla completa →
            </a>
          </div>
          <div className="inmo-phone">
            <div className="inmo-phone-frame">
              <span className="inmo-phone-notch" aria-hidden />
              <div className="inmo-phone-display">
                <iframe
                  className="inmo-phone-iframe"
                  src={SHAPESPARK_DEMO}
                  title="Demo 3D Shapespark · apartamento moderno"
                  loading="eager"
                  allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <span className="inmo-phone-home" aria-hidden />
            </div>
            <p className="inmo-phone-caption">Interactúa dentro del celular · demo.shapespark.com</p>
          </div>
        </div>

        <div className="inmo-refs">
          {REFERENTES.map((ref) => (
            <article key={ref.name} className="inmo-ref">
              <p className="inmo-ref-type">{ref.type}</p>
              <h3 className="inmo-ref-name">{ref.name}</h3>
              <p className="inmo-ref-note">{ref.note}</p>
              <p className="inmo-ref-price">{ref.price}</p>
              <a href={ref.href} target="_blank" rel="noopener noreferrer" className="inmo-ref-link">
                Ver referente →
              </a>
            </article>
          ))}
        </div>
        <p className="inmo-stat-note" style={{ marginTop: "1rem" }}>
          Fuentes públicas oct 2026: Vitrina Raíz, KiteProp, Mentora, Wasi, FincaRaíz y demos de modelado 3D navegable.
          Los precios cambian; confirma en cada sitio. Nuestra propuesta es desarrollo a medida con marca propia, no una
          suscripción de plantilla.
        </p>
      </Section>

      <Section id="rutas" eyebrow="05 — Tres paquetes" title="Solo páginas, software o plataforma completa">
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          Tres alcances claros. Sin paquetes de contenido ni pauta: aquí hablamos de páginas y de software.
        </p>

        <div className="inmo-plans">
          <article className="inmo-plan">
            <span className="inmo-plan-tag">{ROUTES[0].tag}</span>
            <h3 className="inmo-plan-name">{ROUTES[0].name}</h3>
            <p className="inmo-plan-price">${formatCop(ROUTES[0].price)} COP</p>
            <p className="inmo-plan-desc">{ROUTES[0].desc}</p>
            <div className="inmo-plan-block">
              <h4>Qué incluye</h4>
              <ul>
                {PAGINA_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
                <tr key={row.f} className={row.price ? "inmo-compare-price" : undefined}>
                  <td>{row.f}</td>
                  <td>
                    {row.price ? (
                      <>
                        <span className="inmo-compare-price-full">{row.t}</span>
                        <span className="inmo-compare-price-short">5,5M</span>
                      </>
                    ) : (
                      row.t
                    )}
                  </td>
                  <td>
                    {row.price ? (
                      <>
                        <span className="inmo-compare-price-full">{row.l}</span>
                        <span className="inmo-compare-price-short">9,0M</span>
                      </>
                    ) : (
                      row.l
                    )}
                  </td>
                  <td>
                    {row.price ? (
                      <>
                        <span className="inmo-compare-price-full">{row.e}</span>
                        <span className="inmo-compare-price-short">20M</span>
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
        <p className="inmo-stat-note" style={{ marginTop: "0.85rem" }}>
          Servicios de terceros, pauta publicitaria y costos externos no están incluidos.
        </p>
        <div className="inmo-recommend">
          <p>
            <strong>Nuestra recomendación:</strong> Inmo Software es el punto de equilibrio si ya hay videos y asesores,
            pero el interés se pierde en WhatsApp: necesitas páginas + seguimiento del equipo, no solo un catálogo.
          </p>
          <p style={{ marginTop: "0.85rem" }}>
            Si quieren diferenciarse con modelado 3D de las viviendas y captar inventario por zonas, Inmo Plataforma es
            el camino premium. La elección no debería depender solo del precio, sino de qué tan lejos debe llegar el
            sistema en esta etapa.
          </p>
        </div>
      </Section>

      <Section id="como" eyebrow="07 — Cómo lo hacemos" title="De cero a páginas y software operando" soft>
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          No necesitas ocuparte de toda la parte técnica. Te acompañamos desde la arquitectura hasta la entrega.
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
        title="Queremos acompañar el software, no solo entregarlo"
      >
        <p className="inmo-lead" style={{ marginTop: "1.1rem" }}>
          El inventario cambia y el software necesita mantenimiento. Después del proyecto puedes continuar con nosotros.
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

      <Section id="vision" eyebrow="09 — Visión" title="Lo que nos gustaría construir contigo">
        <div className="inmo-prose">
          <p>
            <strong>
              Que {BRAND} opere con páginas claras y software propio — no solo con chats y videos sueltos.
            </strong>
          </p>
          <p>
            Nos emociona trabajar con equipos que ya producen contenido real de propiedades. El siguiente capítulo es
            convertir ese contenido en un sistema: catálogo serio, seguimiento de asesores y herramientas que crezcan
            con ustedes.
          </p>
        </div>
        <p className="inmo-highlight">
          Ustedes siguen mostrando las propiedades. Nosotras les ayudamos a construir las páginas y el software para
          venderlas con orden.
        </p>
        <p className="inmo-stat-note">— Partnersflux</p>
      </Section>

      <Section
        id="cierre"
        eyebrow="10 — Siguiente paso"
        title={`¿Hacemos que esta nueva etapa de ${BRAND} comience?`}
        soft
      >
        <div className="inmo-close">
          <p className="inmo-lead">
            Si algún paquete conecta con lo que quieres construir, definimos juntas el alcance y la fecha de inicio.
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
        {BRAND} × Partnersflux · Páginas · Software · Modelado 3D
      </footer>
    </div>
  );
}
