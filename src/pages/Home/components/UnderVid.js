import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Analytics from "../../../image/analytics1.jpg";
import "./css/underVid.css";
function UnderVid() {
  return (
    <Container fluid className="underVid">
      <Row>
        <Col>
          <h1>User Engagement Analytics</h1>
        </Col>
      </Row>
      <Row className="rowContent">
        <Col className="content">
          <p>
            BrainAlive engagement analytics is grounded in the science of vision
            and brain. In today's distracted and isolated digital platforms,
            BrainAlive has redefined the user engagement tracking experience
            using computer vision and neurophysiological signals. Our AI based
            virtual assistant has the power of sight and the mind of a human to
            accurately track the user engagement and provide powerful insights.
          </p>
        </Col>
      </Row>
      <Row>
        <div className="imgUserEng">
          <img src={Analytics} className="ig" alt="analytics" />
        </div>
      </Row>
    </Container>
  );
}

export default UnderVid;
