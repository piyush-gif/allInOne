import CoffeeCards from "./components/CoffeeCards";
import cappi from "./assets/cappuccino.jpg";
import latte from "./assets/matcha-latte.jpg.avif";
import espresso from "./assets/espresso.jpg";
import Navbar from "./Navbar";
import "./styling/Menu.css";
const Menu = () => {
  const menu = [
    {
      img: cappi,
      name: "Cappuccino",
      description: "Espresso, steamed milk and rich foam",
      price: 4,
    },
    {
      img: latte,
      name: "Vanilla Latte",
      description: "Smooth espresso with steamed milk and vanilla",
      price: 5,
    },
    {
      img: espresso,
      name: "Espresso",
      description: "Strong, rich and simple",
      price: 3,
    },
    {
      img: "americano",
      name: "Americano",
      description: "Espresso with hot water for a smooth finish",
      price: 4,
    },
    {
      img: "mocha",
      name: "Mocha",
      description: "Espresso, chocolate and steamed milk",
      price: 5,
    },
    {
      img: "macchiato",
      name: "Macchiato",
      description: "Espresso topped with a small amount of foam",
      price: 4,
    },
    {
      img: "flatWhite",
      name: "Flat White",
      description: "Rich espresso with velvety steamed milk",
      price: 5,
    },
    {
      img: "coldBrew",
      name: "Cold Brew",
      description: "Slow brewed coffee served chilled and smooth",
      price: 5,
    },
    {
      img: "matcha",
      name: "Matcha Latte",
      description: "Creamy matcha blended with smooth steamed milk",
      price: 5,
    },
    {
      img: "caramelLatte",
      name: "Caramel Latte",
      description: "Espresso, steamed milk and sweet caramel",
      price: 6,
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className="menu-container">
          <h1>Our Menu</h1>
        </div>
        <div className="menu-content">
          <button>All</button>
          <button>Coffee</button>
          <button>Tea</button>
          <button>Cold Drinks</button>
        </div>
        <div className="menu-list">
          <CoffeeCards storage={menu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
