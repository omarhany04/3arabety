import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'react-feather';

const PricingCard = ({ 
  plan, 
  price, 
  description, 
  features, 
  nonFeatures = [], 
  isPopular = false, 
  duration = null,
  buttonText = "Book Now",
  buttonLink = "/contact"
}) => {
  return (
    <div className={`pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ${
      isPopular 
        ? 'shadow-lg transform scale-105 border-2 border-blue-600' 
        : 'border border-gray-200'
    }`}>
      <div className={`p-6 text-center border-b border-gray-200 ${
        isPopular 
          ? 'bg-blue-600 text-white' 
          : 'bg-blue-50'
      }`}>
        <h4 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'} mb-2`}>
          {plan}
        </h4>
        <div className={`text-3xl font-bold ${isPopular ? 'text-white' : 'text-blue-600'} mb-2`}>
          ${price}
        </div>
        <p className={`text-sm ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
          {nonFeatures.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <X className="h-4 w-4 text-red-400 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {duration && (
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500">Duration: {duration}</span>
          </div>
        )}
        <Link 
          to={buttonLink} 
          className={`block w-full ${
            isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;