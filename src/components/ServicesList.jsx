import React from "react";

const ServicesList = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Hosting Plans</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Basic Plan</h2>
            <p className="text-center text-gray-600 mb-4">Perfect for personal projects and small websites.</p>
            <ul className="space-y-2 mb-6">
              <li>✅ 1 GB RAM</li>
              <li>✅ 10 GB SSD Storage</li>
              <li>✅ Unlimited Bandwidth</li>
              <li>✅ 1 Website</li>
              <li>✅ Basic Support</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">$4.99/mo</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-4 border-blue-500">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Pro Plan</h2>
            <p className="text-center text-gray-600 mb-4">Great for growing websites and small businesses.</p>
            <ul className="space-y-2 mb-6">
              <li>✅ 4 GB RAM</li>
              <li>✅ 50 GB SSD Storage</li>
              <li>✅ Unlimited Bandwidth</li>
              <li>✅ Up to 5 Websites</li>
              <li>✅ Priority Support</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">$9.99/mo</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Enterprise</h2>
            <p className="text-center text-gray-600 mb-4">Ideal for large-scale apps and enterprises.</p>
            <ul className="space-y-2 mb-6">
              <li>✅ 16 GB RAM</li>
              <li>✅ 200 GB SSD Storage</li>
              <li>✅ Unlimited Bandwidth</li>
              <li>✅ Unlimited Websites</li>
              <li>✅ 24/7 Premium Support</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">$29.99/mo</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
