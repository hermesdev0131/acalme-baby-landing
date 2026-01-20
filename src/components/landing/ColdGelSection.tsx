import { Snowflake, Syringe, ThermometerSnowflake, Shield, Check } from "lucide-react";

const ColdGelSection = () => {
  const benefits = [
    "Não molha o bebê",
    "Temperatura ideal (não é tão frio como gelo)",
    "A mãe não precisa segurar",
    "Desinflama e tira a dor"
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

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                Compressa Termoativa
                <span className="block text-primary mt-2">Alívio Pós-Vacina</span>
              </h2>
          </div>

          {/* Why vaccines cause pain */}
          <div className="mb-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-center bg-destructive/5 border border-destructive/20 rounded-xl p-5 md:p-6">
              {/* Text Content */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Syringe className="w-5 h-5 text-destructive" />
                  Por que as vacinas causam dor e inflamação?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As vacinas contêm antígenos que estimulam o sistema imunológico do bebê. 
                  Essa resposta natural do organismo causa uma <span className="font-semibold text-foreground">reação inflamatória localizada</span> no local da aplicação, 
                  resultando em vermelhidão, inchaço, calor e dor. É uma resposta normal e esperada, 
                  mas que pode causar desconforto significativo no bebê.
                </p>
              </div>
              
              {/* Baby with gel compress image */}
              <div className="bg-card rounded-2xl p-3 shadow-lg border border-border overflow-hidden">
                <img 
                  src="/img/baby-gel-compress.jpg" 
                  alt="Bebê usando compressa de gel pós-vacina na perna" 
                  className="w-full rounded-xl object-cover aspect-[4/3]"
                  onError={(e) => {
                    e.currentTarget.src = "/img/baby-gel-2-old.jpg";
                  }}
                />
                <p className="text-xs text-center text-muted-foreground mt-2">Bebê usando compressa de gel</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-center justify-center">
              <Snowflake className="w-5 h-5 text-trust" />
              A solução: Compressa em Gel Termoativa
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
                A compressa em gel termoativo proporciona <span className="font-semibold text-foreground">crioterapia segura</span>, 
              reduzindo o desconforto de forma natural e gentil. O frio controlado ajuda a desinflamar 
              a região e alivia a dor, proporcionando conforto imediato ao bebê.
            </p>
          </div>

          {/* Baby using gel images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-3xl p-4 shadow-xl border border-border overflow-hidden">
              <img 
                src="/img/baby-gel-1.jpg" 
                alt="Bebê chorando após aplicação de vacina" 
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                onError={(e) => {
                  e.currentTarget.src = "/img/gel-image.jpg";
                }}
              />
              <p className="text-xs text-center text-muted-foreground mt-3">Bebê com desconforto após a vacina</p>
            </div>
            <div className="bg-card rounded-3xl p-4 shadow-xl border border-border overflow-hidden">
              <img 
                src="/img/baby-gel-2-old.jpg" 
                alt="Bebê confortável com compressa de gel" 
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                onError={(e) => {
                  e.currentTarget.src = "/img/gel-image.jpg";
                }}
              />
              <p className="text-xs text-center text-muted-foreground mt-3">Alívio imediato e conforto</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Benefícios da Compressa em Gel:</h3>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
                    <div className="w-8 h-8 rounded-full bg-trust/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-trust" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{benefit}</span>
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
                  <p className="text-xs text-muted-foreground">Até 2 horas no freezer</p>
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

            {/* Main Product Image */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-6 shadow-2xl border border-border">
                <img 
                  src="/img/gel-image.jpg" 
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
