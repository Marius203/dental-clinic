import React from 'react';

function Hero() {

  return (
    <section id="home" className="relative h-screen bg-gray-100 flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
        opacity: '0.4'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Clinica Terapia Zâmbetului
          </h1>
          <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-4"> Strada Al. I. Cuza 26, Târgu Jiu</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Grijă și atenție pentru toată familia.
          </p>
          <a 
            href="tel:+40741234567" 
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-[#0e7490] rounded-lg hover:bg-[#155e75] transition duration-300 shadow-xl border-2 border-black hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Programează-te acum
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero; 