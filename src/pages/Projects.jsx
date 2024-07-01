import React from "react";

const projectData = [
  {
    icon: "/relion.png",
    name: "Relion",
    description:
      "This is a website for charity activities to empower women especially in the rural areas. Check out the link: https://relion-sigma.vercel.app/",
  },
  {
    icon: "/fitbuddy.png",
    name: "Fitbuddy",
    description:
      "Fitness app that has a list of exercises one can select from to enhance body fitness and health. Link to the repo: https://github.com/Devsherile/FitBuddy",
  },
  {
    icon: "/dash.jpg",
    name: "Admin Dashboard",
    description:
      "Admin Dashboard for managing writers. Link to my repo: https://github.com/Devsherile/admin-dashboard",
  },
];

function Projects() {
  return (
    <div className="pt-16 pb-44 flex flex-col items-center justify-center bg-slate-100 py-10" id="projects">
      <div className="text-3xl font-bold text-center py-8 ">
        <h1 className="text-[#00df9a] pt-8">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projectData.map(({ icon, name, description }, index) => (
          <div
            className="flex flex-col border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            key={index}
          >
            <img className="w-full h-40 object-cover" src={icon} alt={name} />
            <div className="p-6">
              <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
