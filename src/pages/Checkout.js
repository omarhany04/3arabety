import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  CreditCard, 
  Truck, 
  CheckCircle, 
  ShoppingBag, 
  Info, 
  ArrowLeft
} from 'react-feather';
import { useCart } from '../context/CartContext';

// Step components
const ShippingForm = ({ formData, setFormData, goToNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      goToNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="fullName">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="fullName"
          className={`block w-full bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            id="email"
            className={`block w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            id="phone"
            className={`block w-full bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
          Street Address <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="address"
          className={`block w-full bg-gray-50 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
        {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="city">
            City <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="city"
            className={`block w-full bg-gray-50 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
          {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="state">
            State/Province
          </label>
          <input 
            type="text" 
            id="state"
            className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.state}
            onChange={(e) => setFormData({...formData, state: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="zip">
            Postal Code
          </label>
          <input 
            type="text" 
            id="zip"
            className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.zip}
            onChange={(e) => setFormData({...formData, zip: e.target.value})}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="notes">
          Order Notes (Optional)
        </label>
        <textarea 
          id="notes"
          rows="3"
          className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Special instructions for delivery"
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
        ></textarea>
      </div>
      
      <div className="pt-4">
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

const PaymentForm = ({ formData, setFormData, goToPrevious, goToNext }) => {
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.cardName.trim()) newErrors.cardName = 'Name on card is required';
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Please use MM/YY format';
    }
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add space after every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.substring(0, 19);
  };

  const formatExpiryDate = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Format as MM/YY
    if (digits.length <= 2) {
      return digits;
    }
    return `${digits.substring(0, 2)}/${digits.substring(2, 4)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      goToNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cardName">
          Name on Card <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="cardName"
          className={`block w-full bg-gray-50 border ${errors.cardName ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          value={formData.cardName}
          onChange={(e) => setFormData({...formData, cardName: e.target.value})}
        />
        {errors.cardName && <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>}
      </div>
      
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cardNumber">
          Card Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input 
            type="text" 
            id="cardNumber"
            className={`block w-full bg-gray-50 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="XXXX XXXX XXXX XXXX"
            value={formData.cardNumber}
            onChange={(e) => setFormData({...formData, cardNumber: formatCardNumber(e.target.value)})}
            maxLength={19}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <CreditCard className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="expiryDate">
            Expiry Date <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="expiryDate"
            className={`block w-full bg-gray-50 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={(e) => setFormData({...formData, expiryDate: formatExpiryDate(e.target.value)})}
            maxLength={5}
          />
          {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="cvv">
            CVV <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input 
              type="text" 
              id="cvv"
              className={`block w-full bg-gray-50 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="XXX"
              value={formData.cvv}
              onChange={(e) => setFormData({...formData, cvv: e.target.value.replace(/\D/g, '').substring(0, 4)})}
              maxLength={4}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Info className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
        </div>
      </div>
      
      <div className="pt-4 flex items-center justify-between">
        <button 
          type="button" 
          onClick={goToPrevious}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shipping
        </button>
        
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          Review Order <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

const ReviewOrder = ({ formData, goToPrevious, goToNext }) => {
  const { items, subtotal, tax, total } = useCart();
  
  return (
    <div className="space-y-6">
      <div className="border rounded-md p-4">
        <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex py-2 border-b border-gray-200 last:border-0">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img 
                  src={item.image || '/images/placeholder/100/100'} 
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h4>{item.name}</h4>
                  <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  {item.installationService && (
                    <p className="text-sm text-blue-600">+Installation</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <p>Tax (14%)</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <div className="border rounded-md p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 mb-3">Shipping Information</h3>
          <button 
            onClick={() => goToPrevious(2)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <p className="font-medium text-gray-900">{formData.fullName}</p>
          <p>{formData.address}</p>
          <p>{formData.city}{formData.state ? `, ${formData.state}` : ''}{formData.zip ? ` ${formData.zip}` : ''}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          {formData.notes && (
            <div className="mt-2">
              <p className="font-medium text-gray-900">Order Notes:</p>
              <p>{formData.notes}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="border rounded-md p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-900 mb-3">Payment Information</h3>
          <button 
            onClick={() => goToPrevious(1)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <p className="font-medium text-gray-900">{formData.cardName}</p>
          <p>Card ending in {formData.cardNumber.slice(-4)}</p>
          <p>Expires: {formData.expiryDate}</p>
        </div>
      </div>
      
      <div className="pt-4 flex items-center justify-between">
        <button 
          type="button" 
          onClick={goToPrevious}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Payment
        </button>
        
        <button 
          onClick={goToNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          Place Order <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const OrderConfirmation = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [orderRef] = React.useState(() => `#ORDER-${Math.floor(100000 + Math.random() * 900000)}`);

  // Clear cart when order is confirmed
  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your order!</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Your order has been placed successfully. We've sent a confirmation email with your order details.
      </p>
      <div className="bg-gray-50 rounded-md p-4 max-w-sm mx-auto mb-8">
        <p className="text-sm text-gray-600 mb-2">Order Reference:</p>
        <p className="text-lg font-bold text-gray-900">{orderRef}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          Return to Home
        </button>
        <button 
          onClick={() => navigate('/shop')}
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const Checkout = () => {
  const { items, itemCount } = useCart();
  const navigate = useNavigate();
  
  // Redirect to shop if cart is empty
  React.useEffect(() => {
    if (itemCount === 0) {
      navigate('/shop');
    }
  }, [itemCount, navigate]);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: '',
    
    // Payment info
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  
  const goToNext = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const goToPrevious = (step) => {
    setCurrentStep(step || currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  // Render steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ShippingForm formData={formData} setFormData={setFormData} goToNext={goToNext} />;
      case 2:
        return <PaymentForm formData={formData} setFormData={setFormData} goToPrevious={goToPrevious} goToNext={goToNext} />;
      case 3:
        return <ReviewOrder formData={formData} goToPrevious={goToPrevious} goToNext={goToNext} />;
      case 4:
        return <OrderConfirmation />;
      default:
        return <ShippingForm formData={formData} setFormData={setFormData} goToNext={goToNext} />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Checkout</h2>
          <Link to="/shop" className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
          </Link>
        </div>
        
        {/* Checkout steps indicator */}
        {currentStep < 4 && (
          <div className="mb-12">
            <div className="flex items-center justify-between md:w-2/3 mx-auto">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > 1 ? <CheckCircle className="h-5 w-5" /> : '1'}
                </div>
                <span className={`mt-2 text-sm ${
                  currentStep >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}>Shipping</span>
              </div>
              
              <div className={`flex-1 h-1 mx-4 ${
                currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > 2 ? <CheckCircle className="h-5 w-5" /> : '2'}
                </div>
                <span className={`mt-2 text-sm ${
                  currentStep >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}>Payment</span>
              </div>
              
              <div className={`flex-1 h-1 mx-4 ${
                currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'
              }`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > 3 ? <CheckCircle className="h-5 w-5" /> : '3'}
                </div>
                <span className={`mt-2 text-sm ${
                  currentStep >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}>Review</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {renderStep()}
            </div>
          </div>
          
          {/* Order summary */}
          {currentStep < 4 && (
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShoppingBag className="h-5 w-5 mr-2" /> Order Summary ({itemCount})
                </h3>
                
                <div className="max-h-60 overflow-y-auto mb-4">
                  {items.map(item => (
                    <div key={item.id} className="flex py-3 border-b border-gray-200 last:border-0">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img 
                          src={item.image || '/images/placeholder/100/100'} 
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h4 className="text-sm">{item.name}</h4>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mt-1">
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          {item.installationService && (
                            <p className="text-xs text-blue-600">+Installation</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Subtotal</p>
                    <p>${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Installation Services</p>
                    <p>${items.reduce((sum, item) => sum + (item.installationService ? item.price * item.quantity * 0.2 : 0), 0).toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Tax (14%)</p>
                    <p>${(items.reduce((sum, item) => {
                      const itemPrice = item.price * item.quantity;
                      const installationCost = item.installationService ? itemPrice * 0.2 : 0;
                      return sum + itemPrice + installationCost;
                    }, 0) * 0.14).toFixed(2)}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-2 flex justify-between text-base font-bold text-gray-900">
                    <p>Total</p>
                    <p>${items.reduce((sum, item) => {
                      const itemPrice = item.price * item.quantity;
                      const installationCost = item.installationService ? itemPrice * 0.2 : 0;
                      const itemTotal = itemPrice + installationCost;
                      return sum + itemTotal;
                    }, 0).toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Truck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Free Shipping</p>
                      <p>Orders over $99 qualify for free shipping</p>
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