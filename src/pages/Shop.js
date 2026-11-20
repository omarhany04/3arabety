import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown, ChevronUp, Search, Frown } from 'react-feather';
import BrandFilter from '../components/common/shop/BrandFilter';
import ProductCard from '../components/common/ProductCard';
import { CAR_BRANDS, CATEGORIES, MAX_PRODUCT_PRICE, PRODUCTS } from '../data/products';
import { matchesQuery, productSearchText } from '../utils/search';
import { useTranslation } from '../i18n';

const SORTERS = {
  popular: (a, b) => b.reviews - a.reviews,
  rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
  'price-low': (a, b) => a.price - b.price,
  'price-high': (a, b) => b.price - a.price,
};
const SORT_KEYS = Object.keys(SORTERS);

const categoryCounts = PRODUCTS.reduce((counts, product) => {
  counts[product.category] = (counts[product.category] || 0) + 1;
  return counts;
}, {});

const brandCounts = PRODUCTS.reduce((counts, product) => {
  product.brands.forEach((brand) => {
    counts[brand] = (counts[brand] || 0) + 1;
  });
  return counts;
}, {});

const BRANDS_WITH_PRODUCTS = CAR_BRANDS.map((brand) => ({ ...brand, count: brandCounts[brand.id] || 0 }))
  .filter((brand) => brand.count > 0)
  .sort((a, b) => b.count - a.count);

const Shop = () => {
  const { t, formatPrice } = useTranslation();
  const [searchParams] = useSearchParams();

  const initialCategory = CATEGORIES.includes(searchParams.get('category')) ? searchParams.get('category') : 'all';
  const initialBrand = searchParams.get('brand');

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [brandFilter, setBrandFilter] = useState(brandCounts[initialBrand] ? [initialBrand] : []);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, MAX_PRODUCT_PRICE]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = viewMode === 'list' ? 6 : 9;

  // Keep the filters in sync when arriving from links such as "/shop?category=brakes"
  useEffect(() => {
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const query = searchParams.get('q');
    if (CATEGORIES.includes(category)) setCategoryFilter(category);
    if (brandCounts[brand]) setBrandFilter([brand]);
    if (query) setSearchQuery(query);
  }, [searchParams]);

  // Go back to the first page whenever the result set changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, brandFilter, priceRange, searchQuery, sortBy, viewMode]);

  const categories = CATEGORIES.filter((id) => categoryCounts[id]).map((id) => ({
    id,
    name: t(`categories.${id}`),
    count: categoryCounts[id],
  }));

  const sortedProducts = useMemo(() => {
    const filtered = PRODUCTS.filter((product) => {
      if (categoryFilter !== 'all' && product.category !== categoryFilter) return false;
      if (brandFilter.length > 0 && !brandFilter.some((brand) => product.brands.includes(brand))) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      if (searchQuery && !matchesQuery(productSearchText(product), searchQuery)) return false;
      return true;
    });
    return filtered.sort(SORTERS[sortBy]);
  }, [categoryFilter, brandFilter, priceRange, searchQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / productsPerPage));
  const firstIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(firstIndex, firstIndex + productsPerPage);

  const toggleBrand = (brandId) => {
    setBrandFilter((brands) => (brands.includes(brandId) ? brands.filter((b) => b !== brandId) : [...brands, brandId]));
  };

  const handlePriceChange = (event, index) => {
    const value = Math.min(Math.max(Number(event.target.value) || 0, 0), MAX_PRODUCT_PRICE);
    setPriceRange((range) => {
      const next = [...range];
      next[index] = value;
      if (next[0] > next[1]) next[index === 0 ? 1 : 0] = value;
      return next;
    });
  };

  const resetFilters = () => {
    setCategoryFilter('all');
    setBrandFilter([]);
    setPriceRange([0, MAX_PRODUCT_PRICE]);
    setSearchQuery('');
  };

  const changePage = (page) => {
    setCurrentPage(page);
    document.getElementById('shop-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categoryButtonClass = (active) =>
    `flex justify-between w-full py-1 px-2 rounded text-start hover:bg-gray-100 ${active ? 'font-bold text-blue-600' : ''}`;
  const chipClass = (active) => `py-2 px-3 text-sm rounded ${active ? 'bg-blue-600 text-white' : 'bg-gray-100'}`;

  const priceSliders = (
    <>
      <div className="flex justify-between mb-2 text-sm">
        <span>{formatPrice(priceRange[0])}</span>
        <span>{formatPrice(priceRange[1])}</span>
      </div>
      <div className="mb-4 space-y-2">
        <input
          type="range"
          min="0"
          max={MAX_PRODUCT_PRICE}
          step="50"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(e, 0)}
          className="w-full accent-blue-600"
          aria-label={t('shop.minPrice')}
        />
        <input
          type="range"
          min="0"
          max={MAX_PRODUCT_PRICE}
          step="50"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(e, 1)}
          className="w-full accent-blue-600"
          aria-label={t('shop.maxPrice')}
        />
      </div>
    </>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('shop.title')}</h1>
          <p className="text-lg text-gray-600">{t('shop.subtitle')}</p>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="search"
              className="w-full bg-white border border-gray-300 rounded-md py-3 ps-10 pe-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={t('shop.searchPlaceholder')}
              aria-label={t('shop.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute inset-y-0 start-3 my-auto h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.categories')}</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <button type="button" className={categoryButtonClass(categoryFilter === 'all')} onClick={() => setCategoryFilter('all')}>
                    <span>{t('shop.allProducts')}</span>
                    <span className="text-gray-500 text-sm">{PRODUCTS.length}</span>
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      type="button"
                      className={categoryButtonClass(categoryFilter === category.id)}
                      onClick={() => setCategoryFilter(category.id)}
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-500 text-sm">{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <BrandFilter
                selectedBrands={brandFilter}
                toggleBrand={toggleBrand}
                clearBrands={() => setBrandFilter([])}
                allBrands={BRANDS_WITH_PRODUCTS}
              />

              <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.priceRange')}</h3>
              <div className="px-2 mb-6">
                {priceSliders}
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-gray-600 text-sm">
                    <span className="block mb-1">{t('shop.minPrice')}</span>
                    <input
                      type="number"
                      min="0"
                      max={priceRange[1]}
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full bg-gray-50 border border-gray-300 rounded px-2 py-1 text-gray-700 text-sm"
                    />
                  </label>
                  <label className="text-gray-600 text-sm">
                    <span className="block mb-1">{t('shop.maxPrice')}</span>
                    <input
                      type="number"
                      min={priceRange[0]}
                      max={MAX_PRODUCT_PRICE}
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full bg-gray-50 border border-gray-300 rounded px-2 py-1 text-gray-700 text-sm"
                    />
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300 flex justify-center items-center"
              >
                <Filter className="h-4 w-4 me-2" /> {t('common.resetFilters')}
              </button>
            </div>
          </aside>

          {/* Filters (mobile) */}
          <div className="lg:hidden">
            <button
              type="button"
              className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center"
              onClick={() => setShowFilters((value) => !value)}
              aria-expanded={showFilters}
            >
              <span className="font-medium text-gray-700">{t('shop.filterAndSort')}</span>
              {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {showFilters && (
              <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.categories')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" className={chipClass(categoryFilter === 'all')} onClick={() => setCategoryFilter('all')}>
                      {t('shop.allProducts')}
                    </button>
                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category.id}
                        className={chipClass(categoryFilter === category.id)}
                        onClick={() => setCategoryFilter(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.brands')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {BRANDS_WITH_PRODUCTS.map((brand) => (
                      <button
                        type="button"
                        key={brand.id}
                        className={chipClass(brandFilter.includes(brand.id))}
                        onClick={() => toggleBrand(brand.id)}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.priceRange')}</h3>
                  <div className="px-2">{priceSliders}</div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">{t('shop.sortBy')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {SORT_KEYS.map((key) => (
                      <button type="button" key={key} className={chipClass(sortBy === key)} onClick={() => setSortBy(key)}>
                        {t(`shop.sort.${key}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300"
                    onClick={() => setShowFilters(false)}
                  >
                    {t('shop.applyFilters')}
                  </button>
                  <button
                    type="button"
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-md font-medium transition duration-300"
                    onClick={resetFilters}
                  >
                    {t('common.reset')}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="lg:w-3/4 scroll-mt-24" id="shop-results">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6 bg-white rounded-lg shadow-sm p-4">
              <p className="text-gray-600 text-sm" aria-live="polite">
                {t('shop.resultCount', { count: sortedProducts.length })}
              </p>
              <div className="hidden lg:flex items-center gap-6">
                <label className="flex items-center">
                  <span className="text-gray-600 me-2">{t('shop.sortBy')}:</span>
                  <select
                    className="bg-gray-50 border border-gray-300 rounded-md py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {SORT_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {t(`shop.sort.${key}`)}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="flex items-center">
                  <span className="text-gray-600 me-2">{t('shop.view')}:</span>
                  <button
                    type="button"
                    className={`p-1 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'} me-1`}
                    onClick={() => setViewMode('grid')}
                    aria-label={t('shop.gridView')}
                    aria-pressed={viewMode === 'grid'}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className={`p-1 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                    onClick={() => setViewMode('list')}
                    aria-label={t('shop.listView')}
                    aria-pressed={viewMode === 'list'}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Frown className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">{t('shop.noProducts')}</h3>
                <p className="mt-1 text-gray-500">{t('shop.noProductsHint')}</p>
                <button type="button" className="mt-4 text-blue-600 hover:text-blue-800 font-medium" onClick={resetFilters}>
                  {t('shop.resetAll')}
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} layout="list" />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav className="flex flex-wrap justify-center gap-2 mt-8" aria-label={t('shop.pagination')}>
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  {t('common.previous')}
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => changePage(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      currentPage === page ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  {t('common.next')}
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
