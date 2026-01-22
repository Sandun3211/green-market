import React from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';

export function Cart({ cartItems, onNavigate, onUpdateQuantity, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-12 text-center max-w-md w-full">
          <ShoppingCart className="w-24 h-24 mx-auto text-green-300 mb-6" />
          <h1 className="text-4xl font-bold text-[#2E7D32] mb-4">Your Cart</h1>
          <p className="text-gray-500 mb-8">Your cart is empty</p>

          <button
            onClick={() => onNavigate('shop')}
            className="w-full bg-gradient-to-r from-[#2E7D32] to-orange-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#2E7D32] mb-10 text-center">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl border"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Rs. {item.price} / {item.unit}
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-3 py-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-2 rounded-lg hover:bg-gray-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="w-6 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-2 rounded-lg hover:bg-gray-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-lg font-semibold text-gray-800 w-24 text-right">
                  Rs. {item.price * item.quantity}
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {total}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-[#2E7D32]">Rs. {total}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#2E7D32] to-orange-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
