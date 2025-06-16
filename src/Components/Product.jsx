import React from "react";

const products = [
  {
    id: 1,
    title: "Live Chat Support",
    description: "Real-time chat solution for instant customer help.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Help Desk System",
    description: "Ticketing system to organize customer requests.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "New Support Analytics",
    description: "Analyze support data to improve customer experience.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Mobile Support App",
    description: "Access support tools anywhere with your mobile device.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50">
      {products.map(({ id, title, description, image }) => (
        <div
          key={id}
          className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
