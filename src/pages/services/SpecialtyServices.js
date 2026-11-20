import React from 'react';
import { Shield, Star, Layers, Sun, Square, Cpu } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';
import {
  FaqAccordion,
  OfferingCard,
  ProcessSteps,
  SectionTitle,
  ServiceHeader,
  ServiceIntro,
  ServicePage,
  ServiceTestimonials,
} from '../../components/services/ServiceSections';
import specialtyImage from '../../assets/images/services/specialty.webp';
import ceramicCoatingImage from '../../assets/images/services/ceramic-coating.webp';
import paintCorrectionImage from '../../assets/images/services/paint-correction.webp';
import ppfImage from '../../assets/images/services/paint-protection-film.webp';
import headlightImage from '../../assets/images/services/headlight-restoration.webp';
import tintingImage from '../../assets/images/services/window-tinting.webp';
import ecuImage from '../../assets/images/services/ecu-tuning.webp';
import { useTranslation } from '../../i18n';

const SPECIALTIES = [
  { id: 'ceramic', Icon: Shield, image: ceramicCoatingImage, price: 2499.99, tagClass: 'bg-cyan-600' },
  { id: 'paintCorrection', Icon: Star, image: paintCorrectionImage, price: 1899.99, tagClass: 'bg-gray-600' },
  { id: 'ppf', Icon: Layers, image: ppfImage, price: 3499.99, tagClass: 'bg-yellow-600' },
  { id: 'headlight', Icon: Sun, image: headlightImage, price: 799.99, tagClass: 'bg-green-600' },
  { id: 'tinting', Icon: Square, image: tintingImage, price: 1299.99, tagClass: 'bg-blue-600' },
  { id: 'ecu', Icon: Cpu, image: ecuImage, price: 2999.99, tagClass: 'bg-red-600' },
];

const SpecialtyServices = () => {
  const { t, formatPrice } = useTranslation();
  const base = 'services.specialty';

  return (
    <ServicePage id="specialty-services">
      <ServiceHeader title={t(`${base}.title`)} subtitle={t(`${base}.subtitle`)} />

      <ServiceIntro
        image={specialtyImage}
        imageAlt={t(`${base}.imageAlt`)}
        title={t(`${base}.introTitle`)}
        text={t(`${base}.introText`)}
        features={t(`${base}.features`)}
        accent="purple"
        cta={
          <BookNowButton
            service={t(`${base}.consultation`)}
            buttonText={t(`${base}.cta`)}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
          />
        }
      />

      <div className="mb-16">
        <SectionTitle>{t(`${base}.servicesTitle`)}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map(({ id, Icon, image, price, tagClass }) => (
            <OfferingCard
              key={id}
              accent="purple"
              Icon={Icon}
              image={image}
              tag={t(`${base}.items.${id}.tag`)}
              tagClass={tagClass}
              title={t(`${base}.items.${id}.title`)}
              description={t(`${base}.items.${id}.description`)}
              duration={t(`${base}.items.${id}.duration`)}
              priceLabel={t('common.from', { price: formatPrice(price) })}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 mb-16">
        <SectionTitle className="mb-6">{t(`${base}.processTitle`)}</SectionTitle>
        <ProcessSteps steps={t(`${base}.process`)} accent="purple" />
      </div>

      <div className="mb-16">
        <ServiceTestimonials items={t(`${base}.testimonials`)} accent="purple" />
      </div>

      <SectionTitle>{t('common.faqTitle')}</SectionTitle>
      <FaqAccordion items={t(`${base}.faqs`)} accent="purple" />
    </ServicePage>
  );
};

export default SpecialtyServices;
