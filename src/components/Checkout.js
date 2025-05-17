import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../actions/cartActions';

const Checkout = () => {
  const dispatch = useDispatch();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Order placed!');
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleCheckout}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" name="zip" required />
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
