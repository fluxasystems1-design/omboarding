import styles from "./seguimiento-bello.module.css";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Reveal>
        <span className={styles.footerLogo} aria-hidden>
          FM
        </span>
        <p className={`${styles.footerText} alianza-eyebrow !text-zinc-500`}>
          Fluxa Method · Reporte confidencial · Mes 1 · 2025
        </p>
      </Reveal>
    </footer>
  );
}
