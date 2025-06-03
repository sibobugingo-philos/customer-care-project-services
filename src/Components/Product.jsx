import React from 'react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$99.99',
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1600180758890-6c3cf97353fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155228ef58?auto=format&fit=crop&w=400&q=80',
  },
];

const Product = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
