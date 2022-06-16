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

      <div className="border-2 border-red-500 flex justify-center flex-row space-x-4 w-fit  h-fit md:h-auto mt-20  items-center p-2 ">
        {projectsData.map((slide, i) => {
          return (
            <div key={i} className={i === current ? "slide active" : "slide"}>
              {i === current && (
                <div
                  className="
                animate__animated 
                animate__fadeIn
                w-fit border-2 border-blue-500 p-2 
                items-center
                flex flex-col space-y-2 "
                >
                  <h1 className="text-center">{slide.title}</h1>
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
                        <h2 className="text-center">Technologies</h2>
                        <div className="flex ">{slide.tech}</div>
                      </div>

                      <div className="border-2 border-blue-500 flex-row flex items-center p-4 space-x-6">
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
                    <div className="flex flex-row space-x-10">
                      Previous
                      <FaArrowAltCircleLeft
                        onClick={prevSlide}
                        className="w-10 h-10 md:w-20 md:h-20"
                      />
                      <FaArrowAltCircleRight
                        onClick={nextSlide}
                        className="w-10 h-10 md:w-10 md:h-10"
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
