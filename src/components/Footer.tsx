import React from "react";
import footerlogo from "../images/footerlogo-.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <div className="mainFooter ">
            <div className="footerText">
              <p>
                <a href="https://render.com">Render Home Page</a>
              </p>
              <a href="../images/lever-logo-full (1).svg" className="imageLink">
                <span>Jobs powered by </span>
                <img alt="Lever logo" src={footerlogo} />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
