import "./styling/Homepage.css";
import coco from "./assets/coffee-coco.webp";
import CoffeeCards from "./components/CoffeeCards";
import Footer from "./components/Footer";
import cappi from "./assets/cappuccino.jpg";
import latte from "./assets/matcha-latte.jpg.avif";
import espresso from "./assets/espresso.jpg";
import { Link } from "react-router-dom";
import { menuData } from "./data/storage";
const Homepage = ({ cart, setCart }) => {
  const menuItems = menuData.slice(0, 3).map((items) => items);
  return (
    <div>
      <div className="Homepage-container">
        <div className="homepage-context-container">
          <div className="hero-text-container">
            <h1>Good Coffee,</h1>
            <h1>Good Mood.</h1>
            <h2>Your daily dose of great Coffee.</h2>
            <Link className="link-coco" to="/menu">
              Explore Page
            </Link>
          </div>
          <div className="hero-img-container">
            <img src={coco}></img>
          </div>
        </div>
      </div>
      <div className="homepage-mid-section">
        <h1>Our Favorites</h1>
        <div className="mid-container">
          <div className="card-container">
            <CoffeeCards storage={menuItems} cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
      <div className="homepage-footer">
        <div className="footer-text">
          <h1>More Than Just Coffee</h1>
          <p>
            We believe coffee is more than a drink. It's a reason to slow down,
            meet someone, work on something meaningful, or simply enjoy five
            quiet minutes.
          </p>
          <Link className="link-brown" to="/about">
            Our Story
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
