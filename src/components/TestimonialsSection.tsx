import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Estou no 6º mês e me sinto incrível! Minha médica aprovou e os resultados dos exames estão perfeitos. Recomendo muito!",
      date: "Há 2 semanas"
    },
    {
      name: "Ana Paula Costa",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Depois que comecei a tomar Nutra Vida, minha disposição melhorou muito. Não sinto mais aquele cansaço extremo e minha pele está radiante!",
      date: "Há 1 mês"
    },
    {
      name: "Juliana Mendes",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Produto excelente! Chegou rápido e embalado com cuidado. Tomei durante toda a gravidez e meu bebê nasceu super saudável. Vale cada centavo!",
      date: "Há 3 semanas"
    },
    {
      name: "Carolina Oliveira",
      location: "Curitiba, PR",
      rating: 5,
      text: "Melhor custo-benefício! Procurei muito e este é o mais completo. Tenho menos enjoos e mais energia para o dia a dia.",
      date: "Há 1 semana"
    },
    {
      name: "Fernanda Santos",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Minha obstetra recomendou e não me arrependo. Unhas e cabelo crescendo forte, me sinto saudável e feliz nessa fase tão especial!",
      date: "Há 2 dias"
    },
    {
      name: "Beatriz Almeida",
      location: "Brasília, DF",
      rating: 5,
      text: "Comprei o kit de 6 meses e estou adorando! Não fico sem. Minha imunidade está ótima, não peguei nem um resfriado nesse tempo.",
      date: "Há 4 dias"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            O Que Dizem as <span className="bg-gradient-primary bg-clip-text text-transparent">Mamães</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de gestantes já experimentaram e aprovaram o Nutra Vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                </div>
                <span className="text-xs text-muted-foreground">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-md">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-lg">4.9/5</span>
            <span className="text-muted-foreground">baseado em 2.847 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};
