// "use client";

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import langEN from '../../public/locales/en.json';
import langFR from '../../public/locales/fr.json';

const  resources = {
    en: {
        en: langEN,
    },
    fr: {
        fr: langFR,
    },
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        debug: false,
        fallbackLng: 'en',
        saveMissing: true
    });

export default i18next;