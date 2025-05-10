import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Check, PhoneCall } from 'react-feather';

const EmergencyAssistance = () => {
  return (
    <section id="emergency-assistance" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emergency Assistance</h2>
          <p className="text-lg text-gray-600">
            24/7 roadside emergency assistance for when you need help the most, available anytime, anywhere.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/gbm2nQqw/Emergency.jpg" alt="Emergency Assistance" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always There When You Need Us</h3>
            <p className="text-gray-600 mb-6">
              Car troubles don't follow a 9-to-5 schedule, and neither do we. Our emergency assistance team is available 24/7, 365 days a year to help you get back on the road quickly and safely.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                Emergency Hotline
              </h4>
              <div className="text-2xl font-bold text-red-600 mb-2">19873</div>
              <p className="text-gray-600 text-sm">
                Save this number in your phone for immediate assistance during emergencies.
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Nationwide Coverage</h4>
                  <p className="text-gray-600 text-sm">
                    Our extensive network ensures help is always nearby, no matter where you are.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Average Response Time: 30 Minutes</h4>
                  <p className="text-gray-600 text-sm">
                    Quick response times to get you the help you need without long waits.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-red-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">GPS-Enabled Tracking</h4>
                  <p className="text-gray-600 text-sm">
                    Track your technician's arrival in real-time through our mobile app.
                  </p>
                </div>
              </div>
            </div>
            
            <a href="tel:+11234567899" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center">
              <PhoneCall className="h-5 w-5 mr-2" /> Call for Emergency
            </a>
          </div>
        </div>
        
        {/* Services Offered */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Emergency Services We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Battery Jump-Start</h3>
                <p className="text-gray-600 mb-4">
                  Quickly get your vehicle started with our professional jump-start service. We'll also check your battery health to prevent future issues.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  EGP 49.99
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flat Tire Service</h3>
                <p className="text-gray-600 mb-4">
                  We'll replace your flat tire with your spare or provide temporary repair to get you to a service center.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  EGP 59.99
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lockout Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Locked your keys in your car? Our technicians can safely unlock your vehicle without causing damage.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  EGP 69.99
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Towing</h3>
                <p className="text-gray-600 mb-4">
                  When your vehicle can't be fixed roadside, we'll tow it to the nearest service center or your preferred location.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  From EGP 89.99
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fuel Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Run out of gas? We'll deliver enough fuel to get you to the nearest gas station.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  EGP 49.99 + fuel cost
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-red-100 flex items-center justify-center mb-6">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">On-Site Diagnostics</h3>
                <p className="text-gray-600 mb-4">
                  Our mobile mechanics can diagnose and often fix common issues right at your location.
                </p>
                <p className="text-lg font-bold text-gray-900">
                  EGP 79.99
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Membership Plans */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Emergency Assistance Membership Plans</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-red-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Basic Plan</h4>
                <div className="text-3xl font-bold text-red-600 mb-2">EGP 99/year</div>
                <p className="text-gray-600 text-sm">Essential coverage for occasional drivers</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">3 Service Calls Per Year</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Towing up to 10 miles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Battery Jump-Start</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Tire Change Service</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-4 w-4 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Fuel Delivery</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Sign Up
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 border-2 border-red-600 transform scale-105">
              <div className="bg-red-600 p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Premium Plan</h4>
                <div className="text-3xl font-bold text-white mb-2">EGP 179/year</div>
                <p className="text-red-100 text-sm">Complete coverage for daily drivers</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">5 Service Calls Per Year</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Towing up to 25 miles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">All Basic Plan Services</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Fuel Delivery Service</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Lockout Assistance</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Sign Up
                </Link>
              </div>
            </div>
            
            <div className="pricing-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200">
              <div className="bg-red-50 p-6 text-center border-b border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ultimate Plan</h4>
                <div className="text-3xl font-bold text-red-600 mb-2">EGP 249/year</div>
                <p className="text-gray-600 text-sm">Unlimited coverage for families</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Unlimited Service Calls</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Towing up to 100 miles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">All Premium Plan Services</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Trip Interruption Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Covers Up to 3 Vehicles</span>
                  </li>
                </ul>
                <Link to="/contact" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-6 py-3 rounded-md font-medium transition duration-300 mt-6">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            * All plans include access to our 24/7 emergency helpline and mobile app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyAssistance;