import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

export function Navbar({ currentPage, onNavigate, cartCount }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <span className="text-[#2E7D32] text-2xl">🥬</span>
            <span className="ml-2 text-xl text-[#2E7D32]">Green Market</span>
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-[#2E7D32]' : 'text-gray-700 hover:text-[#2E7D32]'}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`transition-colors ${currentPage === 'shop' ? 'text-[#2E7D32]' : 'text-gray-700 hover:text-[#2E7D32]'}`}
            >
              Shop
            </button>
            <button
              onClick={() => onNavigate('cart')}
              className={`relative transition-colors ${currentPage === 'cart' ? 'text-[#2E7D32]' : 'text-gray-700 hover:text-[#2E7D32]'}`}
            >
              <div className="flex items-center gap-1">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#2E7D32] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
            <button
              onClick={() => onNavigate('login')}
              className={`flex items-center gap-1 transition-colors ${currentPage === 'login' ? 'text-[#2E7D32]' : 'text-gray-700 hover:text-[#2E7D32]'}`}
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
