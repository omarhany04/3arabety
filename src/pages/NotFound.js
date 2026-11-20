import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'react-feather';
import { useTranslation } from '../i18n';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-8 text-center max-w-xl">
        <p className="text-7xl font-bold text-blue-600 mb-4">404</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('notFound.title')}</h1>
        <p className="text-lg text-gray-600 mb-8">{t('notFound.description')}</p>
        <Link
          to="/"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
        >
          <Home className="h-5 w-5 me-2" /> {t('notFound.backHome')}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
