import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const Card = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="col-md-4 p-5">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          height: "500px",
          paddingTop: "50%",
          paddingBottom: 0,
          paddingLeft: "20px",
          borderRadius: "25px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            height: "200px",
          }}
        >
          <h2
            style={{
              color: "white",
              // marginBottom: 100,
            }}
            data-aos="fade-up"
          >
            {props.position}
          </h2>
        </div>
        <Link className="job-desc-button" to={`/applyjob/${props.route}`} data-aos="fade-up">
          JOB DESCRIPTION
        </Link>
      </div>
    </div>
  );
};

export default Card;
