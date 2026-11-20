import React from 'react';
import BookNowButton from '../../components/common/BookNowButton';
import { FaqAccordion, PlanCard, SectionTitle, ServiceHeader, ServiceIntro, ServicePage } from '../../components/services/ServiceSections';
import repairImage from '../../assets/images/services/mechanical-repairs.webp';
import { useTranslation } from '../../i18n';

const PACKAGES = [
  { id: 'basic', price: 599.99 },
  { id: 'comprehensive', price: 1299.99, featured: true },
  { id: 'premium', price: 2499.99 },
];

const MechanicalRepairs = () => {
  const { t, formatPrice } = useTranslation();
  const base = 'services.mechanical';

  return (
    <ServicePage id="mechanical-repairs" background="bg-white">
      <ServiceHeader title={t(`${base}.title`)} subtitle={t(`${base}.subtitle`)} />

      <ServiceIntro
        image={repairImage}
        imageAlt={t(`${base}.imageAlt`)}
        title={t(`${base}.introTitle`)}
        text={t(`${base}.introText`)}
        features={t(`${base}.features`)}
        accent="blue"
        cta={
          <BookNowButton
            service={t(`${base}.bookingName`)}
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
              duration={t(`${base}.packages.${id}.duration`)}
            />
          ))}
        </div>
      </div>

      <SectionTitle>{t('common.faqTitle')}</SectionTitle>
      <FaqAccordion items={t(`${base}.faqs`)} accent="blue" />
    </ServicePage>
  );
};

export default MechanicalRepairs;
