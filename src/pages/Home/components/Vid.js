import React from "react";
import VidTop from "../../../video/brain.m4v";
import ReactPlayer from "react-player";
import "./css/vid.css";
function Vid() {
  return (
    <div className="holder">
      <ReactPlayer
        url={VidTop}
        // onReady={true}
        playing={true}
        loop={true}
        className="topVid"
        // muted="muted"
      />
    </div>
  );
}

export default Vid;
