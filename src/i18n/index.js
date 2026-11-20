import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './locales/en';
import ar from './locales/ar';

/**
 * Lightweight i18n layer (Arabic / English) with RTL support.
 *
 * - Arabic is the default language on a visitor's first visit.
 * - The chosen language is remembered in localStorage.
 * - `t(key, options)` resolves dot-separated keys, supports `{{var}}` interpolation,
 *   plural forms through Intl.PluralRules (pass `count`) and returns arrays/objects as-is.
 */

export const STORAGE_KEY = '3arabety.lang';
export const DEFAULT_LANGUAGE = 'ar';

export const LANGUAGES = {
  ar: { code: 'ar', label: 'العربية', shortLabel: 'ع', dir: 'rtl', locale: 'ar-EG-u-nu-latn' },
  en: { code: 'en', label: 'English', shortLabel: 'EN', dir: 'ltr', locale: 'en-US' },
};

const resources = { en, ar };

const readStoredLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return resources[stored] ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const lookup = (source, key) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), source);

const interpolate = (text, vars) =>
  text.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, name) =>
    vars[name] !== undefined && vars[name] !== null ? String(vars[name]) : match
  );

const isPluralNode = (value) =>
  value && typeof value === 'object' && !Array.isArray(value) && typeof value.other === 'string';

export const translate = (language, key, options = {}) => {
  let value = lookup(resources[language], key);
  if (value === undefined && language !== 'en') value = lookup(resources.en, key);

  if (value === undefined) {
    if (process.env.NODE_ENV !== 'production' && options.defaultValue === undefined) {
      // eslint-disable-next-line no-console
      console.warn(`[i18n] Missing translation key "${key}" (${language})`);
    }
    return options.defaultValue !== undefined ? options.defaultValue : key;
  }

  if (isPluralNode(value) && typeof options.count === 'number') {
    const rule = new Intl.PluralRules(LANGUAGES[language].locale).select(options.count);
    value = value[options.count === 0 && value.zero ? 'zero' : rule] || value.other;
  }

  return typeof value === 'string' ? interpolate(value, options) : value;
};

const I18nContext = createContext(null);

export const I18nProvider = ({ children }) => {
  const [language, setLanguageState] = useState(readStoredLanguage);
  const config = LANGUAGES[language];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = config.dir;
    document.title = translate(language, 'meta.title');
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* storage may be unavailable (private mode) – the choice still applies for this visit */
    }
  }, [language, config.dir]);

  const setLanguage = useCallback((next) => {
    if (resources[next]) setLanguageState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === 'ar' ? 'en' : 'ar'));
  }, []);

  const value = useMemo(() => {
    const numberFormat = new Intl.NumberFormat(config.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const integerFormat = new Intl.NumberFormat(config.locale);

    const t = (key, options) => translate(language, key, options);
    const formatAmount = (amount) => (Number.isInteger(amount) ? integerFormat : numberFormat).format(amount);

    return {
      language,
      dir: config.dir,
      isRTL: config.dir === 'rtl',
      locale: config.locale,
      languages: LANGUAGES,
      setLanguage,
      toggleLanguage,
      t,
      /** Formats a price in Egyptian pounds, e.g. "EGP 1,299.99" / "1,299.99 ج.م" (whole amounts without decimals) */
      formatPrice: (amount) => t('common.currency', { amount: formatAmount(amount) }),
      formatNumber: (number) => integerFormat.format(number),
      formatDate: (date, options = { dateStyle: 'long' }) =>
        new Intl.DateTimeFormat(config.locale, options).format(date instanceof Date ? date : new Date(date)),
    };
  }, [language, config, setLanguage, toggleLanguage]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useTranslation must be used within an I18nProvider');
  return context;
};
