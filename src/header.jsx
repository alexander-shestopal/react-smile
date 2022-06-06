import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router,Routes,Route, NavLink } from "react-router-dom";
import App from "./App";
import About from './components/about';
import Blog from "./components/blog";
import Profile from "./components/profile";
import Contact from "./components/contact";
import Writepost from "./components/writepost";

import './index.css';

const menuList = [
  {
    id: 0,
    url: "/about",
    title: "About As",
  },
  {
    id: 1,
    url: "/contact",
    title: "Contact As",
  },
  {
    id: 2,
    url: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    url: "/profile",
    title: "Profile",
  }
];
export default class header extends Component {
    render() {
        return (
          <Router>
            <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                  <NavLink
                    exact
                    className={({ isActive }) =>
                      isActive ? "active-link" : "inactive-link"
                    }
                    to="/"
                  >
                    React-bootstrap
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    {menuList.map((menuItem) => (
                      <Nav.Link key={menuItem.id}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active-link" : "inactive-link"
                          }
                          to={menuItem.url}
                        >
                          {menuItem.title}
                        </NavLink>
                      </Nav.Link>
                    ))}
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
              <Route path="/writepost" element={<Writepost />} />
            </Routes>
          </Router>
        );
    }

}