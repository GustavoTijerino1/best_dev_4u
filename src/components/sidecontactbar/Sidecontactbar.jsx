import React from "react";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Sidecontactbar() {
  return (
    <aside
      className="fixed inset-x-0 bottom-0 
      bg-purple-900 
     md:bg-inherit p-2 md:w-fit
    md:right-0 md:inset-y-0 md:left-0 
    mt-10
   "
    >
      <ul
        className="md:space-y-14 md:h-screen flex 
       
        flex-row md:flex-col justify-center 
      md:space-x-0
      space-x-20  md:w-fit "
      >
        <li className="">
          <a
            href="https://github.com/GustavoTijerino1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="
            rounded-full
            h-8 w-8 mt-1  hover:animate-pulse bg-white"
            />
          </a>
        </li>
        <li className="">
          <a
            href="https://www.linkedin.com/in/gustavo-tijerino-203647224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              style={{ color: "blue" }}
              className="
            rounded
            bg-white
            h-8 w-8 
            mt-1
            hover:animate-spin"
            />
          </a>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelopeSquare
              className="
            bg-white
            rounded
            h-8 w-8 mt-1
            hover:motion-safe:animate-bounce"
            />
          </Link>
        </li>
      </ul>
    </aside>
  );
}
