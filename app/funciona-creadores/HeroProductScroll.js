"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

/**
 * Bloque hero lateral: título + imagen con parallax 3D al scroll.
 * Colores alineados con landing Funciona+.
 */
export function HeroProductScroll() {
  return (
    <ContainerScroll
      innerClassName="min-h-0 !p-0"
      titleComponent={
        <div className="mb-3 md:mb-4">
          <p className="text-xs font-semibold tracking-wide text-[#00D9FF] md:text-sm">Creadores, no anuncios</p>
          <h2 className="text-lg font-extrabold leading-tight text-white md:text-2xl">
            Así es quien está detrás de Funciona+
            <br />
            <span className="bg-gradient-to-r from-[#A855F7] via-[#FF0080] to-[#0066FF] bg-clip-text text-transparent">
              y el kit que te enviamos para contarlo con la verdad
            </span>
          </h2>
        </div>
      }
    >
      {/* Fondo “escena”: evita que las bandas de letterboxing se lean como huecos rotos */}
      <div className="relative flex h-full min-h-[10rem] w-full items-center justify-center overflow-hidden rounded-2xl sm:min-h-[12rem] md:min-h-[14rem]">
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse 95% 70% at 50% 62%, rgba(55, 45, 32, 0.95) 0%, rgba(22, 18, 28, 0.98) 42%, #0a090d 100%), radial-gradient(ellipse 100% 55% at 50% 0%, rgba(168, 85, 247, 0.14) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-[8%] bottom-0 h-1/3 rounded-[100%] bg-[#A855F7]/[0.07] blur-3xl" aria-hidden />
        <div className="relative z-[1] flex h-full w-full items-center justify-center px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
          <Image
            src="/imagenes/productos.png"
            alt="Kit de suplementos Funciona+"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 520px"
            className="h-auto max-h-[98%] w-auto max-w-[min(100%,520px)] origin-center scale-[1.03] object-contain object-center drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
            draggable={false}
            priority
          />
        </div>
      </div>
    </ContainerScroll>
  );
}
