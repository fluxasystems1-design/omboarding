export default function Footer() {
  return (
    <footer className="anak-footer">
      <div className="anak-container anak-footer__grid">
        <div>
          <p className="anak-footer__logo anak-display">ANAK</p>
          <p className="anak-footer__tagline">Barre by Anak · Movimiento consciente</p>
        </div>
        <div>
          <p className="anak-footer__col-title">Programa</p>
          <ul className="anak-footer__links">
            <li>
              <a href="#clases">Clases</a>
            </li>
            <li>
              <a href="#membresia">Membresía</a>
            </li>
            <li>
              <a href="#sobre-mi">El método</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="anak-footer__col-title">Comunidad</p>
          <ul className="anak-footer__links">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#membresia">Únete</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="anak-container anak-footer__bottom">
        © {new Date().getFullYear()} ANAK · Barre by Anak. Todos los derechos reservados.
      </div>
    </footer>
  );
}
