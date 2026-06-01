import styles from "./seguimiento-bello.module.css";
import { BelloSection } from "./BelloSection";
import { BRIEF_URL, CREATORS_LANDING_URL } from "./call-config";

const DELIVERABLES = [
  { icon: "🎬", title: "1 Reel Orgánico", desc: "Storytelling, experiencia, rutina y lifestyle" },
  { icon: "📱", title: "1 Video UGC Ads", desc: "Hook + experiencia + sensación + CTA" },
  { icon: "📖", title: "3–5 Historias", desc: "Rutina, unboxing, experiencia y CTA" },
  { icon: "📸", title: "3–5 Fotos Lifestyle", desc: "Naturales, humanas, wellness premium" },
];

const KIT_ITEMS = [
  "Kit FuncionA+ completo (Creatina, Glicinato de Magnesio, Omega 3)",
  "Libros del Dr. Leonardo Bello",
  "Acceso a comunidad privada de embajadores",
  "Soporte directo del equipo durante todo el proceso",
];

export function UgcSection() {
  return (
    <BelloSection
      id="ugc"
      sectionNum="03"
      title="UGC — Creadores de Contenido"
      statusLabel="🟡 En proceso"
      statusClassName={styles.statusProcess}
      pulse
      delay={140}
    >
      <p className={styles.ugcIntro}>
        Durante el Mes 1 se construyó toda la infraestructura de selección y comunicación con creadores UGC para la
        marca FuncionA+.
      </p>

      <ul className={styles.ugcDoneList}>
        <li className={styles.ugcDoneItem}>
          <span className={styles.ugcCheck} aria-hidden>
            ✅
          </span>
          <div>
            <p className={styles.ugcDoneTitle}>Documento de Creadores elaborado</p>
            <p className={styles.ugcDoneDesc}>
              Define perfil, lineamientos, expectativas y criterios de selección para los creadores de la marca.
            </p>
          </div>
        </li>

        <li className={styles.ugcDoneItem}>
          <span className={styles.ugcCheck} aria-hidden>
            ✅
          </span>
          <div>
            <p className={styles.ugcDoneTitle}>Brief oficial enviado a creadores</p>
            <p className={styles.ugcDoneDesc}>
              Documento con instrucciones, entregables, lineamientos visuales y dirección estratégica de contenido.
            </p>
            <a href={BRIEF_URL} target="_blank" rel="noopener noreferrer" className={styles.ugcLinkBtn}>
              Ver Brief →
            </a>
          </div>
        </li>

        <li className={styles.ugcDoneItem}>
          <span className={styles.ugcCheck} aria-hidden>
            ✅
          </span>
          <div>
            <p className={styles.ugcDoneTitle}>Landing de selección de embajadores publicada</p>
            <p className={styles.ugcDoneDesc}>
              Página exclusiva para aplicar al programa de embajadores Funciona+. Solo 10 perfiles seleccionados.
            </p>
            <a
              href={CREATORS_LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ugcLinkBtn}
            >
              Ver Landing de Creadores →
            </a>
          </div>
        </li>

        <li className={styles.ugcDoneItem}>
          <span className={styles.ugcCheck} aria-hidden>
            ✅
          </span>
          <div className={styles.ugcDeliverablesWrap}>
            <p className={styles.ugcDoneTitle}>Entregables definidos por creador:</p>
            <div className={styles.ugcDeliverableGrid}>
              {DELIVERABLES.map((d) => (
                <div key={d.title} className={styles.ugcDeliverableCard}>
                  <span className={styles.ugcDeliverableIcon} aria-hidden>
                    {d.icon}
                  </span>
                  <p className={styles.ugcDeliverableTitle}>{d.title}</p>
                  <p className={styles.ugcDeliverableDesc}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </li>

        <li className={styles.ugcDoneItem}>
          <span className={styles.ugcCheck} aria-hidden>
            ✅
          </span>
          <div>
            <p className={styles.ugcDoneTitle}>Kit de bienvenida definido para creadores seleccionados:</p>
            <ul className={styles.ugcKitList}>
              {KIT_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.ugcKitValue}>
              Valor del kit: <span className="alianza-money-label">$800.000 COP</span>
            </p>
          </div>
        </li>
      </ul>

      <div className={styles.doctorActionPanel} role="status">
        <p className={styles.doctorActionTitle}>⚠️ Pendiente del cliente para activar la siguiente fase:</p>
        <p className={styles.doctorActionText}>
          → Entrega de materiales de marca (referencias visuales, hooks, ideas de contenido y lineamientos
          adicionales)
        </p>
      </div>
    </BelloSection>
  );
}
