"use client";

import { useState } from "react";
import styles from "./seguimiento-bello.module.css";

const LANDINGS = [
  {
    label: "Test de magnesio",
    href: "https://testfunciona.vercel.app/magnesio",
    description:
      "Descubre si la falta de este mineral esencial explica tu cansancio, calambres o mal sueño. Test 100% gratuito: al terminar, agenda tu valoración o recibe la recomendación del suplemento ideal en FuncionA+.",
  },
  {
    label: "Test de fatiga cerebral",
    href: "https://testfunciona.vercel.app/fatiga-cerebral",
    description:
      "¿Sientes que tu mente ya no rinde igual? Mide tu nivel de agotamiento cognitivo sin pagar nada. Tu resultado abre la puerta a una cita con el equipo o al protocolo de suplementos que tu cerebro necesita.",
  },
  {
    label: "Test de memoria (factores)",
    href: "https://testfunciona.vercel.app/alzheimer",
    description:
      "Evalúa los factores que están afectando tu memoria y agilidad mental. Experiencia gratuita con un plan de acción claro: consulta personalizada o stack FuncionA+ diseñado para proteger tu rendimiento.",
  },
  {
    label: "Test de migraña",
    href: "https://testfunciona.vercel.app/migrana",
    description:
      "No te limites a calmar el síntoma: identifica tu perfil de migraña hoy. Test sin costo que te orienta a agendar cita médica o elegir el suplemento indicado en la tienda para vivir con menos crisis.",
  },
];

export function LandingCards() {
  return (
    <div className={styles.landingGrid}>
      {LANDINGS.map((landing) => (
        <LandingCard key={landing.href} {...landing} />
      ))}
    </div>
  );
}

function LandingCard({ label, href, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.landingCardWrap}>
      <div className={styles.landingCard}>
        <span className={styles.landingFree}>Test gratuito</span>
        <p className={styles.landingLabel}>{label}</p>
        {expanded ? (
          <p className={styles.landingDesc}>{description}</p>
        ) : (
          <p className={styles.landingDescTeaser}>
            Evaluación gratuita · resultado personalizado · cita o compra en FuncionA+
          </p>
        )}
        <span className={styles.landingBadge}>Lista</span>
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.landingCta}>
          Hacer test gratis ↗
        </a>
      </div>
      <button
        type="button"
        className={styles.landingExpandBtn}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "Ocultar descripción" : "Ver descripción"}
      </button>
    </article>
  );
}
