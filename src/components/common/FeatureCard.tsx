import React from 'react';
import { FeatureCardProps } from '../../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="text-blue-800 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;