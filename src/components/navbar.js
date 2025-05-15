import React, { Component } from "react";
import logo from "../assets/img/favicon.png";
import { LinkContainer } from "react-router-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
export class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            {/* Brand and Brand Logo */}
            <LinkContainer to="/">
              <Nav.Link>
                <Navbar.Brand className="text-warning">
                  <img
                    alt="Brand Logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  SINGH BUILDERS
                </Navbar.Brand>
              </Nav.Link>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto ">
                <LinkContainer to="/">
                  <Nav.Link className="active mx-3">Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about">
                  <Nav.Link className="ms-md-0 mx-3 me-md-0">AboutUs</Nav.Link>
                </LinkContainer>

                <NavDropdown
                  className="mx-3"
                  title="Properties"
                  id="collapsible-nav-dropdown"
                >
                  <LinkContainer to="/house">
                    <NavDropdown.Item>House</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/apartment">
                    <NavDropdown.Item>Apartment</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/plot">
                    <NavDropdown.Item>Residential Plot</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/contact">
                  <Nav.Link className="mx-3 ms-md-0 ps-md-0">Contact</Nav.Link>
                </LinkContainer>
              </Nav>

              <Nav className="me text-decoration-none">
                <LinkContainer to="/login">
                  <Nav.Link>
                    <Button
                      className="mx-lg-5 mx-md-3 px-2 py-1 btn d-flex justify-content-center d-md-table mx-auto" //#  To change width and center the BUTTON
                      variant="info"
                    >
                      Login
                    </Button>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
