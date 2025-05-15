import React from "react";

export const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          {/*column 1 */}
          <div className="col-md-4 col-sm-6">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/house">House</a>
              </li>
              <li>
                <a href="/apartment">Apartment</a>
              </li>
              <li>
                <a href="/plot">Residential Plot</a>
              </li>
              {/* <li>Contact</li> */}
            </ul>
          </div>
          {/*column 2 */}
          <div className="col-md-4 col-sm-6">
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>Sale</li>
              <li>Purchase</li>
              <li>Renting</li>
              <li>Consultancy</li>
            </ul>
          </div>
          {/*column 3 */}
          <div className="col-md-4 col-sm-6">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>support@singhbuilders.com</li>
              <li className="mt-2">+91 996 856 4545</li>
              {/* <li>Address</li>
              <li>Whats App</li> */}
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="footer-bottom">
          <hr className="bg-secondary border-2" />
          <p className="text-xs-center text-center">
            &copy;Singh Builders {new Date().getFullYear()} - All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
