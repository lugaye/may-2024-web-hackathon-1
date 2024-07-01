import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-8 px-4 sm:py-14 xl:px-8 bg-white">
      <h2 className="text-3xl font-semibold text-heading text-center mb-8">
        About Me
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
        <div className="md:w-1/2">
          <p className="mt-4 text-gray-700">
            I am a junior web developer with a passion for creating impactful
            web applications. My expertise lies in HTML, CSS, JavaScript,
            NextJS, and SQL.
          </p>

          <p className="mt-4 text-gray-700">
            With a certification from the ALX iSWE program, I have honed my
            skills and gained valuable experience in software development. I'm a
            firm believer in continuous learning, so I actively participate in
            bootcamps and work on personal projects to stay sharp and
            innovative.
          </p>

          <p className="mt-4 text-gray-700">
            When I'm not coding, you'll likely find me with a good book in hand
            or attending tech meetups to connect with the developer community
            and stay inspired. This keeps me engaged and fosters a well-rounded
            perspective within the tech industry.
          </p>
          <br />
          <p className="text-secondary font-light italic ">
            “Coding with purpose building a better tomorrow”
          </p>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="text-black font-medium  hover:no-underline mt-4 inline-block"
          >
            <p className="underline underline-offset-8">Download Resume</p>
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 max-h-96 rounded-lg shadow-lg overflow-hidden blur-[3px] hover:blur-none">
          <img
            src="/images/about-image.jpg"
            alt="About Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
