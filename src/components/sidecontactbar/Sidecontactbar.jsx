import React from "react";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
export default function Sidecontactbar() {
  return (
    <aside
      className="fixed inset-x-0 bottom-0  
    md:mt-20
    md:h-fit md:w-fit md:right-0 md:inset-y-0 md:left-0 
   "
    >
      <ul
        className="md:space-y-20  md:mt-20 flex flex-row md:flex-col justify-center 
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
            h-8 w-8 mt-1  hover:animate-ping bg-white"
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
          <a href="/contact" rel="noopener noreferrer">
            <FaEnvelopeSquare
              className="
            bg-white
            rounded
            h-8 w-8 mt-1
            hover:motion-safe:animate-bounce"
            />
          </a>
        </li>
      </ul>
    </aside>
  );
}