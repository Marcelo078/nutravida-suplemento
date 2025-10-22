import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Nutra Vida
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O suplemento mais completo para gestantes. Cuidando de você e do seu bebê 
                com carinho e qualidade.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#beneficios" className="hover:text-primary transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#ofertas" className="hover:text-primary transition-colors">
                    Ofertas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Formas de Pagamento</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Aceitamos todas as principais formas de pagamento:
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded">💳 Cartão</span>
                <span className="bg-muted px-3 py-1 rounded">📱 PIX</span>
                <span className="bg-muted px-3 py-1 rounded">📄 Boleto</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">🔒 Ambiente 100% seguro</p>
                <p className="text-xs text-muted-foreground">📦 Entrega garantida</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © 2025 Nutra Vida. Todos os direitos reservados.
              </p>
              <p className="flex items-center gap-2">
                Feito com <Heart className="w-4 h-4 text-secondary fill-secondary" /> para mamães
              </p>
            </div>
          </div>

          <div className="mt-8 text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            <p className="mb-2">
              <strong>Aviso Legal:</strong> Este produto não é um medicamento. Não deve ser usado para fins de diagnóstico, 
              tratamento ou prevenção de doenças. Consulte sempre seu médico antes de iniciar qualquer suplementação.
            </p>
            <p>
              Os resultados podem variar de pessoa para pessoa. As informações contidas neste site têm caráter informativo 
              e não substituem o aconselhamento e acompanhamento médico.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
