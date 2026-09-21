"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const PARTNERS_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";

function wa(message) {
  return WA_BASE + encodeURIComponent(message);
}

const NAV = [
  { id: "punto-partida", label: "Dónde estás" },
  { id: "transformacion", label: "Transformación" },
  { id: "planes", label: "Planes" },
  { id: "ejecucion", label: "Ejecución" },
  { id: "cierre", label: "Cierre" },
];

const FACTS = [
  ["Instagram", "@margotbloom_studio, 1.188 seguidores, 77 publicaciones"],
  ["Bio", '"Arte floral & experiencias con alma"'],
  ["Link en bio", "Linktree"],
  ["Sitio web", "margotbloom.co (tienda, suscripciones y experiencias)"],
  ["Líneas de negocio", "Eventos propios, ambientación de eventos, corporativo, suscripciones florales"],
  ["Mensaje", "Abstracto, sin promesa concreta por público"],
  ["Experiencias", "Sin fecha, precio ni cupos visibles"],
];

const ASSETS = [
  {
    bold: "Identidad visual sólida:",
    rest: " arcos dorados, verde, tipografía serif y empaques con logo. La marca se reconoce sola.",
  },
  {
    bold: "Prueba visual de eventos:",
    rest: " talleres con grupos de mujeres, mesas y ambientaciones, con el Flower Bar y el evento Indomitas fijados en el perfil.",
  },
  {
    bold: "Cuatro líneas ya operando:",
    rest: " talleres privados, ambientación de eventos, corporativo y suscripciones florales.",
  },
  {
    bold: "Producto con precio en la web:",
    rest: " catálogo de arreglos y tres planes de suscripción activos.",
  },
];

const BOTTLENECKS = [
  {
    title: "Primera pantalla sin oferta",
    text: "El texto habla de soñadores y creadores de experiencias, y el único botón invita a explorar.",
  },
  {
    title: "Las experiencias van al final",
    text: "La web muestra primero el catálogo, luego las suscripciones y al último las experiencias.",
  },
  {
    title: "Experiencias sin acción",
    text: "Talleres privados y eventos corporativos no tienen fecha, precio, cupos ni botón de reserva o cotización.",
  },
  {
    title: "Tres públicos en un mismo camino",
    text: "La asistente a un taller, quien contrata ambientación y la empresa ven exactamente lo mismo.",
  },
  {
    title: "Perfil que muestra eventos pasados",
    text: "El feed no invita al próximo evento, y el camino es largo: bio, Linktree, web, catálogo y experiencias.",
  },
  {
    title: "WhatsApp sin contexto ni seguimiento",
    text: "No se sabe qué evento consulta cada persona, y nadie da seguimiento a seguidores ni suscriptoras.",
  },
];

const TRANSFORM = [
  ["Mensaje abstracto", "Promesa clara por cada público"],
  ["Experiencias sin fecha ni precio", "Evento estrella con fecha, precio y cupos"],
  ["Un solo camino para todos", "Una landing por línea de negocio"],
  ["Perfil con eventos pasados", "Contenido de invitación con fecha y cupos"],
  ["WhatsApp sin contexto", "Palabra clave por landing con mensaje ya escrito"],
  ["Seguimiento manual", "Secuencias a asistentes y suscriptoras (plan Completo)"],
];

const FASES = [
  {
    tag: "Todos los planes",
    title: "Fase 1 · Definición",
    text: "Avatar, oferta, producto, mensaje y embudos.",
  },
  {
    tag: "Arquitectura y Completo",
    title: "Fase 2 · Arquitectura digital",
    text: "3 landings y automatización.",
  },
  {
    tag: "Solo Completo",
    title: "Fase 3 · Captación",
    text: "Meta Ads, contenido ampliado y seguimiento.",
  },
  {
    tag: "Desde el mes 3",
    title: "Continuidad",
    text: "Mantenimiento y crecimiento mes a mes.",
  },
];

const PACKAGES = {
  completo: {
    key: "completo",
    label: "Paquete 1",
    name: "PDM COMPLETO",
    price: "$4.800.000 COP",
    priceShort: "$4.800.000",
    usd: "USD 1.521",
    featured: false,
    sub: "Todo, con Meta Ads",
    phases: "Fase 1 (al firmar): $2.400.000 COP · Fase 2 (a los 15 días): $2.400.000 COP",
    wa: "Hola Fluxa Method. Revisé la propuesta de Margot Bloom y me interesa PDM COMPLETO ($4.800.000 COP). Quiero coordinar el siguiente paso.",
    groups: [
      {
        title: "Definición",
        items: [
          "Definición de avatar, oferta y producto",
          "Mensaje por público",
          "Estrategia digital",
          "Definición de embudos",
          "Estrategia de ventas",
        ],
      },
      {
        title: "Arquitectura digital",
        items: [
          "3 landings estratégicas: eventos privados (reserva de cupo), ambientación de eventos (cotización) y corporativo (solicitud de propuesta)",
          "2 VSLs cortos",
          "Automatización de Instagram y WhatsApp con lógica de cupos y recordatorios, dando acceso a cada landing",
          "Secuencia de bienvenida y seguimiento post evento",
        ],
      },
      {
        title: "Contenido",
        items: [
          "Laboratorio Notion personalizado",
          "Calendario de contenido 90 días",
          "25 guiones de reels orgánicos, 15 guiones para ads y 5 guiones UGC",
        ],
      },
      {
        title: "Meta Ads",
        items: [
          "Estrategia de campañas, pixel y analítica",
          "5 creativos listos para lanzar",
          "Gestión y optimización del primer mes",
        ],
      },
      {
        title: "Capacitación",
        items: ["3 sesiones por Zoom", "Guion de cierre y seguimiento comercial"],
      },
    ],
    payDigital: false,
    payA: "$2.400.000",
    payB: "$2.400.000",
  },
  arquitectura: {
    key: "arquitectura",
    label: "Paquete 2",
    name: "PDM ARQUITECTURA",
    price: "$3.100.000 COP",
    priceShort: "$3.100.000",
    usd: "USD 982",
    featured: true,
    sub: "Oferta + 3 landings + automatización",
    phases: "Fase 1 (al firmar): $1.550.000 COP · Fase 2 (a los 15 días): $1.550.000 COP",
    wa: "Hola Fluxa Method. Revisé la propuesta de Margot Bloom y me interesa PDM ARQUITECTURA ($3.100.000 COP). Quiero coordinar el siguiente paso.",
    groups: [
      {
        title: "Definición",
        items: [
          "Definición de avatar, oferta y producto",
          "Mensaje por público",
          "Estrategia digital",
          "Definición de embudos",
          "Estrategia de ventas",
        ],
      },
      {
        title: "Arquitectura digital",
        items: [
          "3 landings estratégicas: eventos privados (reserva de cupo), ambientación de eventos (cotización) y corporativo (solicitud de propuesta)",
          "VSL corto",
          "Automatización de Instagram y WhatsApp básica, dando acceso a las landings",
        ],
      },
      {
        title: "Contenido",
        items: [
          "Laboratorio Notion personalizado",
          "Calendario de contenido 60 días",
          "15 guiones de reels orgánicos y 10 guiones para ads",
        ],
      },
      {
        title: "Capacitación",
        items: ["3 sesiones por Zoom", "Guion de cierre y seguimiento comercial"],
      },
    ],
    payA: "$1.550.000",
    payB: "$1.550.000",
  },
  consultoria: {
    key: "consultoria",
    label: "Paquete 3",
    name: "PDM CONSULTORÍA",
    price: "$1.100.000 COP",
    priceShort: "$1.100.000",
    usd: "USD 350",
    featured: false,
    note: "Te ayudamos a construir tu oferta irresistible y magnética.",
    sub: "Oferta, mensaje y estrategia",
    phases: "Fase 1 (al firmar): $550.000 COP · Fase 2 (a los 15 días): $550.000 COP",
    wa: "Hola Fluxa Method. Revisé la propuesta de Margot Bloom y me interesa PDM CONSULTORÍA ($1.100.000 COP). Quiero coordinar el siguiente paso.",
    itemsFlat: [
      "Definición de avatar, oferta y producto",
      "Mensaje por público",
      "Estrategia digital",
      "Calendario de contenido",
      "Definición de embudos",
      "Estrategia de ventas",
    ],
    payA: "$550.000",
    payB: "$550.000",
  },
};

const PACKAGE_ORDER = ["consultoria", "arquitectura", "completo"];

const CMP = [
  ["Avatar, oferta y producto", "Sí", "Sí", "Sí"],
  ["Mensaje y estrategia digital", "Sí", "Sí", "Sí"],
  ["Embudos y estrategia de ventas", "Sí", "Sí", "Sí"],
  ["Calendario de contenido", "Sí", "60 días", "90 días"],
  ["Landings estratégicas", "—", "3", "3"],
  ["VSL", "—", "1 corto", "2"],
  ["Automatización", "—", "Básica", "Completa + cupos"],
  ["Secuencia post evento", "—", "—", "Sí"],
  ["Guiones reels / ads / UGC", "—", "15 / 10 / 0", "25 / 15 / 5"],
  ["Meta Ads", "—", "—", "5 creativos + gestión 1 mes"],
  ["Capacitación", "—", "3 sesiones", "3 sesiones"],
];

const TIMELINE = [
  {
    when: "1–2",
    title: "Definición",
    text: "Avatar, oferta, mensaje y embudos. Todos los planes.",
  },
  {
    when: "3–4",
    title: "Landings y automatización",
    text: "Arquitectura y Completo.",
  },
  {
    when: "5–6",
    title: "Contenido y capacitación",
    text: "Notion, calendario, guiones y sesiones.",
  },
  {
    when: "M2",
    title: "Meta Ads y optimización",
    pro: true,
    text: "Solo Completo, con datos reales de las landings.",
  },
];

const MONTHLY = [
  {
    name: "Esencial",
    price: "$130.000",
    items: [
      "Revisión técnica mensual de las landings",
      "Corrección de errores menores",
      "Soporte por WhatsApp limitado (2 consultas al mes)",
    ],
  },
  {
    name: "Mantenimiento",
    price: "$320.000",
    items: [
      "Revisión y ajustes técnicos de las landings",
      "Actualización de automatizaciones de WhatsApp e Instagram",
      "Ajuste del laboratorio de contenido",
      "Soporte prioritario por WhatsApp",
    ],
  },
  {
    name: "Gestión completa",
    price: "$820.000",
    items: [
      "Todo lo del plan Mantenimiento",
      "Gestión activa de campañas Meta Ads",
      "2 nuevos creativos mensuales",
      "Reporte mensual de métricas y presupuesto",
    ],
  },
];

function OrganicFlower({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="currentColor" aria-hidden>
      <ellipse cx="60" cy="28" rx="22" ry="30" opacity="0.95" />
      <ellipse cx="88" cy="48" rx="22" ry="30" transform="rotate(72 88 48)" opacity="0.92" />
      <ellipse cx="76" cy="84" rx="22" ry="30" transform="rotate(144 76 84)" opacity="0.9" />
      <ellipse cx="44" cy="84" rx="22" ry="30" transform="rotate(216 44 84)" opacity="0.88" />
      <ellipse cx="32" cy="48" rx="22" ry="30" transform="rotate(288 32 48)" opacity="0.9" />
      <circle cx="60" cy="58" r="14" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

function DecorLayer() {
  return (
    <div className="mb-decor" aria-hidden>
      <OrganicFlower className="mb-organic mb-organic--olive mb-organic--1" />
      <OrganicFlower className="mb-organic mb-organic--teal mb-organic--2" />
      <OrganicFlower className="mb-organic mb-organic--olive mb-organic--3" />
      <OrganicFlower className="mb-organic mb-organic--sage mb-organic--4" />
      <OrganicFlower className="mb-organic mb-organic--teal mb-organic--5" />
      <OrganicFlower className="mb-organic mb-organic--olive mb-organic--6" />
    </div>
  );
}

export default function MargotBloomPage() {
  const [selected, setSelected] = useState("arquitectura");
  const pkg = PACKAGES[selected];

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.backgroundColor;
    const prevBody = body.style.backgroundColor;
    html.style.backgroundColor = "#f7f5f0";
    body.style.backgroundColor = "#f7f5f0";
    return () => {
      html.style.backgroundColor = prevHtml;
      body.style.backgroundColor = prevBody;
    };
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-mb-reveal]"));
    if (!nodes.length) return undefined;

    const show = (el) => el.classList.add("is-visible");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach(show);
      return undefined;
    }

    const revealNearViewport = () => {
      const limit = window.innerHeight * 0.95;
      nodes.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        // Visible ahora o ya scrolleado (arriba del viewport)
        if (rect.top < limit) show(el);
      });
    };

    // Primero marcar visibles, luego activar el hide — evita flash en blanco
    revealNearViewport();
    document.documentElement.classList.add("mb-js");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "12% 0px 12% 0px" }
    );

    nodes.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    const onNavigate = () => {
      // Nav anchors / hash: revelar destino y todo lo ya pasado
      window.requestAnimationFrame(revealNearViewport);
    };
    window.addEventListener("hashchange", onNavigate);
    window.addEventListener("scroll", onNavigate, { passive: true });

    // Failsafe: nunca dejar texto invisible en iOS Safari
    const failsafe = window.setTimeout(() => nodes.forEach(show), 1800);

    return () => {
      io.disconnect();
      window.removeEventListener("hashchange", onNavigate);
      window.removeEventListener("scroll", onNavigate);
      window.clearTimeout(failsafe);
      document.documentElement.classList.remove("mb-js");
    };
  }, []);

  return (
    <div className="mb-page">
      <DecorLayer />

      <div className="mb-content">
        <nav className="mb-nav">
          <div className="mb-shell mb-nav-inner">
            <a href="#top" className="mb-nav-brand">
              <span className="mb-brand-name" style={{ fontSize: "1.15rem" }}>
                Margot Bloom
              </span>
            </a>
            <div className="mb-nav-links">
              {NAV.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="mb-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <a href={wa(pkg.wa)} target="_blank" rel="noopener noreferrer" className="mb-nav-cta">
              Hablar
            </a>
          </div>
        </nav>

        <section id="top" className="mb-hero">
          <div className="mb-shell mb-hero-copy">
            <div className="mb-brand-pair" style={{ marginBottom: "1.25rem" }}>
              <Image
                src={PARTNERS_LOGO}
                alt="Partnersflux"
                width={220}
                height={80}
                className="mb-brand-pair__partners"
                priority
              />
              <span className="mb-brand-pair__x" aria-hidden>
                ×
              </span>
              <span className="mb-brand-name">Margot Bloom</span>
            </div>

            <p className="mb-eyebrow">MARGOT BLOOM · Método PDM</p>
            <h1 className="mb-display mb-hero-title">Construye una presencia digital monetizable</h1>
            <p className="mb-hero-lead mb-hero-box">
              1.188 personas ya te siguen y tu marca se ve como un estudio floral de lujo. Lo que falta es una oferta
              clara para cada tipo de cliente y un camino corto hasta la reserva. El trabajo empieza por definir a quién
              le vendes cada experiencia, antes de cualquier landing o automatización.
            </p>
            <div className="mb-cta-row">
              <a href="#planes" className="mb-btn mb-btn-primary">
                Ver planes
              </a>
            </div>

            <div className="mb-hero-side">
              <div>
                <b>@margotbloom_studio</b>
                <br />
                1.188 seguidores · 77 publicaciones
              </div>
              <div>Arte floral & experiencias con alma</div>
              <div>Sitio web: margotbloom.co</div>
              <div>Propuesta por Fluxa Method</div>
            </div>

            <div className="mb-hero-meta">
              <div>
                <strong>Desde $1.100.000 COP</strong>
                <span>Inversión inicial</span>
              </div>
              <span className="mb-meta-rule" aria-hidden />
              <div>
                <strong>4 a 6 semanas</strong>
                <span>Tiempo de entrega</span>
              </div>
              <span className="mb-meta-rule" aria-hidden />
              <div>
                <strong>Oferta + embudos + 3 landings</strong>
                <span>Alcance del proyecto</span>
              </div>
            </div>
          </div>
        </section>

        <section id="punto-partida" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">01 — Punto de partida</p>
            <h2 className="mb-display mb-section-title mb-section-title--wide">
              Tienes marca y comunidad. Falta el camino a la reserva.
            </h2>
            <p className="mb-lede">
              Un evento se llena cuando hay algo concreto que comprar: una fecha, un precio y unos cupos. Hoy la web
              muestra todo el universo de Margot Bloom a la vez, y quien llega no sabe cuál es su siguiente paso.
            </p>

            <div className="mb-panel">
              <p className="mb-block-title">Ficha técnica</p>
              <table className="mb-fact">
                <tbody>
                  {FACTS.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mb-rule" aria-hidden />

              <p className="mb-block-title">Activos identificados</p>
              <ul className="mb-asset-list">
                {ASSETS.map((item) => (
                  <li key={item.bold}>
                    <b>{item.bold}</b>
                    {item.rest}
                  </li>
                ))}
              </ul>

              <div className="mb-rule" aria-hidden />

              <p className="mb-block-title">Cuellos de botella críticos</p>
              {BOTTLENECKS.map((item) => (
                <div key={item.title} className="mb-bottleneck">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="transformacion" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">02 — Transformación</p>
            <h2 className="mb-display mb-section-title mb-section-title--wide">
              De un universo de servicios a un sistema que llena eventos
            </h2>
            <div className="mb-panel">
              <div className="mb-compare">
                {TRANSFORM.map(([before, after]) => (
                  <article key={before} className="mb-compare-row">
                    <div className="mb-compare-col mb-compare-col--before">
                      <h3>Antes</h3>
                      <p>{before}</p>
                    </div>
                    <div className="mb-compare-col mb-compare-col--after">
                      <h3>Después</h3>
                      <p>{after}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">03 — Inversión</p>
            <h2 className="mb-display mb-section-title">Elige tu ruta</h2>

            <p className="mb-block-title">Cómo encaja todo</p>
            <div className="mb-fase-row">
              {FASES.map((fase) => (
                <div key={fase.title} className="mb-fase">
                  <span className="tag">{fase.tag}</span>
                  <h4>{fase.title}</h4>
                  <p>{fase.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-pkg-grid mb-pkg-grid--3">
              {PACKAGE_ORDER.map((key) => {
                const plan = PACKAGES[key];
                return (
                  <article
                    key={plan.key}
                    id={`pkg-${plan.key}`}
                    className={`mb-pkg ${plan.featured ? "mb-pkg--pro" : ""}`}
                  >
                    {plan.featured ? <div className="mb-pkg-flag">Recomendado</div> : null}
                    <div className="mb-pkg-label">{plan.label}</div>
                    <h3>{plan.name}</h3>
                    <div className="mb-pkg-price">{plan.price}</div>
                    <p className="mb-pkg-note">{plan.usd}</p>
                    {plan.note ? <p className="mb-pkg-note">{plan.note}</p> : null}
                    {plan.groups
                      ? plan.groups.map((group) => (
                          <div key={group.title} className="mb-pkg-group">
                            <h5>{group.title}</h5>
                            <ul>
                              {group.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))
                      : null}
                    {plan.itemsFlat ? (
                      <div className="mb-pkg-group">
                        <ul>
                          {plan.itemsFlat.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div className="mb-pkg-pay">
                      Fase 1: <b>{plan.payA} COP</b> al firmar · Fase 2: <b>{plan.payB} COP</b> a los 15 días
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mb-cmp-wrap">
              <div className="mb-cmp-head mb-cmp-head--3" aria-hidden>
                <span>Característica</span>
                <span>Consultoría $1.100.000</span>
                <span>Arquitectura $3.100.000</span>
                <span>Completo $4.800.000</span>
              </div>
              <div className="mb-cmp-list">
                {CMP.map(([feature, c, a, p]) => (
                  <div key={feature} className="mb-cmp-row mb-cmp-row--3">
                    <p className="mb-cmp-feature">{feature}</p>
                    <div className="mb-cmp-vals mb-cmp-vals--3">
                      <div className="mb-cmp-val">
                        <span className="mb-cmp-val-label">Consultoría</span>
                        <strong>{c}</strong>
                      </div>
                      <div className="mb-cmp-val">
                        <span className="mb-cmp-val-label">Arquitectura</span>
                        <strong>{a}</strong>
                      </div>
                      <div className="mb-cmp-val mb-cmp-val--pro">
                        <span className="mb-cmp-val-label">Completo</span>
                        <strong>{p}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="ejecucion" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">04 — Ejecución</p>
            <h2 className="mb-display mb-section-title">Orden de construcción</h2>
            <div className="mb-timeline mb-panel">
              {TIMELINE.map((step) => (
                <div key={step.when} className="mb-tstep">
                  <div className="when">{step.when}</div>
                  <div>
                    <h4>
                      {step.title}
                      {step.pro ? (
                        <>
                          {" "}
                          <span className="mb-pro-tag">SOLO COMPLETO</span>
                        </>
                      ) : null}
                    </h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="continuidad" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">05 — Continuidad</p>
            <h2 className="mb-display mb-section-title mb-section-title--wide">
              Mantenimiento y crecimiento mes a mes
            </h2>
            <p className="mb-lede">Disponible desde el mes 3.</p>
            <div className="mb-cont-grid">
              {MONTHLY.map((plan) => (
                <div key={plan.name} className="mb-cont">
                  <h4>{plan.name}</h4>
                  <div className="p">
                    {plan.price} <span>COP/mes</span>
                  </div>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resumen" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">06 — Resumen ejecutivo</p>
            <h2 className="mb-display mb-section-title mb-section-title--wide">
              Tres rutas según hasta dónde quieres llegar
            </h2>
            <div className="mb-summary-cols mb-panel">
              <div className="mb-summary-col">
                <h4>HOY</h4>
                <ul>
                  <li>Mensaje abstracto para todos los públicos</li>
                  <li>Experiencias sin fecha, precio ni cupos</li>
                  <li>Un solo camino para asistentes, clientes de eventos y empresas</li>
                </ul>
              </div>
              <div className="mb-summary-col">
                <h4>EN 60 DÍAS</h4>
                <ul>
                  <li>Promesa clara por cada línea de negocio</li>
                  <li>Evento estrella con fecha, precio y reserva de cupo</li>
                  <li>
                    Tres landings conectadas a Instagram y WhatsApp, y en el plan Completo, campañas activas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cierre" className="mb-section" data-mb-reveal>
          <div className="mb-shell mb-shell--content">
            <p className="mb-eyebrow">Siguiente paso</p>
            <h2 className="mb-display mb-section-title mb-section-title--wide">¿Lista para llenar tus eventos?</h2>
            <p className="mb-lede">Si cerramos esta semana, arrancamos de inmediato con la Fase 1.</p>

            <div className="mb-selector">
              <p className="mb-block-title" style={{ marginBottom: "0.15rem" }}>
                ¿Qué paquete eliges?
              </p>
              {PACKAGE_ORDER.map((key) => {
                const plan = PACKAGES[key];
                return (
                  <button
                    key={plan.key}
                    type="button"
                    className={`mb-sel-opt ${selected === plan.key ? "is-active" : ""}`}
                    onClick={() => setSelected(plan.key)}
                  >
                    <div>
                      <span className="radio" />
                      <span className="mb-sel-opt-name">{plan.name}</span>
                      <div className="mb-sel-opt-sub">{plan.sub}</div>
                    </div>
                    <div className="mb-sel-opt-price">{plan.priceShort}</div>
                  </button>
                );
              })}
              <div className="mb-sel-total">
                <span>Total</span>
                <b>{pkg.price}</b>
              </div>
              <div className="mb-sel-phases">{pkg.phases}</div>
            </div>

            <a href={wa(pkg.wa)} target="_blank" rel="noopener noreferrer" className="mb-btn mb-btn-primary">
              Confirmar por WhatsApp
            </a>
            <p className="mb-footnote">
              Activos quedan en tus cuentas. Pagos en fases. 30 días de soporte post entrega.
            </p>
          </div>
        </section>

        <footer className="mb-footer">
          Fluxa Method | Método PDM
          <br />
          Margot Bloom |{" "}
          <a href="https://www.instagram.com/margotbloom_studio/" target="_blank" rel="noopener noreferrer">
            @margotbloom_studio
          </a>{" "}
          | Fluxa Method
        </footer>
      </div>
    </div>
  );
}
