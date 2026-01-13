import { Flame, Clock, AlertCircle } from "lucide-react";

const TraditionalHeatingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              O que o mercado oferece
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              O Aquecimento Abdominal Tradicional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A solução mais comum — mas será que é suficiente?
            </p>
          </div>

          {/* Visual representation */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-sm mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Diagram - AI Generated Limitation Visual */}
              <div className="relative">
                <div className="aspect-video bg-muted/50 rounded-2xl overflow-hidden relative">
                  {/* AI Generated Limitation Visual */}
                  <img
                    src="/img/limitation-front-only.jpg"
                    alt="Diagrama mostrando limitação do aquecimento apenas frontal"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to icon diagram if AI image not available
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Icon Diagram */}
                  <div className="absolute inset-0 hidden items-center justify-center">
                    {/* Baby silhouette representation */}
                    <div className="relative">
                      {/* Body outline */}
                      <div className="w-32 h-40 bg-muted rounded-full relative">
                        {/* Front heating only indicator */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent/50 rounded-full animate-pulse" />
                        <Flame className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-accent" />
                      </div>
                      
                      {/* Arrow showing limitation */}
                      <div className="absolute -right-20 top-1/2 -translate-y-1/2 bg-muted-foreground/10 px-3 py-1.5 rounded-lg">
                        <span className="text-xs text-muted-foreground">Apenas frente</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-muted border border-border px-4 py-2 rounded-full">
                  <span className="text-sm text-muted-foreground">Aquecimento unilateral</span>
                </div>
              </div>

              {/* Explanation */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  O que o aquecimento abdominal faz:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-background p-4 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Flame className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Relaxa a musculatura abdominal</p>
                      <p className="text-sm text-muted-foreground">
                        O calor ajuda a reduzir a tensão na barriga
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-background p-4 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Ajuda a movimentar gases</p>
                      <p className="text-sm text-muted-foreground">
                        Processo lento que exige paciência e repetição
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-destructive/5 p-4 rounded-xl border border-destructive/20">
                    <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Mas não alcança a região lombar</p>
                      <p className="text-sm text-muted-foreground">
                        O <span className="font-medium">Plexo Sacral</span> — centro de comando digestivo — 
                        permanece sem estímulo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom insight */}
          <div className="text-center">
            <div className="inline-block bg-card border border-border rounded-2xl px-8 py-5">
              <p className="text-foreground">
                <span className="text-muted-foreground">Resultado:</span>{" "}
                <span className="font-medium">Move gases, mas não relaxa o esfíncter.</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                É uma solução parcial — não errada, mas incompleta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalHeatingSection;
