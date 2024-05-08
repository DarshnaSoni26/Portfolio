import React from "react";
import Front from "./Front/Front";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Content() {
  return (
    <>
      <Front
        name="Darshna Soni"
        Designation="Web Developer | Front-end Developer"
      />
      <About />
      <Skills />
      <Projects />
      <Contact
        phoneno={`+91 - ${8302131841}`}
        gmail="darshnassoni@gmail.com"
        linkedin="https://www.linkedin.com/in/darshna-soni-057a71287"
      />
      <Footer name="Darshna Soni" />
    </>
  );
}
