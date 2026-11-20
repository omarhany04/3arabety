import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Disc, Filter, Droplet, ChevronLeft, ChevronRight } from 'react-feather';
import ProductCard from '../common/ProductCard';
import { FEATURED_PRODUCT_SETS, getProductById } from '../../data/products';
import { useTranslation } from '../../i18n';

const FEATURED_CATEGORIES = [
  { id: 'batteries', Icon: Battery, bg: 'bg-purple-100 group-hover:bg-purple-200', text: 'text-purple-600' },
  { id: 'brakes', Icon: Disc, bg: 'bg-blue-100 group-hover:bg-blue-200', text: 'text-blue-600' },
  { id: 'filters', Icon: Filter, bg: 'bg-red-100 group-hover:bg-red-200', text: 'text-red-600' },
  { id: 'fluids', Icon: Droplet, bg: 'bg-green-100 group-hover:bg-green-200', text: 'text-green-600' },
];

const productSets = FEATURED_PRODUCT_SETS.map((ids) => ids.map(getProductById).filter(Boolean));

const ShopSection = () => {
  const [activeSet, setActiveSet] = useState(0);
  const { t } = useTranslation();

  const showNext = () => setActiveSet((current) => (current + 1) % productSets.length);
  const showPrevious = () => setActiveSet((current) => (current - 1 + productSets.length) % productSets.length);

  const navButtonClass =
    'p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition duration-300';

  return (
    <section id="shop" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.shop.title')}</h2>
          <p className="text-lg text-gray-600">{t('home.shop.subtitle')}</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {FEATURED_CATEGORIES.map(({ id, Icon, bg, text }) => (
            <Link
              to={`/shop?category=${id}`}
              key={id}
              className="category-card bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-4 text-center">
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mx-auto mb-3 transition duration-300`}>
                  <Icon className={`h-6 w-6 ${text}`} aria-hidden="true" />
                </div>
                <h3 className="font-medium text-gray-900">{t(`categories.${id}`)}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured products carousel */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{t('home.shop.featured')}</h3>
          <div className="flex gap-2">
            <button type="button" onClick={showPrevious} className={navButtonClass} aria-label={t('home.shop.previous')}>
              <ChevronLeft size={20} className="rtl:-scale-x-100" />
            </button>
            <button type="button" onClick={showNext} className={navButtonClass} aria-label={t('home.shop.next')}>
              <ChevronRight size={20} className="rtl:-scale-x-100" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          {productSets.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveSet(index)}
              className={`mx-1 w-2 h-2 rounded-full ${index === activeSet ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={t('home.shop.setLabel', { number: index + 1 })}
              aria-current={index === activeSet}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productSets[activeSet].map((product) => (
            <ProductCard key={product.id} product={product} showBrands={false} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300"
          >
            {t('home.shop.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
