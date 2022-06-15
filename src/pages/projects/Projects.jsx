import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidecontactbar from "../../components/sidecontactbar/Sidecontactbar";
import "animate.css";
// import { ProjectsData } from "../../components/ProjectsData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const projectsData = [
    {
      image: require("../../assets/img/nmn.png"),
      title: "Nerds-Meet-Nerds",
    },
    {
      image: require("../../assets/img/techitout.png"),
      title: "Tech-It-Out",
    },
    {
      image: require("../../assets/img/techitout.png"),
      title: "My Portfolio",
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

      <div className="border-2 border-red-500 flex justify-center flex-row space-x-4  h-screen   items-center ">
        <FaArrowAltCircleLeft onClick={prevSlide} className="w-20 h-20" />
        {projectsData.map((slide, i) => {
          return (
            <div key={i} className={i === current ? "slide active" : "slide"}>
              {i === current && (
                <div
                  className="
                animate__animated 
                animate__fadeIn
                w-fit border-2 border-blue-500 p-10 
                h-screen
                flex justify-center flex-col items-center space-y-2 "
                >
                  <h1 className="">{slide.title}</h1>
                  <img
                    src={slide.image}
                    alt=""
                    className="md:w-screen md:h-screen w-90 h-90"
                  />
                </div>
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight onClick={nextSlide} className="w-20 h-20" />
      </div>
    </div>
  );
}
