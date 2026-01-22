import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Login } from './pages/Login';





function App() {
   const [page, setPage] = useState("home");
   const [cartCount, setCartCount] = useState(0);

  const handleNavigate = (newPage) => {
    setPage(newPage);
  };
  return (
     <div>
       <Navbar 
        currentPage={page} 
        onNavigate={handleNavigate} 
        cartCount={cartCount} 
      />
      


      {page === "home" && <Home onNavigate={handleNavigate} />}
      {page === "shop" && <div>Shop Page Placeholder</div>}
      {page === "cart" && <div>Cart Page</div>}
      
     
    </div>
  );
}

export default App;
