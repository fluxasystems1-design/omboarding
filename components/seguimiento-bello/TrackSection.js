import styles from "./seguimiento-bello.module.css";
import { Reveal } from "./Reveal";

const STATUS_CLASS = {
  process: styles.statusProcess,
  done: styles.statusDone,
  almost: styles.statusAlmost,
};

export function TrackSection({
  title,
  statusLabel,
  statusType = "process",
  pulse = false,
  description,
  detail,
  alert,
  children,
  delay = 0,
}) {
  const statusClass = STATUS_CLASS[statusType] ?? styles.statusProcess;

  return (
    <section className={styles.section}>
      <Reveal delay={delay}>
        <article className={`propuesta-card alianza-card-hover p-5 sm:p-6 ${styles.sectionCard}`}>
          <div className={styles.statusRow}>
            <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">{title}</h2>
            <span className={`${styles.status} ${statusClass} ${pulse ? styles.badgePulse : ""}`}>
              {statusLabel}
            </span>
          </div>
          {description ? <p className={styles.bodyText}>{description}</p> : null}
          {detail ? <p className={styles.subText}>{detail}</p> : null}
          {children}
          {alert ? (
            <p className={styles.alert} role="status">
              {alert}
            </p>
          ) : null}
        </article>
      </Reveal>
    </section>
  );
}
