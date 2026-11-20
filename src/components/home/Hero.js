import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'react-feather';
import heroImage from '../../assets/images/home/hero-car-service.webp';
import useSectionNavigation from '../../hooks/useSectionNavigation';
import { useTranslation } from '../../i18n';

const Hero = () => {
  const goToSection = useSectionNavigation();
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-pattern py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t('home.hero.titleStart')} <span className="text-blue-600">{t('home.hero.titleHighlight')}</span>{' '}
              {t('home.hero.titleEnd')}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{t('home.hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                onClick={goToSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 text-center"
              >
                {t('home.hero.explore')}
              </a>
              <Link
                to="/services/emergency-assistance"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 text-center flex items-center justify-center"
              >
                <PhoneCall className="h-5 w-5 me-2" /> {t('home.hero.emergency')}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={heroImage}
              alt={t('home.hero.imageAlt')}
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
