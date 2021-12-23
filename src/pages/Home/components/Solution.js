import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sol1 from "../../../image/sol3.jpg";
import Sol2 from "../../../image/sol4.jpg";
import "./css/sol.css";
function Solution() {
  return (
    <Container fluid className="sol">
      <Row>
        <Col>
          <h1>Our Solution</h1>
        </Col>
      </Row>
      <Row className="align">
        <Col md={5} className="solImageHolder1">
          <img src={Sol1} className="imgConfig" alt="Sol1" />
        </Col>
        <Col md={5} className="solImageHolder2">
          <img src={Sol2} className="imgConfig" alt="Sol2" />
        </Col>
      </Row>
    </Container>
  );
}

export default Solution;
