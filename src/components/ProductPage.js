import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import data from '../data/data.json';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = data.products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;