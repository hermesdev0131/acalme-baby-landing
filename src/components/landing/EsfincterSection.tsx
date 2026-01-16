import { AlertCircle, Heart, ArrowRight } from "lucide-react";

const EsfincterSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-destructive/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-3xl p-4 shadow-2xl border border-border overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/img/baby-colic-crying.jpg"
                    alt="Bebê chorando de cólica, se contorcendo de dor"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      // Fallback image
                      e.currentTarget.src = "/img/baby-side.jpg";
                    }}
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-xl shadow-lg">
                    <p className="font-semibold text-sm">Cólica Intensa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                  Entenda o Problema
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
                  O que é o Esfíncter e por que ele é a chave do alívio?
                </h2>
              </div>

              {/* Main Info Box */}
              <div className="bg-card rounded-3xl p-6 lg:p-8 border-2 border-primary/20 shadow-xl mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3 text-lg">
                      O esfíncter anal é a "portinha" que controla a saída do cocô e dos gases
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Para o bebê fazer cocô, essa portinha precisa relaxar. Mas na disquesia, por causa da dor, 
                      o bebê não sabe ainda que precisa relaxar para o cocô sair e <span className="font-semibold text-foreground">trava o esfíncter</span>, 
                      prendendo o cocô no intestino.
                    </p>
                  </div>
                </div>

                {/* Problem */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive font-bold">×</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">O problema do aquecimento só na barriga:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Aquecer apenas a barriga <span className="font-semibold text-foreground">empurra o cocô para fora</span>, 
                        mas se a "portinha" (esfíncter) lá atrás estiver fechada, o bebê sente ainda mais dor pela pressão. 
                        Faz força e não sai.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">A solução Acalme Baby®:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A Acalme Baby® resolve isso <span className="font-semibold text-primary">aquecendo o Plexo Sacral nas costas</span>, 
                        que envia o sinal nervoso para o esfíncter abrir, liberando o caminho e 
                        <span className="font-semibold text-primary"> ensinando o bebê a fazer cocô sem sofrimento</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="flex items-center gap-3 bg-trust-light rounded-xl p-4 border border-primary/20">
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Tratamento completo 360°:</span> barriga + costas = alívio real
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EsfincterSection;
