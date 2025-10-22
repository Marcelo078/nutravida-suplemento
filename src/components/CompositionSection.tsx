export const CompositionSection = () => {
  const ingredients = [
    { name: "Ácido Fólico", amount: "600 mcg", benefit: "Previne má formação neural do bebê" },
    { name: "Vitamina B12", amount: "2.6 mcg", benefit: "Essencial para formação de células" },
    { name: "Vitamina B6", amount: "1.9 mg", benefit: "Reduz enjoos e náuseas" },
    { name: "Ferro", amount: "27 mg", benefit: "Previne anemia gestacional" },
    { name: "Zinco", amount: "11 mg", benefit: "Fortalece o sistema imunológico" },
    { name: "Vitamina D", amount: "15 mcg", benefit: "Absorção de cálcio e saúde óssea" }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Composição que <span className="bg-gradient-primary bg-clip-text text-transparent">Aumenta a Fertilidade</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada cápsula contém a dose ideal dos nutrientes mais importantes para sua gestação saudável.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-background/50 rounded-xl hover:bg-background transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {ingredient.amount.split(' ')[0]}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{ingredient.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{ingredient.amount} por cápsula</p>
                    <p className="text-sm text-foreground/80">{ingredient.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-xl border-2 border-primary/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💊</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Modo de Uso Recomendado</h4>
                  <p className="text-muted-foreground">
                    Tome <strong>1 cápsula por dia</strong>, preferencialmente junto com uma refeição. 
                    Cada pote contém <strong>60 cápsulas</strong>, suficiente para 2 meses de uso contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
