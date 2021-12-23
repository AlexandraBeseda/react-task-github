import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationENG from '../assets/locales/en/translation.json';
import translationRU from '../assets/locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],

    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    },
    // keySeparator: false,
    // we use keys!
    // true is by default
    resources: {
      en: { translation: translationENG },
      ru: { translation: translationRU }
    },
    // react: { wait: false }
    react: { useSuspense: false }
  });

export default i18n;
