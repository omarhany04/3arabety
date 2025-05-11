import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Wind, TrendingUp, Droplet, Sun, Check, X } from 'react-feather';

const SpecialtyServices = () => {
  return (
    <section id="specialty-services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialty Automotive Services</h2>
          <p className="text-lg text-gray-600">
            Premium specialized services to enhance, protect, and restore your vehicle's appearance and functionality.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/xtnP5TkB/Coating-Car.webp" alt="Specialty Services" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Automotive Care</h3>
            <p className="text-gray-600 mb-6">
              Our specialty services go beyond standard maintenance to provide exceptional care for your vehicle. From cosmetic enhancements to protective treatments, we offer a comprehensive range of specialized services performed by certified technicians.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Certified Specialists</h4>
                  <p className="text-gray-600 text-sm">
                    All services performed by technicians with specialized training and certification in their respective fields.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Premium Materials</h4>
                  <p className="text-gray-600 text-sm">
                    We use only high-quality, professional-grade products and materials for long-lasting results.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Satisfaction Guarantee</h4>
                  <p className="text-gray-600 text-sm">
                    Our work is backed by a satisfaction guarantee to ensure you're completely happy with the results.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Transparent Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Clear, upfront pricing with no hidden fees or unexpected charges.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Book a Service
            </Link>
          </div>
        </div>
        
        {/* Specialty Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Specialty Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Protection</h3>
                <p className="text-gray-600 mb-4">
                  Advanced ceramic coating that provides long-lasting protection against scratches, UV rays, and contaminants. Preserves your vehicle's paint and maintains that showroom shine.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">From EGP 2,999</span>
                  <Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Headlight Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Restore cloudy, yellowed headlights to like-new condition, improving visibility and appearance. Our multi-step process removes oxidation and applies UV protection.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 799.99</span>
                  <Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Odor Elimination</h3>
                <p className="text-gray-600 mb-4">
                  Advanced ozone treatment to eliminate persistent odors from smoke, pets, food, and more. Thoroughly neutralizes odors rather than just masking them with fragrances.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 899.99</span>
                  <Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Correction</h3>
                <p className="text-gray-600 mb-4">
                  Professional machine polishing to remove swirl marks, scratches, and restore paint brilliance. Multi-stage process that brings back your vehicle's original luster and depth.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">From EGP 1,999</span>
                  <Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interior Deep Clean</h3>
                <p className="text-gray-600 mb-4">
                  Thorough cleaning of upholstery, carpets, and all interior surfaces with steam cleaning and extraction. Removes embedded dirt, stains, and allergens for a fresh, like-new interior.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 1,499.99</span>
                  <Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Window Tinting</h3>
                <p className="text-gray-600 mb-4">
                  Professional window tinting with high-quality films that reduce heat, block UV rays, and enhance privacy. Multiple shade options and lifetime warranty against bubbling and peeling.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">From EGP 2,499</span>
                  <Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Book Specialty Service
            </Link>
          </div>
        </div>
        
        {/* Service Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Premium Service Packages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-purple-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Essential Protection</h4>
                <div className="text-3xl font-bold text-purple-600 mb-2">EGP 3,999</div>
                <p className="text-gray-600 text-sm">Basic protection package</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Basic Ceramic Coating</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Single-Stage Paint Correction</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Headlight Restoration</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Interior Protection</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Premium Window Tinting</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-500">1-Year Warranty</span>
                </div>
                <Link to="/contact" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 border-2 border-purple-600 transform scale-105">
              <div className="bg-purple-600 p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Premium Protection</h4>
                <div className="text-3xl font-bold text-white mb-2">EGP 6,999</div>
                <p className="text-purple-100 text-sm">Complete protection package</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Premium Ceramic Coating</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Multi-Stage Paint Correction</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Headlight Restoration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Interior Protection Coating</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Standard Window Tinting</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-500">3-Year Warranty</span>
                </div>
                <Link to="/contact" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-purple-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ultimate Protection</h4>
                <div className="text-3xl font-bold text-purple-600 mb-2">EGP 9,999</div>
                <p className="text-gray-600 text-sm">The ultimate vehicle protection</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Elite Ceramic Coating</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Full Correction & Paint Enhancement</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Complete Glass Treatment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Premium Interior Protection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Premium Ceramic Window Tinting</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-500">5-Year Warranty</span>
                </div>
                <Link to="/contact" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-2">How long does ceramic coating last?</h4>
                <p className="text-gray-600">
                  Our ceramic coatings last between 2-5 years depending on the package selected. The Essential Protection package includes a coating that lasts 2 years, while our Ultimate Protection package includes a premium coating with a 5-year warranty.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-2">Is window tinting legal in Egypt?</h4>
                <p className="text-gray-600">
                  Yes, window tinting is legal in Egypt but there are regulations regarding the darkness level (VLT%). Our window tinting services comply with all local regulations while providing maximum heat rejection and UV protection.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-2">How long does a full detail take?</h4>
                <p className="text-gray-600">
                  Most of our specialty services take 1-3 days to complete properly. Basic packages like headlight restoration can be completed in a few hours, while full detail packages that include paint correction and ceramic coating may take 2-3 days to ensure proper application and curing.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-2">Do you offer mobile services?</h4>
                <p className="text-gray-600">
                  We offer mobile services for some of our specialty treatments like odor elimination and headlight restoration. However, services like paint correction and ceramic coating require a controlled environment and are performed at our service centers.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">How should I maintain my vehicle after ceramic coating?</h4>
                <p className="text-gray-600">
                  After ceramic coating, we recommend using pH-neutral car wash soap, avoiding automatic car washes with brushes, and applying a ceramic boost spray every 3-4 months. We provide detailed care instructions and complementary maintenance products with all our ceramic coating packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyServices;