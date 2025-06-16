import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

