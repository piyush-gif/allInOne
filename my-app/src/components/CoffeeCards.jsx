import { useState } from "react";
const CoffeeCards = ({ storage }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const addToCart = (items) => {
    const updatedCart = [...cart, items];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
      {storage.map((items, index) => (
        <div key={index} className="card-details">
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
