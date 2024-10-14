import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-yellow-600 text-white">
      <header className="p-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Grocery Mart</div>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-green-600 font-semibold rounded hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-green-600 border border-white font-semibold rounded hover:bg-white hover:text-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Grocery Mart
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Your one-stop shop for fresh produce, groceries, and more!
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Start Shopping
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-green-600 border border-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <svg
                  className="w-16 h-16 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9V5a1 1 0 10-2 0v4H5a1 1 0 000 2h3v4a1 1 0 102 0v-4h3a1 1 0 000-2h-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fresh Produce</h3>
              <p className="text-gray-600">
                Shop the freshest fruits and vegetables delivered to your door.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <svg
                  className="w-16 h-16 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 6.293a1 1 0 00-1.414 0l-5.293 5.293-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Diverse Grocery Items
              </h3>
              <p className="text-gray-600">
                Explore a wide range of grocery products from trusted brands.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <svg
                  className="w-16 h-16 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12 2a1 1 0 00-1 1v3.586l-.293-.293a1 1 0 00-1.414 0L5.586 9H4a1 1 0 000 2h2v3H4a1 1 0 000 2h2v1a1 1 0 001 1h2a1 1 0 001-1v-1h2a1 1 0 001-1h2a1 1 0 000-2h-2v-3h2a1 1 0 100-2h-2V6a1 1 0 00-.293-.707L12 2.414V2zM8 15v1H6v-1h2zm6 0v1h-2v-1h2zM7 9l3-3 3 3H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Convenient Delivery
              </h3>
              <p className="text-gray-600">
                Enjoy convenient delivery options that fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Grocery Mart. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
