// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { items } from "../../data/itemData"; // Import item data
import { products } from "../../data/productData"; // Import product data

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Featured Items Section */}
        <h3 className="text-2xl font-semibold mb-4">Featured Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <button className="mt-2 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <h3 className="text-2xl font-semibold mb-4 mt-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h4>
                <p className="text-gray-600">
                  Price: ${product.price.toFixed(2)}
                </p>
                <button className="mt-2 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link to="/products">
            <button className="inline-flex justify-center px-6 py-3 text-lg font-medium text-white bg-green-600 border border-transparent rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
