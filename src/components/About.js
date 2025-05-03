import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Despre Cabinetul Nostru</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-lg text-gray-700 mb-6">
              La Cabinetul Dental Terapia Zâmbetului, credem că fiecare pacient merită să beneficieze de îngrijire dentară de calitate într-un mediu plăcut și relaxant. Combinăm tehnologia modernă cu o abordare personalizată pentru a oferi cea mai bună experiență posibilă.
            </p>
            
            <h3 className="text-xl font-semibold text-teal-600 mb-4">De ce să ne alegi?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-gray-800">Echipament Modern:</strong> Tehnologie de ultimă generație pentru tratamente precise.</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-gray-800">Pentru Toată Familia:</strong> Servicii complete pentru pacienți de toate vârstele.</span>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-gray-800">Mediu Confortabil:</strong> Spațiu modern și relaxant pentru o experiență plăcută.</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="Echipa noastră" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 