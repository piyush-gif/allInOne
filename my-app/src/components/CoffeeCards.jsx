const CoffeeCards = ({ storage }) => {
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
