import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';
import { CtaBanner, PlanCard, SectionTitle, ServiceHeader, ServiceIntro, ServicePage } from '../../components/services/ServiceSections';
import carWashImage from '../../assets/images/services/car-wash.webp';
import washClubImage from '../../assets/images/services/wash-club.webp';
import { useTranslation } from '../../i18n';

const PACKAGES = [
  { id: 'express', price: 19.99 },
  { id: 'deluxe', price: 49.99, featured: true },
  { id: 'premium', price: 129.99 },
];

const CarWashCare = () => {
  const { t, formatPrice } = useTranslation();
  const base = 'services.carWash';

  return (
    <ServicePage id="car-wash-care">
      <ServiceHeader title={t(`${base}.title`)} subtitle={t(`${base}.subtitle`)} />

      <ServiceIntro
        image={carWashImage}
        imageAlt={t(`${base}.imageAlt`)}
        title={t(`${base}.introTitle`)}
        text={t(`${base}.introText`)}
        features={t(`${base}.features`)}
        accent="blue"
        cta={
          <BookNowButton
            service={t(`${base}.title`)}
            buttonText={t(`${base}.cta`)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
          />
        }
      />

      <div className="mb-16">
        <SectionTitle>{t('common.servicePackages')}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map(({ id, price, featured }) => (
            <PlanCard
              key={id}
              accent="blue"
              featured={featured}
              name={t(`${base}.packages.${id}.name`)}
              priceLabel={formatPrice(price)}
              description={t(`${base}.packages.${id}.description`)}
              features={t(`${base}.packages.${id}.features`)}
              excluded={t(`${base}.packages.${id}.excluded`, { defaultValue: [] })}
              duration={t(`${base}.packages.${id}.duration`)}
            />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <CtaBanner title={t(`${base}.specialtyTitle`)} text={t(`${base}.specialtyText`)} accent="blue">
          <Link
            to="/services/specialty-services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 whitespace-nowrap inline-block"
          >
            {t(`${base}.specialtyCta`)}
          </Link>
        </CtaBanner>
      </div>

      <SectionTitle>{t(`${base}.membershipTitle`)}</SectionTitle>
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t(`${base}.club.title`)}</h3>
            <p className="text-gray-600 mb-4">{t(`${base}.club.text`)}</p>
            <ul className="space-y-2 mb-6">
              {[
                t(`${base}.club.express`, { price: t('common.perMonth', { price: formatPrice(29.99) }) }),
                t(`${base}.club.deluxe`, { price: t('common.perMonth', { price: formatPrice(59.99) }) }),
                t(`${base}.club.noContract`),
                t(`${base}.club.discount`),
              ].map((benefit) => (
                <li key={benefit} className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-blue-500 me-2 flex-shrink-0" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <BookNowButton
              service={t(`${base}.club.title`)}
              buttonText={t(`${base}.club.join`)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={washClubImage}
              alt={t(`${base}.club.imageAlt`)}
              width="800"
              height="800"
              loading="lazy"
              decoding="async"
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </ServicePage>
  );
};

export default CarWashCare;
