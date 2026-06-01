import styles from "./seguimiento-bello.module.css";
import { BelloSection } from "./BelloSection";
import { WA_URL } from "./call-config";

const QUESTIONS = [
  { emoji: "📦", text: "¿Qué combos de productos quiere ofrecer?" },
  { emoji: "📚", text: "¿Desea vender también los libros en la tienda?" },
  { emoji: "🚀", text: "¿Qué promoción de lanzamiento está dispuesto a lanzar?" },
];

export function QuestionsSection() {
  return (
    <BelloSection
      id="decisiones"
      sectionNum="05"
      title="Decisiones clave para activar el lanzamiento"
      statusLabel="Para cerrar en esta llamada"
      statusClassName={styles.statusDecision}
      delay={220}
    >
      <p className={styles.questionsIntro}>
        Para maximizar el potencial de la tienda y las campañas, necesitamos que el Dr. Bello nos ayude a definir:
      </p>
      <div className={styles.questionGrid}>
        {QUESTIONS.map((q) => (
          <div key={q.text} className={styles.questionCard}>
            <span className={styles.questionEmoji} aria-hidden>
              {q.emoji}
            </span>
            <p className={styles.questionText}>{q.text}</p>
          </div>
        ))}
      </div>
      <div className={`mt-8 text-center ${styles.questionsCtaWrap}`}>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="alianza-btn-primary alianza-cta-pulse inline-flex px-8 py-3 text-sm"
        >
          Confirmar por WhatsApp
        </a>
      </div>
    </BelloSection>
  );
}
