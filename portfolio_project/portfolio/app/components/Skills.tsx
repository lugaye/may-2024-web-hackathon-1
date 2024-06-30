import React from "react";

interface Skill {
  id: number;
  category: string;
  description: string;
}

interface Technology {
  id: number;
  name: string;
}

const skills: Skill[] = [
  {
    id: 1,
    category: "Frontend Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    category: "Database Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    category: "Content Writing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    category: "Soft Skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 },
];

const technologies: Technology[] = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "NextJS" },
  { id: 5, name: "SQL" },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">
          What I Know <br />
          <span className="text-blue-500">My Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Skillset</h3>
            <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 
            </p>
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-primary p-4 rounded-lg shadow-md text-center"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-[#f6f6f6] p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold mb-2">{skill.category}</h3>
                <p className="text-gray-700">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
