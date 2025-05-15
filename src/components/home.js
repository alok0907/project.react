import { Slides } from "./slides";
import { Cards } from "./cards";
import { Footer } from "./footer";

import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slides />
        <Cards />
        <Footer />
      </div>
    );
  }
}
