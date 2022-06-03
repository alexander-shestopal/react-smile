import React, { Component } from "react";
import {
  Button,
  Breadcrumb,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

export default class header extends Component {
    render() {
        return (
          <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">React-bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="#home">About As</Nav.Link>
                    <Nav.Link href="#contact">Contact As</Nav.Link>
                    <Nav.Link href="#bloge">Blog</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        );
    }

}