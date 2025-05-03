import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ContactInformation from './components/ContactInformation';
import Testimonials from './components/Testimonials';
import ServicesTable from './components/ServicesTable';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <br/>
        <section id="services" className="bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <WhyChooseUs />
            <ServicesTable />
          </div>
        </section>
        <section id="testimonials" className="bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Testimonials />
          </div>
        </section>
        <section id="contact" className="bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ContactInformation />

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
