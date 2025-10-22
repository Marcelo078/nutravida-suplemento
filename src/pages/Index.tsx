import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VideoSection } from "@/components/VideoSection";
import { CompositionSection } from "@/components/CompositionSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Nutra Vida - Ácido Fólico + Vitaminas para Gestantes",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Suplemento nutricional completo para gestantes. Ácido fólico, vitaminas e minerais essenciais para uma gestação saudável. Fortalece o sistema imunológico e melhora a disposição.",
    "brand": {
      "@type": "Brand",
      "name": "Nutra Vida"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "147.00",
      "highPrice": "497.00",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  return (
    <>
      <Helmet>
        <title>Nutra Vida - Ácido Fólico + Vitaminas para Gestação Perfeita | Oferta Especial</title>
        <meta 
          name="description" 
          content="Nutra Vida: suplemento completo para gestantes com ácido fólico e vitaminas essenciais. Fortalece imunidade, aumenta disposição e cuida da saúde do seu bebê. Garantia 30 dias!" 
        />
        <meta name="keywords" content="nutra vida, ácido fólico, vitaminas para gestantes, suplemento gestação, saúde gestante, vitaminas gravidez" />
        <meta name="author" content="Nutra Vida" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Nutra Vida - Suplemento Completo para Gestantes | Oferta Especial" />
        <meta property="og:description" content="Ácido fólico + vitaminas essenciais para uma gestação saudável. Até 58% OFF + Frete Grátis. Garantia de 30 dias!" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:url" content="https://nutravida.com.br" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nutra Vida - Ácido Fólico + Vitaminas para Gestantes" />
        <meta name="twitter:description" content="Suplemento completo para gestação saudável. Até 58% OFF hoje!" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://nutravida.com.br" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <VideoSection />
        <CompositionSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
