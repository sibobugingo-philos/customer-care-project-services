import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Welcome to Customer Care
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            alt="24/7 Support"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
            <p className="text-gray-600">Get help anytime with our dedicated support team.</p>
          </div>
        </div>

        
        <div className="bg-white shadow rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
            alt="Customer Management"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Customer Management</h2>
            <p className="text-gray-600">Easily manage and track customer tickets and feedback.</p>
          </div>
        </div>

        
        <div className="bg-white shadow rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Fast Response"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Fast Response</h2>
            <p className="text-gray-600">Our team ensures quick resolutions to your issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
