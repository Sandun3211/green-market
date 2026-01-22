import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products from Flask backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleUpdateQuantity = (productId, change) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? {...item, quantity: item.quantity + change} : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const renderPage = () => {
    if (currentPage === 'home') return <Home onNavigate={setCurrentPage} />;
    if (currentPage === 'shop') return (
      <Shop 
        products={products} 
        onAddToCart={handleAddToCart} 
      />
    );
    if (currentPage === 'cart') return (
      <Cart 
        cartItems={cartItems}
        onNavigate={setCurrentPage}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    );
    if (currentPage === 'login') return <Login onNavigate={setCurrentPage} />;
    return <Home onNavigate={setCurrentPage} />;
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      />
      {renderPage()}
    </>
  );
}

export default App;
