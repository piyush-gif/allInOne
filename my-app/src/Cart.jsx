import Navbar from "./Navbar";
import CheckoutCard from "./components/CheckoutCard";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="order-div">
        <div>Your Order</div>
        <div className="order-list">
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
