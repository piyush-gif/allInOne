import Navbar from "./Navbar.jsx";
import img from "./assets/about-img.jpg";
import "./styling/About.css";
import Footer from "./components/Footer.jsx";
const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="about-content">
        <div className="about-text">
          <h1>Our Story</h1>
          <p>
            Brew & Bloom was born from a simple passion for coffee and a dream
            to create a space where moments bloom.
          </p>
          <p>
            We carefully source our beans, brew each cup with love, and welcome
            everyone like family.
          </p>
        </div>
        <div className="about-img">
          <img src={img} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
