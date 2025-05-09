import React from 'react';
import Hero from '../components/home/Hero';
import SearchBar from '../components/home/SearchBar';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ShopSection from '../components/home/ShopSection';
import BrandsSection from '../components/home/BrandsSection';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import ContactSection from '../components/home/ContactSection';

const LocationMapSection = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  
  React.useEffect(() => {
    setHasLoaded(true);
  }, []);
  
  if (!hasLoaded) {
    return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center">Loading map...</div>
      </div>
    </div>;
  }
  const LocationMap = React.lazy(() => import('../components/home/LocationMap'));
  
  return (
    <React.Suspense fallback={<div>Loading map...</div>}>
      <LocationMap />
    </React.Suspense>
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
      <LocationMapSection />
      <Testimonials />
      <CallToAction />
      <ContactSection />
    </div>
  );
};

export default Home;