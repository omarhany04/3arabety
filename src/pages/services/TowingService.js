import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Truck, Map, Shield, Plus, Minus, AlertCircle } from 'react-feather';

const TowingService = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const faqs = [
    {
      question: 'How quickly can you arrive after I call?',
      answer: 'Our average response time is 30 minutes or less in most service areas. Response times may vary based on your location, weather conditions, and current demand. We\'ll provide you with an estimated arrival time when you call.'
    },
    {
      question: 'What types of vehicles can you tow?',
      answer: 'We can tow virtually any type of vehicle, including cars, SUVs, motorcycles, light trucks, and commercial vehicles. We also offer specialized towing for luxury cars, exotic vehicles, and classic cars that require extra care during transport.'
    },
    {
      question: 'Do you accept insurance for towing services?',
      answer: 'Yes, we work with most insurance companies that cover towing services. If your insurance policy includes roadside assistance or towing coverage, we can bill your insurance directly in most cases. Please have your policy information ready when you call.'
    },
    {
      question: 'What information do I need to provide when requesting a tow?',
      answer: 'When calling for a tow, please be ready to provide: your exact location (or as precise as possible), vehicle make/model/year, the nature of your situation (breakdown, accident, etc.), your destination, and your insurance information if applicable.'
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept all major credit cards, debit cards, cash, and digital payment methods like Apple Pay and Google Pay. For insurance-covered tows, we can bill your insurance directly. Payment is typically required upon completion of service unless prior arrangements have been made.'
    }
  ];

  return (
    <section id="towing-service" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Towing Service</h2>
          <p className="text-lg text-gray-600">
            Professional, reliable towing service available 24/7 for all vehicle types and emergency situations.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="/images/placeholder/600/400" alt="Towing Service" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Towing When You Need It</h3>
            <p className="text-gray-600 mb-6">
              When your vehicle breaks down or is involved in an accident, our professional towing service is just a call away. We provide fast, safe, and damage-free towing for all types of vehicles.
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                24/7 Towing Hotline
              </h4>
              <div className="text-2xl font-bold text-yellow-600 mb-2">+1 (123) 456-7890</div>
              <p className="text-gray-600 text-sm">
                We're available around the clock for all your towing needs.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Quick Response Time</h4>
                  <p className="text-gray-600 text-sm">
                    Average arrival time of 30 minutes or less in most service areas.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Modern Towing Equipment</h4>
                  <p className="text-gray-600 text-sm">
                    Our fleet includes flatbeds, wheel-lift trucks, and specialized equipment for all vehicles.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Careful Handling</h4>
                  <p className="text-gray-600 text-sm">
                    Professional operators trained to transport your vehicle without causing any damage.
                  </p>
                </div>
              </div>
            </div>
            
            <a href="tel:+11234567890" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Request Towing
            </a>
          </div>
        </div>
        
        {/* Services Offered */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Towing Services We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'truck', 
                title: 'Local Towing', 
                description: 'Efficient towing to nearby service centers, your home, or preferred destination within city limits.',
                price: 'Starting at $79.99'
              },
              { 
                icon: 'map', 
                title: 'Long-Distance Towing', 
                description: 'Safe transportation for your vehicle across longer distances and between cities.',
                price: 'Starting at $2.99/mile'
              },
              { 
                icon: 'alert-triangle', 
                title: 'Accident Recovery', 
                description: 'Specialized recovery service for vehicles involved in accidents or stuck in difficult situations.',
                price: 'Starting at $129.99'
              },
              { 
                icon: 'briefcase', 
                title: 'Luxury & Exotic Car Towing', 
                description: 'Specialized equipment and extra care for high-value vehicles requiring additional attention.',
                price: 'Starting at $149.99'
              },
              { 
                icon: 'truck', 
                title: 'Heavy-Duty Towing', 
                description: 'Towing service for larger vehicles including trucks, RVs, and commercial vehicles.',
                price: 'Starting at $149.99'
              },
              { 
                icon: 'calendar', 
                title: 'Scheduled Transport', 
                description: 'Planned vehicle transportation for non-emergency situations with advance booking.',
                price: 'Custom Quotes'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-6">
                    {service.icon === 'truck' && <Truck className="h-7 w-7 text-yellow-600" />}
                    {service.icon === 'map' && <Map className="h-7 w-7 text-yellow-600" />}
                    {service.icon === 'alert-triangle' && <AlertCircle className="h-7 w-7 text-yellow-600" />}
                    {service.icon === 'briefcase' && (
                      <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {service.icon === 'calendar' && (
                      <svg className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-white border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Request Quote
            </Link>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Our Towing Service Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Call Our Hotline', description: 'Contact our 24/7 dispatch center to request towing service.' },
              { step: 2, title: 'Provide Details', description: 'Share your location, vehicle information, and destination.' },
              { step: 3, title: 'Track Our Arrival', description: 'Receive a text with estimated arrival time and live tracking.' },
              { step: 4, title: 'Safe Transport', description: 'We will safely tow your vehicle to the designated location.' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">{step.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item pb-4">
                <div 
                  className="faq-question flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h4 className="font-bold text-gray-900">{faq.question}</h4>
                  {activeAccordion === index ? 
                    <Minus className="h-5 w-5 text-yellow-600" /> : 
                    <Plus className="h-5 w-5 text-yellow-600" />
                  }
                </div>
                <div className={`mt-2 ${activeAccordion === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TowingService;