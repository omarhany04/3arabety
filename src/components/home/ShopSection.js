import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Battery, Disc, Filter, Droplet, ChevronLeft, ChevronRight, ShoppingCart, Check, X } from 'react-feather';
import ProductCard from '../common/ProductCard';
import { useCart } from '../../context/CartContext'; // Import the useCart hook

const ShopSection = () => {
  // Cart functionality
  const { addItem } = useCart();
  
  // State for installation service
  const [installationServices, setInstallationServices] = useState({});
  
  // State for success message
  const [addedProducts, setAddedProducts] = useState({});
  
  // State to track which product set to display
  const [activeProductSet, setActiveProductSet] = useState(0);
  
   // All product sets - Updated with the products you specified
  const productSets = [
    // First set
    [
      {
        id: 21,
        name: 'Clutch Kit - Nissan Sentra',
        description: 'High-performance clutch set for Sentra 2012-2018',
        rating: 4.7,
        reviews: 37,
        price: 2299.99,
        image: 'https://i.ibb.co/MDxMsRSC/Clutch-Kit-Nissan.jpg',
        badge: 'In Stock'
      },
      {
        id: 5,
        name: 'Car Battery',
        description: '12V 60Ah, high performance',
        rating: 4.7,
        reviews: 89,
        price: 2499.99,
        image: 'https://i.ibb.co/Sw4yjNs7/Car-Battery.jpg',
        badge: 'In Stock'
      },
            {
        id: 29,
        name: 'Water Pump - Peugeot 301',
        description: 'Durable OEM water pump for 1.6L engine',
        rating: 4.3,
        reviews: 24,
        price: 1199.99,
        image: 'https://i.postimg.cc/3Nsg3g0P/Peugeot.jpg',
        badge: 'In Stock'
      },
      {
        id: 11,
        name: 'All-Weather Floor Mats',
        description: 'Set of 4, custom fit for most vehicles',
        rating: 4.7,
        reviews: 156,
        price: 899.99,
        image: 'https://i.ibb.co/kbL6XrG/Floor-Mats.png',
        badge: 'In Stock'
      }
    ],
    // Second set
    [
      {
        id: 13,
        name: 'High-Flow Air Filter',
        description: 'Washable and reusable performance filter',
        rating: 4.6,
        reviews: 78,
        price: 599.99,
        image: 'https://i.ibb.co/k2xw4r2B/High-Flow-Air-Filter.jpg',
        badge: 'In Stock'
      },
      {
        id: 1,
        name: 'Premium Brake Disc',
        description: 'High performance brake rotor',
        rating: 4.7,
        reviews: 58,
        price: 464.99,
        image: 'https://i.ibb.co/YB2yPnCf/Break-Disc.png',
        badge: 'In Stock'
      },
      {
        id: 25,
        name: 'Driveshaft - Chevrolet Cruze',
        description: 'Front driveshaft, left side, fits Cruze 2011-2016',
        rating: 4.5,
        reviews: 33,
        price: 1649.99,
        image: 'https://i.ibb.co/rf1GZ10q/Ford-Ball-Joint.jpg',
        badge: 'Few Left'
      },
      {
        id: 7,
        name: 'LED Headlight Pair',
        description: 'High/low beam, fits most models',
        rating: 4.9,
        reviews: 76,
        price: 489.99,
        image: 'https://i.ibb.co/JjDtwb4R/Led.jpgs',
        badge: 'In Stock'
      }
    ],
    // Third set
    [
      {
        id: 34,
        name: 'Dashboard Camera - Full HD',
        description: 'Wide-angle dash cam with night vision and loop recording',
        rating: 4.6,
        reviews: 44,
        price: 1149.99,
        image: 'https://i.postimg.cc/bNb6sRHC/Dashcam.jpg',
        badge: 'In Stock'
      },
      {
        id: 3,
        name: 'Air Filter',
        description: 'Universal Fit',
        rating: 3,
        reviews: 18,
        price: 24.99,
        image: 'https://i.ibb.co/qYNHKjrJ/Air-Filter.webp',
        badge: 'New'
      },
      {
        id: 2,
        name: 'Brake Pad Set',
        description: 'For Toyota/Honda Models',
        rating: 5,
        reviews: 56,
        price: 75.00,
        image: 'https://i.ibb.co/YBHdN0Qm/BrakePad.jpg',
        badge: 'Popular'
      },
      {
        id: 9,
        name: 'Car Cleaning Kit',
        description: 'Complete kit with shampoo, wax and microfiber cloths',
        rating: 4.8,
        reviews: 112,
        price: 679.99,
        image: 'https://i.ibb.co/S4YBKYQ1/Cleaning-Kit.jpg',
        badge: 'Best Seller'
      }
    ]
  ];

  // Get current featured products based on active set
  const featuredProducts = productSets[activeProductSet];

  // Functions to navigate between product sets
  const nextProductSet = () => {
    setActiveProductSet((prev) => (prev === productSets.length - 1 ? 0 : prev + 1));
  };

  const prevProductSet = () => {
    setActiveProductSet((prev) => (prev === 0 ? productSets.length - 1 : prev - 1));
  };

  // Toggle installation service for a product
  const toggleInstallation = (productId) => {
    setInstallationServices(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    addItem(product, 1, installationServices[product.id] || false);
    
    // Show success message for this specific product
    setAddedProducts(prev => ({
      ...prev,
      [product.id]: true
    }));
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setAddedProducts(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 3000);
  };

  // Category data
  const categories = [
    { icon: <Battery className="h-6 w-6 text-purple-600" />, name: 'Batteries', color: 'purple' },
    { icon: <Disc className="h-6 w-6 text-blue-600" />, name: 'Brakes', color: 'blue' },
    { icon: <Filter className="h-6 w-6 text-red-600" />, name: 'Filters', color: 'red' },
    { icon: <Droplet className="h-6 w-6 text-green-600" />, name: 'Oils & Fluids', color: 'green' }
  ];

  return (
    <section id="shop" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop Car Products</h2>
          <p className="text-lg text-gray-600">
            Browse our extensive collection of quality car parts, accessories, and maintenance products.
          </p>
        </div>
        
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {categories.map((category, index) => (
            <Link to="/shop" key={index} className="category-card bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="p-4 text-center">
                <div className={`w-12 h-12 rounded-full bg-${category.color}-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-${category.color}-200 transition duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Featured Products with navigation controls */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Featured Products</h3>
          <div className="flex space-x-2">
            <button 
              onClick={prevProductSet}
              className="p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition duration-300"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextProductSet}
              className="p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition duration-300"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Product set indicator */}
        <div className="flex justify-center mb-6">
          {productSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProductSet(index)}
              className={`mx-1 w-2 h-2 rounded-full ${
                index === activeProductSet ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Product set ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                {product.badge && (
                  <div className="absolute top-2 right-2">
                    <span className={`bg-${product.badge === 'Sale' ? 'red' : product.badge === 'New' ? 'green' : 'blue'}-500 text-white text-xs px-2 py-1 rounded-md`}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    {product.oldPrice && (
                      <span className="text-gray-400 text-sm line-through">EGP {product.oldPrice}</span>
                    )}
                    <span className="text-lg font-bold text-gray-900 ml-1">EGP {product.price}</span>
                  </div>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
                {/* Success message */}
                {addedProducts[product.id] && (
                  <div className="mt-2 bg-green-100 text-green-700 p-2 rounded text-sm flex items-center justify-center animate-pulse">
                    <Check className="h-4 w-4 mr-1" /> Added to cart!
                  </div>
                )}
                <div className="mt-3">
                  <label className="flex items-center text-sm text-gray-600">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-4 w-4 text-blue-600"
                      checked={installationServices[product.id] || false}
                      onChange={() => toggleInstallation(product.id)}
                    />
                    <span className="ml-2">Add installation service</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop" className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md font-medium transition duration-300">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;