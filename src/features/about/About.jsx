import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-green-500 to-yellow-600 text-white p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center">About Grocery Mart</h1>
          <p className="text-center text-lg mt-2">
            Discover our mission and values
          </p>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Our Purpose
            </h2>
            <p className="text-lg text-center text-gray-600">
              At Grocery Mart, we are dedicated to providing a convenient and
              reliable shopping experience for our customers. Our goal is to
              make fresh produce and quality groceries accessible to everyone,
              helping you maintain a healthy lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver fresh groceries and exceptional service to our
                customers while promoting healthy eating habits.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                We believe in quality, sustainability, and community support. We
                prioritize our customers’ needs and aim to foster a sustainable
                environment.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading grocery provider known for our commitment
                to quality, freshness, and exceptional customer service.
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

export default AboutPage;
