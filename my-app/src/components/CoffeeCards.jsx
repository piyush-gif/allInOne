import { Component, useState } from "react";
const CoffeeCards = ({ storage }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  localStorage.removeItem("cart");

  const addToCart = (items) => {
    const selectedItem = cart.find((cartItem) => cartItem.id === items.id);

    if (selectedItem) {
      const updatedCart = cart.map((cartItem) => {
        cartItem.id === items.id
          ? { ...cartItem, quantiy: cartItem.quantity + 1 }
          : cartItem;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...items, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  return (
    <>
      {storage.map((items) => (
        <div className="card-details" key={items.id}>
          <img src={items.img}></img>
          <h1>{items.name}</h1>
          <p>{items.description}</p>
          <h3>${items.price}</h3>
          <button className="coco-button" onClick={() => addToCart(items)}>
            Addo to Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default CoffeeCards;
