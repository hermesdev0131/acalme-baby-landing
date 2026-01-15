import { Button } from "@/components/ui/button";
import { Heart, Moon, Baby, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contrast statement - Enhanced */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/50 rounded-2xl p-6 border border-border relative">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full border border-border">
                    Limitação
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2 mt-2">Dispositivos comuns</p>
                <p className="text-foreground font-medium mb-2">
                  Movem o conteúdo intestinal com esforço
                </p>
                <p className="text-sm text-muted-foreground">
                  Apenas aquecimento frontal — não alcança a região lombar onde está o Plexo Sacral
                </p>
              </div>
              <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/30 shadow-lg relative">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-md">
                    Solução Completa
                  </span>
                </div>
                <p className="text-primary text-sm mb-2 font-medium mt-2">Acalme Baby</p>
                <p className="text-foreground font-semibold mb-2">
                  Ajuda o bebê a relaxar pela lombar
                </p>
                <p className="text-sm text-foreground/80">
                  Onde o aquecimento apenas na barriga não consegue atuar — ação bizonal 360° que ativa o Plexo Sacral
                </p>
              </div>
            </div>
          </div>
          
          {/* Main headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Paz. Silêncio. Sono.
            <span className="block text-primary mt-2">Para toda a família.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Dispositivos comuns movem o conteúdo com sacrifício. 
            <span className="font-semibold text-foreground"> Acalme ajuda pela lombar</span>, 
            onde o aquecimento apenas na barriga não consegue atuar.
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            A tecnologia que faltava para noites tranquilas e um bebê confortável.
          </p>
          
          {/* CTA */}
          <Button size="lg" className="text-lg px-12 py-7 rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all mb-10">
            <Heart className="w-5 h-5 mr-2" />
            Quero meu Kit Acalme Baby
          </Button>
          
          {/* Outcome icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-trust" />
              <span className="text-sm">Noites tranquilas</span>
            </div>
            <div className="flex items-center gap-2">
              <Baby className="w-5 h-5 text-trust" />
              <span className="text-sm">Bebê confortável</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-trust" />
              <span className="text-sm">Alívio verdadeiro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
