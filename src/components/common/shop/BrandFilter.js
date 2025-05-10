// src/components/shop/BrandFilter.js
import React from 'react';
import { ChevronDown, ChevronUp, Check } from 'react-feather';

const BrandFilter = ({ selectedBrands, toggleBrand, allBrands }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Show only 6 brands initially, expand to show all
  const visibleBrands = isExpanded ? allBrands : allBrands.slice(0, 6);

  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Car Brands</h3>
      <div className="space-y-2">
        {visibleBrands.map((brand) => (
          <label key={brand.id} className="flex items-center cursor-pointer py-1 px-2 rounded hover:bg-gray-100">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 rounded"
              checked={selectedBrands.includes(brand.id)}
              onChange={() => toggleBrand(brand.id)}
            />
            <span className="ml-2 flex-1 text-gray-700">{brand.name}</span>
            <span className="text-gray-500 text-xs">{brand.count}</span>
          </label>
        ))}
      </div>
      
      {allBrands.length > 6 && (
        <button
          className="mt-3 text-blue-600 hover:text-blue-800 text-sm flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" /> Show All ({allBrands.length})
            </>
          )}
        </button>
      )}
      
      {selectedBrands.length > 0 && (
        <button
          className="mt-3 text-gray-600 hover:text-gray-800 text-sm flex items-center"
          onClick={() => selectedBrands.forEach(brand => toggleBrand(brand))}
        >
          <Check className="h-4 w-4 mr-1" /> Clear Selection
        </button>
      )}
    </div>
  );
};

export default BrandFilter;