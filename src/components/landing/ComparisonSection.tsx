import { 
  X, 
  Check, 
  ArrowRight, 
  Flame, 
  Heart, 
  Brain, 
  Activity, 
  Zap, 
  Wind, 
  CheckCircle, 
  Clock, 
  Baby, 
  Moon, 
  Sparkles, 
  Microscope, 
  Shield 
} from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Área de Aquecimento",
      traditional: "Apenas a barriga (frente)",
      acalme: "Barriga + lombar ao mesmo tempo (ação bizonal)",
      icon: Flame
      },
    {
      category: "Tipo de Alívio",
      traditional: "Superficial e momentâneo",
      acalme: "Profundo e completo",
      icon: Heart
    },
    {
      category: "Atuação na Disquesia",
      traditional: "Não atua no relaxamento do esfíncter",
      acalme: "Atua no Plexo Sacral, ajudando no relaxamento para evacuação",
      icon: Brain
    },
    {
      category: "Resposta Muscular",
      traditional: "Relaxa apenas a musculatura lisa superficial do abdômen",
      acalme: "Relaxa músculos abdominais e lombares que travam o intestino",
      icon: Activity
      },
    {
      category: "Estímulo Neural",
      traditional: "Estímulo sensorial leve e local",
      acalme: "Bloqueio do sinal de dor na medula",
      icon: Zap
    },
    {
      category: "Liberação de Gases",
      traditional: "Parcial",
      acalme: "Completa",
      icon: Wind
    },
    {
      category: "Liberação de Fezes (cocô)",
      traditional: "Geralmente não ocorre",
      acalme: "Facilitada pelo relaxamento neural e muscular",
      icon: CheckCircle
    },
    {
      category: "Tempo de Alívio",
      traditional: "Mais lento e instável",
      acalme: "Mais rápido e duradouro",
      icon: Clock
    },
    {
      category: "Efeito Aconchego",
      traditional: "Aquecimento localizado",
      acalme: "Aconchego térmico 360°, similar ao útero",
      icon: Baby
    },
    {
      category: "Impacto no Sono",
      traditional: "O bebê pode acordar quando o calor passa",
      acalme: "Relaxamento profundo que favorece o sono reparador",
      icon: Moon
    },
    {
      category: "Controle do Estresse",
      traditional: "Não atua no estresse sistêmico",
      acalme: "Reduz cortisol e diminui o choro",
      icon: Sparkles
    },
    {
      category: "Tecnologia",
      traditional: "Método tradicional",
      acalme: "Tecnologia patenteada Neuro Dual Tech®",
      icon: Microscope
    },
    {
      category: "Segurança",
      traditional: "Conforto limitado",
      acalme: "Estrutura desenvolvida para uso neonatal seguro",
      icon: Shield
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

          {/* Comparison - Mobile: Cards, Desktop: Table */}
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Category Header */}
                <div className="bg-muted/50 px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 text-primary flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-foreground text-sm">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Comparison Content */}
                <div className="p-4 space-y-4">
                  {/* Traditional */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                        Cinta Tradicional
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.traditional}
                      </p>
              </div>
                </div>
                
                  {/* Divider */}
                  <div className="h-px bg-border"></div>

                  {/* Acalme */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                        Acalme Baby
                      </p>
                      <p className="text-sm text-foreground font-medium leading-relaxed">
                        {item.acalme}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              ))}
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 text-center">
            <a 
              href="#revelation" 
              className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('revelation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors">
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
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
