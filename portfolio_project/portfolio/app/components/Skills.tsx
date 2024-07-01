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
      "I possess strong expertise in frontend technologies, enabling me to craft responsive and user-friendly web applications. I believe in a design-first approach, crafting user interfaces before diving into development.",
  },
  {
    id: 2,
    category: "Database Design",
    description:
      "I have a solid understanding of database concepts gained through working with SQL. I'm actively expanding my knowledge in database design to explore more advanced techniques and tools.",
  },
  {
    id: 3,
    category: "Content Writing",
    description:
      "I leverage LinkedIn as a platform to share my tech journey, explain tech concepts, and offer insights on personal development in the tech industry.",
  },
  {
    id: 4,
    category: "Soft Skills",
    description:
      "I bring a collaborative spirit, effective communication skills, and a problem-solving mindset to the table. My creativity allows me to approach challenges with innovative solutions.",
  },
];

const technologies: Technology[] = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "NextJS" },
  { id: 5, name: "SQL" },
  { id: 6, name: "Python" },
  { id: 7, name: "Git" },
  { id: 8, name: "Figma" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-light mb-8">
          What I Know <br />
          <span className="text-heading text-3xl font-bold">My Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Skillset</h3>
            <p className="mb-8">
              Over the past 3 years, I've honed my skills in various areas and
              I'm constantly striving to learn and grow.
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
