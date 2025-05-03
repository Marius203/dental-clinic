import React from 'react';

function ServicesTable() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
      <h2 className="text-3xl font-bold text-teal-700 mb-8">Lista prețurilor</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-teal-600 text-black">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Procedura</th>
              <th className="py-3 px-4 text-left font-semibold">Cost</th>
              <th className="py-3 px-4 text-left font-semibold">Durata</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-4 text-left">Evaluare completă și plan de tratament</td>
              <td className="py-4 px-4 text-left">150 RON</td>
              <td className="py-4 px-4 text-left">30 min</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-4 text-left">Curățare profesională și polisare</td>
              <td className="py-4 px-4 text-left">200 RON</td>
              <td className="py-4 px-4 text-left">45 min</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-4 text-left">Tratament cariilor și obturații estetice</td>
              <td className="py-4 px-4 text-left">250-350 RON</td>
              <td className="py-4 px-4 text-left">30-60 min</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-4 text-left">Procedură profesională de albire</td>
              <td className="py-4 px-4 text-left">500 RON</td>
              <td className="py-4 px-4 text-left">60 min</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 px-4 text-left">Proteze mobile și fixe personalizate</td>
              <td className="py-4 px-4 text-left">de la 1000 RON</td>
              <td className="py-4 px-4 text-left">2-3 vizite</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">* Prețurile sunt orientative și pot varia în funcție de complexitatea cazului.</p>
      </div>
    </div>
  );
}

export default ServicesTable; 