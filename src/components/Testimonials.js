import React from 'react';

function Testimonials() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
      <h2 className="text-3xl font-bold text-teal-700 mb-8">Ce spun pacienții noștri</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Ana Maria</h4>
              <p className="text-gray-600">Pacient din 2020</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Dr. Balaci este un profesionist excepțional. Am fost foarte mulțumită de tratamentul meu și de modul în care a gestionat toate procedurile."</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Ion Popescu</h4>
              <p className="text-gray-600">Pacient din 2021</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Cabinetul este modern și curat, iar personalul este foarte prietenos. Recomand cu încredere serviciile Dr. Balaci."</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 