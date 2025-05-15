// import { NavigationBar } from "./navbar";
import { Slides } from "./slides";
import { Cards } from "./cards";
import { Footer } from "./footer";

import { NavigationBar } from "./navbar";

import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Slides />
        <Cards />
        <Footer />
      </div>
    );
  }
}
