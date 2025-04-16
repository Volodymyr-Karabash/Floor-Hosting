import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Floor Hosting</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/services" className="hover:text-yellow-300">Services</Link>
          <Link to="/faq" className="hover:text-yellow-300">FAQ</Link>
        </div>
      </div>
    </nav>
  );
}