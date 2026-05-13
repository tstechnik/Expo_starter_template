import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';

const languageCode = Localization.getLocales()[0]?.languageCode ?? 'en';

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: ['en', 'de', 'tr'].includes(languageCode) ? languageCode : 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: { translation: en },
    de: { translation: de },
    tr: { translation: tr }
  }
});

export default i18n;

