import { Link } from "react-router-dom";
import "./styling/Navbar.css";
import coffee from "./assets/coffee-logo.jpg";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={coffee} />
      </div>
      <div className="nav-content">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="nav-sidebar">
        <div>cart</div>
      </div>
    </div>
  );
};

export default Navbar;
