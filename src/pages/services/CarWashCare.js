import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Zap, Wind, TrendingUp, Droplet, Sun } from 'react-feather';

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
            <img src="/images/placeholder/600/400" alt="Car Wash & Care" className="rounded-lg shadow-lg" />
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
            
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Book a Wash
            </Link>
          </div>
        </div>
        
        {/* Service Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Packages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Express Wash</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">$19.99</div>
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
                <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Deluxe Wash</h4>
                <div className="text-3xl font-bold text-white mb-2">$49.99</div>
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
                <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Detail</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">$129.99</div>
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
                <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300">
              View All Packages
            </Link>
          </div>
        </div>
        
        {/* Specialty Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Specialty Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                title: 'Paint Protection',
                description: 'Advanced ceramic coating that provides long-lasting protection against scratches, UV rays, and contaminants.',
                price: 'From $299'
              },
              { 
                icon: <Zap className="h-6 w-6 text-blue-600" />,
                title: 'Headlight Restoration',
                description: 'Restore cloudy, yellowed headlights to like-new condition, improving visibility and appearance.',
                price: '$79.99'
              },
              { 
                icon: <Wind className="h-6 w-6 text-blue-600" />,
                title: 'Odor Elimination',
                description: 'Advanced ozone treatment to eliminate persistent odors from smoke, pets, food, and more.',
                price: '$89.99'
              },
              { 
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                title: 'Paint Correction',
                description: 'Professional machine polishing to remove swirl marks, scratches, and restore paint brilliance.',
                price: 'From $199'
              },
              { 
                icon: <Droplet className="h-6 w-6 text-blue-600" />,
                title: 'Interior Deep Clean',
                description: 'Thorough cleaning of upholstery, carpets, and all interior surfaces with steam cleaning and extraction.',
                price: '$149.99'
              },
              { 
                icon: <Sun className="h-6 w-6 text-blue-600" />,
                title: 'Window Tinting',
                description: 'Professional window tinting with high-quality films that reduce heat, block UV rays, and enhance privacy.',
                price: 'From $249'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Book Specialty Service
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
                    Unlimited express washes starting at $29.99/month
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-blue-500 mr-2" />
                    Unlimited deluxe washes starting at $59.99/month
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
                <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
                  Join Now
                </Link>
              </div>
              <div className="md:w-1/2">
                <img src="/images/placeholder/500/300" alt="Wash Club Membership" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarWashCare;