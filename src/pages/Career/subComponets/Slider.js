import React from "react";
import Carousel from "react-elastic-carousel";
import "./slider.css";
import consumer1 from "../../../image/Gnaneshwar.jpg";
import consumer2 from "../../../image/mayank.png";
const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    // { width: 1200, itemsToShow: 1 },
  ];
  const items = [
    {
      image: consumer1,
      review:
        '"BrainAlive is truly an exceptional place to work. I love how it focuses a lot on the all-round well-being of its employees. The flexibility in working hours helps me regulate and balance my work with life. BrainAlive has helped me to grow especially as a professional Machine Leaning Engineer"',
      name: "Gnaneswara Rao",
      department: "Machine Learning",
    },
    {
      image: consumer2,
      review:
        '"Its been a great learning journey uptil now in BrainAlive. Been a pleasure working under really knowledgeable leads"',
      name: "Mayank Saxena",
      department: "Hardware",
    },
  ];
  return (
    <div className="row p-0 m-0 testimonials">
      <Carousel className="col p-5" breakPoints={breakPoints} itemsToScroll={1}>
        {items.map((item, index) => (
          <div className="row p-5" key={index}>
            <div className="col-md-6">
              <img
                src={item.image}
                style={{ borderRadius: "50%" }}
                width={"75%"}
                alt=".."
              />
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <blockquote>{item.review}</blockquote>
              <h2>{item.name}</h2>
              <h4>{item.department}</h4>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
