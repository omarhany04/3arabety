import React from 'react';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  // Sample car brands
  const brands = [
    "Toyota", "Honda", "BMW", "Mercedes", "Ford", "Chevrolet", 
    "Audi", "Nissan", "Hyundai", "Kia", "Volkswagen", "Subaru"
  ];

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Car Brands We Support</h2>
          <p className="text-lg text-gray-600">
            We provide services and parts for all major car brands and models.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="brand-logo bg-white rounded-lg shadow-sm p-6 flex items-center justify-center">
              <img src={`/images/placeholder/120/60`} alt={brand} className="max-h-12" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services/mechanical-repairs" className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300">
            View All Brands
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;