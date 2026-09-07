import { useState } from "react";

import "../styling/Checkout.css";
const CheckoutCard = ({ cart, setCart }) => {
  const addToCart = (items) => {
    const updatedCart = cart.map((item) =>
      item.id === items.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (items) => {
    const updatedCart = cart.filter((item) => item.id !== items.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (items) => {
    if (items.quantity === 1) {
      removeItem(items);
      return;
    }
    const updatedCart = cart.map((item) =>
      item.id === items.id ? { ...item, quantity: item.quantity - 1 } : item,
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
      {cart.map((items, index) => (
        <div key={index} className="item-details">
          <img src={items.img}></img>
          <p>{items.name}</p>
          <p>${items.price * items.quantity}</p>
          <div className="checkout-buttons">
            <button onClick={() => addToCart(items)}>+</button>
            <p>{items.quantity}</p>
            <button onClick={() => decreaseQuantity(items)}>-</button>
            <button onClick={() => removeItem(items)}>🗑️</button>
          </div>
        </div>
      ))}

      <div className="checkout-total">
        <h1>Subtotal</h1>
        <p>${subtotal.toFixed(2)}</p>

        <h3>Tax (10%)</h3>
        <p>${tax.toFixed(2)}</p>

        <hr />

        <h1>Total</h1>
        <h1>${total.toFixed(2)}</h1>
        <button className="coco-button">Checkout</button>
      </div>
    </>
  );
};

export default CheckoutCard;
