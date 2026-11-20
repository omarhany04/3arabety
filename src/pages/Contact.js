import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check } from 'react-feather';
import { useTranslation } from '../i18n';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };
const inputClass =
  'block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

const ContactItem = ({ Icon, title, children }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
      </div>
    </div>
    <div className="ms-4">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // Simulated request – connect to a real contact endpoint when available
    timers.current.push(
      setTimeout(() => {
        setFormData(EMPTY_FORM);
        setSubmitting(false);
        setSubmitted(true);
        timers.current.push(setTimeout(() => setSubmitted(false), 5000));
      }, 1000)
    );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('contact.title')}</h1>
            <p className="text-lg text-gray-600 mb-8">{t('contact.subtitle')}</p>

            <div className="space-y-6">
              <ContactItem Icon={MapPin} title={t('contact.office')}>
                <p>
                  {t('footer.addressLine1')}
                  <br />
                  {t('contact.officeCity')}
                </p>
              </ContactItem>

              <ContactItem Icon={Phone} title={t('contact.phone')}>
                <p>
                  {t('contact.support')}:{' '}
                  <a href="tel:+201082341695" className="hover:text-blue-600" dir="ltr">
                    (+20) 10 8234 1695
                  </a>
                  <br />
                  {t('contact.emergency')}:{' '}
                  <a href="tel:+2034809461" className="hover:text-blue-600" dir="ltr">
                    (+20) 3 480 9461
                  </a>
                </p>
              </ContactItem>

              <ContactItem Icon={Mail} title={t('contact.email')}>
                <p>
                  {t('contact.general')}:{' '}
                  <a href="mailto:info@3arabety.com" className="hover:text-blue-600">
                    info@3arabety.com
                  </a>
                  <br />
                  {t('contact.supportEmail')}:{' '}
                  <a href="mailto:support@3arabety.com" className="hover:text-blue-600">
                    support@3arabety.com
                  </a>
                </p>
              </ContactItem>

              <ContactItem Icon={Clock} title={t('contact.hours')}>
                <p>
                  {t('contact.everyday')}
                  <br />
                  {t('contact.emergencyHours')}
                </p>
              </ContactItem>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              {submitted ? (
                <div className="text-center py-8" role="status">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{t('contact.thankYou')}</h2>
                  <p className="text-gray-600">{t('contact.sent')}</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.formTitle')}</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-name">
                          {t('contact.name')}
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder={t('contact.namePlaceholder')}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-email">
                          {t('contact.emailLabel')}
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          dir="ltr"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`${inputClass} rtl:text-right`}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-subject">
                        {t('contact.subject')}
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t('contact.subjectPlaceholder')}
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-message">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={inputClass}
                        placeholder={t('contact.messagePlaceholder')}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-75 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                      disabled={submitting}
                    >
                      {submitting && <span className="me-3 h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />}
                      {submitting ? t('contact.sending') : t('contact.send')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
