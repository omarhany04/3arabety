import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Filter, MapPin, Phone, Clock, Star } from 'react-feather';
import L from 'leaflet';

// Simple circular red dot icon
const createDotIcon = (color = 'red', size = 10) => {
  return L.divIcon({
    className: 'custom-dot-icon',
    html: `<span style="
      background-color: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      display: block;
      box-shadow: 0 0 2px rgba(0,0,0,0.5);
    "></span>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2]
  });
};

// Simple red dot
const redDot = createDotIcon('red', 12);
// Component to set map view to proper coordinates
const MapViewSetter = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const Locations = () => {
  // State for filters
  const [serviceType, setServiceType] = useState('all');
  const [distance, setDistance] = useState('10');
  const [rating, setRating] = useState('any');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState([31.2001, 29.9187]); // Alexandria coordinates
  const [mapZoom, setMapZoom] = useState(12);

  // Sample location data (combined with the new locations)
  const locations = [
    {
      id: 1,
      name: 'مركز صيانة عربيتك',
      address: 'شارع مصطفى كامل، سموحة، الإسكندرية',
      lat: 31.2156,
      lng: 29.9553,
      type: 'service',
      rating: 4.6,
      reviews: 65,
      isOpen: true,
      phone: '(+20) 12 3456 7893',
      hours: '9:00 AM - 8:00 PM',
      services: ['Engine Repair', 'Diagnostics', 'Electrical Services']
    },
    {
      id: 2,
      name: 'قطع غيار أوتو بلس',
      address: 'شارع جمال عبد الناصر، ميامي، الإسكندرية',
      lat: 31.2471,
      lng: 29.9632,
      type: 'parts',
      rating: 4.3,
      reviews: 48,
      isOpen: false,
      phone: '(+20) 12 3456 7894',
      hours: '9:30 AM - 9:00 PM',
      services: ['OEM Parts', 'Aftermarket Parts', 'Accessories']
    },
    {
      id: 3,
      name: 'كار ووش النزهة',
      address: 'شارع النزهة، سيدي بشر، الإسكندرية',
      lat: 31.2433,
      lng: 29.9768,
      type: 'wash',
      rating: 3.8,
      reviews: 27,
      isOpen: true,
      phone: '(+20) 12 3456 7895',
      hours: '8:00 AM - 10:00 PM',
      services: ['Express Wash', 'Premium Detailing', 'Interior Cleaning']
    },
    {
      id: 4,
      name: 'ونش إنقاذ الطريق',
      address: 'الطريق الصحراوي، مدخل الإسكندرية',
      lat: 31.0625,
      lng: 29.7762,
      type: 'towing',
      rating: 4.1,
      reviews: 15,
      isOpen: true,
      phone: '(+20) 12 3456 7896',
      hours: '24/7 Service',
      services: ['Emergency Towing', 'Roadside Assistance', 'Accident Recovery']
    },
    {
      id: 5,
      name: 'خدمة الطريق السريع',
      address: 'طريق إسكندرية القاهرة السريع، العامرية، الإسكندرية',
      lat: 31.1057,
      lng: 29.7695,
      type: 'service',
      rating: 4.4,
      reviews: 32,
      isOpen: true,
      phone: '(+20) 12 3456 7897',
      hours: '7:00 AM - 11:00 PM',
      services: ['Mobile Repair', 'Battery Service', 'Tire Change']
    },
    {
      id: 6,
      name: 'مركز الطارق لخدمات السيارات',
      address: 'طريق الكورنيش، سيدي بشر، الإسكندرية',
      lat: 31.2519,
      lng: 29.9860,
      type: 'service',
      rating: 4.6,
      reviews: 85,
      isOpen: true,
      phone: '(+20) 12 3456 7890',
      hours: '9:00 AM - 9:00 PM',
      services: ['Mechanical Repairs', 'Oil Change', 'Brake Service']
    },
    {
      id: 7,
      name: 'أبو اليزيد لقطع غيار السيارات',
      address: 'شارع الحرية، سموحة، الإسكندرية',
      lat: 31.2146,
      lng: 29.9442,
      type: 'parts',
      rating: 4.2,
      reviews: 64,
      isOpen: true,
      phone: '(+20) 12 3456 7891',
      hours: '8:30 AM - 8:00 PM',
      services: ['Spare Parts', 'Accessories', 'Electronics']
    },
    {
      id: 8,
      name: 'سبيد لغسيل السيارات',
      address: 'شارع مصطفى كامل، رشدي، الإسكندرية',
      lat: 31.2237,
      lng: 29.9576,
      type: 'wash',
      rating: 4.0,
      reviews: 40,
      isOpen: false,
      phone: '(+20) 12 3456 7892',
      hours: '8:00 AM - 10:00 PM',
      services: ['Car Wash', 'Interior Cleaning', 'Polishing']
    },
    {
      id: 9,
      name: 'المركز الألماني للسيارات',
      address: 'شارع أبو قير، المنتزه، الإسكندرية',
      lat: 31.2742,
      lng: 30.0055,
      type: 'service',
      rating: 4.8,
      reviews: 112,
      isOpen: true,
      phone: '(+20) 12 3456 7898',
      hours: '8:00 AM - 8:00 PM',
      services: ['German Car Specialist', 'Computer Diagnostics', 'Performance Tuning', 'Transmission Repair']
    }
    ];

  // Selected location for detailed view
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Filter locations based on selected filters and search
  const filteredLocations = locations.filter(location => {
    // Filter by service type
    if (serviceType !== 'all' && location.type !== serviceType) return false;
    
    // Filter by rating
    if (rating !== 'any') {
      const minRating = parseInt(rating.split('+')[0]);
      if (location.rating < minRating) return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        location.name.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query) ||
        location.services.some(service => service.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  // Center map on selected location
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setMapCenter([location.lat, location.lng]);
    setMapZoom(15);
  };

  // Reset location view
  const handleResetView = () => {
    setSelectedLocation(null);
    setMapCenter([31.2001, 29.9187]); // Alexandria center
    setMapZoom(12);
  };

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
            Locate nearby mechanics, parts suppliers, car wash centers, and towing services on our interactive map.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          {/* Search bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for locations or services..."
                className="w-full bg-gray-50 border border-gray-300 rounded-md py-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">Service Type</label>
              <div className="relative">
                <select 
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
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
                  onChange={(e) => setDistance(e.target.value)}
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
                  onChange={(e) => setRating(e.target.value)}
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
          
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Map Column */}
            <div className="lg:w-2/3">
              {isMounted && (
                <div className="h-96 w-full rounded-lg overflow-hidden mb-6">
                  <MapContainer 
                    center={mapCenter}
                    zoom={mapZoom}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <MapViewSetter center={mapCenter} zoom={mapZoom} />
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {filteredLocations.map(location => (
                      <Marker
                        key={location.id}
                        position={[location.lat, location.lng]}
                        icon={redDot}
                        eventHandlers={{
                          click: () => handleLocationSelect(location)
                        }}
                      >
                        <Popup>
                          <div className="p-1">
                            <h3 className="font-bold text-lg">{location.name}</h3>
                            <p className="text-sm text-gray-600">{location.address}</p>
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
                            <p className={`text-sm ${location.isOpen ? 'text-green-600' : 'text-red-600'} font-medium`}>
                              {location.isOpen ? 'Open Now' : 'Closed'}
                            </p>
                            <button 
                              onClick={() => handleLocationSelect(location)}
                              className="mt-2 text-blue-600 text-sm font-medium hover:underline"
                            >
                              View Details
                            </button>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              )}
            </div>
            
            {/* Details Column */}
            <div className="lg:w-1/3">
              {selectedLocation ? (
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{selectedLocation.name}</h3>
                    <button 
                      onClick={handleResetView}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      ← Back to all
                    </button>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(selectedLocation.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-2">{selectedLocation.rating} ({selectedLocation.reviews} reviews)</span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Address</h4>
                        <p className="text-gray-600">{selectedLocation.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600">{selectedLocation.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Hours</h4>
                        <p className="text-gray-600">{selectedLocation.hours}</p>
                        <p className={`text-sm font-medium ${selectedLocation.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                          {selectedLocation.isOpen ? 'Open Now' : 'Closed'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Services</h4>
                    <ul className="space-y-1">
                      {selectedLocation.services.map((service, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="h-4 w-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Locations</h3>
                  <p className="text-gray-600 mb-6">
                    Click on a location marker on the map or from the list below to view detailed information.
                  </p>
                  
                  <div className="space-y-2">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.slice(0, 5).map(location => (
                        <button
                          key={location.id}
                          onClick={() => handleLocationSelect(location)}
                          className="w-full text-left p-3 bg-white rounded-md shadow-sm hover:shadow-md transition duration-200 border-l-4 border-blue-600"
                        >
                          <h4 className="font-bold text-gray-900">{location.name}</h4>
                          <div className="flex justify-between">
                            <p className="text-gray-600 text-sm">{location.address}</p>
                            <span className={`text-sm font-medium ${location.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                              {location.isOpen ? 'Open' : 'Closed'}
                            </span>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="text-center p-8">
                        <svg className="h-10 w-10 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-600">No locations match your search criteria.</p>
                        <button 
                          onClick={() => {
                            setServiceType('all');
                            setRating('any');
                            setSearchQuery('');
                          }}
                          className="mt-3 text-blue-600 hover:underline text-sm"
                        >
                          Reset filters
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {filteredLocations.length > 5 && (
                    <p className="text-right mt-3 text-sm text-gray-500">
                      Showing 5 of {filteredLocations.length} results
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Location Cards Grid */}
          <h3 className="text-xl font-bold text-gray-900 mt-10 mb-6">All Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLocations.map(location => (
              <div 
                key={location.id} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 cursor-pointer border-l-4 border-blue-600"
                onClick={() => handleLocationSelect(location)}
              >
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
                  <span className="text-blue-600 hover:underline text-sm">View Details</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredLocations.length === 0 && (
            <div className="text-center p-12 bg-gray-50 rounded-lg mt-4">
              <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Locations Found</h3>
              <p className="text-gray-600 mb-4">No service centers match your current search criteria.</p>
              <button 
                onClick={() => {
                  setServiceType('all');
                  setRating('any');
                  setSearchQuery('');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Locations;