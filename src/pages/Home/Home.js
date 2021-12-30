import React from "react";
import Vid from "./components/Vid";
import UnderVid from "./components/UnderVid";
import Solution from "./components/Solution";
import Mod from "./components/Mod";
import Footer from "../components/Footer";
import Aud from "./components/Aud";

function Home() {
  return (
    <>
      <Aud />
      <Vid />
      <UnderVid />
      <Solution />
      <Mod />
      <Footer />
    </>
  );
}

export default Home;
