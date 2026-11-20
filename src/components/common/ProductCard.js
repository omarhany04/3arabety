import React, { useEffect, useRef, useState } from 'react';
import { Check, ShoppingCart } from 'react-feather';
import RatingStars from './RatingStars';
import { useCart } from '../../context/CartContext';
import { BADGE_STYLES, CAR_BRANDS } from '../../data/products';
import { useTranslation } from '../../i18n';

const brandName = (id) => CAR_BRANDS.find((brand) => brand.id === id)?.name || id;

/**
 * Product card used on the home page, the shop (grid + list views) and search results.
 * Handles "add to cart" with the optional installation service on its own.
 */
const ProductCard = ({ product, layout = 'grid', showBrands = true }) => {
  const { t, formatPrice, language } = useTranslation();
  const { addItem } = useCart();
  const [withInstallation, setWithInstallation] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const name = t(`products.${product.slug}.name`);
  const description = t(`products.${product.slug}.description`);

  const handleAddToCart = () => {
    addItem(product, 1, withInstallation);
    setJustAdded(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setJustAdded(false), 2500);
  };

  const separator = language === 'ar' ? '، ' : ', ';
  const visibleBrands = layout === 'list' ? product.brands : product.brands.slice(0, 3);
  const hiddenBrands = product.brands.length - visibleBrands.length;
  const brands =
    product.brands.length === 0
      ? t('common.universalFit')
      : [visibleBrands.map(brandName).join(separator), hiddenBrands > 0 ? t('common.moreBrands', { count: hiddenBrands }) : '']
          .filter(Boolean)
          .join(' ');

  const badge = product.badge && (
    <span className={`absolute top-2 end-2 ${BADGE_STYLES[product.badge]} text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm`}>
      {t(`badges.${product.badge}`)}
    </span>
  );

  const image = (
    <img
      src={product.image}
      alt={name}
      width="800"
      height="600"
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover"
    />
  );

  const price = (
    <div className="flex flex-wrap items-baseline gap-x-2">
      {product.oldPrice && (
        <span className="text-gray-400 text-sm line-through">{formatPrice(product.oldPrice)}</span>
      )}
      <span className={`${layout === 'list' ? 'text-2xl' : 'text-lg'} font-bold text-gray-900`}>
        {formatPrice(product.price)}
      </span>
    </div>
  );

  const installation = (
    <label className="flex items-center text-sm text-gray-600 cursor-pointer">
      <input
        type="checkbox"
        className="h-4 w-4 rounded text-blue-600"
        checked={withInstallation}
        onChange={() => setWithInstallation((value) => !value)}
      />
      <span className="ms-2">{layout === 'list' ? t('common.addInstallationShort') : t('common.addInstallation')}</span>
    </label>
  );

  const addedMessage = justAdded && (
    <div className="bg-green-100 text-green-700 px-3 py-2 rounded text-sm flex items-center justify-center" role="status">
      <Check className="h-4 w-4 me-1" /> {t('common.addedToCart')}
    </div>
  );

  if (layout === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative aspect-[4/3] md:aspect-auto md:min-h-[14rem]">
            <div className="absolute inset-0">{image}</div>
            {badge}
          </div>
          <div className="md:w-2/3 p-6 flex flex-col">
            {showBrands && <div className="text-xs text-gray-500 mb-1">{brands}</div>}
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
              <div className="flex items-center">
                <RatingStars rating={product.rating} />
                <span className="text-gray-500 text-sm ms-2">{t('common.reviews', { count: product.reviews })}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="mt-auto flex flex-wrap justify-between items-center gap-4">
              {price}
              <div className="flex flex-col items-end gap-2">
                <div className="flex flex-wrap items-center gap-4">
                  {installation}
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300 flex items-center"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 me-2" /> {t('common.addToCart')}
                  </button>
                </div>
                {addedMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3]">
        {image}
        {badge}
      </div>
      <div className="p-4 flex flex-col flex-1">
        {showBrands && <div className="text-xs text-gray-500 mb-1">{brands}</div>}
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center mb-3 mt-auto">
          <RatingStars rating={product.rating} />
          <span className="text-gray-500 text-sm ms-2">{t('common.reviews', { count: product.reviews })}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          {price}
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition duration-300 flex-shrink-0"
            onClick={handleAddToCart}
            aria-label={t('common.addToCartLabel', { name })}
            title={t('common.addToCart')}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        {addedMessage && <div className="mt-2">{addedMessage}</div>}
        <div className="mt-3">{installation}</div>
      </div>
    </div>
  );
};

export default ProductCard;
