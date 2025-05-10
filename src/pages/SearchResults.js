import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import ServiceCard from '../components/common/ServiceCard';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search') || '';
  const [results, setResults] = useState({ products: [], services: [], locations: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch search results from your API
    const fetchResults = async () => {
      setLoading(true);
      try {
        // Replace with your actual API call
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Search Results for "{query}"
        </h1>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-12 w-12 border-4 border-blue-600 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Services Section */}
            {results.services.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )}
            
            {/* Products Section */}
            {results.products.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
            
            {/* Locations Section */}
            {results.locations.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.locations.map(location => (
                    <div 
                      key={location.id}
                      className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600"
                    >
                      <h3 className="font-bold text-gray-900">{location.name}</h3>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* No Results */}
            {results.services.length === 0 && 
             results.products.length === 0 && 
             results.locations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No results found for "{query}"</p>
                <p className="mt-2 text-gray-500">Try different keywords or browse our services</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;