import React from 'react';
import { PhoneCall, AlertTriangle } from 'react-feather';

const CallToAction = () => {
  return (
    <section id="emergency" className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Emergency Assistance?</h2>
            <p className="text-blue-100 text-lg">
              Our 24/7 roadside assistance is just a call away. Get immediate help for any car emergency.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:1234567890" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-bold transition duration-300 text-center flex items-center justify-center"
            >
              <PhoneCall className="h-5 w-5 mr-2" /> Call Now
            </a>
            <a 
              href="/services/emergency-assistance" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition duration-300 text-center flex items-center justify-center"
            >
              <AlertTriangle className="h-5 w-5 mr-2" /> SOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;