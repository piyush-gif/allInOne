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

  return (
    <>
      {cart.map((items) => (
        <div key={items.id} className="item-details">
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
    </>
  );
};

export default CheckoutCard;
