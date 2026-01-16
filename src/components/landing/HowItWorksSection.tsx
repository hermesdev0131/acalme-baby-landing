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
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-card rounded-3xl p-6 border border-border shadow-xl">
                <img 
                  src="/img/how-it-works-device.jpg" 
                  alt="Dispositivo Acalme Baby - estrutura dupla anti queimadura"
                  className="w-full rounded-2xl object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/img/product-belt-double.jpg";
                  }}
                />
              </div>
              
              {/* Secondary Image */}
              <div className="mt-6 bg-card rounded-2xl p-4 border border-border shadow-lg">
                <img 
                  src="/img/how-it-works-material.jpg" 
                  alt="Material algodão do dispositivo Acalme Baby"
                  className="w-full rounded-xl object-cover aspect-video"
                  onError={(e) => {
                    e.currentTarget.src = "/img/product-belt.jpg";
                  }}
                />
              </div>
            </div>

            {/* Explanation Side */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Design Seguro e Não Volumoso
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O dispositivo Acalme Baby foi desenvolvido com <strong className="text-foreground">bolsas finas (seed pouches)</strong> que se adaptam perfeitamente ao corpo do bebê, sem adicionar volume ou desconforto. 
                  A <strong className="text-foreground">cinta é dupla anti queimadura</strong>, garantindo segurança térmica máxima. 
                  Feito em <strong className="text-foreground">material algodão</strong> e <strong className="text-foreground">livre de BPA</strong>, ideal para bebês alérgicos e com pele sensível.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/img/how-it-works-double-pouches.jpg" 
                      alt="Duas bolsas estratégicas - frente e costas"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Duas Bolsas Estratégicas com Forro Duplo Anti Queimadura</h4>
                    <p className="text-sm text-muted-foreground">
                      Uma bolsa na frente (abdômen) e outra nas costas (lombar), alinhada com a região sacral onde está o Plexo Sacral. 
                      Ambas com <strong className="text-foreground">forro duplo anti queimadura</strong> para máxima segurança térmica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/img/how-it-works-baby-comfort.jpg" 
                      alt="Bebê confortável com dispositivo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full bg-trust-light flex items-center justify-center">
                      <Baby className="w-6 h-6 text-trust" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Seguro para Deitar</h4>
                    <p className="text-sm text-muted-foreground">
                      O dispositivo é fino, macio e não volumoso. O bebê pode deitar normalmente, inclusive de barriga para cima, com total segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/img/how-it-works-cotton-material.jpg" 
                      alt="Material algodão respirável"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full bg-sage-light flex items-center justify-center">
                      <Layers className="w-6 h-6 text-sage" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Material Algodão e Livre de BPA</h4>
                    <p className="text-sm text-muted-foreground">
                      Feito com <strong className="text-foreground">algodão macio e respirável</strong>, desenvolvido especificamente para uso neonatal. 
                      <strong className="text-foreground"> Livre de BPA</strong>, garantindo segurança para bebês alérgicos e com pele sensível.
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
