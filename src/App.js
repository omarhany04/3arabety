import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import Cart from './components/common/shop/Cart';
import ScrollToTop from './components/common/ScrollToTop';
import PageLoader from './components/common/PageLoader';

// Route-level code splitting: each page is downloaded only when it is visited.
const Shop = lazy(() => import('./pages/Shop'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Contact = lazy(() => import('./pages/Contact'));
const Locations = lazy(() => import('./pages/Locations'));
const Checkout = lazy(() => import('./pages/Checkout'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MechanicalRepairs = lazy(() => import('./pages/services/MechanicalRepairs'));
const EmergencyAssistance = lazy(() => import('./pages/services/EmergencyAssistance'));
const InspectionServices = lazy(() => import('./pages/services/InspectionServices'));
const SpecialtyServices = lazy(() => import('./pages/services/SpecialtyServices'));
const TowingService = lazy(() => import('./pages/services/TowingService'));
const CarWashCare = lazy(() => import('./pages/services/CarWashCare'));

function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/services/mechanical-repairs" element={<MechanicalRepairs />} />
                  <Route path="/services/emergency-assistance" element={<EmergencyAssistance />} />
                  <Route path="/services/inspection-services" element={<InspectionServices />} />
                  <Route path="/services/specialty-services" element={<SpecialtyServices />} />
                  <Route path="/services/towing-service" element={<TowingService />} />
                  <Route path="/services/car-wash-care" element={<CarWashCare />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <Cart />
          </div>
        </BrowserRouter>
      </BookingProvider>
    </CartProvider>
  );
}

export default App;
