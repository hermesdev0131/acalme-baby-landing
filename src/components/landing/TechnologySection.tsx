import { Zap, Target, Shield, Activity, ArrowRight, Sparkles, Brain, Heart } from "lucide-react";

const TechnologySection = () => {
  const features = [
    {
      icon: Target,
      title: "Ação Bizonal",
      description: "Aquecimento simultâneo frontal e lombar"
    },
    {
      icon: Activity,
      title: "Plexo Sacral",
      description: "Estimula o centro de comando digestivo"
    },
    {
      icon: Zap,
      title: "Bloqueio da Dor",
      description: "Tecnologia que bloqueia o sinal de dor por calor"
    },
    {
      icon: Shield,
      title: "Alívio 360°",
      description: "Resposta completa, não parcial"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-trust-light rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-trust text-primary-foreground text-xs font-semibold tracking-wider uppercase rounded-full">
              Tecnologia Exclusiva
            </span>
          </div>
          
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Conhecendo a Tecnologia 360° - Neuro Dual Tech®
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Alívio Neural e Térmico 360°
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A primeira tecnologia desenvolvida especificamente para cólicas e disquesia neonatal, 
              com ação simultânea em barriga e costas.
            </p>
          </div>

          {/* Visual Diagram - Bizonal Action */}
          <div className="mb-16">
            <div className="bg-card rounded-3xl border border-border p-8 lg:p-12 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Diagram Side - 360° Infographic */}
                <div className="relative">
                  <div className="aspect-square max-w-xl lg:max-w-2xl mx-auto relative">
                    {/* AI Generated 360° Heating Infographic */}
                    <img
                      src="/img/infographic-360-heating.jpg"
                      alt="Infográfico mostrando aquecimento 360° - frente e costas"
                      className="w-full h-full object-contain rounded-2xl"
                      onError={(e) => {
                        // Fallback to icon-based diagram if AI image not available
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Icon Diagram */}
                    <div className="absolute inset-0 hidden items-center justify-center">
                    <div className="absolute inset-8 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-primary/20 bg-muted/30 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                              <Target className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-xs text-muted-foreground">Ação Bizonal</p>
                          </div>
                      </div>
                    </div>
                    
                    {/* Front heat indicator */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                      <p className="text-xs font-medium">Calor Frontal</p>
                      <p className="text-sm font-bold">Barriga</p>
                    </div>
                    
                    {/* Back heat indicator */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-trust text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                      <p className="text-xs font-medium">Calor Lombar</p>
                      <p className="text-sm font-bold">Plexo Sacral</p>
                    </div>
                    
                    {/* 360° indicator */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-3 rounded-full shadow-xl">
                      <p className="font-bold text-sm">Abraço Térmico 360°</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Explanation Side */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Por que as costas são essenciais?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      O <span className="font-semibold text-foreground">Plexo Sacral</span> é o centro de comando do sistema digestivo do bebê. 
                      Ao aquecer a região lombar, ativamos diretamente os nervos que controlam o relaxamento do esfíncter.
                    </p>
                  </div>

                  {/* Safety - Forro Duplo */}
                  <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-base">Segurança Térmica e Material</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Possui forro duplo anti queimadura, garantindo que o calor seja distribuído de forma uniforme e segura. 
                          O dispositivo é feito com material 100% algodão, livre de BPA e hipoalergênico, protegendo a pele sensível do bebê.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">O resultado?</p>
                      <p className="text-muted-foreground text-sm">
                        Liberação de gases <strong>e fezes</strong>, não apenas movimentação intestinal. 
                        Alívio completo, não parcial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusive Benefits - When baby arches body */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-trust-light/20 rounded-3xl p-8 lg:p-12 border-2 border-primary/20 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                  Quando o bebê arqueia o corpo de dor
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A região lombar trava e fica dolorida. Somente a Acalme Baby relaxa essa musculatura, 
                  trazendo <span className="font-semibold text-foreground">3 benefícios exclusivos</span>:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Benefit 1: Fim da Tensão */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">
                    Fim da Tensão
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Distensiona a coluna e os músculos travados pela crise, permitindo que o bebê relaxe completamente.
                  </p>
                </div>

                {/* Benefit 2: Efeito Cérebro */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-trust/10 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-trust" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">
                    Efeito Cérebro
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Aquece a medula, enviando uma mensagem direta de alívio ao sistema nervoso, reduzindo o estresse e a dor.
                  </p>
                </div>

                {/* Benefit 3: Plexo Sacral */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-sage" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">
                    Plexo Sacral
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Relaxa o esfíncter anal, permitindo que o bebê estique o corpo e o cocô saia sem esforço.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-trust-light rounded-xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-trust" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Patent Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border-2 border-primary/20 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Patente Protocolada INPI</p>
                <p className="text-sm font-semibold text-foreground">BR 10 2026 000250 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
