import { X, Check, ArrowRight } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Área de Aquecimento",
      traditional: "Apenas a barriga (frente)",
      acalme: "Barriga + lombar ao mesmo tempo (ação bizonal)",
      icon: "🔥"
    },
    {
      category: "Tipo de Alívio",
      traditional: "Superficial e momentâneo",
      acalme: "Profundo e completo",
      icon: "💆"
    },
    {
      category: "Atuação na Disquesia",
      traditional: "Não atua no relaxamento do esfíncter",
      acalme: "Atua no Plexo Sacral, ajudando no relaxamento para evacuação",
      icon: "🧠"
    },
    {
      category: "Resposta Muscular",
      traditional: "Relaxa apenas a musculatura lisa superficial do abdômen",
      acalme: "Relaxa músculos abdominais e lombares que travam o intestino",
      icon: "💪"
    },
    {
      category: "Estímulo Neural",
      traditional: "Estímulo sensorial leve e local",
      acalme: "Bloqueio do sinal de dor na medula",
      icon: "⚡"
    },
    {
      category: "Liberação de Gases",
      traditional: "Parcial",
      acalme: "Completa",
      icon: "💨"
    },
    {
      category: "Liberação de Fezes (cocô)",
      traditional: "Geralmente não ocorre",
      acalme: "Facilitada pelo relaxamento neural e muscular",
      icon: "✅"
    },
    {
      category: "Tempo de Alívio",
      traditional: "Mais lento e instável",
      acalme: "Mais rápido e duradouro",
      icon: "⏱️"
    },
    {
      category: "Efeito Aconchego",
      traditional: "Aquecimento localizado",
      acalme: "Aconchego térmico 360°, similar ao útero",
      icon: "🤱"
    },
    {
      category: "Impacto no Sono",
      traditional: "O bebê pode acordar quando o calor passa",
      acalme: "Relaxamento profundo que favorece o sono reparador",
      icon: "😴"
    },
    {
      category: "Controle do Estresse",
      traditional: "Não atua no estresse sistêmico",
      acalme: "Reduz cortisol e diminui o choro",
      icon: "🧘"
    },
    {
      category: "Tecnologia",
      traditional: "Método tradicional",
      acalme: "Tecnologia patenteada Neuro Dual Tech®",
      icon: "🔬"
    },
    {
      category: "Segurança",
      traditional: "Conforto limitado",
      acalme: "Estrutura desenvolvida para uso neonatal seguro",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Comparativo Técnico
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Cinta Tradicional vs. Acalme Baby Neuro Dual Tech®
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja a diferença técnica que justifica o investimento
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 bg-muted/50 border-b border-border">
              <div className="col-span-12 md:col-span-3">
                <p className="font-semibold text-foreground text-sm">Categoria</p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold rounded-full border border-destructive/30">
                    50%
                  </span>
                  <p className="font-semibold text-foreground text-sm">Cinta Abdominal Tradicional</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-md">
                    100%
                  </span>
                  <p className="font-semibold text-foreground text-sm">Acalme Baby - Neuro Dual Tech®</p>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparisonData.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-12 gap-4 p-6 hover:bg-muted/20 transition-colors"
                >
                  {/* Category */}
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-start gap-2">
                      <span className="text-lg mt-0.5">{item.icon}</span>
                      <p className="font-medium text-foreground text-sm leading-relaxed">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Traditional */}
                  <div className="col-span-12 md:col-span-4">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.traditional}
                      </p>
                    </div>
                  </div>

                  {/* Acalme */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium leading-relaxed">
                        {item.acalme}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/20 group cursor-pointer">
                <img 
                  src="/img/product-belt.jpg" 
                  alt="Dispositivo Acalme Baby" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onMouseEnter={(e) => {
                    e.currentTarget.src = "/img/product-belt-double.jpg";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.src = "/img/product-belt.jpg";
                  }}
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">A diferença está nas costas</p>
                <p className="text-sm text-muted-foreground">Onde o aquecimento apenas na barriga não consegue atuar</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
