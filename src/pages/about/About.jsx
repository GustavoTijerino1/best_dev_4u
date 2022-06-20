import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export default function About() {
  const gustavo = require("../../assets/img/me.jpg");
  return (
    <div className="about-bg">
      <Navbar></Navbar>

      <Sidecontactbar />

      <div className=" flex justify-center  flex-col space-y-4 items-center p-20 h-auto ">
        <figure className="  rounded-full h-60 w-60 overflow-hidden">
          <img
            src={gustavo}
            alt="Gustavo Tijerino"
            className="object-cover h-full w-full"
          />
        </figure>
        <div className="text-white p-6 text-justify bg-purple-400">
          <p className="mb-2 text-sm">
            As a Full-Stack Developer, I aspire nothing less than excellence and
            consistency. I am capable of delivering thoughtful, innovative
            solutions to clients and customers needs. Other than coding I love
            watching anime, playing games and going to music festivals with
            friends.
          </p>
        </div>
        <h2 className="text-white underline">Technologies/Skills</h2>
        <div className="flex-row flex p-6   justify-between  space-x-4  ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJs
              className="icon
            hover:animate-pulse text-yellow-300 bg-black "
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
            href="https://reactjs.org/"
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
            <FaNodeJs
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
