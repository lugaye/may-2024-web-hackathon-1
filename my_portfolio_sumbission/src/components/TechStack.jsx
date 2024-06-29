// import React from 'react'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="font-semibold sm:text-3xl text-xl">My Tech Stack</h1>
      <p className="text-sm  sm:text-lg text-gray-400">{`Technologies I've been working with recently`}</p>

      <div className="flex justify-center items-center gap-3 sm:gap-12 flex-wrap w-3/4 my-5">
      <FaHtml5 className="sm:text-9xl text-3xl text-red-500"/>
      <FaCss3Alt className="sm:text-9xl text-3xl text-blue-500"/>
      <SiJavascript className="sm:text-9xl text-3xl text-yellow-500"/>
      <FaReact className="sm:text-9xl text-3xl text-blue-600"/>
      <SiRedux className="sm:text-9xl text-3xl text-purple-600"/>
      <RiTailwindCssFill className="sm:text-9xl text-3xl text-blue-400"/>
      <FaBootstrap className="sm:text-9xl text-3xl text-purple-500"/>
      <FaSass className="sm:text-9xl text-3xl text-amber-800"/>
      <FaGitAlt className="sm:text-9xl text-3xl text-pink-800"/>
      <VscVscode className="sm:text-9xl text-3xl text-blue-700"/>
      <RiNextjsFill className="sm:text-9xl text-3xl text-gray-500"/>
      

      
      </div>
    </div>
  );
};

export default TechStack;
