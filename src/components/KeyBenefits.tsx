import React from 'react';
import { CreditCard, Bell, LineChart, DollarSign, Users } from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: 'Loan & Borrower Management',
      description: 'Efficiently track and manage your entire loan portfolio, borrower information, guarantors, and collateral, all in one place.',
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: 'Collections & Reminders',
      description: 'Improve repayment rates with automated SMS reminders and comprehensive loan collection tools that reduce defaults.',
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: 'Insightful Reporting',
      description: 'Make data-driven decisions with key reports including BOT reports, operational insights, and performance analysis.',
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: 'Comprehensive Financial Control',
      description: 'Gain full visibility with integrated cashbooks, ledgers, trial balance, balance sheets, and profit & loss reports.',
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Integrated HR Management',
      description: 'Streamline employee attendance, payroll processing, leave management, and staff loan management in one system.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits for Your Microfinance Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SmartFinance delivers comprehensive functionality designed specifically for the unique needs of Microfinance Companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="transform transition hover:-translate-y-1">
              <FeatureCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;