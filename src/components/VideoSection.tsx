export const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Veja Como É <span className="bg-gradient-primary bg-clip-text text-transparent">Fabricado</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo de fabricação seguro e controlado, garantindo a máxima qualidade em cada cápsula.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/2JD2LabdkCA" 
                title="Fabricação Nutra Vida" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <div className="text-3xl mb-2">🏭</div>
              <h3 className="font-bold mb-2">Produção Certificada</h3>
              <p className="text-sm text-muted-foreground">Fábrica com certificação ANVISA e ISO 9001</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-bold mb-2">Controle de Qualidade</h3>
              <p className="text-sm text-muted-foreground">Testado em laboratório a cada lote</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-md border border-border">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold mb-2">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">Aprovado por médicos e nutricionistas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
