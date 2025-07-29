import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LegalRequirements from './pages/LegalRequirements';
import CustodyTypes from './pages/CustodyTypes';
import ParentingPlans from './pages/ParentingPlans';
import ChildSupport from './pages/ChildSupport';
import Resources from './pages/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/legal-requirements" element={<LegalRequirements />} />
            <Route path="/custody-types" element={<CustodyTypes />} />
            <Route path="/parenting-plans" element={<ParentingPlans />} />
            <Route path="/child-support" element={<ChildSupport />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;