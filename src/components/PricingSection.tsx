import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import produto1Pote from "@/assets/produto-1-pote.png";
import produto3Potes from "@/assets/produto-3-potes.png";
import produto6Potes from "@/assets/produto-6-potes.png";

export const PricingSection = () => {
  const plans = [
    {
      name: "1 MÊS",
      subtitle: "Experimente",
      image: produto1Pote,
      bottles: 1,
      months: 2,
      priceOriginal: "R$ 197,00",
      priceNow: "R$ 147,00",
      perBottle: "R$ 147,00/pote",
      discount: "25% OFF",
      features: [
        "1 Pote (60 cápsulas)",
        "Tratamento para 2 meses",
        "Fórmula completa",
        "Frete grátis"
      ],
      highlight: false,
      freeShipping: true
    },
    {
      name: "3 MESES",
      subtitle: "Mais Vendido",
      image: produto3Potes,
      bottles: 3,
      months: 6,
      priceOriginal: "R$ 591,00",
      priceNow: "R$ 297,00",
      perBottle: "R$ 99,00/pote",
      discount: "50% OFF",
      bonus: "LEVE 4 PAGUE 3",
      features: [
        "4 Potes (240 cápsulas)",
        "Tratamento para 6 meses",
        "1 pote GRÁTIS",
        "Frete grátis",
        "Melhor custo-benefício"
      ],
      highlight: true,
      freeShipping: true
    },
    {
      name: "6 MESES",
      subtitle: "Tratamento Completo",
      image: produto6Potes,
      bottles: 6,
      months: 12,
      priceOriginal: "R$ 1.182,00",
      priceNow: "R$ 497,00",
      perBottle: "R$ 62,12/pote",
      discount: "58% OFF",
      bonus: "LEVE 8 PAGUE 6",
      features: [
        "8 Potes (480 cápsulas)",
        "Tratamento para 1 ano",
        "2 potes GRÁTIS",
        "Frete grátis",
        "Economia máxima",
        "Garantia estendida"
      ],
      highlight: false,
      freeShipping: true
    }
  ];

  return (
    <section id="ofertas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Promoção <span className="bg-gradient-primary bg-clip-text text-transparent">Imperdível</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Escolha o melhor kit para você e garanta um desconto especial hoje!
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-900 px-6 py-3 rounded-full font-semibold">
            <Zap className="w-5 h-5" />
            <span>Oferta válida apenas por tempo limitado!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlight 
                  ? 'border-primary scale-105 md:scale-110' 
                  : 'border-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  🔥 MAIS VENDIDO
                </div>
              )}

              {plan.discount && (
                <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                  {plan.discount}
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                <div className="mb-6 flex justify-center">
                  <img 
                    src={plan.image} 
                    alt={`Nutra Vida - Kit de ${plan.bottles} ${plan.bottles === 1 ? 'pote' : 'potes'}`}
                    className="w-48 h-auto"
                  />
                </div>

                {plan.bonus && (
                  <div className="mb-4 text-center">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm inline-block">
                      {plan.bonus}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground line-through mb-1">
                    De {plan.priceOriginal}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-1">
                    {plan.priceNow}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ou 12x de <strong>{(parseFloat(plan.priceNow.replace('R$ ', '').replace(',', '.')) / 12).toFixed(2).replace('.', ',')}</strong>
                  </div>
                  <div className="text-xs text-accent font-semibold mt-2">
                    {plan.perBottle}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.highlight ? "cta" : "ctaSecondary"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a 
                    href="https://app.monetizze.com.br/r/AXC25503421" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Comprar Agora
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-5xl">🛡️</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Garantia de 30 Dias</h3>
                <p className="text-muted-foreground">
                  Compre sem risco! Se não ficar satisfeita, devolvemos 100% do seu dinheiro. 
                  Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
