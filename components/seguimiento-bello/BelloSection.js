import styles from "./seguimiento-bello.module.css";
import { Reveal } from "./Reveal";

export function BelloSection({
  id,
  sectionNum,
  title,
  statusLabel,
  statusClassName = "",
  pulse = false,
  delay = 0,
  children,
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <Reveal delay={delay}>
        <article className={`propuesta-card alianza-card-hover p-5 sm:p-6 ${styles.sectionCard}`}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleWrap}>
              <span className={styles.sectionNum} aria-hidden>
                {sectionNum}
              </span>
              <h2 id={`${id}-heading`} className={styles.sectionTitle}>
                {title}
              </h2>
            </div>
            <div className={styles.sectionHeaderActions}>
              {statusLabel ? (
                <span
                  className={`${styles.status} ${statusClassName} ${pulse ? styles.badgePulse : ""}`}
                >
                  {statusLabel}
                </span>
              ) : null}
            </div>
          </div>
          <div id={`${id}-body`}>{children}</div>
        </article>
      </Reveal>
    </section>
  );
}
