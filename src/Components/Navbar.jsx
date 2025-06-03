import React from 'react';


const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        
        <h1>logo</h1>
        <div className="flex items-center">
        
        </div>
        
        
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="home" className="hover:text-blue-600">Home</a>
          <a href="about" className="hover:text-blue-600">About</a>
          <a href="services" className="hover:text-blue-600">Services</a>
          <a href='product'>Product</a>
          <a href="contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
