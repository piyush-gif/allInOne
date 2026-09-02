const CheckoutCard = ({ cart }) => {
  return (
    <div>
      {cart.map((items) => {
        <div>
          <p>{items.name}</p>
          <p>{items.price}</p>
          <button></button>
          <p></p>
          <button>🗑️</button>
        </div>;
      })}
    </div>
  );
};

export default CheckoutCard;
