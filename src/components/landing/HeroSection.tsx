import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, Star, Moon, Baby, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const heroImages = [
    "/img/hero-baby-sleeping-1.jpg", // AI: Calm baby sleeping peacefully, premium lifestyle
    "/img/hero-baby-sleeping-2.jpg", // AI: Peaceful baby in modern nursery, premium lifestyle
    "/img/hero-mom-baby-bonding.jpg", // AI: Mother and baby bonding, calm and peaceful
    "/img/hero-baby-tranquil.jpg" // AI: Baby lying peacefully, premium editorial style
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
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-trust-light/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust text-primary-foreground rounded-full mb-8 animate-fade-in shadow-lg">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Dispositivo Neuro Dual Tech®</span>
            </div>
            
            {/* Main headline - Outcome first (promise) */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Fim do choro
              <span className="block text-primary">inconsolável</span>
            </h1>
            
            {/* Subheadline - The cause and discovery */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A tecnologia que atua na
              <span className="font-semibold text-foreground"> origem da cólica</span>
            </p>
            
            {/* Differentiator - The revelation */}
            <p className="text-lg text-sage mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Descubra por que o alívio vem pelas costas do seu bebê
            </p>
            
            {/* Outcome icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Moon className="w-5 h-5 text-trust" />
                <span className="text-sm">Noites tranquilas</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Baby className="w-5 h-5 text-trust" />
                <span className="text-sm">Bebê em paz</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Heart className="w-5 h-5 mr-2" />
                Quero para meu bebê
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-trust" />
                <span>Patente INPI</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-trust" />
                <span>Tecnologia Exclusiva</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-trust fill-trust" />
                <span>Feito no Brasil</span>
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
                      "/img/baby-with-belt.jpg",
                      "/img/mom-with-belt.jpg",
                      "/img/baby-side.jpg"
                    ];
                    
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={`Bebê tranquilo com dispositivo Acalme Baby - imagem ${index + 1}`}
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
              <div className="absolute -bottom-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-background group cursor-pointer">
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
              
              {/* Floating result badge */}
              <div className="absolute bottom-8 right-4 bg-foreground text-background px-5 py-3 rounded-2xl shadow-xl">
                <p className="text-xs text-background/70 mb-0.5">Resultado</p>
                <p className="font-semibold text-sm">Bebê Tranquilo</p>
              </div>
              
              {/* Top badge */}
              <div className="absolute top-4 -right-2 lg:-right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                <p className="font-semibold text-xs">Alívio 360°</p>
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
