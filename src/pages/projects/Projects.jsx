import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
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
  FaDatabase,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

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
          <FaJs className="icon hover:text-yellow-300 hover:bg-black " />
          <FaHtml5 className="icon hover:text-blue-600 hover:bg-white" />
          <FaCss3Alt className="icon hover:text-blue-600 hover:bg-white" />
          <FaNode
            className="icon
          hover:text-green-500 hover:bg-black"
          />
          <FaBootstrap
            className="icon
           hover:text-violet-500 hover:bg-white"
          />
          <SiMysql
            className="icon
          hover:text-blue-600 hover:bg-white"
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
          <FaReact className="icon hover:text-cyan-500 hover:bg-slate-900" />
          <SiMongodb
            className="icon
          hover:text-green-500 hover:bg-white"
          />
          <FaSass
            className="icon
          hover:text-pink-500 hover:bg-white"
          />
          <FaNode
            className="icon
          hover:text-green-500 hover:bg-black"
          />
          <FaBootstrap
            className="icon
          hover:text-violet-500 hover:bg-white"
          />
          <FaDatabase className="icon" />
        </div>
      ),
      site: "https://techitout-deploy.herokuapp.com/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      title: "My Portfolio",
      info: "",
      links: " https://github.com/Emily-MVaz/tech-it-out",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      title: "Coming Soon",
      info: "",
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
    <div>
      <Navbar />
      {/* <Sidecontactbar /> */}

      <div className="border-2 border-red-500 flex    w-fit  h-fit mt-20  justify-center p-2 ">
        {projectsData.map((slide, i) => {
          return (
            <div key={i} className={i === current ? "slide active" : "slide"}>
              {i === current && (
                <div
                  className="
                animate__animated 
                animate__fadeIn
                w-fit border-2 border-blue-500 p-2 
             
                
                flex flex-col space-y-2 "
                >
                  <h1 className="text-center md:text-3xl text-xl underline">
                    {slide.title}
                  </h1>
                  <img
                    src={slide.image}
                    alt=""
                    className="
  
                  max-w-full h-auto"
                  />

                  <div className="border-2 border-red-500 flex flex-col  items-center   ">
                    <p className="text-justify p-2 text-xs md:text-base border-b-2 border-b-grey-500">
                      {slide.info}
                    </p>
                    <div className="flex flex-col  items-center ">
                      <div>
                        <h2 className="text-center md:text-3xl text-xl underline">
                          Technologies
                        </h2>
                        {slide.tech}
                      </div>

                      <div className="border-2 border-blue-500 flex-row flex items-center p-4 space-x-10">
                        <a
                          href={slide.links}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub
                            className="
      rounded-full
      h-6 w-6 md:h-12 md:w-12 mt-1  hover:animate-ping bg-white"
                          />
                        </a>
                        <a
                          href={slide.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="p-2 bg-blue-500">Live Demo</button>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-20">
                      Previous
                      <FaArrowAltCircleLeft
                        onClick={prevSlide}
                        className="w-10 h-10 md:w-16 md:h-16"
                      />
                      <FaArrowAltCircleRight
                        onClick={nextSlide}
                        className="w-10 h-10 md:w-16 md:h-16"
                      />
                      Next project
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
