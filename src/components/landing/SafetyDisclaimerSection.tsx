import { AlertTriangle, Shield, Stethoscope } from "lucide-react";

const SafetyDisclaimerSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-6 lg:p-8 border-2 border-primary/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  Aviso Importante sobre Segurança
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Este dispositivo não substitui avaliação médica.</strong> Sempre consulte seu pediatra antes de usar qualquer método de alívio para cólicas ou desconforto do bebê.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Acalme Baby®</strong> atua como <strong className="text-foreground">cuidado complementar</strong> e não deve ser usado como substituto para diagnóstico ou tratamento médico profissional. Em caso de dúvidas sobre a saúde do seu bebê, procure imediatamente um profissional de saúde qualificado.
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Se o bebê apresentar febre, vômitos persistentes, dificuldade para respirar, ou qualquer outro sintoma preocupante, interrompa o uso e busque atendimento médico imediatamente.
                    </span>
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

export default SafetyDisclaimerSection;
