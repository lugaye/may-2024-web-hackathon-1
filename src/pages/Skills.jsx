import React from "react";
import { MonitorSmartphone, Figma, SquareCode, Laptop } from "lucide-react";

const skillsData = [
  {
    icon: <Laptop />,
    title: "UI/UX",
    description:
      "I am a skilled UI/UX designer with a strong foundation in user research, wireframing, prototyping, and visual design. Proficient in tools like Figma, Sketch, and Adobe Creative Suite, I excel in creating intuitive and visually appealing designs.",
  },
  {
    icon: <Figma />,
    title: "Web Design",
    description:
      "I create visually appealing and user-friendly websites. My expertise extends to using design tools like Adobe Photoshop, Figma, and Sketch, allowing me to bring creative ideas to life.",
  },
  {
    icon: <SquareCode />,
    title: "Web Development",
    description:
      "I have over 3 years of experience in front-end and over 1 year in back-end development. Proficient in HTML, CSS, and JavaScript, I have developed dynamic and responsive websites using frameworks like React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <MonitorSmartphone />,
    title: "Mobile Development",
    description:
      "I am a skilled mobile developer with extensive experience in building cross-platform applications using the Flutter framework to develop applications that integrate with Flutter software and frameworks.",
  },
];

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto p-4" id="skills">
      <h1 className="text-[#00df9a] text-center font-bold text-3xl">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-24 py-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col w-72 h-auto border px-4 p-6 items-center justify-center mx-auto rounded-md"
          >
            <p className="items-center"> {skill.icon} </p>
            <h1 className="text-[#00df9a] font-semibold text-lg mt-4">
              {skill.title}
            </h1>
            <p className="text-center mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
