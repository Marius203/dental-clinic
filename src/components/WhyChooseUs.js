import React from 'react';

function WhyChooseUs() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
      <h2 className="text-3xl font-bold text-teal-700 mb-8">Ce oferim?</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-teal-700 text-center mb-3">Experiență de încredere</h3>
          <p className="text-gray-700 text-center">Dr. Balaci are peste 200 de pacienți mulțumiți.</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-teal-700 text-center mb-3">Program flexibil</h3>
          <p className="text-gray-700 text-center">Programări rapide la telefon și program flexibil pentru a se potrivi nevoilor tale.</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-teal-700 text-center mb-3">Prețuri transparente</h3>
          <p className="text-gray-700 text-center">Fără surprize sau costuri ascunse. Vă oferim estimări clare și prețuri accesibile pentru toate serviciile noastre.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs; 