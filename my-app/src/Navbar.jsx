import { Link } from "react-router-dom";
import "./styling/Navbar.css";
import coffee from "./assets/brew.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={coffee} />
      </div>
      <div className="nav-content">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Menu" className="nav-link">
          Menu
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      <div className="nav-sidebar">
        <div>cart</div>
      </div>
    </div>
  );
};

export default Navbar;
