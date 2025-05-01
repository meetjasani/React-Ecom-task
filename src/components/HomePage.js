import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import data from '../data/data.json';

const HomePage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;