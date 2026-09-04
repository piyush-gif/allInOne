import CoffeeCards from "./components/CoffeeCards";
import cappi from "./assets/cappuccino.jpg";
import latte from "./assets/matcha-latte.jpg.avif";
import espresso from "./assets/espresso.jpg";
import Navbar from "./Navbar";
import "./styling/Menu.css";
import Footer from "./components/Footer";
import { useState } from "react";
const Menu = () => {
  const menu = [
    {
      img: cappi,
      name: "Cappuccino",
      description: "Espresso, steamed milk and rich foam",
      price: 4,
      category: "coffee",
      id: 1,
      quantity: 0,
    },
    {
      img: latte,
      name: "Vanilla Latte",
      description: "Smooth espresso with steamed milk and vanilla",
      price: 5,
      category: "coffee",
      id: 2,
      quantity: 0,
    },
    {
      img: espresso,
      name: "Espresso",
      description: "Strong, rich and simple",
      price: 3,
      category: "coffee",
      id: 3,
      quantity: 0,
    },
    {
      img: "americano",
      name: "Americano",
      description: "Espresso with hot water for a smooth finish",
      price: 4,
      category: "coffee",
      id: 4,
      quantity: 0,
    },
    {
      img: "mocha",
      name: "Mocha",
      description: "Espresso, chocolate and steamed milk",
      price: 5,
      category: "coffee",
      id: 5,
      quantity: 0,
    },
    {
      img: "macchiato",
      name: "Macchiato",
      description: "Espresso topped with a small amount of foam",
      price: 4,
      category: "coffee",
      id: 6,
      quantity: 0,
    },
    {
      img: "flatWhite",
      name: "Flat White",
      description: "Rich espresso with velvety steamed milk",
      price: 5,
      category: "coffee",
      id: 7,
      quantity: 0,
    },
    {
      img: "coldBrew",
      name: "Cold Brew",
      description: "Slow brewed coffee served chilled and smooth",
      price: 5,
      category: "cold drinks",
      id: 8,
      quantity: 0,
    },
    {
      img: "matcha",
      name: "Matcha Latte",
      description: "Creamy matcha blended with smooth steamed milk",
      price: 5,
      category: "tea",
      id: 9,
      quantity: 0,
    },
    {
      img: "caramelLatte",
      name: "Caramel Latte",
      description: "Espresso, steamed milk and sweet caramel",
      price: 6,
      category: "coffee",
      id: 10,
      quantity: 0,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");

  const filteredItems =
    category === "all"
      ? menu
      : menu.filter((item) => item.category === category);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <div>
        <div className="menu-container">
          <h1>Our Menu</h1>
        </div>
        <div className="menu-options">
          <div className="menu-buttons">
            <button
              className="brown-button"
              onClick={() => {
                setCategory("all");
                setCurrentPage(1);
              }}
            >
              All
            </button>

            <button
              className="brown-button"
              onClick={() => {
                setCategory("coffee");
                setCurrentPage(1);
              }}
            >
              Coffee
            </button>

            <button
              className="brown-button"
              onClick={() => {
                setCategory("tea");
                setCurrentPage(1);
              }}
            >
              Tea
            </button>

            <button
              className="brown-button"
              onClick={() => {
                setCategory("cold drinks");
                setCurrentPage(1);
              }}
            >
              Cold Drinks
            </button>
          </div>
        </div>
        <div className="menu-content">
          <div className="menu-list">
            <CoffeeCards storage={currentItems} />
          </div>
        </div>
      </div>
      <div className="pages-content">
        <div className="pages-detail">
          <button
            className="coco-button"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="coco-button"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
