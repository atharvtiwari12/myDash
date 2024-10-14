import React from "react";

const Home = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
      <p className="text-gray-600 mb-6">
        This web application is designed to help you manage your account
        efficiently. Whether you're updating your profile, changing settings, or
        checking your preferences, everything is just a click away!
      </p>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-600">
            User-friendly interface for seamless navigation.
          </li>
          <li className="text-gray-600">
            Responsive design that adapts to all devices.
          </li>
          <li className="text-gray-600">Secure login and signup processes.</li>
          <li className="text-gray-600">
            Personalized settings to enhance your experience.
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Getting Started:</h3>
        <p className="text-gray-600">
          To begin, explore the sidebar for navigation options, and customize
          your profile settings as needed. If you have any questions, feel free
          to contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Home;
