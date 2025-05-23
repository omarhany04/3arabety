import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import MechanicalRepairs from './pages/services/MechanicalRepairs';
import EmergencyAssistance from './pages/services/EmergencyAssistance';
import InspectionServices from './pages/services/InspectionServices';
import SpecialtyServices from './pages/services/SpecialtyServices';
import TowingService from './pages/services/TowingService';
import CarWashCare from './pages/services/CarWashCare';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import Cart from './components/common/shop/Cart';
import ScrollToTop from './components/common/ScrollToTop';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="font-poppins bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
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
              </Routes>
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