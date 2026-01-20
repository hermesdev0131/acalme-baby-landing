import { Lightbulb, Zap, Brain } from "lucide-react";

const RevelationSection = () => {
  return (
    <section id="revelation" className="py-20 lg:py-28 bg-gradient-to-b from-background to-trust-light/30 relative overflow-hidden">
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
            {/* <div className="bg-card rounded-3xl p-8 border border-primary/20 shadow-xl">
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
            </div> */}

            {/* Gate Control Card */}
            {/* <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
              <div className="w-14 h-14 bg-sage-light rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-sage" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Tecnologia de Bloqueio da Dor
              </h3>
              <p className="text-xs text-muted-foreground mb-4 italic">
                (Baseado na Teoria do Portão da Dor)
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                O calor aplicado na região lombar <span className="font-semibold text-foreground">reduz a sensação de dor</span> do bebê, permitindo que ele relaxe e encontre alívio mais rápido.
              </p>
              
              <div className="bg-sage-light/30 rounded-2xl p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive font-bold text-lg">×</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Sinal de dor</p>
                    <p className="text-sm text-muted-foreground">
                      Bloqueado pelo calor na medula
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Sinal térmico</p>
                    <p className="text-sm text-muted-foreground">
                      Passa e envia mensagem de alívio ao cérebro
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Aha moment */}
          <div className="text-center mb-16">
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

          {/* Emotional aspect - Womb memory */}
          <div className="bg-gradient-to-br from-primary/5 to-trust-light/30 rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-lg">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Image - Reduced size */}
              <div className="order-2 lg:order-1 lg:col-span-2">
                <div className="bg-card rounded-2xl p-0 shadow-xl border border-border overflow-hidden">
                  <img 
                    src="/img/hero-baby-sleeping-2-old.jpg" 
                    alt="Bebê dormindo tranquilamente com dispositivo Acalme Baby" 
                    className="w-full h-auto rounded-xl object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/img/hero-baby-sleeping-1.jpg";
                    }}
                  />
                </div>
              </div>
              
              {/* Text Content - Takes more space */}
              <div className="order-1 lg:order-2 lg:col-span-3 flex flex-col justify-center">
                <div className="text-center lg:text-left space-y-6">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-3 tracking-tight">
                      Aquecimento 360°:
                    </h3>
                    <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-6 tracking-tight">
                      Mais que calor, um abraço de proteção
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="w-16 h-0.5 bg-primary/30 mx-auto lg:mx-0"></div>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                      Com o aquecimento 360° da Acalme Baby, o seu bebê sente que está no útero novamente. 
                      <span className="block mt-3 text-foreground/90">
                        Essa segurança traz a tranquilidade necessária para o alívio da cólica.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevelationSection;
