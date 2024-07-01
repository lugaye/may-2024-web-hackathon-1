import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface Image {
  src: string;
}

const images: Image[] = [
  { src: '/images/project_1.png' },
  { src: '/images/project_2.png' },
  { src: '/images/project_3.png' },
  { src: '/images/project_4.png' },
];

const projects = [
  {
    title: "Money M8",
    description:
      "Money Mate is a comprehensive Budget Tracker web application designed to simplify your financial management journey",
    capstone: "ALX iSWE Capstone Project",
    link: "https://www.loom.com/share/8f5e0fb5df2d46c08ff8dd0958e84949?sid=7690d83b-5b39-4851-9c8f-9e89a1bb489a" 
  },
  {
    title: "Portfolio Design",
    description:
      "Web design using Figma for a client's portfolio project. Currently pending. Next phase is development",
    capstone: "Personal Project",
    link: "https://www.figma.com/design/UbtD37wkzFvZXdThmQgH5T/Nicodemus-Were?node-id=1-2&t=S9VOG8fPwOmfCyQ1-1" 
  },
  {
    title: "VAC AI",
    description:
      "Simulation project as a young professional at Waga. Revive VAC AI by creating a new prototype",
    capstone: "ALX AiCE Capstone Project",
    link: "https://www.loom.com/share/53c1e2d724ba443692dac5eb69fa7e5f?sid=dbe0a316-6881-42bd-ab60-40592b023d5e" 
  },
  {
    title: "Portfolio Development",
    description:
      "Clean and minimalistic portfolio for a client. Focused on usability and modern design to highlight the client's professional work.",
    capstone: "Personal Project",
    link: "https://www.figma.com/design/LT9AGSaq3CBRm1s0qfQAdE/SAHU?node-id=1-2&t=fat0qv1nppXpCkpq-1https://www.figma.com/design/LT9AGSaq3CBRm1s0qfQAdE/SAHU?node-id=0-1&t=fat0qv1nppXpCkpq-1" 
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-8 px-8 sm:py-14 xl:px-8 bg-primary">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-lg font-light mb-8">
          What I&apos;ve built <br />
          <span className="text-heading text-3xl font-bold">My Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md relative">
              <div className="h-40 mb-4">
                <img src={images[index].src} alt={project.title} className="object-cover h-full w-full rounded-lg" />
              </div>
              <div className="border-t pt-2 border-blue-500">
                <p className="font-bold">{project.title}</p>
                <p>{project.description}</p>
                <br />
                <p className="text-[#ADB7BE] align-text-bottom hover:text-secondary">{project.capstone}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 text-secondary hover:text-secondary"
                >
                  <GoArrowUpRight className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
