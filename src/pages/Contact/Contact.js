import React from "react";
import contact from "../../image/contact.png";
import {
  FaUser,
  FaPhoneAlt,
  FaHome,
  FaList,
  FaPencilAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${contact})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "10%",
          paddingTop: "5%",
          textAlign: "left",
          color: "white",
        }}
      >
        <div className="row px-5">
          <div className="col-md-6 p-5 mt-5">
            <h1>Hello.</h1>
            <p style={{ textAlign: "left" }}>
              {
                "We\u2019d love to hear from you if you have a sales question, a press inquiry or anything else you would like to ask us, please send a message and we\u2019ll get back to you."
              }
            </p>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundColor: "#00000085",
            }}
          >
            <h2
              className="pt-5 px-4"
              style={{
                color: "white",
                fontSize: "30px",
              }}
            >
              {"Let\u2019s Talk"}
            </h2>
            <form className="p-5">
              <div className="row">
                <div className="col-md-6 p-1">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <FaUser />
                    </span>
                    <input
                      className="inputGroup-input"
                      placeholder="First Name"
                      type={"text"}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-1">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <FaUser />
                    </span>
                    <input
                      className="inputGroup-input"
                      placeholder="Last Name"
                      type={"text"}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 p-1">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <GrMail />
                    </span>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="inputGroup-input"
                    />
                  </div>
                </div>
                <div className="col-md-6 p-1">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <FaPhoneAlt />
                    </span>
                    <input
                      className="inputGroup-input"
                      placeholder="Phone*"
                      type={"text"}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 p-1">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <FaHome />
                    </span>
                    <input
                      className="inputGroup-input"
                      placeholder="company"
                      type={"text"}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-1">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <FaList />
                    </span>
                    <select className="inputGroup-input">
                      <option value=" " disabled hidden>
                        Select Type of Enquiry
                      </option>
                      <option className="input-option" value="Sales">
                        Beta Registration
                      </option>
                      <option className="input-option" value="Partnership">
                        Partnership
                      </option>
                      <option className="input-option" value="Press">
                        Press{" "}
                      </option>
                      <option className="input-option" value="Press">
                        Free Demo{" "}
                      </option>
                      <option className="input-option" value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="inputGroup">
                    <span className="inputGroup-icon">
                      <FaPencilAlt />
                    </span>
                    <textarea
                      className="inputGroup-input"
                      placeholder="Message"
                    />
                  </div>
                </div>
              </div>
              <button className="p-2 my-3 submitButton">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
