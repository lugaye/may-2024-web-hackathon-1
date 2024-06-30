import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-6 gap-6 bg-primary ">
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
          <div className="text-center pb-14">
            <h1 className="text-black mb-4  font-extrabold ">
              <span className=" text-3xl sm:text-2xl lg:text-5xl">Hi, I&apos;m Gwendolyn Amanda.</span>
            </h1>
            <p className='text-black text-2xl lg:text-4xl font-medium'>Web Developer</p>
            <p className="text-[#ADB7BE] mb-6 text-base  sm:text-lg lg:text-lg">
            I bring creative ideas and technical expertise to life.
            </p>
          </div>
        </section>
    );
};

export default HeroSection
