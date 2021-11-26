import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import translationENG from '../assets/locales/en/translation.json';
import translationRU from '../assets/locales/ru/translation.json';

// const apiKey = 'GpIPTxqnbod1xsHAHLCs7g';
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
  .use(LanguageDetector)
  // .use(backend)
  .use(initReactI18next)
  .init({
    // use en if detected lng is not available
    // ns: ['en', 'ru'],
    // defaultNS: 'en',
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
    react: { wait: false }
  });

export default i18n;
