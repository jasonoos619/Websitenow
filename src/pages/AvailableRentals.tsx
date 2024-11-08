import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Suxury Downtown Apartment',
    price: '$2,500/month',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Modern Suburban Home',
    price: '$3,200/month',
    beds: 3,
    baths: 2.5,
    sqft: '2,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Cozy Studio Apartment',
    price: '$1,800/month',
    beds: 1,
    baths: 1,
    sqft: '650',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function AvailableRentals() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Available Rentals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h2>
              <p className="text-2xl font-bold text-amber-600 mb-4">{property.price}</p>
              <div className="flex justify-between text-gray-600">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
                <span>{property.sqft} sq.ft</span>
              </div>
              <button className="mt-4 w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700">
                Schedule Viewing
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}