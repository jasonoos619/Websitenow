import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatbotProvider } from './components/ChatbotProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Residents from './pages/Residents';
import PropertyOwners from './pages/PropertyOwners';
import AvailableRentals from './pages/AvailableRentals';
import Contact from './pages/Contact';
import QA from './pages/QA';

export function App() {
  return (
    <Router>
      <ChatbotProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/residents" element={<Residents />} />
              <Route path="/property-owners" element={<PropertyOwners />} />
              <Route path="/available-rentals" element={<AvailableRentals />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qa" element={<QA />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ChatbotProvider>
    </Router>
  );
}