import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Search } from 'react-feather';
import ProductCard from '../components/common/ProductCard';
import ServiceCard from '../components/common/ServiceCard';
import { CAR_BRANDS } from '../data/products';
import { searchSite } from '../utils/siteSearch';
import { useTranslation } from '../i18n';

const MAX_PRODUCTS = 12;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { t, language } = useTranslation();

  const query = searchParams.get('query') || '';
  const service = searchParams.get('service') || '';
  const brand = searchParams.get('brand') || '';

  const results = useMemo(() => searchSite({ query, service, brand }), [query, service, brand]);
  const brandName = CAR_BRANDS.find((item) => item.id === brand)?.name || brand;
  const total = results.services.length + results.products.length + results.locations.length;

  const heading = query ? t('search.resultsFor', { query }) : t('search.results');

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{heading}</h1>
        <p className="text-gray-600 mb-6" aria-live="polite">
          {t('search.count', { count: total })}
        </p>

        {(service || brand) && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-2">{t('search.activeFilters')}</h2>
            <div className="flex flex-wrap gap-2">
              {service && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {t('search.service')}: {t(`serviceNames.${service}`, { defaultValue: service })}
                </span>
              )}
              {brand && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {t('search.brand')}: {brandName}
                </span>
              )}
            </div>
          </div>
        )}

        {total === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-600">{query ? t('search.noResultsFor', { query }) : t('search.noResults')}</p>
            <p className="mt-2 text-gray-500">{t('search.tryAgain')}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/services/mechanical-repairs" className="text-blue-600 hover:underline">
                {t('serviceNames.mechanical')}
              </Link>
              <Link to="/services/car-wash-care" className="text-blue-600 hover:underline">
                {t('serviceNames.carWash')}
              </Link>
              <Link to="/shop" className="text-blue-600 hover:underline">
                {t('nav.shop')}
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {results.services.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('search.services')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.services.map((item) => (
                    <ServiceCard key={item.key} service={item} />
                  ))}
                </div>
              </section>
            )}

            {results.products.length > 0 && (
              <section>
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('search.products')} ({results.products.length})
                  </h2>
                  {results.products.length > MAX_PRODUCTS && (
                    <Link
                      to={`/shop?${new URLSearchParams({ ...(query && { q: query }), ...(brand && { brand }) }).toString()}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {t('search.viewAllInShop')}
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {results.products.slice(0, MAX_PRODUCTS).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}

            {results.locations.length > 0 && (
              <section>
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('search.locations')} ({results.locations.length})
                  </h2>
                  <Link to="/locations" className="text-blue-600 hover:text-blue-800 font-medium">
                    {t('search.openMap')}
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.locations.map((location) => (
                    <div key={location.id} className="bg-white p-4 rounded-lg shadow-sm border-s-4 border-blue-600 flex gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-gray-900">{location.name[language]}</h3>
                        <p className="text-gray-600">{location.address[language]}</p>
                        <p className="text-sm text-gray-500 mt-1">{t(`locations.types.${location.type}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
