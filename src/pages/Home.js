// src/pages/Home.js - Updated to support scrolling to services section
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import SearchBar from '../components/home/SearchBar';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ShopSection from '../components/home/ShopSection';
import BrandsSection from '../components/home/BrandsSection';
import Testimonials from '../components/home/Testimonials';
import { Link } from 'react-router-dom';

// Simple CTA to contact page
const ContactCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Assistance?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or need help with your vehicle? Our team is ready to assist you with any inquiries you might have.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const location = useLocation();
  const servicesRef = useRef(null);

  // Effect to handle scrolling when navigating to home with state
  useEffect(() => {
    if (location.state?.scrollToServices && servicesRef.current) {
      setTimeout(() => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location.state]);

  return (
    <div>
      <Hero />
      <SearchBar />
      <div ref={servicesRef} id="services-scroll-target">
        <ServicesOverview />
      </div>
      <WhyChooseUs />
      <ShopSection />
      <BrandsSection />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;