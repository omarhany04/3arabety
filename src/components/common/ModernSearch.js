import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, MapPin, Tool, ShoppingBag } from 'react-feather';

// Sample data for services, products, and locations
const mockServices = [
  { id: 1, name: 'Mechanical Repairs', category: 'service', url: '/services/mechanical-repairs', icon: <Tool size={16} /> },
  { id: 2, name: 'Emergency Assistance', category: 'service', url: '/services/emergency-assistance', icon: <Tool size={16} /> },
  { id: 3, name: 'Inspection Services', category: 'service', url: '/services/inspection-services', icon: <Tool size={16} /> },
  { id: 4, name: 'Spare Parts Supply', category: 'service', url: '/services/spare-parts-supply', icon: <Tool size={16} /> },
  { id: 5, name: 'Towing Service', category: 'service', url: '/services/towing-service', icon: <Tool size={16} /> },
  { id: 6, name: 'Car Wash & Care', category: 'service', url: '/services/car-wash-care', icon: <Tool size={16} /> },
];

const mockProducts = [
  { id: 1, name: 'Premium Engine Oil', category: 'product', url: '/shop', icon: <ShoppingBag size={16} /> },
  { id: 2, name: 'Brake Pad Set', category: 'product', url: '/shop', icon: <ShoppingBag size={16} /> },
  { id: 3, name: 'Air Filter', category: 'product', url: '/shop', icon: <ShoppingBag size={16} /> },
  { id: 4, name: 'Car Battery', category: 'product', url: '/shop', icon: <ShoppingBag size={16} /> },
  { id: 5, name: 'LED Headlight Pair', category: 'product', url: '/shop', icon: <ShoppingBag size={16} /> },
];

const mockLocations = [
  { id: 1, name: 'مركز صيانة عربيتك - سموحة', category: 'location', url: '/locations', icon: <MapPin size={16} /> },
  { id: 2, name: 'قطع غيار أوتو بلس - ميامي', category: 'location', url: '/locations', icon: <MapPin size={16} /> },
  { id: 3, name: 'كار ووش النزهة - سيدي بشر', category: 'location', url: '/locations', icon: <MapPin size={16} /> },
  { id: 4, name: 'مركز الطارق - الكورنيش', category: 'location', url: '/locations', icon: <MapPin size={16} /> },
];

// Combine all searchable items
const allItems = [...mockServices, ...mockProducts, ...mockLocations];

// Category labels for grouping
const categoryLabels = {
  service: 'Services',
  product: 'Products',
  location: 'Locations'
};

const ModernSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Focus input when search is opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    // Simulate loading state
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Filter based on search term and active category
      let filteredResults = allItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        (activeCategory === 'all' || item.category === activeCategory)
      );
      
      setResults(filteredResults);
      setLoading(false);
    }, 300);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (query.trim() === '') return;
    
    // Save to recent searches
    const updatedRecentSearches = [
      query,
      ...recentSearches.filter(item => item !== query).slice(0, 4)
    ];
    setRecentSearches(updatedRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecentSearches));
    
    // Navigate to search results page (would use useNavigate in real implementation)
    window.location.href = `/shop?search=${encodeURIComponent(query)}`;
    setIsOpen(false);
  };

  // Clear search query and results
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Handle clicking on a recent search term
  const handleRecentSearch = (term) => {
    setQuery(term);
    
    // Simulate loading state
    setLoading(true);
    
    // Filter based on the selected recent search
    setTimeout(() => {
      let filteredResults = allItems.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase()) && 
        (activeCategory === 'all' || item.category === activeCategory)
      );
      
      setResults(filteredResults);
      setLoading(false);
    }, 300);
  };

  // Handle selecting a result
  const handleSelectResult = (item) => {
    // Save to recent searches
    const searchTerm = item.name;
    const updatedRecentSearches = [
      searchTerm,
      ...recentSearches.filter(term => term !== searchTerm).slice(0, 4)
    ];
    setRecentSearches(updatedRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecentSearches));
    
    // Navigate to the selected item's URL (would use useNavigate in real implementation)
    window.location.href = item.url;
    setIsOpen(false);
  };

  // Group results by category
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Quick Links component
  const QuickLinks = () => (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-500 mb-2">Quick Links</h3>
      <div className="grid grid-cols-2 gap-3">
        <a 
          href="/services/mechanical-repairs" 
          className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          <Tool className="h-5 w-5 mr-2" />
          <span>Mechanical Repairs</span>
        </a>
        <a 
          href="/shop" 
          className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          <span>Shop Parts</span>
        </a>
        <a 
          href="/locations" 
          className="flex items-center p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          <MapPin className="h-5 w-5 mr-2" />
          <span>Find Locations</span>
        </a>
        <a 
          href="/contact" 
          className="flex items-center p-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative" ref={searchContainerRef}>
      {/* Search Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition duration-300 flex items-center"
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden">
            {/* Search Form */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-lg overflow-hidden">
                  <span className="pl-4 text-gray-400">
                    <Search className="h-5 w-5" />
                  </span>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                    placeholder="Search for services, products, locations..."
                    className="w-full py-3 px-4 bg-transparent focus:outline-none"
                  />
                  {query && (
                    <button 
                      type="button" 
                      onClick={clearSearch}
                      className="pr-4 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
                
                {/* Category Filters */}
                <div className="flex items-center space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1 text-sm rounded-full ${
                      activeCategory === 'all' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {Object.keys(categoryLabels).map(category => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        activeCategory === category 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {categoryLabels[category]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto p-4">
              {/* Loading State */}
              {loading && (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                </div>
              )}
              
              {/* Results Content */}
              {!loading && (
                <>
                  {/* No Results */}
                  {query && results.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No results found for "{query}"</p>
                      <p className="text-sm text-gray-400 mt-2">Try different keywords or browse our services</p>
                    </div>
                  )}
                  
                  {/* Grouped Results */}
                  {Object.keys(groupedResults).length > 0 && (
                    <div className="space-y-6">
                      {Object.keys(groupedResults).map(category => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-gray-500 mb-2">
                            {categoryLabels[category]}
                          </h3>
                          <div className="bg-white rounded-lg divide-y divide-gray-100">
                            {groupedResults[category].map(item => (
                              <div 
                                key={`${item.category}-${item.id}`}
                                className="p-3 hover:bg-gray-50 cursor-pointer transition duration-200 flex items-center"
                                onClick={() => handleSelectResult(item)}
                              >
                                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <p className="text-gray-800 font-medium">{item.name}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-gray-400" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Recent Searches (show only if no query or results) */}
                  {(!query || results.length === 0) && recentSearches.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">Recent Searches</h3>
                      <div className="bg-white rounded-lg divide-y divide-gray-100">
                        {recentSearches.map((term, index) => (
                          <div 
                            key={index}
                            className="p-3 hover:bg-gray-50 cursor-pointer transition duration-200 flex items-center"
                            onClick={() => handleRecentSearch(term)}
                          >
                            <Search className="h-4 w-4 text-gray-400 mr-3" />
                            <span className="text-gray-700">{term}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Quick Links (show only if no query) */}
                  {!query && <QuickLinks />}
                </>
              )}
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-200 p-4 flex justify-between">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
              {query && (
                <button
                  onClick={handleSearchSubmit}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View all results <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernSearch;