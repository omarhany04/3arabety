import React from 'react';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  const brands = [
    { name: "Toyota", logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe-download.png" },
    { name: "Honda", logo: "https://www.carlogos.org/car-logos/honda-logo-2000-full-download.png" },
    { name: "BMW", logo: "https://www.carlogos.org/car-logos/bmw-logo-1997-download.png" },
    { name: "Mercedes", logo: "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png" },
    { name: "Ford", logo: "https://www.carlogos.org/car-logos/ford-logo-2003-download.png" },
    { name: "Chevrolet", logo: "https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png" },
    { name: "Audi", logo: "https://www.carlogos.org/car-logos/audi-logo-1995-download.png" },
    { name: "Nissan", logo: "https://www.carlogos.org/car-logos/nissan-logo-2013-700x700.png" },
    { name: "Hyundai", logo: "https://www.carlogos.org/car-logos/hyundai-logo-2011-download.png" },
    { name: "Kia", logo: "https://www.carlogos.org/logo/Kia-logo-2560x1440.png" },
    { name: "Volkswagen", logo: "https://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png" },
    { name: "Peugeot", logo: "https://www.carlogos.org/logo/Peugeot-logo-2010-1920x1080.png" },
    { name: "Suzuki", logo: "https://www.carlogos.org/logo/Suzuki-logo-1920x1080.png" },
    { name: "Renault", logo: "https://www.carlogos.org/logo/Renault-logo-2015-2048x2048.png" },
    { name: "Opel", logo: "https://www.carlogos.org/logo/Opel-logo-2009-1920x1080.png" },
    { name: "Mitsubishi", logo: "https://www.carlogos.org/logo/Mitsubishi-emblem-1024x768.png" },
    { name: "Fiat", logo: "https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png" },
    { name: "Subaru", logo: "https://www.carlogos.org/car-logos/subaru-logo-2019-download.png" },
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
              <img src={brand.logo} alt={brand.name} className="max-h-12 object-contain" />
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
