import React from 'react';
import Hero from '../components/home/Hero';
import SearchBar from '../components/home/SearchBar';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ShopSection from '../components/home/ShopSection';
import BrandsSection from '../components/home/BrandsSection';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import { Link } from 'react-router-dom';

// Simple CTA component that directs users to the Locations page
const LocationsCTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Service Centers Near You</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover our service centers and partner locations throughout Alexandria and beyond. Find the nearest location for car maintenance, repairs, and more.
          </p>
          <Link to="/locations" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
};

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
  return (
    <div>
      <Hero />
      <SearchBar />
      <ServicesOverview />
      <WhyChooseUs />
      <ShopSection />
      <BrandsSection />
      <LocationsCTA />
      <Testimonials />
      <CallToAction />
      <ContactCTA />
    </div>
  );
};

export default Home;