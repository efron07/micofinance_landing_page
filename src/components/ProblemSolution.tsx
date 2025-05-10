import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    'Manual, error-prone loan tracking processes',
    'Disorganized borrower and collection management',
    'Challenging financial reporting and compliance',
    'Scattered HR and payroll systems',
    'Limited visibility into business performance',
  ];

  const solutions = [
    'Automated, accurate loan management system',
    'Integrated borrower profiles and collection tools',
    'Comprehensive reporting including required BOT reports',
    'Streamlined HR and payroll processing',
    'Real-time dashboards for complete business oversight',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Microfinance Management <span className="text-blue-800">Reimagined</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SmartFinance transforms how Microfinance Companies operate, turning challenges into opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Common Challenges</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-red-500 mr-2">&#10007;</span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">SmartFinance Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-teal-600 mr-2">&#10003;</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;