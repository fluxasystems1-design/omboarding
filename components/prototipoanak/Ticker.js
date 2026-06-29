const TEXT =
  "Movimiento consciente · Constancia · Bienestar integral · Fuerza femenina · Conexión mente–cuerpo · Hábitos sostenibles · ";

export default function Ticker() {
  const line = TEXT.repeat(2);

  return (
    <div className="anak-ticker" aria-hidden>
      <div className="anak-ticker__track">
        <span className="anak-ticker__text">{line}</span>
        <span className="anak-ticker__text">{line}</span>
      </div>
    </div>
  );
}
