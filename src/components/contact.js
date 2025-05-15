import React, { Component } from "react";
import Heading from "./heading";
import { Footer } from "./footer";

import call from "../assets/img/contact/call.jpg";
import email from "../assets/img/contact/email.png";
import chat from "../assets/img/contact/chat.png";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { NavigationBar } from "./navbar";

export default class Contact extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Heading title="Contact Us" />
        <Container className="my-5">
          <Row>
            <Col className="text-center text-secondary">
              <h5>Have any doubts? We'd love to hear from you.</h5>
            </Col>
          </Row>
          <Row className="mx-4 py-3 my-lg-0 px-lg-5 ms-lg-5">
            <Col className="col-md-6 col-lg-4 py-3">
              <Card
                border="dark"
                bg="info"
                text="dark"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={call} />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    1800 5252 6666 6666
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-md-6 col-lg-4 py-3">
              <Card
                border="dark"
                bg="warning"
                text="dark"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={email} />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    support@singhbuilders.in
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-md-6 col-lg-4 py-3">
              <Card
                border="dark"
                bg="success"
                text="dark"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={chat} />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    Let's chat
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center text-secondary fs-2 fw-bold">
              Send us your query :
            </Col>
          </Row>
          <Row className="Row row row-cols-auto mt-4 justify-content-center">
            <Col className="col py-4 px-5 shadow-lg mb-5 bg-light rounded">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="alok@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  variant="info"
                  type="submit"
                  className="btn d-flex justify-content-center d-md-table mx-auto"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
