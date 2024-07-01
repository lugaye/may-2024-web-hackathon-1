import React from "react";
import Skills from "./Skills";

function About() {
  return (
    <div className="bg-slate-100 pt-16 min-h-screen" id="about">
      <div className="text-center justify-center">
        <h1 className="text-3xl text-center font-bold text-[#00df9a]">About Me</h1>
        <p className="max-w-3xl mx-auto text-start">
          I am a full stack web developer with 3+ years of expereince. I design
          and build user-friendly web applications. I have experience working
          with a variety of technologies including JavaScript, React, Node.js,
          Express and MongoDB.Being a scholar at Equity Leaders Program, I
          worked as a digital marketer at Equity Bank which gave me a distinct
          viewpoint on how business and technology interact. My ability to build
          creative solutions and successfully communicate their value
          proposition to a variety of audiences is facilitated by my dual
          expertise.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default About;
