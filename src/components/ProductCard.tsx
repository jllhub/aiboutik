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
    <div className="card h-full flex flex-col">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
          {product.category}
        </div>
      </div>
      <div className="card-body flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h2>
        <div className="mt-auto">
          <p className="text-2xl font-bold gradient-text mb-4">{product.price.toLocaleString()} HTG</p>
          <button 
            onClick={() => addToCart(product)}
            className="btn-primary w-full">
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
