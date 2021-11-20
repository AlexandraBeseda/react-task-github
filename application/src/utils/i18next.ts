import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationENG from '../assets/locales/en/translation.json';
import translationRU from '../assets/locales/ru/translation.json';

// const apiKey = 'GpIPTxqnbod1xsHAHLCs7g';
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // use en if detected lng is not available
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],

    // ns: ['default'],
    // defaultNS: 'default',
    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    },
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      // not needed for react!
      // react already safes from xss
      escapeValue: false
    },
    resources: {
      en: { translation: translationENG },
      ru: { translation: translationRU }
    }
  });

export default i18n;
