const METRICS = [
  { num: "800+", label: "Alumnas activas" },
  { num: "150+", label: "Clases grabadas" },
  { num: "4.9★", label: "Valoración media" },
  { num: "12", label: "Países conectadas" },
];

export default function SocialProof() {
  return (
    <section className="anak-social">
      <div className="anak-container">
        <div className="anak-social__grid">
          {METRICS.map((item) => (
            <div key={item.label} className="anak-social__item">
              <p className="anak-social__num anak-display">{item.num}</p>
              <p className="anak-social__label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
