import { Layers, Target, Baby, CheckCircle2 } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Como Funciona
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Estrutura do Dispositivo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia fina, macia e segura desenvolvida especificamente para uso neonatal
            </p>
          </div>

          {/* Visual Structure */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Diagram Side */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
                {/* Device Visual */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-trust-light to-background rounded-2xl overflow-hidden border-2 border-primary/20">
                  {/* Front Pouch Indicator */}
                  <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-primary/20 rounded-full p-4 border-2 border-primary/40">
                      <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-xs font-medium text-foreground bg-background/90 px-3 py-1 rounded-full border border-primary/20">
                        Bolsa Frontal
                      </p>
                    </div>
                  </div>

                  {/* Back Pouch Indicator */}
                  <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2">
                    <div className="bg-trust/20 rounded-full p-4 border-2 border-trust/40">
                      <div className="w-16 h-16 bg-trust/30 rounded-full flex items-center justify-center">
                        <Layers className="w-8 h-8 text-trust" />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-xs font-medium text-foreground bg-background/90 px-3 py-1 rounded-full border border-trust/20">
                        Bolsa Lombar
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Plexo Sacral</p>
                    </div>
                  </div>

                  {/* Device Outline */}
                  <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-xl"></div>
                </div>

                {/* Device Image Overlay (if available) */}
                <div className="mt-6 text-center">
                  <img 
                    src="/img/product-belt-internal.jpg" 
                    alt="Estrutura interna do dispositivo Acalme Baby"
                    className="w-full max-w-md mx-auto rounded-xl shadow-md"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Explanation Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Design Seguro e Não Volumoso
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O dispositivo Acalme Baby foi desenvolvido com <strong className="text-foreground">bolsas finas (seed pouches)</strong> que se adaptam perfeitamente ao corpo do bebê, sem adicionar volume ou desconforto.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Duas Bolsas Estratégicas</h4>
                    <p className="text-sm text-muted-foreground">
                      Uma bolsa na frente (abdômen) e outra nas costas (lombar), alinhada com a região sacral onde está o Plexo Sacral.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border">
                  <div className="w-10 h-10 bg-trust-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Baby className="w-5 h-5 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Seguro para Deitar</h4>
                    <p className="text-sm text-muted-foreground">
                      O dispositivo é fino, macio e não volumoso. O bebê pode deitar normalmente, inclusive de barriga para cima, com total segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border">
                  <div className="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Material Respirável</h4>
                    <p className="text-sm text-muted-foreground">
                      Feito com tecidos macios e respiráveis, desenvolvidos especificamente para uso neonatal, garantindo conforto e segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Alinhamento Preciso</h4>
              <p className="text-sm text-muted-foreground">
                Bolsa lombar posicionada exatamente na região do Plexo Sacral para máxima eficácia
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 bg-trust-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Baby className="w-6 h-6 text-trust" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Não Volumoso</h4>
              <p className="text-sm text-muted-foreground">
                Design fino e discreto que não interfere no conforto ou movimentação do bebê
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-sage" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Segurança Neonatal</h4>
              <p className="text-sm text-muted-foreground">
                Testado e desenvolvido seguindo padrões de segurança para uso em recém-nascidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
