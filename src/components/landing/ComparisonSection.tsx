import { X, Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ComparisonSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      traditional: {
        title: "Aquecimento Abdominal",
        description: "Aquece apenas a barriga",
        result: "Move gases, mas não relaxa o esfíncter",
        icon: "🔥",
        percentage: "50%",
        completeness: "incompleto",
        bullets: [
          "Gases apenas",
          "Mais lento",
          "Sem Plexo Sacral",
          "Alívio superficial"
        ]
      },
      neuroDual: {
        title: "Ação Bizonal 360°",
        description: "Aquece barriga + lombar",
        result: "Libera gases E fezes — alívio completo",
        icon: "🔥🔥",
        percentage: "100%",
        completeness: "completo",
        bullets: [
          "Gases + fezes",
          "Plexo Sacral ativado",
          "Bloqueio neural da dor",
          "Resposta mais rápida"
        ]
      }
    },
    {
      traditional: {
        title: "Alívio Parcial",
        description: "Atua na superfície do desconforto",
        result: "Bebê continua fazendo força sem sucesso",
        icon: "⏳",
        percentage: "50%",
        completeness: "incompleto",
        bullets: [
          "Sem mecanismo de disquesia",
          "Apenas movimento intestinal",
          "Não destrava o esfíncter",
          "Alívio limitado"
        ]
      },
      neuroDual: {
        title: "Alívio Neural",
        description: "Ativa o Plexo Sacral pela lombar",
        result: "Destrava o bebê de verdade",
        icon: "⚡",
        percentage: "100%",
        completeness: "completo",
        bullets: [
          "Mecanismo de disquesia",
          "Relaxamento do esfíncter",
          "Destrava completamente",
          "Alívio total"
        ]
      }
    },
    {
      traditional: {
        title: "Tempo de Resposta",
        description: "Demora para fazer efeito",
        result: "Bebê chora por mais tempo",
        icon: "😢",
        percentage: "50%",
        completeness: "incompleto",
        bullets: [
          "Resposta mais lenta",
          "Requer mais tempo",
          "Eficácia limitada",
          "Processo demorado"
        ]
      },
      neuroDual: {
        title: "Resposta Rápida",
        description: "Gate Control Theory aplicada",
        result: "20-30% mais rápido que métodos tradicionais",
        icon: "😊",
        percentage: "100%",
        completeness: "completo",
        bullets: [
          "20-30% mais rápido",
          "Gate Control ativo",
          "Resposta imediata",
          "Eficácia superior"
        ]
      }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Comparativo Visual
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              A diferença que faz toda a diferença
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deslize para entender por que o aquecimento lombar é essencial
            </p>
          </div>

          {/* Visual Comparison Image - AI Generated */}
          <div className="mb-12">
            <div className="bg-card rounded-3xl p-6 border border-border shadow-lg">
              <img
                src="/img/comparison-visual.jpg"
                alt="Comparativo visual: dispositivo tradicional vs Neuro Dual Tech"
                className="w-full h-auto rounded-2xl object-contain"
                onError={(e) => {
                  // Hide if AI image not available
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 bg-card border border-border rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 bg-card border border-border rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Slide Content */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Traditional */}
              <div className="bg-muted/50 rounded-3xl p-8 border border-border relative">
                <div className="absolute -top-4 left-8 flex items-center gap-2">
                  <span className="px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full border border-border">
                    Dispositivo Tradicional
                  </span>
                  <span className="px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full border border-destructive/30">
                    {slides[currentSlide].traditional.percentage}
                  </span>
                </div>
                
                <div className="mt-6">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{slides[currentSlide].traditional.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {slides[currentSlide].traditional.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {slides[currentSlide].traditional.description}
                    </p>
                  </div>
                  
                  {/* Bullets */}
                  <div className="space-y-2 mb-6">
                    {slides[currentSlide].traditional.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Incompleto badge */}
                  <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/20 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="font-medium text-destructive uppercase text-xs">
                        {slides[currentSlide].traditional.completeness}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {slides[currentSlide].traditional.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Neuro Dual Tech */}
              <div className="bg-gradient-to-br from-trust-light to-background rounded-3xl p-8 border-2 border-primary/30 shadow-xl relative">
                <div className="absolute -top-4 left-8 flex items-center gap-2">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                    Neuro Dual Tech®
                  </span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-md">
                    {slides[currentSlide].neuroDual.percentage}
                  </span>
                </div>
                
                <div className="mt-6">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{slides[currentSlide].neuroDual.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {slides[currentSlide].neuroDual.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {slides[currentSlide].neuroDual.description}
                    </p>
                  </div>
                  
                  {/* Bullets */}
                  <div className="space-y-2 mb-6">
                    {slides[currentSlide].neuroDual.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Completo badge */}
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-medium text-primary uppercase text-xs">
                        {slides[currentSlide].neuroDual.completeness}
                      </span>
                    </div>
                    <p className="text-sm text-foreground font-medium">
                      {slides[currentSlide].neuroDual.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-primary w-8' 
                      : 'bg-border hover:bg-muted-foreground/30'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom insight */}
          <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/20 group cursor-pointer">
                <img 
                  src="/img/product-belt.jpg" 
                  alt="Dispositivo Acalme Baby" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onMouseEnter={(e) => {
                    e.currentTarget.src = "/img/product-belt-double.jpg";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.src = "/img/product-belt.jpg";
                  }}
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">A diferença está nas costas</p>
                <p className="text-sm text-muted-foreground">Onde o aquecimento frontal não alcança</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
