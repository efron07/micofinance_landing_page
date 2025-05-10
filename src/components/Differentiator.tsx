import React from 'react';
import { Shield, Clock, Zap, Headphones, Monitor } from 'lucide-react';

const Differentiator: React.FC = () => {
  const differentiators = [
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: 'Industry-Specific Design',
      description: 'Built specifically for Microfinance Companies with your unique workflows in mind.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-800" />,
      title: 'Time-Saving Automation',
      description: 'Reduce manual work by up to 75% with smart automated processes.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-800" />,
      title: 'All-in-One Solution',
      description: 'No need for multiple systems – everything you need in a single platform.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-800" />,
      title: 'Dedicated Support',
      description: 'Our team understands microfinance and provides specialized assistance.'
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-800" />,
      title: 'Regular Updates',
      description: 'Stay current with evolving regulations and industry best practices.'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SmartFinance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our solution stands out with features tailored specifically for the unique needs of Microfinance Companies.
          </p>
        </div>

        <div className="grid gap-12">
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:px-16">
            {differentiators.slice(3, 5).map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;