import React from 'react';
import { Check, CheckCircle } from 'react-feather';
import BookNowButton from '../../components/common/BookNowButton';

const InspectionServices = () => {
  return (
    <section id="inspection-services" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspection Services</h2>
          <p className="text-lg text-gray-600">
            Professional vehicle inspections to ensure safety, reliability, and peace of mind for buyers and sellers.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/tPzRTLk9/Car-Inspection.jpg" alt="Inspection Services" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Vehicle Inspections</h3>
            <p className="text-gray-600 mb-6">
              Whether you're buying a used car, selling your vehicle, or just want to ensure your car is safe and reliable, our detailed inspection services provide the information you need to make informed decisions.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">150+ Point Inspection</h4>
                  <p className="text-gray-600 text-sm">
                    Our certified technicians check over 150 points in your vehicle, from mechanical components to electronic systems.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Detailed Digital Reports</h4>
                  <p className="text-gray-600 text-sm">
                    Receive a comprehensive digital report with photos, videos, and technician notes about your vehicle's condition.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Cost Estimates for Repairs</h4>
                  <p className="text-gray-600 text-sm">
                    If issues are found, we provide estimated repair costs to help with negotiation or budgeting.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Mobile Inspections Available</h4>
                  <p className="text-gray-600 text-sm">
                    We can perform inspections at your location, saving you time and hassle.
                  </p>
                </div>
              </div>
            </div>
            
            <BookNowButton 
              service="Vehicle Inspection"
              buttonText="Schedule Inspection"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
            />
          </div>
        </div>
        
        {/* Inspection Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Inspections We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="relative">
                <img src="https://i.ibb.co/207J03vf/pre-purchase-inspection.jpg" alt="Pre-Purchase Inspection" className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 bg-green-600 text-white text-sm px-3 py-1">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Purchase Inspection</h3>
                <p className="text-gray-600 mb-4">
                  Before buying a used car, our thorough inspection helps you identify potential issues and make an informed decision.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    150+ point inspection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mechanical & electrical checks
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Test drive evaluation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Vehicle history verification
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">EGP 149.99</span>
                  <BookNowButton 
                    service="Pre-Purchase Inspection"
                    price="EGP 149.99"
                    duration="1-2 hours"
                    className="text-green-600 font-medium hover:text-green-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="relative">
                <img src="https://i.ibb.co/wFc8wx2K/pre-inspection.jpg" alt="Pre-Sale Inspection" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Sale Inspection</h3>
                <p className="text-gray-600 mb-4">
                  Boost buyer confidence and potentially increase your vehicle's value with a certified pre-sale inspection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    120+ point inspection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Detailed condition report
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Market value assessment
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sale preparation advice
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">EGP 129.99</span>
                  <BookNowButton 
                    service="Pre-Sale Inspection"
                    price="EGP 129.99"
                    duration="1-2 hours"
                    className="text-green-600 font-medium hover:text-green-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="relative">
                <img src="https://i.ibb.co/yTWdqLy/Safety-Inspection.webp" alt="Safety Inspection" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Inspection</h3>
                <p className="text-gray-600 mb-4">
                  Ensure your vehicle meets all safety standards with our comprehensive safety inspection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety systems check
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Brakes & steering inspection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lights & signals testing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Suspension evaluation
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">EGP 89.99</span>
                  <BookNowButton 
                    service="Safety Inspection"
                    price="EGP 89.99"
                    duration="45-60 minutes"
                    className="text-green-600 font-medium hover:text-green-800 transition duration-300"
                    buttonText="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Inspection Packages</h4>
                <p className="text-gray-600">
                  Need something specific? We can create a custom inspection package tailored to your exact requirements.
                </p>
              </div>
              <BookNowButton 
                service="Custom Inspection Package"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
                buttonText="Request Custom Quote"
              />
            </div>
          </div>
        </div>
        
        {/* Inspection Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Inspection Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Schedule</h4>
              <p className="text-gray-600 text-sm">
                Book your inspection online or call us to schedule at your preferred location and time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Inspect</h4>
              <p className="text-gray-600 text-sm">
                Our certified technician conducts a thorough multi-point inspection of the vehicle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Document</h4>
              <p className="text-gray-600 text-sm">
                We document all findings with photos, videos, and detailed technician notes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Report</h4>
              <p className="text-gray-600 text-sm">
                Receive a comprehensive digital report with all findings and recommendations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <p className="text-gray-600 italic mb-6">
                "The pre-purchase inspection saved me thousands of dollars. The inspector found serious transmission issues that the seller hadn't disclosed. I was able to negotiate a much better price knowing exactly what repairs were needed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ahmed Hossam</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <p className="text-gray-600 italic mb-6">
                "As a seller, getting the pre-sale inspection was one of the best decisions I made. The certified report gave buyers confidence, and I sold my car within a week at the price I wanted. Definitely worth the investment!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sama Khaled</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionServices;