import { useState } from "react";

import "../styling/Checkout.css";
const CheckoutCard = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
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

  return (
    <>
      {cart.map((items, index) => (
        <div key={index} className="item-details">
          <p>{items.name}</p>
          <p>${items.price * items.quantity}</p>
          <button onClick={() => addToCart(items)}>+</button>
          <p>{items.quantity}</p>
          <button onClick={() => decreaseQuantity(items)}>-</button>
          <button onClick={() => removeItem(items)}>🗑️</button>
        </div>
      ))}
    </>
  );
};

export default CheckoutCard;
