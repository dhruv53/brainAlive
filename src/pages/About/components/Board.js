import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Advisors from "./Advisors.json";
import Leadership from "./Leadership.json";
import Team from "./Team.json";

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
              <Col key={index} className="userBatch">
                <div className="cell">
                  <img src={data.url} alt="" className="board-col1" />
                  <div className="board-col2">
                    <p className="nm">
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
              <Col key={index} className="userBatch">
                <div className="cell">
                  <img src={data.url} alt="" className="board-col1" />
                  <div className="board-col2">
                    <p className="nm">
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
        Team.map((data, index) => {
          return (
            <>
              <Col key={index} className="userBatch">
                <div className="cell">
                  <img src={data.url} alt="" className="board-col1" />
                  <div className="board-col2">
                    <p className="nm">
                      <b>{data.name}</b>
                    </p>
                    <span>{data.stack}</span>
                  </div>
                </div>
              </Col>
            </>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}

export default Board;
