import { useState } from "react";
import "../styling/Checkout.css";
const CheckoutCard = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  return (
    <>
      {cart.map((items, index) => (
        <div key={index} className="item-details">
          <p>{items.name}</p>
          <p>{items.price}</p>
          <button>+</button>
          <p></p>
          <button>-</button>
          <button>🗑️</button>
        </div>
      ))}
    </>
  );
};

export default CheckoutCard;
