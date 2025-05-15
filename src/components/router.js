import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./about";
import Contact from "./contact";
import House from "./house";
import Apartment from "./apartment";
import Plot from "./plot";
import LoginContainer from "./login";

import React, { Component } from "react";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
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
}
