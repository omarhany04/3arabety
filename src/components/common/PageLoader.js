import React from 'react';
import { useTranslation } from '../../i18n';

const PageLoader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center py-32" role="status" aria-live="polite">
      <span className="h-10 w-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" />
      <span className="sr-only">{t('common.loading')}</span>
    </div>
  );
};

export default PageLoader;
