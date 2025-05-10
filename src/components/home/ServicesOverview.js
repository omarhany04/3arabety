import React from 'react';
import { Link } from 'react-router-dom';
import { Tool, AlertTriangle, CheckCircle, Package, Truck, Droplet, ArrowRight } from 'react-feather';
import ServiceCard from '../common/ServiceCard';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: <Tool className="h-7 w-7 text-blue-600" />,
      title: 'Mechanical Repairs',
      description: 'Professional diagnostics and repairs for all mechanical issues, from engine problems to transmission repairs.',
      color: 'blue',
      link: '/services/mechanical-repairs'
    },
    {
      id: 2,
      icon: <AlertTriangle className="h-7 w-7 text-red-600" />,
      title: 'Emergency Assistance',
      description: '24/7 roadside emergency assistance including towing, battery jump-starts, and tire services.',
      color: 'red',
      link: '/services/emergency-assistance'
    },
    {
      id: 3,
      icon: <CheckCircle className="h-7 w-7 text-green-600" />,
      title: 'Inspection Services',
      description: 'Comprehensive vehicle inspections for buying/selling cars, ensuring you make informed decisions.',
      color: 'green',
      link: '/services/inspection-services'
    },
    {
      id: 4,
      icon: <Package className="h-7 w-7 text-purple-600" />,
      title: 'Spare Parts Supply',
      description: 'Quality spare parts for all car types with options for professional installation or DIY purchase.',
      color: 'purple',
      link: '/services/spare-parts-supply'
    },
    {
      id: 5,
      icon: <Truck className="h-7 w-7 text-yellow-600" />,
      title: 'Towing Service',
      description: 'Reliable vehicle towing service available 24/7 for breakdowns, accidents, or any emergency situations.',
      color: 'yellow',
      link: '/services/towing-service'
    },
    {
      id: 6,
      icon: <Droplet className="h-7 w-7 text-blue-600" />,
      title: 'Car Wash & Care',
      description: 'Complete car cleaning and detailing services to keep your vehicle looking its best.',
      color: 'blue',
      link: '/services/car-wash-care'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600">
            From emergency roadside assistance to routine maintenance, we offer a full spectrum of services to keep your vehicle in optimal condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;