import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Truck, Phone } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';

const TowingService = () => {
  return (
    <section id="towing-service" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Towing Service</h2>
          <p className="text-lg text-gray-600">
            Professional, reliable towing services available 24/7 for all vehicle types and emergency situations.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/PZ6QWGkR/Towing.png" alt="Towing Service" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Towing & Recovery</h3>
            <p className="text-gray-600 mb-6">
              Whether you've broken down on the highway, been in an accident, or need your vehicle transported to a service center, our professional towing teams are ready to assist you anytime, day or night.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Phone className="h-5 w-5 text-yellow-600 mr-2" />
                Towing Hotline
              </h4>
              <div className="text-2xl font-bold text-yellow-600 mb-2">19876</div>
              <p className="text-gray-600 text-sm">
                Call our 24/7 hotline for immediate towing assistance
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Fast Response Times</h4>
                  <p className="text-gray-600 text-sm">
                    Our average response time is under 30 minutes in urban areas.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Modern Towing Fleet</h4>
                  <p className="text-gray-600 text-sm">
                    Our diverse fleet can handle everything from motorcycles to heavy-duty trucks.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Trained Professionals</h4>
                  <p className="text-gray-600 text-sm">
                    Our certified operators are trained to safely transport all types of vehicles.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Transparent Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Clear, upfront pricing with no hidden fees or surprises.
                  </p>
                </div>
              </div>
            </div>
            
            <BookNowButton 
              service="Towing Service"
              buttonText="Request Towing"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center"
            />
          </div>
        </div>
        
        {/* Services Offered */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Towing Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                  <Truck className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Towing</h3>
                <p className="text-gray-600 mb-4">
                  Standard towing service for vehicle transport within the city. Ideal for breakdowns, accidents, or when your car needs to be moved to a repair shop.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 149.99
                  </p>
                  <BookNowButton 
                    service="Local Towing"
                    price="From EGP 149.99"
                    duration="30-60 minutes"
                    className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Distance Towing</h3>
                <p className="text-gray-600 mb-4">
                  Safe, reliable transport for your vehicle over long distances. Perfect for relocations or when your vehicle needs to be moved between cities.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 6.99/km
                  </p>
                  <BookNowButton 
                    service="Long-Distance Towing"
                    price="From EGP 6.99/km"
                    className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Towing</h3>
                <p className="text-gray-600 mb-4">
                  Rapid response towing for emergency situations like accidents or breakdowns in dangerous locations. 24/7 availability with priority dispatch.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 199.99
                  </p>
                  <BookNowButton 
                    service="Emergency Towing"
                    price="From EGP 199.99"
                    duration="20-40 minutes"
                    className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flatbed Towing</h3>
                <p className="text-gray-600 mb-4">
                  Specialized flatbed towing for low-clearance vehicles, luxury cars, or damaged vehicles that cannot be towed using standard methods.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 249.99
                  </p>
                  <BookNowButton 
                    service="Flatbed Towing"
                    price="From EGP 249.99"
                    duration="30-60 minutes"
                    className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy-Duty Towing</h3>
                <p className="text-gray-600 mb-4">
                  Specialized equipment and trained operators for towing larger vehicles like buses, RVs, trucks, or commercial vehicles.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 349.99
                  </p>
                  <BookNowButton 
                    service="Heavy-Duty Towing"
                    price="From EGP 349.99"
                    duration="45-90 minutes"
                    className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduled Towing</h3>
                <p className="text-gray-600 mb-4">
                  Planned towing service for non-emergency situations. Schedule in advance for vehicle transport to service centers, events, or storage facilities.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 129.99
                  </p>
                  <BookNowButton 
                    service="Scheduled Towing"
                    price="From EGP 129.99"
                    className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Towing Membership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Towing Membership Plans</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-yellow-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Basic Plan</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-2">EGP 199/year</div>
                <p className="text-gray-600 text-sm">Essential towing coverage</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">2 Free tows per year (up to 20km)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Priority dispatch</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">10% discount on additional tows</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">24/7 phone support</span>
                  </li>
                </ul>
                <BookNowButton 
                  service="Basic Towing Membership"
                  price="EGP 199/year"
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6"
                  buttonText="Sign Up"
                />
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 border-2 border-yellow-600 transform scale-105">
              <div className="bg-yellow-600 p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Premium Plan</h4>
                <div className="text-3xl font-bold text-white mb-2">EGP 349/year</div>
                <p className="text-yellow-100 text-sm">Complete towing coverage</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">4 Free tows per year (up to 50km)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">VIP priority dispatch</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">20% discount on additional tows</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Free flatbed service when needed</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">24/7 dedicated support line</span>
                  </li>
                </ul>
                <BookNowButton 
                  service="Premium Towing Membership"
                  price="EGP 349/year"
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6"
                  buttonText="Sign Up"
                />
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-yellow-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Commercial Plan</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-2">EGP 899/year</div>
                <p className="text-gray-600 text-sm">For business fleets</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">8 Free tows per year (up to 100km)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Covers up to 5 vehicles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">25% discount on additional tows</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Heavy-duty towing included</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Account manager</span>
                  </li>
                </ul>
                <BookNowButton 
                  service="Commercial Towing Membership"
                  price="EGP 899/year"
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6"
                  buttonText="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Towing Assistance?</h3>
            <p className="text-gray-600 mb-6">
              We're available 24/7 to help with all your towing needs. Call our hotline or request towing service online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:19876" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" /> Call 19876
              </a>
              <BookNowButton 
                service="Emergency Towing"
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                buttonText="Request Online"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TowingService;