'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTranslations } from 'next-intl';
import { useSession, signOut } from 'next-auth/react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { getCartCount } = useCart();
  const { data: session } = useSession();
  const t = useTranslations('Header');
  const cartCount = getCartCount();

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Aiboutik
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/" className="hover:text-gray-300">{t('home')}</Link></li>
            <li><Link href="/products" className="hover:text-gray-300">{t('products')}</Link></li>
            <li><Link href="/shein" className="hover:text-gray-300">{t('shein')}</Link></li>
            <li><Link href="/temu" className="hover:text-gray-300">{t('temu')}</Link></li>
            <li><Link href="/amazon" className="hover:text-gray-300">{t('amazon')}</Link></li>
            <li>
              <Link href="/cart" className="hover:text-gray-300 bg-gray-700 px-3 py-2 rounded-full">
                {t('cart')} ({cartCount})
              </Link>
            </li>
            {session ? (
              <>
                <li><span className="text-gray-400">{session.user?.name}</span></li>
                <li>
                  <button onClick={() => signOut()} className="hover:text-gray-300 cursor-pointer">
                    Déconnexion
                  </button>
                </li>
              </>
            ) : (
              <li><Link href="/login" className="hover:text-gray-300">{t('login')}</Link></li>
            )}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
