import React from 'react';

export default function PropertyOwners() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Property Owners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Property Marketing
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Tenant Screening
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Rent Collection
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Maintenance Coordination
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Professional Management
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              24/7 Support
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Competitive Rates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}