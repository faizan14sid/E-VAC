import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import logo from "../logo.png";
import Home from "./Home";
import "./header.css";
import About from "./About";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="mycol" variant="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="120"
                  height="60"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>About us</Nav.Link>
                <Nav.Link>Help</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="danger">
                  <NavDropdown title="Emergency" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Accident
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Heart Attack
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      pregnancy
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      others
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#profile">
                  My Profile
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Header;
