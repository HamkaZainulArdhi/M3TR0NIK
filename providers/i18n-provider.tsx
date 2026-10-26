'use client';

import { ReactNode, useEffect, useState } from 'react';
import {
  I18nextProvider,
  useTranslation as useI18nextTranslation,
} from 'react-i18next';
import { Direction } from 'radix-ui';
import { I18N_LANGUAGES } from '@/i18n/config';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslations from '@/i18n/messages/en.json';
import arTranslations from '@/i18n/messages/ar.json';
import esTranslations from '@/i18n/messages/es.json';
import deTranslations from '@/i18n/messages/de.json';
import chTranslations from '@/i18n/messages/ch.json';

const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
  es: { translation: esTranslations },
  de: { translation: deTranslations },
  ch: { translation: chTranslations },
};

// Initialize synchronously so server-rendered client components always have an
// i18next instance. Language detection runs on the client after hydration.
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    initImmediate: false,
  });
}

interface I18nProviderProps {
  children: ReactNode;
}

function I18nProvider({ children }: I18nProviderProps) {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const detectedLanguage = storedLanguage || browserLanguage;
    const isSupported = I18N_LANGUAGES.some(
      (language) => language.code === detectedLanguage,
    );

    if (isSupported && detectedLanguage !== i18n.language) {
      i18n.changeLanguage(detectedLanguage);
    }

    const handleLanguageChange = (languageCode: string) => {
      const language =
        I18N_LANGUAGES.find((item) => item.code === languageCode) ||
        I18N_LANGUAGES[0];

      setDirection(language.direction);
      document.documentElement.setAttribute('dir', language.direction);
    };

    handleLanguageChange(i18n.language);
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Direction.DirectionProvider dir={direction}>
        {children}
      </Direction.DirectionProvider>
    </I18nextProvider>
  );
}

const useLanguage = () => {
  const { i18n: instance } = useI18nextTranslation();
  const currentLanguage =
    I18N_LANGUAGES.find((language) => language.code === instance.language) ||
    I18N_LANGUAGES[0];

  const changeLanguage = (code: string) => {
    instance.changeLanguage(code);
  };

  return {
    languageCode: instance.language,
    language: currentLanguage,
    changeLanguage,
  };
};

export { I18nProvider, useLanguage };
