import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const ServiceCard = ({ service }) => {
  const { icon, title, description, color, link } = service;
  
  const getColorClass = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100';
      case 'red':
        return 'bg-red-100';
      case 'green':
        return 'bg-green-100';
      case 'purple':
        return 'bg-purple-100';
      case 'yellow':
        return 'bg-yellow-100';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg ${getColorClass(color)} flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <Link to={link} className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition duration-300">
          Learn More <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;