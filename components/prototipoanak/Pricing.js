import VideoLibrary from "./VideoLibrary";

const PLANS = [
  {
    name: "Plan Mensual",
    price: "$32",
    period: "USD / mes",
    featured: false,
    features: [
      "Acceso a toda la biblioteca",
      "2 clases en vivo al mes",
      "Comunidad privada",
      "Cancela cuando quieras",
    ],
  },
  {
    name: "Plan Trimestral",
    price: "$76",
    period: "USD / 3 meses",
    featured: true,
    features: [
      "Todo lo del plan mensual",
      "4 clases en vivo al mes",
      "Guía de inicio personalizada",
      "Ahorro del 21%",
    ],
  },
  {
    name: "Plan Semestral",
    price: "$144",
    period: "USD / 6 meses",
    featured: false,
    features: [
      "Acceso ilimitado 6 meses",
      "Clases en vivo semanales",
      "Masterclass exclusiva trimestral",
      "Ahorro del 25%",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="anak-pricing" id="membresia">
      <div className="anak-container">
        <div className="anak-pricing__head">
          <p className="anak-eyebrow">Membresía</p>
          <h2 className="anak-editorial__title anak-display">Elige tu ritmo</h2>
        </div>
        <div className="anak-pricing__scroll">
          <div className="anak-pricing__grid">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`anak-plan ${plan.featured ? "anak-plan--featured" : ""}`}
              >
                {plan.featured ? <span className="anak-plan__badge">Más popular</span> : null}
                <h3 className="anak-plan__name anak-display">{plan.name}</h3>
                <p className="anak-plan__price anak-display">{plan.price}</p>
                <p className="anak-plan__period">{plan.period}</p>
                <ul className="anak-plan__features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#inicio" className="anak-plan__btn">
                  Empezar ahora
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      <VideoLibrary />
    </section>
  );
}
