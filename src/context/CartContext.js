import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { getProductById, INSTALLATION_RATE } from '../data/products';

/**
 * The cart only stores product ids, quantities and the installation flag.
 * Names, prices and images are always read from the product catalogue, so the
 * cart follows the selected language and never keeps stale data or image URLs.
 */

const STORAGE_KEY = '3arabety.cart.v2';
const LEGACY_STORAGE_KEY = 'cart';
const TAX_RATE = 0.14; // Egyptian VAT

const loadItems = () => {
  try {
    window.localStorage.removeItem(LEGACY_STORAGE_KEY); // old format stored external image URLs
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(stored)) return [];
    return stored
      .filter((item) => getProductById(item.id) && item.quantity > 0)
      .map(({ id, quantity, installationService }) => ({ id, quantity, installationService: Boolean(installationService) }));
  } catch {
    return [];
  }
};

const itemsReducer = (items, action) => {
  switch (action.type) {
    case 'add': {
      const { id, quantity, installationService } = action;
      const existing = items.find((item) => item.id === id);
      if (existing) {
        return items.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity, installationService: installationService || item.installationService }
            : item
        );
      }
      return [...items, { id, quantity, installationService }];
    }
    case 'remove':
      return items.filter((item) => item.id !== action.id);
    case 'quantity':
      return action.quantity <= 0
        ? items.filter((item) => item.id !== action.id)
        : items.map((item) => (item.id === action.id ? { ...item, quantity: action.quantity } : item));
    case 'installation':
      return items.map((item) =>
        item.id === action.id ? { ...item, installationService: !item.installationService } : item
      );
    case 'clear':
      return [];
    default:
      return items;
  }
};

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [storedItems, dispatch] = useReducer(itemsReducer, undefined, loadItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedItems));
    } catch {
      /* storage unavailable – the cart still works for this visit */
    }
  }, [storedItems]);

  const addItem = useCallback((product, quantity = 1, installationService = false) => {
    dispatch({ type: 'add', id: product.id, quantity, installationService });
  }, []);
  const removeItem = useCallback((id) => dispatch({ type: 'remove', id }), []);
  const updateQuantity = useCallback((id, quantity) => dispatch({ type: 'quantity', id, quantity }), []);
  const toggleInstallation = useCallback((id) => dispatch({ type: 'installation', id }), []);
  const clearCart = useCallback(() => dispatch({ type: 'clear' }), []);
  const toggleCart = useCallback(() => setIsCartOpen((open) => !open), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const value = useMemo(() => {
    const items = storedItems
      .map((item) => {
        const product = getProductById(item.id);
        if (!product) return null;
        const lineTotal = product.price * item.quantity;
        const installationCost = item.installationService ? lineTotal * INSTALLATION_RATE : 0;
        return { ...product, ...item, lineTotal, installationCost };
      })
      .filter(Boolean);

    const itemCount = items.reduce((count, item) => count + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.lineTotal + item.installationCost, 0);
    const tax = subtotal * TAX_RATE;

    return {
      items,
      itemCount,
      subtotal,
      tax,
      total: subtotal + tax,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      toggleInstallation,
      clearCart,
      toggleCart,
      closeCart,
    };
  }, [storedItems, isCartOpen, addItem, removeItem, updateQuantity, toggleInstallation, clearCart, toggleCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
