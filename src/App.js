import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
