import { useState } from "react";

const CheckoutCard = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  return (
    <div>
      {cart.map((items, index) => (
        <div key={index}>
          <p>{items.name}</p>
          <p>{items.price}</p>
          <button>+</button>
          <p></p>
          <button>-</button>
          <button>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCard;
