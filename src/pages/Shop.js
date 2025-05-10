// src/pages/Shop.js - Enhanced version with additional product categories and items
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Filter, Grid, List, ChevronDown, ChevronUp, Search } from 'react-feather';
import BrandFilter from '../components/common/shop/BrandFilter';
import { useCart } from '../context/CartContext';

const Shop = () => {
  // Cart functionality
  const { addItem } = useCart();

  // State for filters and products
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;


  // Sample categories (Updated to match the image categories)
  const categories = [
    { id: 'spare', name: 'Spare Parts', count: 124 },
    { id: 'fluids', name: 'Fluids', count: 85 },
    { id: 'batteries', name: 'Batteries', count: 63 },
    { id: 'lighting', name: 'Car Lighting', count: 41 },
    { id: 'carcare', name: 'Car Care', count: 38 },
    { id: 'accessories', name: 'Accessories', count: 54 },
    { id: 'engine', name: 'Engine Performance', count: 72 },
    { id: 'brakes', name: 'Brakes & Suspension', count: 67 },
    { id: 'electrical', name: 'Electrical', count: 53 },
    { id: 'filters', name: 'Filters', count: 48 },
    { id: 'cooling', name: 'Cooling System', count: 39 },
    { id: 'body', name: 'Body & Exterior', count: 45 },
    { id: 'interior', name: 'Interior', count: 62 }
  ];

  // Sample brands
  const brands = [
    { id: 'toyota', name: 'Toyota', count: 87 },
    { id: 'honda', name: 'Honda', count: 65 },
    { id: 'bmw', name: 'BMW', count: 43 },
    { id: 'mercedes', name: 'Mercedes', count: 56 },
    { id: 'ford', name: 'Ford', count: 48 },
    { id: 'chevrolet', name: 'Chevrolet', count: 39 },
    { id: 'audi', name: 'Audi', count: 34 },
    { id: 'nissan', name: 'Nissan', count: 42 },
    { id: 'hyundai', name: 'Hyundai', count: 38 },
    { id: 'kia', name: 'Kia', count: 32 },
    { id: 'volkswagen', name: 'Volkswagen', count: 36 },
    { id: 'peugeot', name: 'Peugeot', count: 29 },
    { id: 'suzuki', name: 'Suzuki', count: 25 },
    { id: 'renault', name: 'Renault', count: 27 },
    { id: 'opel', name: 'Opel', count: 19 },
    { id: 'mitsubishi', name: 'Mitsubishi', count: 18 },
    { id: 'bosch', name: 'Bosch', count: 64 },
    { id: 'castrol', name: 'Castrol', count: 37 },
    { id: 'mobil', name: 'Mobil', count: 31 },
    { id: 'shell', name: 'Shell', count: 29 }
  ];

  // Sample products (Enhanced with more items based on image categories)
  const allProducts = [
    // Spare Parts
    {
      id: 1,
      name: 'Premium Brake Disc',
      category: 'spare',
      description: 'High performance brake rotor',
      brand: ['toyota', 'honda', 'nissan'],
      price: 45.99,
      rating: 4.7,
      reviews: 58,
      image: 'https://i.ibb.co/YB2yPnCf/Break-Disc.png',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 2,
      name: 'Serpentine Belt',
      category: 'spare',
      description: 'Premium quality drive belt',
      brand: ['ford', 'chevrolet', 'toyota'],
      price: 29.99,
      rating: 4.5,
      reviews: 42,
      image: 'https://i.ibb.co/4nFpmYYK/Serpentine.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    
    // Fluids
    {
      id: 3,
      name: 'Synthetic Engine Oil',
      category: 'fluids',
      description: '5W-30, 5 liter container',
      brand: ['castrol', 'mobil', 'shell'],
      price: 1199.99,
      rating: 4.8,
      reviews: 122,
      image: 'https://i.ibb.co/Xf2sdYGg/Synthetic-Engine-Oil.jpg',
      badge: { text: 'Sale', color: 'red' },
      oldPrice: 44.99
    },
    {
      id: 4,
      name: 'Antifreeze & Coolant',
      category: 'fluids',
      description: 'All-season protection, 1 gallon',
      brand: ['shell', 'mobil'],
      price: 619.99,
      rating: 4.3,
      reviews: 37,
      image: 'https://i.ibb.co/FLn6rkN4/Radiator-Coolant.jpg',
      badge: { text: 'Sale', color: 'red' },
      oldPrice: 24.99
    },
    
    // Batteries
    {
      id: 5,
      name: 'Car Battery',
      category: 'batteries',
      description: '12V 60Ah, high performance',
      brand: ['bosch', 'toyota', 'honda', 'nissan', 'hyundai', 'kia'],
      price: 2499.99,
      rating: 4.7,
      reviews: 89,
      image: 'https://i.ibb.co/Sw4yjNs7/Car-Battery.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 6,
      name: 'Heavy Duty Truck Battery',
      category: 'batteries',
      description: '12V 100Ah, for commercial vehicles',
      brand: ['bosch', 'ford', 'chevrolet'],
      price: 4349.99,
      rating: 4.6,
      reviews: 48,
      image: 'https://i.ibb.co/4nsddYn7/Heavy-Battery.jpg',
      badge: { text: 'Few Left', color: 'yellow' }
    },
    
    // Car Lighting
    {
      id: 7,
      name: 'LED Headlight Pair',
      category: 'lighting',
      description: 'High/low beam, fits most models',
      brand: ['bosch', 'toyota', 'honda', 'bmw'],
      price: 149.99,
      rating: 4.9,
      reviews: 76,
      image: 'https://i.ibb.co/JjDtwb4R/Led.jpgs',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 8,
      name: 'Fog Light Kit',
      category: 'lighting',
      description: 'Universal fit with mounting hardware',
      brand: ['bmw', 'mercedes', 'volkswagen'],
      price: 65.99,
      rating: 4.4,
      reviews: 53,
      image: 'https://i.ibb.co/mVCZSwhk/Fog-Lights.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    
    // Car Care
    {
      id: 9,
      name: 'Car Cleaning Kit',
      category: 'carcare',
      description: 'Complete kit with shampoo, wax and microfiber cloths',
      brand: ['sonax'],
      price: 49.99,
      rating: 4.8,
      reviews: 112,
      image: 'https://i.ibb.co/S4YBKYQ1/Cleaning-Kit.jpg',
      badge: { text: 'Best Seller', color: 'green' }
    },
    {
      id: 10,
      name: 'Wheel Cleaner Spray',
      category: 'carcare',
      description: 'Professional grade, acid-free formula',
      brand: ['sonax'],
      price: 14.99,
      rating: 4.6,
      reviews: 87,
      image: 'https://i.ibb.co/35jf49BF/Wheel-Clean.webp',
      badge: { text: 'In Stock', color: 'green' }
    },
    
    // Accessories
    {
      id: 11,
      name: 'All-Weather Floor Mats',
      category: 'accessories',
      description: 'Set of 4, custom fit for most vehicles',
      brand: ['toyota', 'honda', 'ford'],
      price: 69.99,
      rating: 4.7,
      reviews: 156,
      image: 'https://i.ibb.co/kbL6XrG/Floor-Mats.png',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 12,
      name: 'Car Phone Mount',
      category: 'accessories',
      description: 'Universal fit, dashboard or vent mounting',
      brand: [],
      price: 19.99,
      rating: 4.5,
      reviews: 203,
      image: 'https://i.ibb.co/GGyLbqR/Phone-Holder.jpg',
      badge: { text: 'Sale', color: 'red' },
      oldPrice: 24.99
    },
    
    // Engine Performance
    {
      id: 13,
      name: 'High-Flow Air Filter',
      category: 'engine',
      description: 'Washable and reusable performance filter',
      brand: ['bmw', 'audi', 'mercedes'],
      price: 49.99,
      rating: 4.6,
      reviews: 78,
      image: 'https://i.ibb.co/k2xw4r2B/High-Flow-Air-Filter.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 14,
      name: 'Fuel Injector Cleaner',
      category: 'engine',
      description: 'Professional strength formula, 16oz bottle',
      brand: ['castrol', 'mobil', 'shell'],
      price: 12.99,
      rating: 4.4,
      reviews: 91,
      image: 'https://i.ibb.co/qMgZ1nBt/Injector.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    
    // Original products
    {
      id: 15,
      name: 'Premium Oil Filter',
      category: 'filters',
      description: 'Fits multiple vehicle makes',
      brand: ['toyota', 'honda', 'nissan'],
      price: 12.99,
      rating: 4.5,
      reviews: 42,
      image: 'https://i.ibb.co/cdfvy7k/oil-filter.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 16,
      name: 'Ceramic Brake Pads',
      category: 'brakes',
      description: 'Front set for Toyota/Honda',
      brand: ['toyota', 'honda'],
      price: 49.99,
      rating: 5,
      reviews: 67,
      image: 'https://i.ibb.co/Z6PCx1D9/Ceramic-Brakes.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 17,
      name: 'Platinum Spark Plugs',
      category: 'electrical',
      description: 'Set of 4, extended life',
      brand: ['ford', 'chevrolet', 'toyota'],
      price: 29.99,
      rating: 4.5,
      reviews: 53,
      image: 'https://i.ibb.co/cdfvy7k/spark-plugs.jpg',
      badge: { text: 'In Stock', color: 'green' }
    },
    {
      id: 18,
      name: 'Brake Rotors',
      category: 'brakes',
      description: 'Front pair, cross-drilled',
      brand: ['bmw', 'mercedes', 'audi'],
      price: 89.99,
      rating: 4.6,
      reviews: 43,
      image: 'https://i.ibb.co/4DGBSnK/brake-rotors.jpg',
      badge: { text: 'In Stock', color: 'green' }
    }
  ];

  // State for installation service
  const [installationServices, setInstallationServices] = useState({});

  const toggleInstallation = (productId) => {
    setInstallationServices(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    addItem(product, 1, installationServices[product.id] || false);
  };

  // Toggle brand filter
  const toggleBrand = (brandId) => {
    setBrandFilter(prevBrands => 
      prevBrands.includes(brandId)
        ? prevBrands.filter(b => b !== brandId)
        : [...prevBrands, brandId]
    );
  };

  // Filter products based on category, brand, price, and search
  const filteredProducts = allProducts.filter(product => {
    // Apply category filter
    if (categoryFilter !== 'all' && product.category !== categoryFilter) return false;
    
    // Apply brand filter
    if (brandFilter.length > 0 && !brandFilter.some(brand => product.brand.includes(brand))) return false;
    
    // Apply price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Apply search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // popular - by review count
        return b.reviews - a.reviews;
    }
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginatedProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Handler for price range filter
  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  // Reset all filters
  const resetFilters = () => {
    setCategoryFilter('all');
    setBrandFilter([]);
    setPriceRange([0, 10000]);
    setSearchQuery('');
  };

  const formatPrice = (price) =>
  new Intl.NumberFormat('en-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop Car Products</h2>
          <p className="text-lg text-gray-600">
            Browse our extensive collection of quality car parts, accessories, and maintenance products.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white border border-gray-300 rounded-md py-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for parts or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters - Desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Categories</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <button
                    className={`flex justify-between w-full py-1 px-2 rounded text-left hover:bg-gray-100 ${categoryFilter === 'all' ? 'font-bold text-blue-600' : ''}`}
                    onClick={() => setCategoryFilter('all')}
                  >
                    <span>All Products</span>
                    <span className="text-gray-500 text-sm">{allProducts.length}</span>
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      className={`flex justify-between w-full py-1 px-2 rounded text-left hover:bg-gray-100 ${categoryFilter === cat.id ? 'font-bold text-blue-600' : ''}`}
                      onClick={() => setCategoryFilter(cat.id)}
                    >
                      <span>{cat.name}</span>
                      <span className="text-gray-500 text-sm">{cat.count}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Brand Filter Component */}
              <BrandFilter 
                selectedBrands={brandFilter} 
                toggleBrand={toggleBrand} 
                allBrands={brands} 
              />

              <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Price Range</h3>
              <div className="px-2 mb-6">
                <div className="flex justify-between mb-2">
                  <span>EGP {priceRange[0]}</span>
                  <span>EGP {priceRange[1]}</span>
                </div>
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <span className="text-gray-600 text-sm mr-2">Min: EGP</span>
                    <input
                      type="number"
                      min="0"
                      max={priceRange[1]}
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full bg-gray-50 border border-gray-300 rounded px-2 py-1 text-gray-700 text-sm"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 text-sm mr-2">Max: EGP</span>
                    <input
                      type="number"
                      min={priceRange[0]}
                      max="10000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full bg-gray-50 border border-gray-300 rounded px-2 py-1 text-gray-700 text-sm"
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={resetFilters}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300 flex justify-center items-center"
              >
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </button>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className="font-medium text-gray-700">Filter & Sort</span>
              {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className={`py-2 px-3 text-sm rounded ${categoryFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                      onClick={() => setCategoryFilter('all')}
                    >
                      All Products
                    </button>
                    {categories.slice(0, 9).map(cat => (
                      <button
                        key={cat.id}
                        className={`py-2 px-3 text-sm rounded ${categoryFilter === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setCategoryFilter(cat.id)}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Brands</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {brands.slice(0, 8).map(brand => (
                      <button
                        key={brand.id}
                        className={`py-2 px-3 text-sm rounded ${brandFilter.includes(brand.id) ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => toggleBrand(brand.id)}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Price Range</h3>
                  <div className="px-2">
                    <div className="flex justify-between mb-2">
                      <span>EGP {priceRange[0]}</span>
                      <span>EGP {priceRange[1]}</span>
                    </div>
                    <div className="mb-4">
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="300"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg border-b border-gray-200 pb-3 mb-4">Sort By</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className={`py-2 px-3 text-sm rounded ${sortBy === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                      onClick={() => setSortBy('popular')}
                    >
                      Most Popular
                    </button>
                    <button
                      className={`py-2 px-3 text-sm rounded ${sortBy === 'rating' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                      onClick={() => setSortBy('rating')}
                    >
                      Highest Rated
                    </button>
                    <button
                      className={`py-2 px-3 text-sm rounded ${sortBy === 'price-low' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                      onClick={() => setSortBy('price-low')}
                    >
                      Price: Low to High
                    </button>
                    <button
                      className={`py-2 px-3 text-sm rounded ${sortBy === 'price-high' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                      onClick={() => setSortBy('price-high')}
                    >
                      Price: High to Low
                    </button>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </button>
                  <button 
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-md font-medium transition duration-300"
                    onClick={resetFilters}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Sort and View Options - Desktop */}
            <div className="hidden lg:flex justify-between items-center mb-6 bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select 
                  className="bg-gray-50 border border-gray-300 rounded-md py-1 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">View:</span>
                <button 
                  className={`p-1 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'} mr-1`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button 
                  className={`p-1 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products Display */}
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
                <button 
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  onClick={resetFilters}
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="relative">
                        <img src={product.image || `/images/placeholder/300/200`} alt={product.name} className="w-full h-48 object-cover" />
                        {product.badge && (
                          <div className="absolute top-2 right-2">
                            <span className={`bg-${product.badge.color}-500 text-white text-xs px-2 py-1 rounded-md`}>
                              {product.badge.text}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-gray-500 mb-1">
                          {product.brand.slice(0, 3).map((brandId, index) => {
                            const brandName = brands.find(b => b.id === brandId)?.name;
                            return (
                              <span key={brandId}>
                                {brandName}
                                {index < Math.min(product.brand.length, 3) - 1 && ", "}
                              </span>
                            );
                          })}
                          {product.brand.length > 3 && ` +${product.brand.length - 3} more`}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                                viewBox="0 0 24 24" stroke="currentColor"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            {product.oldPrice && (
                              <span className="text-gray-400 text-sm line-through mr-1">{formatPrice(product.oldPrice)}</span>
                            )}
                            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                          </div>
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition duration-300"
                            onClick={() => handleAddToCart(product)}
                            aria-label="Add to cart"
                          >
                            <ShoppingCart className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="mt-3">
                          <label className="flex items-center text-sm text-gray-600">
                            <input 
                              type="checkbox" 
                              className="form-checkbox h-4 w-4 text-blue-600"
                              checked={installationServices[product.id] || false}
                              onChange={() => toggleInstallation(product.id)}
                            />
                            <span className="ml-2">Add installation service</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {sortedProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative">
                          <img src={product.image || `/images/placeholder/300/200`} alt={product.name} className="w-full h-48 md:h-full object-cover" />
                          {product.badge && (
                            <div className="absolute top-2 right-2">
                              <span className={`bg-${product.badge.color}-500 text-white text-xs px-2 py-1 rounded-md`}>
                                {product.badge.text}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="text-xs text-gray-500 mb-1">
                            {product.brand.map((brandId, index) => {
                              const brandName = brands.find(b => b.id === brandId)?.name;
                              return (
                                <span key={brandId}>
                                  {brandName}
                                  {index < product.brand.length - 1 && ", "}
                                </span>
                              );
                            })}
                          </div>
                          <div className="flex justify-between">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h4>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                                  viewBox="0 0 24 24" stroke="currentColor"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                              ))}
                              <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="mt-auto flex justify-between items-center">
                            <div>
                              {product.oldPrice && (
                                <span className="text-gray-400 text-sm line-through mr-1">{formatPrice(product.oldPrice)}</span>
                              )}
                              <span className="text-2xl font-bold text-gray-900">{formatPrice(product.oldPrice)}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <label className="flex items-center text-sm text-gray-600">
                                <input 
                                  type="checkbox" 
                                  className="form-checkbox h-4 w-4 text-blue-600 mr-2"
                                  checked={installationServices[product.id] || false}
                                  onChange={() => toggleInstallation(product.id)}
                                />
                                Add installation
                              </label>
                              <button 
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300 flex items-center"
                                onClick={() => handleAddToCart(product)}
                              >
                                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
            <div className="flex justify-center mt-8">
              <nav className="flex space-x-2" aria-label="Pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;