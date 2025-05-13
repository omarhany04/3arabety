import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import ServiceCard from '../components/common/ServiceCard';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Get the main search query (this will be displayed in the header)
  const query = searchParams.get('query') || '';
  
  // Get filter parameters
  const serviceType = searchParams.get('service') || '';
  const carBrand = searchParams.get('brand') || '';
  const locationParam = searchParams.get('location') || '';
  
  const [results, setResults] = useState({ products: [], services: [], locations: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch search results from your API
    const fetchResults = async () => {
      setLoading(true);
      try {
        // In a real app, you would make an API call with all parameters
        // For now, we'll simulate this with a timeout
        
        setTimeout(() => {
          // Here we would normally filter based on the search parameters
          // This is just a placeholder. In your actual implementation,
          // you would call your real search API with these parameters
          
          // Mock data for demonstration
          const mockData = {
            products: [],
            services: [],
            locations: []
          };
          
          // If we have search parameters, populate with some mock data
          if (query || serviceType || carBrand || locationParam) {
            // Add some sample products based on the search criteria
            if (serviceType === 'mechanical' || carBrand === 'toyota' || query.includes('mechanical')) {
              mockData.products.push({
                id: 1,
                name: 'Toyota Engine Oil Filter',
                description: 'Genuine Toyota part for optimal engine performance',
                rating: 4.8,
                reviews: 124,
                price: 24.99,
                image: 'https://i.ibb.co/cdfvy7k/oil-filter.jpg'
              });
            }
            
            if (serviceType === 'wash' || query.includes('wash')) {
              mockData.services.push({
                id: 1,
                icon: <div className="text-blue-600">🧼</div>,
                title: 'Premium Car Wash',
                description: 'Full exterior and interior cleaning with eco-friendly products',
                color: 'blue',
                link: '/services/car-wash-care'
              });
            }
            
            if (locationParam || query.includes('alexandria')) {
              mockData.locations.push({
                id: 1,
                name: 'مركز صيانة عربيتك',
                address: 'شارع مصطفى كامل، سموحة، الإسكندرية',
                type: 'service',
                rating: 4.6,
                reviews: 65
              });
            }
          }
          
          setResults(mockData);
          setLoading(false);
        }, 1000);
        
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, serviceType, carBrand, locationParam]);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Search Results for "{query}"
        </h1>
        
        {/* Active filters display */}
        {(serviceType || carBrand || locationParam) && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Active Filters:</h2>
            <div className="flex flex-wrap gap-2">
              {serviceType && (
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Service: {serviceType}
                </span>
              )}
              {carBrand && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Brand: {carBrand}
                </span>
              )}
              {locationParam && (
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Location: {locationParam}
                </span>
              )}
            </div>
          </div>
        )}
        
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
                <div className="mt-6">
                  <Link to="/services/mechanical-repairs" className="text-blue-600 hover:underline mr-4">
                    Mechanical Repairs
                  </Link>
                  <Link to="/services/car-wash-care" className="text-blue-600 hover:underline mr-4">
                    Car Wash & Care
                  </Link>
                  <Link to="/shop" className="text-blue-600 hover:underline">
                    Shop
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;