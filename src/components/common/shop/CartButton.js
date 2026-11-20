import React from 'react';
import { ShoppingCart } from 'react-feather';
import { useCart } from '../../../context/CartContext';
import { useTranslation } from '../../../i18n';

const CartButton = () => {
  const { toggleCart, itemCount } = useCart();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleCart}
      className="p-2 text-gray-600 hover:text-blue-600 relative rounded-full hover:bg-gray-100 transition duration-300"
      aria-label={t('nav.openCart')}
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -end-1 bg-blue-600 text-white text-xs rounded-full h-5 min-w-[1.25rem] px-1 flex items-center justify-center">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
