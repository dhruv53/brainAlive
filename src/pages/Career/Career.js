import React from "react";
import "./Career.css";
import Card from "./subComponets/Card";
import Opening1 from "../../image/opening1.png";
import Opening2 from "../../image/opening2.png";
import Opening3 from "../../image/opening3.png";
import Why1 from "../../image/why1.png";
import Why2 from "../../image/why2.png";
import Why3 from "../../image/why3.png";
import { Container } from "react-bootstrap";
import Slider from "./subComponets/Slider";

function Career() {
  const jobOpenings = [
    {
      img: Opening1,
      title: "MACHINE LEARNING ENGINEER",
      route: "computer-vision",
    },
    {
      img: Opening2,
      title: "EMBEDDED FIRMWARE DEVELOPMENT",
      route: "embedded",
    },
    {
      img: Opening3,
      title: "HARDWARE ENGINEERING",
      route: "hardware",
    },
  ];
  return (
    <Container fluid className="p-0 m-0">
      <section className="row p-0 m-0 career-header">
        <div className="col career-header-overlay">
          <div className="career-header-title">WE ARE HIRING!</div>
          <div className="career-header-text">
            Excited About Opportunities In Computer-Vision,
            <br /> Machine Learning And Embedded Domains? We Will Be Glad To
            Reach You!
          </div>
        </div>
      </section>
      <section className="row p-0 m-0 openings">
        <div className="col pt-5">
          <h1 data-aos="zoom-in-up">OPENINGS</h1>
          <div className="row p-5">
            {jobOpenings.map((item) => (
              <Card img={item.img} position={item.title} route={item.route} />
            ))}
          </div>
        </div>
      </section>
      <section className="row p-0 m-0">
        <div className="col-12">
          <div className="row">
            <div className="col-md-6" style={{ padding: "10%" }}>
              <div data-aos="fade-right">
                <h2>NEXT-GEN TECHNOLOGY</h2>
                <p>
                  BrainAlive is one of the few organizations to work in next
                  generation consumer grade B.C.I devices
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ padding: "10%" }}>
              <img
                className="rounded-images"
                src={Why1}
                width={"100%"}
                data-aos="fade-left"
                alt=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6" style={{ padding: "10%" }}>
              <img
                className="rounded-images"
                src={Why2}
                width={"100%"}
                data-aos="fade-right"
                alt=""
              />
            </div>
            <div className="col-md-6" style={{ padding: "10%" }}>
              <div data-aos="fade-left">
                <h2>LEARNING DRIVEN WORK CULTURE</h2>
                <p>
                  BrainAlive is a learning-driven organization that promotes
                  open mindedness, quest for innovation and knowledge sharing.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6" style={{ padding: "10%" }}>
              <div data-aos="fade-right">
                <h2>EXCEPTIONAL WORK LIFE BALANCE</h2>
                <p>
                  All work and no play makes Jack a dull boy , and so,
                  <ul>
                    <li style={{ textAlign: "left" }}>
                      Flexible work-hours policy? <span>✓</span>
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Group Yoga sessions on weekends? <span>✓</span>
                    </li>
                    <li style={{ textAlign: "left" }}>
                      A gaming room with PS? <span>✓</span>
                    </li>
                  </ul>
                  You name it and we have it.
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ padding: "10%" }}>
              <img
                className="rounded-images"
                src={Why3}
                width={"100%"}
                alt=""
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </Container>
  );
}

export default Career;
