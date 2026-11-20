import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import { SERVICE_COLORS } from '../../data/services';
import { useTranslation } from '../../i18n';

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
  const { key, path, Icon, color } = service;
  const palette = SERVICE_COLORS[color] || SERVICE_COLORS.blue;

  return (
    <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg ${palette.bg} flex items-center justify-center mb-6`}>
          <Icon className={`h-7 w-7 ${palette.text}`} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`serviceNames.${key}`)}</h3>
        <p className="text-gray-600 mb-6">{t(`home.services.items.${key}`)}</p>
        <Link to={path} className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition duration-300">
          {t('common.learnMore')} <ArrowRight className="h-4 w-4 ms-2 rtl:-scale-x-100" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
