import React from 'react';

function Testimonials() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
      <h2 className="text-3xl font-bold text-teal-700 mb-8">Ce spun pacienții noștri</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-3 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Alexandru Purcarea</h4>
              <p className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            ))}
          </p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Doctorul Balaci ,un profesionist desavarsit,recomand atat pentru adulti cat si pentru copii!"</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-3 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Monica Chis</h4>
              <p className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            ))}
          </p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Personalul este foarte amabil si profesionist, orientat spre pacient, ti se explica fiecare pas in parte.
          Recomand!"</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-3 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Madalina Gridan</h4>
              <p className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            ))}
          </p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Domnul doctor este foarte amabil, lucrează cu grijă și răbdare.
          Recomand cu încredere!"</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-3 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Andrei Brebeanu</h4>
              <p className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            ))}
          </p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Domnul doctor, cât și asistenta acestuia sunt foarte amabili și sunt foarte mulțumit de serviciile oferite de aceștia!"</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 