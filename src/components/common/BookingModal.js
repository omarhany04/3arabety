import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'react-feather';

const BookingModal = ({ isOpen, onClose, service, price, duration }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    date: '',
    time: '',
    notes: '',
    service: service || 'General Service'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Update service if it changes from props
  useEffect(() => {
    if (service) {
      setFormData(prevData => ({ ...prevData, service }));
    }
  }, [service]);

  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM'
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field as the user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (step === 2) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.time) newErrors.time = 'Please select a time';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Proceed to next step
  const nextStep = () => {
    if (validate()) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);
      
      try {
        // Simulate API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form after successful submission
        setSuccess(true);
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            vehicle: '',
            date: '',
            time: '',
            notes: '',
            service: service || 'General Service'
          });
          setStep(1);
          onClose();
        }, 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ form: 'Failed to submit form. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
  };

  // Generate today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600">
                  Your appointment has been successfully scheduled. We've sent a confirmation email with all the details.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg leading-6 font-bold text-gray-900 mb-4">
                  {step === 1 ? 'Book Appointment' : 'Select Date & Time'}
                </h3>
                
                {/* Service summary */}
                <div className="bg-blue-50 rounded-md p-4 mb-6">
                  <h4 className="font-bold text-gray-900">{formData.service}</h4>
                  <div className="flex justify-between mt-1">
                    {price && <p className="text-gray-700">Price: {price}</p>}
                    {duration && <p className="text-gray-700">Duration: {duration}</p>}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Information */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`block w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`block w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="Your email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`block w-full bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="vehicle">
                          Vehicle Information
                        </label>
                        <input 
                          type="text" 
                          id="vehicle"
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Make, model and year (e.g., Toyota Camry 2022)"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time Selection */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center" htmlFor="date">
                          <Calendar className="h-4 w-4 mr-2" /> 
                          Select Date <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="date" 
                          id="date"
                          name="date"
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          className={`block w-full bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center" htmlFor="time">
                          <Clock className="h-4 w-4 mr-2" /> 
                          Select Time <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`py-2 px-4 border ${formData.time === time ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 hover:bg-gray-50'} rounded-md text-sm font-medium`}
                              onClick={() => handleChange({ target: { name: 'time', value: time } })}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="mt-3 text-sm text-red-500">{errors.time}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="notes">
                          Additional Notes
                        </label>
                        <textarea 
                          id="notes"
                          name="notes"
                          rows="3"
                          value={formData.notes}
                          onChange={handleChange}
                          className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Any special requests or information"
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {/* Form Errors */}
                  {errors.form && (
                    <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md">
                      {errors.form}
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Form Actions */}
          {!success && (
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {step === 1 ? (
                <button
                  type="button"
                  className="w-full sm:w-auto sm:ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={nextStep}
                >
                  Continue
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className={`w-full sm:w-auto sm:ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                  <button
                    type="button"
                    className="mt-3 sm:mt-0 w-full sm:w-auto sm:ml-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-6 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={prevStep}
                    disabled={loading}
                  >
                    Back
                  </button>
                </>
              )}
              <button
                type="button"
                className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-6 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;