import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  FaReact,
  FaHome,
  FaSuitcase,
  FaFileAlt,
  FaSmile,
} from "react-icons/fa";
import "animate.css";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    // <>
    // fixed top-0 left-0 right-0 = movable navbar
    <header
      className="bg-gradient-to-br from-pink-500 to-orange-400  
      sticky top-0 
      z-50
        flex justify-between p-3 text-white
        sm:bg-white
        "
    >
      <div className="flex space-x-2 ">
        <FaReact className="h-10 w-10 animate-spin hover:animate-ping" />
        <a href="/">
          <h1 className="text-3xl font-bold underline  font-mono   hidden md:block">
            Gustavo Tijerino
          </h1>
        </a>
      </div>

      <div className="flex justify-center ">
        <a href="/">
          <h1 className="text-3xl  font-mono text-center  delay-75  md:hidden">
            G.T
          </h1>
        </a>
      </div>
      <div className="md:hidden relative">
        <button className="" onClick={() => setMenu(!menu)}>
          {menu && <XIcon className="h-6 w-6  animate-pulse mt-1" />}
          {!menu && <MenuIcon className="h-6 w-6 mt-1" />}
        </button>

        {menu ? (
          <nav
            className="
            animate__animated 
            animate__fadeIn
            border-2 border-rose-500  
                                absolute 
                                right-0
                                mt-4
                                bg-white 
                                rounded-lg py-2 shadow-2xl"
          >
            <Link
              to="/"
              className="block px-4 py-2 text-gray-800
                                    hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block 
                                    px-4 py-2 text-gray-800 hover:bg-blue-500"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500"
            >
              Projects
            </Link>

            <Link
              to="/resume"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500"
            >
              Resume
            </Link>
          </nav>
        ) : null}
      </div>

      <nav className="  hidden md:block">
        <ul className="flex space-x-10 p-1 mr-5">
          <li className="flex items-center border-2 border-rose-500  space-x-2 ">
            <FaHome className="" />
            <Link to="/" className=" hover:underline">
              Home
            </Link>
          </li>
          <li
            className="flex items-center 
          border-2 border-rose-500  space-x-2 "
          >
            <FaSmile className="" />
            <Link to="/about" className=" hover:underline">
              About
            </Link>
          </li>
          <li className="flex items-center border-2 border-rose-500  space-x-2 ">
            <FaSuitcase className="" />
            <Link to="/projects" className=" hover:underline">
              Projects
            </Link>
          </li>

          <li className="flex items-center border-2 border-rose-500  space-x-2 ">
            <FaFileAlt className="" />
            <Link to="/resume" className=" hover:underline">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    // </>
  );
}
