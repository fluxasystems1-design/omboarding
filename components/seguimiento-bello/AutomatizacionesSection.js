import styles from "./seguimiento-bello.module.css";
import { BelloSection } from "./BelloSection";

const PENDING_FROM_CLIENT = [
  {
    title: "Programación semanal del negocio",
    detail: "programación de la semana",
  },
];

export function AutomatizacionesSection() {
  return (
    <BelloSection
      id="automatizaciones"
      sectionNum="04"
      title="Automatizaciones"
      statusLabel="🟡 En espera del cliente"
      statusClassName={styles.statusWaiting}
      pulse
      delay={180}
    >
      <p className={styles.autoHero}>
        Los ecosistemas de automatización están{" "}
        <span className={styles.autoHeroAccent}>construidos y listos para activarse.</span>
      </p>
      <p className={styles.autoSub}>
        Todo el sistema está montado. Solo necesitamos la información operativa del negocio para encender los
        flujos.
      </p>

      <div className={styles.doctorActionPanel} aria-labelledby="auto-panel-heading">
        <p id="auto-panel-heading" className={styles.autoPanelTitle}>
          ¿Qué necesitamos para activar?
        </p>
        <p className={styles.autoPanelLead}>⚠️ Estamos esperando del Dr. Bello:</p>

        <ul className={styles.autoPendingList}>
          {PENDING_FROM_CLIENT.map((item) => (
            <li key={item.title} className={styles.autoPendingItem}>
              <span className={styles.autoLockIcon} aria-hidden>
                🔒
              </span>
              <div>
                <p className={styles.autoPendingTitle}>{item.title}</p>
                <p className={styles.autoPendingDetail}>→ {item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.autoFootnote}>
        En cuanto recibamos esta información, los ecosistemas se activan de inmediato. El sistema ya está listo.
      </p>
    </BelloSection>
  );
}
