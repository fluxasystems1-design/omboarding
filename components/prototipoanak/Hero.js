import Image from "next/image";
import DecorLayer from "./DecorLayer";
import { ANAK_IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="anak-hero-wrap" id="inicio">
      <DecorLayer />
      <section className="anak-hero">
      <div className="anak-hero__copy">
        <p className="anak-eyebrow">Barre · Strength · Balance</p>
        <h1 className="anak-hero__title">
          Mueve tu cuerpo. Conecta con <em>contigo</em>.
        </h1>
        <p className="anak-hero__lead">No se trata de entrenar más. Se trata de sentirte mejor.</p>
        <div className="anak-hero__actions">
          <a href="#membresia" className="anak-btn-dark">
            Empieza ahora
          </a>
          <a href="#clases" className="anak-btn-ghost">
            Ver clase gratis
          </a>
        </div>
      </div>

      <div className="anak-hero__visual">
        <div className="anak-hero__image-wrap">
          <Image
            src={ANAK_IMAGES.hero}
            alt="Anak — instructora de barre"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="anak-hero__pill">800+ Alumnas · 150+ Clases · 4.9★</div>
      </div>
      </section>
    </section>
  );
}
