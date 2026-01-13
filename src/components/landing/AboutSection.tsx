import { Heart, Star, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Nossa História
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Quem Somos
            </h2>
          </div>

          {/* Content Card */}
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A <span className="font-semibold text-foreground">Acalme Baby</span> nasceu da experiência real de pais 
                que vivenciaram a angústia de ver seus bebês sofrendo com cólicas e disquesia. 
                Entendemos que não existe dor maior do que não conseguir aliviar o desconforto de um filho.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Após extensa pesquisa sobre o sistema nervoso neonatal e os mecanismos de dor em bebês, 
                desenvolvemos a tecnologia <span className="font-semibold text-foreground">Neuro Dual Tech®</span> — 
                a primeira do Brasil a combinar aquecimento frontal e lombar simultaneamente.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nossa missão é simples: proporcionar <span className="font-semibold text-foreground">alívio verdadeiro</span> 
                {" "}para bebês e <span className="font-semibold text-foreground">paz</span> para famílias inteiras.
              </p>
              
              <p className="text-lg leading-relaxed">
                Cada Kit Acalme Baby é desenvolvido com carinho, testado com rigor e 
                entregue com a promessa de fazer a diferença nas primeiras semanas e meses de vida do seu bebê.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-trust-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-trust" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Amor</h3>
                <p className="text-sm text-muted-foreground">
                  Cada produto é feito com o cuidado que daríamos aos nossos próprios filhos
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ciência</h3>
                <p className="text-sm text-muted-foreground">
                  Tecnologia baseada em estudos sobre o sistema nervoso neonatal
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Família</h3>
                <p className="text-sm text-muted-foreground">
                  Entendemos que o bem-estar do bebê é o bem-estar de toda a família
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
