import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, ChevronDown } from 'react-feather';
import { CAR_BRANDS } from '../../data/products';
import { SERVICES } from '../../data/services';
import { useTranslation } from '../../i18n';

const selectClass =
  'block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 pe-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none';

const SearchBar = () => {
  const [service, setService] = useState('');
  const [brand, setBrand] = useState('');
  const [area, setArea] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (area.trim()) params.set('query', area.trim());
    if (service) params.set('service', service);
    if (brand) params.set('brand', brand);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <section className="py-12 bg-white shadow-inner">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 -mt-20 relative z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('home.searchBar.title')}</h2>
          <form onSubmit={handleSearch}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search-service" className="block text-gray-700 text-sm font-medium mb-2">
                  {t('home.searchBar.serviceType')}
                </label>
                <div className="relative">
                  <select id="search-service" className={selectClass} value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">{t('home.searchBar.selectService')}</option>
                    {SERVICES.map(({ key }) => (
                      <option key={key} value={key}>
                        {t(`serviceNames.${key}`)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-gray-700" />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="search-brand" className="block text-gray-700 text-sm font-medium mb-2">
                  {t('home.searchBar.carBrand')}
                </label>
                <div className="relative">
                  <select id="search-brand" className={selectClass} value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="">{t('home.searchBar.selectBrand')}</option>
                    {CAR_BRANDS.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute inset-y-0 end-2 my-auto h-4 w-4 text-gray-700" />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="search-area" className="block text-gray-700 text-sm font-medium mb-2">
                  {t('home.searchBar.location')}
                </label>
                <div className="relative">
                  <input
                    id="search-area"
                    type="text"
                    placeholder={t('home.searchBar.locationPlaceholder')}
                    className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 ps-4 pe-9 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                  <MapPin className="pointer-events-none absolute inset-y-0 end-3 my-auto h-4 w-4 text-gray-700" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center md:self-end"
              >
                <Search className="h-5 w-5 me-2" /> {t('home.searchBar.search')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
