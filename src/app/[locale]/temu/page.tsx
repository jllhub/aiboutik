import OrderForm from '@/components/OrderForm';
import { useTranslations } from 'next-intl';

export default function TemuPage() {
  const t = useTranslations('TemuPage');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">{t('title')}</h1>
      <p className="text-center mb-8">{t('subtitle')}</p>
      <OrderForm platform="Temu" />
    </div>
  );
}
