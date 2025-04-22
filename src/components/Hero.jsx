import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-20 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold mb-4">High Performance Game Server Hosting</h1>
      <p className="text-xl mb-6">Start your server in seconds. Instant setup, full control, and 24/7 support.</p>
      <Link to="/services" className="bg-white text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">View Services</Link>
    </div>
  </section>
);

export default Hero;