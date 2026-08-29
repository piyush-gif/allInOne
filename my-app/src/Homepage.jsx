import "./styling/Homepage.css";
import coco from "./assets/coffee-coco.webp";
import CoffeeCards from "./components/CoffeeCards";
import Footer from "./components/Footer";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div className="Homepage-container">
      <Navbar />
      <div className="hompage-context-container">
        <div className="hero-text-contianer">
          <h1>Good Coffee,</h1>
          <h1>Good Mood.</h1>
          <h2> Your daily dose of great Coffee.</h2>
          <button className="coco-button button">Explore Page</button>
        </div>
        <div className="hero-img-contianer">
          <img src={coco}></img>
        </div>
      </div>
      <div className="homepage-mid-section">
        <h1>Our Favorites</h1>
        <div className="mid-container">
          <CoffeeCards />
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
