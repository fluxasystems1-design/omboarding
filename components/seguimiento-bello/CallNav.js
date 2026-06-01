"use client";

import { useEffect, useState } from "react";
import styles from "./seguimiento-bello.module.css";
import { NAV_SECTIONS } from "./call-config";

export function CallNav() {
  const [activeId, setActiveId] = useState("resumen");

  useEffect(() => {
    const sectionEls = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sectionEls.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.callNav} aria-label="Navegación del reporte">
      <div className={styles.callNavInner}>
        {NAV_SECTIONS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.callNavChip} ${activeId === item.id ? styles.callNavChipActive : ""}`}
            aria-current={activeId === item.id ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
