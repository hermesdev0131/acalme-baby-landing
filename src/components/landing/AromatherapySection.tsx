import { Leaf, Wind, Heart, Sparkles } from "lucide-react";

const AromatherapySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-sage-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-sage-light text-sage text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Aromaterapia Natural
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Ervas Calmantes Selecionadas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um toque suave de natureza para acalmar o ambiente e ajudar no relaxamento do bebê
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-3xl p-6 border border-border shadow-lg">
                <img 
                  src="/img/seed-pouch.jpg" 
                  alt="Bolsa de ervas aromáticas Acalme Baby"
                  className="w-full rounded-2xl object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image not available
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-placeholder') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="fallback-placeholder hidden items-center justify-center aspect-video bg-sage-light/20 rounded-2xl">
                  <div className="text-center">
                    <Leaf className="w-16 h-16 text-sage mx-auto mb-4" />
                    <p className="text-muted-foreground">Bolsa de Ervas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Como Funciona a Aromaterapia
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A <strong className="text-foreground">bolsa de ervas aromáticas</strong> do Kit Acalme Baby contém uma seleção cuidadosa de ervas naturais com propriedades calmantes. Quando aquecida junto com o dispositivo, libera um <strong className="text-foreground">aroma suave e delicado</strong> que ajuda a criar um ambiente tranquilo e acolhedor.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ervas Naturais</h4>
                    <p className="text-sm text-muted-foreground">
                      Seleção de ervas tradicionalmente conhecidas por suas propriedades calmantes e relaxantes, escolhidas especialmente para o ambiente do bebê.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Aroma Suave Liberado com Calor</h4>
                    <p className="text-sm text-muted-foreground">
                      Quando a bolsa é aquecida junto com o dispositivo, o calor ativa suavemente as ervas, liberando um aroma delicado que não sobrecarrega os sentidos do bebê.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-trust-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-trust" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ajuda a Acalmar</h4>
                    <p className="text-sm text-muted-foreground">
                      O aroma suave contribui para criar um ambiente mais tranquilo, complementando o efeito térmico do dispositivo. <strong className="text-foreground">Não é medicinal</strong> — é um suporte sensorial que ajuda no relaxamento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-sage-light/30 border border-sage/20 rounded-xl p-4 mt-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Suporte Sensorial, Não Medicinal</p>
                    <p className="text-xs text-muted-foreground">
                      A aromaterapia do Kit Acalme Baby é um complemento sensorial ao tratamento térmico. Não possui propriedades medicinais, mas contribui para criar um ambiente mais acolhedor e tranquilo para o bebê.
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

export default AromatherapySection;
