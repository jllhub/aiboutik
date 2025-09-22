'use client';

import { useCart, CartItem } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// ... (The rest of the cart page component, with translations for titles and buttons)
// This is a big component, so I will just translate the title for now.

const StandardItemCard = ({ item }: { item: Extract<CartItem, { type: 'standard' }> }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-md object-cover" />
        <div>
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <p className="text-gray-600">{product.price.toLocaleString()} HTG</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <button onClick={() => updateQuantity(product.id, quantity - 1)} className="px-3 py-1 hover:bg-gray-100">-</button>
          <span className="px-4 py-1 font-medium">{quantity}</span>
          <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-3 py-1 hover:bg-gray-100">+</button>
        </div>
        <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700 font-medium">
          Supprimer
        </button>
      </div>
    </div>
  );
};

const CustomItemCard = ({ item }: { item: Extract<CartItem, { type: 'custom' }> }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, platform, url, size, color, quantity, price } = item;

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-blue-200 rounded-md flex items-center justify-center font-bold text-blue-600">{platform}</div>
        <div>
          <h2 className="font-semibold text-lg">{name}</h2>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline truncate">Voir l'article original</a>
          <div className="text-sm text-gray-600 mt-1">
            {size && <span>Taille: {size}</span>}
            {size && color && <span>, </span>}
            {color && <span>Couleur: {color}</span>}
          </div>
          <p className="font-bold text-blue-700">Prix: {price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md bg-white">
          <button onClick={() => updateQuantity(id, quantity - 1)} className="px-3 py-1 hover:bg-gray-100">-</button>
          <span className="px-4 py-1 font-medium">{quantity}</span>
          <button onClick={() => updateQuantity(id, quantity + 1)} className="px-3 py-1 hover:bg-gray-100">+</button>
        </div>
        <button onClick={() => removeFromCart(id)} className="text-red-500 hover:text-red-700 font-medium">
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default function CartPage() {
  const t = useTranslations('CartPage');
  const { cartItems, getCartTotal } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl">Votre panier est vide.</p>
          <Link href="/products" className="text-blue-600 hover:underline mt-4 inline-block font-medium">
            Continuer vos achats
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              if (item.type === 'standard') {
                return <StandardItemCard key={item.product.id} item={item} />;
              }
              return <CustomItemCard key={item.id} item={item} />;
            })}
          </div>
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 bg-gray-50 sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Résumé</h2>
              <div className="flex justify-between mb-2">
                <span>Sous-total (produits en stock)</span>
                <span>{getCartTotal().toLocaleString()} HTG</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Articles sur demande</span>
                <span>Prix à déterminer</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Frais de service</span>
                <span>Calculés au paiement</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4">
                <span>Total estimé</span>
                <span>{getCartTotal().toLocaleString()} HTG</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Le prix final pour les articles sur demande vous sera communiqué via WhatsApp.</p>
              <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg mt-6 hover:bg-green-700 transition-colors">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
