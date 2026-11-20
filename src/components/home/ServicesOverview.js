import React from 'react';
import ServiceCard from '../common/ServiceCard';
import { SERVICES } from '../../data/services';
import { useTranslation } from '../../i18n';

const ServicesOverview = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.services.title')}</h2>
          <p className="text-lg text-gray-600">{t('home.services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
