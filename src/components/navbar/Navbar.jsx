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
import "./navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header
      className="bg-gradient-to-br from-purple-800 to-grey-500
      sticky top-0 
      z-50
        flex justify-between p-2 text-white
        
        "
    >
      <div className="flex space-x-2 ">
        <FaReact className="h-auto md:h-8 w-auto md:w-8 animate-spin hover:animate-ping" />
        <a href="/">
          <h1 className="text-2xl font-bold   name-hover   hidden md:block">
            ⌈G⌋ustavo ⌊T⌉ijerino
          </h1>
        </a>
      </div>

      <div className="flex justify-center ">
        <a href="/">
          <h1 className="text-xl name-hover text-center  delay-75  md:hidden">
            ⌈G⌋ ⌊T⌉
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
          <li className="flex items-center   space-x-2 ">
            <FaHome className="" />
            <Link to="/" className=" hover:underline">
              Home
            </Link>
          </li>
          <li
            className="flex items-center 
            space-x-2 "
          >
            <FaSmile className="" />
            <Link to="/about" className=" hover:underline">
              About
            </Link>
          </li>
          <li className="flex items-center   space-x-2 ">
            <FaSuitcase className="" />
            <Link to="/projects" className=" hover:underline">
              Projects
            </Link>
          </li>

          <li className="flex items-center   space-x-2 ">
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
