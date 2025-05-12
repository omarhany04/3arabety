import React from 'react';
import { useBooking } from '../../context/BookingContext';

const BookNowButton = ({ 
  service, 
  price, 
  duration,
  className = 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300',
  buttonText = 'Book Now'
}) => {
  const { openBookingModal } = useBooking();

  const handleClick = () => {
    openBookingModal(service, price, duration);
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {buttonText}
    </button>
  );
};

export default BookNowButton;