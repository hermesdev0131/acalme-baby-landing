import { Thermometer, Leaf, Snowflake, Package, Check } from "lucide-react";

const kitItems = [
  {
    icon: Thermometer,
    title: "Dispositivo Híbrido",
    description: "Aquecimento duplo (barriga + costas) para máximo alívio",
    detail: "Uma cinta dupla",
    highlight: false,
  },
  {
    icon: Leaf,
    title: "Bolsa de Ervas",
    description: "Aromaterapia natural com ervas calmantes selecionadas",
    detail: "Duas bolsas de semente e ervas",
    highlight: false,
  },
  {
    icon: Snowflake,
    title: "Compressa em Gel",
    description: "Uso frio para alívio pós-vacina e inflamações",
    detail: "Suporte para compressa em gel + Dois gel térmico",
    highlight: true,
    badge: "Pós-Vacina",
  },
  {
    icon: Package,
    title: "Mala de mão",
    description: "Para armazenamento e transporte",
    detail: "Bolsa de mão para transporte",
    highlight: false,
  },
];

const KitSection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              O que vem no Kit
            </h2>
            <p className="text-lg text-muted-foreground">
              Um sistema completo para quente e frio
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="order-1 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-3xl p-4 shadow-xl border border-border col-span-2 group ">
                  {/* <img 
                    src="/img/kit-full.jpg" 
                    alt="Kit Acalme Baby completo" 
                    className="w-full rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    onMouseEnter={(e) => {
                      e.currentTarget.src = "/img/kit-bags.jpg";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.src = "/img/kit-full.jpg";
                    }}
                  /> */}
                   <img 
                    src="/img/kit-full.jpg" 
                    alt="Kit Acalme Baby completo" 
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="bg-card rounded-2xl p-3 shadow-lg border border-border col-span-1">
                  <img 
                    src="/img/seed pouch.jpg" 
                    alt="Bolsa de Ervas" 
                    className="w-full rounded-xl object-cover aspect-square"
                  />
                  <p className="text-xs text-center text-muted-foreground mt-2">Bolsa de Ervas</p>
                </div>
                <div className="bg-card rounded-2xl p-3 shadow-lg border border-border col-span-1">
                  <img 
                    src="/img/gel-compress.jpg" 
                    alt="Compressa em Gel Pós-Vacina" 
                    className="w-full rounded-xl object-cover aspect-square"
                  />
                  <p className="text-xs text-center text-muted-foreground mt-2">Compressa em Gel</p>
                </div>
                {/* <div className="bg-trust-light rounded-2xl p-4 flex items-center justify-center col-span-1">
                  <div className="text-center">
                    <Snowflake className="w-10 h-10 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-primary">Uso Frio</p>
                    <p className="text-xs text-muted-foreground">Pós-Vacina</p>
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Items list */}
            <div className="order-2 lg:order-2 space-y-4">
              {kitItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 p-5 rounded-xl transition-all ${
                    item.highlight 
                      ? 'bg-trust-light border-2 border-primary/20' 
                      : 'bg-card border border-border hover:border-primary/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.highlight ? 'bg-primary/20' : 'bg-secondary'
                  }`}>
                    <item.icon className={`w-6 h-6 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    {/* Detailed item info */}
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/50">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">{item.detail}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitSection;
