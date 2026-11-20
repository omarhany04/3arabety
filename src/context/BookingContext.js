import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import BookingModal from '../components/common/BookingModal';

const BookingContext = createContext(undefined);

export const BookingProvider = ({ children }) => {
  // `booking` is null while the modal is closed; a fresh modal (and form state) is mounted on every open
  const [booking, setBooking] = useState(null);

  const openBookingModal = useCallback((service, price, duration) => {
    setBooking({ service, price, duration, id: Date.now() });
  }, []);

  const closeBookingModal = useCallback(() => setBooking(null), []);

  const value = useMemo(() => ({ openBookingModal, closeBookingModal }), [openBookingModal, closeBookingModal]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {booking && (
        <BookingModal
          key={booking.id}
          onClose={closeBookingModal}
          service={booking.service}
          price={booking.price}
          duration={booking.duration}
        />
      )}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export default BookingContext;
