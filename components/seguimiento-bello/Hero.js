import styles from "./seguimiento-bello.module.css";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden />
      <Reveal className={styles.heroInner}>
        <p className="alianza-eyebrow text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]">
          Fluxa Method · Reporte confidencial
        </p>
        <span
          className={`alianza-combo-badge mt-5 inline-flex rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${styles.badgePulse}`}
        >
          Fase 1 en progreso
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Seguimiento Mes 1 —</span>
          <span className="alianza-hero-accent alianza-hero-glow mt-1 block sm:mt-2">FuncionA Plus</span>
        </h1>
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Reporte de avance · Junio 2025
        </p>
        <p className="mt-3 text-base text-zinc-400">Dr. Leonardo Bello</p>
      </Reveal>
    </header>
  );
}
