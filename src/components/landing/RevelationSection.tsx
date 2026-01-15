import { Lightbulb, ArrowDown, Zap, Brain } from "lucide-react";

const RevelationSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-trust-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-trust-light/50 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Discovery moment header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full mb-8 shadow-lg">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-semibold">A Grande Descoberta</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              O caminho da dor passa
              <span className="block text-primary mt-2">pela lombar do bebê</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os nervos que comandam o intestino e o relaxamento do esfíncter 
              estão localizados nas costas — não na barriga.
            </p>
          </div>

          {/* Visual revelation */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Plexo Sacral Card */}
            <div className="bg-card rounded-3xl p-8 border border-primary/20 shadow-xl">
              {/* AI Generated Plexo Sacral Anatomical Graphic */}
              <div className="mb-6 rounded-2xl overflow-hidden bg-muted/30">
                <img
                  src="/img/anatomical-plexo-sacral.jpg"
                  alt="Ilustração anatômica mostrando a localização do Plexo Sacral"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    // Fallback to icon if AI image not available
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback Icon */}
                <div className="w-14 h-14 bg-trust-light rounded-2xl hidden items-center justify-center mx-auto my-4">
                <Brain className="w-7 h-7 text-trust" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Plexo Sacral
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Localizado na região lombar baixa (costas), é o <span className="font-semibold text-foreground">centro de comando</span> que:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground">Controla a coordenação digestiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground">Comanda o relaxamento do esfíncter</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground">Transmite os sinais de dor ao cérebro</span>
                </li>
              </ul>
            </div>

            {/* Gate Control Card */}
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
              <div className="w-14 h-14 bg-sage-light rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-sage" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Teoria do Portão da Dor
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Quando aplicamos calor na região lombar, os <span className="font-semibold text-foreground">sinais térmicos bloqueiam</span> a passagem dos sinais de dor:
              </p>
              
              <div className="bg-sage-light/30 rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      <span className="text-sm text-foreground">Sinal de dor</span>
                    </div>
                    <div className="h-2 bg-destructive/30 rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs text-primary-foreground font-bold">×</span>
                      </div>
                    </div>
                  </div>
                  <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[-90deg]" />
                  <div className="text-right">
                    <span className="text-sm font-medium text-primary">Bloqueio</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">Sinal térmico</span>
                    </div>
                    <div className="h-2 bg-primary/50 rounded-full" />
                  </div>
                  <ArrowDown className="w-5 h-5 text-primary rotate-[-90deg]" />
                  <div className="text-right">
                    <span className="text-sm font-medium text-primary">Passa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aha moment */}
          <div className="text-center">
            <div className="inline-block bg-foreground text-background rounded-2xl px-10 py-6 shadow-xl">
              <p className="text-lg font-medium mb-2">
                💡 A revelação
              </p>
              <p className="text-xl font-semibold">
                Aquecer a lombar ajuda o bebê a relaxar
              </p>
              <p className="text-sm text-background/70 mt-2">
                Onde o aquecimento apenas na barriga não consegue atuar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevelationSection;
