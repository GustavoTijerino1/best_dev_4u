import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
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
      info: "A dating app designed specifically for 'nerds' of any type that allows a user to create a profile and 'like' or 'dislike' other users based on their pictures and bio. If a profile is “liked”, the user has the option to initiate a conversation via direct messages.",
      links: "https://github.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds",
      tech: (
        <div className="flex-row flex space-x-2 mt-2">
          <FaJs className="icon" />
          <FaHtml5 className="icon" />
          <FaCss3Alt className="icon" />
          <FaNode className="icon" />
          <FaBootstrap className="icon" />
          <SiMysql className="icon" />
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
        <div className="flex-row flex space-x-2 mt-2">
          <FaReact className="icon" />
          <SiMongodb className="icon" />
          <FaSass className="icon" />
          <FaNode className="icon" />
          <FaBootstrap className="icon" />
          <FaDatabase className="icon" />
        </div>
      ),
    },
    {
      image: require("../../assets/img/techitout.png"),
      title: "My Portfolio",
      info: "",
      links: " https://github.com/Emily-MVaz/tech-it-out",
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

      <div className="border-2 border-red-500 flex justify-center flex-row space-x-4   mt-20 md:mt-10  items-center ">
        <FaArrowAltCircleLeft
          onClick={prevSlide}
          className="w-40 h-40 md:w-20 md:h-20"
        />
        {projectsData.map((slide, i) => {
          return (
            <div key={i} className={i === current ? "slide active" : "slide"}>
              {i === current && (
                <div
                  className="
                animate__animated 
                animate__fadeIn
                w-fit border-2 border-blue-500 p-10 
                md:h-auto
                flex flex-col space-y-2 "
                >
                  <h1 className="text-center">{slide.title}</h1>
                  <img
                    src={slide.image}
                    alt=""
                    className="
  
                  max-w-full h-auto"
                  />

                  <div className="border-2 border-red-500 flex flex-col     ">
                    <p className="text-justify p-2 text-xs md:text-base border-b-2 border-b-grey-500">
                      {slide.info}
                    </p>
                    <div className="flex flex-row justify-center space-x-10">
                      <div>
                        <h2 className="text-center">Technologies</h2>
                        <div className="flex justify-start">{slide.tech}</div>
                      </div>
                      {/* <ul className="mb-6">
                      <li key={i} className="flex-row flex space-x-2">
                      {slide.tech}
                      </li>
                    </ul> */}
                      <div className="border-2 border-blue-500 flex-row flex space-x-10 p-4">
                        <a
                          href={slide.links}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub
                            className="
                          rounded-full
                          h-8 w-8 mt-1  hover:animate-ping bg-white"
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
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight
          onClick={nextSlide}
          className="w-40 h-40 md:w-20 md:h-20"
        />
      </div>
    </div>
  );
}
