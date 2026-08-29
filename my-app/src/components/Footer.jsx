import { Link } from "react-router-dom";
import coffee from "../assets/light-brew.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={coffee} />
      </div>
      <div className="footer-items">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/Menu" className="footer-link">
          Menu
        </Link>
        <Link to="/about" className="footer-link">
          About
        </Link>
      </div>
      <div className="footer-social">
        <p>insta</p>
        <p>facebook</p>
      </div>
    </div>
  );
};

export default Footer;
