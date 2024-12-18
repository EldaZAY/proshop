import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currenyYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; ProShop {currenyYear}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
