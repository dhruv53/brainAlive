import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import Opening1 from "../../image/vision-machine.png";
import Opening2 from "../../image/embedded-bg.jpg";
import Opening3 from "../../image/hardware-bg.jpg";
import { Accordion } from "react-bootstrap";
const ApplyJob = () => {
  const { profile } = useParams();
  const [data, setData] = useState({
    title: "",
    cover: "",
    data: [
      {
        Heading: "",
        About: "",
        list: [
          {
            subHeading: "",
            subList: [],
          },
        ],
      },
    ],
    profile: "",
    about: "",
  });
  const [redirect, setRedirect] = useState(false);
  const content = [
    {
      title: "MACHINE LEARNING ENGINEER",
      cover: Opening1,
      data: [
        {
          Heading: "Machine Learning Engineer - I",
          About:
            "Join BrainAlive and become part of our Machine Learning team that helps discover the information hidden in vast amounts of bio signal and computer vision data, to deliver smart products. Your primary focus will be on applying deep learning techniques, doing statistical analysis, and building high-quality classification and prediction systems integrated with our products. We need you to be versatile, display leadership qualities and be enthusiastic to take on new problems as we continue to push technology forward.",
          list: [
            {
              subHeading: "Responsibilities",
              subList: [
                "Designing Machine/deep Learning algorithms for electro-physiological signals",
                "Demonstrating algorithms meeting accuracy requirements on general user population through statistical analyses and error estimation",
                "Writing technical reports summarizing development, analysis, training and validation of the algorithms",
              ],
            },
            {
              subHeading: "Required skills",
              subList: [
                "Proficient in Python / MATLAB",
                "Understanding of data structures and data modeling",
                "Self-motivated individual with passion towards state-of-the-art technologies",
                "Excellent communication skills",
                "Outstanding analytical and problem-solving skills",
              ],
            },
            {
              subHeading: "Good to have skills",
              subList: [
                "Academic experience/strong project experience with machine learning or deep learning programming using libraries such as PyTorch, TensorFlow, OpenCV, Caffe",
                "Good background and understanding of mathematical concepts relating to probabilistic models, conditional probability, numerical methods and linear algebra.",
              ],
            },
            {
              subHeading: "You will fit in if you have:",
              subList: [
                "Appreciation for Start-up",
                "Hacker attitude to make your way through unfamiliar territory with little help",
                "Enthusiasm to get things done with responsibility",
              ],
            },
          ],
        },
        {
          Heading: "Machine Learning Engineer - II",
          About:
            "Join BrainAlive and become part of our Machine Learning team that helps discover the information hidden in vast amounts of bio signal and computer vision data, to deliver smart products. Your primary focus will be on applying deep learning techniques, doing statistical analysis, and building high-quality classification and prediction systems integrated with our products. We need you to be versatile, display leadership qualities and be enthusiastic to take on new problems as we continue to push technology forward.",
          list: [
            {
              subHeading: "Responsibilities",
              subList: [
                "Conducting data processing and analysis, using DSP techniques and methods, to extract information of the EEG signal data for detection of various attributes of the mental state of a subject. Designing Machine Learning algorithms for electro-physiological signals in numerical analysis languages : Matlab, Python, C/C++etc.",
                "Demonstrating algorithms meeting accuracy requirements on general user population through statistical analyses and error estimation.",
                "Writing technical reports summarizing development, analysis, training and validation of the algorithms.",
              ],
            },
            {
              subHeading: "Required Qualification",
              subList: [
                "B.Tech./M.Tech/Ph.D in Computer Science or Electronics (Machine Learning, AI, Statistics, or equivalent)",
                "More than 2 years of industrial/academic experience in building ontology mapping and extraction models",
                "Strong technical skills, deep understanding, work experience and or exposure to DSP implementations, filtering, transforms, data visualization, machine learning, timing and signal recovery.",
                "Willingness to divert from the conventional methods to explore alternative approaches.",
                "Knowledge of optimization, multi-threaded development and cross-platform development.",
                "Experience in statistical analysis and programming projects on data analysis algorithms / signal processing.",
                "Experience using Python , C++ , R, MATLAB, Java or similar scripting language",
              ],
            },
            {
              subHeading: "Preferred Qualification",
              subList: [
                "Experience with real-time signal processing.",
                "Experience in advanced signal analysis of physiologic signals required with specific knowledge in EEG preferred.",
                "Extensive practical experience in several of the following areas: ML, Natural Language Processing, Ontology mapping, Clustering techniques, applied ML or AI features/products/systems",
                "Ability to handle multiple competing priorities in a fast-paced environment",
                "Significant peer reviewed scientific contributions in premier journals and conferences",
                "Proven track record of production achievements",
                "Strong personal interest in learning, researching, and creating new technologies with high customer impact",
                "Experience with defining research and development practices in an applied environment",
                "Superior verbal and written communication and presentation skills, ability to convey rigorous mathematical concepts and considerations to non-experts.",
                "Strong fundamentals in problem solving, algorithm design and complexity analysis",
              ],
            },
            {
              subHeading: "You will fit in if you have:",
              subList: [
                "Appreciation for Start-up",
                "Hacker attitude to make your way through unfamiliar territory with little help",
                "Enthusiasm to get things done with responsibility",
              ],
            },
          ],
        },
      ],
      profile: "computer-vision",
      about:
        "At BrainAlive, we develop next generation BCI technologies that transform how humans use bio signals to develop a crisp, conscious understanding of their physiology, especially relating to their cognitive and emotional abilities. Our mission is to become the innovation leader in the area of Brain Computer Interface (BCI). We are building our reputation as the industry powerhouse for innovation in BCI applications in education and healthcare space.",
    },
    {
      title: "EMBEDDED FIRMWARE ENGINEER",
      cover: Opening2,
      data: [
        {
          Heading: "Embedded Firmware Engineer - I",
          About:
            "As an Embedded firmware Engineer at BrainAlive, you will have the opportunity to pioneer, develop and build out our footprint in consumer hardware. You will build and launch smart BCI wearables and other related products in line with BrainAlive's ambitious and visionary objectives. Your primary focus will be to enhance efficiency, stability and scalability of hardware system resources. We need you to be versatile, display leadership qualities and be enthusiastic to take on new problems as we continue to push technology forward",
          list: [
            {
              subHeading: "Responsibilities",
              subList: [
                "Develop codes for utilizing various hardware and capabilities built into a microcontroller, such as ADCs, timers, RTCs, power-saving and sleep modes, etc",
                "Develop codes for the effective functioning of communication protocols such as UART, SPI, I2C, etc",
                "Develop effective libraries for interfacing of various sensors and modules such as accelerometers, GSM, Bluetooth, etc",
                "Review/Debug/Maintain libraries and firmware developed by fellow engineers",
              ],
            },
            {
              subHeading: "Required skills",
              subList: [
                "Basic understanding of how an embedded system works.",
                "Familiarity with C/C++, the principles of writing effective codes",
                "Excellent communication skills",
              ],
            },
            {
              subHeading: "Good to have skills",
              subList: [
                "Understanding of microcontroller's architecture and its working",
                "Project Experience at handling huge codebases and designing of multi-layered architectures",
                "Project experience with hardware debugging tools and interface like JTAG, SWD",
                "Academic/Project experience with BLE and USB protocols",
              ],
            },
            {
              subHeading: "You will fit in if you have:",
              subList: [
                "Appreciation for Start-up",
                "Hacker attitude to make your way through unfamiliar territory with little help",
                "Enthusiasm to get things done with responsibility",
              ],
            },
          ],
        },
        {
          Heading: "Embedded Firmware Engineer - II",
          About:
            "As an Embedded firmware Engineer at BrainAlive, you will have the opportunity to pioneer, develop and build out our footprint in consumer hardware. You will build and launch smart BCI wearables and other related products in line with BrainAlive's ambitious and visionary objectives. Your primary focus will be to enhance efficiency, stability and scalability of hardware system resources. We need you to be versatile, display leadership qualities and be enthusiastic to take on new problems as we continue to push technology forward.",
          list: [
            {
              subHeading: "Responsibilities",
              subList: [
                "Develop codes for utilizing various hardware and capabilities built into a microcontroller, such as ADCs, timers, RTCs, power-saving and sleep modes, etc",
                "Perform debugging and provide technical support to the service team",
                "Participate in requirements analysis and collaborate with internal teams to produce firmware design and architecture",
                "Revise, update, refactor and debug code",
                "Drive peer reviews and peer testing across different modules developed",
                "Develop documentation throughout the product development life cycle",
                "Serve as an expert on applications and provide technical support",
              ],
            },
            {
              subHeading: "Required Qualification",
              subList: [
                "Bachelor Degree in Electronics / Electrical Engineering or Computer Science or related field",
                "2+ years of experience in Microcontroller programming",
                "Deep understanding of microcontroller's architecture and its working",
                "Experience in prototype bring-up and debugging, functional verification and manufacturing support",
                "Highly experienced in developing and debugging in embedded C/C++, RTOS",
                "Product development experience with 32 - Bit STM ARM Microcontroller Architectures",
                "Familiarity with source control management software (SVN, Git, Bitbucket)",
                "Excellent troubleshooting and communication skills",
              ],
            },
            {
              subHeading: "Preferred Qualification",
              subList: [
                "Experience in developing codes for the effective functioning of communication protocols such as UART, SPI, I2C, etc.",
                "Experience at handling huge codebases and designing of multi-layered architectures",
                "Experience with hardware debugging tools and interface like JTAG, SWD",
                "Experience with BLE and USB protocols",
                "Experience in optimisation of Microcontroller codes for specific goals like power efficiency",
                "Understanding of filtering algorithms both digital and analog for noise removal/minimization",
                "Prior Brain Computer Interface Device development experience",
              ],
            },
            {
              subHeading: "You will fit in if you have:",
              subList: [
                "Appreciation for Start-up",
                "Hacker attitude to make your way through unfamiliar territory with little help",
                "Enthusiasm to get things done with responsibility",
              ],
            },
          ],
        },
      ],
      profile: "embedded",
      about:
        "At BrainAlive, we develop next generation BCI technologies that transform how humans use bio signals to develop a crisp, conscious understanding of their physiology, especially relating to their cognitive and emotional abilities. Our mission is to become the innovation leader in the area of Brain Computer Interface (BCI). We are building our reputation as the industry powerhouse for innovation in BCI applications in education and healthcare space.",
    },
    {
      title: "HARDWARE ENGINEERING",
      cover: Opening3,
      data: [
        {
          Heading: "Hardware Engineer - I",
          About:
            "Our BCI wearables are so minimalistic and affordable that we can't just purchase off-the-shelf hardware, we have to make it ourselves. As a Hardware Engineer, you design and build next-generation consumer hardware products.. You develop from the lowest levels of circuit design to large system design and see those systems all the way through to high volume manufacturing. Your primary focus will be to design, develop and deploy the electrical architecture and the schematics for the end product. We need you to be versatile, display leadership qualities and be enthusiastic to take on new problems as we continue to push technology forward",
          list: [
            {
              subHeading: "Responsibilities",
              subList: [
                "Designing power supplies for supporting the required functioning of the system",
                "Design auxiliary circuitries for supporting the effective functioning of various sensors and modules, such as accelerometers, GSM, Bluetooth, etc.",
                "Review/Maintain electronics designed and developed by fellow engineers",
              ],
            },
            {
              subHeading: "Necessary skills",
              subList: [
                "Basic understanding of how an embedded system works",
                "Familiarity with the concepts of basic electronics",
                "Excellent communication skills",
                "Outstanding analytical and problem-solving skills",
              ],
            },
            {
              subHeading: "Good to have skills",
              subList: [
                "Familiarity with the fundamentals of schematic design and PCB layout techniques",
              ],
            },
            {
              subHeading: "You will fit in if you have:",
              subList: [
                "Appreciation for Start-up",
                "Hacker attitude to make your way through unfamiliar territory with little help",
                "Enthusiasm to get things done with responsibility",
              ],
            },
          ],
        },
        {
          Heading: "Hardware Engineer - II",
          About:
            "Our BCI wearables are so minimalistic and affordable that we can't just purchase off-the-shelf hardware, we have to make it ourselves. As a Hardware Engineer, you design and build next-generation consumer hardware products.. You develop from the lowest levels of circuit design to large system design and see those systems all the way through to high volume manufacturing. Your primary focus will be to design, develop and deploy the electrical architecture and the schematics for the end product. We need you to be versatile, display leadership qualities and be enthusiastic to take on new problems as we continue to push technology forward",
          list: [
            {
              subHeading: "Responsibilities",
              subList: [
                "Design and development of digital and analog electronics for control of high precision electronic systems",
                "Start to finish ownership of control boards and other electronics \u2013 from specification to design, prototype, and manufacturing",
                "Product level electrical design including component selection, branch circuit design and insulation coordination",
                "Collaborate with FW engineering team to successfully design, validate and deploy testing tools",
                "Develop documentation throughout the product development life cycle",
                "Review electronics designed and developed by fellow engineers",
              ],
            },
            {
              subHeading: "Required Qualification",
              subList: [
                "B.Tech, M.Tech in EEE/ECE or the equivalent in experience with evidence of exceptional ability",
                "2+ years of demonstrated successful experience in hardware design engineering within a product design environment",
                "Experience with analog, mixed power control circuit design including microcontrollers and DSPs",
                "Experience in debugging and evaluating micro controller based circuit problems",
                "Experience in supervision of PCB layout for minimal stray parasitics, placement strategies for better manufacturability, power/signal plane definition and EMC optimization",
                "Experience with Designer tool for Schematic & PCB layout design",
                "Excellent communication skills",
                "Outstanding analytical and problem-solving skills",
              ],
            },
            {
              subHeading: "Preferred Qualification",
              subList: [
                "Hands on experience in Micro/Milli volt amplification, filters and noise filtering techniques",
                "Experience in dual power supply, consumption calculation and optimization",
                "Experience in schematics capture, library generation, routing rules creation, signal integrity optimisation",
                "Understanding of noise control, circuit/PCB shielding, filtering algorithms both digital and analog",
                "Design experience in auxiliary circuitries for supporting the effective functioning of various sensors and modules, such as accelerometers, GSM, Bluetooth, etc.",
              ],
            },
            {
              subHeading: "You will fit in if you have:",
              subList: [
                "Appreciation for Start-up",
                "Hacker attitude to make your way through unfamiliar territory with little help",
                "Enthusiasm to get things done with responsibility",
              ],
            },
          ],
        },
      ],
      profile: "hardware",
      about:
        "At BrainAlive, we develop next generation BCI technologies that transform how humans use bio signals to develop a crisp, conscious understanding of their physiology, especially relating to their cognitive and emotional abilities. Our mission is to become the innovation leader in the area of Brain Computer Interface (BCI). We are building our reputation as the industry powerhouse for innovation in BCI applications in education and healthcare space.",
    },
  ];
  useEffect(() => {
    if (
      content.filter((item) => {
        if (item.profile === profile) {
          setData(item);
          return true;
        }
        return false;
      }).length < 1
    ) {
      setRedirect(true);
    }
  }, [profile]);
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `url(${data.cover})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            height: "100%",
            width: "100%",
            padding: "10%",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "5rem",
              fontWeight: "400",
            }}
          >
            {data.title}
          </h1>
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          padding: "10%",
        }}
      >
        <h6>About</h6>
        <p>{data.about}</p>
        <Accordion>
          {data.data.map((item, index) => (
            <div key={index}>
              <Accordion.Item eventKey={`${index}`}>
                <Accordion.Header>{item.Heading}</Accordion.Header>
                <Accordion.Body className="p-5">
                  Role-{item.Heading}
                  <p>{item.About}</p>
                  {item.list.map((listItem, i) => (
                    <div>
                      {listItem.subHeading}
                      <ul>
                        {listItem.subList.map((subListItem, j) => (
                          <li key={j}>{subListItem}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="p-5">
                    <a
                      href="mailto:info@braina.live"
                      style={{
                        display: "block",
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "12px 30px",
                        fontSize: "15px",
                        width: "150px",
                        textDecoration: "none",
                      }}
                    >
                      Apply Now
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default ApplyJob;
