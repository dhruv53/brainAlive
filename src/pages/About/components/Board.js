import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Advisors from "./Advisors.json";
import Leadership from "./Leadership.json";

import "./css/board.css";
function Board(props) {
  useEffect(() => {
    console.log(Advisors);
  }, []);
  return (
    <>
      {props.num === 1 ? (
        Advisors.map((data, index) => {
          return (
            <>
              <Col key={index}>
                <div className="cell">
                  <img src={data.url} alt="" className="board-col1" />
                  <div className="board-col2">
                    <p>
                      <b>{data.name}</b>
                    </p>
                    <span>{data.stack}</span>
                  </div>
                </div>
              </Col>
            </>
          );
        })
      ) : props.num === 2 ? (
        Leadership.map((data, index) => {
          return (
            <>
              <Col key={index}>
                <div className="cell">
                  <img src={data.url} alt="" className="board-col1" />
                  <div className="board-col2">
                    <p>
                      <b>{data.name}</b>
                    </p>
                    <span>{data.stack}</span>
                  </div>
                </div>
              </Col>
            </>
          );
        })
      ) : props.num === 3 ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
}

export default Board;
