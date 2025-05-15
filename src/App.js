import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import House from "./components/house";
import Apartment from "./components/apartment";
import Plot from "./components/plot";
import LoginContainer from "./components/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/house" element={<House />} />
          <Route path="/plot" element={<Plot />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
