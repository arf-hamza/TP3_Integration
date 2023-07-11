// "use client";

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEN from './public/locales/en/translation.json';
import translationFR from './public/locales/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
  };

i18next
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: 'fr',
        fallbackLng: 'en',
        debug: false
    });

export default i18next;