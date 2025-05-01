import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/">Home</Link> | <Link to="/admin">Admin</Link> |{' '}
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;