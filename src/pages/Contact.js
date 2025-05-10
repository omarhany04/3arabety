import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'react-feather';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Add state variables for form submission status
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set submitting state to true to show loading state
    setSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      // In a real application, you would submit the form data to your server here
      console.log('Form submitted!', formData);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Set submitted to true to show success message
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000); // Simulate 1 second of processing time
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or need assistance? Reach out to our customer support team.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Our Head Office</h3>
                  <p className="text-gray-600">
                    21 El Nasr Road<br />
                    Smouha, Alexandria, Egypt
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    Customer Support: <a href="tel:+11234567890" className="hover:text-blue-600">(+20) 10 8234 1695</a><br />
                    Emergency: <a href="tel:+11234567899" className="hover:text-blue-600">(+20) 3 480 9461</a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    General Inquiries: <a href="mailto:info@3arabety.com" className="hover:text-blue-600">info@3arabety.com</a><br />
                    Support: <a href="mailto:support@3arabety.com" className="hover:text-blue-600">support@3arabety.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Operating Hours</h3>
                  <p className="text-gray-600">
                    Everyday: 10:00 AM - 10:00 PM<br />
                    Emergency Services: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        placeholder="Subject"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4" 
                        className="block w-full bg-gray-50 border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        placeholder="Your message"
                        required
                      ></textarea>
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
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
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