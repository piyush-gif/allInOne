import CheckoutCard from "./components/CheckoutCard";
const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <div className="order-div">
        <div>Your Order</div>
        <div className="order-list">
          <CheckoutCard cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
