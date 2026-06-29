const CLASES = [
  {
    num: "01",
    icon: "◇",
    title: "Barre clásico",
    desc: "Fundamentos de postura, alineación y control. Ideal para empezar o volver con consciencia.",
  },
  {
    num: "02",
    icon: "◆",
    title: "Barre + fuerza",
    desc: "Series más intensas que desafían estabilidad y resistencia sin impacto en tus articulaciones.",
  },
  {
    num: "03",
    icon: "○",
    title: "Barre en calma",
    desc: "Movimiento lento, respiración y elongación profunda para cerrar la semana con presencia.",
  },
];

export default function ClasesGrid() {
  return (
    <section className="anak-clases" id="clases">
      <div className="anak-clases__head">
        <div className="anak-container">
          <p className="anak-eyebrow">Programa</p>
          <h2 className="anak-editorial__title anak-display">Tres formas de moverte</h2>
        </div>
      </div>
      <div className="anak-clases__grid">
        {CLASES.map((clase) => (
          <article key={clase.num} className="anak-clase-card">
            <span className="anak-clase-card__num anak-display" aria-hidden>
              {clase.num}
            </span>
            <div className="anak-clase-card__icon" aria-hidden>
              {clase.icon}
            </div>
            <h3 className="anak-clase-card__title">{clase.title}</h3>
            <p className="anak-clase-card__desc">{clase.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
