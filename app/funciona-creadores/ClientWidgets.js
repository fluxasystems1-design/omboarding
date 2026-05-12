"use client";

import { useEffect, useRef, useState } from "react";

const WA_CTA_URL = "https://wa.me/message/SEVUH3LFWHLUE1";

export function GradientCtaPulse({ children, className = "" }) {
  return (
    <span className={`inline-block ${className}`}>
      <a
        href={WA_CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-pulse-glow inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#A855F7] to-[#FF0080] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] transition duration-200 hover:scale-105 hover:brightness-110 active:scale-[0.98]"
      >
        {children}
      </a>
    </span>
  );
}

export function ScrollReveal({ children, className = "", delayMs = 0 }) {
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
      style={{ transitionDelay: shown ? `${delayMs}ms` : "0ms" }}
      className={`reveal-scale transition duration-700 ease-out ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

export function FloatFrame({ children, className = "" }) {
  return <div className={`animate-floaty ${className}`}>{children}</div>;
}
