import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.items.map(item => (
          <div key={item.id} className="cart-item">
            {item.name} - ${item.price}
          </div>
        ))
      )}
      <h2>Total: ${cart.totalAmount}</h2>
    </div>
  );
};

export default Cart;
