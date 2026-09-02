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
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      <div className="nav-sidebar">
        <Link to="/cart" className="nav-link">
          Cart🛒
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
