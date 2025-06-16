import { FcCustomerSupport } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <FcCustomerSupport size={28} />
        <span className="text-xl font-semibold text-gray-800">Customer Care</span>
      </div>

      <nav className="flex space-x-6">
        <Link to="/home" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500 transition">About</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-500 transition">Services</Link>
        <Link to="/product" className="text-gray-700 hover:text-blue-500 transition">Product</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
