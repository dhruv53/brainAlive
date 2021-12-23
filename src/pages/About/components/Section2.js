import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./Board";
import "./css/section2.css";

function Section2() {
  return (
    <>
      <Row>
        <Col>
          <h1>Meet The Team</h1>
        </Col>
      </Row>
      <Row>
        <Col className="left">
          <h2>Advisory Board</h2>
        </Col>
      </Row>
      <Row>
        <Board num={1} />
      </Row>
      <Row>
        <Col className="left">
          <h2>Leadership</h2>
        </Col>
      </Row>
      <Row>
        <Board num={2} />
      </Row>
      <Row>
        <Col className="left">
          <h2>Our Team</h2>
        </Col>
      </Row>
      <Row>
        <Board num={3} />
      </Row>
    </>
  );
}

export default Section2;
