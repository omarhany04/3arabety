import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'react-feather';

const Hero = () => {
  return (
    <section id="home" className="hero-pattern py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Your Complete <span className="text-blue-600">Car Service</span> Solution
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              From emergency roadside assistance to routine maintenance, parts, and specialized services - we've got your vehicle covered 24/7.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services/mechanical-repairs" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 text-center">
                Explore Services
              </Link>
              <Link to="/services/emergency-assistance" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 text-center flex items-center justify-center">
                <PhoneCall className="h-5 w-5 mr-2" /> Emergency Help
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/images/placeholder/700/500" alt="Car Service" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;