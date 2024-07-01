import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="bg-slate-50">
      <div className="pt-4 mx-auto h-screen max-w-screen-xl flex items-center justify-between">
        <div className="w-1/3">
          <img src="/profile.png" alt="profile" className="rounded-full" />
        </div>
        <div className="w-2/3">
          <h1 className="font-bold text-3xl">
            Hi, I am <span className="text-[#00df9a]">
            <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Sherile Cheptoo")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Software Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                }}
            /></span>
          </h1>
          <h2 className="text-2xl font-bold py-4">
            Nairobi, Kenya
          </h2>
          <p>
            Software engineers apply engineering principles and knowledge of
            programming languages to build software solutions for end users.
            Software engineers design and develop computer games, business
            applications, operating systems, network control systems, middleware,
            etc.
          </p>
          <div className="py-4">
            <div className="flex gap-4">
              <a href="#contact">
              <button className="text-white rounded-full w-32 h-12 font-bold bg-[#00df9a]">
                Get in touch
              </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1zLdbfQTGh1AUuWHhcczM3Dl74wKys-r7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="text-white bg-[#00df9a] rounded-full w-32 h-12 font-bold flex items-center px-5 gap-2">
                Resume <FaArrowDown />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
