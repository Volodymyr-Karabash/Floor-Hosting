import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-blue-900 text-white py-4">
        <nav className="container mx-auto flex justify-between px-6">
          <h1 className="text-xl font-bold">Floor Hosting</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Floor Hosting. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;