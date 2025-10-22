import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O Nutra Vida é seguro para gestantes?",
      answer: "Sim, absolutamente! O Nutra Vida foi desenvolvido especialmente para gestantes, com fórmula aprovada por médicos obstetras e nutricionistas. Todos os ingredientes são naturais e seguem rigorosamente as recomendações da ANVISA e dos órgãos de saúde internacionais."
    },
    {
      question: "Quando devo começar a tomar?",
      answer: "O ideal é começar a suplementação assim que você descobre a gravidez, ou até mesmo no período pré-gestacional se estiver planejando engravidar. O ácido fólico é especialmente importante nas primeiras semanas de gestação para prevenir má formações no tubo neural do bebê."
    },
    {
      question: "Quantas cápsulas devo tomar por dia?",
      answer: "Recomendamos tomar 1 cápsula por dia, preferencialmente junto com uma refeição para melhor absorção dos nutrientes. Cada pote contém 60 cápsulas, o suficiente para 2 meses de uso contínuo."
    },
    {
      question: "Posso tomar durante toda a gestação e amamentação?",
      answer: "Sim! O Nutra Vida é indicado durante toda a gestação e também no período de amamentação. Os nutrientes continuam sendo importantes tanto para você quanto para o bebê após o nascimento."
    },
    {
      question: "Tem alguma contraindicação?",
      answer: "O Nutra Vida é um suplemento natural sem contraindicações conhecidas. No entanto, se você tem alguma condição de saúde específica ou está tomando outros medicamentos, recomendamos consultar seu médico antes de iniciar qualquer suplementação."
    },
    {
      question: "Em quanto tempo vou sentir os resultados?",
      answer: "Muitas mamães relatam mais disposição e energia já nas primeiras 2-3 semanas de uso. No entanto, os benefícios completos, especialmente para o desenvolvimento do bebê, são acumulativos e se potencializam com o uso contínuo durante toda a gestação."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Simples assim: se você não ficar satisfeita com o produto por qualquer motivo, basta nos contatar dentro de 30 dias após a compra e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia."
    },
    {
      question: "O frete é realmente grátis?",
      answer: "Sim! Todos os nossos kits incluem frete grátis para todo o Brasil. Você não paga nada a mais na entrega. O produto chega com segurança e discrição na sua casa em até 12 dias úteis."
    },
    {
      question: "Como faço para comprar?",
      answer: "É muito simples! Basta clicar no botão 'Comprar Agora' do kit que você escolheu, preencher seus dados no checkout seguro e finalizar a compra. Aceitamos cartão de crédito (em até 12x), PIX e boleto bancário."
    },
    {
      question: "O produto é original e certificado?",
      answer: "Sim! O Nutra Vida é fabricado em laboratório certificado pela ANVISA e possui registro na Agência Nacional de Vigilância Sanitária. Além disso, segue todas as normas de Boas Práticas de Fabricação (GMP) e possui certificação ISO 9001."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Perguntas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire todas as suas dúvidas sobre o Nutra Vida
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
