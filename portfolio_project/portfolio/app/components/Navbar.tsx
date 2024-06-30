"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handlenav = () => {
      setNavbarOpen(!navbarOpen);
    };
  
    return (
      <nav className="  bg-primary bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto p-8 ">
          <Link href="/" className="text-xl text-black font-semibold">
            Gwendolyn
          </Link>
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <Link href={"#home"}>
                <li className="ml-10 uppercase text-base text-black hover:text-secondary ">
                  Home
                </li>
              </Link>
              <Link href={"#about"}>
                <li className="ml-10 uppercase text-base text-black hover:text-secondary ">
                  About
                </li>
              </Link>
              <Link href={"#skills"}>
                <li className="ml-10 uppercase text-base text-black hover:text-secondary ">
                  Skills
                </li>
              </Link>
              <Link href={"#projects"}>
                <li className="ml-10 uppercase text-base text-black hover:text-secondary">
                  Projects
                </li>
              </Link>
            </ul>
          </div>
  
          {/* MOBILE... */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-2.5 py-1.5 border rounded border-secondary text-slate-200 hover:text-white hover:border-secondary"
              >
                <AiOutlineMenu className="h-4 w-4"/>
                
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-2.5 py-1.5 border rounded border-secondary text-slate-200 hover:text-white hover:border-secondary"
              >
                <AiOutlineClose className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
  
        <div>
          {navbarOpen ? (
            <ul className="flex flex-col py-4 items-center">
              <Link href="#home">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-[#ADB7BE] hover:text-black"
                >
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-[#ADB7BE] hover:text-black"
                >
                  About
                </li>
              </Link>
              <Link href="#skills">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-[#ADB7BE] hover:text-black"
                >
                  Skills
                </li>
              </Link>
              <Link href="#projects">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-[#ADB7BE] hover:text-black"
                >
                  Projects
                </li>
              </Link>
            </ul>
          ) : null}
        </div>
        <hr />
      </nav>
    );
  };

export default Navbar
