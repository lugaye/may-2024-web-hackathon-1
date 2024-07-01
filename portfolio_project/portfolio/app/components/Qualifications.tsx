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
      "Secondary Education. Gained teamwork skills, leadership qualities, and a strong academic foundation.",
  },
  {
    id: 2,
    title: "Equity Bank Limited",
    icon: <MdWork className="h-5 w-5"/>,
    date: "May '22 - Sept '22",
    description:
      "Internship. Worked in the cash department, responsible for processing customer transactions, including deposits and withdrawals.",
  },
  {
    id: 3,
    title: "ALX iSWE",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "Aug '23 - Nov '23",
    description:
      "Introduced to web technologies, gaining foundational knowledge in frontend and backend development, and understanding of the software development lifecycle.",
  },
  {
    id: 4,
    title: "ALX AI for Career Essentials",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "Mar '24 - May '24",
    description:
      " Learned how to incorporate AI in the tech industry using Google technologies, presenting ideas, problem-solving, and leveraging AI for practical applications.",
  },
  {
    id: 5,
    title: "Power Learn Project",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "June - Present",
    description:
      "Software Development Course, Scholarship. Built web applications, integrated backend and database systems, and developed hands-on coding skills.",
  },
  {
    id: 6,
    title: "JKUAT",
    icon: <PiStudentBold className="h-5 w-5"/>,
    date: "2022 - Present",
    description:
      "Currently pursuing a Bachelor's degree in Mathematics and Computer Science. Studying advanced topics and enhancing analytical and programming skills",
  },
];

const Qualifications: React.FC = () => {
    return (
      <section id="qualifications" className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-lg font-light mb-8">
            Here&apos;s My <br /><span className="text-heading text-3xl font-bold">Qualifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualifications.map((qualification) => (
              <div key={qualification.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block  text-secondary py-1 px-3 rounded-full text-xs font-bold">
                  {qualification.icon}
                  </span>
                  <span className="inline-block bg-blue-100 text-heading py-1 px-3 rounded-full text-xs font-bold">
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
 
  
