import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { MdWork } from "react-icons/md";

interface Qualification {
  id: number;
  title: string;
  icon : JSX.Element;
  date: string;
  description: string;
  
}

const qualifications: Qualification[] = [
  {
    id: 1,
    title: "Apostolic Carmel Girls'",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "2018 - 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Equity Bank Limited",
    icon: <MdWork className="h-5 w-5"/>,
    date: "May '22 - Sept '22",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "ALX iSWE",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "Aug '23 - Nov '23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "ALX AI for Career Essentials",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "Mar '24 - May '24",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Power Learn Project",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "June - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "JKUAT",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "2022 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Qualifications: React.FC = () => {
    return (
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-8">
            Here's My <br /><span className="text-[#20247b]">Qualifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualifications.map((qualification) => (
              <div key={qualification.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block  text-secondary py-1 px-3 rounded-full text-xs font-bold">
                  {qualification.icon}
                  </span>
                  <span className="inline-block bg-blue-100 text-[#20247b] py-1 px-3 rounded-full text-xs font-bold">
                  {qualification.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{qualification.title}</h3>
                <p className="text-gray-700">{qualification.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Qualifications;
 
  
