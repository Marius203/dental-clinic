import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PastProcedures from '../components/PastProcedures';

function ProcedurePage() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <div className="pt-16">
        <PastProcedures />
      </div>
      <Footer />
    </div>
  );
}

export default ProcedurePage; 