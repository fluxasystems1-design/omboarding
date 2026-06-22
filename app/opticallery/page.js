"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function fluxaMediaAfterIndex(media = []) {
  return media.reduce((acc, item) => {
    if (!acc[item.afterIndex]) acc[item.afterIndex] = [];
    acc[item.afterIndex].push(item);
    return acc;
  }, {});
}

function FluxaInlineList({ items, media = [] }) {
  const mediaByIndex = fluxaMediaAfterIndex(media);

  return (
    <div className="gals-muted mt-4 space-y-2 text-sm leading-relaxed">
      {items.map((item, idx) => (
        <div key={item} className="space-y-3">
          <p className="flex gap-2">
            <span className="gals-accent-text shrink-0">·</span>
            <span>{item}</span>
          </p>
          {(mediaByIndex[idx] || []).map((entry) => (
            <div key={entry.src} className="gals-fluxa-visual pl-4 sm:pl-5">
              <Image
                src={entry.src}
                alt={entry.alt}
                width={1200}
                height={675}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const WHATSAPP_URL = "https://wa.me/56982556906";
const WHATSAPP_SCHEDULE_MESSAGE =
  "Hola, soy Opticallery. Revisé la propuesta Fluxa y quiero agendar una llamada.";
const OPTICALLERY_LOGO = "/imagenes/opticallery/logo.png";
const FLUXA_PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";

function waUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const NAV_ITEMS = [
  { id: "hero", label: "Portada" },
  { id: "beneficios", label: "Beneficios" },
  { id: "servicios", label: "Tus activos" },
  { id: "fluxa", label: "Ecosistema" },
  { id: "solucion", label: "Cómo funciona" },
  { id: "comparativa", label: "Diagnóstico" },
  { id: "inversion", label: "Inversión" },
  { id: "cierre", label: "Cierre" },
];

const DIAGNOSIS_CARDS = [
  {
    title: "opticallery.cl no convierte por línea",
    desc: "El e-commerce vende, pero sin landings por categoría ni recuperación de carrito — cada visita sin ruta clara es una compra perdida.",
  },
  {
    title: "Leads que se enfrían en el chat",
    desc: "WhatsApp e Instagram reciben consultas todos los días, pero sin respuesta automática cada mensaje que tarda es un cliente que se va a la competencia.",
  },
  {
    title: "Retail, membresía y B2B mezclados",
    desc: "Quien pregunta por lentes de sol, por la membresía o por el operativo empresarial llega al mismo punto — sin clasificación ni ruta distinta.",
  },
  {
    title: "Contenido sin arquitectura ni destino",
    desc: "283 seguidores con catálogo premium y membresía propia, pero publicando en el vacío: sin pilares, sin CTA y sin embudo en highlights.",
  },
  {
    title: "La membresía no se vende sola",
    desc: "El diferencial más fuerte frente a @chilelentes.cl y @lenscl sigue siendo una página informativa — sin landing de cierre, pauta ni automatización.",
  },
  {
    title: "Cero pauta pagada activa",
    desc: "La competencia lleva años construyendo audiencia. Sin Meta Ads inteligente y creativos UGC, cerrar esa brecha solo con orgánico es muy lento.",
  },
];

const ROADMAP_ITEMS = [
  {
    num: 1,
    title: "Web y landings conectadas",
    desc: "Optimizamos opticallery.cl y desplegamos landings por línea — sol, ópticos, membresía y B2B — cada una con un solo destino: convertir.",
  },
  {
    num: 2,
    title: "UGC y contenido con destino",
    desc: "Calendario de 3 pilares + creadores reales en contexto. Cada reel, story y highlight deriva al bot o a la landing correcta — no solo likes.",
  },
  {
    num: 3,
    title: "Automatización en WhatsApp e Instagram",
    desc: "Tres flujos distintos — retail, membresía y B2B — más recuperación de carrito a las 2h, 24h y 48h. El sistema responde, clasifica y cierra.",
  },
  {
    num: 4,
    title: "Meta Ads a escala",
    desc: "Cuatro campañas con destinos propios: e-commerce, membresía, captación B2B en Santiago y retargeting — alimentadas con creativos UGC.",
  },
  {
    num: 5,
    title: "Dashboard y control operativo",
    desc: "Ventas por categoría, leads por canal, agenda de exámenes y operativos B2B, equipo y métricas en un panel bajo marca Opticallery.",
  },
];

const PACKAGES = [
  {
    tier: "Paquete 1",
    name: "FLUXA ESENCIAL",
    subtitle: "Arranque de conversión",
    price: 945,
    idealFor:
      "Para activar captación y venta online con lentes de sol como producto de entrada — landings, bots, Meta Ads y contenido conectados.",
    recommended: false,
    sections: [
      {
        label: "Web y conversión",
        items: [
          "Landing de lentes de sol — producto de entrada para pauta y mayor volumen",
          "Link in bio optimizado hacia la landing principal",
        ],
      },
      {
        label: "Automatización",
        items: [
          "Bot en Instagram: clasifica consultas retail y deriva al producto",
          "WhatsApp con flujo retail — consulta, recomendación y link al carrito",
          "Recuperación automática de carrito a las 2h, 24h y 48h",
          "Configuración Meta Pixel para medir conversiones",
        ],
      },
      {
        label: "Pauta y captación",
        items: [
          "Meta Ads gestionados — tráfico hacia landing y bots",
          "Campaña e-commerce con lentes de sol como producto de entrada",
          "Creativos iniciales + optimización de campaña",
        ],
      },
      {
        label: "Contenido que convierte",
        items: [
          "Calendario de contenido — lentes de sol",
          "Guiones de reels conectados al bot y a la landing",
        ],
      },
      {
        label: "Acompañamiento",
        items: ["Reporte mensual de resultados", "Sesión de revisión estratégica al lanzar"],
      },
    ],
    cta: "Quiero FLUXA ESENCIAL",
    waMessage:
      "Hola Fluxa Method. Soy Opticallery, revisé la propuesta y me interesa el paquete FLUXA ESENCIAL. Quiero coordinar el siguiente paso.",
  },
  {
    tier: "Paquete 2",
    name: "FLUXA SISTEMA COMPLETO",
    subtitle: "Ecosistema digital activado",
    price: 1697,
    idealFor:
      "Para conectar e-commerce, membresía, B2B, UGC, automatización y Meta Ads en un solo sistema — cada línea de negocio con su landing, su bot y su campaña.",
    recommended: true,
    includesPrevious: true,
    sections: [
      {
        label: "Pauta y captación",
        items: [
          "Meta Ads gestionados — tráfico hacia landings y bots",
          "Campaña e-commerce con lentes de sol como producto de entrada",
          "Campaña membresía + captación B2B en Santiago",
          "Retargeting de visitantes sin compra con creativos UGC",
          "Creativos iniciales + optimización de campaña",
        ],
      },
      {
        label: "Sistema UGC",
        items: [
          "3–5 creadores en contextos reales con marcas premium",
          "Piezas listas para reels, stories y campañas de pauta",
        ],
      },
      {
        label: "Web y landings",
        items: [
          "Optimización de opticallery.cl — rutas claras al checkout por categoría",
          "Landings de ópticos graduados, membresía y operativo B2B",
          "Highlights rediseñados como embudo completo",
        ],
      },
      {
        label: "Automatización ampliada",
        items: [
          "Flujos WhatsApp/IG de membresía y B2B — separados del retail",
          "Respuestas automáticas a comentarios en publicaciones",
        ],
      },
      {
        label: "Contenido orgánico",
        items: [
          "Calendario con 3 pilares: educación, prueba social y conversión",
          "Scripts de reels con palabra clave al bot o landing correcta",
        ],
      },
      {
        label: "Acompañamiento",
        items: ["Sesión estratégica mensual"],
      },
    ],
    cta: "Quiero FLUXA SISTEMA COMPLETO",
    waMessage:
      "Hola Fluxa Method. Soy Opticallery, revisé la propuesta y me interesa el paquete FLUXA SISTEMA COMPLETO. Quiero coordinar el siguiente paso.",
  },
];

const RESULT_ITEMS = [
  "Un e-commerce que vende mientras la tienda está cerrada",
  "La membresía funcionando como ingreso recurrente real",
  "Cero leads perdidos por WhatsApp o DM sin respuesta",
];

const PRACTICE_STRENGTHS = [
  {
    icon: "store",
    eyebrow: "Venta online — sol y ópticos",
    title: "Venta online — sol y ópticos",
    today:
      "El e-commerce está activo y vende. Lo que no tiene es landings dedicadas por producto para pauta ni un sistema que recupere automáticamente al comprador que se fue sin cerrar.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: [
      "Lentes de sol · Ópticos graduados",
      "Oakley · Ray-Ban · Armani",
      "WebPay · Envío gratis",
    ],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Landing por categoría conectada a Meta Ads — cada visita tiene un solo destino: comprar. Más automatización de recuperación de carrito por WhatsApp a las 2h, 24h y 48h: el sistema persigue al que casi compró hasta cerrarlo, sin intervención humana.",
  },
  {
    icon: "membership",
    title: "Membresía mensual",
    today:
      "Su diferencial más fuerte frente a toda la competencia — y hoy es una página informativa sin flujo de conversión, sin pauta propia y sin automatización que la venda sola.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: ["Desde $9.900 CLP", "Beneficios exclusivos", "Ingreso recurrente · Fidelización"],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Landing dedicada diseñada para cerrar la membresía — no para informar. Secuencia de WhatsApp que acompaña al interesado desde la primera consulta hasta el pago. Pauta específica de membresía orientada a recurrencia: el producto con mayor LTV de su catálogo finalmente con un sistema que lo monetiza.",
  },
  {
    icon: "building",
    title: "Operativo oftalmológico B2B",
    today:
      "Van a empresas en Santiago a hacer exámenes visuales a empleados — un servicio único que no tiene landing propia, no corre pauta y depende 100% del boca a boca para conseguir contratos.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: ["Exámenes visuales en empresa", "Santiago · Corporativos", "Servicio en terreno"],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Landing B2B dedicada con formulario de cotización y prueba social corporativa — separada del retail para no mezclar audiencias. Campaña de Meta Ads segmentada a empresas en Santiago. Flujo WhatsApp e IG con tono y ruta distintos al consumidor final: cada lead empresarial clasificado, con seguimiento automatizado hasta cerrar el contrato.",
  },
  {
    icon: "message",
    title: "WhatsApp e Instagram DM",
    today:
      "Consultas y ventas llegan por chat todos los días — pero sin respuesta automática, cada mensaje que tarda más de 10 minutos en responderse es un lead que se va a la competencia.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: ["Consultas de stock · Cotizaciones", "Postventa", "@opticallery.cl"],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Tres flujos automatizados completamente distintos: retail (quien pregunta por lentes va directo al producto y al carrito), membresía (quien consulta por el plan recibe beneficios, precio y link de pago) y B2B (quien pregunta por el operativo entra a una ruta corporativa con cotización y seguimiento). Cero leads perdidos por demora — el sistema responde, clasifica y cierra sin intervención humana.",
  },
  {
    icon: "eye",
    title: "Examen visual y asesoría óptica",
    today:
      "El servicio en tienda existe y es bueno — pero hoy depende de que el cliente ya haya decidido ir. No hay ningún sistema digital que genere interés, eduque y lo lleve a agendar o comprar antes de pisar la tienda.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: ["Examen de la vista", "Asesoría de armazones · Cristales", "Garantía 1 año"],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Contenido educativo en redes que responde las preguntas que el cliente tiene antes de ir: qué cristal necesito, cómo sé si mis lentes ya no sirven, diferencia entre monofocal y multifocal. Ese contenido genera confianza, posiciona a Opticallery como el experto y deriva al agendamiento o directo al e-commerce — convirtiendo el interés orgánico en visitas con intención real de compra.",
  },
  {
    icon: "camera",
    title: "Contenido y presencia en redes",
    today:
      "283 seguidores con e-commerce activo, catálogo premium y membresía propia significa que están publicando en el vacío. El problema no es la estética — es que el contenido no tiene arquitectura ni destino.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: ["Instagram · UGC en contexto real", "Marcas premium", "Prueba social"],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Calendario mensual con tres pilares: educación visual (polarizado vs UV400, cómo elegir tu lente), prueba social (clientes reales, unboxing, testimonios) y conversión (ofertas, membresía, operativo B2B). Scripts de reels con CTAs de palabra clave que derivan al bot o a la landing correcta. Highlights rediseñados como embudo: Stock → Testimonios → Membresía → Empresas → Cómo comprar. Cada pieza de contenido tiene un destino — no solo likes.",
  },
  {
    icon: "ads",
    title: "Meta Ads y pauta pagada",
    today:
      "Sin tráfico pagado no hay volumen. @chilelentes.cl tiene 53K seguidores, @lenscl tiene 29K — llevan años construyendo audiencia. La única forma de acortar esa brecha rápido es con pauta inteligente y creativos que ya funcionan.",
    todayPrefix: false,
    skillsLabel: "Lo que ya tiene Opticallery",
    skills: [
      "Catálogo premium · Marcas reconocidas",
      "Envío gratis · WebPay",
      "Membresía · Operativo B2B",
    ],
    systemLabel: "Cómo lo potencia el sistema Fluxa",
    system:
      "Cuatro campañas con destinos distintos: conversión e-commerce con lentes de sol como producto de entrada (mayor volumen de búsqueda), captación B2B dirigida a empresas en Santiago, membresía orientada a recurrencia y retargeting para quien visitó el sitio y no compró — con creativos de urgencia y diferencial de envío gratis. El UGC de creadores reales funciona como combustible creativo de todas las campañas sin producción adicional.",
  },
];

const FLUXA_BLOCKS = [
  {
    title: "Web y landings de conversión",
    items: [
      "Optimización de opticallery.cl (WooCommerce) — rutas claras al checkout y CTAs por categoría",
      "Landing de lentes de sol — producto de entrada para pauta y mayor volumen de búsqueda",
      "Landing de ópticos graduados — examen, asesoría de cristales y compra en un solo flujo",
      "Landing de membresía diseñada para cerrar — no solo informar",
      "Landing B2B — Operativo oftalmológico para empresas, con cotización y prueba social corporativa",
      "Link in bio y highlights rediseñados como embudo: Stock → Testimonios → Membresía → Empresas → Comprar",
    ],
  },
  {
    title: "Sistema UGC",
    items: [
      "Reclutamiento y brief de 3–5 creadores en contextos reales (tienda, oficina, uso diario)",
      "Unboxing y prueba de marcas premium: Oakley, Ray-Ban, Armani, Carrera, Nike, Polaroid",
      "Piezas listas para reels, stories, landings y campañas de pauta",
      "Contenido auténtico que compite por confianza — no solo por producción pulida",
      "Derechos de uso para Meta Ads sin rodajes adicionales cada mes",
    ],
  },
  {
    title: "Automatización WhatsApp e Instagram",
    image: "/imagenes/opticallery/bot.png",
    imageAlt: "Bot de automatización Opticallery — flujos retail, membresía y B2B en WhatsApp e Instagram",
    items: [
      "Flujo retail: consulta de producto → recomendación → carrito o link de compra",
      "Flujo membresía: beneficios → precio → link de pago y seguimiento hasta activación",
      "Flujo B2B: interés corporativo → cotización → agendamiento del operativo en empresa",
      "Bot en Instagram: clasifica DMs por intención y deriva al destino correcto",
      "Recuperación automática de carrito por WhatsApp a las 2h, 24h y 48h",
      "Respuestas automáticas a comentarios en publicaciones con CTA al bot o landing",
    ],
  },
  {
    title: "Laboratorio de contenido orgánico",
    items: [
      "Calendario mensual con arquitectura de 3 pilares: educación, prueba social y conversión",
      "Educación visual: polarizado vs UV400, monofocal vs multifocal, cuándo cambiar tus lentes",
      "Prueba social: clientes reales, testimonios, unboxing y antes/después de estilo",
      "Conversión: ofertas, membresía, operativo B2B y envío gratis como gancho",
      "Scripts de reels con palabra clave que activa el bot o lleva a la landing correcta",
      "Highlights y bio alineados al embudo — cada pieza con destino, no solo likes",
    ],
  },
  {
    title: "Meta Ads y pauta pagada",
    items: [
      "Campaña e-commerce — lentes de sol como producto de entrada y mayor volumen",
      "Captación B2B segmentada a empresas en Santiago",
      "Pauta de membresía orientada a recurrencia y mayor LTV del catálogo",
      "Retargeting de visitantes que no compraron — creativos de urgencia y envío gratis",
      "UGC de creadores reales como combustible creativo de todas las campañas",
      "Reporte mensual: CPA, ROAS, leads por canal y recomendaciones de optimización",
    ],
  },
  {
    title: "Dashboard y control operativo",
    image: "/imagenes/opticallery/dashboard.png",
    imageAlt: "Dashboard Opticallery — ventas, leads, agenda y métricas en un solo panel",
    items: [
      "Panel de ventas: ingresos por categoría (sol, ópticos, membresía) y ticket promedio en tiempo real",
      "Control de leads: origen, etapa y canal — retail, B2B o membresía — en un solo lugar",
      "Agenda de exámenes visuales y operativos B2B en empresas, con estado y recordatorios",
      "Gestión de equipo: asesores, ópticos y responsables de terreno con metas y cierres por persona",
      "Métricas clave: conversión web, carritos abandonados, membresías activas y contratos corporativos",
      "Vista unificada bajo marca Opticallery — WooCommerce, bots, pauta y citas conectados al mismo panel",
    ],
  },
];

function ServiceIcon({ name }) {
  const props = {
    className: "h-6 w-6 shrink-0 text-[var(--gals-accent-dark)]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "eye":
      return (
        <svg {...props}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "brow":
      return (
        <svg {...props}>
          <path d="M4 14c2.5-3 5.5-4 8-4s5.5 1 8 4" />
          <path d="M6 10V8M10 9V7M14 9V7M18 10V8" />
        </svg>
      );
    case "droplet":
      return (
        <svg {...props}>
          <path d="M12 3c3 4.5 6 8 6 11a6 6 0 1 1-12 0c0-3 3-6.5 6-11Z" />
        </svg>
      );
    case "spa":
      return (
        <svg {...props}>
          <path d="M12 3v18M8 7c0 2 1.5 3 4 3s4-1 4-3M6 12h12M8 17h8" />
        </svg>
      );
    case "dry-eye":
      return (
        <svg {...props}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    case "scalpel":
      return (
        <svg {...props}>
          <path d="m14 4 6 6M8 20l-1.5-1.5a2.1 2.1 0 0 1 0-3L14 8l3 3-6.5 6.5a2.1 2.1 0 0 1-3 0L8 16" />
        </svg>
      );
    case "syringe":
      return (
        <svg {...props}>
          <path d="m18 2 4 4M7 17l8-8M3 21l2-2M15 7l2 2" />
          <path d="M11 11 5 17a2.8 2.8 0 1 0 4 4l6-6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "store":
      return (
        <svg {...props}>
          <path d="M4 10h16M6 10V20h12V10M9 20v-4h6v4" />
          <path d="M8 10 9 6h6l1 4" />
        </svg>
      );
    case "membership":
      return (
        <svg {...props}>
          <path d="M12 3v4M8 7h8" />
          <rect x="5" y="9" width="14" height="11" rx="2" />
          <path d="M9 14h6M12 11v6" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <rect x="4" y="8" width="16" height="13" rx="1" />
          <path d="M8 8V5l4-2 4 2v3" />
          <path d="M9 12h2M13 12h2M9 16h2M13 16h2" />
        </svg>
      );
    case "message":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.4 8.4 0 0 1-1.1 3.8 8.5 8.5 0 0 1-7.4 4.3 8.4 8.4 0 0 1-3.8-1.1L3 21l1.5-5.7" />
        </svg>
      );
    case "camera":
      return (
        <svg {...props}>
          <path d="M4 8h4l2-2h4l2 2h4v11H4V8Z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case "ads":
      return (
        <svg {...props}>
          <path d="M4 12v5h16v-5M7 12V7h10v5" />
          <path d="M9 7V5h6v2M12 12v5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function flattenPackageSections(sections) {
  return sections.flatMap((section) => section.items);
}

function formatUsd(value) {
  return value.toLocaleString("en-US");
}

function PackageCheckList({ items }) {
  return (
    <ul className="gals-package-list">
      {items.map((item) => (
        <li key={item} className="gals-package-item">
          <span className="gals-package-check" aria-hidden>
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PackageIncludes({ pkg, essentialSections }) {
  const totalItems = pkg.includesPrevious
    ? flattenPackageSections(essentialSections).length + flattenPackageSections(pkg.sections).length
    : flattenPackageSections(pkg.sections).length;

  return (
    <div className="gals-package-includes mt-6 flex-1">
      <div className="gals-package-includes-head">
        <p className="gals-package-includes-title">Qué incluye</p>
        <span className="gals-package-includes-count">{totalItems} entregables</span>
      </div>

      {pkg.includesPrevious ? (
        <>
          <div className="gals-package-section gals-package-section--base">
            <p className="gals-package-section-label">Base — FLUXA ESENCIAL</p>
            <PackageCheckList items={flattenPackageSections(essentialSections)} />
          </div>
          <p className="gals-package-plus">Además incluye</p>
        </>
      ) : null}

      <div className="gals-package-sections">
        {pkg.sections.map((section) => (
          <div key={section.label} className="gals-package-section">
            <p className="gals-package-section-label">{section.label}</p>
            <PackageCheckList items={section.items} />
          </div>
        ))}
      </div>
    </div>
  );
}

function staggerStyle(index, step = 90) {
  return { "--delay": `${index * step}ms` };
}

function SectionBlock({ id, eyebrow, title, subtitle, children, elevated = false, alt = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-4 pb-20 sm:px-6 lg:pb-24 ${alt ? "gals-section-alt" : ""}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${elevated ? "gals-card rounded-2xl p-7 sm:p-10" : ""}`}>
        {(eyebrow || title || subtitle) && (
          <header data-reveal className="gals-reveal gals-reveal-header max-w-3xl">
            {eyebrow ? <p className="gals-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="gals-heading text-2xl sm:text-3xl lg:text-4xl">{title}</h2> : null}
            {subtitle ? <p className="gals-lead">{subtitle}</p> : null}
          </header>
        )}
        <div className={title || subtitle || eyebrow ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

function RoadmapPhase({ item, index, isLast }) {
  return (
    <div
      className="gals-timeline-phase gals-stagger relative flex gap-5 pb-10 last:pb-0"
      style={staggerStyle(index, 120)}
    >
      {!isLast ? (
        <span className="gals-timeline-line absolute left-[15px] top-9 bottom-0 w-px" aria-hidden />
      ) : null}
      <span className="gals-timeline-dot relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
        {item.num}
      </span>
      <article className="gals-card min-w-0 flex-1 rounded-xl p-5">
        <h3 className="gals-section-label text-lg font-semibold">{item.title}</h3>
        <p className="gals-muted mt-2 text-sm leading-relaxed">{item.desc}</p>
      </article>
    </div>
  );
}

export default function OpticalleryPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-10% 0px -45% 0px" }
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

    document
      .querySelectorAll("[data-reveal], .gals-stagger-group, .gals-timeline-group")
      .forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  return (
    <main className="gals-page">
      <div className="gals-progress-track fixed left-0 top-0 z-50 h-0.5 w-full">
        <div className="gals-progress-bar h-full" style={{ width: `${progress}%` }} aria-hidden />
      </div>

      <nav className="gals-nav sticky top-0 z-40">
        <div className="gals-nav-inner mx-auto flex w-full max-w-6xl items-center justify-start gap-2 overflow-x-auto px-4 py-3.5 sm:justify-center sm:flex-wrap sm:gap-2.5 sm:px-6 sm:py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`gals-nav-link shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                activeSection === item.id ? "gals-nav-link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* 1 — HEADER */}
      <section id="hero" className="gals-hero-mesh scroll-mt-28 pb-20 pt-14 lg:pb-24 lg:pt-20">
        <div data-reveal className="gals-reveal gals-stagger-group mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="gals-hero-partners mb-10 flex w-full max-w-3xl flex-row items-center gap-2 sm:mb-12 sm:gap-4">
            <div className="gals-hero-logo-wrap flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={OPTICALLERY_LOGO}
                alt="Opticallery"
                width={720}
                height={216}
                priority
                className="gals-hero-logo h-20 w-full object-contain p-2 sm:h-36 sm:p-3 md:h-44 lg:h-48"
              />
            </div>
            <span
              className="gals-hero-partners-plus flex shrink-0 items-center justify-center px-0.5 text-2xl font-light leading-none sm:px-1 sm:text-4xl"
              aria-hidden
            >
              +
            </span>
            <div className="gals-hero-logo-wrap flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={FLUXA_PARTNERS_LOGO}
                alt="Fluxa Partners"
                width={480}
                height={480}
                priority
                className="gals-hero-logo h-20 w-full max-w-full object-contain p-3 sm:h-36 sm:p-4 md:h-44 lg:h-48"
              />
            </div>
          </div>
          <p className="gals-eyebrow tracking-[0.24em]">Contexto de venta</p>
          <h1 className="gals-hero-title">
            Opticallery, el sistema que convierte tu catálogo en ventas recurrentes.
          </h1>
          <p className="gals-lead mt-6 max-w-2xl sm:text-lg">
            Opticallery no es una óptica pequeña sin rumbo. Tienen e-commerce activo, membresía propia, catálogo
            premium (Oakley, Ray-Ban, Armani, Carrera), servicio B2B y envío gratis a todo Chile. El problema no es el
            producto — es que ninguno de sus activos tiene un sistema que lo venda. Eso es exactamente lo que Fluxa
            construye.
          </p>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center" data-reveal>
            <a
              href={waUrl(WHATSAPP_SCHEDULE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              Agendar llamada
            </a>
            <a
              href="#fluxa"
              className="gals-btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium"
            >
              Ver el ecosistema
            </a>
          </div>
          <p data-reveal className="gals-reveal gals-accent-text mt-8 text-sm font-medium">
            Opticallery <span className="gals-muted">/</span> Fluxa Systems
          </p>
        </div>
      </section>

      {/* 2 — BENEFICIOS VISUALES */}
      <SectionBlock
        id="beneficios"
        eyebrow="El resultado"
        title="Lo que cambia cuando el sistema está activo"
        subtitle="No es empezar de cero — es que cada activo de Opticallery deje de depender del esfuerzo manual y empiece a vender con ruta propia."
        alt
      >
        <div className="gals-stagger-group grid gap-5 md:grid-cols-3" data-reveal>
          {RESULT_ITEMS.map((text, i) => (
            <article
              key={text}
              className="gals-card gals-stagger rounded-xl p-6 text-center sm:p-8"
              style={staggerStyle(i, 110)}
            >
              <p className="gals-card-text text-sm font-medium leading-relaxed sm:text-base">{text}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* Activos actuales — puente hacia el ecosistema Fluxa */}
      <SectionBlock
        id="servicios"
        eyebrow="Tus activos hoy"
        title="Un solo sistema. Cada servicio de Opticallery, mejorado."
        subtitle="No se trata de cambiar lo que ya funciona — se trata de conectar cada línea de negocio con web, automatización, contenido y pauta. Así deja de vender solo quien está disponible en el momento."
        elevated
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {PRACTICE_STRENGTHS.map((strength, i) => (
            <article
              key={strength.title}
              className="gals-card gals-service-card gals-stagger flex flex-col rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 90)}
            >
              {strength.eyebrow && strength.eyebrow !== strength.title ? (
                <p className="gals-eyebrow text-[10px] tracking-[0.18em]">{strength.eyebrow}</p>
              ) : null}
              <div
                className={`flex items-center gap-3 ${
                  strength.eyebrow && strength.eyebrow !== strength.title ? "mt-2" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--gals-accent-soft)]">
                  <ServiceIcon name={strength.icon} />
                </span>
                <h3 className="gals-section-label text-base font-semibold">{strength.title}</h3>
              </div>
              <p className="gals-muted mt-3 text-xs leading-relaxed sm:text-sm">
                {strength.todayPrefix !== false ? (
                  <span className="font-semibold text-[var(--gals-heading)]">Hoy: </span>
                ) : null}
                {strength.today}
              </p>
              <p className="gals-eyebrow mt-4 text-[10px] tracking-[0.18em]">
                {strength.skillsLabel ?? "Lo que ofrece Opticallery"}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {strength.skills.map((skill) => (
                  <span key={skill} className="gals-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-5 border-t border-[var(--gals-border)] pt-4">
                <p className="gals-eyebrow text-[10px] tracking-[0.18em]">
                  {strength.systemLabel ?? "Cómo lo mejora el sistema Fluxa"}
                </p>
                <p className="gals-card-text mt-1.5 text-sm leading-relaxed">{strength.system}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="gals-muted mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed" data-reveal>
          E-commerce, membresía, B2B, WhatsApp, examen visual, redes y Meta Ads — cada uno entra al mismo
          ecosistema: landings, UGC, bots, calendario de contenido y pauta trabajando juntos bajo la marca
          Opticallery.
        </p>
      </SectionBlock>

      {/* Ecosistema Fluxa — qué construimos antes del roadmap */}
      <SectionBlock
        id="fluxa"
        eyebrow="Lo que construimos"
        title="El ecosistema Fluxa para Opticallery"
        subtitle="Seis bloques conectados — web, UGC, automatización, contenido, pauta y dashboard — para que cada línea de negocio venda y se mida con sistema propio."
        alt
      >
        <div className="gals-stagger-group grid gap-6 sm:grid-cols-2" data-reveal>
          {FLUXA_BLOCKS.map((block, i) => (
            <article
              key={block.title}
              className={`gals-card gals-stagger rounded-xl p-5 sm:p-6 ${
                block.image ? "sm:col-span-2" : ""
              }`}
              style={staggerStyle(i, 100)}
            >
              <p className="gals-eyebrow tracking-[0.18em]">{block.title}</p>
              {block.image ? (
                <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
                  <div className="gals-fluxa-visual">
                    <Image
                      src={block.image}
                      alt={block.imageAlt}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <ul className="gals-muted space-y-2 text-sm leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="gals-accent-text shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : block.media?.length ? (
                <FluxaInlineList items={block.items} media={block.media} />
              ) : (
                <ul className="gals-muted mt-4 space-y-2 text-sm leading-relaxed">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="gals-accent-text shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </SectionBlock>

      {/* 3 — PRUEBA SOCIAL Y USO REAL */}
      <SectionBlock
        id="solucion"
        eyebrow="Solución Fluxa"
        title="Cómo funciona el ecosistema Opticallery"
        subtitle="Cinco fases en secuencia — de la web al dashboard — para que cada activo venda y se mida con sistema propio."
      >
        <div className="gals-timeline-group gals-stagger-group max-w-2xl" data-reveal>
          {ROADMAP_ITEMS.map((item, i) => (
            <RoadmapPhase
              key={item.num}
              item={item}
              index={i}
              isLast={i === ROADMAP_ITEMS.length - 1}
            />
          ))}
        </div>
      </SectionBlock>

      {/* 4 — COMPARATIVA Y DIFERENCIACIÓN */}
      <SectionBlock
        id="comparativa"
        eyebrow="Diagnóstico digital"
        title="Lo que está pasando hoy en Opticallery"
        subtitle="No es falta de producto ni de marca — es falta de sistema digital que conecte e-commerce, membresía, B2B y redes."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-4 sm:grid-cols-2" data-reveal>
          {DIAGNOSIS_CARDS.map((card, i) => (
            <article
              key={card.title}
              className="gals-card gals-stagger rounded-xl p-5 sm:p-6"
              style={staggerStyle(i, 90)}
            >
              <h3 className="gals-section-label text-base font-semibold sm:text-lg">{card.title}</h3>
              <p className="gals-muted mt-2 text-sm leading-relaxed">{card.desc}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="gals-reveal mt-12 text-center">
          <p className="gals-callout inline-block rounded-2xl px-6 py-8 text-lg font-medium leading-relaxed sm:px-10 sm:text-xl">
            Tienen el catálogo premium, la membresía y el operativo B2B. La demanda existe. Lo que falta es el
            sistema que los conecte y los venda.
          </p>
          <p className="gals-muted mt-6 text-sm sm:text-base">
            Cada día sin ese sistema es una venta que se va a la competencia.
          </p>
        </div>
      </SectionBlock>

      {/* 5 — CHECKOUT VISUAL */}
      <SectionBlock
        id="inversion"
        eyebrow="Inversión"
        title="Dos caminos para activar el sistema Opticallery"
        subtitle="El Esencial arranca con sol, bots, Meta Ads y contenido conectados. El Sistema Completo despliega landings, UGC, automatización total y contenido orgánico como un solo ecosistema."
        elevated
        alt
      >
        <div className="gals-stagger-group grid gap-6 lg:grid-cols-2" data-reveal>
          {PACKAGES.map((pkg, i) => (
            <article
              key={pkg.name}
              className={`gals-card gals-stagger flex flex-col rounded-2xl p-6 sm:p-8 ${
                pkg.recommended ? "gals-card--featured relative" : ""
              }`}
              style={staggerStyle(i, pkg.recommended ? 140 : 0)}
            >
              {pkg.recommended ? (
                <span className="gals-badge gals-badge--pulse absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
                  Recomendado
                </span>
              ) : null}
              <p className="gals-muted text-[11px] font-medium uppercase tracking-[0.2em]">{pkg.tier}</p>
              <h3 className="gals-section-label mt-2 text-xl font-semibold sm:text-2xl">{pkg.name}</h3>
              {pkg.price ? (
                <p className="gals-price mt-2 text-2xl font-semibold sm:text-3xl">${formatUsd(pkg.price)} USD</p>
              ) : null}
              <p className="gals-eyebrow mt-1 text-xs tracking-[0.16em]">{pkg.subtitle}</p>
              <p className="gals-muted mt-3 text-sm leading-relaxed">{pkg.idealFor}</p>
              <PackageIncludes pkg={pkg} essentialSections={PACKAGES[0].sections} />
              <a
                href={waUrl(pkg.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium ${
                  pkg.recommended ? "gals-btn-solid font-semibold" : "gals-btn-outline"
                }`}
              >
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="gals-muted mt-8 text-center text-sm" data-reveal>
          Presupuesto de inversión en plataformas (Meta Ads) no incluido — se define según objetivo y mercado chileno.
        </p>
        <div className="mt-8 flex justify-center" data-reveal>
          <a
            href={waUrl(WHATSAPP_SCHEDULE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="gals-btn-solid inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            Agendar llamada
          </a>
        </div>
      </SectionBlock>

      {/* 6 — CIERRE FINAL */}
      <SectionBlock id="cierre" elevated alt>
        <div className="text-center">
          <header data-reveal className="gals-reveal gals-reveal-header">
            <h2 className="gals-heading text-2xl sm:text-3xl md:text-4xl">
              ¿Listos para activar el ecosistema digital de Opticallery?
            </h2>
            <p className="gals-lead mx-auto mt-4 max-w-xl">
              Agendemos una llamada para definir el plan ideal según su catálogo, membresía y objetivos de captación.
            </p>
          </header>
          <div data-reveal className="gals-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waUrl(WHATSAPP_SCHEDULE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="gals-btn-solid inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto"
            >
              Agendar llamada
            </a>
            <a
              href="#inversion"
              className="gals-btn-outline inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium sm:w-auto"
            >
              Ver planes
            </a>
          </div>
          <p className="gals-muted mt-12 text-[11px] font-medium uppercase tracking-[0.2em]">
            Fluxa Systems · fluxamethod.com
          </p>
          <p className="gals-muted mx-auto mt-3 max-w-lg text-xs leading-relaxed">
            Este documento es confidencial y fue preparado exclusivamente para Opticallery.
          </p>
        </div>
      </SectionBlock>

      <a href="#inversion" className="gals-floating-cta">
        Ver planes
      </a>
    </main>
  );
}
