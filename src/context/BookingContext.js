import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/common/BookingModal';

// Create context
const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    service: '',
    price: '',
    duration: ''
  });

  // Function to open booking modal with service details
  const openBookingModal = (service, price, duration) => {
    setBookingDetails({
      service,
      price,
      duration
    });
    setIsModalOpen(true);
  };

  // Function to close booking modal
  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        openBookingModal,
        closeBookingModal
      }}
    >
      {children}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={closeBookingModal}
        service={bookingDetails.service}
        price={bookingDetails.price}
        duration={bookingDetails.duration}
      />
    </BookingContext.Provider>
  );
};

// Custom hook to use booking context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export default BookingContext;