// Kontaktseite 

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie uns doch gerne direkt bei Fragen aller Art"
  };

export default function Contact() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">So erreichen Sie uns</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm bg-light">
            <h4 className="mb-3">Kleiderkurier e.V.</h4>
            <p><FaMapMarkerAlt className="me-2" /> Hauptstraße 12, 10115 Berlin</p>
            <p><FaPhoneAlt className="me-2" /> +49 30 12345678</p>
            <p><FaEnvelope className="me-2" /> kontakt@kleiderkurier.de</p>

            <h5 className="mt-4">Öffnungszeiten</h5>
            <ul className="list-unstyled">
              <li>Montag – Freitag: 9:00 – 18:00 Uhr</li>
              <li>Samstag: 10:00 – 14:00 Uhr</li>
              <li>Sonn- & Feiertage: geschlossen</li>
            </ul>

            <h5 className="mt-4">Folgen Sie uns</h5>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
