import React from 'react';
import { Clock, Shield, Map, DollarSign } from 'react-feather';
import whyChooseUsImage from '../../assets/images/home/why-choose-us.webp';
import { useTranslation } from '../../i18n';

const REASONS = [
  { key: 'availability', Icon: Clock },
  { key: 'certified', Icon: Shield },
  { key: 'coverage', Icon: Map },
  { key: 'pricing', Icon: DollarSign },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <img
              src={whyChooseUsImage}
              alt={t('home.why.imageAlt')}
              width="600"
              height="480"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('home.why.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">{t('home.why.subtitle')}</p>

            <div className="space-y-6">
              {REASONS.map(({ key, Icon }) => (
                <div key={key} className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ms-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{t(`home.why.reasons.${key}.title`)}</h3>
                    <p className="text-gray-600">{t(`home.why.reasons.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
