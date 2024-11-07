import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Carousel</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/residents" className="text-gray-700 hover:text-amber-600">Residents</Link>
            <Link to="/property-owners" className="text-gray-700 hover:text-amber-600">Property Owners</Link>
            <Link to="/available-rentals" className="text-gray-700 hover:text-amber-600">Available Rentals</Link>
            <Link to="/qa" className="text-gray-700 hover:text-amber-600">Q&A</Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-600">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/owner-portal" className="px-4 py-2 text-amber-600 hover:text-amber-700 border border-amber-600 rounded-lg">
              Owner Portal
            </Link>
            <Link to="/resident-portal" className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
              Resident Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}