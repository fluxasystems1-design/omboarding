"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * Scroll-driven 3D tilt card (Aceternity-style).
 * JavaScript + Tailwind — sin TypeScript (proyecto actual).
 */
export function ContainerScroll({ titleComponent, children, className = "", innerClassName = "" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 20%"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.72, 0.92] : [1.04, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[26rem] items-center justify-center p-1 sm:h-[32rem] md:h-[38rem] md:p-10 ${className}`}
    >
      <div
        className="relative w-full py-6 md:py-12"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} innerClassName={innerClassName}>
          {children}
        </Card>
      </div>
    </div>
  );
}

export function Header({ translate, titleComponent }) {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto w-full max-w-5xl px-2 text-center">
      {titleComponent}
    </motion.div>
  );
}

export function Card({ rotate, scale, children, innerClassName = "" }) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
        boxShadow:
          "0 0 24px rgba(168, 85, 247, 0.35), 0 18px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
      className="mx-auto -mt-8 h-[14rem] w-full max-w-5xl rounded-[22px] border-2 border-[#A855F7]/50 bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1E] p-1.5 shadow-2xl sm:-mt-10 sm:h-[17rem] md:-mt-12 md:h-[22rem] md:p-3"
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-2xl bg-[#0F0F1E] ring-1 ring-white/10 md:rounded-2xl md:p-2 ${innerClassName}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
