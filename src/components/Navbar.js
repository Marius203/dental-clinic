import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-teal-600">Dr. Bogdan Balaci</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Despre noi</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Servicii</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Recenzii</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={() => scrollToSection('home')} className="block text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">Despre noi</button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">Servicii</button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">Recenzii</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 