import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import App from "./App";
import About from './components/about';
import Blog from "./components/blog";
import Profile from "./components/profile";
import Contact from "./components/contact";
export default class header extends Component {
    render() {
        return (
          <Router>
            <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                  <Link to="/">
                    React-bootstrap
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link>
                      <Link to="/about">
                        About As
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/contact">Contact As</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/blog">Blog</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/profile">Profile</Link>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        );
    }

}