import React from "react";
import { Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            E-VAC
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar;
