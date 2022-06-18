import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <div className="boy">
      <Navbar></Navbar>

      <Sidecontactbar />

      <div className=" flex justify-center  flex-col space-y-4 items-center p-20">
        <div className="  rounded-full h-60 w-60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1608237652484-b478fac3bf7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-fit border-2 text-white border-blue-500 p-10 text-justify">
          <p className="mb-2 text-sm">
            As a Full-Stack Developer, I aspire nothing less than excellence and
            consistency. I am capable of delivering thoughtful, innovative
            solutions to clients and customers needs. Other than coding I love
            watching anime, playing games and going to music festivals with
            friends.
          </p>
        </div>
        <h2 className="text-white border-2">Technologies/Skills</h2>
        <div className="flex-row flex w-fit border-2 border-blue-500 p-6 flex-wrap  justify-between  space-x-4 ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJs
              className="icon
            hover:animate-pulse text-yellow-300 bg-black mb-2 "
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHtml5
              className="icon
            hover:animate-pulse text-orange-600 bg-white"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCss3Alt
              className="icon
            hover:animate-pulse text-blue-600 bg-white"
            />
          </a>
          <a
            href="https://dev.mysql.com/doc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMysql
              className="icon
              hover:animate-pulse
            text-blue-600 bg-white"
            />
          </a>
          <a
            href="https://reactjs.org/docs/getting-started.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact
              className="icon
              hover:animate-pulse text-cyan-500 
            bg-black "
            />
          </a>
          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMongodb
              className="icon
              hover:animate-pulse
            text-green-500 bg-white"
            />
          </a>
          <a
            href="https://sass-lang.com/documentation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSass
              className="icon
              hover:animate-pulse
            text-pink-500 bg-white"
            />
          </a>
          <a
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNode
              className="icon
              hover:animate-pulse
            text-green-500 bg-black"
            />
          </a>
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTailwindcss
              className="icon
              hover:animate-pulse
            text-blue-500 bg-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
