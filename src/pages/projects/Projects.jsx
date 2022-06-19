import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

import "animate.css";
// import { ProjectsData } from "../../components/ProjectsData";
import "../../index.css";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaGithub,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const projectsData = [
    {
      image: require("../../assets/img/nmn.png"),
      title: "Nerds-Meet-Nerds",
      info: "N-M-N is a dating app for us nerds where you can match and have 'LIVE' chats with other fellow nerds you match with.",
      links: "https://github.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds",
      tech: (
        <div className="flex-row flex space-x-10 mt-2">
          <FaJs className="icon text-yellow-300 bg-black " />
          <FaHtml5 className="icon text-orange-600 bg-white" />
          <FaCss3Alt className="icon text-blue-600 bg-white" />
          <FaNode
            className="icon
          text-green-500 bg-black"
          />
          <FaBootstrap
            className="icon
           text-violet-500 bg-white"
          />
          <SiMysql
            className="icon
          text-blue-600 bg-white"
          />
        </div>
      ),
      site: "https://nerds-meet-nerds.herokuapp.com/",
    },
    {
      image: require("../../assets/img/techitout.png"),
      title: "Tech-It-Out",
      info: "Tech-it-Out is a user-friendly app. Its sole purpose is to create an environment that beginner developers can visit to utilize a collection of web-development resources.",
      links: " https://github.com/Emily-MVaz/tech-it-out",
      tech: (
        <div className="flex-row flex space-x-10 mt-2">
          <FaReact className="icon text-cyan-500 bg-slate-900" />
          <SiMongodb
            className="icon
          text-green-500 bg-white"
          />
          <FaSass
            className="icon
          text-pink-500 bg-white"
          />
          <FaNode
            className="icon
          text-green-500 bg-black"
          />
          <FaBootstrap
            className="icon
          text-violet-500 bg-white"
          />
        </div>
      ),
      site: "https://techitout-deploy.herokuapp.com/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      title: "My Portfolio",
      info: "This is my portfolio that shows my skills and projects that I made.",
      links: " https://github.com/GustavoTijerino1/best_dev_4u",
      tech: (
        <div className="flex-row flex space-x-10 mt-2">
          <FaReact className="icon text-cyan-500 bg-slate-900" />
          <SiTailwindcss
            className="icon
              
            text-blue-500 bg-white"
          />
        </div>
      ),
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      title: "Coming Soon",
      info: "New Project under the works.",
      links: " https://github.com/GustavoTijerino1",
    },
  ];

  const length = projectsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="project-bg">
      <Navbar />

      <div className="  p-2  mt-16 ">
        {projectsData.map((slide, i) => {
          return (
            <div key={i} className={i === current ? "slide active" : "slide"}>
              {i === current && (
                <div
                  className="
                animate__animated 
                animate__fadeIn
                flex flex-col space-y-2
                h-auto md:h-full 
                text-white
               "
                >
                  <h1 className="text-center md:text-3xl text-xl ">
                    {slide.title}
                  </h1>
                  <img
                    src={slide.image}
                    alt="Project Screenshot"
                    className="
  
                     h-full w-full"
                  />

                  <div className=" flex flex-col  items-center   ">
                    <p className="text-justify p-2 text-xs md:text-base bg-purple-400">
                      {slide.info}
                    </p>
                    <div className="flex flex-col  items-center ">
                      <div className="flex items-center flex-col">
                        <h2 className="text-center md:text-3xl text-xl underline">
                          Technologies
                        </h2>
                        {slide.tech}
                      </div>

                      <div className=" flex-row flex items-center p-4 space-x-10">
                        <FaArrowAltCircleLeft
                          onClick={prevSlide}
                          className="w-10 h-10 md:w-16 md:h-16 text-purple-400 hover:text-purple-700 hover:bg-white rounded-full"
                        />
                        <a
                          href={slide.links}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub
                            className="
                            text-black
      rounded-full
      h-6 w-6 md:h-12 md:w-12 mt-1  hover:animate-ping bg-white"
                          />
                        </a>
                        <a
                          href={slide.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className="p-2 bg-blue-500 rounded hover:bg-blue-700 
                          hover:border-2 hover:border-blue-200"
                          >
                            Live Demo
                          </button>
                        </a>

                        <FaArrowAltCircleRight
                          onClick={nextSlide}
                          className="w-10 h-10 md:w-16 md:h-16 text-purple-400 hover:text-purple-700 hover:bg-white rounded-full "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
