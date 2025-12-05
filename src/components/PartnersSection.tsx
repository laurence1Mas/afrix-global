export default function PartnersSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre "Ils expriment leurs satisfactions" répété (comme dans la maquette) */}
        <h2 className="text-2xl font-bold mb-8 text-center">
          Ils expriment leurs satisfactions
        </h2>
        
        {/* Sous-titre TÉMOIGNAGES */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-6">TÉMOIGNAGES</h3>
          
          {/* Logos/Partners */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* OPTION */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="font-bold text-gray-600">OPTION</span>
              </div>
            </div>
            
            {/* ACA-RDC */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="font-bold text-gray-600">ACA-RDC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}