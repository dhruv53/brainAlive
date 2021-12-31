import React, { useEffect, useState } from "react";
import "./wave.css";

import Alpha from "../assets/alpha.webp";
import Beta from "../assets/beta.webp";
import Theta from "../assets/theta.webp";
import Delta from "../assets/delta.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Test() {
  const [s, supdate] = useState(Alpha);
  useEffect(() => {
    const call = () => {
      console.log("useEffect Call");
    };
    call();
  }, []);

  const select = (x) => {
    supdate(x);
  };
  const deselect = () => {
    supdate(Alpha);
  };

  return (
    <Container fluid className="contTest">
      <Row>
        <Col>
          <h1 className="brainOsc">
            <u>Brain Wave Oscillations</u>
          </h1>
        </Col>
      </Row>
      <Row className="test" style={{ height: "50vh" }}>
        <Col md={6} className="testCol">
          <h2 onMouseOver={() => select(Alpha)} onMouseOut={() => deselect()}>
            Alpha
          </h2>
          <h2 onMouseOver={() => select(Beta)} onMouseOut={() => deselect()}>
            Beta
          </h2>
          <h2 onMouseOver={() => select(Theta)} onMouseOut={() => deselect()}>
            Theta
          </h2>
          <h2 onMouseOver={() => select(Delta)} onMouseOut={() => deselect()}>
            Delta
          </h2>
        </Col>
        <Col md={6}>
          <img src={s} alt="" style={{ height: "50vh" }} />
        </Col>
      </Row>
      <Row style={{ height: "50vh" }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 className="one">
            <u>Our Computer Vision Algorithm at Work</u>
          </h2>
          <br />
          <p className="two">
            BrainAlive computer vision algorithm tracks your pupil movements,
            facial features and postures to assess the engagement level in real
            time.
          </p>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src="./assets/brain.mp4"
            style={{ height: "40vh" }}
            autoplay={true}
            mute={true}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Test;
