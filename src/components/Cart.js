import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.items.map(item => (
          <div key={item.id} className="cart-item">
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item))}>
              Remove
            </button>
          </div>
        ))
      )}
      <h2>Total: ${cart.totalAmount}</h2>
    </div>
  );
};

export default Cart;
