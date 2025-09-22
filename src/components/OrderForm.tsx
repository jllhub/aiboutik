'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

type OrderItem = {
  url: string;
  quantity: number;
  size: string;
  color: string;
};

const OrderForm = ({ platform }: { platform: string }) => {
  const { addCustomItemToCart } = useCart();
  const [items, setItems] = useState<OrderItem[]>([{ url: '', quantity: 1, size: '', color: '' }]);
  const [submitted, setSubmitted] = useState(false);

  const handleAddItem = () => {
    setItems([...items, { url: '', quantity: 1, size: '', color: '' }]);
  };

  const handleItemChange = (index: number, field: keyof OrderItem, value: string | number) => {
    const newItems = [...items];
    (newItems[index] as any)[field] = value;
    setItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    items.forEach(item => {
      addCustomItemToCart({ ...item, platform });
    });
    setItems([{ url: '', quantity: 1, size: '', color: '' }]); // Reset form
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800">Merci !</h2>
        <p className="text-green-700 mt-2">Vos articles ont été ajoutés au panier avec succès.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg space-y-4 bg-gray-50">
          <h3 className="font-semibold text-lg">Article #{index + 1}</h3>
          <div>
            <label htmlFor={`url-${index}`} className="block text-sm font-medium text-gray-700">Lien du produit (URL)</label>
            <input
              type="url"
              id={`url-${index}`}
              value={item.url}
              onChange={(e) => handleItemChange(index, 'url', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor={`quantity-${index}`} className="block text-sm font-medium text-gray-700">Quantité</label>
              <input
                type="number"
                id={`quantity-${index}`}
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value, 10) || 1)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor={`size-${index}`} className="block text-sm font-medium text-gray-700">Taille (ex: M, 42)</label>
              <input
                type="text"
                id={`size-${index}`}
                value={item.size}
                onChange={(e) => handleItemChange(index, 'size', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor={`color-${index}`} className="block text-sm font-medium text-gray-700">Couleur</label>
              <input
                type="text"
                id={`color-${index}`}
                value={item.color}
                onChange={(e) => handleItemChange(index, 'color', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center">
        <button type="button" onClick={handleAddItem} className="text-blue-600 hover:text-blue-800 font-medium">
          + Ajouter un autre article
        </button>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Ajouter les articles au panier
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
