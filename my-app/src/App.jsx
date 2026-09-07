import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./Homepage.jsx";
import Menu from "./Menu.jsx";
import About from "./About.jsx";
import Cart from "./Cart.jsx";
import Navbar from "./Navbar.jsx";
function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Homepage cart={cart} setCart={setCart} />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
