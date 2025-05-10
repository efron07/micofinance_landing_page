import React from 'react';
import Button from './common/Button'; // Assuming the Button component path

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: 'TZS 1,500,000 /=',
      frequency: 'Per Year',
      features: [
        'Web-Based System (Accessible anywhere)',
        'Multiple Branch Support',
        'Unlimited Users',
        'Initial Training Only',
        'Hosting and Security Services',
        'SMS Service for Customers',
      ],
      buttonText: 'Contact Us',
      buttonVariant: 'outline', // Or another suitable variant
    },
    {
      name: 'Standard Plan',
      price: 'TZS 2,000,000 /=',
      frequency: 'Per Year',
      features: [
        'Includes all Basic Plan features',
        'Full Support (Training & Customization)',
        'Mobile Money Integration',
        'Full Accounting Reports',
        'BOT Reports',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'secondary', // Or another suitable variant
      isFeatured: true, // Optional: Mark this plan as featured for different styling
    },
    {
      name: 'Premium Plan',
      price: 'TZS 3,000,000 /=',
      frequency: 'Per Year',
      features: [
        'Includes all Standard Plan features',
        'Dedicated Mobile App',
        // Note: All other standard plan features are inherited.
        // You can choose to list them all out or just list the additions as done here.
        // Listing additions keeps the card shorter, inheriting simplifies understanding.
        // For clarity, explicitly listing key inherited features might be good.
        // Example: 'Full Accounting Reports & BOT Reports', 'Full Support', 'Mobile Money Integration' etc.
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline', // Or another suitable variant
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Simple & Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the plan that best fits your Microfinance Company's needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col border-t-4 ${
                plan.isFeatured ? 'border-blue-600 transform scale-105' : 'border-gray-300'
              } transition-transform duration-300`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${plan.isFeatured ? 'text-blue-600' : 'text-gray-800'}`}>
                {plan.name}
              </h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">
                {plan.price}
              </div>
              <div className="text-gray-500 mb-8">{plan.frequency}</div>

              <ul className="text-left text-gray-600 space-y-3 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {/* Simple checkmark icon */}
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                 {/* Use your Button component with the specified variant */}
                 <Button variant={plan.buttonVariant} size="lg" className="w-full">
                    {plan.buttonText}
                 </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;