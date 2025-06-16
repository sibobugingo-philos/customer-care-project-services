import React from 'react';
import { FcSupport, FcBusinessman, FcPhone, FcAssistant } from 'react-icons/fc';

const Services = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-center text-center p-4 border rounded hover:shadow-lg transition-shadow duration-300">
          <FcSupport size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">24/7 Support</h3>
          <p className="text-gray-600 mt-2">
            Round-the-clock assistance for all your customer care needs.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center p-4 border rounded hover:shadow-lg transition-shadow duration-300">
          <FcBusinessman size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Account Management</h3>
          <p className="text-gray-600 mt-2">
            Personalized service to manage your account and preferences.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center p-4 border rounded hover:shadow-lg transition-shadow duration-300">
          <FcPhone size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Direct Hotline</h3>
          <p className="text-gray-600 mt-2">
            Fast and direct communication channel for urgent support.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center p-4 border rounded hover:shadow-lg transition-shadow duration-300">
          <FcAssistant size={50} />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">Technical Assistance</h3>
          <p className="text-gray-600 mt-2">
            Expert help for troubleshooting and technical issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
