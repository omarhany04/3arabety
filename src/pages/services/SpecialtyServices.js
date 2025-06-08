import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Tool, Check, Shield, Star, Zap } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';

const SpecialtyServices = () => {
  return (
    <section id="specialty-services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialty Services</h2>
          <p className="text-lg text-gray-600">
            Premium specialized services for your vehicle, provided by experienced professionals using high-quality parts and equipment.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/XZpJSYzZ/Specialty-Services.jpg" alt="Specialty Services" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Care for Your Vehicle</h3>
            <p className="text-gray-600 mb-6">
              Our specialized services cover a wide range of premium treatments and solutions designed to enhance your vehicle's performance, appearance, and longevity.
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
                    Our team is certified in specialized automotive treatments and techniques.
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
                    We use only high-quality, industry-leading products and materials.
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
                  <h4 className="font-bold text-gray-900">Extended Warranties</h4>
                  <p className="text-gray-600 text-sm">
                    Many of our specialty services come with extended warranties for peace of mind.
                  </p>
                </div>
              </div>
            </div>
            
            <BookNowButton 
              service="Specialty Consultation"
              buttonText="Book a Consultation"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
            />
          </div>
        </div>
        
        {/* Specialty Services Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Premium Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards with hover effect and images */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 transform">
              <div className="relative">
                <img src="https://i.ibb.co/h1rKCyxF/Ceramic-Coating.jpg" alt="Ceramic Coating" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-md">Signature</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ceramic Coating</h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade ceramic coating that provides long-lasting protection against scratches, UV damage, and contaminants.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 2,499.99
                  </p>
                  <BookNowButton 
                    service="Ceramic Coating"
                    price="From EGP 2,499.99"
                    duration="6-8 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 transform">
              <div className="relative">
                <img src="https://i.ibb.co/KS1kQDC/Paint-Correction.jpg" alt="Paint Correction" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-md">Professional</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <Star className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Correction</h3>
                <p className="text-gray-600 mb-4">
                  Professional paint correction to remove swirls, scratches, and imperfections, restoring your vehicle's finish to a showroom shine.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 1,899.99
                  </p>
                  <BookNowButton 
                    service="Paint Correction"
                    price="From EGP 1,899.99"
                    duration="4-6 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 transform">
              <div className="relative">
                <img src="https://i.ibb.co/rf5vCpJc/Paint-Protection-Film.jpg" alt="Performance Tuning" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-md">Premier</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Protection Film</h3>
                <p className="text-gray-600 mb-4">
                  Virtually invisible urethane film that protects your vehicle's paint from rock chips, scratches, bug damage, and other road hazards. Self-healing technology for minor scratches.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 3,499.99
                  </p>
                  <BookNowButton 
                    service="Paint Protection Film"
                    price="From EGP 3,499.99"
                    duration="1 day"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 transform">
              <div className="relative">
                <img src="https://i.ibb.co/fYbM6XwQ/Headlight-Restoration.webp" alt="Headlight Restoration" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">Popular</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Headlight Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Professional headlight restoration to remove yellowing and haziness, improving visibility and appearance.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 799.99
                  </p>
                  <BookNowButton 
                    service="Headlight Restoration"
                    price="EGP 799.99"
                    duration="1-2 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 transform">
              <div className="relative">
                <img src="https://i.ibb.co/fG2ZPnmm/Window-Tinting.jpg" alt="Window Tinting" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">Exclusive</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Window Tinting</h3>
                <p className="text-gray-600 mb-4">
                  High-quality window tinting with premium films for heat rejection, UV protection, and enhanced privacy.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 1,299.99
                  </p>
                  <BookNowButton 
                    service="Window Tinting"
                    price="From EGP 1,299.99"
                    duration="2-3 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:scale-105 transform">
              <div className="relative">
                <img src="https://i.ibb.co/TBNmFSpD/ECUTuning.jpg" alt="ECU Tuning" className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-md">Certified</span>
                </div>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ECU Tuning</h3>
                <p className="text-gray-600 mb-4">
                  Performance optimization through custom engine control unit programming. Improve horsepower, torque, and throttle response while maintaining reliability.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    From EGP 2,999.99
                  </p>
                  <BookNowButton 
                    service="ECU Tuning"
                    price="From EGP 2,999.99"
                    duration="3-8 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Description */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Specialty Service Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Consultation & Assessment</h4>
              <p className="text-gray-600 text-sm">
                We begin with a thorough consultation to understand your needs and assess your vehicle's condition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Personalized Service Plan</h4>
              <p className="text-gray-600 text-sm">
                Our specialists create a tailored plan specific to your vehicle's needs and your preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Premium Service & Delivery</h4>
              <p className="text-gray-600 text-sm">
                We perform the service using top-quality materials and provide a final walkthrough upon completion.
              </p>
            </div>
          </div>
        </div>
        
        {/* Customer Testimonial */}
        <div className="bg-purple-50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto md:mx-0">
                <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <svg className="h-8 w-8 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 italic mb-4">
                "The ceramic coating service has completely transformed my car. Not only does it look amazing, but it's also so much easier to keep clean. The team was professional, thorough, and the results exceeded my expectations."
              </p>
              <p className="font-bold text-gray-900">Ahmed El Sayed</p>
              <p className="text-sm text-gray-600">BMW 5 Series Owner</p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="bg-white rounded-xl shadow-md divide-y divide-gray-200">
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">How long does ceramic coating last?</h4>
              <p className="text-gray-600">
                Our professional ceramic coatings typically last between 2-5 years depending on the package chosen and how well the vehicle is maintained. We offer various protection levels to suit different needs and budgets.
              </p>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">Is window tinting legal in Egypt?</h4>
              <p className="text-gray-600">
                Yes, window tinting is legal in Egypt, but there are regulations regarding the darkness level (VLT%). Our team is knowledgeable about these regulations and will ensure your tint is compliant with local laws.
              </p>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">Do you offer warranties on your specialty services?</h4>
              <p className="text-gray-600">
                Yes, most of our specialty services come with warranties. The specific terms vary by service - ceramic coatings come with 2-5 year warranties, window tinting with a lifetime warranty against peeling or bubbling, and performance modifications typically have a 1-year warranty on parts and labor.
              </p>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-gray-900 mb-2">How much does paint correction cost?</h4>
              <p className="text-gray-600">
                Paint correction pricing varies based on the size of your vehicle and the level of correction needed. We offer three levels: basic (single-stage), enhanced (two-stage), and ultimate (multi-stage). Prices start at EGP 1,899.99. We provide a detailed quote after inspecting your vehicle's condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyServices;