import { Heart, Shield, Sparkles, Baby, Zap, Leaf } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Sistema Imunológico Forte",
      description: "Protege você e seu bebê contra doenças, fortalecendo suas defesas naturais durante toda a gestação."
    },
    {
      icon: Zap,
      title: "Mais Energia e Disposição",
      description: "Acabe com o cansaço! Vitaminas essenciais que dão energia para aproveitar cada momento da gravidez."
    },
    {
      icon: Heart,
      title: "Saúde Cardiovascular",
      description: "O ácido fólico ajuda na formação de células sanguíneas saudáveis e previne problemas cardíacos."
    },
    {
      icon: Baby,
      title: "Desenvolvimento do Bebê",
      description: "Fundamental para o desenvolvimento neural do bebê, reduzindo riscos de má formação."
    },
    {
      icon: Sparkles,
      title: "Pele, Cabelo e Unhas",
      description: "Nutrição completa que reflete em uma aparência radiante durante a gestação."
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Fórmula natural, sem contraindicações, desenvolvida especialmente para gestantes."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Por Que Escolher o <span className="bg-gradient-primary bg-clip-text text-transparent">Nutra Vida</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma fórmula completa que reúne tudo que você e seu bebê precisam em um único suplemento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
