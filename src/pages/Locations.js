import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Filter } from 'react-feather';

const Locations = () => {
  // State for filters
  const [serviceType, setServiceType] = useState('all');
  const [distance, setDistance] = useState('10');
  const [rating, setRating] = useState('any');

  // Sample location data
  const locations = [
    {
      id: 1,
      name: '3arabety Service Center',
      address: '123 Main Street, Downtown',
      lat: 40.7128,
      lng: -74.0060,
      type: 'service',
      rating: 4.5,
      reviews: 47,
      isOpen: true
    },
    {
      id: 2,
      name: 'Premium Auto Parts',
      address: '456 Park Avenue, Midtown',
      lat: 40.7200,
      lng: -73.9950,
      type: 'parts',
      rating: 4.0,
      reviews: 32,
      isOpen: true
    },
    {
      id: 3,
      name: 'City Car Wash',
      address: '789 Oak Street, Westside',
      lat: 40.7050,
      lng: -74.0150,
      type: 'wash',
      rating: 3.5,
      reviews: 19,
      isOpen: false
    }
  ];

  // Filter locations based on selected filters
  const filteredLocations = locations.filter(location => {
    if (serviceType !== 'all' && location.type !== serviceType) return false;
    if (rating !== 'any') {
      const minRating = parseInt(rating.split('+')[0]);
      if (location.rating < minRating) return false;
    }
    return true;
  });

  // Initialize map after component mounts (for client-side rendering)
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Services Near You</h2>
          <p className="text-lg text-gray-600">
            Locate nearby mechanics, car dealerships, and distributors on our interactive map.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">Service Type</label>
              <div className="relative">
                <select 
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={serviceType}
                  onChange={e => setServiceType(e.target.value)}
                >
                  <option value="all">All Services</option>
                  <option value="service">Mechanic Workshops</option>
                  <option value="parts">Parts Distributors</option>
                  <option value="wash">Car Wash</option>
                  <option value="towing">Towing Services</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">Distance</label>
              <div className="relative">
                <select 
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                >
                  <option value="5">5 km</option>
                  <option value="10">10 km</option>
                  <option value="20">20 km</option>
                  <option value="50">50 km</option>
                  <option value="100">100 km</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">Rating</label>
              <div className="relative">
                <select 
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={rating}
                  onChange={e => setRating(e.target.value)}
                >
                  <option value="any">Any Rating</option>
                  <option value="4+">4+ Stars</option>
                  <option value="3+">3+ Stars</option>
                  <option value="2+">2+ Stars</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center self-end">
              <Filter className="h-5 w-5 mr-2" /> Filter
            </button>
          </div>
          
          {isMounted && (
            <div className="h-96 w-full rounded-lg overflow-hidden mb-6">
              <MapContainer 
                center={[40.7128, -74.0060]} 
                zoom={13} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredLocations.map(location => (
                  <Marker
                    key={location.id}
                    position={[location.lat, location.lng]}
                  >
                    <Popup>
                      <div>
                        <h3 className="font-bold">{location.name}</h3>
                        <p className="text-sm">{location.address}</p>
                        <div className="flex text-yellow-400 my-1">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(location.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({location.reviews})</span>
                        </div>
                        <p className={`text-sm ${location.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                          {location.isOpen ? 'Open Now' : 'Closed'}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLocations.map(location => (
              <div key={location.id} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">{location.name}</h4>
                <p className="text-gray-600 text-sm">{location.address}</p>
                <div className="flex text-yellow-400 my-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(location.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">({location.reviews} reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${location.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                    {location.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                  <a href="#" className="text-blue-600 hover:underline text-sm">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;