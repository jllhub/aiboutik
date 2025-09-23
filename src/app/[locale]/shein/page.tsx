import OrderForm from '@/components/OrderForm';
import { getTranslations } from 'next-intl/server';

export default async function SheinPage() {
  const t = await getTranslations('SheinPage');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h1 className="page-title gradient-text">{t('title')}</h1>
          <p className="page-subtitle">{t('subtitle')}</p>
        </div>
        <div className="max-w-2xl mx-auto slide-up">
          <OrderForm platform="Shein" />
        </div>
      </div>
    </div>
  );
}
