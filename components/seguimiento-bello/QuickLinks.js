"use client";

import styles from "./seguimiento-bello.module.css";
import { CopyButton } from "./CopyButton";
import { QUICK_LINKS, STORE_PASSWORD } from "./call-config";

export function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      <p className={styles.quickLinksLabel}>Enlaces rápidos</p>
      <div className={styles.quickLinksRow}>
        {QUICK_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLinkChip}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
      <div className={styles.quickLinksPass}>
        <span className={styles.quickLinksPassText}>
          Clave tienda privada: <strong>{STORE_PASSWORD}</strong>
        </span>
        <CopyButton text={STORE_PASSWORD} label="Copiar clave" />
      </div>
    </div>
  );
}
