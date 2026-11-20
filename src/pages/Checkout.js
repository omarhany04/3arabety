import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, CheckCircle, ShoppingBag, Info, ArrowLeft, Lock } from 'react-feather';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../i18n';

const inputClass = (hasError) =>
  `block w-full bg-gray-50 border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`;

const Field = ({ id, label, required, error, children }) => (
  <div>
    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor={id}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && (
      <p className="mt-1 text-sm text-red-500" id={`${id}-error`}>
        {error}
      </p>
    )}
  </div>
);

const ForwardIcon = (props) => <ChevronRight {...props} className={`${props.className || ''} rtl:-scale-x-100`} />;
const BackIcon = (props) => <ArrowLeft {...props} className={`${props.className || ''} rtl:-scale-x-100`} />;

const ShippingForm = ({ formData, update, goToNext }) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = t('checkout.errors.fullName');
    if (!formData.email.trim()) next.email = t('checkout.errors.email');
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = t('checkout.errors.emailInvalid');
    if (!formData.phone.trim()) next.phone = t('checkout.errors.phone');
    else if (!/^[+\d\s()-]{8,}$/.test(formData.phone)) next.phone = t('checkout.errors.phoneInvalid');
    if (!formData.address.trim()) next.address = t('checkout.errors.address');
    if (!formData.city.trim()) next.city = t('checkout.errors.city');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) goToNext();
  };

  const field = (id, type = 'text', extra = {}) => (
    <input
      type={type}
      id={id}
      className={inputClass(errors[id])}
      value={formData[id]}
      onChange={(e) => update(id, e.target.value)}
      aria-invalid={Boolean(errors[id])}
      aria-describedby={errors[id] ? `${id}-error` : undefined}
      {...extra}
    />
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field id="fullName" label={t('checkout.fullName')} required error={errors.fullName}>
        {field('fullName', 'text', { autoComplete: 'name' })}
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id="email" label={t('checkout.email')} required error={errors.email}>
          {field('email', 'email', { autoComplete: 'email', dir: 'ltr' })}
        </Field>
        <Field id="phone" label={t('checkout.phone')} required error={errors.phone}>
          {field('phone', 'tel', { autoComplete: 'tel', dir: 'ltr', placeholder: '+20 10 1234 5678' })}
        </Field>
      </div>

      <Field id="address" label={t('checkout.address')} required error={errors.address}>
        {field('address', 'text', { autoComplete: 'street-address' })}
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Field id="city" label={t('checkout.city')} required error={errors.city}>
          {field('city', 'text', { autoComplete: 'address-level2' })}
        </Field>
        <Field id="state" label={t('checkout.state')}>
          {field('state', 'text', { autoComplete: 'address-level1' })}
        </Field>
        <Field id="zip" label={t('checkout.zip')}>
          {field('zip', 'text', { autoComplete: 'postal-code', dir: 'ltr' })}
        </Field>
      </div>

      <Field id="notes" label={t('checkout.notes')}>
        <textarea
          id="notes"
          rows="3"
          className={inputClass(false)}
          placeholder={t('checkout.notesPlaceholder')}
          value={formData.notes}
          onChange={(e) => update('notes', e.target.value)}
        />
      </Field>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          {t('checkout.continueToPayment')} <ForwardIcon className="ms-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

const PaymentForm = ({ formData, update, goToPrevious, goToNext }) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!formData.cardName.trim()) next.cardName = t('checkout.errors.cardName');
    if (!formData.cardNumber.trim()) next.cardNumber = t('checkout.errors.cardNumber');
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) next.cardNumber = t('checkout.errors.cardNumberInvalid');
    if (!formData.expiryDate.trim()) next.expiryDate = t('checkout.errors.expiry');
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) next.expiryDate = t('checkout.errors.expiryInvalid');
    if (!formData.cvv.trim()) next.cvv = t('checkout.errors.cvv');
    else if (!/^\d{3,4}$/.test(formData.cvv)) next.cvv = t('checkout.errors.cvvInvalid');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const formatCardNumber = (value) =>
    value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .substring(0, 19);

  const formatExpiryDate = (value) => {
    const digits = value.replace(/\D/g, '');
    return digits.length <= 2 ? digits : `${digits.substring(0, 2)}/${digits.substring(2, 4)}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) goToNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="flex items-start gap-3 bg-blue-50 text-blue-800 rounded-md p-4 text-sm">
        <Lock className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <p>{t('checkout.demoNotice')}</p>
      </div>

      <Field id="cardName" label={t('checkout.cardName')} required error={errors.cardName}>
        <input
          type="text"
          id="cardName"
          autoComplete="cc-name"
          className={inputClass(errors.cardName)}
          value={formData.cardName}
          onChange={(e) => update('cardName', e.target.value)}
          aria-invalid={Boolean(errors.cardName)}
        />
      </Field>

      <Field id="cardNumber" label={t('checkout.cardNumber')} required error={errors.cardNumber}>
        <div className="relative">
          <input
            type="text"
            id="cardNumber"
            inputMode="numeric"
            autoComplete="cc-number"
            dir="ltr"
            className={`${inputClass(errors.cardNumber)} pe-10`}
            placeholder="XXXX XXXX XXXX XXXX"
            value={formData.cardNumber}
            onChange={(e) => update('cardNumber', formatCardNumber(e.target.value))}
            maxLength={19}
            aria-invalid={Boolean(errors.cardNumber)}
          />
          <CreditCard className="absolute inset-y-0 right-3 my-auto h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id="expiryDate" label={t('checkout.expiry')} required error={errors.expiryDate}>
          <input
            type="text"
            id="expiryDate"
            inputMode="numeric"
            autoComplete="cc-exp"
            dir="ltr"
            className={inputClass(errors.expiryDate)}
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={(e) => update('expiryDate', formatExpiryDate(e.target.value))}
            maxLength={5}
            aria-invalid={Boolean(errors.expiryDate)}
          />
        </Field>
        <Field id="cvv" label={t('checkout.cvv')} required error={errors.cvv}>
          <div className="relative">
            <input
              type="text"
              id="cvv"
              inputMode="numeric"
              autoComplete="cc-csc"
              dir="ltr"
              className={`${inputClass(errors.cvv)} pe-10`}
              placeholder="XXX"
              value={formData.cvv}
              onChange={(e) => update('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
              maxLength={4}
              aria-invalid={Boolean(errors.cvv)}
            />
            <Info className="absolute inset-y-0 right-3 my-auto h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </Field>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
        <button type="button" onClick={() => goToPrevious()} className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <BackIcon className="me-2 h-4 w-4" /> {t('checkout.backToShipping')}
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          {t('checkout.reviewOrder')} <ForwardIcon className="ms-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

const LineItems = ({ compact = false }) => {
  const { items } = useCart();
  const { t, formatPrice } = useTranslation();

  return items.map((item) => {
    const name = t(`products.${item.slug}.name`);
    return (
      <div key={item.id} className="flex py-3 border-b border-gray-200 last:border-0">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={item.image} alt={name} width="64" height="64" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="ms-4 flex flex-1 flex-col">
          <div className="flex justify-between gap-3 font-medium text-gray-900">
            <h4 className={compact ? 'text-sm' : 'text-base'}>{name}</h4>
            <p className="whitespace-nowrap">{formatPrice(item.lineTotal)}</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className={`${compact ? 'text-xs' : 'text-sm'} text-gray-500`}>{t('checkout.qty', { count: item.quantity })}</p>
            {item.installationService && <p className={`${compact ? 'text-xs' : 'text-sm'} text-blue-600`}>{t('checkout.plusInstallation')}</p>}
          </div>
        </div>
      </div>
    );
  });
};

const Totals = ({ showInstallation = false }) => {
  const { items, subtotal, tax, total } = useCart();
  const { t, formatPrice } = useTranslation();
  const installation = items.reduce((sum, item) => sum + item.installationCost, 0);

  return (
    <div className="space-y-2 pt-2">
      <div className="flex justify-between text-sm text-gray-600">
        <p>{t('cart.items')}</p>
        <p>{formatPrice(subtotal - installation)}</p>
      </div>
      {showInstallation && installation > 0 && (
        <div className="flex justify-between text-sm text-gray-600">
          <p>{t('checkout.installationServices')}</p>
          <p>{formatPrice(installation)}</p>
        </div>
      )}
      <div className="flex justify-between text-sm text-gray-600">
        <p>{t('cart.tax')}</p>
        <p>{formatPrice(tax)}</p>
      </div>
      <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold text-gray-900">
        <p>{t('cart.total')}</p>
        <p>{formatPrice(total)}</p>
      </div>
    </div>
  );
};

const ReviewOrder = ({ formData, goToStep, placeOrder }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="border rounded-md p-4">
        <h3 className="font-bold text-gray-900 mb-3">{t('checkout.orderSummary')}</h3>
        <LineItems />
        <div className="mt-4">
          <Totals showInstallation />
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 mb-3">{t('checkout.shippingInfo')}</h3>
          <button type="button" onClick={() => goToStep(1)} className="text-sm text-blue-600 hover:text-blue-800">
            {t('checkout.edit')}
          </button>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <p className="font-medium text-gray-900">{formData.fullName}</p>
          <p>{formData.address}</p>
          <p>{[formData.city, formData.state, formData.zip].filter(Boolean).join('، ')}</p>
          <p>
            {t('checkout.email')}: <span dir="ltr">{formData.email}</span>
          </p>
          <p>
            {t('checkout.phone')}: <span dir="ltr">{formData.phone}</span>
          </p>
          {formData.notes && (
            <div className="mt-2">
              <p className="font-medium text-gray-900">{t('checkout.notesLabel')}</p>
              <p>{formData.notes}</p>
            </div>
          )}
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 mb-3">{t('checkout.paymentInfo')}</h3>
          <button type="button" onClick={() => goToStep(2)} className="text-sm text-blue-600 hover:text-blue-800">
            {t('checkout.edit')}
          </button>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <p className="font-medium text-gray-900">{formData.cardName}</p>
          <p>{t('checkout.cardEnding', { digits: formData.cardNumber.slice(-4) })}</p>
          <p>{t('checkout.expires', { date: formData.expiryDate })}</p>
        </div>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
        <button type="button" onClick={() => goToStep(2)} className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <BackIcon className="me-2 h-4 w-4" /> {t('checkout.backToPayment')}
        </button>
        <button
          type="button"
          onClick={placeOrder}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          {t('checkout.placeOrder')} <ForwardIcon className="ms-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const OrderConfirmation = ({ orderRef }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('checkout.thankYou')}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{t('checkout.confirmationText')}</p>
      <div className="bg-gray-50 rounded-md p-4 max-w-sm mx-auto mb-8">
        <p className="text-sm text-gray-600 mb-2">{t('checkout.orderReference')}</p>
        <p className="text-lg font-bold text-gray-900" dir="ltr">
          {orderRef}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
        >
          {t('checkout.returnHome')}
        </button>
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300"
        >
          {t('cart.continueShopping')}
        </button>
      </div>
    </div>
  );
};

const STEPS = ['shipping', 'payment', 'review'];

const Checkout = () => {
  const { itemCount, clearCart } = useCart();
  const navigate = useNavigate();
  const { t, formatPrice } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderRef, setOrderRef] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Nothing to check out – send the visitor to the shop (but not after a completed order)
  useEffect(() => {
    if (itemCount === 0 && !orderRef) navigate('/shop', { replace: true });
  }, [itemCount, orderRef, navigate]);

  const update = (field, value) => setFormData((data) => ({ ...data, [field]: value }));

  const goToStep = (step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const placeOrder = () => {
    setOrderRef(`#3RB-${Math.floor(100000 + Math.random() * 900000)}`);
    clearCart();
    goToStep(4);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return <PaymentForm formData={formData} update={update} goToPrevious={() => goToStep(1)} goToNext={() => goToStep(3)} />;
      case 3:
        return <ReviewOrder formData={formData} goToStep={goToStep} placeOrder={placeOrder} />;
      case 4:
        return <OrderConfirmation orderRef={orderRef} />;
      default:
        return <ShippingForm formData={formData} update={update} goToNext={() => goToStep(2)} />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('checkout.title')}</h1>
          <Link to="/shop" className="text-blue-600 hover:text-blue-800 flex items-center">
            <BackIcon className="me-2 h-4 w-4" /> {t('cart.continueShopping')}
          </Link>
        </div>

        {currentStep < 4 && (
          <ol className="mb-12 flex items-center justify-between md:w-2/3 mx-auto">
            {STEPS.map((step, index) => {
              const number = index + 1;
              const reached = currentStep >= number;
              return (
                <React.Fragment key={step}>
                  {index > 0 && <li aria-hidden="true" className={`flex-1 h-1 mx-4 ${reached ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                  <li className="flex flex-col items-center" aria-current={currentStep === number ? 'step' : undefined}>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        reached ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {currentStep > number ? <CheckCircle className="h-5 w-5" /> : number}
                    </span>
                    <span className={`mt-2 text-sm ${reached ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                      {t(`checkout.steps.${step}`)}
                    </span>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={currentStep < 4 ? 'lg:w-2/3' : 'w-full'}>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">{renderStep()}</div>
          </div>

          {currentStep < 4 && (
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 lg:sticky lg:top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShoppingBag className="h-5 w-5 me-2" /> {t('checkout.orderSummaryCount', { count: itemCount })}
                </h2>
                <div className="max-h-60 overflow-y-auto mb-4">
                  <LineItems compact />
                </div>
                <Totals showInstallation />
                <div className="mt-6 bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-blue-600 me-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{t('checkout.freeShipping')}</p>
                      <p>{t('checkout.freeShippingText', { amount: formatPrice(1499) })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
