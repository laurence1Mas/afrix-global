import TestimonialsSection from "../components/TestimonialsSection";
import PartnersSection from "../components/PartnersSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contenu principal de la page */}
      <main>
        {/* La section de témoignages (3 personnes) */}
        <TestimonialsSection />
        
        {/* La section des partenaires/témoignages */}
        <PartnersSection />
      </main>
    </div>
  );
}