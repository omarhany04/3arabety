import React, { useState } from 'react';
import { Check, X, Plus, Minus, User } from 'react-feather';
import BookNowButton from '../common/BookNowButton';
import RatingStars from '../common/RatingStars';
import { useTranslation } from '../../i18n';

/**
 * Building blocks shared by the six service pages. Every colour is spelled out
 * as a complete Tailwind class so the classes survive Tailwind's purge step.
 */
export const ACCENTS = {
  blue: {
    iconBg: 'bg-blue-100', icon: 'text-blue-600', soft: 'bg-blue-50', solid: 'bg-blue-600 hover:bg-blue-700',
    border: 'border-blue-600', header: 'bg-blue-600', onHeader: 'text-blue-100', link: 'text-blue-600 hover:text-blue-800',
  },
  red: {
    iconBg: 'bg-red-100', icon: 'text-red-600', soft: 'bg-red-50', solid: 'bg-red-600 hover:bg-red-700',
    border: 'border-red-600', header: 'bg-red-600', onHeader: 'text-red-100', link: 'text-red-600 hover:text-red-800',
  },
  green: {
    iconBg: 'bg-green-100', icon: 'text-green-600', soft: 'bg-green-50', solid: 'bg-green-600 hover:bg-green-700',
    border: 'border-green-600', header: 'bg-green-600', onHeader: 'text-green-100', link: 'text-green-600 hover:text-green-800',
  },
  purple: {
    iconBg: 'bg-purple-100', icon: 'text-purple-600', soft: 'bg-purple-50', solid: 'bg-purple-600 hover:bg-purple-700',
    border: 'border-purple-600', header: 'bg-purple-600', onHeader: 'text-purple-100', link: 'text-purple-600 hover:text-purple-800',
  },
  yellow: {
    iconBg: 'bg-yellow-100', icon: 'text-yellow-600', soft: 'bg-yellow-50', solid: 'bg-yellow-600 hover:bg-yellow-700',
    border: 'border-yellow-600', header: 'bg-yellow-600', onHeader: 'text-yellow-100', link: 'text-yellow-600 hover:text-yellow-800',
  },
};

export const ServicePage = ({ id, background = 'bg-gray-50', children }) => (
  <section id={id} className={`py-16 ${background}`}>
    <div className="container mx-auto px-6 md:px-8">{children}</div>
  </section>
);

export const ServiceHeader = ({ title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
    <p className="text-lg text-gray-600">{subtitle}</p>
  </div>
);

export const SectionTitle = ({ children, className = 'mb-8' }) => (
  <h2 className={`text-2xl font-bold text-gray-900 text-center ${className}`}>{children}</h2>
);

/** Image + headline + feature list + call to action. */
export const ServiceIntro = ({ image, imageAlt, title, text, features, accent = 'blue', children, cta }) => {
  const theme = ACCENTS[accent];
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
      <div className="lg:w-1/2 w-full">
        <img src={image} alt={imageAlt} width="1000" height="667" decoding="async" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{text}</p>
        {children}
        <ul className="space-y-4 mb-6">
          {features.map((feature) => (
            <li key={feature.title} className="flex">
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full ${theme.iconBg} flex items-center justify-center`}>
                  <Check className={`h-4 w-4 ${theme.icon}`} aria-hidden="true" />
                </div>
              </div>
              <div className="ms-4">
                <h3 className="font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
        {cta}
      </div>
    </div>
  );
};

/** Highlighted hotline box used on the emergency and towing pages. */
export const HotlineBox = ({ Icon, title, number, text, accent }) => {
  const theme = ACCENTS[accent];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
        <Icon className={`h-5 w-5 ${theme.icon} me-2`} aria-hidden="true" />
        {title}
      </h3>
      <a href={`tel:${number}`} className={`block text-2xl font-bold ${theme.icon} mb-2`}>
        {number}
      </a>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

/** Card with an icon, description, price and booking link. */
export const OfferingCard = ({ Icon, title, description, priceLabel, duration, accent, image, imageAlt, tag, tagClass }) => {
  const { t } = useTranslation();
  const theme = ACCENTS[accent];
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition duration-300 hover:shadow-lg">
      {image && (
        <div className="relative">
          <img src={image} alt={imageAlt || title} width="800" height="533" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
          {tag && <span className={`absolute top-2 end-2 ${tagClass} text-white text-xs px-2 py-1 rounded-md`}>{tag}</span>}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className={`w-14 h-14 rounded-lg ${theme.iconBg} flex items-center justify-center mb-6`}>
          <Icon className={`h-7 w-7 ${theme.icon}`} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center gap-3 mt-auto">
          <p className="text-lg font-bold text-gray-900">{priceLabel}</p>
          <BookNowButton
            service={title}
            price={priceLabel}
            duration={duration}
            className={`${theme.link} font-medium transition duration-300 whitespace-nowrap`}
            buttonText={t('common.bookNow')}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Pricing / membership card.
 * `variant="inline"` shows the price with a text "Book Now" link, `variant="block"` a full-width button.
 */
export const PlanCard = ({ name, priceLabel, description, features = [], excluded = [], duration, featured, accent, variant = 'inline', buttonText }) => {
  const { t } = useTranslation();
  const theme = ACCENTS[accent];

  return (
    <div
      className={`pricing-card bg-white rounded-xl overflow-hidden transition duration-300 flex flex-col ${
        featured ? `shadow-lg border-2 ${theme.border} md:scale-105` : 'shadow-md border border-gray-200'
      }`}
    >
      <div className={`p-6 text-center ${featured ? theme.header : `${theme.soft} border-b border-gray-200`}`}>
        <h3 className={`text-xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
        <div className={`text-3xl font-bold mb-2 ${featured ? 'text-white' : theme.icon}`}>{priceLabel}</div>
        <p className={`text-sm ${featured ? theme.onHeader : 'text-gray-600'}`}>{description}</p>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 me-2 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
          {excluded.map((feature) => (
            <li key={feature} className="flex items-center text-gray-400">
              <X className="h-4 w-4 text-red-400 me-2 flex-shrink-0" aria-hidden="true" />
              <span className="line-through decoration-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        {duration && (
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500">{t('common.duration', { value: duration })}</span>
          </div>
        )}
        <div className="mt-auto pt-6">
          {variant === 'block' ? (
            <BookNowButton
              service={name}
              price={priceLabel}
              duration={duration}
              className={`block w-full ${theme.solid} text-white text-center px-6 py-3 rounded-md font-medium transition duration-300`}
              buttonText={buttonText || t('common.bookNow')}
            />
          ) : (
            <div className="flex justify-between items-center gap-3">
              <span className="text-lg font-bold text-gray-900">{priceLabel}</span>
              <BookNowButton
                service={name}
                price={priceLabel}
                duration={duration}
                className={`${theme.link} font-medium transition duration-300`}
                buttonText={buttonText || t('common.bookNow')}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/** Numbered process steps. */
export const ProcessSteps = ({ steps, accent }) => {
  const theme = ACCENTS[accent];
  const columns = steps.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';
  return (
    <ol className={`grid grid-cols-1 ${columns} gap-8`}>
      {steps.map((step, index) => (
        <li key={step.title} className="text-center">
          <div className={`w-16 h-16 rounded-full ${theme.iconBg} flex items-center justify-center mx-auto mb-4`}>
            <span className={`text-2xl font-bold ${theme.icon}`}>{index + 1}</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

/** Accessible accordion for FAQs. */
export const FaqAccordion = ({ items, accent = 'blue' }) => {
  const [open, setOpen] = useState(null);
  const theme = ACCENTS[accent];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md px-6">
      {items.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.question} className="border-b border-gray-200 last:border-b-0">
            <h3>
              <button
                type="button"
                className="flex justify-between items-center gap-4 w-full py-5 text-start"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {isOpen ? (
                  <Minus className={`h-5 w-5 ${theme.icon} flex-shrink-0`} aria-hidden="true" />
                ) : (
                  <Plus className={`h-5 w-5 ${theme.icon} flex-shrink-0`} aria-hidden="true" />
                )}
              </button>
            </h3>
            <div id={`faq-panel-${index}`} role="region" className={`faq-answer ${isOpen ? 'active' : ''}`}>
              <p className="text-gray-600 pb-5">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/** Customer quotes with star ratings. */
export const ServiceTestimonials = ({ items, accent }) => {
  const theme = ACCENTS[accent];
  return (
    <div className={`grid grid-cols-1 ${items.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
      {items.map((item) => (
        <figure key={item.name} className={`bg-white rounded-xl shadow-md p-6 border-s-4 ${theme.border}`}>
          <blockquote className="text-gray-600 italic mb-6">“{item.text}”</blockquote>
          <figcaption className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center me-4">
              <User className="h-6 w-6 text-gray-600" aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-gray-900">{item.name}</p>
              {item.role && <p className="text-sm text-gray-500">{item.role}</p>}
              <RatingStars rating={5} />
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

/** Coloured banner with a heading, text and an action on the side. */
export const CtaBanner = ({ title, text, accent, children, centered = false }) => {
  const theme = ACCENTS[accent];
  return (
    <div className={`${theme.soft} p-8 rounded-xl shadow-md`}>
      <div className={centered ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row items-center justify-between gap-6'}>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className={`text-gray-600 ${centered ? 'mb-6' : ''}`}>{text}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
