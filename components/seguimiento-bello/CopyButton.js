"use client";

import { useState } from "react";
import styles from "./seguimiento-bello.module.css";

export function CopyButton({ text, label = "Copiar" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={styles.copyBtn} aria-label={`${label}: ${text}`}>
      {copied ? "Copiado ✓" : label}
    </button>
  );
}
