import HeroSection from "@/components/landing/HeroSection";
import EsfincterSection from "@/components/landing/EsfincterSection";
import TechnologySection from "@/components/landing/TechnologySection";
import CauseSection from "@/components/landing/CauseSection";
import TraditionalHeatingSection from "@/components/landing/TraditionalHeatingSection";
import RevelationSection from "@/components/landing/RevelationSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SafetyDisclaimerSection from "@/components/landing/SafetyDisclaimerSection";
import KitSection from "@/components/landing/KitSection";
import AromatherapySection from "@/components/landing/AromatherapySection";
import ColdGelSection from "@/components/landing/ColdGelSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import VideoSection from "@/components/landing/VideoSection";
import FAQSection from "@/components/landing/FAQSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main id="top" className="min-h-screen scroll-smooth">
      {/* 1. Banner Principal – A Promessa (outcome first, calm baby) */}
      <HeroSection />
      
      {/* 2. Esfíncter - Entenda o Problema (logo após hero) */}
      <EsfincterSection />

      {/* 3. Tecnologia 360° – Neuro Dual Tech® (introduce the difference immediately) */}
      <TechnologySection />
      
      {/* 4. A Causa – Educação (colic and disquesia explained) */}
      <CauseSection />
      
      {/* 5. O que o Mercado Já Faz – Aquecimento Abdominal (traditional solution, limited) */}
      <TraditionalHeatingSection />

      {/* 6. A Grande Revelação – Lombar / Plexo Sacral (discovery moment) */}
      <RevelationSection />

      {/* 7. Comparativo Visual (carousel: traditional vs Neuro Dual Tech) */}
      <ComparisonSection />

      {/* 8. Autoridade Científica (Gate Control, Plexo Sacral, Patent) */}
      <AuthoritySection />

      {/* 9. Safety & Legal Disclaimer (MANDATORY) */}
      <SafetyDisclaimerSection />

      {/* 10. Sistema Híbrido – Kit Completo (hot for colic, cold for vaccine) */}
      <KitSection />

      {/* 11. Aromaterapia – Ervas Calmantes */}
      <AromatherapySection />

      {/* 12. Seção exclusiva da compressa fria (pós-vacina) */}
      <ColdGelSection />

      {/* 13. Como Funciona – Estrutura do Dispositivo (Visual) */}
      <HowItWorksSection />

      {/* 14. Vídeo Demonstrativo (20-30s) */}
      <VideoSection />

      {/* 15. FAQ – Perguntas e Respostas */}
      <FAQSection />

      {/* 16. Quem Somos */}
      <AboutSection />

      {/* 17. Fechamento de Alto Impacto – CTA Final */}
      <CTASection />
      
      <Footer />
    </main>
  );
};

export default Index;
