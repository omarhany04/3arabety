import React from 'react';
import { CheckCircle } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';
import {
  CtaBanner,
  ProcessSteps,
  SectionTitle,
  ServiceHeader,
  ServiceIntro,
  ServicePage,
  ServiceTestimonials,
} from '../../components/services/ServiceSections';
import inspectionImage from '../../assets/images/services/inspection.webp';
import prePurchaseImage from '../../assets/images/services/pre-purchase-inspection.webp';
import preSaleImage from '../../assets/images/services/pre-sale-inspection.webp';
import safetyImage from '../../assets/images/services/safety-inspection.webp';
import { useTranslation } from '../../i18n';

const INSPECTIONS = [
  { id: 'prePurchase', image: prePurchaseImage, price: 149.99, popular: true },
  { id: 'preSale', image: preSaleImage, price: 129.99 },
  { id: 'safety', image: safetyImage, price: 89.99 },
];

const InspectionServices = () => {
  const { t, formatPrice } = useTranslation();
  const base = 'services.inspection';

  return (
    <ServicePage id="inspection-services" background="bg-white">
      <ServiceHeader title={t(`${base}.title`)} subtitle={t(`${base}.subtitle`)} />

      <ServiceIntro
        image={inspectionImage}
        imageAlt={t(`${base}.imageAlt`)}
        title={t(`${base}.introTitle`)}
        text={t(`${base}.introText`)}
        features={t(`${base}.features`)}
        accent="green"
        cta={
          <BookNowButton
            service={t(`${base}.title`)}
            buttonText={t(`${base}.cta`)}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
          />
        }
      />

      <div className="mb-16">
        <SectionTitle>{t(`${base}.typesTitle`)}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSPECTIONS.map(({ id, image, price, popular }) => {
            const name = t(`${base}.types.${id}.name`);
            return (
              <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                <div className="relative">
                  <img src={image} alt={name} width="800" height="533" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                  {popular && (
                    <span className="absolute top-0 start-0 bg-green-600 text-white text-sm px-3 py-1">{t('common.popular')}</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
                  <p className="text-gray-600 mb-4">{t(`${base}.types.${id}.description`)}</p>
                  <ul className="space-y-2 mb-6">
                    {t(`${base}.types.${id}.features`).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 me-2 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-bold text-gray-900">{formatPrice(price)}</span>
                    <BookNowButton
                      service={name}
                      price={formatPrice(price)}
                      duration={t(`${base}.types.${id}.duration`)}
                      className="text-green-600 font-medium hover:text-green-800 transition duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <CtaBanner title={t(`${base}.customTitle`)} text={t(`${base}.customText`)} accent="green">
            <BookNowButton
              service={t(`${base}.customTitle`)}
              buttonText={t(`${base}.customCta`)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 whitespace-nowrap"
            />
          </CtaBanner>
        </div>
      </div>

      <div className="mb-16">
        <SectionTitle>{t(`${base}.processTitle`)}</SectionTitle>
        <ProcessSteps steps={t(`${base}.process`)} accent="green" />
      </div>

      <SectionTitle>{t(`${base}.testimonialsTitle`)}</SectionTitle>
      <ServiceTestimonials items={t(`${base}.testimonials`)} accent="green" />
    </ServicePage>
  );
};

export default InspectionServices;
