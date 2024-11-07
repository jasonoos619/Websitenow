import React from 'react';

export default function Residents() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">For Residents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resident Services</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Online Rent Payment
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Maintenance Requests
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Community Updates
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resources</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Resident Handbook
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              FAQ
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Emergency Contacts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}