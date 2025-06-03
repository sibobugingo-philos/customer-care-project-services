import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 px-6">
      
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
    

    
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Our Customer Care Service
        </h1>
        <p className="text-lg text-gray-700">
          We're here to help you with any questions or concerns you may have.
        </p>
      </div>
    </div>
  );
};

export default Home;

