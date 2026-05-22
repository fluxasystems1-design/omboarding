"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ value, prefix = "$", suffix = "", className = "", duration = 1100 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      setDone(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setDone(true);
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - progress) ** 3;
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, done]);

  return (
    <span ref={ref} className={`count-up ${className}`.trim()}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
