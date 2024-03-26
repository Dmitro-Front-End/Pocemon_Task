import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import ukTranslation from './uk.json';

i18n
  .use(initReactI18next) // Пасивне інтегрування react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      uk: { translation: ukTranslation }
    },
    lng: 'uk', // За замовчуванням використовуємо англійську мову
    interpolation: {
      escapeValue: false // react уже уберет вредные символы
    }
  });

export default i18n;