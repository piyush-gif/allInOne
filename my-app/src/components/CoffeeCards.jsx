import cappi from "../assets/cappuccino.jpg";
import latte from "../assets/matcha-latte.jpg.avif";
import espresso from "../assets/espresso.jpg";

const CoffeeCards = () => {
  const storage = [
    {
      img: cappi,
      name: "Cappuccino",
      description: "Espresso, chocolate and steamed milk",
      price: 3,
    },
    {
      img: latte,
      name: "Matcha-latte",
      description: "Strong espresso with steamed milk and vanilla",
      price: 3,
    },
    {
      img: espresso,
      name: "Espresso",
      description: "strong rich and simple",
      price: 3,
    },
  ];
  return (
    <div className="card-container">
      {storage.map((items, index) => (
        <div key={index} className="card-details">
          <img src={items.img}></img>
          <h1>{items.name}</h1>
          <p>{items.description}</p>
          <h3>${items.price}</h3>
          <button className="coco-button">Addo to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default CoffeeCards;
