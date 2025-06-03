import React from 'react';

const Services = () => {
  const services = [
    {
      title: '24/7 Support',
      description: 'Get assistance any time of the day through our dedicated support team.',
    },
    {
      title: 'Live Chat',
      description: 'Chat live with our experts to get real-time help and solutions.',
    },
    {
      title: 'Email Support',
      description: 'Send us an email and receive a detailed response within 24 hours.',
    },
    {
      title: 'Call Center',
      description: 'Speak directly with our customer care agents for quick resolutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-10">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
