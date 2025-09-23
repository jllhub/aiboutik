import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Adjusted path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import AuthProvider from "@/components/AuthProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

// This function replaces the static metadata object
export async function generateMetadata({params: {locale}}: {params: {locale: string}}): Promise<Metadata> {
  return {
    title: "Aiboutik",
    description: "Votre service de commande en ligne et de vente.",
    manifest: "/manifest.json",
  };
}

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export default async function RootLayout({children, params: {locale}}: Props) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <head>
        <meta name="theme-color" content="#007bff" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <CartProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
                <Footer />
              </div>
            </CartProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
