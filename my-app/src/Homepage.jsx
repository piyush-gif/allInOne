import "./styling/Homepage.css";
import coco from "./assets/coffee-coco.webp";
import CoffeeCards from "./components/CoffeeCards";
import Footer from "./components/Footer";
import Navbar from "./Navbar";
import cappi from "./assets/cappuccino.jpg";
import latte from "./assets/matcha-latte.jpg.avif";
import espresso from "./assets/espresso.jpg";
const Homepage = () => {
  const storage = [
    {
      img: cappi,
      name: "Cappuccino",
      description: "Espresso, chocolate and steamed milk",
      price: 3,
      category: "coffee",
      id: 1,
      quantity: 0,
    },
    {
      img: latte,
      name: "Matcha-latte",
      description: "Strong espresso with steamed milk and vanilla",
      price: 3,
      category: "coffee",
      id: 2,
      quantity: 0,
    },
    {
      img: espresso,
      name: "Espresso",
      description: "strong rich and simple",
      price: 3,
      category: "coffee",
      id: 3,
      quantity: 0,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="Homepage-container">
        <div className="hompage-context-container">
          <div className="hero-text-container">
            <h1>Good Coffee,</h1>
            <h1>Good Mood.</h1>
            <h2> Your daily dose of great Coffee.</h2>
            <button className="coco-button button">Explore Page</button>
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
            <CoffeeCards storage={storage} />
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
          <button className="brown-button">Our Story</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
