import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styling/App.css";
import Homepage from "./Homepage.jsx";
import Menu from "./Menu.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/about" element={<About/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
