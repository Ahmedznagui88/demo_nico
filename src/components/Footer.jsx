import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container style={{ textAlign: 'center' , paddingTop: '20px' , paddingBottom: '20px' }}>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h5>Informazioni</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Servizi</a></li>
              <li><a href="#">Dove Siamo</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5>Contatti</h5>
            <ul className="list-unstyled">
              <li><a href="#">San Giovanni </a></li>
              <li><a href="#">3232312344</a></li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h5>Orari Di Apertura</h5>
            <ul className="list-unstyled">
              <li><a href="#">Lunedi-Sabato</a></li>
              <li><a href="#">09:00 - 20:00</a></li>
            </ul>
          </Col>
          
          <Col xs={12} sm={6} md={3}>
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;