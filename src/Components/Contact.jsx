import React from 'react';
import { FcBusinessman, FcFeedback, FcCellPhone } from 'react-icons/fc';

const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-10 bg-white shadow rounded">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      <form className="space-y-6">
        
        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700 font-medium">
            <FcBusinessman size={24} /> Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        
        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700 font-medium">
            <FcCellPhone size={24} /> Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        
        <div>
          <label className="flex items-center gap-2 mb-1 text-gray-700 font-medium">
            <FcFeedback size={24} /> Message
          </label>
          <textarea
            rows="4"
            placeholder="Type your message"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
        </div>

        
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
