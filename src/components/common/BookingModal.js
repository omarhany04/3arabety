import React, { useEffect, useRef, useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'react-feather';
import { useTranslation } from '../../i18n';

const TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

const localDateString = (date = new Date()) => {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().split('T')[0];
};

const inputClass = (hasError) =>
  `block w-full bg-gray-50 border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`;

const BookingModal = ({ onClose, service, price, duration }) => {
  const { t, locale } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', vehicle: '', date: '', time: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const closeTimer = useRef(null);
  const dialogRef = useRef(null);

  const serviceName = service || t('booking.generalService');

  // Escape closes the dialog; the page behind it does not scroll
  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      clearTimeout(closeTimer.current);
    };
  }, [onClose]);

  const formatSlot = (slot) => {
    const [hours, minutes] = slot.split(':').map(Number);
    return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit' }).format(new Date(2000, 0, 1, hours, minutes));
  };

  const handleChange = (name, value) => {
    setFormData((data) => ({ ...data, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (step === 1) {
      if (!formData.name.trim()) next.name = t('booking.errors.name');
      if (!formData.email.trim()) next.email = t('booking.errors.email');
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = t('booking.errors.emailInvalid');
      if (!formData.phone.trim()) next.phone = t('booking.errors.phone');
    } else {
      if (!formData.date) next.date = t('booking.errors.date');
      if (!formData.time) next.time = t('booking.errors.time');
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const nextStep = () => {
    if (validate()) setStep(2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step === 1) {
      nextStep();
      return;
    }
    if (!validate()) return;
    setLoading(true);
    // Simulated request – replace with a real booking API when available
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSuccess(true);
    closeTimer.current = setTimeout(onClose, 3500);
  };

  const primaryButton =
    'w-full sm:w-auto inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75';
  const secondaryButton =
    'w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-6 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="fixed inset-0 bg-gray-600/75" onClick={onClose} aria-hidden="true" />
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          className="relative w-full max-w-lg bg-white rounded-lg text-start overflow-hidden shadow-xl focus:outline-none"
        >
          <button
            type="button"
            className="absolute top-4 end-4 rounded-md text-gray-400 hover:text-gray-500"
            onClick={onClose}
            aria-label={t('common.close')}
          >
            <X className="h-6 w-6" />
          </button>

          <form onSubmit={handleSubmit} noValidate>
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {success ? (
                <div className="text-center py-8" role="status">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 id="booking-title" className="text-xl font-bold text-gray-900 mb-2">
                    {t('booking.confirmedTitle')}
                  </h3>
                  <p className="text-gray-600">{t('booking.confirmedText')}</p>
                </div>
              ) : (
                <>
                  <h3 id="booking-title" className="text-lg leading-6 font-bold text-gray-900 mb-4 pe-8">
                    {step === 1 ? t('booking.title') : t('booking.selectDateTime')}
                  </h3>

                  <div className="bg-blue-50 rounded-md p-4 mb-6">
                    <h4 className="font-bold text-gray-900">{serviceName}</h4>
                    {(price || duration) && (
                      <div className="flex flex-wrap justify-between gap-2 mt-1">
                        {price && <p className="text-gray-700">{t('booking.price', { price })}</p>}
                        {duration && <p className="text-gray-700">{t('common.duration', { value: duration })}</p>}
                      </div>
                    )}
                  </div>

                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="booking-name">
                          {t('booking.name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="booking-name"
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={inputClass(errors.name)}
                          placeholder={t('booking.namePlaceholder')}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="booking-email">
                          {t('booking.email')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="booking-email"
                          dir="ltr"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`${inputClass(errors.email)} rtl:text-right`}
                          placeholder={t('booking.emailPlaceholder')}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="booking-phone">
                          {t('booking.phone')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="booking-phone"
                          dir="ltr"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={`${inputClass(errors.phone)} rtl:text-right`}
                          placeholder="+20 10 1234 5678"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="booking-vehicle">
                          {t('booking.vehicle')}
                        </label>
                        <input
                          type="text"
                          id="booking-vehicle"
                          value={formData.vehicle}
                          onChange={(e) => handleChange('vehicle', e.target.value)}
                          className={inputClass(false)}
                          placeholder={t('booking.vehiclePlaceholder')}
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="text-gray-700 text-sm font-medium mb-2 flex items-center" htmlFor="booking-date">
                          <Calendar className="h-4 w-4 me-2" /> {t('booking.date')} <span className="text-red-500 ms-1">*</span>
                        </label>
                        <input
                          type="date"
                          id="booking-date"
                          min={localDateString()}
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          className={inputClass(errors.date)}
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                      </div>
                      <fieldset>
                        <legend className="text-gray-700 text-sm font-medium mb-2 flex items-center">
                          <Clock className="h-4 w-4 me-2" /> {t('booking.time')} <span className="text-red-500 ms-1">*</span>
                        </legend>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {TIME_SLOTS.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              aria-pressed={formData.time === slot}
                              className={`py-2 px-4 border ${
                                formData.time === slot ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 hover:bg-gray-50'
                              } rounded-md text-sm font-medium`}
                              onClick={() => handleChange('time', slot)}
                            >
                              {formatSlot(slot)}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="mt-3 text-sm text-red-500">{errors.time}</p>}
                      </fieldset>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="booking-notes">
                          {t('booking.notes')}
                        </label>
                        <textarea
                          id="booking-notes"
                          rows="3"
                          value={formData.notes}
                          onChange={(e) => handleChange('notes', e.target.value)}
                          className={inputClass(false)}
                          placeholder={t('booking.notesPlaceholder')}
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {!success && (
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button type="button" className={secondaryButton} onClick={onClose} disabled={loading}>
                  {t('booking.cancel')}
                </button>
                {step === 2 && (
                  <button type="button" className={secondaryButton} onClick={() => setStep(1)} disabled={loading}>
                    {t('booking.back')}
                  </button>
                )}
                <button type="submit" className={primaryButton} disabled={loading}>
                  {loading && <span className="me-2 h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />}
                  {step === 1 ? t('booking.continue') : loading ? t('booking.processing') : t('booking.confirm')}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
