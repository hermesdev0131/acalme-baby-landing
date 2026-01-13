import { Snowflake, Syringe, ThermometerSnowflake, Shield, Check } from "lucide-react";

const ColdGelSection = () => {
  const benefits = [
    "Reduz inflamação local",
    "Alivia dor da picada",
    "Acalma irritabilidade",
    "Seguro para recém-nascidos"
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-trust-light via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-trust text-primary-foreground text-xs font-semibold tracking-wider uppercase rounded-full">
              <Snowflake className="w-3.5 h-3.5" />
              Tecnologia Fria
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Compressa Termoativa
                <span className="block text-primary mt-2">Alívio Pós-Vacina</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As primeiras vacinas do bebê causam dor e inflamação localizada. 
                A compressa em gel termoativo proporciona <span className="font-semibold text-foreground">crioterapia segura</span>, 
                reduzindo o desconforto de forma natural e gentil.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-trust/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-trust" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <ThermometerSnowflake className="w-5 h-5 text-trust" />
                    <span className="font-semibold text-foreground text-sm">Uso Frio</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Resfrie na geladeira por 30 min</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-sage" />
                    <span className="font-semibold text-foreground text-sm">100% Seguro</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Gel atóxico certificado</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-6 shadow-2xl border border-border">
                <img 
                  src="/img/gel-compress.jpg" 
                  alt="Compressa em gel termoativa para uso pós-vacina" 
                  className="w-full rounded-2xl object-cover aspect-square"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Syringe className="w-4 h-4" />
                  <span className="font-semibold text-sm">Uso Pós-Vacina</span>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-trust/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-card border border-primary/20 rounded-2xl px-8 py-4">
              <p className="text-foreground">
                🧊 <span className="font-medium">Extensão natural da tecnologia:</span>{" "}
                <span className="text-muted-foreground">Calor para cólicas, frio para vacinas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdGelSection;
