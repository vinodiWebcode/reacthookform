import React from "react";
import { Navbar, Container } from "react-bootstrap";

import logo from "../images/logo.png";
import "../App.css";

function Header() {
  return (
    <>
      <Navbar bg="white" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="163"
              height="67"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
