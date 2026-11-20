import React, { useState } from 'react';
import toyota from '../../assets/images/brands/toyota.svg';
import honda from '../../assets/images/brands/honda.svg';
import bmw from '../../assets/images/brands/bmw.svg';
import mercedes from '../../assets/images/brands/mercedes.svg';
import ford from '../../assets/images/brands/ford.svg';
import chevrolet from '../../assets/images/brands/chevrolet.svg';
import audi from '../../assets/images/brands/audi.svg';
import nissan from '../../assets/images/brands/nissan.svg';
import hyundai from '../../assets/images/brands/hyundai.svg';
import kia from '../../assets/images/brands/kia.svg';
import volkswagen from '../../assets/images/brands/volkswagen.svg';
import peugeot from '../../assets/images/brands/peugeot.svg';
import suzuki from '../../assets/images/brands/suzuki.svg';
import renault from '../../assets/images/brands/renault.svg';
import opel from '../../assets/images/brands/opel.svg';
import mitsubishi from '../../assets/images/brands/mitsubishi.svg';
import fiat from '../../assets/images/brands/fiat.svg';
import subaru from '../../assets/images/brands/subaru.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';

// Monochrome brand marks (Simple Icons, CC0) bundled locally – a few KB each instead of multi-MB PNGs.
const BRANDS = [
  { id: 'toyota', name: 'Toyota', logo: toyota },
  { id: 'honda', name: 'Honda', logo: honda },
  { id: 'bmw', name: 'BMW', logo: bmw },
  { id: 'mercedes', name: 'Mercedes-Benz', logo: mercedes },
  { id: 'ford', name: 'Ford', logo: ford },
  { id: 'chevrolet', name: 'Chevrolet', logo: chevrolet },
  { id: 'audi', name: 'Audi', logo: audi },
  { id: 'nissan', name: 'Nissan', logo: nissan },
  { id: 'hyundai', name: 'Hyundai', logo: hyundai },
  { id: 'kia', name: 'Kia', logo: kia },
  { id: 'volkswagen', name: 'Volkswagen', logo: volkswagen },
  { id: 'peugeot', name: 'Peugeot', logo: peugeot },
  { id: 'suzuki', name: 'Suzuki', logo: suzuki },
  { id: 'renault', name: 'Renault', logo: renault },
  { id: 'opel', name: 'Opel', logo: opel },
  { id: 'mitsubishi', name: 'Mitsubishi', logo: mitsubishi },
  { id: 'fiat', name: 'Fiat', logo: fiat },
  { id: 'subaru', name: 'Subaru', logo: subaru },
];

const BrandsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();
  const visibleBrands = showAll ? BRANDS : BRANDS.slice(0, 12);

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.brands.title')}</h2>
          <p className="text-lg text-gray-600">{t('home.brands.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {visibleBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/shop?brand=${brand.id}`}
              className="brand-logo bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col items-center justify-center gap-3"
              title={brand.name}
            >
              <img src={brand.logo} alt="" width="48" height="48" loading="lazy" decoding="async" className="h-12 w-12 object-contain bg-transparent" />
              <span className="text-sm font-medium text-gray-600">{brand.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300"
          >
            {showAll ? t('common.showLess') : t('home.brands.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
