import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'react-feather';
import { useCart } from '../../../context/CartContext';

const Cart = () => {
  const { 
    items, 
    itemCount, 
    subtotal, 
    tax, 
    total, 
    isCartOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity, 
    toggleInstallation 
  } = useCart();
  
  const navigate = useNavigate();

  // Handle navigation to shop page
  const handleBrowseProducts = () => {
    toggleCart(); // Close the cart
    navigate('/shop'); // Navigate to shop page
  };

  return (
    <>
      {/* Cart overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleCart}
        ></div>
      )}
      
      {/* Cart sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2" /> 
              Your Cart {itemCount > 0 && `(${itemCount})`}
            </h2>
            <button 
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Cart content */}
          <div className="flex-grow overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some items to your cart to continue shopping</p>
                <button 
                  onClick={handleBrowseProducts}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex border-b border-gray-200 pb-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img 
                        src={item.image || '/images/placeholder/100/100'} 
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">EGP {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        {item.oldPrice && (
                          <p className="mt-1 text-sm text-gray-500 line-through">
                            EGP {(item.oldPrice * item.quantity).toFixed(2)}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-600 hover:text-gray-800"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-600 hover:text-gray-800"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button 
                          type="button" 
                          onClick={() => removeItem(item.id)}
                          className="font-medium text-red-600 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                      
                      <div className="mt-2">
                        <label className="flex items-center text-sm text-gray-600">
                          <input 
                            type="checkbox" 
                            checked={item.installationService}
                            onChange={() => toggleInstallation(item.id)}
                            className="form-checkbox h-4 w-4 text-blue-600 rounded"
                          />
                          <span className="ml-2">Add installation service (+20%)</span>
                        </label>
                        {item.installationService && (
                          <div className="mt-1 text-xs text-gray-500">
                            Installation: EGP {(item.price * item.quantity * 0.2).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <p>Subtotal</p>
                <p>EGP {subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <p>Tax (14%)</p>
                <p>EGP {tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mb-6">
                <p>Total</p>
                <p>EGP {total.toFixed(2)}</p>
              </div>
              <Link
                to="/checkout"
                onClick={toggleCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
              >
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button 
                onClick={handleBrowseProducts}
                className="w-full mt-3 text-blue-600 hover:text-blue-800 px-6 py-2 font-medium text-center"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;