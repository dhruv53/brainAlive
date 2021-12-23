import React, { useState, useEffect } from "react";
import Image from "../../components/Image";
import Text from "../../components/Text";

import Row from "react-bootstrap/Row";

import Data from "../../components/data.json";

import IMG1 from "../../../image/about.jpg";
import IMG2 from "../../../image/mission.jpg";

function Section1() {
  const [title, updateTitle] = useState([]);
  const [text, updateText] = useState([]);

  useEffect(() => {
    let title = [];
    let txt = [];
    for (var i = 0; i < Data.length; i++) {
      title.push(Data[i].title);
      txt.push(Data[i].text);
    }
    updateTitle(title);
    updateText(txt);
  }, []);
  return (
    <>
      <Row>
        <Text title={title[0]} info={text[0]} />
        <Image url={IMG1} />
      </Row>
      <Row>
        <Image url={IMG2} />
        <Text title={title[1]} info={text[1]} />
      </Row>
    </>
  );
}

export default Section1;
