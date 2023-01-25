import React from "react";
import web from "../src/images/Home3.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to Our Team"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        desc2="Our goal is to bring our customers value. We provide that value with a well functioning, aesthetically pleasing website, and also through driving more organic traffic, which thus increases sales."
      />
    </>
  );
};

export default About;
