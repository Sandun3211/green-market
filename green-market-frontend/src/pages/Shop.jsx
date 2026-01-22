import React from 'react';
import { ProductCard } from '../components/ProductCard';





const products = [
  {
    id: 1,
    name: 'Carrot',
    price: 80,
    image: 'https://images.unsplash.com/photo-1717959159782-98c42b1d4f37?auto=format&fit=crop&w=1080&q=80',
    unit: 'kg'
  },
  {
    id: 2,
    name: 'Tomato',
    price: 60,
    image: 'https://images.unsplash.com/photo-1621332606136-7e66f02dade1?auto=format&fit=crop&w=1080&q=80',
    unit: 'kg'
  },
  {
    id: 3,
    name: 'Potato',
    price: 40,
    image: 'https://images.unsplash.com/photo-1578385474120-184465704f2f?auto=format&fit=crop&w=1080&q=80',
    unit: 'kg'
  },
  {
    id: 4,
    name: 'Broccoli',
    price: 120,
    image: 'https://images.unsplash.com/photo-1757332334626-8dadb145540d?auto=format&fit=crop&w=1080&q=80',
    unit: 'kg'
  },
  {
    id: 5,
    name: 'Spinach',
    price: 50,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1080&q=80',
    unit: 'bunch'
  },
  {
    id: 6,
    name: 'Onion',
    price: 45,
    image: 'https://images.unsplash.com/photo-1612679300857-0b7600449e68?auto=format&fit=crop&w=1080&q=80',
    unit: 'kg'
  },
  {
    id: 7,
    name: 'Bell Pepper',
    price: 90,
    image: 'https://images.unsplash.com/photo-1760361571885-b6b2dee1d25a?auto=format&fit=crop&w=1080&q=80',
    unit: 'kg'
  },
  {
    id: 8,
    name: 'Cabbage',
    price: 35,
    image: 'https://images.unsplash.com/photo-1730815046052-75a1b90117e2?auto=format&fit=crop&w=1080&q=80',
    unit: 'piece'
  }
  
];

export function Shop({ onAddToCart }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-[#2E7D32] mb-8">
          Shop Vegetables
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />,

            <ProductCard
  product={product}         // product object
  onAddToCart={onAddToCart} // function
/>

          ))}
        </div>
      </div>
    </div>
  );
}
