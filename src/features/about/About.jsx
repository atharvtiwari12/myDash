import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center">About My Dashboard</h1>
          <p className="text-center text-lg mt-2">
            Learn more about what we do and our mission
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
              MyProject is dedicated to helping users manage their profiles,
              explore new features, and connect with others. We strive to create
              a seamless experience where everyone can find what they need and
              grow together in a collaborative and innovative environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide a platform where users can securely manage their
                information and connect with the features they need in a
                user-friendly environment.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                We believe in user empowerment, privacy, and a constant drive
                for innovation to keep improving the user experience.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the go-to platform for personal profile management and
                user connection, fostering growth and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} MyDashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
