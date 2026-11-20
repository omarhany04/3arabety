import React from 'react';
import { Globe } from 'react-feather';
import { useTranslation } from '../../i18n';

/** Toggles the whole site between Arabic (RTL) and English (LTR). */
const LanguageSwitcher = ({ className = '' }) => {
  const { t, toggleLanguage, language } = useTranslation();
  const target = language === 'ar' ? 'en' : 'ar';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      lang={target}
      aria-label={t('language.switchLabel')}
      title={t('language.switchLabel')}
      className={`inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 transition duration-300 ${className}`}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span>{t('language.switchTo')}</span>
    </button>
  );
};

export default LanguageSwitcher;
