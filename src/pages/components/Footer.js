import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./css/footer.css";
function Footer() {
  return (
    <>
      <Container fluid className="section">
        <Row>
          <Col md={3} className="sec1">
            <p className="noMarginBottom">
              Partner with us to explore the unlimited potential of the brain
              info@braina.live
            </p>
          </Col>
          <Col md={6}>
            <div>
              <h2>Registered office:</h2>
              <br />
            </div>
            <div className="cols">
              <div className="col1">
                <span>
                  14/144, 6th Floor, Ratan Esquire,
                  <br /> Chunni Ganj, Kanpur, Uttar Pradesh
                  <br /> India- 208001
                </span>
              </div>
              <div className="col2">
                <span>
                  Suite2b, Crystal House,
                  <br /> New Bedford Road Luton, Bedfordshire
                  <br />
                  United Kingdom, LU1 1HS
                </span>
              </div>
            </div>
          </Col>
          <Col md={3} className="social">
            <div>
              <h2>Social Links</h2>
            </div>
            <div className="align">
              <div className="circle">
                <FaFacebookF color={"white"} />
              </div>
              <div className="circle">
                <FaLinkedinIn color={"white"} />
              </div>
              <div className="circle">
                <FaInstagram color={"white"} />
              </div>
              <div className="circle">
                <FaTwitter color={"white"} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="copy">
          <Col>
            <p>© Copyright 2021 by Braina.live</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
