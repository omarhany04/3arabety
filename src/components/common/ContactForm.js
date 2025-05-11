import React, { useState } from 'react';

const ContactForm = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: '',
    vehicle: '',
    preferredDate: '',
    preferredTime: ''
  });
  
  const [errors, setErrors] = useState({});
  const [formType, setFormType] = useState('contact'); // 'contact' or 'service'
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formType === 'service') {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      
      if (!formData.service) {
        newErrors.service = 'Please select a service';
      }
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setSubmitting(true);
    
    try {
      // If onSubmit prop is provided, call it with form data
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: '',
        vehicle: '',
        preferredDate: '',
        preferredTime: ''
      });
      
      setSubmitted(true);
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'Failed to submit form. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setErrors({});
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 ${className}`}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            Your message has been successfully sent. We will contact you very soon!
          </p>
        </div>
      ) : (
        <>
          <div className="flex mb-6 border-b">
            <button
              type="button"
              className={`pb-3 px-4 font-medium ${formType === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => handleFormTypeChange('contact')}
            >
              Contact Us
            </button>
            <button
              type="button"
              className={`pb-3 px-4 font-medium ${formType === 'service' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              onClick={() => handleFormTypeChange('service')}
            >
              Book Service
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {errors.form && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-md">
                {errors.form}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
            </div>
            
            {formType === 'service' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="service">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`block w-full bg-gray-50 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    >
                      <option value="">Select a service</option>
                      <option value="mechanical">Mechanical Repairs</option>
                      <option value="emergency">Emergency Assistance</option>
                      <option value="inspection">Inspection Services</option>
                      <option value="parts">Specialty Services</option>
                      <option value="towing">Towing Service</option>
                      <option value="carwash">Car Wash & Care</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="preferredDate">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="preferredTime">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>
              </>
            )}
            
            {formType === 'contact' && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
            )}
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`block w-full bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder={formType === 'contact' ? "Your message" : "Please describe your service needs or issue"}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                formType === 'contact' ? 'Send Message' : 'Book Service'
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;