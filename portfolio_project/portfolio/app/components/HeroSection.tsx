import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-6 gap-2 bg-primary ">
           <div>
            <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img
                src="/images/profile.jpg"
                alt="hero image"
                className="absolute inset-0 object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="text-center pb-14 mt-6">
            <h1 className="text-heading mb-4  font-bold ">
              <span className=" text-3xl sm:text-2xl lg:text-5xl">Hi, I&apos;m Gwendolyn <br /> Amanda.</span>
            </h1>
            <p className='text-[#adb7bed5] text-2xl lg:text-4xl font-normal'>Web Developer</p>
            <p className="text-[#ADB7BE] mb-6 text-base  sm:text-lg lg:text-lg">
            I bring creative ideas and technical expertise to life. <br /> I am dedicated to delivering exceptional results through <br /> strategic thinking and meticulous attention to detail.
            </p>
            <div className="flex space-x-4 mt-2 justify-center">
            <Link href="https://github.com/ama-lyn" target="_blank" aria-label="GitHub">
              <FaGithub className="text-4xl hover:text-secondary text-gray-500 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/gwendolynamanda/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="text-4xl hover:text-secondary text-blue-500 transition duration-300" />
            </Link>
          </div>
          </div>
        </section>
    );
};

export default HeroSection
