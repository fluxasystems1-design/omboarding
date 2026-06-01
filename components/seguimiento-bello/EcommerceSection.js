import styles from "./seguimiento-bello.module.css";
import { BelloSection } from "./BelloSection";
import { CopyButton } from "./CopyButton";
import { STORE_PASSWORD, STORE_URL } from "./call-config";

const BUILT_ITEMS = [
  {
    title: "Homepage estructurada",
    detail:
      "Diseño completo con hero, propuesta de valor, productos destacados y secciones de confianza.",
  },
  {
    title: "Página de cada producto optimizada para conversión",
    detail:
      "Cada producto (Creatina, Glicinato de Magnesio, Omega 3) tiene su propia página con estructura persuasiva orientada a la compra.",
  },
  {
    title: "Catálogo de productos configurado",
    detail:
      "Los 3 productos principales están cargados con precios en pesos colombianos, descripciones y variantes.",
  },
  {
    title: "Filtro de búsqueda activo",
    detail: "El cliente puede encontrar productos fácilmente desde cualquier punto de la tienda.",
  },
  {
    title: "Configuración de carrito",
    detail: "Carrito funcional con resumen de compra, cantidades y flujo hacia checkout.",
  },
];

const LAUNCH_PENDING = [
  {
    title: "Testimonios de creadores de contenido",
    detail:
      "Una vez recibido el contenido UGC, se integra como prueba social en las páginas de producto.",
  },
  {
    title: "Creativos y contenido visual",
    detail:
      "Una vez los creadores realicen la entrega de su contenido UGC, se subirá e integrará en la tienda: imágenes lifestyle, videos, reseñas visuales y testimonios en las páginas de producto y homepage.",
  },
  {
    title: "Configuración de pasarela de pago",
    detail:
      "Definir y conectar el método de pago oficial (Bold / Wompi u otro) para procesar transacciones reales.",
  },
  {
    title: "Conexión del dominio oficial",
    detail: "Enlazar el dominio definitivo de FuncionA+ para publicar la tienda al público.",
  },
];

export function EcommerceSection() {
  return (
    <BelloSection
      id="ecommerce"
      sectionNum="02"
      title="Ecommerce — Tienda FuncionA+"
      statusLabel="🟡 Casi lista"
      statusClassName={styles.statusWaiting}
      pulse
      delay={120}
    >
      <p className={styles.ecomIntro}>
        La tienda está construida, estructurada y optimizada para la venta. Lista para publicarse en cuanto se
        conecte el dominio oficial y se configure la pasarela de pago.
      </p>

      <div className={styles.ecomStoreBlock}>
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.ecomStoreChip}>
          Ver tienda (acceso privado) ↗
        </a>
        <div className={styles.ecomStoreNoteRow}>
          <p className={styles.ecomStoreNote}>
            Contraseña de acceso: <strong className={styles.ecomStorePass}>{STORE_PASSWORD}</strong> — Disponible
            solo hasta publicación oficial
          </p>
          <CopyButton text={STORE_PASSWORD} label="Copiar clave" />
        </div>
      </div>

      <ul className={styles.ecomDoneTimeline} aria-label="Lo construido en la tienda">
        {BUILT_ITEMS.map((item) => (
          <li key={item.title} className={styles.ecomDoneItem}>
            <span className={styles.ecomCheck} aria-hidden>
              ✅
            </span>
            <div>
              <p className={styles.ecomDoneTitle}>{item.title}</p>
              <p className={styles.ecomDoneDetail}>→ {item.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.launchPendingPanel} aria-labelledby="ecom-pending-heading">
        <p id="ecom-pending-heading" className={styles.ecomPendingLead}>
          ⚠️ Para el lanzamiento oficial necesitamos:
        </p>
        <ul className={styles.ecomPendingList}>
          {LAUNCH_PENDING.map((item) => (
            <li key={item.title} className={styles.ecomPendingItem}>
              <span className={styles.ecomLock} aria-hidden>
                🔒
              </span>
              <div>
                <p className={styles.ecomPendingTitle}>{item.title}</p>
                <p className={styles.ecomPendingDetail}>→ {item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.ecomFootnote}>
        La tienda ya está lista por dentro. Solo esperamos los últimos elementos para el lanzamiento oficial.
      </p>
    </BelloSection>
  );
}
