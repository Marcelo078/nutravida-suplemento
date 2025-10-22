import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nutravida.png";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Nutra Vida
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-foreground/90">
                Ácido Fólico + Vitaminas para sua Gestação Perfeita
              </h2>
              <p className="text-lg lg:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                O suplemento mais completo para gestantes. Fortaleça seu sistema imunológico, 
                melhore sua disposição e cuide da sua saúde e do seu bebê de forma natural.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="cta" 
                  size="xl"
                  onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  👉 Ver Ofertas Especiais
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>60 cápsulas de 500mg</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Fórmula natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>

            {/* Right side - Product image */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Nutra Vida - Suplemento de Ácido Fólico e Vitaminas para Gestantes" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
