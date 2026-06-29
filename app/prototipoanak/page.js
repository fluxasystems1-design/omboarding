import Nav from "../../components/prototipoanak/Nav";
import Ticker from "../../components/prototipoanak/Ticker";
import Hero from "../../components/prototipoanak/Hero";
import BarreLine from "../../components/prototipoanak/BarreLine";
import SocialProof from "../../components/prototipoanak/SocialProof";
import Editorial from "../../components/prototipoanak/Editorial";
import ClasesGrid from "../../components/prototipoanak/ClasesGrid";
import MetodoSplit from "../../components/prototipoanak/MetodoSplit";
import Beneficios from "../../components/prototipoanak/Beneficios";
import Testimonios from "../../components/prototipoanak/Testimonios";
import Pricing from "../../components/prototipoanak/Pricing";
import CtaFinal from "../../components/prototipoanak/CtaFinal";
import Footer from "../../components/prototipoanak/Footer";

export default function PrototipoAnakPage() {
  return (
    <>
      <Nav />
      <Ticker />
      <main>
        <Hero />
        <BarreLine />
        <SocialProof />
        <Editorial />
        <ClasesGrid />
        <MetodoSplit />
        <Beneficios />
        <Testimonios />
        <BarreLine />
        <Pricing />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
