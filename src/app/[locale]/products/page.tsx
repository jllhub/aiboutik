import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { useTranslations } from 'next-intl';

export default function ProductsPage() {
  const t = useTranslations('ProductsPage');
  const products = getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
