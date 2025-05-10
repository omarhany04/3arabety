import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Disc, Filter, Droplet } from 'react-feather';
import ProductCard from '../common/ProductCard';

const ShopSection = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Engine Oil',
      description: 'Synthetic 5W-30, 5L',
      rating: 4,
      reviews: 42,
      price: 39.99,
      oldPrice: 49.99,
      image: 'https://i.ibb.co/r22BzGYk/Premium-Oil.webp',
      badge: 'Sale'
    },
    {
      id: 2,
      name: 'Brake Pad Set',
      description: 'For Toyota/Honda Models',
      rating: 5,
      reviews: 56,
      price: 75.00,
      image: 'https://i.ibb.co/YBHdN0Qm/BrakePad.jpg'
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
      id: 4,
      name: 'Car Battery',
      description: '12V 60Ah',
      rating: 4.5,
      reviews: 31,
      price: 129.99,
      image: 'https://i.ibb.co/TD724Hpc/Car-Battery.jpg'
    }
  ];

  // Category data
  const categories = [
    { icon: <Battery className="h-6 w-6 text-purple-600" />, name: 'Batteries', color: 'purple' },
    { icon: <Disc className="h-6 w-6 text-blue-600" />, name: 'Brakes', color: 'blue' },
    { icon: <Filter className="h-6 w-6 text-red-600" />, name: 'Filters', color: 'red' },
    { icon: <Droplet className="h-6 w-6 text-green-600" />, name: 'Oils & Fluids', color: 'green' }
  ];

  return (
    <section id="shop" className="py-16 bg-gray-50">
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
        
        {/* Featured Products */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
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