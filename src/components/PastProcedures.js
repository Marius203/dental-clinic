import React from 'react';

function PastProcedures() {
  const procedures = [
    {
      id: 1,
      title: "Tratament estetic complet",
      description: "Pacient care a beneficiat de un tratament estetic complet, incluzând fațete dentare și albire profesională. Rezultatul a fost un zâmbet complet transformat, mai alb și mai aliniat.",
      beforeImage: "images/before1.jpg", // Placeholder - you'll replace with actual images
      afterImage: "images/after1.jpg", // Placeholder - you'll replace with actual images
    },
    {
      id: 2,
      title: "Reabilitare orală complexă",
      description: "Pacientul a necesitat o reabilitare orală complexă, incluzând coroane și implanturi dentare pentru a restabili funcționalitatea și estetica. Rezultatul final a oferit un zâmbet natural și funcțional.",
      beforeImage: "images/before2.jpg", // Placeholder - you'll replace with actual images
      afterImage: "images/after2.jpg", // Placeholder - you'll replace with actual images
    },
    {
      id: 3,
      title: "Corecție cu aparat dentar",
      description: "Tratament ortodontic pentru alinierea dinților și corectarea ocluziei. Durata tratamentului a fost de 18 luni, cu rezultate excelente și un zâmbet perfect aliniat.",
      beforeImage: "images/before3.jpg", // Placeholder - you'll replace with actual images
      afterImage: "images/after3.jpg", // Placeholder - you'll replace with actual images
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Proceduri anterioare</h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Vedeți transformările realizate în cabinetul nostru. Fiecare pacient beneficiază de un plan de tratament personalizat pentru rezultate optime.
        </p>
        
        <div className="space-y-16">
          {procedures.map((procedure) => (
            <div key={procedure.id} className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-teal-700 mb-4">{procedure.title}</h2>
                <p className="text-gray-700 mb-6">{procedure.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 p-6 md:p-8 bg-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Înainte</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Imagine înainte (placeholder)
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">După</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Imagine după (placeholder)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastProcedures; 