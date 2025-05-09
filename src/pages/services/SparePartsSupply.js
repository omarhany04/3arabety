import React from 'react';
import { Link } from 'react-router-dom';
import { Check, CheckCircle, ShoppingCart } from 'react-feather';

const SparePartsSupply = () => {
  return (
    <section id="spare-parts-supply" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Spare Parts Supply</h2>
          <p className="text-lg text-gray-600">
            Quality OEM and aftermarket parts for all vehicle makes and models, with expert installation services available.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <img src="/images/placeholder/600/400" alt="Spare Parts Supply" className="rounded-lg shadow-lg" />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Extensive Parts Inventory</h3>
            <p className="text-gray-600 mb-6">
              With over 50,000 parts in stock and access to an extensive network of suppliers, we can source virtually any part you need for any vehicle make and model.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">OEM & Quality Aftermarket Options</h4>
                  <p className="text-gray-600 text-sm">
                    Choose between original manufacturer parts or quality aftermarket alternatives to fit your budget.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Expert Advice & Recommendations</h4>
                  <p className="text-gray-600 text-sm">
                    Our parts specialists can help you find the right components for your specific vehicle and needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Professional Installation Available</h4>
                  <p className="text-gray-600 text-sm">
                    Option to have our certified mechanics install your parts with guaranteed workmanship.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Parts Warranty</h4>
                  <p className="text-gray-600 text-sm">
                    All parts come with a minimum 12-month warranty for peace of mind.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/shop" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              Browse Parts
            </Link>
          </div>
        </div>
        
        {/* Parts Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Part Categories</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: 'cpu', title: 'Engine Parts' },
              { icon: 'disc', title: 'Brakes & Suspension' },
              { icon: 'battery', title: 'Electrical' },
              { icon: 'droplet', title: 'Oils & Fluids' },
              { icon: 'filter', title: 'Filters' },
              { icon: 'thermometer', title: 'Cooling System' },
              { icon: 'grid', title: 'Body & Exterior' },
              { icon: 'speaker', title: 'Interior & Accessories' }
            ].map((category, index) => (
              <Link to="/shop" key={index} className="category-card bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition duration-300">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {category.icon === 'cpu' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
                      {category.icon === 'disc' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />}
                      {category.icon === 'battery' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zm12-1v2m5 5h2m-19 0h2" />}
                      {category.icon === 'droplet' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />}
                      {category.icon === 'filter' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />}
                      {category.icon === 'thermometer' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M12 3c-1.1 0-2 .9-2 2v7.5" />}
                      {category.icon === 'grid' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
                      {category.icon === 'speaker' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-12M8 18v-8M16 18v-6M19 18v-3M5 18v-2" />}
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/shop" className="inline-block bg-white border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300">
              View All Categories
            </Link>
          </div>
        </div>
        
        {/* Featured Parts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Parts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Premium Oil Filter', 
                description: 'Fits multiple vehicle makes', 
                price: '12.99',
                rating: 4.5,
                reviews: 42,
                badge: { text: 'In Stock', color: 'green' }
              },
              { 
                title: 'Ceramic Brake Pads', 
                description: 'Front set for Toyota/Honda', 
                price: '49.99',
                rating: 5,
                reviews: 67,
                badge: { text: 'In Stock', color: 'green' }
              },
              { 
                title: 'Performance Air Filter', 
                description: 'Reusable, high-flow design', 
                price: '39.99',
                rating: 4,
                reviews: 29,
                badge: { text: 'Few Left', color: 'yellow' }
              },
              { 
                title: 'Platinum Spark Plugs', 
                description: 'Set of 4, extended life', 
                price: '29.99',
                rating: 4.5,
                reviews: 53,
                badge: { text: 'In Stock', color: 'green' }
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  <img src={`/images/placeholder/300/200`} alt={product.title} className="w-full h-48 object-cover" />
                  {product.badge && (
                    <div className="absolute top-2 right-2">
                      <span className={`bg-${product.badge.color}-500 text-white text-xs px-2 py-1 rounded-md`}>
                        {product.badge.text}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md transition duration-300">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-3">
                    <label className="flex items-center text-sm text-gray-600">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                      <span className="ml-2">Add installation service</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              View All Parts
            </Link>
          </div>
        </div>
        
        {/* Installation Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Installation Services</h3>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Expert Installation</h4>
                  <p className="text-gray-600 mb-4">
                    Our certified mechanics can install your purchased parts for you, ensuring proper fitment and optimal performance. All installation work comes with a 12-month labor warranty.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Trained and certified technicians
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      State-of-the-art equipment
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Workmanship guarantee
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      Competitive labor rates
                    </li>
                  </ul>
                  <Link to="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
                    Schedule Installation
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img src="/images/placeholder/500/300" alt="Installation Services" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Need Help Finding the Right Part?</h4>
                <p className="text-gray-600">
                  Our parts specialists can help you identify the exact part you need for your vehicle.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition duration-300 text-center">
                  Contact Us
                </Link>
                <a href="tel:1234567890" className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-100 px-6 py-2 rounded-md font-medium transition duration-300 text-center flex items-center justify-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparePartsSupply;