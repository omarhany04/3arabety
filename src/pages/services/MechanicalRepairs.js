import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus, X } from 'react-feather';

const MechanicalRepairs = () => {
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
      question: 'How often should I service my car?',
      answer: 'We recommend servicing your car every 10,000 miles or 12 months, whichever comes first. For older vehicles or those under heavy usage, more frequent servicing (every 5,000-7,500 miles) may be beneficial. Regular maintenance helps catch small issues before they become serious problems.'
    },
    {
      question: 'What warning signs indicate my car needs repair?',
      answer: 'Watch for warning lights on your dashboard, unusual noises (grinding, squeaking, knocking), decreased performance, vibrations, fluid leaks, burning smells, or smoke. If you notice any of these signs, it\'s best to have your vehicle checked promptly to prevent further damage.'
    },
    {
      question: 'Do you provide warranty on repairs?',
      answer: 'Yes, all our mechanical repairs come with a 12-month/12,000-mile warranty on parts and labor. Premium services include an extended 24-month warranty. Our warranty ensures that you\'re covered if any issues arise from our work or the parts we install.'
    },
    {
      question: 'How long does a typical mechanical repair take?',
      answer: 'Service times vary depending on the repair needed. Basic services like oil changes and brake pad replacements typically take 1-2 hours, while more complex repairs like transmission work might take 1-3 days. We always provide a time estimate before beginning work and keep you updated on our progress.'
    },
    {
      question: 'Do you offer loaner vehicles while my car is being serviced?',
      answer: 'Yes, we offer loaner vehicles for services that require your car to be in our shop for more than 24 hours. We also provide shuttle services and can arrange rental cars at discounted rates. Please inquire about these options when scheduling your service.'
    }
  ];

  return (
    <section id="mechanical-repairs" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mechanical Repairs</h2>
          <p className="text-lg text-gray-600">
            Professional diagnostics and repairs for all mechanical issues, ensuring your vehicle runs smoothly and efficiently.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/jkRKJpK3/Repair1.jpg" alt="Mechanical Repairs" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Mechanical Services</h3>
            <p className="text-gray-600 mb-6">
              Our certified mechanics use advanced diagnostics equipment to identify and resolve all types of mechanical issues, from engine problems to transmission repairs.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Engine Repairs & Diagnostics</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive engine diagnostics and repairs using state-of-the-art equipment.
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
                  <h4 className="font-bold text-gray-900">Transmission Services</h4>
                  <p className="text-gray-600 text-sm">
                    Manual and automatic transmission repairs, fluid changes, and clutch replacements.
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
                  <h4 className="font-bold text-gray-900">Brake System Repairs</h4>
                  <p className="text-gray-600 text-sm">
                    Complete brake system services including pad replacements, rotor resurfacing, and fluid flushes.
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
                  <h4 className="font-bold text-gray-900">Suspension & Steering Repairs</h4>
                  <p className="text-gray-600 text-sm">
                    Diagnosis and repair of suspension and steering components for a smoother ride.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Schedule Service
            </Link>
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Pricing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Basic Diagnostics</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">EGP 49.99</div>
                <p className="text-gray-600 text-sm">For basic mechanical issues</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Computer Diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Visual Inspection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Performance Check</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Advanced Testing</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Repair Service</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 border-2 border-blue-600 transform scale-105">
              <div className="bg-blue-600 p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Standard Service</h4>
                <div className="text-3xl font-bold text-white mb-2">EGP 149.99</div>
                <p className="text-blue-100 text-sm">For common mechanical repairs</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Computer Diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Comprehensive Inspection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Performance Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Minor Repairs Included</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <X className="h-4 w-4 text-red-400 mr-2" />
                    <span>Major Component Repairs</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Service</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">EGP 299.99</div>
                <p className="text-gray-600 text-sm">For complex mechanical issues</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Advanced Diagnostics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Complete System Inspection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Performance Enhancement</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Minor & Medium Repairs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">90-Day Service Guarantee</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            * Additional costs may apply based on specific vehicle make, model, and parts required.
          </p>
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
                    <Minus className="h-5 w-5 text-blue-600" /> : 
                    <Plus className="h-5 w-5 text-blue-600" />
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

export default MechanicalRepairs;