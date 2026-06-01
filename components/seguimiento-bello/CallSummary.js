import Link from "next/link";
import styles from "./seguimiento-bello.module.css";
import { SUMMARY_ROWS } from "./call-config";
import { QuickLinks } from "./QuickLinks";
import { Reveal } from "./Reveal";

export function CallSummary() {
  return (
    <section id="resumen" className={`${styles.section} ${styles.summarySection}`}>
      <Reveal delay={40}>
        <article className={`propuesta-card p-5 sm:p-6 ${styles.summaryCard}`}>
          <div className={styles.summaryHeader}>
            <h2 className={styles.summaryTitle}>Estado Mes 1 — mapa rápido</h2>
            <Link href="#decisiones" className={styles.summaryJump}>
              Ir a decisiones ↓
            </Link>
          </div>
          <p className={styles.summaryLead}>
            Vista ejecutiva para la llamada: qué está listo, qué falta del doctor y dónde profundizar.
          </p>

          <div className={styles.summaryTable} role="table" aria-label="Resumen por área">
            {SUMMARY_ROWS.map((row) => (
              <Link
                key={row.area}
                href={row.href}
                className={`${styles.summaryRow} ${styles[`summaryRow_${row.tone}`]}`}
                role="row"
              >
                <span className={styles.summaryStatus} aria-hidden>
                  {row.status}
                </span>
                <span className={styles.summaryArea}>{row.area}</span>
                <span className={styles.summaryLine}>{row.line}</span>
                <span className={styles.summaryArrow} aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>

          <QuickLinks />
        </article>
      </Reveal>
    </section>
  );
}
