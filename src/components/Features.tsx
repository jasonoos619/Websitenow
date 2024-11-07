import React from 'react';
import { Home, Users, ClipboardCheck, HeartHandshake } from 'lucide-react';

const features = [
  {
    name: 'Property Management',
    description: 'Professional management services for property owners and investors.',
    icon: Home,
  },
  {
    name: 'Tenant Screening',
    description: 'Comprehensive screening process to find quality tenants.',
    icon: Users,
  },
  {
    name: 'Maintenance',
    description: '24/7 maintenance support and regular property inspections.',
    icon: ClipboardCheck,
  },
  {
    name: 'Leasing Services',
    description: 'Full-service leasing and renewal process management.',
    icon: HeartHandshake,
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Complete Property Management Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage your properties efficiently
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 text-center">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}