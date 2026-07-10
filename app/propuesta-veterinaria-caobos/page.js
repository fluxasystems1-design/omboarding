"use client";

import Image from "next/image";
import { useEffect } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Fluxa. Revisé la propuesta de Veterinaria Caobos y quiero arrancar con homepage + Linktree + reserva.";
const CAOBOS_LOGO = "/imagenes/veterinaria-caobos-logo.png";
const FLUXA_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const IG_URL = "https://www.instagram.com/veterinariacaobos";
const CANVA_BRIEF =
  "https://www.canva.com/design/DAGEaxNogbc/KcNsKsZwuTwRxoX5bn9TOg/view";

const HERO_VIDEO = "/7469779-hd_1920_1080_25fps.mp4";

function waUrl(text = WA_MSG) {
  return WA_BASE + encodeURIComponent(text);
}

const INCLUDES = [
  {
    icon: "home",
    title: "Homepage",
    sub: "Sitio principal con la marca Caobos: servicios, confianza y llamada a agendar.",
  },
  {
    icon: "links",
    title: "Linktree a medida",
    sub: "Página de enlaces con buen diseño para Instagram: WhatsApp, citas, servicios y más.",
  },
  {
    icon: "calendar",
    title: "Reserva de citas básica",
    sub: "Formulario en la homepage para pedir cita: datos, mascota, servicio y fecha preferida.",
  },
];

const HOME_BLOCKS = [
  { title: "Hero de marca", text: "Logo, mensaje claro y botón para agendar." },
  { title: "Servicios", text: "Consulta, vacunas, cirugía, urgencias — lo que ustedes ofrezcan." },
  { title: "Por qué Caobos", text: "Confianza, cuidado y cercanía con dueños y mascotas." },
  { title: "Reserva de citas", text: "Formulario básico integrado en la misma página." },
  { title: "Contacto / WhatsApp", text: "Llegar fácil desde el celular." },
];

const LINKTREE_ITEMS = [
  "Agendar cita",
  "WhatsApp",
  "Servicios",
  "Ubicación / cómo llegar",
  "Instagram",
  "Homepage",
];

const FLOW = [
  { n: "01", title: "Llega desde Instagram", text: "Bio → Linktree con diseño de marca." },
  { n: "02", title: "Elige qué necesita", text: "Cita, WhatsApp o ver la homepage." },
  { n: "03", title: "Agenda en la web", text: "Formulario básico de reserva en la homepage." },
  { n: "04", title: "Ustedes confirman", text: "Reciben la solicitud y cierran por WhatsApp o llamada." },
];

const VALUE_LINES = [
  { label: "Homepage a medida", amount: "$900.000" },
  { label: "Linktree con diseño de marca", amount: "$400.000" },
  { label: "Reserva de citas básica", amount: "$379.000" },
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
            Arrancar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="ea-hero ea-hero--video">
        <HeroVideoBackground />
        <div className="ea-hero-inner">
          <div className="ea-hero-copy">
            <p className="ea-section-label">Propuesta digital</p>
            <h1 className="ea-hero-title">
              Veterinaria Caobos.
              <br />
              <em>Presencia clara. Citas fáciles.</em>
            </h1>
            <p className="ea-hero-sub">
              Homepage + Linktree con buen diseño + <strong>reserva de citas básica</strong>. Para que quien llega
              desde Instagram sepa qué hacer en segundos.
            </p>
            <p className="ea-hero-tag">@veterinariacaobos · Fluxa Systems</p>
            <div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-hero">
                Quiero arrancar
                <span className="ea-btn-hero-arrow">→</span>
              </a>
              <a href="#inversion" className="ea-btn-link">
                Ver valor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="Alcance" title="Qué incluye este paquete" />
          <ul className="ea-icon-grid ea-icon-grid--3 ea-icon-grid--center">
            {INCLUDES.map((item) => (
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
          <p className="ea-text ea-text--center mt-5">
            Brief de referencia:{" "}
            <a href={CANVA_BRIEF} target="_blank" rel="noopener noreferrer" className="ea-btn-link" style={{ margin: 0 }}>
              ver en Canva
            </a>
            {" · "}
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="ea-btn-link" style={{ margin: 0 }}>
              Instagram
            </a>
          </p>
        </div>
      </section>

      {/* HOMEPAGE */}
      <section id="homepage" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="01 · Homepage" title="La casa digital de Caobos" />
          <p className="ea-text ea-text--center mb-5">
            Una página principal limpia, con la identidad de la veterinaria y un camino claro a la cita.
          </p>
          <div className="ea-compare-list">
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

      {/* LINKTREE */}
      <section id="linktree" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="02 · Linktree" title="Enlaces con diseño de marca" />
          <p className="ea-text ea-text--center mb-5">
            No un Linktree genérico. Una página de enlaces hecha para Caobos: ordenada, bonita y lista para la bio de
            Instagram.
          </p>
          <div className="ea-value-cards" style={{ maxWidth: "28rem", margin: "0 auto" }}>
            {LINKTREE_ITEMS.map((label) => (
              <div key={label} className="ea-value-card" style={{ justifyContent: "center" }}>
                <span className="ea-value-card-label" style={{ textAlign: "center", width: "100%" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="03 · Citas" title="Reserva básica en la homepage" />
          <blockquote className="ea-quote">
            <span className="ea-quote-mark" aria-hidden>
              &ldquo;
            </span>
            <p>
              El dueño deja nombre, teléfono, mascota, servicio y fecha preferida. Ustedes reciben la solicitud y
              confirman. <strong>Simple, sin agenda compleja.</strong>
            </p>
          </blockquote>
          <div className="ea-check-list" style={{ maxWidth: "36rem", margin: "1.5rem auto 0" }}>
            {[
              "Formulario en la homepage",
              "Datos del dueño y de la mascota",
              "Tipo de servicio / motivo",
              "Fecha y franja preferida",
              "Aviso a ustedes (email o WhatsApp)",
              "Confirmación manual por su equipo",
            ].map((t) => (
              <div key={t} className="ea-check-item">
                <span className="ea-check">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLUJO */}
      <section className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="En la práctica" title="Así llega el cliente" />
          <div className="ea-phase-list">
            {FLOW.map((step) => (
              <article key={step.n} className="ea-phase-item">
                <p className="ea-phase-num">{step.n}</p>
                <p className="ea-phase-title">{step.title}</p>
                <p className="ea-phase-text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALOR */}
      <section id="inversion" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Valor" title="Qué vale este trabajo" />
          <div className="ea-invest-layout">
            <article className="ea-invest-block">
              <p className="ea-section-label">Desglose</p>
              <div className="ea-value-cards">
                {VALUE_LINES.map((line) => (
                  <div key={line.label} className="ea-value-card">
                    <span className="ea-value-card-label">{line.label}</span>
                    <span className="ea-value-card-amount">{line.amount}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="ea-invest-block ea-invest-block--featured">
              <p className="ea-section-label">Valor del paquete</p>
              <p className="ea-price-main">$1.679.000 COP</p>
              <span className="ea-invest-badge">Homepage + Linktree + reserva</span>
              <p className="ea-text ea-text--compact">
                Referencia de valor de lo que vamos a construir. Sin plan de pagos en esta propuesta.
              </p>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-hero ea-btn-hero--block">
                Quiero hablar
                <span className="ea-btn-hero-arrow">→</span>
              </a>
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
              De Instagram a la cita,
              <br />
              sin perder al cliente.
            </h2>
            <p className="ea-text ea-text--center mt-3" style={{ color: "rgba(255,255,255,0.72)" }}>
              Homepage + Linktree + reserva básica. Escribenos y conversamos.
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
