import React, { Component } from "react";
import { Footer } from "./footer";
import Heading from "./heading";
import apartment from "../assets/img/cards/apartment.jpg";

import { NavigationBar } from "./navbar";

export default class Apartment extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Heading title="Apartments" />
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-lg-2 my-5">
            <div className="col">
              <img
                className="img-thumbnail shadow-lg mb-5 bg-body rounded"
                alt="apartment pic"
                src={apartment}
              />
            </div>
            <div className="px-lg-5 py-lg-5">
              <p>
                <b>Singh Builders Team</b> goes beyond the traditional house
                pictures and listing information for their real estate
                advertising. We are client-focused Real Builders with decades of
                experience helping clients find their perfect home by carefully
                researching market trends, property values and neighborhoods. We
                offer a useful infographic to help clients decide when to rent
                or buy. The ad uses a call to action to encourage engagement and
                drive leads, urging the viewer to “call us today” to learn more.
                <br />
                <br />
                Real estate properties involves a lot of pictures of the fronts
                of homes. We initiate our deals by matching our clients with
                properties that suit all their needs and streamlining the
                negotiation and closing process through effective communication.
                We stand out by including blueprints or a floor plan. We provide
                our customers with a labeled floor plan and schematics for all
                our property listings. This helps the clients who have specific
                real estate goals, like square footage or layout.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
