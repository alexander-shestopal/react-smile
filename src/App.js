import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {Button,Breadcrumb,Navbar,Container,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';


class App extends Component {


  render() {


    return(
      <div className="App">
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">React-bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
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

        <div>
        <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
    

        </div>

      </div>
    )
  }

}

export default App;
