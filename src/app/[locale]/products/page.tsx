import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { getTranslations } from 'next-intl/server';

export default async function ProductsPage() {
  const t = await getTranslations('ProductsPage');
  const products = getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h1 className="page-title gradient-text">{t('title')}</h1>
          <p className="page-subtitle">Découvrez notre sélection de produits de qualité</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={product.id} className="slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
