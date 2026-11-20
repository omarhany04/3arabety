import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, MapPin, Tool, ShoppingBag, Mail, Clock } from 'react-feather';
import { searchSite } from '../../utils/siteSearch';
import { useTranslation } from '../../i18n';

const RECENT_KEY = '3arabety.recentSearches';
const CATEGORIES = ['all', 'service', 'product', 'location'];

const loadRecent = () => {
  try {
    const stored = JSON.parse(window.localStorage.getItem(RECENT_KEY));
    return Array.isArray(stored) ? stored.slice(0, 5) : [];
  } catch {
    return [];
  }
};

const ModernSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [recentSearches, setRecentSearches] = useState(loadRecent);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  useEffect(() => {
    if (!isOpen) return undefined;
    inputRef.current?.focus();
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const groups = useMemo(() => {
    if (!query.trim()) return [];
    const { services, products, locations } = searchSite({ query });
    const all = [
      {
        category: 'service',
        items: services.map((service) => ({ id: service.key, label: t(`serviceNames.${service.key}`), url: service.path, Icon: Tool })),
      },
      {
        category: 'product',
        items: products.slice(0, 6).map((product) => ({
          id: product.id,
          label: t(`products.${product.slug}.name`),
          url: `/shop?q=${encodeURIComponent(t(`products.${product.slug}.name`))}`,
          image: product.image,
          Icon: ShoppingBag,
        })),
      },
      {
        category: 'location',
        items: locations.slice(0, 4).map((location) => ({ id: location.id, label: location.name[language], url: '/locations', Icon: MapPin })),
      },
    ];
    return all.filter((group) => group.items.length > 0 && (activeCategory === 'all' || group.category === activeCategory));
  }, [query, activeCategory, t, language]);

  const rememberSearch = (term) => {
    const value = term.trim();
    if (!value) return;
    const updated = [value, ...recentSearches.filter((item) => item !== value)].slice(0, 5);
    setRecentSearches(updated);
    try {
      window.localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    } catch {
      /* ignore storage errors */
    }
  };

  const close = () => setIsOpen(false);

  const goTo = (url, term) => {
    rememberSearch(term);
    close();
    navigate(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    goTo(`/search?query=${encodeURIComponent(query.trim())}`, query);
  };

  const quickLinks = [
    { url: '/services/mechanical-repairs', label: t('serviceNames.mechanical'), Icon: Tool, className: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
    { url: '/shop', label: t('search.shopParts'), Icon: ShoppingBag, className: 'bg-purple-50 hover:bg-purple-100 text-purple-700' },
    { url: '/locations', label: t('search.findLocations'), Icon: MapPin, className: 'bg-green-50 hover:bg-green-100 text-green-700' },
    { url: '/contact', label: t('nav.contact'), Icon: Mail, className: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700' },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition duration-300 flex items-center"
        aria-label={t('nav.openSearch')}
      >
        <Search className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-16 px-4" onMouseDown={close}>
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t('search.title')}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className="p-4 border-b border-gray-200">
              <div className="flex items-center bg-gray-50 rounded-lg overflow-hidden">
                <Search className="ms-4 h-5 w-5 text-gray-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t('search.placeholder')}
                  aria-label={t('search.placeholder')}
                  className="w-full py-3 px-4 bg-transparent focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      inputRef.current?.focus();
                    }}
                    className="pe-4 text-gray-400 hover:text-gray-600"
                    aria-label={t('search.clear')}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-4">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`px-3 py-1 text-sm rounded-full ${
                      activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t(`search.categories.${category}`)}
                  </button>
                ))}
              </div>
            </form>

            <div className="max-h-96 overflow-y-auto p-4">
              {query && groups.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">{t('search.noResultsFor', { query })}</p>
                  <p className="text-sm text-gray-400 mt-2">{t('search.tryAgain')}</p>
                </div>
              )}

              {groups.length > 0 && (
                <div className="space-y-6">
                  {groups.map((group) => (
                    <div key={group.category}>
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">{t(`search.categories.${group.category}`)}</h3>
                      <ul className="divide-y divide-gray-100">
                        {group.items.map((item) => (
                          <li key={`${group.category}-${item.id}`}>
                            <button
                              type="button"
                              className="w-full p-3 hover:bg-gray-50 transition duration-200 flex items-center text-start"
                              onClick={() => goTo(item.url, item.label)}
                            >
                              {item.image ? (
                                <img src={item.image} alt="" width="32" height="32" className="w-8 h-8 rounded object-cover me-3 flex-shrink-0" />
                              ) : (
                                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center me-3">
                                  <item.Icon size={16} />
                                </span>
                              )}
                              <span className="flex-1 text-gray-800 font-medium">{item.label}</span>
                              <ArrowRight className="h-4 w-4 text-gray-400 rtl:-scale-x-100" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {!query && recentSearches.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">{t('search.recent')}</h3>
                  <ul className="divide-y divide-gray-100">
                    {recentSearches.map((term) => (
                      <li key={term}>
                        <button
                          type="button"
                          className="w-full p-3 hover:bg-gray-50 transition duration-200 flex items-center text-start"
                          onClick={() => setQuery(term)}
                        >
                          <Clock className="h-4 w-4 text-gray-400 me-3" />
                          <span className="text-gray-700">{term}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!query && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">{t('search.quickLinks')}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map(({ url, label, Icon, className }) => (
                      <button
                        key={url}
                        type="button"
                        onClick={() => goTo(url)}
                        className={`flex items-center p-3 rounded-lg transition duration-200 text-start ${className}`}
                      >
                        <Icon className="h-5 w-5 me-2 flex-shrink-0" />
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 p-4 flex justify-between">
              <button type="button" onClick={close} className="text-gray-600 hover:text-gray-900">
                {t('common.close')}
              </button>
              {query && (
                <button type="button" onClick={handleSubmit} className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  {t('search.viewAll')} <ArrowRight className="h-4 w-4 ms-1 rtl:-scale-x-100" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModernSearch;
