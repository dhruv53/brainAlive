import React from "react";
import Col from "react-bootstrap/Col";
import "./css/text.css";
function Text(props) {
  return (
    <Col className="text-col">
      <div className="content">
        <h1 className="titleText">{props.title}</h1>
        <p className="aboutParagraph">{props.info}</p>
      </div>
    </Col>
  );
}

export default Text;
