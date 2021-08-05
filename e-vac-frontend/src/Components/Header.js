import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import logo from "../logo.png";
import Home from "./Home";
import "./header.css";
import About from "./About";
import Help from "./Help";
import OtpBox from "./OtpBox";
import Nearby from "./Hospitals/Nearby";
import Login from "./Login";
import Search from "./Hospitals/Search";
import Emergency from "./Emergency";
import AmbulanceDetails from "./AmbulanceDetails";
import PaymentForm from "./PaymentForm";

const Header = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <NavDropdown title="Hospitals" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/nearby"}>
                    Near-By Hospitals
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/search"}>
                    Search Hospitals
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/about"}>
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to={"/help"}>
                  Help
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="danger">
                  <NavDropdown title="Emergency" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      Accident
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
                      Heart Attack
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/user/ambulance"}>
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
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/nearby">
            <Nearby />
          </Route>
          <Route path="/user/ambulance/booked/payment">
            <PaymentForm />
          </Route>
          <Route exact path="/user/ambulance">
            <Emergency />
          </Route>
          <Route path="/user/ambulance/booked">
            <AmbulanceDetails />
          </Route>
          <Route path="/otp">
            <OtpBox />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Header;