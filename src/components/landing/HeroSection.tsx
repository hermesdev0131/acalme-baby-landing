import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, Star, Moon, Baby, ChevronLeft, ChevronRight, Thermometer, Snowflake } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const heroImages = [
    "/img/hero-baby-tranquil.jpg", // Baby lying peacefully, premium editorial style
    "/img/hero-baby-sleeping-2.jpg", // Baby with relief on back - showing cocô relief benefit
    "/img/baby-esfincter.jpg", // Baby showing esfíncter relief - technical benefit visualization
    "/img/esfincter.jpg", // Technical image showing esfíncter anatomy and relaxation
    "/img/baby-gel-2.jpg", // Baby comfortable after vaccine - showing vaccine relief benefit
    "/img/baby-gel-222.jpg", // Baby with gel compress - additional vaccine relief visualization
    "/img/hero-baby-sleeping-1.jpg", // Calm baby sleeping peacefully, premium lifestyle
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Logo - Top Left (Hero Section Only) */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 z-50">
        <a 
          href="#top" 
          className="inline-block transition-all hover:opacity-80 hover:scale-105"
          aria-label="Acalme Baby - Voltar ao topo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-lg">
            <img 
              src="/img/logo-main.jpg" 
              alt="Acalme Baby" 
              className="h-20 md:h-24 lg:h-28 xl:h-32 w-auto"
            />
          </div>
        </a>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-trust-light/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 lg:py-28 pt-32 md:pt-36 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust text-primary-foreground rounded-full mb-8 animate-fade-in shadow-lg">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Kit Completo Neuro Dual Tech®</span>
            </div>
            
            {/* Main headline - Promessa de alívio completo */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              O único Kit com Tecnologia Neuro Dual Tech® que destrava o intestino e alivia a dor da vacina
            </h1>
            
            {/* Two Benefits - Clear Division */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Benefit 1: Cólicas/Intestino */}
              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-4 md:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Cólicas & Intestino</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alívio nas costas para o cocô sair. Aquecimento lombar relaxa o esfíncter e destrava o intestino.
                </p>
              </div>
              
              {/* Benefit 2: Dor de Vacina */}
              <div className="bg-trust-light/30 border-2 border-trust/20 rounded-xl p-4 md:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center">
                    <Snowflake className="w-5 h-5 text-trust" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Dor de Vacina</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conforto pós a vacina. Compressa em gel termoativa desinflama e tira a dor de forma segura.
                </p>
              </div>
            </div>
            
            {/* Reforços emocionais */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Moon className="w-5 h-5 text-trust" />
                <span className="text-sm">Noites mais tranquilas</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Baby className="w-5 h-5 text-trust" />
                <span className="text-sm">Bebê em paz</span>
              </div>
            </div>
            
            {/* CTA - Mais direto e emocional */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Heart className="w-5 h-5 mr-2" />
                Quero aliviar meu bebê agora
              </Button>
            </div>
            
            {/* Selos de autoridade - Leitura fácil */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-trust" />
                <span>Tecnologia patenteada – INPI</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-trust" />
                <span>Tecnologia exclusiva</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-trust fill-trust" />
                <span>Desenvolvido no Brasil</span>
              </div>
            </div>
          </div>
          
          {/* Images - Slideshow with fade */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Slideshow container */}
              <div className="bg-card rounded-3xl p-4 shadow-2xl border border-border overflow-hidden relative">
                <div className="relative aspect-[3/4]">
                  {heroImages.map((image, index) => {
                    // Fallback images if AI images not available
                    const fallbackImages = [
                      "/img/baby-side.jpg",
                      "/img/baby-side.jpg",
                      "/img/baby-side.jpg",
                      "/img/esfincter-diagram.jpg",
                      "/img/gel-image.jpg",
                      "/img/gel-image.jpg",
                      "/img/hero-baby-sleeping-1.jpg"
                    ];
                    
                    const altTexts = [
                      "Bebê tranquilo com dispositivo Acalme Baby",
                      "Bebê com alívio nas costas - alívio para cólicas e intestino",
                      "Bebê mostrando alívio do esfíncter - benefício técnico de relaxamento",
                      "Imagem técnica do esfíncter - anatomia e relaxamento",
                      "Bebê confortável após vacina - alívio da dor pós-vacina",
                      "Bebê com compressa em gel - alívio da dor pós-vacina",
                      "Bebê dormindo tranquilamente com alívio completo"
                    ];
                    
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={altTexts[index]}
                        className={`absolute inset-0 w-full h-full rounded-2xl object-cover transition-opacity duration-500 ${
                          index === currentSlide && !isTransitioning
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                        onError={(e) => {
                          // Use fallback image if AI image not available
                          const target = e.currentTarget;
                          const fallback = fallbackImages[index];
                          if (!target.src.includes(fallback)) {
                            target.src = fallback;
                          }
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Navigation arrows */}
                <button
                  onClick={() => goToSlide((currentSlide - 1 + heroImages.length) % heroImages.length)}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={() => goToSlide((currentSlide + 1) % heroImages.length)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-background/50 hover:bg-background/70'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Product overlay - showing the actual device */}
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-3 lg:border-4 border-background group cursor-pointer z-20">
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
              
              {/* Floating result badge - Top right to avoid covering baby */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-foreground/95 backdrop-blur-sm text-background px-2.5 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 rounded-lg md:rounded-xl lg:rounded-2xl shadow-xl z-20">
                <p className="text-[9px] md:text-[10px] lg:text-xs text-background/70 mb-0.5">Kit Completo</p>
                <p className="font-semibold text-[10px] md:text-xs lg:text-sm">Calor + Frio</p>
                <p className="text-[9px] md:text-[10px] lg:text-xs text-background/60 mt-0.5">Cólicas e Vacinas</p>
              </div>
              
              {/* Top badge - Moved to left side */}
              <div className="absolute top-4 left-4 md:left-6 lg:left-8 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-lg z-20">
                <p className="font-semibold text-[10px] md:text-xs">Alívio 360°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
