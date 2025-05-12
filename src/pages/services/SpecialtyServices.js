import React from 'react';
import { Check, AlertTriangle, RefreshCw, Sun, Zap, Command, Activity } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';

const SpecialtyServices = () => {
  return (
    <section id="specialty-services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Specialty Services</h2>
          <p className="text-lg text-gray-600">
            Premium automotive services to enhance, protect, and optimize your vehicle's performance and appearance.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/xtnP5TkB/Coating-Car.webp" alt="Specialty Services" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Automotive Solutions</h3>
            <p className="text-gray-600 mb-6">
              Our specialty services go beyond standard repairs and maintenance, offering premium solutions to enhance your vehicle's performance, appearance, and longevity. From ceramic coating to ECU tuning, we provide specialized expertise for discerning vehicle owners.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Specialized Technicians</h4>
                  <p className="text-gray-600 text-sm">
                    Our specialty services are performed by technicians with advanced training and certification in their respective fields.
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
                  <h4 className="font-bold text-gray-900">Premium Materials & Equipment</h4>
                  <p className="text-gray-600 text-sm">
                    We use only professional-grade products and state-of-the-art equipment for all specialty services.
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
                  <h4 className="font-bold text-gray-900">Custom Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Every service is tailored to your specific vehicle and requirements, ensuring optimal results.
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
                  <h4 className="font-bold text-gray-900">Guaranteed Satisfaction</h4>
                  <p className="text-gray-600 text-sm">
                    We stand behind the quality of our work with comprehensive service guarantees.
                  </p>
                </div>
              </div>
            </div>
            
            <BookNowButton 
              service="Specialty Services Consultation"
              buttonText="Book Specialty Service"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
            />
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Specialty Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://i.ibb.co/h1rKCyxF/Ceramic-Coating.jpg" alt="Ceramic Coating" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ceramic Coating</h3>
                <p className="text-gray-600 mb-4">
                  Long-lasting protection for your vehicle's paint that repels water, dirt, and contaminants while enhancing gloss and depth. Our professional-grade ceramic coatings provide years of protection.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">1-2 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-purple-600">EGP 3,999.99</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 3,999.99</span>
                  <BookNowButton 
                    service="Ceramic Coating"
                    price="From EGP 3,999.99"
                    duration="1-2 days"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://i.ibb.co/KS1kQDC/Paint-Correction.jpg" alt="Paint Correction" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Correction</h3>
                <p className="text-gray-600 mb-4">
                  Professional removal of swirl marks, scratches, water spots, and oxidation to restore your vehicle's paint to a flawless finish. Multi-stage process for optimal results.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">1-3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-purple-600">EGP 2,499.99</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 2,499.99</span>
                  <BookNowButton 
                    service="Paint Correction"
                    price="From EGP 2,499.99"
                    duration="1-3 days"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://i.ibb.co/fYbM6XwQ/Headlight-Restoration.webp" alt="Headlight Restoration" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Headlight Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Restore yellowed, cloudy, or oxidized headlights to like-new condition, improving both appearance and nighttime visibility. Includes UV protection to prevent future damage.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">2-3 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-purple-600">EGP 499.99</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 499.99</span>
                  <BookNowButton 
                    service="Headlight Restoration"
                    price="From EGP 499.99"
                    duration="2-3 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://i.ibb.co/rf5vCpJc/Paint-Protection-Film.jpg" alt="Paint Protection Film" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paint Protection Film</h3>
                <p className="text-gray-600 mb-4">
                  Virtually invisible urethane film that protects your vehicle's paint from rock chips, scratches, bug damage, and other road hazards. Self-healing technology for minor scratches.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">1-3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-purple-600">EGP 4,999.99</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 4,999.99</span>
                  <BookNowButton 
                    service="Paint Protection Film"
                    price="From EGP 4,999.99"
                    duration="1-3 days"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://i.ibb.co/fG2ZPnmm/Window-Tinting.jpg" alt="Window Tinting" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Window Tinting</h3>
                <p className="text-gray-600 mb-4">
                  Premium ceramic window tinting that reduces heat, blocks UV rays, enhances privacy, and improves your vehicle's appearance. Computer-cut for a perfect fit.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">3-5 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-purple-600">EGP 1,299.99</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 1,299.99</span>
                  <BookNowButton 
                    service="Window Tinting"
                    price="From EGP 1,299.99"
                    duration="3-5 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://i.ibb.co/TBNmFSpD/ECUTuning.jpg" alt="ECU Tuning" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">ECU Tuning</h3>
                <p className="text-gray-600 mb-4">
                  Performance optimization through custom engine control unit programming. Improve horsepower, torque, and throttle response while maintaining reliability.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="text-sm font-medium text-gray-900">4-6 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-purple-600">EGP 2,999.99</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">EGP 2,999.99</span>
                  <BookNowButton 
                    service="ECU Tuning"
                    price="From EGP 2,999.99"
                    duration="4-6 hours"
                    className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Our Specialty Services */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Specialty Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
              <p className="text-gray-600 text-sm">
                Our specialty service technicians receive extensive training and certification in their specialized fields.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Command className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Premium Products</h4>
              <p className="text-gray-600 text-sm">
                We use only the highest quality materials and products from industry-leading manufacturers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Satisfaction Guarantee</h4>
              <p className="text-gray-600 text-sm">
                We stand behind our work with comprehensive warranties and satisfaction guarantees.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Personalized Service</h4>
              <p className="text-gray-600 text-sm">
                Every vehicle is unique, and we tailor our approach to your specific needs and requirements.
              </p>
            </div>
          </div>
        </div>
        
        {/* Consultation Banner */}
        <div className="bg-purple-50 p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Not Sure Which Service You Need?</h3>
              <p className="text-gray-600">
                Schedule a free consultation with our specialty services team. We'll assess your vehicle and recommend the best options to meet your goals and budget.
              </p>
            </div>
            <BookNowButton 
              service="Specialty Services Consultation"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 whitespace-nowrap"
              buttonText="Book Free Consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyServices;