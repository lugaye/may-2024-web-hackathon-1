import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-8 sm:py-14 xl:px-8 bg-primary">
      <div className="bg-primary flex flex-col md:flex-row gap-9">
        <div className="md:w-1/2">
          <p className="font-bold text-6xl">
            Feel free to get <br /> in touch with me
          </p>
          <br />
          <p className="text-xl">
            I am always open to discussing new projects, <br /> creative ideas, or
            opportunities to be part of <br /> your story{" "}
          </p>
          <br />
          <p className="text-xl">
            Send me an email (I typically respond within a day {":) "})
          </p>
          <br />
          <p className="text-xl text-secondary">
            wilkistagwendolyn@gmail.com
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center ">
          <div className="h-72 w-full flex justify-center">
            <img src="/images/contact.png" alt="Contact Me" className="h-full object-cover" />
          </div>
          <p className="text-base mt-6 italic">Reach me on my socials</p>
          <div className="flex space-x-4 mt-2">
            <Link href="https://github.com/ama-lyn" target="_blank" aria-label="GitHub">
              <FaGithub className="text-5xl hover:text-secondary text-gray-500 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/gwendolynamanda/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="text-5xl hover:text-secondary text-blue-500 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="text-center text-sm">©2024 GwendolynAmanda. All rights reserved.</p>
    </section>
  );
};

export default Contact;
