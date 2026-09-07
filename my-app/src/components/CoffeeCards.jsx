const CoffeeCards = ({ storage, cart, setCart }) => {
  const addToCart = (items) => {
    const existingItem = cart.find((item) => item.id === items.id);
    const updatedCart = existingItem
      ? cart.map((item) =>
          item.id === items.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...cart, { ...items, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default CoffeeCards;
