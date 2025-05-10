import React from 'react';
import { Star, User } from 'react-feather';

const Testimonials = () => {
  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      text: "Their 24/7 roadside assistance saved me when my car broke down at midnight. The mechanic arrived within 20 minutes and got my car running again. Excellent service!",
      name: "Ahmed Yahia",
      role: "Toyota Camry Owner",
      rating: 5
    },
    {
      id: 2,
      text: "Used their inspection service before buying a used car. The detailed report helped me negotiate a better price and avoid a potential headache. Highly recommend for used car buyers!",
      name: "Mohamed Amr",
      role: "BMW 3 Series Owner",
      rating: 4
    },
    {
      id: 3,
      text: "The convenience of their pickup and delivery service is unmatched. They collected my car from my workplace, serviced it, and returned it by the end of the day. Will definitely use again!",
      name: "Sara Ali",
      role: "Honda Civic Owner",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Read testimonials from our satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`h-5 w-5 ${index < testimonial.rating ? 'fill-current' : ''}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;