"use client";

import { useEffect, useRef, useState } from "react";

export function GradientCtaPulse({ children, className = "" }) {
  return (
    <span title="Formulario próximamente" className={`inline-block ${className}`}>
      <button
        type="button"
        onClick={(e) => e.preventDefault()}
        className="cta-pulse-glow w-full rounded-lg bg-gradient-to-r from-[#A855F7] to-[#FF0080] px-8 py-3.5 text-base font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-200 hover:scale-105 hover:brightness-110 active:scale-[0.98] sm:px-10 sm:text-lg sm:py-4"
      >
        {children}
      </button>
    </span>
  );
}

export function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-scale transition duration-700 ease-out ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

export function FloatFrame({ children, className = "" }) {
  return <div className={`animate-floaty ${className}`}>{children}</div>;
}
