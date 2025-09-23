import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="z-10 w-full max-w-5xl items-center justify-center text-center fade-in">
        <h1 className="page-title gradient-text mb-8">{t('welcome')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card slide-up">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Produits Locaux</h3>
              <p className="text-gray-600">Découvrez notre sélection de produits locaux de qualité</p>
            </div>
          </div>
          <div className="card slide-up" style={{animationDelay: '0.2s'}}>
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Commandes en Ligne</h3>
              <p className="text-gray-600">Commandez facilement sur Shein, Temu et Amazon</p>
            </div>
          </div>
          <div className="card slide-up" style={{animationDelay: '0.4s'}}>
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 gradient-text">Livraison Rapide</h3>
              <p className="text-gray-600">Service de livraison rapide et fiable</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
