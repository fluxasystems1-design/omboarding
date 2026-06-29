import Image from "next/image";
import { ANAK_IMAGES } from "./images";

const STEPS = [
  {
    num: "01",
    title: "Elige tu plan",
    desc: "Mensual, trimestral o semestral — tú decides el ritmo que encaja con tu vida.",
  },
  {
    num: "02",
    title: "Accede a todo",
    desc: "Biblioteca completa de clases on-demand y calendario de sesiones en vivo.",
  },
  {
    num: "03",
    title: "Únete en vivo",
    desc: "Conecta con la comunidad ANAK y entrena acompañada, aunque estés en casa.",
  },
  {
    num: "04",
    title: "Siente el cambio",
    desc: "Postura, fuerza y calma que se notan en tu cuerpo y en tu día a día.",
  },
];

export default function MetodoSplit() {
  return (
    <section className="anak-metodo" id="sobre-mi">
      <div className="anak-metodo__visual">
        <Image
          src={ANAK_IMAGES.metodo}
          alt="Anak enseñando barre"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="anak-metodo__content">
        <p className="anak-eyebrow">El método</p>
        <h2 className="anak-metodo__title anak-display">Así funciona tu membresía</h2>
        <div style={{ marginTop: "1.5rem" }}>
          {STEPS.map((step) => (
            <div key={step.num} className="anak-metodo__step">
              <span className="anak-metodo__step-num anak-display">{step.num}</span>
              <div>
                <p className="anak-metodo__step-title">{step.title}</p>
                <p className="anak-metodo__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
