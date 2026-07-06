"use client";

import Image from "next/image";
import { useEffect } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Fluxa Method. Revisé la propuesta Automatiza Essenza y quiero confirmar el pago 1 para arrancar Fase 1.";
const ESSENZA_LOGO = "/imagenes/propuesta-essenza-md/logo.png";
const ESSENZA_BRAND = "/imagenes/propuesta-essenza-md/essenza-brand.png";
const FLUXA_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";
const CREATIVE_VIDEO =
  "https://res.cloudinary.com/rdkukqnl/video/upload/v1783293934/WhatsApp_Video_2026-07-05_at_6.12.42_PM_paj5of.mp4";
const CLINIC_VIDEO =
  "https://res.cloudinary.com/rdkukqnl/video/upload/v1783296614/12996389_720_1280_24fps_ozppuf.mp4";

function waUrl(text = WA_MSG) {
  return WA_BASE + encodeURIComponent(text);
}

const LEAKS = [
  { before: "Dos cuentas sin destino compartido", after: "Un sistema para ambas" },
  { before: "Megalink sin jerarquía", after: "Home por nivel de decisión" },
  { before: "Catálogo en PDF de 7 páginas", after: "Catálogo navegable en web" },
  { before: "Hoja de vida en otro PDF", after: "Autoridad integrada en la web" },
  { before: "Cero automatización", after: "Bot unificado IG + WhatsApp" },
  { before: "Cero reservas", after: "Reserva integrada" },
  { before: "Cero testimonios", after: "Prueba social vía UGC" },
  { before: "Cero reactivación", after: "Reactivación a 6 meses" },
];

const FAVORS = [
  {
    icon: "shield",
    title: "Autoridad verificable",
    sub: "U. El Bosque · Antiaging Buenos Aires · ACIME · AMWC Miami · SkinGen",
  },
  {
    icon: "star",
    title: "Perfil ZIUL",
    sub: "Activo con nombre propio. No hay que inventarlo, hay que darle casa digital.",
  },
  {
    icon: "users",
    title: "Comunidad real",
    sub: "Base orgánica en @essenzamd lista para convertir.",
  },
];

const LEVELS = [
  { icon: "door", title: "Entrada", sub: "Bajo compromiso. Convierte curiosidad en cita sin fricción." },
  { icon: "refresh", title: "Compromiso medio", sub: "Mantenimiento y resultado visible a corto plazo." },
  { icon: "crown", title: "Compromiso alto", sub: "Decisiones grandes. La autoridad clínica pesa más." },
  { icon: "compass", title: "Nueva dirección", sub: "Se define en la llamada. La arquitectura se adapta." },
];

const SYSTEM_FLOW = [
  { part: "Laboratorio de contenido + UGC", role: "Alimenta" },
  { part: "Homepage con VSL, catálogo y reserva", role: "Dirige tráfico" },
  { part: "Landings de servicios ganadores", role: "Convierte" },
  { part: "Chat unificado IG + WhatsApp", role: "Agenda + reactivación" },
];

const PHASES = [
  {
    n: "01",
    title: "Cerrar la fuga",
    text: "Homepage + chatbot IA unificado + reserva integrada. Arranca de inmediato.",
  },
  {
    n: "02",
    title: "Puerta de entrada",
    text: "Landing de servicios ganadores según la dirección confirmada.",
  },
  {
    n: "03",
    title: "Prueba social",
    text: "UGC y testimonios. Se construye dentro del proceso.",
  },
  {
    n: "04",
    title: "Retención",
    text: "Reactivación automática a 6 meses. Va al final del sistema.",
  },
];

const FLOW = [
  { icon: "magnet", title: "Capta", sub: "Contenido y ads" },
  { icon: "calendar", title: "Agenda", sub: "Chat automatizado" },
  { icon: "bell", title: "Confirma", sub: "Recordatorio" },
  { icon: "growth", title: "Crece", sub: "Reactivación" },
];

const OBJECTIONS = [
  {
    q: "¿Reemplaza algo que ya uso?",
    a: "Reemplaza el megalink y los PDFs, no herramientas que ya funcionen.",
  },
  {
    q: "¿Y si cambia la dirección de marca?",
    a: "Por eso Fase 2 se ordena después de la llamada, no antes.",
  },
  {
    q: "¿No tengo tiempo para grabar?",
    a: "El laboratorio y el reclutamiento UGC van dentro del sistema.",
  },
];

const VALUE_LINES = [
  { label: "Homepage a medida con reserva integrada", amount: "$7.000.000" },
  { label: "Chatbot IA unificado con reactivación", amount: "$7.500.000" },
  { label: "Landing de servicios ganadores", amount: "$3.000.000" },
  { label: "Laboratorio contenido + UGC + Ads mes 1", amount: "$4.500.000" },
];

const PAYMENTS = [
  { n: "1", amount: "$4.000.000", covers: "Arranque: diagnóstico + inicio arquitectura" },
  { n: "2", amount: "$4.000.000", covers: "Fase 1: homepage + chatbot funcionando" },
  { n: "3", amount: "$4.000.000", covers: "Fase 2: landing + arranque operación mensual" },
];

const PLAN_ESSENTIAL = [
  "Consultoría mensual de homepage, chatbot y agenda",
  "Ajustes de automatizaciones IG y WhatsApp",
  "Recomendaciones de contenido a priorizar",
  "1 sesión mensual con el equipo de Essenza",
];

const PLAN_COMPLETE = [
  "Todo el plan Esencial",
  "Asesoría Meta Ads: campañas, segmentación y métricas",
  "Qué pausar, escalar o probar en pauta",
  "Dirección ampliada de contenido y UGC",
];

const TRUST_LOGOS = [
  { name: "Clínica Duarte", src: "/ChatGPT Image 5 jun 2026, 07_39_38 p.m..png" },
  { name: "Funciona+", src: "/imagenes/funciona-logo.png" },
  { name: "Amy Spa", src: "/logo.png", tall: true },
];

function HeroDecorLayer() {
  return (
    <svg
      className="ea-hero-bg-decor"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="ea-hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8d5a2" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7ebc83" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <g className="ea-hero-decor-waves" fill="none" stroke="url(#ea-hero-grad)" strokeWidth="1.5">
        <path d="M0 720 C240 660 360 780 600 720 S960 640 1200 700 S1440 760 1440 720" opacity="0.55" />
        <path d="M0 780 C280 720 420 820 680 760 S1040 700 1280 780 S1440 820 1440 780" opacity="0.4" />
        <path d="M0 840 C320 790 500 870 760 820 S1120 760 1440 830" opacity="0.28" />
      </g>

      <g className="ea-hero-decor-leaves" fill="#a8d5a2" opacity="0.12">
        <ellipse cx="1180" cy="140" rx="120" ry="48" transform="rotate(-18 1180 140)" />
        <ellipse cx="1320" cy="220" rx="90" ry="36" transform="rotate(12 1320 220)" />
        <ellipse cx="1080" cy="260" rx="70" ry="28" transform="rotate(-8 1080 260)" />
        <path d="M1260 380 Q1290 340 1320 380 Q1290 420 1260 380 Z" opacity="0.85" />
        <path d="M1380 320 Q1410 285 1440 320 Q1410 355 1380 320 Z" opacity="0.7" />
      </g>

      <g className="ea-hero-decor-flow" fill="none" stroke="#7ebc83" strokeWidth="1.25" opacity="0.22">
        <circle cx="1050" cy="420" r="5" fill="#7ebc83" stroke="none" opacity="0.35" />
        <circle cx="1140" cy="380" r="4" fill="#a8d5a2" stroke="none" opacity="0.3" />
        <circle cx="1220" cy="440" r="4.5" fill="#5fa665" stroke="none" opacity="0.28" />
        <circle cx="1300" cy="400" r="3.5" fill="#7ebc83" stroke="none" opacity="0.25" />
        <path d="M1050 420 C1085 400 1110 390 1140 380" />
        <path d="M1140 380 C1175 395 1200 420 1220 440" />
        <path d="M1220 440 C1250 425 1275 410 1300 400" />
        <path d="M1050 420 C1090 450 1160 455 1220 440" strokeDasharray="6 8" opacity="0.18" />
      </g>

      <g className="ea-hero-decor-glow" fill="#e8f3e5" opacity="0.35">
        <circle cx="1240" cy="360" r="180" />
        <circle cx="900" cy="640" r="140" opacity="0.5" />
      </g>
    </svg>
  );
}

function HeroVideoBackground({ src = CLINIC_VIDEO }) {
  return (
    <div className="ea-hero-bg" aria-hidden>
      <video className="ea-hero-bg-video" autoPlay muted loop playsInline preload="auto">
        <source src={src} type="video/mp4" />
      </video>
      <HeroDecorLayer />
      <div className="ea-hero-bg-overlay" />
    </div>
  );
}

function PhoneCreative({ src = CREATIVE_VIDEO, ariaLabel = "Sistema Essenza en WhatsApp" }) {
  return (
    <div className="ea-phone">
      <div className="ea-phone-frame">
        <span className="ea-phone-notch" aria-hidden />
        <div className="ea-phone-display">
          <video
            className="ea-phone-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={ariaLabel}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

function NavPartners() {
  return (
    <div className="ea-partners ea-partners--nav">
      <a href="#hero" className="ea-partners-logo-wrap" aria-label="Essenza MD, inicio">
        <Image
          src={ESSENZA_LOGO}
          alt="Essenza MD"
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
          width={480}
          height={480}
          priority
          className="ea-partners-logo ea-partners-logo--fluxa"
        />
      </div>
    </div>
  );
}

function Icon({ name }) {
  const props = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

  const icons = {
    shield: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
    star: <path d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.3 6.4 20.5l2.1-6.7L3 9.8h6.8L12 3z" />,
    users: (
      <>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M4 19c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5M14 19c0-1.8 1.5-3.2 3.5-3.2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 15V11M12 15V8M16 15v-5" />
      </>
    ),
    door: <path d="M4 4h10v16H4zM14 12h6M17 9v6" />,
    refresh: <path d="M4 12a8 8 0 0113.5-5.5M20 12a8 8 0 01-13.5 5.5M4 8V4H8M16 20h4v-4" />,
    crown: <path d="M4 18h16l-2-9-4 4-2-6-2 6-4-4-2 9zM6 18v2h12v-2" />,
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.5L10 14l4.5-4.5z" />
      </>
    ),
    magnet: <path d="M6 3v6a6 6 0 0012 0V3M9 3v2M15 3v2" />,
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    bell: (
      <>
        <path d="M12 3a5 5 0 00-5 5v4l-2 3h14l-2-3V8a5 5 0 00-5-5z" />
        <path d="M10 20a2 2 0 004 0" />
      </>
    ),
    growth: (
      <>
        <path d="M4 19h16" />
        <path d="M7 15l3-4 3 2 4-7" />
      </>
    ),
  };

  return (
    <svg {...props} aria-hidden>
      {icons[name]}
    </svg>
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

function IconCard({ icon, title, sub }) {
  return (
    <li className="ea-icon-card">
      <span className="ea-icon-circle">
        <Icon name={icon} />
      </span>
      <div>
        <p className="ea-icon-card-text">{title}</p>
        {sub ? <p className="ea-icon-card-sub">{sub}</p> : null}
      </div>
    </li>
  );
}

export default function PropuestaEssenzaAutomatizaPage() {
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
            Confirmar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="ea-hero ea-hero--video">
        <HeroVideoBackground />
        <div className="ea-hero-inner">
          <div className="ea-hero-copy">
            <p className="ea-section-label">Propuesta completa</p>
            <h1 className="ea-hero-title">
              Automatiza Essenza.
              <br />
              <em>Llena tu agenda.</em>
            </h1>
            <p className="ea-hero-sub">
              Dirección estratégica para Essenza: convierte <strong>autoridad médica</strong> en pacientes agendados, sin que el equipo persiga cada mensaje.
            </p>
            <p className="ea-hero-tag">Cliente fundador · arquitectura por nivel de decisión</p>
            <div>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-hero">
                Activar pago 1
                <span className="ea-btn-hero-arrow">→</span>
              </a>
              <a href="#inversion" className="ea-btn-link">
                Ver inversión
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section id="diagnostico" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <div className="ea-split ea-split--wide-right">
            <div className="ea-copy-card">
              <p className="ea-section-label">Diagnóstico</p>
              <div className="ea-line-block mt-2">
                <h2 className="ea-display ea-display--light ea-heading-lg">
                  El problema no es contenido.
                  <br />
                  Es fuga.
                </h2>
                <p className="ea-text mt-5">
                  Essenza tiene autoridad real y audiencia orgánica. Hoy ese esfuerzo llega a un punto de contacto que no convierte.
                </p>
                <p className="ea-text mt-3">
                  Cada fuga abajo es autoridad que ya existe, perdiéndose en el camino a la cita.
                </p>
                <p className="ea-text mt-4">
                  <strong>No se parte de cero.</strong> Se deja de perder lo que ya está construido.
                </p>
              </div>
            </div>

            <div className="ea-compare-list">
              {LEAKS.map((row) => (
                <div key={row.before} className="ea-compare-row">
                  <span className="ea-compare-before">{row.before}</span>
                  <span className="ea-compare-arrow">→</span>
                  <span className="ea-compare-after">{row.after}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A FAVOR */}
      <section id="favor" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Ventaja" title="Lo que ya está a tu favor" />
          <div className="ea-line-block ea-line-block--center">
            <p className="ea-text ea-text--center">
              La inversión no crea demanda. <strong>Deja de perderla.</strong>
            </p>
            <p className="ea-text ea-text--center mt-3">
              Tienes autoridad, marca y comunidad. Solo falta el sistema que las conecte con la agenda.
            </p>
          </div>
          <ul className="ea-icon-grid ea-icon-grid--3 ea-icon-grid--favor ea-icon-grid--center mt-5">
            {FAVORS.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </section>

      {/* VISIÓN */}
      <section id="vision" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="Dirección" title="Más presencia no es el objetivo" />
          <div className="ea-split ea-split--media">
            <blockquote className="ea-quote ea-quote--flush">
              <span className="ea-quote-mark" aria-hidden>
                &ldquo;
              </span>
              <p>
                Convertir la autoridad que ya tienes en un sistema que <strong>capta</strong>, <strong>educa</strong>,{" "}
                <strong>agenda</strong>, <strong>confirma</strong> y <strong>reactiva</strong> sin perseguir cada mensaje.
              </p>
            </blockquote>
            <div className="ea-brand-card">
              <Image
                src={ESSENZA_BRAND}
                alt="Dra. Ziul Pérez - Essenza MD Medicina Estética"
                width={1024}
                height={1024}
                className="ea-brand-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMA */}
      <section id="sistema" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Arquitectura" title="Ordenado por nivel de decisión" />
          <ul className="ea-icon-grid ea-icon-grid--4 ea-icon-grid--center">
            {LEVELS.map((lv) => (
              <IconCard key={lv.title} {...lv} />
            ))}
          </ul>
          <p className="ea-text ea-text--center mt-5">
            Los servicios de cada nivel se ordenan con la doctora en la llamada. La arquitectura se adapta, no depende del catálogo actual.
          </p>
          <div className="ea-system-flow mt-5">
            <p className="ea-section-label ea-section-label--center">Piezas del sistema</p>
            {SYSTEM_FLOW.map((item) => (
              <div key={item.part} className="ea-system-flow-row">
                <span className="ea-system-flow-part">{item.part}</span>
                <span className="ea-system-flow-arrow">→</span>
                <span className="ea-system-flow-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASES */}
      <section id="fases" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="Construcción" title="Fases reales, no todo junto" />
          <div className="ea-phase-list">
            {PHASES.map((ph, i) => (
              <article key={ph.n} className={`ea-phase-item ${i === 0 ? "ea-phase-item--active" : ""}`}>
                {i === 0 ? <p className="ea-phase-flag">Arranca aquí</p> : null}
                <p className="ea-phase-num">{ph.n}</p>
                <p className="ea-phase-title">{ph.title}</p>
                <p className="ea-phase-text">{ph.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section id="prueba-social" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Entregable" title="Prueba social en construcción" />
          <blockquote className="ea-quote">
            <span className="ea-quote-mark" aria-hidden>
              &ldquo;
            </span>
            <p>
              Hoy no existe visible. Se declara como entregable en construcción y se construye vía <strong>UGC</strong> en la Fase 3.
            </p>
          </blockquote>
        </div>
      </section>

      {/* FLUJO */}
      <section id="flujo" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <div className="ea-split ea-split--media">
            <div>
              <p className="ea-section-label">En funcionamiento</p>
              <h2 className="ea-display ea-display--light ea-heading-xl">Capta, agenda, confirma, crece</h2>
              <ul className="ea-icon-grid ea-icon-grid--4 ea-icon-grid--flow mt-5">
                {FLOW.map((step) => (
                  <IconCard key={step.title} icon={step.icon} title={step.title} sub={step.sub} />
                ))}
              </ul>
              <p className="ea-text mt-4">
                Contenido y ads captan, el chat agenda, el recordatorio confirma y la reactivación hace crecer sin trabajo manual.
              </p>
            </div>
            <PhoneCreative />
          </div>
        </div>
      </section>

      {/* OBJECIONES */}
      <section id="objeciones" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Claridad" title="Preguntas frecuentes" />
          <div className="ea-faq-grid">
            {OBJECTIONS.map((item) => (
              <article key={item.q} className="ea-faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section id="inversion" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <SectionHeader label="Inversión" title="Sistema completo" />

          <div className="ea-invest-layout">
            <article className="ea-invest-block">
              <p className="ea-section-label">Si se contratara por separado</p>
              <p className="ea-invest-lead">Valor de mercado por componente</p>
              <div className="ea-value-cards">
                {VALUE_LINES.map((line) => (
                  <div key={line.label} className="ea-value-card">
                    <span className="ea-value-card-label">{line.label}</span>
                    <span className="ea-value-card-amount">{line.amount}</span>
                  </div>
                ))}
              </div>
              <div className="ea-value-total-bar">
                <span>Total por separado</span>
                <span>$22.000.000</span>
              </div>
            </article>

            <article className="ea-invest-block ea-invest-block--featured">
              <p className="ea-section-label">Inversión sistema completo</p>
              <div className="ea-price-compare">
                <span className="ea-price-old">$22.000.000</span>
                <span className="ea-price-save">Ahorras $10.000.000</span>
              </div>
              <p className="ea-price-main">$12.000.000 COP</p>
              <span className="ea-invest-badge">Cliente fundador</span>
              <p className="ea-text ea-text--compact">
                Próximos clientes con este alcance entran a valor superior.
              </p>
              <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-hero ea-btn-hero--block">
                Confirmar pago 1
                <span className="ea-btn-hero-arrow">→</span>
              </a>
            </article>

            <article className="ea-invest-block ea-invest-block--wide">
              <p className="ea-section-label">Forma de pago</p>
              <p className="ea-invest-lead">3 cuotas de $4.000.000 · por fases entregadas, no por mes</p>
              <div className="ea-payment-grid">
                {PAYMENTS.map((p, i) => (
                  <div key={p.n} className={`ea-payment-card ${i === 0 ? "ea-payment-card--first" : ""}`}>
                    <div className="ea-payment-card-head">
                      <span className="ea-payment-num">Pago {p.n}</span>
                      <span className="ea-payment-amount">{p.amount}</span>
                    </div>
                    <p className="ea-payment-covers">{p.covers}</p>
                  </div>
                ))}
              </div>
              <p className="ea-bono">
                <strong>Bono en la llamada:</strong> 2 videos UGC extra en el primer mes al confirmar al cierre.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RECONSUMO */}
      <section id="reconsumo" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Mes 4 en adelante" title="Acompañamiento mensual" />
          <p className="ea-text ea-text--center ea-text--compact mb-5">
            El sistema ya está construido. Fluxa asesora y ajusta. La ejecución queda en tu equipo o un tercero.
          </p>
          <div className="ea-plan-grid">
            <article className="ea-plan-card">
              <p className="ea-section-label">Esencial</p>
              <p className="ea-plan-price">USD $175/mes</p>
              <p className="ea-plan-sub">Acompañamiento y consultoría</p>
              <div className="ea-check-list">
                {PLAN_ESSENTIAL.map((t) => (
                  <div key={t} className="ea-check-item">
                    <span className="ea-check">✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className="ea-plan-card ea-plan-card--featured">
              <p className="ea-section-label">Completo</p>
              <p className="ea-plan-price">USD $357/mes</p>
              <p className="ea-plan-sub">Consultoría + asesoría en pauta</p>
              <div className="ea-check-list">
                {PLAN_COMPLETE.map((t) => (
                  <div key={t} className="ea-check-item">
                    <span className="ea-check">✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section id="cierre" className="ea-section ea-section--white">
        <div className="ea-wrap">
          <div className="ea-cta-panel">
            <p className="ea-section-label" style={{ color: "rgba(255,255,255,0.5)" }}>
              Siguiente paso
            </p>
            <h2 className="ea-display ea-heading-lg">Confirma y arranca Fase 1 hoy</h2>
            <p className="ea-text">Una sola acción: activar el pago 1 y cerrar la fuga de inmediato.</p>
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-btn-white">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="ea-section ea-section--soft">
        <div className="ea-wrap">
          <SectionHeader label="Trayectoria" title="Ya tenemos experiencia" />
          <p className="ea-text ea-text--center">
            Marcas y proyectos con los que ya hemos trabajado.
          </p>
          <div className="ea-trust-grid">
            {TRUST_LOGOS.map((logo) => (
              <div key={logo.name} className="ea-trust-slot">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={96}
                  className={`ea-trust-img${logo.tall ? " ea-trust-img--tall" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="ea-footer">Propuesta confidencial · Fluxa Systems · Essenza MD</footer>

      <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="ea-floating-wa" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
