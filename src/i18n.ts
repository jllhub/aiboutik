import {getRequestConfig} from 'next-intl/server';
 
export const locales = ['ht', 'fr', 'en', 'es'];
export const defaultLocale = 'ht';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    locale = defaultLocale;
  }
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
