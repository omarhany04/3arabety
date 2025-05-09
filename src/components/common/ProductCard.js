import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'react-feather';

const ProductCard = ({ product }) => {
  const [addInstallation, setAddInstallation] = useState(false);
  
  // Destructure product details
  const { id, name, description, rating, reviews, price, oldPrice, image, badge } = product;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {badge && (
          <div className="absolute top-2 right-2">
            <span className={`bg-${badge === 'Sale' ? 'red' : badge === 'New' ? 'green' : 'blue'}-500 text-white text-xs px-2 py-1 rounded-md`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">({reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {oldPrice && (
              <span className="text-gray-400 text-sm line-through">${oldPrice}</span>
            )}
            <span className="text-lg font-bold text-gray-900 ml-1">${price}</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition duration-300">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-3">
          <label className="flex items-center text-sm text-gray-600">
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={addInstallation}
              onChange={() => setAddInstallation(!addInstallation)}
            />
            <span className="ml-2">Add installation service</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;