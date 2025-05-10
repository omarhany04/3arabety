import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Facebook, Twitter, Instagram, Youtube, 
  MapPin, Phone, Mail, Clock 
} from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-8">

          {/* Column 1: Logo & About */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-blue-400"><Activity className="h-8 w-8" /></span>
                <span className="ml-2 text-2xl font-bold">3arabety</span>
              </Link>
            </div>

            <div className="max-w-md">
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your complete car service solution, providing quality care for all your vehicle needs 24/7.
              </p>

              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>

              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} 3arabety. All rights reserved.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/services/mechanical-repairs" className="text-gray-400 hover:text-blue-400 transition duration-300">Services</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-blue-400 transition duration-300">Shop</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-blue-400 transition duration-300">Locations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/mechanical-repairs" className="text-gray-400 hover:text-blue-400 transition duration-300">Mechanical Repairs</Link>
              </li>
              <li>
                <Link to="/services/emergency-assistance" className="text-gray-400 hover:text-blue-400 transition duration-300">Emergency Assistance</Link>
              </li>
              <li>
                <Link to="/services/inspection-services" className="text-gray-400 hover:text-blue-400 transition duration-300">Inspection Services</Link>
              </li>
              <li>
                <Link to="/services/spare-parts-supply" className="text-gray-400 hover:text-blue-400 transition duration-300">Spare Parts Supply</Link>
              </li>
              <li>
                <Link to="/services/towing-service" className="text-gray-400 hover:text-blue-400 transition duration-300">Towing Service</Link>
              </li>
              <li>
                <Link to="/services/car-wash-care" className="text-gray-400 hover:text-blue-400 transition duration-300">Car Wash & Care</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">21 El Nasr Road<br />Smouha, Alexandria, Egypt</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+20 (10) 123-456-78</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">info@3arabety.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">24 Service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
