import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'react-feather';
import { useCart } from '../../../context/CartContext';
import { useTranslation } from '../../../i18n';

const Cart = () => {
  const { items, itemCount, subtotal, tax, total, isCartOpen, closeCart, removeItem, updateQuantity, toggleInstallation } = useCart();
  const navigate = useNavigate();
  const { t, formatPrice } = useTranslation();

  // Close with Escape and lock page scroll while the drawer is open
  useEffect(() => {
    if (!isCartOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && closeCart();
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isCartOpen, closeCart]);

  const browseProducts = () => {
    closeCart();
    navigate('/shop');
  };

  return (
    <>
      {isCartOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeCart} aria-hidden="true" />}

      <aside
        className={`fixed top-0 end-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={t('cart.title')}
        inert={!isCartOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <ShoppingBag className="h-6 w-6 me-2" />
              {t('cart.title')} {itemCount > 0 && `(${itemCount})`}
            </h2>
            <button type="button" onClick={closeCart} className="text-gray-500 hover:text-gray-700" aria-label={t('common.close')}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{t('cart.emptyTitle')}</h3>
                <p className="text-gray-500 mb-6">{t('cart.emptyText')}</p>
                <button
                  type="button"
                  onClick={browseProducts}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
                >
                  {t('cart.browse')}
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => {
                  const name = t(`products.${item.slug}.name`);
                  return (
                    <li key={item.id} className="flex border-b border-gray-200 pb-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image} alt={name} width="96" height="96" loading="lazy" className="h-full w-full object-cover" />
                      </div>

                      <div className="ms-4 flex flex-1 flex-col">
                        <div className="flex justify-between gap-3 text-base font-medium text-gray-900">
                          <h3>{name}</h3>
                          <p className="whitespace-nowrap">{formatPrice(item.lineTotal)}</p>
                        </div>
                        {item.oldPrice && (
                          <p className="mt-1 text-sm text-gray-500 line-through">{formatPrice(item.oldPrice * item.quantity)}</p>
                        )}

                        <div className="flex flex-1 items-end justify-between text-sm mt-2">
                          <div className="flex items-center border rounded-md">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:text-gray-800"
                              aria-label={t('cart.decrease')}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-2 text-gray-900" aria-live="polite">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:text-gray-800"
                              aria-label={t('cart.increase')}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button type="button" onClick={() => removeItem(item.id)} className="font-medium text-red-600 hover:text-red-500">
                            {t('cart.remove')}
                          </button>
                        </div>

                        <div className="mt-2">
                          <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.installationService}
                              onChange={() => toggleInstallation(item.id)}
                              className="h-4 w-4 text-blue-600 rounded"
                            />
                            <span className="ms-2">{t('cart.installation')}</span>
                          </label>
                          {item.installationService && (
                            <div className="mt-1 text-xs text-gray-500">
                              {t('cart.installationCost', { price: formatPrice(item.installationCost) })}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <p>{t('cart.subtotal')}</p>
                <p>{formatPrice(subtotal)}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <p>{t('cart.tax')}</p>
                <p>{formatPrice(tax)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mb-6">
                <p>{t('cart.total')}</p>
                <p>{formatPrice(total)}</p>
              </div>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
              >
                {t('cart.checkout')} <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100" />
              </Link>
              <button
                type="button"
                onClick={browseProducts}
                className="w-full mt-3 text-blue-600 hover:text-blue-800 px-6 py-2 font-medium text-center"
              >
                {t('cart.continueShopping')}
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Cart;
