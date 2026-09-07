import { useState } from "react";
const CoffeeCards = ({ storage, cart, setCart }) => {
  const addToCart = (items) => {
    const updatedCart = cart.find((item) => item.id === items.id);
    if (updatedCart) {
      const updatedCart = cart.map((item) =>
        item.id === items.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
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
