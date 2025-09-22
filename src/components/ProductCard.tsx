'use client';

import type { Product } from '@/lib/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 flex flex-col items-start shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="text-lg font-bold text-gray-900 mt-auto">{product.price.toLocaleString()} HTG</p>
      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300">
        Ajouter au Panier
      </button>
    </div>
  );
};

export default ProductCard;
