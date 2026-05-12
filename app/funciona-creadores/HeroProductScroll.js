"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

/**
 * Bloque hero lateral: título + imagen con parallax 3D al scroll.
 * Colores alineados con landing FuncionA+ / Funciona+.
 */
export function HeroProductScroll() {
  return (
    <ContainerScroll
      innerClassName="min-h-0"
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
      <div className="relative h-full min-h-[10rem] w-full sm:min-h-[12rem] md:min-h-[16rem]">
        <Image
          src="/imagenes/15.png"
          alt="Dr. Leonardo Bello con suplementos Funciona+"
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover object-top"
          draggable={false}
          priority
        />
      </div>
    </ContainerScroll>
  );
}
