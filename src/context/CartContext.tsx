'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import type { Product } from '@/lib/products';

// Types for cart items
export type StandardCartItem = {
  type: 'standard';
  product: Product;
  quantity: number;
};

export type CustomOrderItem = {
  type: 'custom';
  id: string; // Unique ID for the cart item, e.g., timestamp
  platform: string;
  url: string;
  quantity: number;
  size?: string;
  color?: string;
  name: string;
  price: 'TBD'; // Price To Be Determined
};

export type CartItem = StandardCartItem | CustomOrderItem;

// Context type definition
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  addCustomItemToCart: (item: Omit<CustomOrderItem, 'id' | 'type' | 'price' | 'name'>) => void;
  removeFromCart: (itemId: number | string) => void;
  updateQuantity: (itemId: number | string, quantity: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.type === 'standard' && item.product.id === product.id) as StandardCartItem | undefined;
      if (existingItem) {
        return prevItems.map(item =>
          item.type === 'standard' && item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: StandardCartItem = { type: 'standard', product, quantity };
        return [...prevItems, newItem];
      }
    });
  };

  const addCustomItemToCart = (item: Omit<CustomOrderItem, 'id' | 'type' | 'price' | 'name'>) => {
    const newItem: CustomOrderItem = {
      ...item,
      id: `custom-${Date.now()}`,
      type: 'custom',
      price: 'TBD',
      name: `Article de ${item.platform}`
    };
    setCartItems(prevItems => [...prevItems, newItem]);
  };

  const removeFromCart = (itemId: number | string) => {
    setCartItems(prevItems => prevItems.filter(item => (item.type === 'standard' ? item.product.id : item.id) !== itemId));
  };

  const updateQuantity = (itemId: number | string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item => {
          const currentId = item.type === 'standard' ? item.product.id : item.id;
          if (currentId === itemId) {
            return { ...item, quantity };
          }
          return item;
        })
      );
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.type === 'standard') {
        return total + item.product.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, addCustomItemToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
