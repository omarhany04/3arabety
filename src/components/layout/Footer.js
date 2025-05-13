import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Facebook, Twitter, Instagram, Youtube, 
  MapPin, Phone, Mail, Clock, Headphones, MessageCircle
} from 'react-feather';
import { FaCarSide } from 'react-icons/fa';
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle testimonials link click
  const handleTestimonialsClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If already on home page, scroll to testimonials section
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll to testimonials
      navigate('/', { state: { scrollToTestimonials: true } });
    }
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

  return (
    <footer className="bg-gray-800 text-white py-12 md:py-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-8">

          {/* Column 1: Logo & About */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-blue-500"><FaCarSide className="h-8 w-8" /></span>
                <span className="ml-2 text-2xl font-bold">3arabety</span>
              </Link>
            </div>

            <div className="max-w-md">
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your complete car service solution, providing quality care for all your vehicle needs 24/7.
              </p>

              <div className="flex space-x-4 mb-6">
                <a href="https://www.facebook.com/" className="text-gray-400 hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://x.com/" className="text-gray-400 hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/" className="text-gray-400 hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/" className="text-gray-400 hover:text-blue-400 transition duration-300" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              {/* Message Center Button with enhanced hover effects */}
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:text-white hover:font-bold transform origin-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" /> 
                Message Center
              </Link>
              <p className="text-gray-500 text-sm mt-6">
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
                <a 
                  href="/#services" 
                  onClick={handleServicesClick}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-blue-400 transition duration-300">Shop</Link>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  onClick={handleTestimonialsClick}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  Testimonials
                </a>
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
                <Link to="/services/specialty-services" className="text-gray-400 hover:text-blue-400 transition duration-300">Specialty Services</Link>
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
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">21 El Nasr Road<br />Smouha, Alexandria</span>
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
              <li className="flex items-center">
              <Headphones className="h-5 w-5 text-blue-400 mr-3" />
              <span className="text-gray-400">Live customer support</span>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;