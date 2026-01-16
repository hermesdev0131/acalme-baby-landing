import { Flame, Clock, AlertCircle, Info } from "lucide-react";

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
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-muted border border-border px-3 py-1.5 rounded-full">
                  <span className="text-xs text-muted-foreground">Aquecimento unilateral</span>
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

                  {/* Resultado */}
                  <div className="flex items-start gap-4 bg-background p-4 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Info className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        <span className="text-muted-foreground">Resultado:</span>{" "}
                        Move gases, mas não relaxa o esfíncter.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        É uma solução parcial — não errada, mas incompleta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Warning */}
          <div className="mb-12">
            <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Por que aquecer só a barriga pode piorar o desconforto?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Se o bebê aquece a barriga e a região do <span className="font-semibold text-foreground">Plexo Sacral nas costas não for tratada</span>, pode gerar um desconforto ainda maior. 
                    O bebê sente a necessidade de evacuar, porém na parte de trás o esfíncter está travado. 
                    Com isso, o cocô não sai, trazendo mais angústia ainda.
                  </p>
                  <p className="text-foreground font-medium leading-relaxed">
                    Por esse motivo, aquecer só a barriga não é eficaz. Precisa ser um <span className="text-primary">tratamento completo 360°</span> para que o resultado seja gases e cocô eliminados. 
                    E isso só é possível com a cinta dupla Acalme Baby com a tecnologia Neuro Dual Tech®.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalHeatingSection;
