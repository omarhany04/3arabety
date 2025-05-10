import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for cart
const initialState = {
  items: [],
  itemCount: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
  isCartOpen: false,
};

// Actions
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const TOGGLE_INSTALLATION = 'TOGGLE_INSTALLATION';
const CLEAR_CART = 'CLEAR_CART';
const TOGGLE_CART = 'TOGGLE_CART';

// Reducer function for cart operations
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { product, quantity = 1, installationService = false } = action.payload;
      
      // Check if product already exists in cart
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Product exists, update quantity
        const updatedItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { 
                ...item, 
                quantity: item.quantity + quantity,
                installationService: installationService || item.installationService 
              } 
            : item
        );
        
        return calculateCartTotals({
          ...state,
          items: updatedItems,
        });
      } else {
        // Product doesn't exist, add new item
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          oldPrice: product.oldPrice,
          image: product.image,
          quantity,
          installationService,
        };
        
        return calculateCartTotals({
          ...state,
          items: [...state.items, newItem],
        });
      }
    }
    
    case REMOVE_ITEM: {
      const updatedItems = state.items.filter(item => item.id !== action.payload.productId);
      return calculateCartTotals({
        ...state,
        items: updatedItems,
      });
    }
    
    case UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: REMOVE_ITEM, payload: { productId } });
      }
      
      const updatedItems = state.items.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      );
      
      return calculateCartTotals({
        ...state,
        items: updatedItems,
      });
    }
    
    case TOGGLE_INSTALLATION: {
      const { productId } = action.payload;
      
      const updatedItems = state.items.map(item => 
        item.id === productId 
          ? { ...item, installationService: !item.installationService } 
          : item
      );
      
      return calculateCartTotals({
        ...state,
        items: updatedItems,
      });
    }
    
    case CLEAR_CART: {
      return {
        ...initialState,
        isCartOpen: state.isCartOpen,
      };
    }
    
    case TOGGLE_CART: {
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    }
    
    default:
      return state;
  }
};

// Helper function to calculate cart totals
const calculateCartTotals = (state) => {
  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
  
  const subtotal = state.items.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    // Add installation service cost (20% of item price) if selected
    const installationCost = item.installationService ? itemPrice * 0.2 : 0;
    return total + itemPrice + installationCost;
  }, 0);
  
  // Calculate tax (14% for Egypt)
  const tax = subtotal * 0.14;
  
  // Calculate total
  const total = subtotal + tax;
  
  return {
    ...state,
    itemCount,
    subtotal,
    tax,
    total,
  };
};

// Create context
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage if available
  const loadInitialState = () => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : initialState;
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return initialState;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, loadInitialState());
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state]);
  
  // Actions
  const addItem = (product, quantity = 1, installationService = false) => {
    dispatch({
      type: ADD_ITEM,
      payload: { product, quantity, installationService },
    });
  };
  
  const removeItem = (productId) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: { productId },
    });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: UPDATE_QUANTITY,
      payload: { productId, quantity },
    });
  };
  
  const toggleInstallation = (productId) => {
    dispatch({
      type: TOGGLE_INSTALLATION,
      payload: { productId },
    });
  };
  
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  
  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        toggleInstallation,
        clearCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;