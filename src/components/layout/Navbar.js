import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Activity, Menu, X } from 'react-feather';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600"><Activity className="h-8 w-8" /></span>
              <span className="ml-2 text-2xl font-bold text-gray-800">Auto<span className="text-blue-600">Expert</span></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services/mechanical-repairs" 
              className={`nav-link ${location.pathname.includes('/services') ? 'active text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/shop" 
              className={`nav-link ${isActive('/shop') ? 'active text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/locations" 
              className={`nav-link ${isActive('/locations') ? 'active text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Locations
            </NavLink>
            <NavLink 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Contact
            </NavLink>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4 space-y-2`}>
          <NavLink 
            to="/" 
            className={`block py-2 px-4 rounded ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'} hover:bg-blue-50 hover:text-blue-600`}
          >
            Home
          </NavLink>
          <div className="py-2 px-4">
            <span className={`block mb-2 ${location.pathname.includes('/services') ? 'text-blue-600' : 'text-gray-600'}`}>Services</span>
            <div className="pl-4 space-y-1">
              <NavLink 
                to="/services/mechanical-repairs" 
                className={`block py-1 ${location.pathname === '/services/mechanical-repairs' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
              >
                Mechanical Repairs
              </NavLink>
              <NavLink 
                to="/services/emergency-assistance" 
                className={`block py-1 ${location.pathname === '/services/emergency-assistance' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
              >
                Emergency Assistance
              </NavLink>
              <NavLink 
                to="/services/inspection-services" 
                className={`block py-1 ${location.pathname === '/services/inspection-services' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
              >
                Inspection Services
              </NavLink>
              <NavLink 
                to="/services/spare-parts-supply" 
                className={`block py-1 ${location.pathname === '/services/spare-parts-supply' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
              >
                Spare Parts Supply
              </NavLink>
              <NavLink 
                to="/services/towing-service" 
                className={`block py-1 ${location.pathname === '/services/towing-service' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
              >
                Towing Service
              </NavLink>
              <NavLink 
                to="/services/car-wash-care" 
                className={`block py-1 ${location.pathname === '/services/car-wash-care' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
              >
                Car Wash & Care
              </NavLink>
            </div>
          </div>
          <NavLink 
            to="/shop" 
            className={`block py-2 px-4 rounded ${isActive('/shop') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'} hover:bg-blue-50 hover:text-blue-600`}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/locations" 
            className={`block py-2 px-4 rounded ${isActive('/locations') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'} hover:bg-blue-50 hover:text-blue-600`}
          >
            Locations
          </NavLink>
          <NavLink 
            to="/contact" 
            className={`block py-2 px-4 rounded ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'} hover:bg-blue-50 hover:text-blue-600`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;