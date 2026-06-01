import styles from "@/components/seguimiento-bello/seguimiento-bello.module.css";
import { AutomatizacionesSection } from "@/components/seguimiento-bello/AutomatizacionesSection";
import { CallExperience } from "@/components/seguimiento-bello/CallExperience";
import { CallSummary } from "@/components/seguimiento-bello/CallSummary";
import { CaptacionSection } from "@/components/seguimiento-bello/CaptacionSection";
import { EcommerceSection } from "@/components/seguimiento-bello/EcommerceSection";
import { Footer } from "@/components/seguimiento-bello/Footer";
import { Hero } from "@/components/seguimiento-bello/Hero";
import { QuestionsSection } from "@/components/seguimiento-bello/QuestionsSection";
import { UgcSection } from "@/components/seguimiento-bello/UgcSection";

export default function SeguimientoBelloPage() {
  return (
    <main className={`propuesta-supermercado alianza-page min-h-screen pb-20 antialiased ${styles.root}`}>
      <CallExperience>
        <Hero />
        <CallSummary />
        <CaptacionSection />
        <EcommerceSection />
        <UgcSection />
        <AutomatizacionesSection />
        <QuestionsSection />
        <Footer />
      </CallExperience>
    </main>
  );
}
