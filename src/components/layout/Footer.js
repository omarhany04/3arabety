import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock, Headphones, MessageCircle } from 'react-feather';
import { FaCarSide } from 'react-icons/fa';
import useSectionNavigation from '../../hooks/useSectionNavigation';
import { SERVICES } from '../../data/services';
import { useTranslation } from '../../i18n';

const SOCIAL_LINKS = [
  { key: 'facebook', href: 'https://www.facebook.com/', Icon: Facebook },
  { key: 'x', href: 'https://x.com/', Icon: Twitter },
  { key: 'instagram', href: 'https://www.instagram.com/', Icon: Instagram },
  { key: 'youtube', href: 'https://www.youtube.com/', Icon: Youtube },
];

const linkClass = 'text-gray-400 hover:text-blue-400 transition duration-300';

const Footer = () => {
  const goToSection = useSectionNavigation();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-12 md:py-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-8">
          {/* Logo & about */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center">
                <FaCarSide className="h-8 w-8 text-blue-500 rtl:-scale-x-100" aria-hidden="true" />
                <span className="ms-2 text-2xl font-bold">{t('brand.name')}</span>
              </Link>
            </div>

            <div className="max-w-md">
              <p className="text-gray-400 mb-6 leading-relaxed">{t('footer.about')}</p>

              <div className="flex gap-4 mb-6">
                {SOCIAL_LINKS.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(`footer.social.${key}`)}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4 me-2" />
                {t('footer.messageCenter')}
              </Link>
              <p className="text-gray-500 text-sm mt-6">{t('footer.rights', { year: new Date().getFullYear() })}</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={linkClass}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a href="/#services" onClick={goToSection('services')} className={linkClass}>
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <Link to="/shop" className={linkClass}>
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <a href="/#testimonials" onClick={goToSection('testimonials')} className={linkClass}>
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <Link to="/locations" className={linkClass}>
                  {t('nav.locations')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.ourServices')}</h3>
            <ul className="space-y-3">
              {SERVICES.map(({ key, path }) => (
                <li key={key}>
                  <Link to={path} className={linkClass}>
                    {t(`serviceNames.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.contactUs')}</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 me-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {t('footer.addressLine1')}
                  <br />
                  {t('footer.addressLine2')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 me-3 flex-shrink-0" />
                <a href="tel:+201012345678" className={linkClass} dir="ltr">
                  +20 (10) 123-456-78
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 me-3 flex-shrink-0" />
                <a href="mailto:info@3arabety.com" className={linkClass}>
                  info@3arabety.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 me-3 flex-shrink-0" />
                <span className="text-gray-400">{t('footer.hours')}</span>
              </li>
              <li className="flex items-center">
                <Headphones className="h-5 w-5 text-blue-400 me-3 flex-shrink-0" />
                <span className="text-gray-400">{t('footer.support')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
