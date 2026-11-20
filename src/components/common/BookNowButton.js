import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { useTranslation } from '../../i18n';

const BookNowButton = ({
  service,
  price,
  duration,
  className = 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300',
  buttonText,
  children,
}) => {
  const { openBookingModal } = useBooking();
  const { t } = useTranslation();

  return (
    <button type="button" onClick={() => openBookingModal(service, price, duration)} className={className}>
      {children || buttonText || t('common.bookNow')}
    </button>
  );
};

export default BookNowButton;
