import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    icon: "/mut.png",
    name: "Murang'a University of Technology",
    description:
      "Bachelors Degree in Software Engineering.I was a member in the GDSC MUT and Equity Leaders Program MUT Chapter.",
  },
  {
    icon: "/cisco.jpeg",
    name: "Cisco Certified Network Associate (CCNA1)",
    description:
      "I gained hands-on experience in using packet tracer to design networks and learnt CCNA1 course.",
  },
  {
    icon: "/power.jpeg",
    name: "Power Learn Project",
    description:
      " Certificate in Software Engineering.Learn a lot from Software Engineering,Database, Entrepreneurship and web technologies.",
  },
];

function Education() {
  return (
    <div className=" pt-16 pb-44 flex flex-col items-center justify-center bg-slate-50" id="education">
      <div className="flex text-3xl pb-8 font-bold items-center gap-2 py-2">
        <FaGraduationCap />
        <h1 className=" text-[#00df9a]">Education</h1>
      </div>
      <div className="flex gap-10 px-10 items-center justify-center">
        {educationData.map(({ icon, name, description }) => (
          <div
            className="flex border flex-col gap-4 items-center w-72 h-80 py-6 px-6 rounded-md"
            key={educationData}
          >
            <img className="w-20 h-20" src={icon} alt={name} />
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
