import { AlertCircle, HelpCircle, Brain } from "lucide-react";

const CauseSection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Entenda a Causa
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Por que bebês sentem cólicas e disquesia?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não é apenas "gases". É imaturidade do sistema digestivo e nervoso.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Disquesia */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Disquesia do Lactente
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O bebê faz força, mas o esfíncter não relaxa. É como empurrar uma porta fechada. 
                Gera desconforto intenso e choro prolongado.
              </p>
            </div>

            {/* Card 2 - Coordination */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-12 h-12 bg-trust-light rounded-xl flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6 text-trust" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Falta de Coordenação
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A pressão abdominal não está sincronizada com o relaxamento do esfíncter. 
                O sistema nervoso ainda está aprendendo.
              </p>
            </div>

            {/* Card 3 - Neural */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Imaturidade Neural
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O Plexo Sacral — centro de comando digestivo nas costas — ainda não responde 
                adequadamente aos estímulos.
              </p>
            </div>
          </div>

          {/* Bottom insight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-card border border-primary/20 rounded-2xl px-8 py-4">
              <p className="text-foreground font-medium">
                💡 <span className="text-primary">Insight:</span> Aquecer a barriga apenas <span className="font-semibold">movimenta</span> gases e cocô, aquecer as costas (plexo sacral) <span className="font-semibold text-primary">expulsa</span> gases e cocô
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CauseSection;
