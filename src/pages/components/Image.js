import React from "react";
import "./css/img.css";
import Col from "react-bootstrap/Col";
function Image(props) {
  return (
    <Col md={6} className="box-col">
      <div className="box">
        <img src={props.url} alt="" />
      </div>
    </Col>
  );
}

export default Image;
