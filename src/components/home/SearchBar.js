import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, ChevronDown } from 'react-feather';

const SearchBar = () => {
  const [serviceType, setServiceType] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Create search query string
    const queryParams = new URLSearchParams();
    
    // Use the location as the primary search term if provided
    // otherwise use a combination of service and brand
    let mainSearchTerm = location;
    
    if (!mainSearchTerm && serviceType) {
      mainSearchTerm = serviceType;
    }
    
    if (!mainSearchTerm && carBrand) {
      mainSearchTerm = carBrand;
    }
    
    // If no specific inputs, use a default search term that will show all results
    if (!mainSearchTerm) {
      mainSearchTerm = "all services";
    }
    
    // Add the main search query
    queryParams.append('query', mainSearchTerm);
    
    // Add the filter parameters separately
    if (serviceType) {
      queryParams.append('service', serviceType);
    }
    
    if (carBrand) {
      queryParams.append('brand', carBrand);
    }
    
    if (location) {
      queryParams.append('location', location);
    }
    
    // Navigate to search results page with query parameters
    navigate(`/search?${queryParams.toString()}`);
  };

  return (
    <section className="py-12 bg-white shadow-inner">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 -mt-20 relative z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Services Near You</h2>
          <form onSubmit={handleSearch}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">Service Type</label>
                <div className="relative">
                  <select 
                    className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option value="">Select Service Type</option>
                    <option value="mechanical">Mechanical Repair</option>
                    <option value="body">Body Repair</option>
                    <option value="maintenance">Routine Maintenance</option>
                    <option value="towing">Towing Service</option>
                    <option value="wash">Car Wash</option>
                    <option value="inspection">Inspection</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">Car Brand</label>
                <div className="relative">
                  <select 
                    className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    value={carBrand}
                    onChange={(e) => setCarBrand(e.target.value)}
                  >
                    <option value="">Select Car Brand</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="ford">Ford</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="nissan">Nissan</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter your location" 
                    className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <MapPin className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center md:self-end">
                <Search className="h-5 w-5 mr-2" /> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;