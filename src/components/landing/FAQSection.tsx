import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A partir de qual idade posso usar?",
    answer: "O Kit Acalme Baby pode ser usado a partir do nascimento. O dispositivo é ajustável e se adapta ao tamanho do bebê conforme ele cresce.",
  },
  {
    question: "Como aquecer a bolsa de ervas?",
    answer: "Basta aquecer no micro-ondas por 20-30 segundos. Sempre teste a temperatura no seu pulso antes de colocar no bebê para garantir que está morna e confortável.",
  },
  {
    question: "Posso usar a compressa gelada?",
    answer: "Sim! A compressa em gel pode ser usada fria para alívio pós-vacina e pequenas inflamações. Basta deixar no freezer por pelo menos 2 horas antes do uso.",
  },
  {
    question: "Os materiais são seguros?",
    answer: "Absolutamente. Todos os materiais são hipoalergênicos, atóxicos e testados para uso em bebês. O dispositivo é feito de tecido macio e respirável.",
  },
  {
    question: "O que vem no kit?",
    answer: (
      <div className="space-y-3">
        <p className="mb-3">O Kit Acalme Baby é um sistema completo que inclui:</p>
        <ul className="space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Dispositivo Híbrido</strong> com aquecimento duplo (barriga + costas) - Uma cinta dupla</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Bolsa de Ervas aromáticas</strong> - Duas bolsas de semente e ervas (camomila, erva-doce e anis estrelado)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Compressa em Gel</strong> para uso frio - Suporte para compressa em gel + Dois gel térmico</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Mala de mão</strong> para armazenamento e transporte</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Enviamos em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega varia de acordo com a região, geralmente entre 5 a 12 dias úteis.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa saber antes de comprar
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
