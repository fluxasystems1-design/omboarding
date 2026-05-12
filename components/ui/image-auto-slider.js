/**
 * Carrusel infinito horizontal (máscara + animación CSS).
 * Pensado para rutas en /public (ej. /imagenes/...).
 *
 * Nota: este repo es JS + Tailwind (sin shadcn/TS). Export `Component` por compatibilidad con el snippet original.
 */

const DEFAULT_PRODUCTS = [
  { src: "/imagenes/creatina.png", alt: "Creatina Funciona+" },
  { src: "/imagenes/glicinatodemagensio.png", alt: "Glicinato de magnesio Funciona+" },
  { src: "/imagenes/omega3.png", alt: "Omega 3 Funciona+" },
];

const sliderCss = `
@keyframes product-slider-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.product-slider-root .product-slider-track {
  animation: product-slider-scroll 22s linear infinite;
  width: max-content;
}
.product-slider-root .product-slider-mask {
  mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
}
.product-slider-root .product-slider-item {
  transition: transform 0.3s ease, filter 0.3s ease;
}
@media (hover: hover) and (pointer: fine) {
  .product-slider-root .product-slider-item:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
}
`;

/**
 * @param {{ images?: { src: string; alt: string }[]; className?: string }} [props]
 */
export function ProductImageSlider({ images = DEFAULT_PRODUCTS, className = "" }) {
  const list = images.length ? images : DEFAULT_PRODUCTS;
  const duplicated = [...list, ...list];

  return (
    <div className={`product-slider-root relative w-full overflow-hidden bg-[#0F0F1E] ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: sliderCss }} />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F0F1E] via-transparent to-[#0F0F1E]" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-8 sm:py-10">
        <div className="product-slider-mask w-full overflow-hidden">
          <div className="product-slider-track flex gap-5 sm:gap-6 md:gap-8">
            {duplicated.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="product-slider-item h-40 w-40 shrink-0 overflow-hidden rounded-xl border border-[#A855F7]/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-64 lg:w-64"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={320}
                  height={320}
                  loading="lazy"
                  className="h-full w-full bg-[#1A1A2E] object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-[#0F0F1E] to-transparent" aria-hidden />
    </div>
  );
}

/** Alias del snippet original */
export const Component = ProductImageSlider;
