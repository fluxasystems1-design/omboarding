"use client";

import { useEffect, useState } from "react";

const WA_BASE = "https://wa.me/573116425337?text=";
const WA_TEXT =
  "Hola Partnersflux. Revisé el plan de desarrollo web 2027 de GAL'S Studio y quiero comenzar. Total $1.100.000.";

const NAV = [
  { id: "portada", label: "El plan" },
  { id: "fase1", label: "Fase 1" },
  { id: "fase2", label: "Fase 2" },
  { id: "orden", label: "Camino" },
  { id: "inversion", label: "Inversión" },
  { id: "cierre", label: "Comenzar" },
];

const FASE1 = [
  {
    title: "Actualizar tu HOME",
    text: "Nuevo mensaje de marca, Método GALS, Reto Core, testimonios y CTAs claros para reservar o cotizar.",
  },
  {
    title: "Actualizar paquetes y membresías",
    text: "Nueva estructura comercial, plan destacado, promoción vigente y compra ligada a las reservas.",
  },
  {
    title: "Actualizar clases y reservas",
    text: "Catálogo nuevo con coaches, cupos, descuento automático de clases, confirmaciones y reglas de cancelación.",
  },
  {
    title: "Actualizar experiencias",
    text: "Formatos de 60 y 90 minutos, con solicitud de experiencia privada — separado del alquiler del espacio.",
  },
  {
    title: "Actualizar Instagram y navegación",
    text: "Bio, link in bio, destacadas, fijadas y CTAs del sitio apuntando a lo que sí está vigente.",
  },
];

const FASE2 = [
  { priority: "Alta", title: "Landing GALS Space", text: "Cumpleaños, lanzamientos, eventos y talleres." },
  { priority: "Alta", title: "Formulario de cotización", text: "Fecha, asistentes, presupuesto, tipo de evento y contacto." },
  { priority: "Alta", title: "Embudo de eventos privados", text: "Solicitud, cotización, seguimiento, anticipo y reserva." },
  { priority: "Alta", title: "Celebra tu cumpleaños", text: "Venta de experiencias privadas de 60 y 90 minutos." },
  { priority: "Media", title: "Lanza tu marca", text: "Captar marcas para activaciones y lanzamientos." },
  { priority: "Media", title: "Alquiler GALS Space", text: "Bloques disponibles, solicitudes y pagos. Distinto de la experiencia guiada." },
  { priority: "Media", title: "Landing GALS Academy", text: "Workshops y bootcamps de Natalia y Partnersflux." },
  { priority: "Media", title: "Venta de cada workshop", text: "Temario, profesores, fechas, precio, registro y pago." },
  { priority: "Alta", title: "Core de Sirena Digital", text: "Captar interesadas y convertir a la compra del programa. Según lanzamiento." },
  { priority: "Media", title: "Catálogo GALS Digital", text: "Core de Sirena y los programas que sigan." },
  { priority: "Campaña", title: "Experiencias temáticas", text: "Entradas a Sessions o eventos con fecha confirmada." },
];

const FLOWS = [
  { title: "Eventos privados", text: "Formulario → CRM → cotización → seguimiento → anticipo → confirmación." },
  { title: "Alumnas del estudio", text: "Primera clase → membresía → seguimiento → renovación." },
  { title: "Academy", text: "Interés → invitación al workshop → compra → bienvenida." },
  { title: "Digital", text: "Lista prioritaria → lanzamiento → pago → acceso al programa." },
  { title: "Reportes", text: "Ventas, reservas, cotizaciones y renovaciones por línea." },
];

const ORDER = [
  {
    num: "01",
    title: "Alineamos tu base actual",
    text: "Tu HOME, membresías, clases, reservas, experiencias e Instagram quedan listos para vender el modelo nuevo.",
  },
  {
    num: "02",
    title: "Abrimos GALS Space",
    text: "Landing principal, cotización, CRM y automatizaciones para eventos privados.",
  },
  {
    num: "03",
    title: "Landings que cierran",
    text: "Cumpleaños y lanzamientos de marca, con recorrido propio para cada oferta.",
  },
  {
    num: "04",
    title: "Escalamos Academy y Digital",
    text: "Workshops, Core de Sirena, catálogo de programas y landings de campaña.",
  },
];

const INVEST = [
  { label: "Ajustes a lo que ya tienes", value: "$300.000" },
  { label: "Nuevos desarrollos (valor lista)", value: "$1.500.000", strike: true },
  { label: "Descuento Partnersflux", value: "−$700.000", discount: true },
  { label: "Nuevos desarrollos con descuento", value: "$800.000" },
];

function waUrl() {
  return WA_BASE + encodeURIComponent(WA_TEXT);
}

export default function PropuestaGalsPlanPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll(".gp-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) node.classList.add("is-in");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="gp-page">
      <header className="gp-nav">
        <a className="gp-btn gp-btn-black gp-btn-nav" href={waUrl()} target="_blank" rel="noreferrer">
          Comenzar ahora
        </a>
        <button
          type="button"
          className={`gp-burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`gp-menu ${menuOpen ? "is-open" : ""}`} aria-label="Secciones">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="portada" className="gp-hero">
          <p className="gp-kicker">Partnersflux × GAL&apos;S Studio</p>
          <h1>Plan de desarrollo web 2027</h1>
          <p className="gp-lead">
            Natalia, este plan lleva tu estudio de lo que ya funciona a la visión completa de la marca: web que convierte,
            GALS Space, Academy y digital — en un solo sistema.
          </p>
          <div className="gp-stats">
            <article>
              <strong>Fase 1</strong>
              <span>ajustar lo actual</span>
            </article>
            <article>
              <strong>Fase 2</strong>
              <span>11 componentes nuevos</span>
            </article>
            <article>
              <strong>$1.1M</strong>
              <span>inversión final</span>
            </article>
          </div>
          <a className="gp-btn gp-btn-dark" href="#fase1">
            Ver tu plan
          </a>
        </section>

        <section id="fase1" className="gp-section gp-reveal">
          <div className="gp-wrap">
            <header className="gp-head">
              <p className="gp-eyebrow">Fase 1 · Base actual</p>
              <h2>Modificamos lo que ya tienes para acercarlo a la visión futura de GAL&apos;S.</h2>
              <p className="gp-lead gp-lead--left">
                No creamos sitios nuevos aquí. Dejamos tu web, tus paquetes, tus reservas y tu navegación listos para
                vender el modelo nuevo.
              </p>
            </header>
            <div className="gp-grid">
              {FASE1.map((item) => (
                <article key={item.title} className="gp-card">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fase2" className="gp-section gp-section-soft gp-reveal">
          <div className="gp-wrap">
            <header className="gp-head">
              <p className="gp-eyebrow">Fase 2 · Nuevos desarrollos</p>
              <h2>Once piezas nuevas para abrir GALS Space, Academy y Digital.</h2>
              <p className="gp-lead gp-lead--left">
                Comparten plantilla, formularios y un mismo CRM. No son once sitios sueltos: es un ecosistema que crece
                contigo.
              </p>
            </header>
            <div className="gp-grid">
              {FASE2.map((item) => (
                <article key={item.title} className="gp-card">
                  <b className={`gp-pill gp-pill--${item.priority === "Alta" ? "high" : "mid"}`}>{item.priority}</b>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <header className="gp-head gp-head-space">
              <p className="gp-eyebrow">Automatizaciones</p>
              <h2>Flujos que trabajan mientras tú das clase.</h2>
            </header>
            <div className="gp-flows">
              {FLOWS.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="orden" className="gp-section gp-reveal">
          <div className="gp-wrap">
            <header className="gp-head">
              <p className="gp-eyebrow">Camino de ejecución</p>
              <h2>Avanzamos en orden, sin frenar lo que ya tiene fecha de lanzamiento.</h2>
            </header>
            <div className="gp-order">
              {ORDER.map((item) => (
                <article key={item.num}>
                  <span>{item.num}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="gp-note">
              Prioridad comercial: tu web y GALS Space primero. Si un lanzamiento tiene fecha, esa página no se detiene.
            </p>
          </div>
        </section>

        <section id="inversion" className="gp-section gp-section-soft gp-reveal">
          <div className="gp-wrap">
            <header className="gp-head">
              <p className="gp-eyebrow">Inversión</p>
              <h2>Todo el plan, con el descuento Partnersflux ya aplicado.</h2>
            </header>
            <div className="gp-invest">
              <ul>
                {INVEST.map((row) => (
                  <li key={row.label} className={row.discount ? "is-discount" : ""}>
                    <span>{row.label}</span>
                    <b className={row.strike ? "is-strike" : ""}>{row.value}</b>
                  </li>
                ))}
              </ul>
              <article className="gp-total">
                <span>Total</span>
                <p className="gp-total-was">
                  Antes <s>$1.800.000</s>
                </p>
                <strong>$1.100.000</strong>
                <p className="gp-total-save">Ahorras $700.000 con Partnersflux</p>
                <a className="gp-btn gp-btn-light" href={waUrl()} target="_blank" rel="noreferrer">
                  Confirmar por WhatsApp
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="cierre" className="gp-close gp-reveal">
          <p className="gp-kicker">Siguiente paso</p>
          <h2>Natalia, tu marca ya tiene dirección. Este plan la construye en orden.</h2>
          <a className="gp-btn gp-btn-light" href={waUrl()} target="_blank" rel="noreferrer">
            Escribir por WhatsApp
          </a>
        </section>
      </main>
    </div>
  );
}
