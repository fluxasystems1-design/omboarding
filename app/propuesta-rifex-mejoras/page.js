"use client";

import Image from "next/image";
import { useEffect } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const WA_MSG =
  "Hola Fluxa. Vi la propuesta de mejoras para RIFEX y quiero arrancar. ¿Hablamos?";
const RIFEX_LOGO = "/logo_principal.png";
const FLUXA_LOGO = "/imagenes/opticallery/fluxa-partners-logo.png";

function waUrl(text = WA_MSG) {
  return WA_BASE + encodeURIComponent(text);
}

const HOY_VS_NUEVO = [
  { before: "Premios en párrafos de texto", after: "Cards con foto y botón claro" },
  { before: "Fechas pegadas en el código", after: "Tú editas premios desde el admin" },
  { before: "Barra EN VIVO de mentira", after: "Compras reales de tu base de datos" },
  { before: "Sin cuenta regresiva", after: "Reloj hasta el día del sorteo" },
  { before: "Ganadores sin página", after: "Historial público para que confíen" },
  { before: "Se siente pequeño", after: "Se siente rifa grande y seria" },
];

const PANEL_MODULOS = [
  {
    icon: "📊",
    title: "Dashboard mejorado",
    sub: "Entras y entiendes el día en segundos.",
    items: [
      "Resumen del día: ventas, pendientes, boletos y plata",
      "Barra de avance por rifa (% vendido y meta de sorteo)",
      "Cola de pendientes urgentes (+2h / +24h)",
      "Aprobar o rechazar desde el mismo dashboard",
      "Alertas: pocos boletos, muchos pendientes, sorteo cerca",
      "Actividad reciente real (quién compró hace X min)",
      "Gráfico de ventas 7 / 30 días",
      "Comparar rifas: boletos, recaudación y % vendido",
      "Atajos: nueva rifa · pendientes · sorteo · venta física",
      "Filtro rápido: hoy / semana / mes",
      "Estado Mercado Pago: automáticos, manuales y fallidos",
    ],
  },
  {
    icon: "🎁",
    title: "Premios desde el admin",
    sub: "Lo nuevo que vas a poder editar.",
    items: [
      "Subir foto y nombre de cada premio semanal",
      "Asignar fecha / semana a cada premio",
      "Ordenar y activar o pausar premios",
      "Se reflejan solos en la landing",
    ],
  },
  {
    icon: "⏱",
    title: "Cuenta regresiva",
    sub: "Tú defines la fecha del sorteo.",
    items: [
      "Campo de fecha y hora del sorteo",
      "La landing muestra el reloj automático",
      "Cambias la fecha y se actualiza al instante",
    ],
  },
  {
    icon: "🏆",
    title: "Gran premio destacado",
    sub: "El premiazo lo controlas tú.",
    items: [
      "Elegir qué premio va arriba en la home",
      "Carrusel de fotos del gran premio",
      "Badge de semana editable",
    ],
  },
  {
    icon: "🎉",
    title: "Ganadores públicos",
    sub: "Del sorteo a la página, sin pasos raros.",
    items: [
      "Al sortear, el ganador queda listo para publicar",
      "Foto del premio + nombre + ID en /ganadores",
      "Filtros por mes y año desde lo que ya registraste",
    ],
  },
  {
    icon: "💳",
    title: "Mercado Pago en el flujo",
    sub: "Pagos en línea, no solo WhatsApp.",
    items: [
      "Checkout conectado y listo para cobrar",
      "Aprobación automática cuando el pago entra",
      "Menos pendientes manuales día a día",
    ],
  },
  {
    icon: "📡",
    title: "Compras en vivo reales",
    sub: "La barra deja de ser inventada.",
    items: [
      "Se alimenta de participantes aprobados",
      "Se actualiza con lo que pasa en el admin",
      "Más confianza para quien llega a comprar",
    ],
  },
];

const FASE1 = [
  {
    icon: "🏆",
    title: "Gran premio arriba",
    sub: "Carrusel del premio estrella, fecha de la semana y botón para participar ya.",
  },
  {
    icon: "⏱",
    title: "Cuenta regresiva",
    sub: "Horas, minutos y segundos. La gente siente que se acaba el tiempo.",
  },
  {
    icon: "🎁",
    title: "Premios de la semana",
    sub: "Cards en 2 columnas: foto, fecha, nombre y botón Lo quiero.",
  },
  {
    icon: "🏷",
    title: "Filtro por semana",
    sub: "Ver todos o filtrar por semana. Fácil en el celular.",
  },
  {
    icon: "📡",
    title: "Compras en vivo",
    sub: "Quién compró y cuántos tickets — datos reales, no inventados.",
  },
  {
    icon: "✨",
    title: "Look & feel nuevo",
    sub: "Cards blancas, dorado RIFEX, menos pared de texto.",
  },
];

const FASE2 = [
  {
    icon: "🎉",
    title: "Página de ganadores",
    sub: "Todos los ganadores en un solo lugar, ordenados por semana.",
  },
  {
    icon: "🔍",
    title: "Buscar por mes o año",
    sub: "Filtra cuando quieras ver sorteos pasados.",
  },
  {
    icon: "🪪",
    title: "Tarjeta de ganador",
    sub: "Premio, nombre e ID. Que se vea que sí hay ganadores.",
  },
  {
    icon: "💳",
    title: "Mercado Pago conectado",
    sub: "Instalamos y vinculamos la pasarela para cobrar en línea.",
  },
];

const EXTRAS_BASICOS = [
  "Links claros: Ganadores · Mis tickets · Club",
  "Menú y navegación más ordenada en móvil",
  "Textos viejos del sitio actualizados",
  "Botón de WhatsApp bien ubicado",
  "Deploy final en rifex.app",
  "Revisión contigo antes de publicar",
];

const RESUMEN_PAQUETE = [
  "Gran premio destacado con carrusel y botón participar",
  "Cuenta regresiva hasta el sorteo",
  "Grid de premios semanales con foto y fecha",
  "Filtros por semana en la landing",
  "Barra EN VIVO con compras reales",
  "Rediseño visual completo (dorado RIFEX, mobile-first)",
  "Premios y fechas editables desde el admin",
  "Panel de control conectado a la landing nueva",
  "Dashboard: resumen del día (ventas, pendientes, boletos, plata)",
  "Dashboard: barra de avance por rifa y meta de sorteo",
  "Dashboard: cola de pendientes urgentes + aprobar/rechazar rápido",
  "Dashboard: alertas (pocos boletos, pendientes, sorteo cerca)",
  "Dashboard: actividad reciente real",
  "Dashboard: gráfico de ventas 7 / 30 días",
  "Dashboard: comparar rifas (boletos, recaudación, %)",
  "Dashboard: atajos del día + filtro hoy / semana / mes",
  "Dashboard: estado Mercado Pago (automáticos, manuales, fallidos)",
  "Página /ganadores con historial completo",
  "Tarjetas de ganador con premio, nombre e ID",
  "Filtros por mes y año en ganadores",
  "Instalación y vinculación de Mercado Pago",
  "Checkout en línea + webhook para aprobar pagos",
  "Links en menú: Ganadores · Mis tickets · Club",
  "Ajustes mobile y textos actualizados",
  "Deploy en rifex.app listo para usar",
];

const YA_TIENE = [
  "Landing con video e imágenes",
  "Venta por WhatsApp",
  "Panel admin completo",
  "Sorteo y email al ganador",
  "Mis tickets y reenvío de códigos",
  "Paquetes de boletos y multi-divisa",
];

const TIMELINE = [
  { week: "Semana 1", text: "Nuevo diseño · gran premio · countdown · premios semanales · EN VIVO real" },
  { week: "Semana 2", text: "Dashboard mejorado · ganadores · Mercado Pago · filtros" },
  { week: "Semana 3", text: "Pruebas contigo · subida a rifex.app · últimos retoques" },
];

function HeroMoneyBackground() {
  const floats = [
    { type: "coin", char: "$", left: "6%", bottom: "12%", size: 28, delay: 0, dur: 16 },
    { type: "coin", char: "$", left: "18%", bottom: "8%", size: 22, delay: 2, dur: 14 },
    { type: "coin", char: "$", left: "82%", bottom: "15%", size: 26, delay: 1, dur: 18 },
    { type: "coin", char: "$", left: "92%", bottom: "22%", size: 20, delay: 3, dur: 15 },
    { type: "arrow", left: "72%", bottom: "10%", size: 32, delay: 0, dur: 12 },
    { type: "arrow", left: "88%", bottom: "18%", size: 24, delay: 1.5, dur: 10 },
    { type: "arrow", left: "55%", bottom: "6%", size: 28, delay: 0.8, dur: 13 },
    { type: "arrow", left: "38%", bottom: "14%", size: 20, delay: 2.2, dur: 11 },
    { type: "coin", char: "$", left: "48%", bottom: "5%", size: 18, delay: 4, dur: 17 },
    { type: "arrow", left: "24%", bottom: "20%", size: 22, delay: 3, dur: 14 },
  ];

  return (
    <div className="rx-hero-bg" aria-hidden>
      <div className="rx-hero-bg-glow" />
      <svg className="rx-hero-chart" viewBox="0 0 400 120" preserveAspectRatio="none">
        <path
          className="rx-hero-chart-line"
          d="M0 95 L60 88 L120 72 L180 58 L240 42 L300 28 L360 12 L400 4"
          fill="none"
          stroke="url(#rxChartGrad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="rxChartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>
      {floats.map((f, i) =>
        f.type === "coin" ? (
          <span
            key={i}
            className="rx-hero-float rx-hero-float--coin"
            style={{
              left: f.left,
              bottom: f.bottom,
              fontSize: f.size,
              animationDuration: `${f.dur}s`,
              animationDelay: `${f.delay}s`,
            }}
          >
            {f.char}
          </span>
        ) : (
          <span
            key={i}
            className="rx-hero-float rx-hero-float--arrow"
            style={{
              left: f.left,
              bottom: f.bottom,
              fontSize: f.size,
              animationDuration: `${f.dur}s`,
              animationDelay: `${f.delay}s`,
            }}
            aria-hidden
          >
            ↑
          </span>
        )
      )}
      <div className="rx-hero-bg-overlay" />
    </div>
  );
}

function NavPartners() {
  return (
    <div className="rx-partners">
      <a href="#hero" className="rx-partners-logo-link" aria-label="RIFEX, inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={RIFEX_LOGO} alt="RIFEX" className="rx-partners-logo rx-partners-logo--rifex" />
      </a>
      <span className="rx-partners-plus" aria-hidden>
        +
      </span>
      <div className="rx-partners-logo-link">
        <Image
          src={FLUXA_LOGO}
          alt="Fluxa Systems"
          width={720}
          height={216}
          className="rx-partners-logo rx-partners-logo--fluxa"
        />
      </div>
    </div>
  );
}

function SectionHeader({ label, title, dark = false }) {
  return (
    <header className="rx-header-center">
      <p className="rx-section-label" style={dark ? { color: "var(--rx-gold)" } : undefined}>
        {label}
      </p>
      <h2 className="rx-display rx-display--light rx-heading-xl">{title}</h2>
    </header>
  );
}

function FeatureCard({ icon, title, sub }) {
  return (
    <article className="rx-feature-card">
      <span className="rx-feature-icon" aria-hidden>
        {icon}
      </span>
      <p className="rx-feature-title">{title}</p>
      <p className="rx-feature-sub">{sub}</p>
    </article>
  );
}

export default function PropuestaRifexMejorasPage() {
  useEffect(() => {
    const nav = document.getElementById("rx-nav");
    const onScroll = () => nav?.classList.toggle("rx-nav--scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="rx-page">
      <header id="rx-nav" className="rx-nav">
        <div className="rx-nav-inner">
          <NavPartners />
          <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="rx-nav-cta">
            Arrancar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="rx-hero">
        <HeroMoneyBackground />
        <div className="rx-hero-inner">
          <p className="rx-section-label">Propuesta v2 · rifex.app</p>
          <h1 className="rx-hero-title">
            La misma rifa.
            <br />
            <em>Presentación de las grandes.</em>
          </h1>
          <p className="rx-hero-sub">
            Lo que ya tienes funciona. Esto es para que se vea a la altura, venda más desde Instagram y quien entre
            confíe de una — con tu dorado RIFEX, sin empezar de cero.
          </p>
          <p className="rx-hero-tag">Daniel · RIFEX · Marzo 2026</p>
          <div>
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="rx-btn-hero">
              Quiero arrancar
              <span>→</span>
            </a>
            <a href="#inversion" className="rx-btn-link">
              Ver inversión
            </a>
          </div>
        </div>
      </section>

      {/* HOY VS NUEVO */}
      <section id="diagnostico" className="rx-section rx-section--soft">
        <div className="rx-wrap">
          <SectionHeader label="En pocas palabras" title="Qué mejora" />
          <p className="rx-text rx-text--center mb-5">
            Con el millón montamos la plataforma. Esto es el siguiente paso: que quien llegue desde redes{" "}
            <strong>entenda rápido, confíe y compre</strong>.
          </p>
          <div className="rx-compare-list">
            {HOY_VS_NUEVO.map((row) => (
              <div key={row.before} className="rx-compare-row">
                <span className="rx-compare-before">{row.before}</span>
                <span className="rx-compare-arrow">→</span>
                <span className="rx-compare-after">{row.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL DE CONTROL */}
      <section id="panel" className="rx-section rx-section--dark">
        <div className="rx-wrap">
          <SectionHeader label="Panel de control" title="Qué se suma al admin" dark />
          <p className="rx-text rx-text--center mb-5">
            El panel que ya usas se amplía. Estas son las piezas <strong>nuevas o mejoradas</strong> para que lo de la
            landing lo manejes tú, sin pedir cambios cada semana.
          </p>
          <div className="rx-panel-grid">
            {PANEL_MODULOS.map((mod) => (
              <article
                key={mod.title}
                className={`rx-panel-card${mod.title === "Dashboard mejorado" ? " rx-panel-card--wide" : ""}`}
              >
                <span className="rx-panel-icon" aria-hidden>
                  {mod.icon}
                </span>
                <p className="rx-panel-title">{mod.title}</p>
                <p className="rx-panel-sub">{mod.sub}</p>
                <ul className="rx-panel-list">
                  {mod.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="rx-panel-footnote">
            En resumen: editas premios, fechas y ganadores en el admin — y la página pública se actualiza sola.
          </p>
        </div>
      </section>

      {/* DETALLE LANDING */}
      <section className="rx-section rx-section--white">
        <div className="rx-wrap">
          <SectionHeader label="Landing" title="Lo que cambia en la página principal" />
          <div className="rx-feature-grid rx-feature-grid--3">
            {FASE1.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* DETALLE GANADORES + PAGO */}
      <section className="rx-section rx-section--soft">
        <div className="rx-wrap">
          <SectionHeader label="Ganadores y pagos" title="Para que confíen y paguen fácil" />
          <div className="rx-feature-grid">
            {FASE2.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* EXTRAS BÁSICOS */}
      <section className="rx-section rx-section--white">
        <div className="rx-wrap">
          <SectionHeader label="También incluido" title="Detalles que suman" />
          <p className="rx-text rx-text--center mb-4">
            Cosas sencillas que dejan el sitio más redondo, sin complicarte la vida.
          </p>
          <div className="rx-check-list rx-resumen-grid">
            {EXTRAS_BASICOS.map((t) => (
              <div key={t} className="rx-check-item">
                <span className="rx-check">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YA TIENE */}
      <section className="rx-section rx-section--soft">
        <div className="rx-wrap">
          <div className="rx-split">
            <div>
              <SectionHeader label="Lo que ya tienes" title="No empezamos de cero" />
              <p className="rx-text">
                Mejoramos lo que ya corre en <strong>rifex.app</strong>. Tu admin, tus rifas y tu flujo de venta siguen
                ahí.
              </p>
            </div>
            <div className="rx-check-list">
              {YA_TIENE.map((t) => (
                <div key={t} className="rx-check-item">
                  <span className="rx-check">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN */}
      <section id="inversion" className="rx-section rx-section--white">
        <div className="rx-wrap">
          <SectionHeader label="Inversión" title="Todo lo que incluye el paquete" />

          <article className="rx-invest-block rx-invest-block--wide rx-resumen-block">
            <p className="rx-section-label">Resumen completo</p>
            <p className="rx-text rx-text--compact mb-3">
              Landing nueva + dashboard mejorado + ganadores + Mercado Pago conectado. Todo en un solo paquete.
            </p>
            <div className="rx-check-list rx-resumen-grid">
              {RESUMEN_PAQUETE.map((t) => (
                <div key={t} className="rx-check-item">
                  <span className="rx-check">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="rx-invest-layout mt-4">
            <article className="rx-invest-block rx-invest-block--featured rx-invest-block--wide">
              <p className="rx-section-label">Inversión total</p>
              <p className="rx-price-main">$2.499.000 COP</p>
              <span className="rx-invest-badge">Todo incluido</span>
              <p className="rx-text rx-text--compact mt-3">
                Entrega en 2–3 semanas. Revisamos contigo antes de publicar.
              </p>
              <a
                href={waUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rx-btn-hero"
                style={{ width: "100%", justifyContent: "center", marginTop: "1.25rem" }}
              >
                Confirmar arranque
                <span>→</span>
              </a>
            </article>

            <article className="rx-invest-block rx-invest-block--wide">
              <p className="rx-section-label">Forma de pago</p>
              <div className="rx-payment-grid">
                <div className="rx-payment-card rx-payment-card--first">
                  <span className="rx-payment-num">Pago 1 · 50%</span>
                  <p className="rx-payment-amount">$1.249.500</p>
                  <p className="rx-payment-covers">Al confirmar · arrancamos diseño y landing</p>
                </div>
                <div className="rx-payment-card">
                  <span className="rx-payment-num">Pago 2 · 50%</span>
                  <p className="rx-payment-amount">$1.249.500</p>
                  <p className="rx-payment-covers">Al entregar en rifex.app · ganadores, MP y pruebas</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="rx-section rx-section--soft">
        <div className="rx-wrap">
          <SectionHeader label="Cuándo" title="Cómo avanzamos" />
          <div className="rx-timeline">
            {TIMELINE.map((item) => (
              <div key={item.week} className="rx-timeline-item">
                <span className="rx-timeline-week">{item.week}</span>
                <p className="rx-timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="rx-section rx-section--white">
        <div className="rx-wrap">
          <div className="rx-cta-panel">
            <p className="rx-section-label">Siguiente paso</p>
            <h2 className="rx-display rx-heading-xl">
              Daniel, lo difícil ya está hecho.
              <br />
              Falta que se vea como se merece.
            </h2>
            <p className="rx-text rx-text--center mt-3" style={{ color: "rgba(248,250,252,0.72)" }}>
              Me confirmas el primer pago y arrancamos esta misma semana.
            </p>
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="rx-btn-white">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="rx-footer">Propuesta confidencial · Fluxa Systems · RIFEX · rifex.app</footer>

      <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="rx-floating-wa" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
