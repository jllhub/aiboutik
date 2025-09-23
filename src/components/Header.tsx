'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTranslations } from 'next-intl';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { getCartCount } = useCart();
  const { data: session } = useSession();
  const t = useTranslations('Header');
  const cartCount = getCartCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-gradient text-white sticky top-0 z-50 backdrop-blur-md shadow-2xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        {/* Main Header Content */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="logo text-2xl md:text-3xl">
              Aiboutik
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-1">
              <li>
                <Link href="/" className="nav-link px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="nav-link px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link href="/shein" className="nav-link px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  {t('shein')}
                </Link>
              </li>
              <li>
                <Link href="/temu" className="nav-link px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  {t('temu')}
                </Link>
              </li>
              <li>
                <Link href="/amazon" className="nav-link px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  {t('amazon')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Section - Cart, Auth, Language */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <Link href="/cart" className="cart-badge relative group">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="font-semibold">{t('cart')}</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Authentication */}
            {session ? (
              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {session.user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-blue-200 font-medium">{session.user?.name}</span>
                </div>
                <button 
                  onClick={() => signOut()} 
                  className="btn-outline text-sm px-4 py-2 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary text-sm px-6 py-2">
                {t('login')}
              </Link>
            )}

            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="nav-link px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                href="/products" 
                className="nav-link px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('products')}
              </Link>
              <Link 
                href="/shein" 
                className="nav-link px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('shein')}
              </Link>
              <Link 
                href="/temu" 
                className="nav-link px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('temu')}
              </Link>
              <Link 
                href="/amazon" 
                className="nav-link px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('amazon')}
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
