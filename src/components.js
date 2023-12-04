import React from "react";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";

function Components() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Components;
