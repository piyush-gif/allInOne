import CheckoutCard from "./components/CheckoutCard";
import CheckoutTotal from "./components/CheckoutTotal";
const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <div className="order-div">
        <div>Your Order</div>
        {cart.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          <div className="order-list">
            <CheckoutCard cart={cart} setCart={setCart} />
            <CheckoutTotal cart={cart} setCart={setCart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
