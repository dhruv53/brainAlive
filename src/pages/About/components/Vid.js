import React from "react";
import VidTop from "../../../video/about.mp4";
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
      />
    </div>
  );
}

export default Vid;
