const CheckoutTotal = ({ cart, setCart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    alert("Order has been placed!");
    setCart([]);
  };
  return (
    <>
      <div className="checkout-total">
        <h1>Subtotal</h1>
        <p>${subtotal.toFixed(2)}</p>

        <h3>Tax (10%)</h3>
        <p>${tax.toFixed(2)}</p>

        <hr />

        <h1>Total</h1>
        <h1>${total.toFixed(2)}</h1>
        <button className="coco-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default CheckoutTotal;
