const ITEMS = [
  {
    title: "Postura y elongación",
    desc: "Trabajo consciente de alineación que alarga, fortalece y mejora cómo te sientes en tu cuerpo.",
  },
  {
    title: "Fuerza sin impacto",
    desc: "Tonificación profunda sin saltos ni presión en articulaciones — ideal para entrenar con inteligencia.",
  },
  {
    title: "Hábito sostenible",
    desc: "Clases de 25–45 min que encajan en tu rutina real, no en una versión perfecta de ti.",
  },
  {
    title: "Conexión mente–cuerpo",
    desc: "Respiración, presencia y movimiento fluido que baja el estrés y sube tu energía.",
  },
  {
    title: "Comunidad",
    desc: "Un espacio femenino donde compartir progreso, motivación y celebrar cada pequeño avance.",
  },
  {
    title: "Progresión real",
    desc: "Programas estructurados para que avances con intención — de principiante a nivel intermedio.",
  },
];

export default function Beneficios() {
  return (
    <section className="anak-beneficios">
      <div className="anak-container">
        <h2 className="anak-beneficios__title anak-display">Por qué elegir ANAK</h2>
        <div className="anak-beneficios__grid">
          {ITEMS.map((item) => (
            <article key={item.title} className="anak-beneficio">
              <h3 className="anak-beneficio__title">{item.title}</h3>
              <p className="anak-beneficio__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
