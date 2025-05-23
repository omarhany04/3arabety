import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Zap, Wind, TrendingUp, Droplet, Sun } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';

const CarWashCare = () => {
  return (
    <section id="car-wash-care" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Car Wash & Care</h2>
          <p className="text-lg text-gray-600">
            Professional cleaning and detailing services to keep your vehicle looking its best inside and out.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/7dFN19dh/CarWash.jpg" alt="Car Wash & Care" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Car Cleaning Services</h3>
            <p className="text-gray-600 mb-6">
              From quick exterior washes to comprehensive detailing packages, our professional cleaning services will have your vehicle looking showroom-ready.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Eco-Friendly Products</h4>
                  <p className="text-gray-600 text-sm">
                    We use environmentally friendly cleaning products that are effective yet gentle on your vehicle and the planet.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Trained Detailers</h4>
                  <p className="text-gray-600 text-sm">
                    Our team of professional detailers is trained in the latest techniques and technologies for optimal results.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Multiple Locations</h4>
                  <p className="text-gray-600 text-sm">
                    Convenient service centers throughout the city with both drive-through and appointment options.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Mobile Services Available</h4>
                  <p className="text-gray-600 text-sm">
                    We can come to your home or office to clean your vehicle at your convenience.
                  </p>
                </div>
              </div>
            </div>
            
            <BookNowButton 
              service="Car Wash & Care"
              buttonText="Book a Wash"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
            />
          </div>
        </div>
        
        {/* Service Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Packages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Express Wash</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">EGP 19.99</div>
                <p className="text-gray-600 text-sm">Quick exterior clean</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Exterior Wash</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Wheel Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Tire Shine</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Interior Cleaning</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Waxing</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-500">Duration: 15-20 minutes</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-gray-900">EGP 19.99</span>
                  <BookNowButton 
                    service="Express Wash"
                    price="EGP 19.99"
                    duration="15-20 minutes"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Deluxe Wash</h4>
                <div className="text-3xl font-bold text-white mb-2">EGP 49.99</div>
                <p className="text-blue-100 text-sm">Complete interior & exterior</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">All Express Services</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Hand-Wash & Dry</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Interior Vacuum</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Dashboard & Console Cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Window Cleaning</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-500">Duration: 45-60 minutes</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-gray-900">EGP 49.99</span>
                  <BookNowButton 
                    service="Deluxe Wash"
                    price="EGP 49.99"
                    duration="45-60 minutes"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Detail</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">EGP 129.99</div>
                <p className="text-gray-600 text-sm">Comprehensive detailing service</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">All Deluxe Services</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Clay Bar Treatment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Carnauba Wax Application</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Leather Conditioning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Engine Bay Cleaning</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-500">Duration: 2-3 hours</span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-gray-900">EGP 129.99</span>
                  <BookNowButton 
                    service="Premium Detail"
                    price="EGP 129.99"
                    duration="2-3 hours"
                    className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specialized Services Banner */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Looking for Specialized Car Care?</h3>
              <p className="text-gray-600">
                We offer premium specialized services including ceramic coating, paint correction, headlight restoration, and more. Check out our specialty services page for more detailed information.
              </p>
            </div>
            <Link 
              to="/services/specialty-services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 whitespace-nowrap inline-block"
            >
              Explore Specialty Services
            </Link>
          </div>
        </div>
        
        {/* Membership Programs */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Membership Programs</h3>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Unlimited Wash Club</h4>
                <p className="text-gray-600 mb-4">
                  Join our Unlimited Wash Club for the best value and a consistently clean vehicle. Wash your car as often as you like with our convenient monthly subscription plans.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-2" />
                    Unlimited express washes starting at EGP 29.99/month
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-2" />
                    Unlimited deluxe washes starting at EGP 59.99/month
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-2" />
                    No long-term contracts - cancel anytime
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-2" />
                    10% discount on all additional services
                  </li>
                </ul>
                <BookNowButton 
                  service="Unlimited Wash Club Membership"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300"
                  buttonText="Join Now"
                />
              </div>
              <div className="md:w-1/2">
                <img src="https://i.ibb.co/LXZdk2cf/WashClub.jpg" alt="Wash Club Membership" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarWashCare;