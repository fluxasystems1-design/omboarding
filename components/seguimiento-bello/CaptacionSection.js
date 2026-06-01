import styles from "./seguimiento-bello.module.css";
import { BelloSection } from "./BelloSection";
import { LandingCards } from "./LandingCards";

export function CaptacionSection() {
  return (
    <BelloSection
      id="captacion"
      sectionNum="01"
      title="Captación — Paid Ads"
      statusLabel="✅ Completado"
      statusClassName={styles.statusDone}
      delay={100}
    >
      <p className={styles.bodyText}>
        Se diseñaron y desarrollaron 4 landing pages de captación optimizadas para conversión.
      </p>
      <p className={styles.subText}>
        Cada landing tiene estructura persuasiva, diseño mobile-first y está lista para conectar con campañas de
        Meta Ads.
      </p>
      <LandingCards />
    </BelloSection>
  );
}
