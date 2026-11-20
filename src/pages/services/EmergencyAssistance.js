import React from 'react';
import { AlertCircle, PhoneCall, Zap, Settings, Lock, Truck, Droplet, Activity } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';
import {
  HotlineBox,
  OfferingCard,
  PlanCard,
  SectionTitle,
  ServiceHeader,
  ServiceIntro,
  ServicePage,
} from '../../components/services/ServiceSections';
import emergencyImage from '../../assets/images/services/emergency-assistance.webp';
import { useTranslation } from '../../i18n';

const HOTLINE = '19873';

const OFFERINGS = [
  { id: 'jumpStart', Icon: Zap, price: 49.99 },
  { id: 'flatTire', Icon: Settings, price: 59.99 },
  { id: 'lockout', Icon: Lock, price: 69.99 },
  { id: 'towing', Icon: Truck, price: 79.99, from: true },
  { id: 'fuel', Icon: Droplet, price: 49.99, plusFuel: true },
  { id: 'diagnostics', Icon: Activity, price: 79.99 },
];

const PLANS = [
  { id: 'basic', price: 99 },
  { id: 'premium', price: 179, featured: true },
  { id: 'ultimate', price: 249 },
];

const EmergencyAssistance = () => {
  const { t, formatPrice } = useTranslation();
  const base = 'services.emergency';

  const offeringPrice = ({ price, from, plusFuel }) => {
    if (from) return t('common.from', { price: formatPrice(price) });
    if (plusFuel) return t(`${base}.plusFuel`, { price: formatPrice(price) });
    return formatPrice(price);
  };

  return (
    <ServicePage id="emergency-assistance">
      <ServiceHeader title={t(`${base}.title`)} subtitle={t(`${base}.subtitle`)} />

      <ServiceIntro
        image={emergencyImage}
        imageAlt={t(`${base}.imageAlt`)}
        title={t(`${base}.introTitle`)}
        text={t(`${base}.introText`)}
        features={t(`${base}.features`)}
        accent="red"
        cta={
          <a
            href={`tel:${HOTLINE}`}
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
          >
            <PhoneCall className="h-5 w-5 me-2" /> {t(`${base}.cta`)}
          </a>
        }
      >
        <HotlineBox Icon={AlertCircle} title={t(`${base}.hotlineTitle`)} number={HOTLINE} text={t(`${base}.hotlineText`)} accent="red" />
      </ServiceIntro>

      <div className="mb-16">
        <SectionTitle>{t(`${base}.offeringsTitle`)}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS.map((offering) => (
            <OfferingCard
              key={offering.id}
              accent="red"
              Icon={offering.Icon}
              title={t(`${base}.offerings.${offering.id}.title`)}
              description={t(`${base}.offerings.${offering.id}.description`)}
              duration={t(`${base}.offerings.${offering.id}.duration`)}
              priceLabel={offeringPrice(offering)}
            />
          ))}
        </div>
      </div>

      <SectionTitle>{t(`${base}.plansTitle`)}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PLANS.map(({ id, price, featured }) => (
          <PlanCard
            key={id}
            accent="red"
            variant="block"
            featured={featured}
            name={t(`${base}.plans.${id}.name`)}
            priceLabel={t('common.perYear', { price: formatPrice(price) })}
            description={t(`${base}.plans.${id}.description`)}
            features={t(`${base}.plans.${id}.features`)}
            excluded={t(`${base}.plans.${id}.excluded`, { defaultValue: [] })}
            buttonText={t(`${base}.signUp`)}
          />
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8">{t(`${base}.plansNote`)}</p>

      <div className="text-center mt-12">
        <BookNowButton
          service={t(`${base}.title`)}
          buttonText={t(`${base}.requestOnline`)}
          className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md font-medium transition duration-300"
        />
      </div>
    </ServicePage>
  );
};

export default EmergencyAssistance;
