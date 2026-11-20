import React from 'react';
import { User } from 'react-feather';
import RatingStars from '../common/RatingStars';
import { useTranslation } from '../../i18n';

const RATINGS = [5, 4, 5];

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('home.testimonials.items');

  return (
    <section id="testimonials" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.testimonials.title')}</h2>
          <p className="text-lg text-gray-600">{t('home.testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.name} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <RatingStars rating={RATINGS[index] ?? 5} size="h-5 w-5" className="mb-4" />
              <blockquote className="text-gray-600 mb-6">“{testimonial.text}”</blockquote>
              <figcaption className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center me-4">
                  <User className="h-6 w-6 text-gray-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
