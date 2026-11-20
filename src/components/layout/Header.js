import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import { FaCarSide } from 'react-icons/fa';
import CartButton from '../common/shop/CartButton';
import ModernSearch from '../common/ModernSearch';
import LanguageSwitcher from '../common/LanguageSwitcher';
import useSectionNavigation from '../../hooks/useSectionNavigation';
import { SERVICES } from '../../data/services';
import { useTranslation } from '../../i18n';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const goToSection = useSectionNavigation();
  const { t } = useTranslation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const desktopLinkClass = (active) =>
    `nav-link ${active ? 'active text-gray-900' : 'text-gray-600'} hover:text-blue-600 font-medium`;

  const routeLinkClass = ({ isActive }) => desktopLinkClass(isActive);
  const mobileLinkClass = 'block text-gray-700 hover:text-blue-600 font-medium';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-8">
          <Link to="/" className="flex items-center" aria-label={t('brand.name')}>
            <FaCarSide className="h-8 w-8 text-blue-600 rtl:-scale-x-100" aria-hidden="true" />
            <span className="ms-2 text-2xl font-bold text-gray-800">{t('brand.name')}</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            <NavLink to="/" end className={routeLinkClass}>
              {t('nav.home')}
            </NavLink>
            <a
              href="/#services"
              onClick={goToSection('services')}
              className={desktopLinkClass(location.pathname.startsWith('/services'))}
            >
              {t('nav.services')}
            </a>
            <NavLink to="/shop" className={routeLinkClass}>
              {t('nav.shop')}
            </NavLink>
            <a href="/#testimonials" onClick={goToSection('testimonials')} className={desktopLinkClass(false)}>
              {t('nav.testimonials')}
            </a>
            <NavLink to="/locations" className={routeLinkClass}>
              {t('nav.locations')}
            </NavLink>
            <NavLink to="/contact" className={routeLinkClass}>
              {t('nav.contact')}
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <ModernSearch />
            <CartButton />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="lg:hidden p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? t('common.closeMenu') : t('common.openMenu')}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white py-4 px-6 space-y-4 shadow-inner`}
        >
          <NavLink to="/" end className={mobileLinkClass}>
            {t('nav.home')}
          </NavLink>
          <div>
            <a href="/#services" onClick={goToSection('services')} className={`${mobileLinkClass} mb-2`}>
              {t('nav.services')}
            </a>
            <div className="ps-4 space-y-2">
              {SERVICES.map(({ key, path }) => (
                <NavLink key={key} to={path} className="block text-gray-600 hover:text-blue-600">
                  {t(`serviceNames.${key}`)}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/shop" className={mobileLinkClass}>
            {t('nav.shop')}
          </NavLink>
          <a href="/#testimonials" onClick={goToSection('testimonials')} className={mobileLinkClass}>
            {t('nav.testimonials')}
          </a>
          <NavLink to="/locations" className={mobileLinkClass}>
            {t('nav.locations')}
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass}>
            {t('nav.contact')}
          </NavLink>
          <div className="pt-4 border-t border-gray-200 sm:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
