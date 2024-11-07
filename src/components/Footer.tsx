import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Building2 className="h-8 w-8 text-amber-500" />
          <span className="ml-2 text-2xl font-bold text-white">Carousel</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Residents</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/resident-portal" className="text-base text-gray-300 hover:text-white">Pay Rent</Link></li>
              <li><Link to="/maintenance" className="text-base text-gray-300 hover:text-white">Maintenance Request</Link></li>
              <li><Link to="/resident-portal" className="text-base text-gray-300 hover:text-white">Resident Portal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Owners</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/owner-portal" className="text-base text-gray-300 hover:text-white">Owner Portal</Link></li>
              <li><Link to="/property-owners" className="text-base text-gray-300 hover:text-white">Management Services</Link></li>
              <li><Link to="/contact" className="text-base text-gray-300 hover:text-white">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-base text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-base text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="https://facebook.com" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-base text-gray-300 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400">&copy; 2024 Carousel Property Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}