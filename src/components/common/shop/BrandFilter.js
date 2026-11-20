import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'react-feather';
import { useTranslation } from '../../../i18n';

const INITIAL_VISIBLE = 8;

const BrandFilter = ({ selectedBrands, toggleBrand, clearBrands, allBrands }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const visibleBrands = isExpanded ? allBrands : allBrands.slice(0, INITIAL_VISIBLE);

  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.brands')}</h3>
      <div className="space-y-2">
        {visibleBrands.map((brand) => (
          <label key={brand.id} className="flex items-center cursor-pointer py-1 px-2 rounded hover:bg-gray-100">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={selectedBrands.includes(brand.id)}
              onChange={() => toggleBrand(brand.id)}
            />
            <span className="ms-2 flex-1 text-gray-700">{brand.name}</span>
            <span className="text-gray-500 text-xs">{brand.count}</span>
          </label>
        ))}
      </div>

      {allBrands.length > INITIAL_VISIBLE && (
        <button
          type="button"
          className="mt-3 text-blue-600 hover:text-blue-800 text-sm flex items-center"
          onClick={() => setIsExpanded((value) => !value)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 me-1" /> {t('common.showLess')}
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 me-1" /> {t('common.showAll', { count: allBrands.length })}
            </>
          )}
        </button>
      )}

      {selectedBrands.length > 0 && (
        <button
          type="button"
          className="mt-3 text-gray-600 hover:text-gray-800 text-sm flex items-center"
          onClick={clearBrands}
        >
          <X className="h-4 w-4 me-1" /> {t('common.clearSelection')}
        </button>
      )}
    </div>
  );
};

export default BrandFilter;
