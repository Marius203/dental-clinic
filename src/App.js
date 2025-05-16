import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProcedurePage from './pages/ProcedurePage';

function App() {
  return (
    <div className="App bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proceduri" element={<ProcedurePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
