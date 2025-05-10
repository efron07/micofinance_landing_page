import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Onboarding',
      description: 'Quick setup process with data migration assistance to get you started.'
    },
    {
      number: '02',
      title: 'Managing Loans',
      description: 'Create and manage loans, borrowers, and all related information.'
    },
    {
      number: '03',
      title: 'Collections',
      description: 'Track repayments and automate reminders to improve collection rates.'
    },
    {
      number: '04',
      title: 'Reporting',
      description: 'Generate insightful reports for management and regulatory compliance.'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SmartFinance Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, streamlined process designed to enhance your microfinance operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-white rounded-lg p-6 shadow-md relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-6 bg-blue-800 text-white text-xl font-bold py-2 px-3 rounded">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="text-blue-800 h-8 w-8" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;