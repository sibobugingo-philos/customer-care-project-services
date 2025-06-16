import React from 'react';
import { FcInfo, FcSupport, FcServices, FcRating } from 'react-icons/fc';

const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded shadow mt-10">
      
      <div className="flex items-center space-x-3 mb-6">
        <FcInfo size={36} />
        <h1 className="text-3xl font-bold text-gray-800">About Customer Care</h1>
      </div>

      
      <p className="text-gray-700 leading-relaxed mb-6">
        At Customer Care, we are dedicated to providing top-notch support and service
        to our customers. Our team is available 24/7 to assist you with your needs,
        ensuring quick and effective solutions.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        We believe in building lasting relationships with our clients by offering
        reliable, friendly, and professional customer support services.
      </p>

      
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        <div className="flex flex-col items-center text-center">
          <FcSupport size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">24/7 Support</h3>
          <p className="text-gray-600 mt-2">
            Round-the-clock assistance from our expert support team.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center">
          <FcServices size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Customer Management</h3>
          <p className="text-gray-600 mt-2">
            Efficient tracking and managing of customer requests and feedback.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center">
          <FcRating size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Quality Assurance</h3>
          <p className="text-gray-600 mt-2">
            Ensuring customer satisfaction with consistent service quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
