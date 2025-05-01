import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default CartPage;