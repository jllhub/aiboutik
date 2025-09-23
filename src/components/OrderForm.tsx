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
      <div className="card text-center">
        <div className="card-body">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold gradient-text mb-2">Merci !</h2>
          <p className="text-gray-600">Vos articles ont été ajoutés au panier avec succès.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <h3 className="font-semibold text-lg gradient-text">Article #{index + 1}</h3>
          </div>
          <div className="card-body space-y-4">
            <div>
              <label htmlFor={`url-${index}`} className="form-label">Lien du produit (URL)</label>
              <input
                type="url"
                id={`url-${index}`}
                value={item.url}
                onChange={(e) => handleItemChange(index, 'url', e.target.value)}
                className="form-input"
                placeholder="https://example.com/product"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor={`quantity-${index}`} className="form-label">Quantité</label>
                <input
                  type="number"
                  id={`quantity-${index}`}
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value, 10) || 1)}
                  className="form-input"
                  min="1"
                  required
                />
              </div>
              <div>
                <label htmlFor={`size-${index}`} className="form-label">Taille (ex: M, 42)</label>
                <input
                  type="text"
                  id={`size-${index}`}
                  value={item.size}
                  onChange={(e) => handleItemChange(index, 'size', e.target.value)}
                  className="form-input"
                  placeholder="M, L, XL..."
                />
              </div>
              <div>
                <label htmlFor={`color-${index}`} className="form-label">Couleur</label>
                <input
                  type="text"
                  id={`color-${index}`}
                  value={item.color}
                  onChange={(e) => handleItemChange(index, 'color', e.target.value)}
                  className="form-input"
                  placeholder="Rouge, Bleu, Noir..."
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button type="button" onClick={handleAddItem} className="btn-outline">
          + Ajouter un autre article
        </button>
        <button type="submit" className="btn-primary">
          Ajouter les articles au panier
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
