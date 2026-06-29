import Image from "next/image";
import { ANAK_IMAGES } from "./images";

const TESTIMONIOS = [
  {
    quote: "Nunca pensé que podría sentirme tan fuerte sin ir al gym. ANAK cambió mi relación con el ejercicio.",
    handle: "@maria.barre",
    meta: "alumna hace 8 meses",
    image: ANAK_IMAGES.testimonial1,
  },
  {
    quote: "Las clases en calma son mi ritual del domingo. Es el único espacio donde realmente desconecto.",
    handle: "@lucia.moves",
    meta: "alumna hace 5 meses",
    image: ANAK_IMAGES.testimonial2,
  },
  {
    quote: "La comunidad lo es todo. Entrenar en vivo con otras mujeres me mantiene constante y motivada.",
    handle: "@sofia.wellness",
    meta: "alumna hace 1 año",
    image: ANAK_IMAGES.testimonial3,
  },
];

export default function Testimonios() {
  return (
    <section className="anak-testimonios">
      <div className="anak-testimonios__head">
        <div className="anak-container">
          <p className="anak-eyebrow">Comunidad</p>
          <h2 className="anak-editorial__title anak-display">Lo que dicen las alumnas</h2>
        </div>
      </div>
      <div className="anak-container" style={{ padding: 0, width: "100%", maxWidth: "100%" }}>
        <div className="anak-testimonios__grid">
          {TESTIMONIOS.map((t) => (
            <article key={t.handle} className="anak-testimonio">
              <p className="anak-testimonio__stars" aria-label="5 estrellas">
                ★★★★★
              </p>
              <blockquote className="anak-testimonio__quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="anak-testimonio__author">
                <div className="anak-testimonio__avatar">
                  <Image src={t.image} alt="" fill sizes="40px" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <p className="anak-testimonio__handle">{t.handle}</p>
                  <p className="anak-testimonio__meta">{t.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
