import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import SearchBar from '../components/home/SearchBar';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ShopSection from '../components/home/ShopSection';
import BrandsSection from '../components/home/BrandsSection';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  const location = useLocation();
  const target = location.state?.scrollTo;

  // Scroll to a section when arriving from another page (e.g. "Services" in the header)
  useEffect(() => {
    if (!target) return undefined;
    const timeout = setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timeout);
  }, [target, location.key]);

  return (
    <>
      <Hero />
      <SearchBar />
      <ServicesOverview />
      <WhyChooseUs />
      <ShopSection />
      <BrandsSection />
      <Testimonials />
    </>
  );
};

export default Home;
