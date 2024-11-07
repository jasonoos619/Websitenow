import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
          alt="Luxury apartment building"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Perfect Home
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Discover premium properties in your area. We make finding your next home simple and stress-free.
        </p>
        <div className="mt-10 max-w-xl">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Enter location or ZIP code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
              />
              <button className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}