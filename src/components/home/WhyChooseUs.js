import React from 'react';
import { Clock, Shield, Map, DollarSign } from 'react-feather';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      title: '24/7 Availability',
      description: 'Our services are available round-the-clock, ensuring help whenever you need it.'
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      title: 'Certified Mechanics',
      description: 'Our team consists of certified professionals with years of experience.'
    },
    {
      icon: <Map className="h-5 w-5 text-blue-600" />,
      title: 'Nationwide Coverage',
      description: 'With our extensive network, we provide services across the country.'
    },
    {
      icon: <DollarSign className="h-5 w-5 text-blue-600" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises - just clear, upfront pricing for all services.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="https://i.ibb.co/bRWCWmBm/Logo.png" alt="Why Choose Us" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose 3arabety?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine cutting-edge technology with skilled professionals to provide the best car services experience.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      {reason.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;