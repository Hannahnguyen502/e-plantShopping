import React, { useState } from 'react';
import ProductList from './components/ProductList'; // Assuming you create this next
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  // Navigation state: 'landing', 'products', or 'cart'
  const [view, setView] = useState('landing');
  
  // Cart state: Array of items { id, name, price, image, quantity }
  const [cart, setCart] = useState([]);

  // Calculate total number of individual items in the cart
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Transition from landing page to product listing
  const handleGetStarted = () => {
    setView('products');
  };

  return (
    <div className="app-container">
      {/* 1. LANDING PAGE VIEW */}
      {view === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Paradise Nursery</h1>
            <p className="landing-subtitle">
              Welcome to your ultimate green escape. We offer a curated collection of premium indoor and air-purifying plants to breathe life into your living space.
            </p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* 2. MAIN APPLICATION VIEW (Navbar + Content) */}
      {view !== 'landing' && (
        <>
          <nav className="navbar">
            <div className="nav-logo" onClick={() => setView('landing')} style={{ cursor: 'pointer' }}>
              <h2>🌿 Paradise Nursery</h2>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#products" onClick={() => setView('products')}>Plants</a>
              </li>
              <li>
                <a href="#cart" onClick={() => setView('cart')} className="cart-icon-container">
                  🛒 Cart 
                  {totalCartItems > 0 && <span className="cart-counter">{totalCartItems}</span>}
                </a>
              </li>
            </ul>
          </nav>

          <main className="main-content">
            {view === 'products' && (
              <ProductList cart={cart} setCart={setCart} setView={setView} />
            )}
            {view === 'cart' && (
              <div className="cart-page-placeholder" style={{ padding: '40px', textAlign: 'center' }}>
                {/* Your Cart Component will render here in the next step */}
                <h2>Your Shopping Cart View</h2>
                <button className="get-started-btn" onClick={() => setView('products')} style={{ marginTop: '20px' }}>
                  Continue Shopping
                </button>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
