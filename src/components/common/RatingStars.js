import React from 'react';
import { Star } from 'react-feather';
import { useTranslation } from '../../i18n';

/** Five-star rating display with an accessible label. */
const RatingStars = ({ rating, size = 'h-4 w-4', className = '' }) => {
  const { t } = useTranslation();
  const filled = Math.round(rating);

  return (
    <div className={`flex text-yellow-400 ${className}`} role="img" aria-label={t('common.ratingLabel', { rating })}>
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          className={`${size} ${index < filled ? 'fill-current' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default RatingStars;
