// src/components/layout/Header.js - Updated version with scroll to services functionality
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search } from 'react-feather';
import CartButton from '../common/shop/CartButton';
import { FaCarSide } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to handle services link click
  const handleServicesClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If already on home page, scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll to services
      navigate('/', { state: { scrollToServices: true } });
    }
  };

  // Effect to handle scrolling when navigating to home with state
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToServices) {
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600"><FaCarSide className="h-8 w-8" /></span>
              <span className="ml-2 text-2xl font-bold text-gray-800">3arabety</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active text-gray-800' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Home
            </NavLink>
            <a 
              href="/#services"
              onClick={handleServicesClick}
              className={`nav-link cursor-pointer ${location.pathname.includes('/services') ? 'active text-gray-800' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Services
            </a>
            <NavLink 
              to="/shop" 
              className={`nav-link ${isActive('/shop') ? 'active text-gray-800' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/locations" 
              className={`nav-link ${isActive('/locations') ? 'active text-gray-800' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Locations
            </NavLink>
            <NavLink 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active text-gray-800' : 'text-gray-600'} hover:text-blue-600 font-medium`}
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </button>
            <CartButton />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white py-4 px-6 space-y-4 shadow-inner`}>
          <NavLink to="/" className="block text-gray-800 hover:text-blue-600 font-medium">Home</NavLink>
          <div className="block text-gray-600 hover:text-blue-600 font-medium">
            <a 
              href="/#services"
              onClick={handleServicesClick}
              className="block font-medium mb-2"
            >
              Services
            </a>
            <div className="pl-4 space-y-2">
              <NavLink to="/services/mechanical-repairs" className="block text-gray-600 hover:text-blue-600">Mechanical Repairs</NavLink>
              <NavLink to="/services/emergency-assistance" className="block text-gray-600 hover:text-blue-600">Emergency Assistance</NavLink>
              <NavLink to="/services/inspection-services" className="block text-gray-600 hover:text-blue-600">Inspection Services</NavLink>
              <NavLink to="/services/spare-parts-supply" className="block text-gray-600 hover:text-blue-600">Spare Parts Supply</NavLink>
              <NavLink to="/services/towing-service" className="block text-gray-600 hover:text-blue-600">Towing Service</NavLink>
              <NavLink to="/services/car-wash-care" className="block text-gray-600 hover:text-blue-600">Car Wash & Care</NavLink>
            </div>
          </div>
          <NavLink to="/shop" className="block text-gray-600 hover:text-blue-600 font-medium">Shop</NavLink>
          <NavLink to="/locations" className="block text-gray-600 hover:text-blue-600 font-medium">Locations</NavLink>
          <NavLink to="/contact" className="block text-gray-600 hover:text-blue-600 font-medium">Contact</NavLink>
          <div className="pt-4 flex items-center justify-between border-t border-gray-200">
            <button className="text-gray-600 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </button>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;