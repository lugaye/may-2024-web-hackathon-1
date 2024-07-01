import React from 'react';

function Experience() {
  const experienceData = [
    {
      icon: "/godan.png",
      company: "GODAN",
      position: "Software Engineer",
      duration: "May 2024 - Present",
      description: "Worked on various projects using React, Next.js, and Tailwind CSS."
    },
    {
      icon: "/harmosoft.jpeg",
      company: "Harmosoft",
      position: "UI/UX",
      duration: "March 2024 - Present",
      description: "Designed a mobile application for nutrition and body fitness."
    },
    {
      icon: "/equity.png",
      company: "Equity Bank Limited",
      position: "Digital Marketer",
      duration: "May 2022 - January 2024",
      description: "Interacted with the company's products like CRM."
    },
    {
      icon: "/kecher.png",
      company: "Kecher Africa",
      position: "Graphic Designer",
      duration: "March 2023 - April 2024",
      description: "Designed the organization's posters for their events."
    },
  ];

  return (
    <div className="py-10 flex flex-col items-center justify-center bg-slate-50 pt-28 pb-44" id='experience'>
      <div>
        <h1 className="text-3xl text-center font-bold text-[#00df9a]">Experience</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 py-6 gap-8 max-w-7xl mx-auto">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-lg w-72 h-auto p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img src={item.icon} alt={item.company} className="h-16 w-24 mb-4 object-contain" />
            <div className="text-center">
              <p className="flex flex-col items-center gap-2">
                <span className="text-lg text-[#00df9a] font-medium">{item.company}</span>
                <span className="text-sm text-gray-600">{item.duration}</span>
              </p>
              <h3 className="text-sm font-medium text-gray-600 mt-2">{item.position}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
