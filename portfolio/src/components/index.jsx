import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import logo from '/src/assets/images/mY_logo.png'
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";

export const Index = () =>{
    const [darkMode, setDarkMode] = useState(false);

    return(
        <>
        <div className={darkMode ? "dark" : ""}>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Francis</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Welcome to My Portfolio
            </h2>
           
            <p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:text-xl">
            I am a passionate and dedicated web developer, graphic designer, NOC specialist With a keen eye for detail and a commitment to excellence, I specialize in creating innovative and impactful solutions.

            Explore my projects, learn about my journey, and see how I can help bring your ideas to life.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="#"><AiFillTwitterCircle /></a>
              <a href="#"><AiFillLinkedin /></a>
              <a href="https://github.com/Fmakiad/"><AiFillGithub/></a>
              <a href="#"><AiFillFacebook /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={logo} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-gray-200 text-center text-2xl">
              About Me
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  text-gray-600 ">
               Educational Background
              </h3>
              <p className="py-2">
                Secondary Teachers Diploma in Computer Science
              </p>
              <h4 className="py-4 text-teal-600">I have also acquired the following skills</h4>
              <p className="text-gray-800 py-1">Teaching Methodology</p>
              <p className="text-gray-800 py-1">Communication Skills</p>
              <p className="text-gray-800 py-1">Mathematics</p>

              
              <p></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-600 ">
                Skills
              </h3>
              <p className="py-2">
               
              </p>
              <h4 className="py-4 text-teal-600">Programming Languages</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">TypeScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-600 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe Animate</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center ">My journey</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center dark:text-gray-200">
              Since the beginning of my journey as a  designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">and collaborated </span>
               with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8  text-center text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including logo design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover w-"
                width={"100%"}
                height={"100%"}
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                src={web6}
              />
            </div>
          </div>
          


<div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg p-5">
    <h2 className="text-lg text-center font-semibold text-gray-600 dark:text-white mb-2">Contact details</h2>
    <address className="relative bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
        <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
            Name <br />
            Email <br />
            GitHub <br />
            Phone Number
        </div>
        <div id="contact-details" className="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
            Francis Lungu <br />
            francislungu5@gmail.com<br />
            <a href="https://github.com/Fmakiad/">Fmakiad</a><br />
            +260 971 660 035
        </div>
        <button data-copy-to-clipboard-target="contact-details" data-copy-to-clipboard-content-type="textContent" data-tooltip-target="tooltip-contact-details" className="absolute end-2 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-contact-details">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-contact-details" className="hidden inline-flex items-center">
                <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-contact-details" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-contact-details">Copy to clipboard</span>
            <span id="success-tooltip-message-contact-details" className="hidden">Copied!</span>
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </address>
</div>

        </section>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Francis™</a>. All Rights Reserved.</span>
      </main>
    </div>
        </>
    )
}