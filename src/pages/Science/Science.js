import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Feet from "./model/Feet";
import Hand from "./model/Hand";
import Math from "./model/Math";
import World from "./model/World";
import "./style.css";

function Science() {
  return (
    <div>
      <Container fluid className="scienceHead">
        <Row className="scienceTopRow">
          <Col className="scienceTopCol">
            <h1>
              We
              <br />
              Make The
              <br />
              Intangible
              <br />
              Tangible
            </h1>
            <p>
              BrainAlive uses computer vision and
              <br />
              neuroscience to provide a revolutionary
              <br />
              feedback on user engagement.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="containerSecond">
        <Row className="rowSecond">
          <Col className="colSecond">
            <h4>
              Our EEG + fNIRS headset, CRUX, captures physiological signals of
              your brain to understand the cerebral circuit activations for
              corresponding user activities.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col className="card">
            <Feet />
            <h5>Motor Movement- Feet</h5>
          </Col>
          <Col className="card">
            <Hand />
            <h5>Motor Movement- Hands</h5>
          </Col>
          <Col className="card">
            <Math />
            <h5>Mathematics and Logic</h5>
          </Col>
          <Col className="card">
            <World />
            <h5>Reading and Language</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Science;
