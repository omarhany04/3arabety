import React from 'react';
import { Phone, Truck, MapPin, Clock, Layers, Shield, Calendar } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';
import {
  CtaBanner,
  HotlineBox,
  OfferingCard,
  PlanCard,
  SectionTitle,
  ServiceHeader,
  ServiceIntro,
  ServicePage,
} from '../../components/services/ServiceSections';
import towingImage from '../../assets/images/services/towing.webp';
import { useTranslation } from '../../i18n';

const HOTLINE = '19876';

const OFFERINGS = [
  { id: 'local', Icon: Truck, price: 149.99 },
  { id: 'longDistance', Icon: MapPin, price: 6.99, perKm: true },
  { id: 'emergency', Icon: Clock, price: 199.99 },
  { id: 'flatbed', Icon: Layers, price: 249.99 },
  { id: 'heavyDuty', Icon: Shield, price: 349.99 },
  { id: 'scheduled', Icon: Calendar, price: 129.99 },
];

const PLANS = [
  { id: 'basic', price: 199 },
  { id: 'premium', price: 349, featured: true },
  { id: 'commercial', price: 899 },
];

const TowingService = () => {
  const { t, formatPrice } = useTranslation();
  const base = 'services.towing';

  return (
    <ServicePage id="towing-service">
      <ServiceHeader title={t(`${base}.title`)} subtitle={t(`${base}.subtitle`)} />

      <ServiceIntro
        image={towingImage}
        imageAlt={t(`${base}.imageAlt`)}
        title={t(`${base}.introTitle`)}
        text={t(`${base}.introText`)}
        features={t(`${base}.features`)}
        accent="yellow"
        cta={
          <BookNowButton
            service={t(`${base}.title`)}
            buttonText={t(`${base}.cta`)}
            className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
          />
        }
      >
        <HotlineBox Icon={Phone} title={t(`${base}.hotlineTitle`)} number={HOTLINE} text={t(`${base}.hotlineText`)} accent="yellow" />
      </ServiceIntro>

      <div className="mb-16">
        <SectionTitle>{t(`${base}.offeringsTitle`)}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS.map(({ id, Icon, price, perKm }) => (
            <OfferingCard
              key={id}
              accent="yellow"
              Icon={Icon}
              title={t(`${base}.offerings.${id}.title`)}
              description={t(`${base}.offerings.${id}.description`)}
              duration={t(`${base}.offerings.${id}.duration`, { defaultValue: '' }) || undefined}
              priceLabel={t('common.from', { price: perKm ? t(`${base}.perKm`, { price: formatPrice(price) }) : formatPrice(price) })}
            />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <SectionTitle>{t(`${base}.plansTitle`)}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map(({ id, price, featured }) => (
            <PlanCard
              key={id}
              accent="yellow"
              variant="block"
              featured={featured}
              name={t(`${base}.plans.${id}.name`)}
              priceLabel={t('common.perYear', { price: formatPrice(price) })}
              description={t(`${base}.plans.${id}.description`)}
              features={t(`${base}.plans.${id}.features`)}
              buttonText={t(`${base}.signUp`)}
            />
          ))}
        </div>
      </div>

      <CtaBanner title={t(`${base}.ctaTitle`)} text={t(`${base}.ctaText`)} accent="yellow" centered>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${HOTLINE}`}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
          >
            <Phone className="h-5 w-5 me-2" /> {t(`${base}.call`, { number: HOTLINE })}
          </a>
          <BookNowButton
            service={t(`${base}.offerings.emergency.title`)}
            buttonText={t(`${base}.requestOnline`)}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
          />
        </div>
      </CtaBanner>
    </ServicePage>
  );
};

export default TowingService;
