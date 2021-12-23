import React from "react";
import Col from "react-bootstrap/Col";
import "./css/text.css";
function Text(props) {
  return (
    <Col className="text-col">
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.info}</p>
      </div>
    </Col>
  );
}

export default Text;
