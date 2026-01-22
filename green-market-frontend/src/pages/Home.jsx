import React from "react";

export function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzY1NjI3MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-5xl sm:text-6xl mb-6 font-bold">
            Fresh Vegetables Delivered to Your Door
          </h1>
          <p className="text-white text-xl sm:text-2xl mb-8">
            Buy healthy and fresh vegetables online
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-green-700 text-white px-12 py-4 rounded-lg text-xl hover:bg-green-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl mb-2 text-green-700 font-semibold">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your vegetables delivered fresh to your doorstep
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-xl mb-2 text-green-700 font-semibold">
              100% Organic
            </h3>
            <p className="text-gray-600">
              All our vegetables are organically grown and fresh
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl mb-2 text-green-700 font-semibold">
              Best Prices
            </h3>
            <p className="text-gray-600">
              Quality vegetables at affordable prices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
