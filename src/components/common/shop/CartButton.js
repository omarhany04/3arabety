import React from 'react';
import { ShoppingCart } from 'react-feather';
import { useCart } from '../../../context/CartContext';

const CartButton = () => {
  const { toggleCart, itemCount } = useCart();

  return (
    <button 
      onClick={toggleCart} 
      className="text-gray-600 hover:text-blue-600 relative"
      aria-label="Open cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;