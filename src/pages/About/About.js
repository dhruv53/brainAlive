import React from "react";
import Vid from "./components/Vid";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Vid />
      <Container>
        <Section1 />
        <Section2 />
        <Row className="backColour"></Row>
      </Container>
      <Footer />
    </>
  );
}

export default About;
