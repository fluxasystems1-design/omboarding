"use client";

import Image from "next/image";
import { useEffect } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Fluxa. Revisé la propuesta de intercambio con Veterinaria Caobos y quiero conversar.";
const CAOBOS_LOGO = "/imagenes/veterinaria-caobos-logo.png";
const FLUXA_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";

const HERO_VIDEO = "/7469779-hd_1920_1080_25fps.mp4";

const VALOR_COP = 3080000;
const VALOR_USD = 770;

function waUrl(text = WA_MSG) {
  return WA_BASE + encodeURIComponent(text);
}

function formatCOP(n) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);
}

const DIGITAL = [
  {
    icon: "home",
    title: "Home page profesional",
    sub: "Reemplaza el link de Canva. Marca Caobos, confianza y camino claro a contactar o agendar.",
  },
  {
    icon: "links",
    title: "Linktree a medida",
    sub: "Página de enlaces para la bio de Instagram: WhatsApp, citas, servicios y ubicación.",
  },
  {
    icon: "calendar",
    title: "Landing de servicios",
    sub: "Precios, ubicación, qué ofrecen y botón directo a WhatsApp.",
  },
  {
    icon: "calendar",
    title: "Reserva de citas básica",
    sub: "Formulario en la web: dueño, mascota, servicio y fecha preferida.",
  },
];

const CONTENIDO = [
  {
    icon: "links",
    title: "Laboratorio de contenido",
    sub: "Guiones, ganchos de 3 segundos y calendario de publicación.",
  },
  {
    icon: "home",
    title: "5 videos listos",
    sub: "Grabados y editados, listos para publicar en redes.",
  },
  {
    icon: "calendar",
    title: "Redes sociales",
    sub: "Encargado de ejecución o asesoría continua en publicación — según lo que prefieran.",
  },
];

const HOME_BLOCKS = [
  { title: "Hero de marca", text: "Video, mensaje claro y botón a WhatsApp o cita." },
  { title: "Servicios y precios", text: "Landing dedicada con lo que ofrecen y cuánto cuesta." },
  { title: "Ubicación", text: "Cómo llegar y contacto directo." },
  { title: "Reserva de citas", text: "Formulario básico integrado." },
  { title: "Linktree en bio", text: "Enlaces ordenados para Instagram." },
  { title: "Publicación", text: "Deploy y entrega lista para usar." },
];

const VALUE_LINES = [
  { label: "Home page profesional", amount: "$1.000.000" },
  { label: "Landing de servicios + ubicación", amount: "$650.000" },
  { label: "Linktree con diseño de marca", amount: "$350.000" },
  { label: "Reserva de citas básica", amount: "$400.000" },
  { label: "Laboratorio de contenido", amount: "$380.000" },
  { label: "5 videos grabados y editados", amount: "$450.000" },
  { label: "Asesoría o ejecución en redes", amount: "$350.000" },
];

function Icon({ name }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const icons = {
    home: (
      <>
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5 10v10h14V10" />
      </>
    ),
    links: (
      <>
        <path d="M10 13a5 5 0 007.07 0l2.12-2.12a5 5 0 00-7.07-7.07L11 5" />
        <path d="M14 11a5 5 0 00-7.07 0L4.8 13.12a5 5 0 007.07 7.07L13 19" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
  };
  return (
    <svg {...props} aria-hidden>
      {icons[name]}
    </svg>
  );
}

function HeroVideoBackground() {
  return (
    <div className="ea-hero-bg" aria-hidden>
      <video className="ea-hero-bg-video" autoPlay muted loop playsInline preload="auto">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="ea-hero-bg-overlay" />
    </div>
  );
}

function NavPartners() {
  return (
    <div className="ea-partners ea-partners--nav">
      <a href="#hero" className="ea-partners-logo-wrap" aria-label="Veterinaria Caobos, inicio">
        <Image
          src={CAOBOS_LOGO}
          alt="Veterinaria Caobos"
          width={720}
          height={216}
          priority
          className="ea-partners-logo ea-partners-logo--essenza"
        />
      </a>
      <span className="ea-partners-plus" aria-hidden>
        +
      </span>
      <div className="ea-partners-logo-wrap">
        <Image
          src={FLUXA_LOGO}
          alt="Fluxa Systems"
          width={720}
          height={216}
          className="ea-partners-logo ea-partners-logo--fluxa"
        />
      </div>
    </div>
  );
}

function SectionHeader({ label, title }) {
  return (
    <header className="ea-header-center">
      <p className="ea-section-label">{label}</p>
      <h2 className="ea-display ea-display--light ea-heading-xl">{title}</h2>
    </header>
  );
}

export default function PropuestaVeterinariaCaobosPage() {
  useEffect(() => {
    const nav = document.getElementById("ea-nav");
    const onScroll = () => nav?.classList.toggle("ea-nav--scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="essenza-amy-page">
      <header id="ea-nav" className="ea-nav">
        <div className="ea-nav-inner">
          <NavPartners />
          <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-nav-cta">
            Conversar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="ea-hero ea-hero--video">
        <HeroVideoBackground />
        <div className="ea-hero-inner">
          <div className="ea-hero-copy">
            <p className="ea-section-label">Propuesta de intercambio</p>
            <h1 className="ea-hero-title">
              Caobos cuidó a nuestra perra.
              <br />
              <em>Nosotros cuidamos su presencia digital.</em>
            </h1>
            <p className="ea-hero-sub">
              Fluxa Systems propone cubrir el tratamiento veterinario acumulado a cambio de un{" "}
              <strong>sistema digital completo</strong> para la clínica: web, contenido y redes.
            </p>
            <p className="ea-hero-tag">Veterinaria Caobos × Fluxa Systems</p>
            <div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-hero">
                Quiero conversar
                <span className="ea-btn-hero-arrow">→</span>
              </a>
              <a href="#intercambio" className="ea-btn-link">
                Ver propuesta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="Contexto" title="Por qué esta propuesta" />
          <blockquote className="ea-quote">
            <span className="ea-quote-mark" aria-hidden>
              &ldquo;
            </span>
            <p>
              Nuestra perrita está en tratamiento en Caobos por una condición que ha requerido varios
              procedimientos. Confiamos en ustedes con lo más importante. Queremos proponer un{" "}
              <strong>intercambio justo</strong>: cubrir la deuda del tratamiento a cambio de dejarles
              una presencia digital a la altura de su trabajo.
            </p>
          </blockquote>
        </div>
      </section>

      {/* DIGITAL */}
      <section id="digital" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Sistema digital" title="Lo que construimos para Caobos" />
          <ul className="ea-icon-grid ea-icon-grid--3 ea-icon-grid--center">
            {DIGITAL.map((item) => (
              <li key={item.title} className="ea-icon-card">
                <span className="ea-icon-circle">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <p className="ea-icon-card-text">{item.title}</p>
                  <p className="ea-icon-card-sub">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="ea-compare-list mt-5">
            {HOME_BLOCKS.map((b) => (
              <div key={b.title} className="ea-compare-row">
                <span className="ea-compare-before">{b.title}</span>
                <span className="ea-compare-arrow">→</span>
                <span className="ea-compare-after">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="contenido" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="Contenido y redes" title="Para que no solo tengan web" />
          <ul className="ea-icon-grid ea-icon-grid--3 ea-icon-grid--center">
            {CONTENIDO.map((item) => (
              <li key={item.title} className="ea-icon-card">
                <span className="ea-icon-circle">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <p className="ea-icon-card-text">{item.title}</p>
                  <p className="ea-icon-card-sub">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INTERCAMBIO */}
      <section id="intercambio" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Intercambio" title="Cómo quedaría el acuerdo" />
          <div className="ea-invest-layout">
            <article className="ea-invest-block ea-invest-block--featured ea-invest-block--wide">
              <p className="ea-section-label">Valor del sistema digital</p>
              <p className="ea-price-main">{formatCOP(VALOR_COP)}</p>
              <span className="ea-invest-badge">Sistema digital completo · USD {VALOR_USD}</span>
              <p className="ea-invest-lead">
                <strong>Caobos no paga nada de este valor.</strong> Es el mismo paquete que Fluxa cobra
                normalmente a sus clientes, pero aquí se liquida con un intercambio de servicios: Fluxa
                cubre el tratamiento de nuestra perrita y ustedes reciben web, contenido y redes listos
                para usar.
              </p>
              <p className="ea-text ea-text--compact" style={{ margin: 0 }}>
                Sin plan de pagos · sin desembolso en efectivo · intercambio de valor.
              </p>
            </article>

            <article className="ea-invest-block ea-invest-block--wide">
              <p className="ea-section-label">Desglose del paquete Fluxa</p>
              <div className="ea-value-cards">
                {VALUE_LINES.map((line) => (
                  <div key={line.label} className="ea-value-card">
                    <span className="ea-value-card-label">{line.label}</span>
                    <span className="ea-value-card-amount">{line.amount}</span>
                  </div>
                ))}
              </div>
              <div className="ea-value-total-bar">
                <span>Valor total del paquete</span>
                <span>{formatCOP(VALOR_COP)} · USD {VALOR_USD}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="ea-section ea-section--white">
        <div className="ea-wrap">
          <div className="ea-cta-panel">
            <p className="ea-section-label">Siguiente paso</p>
            <h2 className="ea-display ea-heading-xl" style={{ color: "#fff", fontWeight: 300 }}>
              Ustedes cuidaron a nuestra perra.
              <br />
              Dejemos Caobos con cara profesional.
            </h2>
            <p className="ea-text ea-text--center mt-3" style={{ color: "rgba(255,255,255,0.72)" }}>
              Si les hace sentido el intercambio, conversamos y arrancamos.
            </p>
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-white">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="ea-footer">Propuesta confidencial · Fluxa Systems · Veterinaria Caobos</footer>

      <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-floating-wa" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
