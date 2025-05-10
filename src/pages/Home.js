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

const Home = () => {
  const location = useLocation();
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Effect to handle scrolling when navigating to home with state
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const scrollTimeout = setTimeout(() => {
      if (location.state?.scrollToServices && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (location.state?.scrollToTestimonials && testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    return () => clearTimeout(scrollTimeout);
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
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;